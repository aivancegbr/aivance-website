exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const company = String(body.company || '').trim();
    const branche = String(body.branche || '').trim();
    const interesse = String(body.interesse || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email' }) };
    }

    if (name.length > 120 || email.length > 255 || message.length > 4000) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Payload too large' }) };
    }

    const safePayload = {
      name: name.replace(/[<>]/g, '').replace(/\s+/g, ' ').slice(0, 120),
      email: email.replace(/[<>]/g, '').slice(0, 255),
      company: company.replace(/[<>]/g, '').replace(/\s+/g, ' ').slice(0, 200),
      branche: branche.replace(/[<>]/g, '').replace(/\s+/g, ' ').slice(0, 200),
      interesse: interesse.replace(/[<>]/g, '').replace(/\s+/g, ' ').slice(0, 200),
      message: message.replace(/[<>]/g, '').replace(/\s+/g, ' ').slice(0, 4000),
    };

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, payload: safePayload }),
    };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }
};
