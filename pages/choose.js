import { useRouter } from 'next/router';

export default function ChoosePage() {
    const router = useRouter();

    // Add descriptions for tooltips
    const dialects = [
        { code: 'dz', file: 'dz.svg', label: 'Algeria', info: 'Spoken in North Africa with French influence.' },
        { code: 'tn', file: 'tn.svg', label: 'Tunisia', info: 'Tunisian Arabic with Berber and French words.' },
        { code: 'ma', file: 'ma.svg', label: 'Morocco', info: 'Darija, heavily influenced by Berber and French.' },
        { code: 'mr', file: 'mr.svg', label: 'Mauritania', info: 'Hassaniya dialect, close to Bedouin speech.' },
        { code: 'ly', file: 'ly.svg', label: 'Libya', info: 'Libyan Arabic, close to Maghrebi with Italian influence.' },
        { code: 'eg', file: 'eg.svg', label: 'Egypt', info: 'Egyptian Arabic, widely understood in media.' },
        { code: 'sd', file: 'sd.svg', label: 'Sudan', info: 'Sudanese Arabic, unique pronunciations and vocabulary.' },
        { code: 'td', file: 'td.svg', label: 'Chad', info: 'Chadian Arabic, also known as Shuwa Arabic.' },
        { code: 'so', file: 'so.svg', label: 'Somalia', info: 'Spoken in Somali Arab communities.' },
        { code: 'dj', file: 'dj.svg', label: 'Djibouti', info: 'Djiboutian Arabic, a mix with Somali and French.' },
        { code: 'km', file: 'km.svg', label: 'Comoros', info: 'Arabic influenced by Swahili and French.' },
        { code: 'sa', file: 'sa.svg', label: 'Saudi Arabia', info: 'Gulf Arabic with regional tribal dialects.' },
        { code: 'ae', file: 'ae.svg', label: 'UAE', info: 'Emirati Arabic, a Gulf dialect.' },
        { code: 'qa', file: 'qa.svg', label: 'Qatar', info: 'Closely related to Gulf Arabic.' },
        { code: 'kw', file: 'kw.svg', label: 'Kuwait', info: 'Kuwaiti Arabic, part of Gulf Arabic group.' },
        { code: 'bh', file: 'bh.svg', label: 'Bahrain', info: 'Bahraini Arabic, influenced by Persian and English.' },
        { code: 'om', file: 'om.svg', label: 'Oman', info: 'Omani Arabic with coastal dialects.' },
        { code: 'ye', file: 'ye.svg', label: 'Yemen', info: 'Yemeni Arabic, deeply rooted in Classical Arabic.' },
        { code: 'iq', file: 'iq.svg', label: 'Iraq', info: 'Mesopotamian Arabic, widely spoken.' },
        { code: 'sy', file: 'sy.svg', label: 'Syria', info: 'Syrian Arabic, part of Levantine dialects.' },
        { code: 'lb', file: 'lb.svg', label: 'Lebanon', info: 'Lebanese Arabic, French and Phoenician influence.' },
        { code: 'jo', file: 'jo.svg', label: 'Jordan', info: 'Jordanian Arabic, a Levantine dialect.' },
        { code: 'ps', file: 'ps.svg', label: 'Palestine', info: 'Palestinian Arabic, similar to Jordanian and Syrian.' },
        { code: 'ar', file: 'ar.svg', label: 'Modern Standard Arabic', info: 'Formal Arabic used in writing and media.' },
    ];

    const handleSelect = (code) => {
        router.push(`/translator?dialect=${encodeURIComponent(code)}`);
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#c89a6b',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Segoe UI, sans-serif',
                padding: '2rem',
                color: '#222',
            }}
        >
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Choose your dialect
            </h1>
            <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
                This is the dialect you want to translate to
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '800px',
                }}
            >
                {dialects.map(({ code, file, label, info }) => (
                    <button
                        key={code}
                        title={info}
                        onClick={() => handleSelect(code)}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #eee',
                            borderRadius: '12px',
                            padding: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.15s ease',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <img
                            src={`/flags/${file}`}
                            alt={`${label} flag`}
                            style={{
                                width: '80px',
                                height: 'auto',
                                marginBottom: '0.5rem',
                            }}
                        />
                        <span style={{ fontSize: '0.8rem', color: '#222', fontWeight: 500 }}>
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
