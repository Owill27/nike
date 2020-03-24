export interface shoeVariety {
  name: string,
  color: string,
  image: string,
  price: number
}

export interface shoeInfo {
  id: number,
  name: string,
  description: string,
  varieties: shoeVariety[],
  variery?: shoeVariety
}

export const shoesData: shoeInfo[] = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    description: 'Nike air max 270 shoes',
    varieties: [
      {
        name: 'Black',
        image: 'am-black',
        color: '#000000',
        price: 10.99
      },
      {
        name: 'Millitary',
        image: 'am-millitary',
        color: '#5c5c54',
        price: 9.99
      },
      {
        name: 'Pink Stripe',
        image: 'am-pink',
        color: '#e9aaad',
        price: 10.99
      },
      {
        name: 'Vibrant color',
        image: 'am-vibrant',
        color: '#c8f1d3',
        price: 10.99
      },
      {
        name: 'White',
        image: 'am-white',
        color: '#ffffff',
        price: 10.99
      }
    ]
  },
  {
    id: 2,
    name: 'Nike PG-4',
    description: 'Nike PG-4 shoes',
    varieties: [
      {
        name: 'Black - White',
        image: 'pg4-bw',
        color: '#000000',
        price: 9.99
      },
      {
        name: 'Red',
        image: 'pg4-red',
        color: '#d55844',
        price: 10.99
      },
      {
        name: 'Black - Red',
        image: 'pg4-br',
        color: '#000000',
        price: 10.99
      },
      {
        name: 'Grey',
        image: 'pg4-grey',
        color: '#4c4a55',
        price: 10.99
      }
    ]
  },
  {
    id: 3,
    name: 'Nike Zoom Turbo',
    description: 'Nike zoom turbo shoes',
    varieties: [
      {
        name: 'Purple',
        image: 'zoom-purple',
        color: '#612f60',
        price: 9.99
      },
      {
        name: 'Blue',
        image: 'zoom-blue',
        color: '#5983ae',
        price: 10.99
      },
      {
        name: 'Black',
        image: 'zoom-black',
        color: '#000000',
        price: 10.99
      }
    ]
  }
]