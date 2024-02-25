import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-400 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <span>&copy;Health Chain, 2024</span>
          <span>|</span>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/contact-support" className="hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}
