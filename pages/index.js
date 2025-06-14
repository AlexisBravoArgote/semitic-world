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
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>🌍 Semitic World – GPT Assistant</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={5}
                    cols={50}
                    placeholder="Ask something..."
                    required
                />
                <br />
                <button type="submit" style={{ marginTop: '1rem' }}>Ask GPT</button>
            </form>
            {reply && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>Response:</h3>
                    <p>{reply}</p>
                </div>
            )}
        </div>
    );
}
