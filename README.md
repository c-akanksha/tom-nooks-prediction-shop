# Tom Nook's Prediction Shop (Frontend)

A React-based single-page application (SPA) that provides machine learning-powered predictions based on Animal Crossing: New Horizons datasets. Built with Material UI for a polished, Nook-inspired aesthetic.

## 🚀 Tech Stack
- **Framework:** React 18
- **Routing:** React Router v6 (`createHashRouter`)
- **State Management:** Redux Toolkit
- **UI Library:** Material UI (MUI)
- **Deployment:** GitHub Pages

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/akankshac/tom-nooks-prediction-shop.git](https://github.com/akankshac/tom-nooks-prediction-shop.git)
   cd tom-nooks-prediction-shop-spa

2. **Install dependencies:**
   ```bash
    npm install
   ``` 
3. **Environment Variables:**
    Create a `.env` file in the root directory and add your backend URL:
    ```
    REACT_APP_API_URL=[https://your-backend-api.com](https://your-backend-api.com)
    ```

4. **Run the development server:**
    ```bash
    npm start
    ```

## 📦 Deployment (GitHub Pages):

This project is configured to host on GitHub Pages using the gh-pages package.

1. Ensure homepage in package.json matches your GitHub URL.

2. Run the deployment script:
```bash
npm run deploy
```