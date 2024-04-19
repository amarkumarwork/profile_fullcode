import React, { useRef,useEffect } from 'react';
import IndexRoutes from './Routes/IndexRoutes'; 
const App = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollTop + 2,
        behavior: 'smooth',
      });
    }
  };
  React.useEffect(() => {
    const scrollInterval = setInterval(handleScroll, 20); 
    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    const generateToken = () => {
      const payload = {
        username: "userId",
        
      };
      const secretKey = "shgdvcs6v4s68fv4sv46f8f";
      const header = {
        alg: "HS256",
        typ: "JWT",
      };
      const encodedHeader = btoa(JSON.stringify(header));
      const encodedPayload = btoa(JSON.stringify(payload));
      const encodedTokenData = `${encodedHeader}.${encodedPayload}`;
      const signature = btoa(
        crypto.subtle.sign(
          { name: "HMAC", hash: { name: "SHA-256" } },
          secretKey,
          encodedTokenData
        )
      );
      const token = `${encodedTokenData}.${signature}`;

      localStorage.setItem("token", token);
    };
    generateToken();
  }, []);


  return (
    <div ref={containerRef} style={{  scrollBehavior: 'smooth' }}>
      <div>
        <IndexRoutes />
      </div>
    </div>
  );
};

export default App;
