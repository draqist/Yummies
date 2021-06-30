export const Something = [{
        name: 'Pasta',
        image: require('../../assets/images/spehg.jpg'),
        key:0   
},
    {
        name: 'Local',
        image: require('../../assets/images/eforiro.jpg'),
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
        image: require('../../assets/images/spehg.jpg'),
        Ing1: 'Rice',
        Ing2: 'Chicken'
},
    {
        menu_name: 'Poundo with Efo Riro',
        image: require('../../assets/images/eforiro.jpg'),
        Ing1: 'Rice',
        Ing2: 'Chicken'
    }, {
        menu_name: 'Pasta with Fish',
        image: require('../../assets/images/ramen.jpg'),
        Ing1: 'Rice',
        Ing2: 'Chicken' 
    },
    {
        menu_name: 'Ofada with Fish',
        image: require('../../assets/images/iresi.jpeg'),
        Ing1: 'Rice',
        Ing2: 'Chicken'
    },
    {
        menu_name: 'Assorted Beef and Peppered Soup',
        image: require('../../assets/images/krice.jpg'),
        Ing1: 'Rice',
        Ing2: 'Chicken'
    }]
const Cardlist = { Something, Recommended }
export default Cardlist