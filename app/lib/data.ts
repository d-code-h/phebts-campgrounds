const data = [
  {
    name: 'Campground A',
    location: 'City A, State A',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'This is a beautiful campground with scenic views and hiking trails.',
    amenities: ['Fire pit', 'Picnic table', 'Restrooms', 'Water supply'],
    facilities: ['Hiking trails', 'Swimming area', 'Pet-friendly'],
    capacity: 50,
    price: 30.0,
    rating: 4.5,
    reviews: [
      {
        username: 'NatureLover123',
        rating: 5,
        comment: 'Absolutely loved this place! Highly recommended.',
      },
      {
        username: 'Adventurer22',
        rating: 4,
        comment: 'Great camping spot, but the mosquitoes were quite annoying.',
      },
    ],
  },
  {
    name: 'Campground B',
    location: 'City B, State B',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A family-friendly campground with playgrounds and fishing spots.',
    amenities: ['Playground', 'Fishing area', 'Restrooms', 'BBQ grills'],
    facilities: ['Family-friendly', 'Boating facilities', 'Campfire area'],
    capacity: 30,
    price: 25.0,
    rating: 4.2,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground C',
    location: 'City C, State C',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A peaceful campground with a lake and hiking trails. Perfect for nature lovers.',
    amenities: ['Lake', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground D',
    location: 'City D, State D',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground E',
    location: 'City E, State E',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground F',
    location: 'City F, State F',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground G',
    location: 'City G, State G',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'This is a beautiful campground with scenic views and hiking trails.',
    amenities: ['Fire pit', 'Picnic table', 'Restrooms', 'Water supply'],
    facilities: ['Hiking trails', 'Swimming area', 'Pet-friendly'],
    capacity: 50,
    price: 30.0,
    rating: 4.5,
    reviews: [
      {
        username: 'NatureLover123',
        rating: 5,
        comment: 'Absolutely loved this place! Highly recommended.',
      },
      {
        username: 'Adventurer22',
        rating: 4,
        comment: 'Great camping spot, but the mosquitoes were quite annoying.',
      },
    ],
  },
  {
    name: 'Campground H',
    location: 'City H, State H',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A family-friendly campground with playgrounds and fishing spots.',
    amenities: ['Playground', 'Fishing area', 'Restrooms', 'BBQ grills'],
    facilities: ['Family-friendly', 'Boating facilities', 'Campfire area'],
    capacity: 30,
    price: 25.0,
    rating: 4.2,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground I',
    location: 'City I, State I',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A peaceful campground with a lake and hiking trails. Perfect for nature lovers.',
    amenities: ['Lake', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground J',
    location: 'City J, State J',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground K',
    location: 'City K, State K',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
  {
    name: 'Campground L',
    location: 'City L, State ',
    creator: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'A beautiful campground with a river and hiking trails. Perfect for nature lovers.',
    amenities: ['River', 'Restrooms', 'Picnic area', 'Water supply'],
    facilities: ['Hiking trails', 'Campfire area', 'Pet-friendly'],
    capacity: 40,
    price: 35.0,
    rating: 4.7,
    reviews: [
      {
        username: 'FishingMaster',
        rating: 4,
        comment: 'Good fishing options, but wish there were more shaded areas.',
      },
      {
        username: 'FamilyCamper',
        rating: 4.8,
        comment: 'Fantastic place for family camping trips. Will come back!',
      },
    ],
  },
];
export default data;
