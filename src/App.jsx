// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from './Components/Sidebar/Sidebar';
import Navebar from './Components/Navebar/Navebar';

// Pages
import Dashboard from './Components/Pages/Dashboard';
import Analytics from './Components/Pages/Analytics';
import Invoices from './Components/Pages/Invoices';
import Calender from './Components/Pages/Calender';
import Messages from './Components/Pages/Messages';
import Schedule from './Components/Pages/Schedule';
import Notification from './Components/Pages/Notification';
import Setting from './Components/Pages/Setting';
// 🔴 Removed ChatTabs import because file is deleted

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-[280px] bg-gray-50 min-h-screen">
          {/* Navbar */}
          <Navebar />

          {/* Page Content */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/setting" element={<Setting />} />
              {/* 🔴 Removed: <Route path="/whatsapp" element={<ChatTabs />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
