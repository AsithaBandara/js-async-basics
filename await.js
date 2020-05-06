console.log("start");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("userwa gannawa");
      resolve({ userData: 1 });
    }, 4000);
  });
}

function getSecrects(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("secrects gannawa");
      resolve({ secrects: [1, 2, 3, 4, 5] });
    }, 6000);
  });
}

async function displayData() {
  const user = await getUser(1);
  const secrects = await getSecrects(user.userData);
  console.log(secrects);
}

displayData();

console.log("end");
