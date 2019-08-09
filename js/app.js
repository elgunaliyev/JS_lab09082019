const add = function(num) {
  // console.log(`Add : ${num}`);
  return num + num;
};

//  const clga= function(word){
//    console.log(`clga : ${word}`);
//  }

//..............ES6.................//

const collectNum = num => `${num} is a good num`;
anotherNumber = collectNum(30);
//------------//

/// texti getirir///
function getNode(nodeId) {
  return document.querySelector(nodeId);
}

function getUrl(nodeId) {
  return getNode(nodeId).value;
}

// let a = getNode("#addImageBtn");
// console.log(a);

let addImageBtn = getNode("#addImageBtn");
let imageContainer = getNode("#testImageUrl");
let changeImageSize = getNode("#changeImageSize");
let addDivBtn = getNode("#addDiv");
let divElem = getNode("#element");
let divRow = getNode("#divRow");

// console.log(imageContainer);

addImageBtn.addEventListener("click", () => {
  imageContainer.style.width = "100px";
  imageContainer.src = getUrl("#urlText");
});

changeImageSize.addEventListener("click", () => {
  imageContainer.style.width = `${getUrl("#urlSize")}px`;
  //   console.log("object");
});

addDivBtn.addEventListener("click", () => {
  let countDiv = getUrl("#countDiv");
  let divs = "";
  for (let i = 0; i < countDiv; i++) {
    divs += divElem.outerHTML;
  }

  divRow.innerHTML += divs;

  //   divRow.appendChild(divRow);

  //   console.log(divElem.outerHTML);
});
// console.log(imageNode);
// imageNode.
