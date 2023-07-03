import { Request, Response, json } from "express"
import { newVisitor } from "../interfaces/interfaces";
import { castVisitor } from "../helper/entitiyCast.helper";
import { Visitor } from "../entity/Visitor.entity";

export const saveVisitor = async(req:Request<unknown, 
    unknown, newVisitor>, res:Response) =>{
    const visitorBody = castVisitor(req.body);
    const visitorSaved = await Visitor.save(visitorBody);
    return res.status(201).json(visitorSaved);
    
};


export const getVisitors = async (req: Request, res: Response) => {
    const visitors = await Visitor.find();
    return res.status(200).json(visitors);
}

export const getVisitorByFilter = async(req:Request, res:Response) =>{
    try{

        console.log(req.params);
        
        const {credential} = req.params;        
        const visitor = await Visitor.findOne({where: {credential: credential}});
        if (!visitor) return res.status(404).json({ "message": "Visitor not found" });
        return res.status(200).json(visitor)
    }catch(err){
        console.log(err);
        
        if (err instanceof Error){
            return res.status(500).json({"error":err});
        }
    }
}
