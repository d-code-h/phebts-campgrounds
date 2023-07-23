import Grid from './Grid';
import { allCampgrounds } from '../../lib/db';

export default async function Grids() {
  const campgrounds = await allCampgrounds();
  return (
    <div className="m-5 flex justify-center  flex-wrap flex-col gap-5 sm:gap-8 sm:flex-row md:gap-5  ">
      {campgrounds ? (
        campgrounds.length > 0 ? (
          campgrounds.map((campground) => (
            <Grid
              key={JSON.stringify(campground._id)}
              campground={campground}
            />
          ))
        ) : (
          <p>No campgrounds found!</p>
        )
      ) : (
        <p>Sorry, something went wrong!</p>
      )}
    </div>
  );
}
