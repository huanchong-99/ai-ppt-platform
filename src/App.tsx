"use client"

import React, { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import { useAuth } from "./hooks/useAuth"

// Pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import TemplatesPage from "./pages/TemplatesPage"
import EditorPage from "./pages/EditorPage"
// Import other pages as they are created

// Theme configuration
const theme = {
  token: {
    colorPrimary: "#1677FF",
    colorSuccess: "#00C16E",
    colorWarning: "#FF5722",
    colorError: "#FF4D4F",
    colorInfo: "#1677FF",
    borderRadius: 4,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
}

const App: React.FC = () => {
  const { isAuthenticated, getUserProfile } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  
  useEffect(() => {
    // 确保代码只在客户端执行
    if (typeof window !== 'undefined') {
      // 检查URL参数
      const urlParams = new URLSearchParams(window.location.search)
      const loginParam = urlParams.get('login')
      const registerParam = urlParams.get('register')
      
      if (loginParam === 'true') {
        setShowLogin(true)
      } else if (registerParam === 'true') {
        setShowRegister(true)
      }
    }
    
    if (isAuthenticated) {
      getUserProfile()
    }
  }, [isAuthenticated, getUserProfile])
  
  // 根据URL参数显示登录或注册页面
  if (showLogin) {
    return <LoginPage />
  }
  
  if (showRegister) {
    return <RegisterPage />
  }

  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <Routes>
        {/* 公共路由 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        <Route path="/templates" element={<TemplatesPage />} />

        {/* 受保护的路由 */}
        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/editor/:projectId" element={isAuthenticated ? <EditorPage /> : <Navigate to="/login" />} />
        <Route path="/projects/new" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/export/:projectId" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/share/:projectId" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/preview/:projectId" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/subscription" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />

        {/* 默认路由 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ConfigProvider>
  )
}

export default App