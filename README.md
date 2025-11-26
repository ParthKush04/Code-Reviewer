# Code Reviewer

A modern **AI-powered code review tool** built with **React**, **Node.js**, and **Google Gemini**.  
It allows developers to write code in a live editor and instantly receive a detailed AI-generated review.

---

## Features

### Frontend (React)

- Live code editor using **react-simple-code-editor**
- Syntax highlighting using **Prism.js**
- AI review rendering using **react-markdown**
- Two-panel layout:
  1. **Left:** Code Editor
  2. **Right:** AI Review Output
- Fully responsive and clean UI

### Backend (Node.js + Gemini API)

- Uses **Google Gemini 2.0 Flash**
- Custom system instructions simulate a **Senior Code Reviewer (7+ years experience)**
- Returns detailed review including:
  - Issues
  - Improvements
  - Suggested fixes
  - Optimized code version

---

## Technologies Used

### **Frontend**

- React
- react-simple-code-editor
- Prism.js
- react-markdown
- rehype-highlight
- Axios
- CSS (custom styling)
