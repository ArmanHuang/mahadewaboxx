"use client"

import { useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa"; 
import Navbar from "../app/navbar";
import FeatureCard from "../app/featurecard";
import 'aos/dist/aos.css';
import AOS from "aos";

export default function Home() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Parallax and Particles */}
      <header 
        id="home" 
        className="relative w-full h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/gtw.png')" }}
      >
        {/* Particle effect overlay */}
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gtw.png" 
            alt="Background"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="z-20 text-center" data-aos="fade-up">
          <div className="flex justify-center space-x-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Let's Meet Us!
            </a>
          </div>
        </div>
        
        {/* Animated Characters */}
        <div className="absolute bottom-0 left-1/4 md:left-2/4 w-2/3 md:w-1/2 z-20" data-aos="fade-right" data-aos-delay="300">
          <div className="transform hover:translate-y-2 transition-all duration-500">
            <Image 
              src="/images/loppy.png" 
              alt="Loppy" 
              width={200} 
              height={240} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-1/4 md:right-1/4 w-2/3 md:w-1/2 z-20" data-aos="fade-left" data-aos-delay="300">
          <div className="transform hover:translate-y-2 transition-all duration-500">
            <Image 
              src="/images/anomali.png" 
              alt="Anomali" 
              width={200} 
              height={240} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* About Us Section with Particles */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-100 to-white relative">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-block mb-6 relative">
            <h2 className="text-4xl font-bold">About Us</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Mahadewabox adalah channel parodi yang menghibur dengan konten humor tentang kehidupan mahasiswa dan kejadian viral di Indonesia. Kami menggabungkan kreativitas dan realita untuk menciptakan video yang relatable dan bikin ngakak!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold mb-2">Parodi Kreatif</h3>
            <p className="text-gray-600">Konten parodi original yang mengambil inspirasi dari pengalaman nyata mahasiswa Indonesia</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2">Konten Viral</h3>
            <p className="text-gray-600">Selalu update dengan tren terbaru di kalangan mahasiswa dan media sosial Indonesia</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl mb-4">😂</div>
            <h3 className="text-xl font-bold mb-2">Humor Lokal</h3>
            <p className="text-gray-600">Menyajikan humor khas Indonesia yang relatable untuk semua kalangan</p>
          </div>
        </div>
      </section>

      {/* Characters Section with Hover Effects */}
      <section id="characters" className="py-24 px-4 bg-gradient-to-b from-gray-200 to-gray-100">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-block mb-10 relative">
            <h2 className="text-4xl font-bold">Our Characters</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { img: "loppy", name: "Loppy", desc: "Mahasiswa" },
              { img: "anomali", name: "Anomali", desc: "Mahasiswa" },
              { img: "character3", name: "Character 3", desc: "Coming Soon!" }
            ].map((char, index) => (
              <div 
                key={index} 
                className="relative group"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                  <div className="h-64 flex items-center justify-center">
                    <Image 
                      src={`/images/${char.img}.png`}
                      alt={char.name} 
                      width={200} 
                      height={240} 
                      className="transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{char.name}</h3>
                  <p className="text-gray-600 mt-2">{char.desc}</p>
                  
                  {char.name === "Character 3" && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section with Particles */}
      <section id="videos" className="py-24 px-4 bg-gradient-to-b from-white to-gray-100 relative">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-block mb-10 relative">
            <h2 className="text-4xl font-bold">Our Content</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              },
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              },
              {
                title: "Coming Soon",
                views: "0 juta views",
                time: "0 hari yang lalu"
              }
            ].map((video, index) => (
              <div 
                key={index} 
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <div className="aspect-video relative bg-gray-800">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-500 bg-opacity-90 rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                        <span className="text-3xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold truncate">{video.title}</h3>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>{video.views}</span>
                    <span>{video.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href="#" 
              className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Lihat Semua Video
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Animated Particles */}
      <footer className="py-16 w-full bg-gray-800 text-white relative">
        <div className="absolute inset-0 opacity-10">
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <div className="flex items-center justify-center gap-8 mb-8">
            <a
              href="https://instagram.com/mahadewabox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@mahadewabox?_t=ZS-8uOi6E2f55k&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaTiktok size={30} />
            </a>
          </div>
         
          <div id="contact" className="mt-4 text-center">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">For inquiries, please email us at:</p>
            <a href="mailto:mahadewabox@gmail.com" className="text-yellow-400 hover:underline">
              mahadewabox@gmail.com
            </a>
            <p className="text-center mt-8 text-gray-400">
              &copy; 2025 Mahadewabox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}