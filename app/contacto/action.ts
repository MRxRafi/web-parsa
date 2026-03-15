"use server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const consent = formData.get("consent");

  // Basic validation
  if (!name || !email || !message || !consent) {
    return { error: "Todos los campos son obligatorios, incluyendo el consentimiento." };
  }

  // Simulated email sending logic
  console.log("Simulando envío de correo...");
  console.log("De:", name, `<${email}>`);
  console.log("Mensaje:", message);
  console.log("Consentimiento RGPD:", consent === "on" ? "Aceptado" : "No aceptado");

  // In a real scenario, you would use an SMTP transporter or an API like Resend here.
  // Example: await resend.emails.send({ ... });

  return { success: "Mensaje enviado correctamente. Nos pondremos en contacto con usted a la mayor brevedad." };
}
