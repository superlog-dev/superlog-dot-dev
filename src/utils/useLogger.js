import amplitude from "amplitude-js";

export default function useLogger() {
  const logEvent = (eventName, data) => {
    amplitude.getInstance().logEvent(eventName, data);
  };
  return { logEvent };
}
