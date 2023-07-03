import { Request, Response } from "express"
//import { newVisitor } from "../interfaces/IVisitor";
import { User } from "../entity/User.entity";
import { newUser } from "interfaces/interfaces";
import { saveUser } from "../service/user.service";

export const saveNewUser = async(req:Request<unknown, 
    unknown, newUser>, res:Response) =>{

    const userBody = req.body;
    const userSaved = await saveUser(userBody);
    return res.status(201).json(userSaved);
};


export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    return res.status(200).json(users);
}
