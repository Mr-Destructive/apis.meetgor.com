export const mySpec = `openapi: "3.1.0"
info:
  title: My API
  description: >
    Personal information and content APIs. Provides access to Meet Gor's
    profile, newsletter archive, and other personal content.
  version: "1.0.0"
  contact:
    name: Meet Gor
    url: https://meetgor.com

servers:
  - url: https://apis.meetgor.com
    description: Production

tags:
  - name: My
    description: Personal profile endpoints
  - name: Newsletter
    description: Techstructive Weekly newsletter endpoints

paths:
  /my:
    get:
      summary: Get my info
      description: >
        Returns personal profile information including name, social handle,
        and website URL.
      operationId: getMyInfo
      tags:
        - My
      responses:
        "200":
          description: Profile information
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
                  description:
                    type: string
                  endpoints:
                    type: array
                    items:
                      type: object
                      properties:
                        path:
                          type: string
                        description:
                          type: string
                  info:
                    type: object
                    properties:
                      name:
                        type: string
                      handle:
                        type: string
                      website:
                        type: string
                        format: uri

  /my/newsletter:
    get:
      summary: List newsletters
      description: >
        Returns a paginated list of Techstructive Weekly newsletter entries.
        Automatically fetches from RSS if the database is empty.
      operationId: listNewsletters
      tags:
        - Newsletter
      parameters:
        - name: limit
          in: query
          description: Number of items per page (max 50)
          schema:
            type: integer
            default: 10
            maximum: 50
        - name: offset
          in: query
          description: Number of items to skip for pagination
          schema:
            type: integer
            default: 0
        - name: search
          in: query
          description: Search term to filter newsletters by title or description
          schema:
            type: string
        - name: sort
          in: query
          description: Field to sort by
          schema:
            type: string
            enum:
              - pub_date
              - title
              - id
            default: pub_date
        - name: order
          in: query
          description: Sort direction
          schema:
            type: string
            enum:
              - asc
              - desc
            default: desc
      responses:
        "200":
          description: Paginated list of newsletters
          content:
            application/json:
              schema:
                type: object
                properties:
                  total:
                    type: integer
                    description: Total number of matching items
                  limit:
                    type: integer
                  offset:
                    type: integer
                  items:
                    type: array
                    items:
                      $ref: "#/components/schemas/NewsletterSummary"

    post:
      summary: Refresh newsletter RSS
      description: >
        Triggers a re-fetch of the RSS feed from meetgor.com and stores
        any new items in the database. Duplicates are ignored.
      operationId: refreshNewsletter
      tags:
        - Newsletter
      responses:
        "200":
          description: Refresh completed
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Newsletter refreshed
                  count:
                    type: integer
                    description: Number of items fetched
        "405":
          description: Method not allowed. Use POST.

  /my/newsletter/{slug}:
    get:
      summary: Get newsletter by slug
      description: >
        Returns a single newsletter entry identified by its URL slug,
        for example "techstructive-weekly-97". The slug is the last
        segment of the newsletter's URL path.
      operationId: getNewsletterBySlug
      tags:
        - Newsletter
      parameters:
        - name: slug
          in: path
          required: true
          description: >
            The URL slug of the newsletter (e.g. techstructive-weekly-97)
          schema:
            type: string
      responses:
        "200":
          description: Full newsletter item with content
          content:
            application/json:
              schema:
                type: object
                properties:
                  item:
                    $ref: "#/components/schemas/NewsletterFull"
        "404":
          description: Newsletter not found

  /my/newsletter/stats:
    get:
      summary: Get newsletter stats
      description: >
        Returns aggregate statistics about the newsletter archive,
        including total count, earliest publication date, and latest
        publication date.
      operationId: getNewsletterStats
      tags:
        - Newsletter
      responses:
        "200":
          description: Newsletter statistics
          content:
            application/json:
              schema:
                type: object
                properties:
                  stats:
                    type: object
                    properties:
                      total:
                        type: integer
                        description: Total number of newsletter issues
                      earliest:
                        type: string
                        format: date-time
                        description: Date of the earliest newsletter
                      latest:
                        type: string
                        format: date-time
                        description: Date of the latest newsletter

components:
  schemas:
    NewsletterSummary:
      type: object
      description: Summary of a newsletter entry (without full content)
      properties:
        id:
          type: integer
        title:
          type: string
          description: Newsletter title
        link:
          type: string
          format: uri
          description: Original URL of the newsletter post
        description:
          type: string
          description: Short plain-text description
        type:
          type: string
          description: Content type (e.g. newsletter)
        pub_date:
          type: string
          description: Publication date in RSS format
        slug:
          type: string
          description: URL-friendly identifier

    NewsletterFull:
      type: object
      description: Full newsletter entry with complete markdown content
      allOf:
        - $ref: "#/components/schemas/NewsletterSummary"
        - type: object
            properties:
              content:
                type: string
                description: Full markdown content of the newsletter
              created_at:
                type: string
                description: Database creation timestamp
`
