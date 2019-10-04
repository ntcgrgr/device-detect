Device Detect
=============
JavaScript module to check if user agent to return the device and browser.


## Use

```js
import deviceDetect from 'device-detect';

// return all device and browser object
console.log(deviceDetect);

// result example:
/* {
  "device":"Macintosh",
  "browser":"Chrome"
} */

console.log(deviceDetect.device); // returns Macintosh
console.log(deviceDetect.browser); // returns Chrome
```

## Supported
Devices: 
- iPhone
- iPad
- iPod
- Blackberry
- WindowsMobile
- Android
- Macintosh
- Windows
- Linux

Browsers: 
- Chrome
- Opera
- Firefox
- Safari
- IE < 11
- IE11
- Edge
 
## Release History
* 1.0.7: Update test script.
* 1.0.6: Add test.js.
* 1.0.6: Add Linux detection.
* 1.0.5: Update documentation.
* 1.0.4: Add support for Windows Mobile.
* 1.0.3: Update documentation.
* 1.0.2: Update description.
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## License
MIT © [Ryan Burgess](https://github.com/ryanburgess)

##Gather Test data from [whatismybrowser.com](https://developers.whatismybrowser.com/useragents/explore/)
```js
/** For getting browser bases ua's from */
const browser = 'Chrome';
const resultA = Array.prototype.reduce.call(document.querySelectorAll('table tr'), (acc, tr) => {
  const cells = tr.cells;
  const ua = cells[0].innerText;
  const version = cells[1].innerText;
  const device = cells[2].innerText;
  const hardware = cells[3].innerText;

  return {...acc, [`${device} on ${hardware} running ${browser} ${version}`]: {ua, device, browser, version}};
}, {});
JSON.stringify(resultA);

/** for getting device based ua's from */
const device = 'Android';
const resultB = Array.prototype.reduce.call(document.querySelectorAll('table tr'), (acc, tr) => {
  const cells = tr.cells;
  const ua = cells[0].innerText;
  const software = cells[1].innerText.split(' ');
  const version = software.pop();
  const browser = software.join(' ');
  const hardware = cells[3].innerText;
​
  return {...acc, [`${device} on ${hardware} running ${browser} ${version}`]: {ua, device, browser, version}};
}, {});
JSON.stringify(resultB);
```
