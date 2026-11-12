import { Router } from "express";
import controller from "../../containers/produtos.container.js";

const router = Router()


router.get('/', controller.findManyPordutos)

export default router