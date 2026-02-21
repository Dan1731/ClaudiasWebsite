export type WeeklySection = {
  heading: string;
  paragraphs: string[];
  image?: any;
};

export type WeeklyEntry = {
  id: number;
  title: string;
  sections: WeeklySection[];
};

export const weeklyPosts: WeeklyEntry[] = [
  {
    id: 2,
    title: "Week 2",
    sections: [
        {
        heading: "What did I do last week?",
        paragraphs: [
          "Last week I spent time focusing on what my goals were for the project and explored a few different directions. I broke the idea into features and now I just need to decide which takes priority and which are needed to submit a quality project.",
          ]
        },

        { 
        heading: "What do I plan to do this week?",
        paragraphs: [
          "This week I plan to work on the website front page and explore how I want to structure the project as a website. A big part of my project is managing and creating data, since I want to be able to edit and move variables around depending on project information as I'm leaning towards creating a project management tool. I've been wanting to play around with SQL so I think I'll familiarize myself with the basics.",
        ],
        },

        { 
        heading: "Reflection",
        paragraphs: [
          "Looking back I could have pushed myself further by doing more than just outlining the proposal. I'm mentally still in break mood and it's been a struggle to fully shift back to focusing on classes.",
        ],
        },
    ],
  },
  {
    id: 3,
    title: "Week 3",
    sections: [
      {
        heading: "What did I do last week?",
        paragraphs: [
          "Last week I worked on setting up the overall structure of the website. I built out the sidebar layout, which shows the main features I want the project to have and will be how users navigate through the app. The Projects page is functional but still blank for now, and the Weekly Reports page works as a simple page to display these updates.",
          "I also started working on the SQL database. The main focus has been setting up tables to store project information, since projects are the largest piece of data in the system. From there, projects will eventually have child data like tasks. I also added tables for users and clients. I mostly experimented on my own, but I did look up some layout and icon ideas to speed things up instead of rebuilding everything from scratch. I also finally settled on a name for the website to make the project feel a little more real. I feel like I have completed a solid plan and decided how dependencies will affect each other.",
          ],
      },

      {
        heading: "What do I plan to do this week?",
        paragraphs: [
          "This week I plan to focus on the Projects tab and getting actual data to show up on that page. The first goal is to let users view a list of projects pulled from the database. The data will be pretty minimal at first, but it should help me practice connecting the UI to SQL and working with different data inputs. Once that’s working, I want to start letting users edit project information through the UI. Since the users and clients data will be pretty simple it'll allow me to focus more deeply on certain features that would connect with the workload calendar.",
          "Looking back, I think I spent a bit too much time focusing on how the front end looks instead of how everything works underneath. I enjoy UX design, but I don’t want to run into situations where I have to redo designs because the implementation changes.",
          "I'm glad I caught myself and transitioned my efforts into the SQL. Moving forward, I want to focus more on getting the backend and data flow solid first, and then come back and polish the UI once things are more stable. So for now, I just need to accept that the front end is doing to look very minimalistic as I start moving that data over.  .",
        ],
      },

      {
        heading: "Reflection",
        paragraphs: [
          "Looking back, I think I spent a bit too much time focusing on how the front end looks instead of how everything works underneath. I enjoy UX design, but I don’t want to run into situations where I have to redo designs because the implementation changes.",
          "I'm glad I caught myself and transitioned my efforts into the SQL. Moving forward, I want to focus more on getting the backend and data flow solid first, and then come back and polish the UI once things are more stable. So for now, I just need to accept that the front end is doing to look very minimalistic as I start moving that data over.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Week 4",
    sections: [
        {
        heading: "What did you do last week?",
        paragraphs: [
            "Last week I implemented the database structure for the project table. It currently contains 11 project attributes that users can track and update. I used SQLite with a Flask backend and connected it to the HTML frontend so users can create, edit, and delete projects directly from the table.",
            "Inline editing is implemented using POST API calls so that changes aren't getting lost before the page re-renders. Some fields are left intentionally not editable because they will be tied later to other financial and workload logic when timesheets are introduced.",
            "Here's an example of what it looked like after creating a project. I plan to have the create as a popup to better separate it from the data table.",
        ],
        image: "/images/week4.png",
        },
        {
            heading: "What do I plan to do this week?",
            paragraphs: [
                "I plan on introducing additional columns for tasks, financials, and user/clients. The main goal is to begin tying objects together using IDs and relational dependencies.",
                "After those relationships are created, I will implement the delete functionality, sorting, filtering, and keyword search. I also plan to improve the UI/UX to make the interface more pleasing before returning to deeper backend logic for workload modeling.",
            ],
        },
        {
            heading: "Reflection",
            paragraphs: [
                "SQL was a little challenging to implement at first specifically for how the database connects to the frontend. I wasn't sure how to make it so that edits didn't get lost when refreshing the page. I used POST APIs to make calls when an update occurred before the changes were re-rendered.",
                "Now that I'm not spending as much time trying to understand SQL, I think I can start making more visible progress to the project.",
            ],
        },
    ],
    },

  {
    id: 5,
    title: "Week 5",
    sections: [
      {
        heading: "What did you do last week?",
        paragraphs: [
          "I didn’t get as much done as planned since I was on vacation. I was originally going to start focusing on the UI, but decided to continue strengthening the backend data systems for financial tracking and task structure.",
          "I defined clearer data ownership rules (which columns are user controlled vs system calculated). For example, I started implementing logic for fields like total cost (user_time × hourly_rate). Since the timesheet isn't built yet, these values are currently defaulted to $0, but the structure is in place for future changes. I added database constraints for consistency across fields (dropdowns, dollar amounts, percentages, and state-based logic) to avoid errors since there are more rules in place.",
          "Frontend, the user can now dynamically add columns to the projects table and remove columns that aren't needed. The system uses a visibility list instead of actually removing columns so users can eventually customize reports. The completed date field is also automatic where it populated based on when a project's state changes to “Completed”.",
        ],
      },
      {
        heading: "What do you plan to do this week?",
        paragraphs: [
          "I plan to finish wiring the backend behavior so that I can start tying together projects and tasks. Tasks will have a lot of the same features as projects, but I need to separate shared data (like project manager) to avoid redundancy while other financial and scheduling features exist independently on both the project and task levels. Planning on getting rid of the free-text fields and start using IDs.",
        ],
      },
      {
        heading: "Are there any impediments in your way?",
        paragraphs: [
          "Currently it's missing parts like clients, users, workspace that aren't implemented yet. I have to be cautious that what I do have isn't going to be difficult to maintain later when these other dependencies are introduced. I’ve started writing unit tests for placeholder calculations to make sure the behavior works as wanted.",
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "Originally, I assumed I could build the system in isolated parts, but I’m realizing that backend dependencies make that approach more complex than expected. Many features depend on structures that don’t yet exist, which makes forward planning more frustrating. I plan on completing the relational dependencies earlier instead of delaying them one by one.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Week 6",
    sections: [
      {
        heading: "Summary",
        paragraphs: ["..."],
      },
    ],
  },
];