import { useCallback, useEffect, useState } from "react"
import { EVENT_NAME } from "../constants"
import { Notification, NotificationEvent, NotificationWithId } from "../types/types"
import '../styles/toast.css'
import { Toast } from "../Components/Toast"

export const NotificationProvider = () => {
  const [notifications, setNotifications] = useState<NotificationWithId[]>([])

  const addNotification = useCallback((event: NotificationEvent) => {
    if (event.detail) {
      console.log('Notification:', event.detail)
      setNotifications([...notifications, { ...event.detail, id: Date.now() }])
    }
  }, [])

  const removeNotification = (notificationId: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== notificationId))
  }

  useEffect(() => {
    window.addEventListener(EVENT_NAME, addNotification)

    return () => {
      window.removeEventListener(EVENT_NAME, addNotification)
    }
  }, [addNotification])

  return (
    <div className="toast-container">
      {
        notifications.map((notification) => (
          <Toast key={notification.id} notification={notification} onClose={removeNotification} />
        ))
      }
    </div>
  )
}