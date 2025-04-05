export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  currency: string
  interval: "month" | "year"
  features: string[]
  limits: {
    projects: number
    storage: number
    aiGeneration: number
    imageGeneration: number
    collaborators: number
  }
}

export interface Subscription {
  id: string
  userId: string
  planId: string
  plan: SubscriptionPlan
  status: "active" | "canceled" | "expired" | "trial"
  startDate: string
  endDate: string
  renewalDate?: string
  canceledAt?: string
}

export interface PaymentMethod {
  type: "credit_card" | "alipay" | "wechat"
  details: any
}

export interface SubscriptionResult {
  subscription: Subscription
  paymentStatus: "succeeded" | "pending" | "failed"
  nextPaymentDate?: string
}

export interface UsageStats {
  projects: {
    used: number
    total: number
  }
  storage: {
    used: number
    total: number
  }
  aiGeneration: {
    used: number
    total: number
  }
  imageGeneration: {
    used: number
    total: number
  }
}