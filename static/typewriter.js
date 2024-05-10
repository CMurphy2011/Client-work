// Shuffle the words array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const words = ["miner", "cordwainer", "baker", "miller", "stevedore", "smith", "cooper", "tanner",
    "teacher", "soldier", "suffragist", "sailor", "labourer", "farmer", "boilermaker",
    "chainmaker", "glover", "weaver", "railway worker", "servant"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200; // Adjust typing speed (milliseconds)
let pauseBetweenWords = 4000; // Adjust the pause between words (milliseconds)

function typeWord() {
    const textElement = document.getElementById("typewriter-text");

    if (isDeleting) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        delay = 100; // Faster deletion speed (adjust as needed)
    } else {
        textElement.textContent = words[wordIndex].substring(0, charIndex + 1);
        charIndex++;
        delay = 100; // Typing speed
    }

    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeWord, pauseBetweenWords); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex === words.length) {
            // Shuffle the words array when all words have been shown
            shuffleArray(words);
            wordIndex = 0;
        }
        charIndex = 0; // Reset charIndex to start typing the next word
        setTimeout(typeWord, delay); // Start typing the next word
    } else {
        setTimeout(typeWord, delay);
    }
}

// Shuffle the words array at the beginning
shuffleArray(words);

// Start the typewriter effect when the page loads
window.addEventListener("load", () => {
    typeWord();
});
