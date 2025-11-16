# Livora - Real Estate Platform

A modern, responsive real estate platform built with React and Vite. Livora allows users to browse properties, list their own properties, manage listings, and provide feedback on properties they've visited.

## 🌟 Features

- **Property Browsing**: Browse through featured and listed properties with advanced filtering
- **Property Listing**: List your own properties with detailed information and images
- **User Authentication**: Secure sign-in/sign-up with Firebase Authentication
- **Property Management**: Manage your property listings and track their performance
- **Feedback System**: Rate and review properties you've visited
- **Responsive Design**: Fully responsive design that works on all devices
- **Real-time Updates**: Real-time property data updates using Firebase

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.17 + DaisyUI 5.4.7
- **Authentication**: Firebase 12.5.0
- **Routing**: React Router 7.9.5
- **Icons**: React Icons 5.5.0
- **Notifications**: React Toastify 11.0.5
- **Alerts**: SweetAlert2 11.26.3
- **Slider**: Swiper 12.0.3
- **Rating**: React Rating 1.5.0

## 📱 Pages & Features

### Public Pages

- **Home**: Hero section, featured properties, about us, and why choose us sections
- **Listed Properties**: Browse all available properties with search and filter functionality
- **Property Details**: Detailed view of individual properties with images and information
- **Sign In/Sign Up**: User authentication pages
- **Password Reset**: Forgot password functionality

### Private Pages (Requires Authentication)

- **List Property**: Add new properties to the platform
- **My Listings**: Manage your property listings
- **My Feedback**: View and manage your property reviews and ratings

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Firebase project setup

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chowdhoury/livora-client.git
   cd livora-client-side
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase Configuration**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Create a web app and get your configuration
   - Update the configuration in `src/Firebase/Firebase.config.js`

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── Assets/              # Static assets (images, etc.)
├── Auth/               # Authentication context and providers
├── Components/         # Reusable React components
│   ├── Home/          # Home page components
│   ├── ListedProperties/  # Property listing components
│   ├── ListProperty/   # Property creation components
│   ├── MyListings/     # User listings management
│   ├── MyFeedback/     # User feedback management
│   ├── PropertyDetails/   # Property detail components
│   └── Shared/         # Shared components (Navbar, Footer, etc.)
├── Firebase/           # Firebase configuration
├── Layouts/            # Page layouts
├── Pages/              # Page components
├── Routes/             # Routing configuration
├── App.jsx            # Main App component
└── main.jsx           # Application entry point
```

## 🔥 Firebase Setup

1. Create a Firebase project
2. Enable the following services:

   - **Authentication**: Email/Password provider
   - **Firestore Database**: For storing property and user data
   - **Storage**: For property images (if applicable)

3. Add your Firebase configuration to `src/Firebase/Firebase.config.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id",
   };
   ```

## 🎨 UI/UX Features

- **Modern Design**: Clean and modern interface with Tailwind CSS
- **Dark/Light Mode**: Responsive design with DaisyUI themes
- **Mobile First**: Responsive design optimized for mobile devices
- **Interactive Elements**: Smooth transitions and hover effects
- **Loading States**: Beautiful loading animations and skeletons
- **Form Validation**: Client-side form validation with error handling

## 🔐 Authentication Features

- User registration and login
- Password reset functionality
- Protected routes for authenticated users
- Persistent authentication state
- Secure Firebase authentication integration

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

The project is configured for deployment on Firebase Hosting:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [chowdhoury](https://github.com/chowdhoury)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Firebase team for the backend services
- Tailwind CSS team for the utility-first CSS framework
- All the open-source library contributors

## 📞 Support

If you have any questions or need help, please feel free to:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Happy coding! 🎉**
