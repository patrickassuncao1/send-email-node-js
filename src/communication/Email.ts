import { Request, Response } from "express";

import nodemailer from "nodemailer"

class Email {
    async sendEmail(request: Request, response: Response) {

        const { email, name, description } = request.body;

        const transporter = nodemailer.createTransport(({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMPT_PORT ? process.env.SMPT_PORT : ""),
            secure: false,
            auth: {
                user: process.env.SMPT_USERNAME,
                pass: process.env.SMPT_PASSWORD
            },
        }))

        try {
            await transporter.sendMail({
                from: "De " + name + " 👻 " + process.env.EMAIL,
                to: process.env.TO_EMAIL,
                subject: "Mensagem via site ✔",
                text: "sem Html",
                html: `<p> Nome: ${name} </p> <p> Email: ${email} </p> <p> Mensagem: ${description} </p>`
            });

            return response.json(
                { message: "Seu email foi enviado, em breve retornarei " }
            )
        } catch (error) {
            console.log(error)
            return response.json(
                { message: "Houver um erro a enviar seu email" }
            )
        }
    }
}

export { Email };