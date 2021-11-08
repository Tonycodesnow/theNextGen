const router = require("express").Router();

//Get User Dashboard
router.get("/", (req, res) => {
  const data = {
    user: {
      firstName: "John",
      lastName: "Doe",
      events: [
        {
          id: 1,
          name: "Secret Santa Web Bootcamp",
          description: "This is the first event",
          lottery_date: "2020-01-01",
          budget: "10",
          party_date: "2021-11-07",
          status: "active",
        },
        {
          id: 2,
          name: "Event 2",
          description: "This is the first event",
          lottery_date: "2020-01-01",
          budget: "10",
          party_date: "2021-12-10",
          status: "past",
        },
      ],
    },

    loggedIn: req.session.loggedIn,
  };

  res.render("dashboard/home", data);
});

//Get Event Information
router.get("/event/:id", (req, res) => {
  //Get Event Information from database

  const data = {
    event: {
      id: 1,
      name: "Secret Santa Web Bootcamp",
      description: "This is the first event",
      lottery_date: "2020-01-01",
      budget: "10",
      party_date: "2020-01-01",
      status: "active",
      user_id: 1,
      user: {
        firstName: "John",
        lastName: "Doe",
      },
      members: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "p-1@gmail.com",
          accepted: true,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          email: "p-2@gmail.com",
          accepted: false,
        },
        {
          id: 3,
          firstName: "Jack",
          lastName: "Doe",
          email: "p-3@gmail.com",
          accepted: true,
        },
      ],
    },

    loggedIn: req.session.loggedIn,
  };
  res.render("dashboard/event", data);
});

//Get Member Wishlist
router.get("/member-wishlist/:id", (req, res) => {
  //Get Member Information from database
  const userId = req.params.id;
  const data = {
    user: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "part-1@gmail.com",
      wishitems: [
        {
          name: "Item 1",
          item_url: "https://www.amazon.com/",
        },
        {
          name: "Item 2",
          item_url: "https://www.amazon.com/",
        },
      ],
    },
  };
  res.render("dashboard/member-wishlist", data);
});

module.exports = router;
