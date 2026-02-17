import bcrypt from 'bcryptjs';

async function generateHashes() {
  const passwords = {
    'Dr. May El Serafy': 'SecurePass2024!',
    'Amina Hassan': 'Password123!',
    'Farah Khan': 'Password123!',
    'Leila Mansour': 'Password123!',
    'Noor Ahmed': 'Password123!',
    'Rima Al-Rashid': 'Password123!',
    'Samir Al-Sayed': 'Password123!',
    'Tariq Mansouri': 'Password123!',
    'Yasmin Al-Zahra': 'Password123!',
  };

  console.log('Generating bcrypt hashes for all employees:\n');

  for (const [name, password] of Object.entries(passwords)) {
    const hash = await bcrypt.hash(password, 12);
    console.log(`${name}: ${hash}`);
  }
}

generateHashes().catch(console.error);
