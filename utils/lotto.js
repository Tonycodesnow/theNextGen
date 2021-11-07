const members = ["ant", "sivan", "jose", "gokul", "elephant"];

const shuffleMembers = () => {
  const pairedMembers = [];
  let nameList = members;
  // check to see if the person that gets the name doesnt get themselves
  members.map((member) => {
    const newNameList = nameList.filter((item) => item !== member);

    const winner = newNameList[Math.floor(Math.random() * newNameList.length)];
    const pair = [member, winner];
    pairedMembers.push(pair);
    nameList = nameList.filter((item) => item !== winner);
  });
  return pairedMembers;
};

// function if object in array of pairedMembers is undefined then call shuffleMembers again
const checkForUndefined = (pairedMembers) => {
  const newPairedMembers = [];
  pairedMembers.map((pair) => {
    if (pair[0] === undefined) {
      newPairedMembers.push(shuffleMembers());
    } else {
      newPairedMembers.push(pair);
    }
  });
  return newPairedMembers;
};


shuffleMembers();
// in to gifts each

module.exports = {
  shuffle,
};
