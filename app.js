const CORS = require("cors");
const app = require("express")();

app.use(CORS());

app.post("/", (req, res) => {
  // HNA OUR CODE BAX NSEFTO MSG F DISCORD
});

//
app.listen(process.env.PORT || 5000, () => {
  console.log(`Lol listing in ${process.env.PORT || 5000}`);
});
