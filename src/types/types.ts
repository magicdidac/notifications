export enum NotificationTypes {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export interface NotificationEvent extends Event {
  detail?: Notification
}

export interface Notification {
  message: string,
  type: NotificationTypes
}

export interface NotificationWithId extends Notification {
  id: number
}

export interface ColorPair {
  default: string
  hover: string
}