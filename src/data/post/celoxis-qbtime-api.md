---
title: Bi-Directional REST API - Celoxis and QBTime
excerpt: "Built a custom Python integration that synchronized timesheets between Celoxis and QBTime, eliminating third-party dependency costs."
image: "~/assets/images/Celoxis-QBTime.jpg"
---

## Designing a Bi-Directional REST API Between Celoxis and QBTime

While leading the Project Management team at EMA3D, our project portfolio had scaled to over $15M annually and required a dedicated project management platform. During implementation, I identified a critical limitation: Celoxis did not support integration with QBTime Desktop (only QB Online), which meant automated time synchronization was not possible.

A third-party vendor quoted us several thousands of dollars upfront plus annual maintenance fees, with a projected three-month implementation timeline. 

This became my opportunity to demonstrate my interest in software development, and I built the integration internally in two weeks.

## Custom API Creation
Without a direct integration:
- The only way to import time entries was through manual csv files that would take hours to create.
- Project managers risked mismatched billing data
- No sync existed between systems

We needed a reliable solution that:
- Pulled time entries from QBTime
- Mapped them correctly to Celoxis project/task hierarchies
- Avoided overwhelming staff with excessive task options
- Preserved reporting structure that existed in Celoxis
- Handled failures with ease so future project control teams without a coding background could at least pinpoint the issue.

## Architecture Overview
The solution was implemented as a Python REST integration using JSON payloads.

To ensure reliable synchronization, I created a standardized JSON string mapping layer that combined the hierarchy of:

Project → Task → Child Task

for all IDs that existed in Celoxis. The JSON allowed for automatic API calls when new tasks or projects were created, and handled splicing task names to map specific tasks in QBTime without creating unnecessary noise. Due to limitations in Celoxis, the project team would have needed to break out tasks by month. That would have forced staff to scroll through twelve nearly identical monthly task options. A headache indeed.

Instead, I designed the mapping to account for those behaviors on the backend, minimizing changes for staff. The same logic was applied in QBTime, ensuring data consistency across systems while eliminating excessive time entry options.

## Automated Daily Sync
The API pulls time entries from QBTime once per day and removes existing monthly time entries in Celoxis before submitting the newly mapped entries.

If a critical error occurs, the API resubmits the last successful batch of time entries and automatically emails staff with error details. For smaller errors, the issue is logged and skipped so that the successful portion of the batch still syncs to Celoxis.

This ensures Celoxis consistently reflects the most up-to-date time data without introducing downtime or disruption.

## Business Friendly Controls
I was mindful that the software developers at EMA have limited availability. To reduce long-term maintenance overhead, I added a CSV-based manual override layer with a simplified interface for business users.

If they need to adjust behavior for a specific task ID or modify mappings temporarily, they can do so without waiting for a developer to update the script. This gave the business team flexibility while keeping the system stable.

## Challenges and Growth
This was my first major project as a developer. At the time, my experience was primarily limited to foundational Python knowledge.

QBTime’s API documentation was sparse, requiring exploratory testing to understand how to reliably pull data. The data model differences between Celoxis and QBTime required careful transformation logic and extensive error handling for time codes.

Creating structured logs helped me isolate issues during data splicing and synchronization. In two weeks, I delivered a production-ready integration.

We avoided a high third-party quote from a vendor who was not confident in their implementation timeline. I believe I was able to execute quickly because I had already spent several months sandboxing Celoxis and deeply understanding how our project team operated.

Today, the script requires minimal maintenance. It reduced manual reconciliation work and improved billing accuracy. Previously, project managers complained that time submissions could take days to reconcile. Now, they can clearly see where their projects stand in terms of budget.

I learned that REST APIs are as much about system design as they are about endpoints. Having experience on the project management side and actively communicating with non-technical stakeholders, I directly improved the design of the integration. Understanding pain points before writing code made the solution more sustainable.

No single software tool has everything a company needs, but thoughtful integrations bridge those gaps.