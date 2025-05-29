import Navbar from '../components/Navbar';
import ComplimentButton from '../components/ComplimentButton';
import ComplimentDisplay from '../components/ComplimentDisplay';
import { useState } from 'react';

// Defining array of compliments
const compliments = [
  "You're doing amazing ✨",
    "Your smile brightens up the room 🌟",
    "You're more than enough 💪",
    "You're a ray of sunshine ☀️",
    "You're kind, brave, and smart 💗",
    "You have a beautiful soul 🌸",
    "Your energy is contagious 🎉",
    "You make life sweeter 🍓",
    "You're a walking inspiration 🚶‍♀️✨",
    "You light up the darkest days 🔥",
    "You're uniquely you, and that’s perfect 💎",
    "You’re glowing with positivity 🌈",
    "You have a heart of gold 💛",
    "You're seriously stylish 💅",
    "You're smart in the coolest way 🧠💡",
    "You're pure sunshine wrapped in human form ☀️",
    "You're the sparkle in someone’s day ✨",
    "Your laugh could light up a whole city 🌆",
    "You're a total joy to be around 😊",
    "You make others feel seen and heard 👂❤️",
    "You radiate confidence and kindness 💫",
    "You have a gift for making people smile 😄",
    "You’re cooler than a triple-scoop sundae 🍨",
    "You bring out the best in everyone 🍀",
    "You are beautifully unstoppable 🦋",
    "You’re a masterpiece in progress 🎨",
    "You make the internet a nicer place 🌐💞",
    "You shine brighter than a disco ball 🪩",
    "You're *that* person. The amazing one 💁‍♀️💘"
];

export default function ComplimentPage() {

    // State to store the currently selected compliment
    const [compliment, setCompliment] = useState('');

    // State to store the list of all compliments given
    const [history, setHistory] = useState([]);

    // Function that chooses a random compliment and updates both states
    function giveCompliment() {
        const random = compliments[Math.floor(Math.random() * compliments.length)]; // Picking a random compliment from the array
        setCompliment(random); // Setting the current compliment to display
        setHistory([...history, random]); // Adding the new compliment to the history list
    }

    return (
        <div className="page">
            <Navbar />
            <h1>Compliment Machine 💌</h1>
            <ComplimentButton onClick={giveCompliment} /> {/* Button to get a new compliment */}
            <ComplimentDisplay message={compliment} /> {/* Display the current compliment */}
            {history.length > 0 && ( // Shows the compliments history only if at least one compliment has been generated
                <div className="history">
                    <h3>Compliment History</h3>
                    <ul>
                        {/* Maps each compliment in history into a list item */}
                        {history.map((item, index) => (
                        <li key={index}>🎀 {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}