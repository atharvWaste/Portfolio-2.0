
import { useState } from "react";
import Nav from "../Home_Compo/Nav";
const  ExpirianceIntro= () => {


  // Creates a subtle parallax scroll effect for the background text
  return (
    <main>

        <Nav />
    <section style={{ 
      backgroundColor: '#000', 
      padding: '120px 0', 
      overflow: 'hidden', 
      position: 'relative' 
    }}>
      
     
      <h1 style={{
        position: 'absolute',
        top: '20%',
        left: '-5vw',
        fontSize: '18vw',
        fontWeight: '900',
        color: 'rgba(255,255,255,0.03)', 
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        textTransform: 'uppercase'
      }}>
       EKALAVYA
      </h1>


      <div style={{ position: 'relative', zIndex: 2, padding: '0 10%' }}>
        <h2 style={{ 
          fontSize: '1rem', 
          color: '#A855F7', 
          letterSpacing: '5px', 
          marginBottom: '20px' 
        }}>
          [ SECTION 03 ]
        </h2>
        
        <h3 style={{ 
          fontSize:'clamp(3rem, 6vw, 8rem)', 
          color: '#fff', 
          margin: 0, 
          lineHeight: '1' 
        }}>
          SKILL ZONE<span style={{ color: '#A855F7' }}>.</span>
        </h3>

        <p style={{ 
          color: '#888', 
          fontSize: '1.2rem', 
          maxWidth: '480px', 
          marginTop: '30px',
          lineHeight: '1.6' 
        }}>
          The Exihibition of the Skills I Perceived By My own.
        </p>
      </div>

      <div style={{ 
        marginTop: '100px', 
        borderBottom: '1px solid #222', 
        paddingBottom: '20px', 
        margin: '0 10%',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#444',
        fontSize: '0.8rem'
      }}>
        <span>Creating The Dreams</span>
        <span>YEAR / CATEGORY</span>
      </div>
      

    </section>

    </main>
  );
};

export default ExpirianceIntro