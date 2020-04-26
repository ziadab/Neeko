require("dotenv").config();
const CORS = require("cors");
const express = require("express");
const app = express();
const Discord = require("discord.js");

const client = new Discord.Client();

app.use(CORS());
app.use(express.json());

//Bot stuff
client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "Blood for NEXUS",
    },
  });

  app.post("/", (req, res) => {
    const channel = client.channels.cache.get("598885225904341024");
    // code here

    //here sending damsg
    channel.send(JSON.stringify(req.body));
    res.end();
  });
});

client.login(process.env.TOKEN);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Lol listing in ${process.env.PORT || 5000}`);
});
