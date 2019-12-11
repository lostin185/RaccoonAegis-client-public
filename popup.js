let serverUrl = 'http://localhost:5000/';

function changePage() {
  chrome.storage.local.get(['status'], result => {
    if (result.status.signinPage) {
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
      pwLabel.setAttribute('for', 'signinPw');
      pwLabel.innerText = '비밀번호:'
      let pwInput = document.createElement('input');
      pwInput.setAttribute('size', '15')
      pwInput.setAttribute('type', 'password')
      pwInput.setAttribute('id', 'signinPw')
      pwInput.setAttribute('placeholder', 'your password')
      pwInput.style.marginLeft = "5px";
      pwInput.style.marginRight = "5px";
      let signinButton = document.createElement('button')
      signinButton.innerText = '로그인'
      signinButton.setAttribute('id', 'signin')
      signinButton.setAttribute('type', 'button')
      div2.appendChild(pwLabel);
      div2.appendChild(pwInput);
      div2.appendChild(signinButton);
  
      signupButton.onclick = () => {        
        document.getElementsByClassName('main')[0].removeChild(formNode)
        chrome.storage.local.set({status: {signinPage: false, signupPage: true, memberPage: false}})
        changePage();
      }
  
      signinButton.onclick = () => {
        const mail = document.getElementById('signinId').value;
        const pw = document.getElementById('signinPw').value;
        const data = {};
        data.mail = mail;
        data.pw = pw;
  
        fetch(serverUrl + 'signin', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (response.status === 200) {
              document.getElementsByClassName('main')[0].removeChild(formNode)
              chrome.storage.local.set({status: {signinPage: false, signupPage: false, memberPage: true}})
              changePage();
            } else {
              alert('에러가 발생하여 로그인되지 않았습니다.')
            }
          })
      }
    }
  })

  chrome.storage.local.get(['status'], result => {
    if (result.status.signupPage) {
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
      idLabel.setAttribute('for', 'signupId');
      idLabel.innerText = '아이디:'
      idLabel.style.marginLeft = '14px';
      let idInput = document.createElement('input');
      idInput.setAttribute('size', '15')
      idInput.setAttribute('type', 'email')
      idInput.setAttribute('id', 'signupId')
      idInput.setAttribute('placeholder', 'id@email.com')
      idInput.style.marginLeft = "5px";
      idInput.style.marginRight = "5px";
      div1.appendChild(idLabel);
      div1.appendChild(idInput);
  
      let pwLabel = document.createElement('label');
      pwLabel.setAttribute('for', 'signupPw');
      pwLabel.innerText = '비밀번호:'
      let pwInput = document.createElement('input');
      pwInput.setAttribute('size', '15')
      pwInput.setAttribute('type', 'email')
      pwInput.setAttribute('id', 'signupPw')
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
        const mail = document.getElementById('signupId').value;
        const pw = document.getElementById('signupPw').value;
        const data = {};
        data.mail = mail;
        data.pw = pw;
  
        fetch(serverUrl + 'signup', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (response.status === 200) {
              alert('회원가입에 성공하였습니다.')
              document.getElementsByClassName('main')[0].removeChild(formNode)
              chrome.storage.local.set({status: {signupPage: false, signinPage: true, memberPage: false}})
              changePage();
            } else if (response.status === 300) {
              alert('중복된 아이디입니다.')
            } else {
              alert('에러가 발생하여 가입되지 않았습니다.')
            }
          })
      }
    }  
  })

  chrome.storage.local.get(['status'], result => {
    if (result.status.memberPage) {
      document.getElementsByClassName('raccoon_says')[0].innerText = "너는 내가 특별히 더 지켜주겠다구!"
  
      let formNode = document.createElement('form');
      document.getElementsByClassName('main')[0].appendChild(formNode)
  
      let layout = document.createElement('div')
      formNode.appendChild(layout);
      layout.style.borderStyle="solid"
      layout.style.borderWidth="1px"
      layout.style.padding="0px";
      layout.style.margin="0px";
      layout.style.width="298px";
      layout.style.height="160px"
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
      addCussInput.setAttribute('id', 'userWords')
      addCussInput.style.marginLeft="15px"
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
      div2.appendChild(ulList);
      ulList.style.paddingTop="5px";
      ulList.style.margin="0px";
  
      function displayWords() {
        fetch(serverUrl + 'inputWord')
          .then(response => {
            if (response.status === 200) {
              return response.json()
            } else {
              alert('에러로 인해 단어를 표시할 수 없습니다.')
            }
          })
          .catch(err => {
            alert(err);
          })
          .then(json => {
            let userWords = json.userWord;
            if (userWords.length !== 0) {
              ulList.style.paddingLeft="30px"
              if (userWords.length > 1) {
                for (let i = userWords.length - 1; i > userWords.length - 3; i--) {
                  let listItem = document.createElement('li');
                  listItem.innerText = userWords[i];
                  ulList.appendChild(listItem);
                }  
              } else {
                for (let i = userWords.length - 1; i > -1; i--) {
                  let listItem = document.createElement('li');
                  listItem.innerText = userWords[i];
                  ulList.appendChild(listItem);
                }
              }
              let leftover = document.createElement('div')
              if (userWords.length > 2) {
                leftover.innerText=`그 외 ${userWords.length - 2}개`
                leftover.style.paddingLeft='15px'
                div2.appendChild(leftover)
              }
            } else {
              ulList.style.padding = "0px";
              ulList.style.textAlign = "center"
              ulList.innerText = '표시할\n단어가\n없습니다.'
            }  
          })
      }

      displayWords();
  
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
      addCussSentence.setAttribute('size', '20')
      addCussSentence.style.paddingLeft="15px"
      div4.appendChild(addCussSentence);
      let addCussLearning = document.createElement('button');
      addCussLearning.setAttribute('type', 'button')
      addCussLearning.setAttribute('id', 'badSentence')
      addCussLearning.innerText="AI가르치기"
      div4.appendChild(addCussLearning);
  
      let div5 = document.createElement('div')
      layout.appendChild(div5);
      div5.style.borderStyle="solid"
      div5.style.borderWidth="1px"
      div5.style.padding="0px";
      div5.style.margin="0px";
      div5.style.float="left"
      div5.style.width="296px"
      div5.style.height="28px";
      let signout = document.createElement('button');
      signout.setAttribute('type', 'button')
      signout.setAttribute('id', 'signoutButton')      
      signout.innerText="로그아웃"
      div5.appendChild(signout);

      addCussLearning.onclick = () => {
        const userSentence = document.getElementById('badSentence').value.trim();
        const data = {};
        data.sentence = userSentence;
        fetch(serverUrl + 'sendSentence', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (response.status === 200) {
              alert('정상적으로 전송되었습니다.');
            } else {
              alert('에러가 발생하여 전송되지 않았습니다.')
            }
          });
      };

      addCussButton.onclick = () => {
        const userWords = document.getElementById('userWords').value.trim();
        const data = {};
        data.inputWord = userWords;
        fetch(serverUrl + 'inputWord', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (response.status === 200) {
              // alert('정상적으로 추가되었습니다.')
              document.getElementsByClassName('main')[0].removeChild(formNode)
              chrome.storage.local.set({status: {signinPage: false, signupPage: false, memberPage: true}})
              changePage();
            } else {
              alert('에러가 발생하여 추가되지 않았습니다.')
            }
          })
      };

      initButton.onclick = () => {
        fetch(serverUrl + 'inputWord', {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(response => {
            if (response.status === 200) {
              document.getElementsByClassName('main')[0].removeChild(formNode)
              changePage();           
            } else {
              alert('에러가 발생하여 삭제되지 않았습니다.')
            }
          })   
      }

      signout.onclick = () => {
        fetch(serverUrl + 'signin')
          .then(response => {
            if (response.status === 200) {
              document.getElementsByClassName('main')[0].removeChild(formNode)
              chrome.storage.local.set({status: {signinPage: true, signupPage: false, memberPage: false}})
              changePage();
            } else {
              alert('에러가 발생하여 로그아웃 되지 않았습니다.')
            }
          })
      }
    }  
  })

  chrome.tabs.executeScript(null, {
    file: 'content_script.js'
  });
}

changePage();

chrome.tabs.executeScript(null, {
  file: 'content_script.js'
});