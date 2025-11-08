import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, service, projectDetails } =
      await request.json();

    // Validate required fields
    if (!firstName || !email || !projectDetails) {
      return NextResponse.json(
        { error: "First name, email, and project details are required" },
        { status: 400 }
      );
    }

    const fullName = `${firstName}${lastName ? ` ${lastName}` : ""}`;

    // Determine recipient email based on service
    const getRecipientEmail = (service: string) => {
      const serviceUpper = service.toUpperCase();

      if (
        serviceUpper.includes("ECOMMERCE") ||
        serviceUpper.includes("E-COMMERCE")
      ) {
        return "ecommerce@nexurasolution.com";
      }

      if (
        serviceUpper.includes("WEB DEVELOPMENT") ||
        serviceUpper.includes("SEO") ||
        serviceUpper.includes("DIGITAL MARKETING") ||
        serviceUpper.includes("MOBILE APP") ||
        serviceUpper.includes("CLOUD") ||
        serviceUpper.includes("ANALYTICS")
      ) {
        return "it@nexurasolution.com";
      }

      // Default to info email
      return "info@nexurasolution.com";
    };

    const recipientEmail = getRecipientEmail(service || "");

    // Create transporter for Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "info@nexurasolution.com", // Your Hostinger email address
        pass: "?Info123", // Your Hostinger email password
      },
    });

    // Email content
    const mailOptions = {
      from: "info@nexurasolution.com",
      to: recipientEmail, // Dynamic recipient based on service
      subject: `New Contact Form Submission - ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${
              service || "Not specified"
            }</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #00d4ff; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Project Details</h3>
            <p style="line-height: 1.6; color: #555;">${projectDetails.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from the Nexura contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${fullName}
        Email: ${email}
        Company: ${company || "Not provided"}
        Service Interest: ${service || "Not specified"}
        
        Project Details:
        ${projectDetails}
        
        Sent at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
