export default function ComplimentDisplay({ message }) {
    if (!message) return null;
    return (
        <div className="display-box">
            <p>{message}</p>
        </div>
    );
}