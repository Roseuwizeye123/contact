import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ContactsPage from "./pages/ContactsPage"
import Update from "./pages/Update";
import UserDetail from "./pages/UserDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<ContactsPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        {/* Update the route to accept a parameter */}
        <Route path="/update/:contactId" element={<Update />} />
        {/* Update the route to accept a parameter */}
        <Route path="/details/:contactId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

