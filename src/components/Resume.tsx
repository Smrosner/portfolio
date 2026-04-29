import { type JSX } from "react";

import { DownloadIcon } from "@/components/shared/Icons";
import Button from "@/components/ui/Button";
import { theme } from "@/styles/theme";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "CrowdCoursing",
    period: "October 2023 - Present",
    description: [
      "Built and shipped .NET backend features in C# with clean layering, automated tests, and tightened edge-case behavior.",
      "Owned and delivered 50+ full-stack features across React, TypeScript, and GraphQL for admin, instructor, and student workflows.",
      "Owned an end-to-end resume upload flow with strict client-side validation to protect user-entered data and backend services.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ByteBot",
    period: "May 2024 - Present",
    description: [
      "Reduced page load latency by 55% by removing request waterfalls and parallelizing independent fetches.",
      "Refactored Node.js and MongoDB money flows ahead of a 10k+ user launch to prevent rounding drift.",
      "Strengthened platform quality with robust Jest tests reaching 98% coverage.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Chelle.ai",
    period: "November 2023 - February 2024",
    description: [
      "Designed and delivered a real-time AI chat platform with encrypted data and secure session handling.",
      "Built onboarding and authentication flows with Next.js, Clerk, and Firebase.",
      "Implemented server-side session handling and API boundaries for user context, secrets, and message history.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Tensile Payments",
    period: "August 2021 - February 2022",
    description: [
      "Developed secure payment portal workflows with React and AWS Amplify.",
      "Performed WCAG 2.x accessibility audits, remediation, and post-audit checks.",
      "Achieved 87% test coverage with Jest, Enzyme, and Cypress using TDD principles.",
    ],
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".NET",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Docker",
  "Jest",
  "Cypress",
  "WCAG 2.x",
];

interface ResumeProps {
  compact?: boolean;
}

export default function Resume({ compact = false }: ResumeProps): JSX.Element {
  const visibleExperiences = compact ? experiences.slice(0, 3) : experiences;

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Experience
          </p>
          <h2 className={theme.typography.h2}>
            {compact ? "Experience Snapshot" : "Resume"}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href="/ShayRosnerResume.pdf"
            download="ShayRosnerResume.pdf"
            variant="ghost"
            leftIcon={<DownloadIcon size={18} />}
          >
            Download PDF
          </Button>
          {compact && (
            <Button href="/resume" variant="ghost">
              Full resume
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {visibleExperiences.map((exp) => (
          <article
            key={`${exp.title}-${exp.company}`}
            className={`${theme.components.card} ${theme.gradients.card}`}
          >
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className={`${theme.typography.h3} !mb-1`}>{exp.title}</h3>
                <p className="font-medium text-cyan-700 dark:text-cyan-300">
                  {exp.company}
                </p>
              </div>
              <p className={`${theme.colors.text.muted} md:text-right`}>
                {exp.period}
              </p>
            </div>
            <ul className="space-y-3">
              {exp.description.map((item) => (
                <li
                  key={item}
                  className={`${theme.typography.body} flex gap-3`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className={`${theme.components.card} ${theme.gradients.card}`}>
          <h3 className={`${theme.typography.h3} !mb-5`}>
            Core Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-950/70 dark:text-zinc-300 dark:ring-zinc-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
