"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import { login, register, logout, fetchUserProfile } from "../store/slices/authSlice"
import type { LoginCredentials, UserRegisterData } from "../types/auth"

/**
 * 自定义钩子，用于处理认证相关操作
 * @returns {Object} 认证相关状态和方法
 */
export const useAuth = () => {
  // 确保在客户端环境中使用
  if (typeof window === 'undefined') {
    return {
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      loginUser: async () => {},
      registerUser: async () => {},
      logoutUser: async () => {},
      getUserProfile: async () => {},
    }
  }
  
  const dispatch = useDispatch<AppDispatch>()
  const { user, isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth)

  const loginUser = (credentials: LoginCredentials) => {
    return dispatch(login(credentials))
  }

  const registerUser = (userData: UserRegisterData) => {
    return dispatch(register(userData))
  }

  const logoutUser = () => {
    return dispatch(logout())
  }

  const getUserProfile = () => {
    return dispatch(fetchUserProfile())
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
  }
}