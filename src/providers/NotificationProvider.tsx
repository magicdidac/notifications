import { useCallback, useEffect, useState } from "react"
import { EVENT_NAME } from "../constants"
import { NotificationEvent } from "../types/types"

export const NotificationProvider = () => {
  const [notifications, setNotifications] = useState<string[]>([])

  const addNotification = useCallback((event: NotificationEvent) => {
    if (event.detail) {
      setNotifications([...notifications, event.detail.message])
    }
  }, [])

  useEffect(() => {
    window.addEventListener(EVENT_NAME, addNotification)

    return () => {
      window.removeEventListener(EVENT_NAME, addNotification)
    }
  }, [addNotification])

  return (
    <div>
      Hello
    </div>
  )
}