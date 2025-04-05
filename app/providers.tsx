"use client"

import React from "react"
import { Provider } from "react-redux"
import { store } from "../src/store"

/**
 * Redux Provider组件，为Next.js应用提供全局状态管理
 * @param {object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {React.ReactElement} Redux Provider包裹的组件
 */
export default function ReduxProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  // 在客户端侧创建一个新的store实例，避免状态在客户端之间共享
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}