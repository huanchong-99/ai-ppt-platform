export type ExportFormat = "pptx" | "pdf" | "png" | "jpg"

export interface ExportOptions {
  quality?: "low" | "medium" | "high"
  includeNotes?: boolean
  slideRange?: string // e.g. "1-5,8,10-12"
}

export interface ExportResult {
  url: string
  format: ExportFormat
  expiresAt: string
  size: number
}

export interface ShareOptions {
  expiresIn?: number // 过期时间（秒）
  isEditable?: boolean
  password?: string
}

export interface ShareLink {
  url: string
  expiresAt?: string
  isEditable: boolean
  isPasswordProtected: boolean
}

export interface ExportHistory {
  id: string
  projectId: string
  format: ExportFormat
  url: string
  createdAt: string
  expiresAt: string
}