chrome.storage.local.set({
  status: {
    signinPage: true,
    signupPage: false,
    memberPage: false
  }
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == "getWords") {
      var url = "http://localhost:5000/" + encodeURIComponent(request.endpoint);
      fetch(url)
        .then(response => response.json())
        .then(json => sendResponse(json))
        .catch(error => console.log(error))
      return true;  // Will respond asynchronously.
    }
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == "deepModel") {
      var url = "http://localhost:5000/" + encodeURIComponent(request.endpoint);
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.dataToSend)
      })
        .then(response => response.json())
        .then(json => sendResponse(json))
        .catch(error => console.log(error))
      return true;
    }
  });

  chrome.storage.onChanged.addListener(() => {
    console.log('status changed')
  })