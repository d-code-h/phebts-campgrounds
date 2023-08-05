import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const DB_URL = process.env.DB_URL as string;

const client = new MongoClient(DB_URL);

const connect = async () => {
  try {
    await client.connect();

    const db = client.db('phebts-campgrounds');
    return db.collection('comments');
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
    data.lastModified = new Date().toISOString();
    // data.image =
    //   'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

    // Store to DB
    const res = await collection.insertOne(data);

    console.log(res);

    // Respond with a positive message
    return NextResponse.json({ message: 'New comment added' });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong!' });
  } finally {
    await client.close();
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('commentId') as string;
    // Collect comment info
    const data = await request.json();

    // Connect to DB
    const collection = await connect();

    // Exit if connection to DB fail
    if (!collection) return;

    // Store to DB
    const res = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          lastModified: new Date().toISOString(),
        },
      }
    );
    console.log(res);

    if (res.modifiedCount === 0) {
      return NextResponse.json({ message: 'No comment found!' });
    }

    // Respond with a positive message
    return NextResponse.json({ message: 'Comment Updated!' });
  } catch (error) {
    console.log('Error');
    console.log(error);
    return NextResponse.json({ message: 'Something went wrong!' });
  } finally {
    await client.close();
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') as string;

    // Connect to DB
    const collection = await connect();

    // Exit if connection to DB fail
    if (!collection) return;

    // Store to DB
    const res = await collection.deleteOne({ _id: new ObjectId(id) });

    if (res.deletedCount === 0) {
      return NextResponse.json({ message: 'No comment found!' });
    }
    // Respond with a positive message
    return NextResponse.json({ message: 'Comment Deleted!' });
  } catch (error) {
    console.log('Error');
    console.log(error);
    return NextResponse.json({ message: 'Something went wrong!' });
  } finally {
    await client.close();
  }
}
