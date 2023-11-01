function myFre(array) {
  if (array == null) {
    return null
  }

  let mostfreitem = array[0];
  let maxfre = 1;

  for (let i = 0; i < array.length; i++) {
    let currit = array[i]
    let currfr = 1

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === currit) {
        currfr++
      }
    }

    if (currfr > maxfre) {
      mostfreitem = currit
      maxfre = currfr
    }
  }

  return mostfreitem;
}

let myarray = [1, 21, 3, 1, 2, 4, 2, 1]
const result = myFre(myarray)
console.log("The most Frequent item is" +  result)