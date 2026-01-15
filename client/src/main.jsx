import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BlogContextProvider } from './context/BlogContext.jsx';
import './index.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </BrowserRouter>
);
