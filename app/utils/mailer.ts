import chalk from "chalk"
import nodemailer, { SendMailOptions } from "nodemailer"
import Logger from "./logger.js"

export default async function sendEmail(payload: SendMailOptions) {
	let testAccount = await nodemailer.createTestAccount() //TODO neutralize!

	//FIXME add server email credentials
	await nodemailer
		.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465 & in production
			auth: {
				user: testAccount.user, //TODO replace in production
				pass: testAccount.pass, //TODO replace in production
			},
		})
		.sendMail(payload)
		.then((res) =>
			console.log(chalk.bgGreen(nodemailer.getTestMessageUrl(res)))
		)
		.catch((err) => Logger({ err }))
}
