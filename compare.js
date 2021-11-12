
const file1 = document.querySelector("#file1");
const file2 = document.querySelector("#file2");
const check = document.querySelector(".check");


file1.addEventListener("change", function () {
  let fr = new FileReader();
  const output1 = document.getElementById("output1");

  fr.onload = function () {
    output1.textContent = fr.result;
  };

  fr.readAsText(this.files[0]);
});

file2.addEventListener("change", function () {
  let fr = new FileReader();
  const output2 = document.getElementById("output2");

  fr.onload = function () {
    output2.textContent = fr.result;
  };

  fr.readAsText(this.files[0]);
});

const compare = async () => {
  const file1 = document.querySelector("#file1");
  const file2 = document.querySelector("#file2");

  const contents1 = await file1.files[0].text();
  const contents2 = await file2.files[0].text();

  let json1 = JSON.parse(contents1);
  let json2 = JSON.parse(contents2);

  const difference = getDifference(json1, json2);

  // diff.textContent = JSON.stringify(difference);
  console.log(difference);
};

check.addEventListener('click', compare);

function getDifference(o1, o2) {
  var diff = {};
  var tmp = null;
  if (JSON.stringify(o1) === JSON.stringify(o2)) return true;

  for (var k in o1) {
    if (Array.isArray(o1[k]) && Array.isArray(o2[k])) {
      tmp = o1[k].reduce(function(p, c, i) {
        var _t = getDifference(c, o2[k][i]);
        if (_t)
          p.push(_t);
        return p;
      }, []);
      if (Object.keys(tmp).length > 0)
        diff[k] = tmp;
    } else if (typeof(o1[k]) === "object" && typeof(o2[k]) === "object") {
      tmp = getDifference(o1[k], o2[k]);
      if (tmp && Object.keys(tmp) > 0)
        diff[k] = tmp;
    } else if (o1[k] !== o2[k]) {
      diff[k] = o2[k]
    }
  }
  return diff;
}



// if (json1 && json2) {
//   console.log(getDifference(json1, json2));
// } else {
//   console.log("Need 2 json file to compare");
// }

// var d = getDifference(output1.textContent, output2.textContent);
// console.log(d);

// console.log(output1);
// console.log(output2.textContent); 

// function diff(obj1, obj2){
//   const result = {};
//   if (Object.is(obj1, obj2)) {
//     return undefined;
//   }
//   if (!obj2 || typeof obj2 !== "object") {
//     return obj2;
//   }
//   Object.keys(obj1 || {})
//     .concat(Object.keys(obj2 || {}))
//     .forEach((key) => {
//       if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
//         result[key] = obj2[key];
//       }
//       if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
//         const value = diff(obj1[key], obj2[key]);
//         if (value !== undefined) {
//           result[key] = value;
//         }
//       }
//     });
//   return result;
// }

// function getDifference(obj1, obj2){
//   var result = {};
//   for (key in obj1) {
//     if (obj2[key] != obj1[key]) result[key] = obj2[key];
//     if (typeof obj2[key] == "array" && typeof obj1[key] == "array")
//       result[key] = arguments.callee(obj1[key], obj2[key]);
//     if (typeof obj2[key] == "object" && typeof obj1[key] == "object")
//       result[key] = arguments.callee(obj1[key], obj2[key]);
//   }
//   return result;
// }

// file1.files[0].text().then((data) => {
//   output1.textContent = data;
// });

// file2.files[0].text().then((data) => {
//   output2.textContent = data;
// });