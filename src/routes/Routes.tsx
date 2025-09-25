import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { routes } from "../routes"; // your public route config
import BlogDetail from "../pages/blogDetail/BlogDetail";
import ContactUs from "../pages/contactUs/ContactUs";

import ManageBlogs from "../pages/adminpages/dashboard/ManageBlogs";
import AddNewBlog from "../pages/adminpages/blogs/add-a-new-blog/AddNewBlog";
import Login from "../pages/adminpages/auth/login/Login";

import { useAuthStore } from "../store/authStore";
import DashboardLayout from "../components/layout/DashboardLayout";
import Blogs from "../pages/blogs/blogs";

// 🔹 Protect admin routes
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();
  const isAuthenticated = user?.token;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

// 🔹 Public layout (Header + Footer)
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 🔹 Auth */}
      <Route path="/login" element={<Login />} />

      {/* 🔹 Admin / Protected */}
      <Route
        path="/manage-blogs"
        element={
          <ProtectedRoute>
            <ManageBlogs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage-blogs/add-new-blog"
        element={
          <ProtectedRoute>
            <AddNewBlog />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage-blogs/edit-blog"
        element={
          <ProtectedRoute>
            <AddNewBlog />
          </ProtectedRoute>
        }
      />

      {/* 🔹 Public pages */}
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PublicLayout>{route.element}</PublicLayout>}
        />
      ))}

      <Route
        path="/blogs"
        element={
          <PublicLayout>
            <Blogs />
          </PublicLayout>
        }
      />
      <Route
        path="/blogs/:id"
        element={
          <PublicLayout>
            <BlogDetail />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <ContactUs />
          </PublicLayout>
        }
      />

      {/* 🔹 404 Fallback */}
      <Route
        path="*"
        element={
          <PublicLayout>
            <h1 style={{ textAlign: "center", padding: "2rem" }}>
              404 - Page Not Found
            </h1>
          </PublicLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
