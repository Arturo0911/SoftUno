import { Router } from "express";
import { saveNewUser, getUsers } from "../controllers/user.controller";


const router: Router = Router();

router.post("/", saveNewUser);
router.get("/", getUsers);

export default router;
