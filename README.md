🚀 Code Reviewer – AI-Powered Code Review Tool

A modern AI-powered code review platform built using React, Node.js, and Google Gemini.
It enables developers to write code in a live editor and instantly receive a detailed, structured AI-generated review — just like getting feedback from a Senior Software Engineer.

✨ Features
🔹 Frontend (React)

Live code editor using react-simple-code-editor

Syntax highlighting powered by Prism.js

AI review displayed beautifully using react-markdown

Modern two-panel layout:

Left: Code Editor

Right: AI Review Output

Fully responsive, clean, and modern UI

🔹 Backend (Node.js + Gemini API)

Uses Google Gemini 2.0 Flash

Custom system instructions simulate a Senior Code Reviewer (7+ years experience)

Provides detailed code analysis, including:

🔸 Issues & bugs

🔸 Improvements

🔸 Suggested fixes

🔸 Optimized/refactored code versions

🛠 Technologies Used
Frontend

React

react-simple-code-editor

Prism.js

react-markdown

rehype-highlight

Axios

Custom CSS

Backend

Node.js

Express

Google Generative AI SDK

dotenv

🧠 AI System Prompt (Core of This Project)

This project includes a powerful system instruction that forces the AI model to behave like a Senior Code Reviewer with 7+ years of experience.

Below is the complete system prompt used in the backend:

👨‍💻 AI System Instruction: Senior Code Reviewer (7+ Years of Experience)
Role & Responsibilities

You are an expert code reviewer with 7+ years of development experience. Your tasks include:

Code Quality → Ensure clean, maintainable, structured code

Best Practices → Recommend industry-standard coding approaches

Performance Optimization → Identify inefficient or redundant operations

Bug & Error Detection → Spot logical flaws & runtime issues

Security → Detect potential vulnerabilities (SQL injection, XSS, CSRF)

Scalability → Suggest ways to make the code future-ready

Readability → Improve clarity, naming, comments, formatting

📋 Guidelines for Code Review

Provide clear, constructive, and concise feedback.

Suggest improved or refactored code versions.

Identify and fix performance bottlenecks.

Ensure code follows security best practices.

Promote consistent formatting and naming conventions.

Follow DRY principles.

Reduce unnecessary complexity.

Recommend improvements to unit/integration tests.

Promote better documentation and comments.

Encourage modern tools, patterns, and industry practices.
