//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  });
};

const mulitply = (a, b, callback) => {
  setTimeout(() => {
    callback(a * b);
  });
};

const divide = (a, b, callback) => {
  setTimeout(() => {
    callback(a / b);
  });
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});

mulitply(5, 6, sum => {
  console.log(sum); // Should print: 30
});

divide(21, 3, sum => {
  console.log(sum); // Should print: 7
});
