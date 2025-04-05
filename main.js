/**
* 用語を日本語に翻訳する関数
*/
function myReplace(node) {
  if (node.nodeType ===  Node.TEXT_NODE) {
    for (str in DATA) {
      node.textContent = node.textContent.replace(new RegExp(str, "g"), DATA[str]);
    }
  } else {
    node.childNodes.forEach(myReplace);
  }
}

window.onload = function () {
    myReplace(document.body);
}
