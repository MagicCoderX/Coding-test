# Before You Buy - Property Inspection Report System

## Overview

**Before You Buy (BYB)** is an online platform that provides due diligence reports for potential property buyers in Australia. The goal of this project is to enable users to securely log in, view their purchase history, and download inspection reports in PDF format. By utilizing a mock data approach, the system mimics real-world operations, ensuring users can navigate the platform intuitively while demonstrating key functionalities.

## Project Explanation

This project consists of two main components:

1. **Frontend**: Built using React and Tailwind CSS, the frontend provides a user-friendly interface for authentication and interaction with the property inspection reports. Users can log in, view their purchase history, and download reports. The design emphasizes simplicity and accessibility.

2. **Backend**: The backend is developed with Node.js and Express, providing a secure API for user authentication and report generation. It uses JSON Web Tokens (JWT) for authentication and implements error handling to manage various scenarios, such as unauthorized access or invalid requests.

## Features

- User authentication using JWT
- Securely view purchase history
- Generate and download attractive PDF reports for purchased inspections
- Error handling and notifications for various scenarios

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express, PDFKit, bcryptjs, jsonwebtoken
- **Database**: Mock data for users and purchases

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MagicCoderX/Test.git
   cd Test

### Key Additions:
- **Project Explanation**: A detailed overview of the project components.
- **Testing the Application**: A step-by-step guide on how to test various functionalities.

# Usage Instructions for Before You Buy Project

## 1. Login

Use the following credentials to log in:

- **Email**: `john@example.com, maxim@example.com`
- **Password**: `password123`

## 2. View Purchase History

After logging in, you will see your purchase history, which includes details of any property inspection reports you have purchased.

## 3. Download PDF Report

To download the inspection report:

1. Locate the report you wish to download in your purchase history.
2. Click the download button next to the report.
3. The PDF report will be generated and downloaded to your local machine.

### Note

The downloaded PDF will contain detailed information about the property inspection, including:

- Purchase ID
- User information
- Inspection details (e.g., condition, roof status, plumbing status)
- Footer information with contact details

Make sure to check your Downloads directory on your computer for the downloaded report.

# Security Considerations for Before You Buy Project

## 1. Token-Based Access

- The system utilizes JSON Web Tokens (JWT) for user authentication and authorization.
- Upon successful login, a token is generated and sent to the client. This token must be included in the headers of subsequent requests to access protected resources.

## 2. Link Expiration

- The PDF download links are designed to be temporary.
- Only authorized users who have purchased a report can access the download link, ensuring that the link cannot be shared or used by unauthorized individuals.
- Expiration logic can be implemented to ensure that links are valid for a limited time.

## 3. Permissions

- Before allowing any download of a PDF report, the system checks whether the user who is attempting to access the report actually purchased it.
- This prevents unauthorized access to sensitive information.

## 4. Error Handling

- The system provides meaningful error messages for various scenarios, including:
  - Invalid or expired tokens
  - Unauthorized access attempts
  - Nonexistent purchase records
- Proper error handling helps in identifying issues quickly and provides a better user experience.

## 5. Data Protection

- Sensitive user information, such as passwords, is hashed using bcrypt before storage to enhance security.
- All data transmitted between the client and server should be done over HTTPS to prevent interception by malicious actors.

## Conclusion

These security measures are crucial in safeguarding user information and ensuring that only authorized users have access to the inspection reports, thereby maintaining the integrity of the Before You Buy platform.
