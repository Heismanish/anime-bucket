import mongoose, { mongo } from "mongoose";

const animeSchema = new mongoose.Schema({
  onHold: [{ type: String }],
  watching: [{ type: String }],
  completed: [{ type: String }],
  toWatch: [{ type: String }],
});

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  category: [animeSchema],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
