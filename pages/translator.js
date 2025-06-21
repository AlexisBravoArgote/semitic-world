import { useState } from 'react';
import { useRouter } from 'next/router';

const DIALECT_LABELS = {
    dz: 'Algerian Arabic',
    tn: 'Tunisian Arabic',
    ma: 'Moroccan Arabic',
    mr: 'Mauritanian Arabic',
    ly: 'Libyan Arabic',
    eg: 'Egyptian Arabic',
    sd: 'Sudanese Arabic',
    td: 'Chadian Arabic',
    so: 'Somali Arabic',
    dj: 'Djiboutian Arabic',
    km: 'Comorian Arabic',
    sa: 'Saudi Arabic',
    ae: 'Emirati Arabic',
    qa: 'Qatari Arabic',
    kw: 'Kuwaiti Arabic',
    bh: 'Bahraini Arabic',
    om: 'Omani Arabic',
    ye: 'Yemeni Arabic',
    iq: 'Iraqi Arabic',
    sy: 'Syrian Arabic',
    lb: 'Lebanese Arabic',
    jo: 'Jordanian Arabic',
    ps: 'Palestinian Arabic',
    ar: 'Modern Standard Arabic',
};

export default function Translator() {
    const router = useRouter();
    const { dialect } = router.query;

    const [prompt, setPrompt] = useState('');
    const [reply, setReply] = useState('');
    const [includeIPA, setIncludeIPA] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('English');
    const [loading, setLoading] = useState(false); // ✅ added loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // ✅ start loading

        try {
            const res = await fetch('/api/gpt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt, dialect, includeIPA, inputLanguage }),
            });

            const data = await res.json();
            setReply(data.reply);
        } catch (error) {
            setReply('An error occurred. Please try again.');
        } finally {
            setLoading(false); // ✅ stop loading
        }
    };

    const dialectLabel = DIALECT_LABELS[dialect] || 'Arabic';

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("/background.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                color: '#000',
                position: 'relative',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '0.75rem 2rem',
                    borderRadius: '15px',
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            >
                Semitic World Translator
            </div>
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '0.3rem 1rem',
                    borderRadius: '10px',
                    marginBottom: '1rem',
                    fontWeight: '500',
                    fontSize: '1rem',
                }}
            >
                {dialectLabel}
            </div>

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
                    <label htmlFor="inputLanguage" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                        Select input language:
                    </label>
                    <select
                        id="inputLanguage"
                        value={inputLanguage}
                        onChange={(e) => setInputLanguage(e.target.value)}
                        style={{
                            display: 'block',
                            margin: '0.4rem 0 1rem 0',
                            padding: '0.4rem',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                        }}
                    >
                        {/* Language options (unchanged) */}
                        <option value="English">English</option>
                        <option value="Spanish">Español</option>
                        <option value="French">Français</option>
                        <option value="German">Deutsch</option>
                        <option value="Italian">Italiano</option>
                        <option value="Portuguese">Português</option>
                        <option value="Russian">Русский</option>
                        <option value="Chinese">中文</option>
                        <option value="Japanese">日本語</option>
                        <option value="Korean">한국어</option>
                        <option value="Hindi">हिन्दी</option>
                        <option value="Turkish">Türkçe</option>
                        <option value="Urdu">اردو</option>
                        <option value="Persian">فارسی</option>
                        <option value="Hebrew">עברית</option>
                        <option value="Swahili">Kiswahili</option>
                        <option value="Classical Syriac">ܠܫܢܐ ܣܘܪܝܝܐ ܥܬܝܩܐ</option>
                        <option value="Turoyo">ܛܘܪܝܝܐ</option>
                        {/* Arabic and other global options... */}
                    </select>

                    <label htmlFor="inputText" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                        Enter text to translate:
                        <br />
                        <span style={{ fontWeight: 400, fontSize: '0.85rem' }}>
                            Our AI will autodetect language if you’re unsure.
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

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.9rem' }}>
                            <input
                                type="checkbox"
                                checked={includeIPA}
                                onChange={() => setIncludeIPA(!includeIPA)}
                                style={{ marginRight: '0.5rem' }}
                            />
                            Include IPA pronunciation
                        </label>
                    </div>

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

                {/* ✅ loading indicator */}
                {loading && (
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold', color: '#f97316' }}>
                        Translating, please wait...
                    </p>
                )}

                {/* output */}
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
                            Arabic Output ({dialectLabel}):
                        </p>
                        <p style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>{reply}</p>
                    </div>
                )}
            </div>

            {/* back button */}
            <button
                onClick={() => router.push('/choose')}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '20px',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontWeight: 'bold',
                    padding: '0.6rem 1.2rem',
                    border: '1px solid #333',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
            >
                Choose another dialect
            </button>
        </div>
    );
}
