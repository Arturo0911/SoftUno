import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';


export const checkJwt = (req: Request, res:Response, next:NextFunction)=>{
    const token = <string>req.headers["authorization"];
    let jwtPayload;
    const secret: string | any = process.env.SECRET_KEY;
    try{
        jwtPayload = <any> jwt.verify(token, secret);
    }catch(err){
        if (err instanceof Error){
            console.log(`error by: ${err}`)
            res.status(401);
            return 
        }
    }

    const {userId, email} = jwtPayload;
    const newToken = jwt.sign({userId, email}, secret, {
        expiresIn: "2h"
    });
    res.setHeader("token", newToken);

    next();
}
