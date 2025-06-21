import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // ✅ Required for internal routing

export default function Home() {
    const [consentGiven, setConsentGiven] = useState(false);
    const router = useRouter();

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background SVG full width */}
            <img
                src="/landingpage.svg"
                alt="Semitic World Landing Page"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />

            {/* Overlay box at bottom */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Consent box */}
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '10px',
                        padding: '1rem 1.5rem',
                        textAlign: 'center',
                        marginBottom: '1.2rem',
                        maxWidth: '420px',
                    }}
                >
                    <label style={{ fontSize: '0.5rem', color: '#000', fontWeight: 'bold' }}>
                        <input
                            type="checkbox"
                            checked={consentGiven}
                            onChange={(e) => setConsentGiven(e.target.checked)}
                            style={{ marginRight: '0.5rem' }}
                        />
                        I consent to my translations being shared with OpenAI for evaluation and improvement. and accept the{' '}
                        <Link href="/terms">
                            <span style={{
                                color: '#000',
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}>
                                Terms of Use
                            </span>
                        </Link>
                    </label>

                    <br />
                    <Link href="/privacy">
                        <span style={{
                            fontSize: '0.5rem',
                            textDecoration: 'underline',
                            color: '#333',
                            cursor: 'pointer'
                        }}>
                            View Privacy Policy
                        </span>
                    </Link>
                </div>

                {/* GET STARTED button */}
                <button
                    disabled={!consentGiven}
                    onClick={() => router.push('/choose')}
                    style={{
                        backgroundColor: consentGiven ? '#fff' : '#ccc',
                        color: '#000',
                        fontWeight: 'bold',
                        padding: '0.8rem 1.8rem',
                        borderRadius: '30px',
                        border: 'none',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        cursor: consentGiven ? 'pointer' : 'not-allowed',
                        fontSize: '1rem',
                    }}
                >
                    GET STARTED
                </button>
            </div>
        </div>
    );
}

