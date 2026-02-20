const nodemailer = require("nodemailer");
const path = require("path");
const pug = require("pug");
const env = require("../config/env");

const transporter = nodemailer.createTransport({
  host: env.email.host,
  port: env.email.port,
  secure: env.email.secure,
  auth:
    env.email.user && env.email.pass
      ? {
          user: env.email.user,
          pass: env.email.pass,
        }
      : undefined,
});

const sendEmail = async ({ to, subject, html, text }) => {
  if (!to) {
    return null;
  }

  const mailOptions = {
    from: env.email.from,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

const renderTemplate = (templateName, data = {}) => {
  const templatePath = path.resolve(
    process.cwd(),
    "src/templates/emails",
    `${templateName}.pug`,
  );

  return pug.renderFile(templatePath, data);
};

module.exports = {
  sendEmail,
  renderTemplate,
};
