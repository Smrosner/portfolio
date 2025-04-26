import { JSX } from "react";

import { theme } from "@/styles/theme";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "CrowdCoursing",
    period: "October 2023 - Present",
    description: [
      "Created 30+ responsive React components using Material-UI, ensuring seamless cross-device experience",
      "Built a user notification system increasing app engagement by 25%",
      "Implemented organization dashboard using TypeScript, GraphQL, and React-Query",
    ],
  },
  {
    title: "Consultant Software Engineer",
    company: "ByteBot",
    period: "May 2024 - Present",
    description: [
      "Developed multiple responsive applications using TypeScript, React, and Next.js",
      "Implemented blockchain solutions with Solidity smart contracts",
      "Led Node.js backend refactoring for precise financial computations",
    ],
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Tailwind CSS",
  "Material-UI",
  "AWS",
  "Docker",
];

export default function Resume(): JSX.Element {
  return (
    <section className={theme.layout.section.lg}>
      <h2 className={theme.typography.h2}>Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className={`${theme.components.card} ${theme.gradients.card} ${theme.effects.hover}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className={`${theme.typography.h3} mb-1`}>{exp.title}</h3>
                <p
                  className={`${theme.typography.small} ${theme.colors.accent.blue}`}
                >
                  {exp.company}
                </p>
              </div>
              <p className={`${theme.typography.small} md:text-right`}>
                {exp.period}
              </p>
            </div>
            <ul className="space-y-2 list-disc list-inside">
              {exp.description.map((item) => (
                <li key={item} className={theme.typography.body}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div
          className={`${theme.components.card} ${theme.gradients.card} mt-8`}
        >
          <h3 className={`${theme.typography.h3} mb-6`}>Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`${theme.components.button} ${theme.effects.glow}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
