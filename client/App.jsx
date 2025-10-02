import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Auth from "./pages/Auth.jsx";
import Admin from "./pages/Admin.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import SingInForm from "./pages/SignInForm.jsx";
import ShoP_MainFun from "./pages/ShoP_MainFun.jsx";
import Ai_Assist from "./pages/AIAssistPage.jsx";
import EcommercePage from "./pages/EcommercePage.jsx"; // FIXED: Changed " to '
import Homepage from "./pages/Homepage.jsx";
import Layout from "../client/Layout.jsx";
import Cart from "./pages/Cart.jsx";
import HealthVoiceAssistant from "./pages/HealthVoiceAssistant.jsx";
import CustomerCareVoiceAssistant from "./pages/CustomerCareVoiceAssistant.jsx";
function App() {
  return (
    <StrictMode>
      <CartProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            {/* Use Layout as parent route with Outlet */}
            <Route path="/" element={<Layout />}>
              {/* Original Routes */}
              <Route index element={<Homepage />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="auth" element={<Auth />} />
              <Route path="admin" element={<Admin />} />
              <Route path="cart" element={<Cart />} />

              {/* New Routes from second file */}
              <Route path="singin" element={<SingInForm />} />
              <Route path="healthvoiceassistant" element={<HealthVoiceAssistant />}/>
              <Route path="customervoiceassistant" element={<CustomerCareVoiceAssistant />} />
              <Route path="mainfun" element={<ShoP_MainFun />} />
              <Route path="aiassist" element={<Ai_Assist />} />
              <Route path="ecommerce" element={<EcommercePage />} />
              <Route path="homepage" element={<Home />} />

              {/* Catch-all route */}
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
