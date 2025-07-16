import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16'>
      <div className='max-container'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <a href='/' className='inline-block mb-6'>
              <img
                src={footerLogo}
                alt='Nike Logo'
                width={120}
                height={36}
                className='filter brightness-0 invert'
              />
            </a>
            <p className='text-gray-300 text-sm leading-relaxed mb-6 max-w-xs'>
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get rewards.
            </p>
            <div className='flex items-center gap-4'>
              {socialMedia.map((icon) => (
                <a
                  href='#'
                  className='flex justify-center items-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110'
                  key={icon.alt}
                >
                  <img 
                    src={icon.src} 
                    alt={icon.alt} 
                    width={18} 
                    height={18}
                    className='filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h4 className='font-semibold text-white text-lg mb-4 border-b border-gray-700 pb-2'>
                {section.title}
              </h4>
              <ul className='space-y-3'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.link}
                      className='text-gray-300 hover:text-white text-sm transition-colors duration-200 hover:underline'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400'>
            <div className='flex items-center gap-2'>
              <img
                src={copyrightSign}
                alt='copyright sign'
                width={16}
                height={16}
                className='filter brightness-0 invert opacity-50'
              />
              <span> 2025 Nike, Inc. All rights reserved.</span>
            </div>
            <div className='flex items-center gap-6'>
              <a href='#' className='hover:text-white transition-colors duration-200'>Terms & Conditions</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Privacy Policy</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;