let jsonData;

fetch('data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    jsonData = data;
  });

/**
* 用語を日本語に翻訳する関数
*/
function myReplace(node) {
  if (node.nodeType ===  Node.TEXT_NODE) {
    for (i in jsonData) {
      node.textContent = node.textContent.replace(new RegExp(str, "g"), jsonData[i]);
    }
  } else {
    node.childNodes.forEach(myReplace);
  }
}

window.onload = function () {
    myReplace(document.body);
}
