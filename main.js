/**
* 用語を日本語に翻訳する関数
*/
function myReplace(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    for (const str in DATA) {
      const regex = new RegExp(str, "g");
      node.textContent = node.textContent.replace(regex, DATA[str]);
      console.log(regex);
    }
  } else {
    node.childNodes.forEach(myReplace);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("here");
  myReplace(document.body);
});
