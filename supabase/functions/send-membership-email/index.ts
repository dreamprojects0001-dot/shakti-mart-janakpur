import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, address, phone, message } = await req.json();

    if (!name || !address || !phone) {
      return new Response(
        JSON.stringify({ error: "Name, address, and phone are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const emailHtml = `
      <h2>New Membership Application</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Address:</td><td style="padding:8px;">${escapeHtml(address)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${escapeHtml(message || "—")}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Shakti Mart <onboarding@resend.dev>",
        to: ["shaktimart.com.np@gmail.com"],
        subject: `New Membership: ${escapeHtml(name)}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
