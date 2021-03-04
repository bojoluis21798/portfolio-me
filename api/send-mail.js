const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

module.exports = async (req, res) => {
  try {
    const { user_name, user_email, message } = req.body;

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from ${user_name}`,
      text: `
        ${message}
          \n\n\n\n
        Email: ${user_email}     
      `,
    });

    res.status(200).send("Email Sent");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
