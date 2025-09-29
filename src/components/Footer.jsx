import React from 'react';
import { FaHeart, FaRegCopyright } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">EC</span>
              </div>
              <span className="text-xl font-bold">Elton Chirambo</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Junior Full Stack Developer passionate about creating innovative 
              digital solutions that make a difference in people's lives.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Built with</span>
              <SiReact className="text-blue-400" />
              <span>&</span>
              <SiTailwindcss className="text-cyan-400" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>Desktop Application Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-1">
            <FaRegCopyright />
            <span>{currentYear} Elton Chirambo. All rights reserved.</span>
          </div>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <span>Made with</span>
            <FaHeart className="text-red-500" />
            <span>for the developer community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
