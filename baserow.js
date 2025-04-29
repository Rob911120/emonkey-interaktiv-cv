// baserow.js
// Baserow-integration: login och skicka events

const BASEROW_LOGIN_URL = 'https://api.baserow.io/api/user/token/';
const BASEROW_TABLE_ID  = '217648';    
const BASEROW_USERNAME  = 'knapra.tricken-5f@icloud.com';       
const BASEROW_PASSWORD  = 'qwe123@@';      
const BASEROW_API_BASE  = `https://api.baserow.io/api/database/rows/table/${217648}/`;

async function login() {
  try {
    const res = await fetch(BASEROW_LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: BASEROW_USERNAME, password: BASEROW_PASSWORD })
    });
    if (!res.ok) throw new Error('Login misslyckades: ' + await res.text());
    const { token } = await res.json();
    return token;
  } catch (err) {
    console.error('Fel vid login:', err);
    return null;
  }
}

async function sendEvent(eventType, data = {}) {
  const jwt = await login();
  if (!jwt) return;

  const payload = { fields: {
    event_type: eventType,
    timestamp:  new Date().toISOString(),
    ...data
  }};

  try {
    const res = await fetch(BASEROW_API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `JWT ${jwt}`
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) console.warn('Baserow-svar vid event:', await res.text());
  } catch (err) {
    console.error('Misslyckades skicka event:', err);
  }
}

// Exponera globalt för main.js
window.baserow = { sendEvent };
