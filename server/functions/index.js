const functions = require("firebase-functions");
const express = require("express");
const app = express();

const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const db = admin.firestore();

app.get("/message", (req, res) => {
  res.send("SDfafd");
  const docRef = db.collection("users").doc("alovelace");

  docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  }).catch((err)=>res.send(err));
});

app.post("/message", (req, res) => {
  const docRef = db.collection("message");
  docRef.get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
});

exports.app = functions.https.onRequest(app);
