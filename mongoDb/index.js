const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/database-1")
  .then(() => console.log("Successful connection"))
  .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});


const User = mongoose.model("User", userSchema);

app
  .route("/api/users")
  .get(async (req, res) => {
    const allusers = await User.find({});

    const html = `
      <ul>
        ${allusers
          .map(
            (user) => `<li>${user.firstName} , ${user.email}</li>`
          )
          .join("")}
      </ul>
    `;

    res.send(html);
  })
  .post(async (req, res) => {
    const body = req.body;

    if (!body.firstName || !body.email || !body.jobtitle || !body.gender) {
      return res.status(400).send("All fields are required!");
    }

    await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      jobtitle: body.jobtitle,
      gender: body.gender,
    });

    return res.status(201).send("Successful creation of user");
  });


app.route("/api/users/:id").
get(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(!user){res.status(404).send("User not found")};
    return res.send(user);
}).patch(async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,{firstName : "Nyamagoudar"});
    return res.send("Successful");
}).delete(async(req,res)=>{
    const deleteuser =await User.findByIdAndDelete(req.params.id,{firstName: "Nyamagoudar"});
    return res.send("Successful deletion");
});


app.listen(port, () => {
  console.log("server started");
});
