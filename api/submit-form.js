export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get the GAS URL from environment variable (secret, not in repo)
    const GAS_URL = process.env.GAS_URL;

    if (!GAS_URL) {
        console.error('GAS_URL environment variable not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const payload = req.body;

        // Call the real Google Apps Script
        const response = await fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        // Return success to frontend
        res.status(200).json({ 
            success: true, 
            message: 'Transmission received. Stand by for response.' 
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Unable to transmit. Try again later.' 
        });
    }
}
