const router = require('koa-router')()
const statichtml = require('./webHtml')
// const bundle = require("../dist/bundle")

// router.get('/', async (ctx, next) => {
//   ctx.header="text/html;charset-utf-8"
//   ctx.body =  statichtml
//   // await ctx.render('index', {
//   //   title: 'Hello Koa 2!'
//   // })
// })
// router.get('/dist',async (cts,next) => {
//   ctx.body = bundle
// })

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
