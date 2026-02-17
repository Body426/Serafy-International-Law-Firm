-- Verify employees table exists and has data
SELECT id, name, email, role FROM employees ORDER BY name;

-- Count total employees
SELECT COUNT(*) as total_employees FROM employees;

-- Check if Dr. May exists
SELECT id, name, email, role FROM employees WHERE email = 'may.elserafy@elserafylawfirm.com';
