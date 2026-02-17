-- Verify password hashes are present and not null
SELECT 
  id,
  name,
  email,
  role,
  CASE 
    WHEN password_hash IS NULL THEN 'NO HASH'
    WHEN password_hash = '' THEN 'EMPTY HASH'
    ELSE 'HASH EXISTS'
  END as hash_status,
  LENGTH(password_hash) as hash_length
FROM employees
ORDER BY id;
