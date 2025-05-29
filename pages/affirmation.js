import Navbar from '../components/Navbar';
import AffirmationButton from '../components/AffirmationButton';
import { useState } from 'react';
import AffirmationDisplay from '../components/AffirmationDisplay';

// Defining array of affirmations
const affirmations = [
    "I am enough 💖",
    "I radiate positivity 🌸",
    "I am worthy of love and kindness ✨",
    "I believe in myself 💪",
    "I am growing every single day 🌱",
    "My presence is valuable 🌷",
    "I can do hard things 💥",
    "I am gentle with myself 💞",
    "I choose progress, not perfection 🌈",
    "Every breath I take fills me with calm 🌬️",
    "I am proud of how far I’ve come 🛤️",
    "I deserve to take up space 🌟",
    "I welcome joy into my life 🎉",
    "I allow myself to rest and recharge 💤",
    "I release what no longer serves me 🌊",
    "I honor my boundaries 🛡️",
    "I trust the timing of my life 🕰️",
    "I am becoming the best version of myself 🌟",
    "I am allowed to take things slow 🐢",
    "I treat myself with compassion 💗",
    "I choose hope over fear 🕊️",
    "My feelings are valid and important ❤️",
    "I attract peace and clarity 🧘‍♀️",
    "I shine with confidence and kindness 🌞",
    "I forgive myself and grow forward 🌻",
    "I have everything I need within me 💡",
    "I am doing better than I think 🙌",
    "I radiate self-love and grace 💓",
    "Today is a fresh start 🌼"
];

export default function AffirmationPage() {

    // State to store the currently selected affirmation
    const [affirmation, setAffirmation] = useState("");

    // State to store the list of all affirmations given
    const [history, setHistory] = useState([]);

    // Function that chooses a random affirmation and updates both states
    function getAffirmation() {
        const random = affirmations[Math.floor(Math.random() * affirmations.length)]; // Picking a random affirmation from the array
        setAffirmation(random); // Setting the current affirmations to display
        setHistory([...history, random]); // Adding the new affirmation to the history list
    }

    return (
        <div className="page">
            <Navbar />
            <h1>Daily Affirmation 🌷</h1>
            <AffirmationButton onClick={getAffirmation} /> {/* Button to get a new affirmation */}
            <AffirmationDisplay message={affirmation} /> {/* Display the current affirmation */}
            {history.length > 0 && ( // Shows the affirmations history only if at least one compliment has been generated
                <div className="history">
                    <h3>Affirmations List</h3>
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