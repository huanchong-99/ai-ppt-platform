export interface Project {
  id: string
  name: string
  description?: string
  thumbnail?: string
  createdAt: string
  updatedAt: string
  slides: Slide[]
  templateId?: string
  isPublic: boolean
  tags: string[]
  userId: string
}

export interface Slide {
  id: string
  title?: string
  content: SlideContent
  order: number
  background?: string
  transition?: SlideTransition
}

export interface SlideContent {
  elements: SlideElement[]
  notes?: string
}

export interface SlideElement {
  id: string
  type: "text" | "image" | "shape" | "chart" | "table" | "video"
  x: number
  y: number
  width: number
  height: number
  rotation?: number
  content: any // 具体内容根据类型不同而不同
  style?: any
}

export interface SlideTransition {
  type: "none" | "fade" | "slide" | "zoom" | "flip"
  duration: number
}

export interface ProjectCreateData {
  name: string
  description?: string
  templateId?: string
  tags?: string[]
}

export interface ProjectQueryParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  tags?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface Outline {
  title: string
  slides: SlideOutline[]
}

export interface SlideOutline {
  title: string
  content: string
  key_points?: string[]
}

export interface Suggestions {
  content: string[]
  design: string[]
  structure: string[]
}