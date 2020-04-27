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
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    // code here
    const Email = new Discord.MessageEmbed()
      .setColor("#eeeeee")
      .setTitle(req.body.subject || "No Subject :'(")
      .setAuthor(`${req.body.fromName} : ${req.body.fromEmail}`)
      .setDescription(req.body.body);
    //.setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

    //here sending damsg
    channel.send(Email);
    res.end();
  });
});

client.login(process.env.TOKEN);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Lol listing in ${process.env.PORT || 5000}`);
});
