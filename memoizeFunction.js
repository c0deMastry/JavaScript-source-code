const collectDonation = () => {
  let colletions = 0;

  return (amount) => {
    if (amount === 0) {
      return colletions;
    }
    return (colletions += amount);
  };
};

const abc = collectDonation();

const xyz = collectDonation();

console.log(xyz(110));
console.log(xyz(90));
console.log(xyz(10));

console.log(abc(110));
console.log(abc(900));

console.log("abc", abc(0));
console.log("xyz", xyz(0));
