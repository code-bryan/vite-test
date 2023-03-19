import amplitude from "amplitude-js";
import { useRef } from "react";
import { translate } from "src/locales";

const AMPLITUDE_KEY = import.meta.env.VITE_AMPLITUDE_KEY as string;

export default function useAmplitude() {
  const { current } = useRef(amplitude.getInstance());

  const initialize = () => {
    if (!AMPLITUDE_KEY) {
      console.error(translate('amplitude.key-missing'));
      return;
    }
    
    current.init(AMPLITUDE_KEY)
  }

  const setUserDevice = (deviceId: string) => current.setDeviceId(deviceId);
  const setUserId = (userId: string) => current.setUserId(userId);
  const setProperties = (properties: any) => current.setUserProperties(properties);
  const send = (eventType: string, eventProperties: any) => current.logEvent(eventType, eventProperties);

  return {
    operations: {
      initialize,
      setUserDevice,
      setUserId,
      setProperties,
      send,
    }
  }
}