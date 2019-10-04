import testDataProvider from "./test-data-provider";
import  determineBrowser from "../src/determine-browser";


Object.entries(testDataProvider).forEach(([name, {ua, device, browser}]) => {
  test(name, () => {
    expect(determineBrowser(ua)).toBe(browser);
  });
});
