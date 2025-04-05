export interface Template {
  id: string
  name: string
  description: string
  thumbnail: string
  category: string
  tags: string[]
  slides: TemplateSlide[]
  popularity: number
  isFavorite: boolean
  isPremium: boolean
}

export interface TemplateSlide {
  id: string
  thumbnail: string
  order: number
}

export interface TemplateQueryParams {
  page?: number
  limit?: number
  search?: string
  category?: string
  tags?: string[]
  sortBy?: string
  sortOrder?: "asc" | "desc"
  isPremium?: boolean
}