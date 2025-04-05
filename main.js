
function myReplace(node, str) {
  if (node.nodeType ===  Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(new RegExp(str, "g"), json hoge);
  } else {
    node.childNodes.forEach(myReplace);
  }
}

window.onload = function () {
    myReplace(document.body);
}
