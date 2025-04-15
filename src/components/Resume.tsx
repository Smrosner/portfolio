import { ReactNode } from "react";

export default function Resume(): ReactNode {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <header className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Shay Rosner</h2>
        <div className="flex flex-wrap gap-4 text-blue-600">
          <a
            href="mailto:shaymrosner@gmail.com"
            className="hover:text-blue-800"
          >
            shaymrosner@gmail.com
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/shayrosner"
            className="hover:text-blue-800"
          >
            linkedin.com/in/shayrosner
          </a>{" "}
          |
          <a href="https://github.com/smrosner" className="hover:text-blue-800">
            github.com/smrosner
          </a>
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Languages:</span> TypeScript,
            JavaScript, Python, SQL, Solidity
          </p>
          <p>
            <span className="font-medium">Frontend:</span> React, Next.js,
            React-Native, CSS, Tailwind CSS, SASS, Material-UI,
            Styled-Components, Bootstrap, React-Query, Zustand, Storybook,
            Clerk, Next Auth, HTML, jQuery
          </p>
          <p>
            <span className="font-medium">Backend/DevOps:</span> Node.js,
            Express.js, Django, Flask, GraphQL, MongoDB, PostgreSQL, MySQL,
            SQLite, Firebase, Supabase, Prisma, SQLAlchemy, Nginx, AWS (EC2,
            Elastic Beanstalk, Amplify), Vercel, Netlify, Docker, Git, Webpack,
            Yarn, Babel, Loader.io, K6, New Relic
          </p>
          <p>
            <span className="font-medium">Other Technologies:</span>{" "}
            Blockchain/Web3, Figma, Sketch, Accessibility UI, Cypress, Jest,
            Mocha, Chai, Dinero.js, BigNumber.js
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="text-xl font-medium">
              Consultant Software Engineer
            </h4>
            <p className="text-gray-600">May 2024 – Present</p>
          </div>
          <p className="font-medium mb-2">ByteBot, Contract Remote</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Developed multiple applications with desktop and mobile responsive
              design using TypeScript, React, Next.js, Tailwind CSS, SASS,
              Material-UI, and Firebase
            </li>
            <li>
              Implemented blockchain solutions with Solidity smart contracts for
              over 100 secure and transparent transactions and growing
            </li>
            <li>
              Leveraged Firebase for authentication, profile management, and
              data storage, streamlining backend processes
            </li>
            <li>
              Led a comprehensive Node.js backend refactoring to handle monetary
              values with greater precision, integrating Dinero.js and
              BigNumber.js for accurate financial computations – a key feature
              needed for a successful launch to over 10k new users
            </li>
            <li>
              Developed robust helper functions for data conversions and safe
              arithmetic operations and testing using Jest, achieving a 98% pass
              rate to ensure the accuracy of financial transactions
              post-refactor
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="text-xl font-medium">Senior Software Engineer</h4>
            <p className="text-gray-600">October 2023 – Present</p>
          </div>
          <p className="font-medium mb-2">CrowdCoursing, Remote</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Created 30+ responsive React components using Material-UI,
              ensuring a seamless experience across desktop and mobile
            </li>
            <li>
              Built a user notification system that increased app opens among
              active users by 25%, significantly boosting user engagement
            </li>
            <li>
              Implemented an organization dashboard using TypeScript, GraphQL,
              and React-Query to display and manage internal/external
              organization details
            </li>
            <li>
              Integrated backend services using openAPI for organization and
              notification creation, ensuring seamless functionality via GraphQL
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">
              Software Engineering Immersive
            </h4>
            <p>Hack Reactor, San Francisco, CA | August 2020 - April 2021</p>
          </div>
          <div>
            <h4 className="text-lg font-medium">Bachelors of Science</h4>
            <p>University of Florida, Gainesville, FL | 2011 - 2013</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Interests & Activities</h3>
        <p>
          DE&I— supporting under-represented groups in tech, community building,
          traveling, pickleball, painting, and petting fluffy dogs.
        </p>
      </section>
    </div>
  );
}
