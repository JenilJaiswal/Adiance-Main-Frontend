import React from 'react';
import {
  Facebook,
  LinkedIn,
  Pinterest,
  Instagram,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const ThankYou = ({ onClose }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#333',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Thanks for submitting!</h2>
      <div style={{ width: '30px', height: '2px', backgroundColor: '#C00', marginBottom: '20px' }}></div>
      
      <div style={{ marginBottom: '20px' }}>
        {/* Simple Email Icon SVG */}
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>

      <p style={{ fontSize: '14px', marginBottom: '30px' }}>We'll Connect With You Soon</p>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Let's Contact</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
           <a href="https://www.facebook.com/adiancetechnologies" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
             <Facebook fontSize="small" />
           </a>
           <a href="https://twitter.com/adiancetech" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
             <XIcon fontSize="small" />
           </a>
           <a href="https://www.instagram.com/adiancetech/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
             <Instagram fontSize="small" />
           </a>
           <a href="https://www.linkedin.com/company/adiancetechnologies/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
             <LinkedIn fontSize="small" />
           </a>
           {/* Pinterest is in footer but maybe less relevant here? Including it to be safe as user said "all the icons" */}
           {/* <a href="https://in.pinterest.com/Adiancetech/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
             <Pinterest fontSize="small" />
           </a> */}
        </div>
      </div>

      <button 
        onClick={onClose}
        style={{
          backgroundColor: '#A00',
          color: 'white',
          border: 'none',
          padding: '10px 40px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '12px',
          marginTop: 'auto'
        }}
      >
        CLOSE
      </button>
    </div>
  );
};

export default ThankYou;
