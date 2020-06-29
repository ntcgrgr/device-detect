import determineBrowser from "./determine-browser";

export default (ua) => {
  const browser = determineBrowser(ua);
  switch (browser) {
    case 'Opera':
      const regExp = [
        /OPR\/([\d.]*)/,
        /Version\/(.*)? /,
        /Opera\/(\d.)*/
      ].find(regExp => ua.match(regExp))
      return !!regExp
        ? parseInt(ua.match(regExp)[1])
        : undefined;
    case 'deprecatedIE':
      return parseInt(ua.match(/MSIE ([\d.]*);/)[1]);
    case 'IE11':
      return parseInt(ua.match(/rv:([\d.]*)/)[1]);
    case 'Edge':
      return parseInt(ua.match(/Edge?\/(.*)?/)[1]);
    case 'Chrome':
      return parseInt(ua.match(/Chrome\/(.*)? /)[1]);
    case 'Firefox':
      return parseInt(ua.match(/Firefox\/(.*)?/)[1]);
    case 'Safari':
      return parseInt(ua.match(/Version\/(.*)? /)[1]);
  }
  return undefined;
}
