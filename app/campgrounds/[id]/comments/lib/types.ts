import { ObjectId } from 'mongodb';

interface Comment {
  _id?: ObjectId;
  campgroundId?: string;
  text?: string;
  creator?: string;
  lastModified?: string;
}

export type { Comment };
