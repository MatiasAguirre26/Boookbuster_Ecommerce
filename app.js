const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./src/middleware/userLoggedMiddleware");
const cookies = require("cookie-parser");

app.use(
  session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.static(__dirname + "/public"));

app.set("views", path.resolve(__dirname, "./src/views"));
app.set("view engine", "ejs");

// Necesario para trabajar con formularios!!
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride("_method"));

app.listen(process.env.PORT || 3000, () => {
  console.log("El servidor inicio correctamente");
});

const mainRutas = require("./src/routes/mainRutas");
const userRutas = require("./src/routes/userRutas");
const productRutas = require("./src/routes/productRutas");

app.use("/", mainRutas);
app.use("/users", userRutas);
app.use("/products", productRutas);
