export default function ComplimentDisplay({ message }) {

    if (!message) return null; // If no message is provided, nothing is rendered

    // If a message exists, a box containing the compliment is rendered
    return (
        <div className="display-box">
            <p>{message}</p> {/* Displays the compliment message */}
        </div>
    );
}