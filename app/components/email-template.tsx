import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  senderName,
  senderEmail,
  subject,
  message,
}) => (
  <div>
    <h1>Hey, {firstName}!</h1>
    <p>You got a new message from your portfolio contact form.</p>
    <table>
      <tbody>
        <tr>
          <td><strong>From:</strong></td>
          <td>{senderName}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{senderEmail}</td>
        </tr>
        <tr>
          <td><strong>Subject:</strong></td>
          <td>{subject}</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
