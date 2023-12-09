import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  onHold: [{ type: String }],
  watching: [{ type: String }],
  completed: [{ type: String }],
  toWatch: [{ type: String }],
});
const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      username: { type: String, default: null },
      email: { type: String, unique: true },
      category: {
        type: animeSchema,
        default: function () {
          return {
            onHold: [],
            watching: [],
            completed: [],
            toWatch: [],
          };
        },
      },
    })
  );

export { User };
