import mongoose from "mongoose";
const { Schema, model } = mongoose;

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  firebaseID: String,
  latestDay: Number,
  preferredTranslation: String,
});

const Profile = model("Profile", profileSchema);
export default Profile;
