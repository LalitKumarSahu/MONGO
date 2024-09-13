//------------------------------------------>
const mongoose = require('mongoose');

main().then(() => {
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // Use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//------------------------------------------>
//------create schema--------->
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//------------------------------------------>
//mongoose ki help she document ko create karna
// Define the Employee model
const User = mongoose.model("User", userSchema);

//------------------------------------------>
// User.deleteOne({name:"bruce"}).then((res) =>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// })
//------------------------------------------>
// User.deleteMany({age:48}).then((res) =>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// })
//------------------------------------------>
// User.findByIdAndDelete("66dafab4c96515c1b1bf44a3").then((res) =>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// })


//------------------------------------------>

// User.updateOne({name:"bruce"},{age:49}).then((res)=>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// })
//------------------------------------------>
// User.updateMany({age:{$gt:48}},{age:55}).then((res)=>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// });

//------------------------------------------>

// User.findOneAndUpdate({name:"bruce"},{age:35},{new:true}).then((res)=>{
//   console.log(res);
// })
// .catch(err =>{
//   console.log(err);
// })

//------------------------------------------>
// User.find({age:{$gt:47}}).then((res) =>{
//   console.log(res);
// //   // console.log(res[0]);
// //   // console.log(res[0].name);
// }).catch((err) => {
//   console.log(err);
// });

//------------------------------------------>

//  User.findOne({age:{$gt:47}}).then((res) =>{
//   console.log(res);
//   // console.log(res[0]);
//   // console.log(res[0].name);
// }).catch((err) => {
//   console.log(err);
// });
//------------------------------------------>

// User.findOne({id:"66daf969452a5af02b08f035"}).then((res) =>{
//   console.log(res);
//   // console.log(res[0]);
//   // console.log(res[0].name);
// }).catch((err) => {
//   console.log(err);
// });

//------------------------------------------>
// User.findById("66daf969452a5af02b08f035").then((res) =>{
//   console.log(res);
//   // console.log(res[0]);
//   // console.log(res[0].name);
// }).catch((err) => {
//   console.log(err);
// });

// //const Employee = mongoose.model("Employee", userSchema);

// Create an instance of Employee
//------------------>
//const user1 = new User({
//   name: "Adam",
//   email: "adam@yahoo.in",
//   age: 48,
// });
//----------------------------------->
// const user2 = new User({
//   name: "Evm",
//   email: "Evm@googel.com",
//   age: 48,
// });

//------------------>
//User.insertMany([
//   {name:"Tony",email:"tony@gmail.com", age:50},
//   {name:"bruce",email:"bruce@gmail.com", age:47},
//   {name:"peter",email:"peter@gmail.com", age:30},
// ]).then((res) =>{
//   console.log(res);
// });
//----------------------->


 // ----Save the user to the database------->
//user1.save();
//------------------------------------------>
// user2.save().then((res) => {
//   console.log(res);
// }).catch(err => console.log(err));
