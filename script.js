//your JS code here. If required.
//DOM elements
      let input = document.querySelector("#ip");
      const button = document.querySelector("#btn");
      let output = document.querySelector("#output");

      //function getNum promise
      function getNumber() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const number = input.value;
            resolve(number);
            // console.log(`Input Num : ${number}`);
          }, 2000);
        });
      }
      // function numMultiplyByTwo promise
      function numMultiplyByTwo() {
        return getNumber().then((number) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const numDouble = number * 2;
              resolve(numDouble);
              // console.log(`Multiply Num : ${numDouble}`);
            }, 1000);
          });
        });
      }

      // function result - 3 = ....
      function numSubByThree() {
        return numMultiplyByTwo().then((numDouble) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const numMinus = numDouble - 3;
              resolve(numMinus);
              // console.log(`Minus Num : ${numMinus}`);
            }, 1000);
          });
        });
      }

      // function for division of number
      function numDivideByTwo() {
        return numSubByThree().then((numMinus) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              // const numDiv = Math.floor(numMinus / 2);
              const numDiv = numMinus / 2;
              resolve(numDiv);
              // console.log(`Divide Num : ${numDiv}`);
            }, 1000);
          });
        });
      }

      // function to add 10 to result
      function addNumberTen() {
        return numDivideByTwo().then((numDiv) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const addNum = numDiv + 10;
              resolve(addNum);
              // console.log(`Added num : ${addNum}`);
            }, 1000);
          });
        });
      }
      // handle promises
      function handlePromises() {
        getNumber()
          .then((result) => {
            output.innerText = `Result: ${result}`;
            // console.log("Promise 1");
            return numMultiplyByTwo();
          })
          .then((result) => {
            output.innerText = `Result: ${result}`;
            // console.log("Promise 2");
            return numSubByThree();
          })
          .then((result) => {
            output.innerText = `Result: ${result}`;
            // console.log("Promise 3");
            return numDivideByTwo();
          })
          .then((result) => {
            output.innerText = `Result: ${result}`;
            // console.log("Promise 4");
            return addNumberTen();
          })
          .then((result) => {
            output.innerText = `Final Result: ${result}`;
            // console.log("promise COMPLeted");
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // click event
      button.addEventListener("click", handlePromises);