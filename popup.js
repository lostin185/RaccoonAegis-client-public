document.getElementById('signup_button').onclick = () => {
  let formNode = document.createElement('form');
  document.body.replaceChild(formNode, document.getElementById('form'));
  
  let div1Node = document.createElement('div');
  div1Node.setAttribute('class', 'input_place1')
  let div2Node = document.createElement('div');
  div2Node.setAttribute('class', 'input_place2')
  formNode.appendChild(div1Node)
  formNode.appendChild(div2Node)

  let label1Node = document.createElement('label');
  label1Node.setAttribute('for', 'signupId')
  label1Node.innerText = '아이디:'
  let input1Node = document.createElement('input');
  input1Node.setAttribute('size', '15')
  input1Node.setAttribute('type', 'email')
  input1Node.setAttribute('id', 'signupId')
  input1Node.setAttribute('placeholder', 'id@email.com')
  div1Node.appendChild(label1Node)
  div1Node.appendChild(input1Node)
  
  let label2Node = document.createElement('label');
  label2Node.setAttribute('for', 'signupPw')
  label2Node.innerText = '비밀번호:'
  let input2Node = document.createElement('input');
  input2Node.setAttribute('size', '15')
  input2Node.setAttribute('type', 'password')
  input2Node.setAttribute('id', 'signupPw')
  input2Node.setAttribute('placeholder', 'password')
  let buttonNode = document.createElement('button');
  buttonNode.innerText = '가입하기'
  buttonNode.setAttribute('id', 'send_info')
  buttonNode.setAttribute('type', 'button')
  div2Node.appendChild(label2Node)
  div2Node.appendChild(input2Node)
  div2Node.appendChild(buttonNode)

  buttonNode.onclick = () => {
    fetch('http://127.0.0.1:5000/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({message: 'hello!'}) // body data type must match "Content-Type" header
    })  
  }
}

