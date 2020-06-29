import determineDevice from "./determine-device";

export default (ua) => {
  const device = determineDevice(ua);
  if (ua.indexOf('OPR') > 0 || ua.indexOf('Opera') > 0) {
    return 'Opera';
  } else if (ua.indexOf('MSIE ') > 0) {
    return 'deprecatedIE';
  } else if (ua.indexOf('Trident/') > 0) {
    return 'IE11';
  } else if (ua.indexOf('Edge/') > 0) {
    return 'Edge';
  } else if (ua.indexOf('Chrome') > 0) {
    return 'Chrome';
  } else if (ua.indexOf('Firefox') > 0) {
    return 'Firefox';
  } else if (ua.indexOf('Safari') > 0 && device !== 'Android') {
    return 'Safari';
  }
};
