import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});



router.post("/addNewUser", async (req, res) => {
  try {
    let newUserDocument = {
      first_name: req.query.first_name,
      last_name: req.query.last_name,
      email: req.query.email,
      gender: req.query.gender,
      username: req.query.username,
      password: req.query.password,
    };

    let collection = await db.collection("users");

    let emailQuery = { email: req.query.email };

    let emailQueryResult = await collection.findOne(emailQuery);

    let usernameQuery = { username: req.query.username };

    let usernameQueryResult = await collection.findOne(usernameQuery);

    // console.log(emailQueryResult);
    // console.log(usernameQueryResult);

    if (emailQueryResult != null && usernameQueryResult != null) {
      res
        .status(400)
        .send("User with email or username already exists already exists");
    } else {
      let result = await collection.insertOne(newUserDocument);
      res.send(result).status(204);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding user");
  }
});


router.post("/login", async (req, res) => {
  try {

    let loginDocument =  {
      username: req.query.username,
      password: req.query.password,
    }

    let collection = await db.collection("users");

    let usernameQueryResult  = await collection.findOne({username: req.query.username});

    if (usernameQueryResult != null) {
      if (loginDocument.password === usernameQueryResult.password) {
        res.send(usernameQueryResult).status(204);
      }else {
        res
        .status(500)
        .send("Incorrect password");
      }
    }else {
      res
      .status(500)
      .send(`User with the username ${loginDocument.username} does not exist`);
    }

  }catch(error) {
    console.log(error);
    res.status(500).send ("Error Logging in, Please try again");
  }
})



router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating user");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("users");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});

export default router;
