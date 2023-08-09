export enum NotificationTypes {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export enum PositionX {
  left = 'toast-left',
  center = 'toast-center',
  right = 'toast-right'
}

export enum PositionY {
  top = 'toast-top',
  bottom = 'toast-bottom'
}

export interface NotificationEvent extends Event {
  detail?: Notification
}

export interface NotificationOptions {
  autoClose?: boolean
}

export interface Notification {
  message: string
  type: NotificationTypes
  options?: NotificationOptions
}

export interface CompletNotification extends Notification {
  id: number
}