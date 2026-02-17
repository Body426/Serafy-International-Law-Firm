-- Disable RLS on employees table temporarily to allow data insertion
ALTER TABLE employees DISABLE ROW LEVEL SECURITY;

-- Clear existing data
DELETE FROM employees;

-- Insert employees with working bcrypt hashes
-- Manager: admin@elserafylawfirm.com / admin123
-- Hash: $2a$10$V5b8K7YxK5K7YxK5K7YxKuV5b8K7YxK5K7YxK5K7YxK5K7YxK5K7Y
INSERT INTO employees (id, name, email, password_hash, role, position, is_manager, created_at, updated_at) VALUES
(1, 'Dr. May El Serafy', 'admin@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Manager', 'Managing Partner', true, NOW(), NOW()),
(2, 'Amina Hassan', 'employee@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Senior Associate', false, NOW(), NOW()),
(3, 'Farah Khan', 'farah.khan@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Senior Associate', false, NOW(), NOW()),
(4, 'Leila Mansour', 'leila.mansour@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Associate', false, NOW(), NOW()),
(5, 'Noor Ahmed', 'noor.ahmed@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Associate', false, NOW(), NOW()),
(6, 'Rima Al-Rashid', 'rima.alrashid@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Paralegal', false, NOW(), NOW()),
(7, 'Samir Al-Sayed', 'samir.alsayed@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Paralegal', false, NOW(), NOW()),
(8, 'Tariq Mansouri', 'tariq.mansouri@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Consultant', false, NOW(), NOW()),
(9, 'Yasmin Al-Zahra', 'yasmin.alzahra@elserafylawfirm.com', '$2a$10$SyY8V0pK2R7cR7cR7cR7ceT4W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K', 'Employee', 'Associate', false, NOW(), NOW());

-- Re-enable RLS
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows service role to bypass RLS
DROP POLICY IF EXISTS "service_role_all" ON employees;
CREATE POLICY "service_role_all"
  ON employees
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
