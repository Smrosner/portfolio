interface WorkItem {
  date: string; // e.g. "2025-03-31"
  workItem: string; // short description
  minutes: number; // total minutes (e.g. 1h30m => 90)
  billable: boolean;
  meeting?: boolean;
  note?: string;
  paymentStatus?: "requested" | "received";
}

interface ProjectScope {
  id: string; // e.g. "scope-1"
  name: string; // e.g. "Initial Setup Phase"
  startDate: string; // e.g. "2025-03-01"
  endDate?: string; // e.g. "2025-03-31"
  workItems: WorkItem[];
}

interface Project {
  name: string;
  scopes: ProjectScope[];
}

export const projects: Project[] = [
  {
    name: "comfortCare",
    scopes: [
      {
        id: "cc-scope-1",
        name: "Therapist Patient Status Portal",
        startDate: "2025-03-31",
        workItems: [
          {
            date: "2025-03-31",
            workItem: "Intro call with Brian and team + solo chat with Smitty",
            minutes: 180, // 3 hours
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-01",
            workItem: "Added to Starting State Understanding Doc",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-04-02",
            workItem: "Architecture meeting + Smitty init repo preferences",
            minutes: 90, // 1.5 hours
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-03",
            workItem: "UI Style Guide",
            minutes: 300, // 5 hours
            billable: true,
          },
          {
            date: "2025-04-03",
            workItem: "Check in Meeting w/ Client",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-04",
            workItem: "Call with Smitty",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-04",
            workItem: "Basic UI work",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-04-07",
            workItem: "",
            minutes: 540, // 9 hours
            billable: true,
          },
          {
            date: "2025-04-08",
            workItem: "Full day meetings — retro + meeting prep and debrief",
            minutes: 240, // 4h
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-08",
            workItem: "Shared UI elements",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-04-09",
            workItem: "Nav bar, theme toggle, clerk user button",
            minutes: 180, // 3h
            billable: true,
          },
          {
            date: "2025-04-10",
            workItem: "SalesOrderTable | UI + Logic w/ Search and Pagination",
            minutes: 270, // 4h30m
            billable: true,
          },
          {
            date: "2025-04-11",
            workItem: "Friday meeting",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-11",
            workItem: "Debug to demo table",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-04-11",
            workItem: "Filter UI",
            minutes: 240, // 4h
            billable: true,
          },
        ],
      },
    ],
  },
  {
    name: "rhodes",
    scopes: [
      {
        id: "rhodes-scope-1",
        name: "Institution Logic and UI",
        startDate: "2025-02-10",
        endDate: "2025-04-04",
        workItems: [
          //
          // -- February 2025 --
          //
          {
            date: "2025-02-10",
            workItem: "New Sidebar",
            minutes: 30,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-11",
            workItem: "Sidebar with link pages",
            minutes: 15,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-12",
            workItem: "Institution Main Dashboard with dummy numbers",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-12",
            workItem: "Sidebar with link pages",
            minutes: 15,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-13",
            workItem: "Institution/Organization Information form",
            minutes: 40,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-13",
            workItem: "Fix onboarding reroute to institutional dashboard path",
            minutes: 15,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-14",
            workItem: "Stripe Placeholder",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-14",
            workItem: "Onramp Placeholder",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-14",
            workItem: "Institution Code Step (e.g. GOV123456789)",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-14",
            workItem: "Generate unique institution code",
            minutes: 40,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-17",
            workItem: "Welcome Admin Role Pending Placeholder",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-17",
            workItem: "Time to deploy UI changes",
            minutes: 40,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-17",
            workItem: "Calculate institutional total revenue",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-20",
            workItem: "Create institutions user role",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-20",
            workItem:
              "Add institution object to firebase (info, admin, license)",
            minutes: 20,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-20",
            workItem: "Institutional code saved as collection to Firebase",
            minutes: 20,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-20",
            workItem:
              "Add institution profile 'account' with form/institution info",
            minutes: 10,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-20",
            workItem: "Test, debug, and fix data to firebase",
            minutes: 60,
            billable: true,
            paymentStatus: "received",
          },
          {
            date: "2025-02-24",
            workItem:
              "Update /admin to /owner and separate owner dashboard for Aaron",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-02-25",
            workItem:
              "Shenole Call — Instructor/Institution/Course logic and UI",
            minutes: 180, // 3h
            billable: true,
            meeting: true,
          },
          {
            date: "2025-02-27",
            workItem: "Add institutional avatar logo to onboarding",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-02-27",
            workItem:
              "Add institution code to institution dashboard (copy/paste)",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-02-28",
            workItem:
              "Test institutional registration + dashboards + with redirect and owner user",
            minutes: 60,
            billable: true,
          },

          //
          // -- March 2025 --
          //
          {
            date: "2025-03-03",
            workItem: "Create confirm institutional code modal",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-03",
            workItem: "Add confirm inst. code modal to instructor registration",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-04",
            workItem: "Add array of institutional codes to firebase",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-04",
            workItem: "Instructor can belong to multiple institutions",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-04",
            workItem: "Add confirm inst. code modal on instructor dashboard",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-04",
            workItem: "Add instructional avatar default if null in firebase",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-05",
            workItem: "Meetings (non-billable)",
            minutes: 90,
            billable: true,
            meeting: true,
            note: "Wednesday meetings are non-billable but I billed this day",
          },
          {
            date: "2025-03-06",
            workItem: "Update app to new domain",
            minutes: 40,
            billable: true,
          },
          {
            date: "2025-03-07",
            workItem: "Add copy/past button to unique code ",
            minutes: 20,
            billable: true,
          },
          {
            date: "2025-03-11",
            workItem:
              "Instructor can select between public and institutional type for course creation",
            minutes: 40,
            billable: true,
          },
          {
            date: "2025-03-11",
            workItem: "Select Institution Instructor Course UI ",
            minutes: 40,
            billable: true,
          },
          {
            date: "2025-03-12",
            workItem: "Rhodes/Aurora call",
            minutes: 30,
            billable: true,
            meeting: true,
            note: "Meetings are now billable",
          },
          {
            date: "2025-03-13",
            workItem:
              "Persist institution code when instructor is creating course",
            minutes: 70,
            billable: true,
          },
          {
            date: "2025-03-13",
            workItem:
              "Fix styling for create course page with institution info on the top",
            minutes: 50,
            billable: true,
          },
          {
            date: "2025-03-13",
            workItem: "Chat with Shenole",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-03-14",
            workItem:
              "Add logo if institution course on instructor dashboard courses list on far side list item",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-14",
            workItem:
              "Save institution code and info to course details in firebase",
            minutes: 15,
            billable: true,
          },
          {
            date: "2025-03-18",
            workItem: "create a unique course code for each available seat",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-18",
            workItem:
              "Course can be created and saved to firebase with institutional course code",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-18",
            workItem:
              "Course code should have an expiration date that the instructor can choose",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-18",
            workItem:
              "Show code on instructor dashboard to copy/paste each code and send to individual student",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-19",
            workItem: "Rhodes meet with Shenole Chat",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-03-21",
            workItem:
              "Add inst. icon to course list in top right hand corner and inst. name on top",
            minutes: 40,
            billable: true,
          },
          {
            date: "2025-03-24",
            workItem:
              "Create modal on student course enroll click and verify code",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-24",
            workItem:
              "Mark the code as redeemed once a student enrolls in that course so it cannot be reused ",
            minutes: 40,
            billable: true,
          },

          {
            date: "2025-03-25",
            workItem:
              "Institution Instructor & Course Logic + UI code review/push",
            minutes: 165, // 2h45m
            billable: true,
          },
          {
            date: "2025-03-26",
            workItem:
              "Shenole Call — Rhodes Courses UI same as institution course",
            minutes: 90, // 1h30m
            billable: true,
            meeting: true,
          },
          {
            date: "2025-03-27",
            workItem:
              "Add rhodes code env to instructor registration & .env file",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-28",
            workItem:
              "Debug create course logic and styling fixes — calendar, initial seats, course upload review",
            minutes: 150, // 2h30m
            billable: true,
          },
          {
            date: "2025-03-28",
            workItem:
              "Add rhodes-specific UI to instructor dashboard/create course",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-28",
            workItem:
              "Add non-rhodes UI to 'codes' tab in instructor dashboard",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-03-28",
            workItem: "Code check student enroll to public + private",
            minutes: 30,
            billable: true,
          },
          {
            date: "2025-03-31",
            workItem:
              "Test on staging (institutional code check if RHODES and send failed message, message to Shenole on instructor requests )",
            minutes: 30,
            billable: true,
          },

          //
          // -- April 2025 --
          //
          {
            date: "2025-04-02",
            workItem:
              "Grading period logic + finishing inst. instructor staging",
            minutes: 60,
            billable: true,
          },
          {
            date: "2025-04-03",
            workItem: "Chat with Shenole grading period",
            minutes: 15,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-04",
            workItem:
              "Update Course Start/End with Hard Stop with Firebase Scheduler",
            minutes: 300, // 5h
            billable: true,
          },
        ],
      },
      {
        id: "rhodes-scope-2",
        name: "Aurora + Stripe Integration",
        startDate: "2025-04-07",
        workItems: [
          {
            date: "2025-04-07",
            workItem: "Rhodes missed billing from previous scopes",
            minutes: 120, // 2h
            billable: true,
          },
          {
            date: "2025-04-07", // work done 2025-03-26
            workItem: "Shenole Call — Aurora forwarder + Transak next scope",
            minutes: 90, // 1h30m
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-07", // work done 2025-04-01
            workItem:
              "Chat with Shenole — instructor application goes to each institution for approval +  move dashboard logic to next scope due to needing the wallet address to filter",
            minutes: 60,
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-10",
            workItem: "Fix number of seats logic in institution onboarding",
            minutes: 40,
            billable: true,
          },
          {
            date: "2025-04-10",
            workItem:
              "Chat with Shenole — scope items and smart contract review",
            minutes: 90, // 1 hour 30m
            billable: true,
            meeting: true,
          },
          {
            date: "2025-04-11",
            workItem:
              "Stripe API integration onto stripe step of institution onboarding flow",
            minutes: 120, // 2h
            billable: true,
          },
        ],
      },
    ],
  },
  {
    name: "kinstack",
    scopes: [
      {
        id: "kinstack-scope-1",
        name: "Project Initialization",
        startDate: "2025-04-08",
        workItems: [
          {
            date: "2025-04-08",
            workItem: "Kinstack Intro Meeting",
            minutes: 60,
            billable: true,
            meeting: true,
          },
        ],
      },
    ],
  },
];

