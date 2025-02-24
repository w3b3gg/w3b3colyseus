import { Client } from "colyseus.js"

const client = new Client('/*%colyseusWs%*/')

globalThis.colyseus = {
  client
}