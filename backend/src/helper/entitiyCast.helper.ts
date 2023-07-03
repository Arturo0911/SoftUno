import { Visitor } from "../entity/Visitor.entity";


export const castVisitor = (visitorBody: any):Visitor=>{
    const newVisitor = new Visitor();
    newVisitor.credential = visitorBody.credential;
    newVisitor.fullName = visitorBody.fullName;
    newVisitor.departmentVisitor = visitorBody.departmentVisitor;
    //newVisitor.status = visitorBody.status;
    return newVisitor;
};
