import React, { useState, useEffect } from 'react';
import Email from './Email';

const ModernPresentationSite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const slides = [
  {
    title: "Crafting Cinematic Visual Stories",
    subtitle: "Professional Video Editing & Motion Design",
    description:
      "Transform raw footage into stunning cinematic visuals. From storytelling edits to high-end motion graphics, we bring your vision to life.",
    video: "https://v1.pinimg.com/videos/iht/hls/5f/44/9d/5f449dcb96c1902875b2b73fd38cb737.m3u8",
    gradient: "from-gray-900/70 to-gray-800/60",
  },
  {
    title: "Design That Moves",
    subtitle: "Refining Stories. Maximizing Impact",
    description:
      "Create visually engaging motion graphics that elevate your brand and captivate audiences.",
     video:"https://v1.pinimg.com/videos/iht/hls/6a/78/da/6a78da359d265af07210b50feb3adff9.m3u8",
    gradient: "from-gray-900/70 to-gray-700/60",
  },
  {
    title: "Edit. Animate. Inspire.",
    subtitle: "Where Creativity Meets Precision",
    description:
      "Every frame, transition, and sound is carefully crafted to evoke emotion and deliver impact.",
    video: "https://v1.pinimg.com/videos/mc/hls/a4/f4/a4/a4f4a43366cabe30ad947f172fb2e3ea.m3u8",
    gradient: "from-gray-900/70 to-gray-800/60",
  },
];

const services = [
  {
    icon: "🎞️",
    title: "Video Editing",
    description:
      "Professional editing for commercials, YouTube, short films, and social media content.",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "The creation of visual content to communicate ideas through the use of colors, shapes, images, and text.",
 
  },
  {
    icon:"🚴‍♀️",
    title: "Motion Graphics",
    description:
      "Custom animations, kinetic typography, and stylish visual effects.",
   
  },
  {
    icon: "💻",
    title: "Web Design & Development",
    description:
      "We design and develop websites that look exceptional and work flawlessly.",
    
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "We craft engaging social strategies and content that grow your brand and connect with your audience",
    
  },
  {
    icon: "🎧",
    title: "Sound Design",
    description:
      "Sound mixing, voice-over sync, and background music that enhances emotion.",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality.",
  },
  {
    icon: "📖",
    title: "Creative Storytelling",
    description:
      "Each project is approached with unique visual storytelling and rhythm.",
  },
  {
    icon: "🖥️",
    title: "4K Workflow",
    description: "Professional editing pipeline optimized for high-resolution content.",
  },
  {
    icon: "🧠",
    title: "Concept to Final Cut",
    description:
      "From idea development to polished delivery — everything handled seamlessly.",
  },
  {
    icon: "📦",
    title: "Flexible Packages",
    description:
      "Customizable pricing plans for freelancers, brands, and agencies.",
  },
  {
    icon: "💯",
    title: "Our Promise",
    description: "At Orion Dusk, we blend creativity and precision to craft impactful, memorable work."
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "YouTuber & Content Creator",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop",
    text: "His editing completely changed the game for my YouTube channel. Every video now feels cinematic and professional!",
    rating: 5,
  },
  {
    name: "Shreejita De",
    role: "Actress",
    text: "I'm impressed with the team's commitment to customer satisfaction and success",
    rating: 4,
  },
  {
    name: "Ashish Verma",
    role: "Filmmaker",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    text: "The attention to detail in editing and motion work is unmatched. Perfect timing, great eye for composition.",
    rating: 4,
  },
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Navigation */}
<nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent "
  }`}
> 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="flex items-center justify-between h-20 pt-3 pr-6">
      {/* ✅ Logo Section */}
   <div className="flex items-center">
  <img
    src={scrolled ? "/a.png" : "/b.png"} // Dark logo when scrolled, light logo otherwise
    alt="Logo"
    className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300"
  />

  <span
    className={`pl-2 font-bold text-2xl tracking-tight transition-colors duration-300 ${
      scrolled ? "text-gray-900" : "text-white"
    }`}
  >
    Orium <span className={scrolled ? "font-thin text-gray-700" : "font-thin text-gray-200"}>Dusk</span>
  </span>
</div>

      

      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {["Home", "Services", "About", "Testimonials"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`font-normal transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-gray-900"
                : "text-white/90 hover:text-white"
            }`}
          >
            {item}
          </a>
        ))}
        <Email />
      </div>

      {/* ✅ Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-between w-6 h-5"
      >
        <span
          className={`block h-0.5 rounded ${
            scrolled ? "bg-gray-900 " : "bg-white"
          } transition-all`}
        ></span>
        <span
          className={`block h-0.5 rounded ${
            scrolled ? "bg-gray-900" : "bg-white"
          } transition-all`}
        ></span>
        <span
          className={`block h-0.5 rounded ${
            scrolled ? "bg-gray-900" : "bg-white"
          } transition-all`}
        ></span>
      </button>
    </div>
  </div>

  {/* ✅ Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-3 space-y-3 text-center">
        {["Home", "Services", "About", "Testimonials"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block text-gray-700 hover:text-gray-900 font-normal py-2"
          >
            {item}
          </a>
        ))}
        <Email />
      </div>
    </div>
  )}
</nav>



      {/* Hero Slider */}
     <section id="home" className="relative h-screen overflow-hidden">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {slide.video ? (
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
      </div>

      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-normal italic">
                {slide.subtitle}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight animate-slide-up tracking-tight">
              {slide.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed animate-slide-up-delay font-light">
              {slide.description}
            </p>
               <Email/>
          </div>
        </div>
      </div>
    </div>
  ))}

  {/* Slider Controls */}
<button
  onClick={prevSlide}
  className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all group hidden md:flex"
>
  <svg
    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>

<button
  onClick={nextSlide}
  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all group hidden md:flex"
>
  <svg
    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>


  {/* Slider Indicators */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-2 rounded-full transition-all ${
          index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/50'
        }`}
      />
    ))}
  </div>
