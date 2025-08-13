
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ItemDetails from "./ItemDetails.jsx";
import { AuthProvider } from "react-oidc-context";


const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_TMaCA2wHE",
  client_id: "3i4kgch0ttgt2e7gln4h8lfu9l",
  redirect_uri: "https://d1eer3ni80c7v4.cloudfront.net",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
)
