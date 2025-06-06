const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, email, message, subject } = req.body;

    try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL,
      subject: subject,
      text: `You have received a message from ${name} (${email}):\n\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
}

module.exports = {
    sendEmail
}