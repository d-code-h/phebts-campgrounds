import { redirect } from 'next/navigation';
import { findById } from '@/app/lib/db';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
import LinkBtn from '../components/LinkBtn';
import Heading from '../components/Heading';
import Delete from './components/Delete';
import BigButton from '../components/BigButton';
import { allComments } from './comments/lib/db';
import { Comment } from './comments/lib/types';
import { Campground } from '../lib/types';

interface Params {
  id: string;
}

const fields = [
  'Creator',
  'Location',
  'Amenities',
  'Rating',
  'Capacity',
  'Price',
  'Facilities',
  'Description',
];

export default async function Show({ params: { id } }: { params: Params }) {
  let campground: Campground;
  let comments: Comment[] = [];
  try {
    campground = (await findById(id)) as Campground;

    if (!campground) {
      redirect('/campgrounds');
    }

    comments = (await allComments(id)) as Comment[];
    console.log(comments);
  } catch (error) {
    console.log(error);
    redirect('/campgrounds');
  }

  return (
    <>
      <Heading>{campground.name}</Heading>
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
                  className="flex gap-4 h-min my-2"
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
                  className="flex gap-5 h-min my-2"
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
            <div className="max-w-sm mx-auto flex gap-x-5 justify-center items-center mt-5 mb-2">
              <LinkBtn status="edit" href={`/campgrounds/${id}/edit`}>
                Edit
              </LinkBtn>
              <Delete id={id} />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <Heading>Comments</Heading>
        <BigButton status="comment" href={`/campgrounds/${id}/comments/new`}>
          Add Comment
        </BigButton>

        <div>
          {comments.length > 0 ? (
            comments.map(({ _id, text, creator, lastModified }) => (
              <div
                key={JSON.parse(JSON.stringify(_id))}
                className="bg-purple-100 rounded-md p-5 my-5"
              >
                <div className="flex flex-wrap justify-between ">
                  <p className="basis-full text-left text-xs text-slate-500">
                    {lastModified}
                  </p>

                  <p>{text}</p>
                  <p>
                    <strong>{creator}</strong>
                  </p>
                </div>

                <div className="space-x-5 text-left my-2">
                  <LinkBtn
                    status="edit"
                    href={`/campgrounds/${id}/comments/${JSON.parse(
                      JSON.stringify(_id)
                    )}/edit`}
                  >
                    Edit
                  </LinkBtn>
                  <Delete id={id} />
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-xl">No comments yet</p>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
