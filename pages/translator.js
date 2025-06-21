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
                        {/* Global Languages */}
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

                        {/* Aramaic Dialects */}
                        <option value="Classical Syriac">ܠܫܢܐ ܣܘܪܝܝܐ ܥܬܝܩܐ</option>
                        <option value="Turoyo">ܛܘܪܝܝܐ</option>

                        {/* Arabic Dialects */}
                        <option value="Modern Standard Arabic">العربية الفصحى</option>
                        <option value="Moroccan Arabic">العربية المغربية</option>
                        <option value="Algerian Arabic">العربية الجزائرية</option>
                        <option value="Tunisian Arabic">العربية التونسية</option>
                        <option value="Libyan Arabic">العربية الليبية</option>
                        <option value="Mauritanian Arabic">العربية الموريتانية</option>
                        <option value="Egyptian Arabic">العربية المصرية</option>
                        <option value="Sudanese Arabic">العربية السودانية</option>
                        <option value="Chadian Arabic">العربية التشادية</option>
                        <option value="Somali Arabic">العربية الصومالية</option>
                        <option value="Djiboutian Arabic">العربية الجيبوتية</option>
                        <option value="Comorian Arabic">العربية القمرية</option>
                        <option value="Saudi Arabic">العربية السعودية</option>
                        <option value="Emirati Arabic">العربية الإماراتية</option>
                        <option value="Qatari Arabic">العربية القطرية</option>
                        <option value="Kuwaiti Arabic">العربية الكويتية</option>
                        <option value="Bahraini Arabic">العربية البحرينية</option>
                        <option value="Omani Arabic">العربية العمانية</option>
                        <option value="Yemeni Arabic">العربية اليمنية</option>
                        <option value="Iraqi Arabic">العربية العراقية</option>
                        <option value="Syrian Arabic">العربية السورية</option>
                        <option value="Lebanese Arabic">العربية اللبنانية</option>
                        <option value="Jordanian Arabic">العربية الأردنية</option>
                        <option value="Palestinian Arabic">العربية الفلسطينية</option>

                        {/* European Languages */}
                        <option value="Greek">Ελληνικά</option>
                        <option value="Polish">Polski</option>
                        <option value="Lithuanian">Lietuvių</option>
                        <option value="Latvian">Latviešu</option>
                        <option value="Slovak">Slovenčina</option>
                        <option value="Slovene">Slovenščina</option>
                        <option value="Czech">Čeština</option>
                        <option value="Romanian">Română</option>
                        <option value="Hungarian">Magyar</option>
                        <option value="Dutch">Nederlands</option>
                        <option value="Swedish">Svenska</option>
                        <option value="Finnish">Suomi</option>
                        <option value="Danish">Dansk</option>
                        <option value="Norwegian">Norsk</option>
                        <option value="Icelandic">Íslenska</option>
                        <option value="Estonian">Eesti</option>
                        <option value="Albanian">Shqip</option>
                        <option value="Macedonian">Македонски</option>
                        <option value="Serbian">Српски</option>
                        <option value="Bulgarian">Български</option>
                        <option value="Croatian">Hrvatski</option>
                        <option value="Bosnian">Bosanski</option>
                        <option value="Georgian">ქართული</option>
                        <option value="Armenian">Հայերեն</option>
                        <option value="Azerbaijani">Azərbaycan dili</option>

                        {/* Major Regional European Languages */}
                        <option value="Catalan">Català</option>
                        <option value="Irish">Gaeilge</option>
                        <option value="Welsh">Cymraeg</option>
                        <option value="Breton">Brezhoneg</option>
                        <option value="Scottish Gaelic">Gàidhlig</option>
                        <option value="Occitan">Occitan</option>

                        {/* African Languages */}
                        <option value="Amharic">አማርኛ</option>
                        <option value="Tigrinya">ትግርኛ</option>
                        <option value="Somali">Soomaali</option>
                        <option value="Oromo">Afaan Oromoo</option>
                        <option value="Hausa">Hausa</option>
                        <option value="Yoruba">Yorùbá</option>
                        <option value="Igbo">Igbo</option>
                        <option value="Zulu">IsiZulu</option>
                        <option value="Xhosa">IsiXhosa</option>
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Shona">ChiShona</option>
                        <option value="Wolof">Wolof</option>
                        <option value="Fula">Pulaar</option>
                        <option value="Berber">Tamazight</option>

                        {/* Asian Languages */}
                        <option value="Bengali">বাংলা</option>
                        <option value="Tamil">தமிழ்</option>
                        <option value="Telugu">తెలుగు</option>
                        <option value="Malayalam">മലയാളം</option>
                        <option value="Kannada">ಕನ್ನಡ</option>
                        <option value="Sinhala">සිංහල</option>
                        <option value="Thai">ไทย</option>
                        <option value="Vietnamese">Tiếng Việt</option>
                        <option value="Burmese">မြန်မာစာ</option>
                        <option value="Mongolian">Монгол</option>
                        <option value="Khmer">ភាសាខ្មែរ</option>
                        <option value="Tagalog">Tagalog</option>
                        <option value="Lao">ລາວ</option>
                        <option value="Indonesian">Bahasa Indonesia</option>
                        <option value="Javanese">ꦧꦱꦗꦮ</option>
                        <option value="Sundanese">Basa Sunda</option>
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
