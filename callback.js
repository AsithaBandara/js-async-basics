console.log("start");

function getItems(id, callabck) {
  setTimeout(() => {
    console.log("data gannawa");
    callabck({ items: [1, 2, 3, 4, 5] });
  }, 2000);
}

function getInfo(item, callabck) {
  setTimeout(() => {
    console.log("information gannawa");
    callabck({ info: "item information" });
  }, 5000);
}

const items = getItems(1, items => {
  const info = getInfo(1, info => {
    console.log(info);
  });
});

console.log("end");
