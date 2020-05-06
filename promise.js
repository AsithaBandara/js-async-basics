const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("something happens");
    // resolve({ data: "Asitha" });
    reject(new Error("mokak hari awlak"));
  }, 5000);
});


promise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error.message);
});

