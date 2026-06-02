import React, { useEffect, useMemo, useState } from "react";
import { drinkMenu, gallery, menu, toppings } from "./data/menu";

const phoneNumber = "6285349498002";
const baseWhatsappMessage = "Halo THE REAL DIMSUM, saya mau pesan dimsum.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  baseWhatsappMessage
)}`;
const instagramUrl = "https://www.instagram.com/thereal.dimsum/";
const tiktokUrl = "https://www.tiktok.com/@rindu.the.real.di";
const mapsUrl = "https://maps.app.goo.gl/weYauKCXK6ZsCAfk8";
const address =
  "Jl. Randu No.24-20 (depan Alfamidi Randu), Sidotopo Wetan, Kenjeran, Surabaya";
const coordinates = "-7.228187577800951,112.7637546067669";
const mapsEmbedUrl = `https://www.google.com/maps?q=${coordinates}&z=18&output=embed`;
const operationalHours = {
  startHour: 15,
  endHour: 21,
  label: "15.00 - 21.00 WIB"
};

const marketplaceLinks = [
  {
    name: "GoFood",
    url: "https://gofood.link/a/TyWwKnj",
    className: "gofood",
    icon: "🍱",
    tagline: "Pesan cepat, langsung ke GoFood"
  },
  {
    name: "GrabFood",
    url: "https://r.grab.com/g/6-20260601_151901_0fc8ec97b7bf46129deb2718c90aa7e9_MEXMPS-6-C7WFL32GCPCXTX",
    className: "grabfood",
    icon: "🚗",
    tagline: "Grab cepat antar sampai depan rumah"
  },
  {
    name: "ShopeeFood",
    url: "https://shopee.co.id/universal-link/now-food/shop/22975884?deep_and_deferred=1&shareChannel=copy_link",
    className: "shopeefood",
    icon: "🛵",
    tagline: "ShopeeFood mudah dan praktis"
  }
];

const marketplaceHighlights = [
  {
    icon: "⚡",
    title: "Pengiriman Kilat",
    description: "Pesananmu diolah cepat supaya sampai hangat dan enak."
  },
  {
    icon: "💳",
    title: "Bayar Praktis",
    description: "Pilih metode pembayaran yang kamu suka di aplikasi favorit."
  },
  {
    icon: "🎁",
    title: "Promo Spesial",
    description: "Dapatkan voucher dan diskon dari GoFood, GrabFood, dan ShopeeFood."
  }
];

const testimonials = [
  {
    quote: "Dimsumnya enak dan topping mentainya melimpah.",
    author: "Pelanggan THE REAL DIMSUM"
  },
  {
    quote: "Dimsum mentai dan hot lava cocok untuk camilan bareng.",
    author: "Pelanggan THE REAL DIMSUM"
  },
  {
    quote: "Pesanan datang rapi, sausnya banyak, dan rasanya konsisten.",
    author: "Pelanggan THE REAL DIMSUM"
  }
];

const filters = [
  { label: "Semua", value: "semua" },
  { label: "Dimsum", value: "dimsum" },
  { label: "Kebab", value: "kebab" },
  { label: "Minuman", value: "minuman" },
  { label: "Mentai", value: "mentai" },
  { label: "Pedas", value: "pedas" }
];

const formatPrice = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

const getPrices = (item) =>
  [
    { label: "1 pcs", value: item.price1 },
    { label: "3 pcs", value: item.price3 },
    { label: "5 pcs", value: item.price5 },
    { label: "6 pcs", value: item.price6 },
    { label: "16 pcs", value: item.price16 },
    { label: "Per cup", value: item.price }
  ].filter((price) => price.value);

const getOrderUrl = (item) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Halo THE REAL DIMSUM, saya mau pesan ${item.name}.`
  )}`;

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="THE REAL DIMSUM">
        <span className="brand-mark">TRD</span>
        <span>THE REAL DIMSUM</span>
      </a>
      <nav className="nav-links" aria-label="Navigasi utama">
        <a href="#menu">Menu</a>
        <a href="#lokasi">Lokasi</a>
        <a href="#pesan">Pesan</a>
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme}>
        {isDark ? "Light" : "Dark"}
      </button>
    </header>
  );
}

function Reveal({ children, className = "", ...props }) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return (
    <div
      ref={setNode}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function MenuCard({ item, onOpen }) {
  const prices = getPrices(item);

  return (
    <article className="menu-card">
      <button className="menu-image-button" type="button" onClick={() => onOpen(item)}>
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="badge">{item.badge}</span>}
      </button>
      <div className="menu-card-body">
        <div className="menu-card-title">
          <h3>{item.name}</h3>
          <span>{item.category}</span>
        </div>
        <p>{item.description || "Minuman segar untuk pasangan dimsum."}</p>
        <div className="price-list">
          {prices.map((price) => (
            <span key={price.label}>
              {price.label} <strong>{formatPrice(price.value)}</strong>
            </span>
          ))}
        </div>
        <div className="card-actions">
          <button className="btn btn-ghost" type="button" onClick={() => onOpen(item)}>
            Detail
          </button>
          <a className="btn btn-primary" href={getOrderUrl(item)} target="_blank" rel="noreferrer">
            Pesan ini
          </a>
        </div>
      </div>
    </article>
  );
}

