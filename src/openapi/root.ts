export const rootSpec = `openapi: "3.1.0"
info:
  title: apis.meetgor.com
  description: >
    Root API hub. Lists all available API groups and their endpoints
    hosted under apis.meetgor.com.
  version: "1.0.0"
  contact:
    name: Meet Gor
    url: https://meetgor.com

servers:
  - url: https://apis.meetgor.com
    description: Production

paths:
  /:
    get:
      summary: List all APIs
      description: >
        Returns a directory of every API group available on this platform,
        with links to their documentation and endpoints.
      operationId: listApis
      tags:
        - Root
      responses:
        "200":
          description: API directory listing
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
                    example: apis.meetgor.com
                  version:
                    type: string
                    example: "1.0.0"
                  apis:
                    type: array
                    items:
                      type: object
                      properties:
                        name:
                          type: string
                        description:
                          type: string
                        path:
                          type: string
                        endpoints:
                          type: array
                          items:
                            type: string
`
