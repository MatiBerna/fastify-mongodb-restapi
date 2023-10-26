'use strict'
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export async function routes(fastify, options) {
  // encasulado de codigo, utilizo un register para crear un nuevo contexto de fastify para que el hook no se ejecute en todo el codigo
  fastify.register(async (fastify, opts, done) => {
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
  })
}
