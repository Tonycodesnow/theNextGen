function shuffle(array) {
  let nameList = array;
  let orderArray = array.map((player) => {
    const newNameList = nameList.filter(item => item != player);
    const random = Math.floor(Math.random() * newNameList.length);
    const selected = newNameList[random];
    nameList = nameList.filter((item) => item != selected);
    return { name: player, giftTo: selected };
  });

  return orderArray;

};


module.exports = (array => {
  
  let result = shuffle(array);
  
  
  while (!result[result.length - 1].giftTo) {
    result = shuffle(); 
  }
  
  console.log(result);
  return result;
  
});