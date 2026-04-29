"use client";

import { useState, type JSX } from "react";

import { MailIcon, GitHubIcon, LinkedInIcon } from "@/components/shared/Icons";
import Button from "@/components/ui/Button";
import { theme } from "@/styles/theme";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:shaymrosner@gmail.com",
    email: "shaymrosner@gmail.com",
    icon: <MailIcon className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/smrosner",
    icon: <GitHubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shayrosner",
    icon: <LinkedInIcon className="h-5 w-5" />,
  },
];

export default function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (
    e: React.MouseEvent<HTMLElement>,
    email: string,
  ): Promise<void> => {
    e.preventDefault();

    try {
      // Primary method: Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback method: execCommand
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section id="connect">
      <h2
        className={`${theme.typography.h2} text-zinc-900 dark:text-white !mb-6`}
      >
        Connect with me
      </h2>

      <div className="flex flex-wrap gap-3">
        {contactLinks.map((link) => (
          <Button
            key={link.href}
            href={link.href}
            variant="pill"
            isActive={link.label === "Email" && copied}
            onClick={
              link.email
                ? (e: React.MouseEvent<HTMLElement>): Promise<void> =>
                    handleEmailClick(e, link.email as string)
                : undefined
            }
            leftIcon={link.icon}
            className={`${theme.effects.hover} relative overflow-hidden transition-all duration-300`}
          >
            <span>
              {link.label === "Email" && copied ? "Copied!" : link.label}
            </span>

            {/* Animated progress bar for the "Copied!" state */}
            {link.label === "Email" && copied && (
              <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 animate-shrink" />
            )}
          </Button>
        ))}
      </div>
    </section>
  );
}
