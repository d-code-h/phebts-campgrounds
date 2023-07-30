import { redirect } from 'next/navigation';
import { findById } from '@/app/lib/db';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import LinkBtn from '../components/LinkBtn';

interface Params {
  id: string;
}

const fields = [
  'Creator',
  'Rating',
  'Location',
  'Description',
  'Capacity',
  'Price',
  'Amenities',
  'Facilities',
];

export default async function Show({ params: { id } }: { params: Params }) {
  const campground = await findById(id);
  console.log(campground);

  if (!campground) {
    redirect('/campgrounds');
  }

  return (
    <>
      <h1 className="text-purple-500 font-bold text-3xl text-center mt-7 mb-4 tracking-wider">
        {campground.name}
      </h1>
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Image
            src={campground.image}
            width={400}
            height={400}
            alt="Campground ground"
            className="mx-auto rounded-2xl"
          />
          <div className="p-5 text-start border-1 rounded-md shadow-xl flex flex-wrap justify-between">
            {fields.map((field: string) =>
              field !== 'Amenities' && field !== 'Facilities' ? (
                <p
                  className="flex gap-4 items-center h-min"
                  key={JSON.parse(JSON.stringify(campground._id))}
                >
                  <span className="text-md font-serif font-bold  text-purple-500">
                    {field}:{' '}
                  </span>
                  <span className="text-slate-600">
                    {campground[field.toLowerCase()]}
                  </span>
                </p>
              ) : (
                <p
                  className="flex gap-5 items-center h-min"
                  key={JSON.parse(JSON.stringify(campground._id))}
                >
                  <span className="text-md font-serif font-bold text-purple-500">
                    {field}:{' '}
                  </span>

                  <span className="text-slate-600">
                    {campground[field.toLowerCase()].join(', ')}
                  </span>
                </p>
              )
            )}
            <div>
              <LinkBtn status="edit" href={`/campgrounds/${id}/edit`}>
                Edit
              </LinkBtn>
              <LinkBtn status="delete" href={`/campgrounds/${id}/delete`}>
                Delete
              </LinkBtn>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <h2>Comment Section</h2>
      </Wrapper>
    </>
  );
}
