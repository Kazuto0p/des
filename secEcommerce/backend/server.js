import express from "express";
import path,{dirname,join} from 'path'
import url from 'url'
import Connection from "./connection.js";
import mobile_routes from "./router/mobile-routes.js";
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const frontend = path.join(__dirname,"..","frontend");

const app = express()

app.use(express.static(frontend))
app.use(express.json({limit:"50mb"}))

const port = 3000;


app.use('/api',mobile_routes)


Connection().then(()=>{

    app.listen(port, ()=>{
        console.log('server is running in http://localhost:3000');
    })

})

