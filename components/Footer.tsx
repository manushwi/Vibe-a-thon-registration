
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 border-t border-primary/20 py-8">
      <div className="container mx-auto px-6 text-center text-accent">
        <p className="font-orbitron text-lg font-bold">CODEZY</p>
        <div className="flex justify-center space-x-2 mb-4">
          <SocialIcon href="https://www.linkedin.com/showcase/codezyrkgitm/">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995.017-2.277-1.387-2.277-1.405 0-1.62 1.1-1.62 2.207v4.248H8.014V8.588h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433c-.946 0-1.71-.764-1.71-1.71s.764-1.71 1.71-1.71 1.71.764 1.71 1.71c0 .946-.764 1.71-1.71 1.71zM6.654 16.338H4.02V8.588h2.634v7.75zM18.344 2H5.656C3.64 2 2 3.64 2 5.656v12.688C2 20.36 3.64 22 5.656 22h12.688C20.36 22 22 20.36 22 18.344V5.656C22 3.64 20.36 2 18.344 2z" clipRule="evenodd" /></svg>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/_codezy/">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zm-1.156 5.704a5.12 5.12 0 11-1.023 10.24 5.12 5.12 0 011.023-10.24zm0 1.944a3.176 3.176 0 100 6.352 3.176 3.176 0 000-6.352zm6.556-3.75a1.219 1.219 0 100 2.438 1.219 1.219 0 000-2.438z" clipRule="evenodd" /></svg>
          </SocialIcon>
        </div>
        
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()}CodezY. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
