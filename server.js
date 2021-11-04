const express = require("express");
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// const sequelize = require("./config/connection");
// const session = require("express-session");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret", //need to be env variable
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log("Now listening");
//   });
// });