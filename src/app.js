import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

app.use(express.json({limit: "16kb"}))    // form data
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // files
app.use(express.static("public"))  // images and something else 
app.use(cookieParser())

export {app}