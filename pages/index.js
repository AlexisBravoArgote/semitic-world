import Link from 'next/link';

export default function LandingPage() {
    return (
        <div style={{
            backgroundColor: '#f4e2c0',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Segoe UI, sans-serif',
            padding: '2rem',
            color: '#222'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>SEMITIC WORLD</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Connecting 22 countries into an AI-powered translator.
                <br />
                Translate from any language to any Arabic dialect.
            </p>
            <Link href="/choose">
                <button style={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    padding: '1rem 2rem',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}>
                    GET STARTED
                </button>
            </Link>
        </div>
    );
}
