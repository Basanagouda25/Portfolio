
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-dark-text font-mono">
      <p>&copy; {new Date().getFullYear()} Basanagouda D. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
