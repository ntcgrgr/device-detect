import testDataProvider from "./test-data-provider";
import determineDevice from "../src/determine-device";

Object.entries(testDataProvider).forEach(([name, {ua, device, browser}]) => {
  test(name, () => {
    expect(determineDevice(ua)).toBe(device);
  });
});
