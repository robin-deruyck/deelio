import express from 'express'
import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { deelio, DeelioConfig } from '@/lib'

const app = express()

const config: DeelioConfig = {
  models: [
    {
      name: 'user',
      fields: { id: { type: 'string' } }
    }
  ]
}

deelio(config).registerDeelioRouter(app)

describe('deelio', () => {
  it("should send status code 200 and 'get all' message", async () => {
    app.listen(4000)
    const res = await request(app).get('/users')
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('get all')
  })
})
