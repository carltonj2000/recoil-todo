import express from "express";
import cors from "cors";
import tableOfUsers from "../client/src/sync/users";

const app = express();

const PORT = process.env.PORT || 3456;

app.use(cors());

app.get("/", (req, res) => {
  console.log("/");
  res.send("hi");
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  if (!id) res.send({ error: "Need a user ID" });
  const user = tableOfUsers.filter((u) => u.userId === parseInt(id))[0];
  if (!user) res.send({ error: "No user for provided ID " + id });
  res.send(user);
});

app.listen(PORT, () => console.log("Listening on this port", PORT));
