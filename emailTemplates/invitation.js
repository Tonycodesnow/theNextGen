
function buildInvitation(event,emailList) {
//create email list
// const emailList= event.members.map(member => member.email);

//create invitation body
const htmlBody= `<h2>You're Invited to ${event.user.first_name}'s ${event.name}</h2>
<p>${event.user.first_name} invited you to join ${event.name} on ${event.party_date}! The budget is $${event.budget}. 
If you would like to join click <a href="https://secret-santa-project.herokuapp.com/member-signup/${event.id}"> here</a> </p>
<p>Join Our Game!! Please join by ${event.lottery_date} to be entered in the Secret Santa lottery!  </p>`

const mailContent = {
    from: '"Secret Santa 🎅" <oursecretsantaproject@gmail.com>', // sender address
    to: emailList, // list of receivers
    subject: `You're Invited to ${event.user.first_name}'s ${event.name} 🎁🥳`, // Subject line- need to be event name
    text: `You're Invited to ${event.user.first_name}'s ${event.name}`, // plain text body
    html: htmlBody, // html body
}

  return mailContent;
};


module.exports = buildInvitation;