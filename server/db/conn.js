const mongoose = require("mongoose");

const URI = process.env.DATABASE;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectDb;


 

// const DB = process.env.DATABASE;

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then(() => {
//     console.log(`connnection successful`);
// }).catch((err) => console.log(`no connection ${err}`));