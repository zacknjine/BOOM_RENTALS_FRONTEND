# BOOM RENTAL HARMONY (FRONT-END)
## OVERVIEW 
 - The Rental Management System is a web-based platform designed to streamline property management for both tenants and landlords (admins). This system features two main dashboards: the Tenant Dashboard and the Admin Dashboard. These dashboards offer various tools and features that enhance communication, payment management, and overall rental experience.

### TABLE OF CONTENTS
  1. Features
  2. Components
  3. Installation
  4. Usage
  5. Tech Stack
  6. Contribution
  7. License


## FEATURES 
 1. Admin Dashboard:
   
- Profile Management: Admins can create and manage tenant profiles.
- Messages: Admins can view and manage messages sent by tenants.
- Financial Tracking: View and track rent payments made by tenants.
- Property Management: Admins can add new properties and manage existing ones.
- Maintenance Requests: Handle and resolve tenant maintenance requests.

2. Tenant Dashboard

- Make Payments: Tenants can securely make rent payments.
- Payment History: View a history of all rent payments made.
- Submit Maintenance Requests: Tenants can submit maintenance issues directly to the landlord.
- Messages: Tenants can send messages to the admin for inquiries or concerns.

## COMPONENTS

 1. AdminFinancialSummary.jsx: Displays a summary of all financial transactions and balances for the admin.
 2. AdminMaintenanceManagement.jsx: Allows the admin to manage and track maintenance requests.
 3. AdminMessages.jsx: Displays messages sent by tenants to the admin.
 4. AdminTenantManagement.jsx: Enables admin to manage tenant profiles and related data.
 5. Features.jsx: Highlights key features of the platform on the landing page.
 6. Footer.jsx: Standard footer component for the application.
 7. Home.jsx: The main landing page for users.
 8. LoginPage.jsx: Allows users (admin or tenants) to log in and access the appropriate dashboard.
 9. MaintenanceRequest.jsx: Used by tenants to submit maintenance requests.
 10. MakePayment.jsx: Facilitates rent payment by tenants.
 11. Navbar.jsx: Navigation bar for navigating between pages.
 12. PaymentHistory.jsx: Displays tenants' payment history.
 13. PrivateRoute.jsx: Protects routes to ensure only authenticated users can access certain components.
 14. PropertyManagement.jsx: Allows the admin to add and manage properties.
 15. TenantMessages.jsx: Displays messages sent by the tenant.
 16. ViewPayment.jsx: Allows tenants to view details of past payments.

## INSTALLATION

- Clone the repository :
    (git clone https://github.com/zacknjine/BOOM_RENTALS_FRONTEND.git)

- Navigate to the project directory :
    (cd frontend)

- Install dependencies :
    (npm install)

### USAGE 

  - Start the development server :
     (npm run dev)

  - Open the browser and navigate to the project.
  - On the landing page click login to navigate to the rest of the project.

  a. ) Access Admin 
       - Login using admin credentials to access the Admin Dashboard
       - Use the dashboard to manage tenants, track payments and handle maintenance.
  
  b. ) Access Tenant
      - Login using tenant credentials to access the Tenant Dashboard.
      - Make rent payments, view payment history, send messages and submit maintenance request.


## TECH STACK 
  1. Frontend - React, Vite, Tailwind.css
  2. Backend - FastAPI, Firebase, SQLAlchemy
  3. Database - Firebase, SQL-based database for storing tenant and property data.


## CONTRIBUTING
- Feel free to submit issues, feature requests, or contribute to the codebase by creating a pull request.


# LICENSE 
   - This project is licensed under the MIT License.