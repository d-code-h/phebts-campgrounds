import { ObjectId } from 'mongodb';

interface Filter {
  _id: number;
  text: number;
}
interface Comment {
  _id?: ObjectId;
  campgroundId?: string;
  text?: string;
  creator?: string;
  lastModified?: string;
}

export type { Comment, Filter };
