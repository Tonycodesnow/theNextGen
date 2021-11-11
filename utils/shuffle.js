const { Member } = require("../models");
//Shuffles and update db


//shuffle
function shuffle(array) {
  let nameList = array;
  let orderArray = array.map((player) => {
    const newNameList = nameList.filter(item => item != player);
    const random = Math.floor(Math.random() * newNameList.length);
    const selected = newNameList[random];
    nameList = nameList.filter((item) => item != selected);
    console.log(selected);
    return { id: player.id, giveToMember: selected ,giveToMemberName: selected.name };
  });

  return orderArray;
};


//validate shuffle and update db.
async function main(data) {
  // const memberIds = data.map(member => member.id)
  let result = shuffle(data);
  // const memberIds = data.map(member => member.id)
  // let result = shuffle(memberIds);
  // console.log(result);
  
  while (!result[result.length - 1].giveToMember) {
    result = shuffle(memberIds); 
  }
  // console.log(result);
  return await result.map(member => {
    return Member.update(member , {
      where: {
        id: member.id
      },
      // include: [
      //   {
      //     model: Member,
      //     as: 'recipient',
      //     attribute: ['id','name']
      //   }
      // ],
      individualHooks: true
    })
  });
  
  // return result;
}


module.exports = main;