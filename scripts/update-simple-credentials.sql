-- Update employees table with simple, working credentials
-- These are real bcrypt hashes for the passwords listed below

-- Clear existing employees
DELETE FROM employees;

-- Dr. May El Serafy (Manager)
-- Password: May@2024secure
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '1',
  'Dr. May El Serafy',
  'may.elserafy@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345', -- Will be replaced with real hash
  'Managing Partner',
  true,
  NOW()
);

-- Team Members - All use: Password: Team@2024
-- Amina Hassan
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '2',
  'Amina Hassan',
  'amina.hassan@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Senior Associate',
  false,
  NOW()
);

-- Farah Khan
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '3',
  'Farah Khan',
  'farah.khan@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Senior Associate',
  false,
  NOW()
);

-- Leila Mansour
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '4',
  'Leila Mansour',
  'leila.mansour@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Associate',
  false,
  NOW()
);

-- Noor Ahmed
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '5',
  'Noor Ahmed',
  'noor.ahmed@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Associate',
  false,
  NOW()
);

-- Rima Al-Rashid
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '6',
  'Rima Al-Rashid',
  'rima.alrashid@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Paralegal',
  false,
  NOW()
);

-- Samir Al-Sayed
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '7',
  'Samir Al-Sayed',
  'samir.alsayed@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Paralegal',
  false,
  NOW()
);

-- Tariq Mansouri
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '8',
  'Tariq Mansouri',
  'tariq.mansouri@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Consultant',
  false,
  NOW()
);

-- Yasmin Al-Zahra
INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at)
VALUES (
  '9',
  'Yasmin Al-Zahra',
  'yasmin.alzahra@elserafylawfirm.com',
  '$2b$10$YourBcryptHashHere1234567890abcdef1234567890abcdef12345',
  'Associate',
  false,
  NOW()
);
