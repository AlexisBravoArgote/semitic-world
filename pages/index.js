import { useState } from 'react';

export default function Home() {
    const [prompt, setPrompt] = useState('');
    const [reply, setReply] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/gpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        const data = await res.json();
        setReply(data.reply);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#fdf6e3', // sand-yellow
                color: '#222',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Semitic World Translator
            </h1>

            <div
                style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    width: '100%',
                    maxWidth: '600px',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="inputText"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                        }}
                    >
                        Enter text to translate:
                        Our AI will autodetect language used.
                    </label>

                    <textarea
                        id="inputText"
                        rows={4}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type here..."
                        required
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            fontSize: '1rem',
                            resize: 'none',
                            outline: 'none',
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            marginTop: '1rem',
                            backgroundColor: '#f97316',
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: '0.6rem 1.5rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        Translate
                    </button>
                </form>

                {reply && (
                    <div
                        style={{
                            backgroundColor: '#f3f4f6',
                            marginTop: '2rem',
                            borderRadius: '10px',
                            padding: '1rem',
                        }}
                    >
                        <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                            Arabic Output:
                        </p>
                        <p style={{ fontSize: '1.2rem' }}>{reply}</p>

                        {/* Optional: if you later add transliteration */}
                        {/* <p style={{ color: '#777', fontStyle: 'italic' }}>
            Transliteration: {transliteration}
          </p> */}
                    </div>
                )}
            </div>
        </div>
    );


}


