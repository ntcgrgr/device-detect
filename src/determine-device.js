export default (ua) => {
  if (ua.match(/(iPhone)/)) {
    return 'iPhone';
  } else if (ua.match(/(iPad)/)) {
    return 'iPad';
  } else if (ua.match(/(iPod)/)) {
    return 'iPod';
  } else if (ua.match(/(BlackBerry|BB10)/)) {
    return 'BlackBerry';
  } else if (ua.match(/(IEMobile)/)) {
    return 'WindowsMobile';
  } else if (ua.match(/(Android)/)) {
    return 'Android';
  } else if (ua.match(/(Macintosh)/)) {
    return 'Macintosh';
  } else if (ua.match(/(Windows)/)) {
    return 'Windows';
  } else if (ua.match(/(Linux)/)) {
    return 'Linux';
  }
};
