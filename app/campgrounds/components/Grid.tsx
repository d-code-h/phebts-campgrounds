import Image from 'next/image';
import { ObjectId } from 'mongodb';
import LinkBtn from './LinkBtn';
import clsx from 'clsx';

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
    <div
      className={clsx(
        'w-full sm:w-5/12 md:w-72 ring-1 ring-purple-500 rounded-md hover:shadow-xl hover:ring-2 hover:scale-105 transition-all'
      )}
    >
      <Image
        // src="https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=1174&auto=format&fit=crop&q=60"
        src={campground.image.slice(0, campground.image.indexOf('60'))}
        height={400}
        width={400}
        alt="Campground image"
        className="w-full"
      />

      <div className=" h-auto p-3">
        <section className="flex justify-between">
          <h3 className="font-bold">{campground.name}</h3>
          <span className="text-slate-500">{campground.location}</span>
        </section>
        <p className="my-2">{campground.description.slice(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="flex text-slate-500 italic">
            {campground.creator}
          </span>
          <LinkBtn
            href={`/campgrounds/${JSON.parse(JSON.stringify(campground._id))}`}
            status="more"
          >
            Read more
          </LinkBtn>
        </div>
      </div>
    </div>
  );
};

export default Grid;
