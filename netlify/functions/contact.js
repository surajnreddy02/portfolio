// netlify/functions/contact.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    console.log("Received body:", event.body); // Log the request body
    const body = JSON.parse(event.body); // Try parsing the request body

    if (event.httpMethod === 'POST') {
      // Parse form data
      const { name, email, message } = body;

      // Create transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,  // Add your Gmail address here
          pass: process.env.EMAIL_PASS,  // Add your app password or Gmail credentials here
        }
      });

      // Set up mail options
      const mailOptions = {
        from: 'surajnreddy020@gmail.com',  // Sender's email
        to: process.env.RECEIVER_EMAIL,  // Receiver's email (where the message will be sent)
        subject: `Message from ${name}`,  // Subject of the email
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`  // Email body
      };

      // Send email
      try {
        await transporter.sendMail(mailOptions);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Email sent successfully!' })
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Error sending email' })
        };
      }
    } else {
      return {
        statusCode: 405,  // Method Not Allowed
        body: JSON.stringify({ message: 'Method Not Allowed' })
      };
    }
  } catch (error) {
    console.error("Error parsing JSON:", error.message);

    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON format. Please send valid JSON." }),
    };
  }
};
