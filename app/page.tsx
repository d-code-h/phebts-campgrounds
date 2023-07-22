import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <section className="max-w-5xl mx-auto my-0 sm:my-5 p-5 bg-purple-50 rounded-md text-center">
        <h1 className="text-5xl font-bold tracking-wider leading-tight sm:leading-normal">
          Unplug, Unwind, and Reconnect with Nature&apos;s Serenity
        </h1>
        <p className="text-slate-700 text-md">
          Welcome to Phebts&apos; Campground, a hidden gem nestled in the heart
          of nature&apos;s embrace. Here, amidst lush woodlands, crystal-clear
          streams, and awe-inspiring landscapes, we invite you to rediscover the
          beauty of simplicity and the joy of connecting with the great
          outdoors.
        </p>

        <Link
          className="ring-2 ring-purple-500 rounded-md px-3 py-2 block my-5 text-xl text-purple-500 w-max mx-auto font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl"
          href="/campgrounds/new"
        >
          Add campground
        </Link>
      </section>
    </div>
  );
}
