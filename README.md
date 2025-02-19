# Developer Learning Platform
![Screenshot 2025-02-19 210211](https://github.com/user-attachments/assets/13108b1f-94d2-4fe0-8f28-6d02ec41faa5)
![Screenshot 2025-02-19 210243](https://github.com/user-attachments/assets/07bccd77-2a8d-495a-8e63-45b5761af393)
![Screenshot 2025-02-19 210226](https://github.com/user-attachments/assets/17849513-5a42-4a2b-a977-9f2c7f548aef)
## Overview
This project is a **full-stack** web application designed for developers who want to **learn coding** through an interactive and user-friendly platform. It provides **coding challenges, an online compiler, and a dark/light theme feature** while integrating AI-powered assistance.

The project is built using:

- **MongoDB Compass (Local MongoDB)** – Database management
- **Spring Boot** – Backend framework
- **React.js** – Frontend framework
- **Tailwind CSS** – Styling
- **Axios** – API requests
- **Piston** – Online compiler
- **GPT-2 (or Custom AI API)** – AI assistant

## Features
✅ **User Authentication** (Sign Up / Login with secure token-based authentication)
✅ **Dark & Light Theme** (Switch between themes using ThemeProvider)
✅ **Code Execution** (Online compiler via Piston API)
✅ **AI Chatbot Assistance** (GPT-2 model or custom AI API)
✅ **REST API** (Fully structured API using Spring Boot)
✅ **MongoDB Integration** (Stores user data, code submissions, etc.)

---

## Technologies Used

### Backend (Spring Boot)
The backend is built using **Spring Boot**, which provides a powerful and scalable REST API. Key technologies and annotations used:

- **`@RestController`**: Defines RESTful controllers
- **`@RequestMapping`**: Maps HTTP requests to handler methods
- **`@CrossOrigin`**: Enables CORS support to allow frontend API requests
- **`@Document`**: Maps Java objects to MongoDB documents
- **MongoDB Atlas (Compass for local testing)**
- **Spring Security**: For authentication and authorization
- **Spring Data JPA**: ORM framework for interacting with MongoDB
- **Lombok**: Reduces boilerplate code with annotations like `@Getter`, `@Setter`



---

### Frontend (React.js)
The frontend is developed with **React.js**, providing a dynamic UI. It uses:
- **React Router**: Manages different pages/routes
- **Axios**: Handles API requests to the backend
- **ThemeProvider**: Implements dark/light theme switching
- **React Hooks (`useState`, `useEffect`, `useContext`)**

🔹 **Frontend Structure:**
- `/components`
  - `Header.jsx` – Header
  - `MainQuiz.jsx` – Code execution interface
  - `ChatBot.jsx` – AI-powered chatbot UI
- `/pages`
  - `Home.jsx` – Main landing page
  - `MainQuiz.jsx` – Online compiler interface

🔹 **State Management:**
- React **Context API** for global state management
- **LocalStorage** for theme persistence

---

### Styling (Tailwind CSS)
The project uses **Tailwind CSS** for modern and responsive UI design. Key features:
- **Utility-first** styling approach
- **Dark & Light Theme support**
- **Flexbox and Grid layout**
- **Responsive design**

Example:
```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
  Run Code
</button>
```

---

### API Communication (Axios)
Axios is used for handling API requests between the **React frontend** and **Spring Boot backend**.

Example API call:
```javascript
axios.post("http://localhost:8080/api/get", { code: userCode })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

### Online Compiler (Piston API)
The **Piston API** allows users to run code in multiple programming languages. The integration works as follows:
1. User enters code in the editor.
2. The frontend sends a request to the backend.
3. The backend communicates with Piston API.
4. The result is sent back to the frontend and displayed.

Example request to Piston:
```json

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

```

📸 **#Compiler_UI_Screenshot**

---

### AI Chatbot (GPT-2 / Custom AI API)
The project includes an AI-powered chatbot using **GPT-2** (or a custom AI API). Since GPT-2 may not work directly, you can replace it with your own AI model.

🔹 **How It Works:**
- User inputs a query in the chatbot
- The message is sent to the backend
- The AI model generates a response
- The response is displayed in the chat UI

📸 **#Chatbot_UI_Screenshot**

---

## Installation & Setup

### 1️⃣ Backend Setup (Spring Boot)
1. Install **Java 17** and **Maven**
2. Clone the repository
```bash
git clone https://github.com/yourusername/projectname.git
cd backend
```
3. Configure **MongoDB Compass** (Ensure MongoDB is running locally)
4. Start the Spring Boot server
```bash
mvn spring-boot:run
```

### 2️⃣ Frontend Setup (React.js)
1. Navigate to the frontend folder
```bash
cd frontend
```
2. Install dependencies
```bash
npm install
```
3. Start the React app
```bash
npm run dev
```

---

## Deployment
- **Backend**: Can be deployed using **Heroku** or **Docker**.
- **Frontend**: Can be deployed using **Vercel** or **Netlify**.

---

## Screenshots
📸 **#Homepage_Screenshot**
📸 **#Compiler_UI_Screenshot**
📸 **#Chatbot_UI_Screenshot**
📸 **#Theme_Toggle_Screenshot**

---

## Future Improvements
- ✅ **More Programming Languages Support**
- ✅ **Enhanced AI Chatbot with GPT-4 API**
- ✅ **Leaderboard for Coding Challenges**
- ✅ **User Profile Management**

---

## Contributing
Feel free to contribute! If you have feature suggestions or find any issues, create a pull request or open an issue.

---

## License
This project is licensed under the MIT License.

---

## Contact
📧 Email: azatvepakulyyev@gmail.com
📌 GitHub: https://github.com/Arious18/

