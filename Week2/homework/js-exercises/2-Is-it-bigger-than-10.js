const checkDoubleDigits = (number) => {
  return new Promise((resolve, reject) => {
    number > 10
      ? resolve('The number is bigger than 10!')
      : reject(new Error('Error! The number is smaller than 10'));
  })
   
};

function printDu(num) {
   checkDoubleDigits(num).then((message) => console.log(message))
    .catch((error) => console.error(error));
}
printDu(11);
printDu(4);

