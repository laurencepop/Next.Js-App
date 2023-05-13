import jwt, { JwtPayload } from "jsonwebtoken"
import { Types } from "mongoose"
import { cfg } from "./config.js"

const expire = 1000 * 60 * 60

export const createToken = (_id: Types.ObjectId) => {
    return jwt.sign({ _id }, `${process.env.SK}`, {
        issuer: cfg.host,
        algorithm: "HS256",
        expiresIn: expire,
    })
}

export const verifyToken = (v: string) => {
    //FIXME here check also base on time, if token still valid, time related
    const { _id } = jwt.verify(v, `${process.env.SK}`) as JwtPayload
    return _id
}

export const cookieSettings = {
    domain: "", //FIXME in production: domain.com
    path: "/",
    httpOnly: true,
    secure: true, //FIXME
    maxAge: expire,
    sameSite: "Lax", //FIXME in production: Strict, Lax, None
}
