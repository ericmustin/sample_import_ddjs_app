'use strict'

import getTracer from "./tracer"
import getApp from "./app"

async function getServer() {
	getTracer().then( () => {
		getApp().then( (app) => {
			app.use("/", (req,res) => {
			  res.status(200).send("OK Testing")
			})

      app.set('port', 3000)
      
			const server = app.listen(3000, () => {
			  console.log(`🚀 User Service running ${app.get('port')}`);
			})
		})
	})
}

export default getServer()
