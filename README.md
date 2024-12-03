# Alumni-Connect-Bridging-Future

## Project Description
**Alumni Connect** is a platform designed to facilitate interaction between alumni and students, providing features like job postings, alumni search, and user role-based access control (RBAC). The platform allows users to access functionalities based on their roles, such as Admin, Alumni, and Student.

## Position: Frontend Developer

### Responsibilities:
- Developed the **RBAC UI** to ensure appropriate access levels for Admins, Alumni, and Students.
- Implemented dynamic components for managing user roles and job posting approvals.
- Ensured **responsive design** and **cross-browser compatibility** using **TailwindCSS**.
- Integrated **API calls** with backend endpoints for seamless role-based functionalities.

---

## Key Features of the RBAC UI

### 1. **Role-Based Views:**

- **Admin**:
  - Admin is the superuser who manages the entire platform. Only admins can create and manage users (students) who access the platform with their college-provided email and password.
  - **Job Postings**: Admin and Alumni can post jobs. However, only the job poster (Admin or Alumni) can delete a job post. Admin has the ability to **activate** and **deactivate** job posts, which determines visibility to students.

- **Alumni**:
  - Post and manage job opportunities.
  - View and interact with student profiles.

- **Students**:
  - Access job postings.
  - Search alumni profiles.

### 2. **Dynamic Role Assignment**:
- Admin can change the role of any user and update their details.

### 3. **Secure Authentication**:
- Authentication is managed via **JWT tokens**.
- The database used is **MongoDB Atlas** for storing user data.

---

## Accessing the Project

- **Repository Link**: [Alumni-Connect-Client-Side GitHub](https://github.com/DevProduction2023/alumni-client-side)
- **Live Deployment**: [Alumni Connect Platform](https://alumni-client-side-a160vh9il-shivs-projects-0bdf001e.vercel.app)

### Access Login Details for Roles:

- **Admin**:  
  Email: `admin@gmail.com`  
  Password: `Pass@1234`  
  _Note: A refresh is required after login. There is a bug that needs fixing on the deployment._

- **Alumni**:  
  Create and login  
  _Note: A refresh is required after login._

- **Student**:  
  Create and login  
  _Note: A refresh is required after login._

---

## Testing the RBAC UI

### **Admin Panel**:
1. Log in as an Admin.
2. Test **role management** features.
3. Approve or delete a job posting.
4. Create users and update their role and details.
5. Test login functionality with the created admin users.

### **Alumni Panel**:
1. Post a new job opportunity.
2. Edit or delete existing job postings.

### **Student Panel**:
1. Search for alumni profiles.
2. View job postings.

### **Expected Behavior**:
- Each role should only have access to its permitted features.
  - Admins can manage users and job posts.
  - Alumni can post and manage jobs.
  - Students can only view job postings and search for alumni profiles.

---

## Bugs and Known Issues:
- **Refresh required after each login** for Admin, Alumni, and Student roles.  
  _This bug is present in the deployed version but works correctly locally._

---

## Technologies Used:
- **Frontend**: React, TailwindCSS
- **Backend**: MongoDB Atlas (for storing data), JWT Authentication
- **Deployment**: Vercel (for live deployment)

---

## Contributing

Feel free to fork this project and contribute to improvements. If you encounter any bugs or have suggestions, please open an issue or submit a pull request.

---

### 2024 © Copyright Reserved
