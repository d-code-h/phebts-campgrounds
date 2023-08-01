import { MongoClient, ObjectId, WithId, Document } from 'mongodb';
// import data from './data';

// ? Configurations
const URL = process.env.DB_URL as string; // env
const client = new MongoClient(URL); // DB client instantiated

interface review {
  username: string;
  rating: number;
  comment: string;
}
interface Comment extends WithId<Document> {
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

    const db = client.db('phebts-comments');
    const collection = db.collection('comments');

    return collection;
  } catch (error) {
    console.log('********* 😞 Unable to connect ********');
    return false;
  }
};

// * Find all comments
const allComments = async () => {
  const collection = await connect();

  if (!collection) return false;

  try {
    const comments = (await collection.find({}).toArray()) as Comment[];
    console.log('======= 💪 All comments found successfully ========');
    return comments;
  } catch (error) {
    console.log('********* 😞 Unable to find comments ********');
    return false;
  } finally {
    await client.close();
  }
};

// * Find by id
const findById = async (id: string) => {
  const collection = await connect();

  if (!collection) return false;

  try {
    const comment = (await collection.findOne({
      _id: new ObjectId(id),
    })) as Comment;
    console.log('======= 💪 Comment found successfully ========');
    return comment;
  } catch (error) {
    console.log('********* 😞 Unable to find comment ********');
    return false;
  } finally {
    await client.close();
  }
};

export { allComments, findById };
