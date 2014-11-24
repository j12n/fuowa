var userAgentOverride = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0";

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = userAgentOverride;
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  {urls: ["*://mail.{your_domain}.com/owa/*", "*://legacy.{your_domain}.com/owa/*"]},
  ["blocking", "requestHeaders"]);
