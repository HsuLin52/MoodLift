export default function AffirmationDisplay({ message }) {

    if (!message) return null; // If no message is provided, nothing is rendered

    // If a message exists, a box containing the affirmation is rendered
    return (
        <div className="display-box">
            <p>{message}</p> {/* Displays the affirmation message */}
        </div>
    );
}