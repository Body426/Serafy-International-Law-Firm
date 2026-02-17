-- Clear existing employees and insert with new manager credentials
DELETE FROM employees;

-- Insert Manager - Dr. May El Serafy
-- Password: 123 (bcrypt hash)
INSERT INTO employees (name, email, role, password_hash, is_manager)
VALUES (
  'Dr. May El Serafy',
  'abdulrahman.0523001@gmail.com',
  'Manager',
  '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z',
  true
);

-- Insert Team Members with standard credentials
-- Password: employee123 (bcrypt hash)
INSERT INTO employees (name, email, role, password_hash, is_manager)
VALUES 
  ('Amina Hassan', 'amina.hassan@elserafylawfirm.com', 'Senior Associate', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Farah Khan', 'farah.khan@elserafylawfirm.com', 'Senior Associate', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Leila Mansour', 'leila.mansour@elserafylawfirm.com', 'Associate', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Noor Ahmed', 'noor.ahmed@elserafylawfirm.com', 'Associate', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Rima Al-Rashid', 'rima.alrashid@elserafylawfirm.com', 'Paralegal', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Samir Al-Sayed', 'samir.alsayed@elserafylawfirm.com', 'Paralegal', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Tariq Mansouri', 'tariq.mansouri@elserafylawfirm.com', 'Consultant', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false),
  ('Yasmin Al-Zahra', 'yasmin.alzahra@elserafylawfirm.com', 'Associate', '$2b$10$YIjlrJyUfylanCzByKB5z.8Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z.3Z', false);

-- Verify insertion
SELECT email, role, is_manager FROM employees ORDER BY is_manager DESC;
