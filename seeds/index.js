const seedUsers = require('./seedUser');
const seedEvents = require('./seedEvent');
const seedWishitems = require('./seedWishitem');
const seedMembers = require('./seedMember');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedEvents();
  await seedWishitems();
  await seedMembers();

    console.log('Seeding complete!');
    process.exit();
}; 

seedAll();