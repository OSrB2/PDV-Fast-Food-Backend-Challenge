import express from "express";
import { Router } from "express";


const router = Router();

router.get("/test", (req, res) => {
  return res.status(201).send();
});

export default router;
