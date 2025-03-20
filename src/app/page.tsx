"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa"; 
import Navbar from "./navbar";
import Particles from "react-tsparticles";
import { motion } from "framer-motion"; // Import framer-motion
import 'aos/dist/aos.css';
import AOS from "aos";

// Define your data arrays outside the component
const features = [
  {
    emoji: "🎭",
    title: "Parodi Kreatif",
    description: "Konten parodi original yang mengambil inspirasi dari pengalaman nyata mahasiswa Indonesia",
    delay: 100
  },
  {
    emoji: "🔥",
    title: "Konten Viral",
    description: "Selalu update dengan tren terbaru di kalangan mahasiswa dan media sosial Indonesia",
    delay: 200
  },
  {
    emoji: "😂",
    title: "Humor Lokal",
    description: "Menyajikan humor khas Indonesia yang relatable untuk semua kalangan",
    delay: 300
  }
];

const characters = [
  { img: "Botak", name: "Botak", desc: "Mahasiswa" },
  { img: "anomali", name: "anomali", desc: "Mahasiswa" },
  { img: "Dosen", name: "Dosen ", desc: "Dosen!" }
];

const videos = [
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
];

const Home: React.FC = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header 
        id="home" 
        className="relative w-full h-[850px] md:h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/Mobile-Banner.png')" // version mobile
        }}
      >
        {/* Ganti background untuk desktop */}
        <div 
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: "url('/images/bannner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Particle effect overlay */}
        <Particles
          options={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#FFA500", // Warna oranye
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />

        {/* Tombol Aksi */}
        <div className="z-20 text-center" data-aos="fade-up">
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="#about" 
              className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }} // Efek hover
              whileTap={{ scale: 0.9 }} // Efek saat ditekan
            >
              Let's Meet Us!
            </motion.a>
          </div>
        </div>

        {/* Animated Characters */}
        {/* Loppy */}
        <motion.div 
          className="absolute bottom-0 left-[10%] md:left-[25%] w-32 md:w-48 z-20" 
          data-aos="fade-right" 
          data-aos-delay="300"
          initial={{ opacity: 0, y: 50 }} // Animasi awal
          animate={{ opacity: 1, y: 0 }} // Animasi akhir
          transition={{ duration: 0.5 }} // Durasi animasi
        >
          <div className="transform transition-transform duration-500 hover:scale-110">
            <Image 
              src="/images/Botak.png" 
              alt="Botak" 
              width={200} 
              height={240} 
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Anomali */}
        <motion.div 
          className="absolute bottom-0 right-[10%] md:right-[25%] w-32 md:w-48 z-20" 
          data-aos="fade-left" 
          data-aos-delay="300"
          initial={{ opacity: 0, y: 50 }} // Animasi awal
          animate={{ opacity: 1, y: 0 }} // Animasi akhir
          transition={{ duration: 0.5 }} // Durasi animasi
        >
          <div className="transform transition-transform duration-500 hover:scale-110">
            <Image 
              src="/images/anomali.png" 
              alt="Anomali" 
              width={200} 
              height={240} 
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>
      </header>

      {/* About Us Section with Particles */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-100 to-white relative">
        <Particles
          options={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#FFA500", // Warna oranye
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-block mb-6 relative">
            <h2 className="text-4xl font-bold">About Us</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          <p className="text-lg max-w-3xl text-justify mx-auto leading-relaxed">
            Mahadewabox adalah channel parodi yang menghibur dengan konten humor tentang kehidupan mahasiswa dan kejadian viral di Indonesia. Kami menggabungkan kreativitas dan realita untuk menciptakan video yang relatable dan bikin ngakak!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
              data-aos="fade-up" 
              data-aos-delay={feature.delay}
              initial={{ opacity: 0 }} // Animasi awal
              animate={{ opacity: 1 }} // Animasi akhir
              transition={{ duration: 0.5 }} // Durasi animasi
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Characters Section with Hover Effects */}
      <section id="characters" className="py-24 px-4 bg-gradient-to-b from-gray-200 to-gray-100 relative">
        <Particles
          options={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#FFA500", // Warna oranye
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-block mb-10 relative">
            <h2 className="text-4xl font-bold">Our Characters</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {characters.map((char, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
                initial={{ opacity: 0 }} // Animasi awal
                animate={{ opacity: 1 }} // Animasi akhir
                transition={{ duration: 0.5 }} // Durasi animasi
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section with Particles */}
      <section id="content" className="py-24 px-4 bg-gradient-to-b from-white to-gray-100 relative">
        <Particles
          options={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#FFA500", // Warna oranye
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-block mb-10 relative">
            <h2 className="text-4xl font-bold">Our Content</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div 
                key={index} 
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={100 * index}
                initial={{ opacity: 0 }} // Animasi awal
                animate={{ opacity: 1 }} // Animasi akhir
                transition={{ duration: 0.5 }} // Durasi animasi
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
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href="/videos" // Ganti dengan URL halaman video Anda
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 inline-block"
            >
              Lihat Semua Video
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Animated Particles */}
      <footer className="py-16 w-full bg-gray-800 text-white relative">
        <div className="absolute inset-0 opacity-10"></div>
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

      {/* Tombol Panah Kembali ke Atas */}
      {scrollToTopVisible && (
        <motion.div 
          className="fixed bottom-10 right-10 bg-yellow-500 text-white rounded-full p-3 cursor-pointer shadow-lg transition-all duration-300"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }} // Efek hover
          whileTap={{ scale: 0.9 }} // Efek saat ditekan
        >
          ↑
        </motion.div>
      )}
    </div>
  );
}

export default Home;