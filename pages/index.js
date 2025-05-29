import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  const [mood, setMood] = useState(''); // Declaring a state variable "mood" to track the user's selected mood

  // Defining a list of messages that correspond to different moods
  const moodMessages = {
    happy: "Yay! Keep shining 🌞",
    sad: "It’s okay to feel sad. Sending hugs 🫂",
    tired: "Rest is productive too 💤",
    anxious: "Take a deep breath. You’re doing great 🌈",
    excited: "Love that energy! ⚡"
  };

  return (
    <div className="page">
      <Navbar /> {/* Rendering the top navigation bar */}
      <h1>Welcome to the Compliment Machine 💖</h1>
      <p>Need a mood boost? You’re in the right place!</p>

      {/* Navigation buttons to the Compliment and Affirmation pages */}
      <div className="welcome-box">
        <Link href="/compliment">
          <button>Get a Compliment 💌</button>
        </Link>
        <Link href="/affirmation">
          <button>Daily Affirmation 🌸</button>
        </Link>
      </div>

      {/* Mood selector section */}
      <div className='mood'>
        <h3>How are you feeling today?</h3>

        {/* Dropdown menu for selecting mood */}
        <select onChange={(event) => setMood(event.target.value)} defaultValue="">
          <option value="" disabled>Select your mood</option>
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="tired">😴 Tired</option>
          <option value="anxious">😰 Anxious</option>
          <option value="excited">🤩 Excited</option>
        </select>

        {/* Show a corresponding mood message if a mood has been selected */}
        {mood && (
          <p className="mood-box">
            {moodMessages[mood]}
          </p>
        )}
      </div>
    </div>
  );
}