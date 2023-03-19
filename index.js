// Code your solutions in this file

function writeCards(arr, event) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

countDown(10);
