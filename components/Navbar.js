import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ background: '#E36B89', padding: '1rem', color: '#FDE3E6'}}>

      <Link href="/">Home</Link> |{' '} { /* Link to the Home page */}

      <Link href="/compliment">Compliment</Link> |{" "} { /* Link to the Compliment page */}

      <Link href="/affirmation">Affirmation</Link> { /* Link to the Affirmation page */}
      
    </nav>
  );
}