// Utility functions for logging and analyzing work data
// export const workUtils = {
//   // Log basic info about all projects
//   logProjects: (): void => {
//     projects.forEach((project) => {
//       const name = project.name;
//       const numScopes = project.scopes.length;
//       const totalWorkItems = project.scopes.reduce(
//         (total, scope) => total + scope.workItems.length,
//         0
//       );
//       // const totalHours = (totalMinutes / 60).toFixed(1);
//       // const billableHours = (billableMinutes / 60).toFixed(1);
//       // const meetingHours = (meetingMinutes / 60).toFixed(1);

//       return {
//         name,
//         numScopes,
//         totalWorkItems,
//         // totalHours,
//         // billableHours,
//       };
//     });
//   },

// Log work items for a specific project
// logProjectWorkItems: (projectName: string): void => {
//   const project = projects.find((p) => p.name === projectName);
//   if (!project) {
//     console.log(`Project "${projectName}" not found`);
//     return;
//   }

//   console.log(`\n=== WORK ITEMS FOR ${projectName.toUpperCase()} ===`);
//   project.scopes.forEach((scope) => {
//     console.log(`\nScope: ${scope.name} (${scope.id})`);
//     console.log(
//       `Period: ${scope.startDate} to ${scope.endDate || "ongoing"}`
//     );