document.getElementById('signin_button').onclick = () => {

  let response = 200

  if (response === 200) {
    document.getElementsByClassName('raccoon_says')[0].innerText = "(아이디!) 너는 내가 특별히 더 지켜주겠다구!"

    let formNode = document.createElement('form');
    document.body.replaceChild(formNode, document.getElementById('form'));

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

    ///////////////////
    // let span1 = document.createElement('span');
    // formNode.appendChild(span1);
    // span1.style.borderStyle="solid"
    // span1.style.borderWidth="1px"
    // span1.style.padding="0px";
    // span1.style.margin="0px";
    // span1.innerText="너굴맨! 이 단어들을 막아줘!\n"
    // let addCussInput = document.createElement('input')
    // addCussInput.setAttribute('size', '6')
    // span1.appendChild(addCussInput);
    

    // let span2 = document.createElement('span');
    // formNode.appendChild(span2);
    // span2.innerText="두번째 span"
    // span2.style.borderStyle="solid"
    // span2.style.borderWidth="1px"
    // span2.style.padding="0px";
    // span2.style.margin="0px";
    // span2.style.width="100px";
    
    // let initButton = document.createElement('button');
    // formNode.appendChild(initButton);
    // initButton.style.writingMode="tb-rl"
    // initButton.innerText="초기화"
    // initButton.style.width="20px";
    // initButton.style.height="63px";
    // initButton.style.padding="0px";
    // initButton.style.margin="0px";

    // let div1 = document.createElement('div');
    // formNode.appendChild(div1);
    // div1.innerText="첫번째 div"
    // div1.style.borderStyle="solid"
    // div1.style.borderWidth="1px"
    // div1.style.padding="0px";
    // div1.style.margin="0px";

    ////////////////////////
    // formNode.style.margin = '0px';
    // formNode.style.padding = '0px';

    
    // let div1Node = document.createElement('div');
    // div1Node.style.borderStyle='solid'
    // div1Node.style.border="1px"
    // let div2Node = document.createElement('div');
    // div2Node.style.border="1px"
    // let span0Node = document.createElement('div');
    // span0Node.style.width="180px"
    // span0Node.style.float="left"
    // span0Node.style.border="1px"
    // let span1Node = document.createElement('div');
    // span1Node.style.width="90px"
    // span1Node.style.float="left"
    // span1Node.style.border="1px"
    // let span2Node = document.createElement('div');
    // span2Node.style.width="54px"
    // span2Node.style.float="left"
    // span2Node.style.border="1px"
    // formNode.appendChild(div1Node)
    // div1Node.appendChild(span0Node)
    // div1Node.appendChild(span1Node)
    // div1Node.appendChild(span2Node)
    // formNode.appendChild(div2Node)
  
    // let text1Node = document.createElement('p');
    // text1Node.style.margin = '0px';
    // text1Node.style.padding = '0px';
    // text1Node.innerText = "너굴맨! 이 단어들을 막아줘!"
    // span0Node.appendChild(text1Node);
    
    // let input1Node = document.createElement('input');
    // input1Node.setAttribute('size', '10')
    // input1Node.setAttribute('type', 'word')
    // input1Node.setAttribute('id', 'cussWord')
    // input1Node.setAttribute('placeholder', '욕을 입력해달라구!')
    // span0Node.appendChild(input1Node)
    // let addCuss = document.createElement('button');
    // addCuss.setAttribute('type', 'button');
    // addCuss.setAttribute('id', 'cussAdd');
    // addCuss.innerText = '추가';
    // span0Node.appendChild(addCuss)
    


    // let ulNode = document.createElement('ul');
    // span1Node.appendChild(ulNode);
    // let registeredWords = ['바보', '거지', '멍청이', '강아지'];
    // for (let i = 0; i < 2; i++) {
    //   let content = document.createElement('li');
    //   content.innerText = registeredWords[i];
    //   ulNode.appendChild(content);
    // }
    // let leftovers = document.createElement('div')
    // leftovers.innerText = `그 외 ${registeredWords.length - 2}개`
    // span1Node.appendChild(leftovers);

    // let initialize = document.createElement('button');
    // initialize.style.width="20px"
    // initialize.style.length="60px"
    // initialize.setAttribute('type', 'button');
    // initialize.setAttribute('id', 'cussInitialize');
    // initialize.innerText = '초기화';
    // span2Node.appendChild(initialize)

    // let text2Node = document.createElement('p');
    // text2Node.innerText = "○◎너굴AI가 작동하고 있습니다◎○"
    // div2Node.appendChild(text2Node);
    // let input2Node = document.createElement('input');
    // input2Node.setAttribute('size', '10')
    // input2Node.setAttribute('type', 'sentence')
    // input2Node.setAttribute('id', 'cussSentence')
    // input2Node.setAttribute('placeholder', '문장을 적어서 AI를 가르쳐달라구!')
    // div2Node.appendChild(input2Node)
    // let addCussSentence = document.createElement('button');
    // addCussSentence.setAttribute('type', 'button');
    // addCussSentence.setAttribute('id', 'cussSentenceAdd');
    // addCussSentence.innerText = 'AI 가르치기';
    // div2Node.appendChild(addCussSentence)

    // label2Node.innerText = '비밀번호:'
    // let input2Node = document.createElement('input');
    // input2Node.setAttribute('size', '15')
    // input2Node.setAttribute('type', 'password')
    // input2Node.setAttribute('id', 'signupPw')
    // input2Node.setAttribute('placeholder', 'password')
    // let buttonNode = document.createElement('button');
    // buttonNode.innerText = '가입하기'
    // buttonNode.setAttribute('id', 'send_info')
    // buttonNode.setAttribute('type', 'button')
    // div2Node.appendChild(label2Node)
    // div2Node.appendChild(input2Node)
    // div2Node.appendChild(buttonNode)
  }
}


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
