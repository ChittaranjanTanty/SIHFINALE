# Mining Safety Management System 🏭

A comprehensive backend system for managing coal mine safety operations, including digital logbooks, hazard reporting, and safety monitoring. Built for Smart India Hackathon (SIH).

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🔐 User Management
- User registration and authentication with JWT
- Role-based access control (Safety Officer, Supervisor, Manager)
- Secure password hashing with bcrypt
- Cookie-based session management

### 📖 Digital Logbook System
- **Supervisor Logbook**: Track shift details, safety materials, ventilation devices, and safety observations
- **Machinery Logbook**: Monitor vehicle operations, operator details, and maintenance issues
- Geolocation tracking (latitude/longitude)
- Shift-wise data management

### ⚠️ Hazard Reporting
- Real-time hazard reporting with detailed descriptions
- Categorized hazard types (Ventilation, Roof, Mechanical, Loose Materials, Other)
- Action tracking and acknowledgment system
- Location-based hazard mapping
- Dual hazard reporting interfaces for different use cases

### 📸 Media Management
- Cloudinary integration for image uploads
- Multer middleware for file handling
- Secure media storage and retrieval

### 🌐 API Features
- RESTful API architecture
- CORS enabled for cross-origin requests
- Comprehensive error handling
- Input validation

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcrypt
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary

### Development Tools
- **Hot Reload**: Nodemon
- **Environment Management**: dotenv
- **HTTP Security**: CORS

## 📁 Project Structure

```
SIH/
├── src/
│   ├── config/              # Configuration files
│   │   ├── cloudinaryConfig.js
│   │   ├── dbConfig.js
│   │   └── serverConfig.js
│   ├── controllers/         # Request handlers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── logbookController.js
│   │   ├── mLogbookController.js
│   │   ├── hazardController.js
│   │   └── HazardReportingFormController.js
│   ├── middlewares/         # Custom middlewares
│   │   └── multerMiddleware.js
│   ├── repositories/        # Data access layer
│   │   ├── userRepository.js
│   │   ├── logbookRepository.js
│   │   ├── mLogbookRepository.js
│   │   ├── hazardRepository.js
│   │   └── HazardReportingFormRepository.js
│   ├── routes/              # API routes
│   │   ├── authRoute.js
│   │   ├── userRoute.js
│   │   ├── logbookRoute.js
│   │   ├── mLogbookRoute.js
│   │   ├── hazardRoutes.js
│   │   └── HazardReportingFormRoute.js
│   ├── schema/              # Mongoose models
│   │   ├── userSchema.js
│   │   ├── logbookschema.js
│   │   ├── mlogbookschema.js
│   │   ├── hazardSchema.js
│   │   └── hazardReportingFormSchema.js
│   ├── services/            # Business logic
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── logbookService.js
│   │   ├── mLogbookService.js
│   │   ├── hazardService.js
│   │   └── HazardReportingFormService.js
│   ├── utils/               # Error handling utilities
│   │   ├── appError.js
│   │   ├── badRequestError.js
│   │   ├── internalServerError.js
│   │   ├── notFoundError.js
│   │   └── unauthorisedError.js
│   ├── validation/          # Input validators
│   │   └── authValidator.js
│   └── index.js             # Application entry point
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Cloudinary account (for image uploads)

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd SIH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   DB_URL=mongodb://localhost:27017/mining-safety
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRY=7d
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   FRONTEND_URL=http://localhost:5173
   COOKIE_SECURE=false
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000` (or your configured PORT)

## ⚙️ Configuration

### Database Configuration
Configure MongoDB connection in `src/config/dbConfig.js`

### Cloudinary Setup
Set up Cloudinary credentials in `src/config/cloudinaryConfig.js`

### Server Configuration
All environment variables are managed in `src/config/serverConfig.js`

## 🔌 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### User Management
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Logbook (Supervisor)
- `POST /api/logbook` - Create new logbook entry
- `GET /api/logbook` - Get all logbook entries
- `GET /api/logbook/:id` - Get specific logbook entry
- `PUT /api/logbook/:id` - Update logbook entry
- `DELETE /api/logbook/:id` - Delete logbook entry

