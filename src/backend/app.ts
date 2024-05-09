import fastify, { FastifyServerOptions } from 'fastify'

const routes = import.meta.glob<any>('./routes/**/*.ts', { eager: true })

export const createApp = (options?: FastifyServerOptions) => {
  const app = fastify(options)

  const routePrefix = '/api'
  for (const [key, route] of Object.entries(routes)) {
    if (typeof route.default !== 'function') {
      continue
    }
    const path = key.slice('./routes/'.length).split('/')
    app.register(route, { prefix: [routePrefix, ...path.slice(0, -1)].join('/') })
  }

  app.addHook('onRequest', (request, reply, done) => {
    console.info('Got request on:', request.url)
    done()
  })

  return app
}
