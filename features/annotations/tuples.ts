const drink = {
    color : 'brown',
    crabonated: true,
    sugar : 40,
};

type Drink = [string, boolean, number];
const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 50];
const tea: Drink = ['brown', false, 0];

const carSpec : [number, number] = [400, 3354]

const carStats = {
    horsePower : 400,
    weight : 3354
};