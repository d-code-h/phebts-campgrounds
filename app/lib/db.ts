import { MongoClient } from 'mongodb';
import data from './data';

// ? Configurations
const URL = process.env.DB_URL as string; // env
const client = new MongoClient(URL); // DB client instantiated

// * Connect to DB
const connect = async () => {
  try {
    await client.connect();
    console.log('=========================================');
    console.log('======= 🚀 Connection successful ========');
    console.log('=========================================');

    const db = client.db('phebts-campgrounds');
    const collection = db.collection('campgrounds');

    return collection;
  } catch (error) {
    console.log('***************************************');
    console.log('********* 😞 Unable to connect ********');
    console.log('***************************************');
    return false;
  }
};

// * Seed the DB
const seed = async () => {
  const collection = await connect();

  if (!collection) return;

  try {
    await collection.insertMany(data);
    console.log('======= 💪 Seed DB successful ========');
  } catch (error) {
    console.log('********* 😞 Unable to seed DB ********');
  } finally {
    await client.close();
  }
};

// * Reset the DB
const reset = async () => {
  const collection = await connect();

  if (!collection) return;

  try {
    await collection.deleteMany();
    console.log('======= 💪 DB reset successful ========');
  } catch (error) {
    console.log('********* 😞 Unable to reset DB ********');
  } finally {
    await client.close();
  }
};

// TODO: Find all campgrounds
const allCampgrounds = async () => {
  const collection = await connect();

  if (!collection) return;

  try {
    const campgrounds = await collection.find({}).toArray();
    console.log('======= 💪 All campgrounds found successfully ========');
    return campgrounds;
  } catch (error) {
    console.log('********* 😞 Unable to find campgrounds ********');
    return false;
  } finally {
    await client.close();
  }
};

export { seed, reset, allCampgrounds };
