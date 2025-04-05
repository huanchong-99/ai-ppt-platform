"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/App'

/**
 * 客户端专用的应用包装组件
 * 此组件只在客户端渲染，避免服务器端使用document对象导致的错误
 */
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}