const CORS = require("cors");
const app = require("express")();
const Discord = require("discord.js");

const client = new Discord.Client();
const channel = client.channels.get("name", "general");

//Bot stuff
client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "Blood for NEXUS",
    },
  });
});

app.use(CORS());
app.post("/", (req, res) => {
  channel.send(JSON.stringify(req.body));
});

client.login("NzA0MDYzMjI0NjEzNTY4NTEy.XqXtBQ.-e_qclqofygBi-tk50LM4VodGSo");

app.listen(process.env.PORT || 5000, () => {
  console.log(`Lol listing in ${process.env.PORT || 5000}`);
});
