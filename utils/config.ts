// import * as dotenv from 'dotenv'
// dotenv.config()

const SRV = process.env.SV || ""

const OPT = {
    retryWrites: true,
    w: "majority",
    autoIndex: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    useNewUrlParser: true,
    family: 4,
}

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const HOST = process.env.HOST ? String(process.env.HOST) : "127.0.0.1"

export const cfg = {
    port: PORT,
    host: HOST,
    sv: SRV,
    opt: OPT,
}
