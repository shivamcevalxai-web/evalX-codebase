import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Check if email configuration is available
const isEmailConfigured = () => {
  return process.env.EMAIL_USER && process.env.EMAIL_PASS
}

// Email configuration
const createTransporter = () => {
  if (!isEmailConfigured()) {
    throw new Error('Email configuration not found. Please set EMAIL_USER and EMAIL_PASS environment variables.')
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// Email template
const createEmailTemplate = (data: any) => {
  const {
    name,
    company,
    email,
    phone,
    services,
    budget,
    currency,
    timeline,
    description,
    stack,
    industry,
    size,
    nda
  } = data

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request - EvalX AI</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #667eea; }
        .services { display: flex; flex-wrap: wrap; gap: 5px; }
        .service-tag { background: #667eea; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Quote Request</h1>
          <p>EvalX AI Portfolio Contact Form</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Contact Information</div>
            <div class="value">
              <strong>Name:</strong> ${name}<br>
              <strong>Company:</strong> ${company}<br>
              <strong>Email:</strong> ${email}<br>
              ${phone ? `<strong>Phone:</strong> ${phone}<br>` : ''}
              <strong>Company Size:</strong> ${size || 'Not specified'}
            </div>
          </div>

          <div class="field">
            <div class="label">🎯 Services Requested</div>
            <div class="value">
              <div class="services">
                ${services.map((service: string) => `<span class="service-tag">${service}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="field">
            <div class="label">💰 Budget & Timeline</div>
            <div class="value">
              <strong>Budget:</strong> ${currency} ${budget}<br>
              <strong>Timeline:</strong> ${timeline}
            </div>
          </div>

          <div class="field">
            <div class="label">📋 Project Details</div>
            <div class="value">
              <strong>Description:</strong><br>
              ${description.replace(/\n/g, '<br>')}
            </div>
          </div>

          ${stack ? `
          <div class="field">
            <div class="label">🛠️ Technical Preferences</div>
            <div class="value">
              <strong>Model/Tech Stack:</strong> ${stack}
            </div>
          </div>
          ` : ''}

          ${industry ? `
          <div class="field">
            <div class="label">🏢 Industry</div>
            <div class="value">
              <strong>Industry:</strong> ${industry}
            </div>
          </div>
          ` : ''}

          ${nda ? `
          <div class="field">
            <div class="label">🔒 NDA Request</div>
            <div class="value">
              <strong>NDA Requested:</strong> Yes
            </div>
          </div>
          ` : ''}

          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Review the project requirements</li>
              <li>Prepare a detailed quote</li>
              <li>Schedule a discovery call if needed</li>
              <li>Send response within 24 hours</li>
            </ul>
            <p><em>This email was sent from the EvalX AI portfolio contact form.</em></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'company', 'email', 'services', 'budget', 'timeline', 'description']
    const missingFields = requiredFields.filter(field => !data[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Check if email is configured
    if (!isEmailConfigured()) {
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact support or try again later.',
          details: 'EMAIL_USER and EMAIL_PASS environment variables are required'
        },
        { status: 503 }
      )
    }

    // Create transporter
    const transporter = createTransporter()
    
    // Prepare email content
    const emailHtml = createEmailTemplate(data)
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'evalx.aiofficial@gmail.com',
      subject: `New Quote Request from ${data.name} - ${data.company}`,
      html: emailHtml,
      replyTo: data.email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to the client
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Quote Request Received - EvalX AI</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .highlight { background: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Quote Request Received!</h1>
            <p>Thank you for choosing EvalX AI</p>
          </div>
          
          <div class="content">
            <p>Dear ${data.name},</p>
            
            <p>Thank you for your interest in our AI services! We've received your quote request and our team is already reviewing your project requirements.</p>
            
            <div class="highlight">
              <h3>📋 What happens next?</h3>
              <ul>
                <li><strong>Review:</strong> Our team will analyze your project requirements</li>
                <li><strong>Quote:</strong> We'll prepare a detailed proposal within 24 hours</li>
                <li><strong>Follow-up:</strong> We'll contact you to discuss the next steps</li>
              </ul>
            </div>
            
            <p><strong>Project Summary:</strong></p>
            <ul>
              <li><strong>Services:</strong> ${data.services.join(', ')}</li>
              <li><strong>Budget:</strong> ${data.currency} ${data.budget}</li>
              <li><strong>Timeline:</strong> ${data.timeline}</li>
            </ul>
            
            <p>If you have any questions or need to provide additional information, please don't hesitate to reach out to us at <a href="mailto:evalx.aiofficial@gmail.com">evalx.aiofficial@gmail.com</a>.</p>
            
            <p>Best regards,<br>
            <strong>The EvalX AI Team</strong></p>
          </div>
        </div>
      </body>
      </html>
    `

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Quote Request Received - EvalX AI',
      html: clientEmailHtml,
    }

    // Send confirmation email to client
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json(
      { 
        success: true,
        message: 'Quote request sent successfully! We will get back to you within 24 hours.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    // Return proper JSON error response
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send quote request. Please try again.',
        details: 'Please check your email configuration or contact support.'
      },
      { status: 500 }
    )
  }
}
