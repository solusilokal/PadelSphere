import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Share,
  Copy,
  Check,
  Twitter,
  Facebook,
  Info,
  Trophy,
  Clock,
  Activity,
  Map,
  Calendar,
  ChevronDown,
  Star,
  Tag,
  Sparkles
} from 'lucide-react';

import defaultProfileImg from './assets/padelsphere-logo.webp';
import defaultHeroImg from './assets/padelsphere-hero.webp';
import courtIndoorImg from './assets/court-indoor.webp';
import courtOutdoorImg from './assets/court-outdoor.webp';
import racketRentalImg from './assets/racket-rental.webp';

const pageData = {
  name: "PadelSphere",
  phone: "6289529605601",
  address: "Jl. Pangeran Antasari No.10, Banjarmasin, Kalimantan Selatan",
  title: "Arena Padel Premium Standar WPT",
  description: "Tingkatkan level permainanmu di PadelSphere. Fasilitas lapangan indoor & outdoor berstandar internasional, penyewaan raket premium, dan komunitas yang aktif.",
  profileImg: defaultProfileImg, 
  heroImg: defaultHeroImg, 
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://maps.google.com/?q=Banjarmasin", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "PadelSphere didirikan untuk membawa keseruan dan dinamika olahraga padel ke semua kalangan. Kami menyediakan fasilitas modern, nyaman, dan bertaraf internasional bagi pemula maupun profesional.",
  history: "Bermula pada tahun 2023 dari kecintaan sekelompok sahabat pada olahraga raket, PadelSphere kini berevolusi menjadi pusat olahraga padel terkemuka. Kami bangga menjadi pelopor arena padel premium di kawasan ini, mewadahi ribuan pemain untuk berolahraga dan bersosialisasi.",
  locationHighlights: [
    { text: "Area Parkir Luas", icon: "🚗" },
    { text: "Locker & Showering", icon: "🚿" },
    { text: "Cafe & Lounge", icon: "☕" },
    { text: "Free WiFi", icon: "📶" }
  ],
  katalog: [
    { 
      name: "Indoor Panoramic Court", 
      desc: "Lapangan full kaca standar turnamen dunia, bebas cuaca hujan/panas.", 
      img: courtIndoorImg 
    },
    { 
      name: "Outdoor Classic Court", 
      desc: "Sensasi bermain di ruang terbuka dengan sirkulasi udara maksimal.", 
      img: courtOutdoorImg 
    },
    { 
      name: "Pro Racket Rental", 
      desc: "Sewa raket padel premium (Babolat, Bullpadel, Nox).", 
      img: racketRentalImg 
    }
  ],
  pricing: [
    { time: "Weekdays (06:00 - 16:00)", price: "Rp 250.000", unit: "/ Jam" },
    { time: "Weekdays (16:00 - 24:00)", price: "Rp 350.000", unit: "/ Jam" },
    { time: "Weekend & Holiday", price: "Rp 400.000", unit: "/ Jam" }
  ],
  faqs: [
    { q: "Apakah disediakan penyewaan raket dan bola?", a: "Ya, kami menyediakan penyewaan raket standar dan pro, serta bola padel baru di lokasi." },
    { q: "Apakah harus menggunakan sepatu khusus?", a: "Kami sangat menyarankan menggunakan sepatu padel atau tenis (non-marking shoes) demi keamanan dan menjaga kualitas karpet lapangan." },
    { q: "Bisakah saya booking untuk keanggotaan bulanan?", a: "Bisa! Kami memiliki paket member bulanan dengan harga spesial. Silakan hubungi admin kami via WhatsApp." },
    { q: "Apakah ada fasilitas ruang ganti?", a: "Tentu, kami menyediakan locker room ber-AC lengkap dengan fasilitas shower air hangat." }
  ],
  testimonials: [
    { name: "Andi R.", rating: 5, text: "Lapangan indoor-nya juara! Karpetnya standar internasional, pencahayaan sangat baik jadi tidak silau saat lob." },
    { name: "Sarah L.", rating: 5, text: "Baru pertama kali coba padel dan langsung jatuh cinta. Raket sewaannya bagus-bagus, fasilitas kafe-nya juga cozy buat nongkrong habis main." },
    { name: "Kevin W.", rating: 4, text: "Tempat favorit main padel tiap weekend. Booking via WA gampang, adminnya fast respon. Pertahankan kualitasnya!" }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const courtType = formData.get('courtType');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%0A%0ASaya%20ingin%20booking%20lapangan%20padel%20dengan%20detail:%0ATanggal:%20${date}%0AJam:%20${time}%0ALapangan:%20${courtType}%0ACatatan:%20${notes || '-' }%0A%0AApakah%20jadwal%20tersebut%20tersedia?`;
    window.open(waUrl, '_blank');
  };

  const getShareUrl = () => {
    return typeof window !== 'undefined' && window.location.href.startsWith('http')
      ? window.location.href
      : 'https://solusilokal.github.io/PadelSphere/';
  };

  const getShareText = () => {
    return `${pageData.name} - ${pageData.title}. Fasilitas arena padel indoor & outdoor standar WPT di Banjarmasin! Booking: https://wa.me/${pageData.phone}`;
  };

  const handleShare = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    const textToCopy = getShareUrl();
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        tempInput.style.top = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch (e) {
        console.error('Copy fallback error:', e);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(getShareText() + '\n' + getShareUrl())}`, '_blank');
  };

  const shareToTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        body {
          background-color: #072844;
          color: #F8FAFC;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .brand-neon {
          color: #BBE834; 
        }
        .bg-brand-neon {
          background-color: #BBE834; 
        }
        .border-brand-neon {
          border-color: #BBE834;
        }
        .text-brand-teal {
          color: #2BBBAE;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#072844] min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-[#072844]">
          
          <button
            type="button"
            onClick={handleShare}
            aria-label="Bagikan Halaman"
            className="absolute top-6 right-6 z-30 p-3.5 bg-[#072844]/80 backdrop-blur-md rounded-full border border-[#2BBBAE]/50 text-white hover:bg-[#197576] active:scale-90 transition-all shadow-lg cursor-pointer flex items-center justify-center"
          >
            <Share size={20} className="text-white" />
          </button>

          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-70"
            />
            {/* Dark gradient overlay to ensure high contrast for typography and seamless transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#072844]/80 via-[#072844]/40 to-[#072844]"></div>
            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BBE834]/10 rounded-full blur-[120px] pointer-events-none"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-1 bg-[#072844]/90 backdrop-blur-md mb-6 shadow-[0_0_35px_rgba(43,187,174,0.4)] border-2 border-brand-neon overflow-hidden flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Logo PadelSphere" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "./padelsphere-logo.webp";
                }}
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tighter drop-shadow-lg uppercase">
              {pageData.name}
            </h1>
            <h2 className="text-[#BBE834] text-lg font-semibold mb-3 drop-shadow-md">{pageData.title}</h2>
            <p className="text-slate-100 font-medium text-[15px] leading-relaxed mb-6 px-2 drop-shadow-md max-w-[400px]">
              {pageData.description}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              {/* Instagram & TikTok Row */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#072844]/80 backdrop-blur-md border border-[#2BBBAE]/50 hover:bg-[#197576] transition-all text-white shadow-lg text-sm font-semibold"
                >
                  <Instagram size={18} className="brand-neon" /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#072844]/80 backdrop-blur-md border border-[#2BBBAE]/50 hover:bg-[#197576] transition-all text-white shadow-lg text-sm font-semibold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="brand-neon">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              {/* Lokasi Row - Full Width */}
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#072844]/80 backdrop-blur-md border border-[#2BBBAE]/50 hover:bg-[#197576] transition-all text-white shadow-lg text-sm font-semibold w-full"
              >
                <MapPin size={18} className="brand-neon" /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-brand-neon text-[#072844] rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_25px_rgba(187,232,52,0.5)]"
            >
              Booking Lapangan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="pt-16 pb-8 px-6 bg-[#072844]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Info className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Tentang Kami</h2>
            </div>
          </div>
          
          <div className="bg-[#0A3656] rounded-2xl p-6 border border-[#2BBBAE]/30 shadow-lg relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-[0.03] text-brand-neon">
              <Trophy size={150} />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
              {pageData.about}
            </p>
            
            <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2 relative z-10">
              <Clock size={16} className="text-[#2BBBAE]" /> History
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              {pageData.history}
            </p>
          </div>
        </section>

        {}
        <section className="py-10 bg-[#072844]">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Activity className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Katalog & Fasilitas</h2>
            </div>
            <p className="text-slate-400 text-xs ml-8">Pilih lapangan favoritmu dan siapkan raket terbaik.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.katalog.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.katalog.map(k => k.img), idx)}
                className="snap-center shrink-0 w-[260px] rounded-[1.5rem] overflow-hidden cursor-pointer relative group border border-[#2BBBAE]/30 shadow-md bg-[#0A3656] flex flex-col"
              >
                <div className="h-[200px] w-full relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3656] via-transparent to-transparent"></div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-[#2BBBAE] text-xs leading-relaxed opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-8 px-6 bg-[#051C30] border-y border-[#2BBBAE]/20">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Tag className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Harga Sewa</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.pricing.map((price, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[#0A3656] border border-[#2BBBAE]/30 rounded-xl shadow-sm">
                <span className="text-sm font-medium text-slate-200">{price.time}</span>
                <div className="text-right">
                  <span className="block text-lg font-bold brand-neon">{price.price}</span>
                  <span className="text-[10px] text-[#2BBBAE] uppercase tracking-widest">{price.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#072844]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Sparkles className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Fasilitas Tambahan</h2>
            </div>
            <p className="text-slate-400 text-xs ml-8">Kenyamanan ekstra untuk pengalaman bermain terbaik Anda.</p>
          </div>

          {/* Location Facilities Grid 2x2 with equal widths */}
          <div className="grid grid-cols-2 gap-3">
            {pageData.locationHighlights.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-3 py-3 bg-[#0A3656] rounded-full border border-[#2BBBAE]/40 shadow-md hover:bg-[#0E4872] transition-colors cursor-default justify-center w-full">
                <span className="text-base leading-none shrink-0">{loc.icon}</span>
                <span className="text-[12px] font-semibold text-white tracking-wide leading-tight truncate">{loc.text}</span>
              </div>
            ))}
          </div>
        </section>
        
        {}
        <section className="py-10 px-6 bg-[#051C30] border-t border-[#2BBBAE]/20">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Star className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Testimoni</h2>
            </div>
          </div>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#0A3656] p-5 rounded-3xl border border-[#2BBBAE]/30 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-neon text-brand-neon" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#2BBBAE]/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#072844] flex items-center justify-center text-brand-neon font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-white">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-brand-teal" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">FAQ</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0A3656] border border-[#2BBBAE]/30 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-sm text-white pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-brand-neon transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="p-4 pt-0 text-sm text-slate-300 leading-relaxed border-t border-[#2BBBAE]/10 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-[#072844]">
          <div className="bg-[#0A3656] border border-[#2BBBAE]/30 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BBE834]/10 blur-2xl rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#2BBBAE]/10 blur-2xl rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-white mb-2">Reservasi Lapangan</h2>
              <p className="text-slate-300 text-sm leading-relaxed">Booking mudah via WhatsApp. Silakan isi detail berikut.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wide ml-1">Nama</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Nama Lengkap"
                  className="w-full bg-[#072844] border border-[#2BBBAE]/40 rounded-xl px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wide ml-1">Tanggal</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-[#072844] border border-[#2BBBAE]/40 rounded-xl px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wide ml-1">Waktu</label>
                  <input 
                    type="time" 
                    name="time" 
                    required
                    className="w-full bg-[#072844] border border-[#2BBBAE]/40 rounded-xl px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wide ml-1">Pilih Lapangan</label>
                <select 
                  name="courtType" 
                  required
                  className="w-full bg-[#072844] border border-[#2BBBAE]/40 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all appearance-none"
                >
                  <option value="">Pilih...</option>
                  <option value="Indoor Panoramic Court">Indoor Panoramic Court</option>
                  <option value="Outdoor Classic Court">Outdoor Classic Court</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wide ml-1">Catatan Tambahan</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Sewa raket, jumlah orang, dsb..."
                  className="w-full bg-[#072844] border border-[#2BBBAE]/40 rounded-xl px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-brand-neon text-[#072844] font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-colors shadow-md border border-brand-neon"
              >
                Kirim via WhatsApp
                <MessageCircle size={20} className="fill-current" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-[#2BBBAE]/20 mb-8"></div>
          
          <div className="w-16 h-16 bg-[#072844] rounded-full shadow-sm border border-brand-neon flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img 
              src={pageData.profileImg} 
              alt="Footer Logo" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "./padelsphere-logo.webp";
              }}
            />
          </div>
          
          <div className="text-slate-400 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-white text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-500 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2BBBAE] text-[10px] mt-2 tracking-wide font-medium hover:text-brand-neon transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0A3656]/95 backdrop-blur-xl border border-brand-neon/60 rounded-2xl text-white shadow-[0_10px_40px_rgba(7,40,68,0.9)] hover:bg-[#0E4872] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide uppercase brand-neon">Booking Sekarang</span>
            <div className="bg-[#2BBBAE] text-white p-2 rounded-xl">
              <Calendar size={18} />
            </div>
          </button>
        </div>

      </main>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#031722] text-xs font-bold tracking-[0.2em] bg-brand-neon px-4 py-2 rounded-full border border-white">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#031722]/85 backdrop-blur-md sm:items-center transition-all p-0 sm:p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-[#0A3656] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-[#2BBBAE]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-white font-extrabold text-base tracking-tight">Bagikan {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-[#16465C] rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile banner preview */}
            <div className="bg-[#072844] border border-[#2BBBAE]/40 rounded-2xl p-4 flex items-center gap-4 mb-5 shadow-inner">
              <div className="w-14 h-14 rounded-full bg-[#031722] border-2 border-brand-neon p-0.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img 
                  src={pageData.profileImg} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "./padelsphere-logo.webp";
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-white font-bold text-base leading-tight truncate">{pageData.name}</h4>
                <p className="text-brand-neon text-xs font-semibold truncate">{pageData.title}</p>
                <p className="text-slate-300 text-[11px] truncate mt-0.5">{pageData.address}</p>
              </div>
            </div>

            {/* Copy Link Input Bar */}
            <div className="mb-5">
              <label className="block text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wider mb-1.5 ml-1">
                Tautan Halaman
              </label>
              <div className="flex items-center gap-2 bg-[#072844] border border-[#2BBBAE]/40 rounded-xl p-1.5 pr-2 focus-within:border-brand-neon transition-colors">
                <input 
                  type="text" 
                  readOnly 
                  value={getShareUrl()} 
                  className="w-full bg-transparent px-2.5 text-xs text-slate-200 outline-none select-all font-mono"
                />
                <button 
                  type="button"
                  onClick={copyToClipboard}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-brand-neon text-[#072844] hover:brightness-110 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div>
              <span className="block text-[11px] font-bold text-[#2BBBAE] uppercase tracking-wider mb-2.5 ml-1">
                Bagikan Langsung Ke
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={shareToWhatsApp}
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-[#072844] hover:bg-[#0E4872] border border-[#2BBBAE]/30 text-white transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle size={22} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300">WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  type="button"
                  onClick={shareToTelegram}
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-[#072844] hover:bg-[#0E4872] border border-[#2BBBAE]/30 text-white transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300">Telegram</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={shareToFacebook}
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-[#072844] hover:bg-[#0E4872] border border-[#2BBBAE]/30 text-white transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <Facebook size={22} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300">Facebook</span>
                </button>

                {/* X (Twitter) */}
                <button
                  type="button"
                  onClick={shareToTwitter}
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-[#072844] hover:bg-[#0E4872] border border-[#2BBBAE]/30 text-white transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-slate-700">
                    <Twitter size={20} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300">X</span>
                </button>
              </div>
            </div>

            {/* Native Mobile Share trigger if supported */}
            {typeof navigator !== 'undefined' && !!navigator.share && (
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.share({
                      title: pageData.name,
                      text: getShareText(),
                      url: getShareUrl()
                    });
                  } catch (e) {}
                }}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#072844] hover:bg-[#0E4872] border border-[#2BBBAE]/30 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Share size={15} /> Buka Opsi Berbagi Bawaan Perangkat
              </button>
            )}

            <div className="w-full h-px bg-[#2BBBAE]/20 my-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <a 
                href={pageData.links.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-3 bg-brand-neon text-[#072844] text-sm font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                Kunjungi Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}