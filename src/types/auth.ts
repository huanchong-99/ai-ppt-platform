export interface UserRegisterData {
  email: string
  password: string
  name: string
  phone?: string
}

export interface LoginCredentials {
  username: string // Can be email or phone
  password: string
  remember?: boolean
}

export interface AuthResponse {
  token: string
  refreshToken: string
  user: UserProfile
}

export interface UserProfile {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role: "user" | "admin"
  membershipLevel: "free" | "basic" | "premium" | "enterprise"
  membershipExpiry?: string
}