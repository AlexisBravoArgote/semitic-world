import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Translator() {
    const router = useRouter();
    const { dialect } = router.query;

    const [prompt, setPrompt] = useState('');
    const [reply, setReply] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/gpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, dialect }),
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
                backgroundColor: '#fdf6e3',
                minHeight: '100vh',
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
                    maxWidth: '600px',
                    width: '100%',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="inputText"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                        }}
                    >
                        Enter text to translate:
                        <br />
                        <span style={{ fontWeight: '400', fontSize: '0.85rem' }}>
                            Our AI will autodetect language used.
                        </span>
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
                            marginBottom: '1rem',
                        }}
                    />

                    <button
                        type="submit"
                        style={{
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
                            Arabic Output{dialect ? ` (${dialect})` : ''}:
                        </p>
                        <p style={{ fontSize: '1.2rem' }}>{reply}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
