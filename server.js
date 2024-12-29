// Load environment variables
require('dotenv').config();

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, Images) from the 'assets' folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST route to handle contact form submission and send email
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Add your email here (from .env file)
      pass: process.env.EMAIL_PASS   // Add your email password here (from .env file)
    }
  });

  // Setup mail options
  const mailOptions = {
    from: 'surajnreddy020@gmail.com',  // Sender's email
    to: process.env.RECEIVER_EMAIL,  // Recipient's email (configured in .env)
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
