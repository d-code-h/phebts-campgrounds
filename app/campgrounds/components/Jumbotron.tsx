import Wrapper from './Wrapper';
import BigButton from '../components/BigButton';

export default function Jumbotron() {
  return (
    <Wrapper>
      <h1 className="text-7xl font-bold tracking-wider leading-tight sm:leading-normal">
        Unplug, Unwind, and Reconnect with Nature&apos;s Serenity
      </h1>
      <p className="text-slate-500 text-3xl font-extralight my-5 max-w-2xl mx-auto">
        Welcome to Phebts&apos; Campground, a hidden gem nestled in the heart of
        nature&apos;s embrace. Here, amidst lush woodlands, crystal-clear
        streams, and awe-inspiring landscapes, we invite you to rediscover the
        beauty of simplicity and the joy of connecting with the great outdoors.
      </p>
      <BigButton status="campground" href="/campgrounds/new">
        Add Campground
      </BigButton>
    </Wrapper>
  );
}
