export interface DialogMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
}

export interface DialogResponse {
  message: DialogMessage
  suggestions?: string[]
}