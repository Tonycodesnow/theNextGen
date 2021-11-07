
const nodemailer = require("nodemailer");
const mailSettings = require('./../config/emailConnection')
let transporter = nodemailer.createTransport(mailSettings);

async function sendNotification(mailContent) {
    const info = await transporter.sendMail(mailContent);
    return info;
};


module.exports = sendNotification;