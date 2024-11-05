# Hospital CRM System

A comprehensive Hospital CRM system with user management, access control, and local deployment capabilities.

## Features

- User Authentication and Authorization
- Role-based Access Control (Admin, Doctor, Nurse, Receptionist)
- Patient Management
- Appointment Scheduling
- Medical Records Management
- User Management (Admin only)
- Local Database Storage
- Secure API Endpoints

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd hospital-crm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with required environment variables:
   ```
   PORT=3000
   JWT_SECRET=your-secure-secret-key-here
   ```

4. Build the frontend:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Default Admin Credentials

- Email: admin@hospital.com
- Password: admin123

## Development

For development, you can run the frontend and backend separately:

Frontend development server:
```bash
npm run dev
```

Backend server:
```bash
npm start
```

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Secure HTTP-only cookies
- Input validation and sanitization

## License

MIT