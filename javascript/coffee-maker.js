// Basic implementation of a coffee maker as a function
function makeCoffee(coffeePod, waterInMilli) {
  //  temperatures are in celcius
  const boilingWaterTemp = 100;
  let currentWaterTemp = 20;

  // boil the water
  while (currentWaterTemp < boilingWaterTemp) {
    currentWaterTemp++;
  }

  const coffee = coffeePod + waterInMilli;

  return coffee;
}
