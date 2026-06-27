import mongoose from "mongoose";

const mongodburi = process.env.MONGODB_URI;

if (!mongodburi) {
  throw new Error("db error");
}

let cache = global.mongoose;
if (!cache) {
  cache = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(mongodburi)
      .then((conn) => conn.connection);
  }
  try {
    const conn = await cache.promise;
    return conn;
  } catch (error) {
    console.log(error);
  }
};
