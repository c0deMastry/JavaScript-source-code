// const newPromise = new Promise((resolve, reject) => {
//   // definations
// });

const createPromise = (isPlanWork) => {
  return new Promise((resolve, reject) => {
    if (isPlanWork) {
      resolve("Plan Success");
    }
    if (!isPlanWork) {
      reject("Plan failed");
    }
  });
};

const executePromise = () => {
  createPromise(true)
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
    .finally(() => console.log("continue"));
};

executePromise();
