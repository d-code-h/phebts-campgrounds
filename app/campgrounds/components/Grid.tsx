import Image from 'next/image';
import Link from 'next/link';
import { ObjectId } from 'mongodb';

interface review {
  username: string;
  rating: number;
  comment: string;
}
interface Campground {
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

const Grid = ({ campground }: { campground: Campground }) => {
  return (
    <div className="w-full sm:w-5/12 md:w-72 border border-purple-500 rounded-md">
      <Image
        src={campground.image}
        height={400}
        width={400}
        alt="Campground image"
        className="w-full"
      />
      <div className="p-3">
        <section className="flex justify-between">
          <h3 className="font-bold">{campground.name}</h3>
          <span className="text-slate-500">{campground.location}</span>
        </section>
        <p className="my-2">{campground.description}</p>
        <div className="flex justify-between items-center">
          <span className="flextext-slate-500 italic">
            {campground.creator}
          </span>
          <Link
            className="ring-1 ring-purple-500 rounded-md px-2 py-1 text-purple-500 font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl"
            href={`/campgrounds/${JSON.parse(JSON.stringify(campground._id))}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
