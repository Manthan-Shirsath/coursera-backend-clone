const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectid = mongoose.Schema.Types.ObjectId;



const UserSchema = new Schema({
  firstName : {
    type: String,
    required: true
  },
  lastName : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true,
    email: true
  },
  password : {
    type: String,
    required: true
  },

});
const AdminSchema = new Schema({
  firstName : {
    type: String,
    required: true
  },
  lastName : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true,
    email: true
  },
  password : {
    type: String,
    required: true
  },
});
const CourseSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  price : {
    type: Number,
    required: true
  },
  imageLink : {
    type: String,
    required: true
  },
  createrid : {
    type: objectid,
    required: true
  }

});
const purchaseSchema = new Schema({
  userid : {
    type: objectid,
    required: true
  },
  courseid : {
    type: objectid,
    required: true
  }
});


const UserModel = mongoose.model('User', UserSchema);
const AdminModel = mongoose.model('Admin', AdminSchema);
const CourseModel = mongoose.model('Course', CourseSchema);
const PurchaseModel = mongoose.model('Purchase', purchaseSchema);


module.exports = {
  UserModel: UserModel,
  AdminModel: AdminModel,
  CourseModel: CourseModel,
  PurchaseModel: PurchaseModel
}