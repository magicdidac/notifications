import { CloseIcon } from "../icons/CloseIcon"
import { ErrorIcon } from "../icons/ErrorIcon"
import { InfoIcon } from "../icons/InfoIcon"
import { SuccessIcon } from "../icons/SuccessIcon"
import { WarningIcon } from "../icons/WarningIcon"
import { CompletNotification, NotificationTypes } from "../types/types"
import '../styles/toast.css'
import { AnimationEvent, useState } from "react"

interface IToastProps {
  notification: CompletNotification
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

  const closeToast = (event: AnimationEvent) => {
    if (event.animationName === 'progressing') {
      setClosing(true)
    }

    if (closing) {
      onClose(notification.id)
    }
  }

  const handleClose = () => {
    if (!closing) {
      setClosing(true)
    }
  }

  const getToastClases = (): string => {
    const classes = ['toast']

    if (!notification.options || notification.options.autoClose === undefined || notification.options.autoClose === true) classes.push('toast-autoClose')

    if (closing) classes.push('toast-closing')

    return classes.join(' ')
  }

  return (
    <div className={getToastClases()} style={{ background: getColor() }} onAnimationEnd={closeToast}>
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