import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const URL = process.env.DB_URL as string;

const client = new MongoClient(URL);

const connect = async () => {
  try {
    await client.connect();

    const db = client.db('phebts-campgrounds');
    return db.collection('campgrounds');
  } catch (error) {
    console.log(error);
  }
};

export async function POST(request: Request) {
  try {
    // Collect campground info
    const data = await request.json();

    // Connect to DB
    const collection = await connect();

    // Exit if connection to DB fail
    if (!collection) return;

    // Add creator data
    data.creator = 'David';
    // data.image =
    //   'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

    // Store to DB
    await collection.insertOne(data);

    // Respond with a positive message
    return NextResponse.json({ message: 'New campground added' });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong!' });
  } finally {
    await client.close();
  }
}
