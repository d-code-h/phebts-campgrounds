import { amenities, facilities } from './selectOptions';

const fields = [
  {
    id: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Phebts campground',
  },
  {
    id: 'location',
    type: 'text',
    label: 'Location',
    placeholder: 'Minna, Niger State',
  },

  {
    id: 'image',
    type: 'text',
    label: 'Image Link',
    placeholder: 'http://exampleimage.com',
  },
  {
    id: 'capacity',
    type: 'number',
    label: 'Capacity',
    placeholder: '50',
  },
  {
    id: 'price',
    type: 'number',
    label: 'Price ($)',
    placeholder: '100',
  },
  {
    id: 'rating',
    type: 'number',
    label: 'Rating',
    placeholder: '5',
  },
  {
    id: 'amenities',
    label: 'Amenities',
    options: amenities,
    placeholder: 'Amenities',
  },
  {
    id: 'facilities',
    label: 'Facilities',
    options: facilities,
    placeholder: 'Facilities',
  },
  {
    id: 'desc',
    label: 'Description',
    name: 'desc',
    placeholder: 'Describe the campground in details here...',
  },
];

export default fields;
