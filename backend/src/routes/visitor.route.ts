import { Router } from "express";
import { getVisitorByFilter, getVisitors, saveVisitor } from "../controllers/visitor.controller";



const router:Router = Router();


// get information about the visitors
router.get("/", getVisitors);
router.get("/get-visitor/:credential", getVisitorByFilter);
router.post("/", saveVisitor);


export default router;
