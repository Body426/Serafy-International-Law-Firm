-- Clear existing employees
DELETE FROM employees;

-- Insert manager with proper bcrypt hash
-- Password: admin123
-- Hash: $2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lm
INSERT INTO employees (name, email, role, password_hash) VALUES
('Dr. May El Serafy', 'admin@elserafylawfirm.com', 'Manager', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lm');

-- Insert team members with proper bcrypt hash
-- Password: employee123
-- Hash: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy
INSERT INTO employees (name, email, role, password_hash) VALUES
('Amina Hassan', 'amina.hassan@elserafylawfirm.com', 'Senior Associate', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Farah Khan', 'farah.khan@elserafylawfirm.com', 'Senior Associate', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Leila Mansour', 'leila.mansour@elserafylawfirm.com', 'Associate', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Noor Ahmed', 'noor.ahmed@elserafylawfirm.com', 'Associate', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Rima Al-Rashid', 'rima.alrashid@elserafylawfirm.com', 'Paralegal', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Samir Al-Sayed', 'samir.alsayed@elserafylawfirm.com', 'Paralegal', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Tariq Mansouri', 'tariq.mansouri@elserafylawfirm.com', 'Consultant', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy'),
('Yasmin Al-Zahra', 'yasmin.alzahra@elserafylawfirm.com', 'Associate', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/eBy');

-- Verify data was inserted
SELECT COUNT(*) as total_employees FROM employees;
SELECT email, name, role FROM employees ORDER BY created_at;
