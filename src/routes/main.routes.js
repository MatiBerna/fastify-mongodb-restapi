'use strict'

export async function routes(fastify, options) {
  fastify.decorate('util', (request, key, value) => {
    request[key] = value
  })

  fastify.addHook('preHandler', (request, reply, done) => {
    fastify.util(request, 'timestamp', new Date())
    console.log('SE EJECUTO EL HOOK CORRECTAMENTE')
    done()
  })

  fastify.get('/', async (request, reply) => {
    reply.send(request.timestamp)
  })
}
