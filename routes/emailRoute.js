const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config(); 

// Create the transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER, 
        pass: process.env.APP_PASSWORD, 
    },
});

router.post('/sendbookingconfirmation', async (req, res) => {
    const { email, bookingDetails } = req.body;

    const mailOptions = {
        from: {
            name: 'Malika Hotel',
            address: process.env.USER, 
        },
        to: email,
        subject: "Booking Confirmation",
        text: `Your booking details: ${bookingDetails}\nမလိခကိုရွေးချယ်သည့်အတွက်အထူးပင်ကျေးဇူးတင်ရှိပါသည်။ `,
    };

    try {
        // Use await to ensure the email is sent before sending a response
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.log("Error occurred while sending email:", error);
        res.status(500).send('Error sending email');
    }
});



module.exports = router;
