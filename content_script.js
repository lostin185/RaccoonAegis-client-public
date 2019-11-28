chrome.storage.local.get(["words"], function (object) {
  let regExp = new RegExp("(" + object.words.join("|") + ")");
  let word = object.words;
  console.log(word); // 배열의 형태로 출력.
  const kSets = [
    { selectors: "p, span" },
    { selectors: "li, td" },
    { selectors: "h1, h2, h3, th" }
  ];

  function replaceAll(str, searchStr, replaceStr) {
    // 첫 단어만 변경하는 replace 대신 replaceAll 함수 작성.
    return str.split(searchStr).join(replaceStr);
  }

  for (let set of kSets) {
    let elements = Array.from(document.querySelectorAll(set.selectors));
    for (let element of elements) {
      // 삼중 for문을 작성. 추후 수정 요망.
      for (let i = 0; i < word.length; i++) {
        if (regExp.test(element.innerText)) {
          element.innerText = replaceAll(element.innerText, word[i], "***");
        }
      }
    }
  }
});

// 각 문장의 첫번째 해당 단어만 변환되는 문제. -> 해결 후 다른 문제. (해당 단어 변환 후 몇몇 링크가 없어짐)
// 페이지를 새로고침 하거나 새로운 페이지를 띄울 때 첫번째 해당 단어만 변환되거나 그마저도 변환되지 않는 문제. -> 해결.
// submit으로 해당 단어 등록 후 바로 변환되지 않는 문제. -> 해결.
// clear 버튼 클릭 후 바로 변환 되지 않는 문제.
// 링크나 특정 엘리먼트 안의 해당 단어가 변환되지 않는 문제. -> 엘리먼트 추가 필요.
// submit을 누를 때 content_script가 실행? -> 실행 되는 것으로 파악.
// 비동기 문제인지 다른 문제인지? -> 아닌 것으로 추측, 추후 회의를 거칠 예정.
// 실행 후 오류 발생.
