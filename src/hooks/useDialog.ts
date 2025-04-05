import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import {
  sendMessage,
  generateOutline,
  generateSlideContent,
  suggestImprovements,
  clearMessages,
  clearOutline,
  clearSuggestions,
} from "../store/slices/dialogSlice"
import type { SlideOutline } from "../types/project"

export const useDialog = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { messages, loading, error, outline, suggestions } = useSelector((state: RootState) => state.dialog)

  const sendMessageToAI = (projectId: string, message: string) => {
    return dispatch(sendMessage({ projectId, message }))
  }

  const generatePresentationOutline = (projectId: string, topic: string) => {
    return dispatch(generateOutline({ projectId, topic }))
  }

  const generateContent = (projectId: string, slideIndex: number, slideOutline: SlideOutline) => {
    return dispatch(generateSlideContent({ projectId, slideIndex, outline: slideOutline }))
  }

  const getSuggestions = (projectId: string, slideIndex: number) => {
    return dispatch(suggestImprovements({ projectId, slideIndex }))
  }

  const clearAllMessages = () => {
    dispatch(clearMessages())
  }

  const clearCurrentOutline = () => {
    dispatch(clearOutline())
  }

  const clearCurrentSuggestions = () => {
    dispatch(clearSuggestions())
  }

  return {
    messages,
    loading,
    error,
    outline,
    suggestions,
    sendMessageToAI,
    generatePresentationOutline,
    generateContent,
    getSuggestions,
    clearAllMessages,
    clearCurrentOutline,
    clearCurrentSuggestions,
  }
}