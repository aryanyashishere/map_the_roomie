const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  
  // aadhar: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },


  // hometownaddress: {
  //   type: String,
  //   required: true,
  // },

  // approvalstatus: {
  //   type: String,
  //   required: false,
  // },

  // currentroomaddress: {
  //   type: String,
  //   required: false,
  // },


  
  // rentofroom: {
  //   type: Number,
  //   required: false,
  // },



  // liquorstatus: {
  //   type: String,
  //   required: true,
  // },

  // smokestatus: {
  //   type: String,
  //   required: true,
  // },

  // marriedstatus: {
  //   type: String,
  //   required: true,
  // },



  
  isAdmin: {
    type: Boolean,
    default: false,
  },
});



//? secure the password with the bcrypt
userSchema.pre("save", async function () {
  const user = this;
  console.log("actual data ", this);

  if (!user.isModified) {
    return next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
});






//? Generate JSON Web Token
userSchema.methods.generateToken = async function () {
  console.log("I am token");
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Token Error: ", error);
  }
};






// define the model or the collection name
 const User = new mongoose.model("USER", userSchema);
 module.exports = User;
