# Portfolio Website with Contact Form

This is a modern, responsive portfolio website built using HTML, CSS, and JavaScript. It features a dynamic contact form that allows users to send messages directly to your email. The backend functionality is implemented using Netlify Functions and Nodemailer, ensuring a serverless and secure solution.

---

## Features

- **Responsive Design**: Optimized for all screen sizes.
- **Dynamic Contact Form**: Users can send messages directly to your email.
- **Serverless Backend**: Email handling powered by Netlify Functions and Nodemailer.
- **Modern UI**: Clean, user-friendly design.

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js (Serverless via Netlify Functions)
- Nodemailer (Email handling)

### Hosting

- [Netlify](https://www.netlify.com/)

---

## Project Structure

```plaintext
.
├── index.html               # Main HTML file
├── style.css                # Styles for the website
├── main.js                  # JavaScript for frontend interactivity
├── netlify/functions        # Serverless functions for email handling
│   └── contact.js           # Function to handle email submission
├── assets/                  # Static assets like images and icons
└── README.md                # Project documentation
```

---

## Setup and Deployment

### Prerequisites

1. A Netlify account.
2. A Gmail account with an app password enabled.
3. Node.js and npm installed on your system.

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/surajnreddy02/portfolio.git
cd portfolio
```



2. Navigate to the serverless function directory and install dependencies:

```bash
cd netlify/functions
npm install
```

---

### Configuration

1. Create a `.env` file in the `netlify/functions` directory with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=recipient-email@gmail.com
```

2. Replace:

- `your-email@gmail.com` with your Gmail address.
- `your-app-password` with your Google App Password.
- `recipient-email@gmail.com` with the email address to receive form submissions.

---

### Deployment on Netlify

1. Push your project to a GitHub repository.
2. Log in to Netlify and create a new site.
3. Connect your GitHub repository to Netlify.
4. Deploy your site and ensure the serverless function in `netlify/functions/contact.js` is recognized.
5. Your site will be live with email functionality enabled.

---

## Usage

1. Visit your deployed portfolio website.
2. Go to the Contact section.
3. Fill out the form with your name, email, and message.
4. Submit the form. A confirmation message will appear, and the email will be sent to the configured recipient.

---

## Troubleshooting

- **500 Internal Server Error**: Ensure your `.env` file contains valid credentials and that it's correctly uploaded.
- **Email Not Sent**: Verify that:
  - Two-Step Verification is enabled on your Gmail account.
  - The app password is configured properly.
- **Netlify Deployment Issues**: Check that the function file is in the `netlify/functions` directory and review Netlify build logs for errors.

---

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/3f095495-215f-46c1-812a-8a887db0e907)

![image](https://github.com/user-attachments/assets/c5f562ed-ddeb-4f78-9477-08ecc04c2800)

### Contact Form

![image](https://github.com/user-attachments/assets/fb0ec477-0cd7-4acb-b2d6-4a5c4123e660)


---
## Author

Name: Suraj N Reddy 
Email: surajnreddy02pro@gmail.com  
Portfolio: https://tubular-hummingbird-ab952d.netlify.app/

Feel free to contact me for any questions or suggestions!
