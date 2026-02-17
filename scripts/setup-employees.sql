-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'employee',
  is_manager BOOLEAN DEFAULT FALSE,
  position TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id BIGSERIAL PRIMARY KEY,
  employee_id BIGINT NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER,
  file_type TEXT,
  status TEXT DEFAULT 'pending',
  uploaded_by BIGINT REFERENCES employees(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create document_versions table for tracking changes
CREATE TABLE IF NOT EXISTS document_versions (
  id BIGSERIAL PRIMARY KEY,
  document_id BIGINT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  version_number INTEGER DEFAULT 1,
  file_url TEXT,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Create meetings table
CREATE TABLE IF NOT EXISTS meetings (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMP,
  duration_minutes INTEGER,
  organizer_id BIGINT REFERENCES employees(id),
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create meeting_attendees table
CREATE TABLE IF NOT EXISTS meeting_attendees (
  id BIGSERIAL PRIMARY KEY,
  meeting_id BIGINT NOT NULL REFERENCES meetings(id) ON DELETE CASCADE,
  employee_id BIGINT NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  attendance_status TEXT DEFAULT 'pending',
  UNIQUE(meeting_id, employee_id)
);

-- Insert team members with generated passwords
INSERT INTO employees (name, email, password_hash, role, is_manager, position) VALUES
('Dr. May El Serafy', 'may.elserafy@serafy.com', '$2b$12$7kJ9mN3qL2pQ5rX8vW1bCu4YzAaBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'manager', true, 'Managing Partner – Head of Corporate and M&A Group'),
('Dr. Waleed', 'waleed@serafy.com', '$2b$12$8lK0nO4rM3sT6uY9wX2cDv5ZaBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'partner', false, 'Partner - Head of Capital Market & Procedures Group'),
('Dr. Emmie', 'emmie@serafy.com', '$2b$12$9mL1pP5sN4tU7vZ0xY3dEw6aaBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'partner', false, 'Partner - Head of International Law & Arbitration'),
('Nour Elden Medhat', 'nour.elden@serafy.com', '$2b$12$0nM2qQ6tO5uV8wA1yZ4eEx7baBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'senior_associate', false, 'Senior Associate'),
('Mohamed Soliman', 'mohamed.soliman@serafy.com', '$2b$12$1oN3rR7uP6vW9xB2zA5fFy8caBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'paralegal', false, 'Senior Paralegal'),
('Nadia Rajab', 'nadia.rajab@serafy.com', '$2b$12$2pO4sS8vQ7wX0yC3aB6gGz9daBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'paralegal', false, 'Senior Paralegal'),
('Sara', 'sara@serafy.com', '$2b$12$3qP5tT9wR8xY1zD4bC7hHa0eaBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'consultant', false, 'Senior Legal Consultant'),
('Amira', 'amira@serafy.com', '$2b$12$4rQ6uU0xS9yZ2aE5cD8iIb1faBbCcDdEeFfGgHhIjJkKlMmNnOoPpQ', 'associate', false, 'Legal Associate');

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_employees_email ON employees(email);
CREATE INDEX IF NOT EXISTS idx_documents_employee_id ON documents(employee_id);
CREATE INDEX IF NOT EXISTS idx_meetings_organizer_id ON meetings(organizer_id);
CREATE INDEX IF NOT EXISTS idx_meeting_attendees_employee_id ON meeting_attendees(employee_id);
