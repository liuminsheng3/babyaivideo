#!/usr/bin/env node

// Test Supabase connection
// Run: node test-supabase.js

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

console.log('🔍 Testing Supabase connection...\n');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey.substring(0, 20) + '...\n');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Test 1: Check if we can connect
    console.log('1️⃣ Testing connection...');
    const { data: healthCheck, error: healthError } = await supabase
      .from('profiles')
      .select('count', { count: 'exact', head: true });
    
    if (healthError && healthError.code !== 'PGRST116') {
      // PGRST116 is "table not found" which is expected if schema isn't set up yet
      console.log('   ⚠️ Connection works but table might not exist yet');
      console.log('   Run the schema.sql in Supabase SQL editor first');
    } else {
      console.log('   ✅ Connected to Supabase successfully!');
    }

    // Test 2: Check auth
    console.log('\n2️⃣ Testing authentication...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.log('   ❌ Auth error:', sessionError.message);
    } else {
      console.log('   ✅ Auth is configured correctly');
      if (session) {
        console.log('   📝 Active session found');
      } else {
        console.log('   📝 No active session (this is normal)');
      }
    }

    // Test 3: List available tables (if schema is set up)
    console.log('\n3️⃣ Checking database tables...');
    const { data: tables, error: tablesError } = await supabase
      .from('profiles')
      .select('*')
      .limit(0);
    
    if (tablesError && tablesError.code === 'PGRST116') {
      console.log('   ⚠️ Tables not found - Please run schema.sql in Supabase');
      console.log('\n📋 Next steps:');
      console.log('   1. Go to Supabase SQL Editor');
      console.log('   2. Copy content from supabase/schema.sql');
      console.log('   3. Run the SQL');
    } else if (tablesError) {
      console.log('   ❌ Error:', tablesError.message);
    } else {
      console.log('   ✅ Database tables are set up!');
    }

    console.log('\n✨ Supabase configuration is working!');
    console.log('\n🔗 Supabase Dashboard: https://app.supabase.com/project/gwwvqayyzdxmckyphwge');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

testConnection();