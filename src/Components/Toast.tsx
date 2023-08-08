import { CloseIcon } from "../icons/CloseIcon"
import { ErrorIcon } from "../icons/ErrorIcon"
import { InfoIcon } from "../icons/InfoIcon"
import { SuccessIcon } from "../icons/SuccessIcon"
import { WarningIcon } from "../icons/WarningIcon"
import { ColorPair, NotificationTypes, NotificationWithId } from "../types/types"
import '../styles/toast.css'
import { useEffect, useState } from "react"

interface IToastProps {
  notification: NotificationWithId
  onClose: (notificationId: number) => void
}

export const Toast = ({ notification, onClose }: IToastProps) => {
  const [closing, setClosing] = useState(false)

  const getIcon = (): JSX.Element => {
    switch (notification.type) {
      case NotificationTypes.success:
        return <SuccessIcon />
      case NotificationTypes.error:
        return <ErrorIcon />
      case NotificationTypes.warning:
        return <WarningIcon />
      case NotificationTypes.info:
        return <InfoIcon />
    }
  }

  const getColor = (): string => {
    switch (notification.type) {
      case NotificationTypes.success:
        return '#3ab65c'
      case NotificationTypes.error:
        return '#bf333b'
      case NotificationTypes.warning:
        return '#bc8c12'
      case NotificationTypes.info:
        return '#1898c0'
    }
  }

  useEffect(() => {
    setInterval(() => onClose(notification.id), 5000)
  }, [])

  const handleClose = () => {
    if (!closing) {
      setClosing(true)
      setInterval(() => onClose(notification.id), 200)
    }
  }

  return (
    <div className={closing ? 'toast toast-closing' : 'toast'} style={{ background: getColor() }}>
      <div className="toast-content">
        <div className="toast-icon">
          {getIcon()}
        </div>
        <div>
          <p>{notification.message}</p>
        </div>
      </div>
      <button className="toast-button" onClick={handleClose}>
        <div className="toast-close-icon">
          <CloseIcon />
        </div>
      </button>
    </div>
  )
}