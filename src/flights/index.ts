const FLIGHTS_RAW_URL = "https://raw.githubusercontent.com/mr-destructive/flight-observatory/main/dashboard/data/latest.json"

interface Flight {
  timestamp: string
  icao24: string
  callsign: string
  airline: string
  origin_country: string
  lat: number | null
  lon: number | null
  altitude: number | null
  on_ground: boolean
  velocity: number | null
  heading: number | null
  airport: string
}

interface FlightQuery {
  callsign?: string
  airline?: string
  country?: string
  airport?: string
  search?: string
  altitude?: { min?: number; max?: number }
  speed?: { min?: number; max?: number }
  heading?: { min?: number; max?: number }
  bbox?: { south: number; west: number; north: number; east: number }
  on_ground?: boolean
  sort?: { field: string; order?: "asc" | "desc" }
  limit?: number
  offset?: number
  fields?: string[]
}

const SORT_FIELDS = ["altitude", "velocity", "heading", "callsign", "airline", "timestamp"]
const ALLOWED_ORDERS = ["asc", "desc"]
const FLIGHT_FIELDS = ["timestamp", "icao24", "callsign", "airline", "origin_country", "lat", "lon", "altitude", "on_ground", "velocity", "heading", "airport"]

async function fetchLatestFlights(): Promise<{ summary: Record<string, unknown>; flights: Flight[] }> {
  const response = await fetch(FLIGHTS_RAW_URL, {
    headers: { "user-agent": "apis.meetgor.com" },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch flight data: ${response.status}`)
  }
  const data = await response.json() as {
    summary: Record<string, unknown>
    flights: Flight[]
  }
  return data
}

function matchesFlight(flight: Flight, q: FlightQuery): boolean {
  if (q.callsign) {
    if (!flight.callsign.toLowerCase().includes(q.callsign.toLowerCase())) return false
  }
  if (q.airline) {
    if (!flight.airline.toLowerCase().includes(q.airline.toLowerCase())) return false
  }
  if (q.country) {
    if (!flight.origin_country.toLowerCase().includes(q.country.toLowerCase())) return false
  }
  if (q.airport) {
    if (flight.airport.toLowerCase() !== q.airport.toLowerCase()) return false
  }
  if (q.search) {
    const needle = q.search.toLowerCase()
    const haystack = [flight.callsign, flight.airline, flight.origin_country, flight.airport].join(" ").toLowerCase()
    if (!haystack.includes(needle)) return false
  }
  if (q.altitude) {
    const alt = flight.altitude
    if (alt === null) return false
    if (q.altitude.min !== undefined && alt < q.altitude.min) return false
    if (q.altitude.max !== undefined && alt > q.altitude.max) return false
  }
  if (q.speed) {
    const v = flight.velocity
    if (v === null) return false
    if (q.speed.min !== undefined && v < q.speed.min) return false
    if (q.speed.max !== undefined && v > q.speed.max) return false
  }
  if (q.heading) {
    const h = flight.heading
    if (h === null) return false
    if (q.heading.min !== undefined && h < q.heading.min) return false
    if (q.heading.max !== undefined && h > q.heading.max) return false
  }
  if (q.bbox) {
    const { south, west, north, east } = q.bbox
    if (flight.lat === null || flight.lon === null) return false
    if (flight.lat < south || flight.lat > north) return false
    if (flight.lon < west || flight.lon > east) return false
  }
  if (q.on_ground !== undefined) {
    if (flight.on_ground !== q.on_ground) return false
  }
  return true
}

export async function handleFlights(request: Request): Promise<Response> {
  const contentType = request.headers.get("Content-Type") || ""

  if (!contentType.includes("application/json")) {
    return Response.json(
      { error: "Content-Type must be application/json" },
      {
        status: 415,
        headers: { "Accept-Query": "application/json" },
      }
    )
  }

  let query: FlightQuery
  try {
    query = await request.json()
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON" },
      { status: 400 }
    )
  }

  if (typeof query !== "object" || query === null) {
    return Response.json(
      { error: "Query body must be a JSON object" },
      { status: 422 }
    )
  }

  if (query.limit !== undefined && (!Number.isInteger(query.limit) || query.limit < 1 || query.limit > 500)) {
    return Response.json(
      { error: "limit must be an integer between 1 and 500" },
      { status: 422 }
    )
  }

  if (query.offset !== undefined && (!Number.isInteger(query.offset) || query.offset < 0)) {
    return Response.json(
      { error: "offset must be a non-negative integer" },
      { status: 422 }
    )
  }

  if (query.sort) {
    if (!SORT_FIELDS.includes(query.sort.field)) {
      return Response.json(
        { error: `sort.field must be one of: ${SORT_FIELDS.join(", ")}` },
        { status: 422 }
      )
    }
    if (query.sort.order && !ALLOWED_ORDERS.includes(query.sort.order)) {
      return Response.json(
        { error: `sort.order must be one of: ${ALLOWED_ORDERS.join(", ")}` },
        { status: 422 }
      )
    }
  }

  if (query.fields) {
    const invalid = query.fields.filter(f => !FLIGHT_FIELDS.includes(f))
    if (invalid.length > 0) {
      return Response.json(
        { error: `Invalid fields: ${invalid.join(", ")}. Allowed: ${FLIGHT_FIELDS.join(", ")}` },
        { status: 422 }
      )
    }
  }

  if (query.bbox) {
    const { south, north, west, east } = query.bbox
    if (south < -90 || north > 90 || west < -180 || east > 180) {
      return Response.json(
        { error: "bbox coordinates out of range" },
        { status: 422 }
      )
    }
  }

  let data: { summary: Record<string, unknown>; flights: Flight[] }
  try {
    data = await fetchLatestFlights()
  } catch (e) {
    return Response.json(
      { error: "Failed to fetch flight data" },
      { status: 502 }
    )
  }

  const { summary, flights } = data
  let filtered = flights.filter(f => matchesFlight(f, query))

  if (query.sort) {
    const { field, order = "desc" } = query.sort
    const multiplier = order === "asc" ? 1 : -1
    filtered = [...filtered].sort((a, b) => {
      const aVal = (a as unknown as Record<string, unknown>)[field]
      const bVal = (b as unknown as Record<string, unknown>)[field]
      if (aVal === null && bVal === null) return 0
      if (aVal === null) return 1
      if (bVal === null) return -1
      return String(aVal).localeCompare(String(bVal), undefined, { numeric: true }) * multiplier
    })
  }

  const limit = query.limit ?? 50
  const offset = query.offset ?? 0
  const paginated = filtered.slice(offset, offset + limit)

  const selectedFields = query.fields
  const items = selectedFields
    ? paginated.map(flight => {
        const projected: Record<string, unknown> = {}
        for (const field of selectedFields) {
          projected[field] = (flight as unknown as Record<string, unknown>)[field]
        }
        return projected
      })
    : paginated

  return Response.json(
    {
      total: filtered.length,
      limit,
      offset,
      summary: {
        generated_at: summary.generated_at,
        total_flights: summary.total_flights,
        unique_airlines: summary.unique_airlines,
        unique_airports: summary.unique_airports,
        airborne: summary.airborne,
        on_ground: summary.on_ground,
      },
      items,
    },
    {
      headers: {
        "Accept-Query": "application/json",
        "Content-Type": "application/json",
      },
    }
  )
}
