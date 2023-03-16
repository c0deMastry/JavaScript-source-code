const one = () => console.log("one");
const two = (isTrue) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTrue) {
        console.log("two");
        resolve();
      } else {
        console.log("error");
        reject();
      }
    }, 2000);
  });
const three = () => console.log("three");

const execute = async () => {
  try {
    one();
    await two(true);
    three();
  } catch {
    console.log("cancel");
  }
};

execute();
