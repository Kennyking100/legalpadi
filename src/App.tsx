import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/auth/LoginForm';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CasesPage from './pages/CasesPage';
import CaseDetailsPage from './pages/CaseDetailsPage';
import CalendarPage from './pages/CalendarPage';
import ClientsPage from './pages/ClientsPage';
import DocumentsPage from './pages/DocumentsPage';
import PricingTiers from './components/pricing/PricingTiers';
import FirmSettings from './components/settings/FirmSettings';
import { tiers } from './types/tiers';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/pricing" element={<PricingTiers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      
      <div className="lg:pl-64">
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/cases"
              element={
                <PrivateRoute>
                  <CasesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/cases/:id"
              element={
                <PrivateRoute>
                  <CaseDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <CalendarPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/clients"
              element={
                <PrivateRoute>
                  <ClientsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/documents"
              element={
                <PrivateRoute>
                  <DocumentsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                <PrivateRoute>
                  <PricingTiers />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <FirmSettings
                    currentTier={tiers[1]}
                    firmName="Smith & Associates"
                    totalUsers={5}
                    totalCases={120}
                  />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}