//     scope.workItems.forEach((item) => {
//       const hours = Math.floor(item.minutes / 60);
//       const mins = item.minutes % 60;
//       const timeStr =
//         hours > 0 ? `${hours}h${mins > 0 ? ` ${mins}m` : ""}` : `${mins}m`;

//       console.log(
//         `- ${item.date}: ${item.workItem} (${timeStr})${
//           item.meeting ? " [MEETING]" : ""
//         }`
//       );
//     });
//   });
// },

// Calculate and log analytics for a project
//   logProjectAnalytics: (projectName: string): void => {
//     const project = projects.find((p) => p.name === projectName);
//     if (!project) {
//       console.log(`Project "${projectName}" not found`);
//       return;
//     }

//     let totalMinutes = 0;
//     let billableMinutes = 0;
//     let meetingMinutes = 0;
//     let workItemCount = 0;
//     const dateSet = new Set<string>();

//     project.scopes.forEach((scope) => {
//       scope.workItems.forEach((item) => {
//         totalMinutes += item.minutes;
//         if (item.billable) billableMinutes += item.minutes;
//         if (item.meeting) meetingMinutes += item.minutes;
//         workItemCount++;
//         dateSet.add(item.date);
//       });
//     });

//     const totalHours = (totalMinutes / 60).toFixed(1);
//     const billableHours = (billableMinutes / 60).toFixed(1);
//     const meetingHours = (meetingMinutes / 60).toFixed(1);
//     const daysWorked = dateSet.size;

//     console.log(`\n=== ANALYTICS FOR ${projectName.toUpperCase()} ===`);
//     console.log(`Total hours: ${totalHours}h`);
//     console.log(
//       `Billable hours: ${billableHours}h (${(
//         (billableMinutes / totalMinutes) *
//         100
//       ).toFixed(1)}%)`
//     );
//     console.log(
//       `Meeting hours: ${meetingHours}h (${(
//         (meetingMinutes / totalMinutes) *
//         100
//       ).toFixed(1)}%)`
//     );
//     console.log(`Days worked: ${daysWorked}`);
//     console.log(`Work items: ${workItemCount}`);
//     console.log(
//       `Avg hours per day: ${(totalMinutes / 60 / daysWorked).toFixed(1)}h`
//     );
//   },

//   // Get summary of all projects
//   logSummary: (): void => {
//     console.log("\n=== PROJECTS SUMMARY ===");

//     const summary = projects.map((project) => {
//       let totalMinutes = 0;
//       let billableMinutes = 0;
//       const dates = new Set<string>();

//       project.scopes.forEach((scope) => {
//         scope.workItems.forEach((item) => {
//           totalMinutes += item.minutes;
//           if (item.billable) billableMinutes += item.minutes;
//           dates.add(item.date);
//         });
//       });

//       return {
//         name: project.name,
//         totalHours: (totalMinutes / 60).toFixed(1),
//         billableHours: (billableMinutes / 60).toFixed(1),
//         daysWorked: dates.size,
//       };
//     });

//     summary.forEach((proj) => {
//       console.log(
//         `${proj.name}: ${proj.totalHours}h (${proj.billableHours}h billable) across ${proj.daysWorked} days`
//       );
//     });
//   },
// };
