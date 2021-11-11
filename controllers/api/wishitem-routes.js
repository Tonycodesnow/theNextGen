const router = require("express").Router();
const { User, Wishitem } = require("../../models");

//get all wishitems
router.get("/", (req, res) => {
  Wishitem.findAll({
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "id"],
      },
    ],
  })
    .then((dbWishitem) => {
      res.json(dbWishitem);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Wishitem.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "id"],
      },
    ],
  })
    .then((dbWishitem) => {
      if (!dbWishitem) {
        res.status(404).json({ message: "No Wishitem found" });
        return;
      }
      res.json(dbWishitem);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Wishitem.create({
    name: req.body.name,
    item_url: req.body.item_url,
    user_id: req.session.user_id,
  })
    .then((dbWishitem) => res.json(dbWishitem))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Wishitem.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbWishitem) => {
      if (!dbWishitem) {
        res.status(404).json({ message: "No wishitems found with this id" });
      }
      res.json(dbWishitem);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Wishitem.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbWishitem) => {
      if (!dbWishitem) {
        res.status(404).json({ message: "No wishitem found with this id" });
        return;
      }
      res.json(dbWishitem);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Wishitem.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbWishitem => {
            if(!dbWishitem) {
                res.status(404).json({ message: 'No wishitem found with this id'});
                return;
            }
            res.json(dbWishitem);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;
