export const Something = [{
        name: 'Pasta',
        image: require('../../assets/images/spehg.jpg'),
        key:0   
},
    {
        name: 'Local',
        image: require('../../assets/images/efo.jpg'),
        key: 1
    }, {
        name: 'Noodles',
        image: require('../../assets/images/ramen.jpg'),
        key: 2
    },
    {
        name: 'Rice',
        image: require('../../assets/images/iresi.jpeg'),
        key: 3
    },
    {
        name: 'Continental',
        image: require('../../assets/images/krice.jpg'),
        key: 4
    }]
export const Recommended = [{
    menu_name: 'Mixed Rice with Chicken   ',
    image: require('../../assets/images/iresi.jpeg'),
    Rating: '5',
    Ing2: 'Chicken',
    Ing1: 'Rice',
    Ordertime: '10 - 15 min',
    key:40 ,
    price: '$$$',
        
},
    {
        menu_name: 'Poundo with Efo Riro',
        image: require('../../assets/images/efo.jpg'),
        Rating: '4.5',
        Ing2: 'Chicken',
        Ing1: 'Rice',
        Ordertime: '20 - 25 min',
        key: 5,
        price: '$$$',

    }, {
        menu_name: 'Pasta with Fish',
        image: require('../../assets/images/spehg.jpg'),
        Rating: '4.9',
        Ing2: 'Chicken',
        Ing1: 'Rice',
        Ordertime: '8 - 12 min',
        key: 6,
        price: '$$$',
    },
    {
        menu_name: 'Ofada with Fish',
        image: require('../../assets/images/ramen.jpg'),
        Rating: '4.7',
        Ing2: 'Chicken',
        Ing1: 'Rice',
        Ordertime: '15 - 18 min',
        key: 7,
        price: '$$$',

    },
    {
        menu_name: 'Assorted Beef and Peppered Soup',
        image: require('../../assets/images/krice.jpg'),
        Rating: '5',
        Ing2: 'Chicken',
        Ing1: 'Rice',
        Ordertime: '25 - 30 min',
        key: 8,
        price: '$$$',

    }]
const Cardlist = { Something, Recommended }
export default Cardlist