import Image from 'next/image';
import Link from 'next/link';

export default function Grid() {
  return (
    <div className="w-full sm:w-5/12 md:w-72 border border-purple-500 rounded-md">
      <Image
        src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        height={400}
        width={400}
        alt="Campground image"
        className="w-full"
      />
      <div className="p-3">
        <section className="flex justify-between">
          <h3 className="font-bold">Camp name</h3>
          <span className="text-slate-500">Location</span>
        </section>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut
          libero illo modi voluptatibus atque quidem quis veniam vero omnis...
        </p>
        <div className="flex justify-between items-center">
          <span className="flextext-slate-500 italic">Creator</span>
          <Link
            className="ring-1 ring-purple-500 rounded-md px-2 py-1 text-purple-500 font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl"
            href="/campgrounds/"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
