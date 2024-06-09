import { createPlant } from '../src/plant';


test('water function increases health and water level', () => {
    const plant = createPlant('Rose', 'Flower');
    plant.water(10);
    expect(plant.getHealth()).toBe(101);
    expect(plant.getWaterLevel()).toBe(10);
});
