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
//array que recorre el arreglo de rutas almacenado en products.route, crea todas las rutas de la app
// productsRoutes.forEach((route) => {
//   fastify.route(route)
// })
//plugin que elimina de este archivo el codigo comentario, el forEach pasa a estar en products.routes.js
fastify.register(productRoutes)

//aquí declararé u decorador con la función validateDuplicate del archivo hooks/validateDuplicate.js
//esto me permitirá utilizarlo en toda la API sin tener la necesidad de estar importandolo en cada archivo por separado
//solo necesitaré importarlo en este archivo
//fastify.decorate('validateDuplicate', validateDuplicate)
//                nombre a llamar     nombre de la función (o función anonima)

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
