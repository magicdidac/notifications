# @magicdidac/notifications

This is a package to be able to use notifications in any react application.

## Install

With npm
```sh
npm i @magicdidac/notifications
```

With yarn
```sh
yarn add @magicdidac/notifications
```

## Examples

These are some examples of the four types of notification.

![screenshoot]


## How to use

### NotificationProvider

`index.tsx`
```js
import {NotificationProvider} from '@magicdidac/notifications'
...
<React.StrictMode>
  <App />
  <NotificationProvider />
</React.StrictMode>
...
```

#### Properties

| Property  | Description                                                   | Default          | Values                                                |
|-----------|---------------------------------------------------------------|------------------|-------------------------------------------------------|
| positionX | The horizontal position where the notifications will be shown | PositionX.right  | PositionX.left \| PositionX.center \| PositionX.right |
| postionY  | The vertical position where the notifications will be shown   | PositionY.bottom | PositionY.top \| PositionY.bottom                     |
| width     | The width of the notifications                                | 400px            | string                                                |

### useNotifications

This is a hook to invoke notifications

```js
import { useNotifications } from '@magicdidac/notification'
...
const notifications = useNotifications()
...
return (
 <button onClick={() => notifications.success("It's working!")}>Click Me!</button>
)
...
```

#### Functions

Every function has the same parameters
| Parameter         | Description                                                        | Optional | Default |
|-------------------|--------------------------------------------------------------------|----------|---------|
| message           | The message to show                                                |    No    |         |
| options.autoClose | Set to true to close the notification automatically over 5 seconds |    Yes   | true    |

These are all the functions

| Function |  Example |
|----------|----------|
| .success |![success]|
| .error   |![error]  |
| .warning |![warning]|
| .info    |![info]   |

[screenshoot]: images/screenshoot.png
[success]: images/success.png
[error]: images/error.png
[warning]: images/warning.png
[info]: images/info.png