### Machinery Logbook
- `POST /mlogbook` - Create machinery logbook entry
- `GET /mlogbook` - Get all machinery logbook entries
- `GET /mlogbook/:id` - Get specific machinery logbook entry
- `PUT /mlogbook/:id` - Update machinery logbook entry
- `DELETE /mlogbook/:id` - Delete machinery logbook entry

### Hazard Reporting
- `POST /api/hazards` - Submit hazard report
- `GET /api/hazards` - Get all hazard reports
- `GET /api/hazards/:id` - Get specific hazard report
- `PUT /api/hazards/:id` - Update hazard report
- `DELETE /api/hazards/:id` - Delete hazard report

### Hazard Reporting Form
- `POST /hazard-report` - Submit detailed hazard report form
- `GET /hazard-report` - Get all hazard report forms
- `GET /hazard-report/:id` - Get specific hazard report form
- `PUT /hazard-report/:id` - Update hazard report form
- `DELETE /hazard-report/:id` - Delete hazard report form

### Health Check
- `GET /ping` - Server health check

## 💾 Database Models

### User Model
```javascript
{
  firstName: String (required, 5-20 chars),
  lastName: String (5-20 chars),
  mobileNumber: String (required, unique, 10 digits),
  email: String (required, unique, validated),
  password: String (required, hashed, min 6 chars),
  role: Enum ["SOFFICER", "SUPERVISOR", "MANAGER"],
  address: String,
  timestamps: true
}
```

### Logbook Model
```javascript
{
  shift: String (required),
  basicDetails: {
    supervisorName, inspectionTime, shift, mineName,
    seamName, district1, district2, date, shiftHours,
    latitude, longitude, partsInspected
  },
  safetyMaterials: Array,
  ventilationDevices: Array,
  safetyObservations: Array,
  createdAt: Date
}
```

### Machinery Logbook Model
```javascript
{
  operatorName: String (required),
  vehicleType: String (required),
  vehicleNumber: String (required),
  startTime: String (required),
  endTime: String (required),
  issuesDescription: String,
  timestamps: true
}
```

### Hazard Report Model
```javascript
{
  reportDate: String (required),
  supervisorName: String (required),
  mineName: String (required),
  hazardLocation: String (required),
  natureOfHazard: Enum ["Ventilation", "Roof", "Mechanical", "LooseMaterials", "Other"],
  hazardDescription: String (required),
  actionTaken: String,
  acknowledgment: Boolean (required),
  timestamps: true
}
```

## 📖 Usage

### Register a New User
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "john",
    "lastName": "doe",
    "email": "john.doe@example.com",
    "mobileNumber": "1234567890",
    "password": "securepass123",
    "role": "SUPERVISOR"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securepass123"
  }'
```

### Create Logbook Entry
```bash
curl -X POST http://localhost:3000/api/logbook \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "shift": "Morning",
    "basicDetails": {
      "supervisorName": "John Doe",
      "mineName": "Coal Mine A",
      "date": "2025-10-25"
    }
  }'
```

### Report a Hazard
```bash
curl -X POST http://localhost:3000/api/hazards \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "reportDate": "2025-10-25",
    "name": "John Doe",
    "mineName": "Coal Mine A",
    "hazardLocation": "Section B-12",
    "natureOfHazard": "Ventilation",
    "hazardDescription": "Poor air circulation detected"
  }'
```

## 🏗️ Architecture

This project follows a **layered architecture** pattern:

1. **Routes Layer**: Handles HTTP requests and routing
2. **Controllers Layer**: Request/response handling and validation
3. **Services Layer**: Business logic implementation
4. **Repositories Layer**: Database operations and queries
5. **Models/Schema Layer**: Data structure definitions
6. **Utils Layer**: Error handling and utilities
7. **Middleware Layer**: Authentication, file upload, etc.

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT-based authentication
- Cookie-based session management
- Input validation and sanitization
- Role-based access control
- CORS configuration
- Secure file upload handling


## 🙏 Acknowledgments

- Smart India Hackathon organizers
- Coal mining safety experts who provided domain knowledge
- Open source community for the amazing tools and libraries


**Stay Safe, Mine Safe! ⛑️**