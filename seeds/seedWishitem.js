const  Wishitem = require('../models/wishitem');

const wishitemSeed = [
    {
        name: 'Wishitem 1',
        item_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F569098160981609816%2F&psig=AOvVaw2X_Z-_X-_X-_X-_X-_X-&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_X-oCFQAAAAAdAAAAABAD',
        user_id: 2
    },
    {
        name: 'Wishitem 2',
        item_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F569098160981609816%2F&psig=AOvVaw2X_Z-_X-_X-_X-_X-_X-&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_X-oCFQAAAAAdAAAAABAD',
        user_id: 2
    },
    {
        name: 'Wishitem 3',
        item_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F569098160981609816%2F&psig=AOvVaw2X_Z-_X-_X-_X-_X-_X-&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_X-oCFQAAAAAdAAAAABAD',
        user_id: 2
    },
];

const seedWishitem = () => Wishitem.bulkCreate(wishitemSeed);

module.exports = seedWishitem;