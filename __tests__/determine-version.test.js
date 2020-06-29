import testDataProvider from "./test-data-provider";
import determineVersion from "../src/determine-version";

Object.entries(testDataProvider).forEach(([name, {ua, version}]) => {
  test(name, () => {
    expect(determineVersion(ua)).toBe(version);
  });
});
