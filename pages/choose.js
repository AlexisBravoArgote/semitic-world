// pages/choose.js
import { useRouter } from 'next/router';

export default function ChoosePage() {
    const router = useRouter();

    // Navigate to /translator, passing the chosen dialect in the query-string
    const handleSelect = (code) =>
        router.push(`/translator?dialect=${encodeURIComponent(code)}`);

    /* 24 dialect cards – code is what /translator will receive,
       label is what the user sees, flag is an emoji placeholder */
    const dialects = [
        { code: 'algerian', label: 'Algerian Arabic', flag: '🇩🇿' },
        { code: 'tunisian', label: 'Tunisian Arabic', flag: '🇹🇳' },
        { code: 'moroccan', label: 'Moroccan Arabic', flag: '🇲🇦' },
        { code: 'mauritanian', label: 'Mauritanian Arabic', flag: '🇲🇷' },
        { code: 'libyan', label: 'Libyan Arabic', flag: '🇱🇾' },
        { code: 'egyptian', label: 'Egyptian Arabic', flag: '🇪🇬' },
        { code: 'sudanese', label: 'Sudanese Arabic', flag: '🇸🇩' },
        { code: 'chadian', label: 'Chadian Arabic', flag: '🇹🇩' },
        { code: 'somali', label: 'Somali Arabic', flag: '🇸🇴' },
        { code: 'djiboutian', label: 'Djiboutian Arabic', flag: '🇩🇯' },
        { code: 'comorian', label: 'Comorian Arabic', flag: '🇰🇲' },
        { code: 'saudi', label: 'Saudi Arabic', flag: '🇸🇦' },
        { code: 'emirati', label: 'Emirati Arabic', flag: '🇦🇪' },
        { code: 'qatari', label: 'Qatari Arabic', flag: '🇶🇦' },
        { code: 'kuwaiti', label: 'Kuwaiti Arabic', flag: '🇰🇼' },
        { code: 'bahraini', label: 'Bahraini Arabic', flag: '🇧🇭' },
        { code: 'omani', label: 'Omani Arabic', flag: '🇴🇲' },
        { code: 'yemeni', label: 'Yemeni Arabic', flag: '🇾🇪' },
        { code: 'iraqi', label: 'Iraqi Arabic', flag: '🇮🇶' },
        { code: 'syrian', label: 'Syrian Arabic', flag: '🇸🇾' },
        { code: 'lebanese', label: 'Lebanese Arabic', flag: '🇱🇧' },
        { code: 'jordanian', label: 'Jordanian Arabic', flag: '🇯🇴' },
        { code: 'palestinian', label: 'Palestinian Arabic', flag: '🇵🇸' },
        { code: 'msa', label: 'Modern Standard Arabic', flag: '📖' },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#c89a6b',          // warm sand-brown
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                color: '#222',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Choose your dialect
            </h1>
            <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
                Our AI will automatically detect the language you type.
            </p>

            {/* Grid of cards */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '720px',
                }}
            >
                {dialects.map(({ code, label, flag }) => (
                    <button
                        key={code}
                        onClick={() => handleSelect(code)}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            padding: '0.8rem 0.4rem',
                            cursor: 'pointer',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <span style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>
                            {flag}
                        </span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                            {label.split(' ')[0]} {/* show just “Algerian”, “Qatari”… */}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
