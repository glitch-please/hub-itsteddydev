import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabaseClient';

export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
  return new Response(JSON.stringify({ user: data.user }), { status: 200 });
}; 