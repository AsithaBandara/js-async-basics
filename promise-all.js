const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("fb data gannawa");
    resolve({ fb: [1, 2, 3, 4, 5] });
  }, 2000);
});

const insta = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("insta data gannawa");
    resolve({ insta: [1, 2] });
  }, 7000);
});

Promise.all([fb, insta]).then(result => {
  console.log(result);
});