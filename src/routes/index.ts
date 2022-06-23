import { Router } from "express";
import { Email } from "../communication/Email";
import { userSchema } from "../validation";
import { validationMiddleware } from "../validationMiddleware";

const route = Router();

const email = new Email();

route.post('/send-email', validationMiddleware(userSchema), email.sendEmail);

export { route };