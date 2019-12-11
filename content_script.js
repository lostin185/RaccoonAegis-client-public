chrome.storage.local.get(['status'], result => {
  if (result.status.memberPage) {
    chrome.runtime.sendMessage(
      {contentScriptQuery: "deepModel", endpoint:"usemodel", dataToSend:(() => {
        let data = { text: [] }
        // let elements = Array.from(document.querySelectorAll('p, span, li, td'))
        // 8번째 줄 - 네이버 뉴스 한정
        let elements = Array.from(document.getElementsByClassName('u_cbox_contents'))
        for (let element of elements) {
          data.text.push(element.innerText)
        }    
        return data
      })()},
      json => {
        // let elements = Array.from(document.querySelectorAll('p, span, li, td'))
        // 17번째 줄 - 네이버 뉴스 한정
        let elements = Array.from(document.getElementsByClassName('u_cbox_contents'))
        let probability = json.prob;
        for (let i = 0; i < probability.length; i++) {
          if (Number(probability[i]) > 0.7) {
            elements[i].innerText = "이 문장은 너굴맨이 처리했다구!"
          }
        }

        if (result.status.memberPage) {
          chrome.runtime.sendMessage(
            {contentScriptQuery: "getWords", endpoint:"inputWord"},
            json => {
              userWords = json.userWord
              const dataPlace = chrome.runtime.getURL('data.json')
              fetch(dataPlace)
                .then(response => response.json())
                .then(givenJson => givenJson.words)
                .then(localWords => {
                  let fullWords = localWords.concat(userWords)
                  let regExp = new RegExp("(" + fullWords.join("|") + ")")
                  // let elements = Array.from(document.querySelectorAll('p, span, li, td'))
                  // 39번째 줄 - 네이버 뉴스 한정
                  let elements = Array.from(document.getElementsByClassName('u_cbox_contents'))
                  function replaceAll(str, searchStr, replaceStr) {
                    return str.split(searchStr).join(replaceStr);
                  }
                  for (element of elements) {
                    for (let i = 0; i < fullWords.length; i++) {
                      if (regExp.test(element.innerText)) {
                        element.innerText = replaceAll(element.innerText, fullWords[i], "★★★");
                      }
                    }              
                  }
                })
            }
          )
        }
      })
  }
})

chrome.storage.local.get(['status'], result => {

  if (!result.status.memberPage) {
    const dataPlace = chrome.runtime.getURL('data.json')

    fetch(dataPlace)
      .then(response => response.json())
      .then(givenJson => {
        let fullWords = givenJson.words;
        let regExp = new RegExp("(" + fullWords.join("|") + ")");
    
        function replaceAll(str, searchStr, replaceStr) {
          return str.split(searchStr).join(replaceStr);
        }
    
        // let elements = Array.from(document.querySelectorAll("p, span, li, td"));
        // 75번째 줄 - 네이버 댓글 한정
        let elements = Array.from(document.getElementsByClassName('u_cbox_contents'))
        for (let element of elements) {
          for (let i = 0; i < fullWords.length; i++) {
            if (regExp.test(element.innerText)) {
              element.innerText = replaceAll(element.innerText, fullWords[i], "★★★");
            }
          }
        }
      })
  }
})
