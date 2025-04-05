/**
 * 项目类型定义
 */
export interface Project {
  id: string;
  title: string;
  description?: string;
  slides: Slide[];
  createdAt: string;
  updatedAt: string;
}

/**
 * 幻灯片类型定义
 */
export interface Slide {
  id: string;
  content: SlideContent;
  order: number;
}

/**
 * 幻灯片内容类型定义
 */
export interface SlideContent {
  title?: string;
  text?: string;
  imageUrl?: string;
  backgroundColor?: string;
  layout: 'title' | 'content' | 'image' | 'split';
}

/**
 * API响应类型定义
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}