import { Client } from "colyseus.js"

declare global {
  interface Window {
    colyseus: {
      client: Client
    }
  }
}