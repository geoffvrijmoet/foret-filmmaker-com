# Contact Form Setup

This document explains how to set up the contact form functionality for the Foret Filmmaker website.

## Email Configuration

The contact form uses Nodemailer with Gmail to send emails. To make this work, you need to:

1. Set up an App Password for your Gmail account
2. Configure the environment variables

### Setting up an App Password for Gmail

Since Google doesn't allow regular passwords for less secure apps, you need to create an App Password:

1. Go to your Google Account settings: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification" (you must have this enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other" as the device (name it "Foret Website")
6. Click "Generate"
7. Google will display a 16-character password. Copy this password.

### Configuring Environment Variables

Add the following variables to your `.env.local` file:

```
EMAIL_USER=hello@geoffvrijmoet.com
EMAIL_PASSWORD=your_app_password_here
```

Replace `your_app_password_here` with the App Password you generated.

## How It Works

1. The contact form collects the user's name, email, and message
2. When submitted, the form sends a POST request to the `/api/contact` endpoint
3. The server uses Nodemailer to send an email from `hello@geoffvrijmoet.com` to `foretfilmmaker@gmail.com`
4. The email includes the user's message and sets the Reply-To header to the user's email address

## Troubleshooting

If emails are not being sent:

1. Check that the App Password is correct
2. Verify that the Gmail account has not reached sending limits
3. Check the server logs for any error messages
4. Make sure the Gmail API is enabled in your Google Cloud Console

## Alternative Solutions

If you prefer not to use Gmail directly, consider these alternatives:

1. **SendGrid**: A transactional email service with a free tier
2. **Mailgun**: Another popular email service
3. **Formspree**: A form handling service that requires minimal setup
4. **AWS SES**: Amazon's email service (requires AWS account)

To implement any of these alternatives, you would need to modify the `/api/contact/route.ts` file to use the respective service's API. 