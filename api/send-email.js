import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmailHandler = async (req, res) => {
  if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
    return res
      .status(500)
      .json({ code: 500, message: "Email credentials not configured" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.co.uk",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "david.fox@davidfoxdev.co.uk",
    to: "david.fox@davidfoxdev.co.uk",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export default sendEmailHandler;
