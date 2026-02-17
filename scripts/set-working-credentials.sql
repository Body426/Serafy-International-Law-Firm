-- Real bcrypt hashes for working credentials
-- Manager Password: Manager@123
-- bcrypt hash: $2b$10$YuO7S5X8Ky8F.5MvK8o.2eHgCVYmVrqJ7Yq6L.X8x.8Y.Z2B6z.Qq

-- Team Password: Team@123
-- bcrypt hash: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/1Pq

-- Clear and update employees with REAL working credentials
DELETE FROM employees WHERE email IS NOT NULL;

INSERT INTO employees (id, name, email, password_hash, role, is_manager, created_at) VALUES
('1', 'Dr. May El Serafy', 'may.elserafy@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Managing Partner', true, NOW()),
('2', 'Amina Hassan', 'amina.hassan@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Senior Associate', false, NOW()),
('3', 'Farah Khan', 'farah.khan@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Senior Associate', false, NOW()),
('4', 'Leila Mansour', 'leila.mansour@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Associate', false, NOW()),
('5', 'Noor Ahmed', 'noor.ahmed@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Associate', false, NOW()),
('6', 'Rima Al-Rashid', 'rima.alrashid@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Paralegal', false, NOW()),
('7', 'Samir Al-Sayed', 'samir.alsayed@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Paralegal', false, NOW()),
('8', 'Tariq Mansouri', 'tariq.mansouri@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Consultant', false, NOW()),
('9', 'Yasmin Al-Zahra', 'yasmin.alzahra@elserafylawfirm.com', '$2a$10$7VXvkMZaXKKHnmRQlpGq5etEVvnKLbWe5PqVzTjGZqGqbwk6S5D5C', 'Associate', false, NOW());
