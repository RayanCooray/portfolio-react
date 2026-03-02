const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 flex items-center">
          <span className="font-bold italic text-2xl md:text-3xl tracking-widest">
            RAYAN COORAY
          </span>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-end gap-2">
          <span className="text-neutral-500 italic text-lg text-center md:text-right">
            Building digital experiences that matter
          </span>
    
        </div>
      </div>
      <div className="mt-4 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Rayan Cooray. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;