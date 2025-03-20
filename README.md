# OAuth Web App

This is a **Next.js 15 + React 19** project designed to handle authentication using OAuth.
It is built with **TypeScript, Tailwind CSS v4, Jest, Playwright**, and follows modern best practices.

## 🚀 Getting Started

To run the development server locally, use:

```bash
npm install  # Install dependencies
npm run dev  # Start the development server
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
/src
  /app           # Next.js app directory (Routing & Server Components)
  /components    # Reusable UI components
  /sections      # Larger UI sections
  /services      # API and external service handlers
  /hooks         # Custom React hooks (if applicable)
  /utils         # Utility functions
  /config        # Global configurations (if applicable)
/tests
  /unit          # Unit tests (Jest)
  /integration   # Integration tests (Jest)
  /e2e           # End-to-End tests (Playwright)
```

## 🧪 Testing

### **Run all tests**

```bash
npm run test
```

### **Run unit tests (Jest)**

```bash
npm run test:unit
```

### **Run integration tests**

```bash
npm run test:integration
```

### **Run E2E tests (Playwright)**

```bash
npm run test:e2e
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and add tests if needed.
4. Open a pull request.

## 📜 License

This project is open-source and available under the **MIT License**.
