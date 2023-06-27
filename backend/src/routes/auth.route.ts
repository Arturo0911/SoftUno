import { Router, Request, Response, json  } from "express";


const router: Router = Router();



router.get("/", (req:Request, res:Response)=>{
    res.json({"name":"dickers"});
});


router.post("/", (req:Request, res:Response)=>{
    res.json({"name":"post method baby"})
})
export default router;
