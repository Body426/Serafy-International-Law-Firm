-- This is the bcrypt hash for password "123" 
-- Generated with bcrypt rounds 10
-- Hash: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86AGR0Ks/zK

UPDATE employees 
SET password_hash = '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86AGR0Ks/zK'
WHERE email = 'abdulrahman.0523001@gmail.com';

-- Verify the update
SELECT id, name, email, password_hash FROM employees WHERE email = 'abdulrahman.0523001@gmail.com';
