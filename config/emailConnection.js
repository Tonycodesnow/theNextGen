require('dotenv').config();


const mailSettings = {
    host: process.env.MAIL_NAME,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // needs to go in env
      pass: process.env.MAIL_PASSWORD, // needs to go in env
    }
  };


  module.exports= mailSettings;