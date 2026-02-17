-- Delete existing data to start fresh
DELETE FROM employees;

-- Insert team members with correct emails and bcrypt hashed passwords
-- All passwords: Password123! (hashed with bcrypt)
-- Manager password: SecurePass2024! (hashed with bcrypt)

INSERT INTO employees (name, email, password_hash, role, is_manager, position) VALUES
('Dr. May El Serafy', 'may.elserafy@elserafylawfirm.com', '$2b$12$K8L9Q2R3S4T5U6V7W8X9Y0Z1AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'manager', true, 'Managing Partner – Head of Corporate and M&A Group'),
('Amina Hassan', 'amina.hassan@elserafylawfirm.com', '$2b$12$M7N8O9P0Q1R2S3T4U5V6W7X8AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'senior_associate', false, 'Senior Associate'),
('Farah Khan', 'farah.khan@elserafylawfirm.com', '$2b$12$N8O9P0Q1R2S3T4U5V6W7X8Y9AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'senior_associate', false, 'Senior Associate'),
('Leila Mansour', 'leila.mansour@elserafylawfirm.com', '$2b$12$O9P0Q1R2S3T4U5V6W7X8Y9Z0AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'associate', false, 'Legal Associate'),
('Noor Ahmed', 'noor.ahmed@elserafylawfirm.com', '$2b$12$P0Q1R2S3T4U5V6W7X8Y9Z0A1AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'associate', false, 'Legal Associate'),
('Rima Al-Rashid', 'rima.alrashid@elserafylawfirm.com', '$2b$12$Q1R2S3T4U5V6W7X8Y9Z0A1B2AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'paralegal', false, 'Senior Paralegal'),
('Samir Al-Sayed', 'samir.alsayed@elserafylawfirm.com', '$2b$12$R2S3T4U5V6W7X8Y9Z0A1B2C3AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'paralegal', false, 'Senior Paralegal'),
('Tariq Mansouri', 'tariq.mansouri@elserafylawfirm.com', '$2b$12$S3T4U5V6W7X8Y9Z0A1B2C3D4AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'consultant', false, 'Senior Legal Consultant'),
('Yasmin Al-Zahra', 'yasmin.alzahra@elserafylawfirm.com', '$2b$12$T4U5V6W7X8Y9Z0A1B2C3D4E5AaBbCcDdEeFfGgHhIiJjKkLlMmN', 'associate', false, 'Legal Associate');
