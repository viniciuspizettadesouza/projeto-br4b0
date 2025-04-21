export async function sendWelcomeEmail(email: string, password: string) {
  // Aqui você pode integrar com Resend, Sendgrid, Mailjet, etc.
  console.log(`Enviar e-mail para ${email} com senha: ${password}`);
}
