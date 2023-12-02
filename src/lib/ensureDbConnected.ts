import mongoose from "mongoose";

let isConnnected = false;

export async function ensureDbConnected() {
  if (isConnnected) {
    return;
  }

  await mongoose.connect(process.env.MONGO_URI!).then(() => {
    isConnnected = true;
    console.log("DB connected succesfully");
  });
}
