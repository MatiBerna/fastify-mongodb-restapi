import Fastify from 'fastify'
import { request } from 'http'
import { productsRoutes } from './routes/products.routes.js'
import {} from './utils/db.js'

const fastify = Fastify({
  //para ver en consola las peticiones que llegan al servidor, entre otras cosas
  logger: true,
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

//array que recorre el arreglo de rutas almacenado en products.route, crea todas las rutas de la app
productsRoutes.forEach((route) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    /*mostrará el puerto en el que se esta corriendo el servidor, notar que fastify permite recuperar 
    informacion sobre el servidor*/
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
