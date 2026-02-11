import User from "../models/models_user.js";

//get alluser
export const getAllUser = async(req,res)=>{
   const allUser = await User.find({});

   const html =`
   <ul>
    ${allUser.map((user)=>
        `<li>${user.firstName} , ${user.email} , ${user.gender}</li>`
    ).join("")}
   </ul>
   `;
   res.send(html);
}

//get users by name
export const getUserByName = async (req,res)=>{
    const user = req.params.name;
    if(!user){
        res.status(404).json("Error  user not found");
    }
    res.status(200).json(user);
} ;

//create user
export const createUser = async(req,res)=>{
    const {firstName,email,gender} = req.body;
    if(!firstName || !email || !gender){
        res.send(404).send("Error  in creating user");
    }
    await User.create({
        firstName,
        email,
        gender
    });
    res.status(202).send("Successful creation");
}

//update user by name

export const updateUserByName = async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { firstName: req.params.name },
    { firstName: "Nyamagoudar" },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).send("User not found");
  }

  res.send("Successful updation");
};


//delete by name
export const deleteUser = async(req,res)=>{
    await User.deleteUser(req.params.firstName);
    res.send("Sucessful deletion");
};


