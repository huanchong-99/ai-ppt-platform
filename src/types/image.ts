export interface GeneratedImage {
  id: string
  url: string
  prompt: string
  width: number
  height: number
  style?: string
  createdAt: string
}

export interface SavedImage extends GeneratedImage {
  userId: string
  tags?: string[]
}

export interface ImageOptions {
  width: number
  height: number
  style?: string
  numberOfImages?: number
}