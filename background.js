const kMatchRule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: "<all_urls>" }
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([kMatchRule]);
  });
});

chrome.storage.local.set({
  status: {
    signinPage: true,
    signupPage: false,
    memberPage: false
  }
})