'use strict';
import determineBrowser from "./determine-browser";
import determineDevice from "./determine-device";
import determineVersion from "./determine-version";

const ua = window.navigator.userAgent;

const device = determineDevice(ua);
const browser = determineBrowser(ua);
const version = determineVersion(ua);

export default {
  device,
  browser,
  version
};
