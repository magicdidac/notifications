import { EVENT_NAME } from "../constants"
import { NotificationTypes } from "../types/types"

export const useNotifications = () => {
  const showNotification = (message: string, type: NotificationTypes = NotificationTypes.success) => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { message, type } }))
  }

  const success = (message: string) => {
    showNotification(message)
  }

  const error = (message: string) => {
    showNotification(message, NotificationTypes.error)
  }

  const warning = (message: string) => {
    showNotification(message, NotificationTypes.warning)
  }

  const info = (message: string) => {
    showNotification(message, NotificationTypes.info)
  }

  return {
    success,
    error,
    warning,
    info
  }
}