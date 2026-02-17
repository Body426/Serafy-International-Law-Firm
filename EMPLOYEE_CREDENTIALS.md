# Employee Portal Credentials

## System Information
- **Portal URL**: `/employees`
- **Dashboard**: `/employees/dashboard`
- **Authentication**: Email + Password based login
- **Session Duration**: 7 days
- **Role-Based Access**: All employees have access to their own documents

---

## Manager Account

### Dr. May El Serafy (Managing Partner)
- **Email**: `may.elserafy@elserafylawfirm.com`
- **Password**: `SecurePass2024!`
- **Role**: Manager
- **Access Level**: Full admin access to all documents and employee accounts

---

## Team Member Accounts

All team members use the same standard password below. Each has their own email address.

### Standard Password for All Employees
```
Password123!
```

### Team Members

#### 1. Amina Hassan
- **Email**: `amina.hassan@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Senior Attorney

#### 2. Farah Khan
- **Email**: `farah.khan@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Legal Consultant

#### 3. Leila Mansour
- **Email**: `leila.mansour@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Paralegal

#### 4. Noor Ahmed
- **Email**: `noor.ahmed@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Associate Attorney

#### 5. Rima Al-Rashid
- **Email**: `rima.alrashid@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Legal Secretary

#### 6. Samir Al-Sayed
- **Email**: `samir.alsayed@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Senior Paralegal

#### 7. Tariq Mansouri
- **Email**: `tariq.mansouri@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Associate Attorney

#### 8. Yasmin Al-Zahra
- **Email**: `yasmin.alzahra@elserafylawfirm.com`
- **Password**: `Password123!`
- **Role**: Legal Analyst

---

## Features Available

### For All Employees
- ✅ Login to personal dashboard
- ✅ Upload documents
- ✅ View personal documents
- ✅ Track document status (Pending, Approved, Rejected)
- ✅ Download personal documents
- ✅ Delete personal documents
- ✅ Search documents
- ✅ View statistics (Total, Approved, Pending)
- ✅ Logout

### For Manager (Dr. May El Serafy)
- ✅ All employee features
- ✅ View all team member documents
- ✅ Approve/reject documents
- ✅ Manage employee accounts
- ✅ Generate reports
- ✅ System administration

---

## Security Notes

1. **Password Best Practices**:
   - Passwords are hashed using bcrypt
   - Stored securely in the database
   - Never displayed or logged in plain text

2. **Session Management**:
   - Sessions are stored as HTTP-only cookies
   - Automatic logout after 7 days of inactivity
   - Cannot be accessed via JavaScript

3. **Database Security**:
   - Uses Supabase with Row-Level Security (RLS)
   - Each employee can only access their own documents
   - Manager can access all documents

4. **API Security**:
   - All endpoints require valid authentication
   - CSRF protection enabled
   - Rate limiting recommended for production

---

## Testing Instructions

1. **First Time Login**:
   - Navigate to `/employees`
   - Enter email and password
   - Click "Sign In"

2. **After Successful Login**:
   - You'll be redirected to `/employees/dashboard`
   - View your documents and statistics
   - Upload new documents using the "Upload Document" button

3. **Logout**:
   - Click "Logout" button in the top right
   - You'll be redirected back to `/employees` login page

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Login fails | Verify email and password are correct (case-sensitive) |
| Documents not loading | Refresh the page or check internet connection |
| Upload fails | Ensure file is less than 10MB and format is supported |
| Session timeout | Login again - sessions expire after 7 days |

---

**Last Updated**: January 2026
**System Status**: Production Ready ✅
