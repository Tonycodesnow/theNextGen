// const { Member } = require('./../models');

function buildNotification(member) {
  //create Notification body
  console.log(member);
  
  // member.getNameToGift()
  //   .then(data => {
  //     console.log();
  //   })
  //   .catch(err => console.log(err));
  // Member.findOne({ 
  //   where: {
  //     id: member.giftToMember
  //   }
  // })
  //   .then(recipient => {console.log(recipient)})
  //   .catch(err => console.log(err));
  // Member.findOne({
  //   where: {
  //     id: member.giveToMember
  //   }
  // })
  //   .then(recipient =>  {
  //     console.log(recipient);
  //   })
  //   .catch(err => console.log(err))



  const htmlBody= `Hello , You got `
  // `<h2>You're Invited to ${event.user.first_name}'s ${event.name}</h2>
  // <p>${event.user.first_name} invited you to join a ${event.name}! Date: ${event.party_date}, The budget is $${event.budget}. 
  // If you would like to join click here. </p>
  // <p>Join Our Game!! Please join by ${event.lottery_date}, On this date the lottorey will take place  </p>`
  
  const mailContent = {
      from: '"Secret Santa 🎅" <oursecretsantaproject@gmail.com>', // sender address
      to: member.email, // Member Email
      subject: `Shuffle Results🎁`, // Subject line- need to be event name
      text: `The shuffle was done. Please gift `, // plain text body
      html: htmlBody, // html body
  }
  
    return mailContent;
  };
  
  
  module.exports = buildNotification;