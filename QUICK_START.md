# Quick Start Guide

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Supabase account with project set up

## Step 1: Install Dependencies
```bash
npm install --legacy-peer-deps
```

✅ **Already done!** Dependencies are installed.

## Step 2: Set Up Environment Variables

1. Create a `.env.local` file in the root directory
2. Copy the content from `.env.local.example`
3. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Where to find these:**
- Go to your Supabase project dashboard: https://app.supabase.com
- Navigate to Settings → API
- Copy the "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
- Copy the "service_role" key → `SUPABASE_SERVICE_ROLE_KEY`

## Step 3: Run the Development Server

```bash
npm run dev
```

The app will start at: **http://localhost:3000**

## Step 4: Access the Application

- **Home Page**: http://localhost:3000
- **Employee Portal**: http://localhost:3000/employees

### Employee Login Credentials

**Manager Account:**
- Email: `may.elserafy@elserafylawfirm.com`
- Password: `SecurePass2024!`

**Employee Account (example):**
- Email: `amina.hassan@elserafylawfirm.com`
- Password: `Password123!`

## Other Commands

- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run linter**: `npm run lint`

## Troubleshooting

**Port 3000 already in use?**
- Change the port: `npm run dev -- -p 3001`

**Environment variables not working?**
- Make sure `.env.local` is in the root directory
- Restart the dev server after changing `.env.local`
- Check that variable names match exactly (case-sensitive)

**Database connection issues?**
- Verify your Supabase credentials are correct
- Check that your Supabase project is active
- Ensure the `employees` table exists in your database
