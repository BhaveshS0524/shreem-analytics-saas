"use client"; // This is the secret to stopping the build hang

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents the server from trying to "optimize" the content

  return (
    <main style={{ 
      backgroundColor: 'white', 
      color: '#000080', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Shreem Analytics</h1>
      <p style={{ fontSize: '1.2rem', color: '#00FFFF' }}>AI-Driven Growth for Gujarat SMEs</p>
      <div style={{ marginTop: '30px', border: '1px solid #C0C0C0', padding: '20px', borderRadius: '8px' }}>
        <p>Founder: Bhavesh Suryavanshi</p>
        <p>Expertise: 17 Years (BFSI & Corporate Training)</p>
        <a href="https://wa.me/919824048748" style={{ color: '#00FFFF', fontWeight: 'bold', textDecoration: 'none' }}>
          Connect via WhatsApp →
        </a>
      </div>
    </main>
  );
}
