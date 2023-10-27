'use strict'
import Fastify from 'fastify'
import { routes } from './routes/main.routes.js'
import { productRoutes } from './routes/products.routes.js'
import {} from './utils/db.js'

const fastify = Fastify({
  //para ver en consola las peticiones que llegan al servidor, entre otras cosas
  logger: true,
})

//            RUTAS
fastify.register(routes)

//encapsulado de código, lo que se modifique dentro de productRoutes NO se verá afectado en el index
fastify.register(productRoutes)

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
