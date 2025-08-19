const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function createTestUser() {
  const email = 'test@example.com';
  const password = 'Test123456!';
  
  console.log('Creating test user...');
  
  const { data, error } = await supabase.auth.admin.createUser({
    email: email,
    password: password,
    email_confirm: true
  });
  
  if (error) {
    console.error('Error creating user:', error);
  } else {
    console.log('Test user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User ID:', data.user.id);
  }
}

createTestUser();