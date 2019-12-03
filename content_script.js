let serverUrl = ""

chrome.storage.local.get(['status'], result => {
  if (result.status.memberPage) {
    dataUrl = chrome.runtime.getURL('./data.json')
  
    fetch(dataUrl)
      .then(response => response.json())
      .then(json => json.words)
      .then(localWords => {
        fetch(serverUrl + '/inputWord')
          .then(response => {
            if (response.status === 200) {
              return response.json()
            }
          })
          .then(json => json.words)
          .then(serverWords => {
            return serverWords.concat(localWords);
          })
          .then(fullWords => {
            let regExp = new RegExp("(" + fullWords.join("|") + ")");      

            const sets = "p, span, li, td, h1, h2, h3, th";

            function replaceAll(str, searchStr, replaceStr) {
              return str.split(searchStr).join(replaceStr);
            }

            let data = { text: [] };
            let elements = Array.from(document.querySelectorAll(sets))
            
            for (let element of elements) {
              data.text.push(element.innerText)
            }

            fetch(serverUrl + 'usemodel', {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              .then(response => response.json())
              .then(json => {
                let probability = json.body.prob;
                for (let i = 0; i < probability.length; i++) {
                  if (probability[i] > 0.5) {  ////////////////////////////////////50% 이상일 경우
                    elements[i].innerText = "이 문장은 너굴맨이 처리했다구!"
                  }
                }
              })
              .then(() => {
                for (element of elements) {
                  for (let i = 0; i < fullWords.length; i++) {
                    if (regExp.test(element.innerText)) {
                      element.innerText = replaceAll(element.innerText, fullWords[i], "***");
                    }
                  }              
                }
              })
          })
      })
  }
})


chrome.storage.local.get(['status'], result => {
  if (!result.status.memberPage) {
  const dataPlace = chrome.runtime.getURL('./data.json')
  
  fetch(dataPlace)
    .then(response => response.json())
    .then(givenJson => {
      let fullWords = givenJson.words;
      let regExp = new RegExp("(" + words.join("|") + ")");
      const sets = "p, span, li, td, h1, h2, h3, th";
  
      function replaceAll(str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
      }
  
      let elements = Array.from(document.querySelectorAll(sets));
      for (let element of elements) {
        for (let i = 0; i < fullWords.length; i++) {
          if (regExp.test(element.innerText)) {
            element.innerText = replaceAll(element.innerText, fullWords[i], "***");
          }
        }
      }
    })
  }
})
