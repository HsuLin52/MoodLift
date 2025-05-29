import Navbar from '../components/Navbar';
import ComplimentButton from '../components/ComplimentButton';
import ComplimentDisplay from '../components/ComplimentDisplay';
import { useState } from 'react';

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
    const [current, setCurrent] = useState('');
    const [history, setHistory] = useState([]);

    function giveCompliment() {
        const random = compliments[Math.floor(Math.random() * compliments.length)];
        setCurrent(random);
        setHistory([...history, random]);
    }

    return (
        <div className="page">
            <Navbar />
            <h1>Compliment Machine 💌</h1>
            <ComplimentButton onClick={giveCompliment} />
            <ComplimentDisplay message={current} />
            {history.length > 0 && (
                <div className="history">
                    <h3>Compliment History</h3>
                    <ul>
                        {history.map((item, index) => (
                        <li key={index}>🎀 {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}