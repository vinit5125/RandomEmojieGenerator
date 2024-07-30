const car =[" Sedan - A traditional passenger car with a separate trunk 🚗",
" SUV (Sport Utility Vehicle)* - Larger vehicles often with off-road capabilities.🚗",
 "Coupe* - A two-door car with a sleek design.🚗",
 "Hatchback* - A car with a rear door that swings upward.🚗",
 "Convertible* - A car with a retractable roof.🚗",
 "Minivan* - Designed for passenger comfort, often used by families.🚗",
 "Pickup Truck* - A vehicle with an open cargo area in the back.🚗",
 "Station Wagon* - Similar to a sedan but with an extended rear cargo area.🚗",
 "Sports Car* - High-performance and designed for speed and agility.🚗",
 "Electric Vehicle (EV)* - Powered entirely by electricity.🚗",
 "Hybrid Vehicle* - Combines an internal combustion engine with an electric motor.🚗",
 "Luxury Car* - High-end vehicles with premium features and materials.🚗",
 "Compact Car* - Smaller, more fuel-efficient vehicles.🚗",
 "Crossover* - A blend between a sedan and an SUV.🚗",
 "Roadster* - A two-seat convertible focused on sporty performance.🚗"];
 
// Function to generate a random emoji
function generateRandomEmoji() {
    return Math.floor(Math.random() * car.length)
 }

//getting the access to the dom elements
   const generateButton = document.getElementById('generateButton');
   const emoji = document.getElementById('emoji');

   
// manupilating the DOM
generateButton.addEventListener('click', () => {
emoji.textContent = car[generateRandomEmoji()];
});
   