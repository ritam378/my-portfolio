import Email from "app/components/email";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Ritam Mukherjee for Data Engineering consulting, collaboration, or technical writing opportunities.",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Get in touch
      </h1>
      <p className="mb-4">
        Open to collaborating on data infrastructure, cloud architecture, and AI projects. For project inquiries, technical writing partnerships, or general questions, feel free to reach out directly (<a href="mailto:ritam378@gmail.com" className="underline">
          ritam378@gmail.com
        </a>) or use the form below.         
      </p>
      <Email />
    </div>
  );
}