</section>

      {/* Features Section */}
      <section className="py-24 bg-[#f4f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gray-900/5 text-gray-700 px-4 py-2 rounded-full text-sm font-normal mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
             All your post-production needs—handled in one place.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Seamless workflows. Exceptional quality. Delivered on time, Every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-gray-900 group-hover:scale-110 transition-all">
                  <span className="group-hover:grayscale">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gray-900/5 text-gray-700 px-4 py-2 rounded-full text-sm font-normal mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
           The complete hub for all things content perfection.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              From intimate gatherings to grand celebrations, we handle it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f4f1ed] p-8 rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-normal hover:bg-gray-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-normal mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-normal mb-6 tracking-tight">
                Creating Memories That Last Forever
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">

Orion Dusk is a creative place where storytelling meets precision.
We specialize in transforming raw visuals into cinematic experiences — blending artistry, technology, and emotion in every frame. From the subtle art of color grading to immersive sound design and seamless visual effects, we bring your vision to life with clarity and style.
<br />
At Orion Dusk, we don’t just finish projects — we elevate stories. Whether you’re a filmmaker, brand, or creator, we provide the tools, talent, and expertise to make your content stand out in today’s visual landscape.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-serif font-normal text-white mb-2">500+</div>
                  <div className="text-gray-300 font-light">Project Delivered</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-serif font-normal text-white mb-2">98%</div>
                  <div className="text-gray-300 font-light">Client Satisfaction</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-serif font-normal text-white mb-2">10+</div>
                  <div className="text-gray-300 font-light">Team Members</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-serif font-normal text-white mb-2">5+</div>
                  <div className="text-gray-300 font-light">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
                alt="Perfect Vidio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <div className="font-serif font-normal text-gray-900">Award Winning</div>
                    {/* <div className="text-sm text-gray-600 font-light">Best Vidio Planners 2024</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Testimonials Section */}
    
      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-6">Let’s Work Together</h2>
        <p className="text-gray-700 mb-8">
  
We merge creativity with precision, turning ideas into polished visuals and digital experiences. From cinematic post-production to seamless interfaces and engaging social campaigns, we handle it all — so your vision shines, every step of the way.
        </p>
        <Email/>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#f4f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gray-900/5 text-gray-700 px-4 py-2 rounded-full text-sm font-normal mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
              What Our <span className="italic">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Don't just take our word for it — hear from our happy clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="flex text-gray-900 text-xl mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic font-light">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                
                  <div>
                    <div className="font-serif font-normal text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-light">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-normal mb-6 tracking-tight">
            Ready to Plan Your Dreams...
          </h2>
          <p className="text-xl mb-8 text-gray-300 font-light leading-relaxed">
            Let's create something extraordinary together. Get started with a free consultation today.
          </p>
          <div> <Email/></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f9f7f4] text-gray-600 py-12 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
               <img
            src={"/a.png"} // 👉 Replace with your logo path
          alt="Logo"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />
                <span className=" font-bold text-2xl text-gray-900 tracking-tight">Orium <span className='font-thin'>Dusk</span></span>  
              </div>
              <p className="text-gray-700 font-light">
                Creating unforgettable moments and extraordinary experiences since 2025.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-700 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Video Editing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Graphic Design</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Motion Graphics</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Web Design & Development</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sound Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-700 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-normal text-gray-900 mb-4">Connect</h4>
             <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/people/Orium-Dusk/pfbid02eQu2EuHimLZ1FohLLAXwjeKojnedhnmsWb3FBy2D36FmdX9vQJVr5YU4GAk3bPmdl/?mibextid=wwXIfr&rdid=e8dV05IP4Nottq1b&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Yc46pVUZ%2F%3Fmibextid%3DwwXIfr"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-facebook-f text-xl"></i>
  </a>

  <a
    href="#"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-x-twitter text-xl"></i>
  </a>

  <a
    href="#"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-linkedin-in text-xl"></i>
  </a>

  <a
    href="https://www.instagram.com/orium_dusk/?igsh=dmh2bWY2Y3ByNm9t&utm_source=qr"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-instagram text-xl"></i>
  </a>
</div>

<br />

<div className="flex space-x-4">
  <a
    href="https://www.youtube.com/@ORIUMDUSK"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-youtube text-xl"></i>
  </a>

  <a
    href="https://wa.me/"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-whatsapp text-xl"></i>
  </a>

  <a
    href="https://in.pinterest.com/oriumdusk/?invite_code=3883168b138846619708799fd002eda3&sender=1083045547797203796"
    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
  >
    <i className="fab fa-pinterest-p text-xl"></i>
  </a>
</div>

            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-gray-700 font-light">
            <p>© 2025  All rights reserved. · Gajendra Verma</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ModernPresentationSite;