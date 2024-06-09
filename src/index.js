import { createPlant } from './plant';
import { addAbility } from './abilities';

const plant = createPlant('Sunflower', 'Flower');

document.getElementById('plant').innerText = `Plant: ${plant.getName()} (${plant.getType()})`;

document.getElementById('water').addEventListener('click', () => {
    plant.water(10);
    document.getElementById('plant').innerText = `Plant: ${plant.getName()} (${plant.getType()}), Health: ${plant.getHealth()}, Water Level: ${plant.getWaterLevel()}`;
});
