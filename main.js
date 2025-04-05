/**
* 用語を日本語に翻訳する関数
*/
function myReplace(node, str) {
  if (node.nodeType ===  Node.TEXT_NODE) {
    const regex = new RegExp(str, "g");
    node.textContent = node.textContent.replace(regex, DATA[str]);
  } else {
    node.childNodes.forEach(myReplace);
  }
}

window.onload = function () {
  for (const str in DATA) {
    myReplace(document.body, str);
  }
}
