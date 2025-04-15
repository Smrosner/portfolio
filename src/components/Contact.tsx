import { ReactNode } from "react";

export default function Contact(): ReactNode {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="space-y-4">
        <p>
          <span className="font-semibold">Email: </span>
          <a href="mailto:shaymrosner@gmail.com" className="text-blue-500 hover:text-blue-700">
            shaymrosner@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">LinkedIn: </span>
          <a href="https://linkedin.com/in/shayrosner" className="text-blue-500 hover:text-blue-700">
            linkedin.com/in/shayrosner
          </a>
        </p>
        <p>
          <span className="font-semibold">GitHub: </span>
          <a href="https://github.com/smrosner" className="text-blue-500 hover:text-blue-700">
            github.com/smrosner
          </a>
        </p>
      </div>
    </div>
  );
}