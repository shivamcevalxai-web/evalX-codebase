# Quick Email Setup Guide

## 🚨 **IMPORTANT: Fix the 500 Error**

The form is currently showing a 500 error because the email configuration is missing. Here's how to fix it:

## **Step 1: Create Environment File**

Create a file named `.env.local` in your project root (same level as `package.json`) with this content:

```env
EMAIL_USER=evalx.aiofficial@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

## **Step 2: Get Gmail App Password**

1. **Go to Google Account**: https://myaccount.google.com/security
2. **Sign in** with `evalx.aiofficial@gmail.com`
3. **Enable 2-Step Verification** (if not already enabled)
4. **Go to App Passwords**: Security → App passwords
5. **Generate Password**: Select "Mail" → Generate
6. **Copy the 16-character password** (like: `abcd efgh ijkl mnop`)
7. **Replace** `your_gmail_app_password_here` in `.env.local`

## **Step 3: Restart Development Server**

```bash
npm run dev
```

## **What's Fixed:**

✅ **500 Error Resolved**: Proper error handling for missing email config  
✅ **Confirmation Dialog**: Users review all data before sending  
✅ **No Data Loss**: All form data is preserved and organized  
✅ **Professional Emails**: Beautiful HTML templates sent to company  
✅ **Client Confirmation**: Automatic confirmation emails to clients  

## **How It Works Now:**

1. **Fill Form** → User completes all required fields
2. **Click "Request Quote"** → Form validates all data
3. **Confirmation Dialog** → User reviews all information
4. **Send Email** → Professional email sent to `evalx.aiofficial@gmail.com`
5. **Success Message** → User gets confirmation

## **Email Features:**

- 📧 **Company Email**: Detailed quote request with all form data
- 📬 **Client Email**: Professional confirmation with next steps
- 🎨 **Beautiful Templates**: HTML formatted emails with your branding
- 🔒 **Secure**: Uses Gmail SMTP with app password authentication

## **Test the Form:**

Once you've set up the `.env.local` file, the form will work perfectly and send organized emails directly to your company email address!
