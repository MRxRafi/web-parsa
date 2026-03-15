"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const consent = formData.get("consent");

  // Basic validation
  if (!name || !email || !message || !consent) {
    return { error: "Todos los campos son obligatorios, incluyendo el consentimiento." };
  }

  try {
    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email structure
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended to send from the authenticated user
      replyTo: email as string,
      to: "abogados@parsafathi.com",
      subject: `Nueva consulta web de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n\nConsentimiento RGPD: Aceptado`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #C5A059; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">Nueva Consulta Jurídica</h2>
          <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 0.8em; color: #888;">Este mensaje fue enviado desde el formulario de contacto de parsafathi.com</p>
          <p style="font-size: 0.8em; color: #888;">Consentimiento RGPD: <strong>Aceptado</strong></p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: "Mensaje enviado correctamente. Nos pondremos en contacto con usted a la mayor brevedad." };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { error: "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde o contacte directamente por teléfono." };
  }
}
