let status = {
  signinPage: true,
  signupPage: false,
  memberPage: false
}

function changePage() {

  if (status.signinPage) {

    let response = 200

    if (response === 200) {
      document.getElementsByClassName('raccoon_says')[0].innerText = "못된 악플들은 내가 다 처리했으니 걱정말라구!"

      let formNode = document.createElement('form');
      document.getElementsByClassName('main')[0].appendChild(formNode);
      
      let layout = document.createElement('div')
      layout.style.borderStyle="solid";
      layout.style.borderWidth="1px";
      layout.style.padding="0px";
      layout.style.margin="0px";
      layout.style.width="298px";
      layout.style.height="62px";
      formNode.appendChild(layout);

      let div1 = document.createElement('div');
      div1.style.borderStyle="solid";
      div1.style.borderWidth="1px";
      div1.style.padding="0px";
      div1.style.margin="0px";
      div1.style.width="278px";
      div1.style.padding="2px 10px";

      let div2 = document.createElement('div');
      div2.style.borderStyle="solid";
      div2.style.borderWidth="1px";
      div2.style.padding="0px";
      div2.style.margin="0px";
      div2.style.width="278px";
      div2.style.padding="2px 10px";

      layout.appendChild(div1)
      layout.appendChild(div2)

      let idLabel = document.createElement('label');
      idLabel.setAttribute('for', 'signinId');
      idLabel.innerText = '아이디:'
      idLabel.style.marginLeft = '14px';
      let idInput = document.createElement('input');
      idInput.setAttribute('size', '15')
      idInput.setAttribute('type', 'email')
      idInput.setAttribute('id', 'signinId')
      idInput.setAttribute('placeholder', 'id@email.com')
      idInput.style.marginLeft = "5px";
      idInput.style.marginRight = "5px";
      let signupButton = document.createElement('button')
      signupButton.innerText = '가입하기'
      signupButton.setAttribute('id', 'signup')
      signupButton.setAttribute('type', 'button')
      div1.appendChild(idLabel);
      div1.appendChild(idInput);
      div1.appendChild(signupButton)

      let pwLabel = document.createElement('label');
      pwLabel.setAttribute('for', 'signinId');
      pwLabel.innerText = '비밀번호:'
      let pwInput = document.createElement('input');
      pwInput.setAttribute('size', '15')
      pwInput.setAttribute('type', 'email')
      pwInput.setAttribute('id', 'signinId')
      pwInput.setAttribute('placeholder', 'your password')
      pwInput.style.marginLeft = "5px";
      pwInput.style.marginRight = "5px";
      let signinButton = document.createElement('button')
      signinButton.innerText = '로그인'
      signinButton.setAttribute('id', 'signup')
      signinButton.setAttribute('type', 'button')
      div2.appendChild(pwLabel);
      div2.appendChild(pwInput);
      div2.appendChild(signinButton);

      signupButton.onclick = () => {
        document.getElementsByClassName('main')[0].removeChild(formNode)
        status.signinPage = false;
        status.signupPage = true;
        changePage();
      }

      signinButton.onclick = () => {
        document.getElementsByClassName('main')[0].removeChild(formNode)
        status.signinPage = false;
        status.memberPage = true;
        changePage();
      }
    }
  }

  if (status.signupPage) {

    let response = 200

    if (response === 200) {
      document.getElementsByClassName('raccoon_says')[0].innerText = "너! 내 동료가 되라구!";

      let formNode = document.createElement('form');
      document.getElementsByClassName('main')[0].appendChild(formNode);
      
      let layout = document.createElement('div')
      layout.style.borderStyle="solid";
      layout.style.borderWidth="1px";
      layout.style.padding="0px";
      layout.style.margin="0px";
      layout.style.width="298px";
      layout.style.height="62px";
      formNode.appendChild(layout);

      let div1 = document.createElement('div');
      div1.style.borderStyle="solid";
      div1.style.borderWidth="1px";
      div1.style.padding="0px";
      div1.style.margin="0px";
      div1.style.width="278px";
      div1.style.padding="3px 10px";

      let div2 = document.createElement('div');
      div2.style.borderStyle="solid";
      div2.style.borderWidth="1px";
      div2.style.padding="0px";
      div2.style.margin="0px";
      div2.style.width="278px";
      div2.style.padding="2px 10px";

      layout.appendChild(div1)
      layout.appendChild(div2)

      let idLabel = document.createElement('label');
      idLabel.setAttribute('for', 'signinId');
      idLabel.innerText = '아이디:'
      idLabel.style.marginLeft = '14px';
      let idInput = document.createElement('input');
      idInput.setAttribute('size', '15')
      idInput.setAttribute('type', 'email')
      idInput.setAttribute('id', 'signinId')
      idInput.setAttribute('placeholder', 'id@email.com')
      idInput.style.marginLeft = "5px";
      idInput.style.marginRight = "5px";
      div1.appendChild(idLabel);
      div1.appendChild(idInput);

      let pwLabel = document.createElement('label');
      pwLabel.setAttribute('for', 'signinId');
      pwLabel.innerText = '비밀번호:'
      let pwInput = document.createElement('input');
      pwInput.setAttribute('size', '15')
      pwInput.setAttribute('type', 'email')
      pwInput.setAttribute('id', 'signinId')
      pwInput.setAttribute('placeholder', 'your password')
      pwInput.style.marginLeft = "5px";
      pwInput.style.marginRight = "5px";
      let signupButton = document.createElement('button')
      signupButton.innerText = '가입하기'
      signupButton.setAttribute('id', 'signup')
      signupButton.setAttribute('type', 'button')
      div2.appendChild(pwLabel);
      div2.appendChild(pwInput);
      div2.appendChild(signupButton);  

      signupButton.onclick = () => {
        document.getElementsByClassName('main')[0].removeChild(formNode)
        status.signupPage = false;
        status.signinPage = true;
        changePage();
      }

    }
  }


  if (status.memberPage) {

    let response = 200

    if (response === 200) {
      document.getElementsByClassName('raccoon_says')[0].innerText = "(아이디!) 너는 내가 특별히 더 지켜주겠다구!"

      let formNode = document.createElement('form');
      document.getElementsByClassName('main')[0].appendChild(formNode)

      let layout = document.createElement('div')
      formNode.appendChild(layout);
      layout.style.borderStyle="solid"
      layout.style.borderWidth="1px"
      layout.style.padding="0px";
      layout.style.margin="0px";
      layout.style.width="298px";
      layout.style.height="130px"
      formNode.appendChild(layout)

      let div1 = document.createElement('div')
      layout.appendChild(div1);
      div1.style.borderStyle="solid"
      div1.style.borderWidth="1px"
      div1.style.paddingTop="10px";
      div1.style.margin="0px";
      div1.style.float="left"
      div1.style.width="172px"
      div1.style.height="65px";
      div1.innerText="너굴맨! 이 단어들을 막아줘!"
      let addCussInput = document.createElement('input');
      addCussInput.setAttribute('size', '10')
      addCussInput.style.paddingLeft="15px"
      div1.appendChild(addCussInput);
      let addCussButton = document.createElement('button');
      addCussButton.setAttribute('type', 'button')
      addCussButton.innerText="추가!"
      div1.appendChild(addCussButton);

      let div2 = document.createElement('div')
      layout.appendChild(div2);
      div2.style.borderStyle="solid"
      div2.style.borderWidth="1px"
      div2.style.padding="0px";
      div2.style.margin="0px";
      div2.style.float="left"
      div2.style.width="90px"
      div2.style.height="75px";
      let ulList = document.createElement('ul');
      ulList.style.paddingTop="5px";
      ulList.style.margin="0px";
      ulList.style.paddingLeft="30px"
      let wordList = ['바보', '거지', '멍청이', '말미잘']
      for (let i = 0; i < 2; i++) {
        let liList = document.createElement('li');
        liList.innerText = wordList[i];
        ulList.appendChild(liList);
      }
      div2.appendChild(ulList);
      let leftover = document.createElement('div')
      leftover.innerText=`그 외 ${wordList.length - 2}개`
      leftover.style.paddingLeft='15px'
      div2.appendChild(leftover)

      let div3 = document.createElement('div')
      layout.appendChild(div3);
      div3.style.borderStyle="solid"
      div3.style.borderWidth="1px"
      div3.style.padding="0px";
      div3.style.margin="0px";
      div3.style.float="left"
      div3.style.width="30px"
      div3.style.height="75px";
      let initButton = document.createElement('button')
      initButton.style.width="30px"
      initButton.style.height="75px"
      initButton.style.writingMode="tb-rl"
      initButton.innerText="초기화"
      initButton.setAttribute('type', 'button')
      div3.appendChild(initButton)

      let div4 = document.createElement('div')
      layout.appendChild(div4);
      div4.style.borderStyle="solid"
      div4.style.borderWidth="1px"
      div4.style.padding="0px";
      div4.style.margin="0px";
      div4.style.float="left"
      div4.style.width="296px"
      div4.style.height="53px";
      div4.innerText="○◎ 너굴AI가 정상적으로 작동합니다 ◎○"
      div4.style.textAlign="center"
      let addCussSentence = document.createElement('input');
      addCussSentence.setAttribute('size', '10')
      addCussSentence.style.paddingLeft="15px"
      div4.appendChild(addCussSentence);
      let addCussLearning = document.createElement('button');
      addCussLearning.setAttribute('type', 'button')
      addCussLearning.innerText="AI가르치기"
      div4.appendChild(addCussLearning);

      addCussLearning.onclick = () => {
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
     
      addCussButton.onclick = () => {
        const userWords = document.getElementById('userWords').value.trim();
        chrome.storage.local.get(['words'], object => {
          const newWords = object.words || [];
          newWords.push(userWords);
          chrome.storage.local.set({ words: newWords });
        });
        chrome.tabs.executeScript(null, {
          file: "content_script.js"
        });
        execut();
      };

      initButton.onclick = () => {
        chrome.storage.local.clear();
        execut();
      };      
    
    }
  }
}

changePage();


// function displayWords() {
//   chrome.storage.local.get(['words'], object => {
//     const pageList = document.getElementById('displayWords');
//     if (object.words) {
//       const searchWords = object.words;
//       for (let i = 0; i < searchWords.length; i += 1) {
//         const listItem = document.createElement('li');
//         listItem.innerText = searchWords[i];
//         pageList.appendChild(listItem);
//       }
//     }
//   });
// }

// displayWords();

const execut = () => {
  // executeScript를 여러번 실행시키기 위해 함수 작성.
  chrome.tabs.executeScript(null, {
    file: 'content_script.js'
  });
};

execut();

