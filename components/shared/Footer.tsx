import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import './style.css';
const footer = () => {
  return (
    <footer className='footer'>
      <div>
      <Link href="/" className="w-36">
          {/* Wrap Image with an anchor tag */}
            <Image
            className='img'
              src="/assets/images/logo.png"
              width={128}
              height={38}
              alt="Logo"
              
            />
          
        </Link>
        <p>2024 Evently.All Rights reseved.</p>
      </div>
    </footer>
  )
}

export default footer
