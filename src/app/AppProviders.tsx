"use client";

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

// Criando o cliente do Supabase fora do componente para evitar recriação em cada renderização
const supabase = createClient(
  "https://xlaljpesbddiizjsowua.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWxqcGVzYmRkaWl6anNvd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NzEwMTksImV4cCI6MjAzMjQ0NzAxOX0.gqr4bdSI6nFqt3j-2UrW263w8gKsfdR0y6eap2VM6rU"
);

const AppProviders = ({ children }: any) => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};

export default AppProviders;
