export enum NotificationTypes {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export interface NotificationEvent extends Event {
  detail?: {
    message: string,
    type: NotificationTypes
  }
}