import { MongoClient, ObjectId, WithId, Document } from 'mongodb';
import data from './data';

// ? Configurations
const URL = process.env.DB_URL as string; // env
const client = new MongoClient(URL); // DB client instantiated

interface review {
  username: string;
  rating: number;
  comment: string;
}
interface Campground extends WithId<Document> {
  _id: ObjectId;
  name: string;
  location: string;
  creator: string;
  image: string;
  description: string;
  amenities: string[];
  facilities: string[];
  capacity: number;
  price: number;
  rating: number;
  reviews: review[];
}

// * Connect to DB
const connect = async () => {
  try {
    await client.connect();
    console.log('======= 🚀 Connection successful ========');

    const db = client.db('phebts-campgrounds');
    const collection = db.collection('campgrounds');

    return collection;
  } catch (error) {
    console.log('********* 😞 Unable to connect ********');
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

// * Find all campgrounds
const allCampgrounds = async () => {
  const collection = await connect();

  if (!collection) return false;

  try {
    const campgrounds = (await collection.find({}).toArray()) as Campground[];
    console.log('======= 💪 All campgrounds found successfully ========');
    return campgrounds;
  } catch (error) {
    console.log('********* 😞 Unable to find campgrounds ********');
    return false;
  } finally {
    await client.close();
  }
};

// TODO: Find by id
const findById = async (id: string) => {
  const collection = await connect();

  if (!collection) return false;

  try {
    const campground = (await collection.findOne({
      _id: new ObjectId(id),
    })) as Campground;
    console.log('======= 💪 Campground found successfully ========');
    return campground;
  } catch (error) {
    console.log('********* 😞 Unable to find campground ********');
    return false;
  } finally {
    await client.close();
  }
};

export { seed, reset, allCampgrounds, findById };
