'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

// Clerk <SignedOut>
{/* <SignInButton />
<SignUpButton />
</SignedOut>
<SignedIn>
<UserButton />
</SignedIn> */}
// import {
//     SignInButton,
//     SignUpButton,
//     SignedIn,
//     SignedOut,
//     UserButton,
//   } from '@clerk/nextjs'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAuthenticated = false; // Replace with actual auth logic

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href={'/'}>
          <div className="text-2xl font-bold text-gray-800">Fake Pets</div>
          </Link>
          
          {/* Desktop Menu */}
          
          <div className="hidden md:flex space-x-6">
            {['About Us', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ /g, '')}`}>
                <span className={`hover:text-blue-600 transition ${pathname === `/${item.toLowerCase().replace(/ /g, '')}` ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>{item}</span>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-2">

          {['About Us', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/ /g, '')}`}>
              <span className="block text-gray-700 py-2 hover:text-blue-600 transition">{item}</span>
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}