function MenuModal({ item, onClose }) {
  if (!item) return null;

  const prices = getPrices(item);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <article
        className="menu-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          Tutup
        </button>
        <img src={item.image} alt={item.name} />
        <div className="menu-modal-body">
          <p className="eyebrow">{item.category}</p>
          <h2 id="modal-title">{item.name}</h2>
          <p>
            {item.detailDescription ||
              item.description ||
              "Minuman segar untuk pasangan dimsum."}
          </p>
          <div className="price-list">
            {prices.map((price) => (
              <span key={price.label}>
                {price.label} <strong>{formatPrice(price.value)}</strong>
              </span>
            ))}
          </div>
          <a className="btn btn-primary btn-large" href={getOrderUrl(item)} target="_blank" rel="noreferrer">
            Pesan via WhatsApp
          </a>
        </div>
      </article>
    </div>
  );
}

function TestimonialCarousel({ activeIndex, onPrev, onNext, onSelect }) {
  const item = testimonials[activeIndex];

  return (
    <div className="testimonial-carousel">
      <button className="carousel-button" type="button" onClick={onPrev}>
        Prev
      </button>
      <blockquote>
        <div className="stars">5/5</div>
        <p>"{item.quote}"</p>
        <cite>{item.author}</cite>
      </blockquote>
      <button className="carousel-button" type="button" onClick={onNext}>
        Next
      </button>
      <div className="carousel-dots" aria-label="Pilih testimoni">
        {testimonials.map((testimonial, index) => (
          <button
            aria-label={`Testimoni ${index + 1}`}
            className={index === activeIndex ? "active" : ""}
            key={testimonial.quote}
            type="button"
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(
    () => window.localStorage.getItem("theme") === "dark"
  );
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeFilter, setActiveFilter] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedItem) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  useEffect(() => {
    // lock body scroll when modal is open to avoid layout shift
    if (selectedItem) {
      document.body.classList.add("modal-open");
      const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
      if (hasScrollbar) {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedItem]);

  const isOpen = useMemo(() => {
    const hour = new Date().getHours();
    return hour >= operationalHours.startHour && hour < operationalHours.endHour;
  }, []);

  const catalog = useMemo(() => [...menu, ...drinkMenu], []);
  const filteredMenu = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return catalog.filter((item) => {
      const tags = item.tags || [];
      const matchesFilter =
        activeFilter === "semua" ||
        item.category === activeFilter ||
        tags.includes(activeFilter);
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description || "").toLowerCase().includes(query) ||
        tags.some((tag) => tag.includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, catalog, searchTerm]);

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const showPreviousTestimonial = () =>
    setTestimonialIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  const showNextTestimonial = () =>
    setTestimonialIndex((index) => (index + 1) % testimonials.length);

  return (
    <>
      <Header isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">@thereal.dimsum</p>
            <h1>THE REAL DIMSUM</h1>
            <p className="hero-copy">Dimsum lezat, fresh setiap hari.</p>
            <div className="hero-status">
              <span className={isOpen ? "status-dot open" : "status-dot"} />
              {isOpen ? "Buka sekarang" : "Tutup sekarang"} - {operationalHours.label}
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Pesan via WhatsApp
              </a>
              <a className="btn btn-secondary" href="#menu">
                Lihat Menu
              </a>
            </div>
          </div>
        </section>

        <Reveal className="section about" id="tentang">
          <div className="section-heading">
            <p className="eyebrow">Tentang Kami</p>
            <h2>Dimsum, kebab, dan minuman untuk camilan harian sampai acara.</h2>
          </div>
          <p>
            THE REAL DIMSUM menghadirkan berbagai varian dimsum, kebab, dan minuman
            dengan bahan berkualitas, cita rasa lezat, dan harga terjangkau.
            Cocok untuk pesanan pribadi, rapat, arisan, ulang tahun, dan
            kebutuhan acara lainnya.
          </p>
        </Reveal>

        <section className="section" id="menu">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Menu Interaktif</p>
              <h2>Cari, filter, lihat detail, lalu pesan langsung.</h2>
            </div>
            <div className="menu-tools">
              <label className="search-box">
                <span>Cari menu</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Cari mentai, pedas, kebab..."
                />
              </label>
              <div className="filter-list" aria-label="Filter menu">
                {filters.map((filter) => (
                  <button
                    className={activeFilter === filter.value ? "active" : ""}
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="menu-grid">
            {filteredMenu.map((item) => (
              <Reveal key={item.name}>
                <MenuCard item={item} onOpen={setSelectedItem} />
              </Reveal>
            ))}
          </div>
          {filteredMenu.length === 0 && (
            <p className="empty-state">Menu tidak ditemukan. Coba kata kunci lain.</p>
          )}
        </section>

        <Reveal className="topping-band" aria-labelledby="topping-title">
          <div>
            <p className="eyebrow">Free Topping</p>
            <h2 id="topping-title">Gratis pilih 1 topping</h2>
          </div>
          <div className="topping-list">
            {toppings.map((topping) => (
              <span key={topping}>{topping}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Galeri Foto</p>
            <h2>Lihat pilihan menu kami.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="section location" id="lokasi">
          <div className="section-heading">
            <p className="eyebrow">Lokasi</p>
            <h2>Datang langsung atau pesan online.</h2>
          </div>
          <div className="location-layout">
            <div className="location-info">
              <h3>Alamat</h3>
              <p>{address}</p>
              <h3>Jam Operasional</h3>
              <p>Senin - Minggu, {operationalHours.label}</p>
              <div className="open-status">
                <span className={isOpen ? "status-dot open" : "status-dot"} />
                {isOpen ? "Buka sekarang" : "Tutup sekarang"}
              </div>
              <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">
                Buka di Google Maps
              </a>
            </div>
            <iframe
              title="Peta lokasi THE REAL DIMSUM"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal className="order-section" id="pesan">
          <div className="section-heading marketplace-heading">
            <p className="eyebrow">Pesan Online</p>
            <h2>Pesan lewat WhatsApp atau aplikasi favoritmu.</h2>
            <span className="marketplace-badge">3 jalur pesan cepat dan terpercaya</span>
          </div>
          <div className="marketplace-panel">
            <div className="marketplace-intro">
              <p className="marketplace-note">
                Pilih GoFood, GrabFood, atau ShopeeFood lalu klik untuk langsung menuju halaman pesanan. Semua pilihan dikurasi agar pesananmu sampai hangat dan cepat.
              </p>
              <div className="marketplace-highlights">
                {marketplaceHighlights.map((item) => (
                  <article className="marketplace-card" key={item.title}>
                    <span className="marketplace-card-icon">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="marketplace-list">
              {marketplaceLinks.map((item) => (
                <a
                  className={`marketplace ${item.className}`}
                  href={item.url}
                  key={item.name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Pesan lewat ${item.name}`}
                >
                  <span className="marketplace-icon">{item.icon}</span>
                  <div>
                    <span className="marketplace-label">Pesan via</span>
                    <span className="marketplace-name">{item.name}</span>
                    <span className="marketplace-tagline">{item.tagline}</span>
                  </div>
                  <span className="marketplace-cta">Klik & pesan sekarang</span>
                </a>
              ))}
            </div>
          </div>
          <a className="btn btn-primary btn-large" href={whatsappUrl} target="_blank" rel="noreferrer">
            Pesan Sekarang via WhatsApp
          </a>
        </Reveal>

        <Reveal className="section testimonials">
          <div className="section-heading">
            <p className="eyebrow">Testimoni</p>
            <h2>Kata pelanggan.</h2>
          </div>
          <TestimonialCarousel
            activeIndex={testimonialIndex}
            onNext={showNextTestimonial}
            onPrev={showPreviousTestimonial}
            onSelect={setTestimonialIndex}
          />
        </Reveal>

        <Reveal className="section faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Pertanyaan umum.</h2>
          </div>
          <details>
            <summary>Apakah bisa delivery?</summary>
            <p>Ya, bisa melalui GoFood, GrabFood, ShopeeFood, dan WhatsApp.</p>
          </details>
          <details>
            <summary>Apakah menerima pesanan acara?</summary>
            <p>Ya, bisa untuk ulang tahun, rapat, arisan, dan acara lainnya.</p>
          </details>
        </Reveal>
      </main>

      <footer className="footer" id="kontak">
        <div>
          <strong>THE REAL DIMSUM</strong>
          <p>{address}</p>
        </div>
        <div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp +62 853-4949-8002
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram @thereal.dimsum
          </a>
          <a href={tiktokUrl} target="_blank" rel="noreferrer">
            TikTok @rindu.the.real.di
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
        <p>Copyright 2026 THE REAL DIMSUM</p>
      </footer>

      <a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer">
        WA
      </a>
      {showTopButton && (
        <button className="scroll-top" type="button" onClick={goToTop}>
          Top
        </button>
      )}
      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

export default App;
