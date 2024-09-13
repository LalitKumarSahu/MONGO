//------------------------------------------------>
const mongoose = require('mongoose');

main().then(() => {
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
  // Use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//------------------------------------------------>

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required:true, // not nnull
    maxLength:20
  },
  author:{
    type:String,
  },
  price: {
    type:Number,
    min:[1,"price is too low Amazon selling"],
  },
  discount:{
    type:Number,
    default:0
  },
  category:{
    type:String,
    enum:["fiction", "non-fiction"],
  },
  genre:[String]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title:"Mathematics XII",
  author: "RD Sharma",
  price:1200,
  category:"fiction",
  genre:["comics", "superheroes", "fiction"],
});
book1.save().then((res) =>{
  console.log(res);
})
.catch((err) =>{
  console.log(err);
})
Book.findByIdAndUpdate("66dafab4c96515c1b1bf44a4", {price:-500},{runValidators:true}).then(res =>{
  console.log(res);

}).catch(err =>{
  console.log(err.errors.price.properties.message);
})