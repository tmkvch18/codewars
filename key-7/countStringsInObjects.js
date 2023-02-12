function strCount(obj) {
  let arr = Object.values(obj);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i] !== null) {
      count += strCount(Object.assign(arr[i]));
    }
    if (typeof arr[i] === "string") {
      count++;
    }
  }
  console.log(count);
  return count;
}

// strCount({
// 	first:  "1",
// 	second: "2",
// 	third:  false,
// 	fourth: ["anytime",2,3,4],
// 	fifth:  null,
// 	sixth:  undefined,
// 	seventh:{}
// })

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })