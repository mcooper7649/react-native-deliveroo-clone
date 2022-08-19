import { string } from 'prop-types';

export default {
  name: 'restaraunt',
  title: 'Restaraunt',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaraunt name',
      validation: (Rule) => {
        Rule.required();
      },
    },
    {
      name: 'short_description',
      type: string,
      title: 'Image of the Restaraunt',
    },

    { name: 'image', type: 'image', title: 'Image of the Restaraunt' },
    { name: 'lat', type: 'number', title: 'Latitude of the Restaraunt' },
    { name: 'long', type: 'number', title: 'Longitude of the Restaraunt' },
    {
      name: 'address',
      type: String,
      title: 'Address of the Restaraunt',
      validation: (Rule) => {
        Rule.required();
      },
    },
  ],
};
