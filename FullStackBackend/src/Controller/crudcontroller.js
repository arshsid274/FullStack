const UserModel = require('../Model/UserModel.js');

exports.createUser = async (req, res) => {
    try{
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser)

    }
    catch(error){
        console.error('Error in createUser:', error.message); // 👈 log error
        res.status(500).json({message:'Error creating user'})
    }
}

exports.getUser = async (req,res) => {
    try{
      const findusers = await UserModel.find();
      res.json(findusers);
    }
    catch(error){
        res.status(500).json({message:'Error retrieving user'})
    }
}

