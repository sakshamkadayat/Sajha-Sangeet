const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle POST requests to /api/send
app.post('/api/send', async (req, res) => {
  const { fullname, address, age, email, date, message, phone } = req.body.formData;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // Your Gmail email address
      pass: process.env.PASSWORD, // Your Gmail password
    },
  });

  // Create email message
  const mailOptions = {
    from: `"${fullname}" <${email}>`,
    to: process.env.EMAIL, // Your email address where you want to receive emails
    subject: 'New Appointment Mail from Shree Dental Website',
    html: `<p>Name: ${fullname}</p>
           <p>Address: ${address}</p>
           <p>Age: ${age}</p>
           <p>Client Contact Number: ${phone}</p>
           <p>Email Address: ${email}</p>
           <p>Choosen Date by Client: ${date}</p>
           <p>Message: ${message}</p>`,
  };

  // Send mail
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'fail' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
