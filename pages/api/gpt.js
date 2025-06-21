// pages/api/gpt.js
export default async function handler(req, res) {
    const { prompt, dialect, includeIPA, inputLanguage } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'No prompt provided.' });
    }

    /* ---------------- System prompt ---------------- */
    const systemPrompt = `
You are a helpful assistant that translates text from ${inputLanguage || 'English'}
into the target Arabic dialect: ${dialect || 'Modern Standard Arabic'}.

Translate the MEANING of the input; do not simply transliterate words from the source
language unless they are proper nouns.

Return your answer in EXACTLY this layout, with blank lines preserved:

Arabic script:
<the translated phrase in Arabic script>

Transliteration:
<Latin transcription of the Arabic phrase>
${includeIPA ? '\nIPA:\n<IPA pronunciation of the Arabic phrase>' : ''}

Do NOT add any introductions, summaries, or extra commentary.
  `.trim();

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                temperature: 0.3,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt },
                ],
            }),
        });

        const data = await response.json();
        if (!data.choices || !data.choices[0]?.message?.content) {
            return res.status(500).json({ error: 'Invalid response from OpenAI.' });
        }

        res.status(200).json({ reply: data.choices[0].message.content.trim() });
    } catch (err) {
        console.error('OpenAI error:', err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
}
