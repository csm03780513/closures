export function createPlant(name, type) {
    let health = 100;
    let waterLevel = 0;

    return {
        getName: () => name,
        getType: () => type,
        getHealth: () => health,
        getWaterLevel: () => waterLevel,
        water: (amount) => {
            waterLevel += amount;
            health += amount * 0.1;
        }
    };
}
