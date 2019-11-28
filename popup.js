function displayWords() {
  chrome.storage.local.get(['words'], object => {
    const pageList = document.getElementById('displayWords');
    if (object.words) {
      const searchWords = object.words;
      for (let i = 0; i < searchWords.length; i += 1) {
        const listItem = document.createElement('li');
        listItem.innerText = searchWords[i];
        pageList.appendChild(listItem);
      }
    }
  });
}

displayWords();

const execut = () => {
  // executeScript를 여러번 실행시키기 위해 함수 작성.
  chrome.tabs.executeScript(null, {
    file: 'content_script.js'
  });
};

document.getElementById('badInput').onclick = () => {
  const userWords = document.getElementById('badSentence').value.trim();
  fetch('http://127.0.0.1:5000/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(userWords) // body data type must match "Content-Type" header
  }).then(response => console.log(response.json())); // parses JSON response into native JavaScript objects
};

document.getElementById('wordSubmit').onclick = () => {
  const userWords = document.getElementById('userWords').value.trim();
  chrome.storage.local.get(['words'], object => {
    const newWords = object.words || [];
    newWords.push(userWords);
    chrome.storage.local.set({ words: newWords });
  });
  /* chrome.tabs.executeScript(null, {
    file: "content_script.js"
  }); */
  execut();
};

execut();

document.getElementById('clearList').onclick = () => {
  chrome.storage.local.clear();
  execut();
};
