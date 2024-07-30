const emojis = [
    "😊", "😃", "😍", "🤔", "😢", "🤯", "🤗", "🐶", "🐱", "🦁", "🐦", "🐢",
     "🌷", "🌲", "🍎", "🍕", "🍔", "🍣", "🍩", "🍷", "☕️", "⚽️", "🏀", "🎾",
      "🏓", "🏊", "🎨", "🎸", "🚗", "✈️", "🚀", "🏖", "🏔", "🏛", "🏠", "📱", "💻",
       "📚", "🖊", "⏰", "🎁", "🖼", "❤️", "💡", "✔️", "🔒", "🚫", "☮️", "♻️"];




// Function to generate a random emoji
  function generateRandomEmoji() {
     return Math.floor(Math.random() * emojis.length)
  }

 //getting the access to the dom elements
    const generateButton = document.getElementById('generateButton');
    const emoji = document.getElementById('emoji');

    
// manupilating the DOM
 generateButton.addEventListener('click', () => {
 emoji.textContent = emojis[generateRandomEmoji()];
});
    