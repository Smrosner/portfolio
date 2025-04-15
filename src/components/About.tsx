import { ReactNode } from "react";

export default function About(): ReactNode {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="prose lg:prose-xl">
        <p>
          Hello! I'm a passionate developer with a keen interest in building
          meaningful web applications. I love solving complex problems and
          creating intuitive user experiences.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying outdoor activities.
        </p>
      </div>
    </div>
  );
}
