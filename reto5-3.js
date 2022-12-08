console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
function myFunction(obj) {
  let sum = 0;
  for (let key in obj) {
    const value = obj[key];
    sum = sum + value;
  }
  return sum;
}
