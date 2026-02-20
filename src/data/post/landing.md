---
publishDate: 2025-02-19T00:00:00Z
title: 'Custom Project Management Software Tool Week 5'
excerpt: Updating database for projects and tasks. 
image: "~/assets/images/download.png"
tags:
  - landing-pages
  - front-end
  - resources
metadata:
  canonical: https://astrowind.vercel.app/landing
---

## What did you do last week?
I didn’t get as much done as planned since I was on vacation. I was originally going to start focusing on the UI, but decided to continue strengthening the backend data systems for financial tracking and task structure. 

I defined clearer data ownership rules (which columns are user controlled vs system calculated). For example, I started implementing logic for fields like total cost (user_time × hourly_rate). Since the timesheet isn't built yet, these values are currently defaulted to $0, but the structure is in place for future changes. I added database constraints for consistency across fields (dropdowns, dollar amounts, percentages, and state-based logic) to avoid errors since there are more rules in place.

Frontend, the user can now dynamically add columns to the projects table and remove columns that aren't needed. The system uses a visibility list instead of actually removing columns so users can eventually customize reports. The completed date field is also automatic where it populated based on when a project's state changes to "Completed". 

## What do you plan to do this week?
I plan to finish wiring the backend behavior so that I can start tying together projects and tasks. Tasks will have a lot of the same features as projects, but I need to separate shared data (like project manager) to avoid redundancy while other financial and scheduling features exist independently on both the project and task levels. Planning on getting rid of the free-text fields and start using IDs. 


## Are there any impediments in your way?
Currently it's missing parts like clients, users, workspace that aren't implemented yet. I have to be cautious that what I do have isn't going to be difficult to maintain later when these other dependencies are introduced. I’ve started writing unit tests for placeholder calculations to make sure the behavior works as wanted.


## Reflection on the process you used last week, how can you make the process work better?
Originally, I assumed I could build the system in isolated parts, but I’m realizing that backend dependencies make that approach more complex than expected. Many features depend on structures that don’t yet exist, which makes forward planning more frustrating. I plan on completing the relational dependencies earlier instead of delaying them one by one. 