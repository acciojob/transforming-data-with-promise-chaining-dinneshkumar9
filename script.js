//DOM elements
      let input = document.querySelector("#ip");
      const button = document.querySelector("#btn");
      let output = document.querySelector("#output");

      //function promise chaining
      function PromiseChaining() {
        const myPromise = new Promise((res) => {
          setTimeout(() => {
            res(input.value);
          }, 2000);
        });
        myPromise
          .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
          })
          .then((result) => {
            return new Promise((res) => {
              setTimeout(() => {
                res(result * 2);
              }, 1000);
            });
          })
          .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
          })
          .then((result) => {
            return new Promise((res) => {
              setTimeout(() => {
                res(result - 3);
              }, 1000);
            });
          })
          .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
          })
          .then((result) => {
            return new Promise((res) => {
              setTimeout(() => {
                res(result / 2);
              }, 1000);
            });
          })
          .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
          })
          .then((result) => {
            return new Promise((res) => {
              setTimeout(() => {
                res(result + 10);
              }, 1000);
            });
          })
          .then((result) => {
            output.textContent = `Final Result: ${result}`;
          });
      }

      // click event
      button.addEventListener("click", PromiseChaining);