import { EVENT_NAME } from "../constants"
import { NotificationOptions, NotificationTypes } from "../types/types"

/**
 * Returns an object with 4 functions to invoke different Notification types
 */
export const useNotifications = () => {
  const showNotification = (message: string, type: NotificationTypes, options?: NotificationOptions) => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { message, type, options } }))
  }

  /**
   * Invokes a Success Notification
   * @param message Message you want to show
   * @param options (optional) Notification toast options
   */
  const success = (message: string, options?: NotificationOptions) => {
    showNotification(message, NotificationTypes.success, options)
  }

  /**
 * Invokes an Error Notification
 * @param message Message you want to show
 * @param options (optional) Notification toast options
 */
  const error = (message: string, options?: NotificationOptions) => {
    showNotification(message, NotificationTypes.error, options)
  }

  /**
 * Invokes a Warning Notification
 * @param message Message you want to show
 * @param options (optional) Notification toast options
 */
  const warning = (message: string, options?: NotificationOptions) => {
    showNotification(message, NotificationTypes.warning, options)
  }

  /**
 * Invokes an Information Notification
 * @param message Message you want to show
 * @param options (optional) Notification toast options
 */
  const info = (message: string, options?: NotificationOptions) => {
    showNotification(message, NotificationTypes.info, options)
  }

  return {
    success,
    error,
    warning,
    info
  }
}