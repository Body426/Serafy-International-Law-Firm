-- Update manager with plain text password
UPDATE employees 
SET password_hash = '123'
WHERE email = 'abdulrahman.0523001@gmail.com';

-- Verify update
SELECT id, name, email, password_hash FROM employees WHERE email = 'abdulrahman.0523001@gmail.com';
