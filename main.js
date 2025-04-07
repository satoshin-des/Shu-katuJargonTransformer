/**
* 用語を日本語に翻訳する関数
*/
function myReplace(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    for (const str in DATA) {
      if(node.textContent.indexOf(str) !== -1) {
        node.textContent = node.textContent.replace(RegExp(str, "g"), str + "（" + DATA[str] + "）");
      }
    }
  } else {
    node.childNodes.forEach(myReplace);
  }
}

myReplace(document.body);

const obs = new MutationObserver((mutations) => {
  for(const mutation of mutations) {
    for(const node of mutation.addedNodes) {
      myReplace(node);
    }
  }
});

obs.observe(document.body, {
  childList: true,
  subtree: true
});
