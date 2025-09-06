# Email Setup Guide for EvalX AI Portfolio

This guide will help you set up the email functionality for the contact form to send quote requests to `evalx.aiofficial@gmail.com`.

## Prerequisites

1. **Gmail Account**: You need access to `evalx.aiofficial@gmail.com`
2. **2-Factor Authentication**: Must be enabled on the Gmail account
3. **App Password**: Required for SMTP authentication

## Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with `evalx.aiofficial@gmail.com`
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process to enable 2FA

## Step 2: Generate App Password

1. In Google Account Security, go to **App passwords**
2. Select **Mail** as the app
3. Select **Other (custom name)** as the device
4. Enter "EvalX Portfolio" as the name
5. Click **Generate**
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 3: Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
# Email Configuration for EvalX AI Portfolio
EMAIL_USER=evalx.aiofficial@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

**Important**: Replace `your_16_character_app_password_here` with the actual app password from Step 2.

## Step 4: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact form on your website
3. Fill out the form with test data
4. Click "Request Quote"
5. Check both:
   - Your email (`evalx.aiofficial@gmail.com`) for the quote request
   - The client's email for the confirmation

## Email Features

### What happens when someone submits the form:

1. **Validation**: All required fields are validated
2. **Email to Company**: A detailed quote request is sent to `evalx.aiofficial@gmail.com`
3. **Confirmation Email**: An automatic confirmation is sent to the client
4. **Professional Templates**: Both emails use professional HTML templates

### Email Content Includes:

- **Contact Information**: Name, company, email, phone
- **Project Details**: Services requested, budget, timeline
- **Technical Requirements**: Project description, tech stack preferences
- **Business Context**: Industry, company size, NDA requests

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Verify the app password is correct
   - Ensure 2FA is enabled
   - Check that the email address is correct

2. **"Connection timeout"**
   - Check your internet connection
   - Verify Gmail SMTP settings are correct

3. **"Email not received"**
   - Check spam/junk folders
   - Verify the recipient email address
   - Check server logs for errors

### Debug Mode:

To see detailed error logs, check your terminal/console when testing the form submission.

## Security Notes

- Never commit the `.env.local` file to version control
- The app password is specific to this application
- Gmail SMTP uses TLS encryption for secure transmission
- Form data is validated before sending

## Production Deployment

For production deployment:

1. Set the environment variables in your hosting platform
2. Ensure the email credentials are properly configured
3. Test the email functionality in the production environment
4. Monitor email delivery rates

## Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Contact your hosting provider if SMTP is blocked

---

**Note**: This setup uses Gmail's SMTP service. For high-volume applications, consider using a dedicated email service like SendGrid, Mailgun, or AWS SES.
