# Email Setup Instructions

The contact form is now configured to send emails using Nodemailer. Follow these steps to complete the setup:

## 1. Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

## 2. Gmail Configuration

1. **Enable 2-Step Verification** on your Google account:

   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security > 2-Step Verification
   - Follow the setup process

2. **Generate App Password**:

   - In Google Account Settings > Security
   - Click "2-Step Verification"
   - Scroll down to "App passwords"
   - Select "Mail" and your device
   - Copy the 16-character password (no spaces)

3. **Update .env.local**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   COMPANY_EMAIL=hello@nexura.tech
   ```

## 3. Alternative Email Providers

If you don't want to use Gmail, you can configure other providers:

### Outlook/Hotmail

```javascript
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP

```javascript
const transporter = nodemailer.createTransport({
  host: "smtp.your-domain.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 4. Testing

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the notification

## 5. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables to your hosting platform
2. Ensure your email provider allows the deployment server's IP
3. Consider using a dedicated email service like SendGrid or AWS SES for better deliverability

## Troubleshooting

- **Authentication failed**: Double-check your App Password
- **Connection timeout**: Verify your internet connection and firewall settings
- **Emails not delivered**: Check spam folder, verify sender reputation
- **Development issues**: Check the browser console and terminal for error messages
