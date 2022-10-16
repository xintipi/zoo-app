import { notification } from 'antd';
import { IconType } from 'antd/es/notification';
import { ArgsProps } from 'antd/lib/notification';

interface Notification {
  type: IconType;
  message?: ArgsProps['message'];
  description?: ArgsProps['description'];
  placement?: ArgsProps['placement'];
  duration?: ArgsProps['duration'];
  maxCount?: ArgsProps['maxCount'];
}

function UseNotification() {
  const openNotification = ({
    type,
    message,
    description,
    placement,
    duration = 2.5,
    maxCount = 1,
  }: Notification) => {
    notification[type]({
      message,
      description,
      placement,
      duration,
      maxCount,
    });
  };

  return { openNotification };
}

export default UseNotification;
