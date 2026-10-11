# 🌍 WanderLust — Travel Listing Web Application

**Explore destinations. Discover stays. Share your travel listings.**

WanderLust is a travel listing web application where users can explore places to stay and share their own listings. Users can create, edit, and delete listings, as well as add, edit, and delete reviews.

The application includes authentication, authorization, cloud-based image uploads, interactive maps, and session management to provide a smooth user experience.

## 🌐 Live Demo

**[🚀 Visit WanderLust](https://wanderlust-8td0.onrender.com)**

## ✨ Features

- **User Authentication:** Sign up and log in using Passport.js.
- **Listing Management:** Create, view, edit, and delete travel listings.
- **Review System:** Add, edit, and delete reviews.
- **Authorization:** Restrict protected operations to authenticated users and authorized owners.
- **Image Uploads:** Upload listing images using Cloudinary and Multer.
- **Interactive Maps:** Display location-related information using Mapbox.
- **Flash Messages:** Display success and error notifications.
- **Session Management:** Manage user sessions using `express-session` and MongoDB session storage.
- **Data Validation:** Validate input data using Joi.
- **Responsive UI:** Build responsive pages with Bootstrap 5.

## 📸 Screenshots

### Explore Listings

Add your homepage screenshot to the repository at `screenshots/homepage.png` to display it here.

![WanderLust Explore Listings](screenshots/homepage.png)

## 🛠️ Tech Stack

### 🎨 Frontend
- EJS
- Bootstrap 5
- HTML5
- CSS3
- JavaScript

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB
- Mongoose

### 🔐 Authentication and Sessions
- Passport.js
- Passport Local Mongoose
- `express-session`
- `connect-mongo`

### ☁️ Image Uploads and Maps
- Cloudinary
- Multer
- Mapbox

### 🧰 Validation and Utilities
- Joi
- Method-Override

## ⚙️ Installation and Setup

### 📋 Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas account
- Git
- A Cloudinary account for image uploads
- A Mapbox account for map features

### 1. Clone the Repository

Replace the placeholder with your actual GitHub repository URL.

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd WanderLust
```

Replace `WanderLust` with your actual project directory name if it differs.

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the environment variables required by your application.

Example template:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

**Security Note:** These variable names are examples. Use the exact names referenced in your application code. Never commit your real `.env` file, database credentials, API secrets, or private keys to GitHub.

### 5. Start the Application

If your project uses Nodemon:

```bash
npx nodemon app.js
```

Alternatively, run:

```bash
node app.js
```

Open your browser and visit:

**http://localhost:8080**

Make sure your database connection and required environment variables are configured before starting the application.

## 📂 Project Structure

The following is a representative structure. Update it to match your actual repository.

```text
WanderLust/
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   ├── reviews/
│   └── users/
├── public/
│   ├── css/
│   ├── js/
│   └── assets/
├── utils/
├── screenshots/
│   └── homepage.png
├── middleware.js
├── schema.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🔐 Authentication and Authorization

WanderLust uses Passport.js and Passport Local Mongoose for local user authentication.

- Users can register and log in.
- Protected actions require authentication.
- Listing and review operations are restricted according to user permissions.
- Sessions are managed using `express-session` and stored in MongoDB with `connect-mongo`.

## 🗺️ Third-Party Services

- **MongoDB Atlas:** Cloud database hosting, if configured.
- **Cloudinary:** Cloud-based listing image storage.
- **Mapbox:** Map and location features.

These services require valid configuration and credentials where applicable.

## 🚀 Future Improvements

Potential enhancements include:

- Advanced search and filtering.
- Wishlist and saved listings.
- User profile management.
- Automated testing and improved error handling.
- Further performance and accessibility improvements.

