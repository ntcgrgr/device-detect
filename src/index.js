'use strict';
import determineBrowser from "./determine-browser";
import determineDevice from "./determine-device";

const ua = window.navigator.userAgent;

const device = determineDevice(ua);
const browser = determineBrowser(ua);
const version = browser === 'Safari' ? parseInt(ua.match(/Version\/(.*)? /)[1]) : undefined;

export default {
  device,
  browser,
  version
};
