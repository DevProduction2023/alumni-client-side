1. Introduction
Project Name: Alumni-Connect-Briging-Future
Project Description:
This project is an "Alumni Connect" platform designed to facilitate interaction between alumni and students. It includes features for job postings, alumni search, and user role-based access control (RBAC).

Position: Frontend Developer.

Responsibilities:
Developed the RBAC UI to ensure appropriate access levels for Admins, Alumni, and Students.
Implemented dynamic components for  managing user roles, job posting approvals.
Ensured responsive design and cross-browser compatibility using TailwindCSS.
Integrated API calls with backend endpoints for seamless role-based functionalities.

4. Key Features of the RBAC UI
Role-Based Views:
Admin:
This project is for College students which is managend by a Admin who can only create users like college students only can access this web application via email and password whcich college provide them after their registration.
Jobs-post: Admin and Alumni can post jobs and only they can be deleted by job poster admin can active and inactive a job post. An inActive job post will invisible to students.
Alumni: Post and manage job opportunities, view students.
Students: Access job postings and search alumni profiles.

Dynamic Role Assignment:
Admin: admin can change role of any users and can update thier details also.
Secure Authentication:
Managed through JWT Token and Using Database MongoDB-atlas for this project.

6. Accessing the Project
Repository Link: https://github.com/DevProduction2023/alumni-client-side
Live Deployment Link: https://alumni-client-side-a160vh9il-shivs-projects-0bdf001e.vercel.app

Access Login Details for Roles:
Admin: admin@gmail.com   / Pass@1234
///* refresh requierd after each login aspect admin their some bug needed to be fixed *///
///* working locally but their some bug at deployment time *///
Alumni: create and login / refresh required after login
Student: create and login / refresh required after login

8. Testing the RBAC UI
Admin Panel:
Log in as an Admin and test role management features.
Approve/delete a job posting.
Create a users and update thier role and details and can access this by login via details.

Alumni Panel:
Post a new job opportunity and edit or delete existing ones.

Student Panel:
Search for alumni and view job postings.

Expected Behavior:
Each role should only have access to its permitted features.

