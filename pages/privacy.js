import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                fontFamily: 'Segoe UI, sans-serif',
                color: '#222',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
            }}
        >
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Privacy Policy</h1>

            <p>
                <strong>Effective date:</strong> June 21, 2025
            </p>

            <p>
                This Privacy Policy explains how your data is handled when using the Semitic World
                Translator web app.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>1. Data Collection</h2>
            <p>
                When you submit text for translation, the input text and the AI response may be shared
                with OpenAI for evaluation and improvement of its models.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>2. User Consent</h2>
            <p>
                We do not send any data to OpenAI unless you explicitly consent via the checkbox on the
                landing page. If you do not check the consent box, you will not be able to proceed to the
                translator.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>3. Third-Party Services</h2>
            <p>
                The translation is powered by the OpenAI API. Their own privacy and data policies apply to
                how your data is used on their side.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>4. No Account Required</h2>
            <p>
                This app does not require you to create an account. We do not store or track personal
                information such as names, emails, or IP addresses.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>5. Changes</h2>
            <p>
                We may update this privacy policy in the future. All changes will be reflected on this
                page.
            </p>

            <p style={{ marginTop: '2rem' }}>
                If you have any questions, please contact us at{' '}
                <a href="mailto: abapax@gmail.com" style={{ color: '#0070f3' }}>
                    abapax@gmail.com
                </a>
                .
            </p>

            <div style={{ marginTop: '3rem' }}>
                <Link href="/" style={{ color: '#f97316', textDecoration: 'underline' }}>
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
