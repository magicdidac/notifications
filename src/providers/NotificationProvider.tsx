import { useCallback, useEffect, useState } from "react"
import { EVENT_NAME } from "../constants"
import { CompletNotification, NotificationEvent, PositionX, PositionY } from "../types/types"
import { Toast } from "../Components/Toast"
import '../styles/toast.css'

interface INotificationProviderProps {
  positionX?: PositionX
  positionY?: PositionY
  width?: string
}

/**
 * This provider makes that you can invoke a Notification using the notification hook wherever you want
 */
export const NotificationProvider = (props: INotificationProviderProps) => {
  const [notifications, setNotifications] = useState<CompletNotification[]>([])

  const addNotification = useCallback((event: NotificationEvent) => {
    if (event.detail) {
      console.log(event.detail)
      setNotifications([...notifications, { ...event.detail, id: Date.now() }])
    }
  }, [notifications])

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
    <div
      className={["toast-container", props.positionX ?? PositionX.right, props.positionY ?? PositionY.bottom].join(' ')}
      style={{ maxWidth: props.width ?? '400px' }}
    >
      {
        notifications.map((notification) => (
          <Toast key={notification.id} notification={notification} onClose={removeNotification} />
        ))
      }
    </div>
  )
}