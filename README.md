# GitHub Finder // API Integration Web Application

GitHub Finder is a modern API-powered web application that allows users to search and explore GitHub profiles instantly. The application integrates with the GitHub Public API to fetch real-time user information and display it through a clean, responsive, and visually appealing user interface.

---

## 🎯 Objective

The primary goal of this project was to learn and implement API integration using JavaScript's Fetch API while creating a responsive and user-friendly web application.

Key project requirements included:

* **API Integration**: Fetching real-time user data from the GitHub Public API.
* **Dynamic Data Rendering**: Displaying profile information dynamically on the webpage.
* **Loading State Management**: Showing visual feedback while data is being fetched.
* **Error Handling**: Displaying meaningful error messages for invalid usernames or failed requests.
* **Responsive Design**: Ensuring a smooth experience across desktop and mobile devices.
* **Modern UI**: Building an attractive interface using glassmorphism and gradient styling techniques.

---

## 🛠️ Tools Used

* **Frontend Structure**: HTML5 (Semantic Markup)
* **Styling & Design**: CSS3 (Flexbox, Responsive Design, Glassmorphism Effects, Gradients)
* **Application Logic**: Vanilla JavaScript (ES6+, Async/Await, Fetch API, DOM Manipulation)
* **External Resources**:

  * **GitHub Public API** for fetching user profile information.
  * **Font Awesome** for GitHub and interface icons.
  * **Google Fonts (Poppins)** for modern typography.

---

## 📝 Steps Performed

### 1. Project Planning & API Selection

* Selected the GitHub Public API as the data source.
* Defined the required profile information to display:

  * Profile Picture
  * Name
  * Bio
  * Followers Count
  * Following Count
  * Public Repository Count
  * GitHub Profile Link

### 2. User Interface Development (`index.html`)

* Created a clean and semantic page structure.
* Built a search section allowing users to enter GitHub usernames.
* Added dedicated sections for:

  * Loading State
  * Error Messages
  * Dynamic Profile Card
* Integrated Font Awesome GitHub branding icons.

### 3. Styling & Responsive Design (`style.css`)

* Designed a modern glassmorphism-based container.
* Applied gradient backgrounds for a professional appearance.
* Styled form inputs, buttons, profile cards, and statistics sections.
* Added hover animations and smooth transitions.
* Implemented responsive layouts for mobile devices using media queries.

### 4. API Integration & Functionality (`script.js`)

* Implemented asynchronous API requests using Fetch API and Async/Await.

* Retrieved GitHub user data from:

  https://api.github.com/users/{username}

* Validated user input before making requests.

* Managed application states:

  * Loading State
  * Success State
  * Error State

* Dynamically updated DOM elements with API response data.

* Added keyboard support allowing searches via the Enter key.

* Implemented robust error handling for:

  * Empty Input
  * Invalid Usernames
  * Network/API Errors

---

## ✨ Features

* Search any public GitHub profile instantly.
* Real-time API data retrieval.
* Dynamic profile rendering.
* Loading indicator while fetching data.
* Error handling with user-friendly messages.
* Direct link to the GitHub profile.
* Fully responsive design.
* Modern glassmorphism user interface.
* Keyboard support using the Enter key.

---

## 🏆 Key Outcomes

* Successfully integrated a real-world public REST API.
* Gained hands-on experience with Fetch API and asynchronous JavaScript.
* Learned API response handling and error management.
* Built a responsive and visually attractive web application.
* Improved DOM manipulation and dynamic content rendering skills.
* Delivered a complete API Integration Project meeting all task requirements.

---

## 📌 Task Information

**Task:** Task 6 – API Integration Project

**Technology Used:** HTML, CSS, JavaScript (Fetch API)

**API Used:** GitHub Public API

**Project Outcome:** Functional GitHub Profile Finder capable of fetching and displaying live GitHub user information with loading states and error handling.
