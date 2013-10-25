var userAgentOverride = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:7.0.1) Gecko/20100101 Firefox/7.0.1";

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
  {urls: ["*://mail.{your_domain}.com/owa/*"]},
  ["blocking", "requestHeaders"]);
