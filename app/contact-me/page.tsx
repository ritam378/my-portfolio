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
        I'm available for AI & Cloud Data consulting, data infrastructure design, and cloud architecture projects. 
        Furthermore, If you need a thought partner or technical writing support, I'd love to hear from you.
        
      </p>
      <p className="mb-4">
        You can reach out to me at{" "}
        <a href="mailto:ritam378@gmail.com" className="underline">
          ritam378@gmail.com
        </a>{" "}
        or by using the form below.
      </p>
      <p className="mb-6 font-bold">
        Prefer a direct conversation?{" "}
         <br />
        <a
          href="https://topmate.io/ritam_mukherjee/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Book a 1:1 session on Topmate
        </a>
        .
      </p>
      <Email />
    </div>
  );
}
