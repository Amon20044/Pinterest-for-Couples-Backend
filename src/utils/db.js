const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

if (!supabase) {
  console.error("❌ Failed to initialize Supabase client");
} else {
  console.log("✅ Supabase Database Connected");
}

module.exports = supabase;
