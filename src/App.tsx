import { useEffect, useMemo, useState } from 'react';
import {
  ChevronDown,
  Globe2,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  ShieldCheck,
  Plane,
  Scale,
  ArrowRight,
  Phone,
  Mail,
  MapPinned,
  Linkedin,
  Twitter,
  Sparkles,
  Check,
  MessageCircle,
  X,
  Percent,
  Landmark,
  Banknote,
  Info,
} from 'lucide-react';
import { LANGS, t, type Lang } from './translations';
import { properties, formatPrice } from './data';

const WHATSAPP_NUMBER = '905335137802';
const WHATSAPP_MESSAGE = 'Hello, I would like to inquire about your property services in Turkiye.';

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const tr = useMemo(() => t(lang), [lang]);
  const currentLang = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = tr.dir;
  }, [lang, tr.dir]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['home', 'services', 'properties', 'about', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'services', label: tr.nav.services },
    { id: 'properties', label: tr.nav.properties },
    { id: 'about', label: tr.nav.about },
    { id: 'contact', label: tr.nav.contact },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIcons = [ShieldCheck, Plane, Scale];

const whatsappLink = `https://wa.me/905335137802?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  
  const legalFacts = [
    {
      icon: Percent,
      title: 'Annual Property Tax',
      value: '0.1% – 0.6%',
      note: 'Varies by property type and municipality',
    },
    {
      icon: Banknote,
      title: 'VAT Exemption',
      value: 'Up to 18%',
      note: 'Foreign buyers eligible on first purchase',
    },
    {
      icon: Landmark,
      title: 'Citizenship Bank Transfer',
      value: 'Turkish Bank Required',
      note: 'Funds via Turkish bank to obtain Foreign Currency Exchange Certificate',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 text-navy-700">
      {/* Top bar */}
      <div className="hidden md:block border-b border-navy-100 bg-navy-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-navy-100">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold-400" /> +90 533 513 78 02
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-gold-400" /> private@realestateistanbul.co
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-navy-200">Istanbul</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-navy-100/60'
            : 'bg-white/80 backdrop-blur-sm border-b border-navy-100/60'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo('home')} className="flex items-center group">
            <img
              src="/logo_final.png"
              alt="Projects Istanbul"
              className="w-auto object-contain transition-opacity group-hover:opacity-90"
              style={{ maxHeight: '45px' }}
            />
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  activeSection === l.id ? 'text-navy-800' : 'text-navy-500 hover:text-navy-800'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    activeSection === l.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 rounded-md border border-navy-200/80 px-3 py-2 text-xs font-medium text-navy-700 hover:border-gold-500 hover:text-navy-800 transition-colors bg-white/70 backdrop-blur-sm"
              >
                <Globe2 className="h-4 w-4" />
                <span>{currentLang.label}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 mt-2 w-40 rounded-md border border-navy-200/60 bg-white/90 backdrop-blur-md shadow-xl z-50 overflow-hidden">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          lang === l.code
                            ? 'bg-navy-50/80 text-navy-800'
                            : 'text-navy-600 hover:bg-navy-50/60'
                        }`}
                      >
                        <span>{l.label}</span>
                        {lang === l.code && <Check className="h-3.5 w-3.5 text-gold-600" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors shadow-md"
            >
              {tr.nav.consult}
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-navy-200/60 text-navy-700 bg-white/60 backdrop-blur-sm"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-navy-100/60 bg-white/90 backdrop-blur-md">
            <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left py-3 px-2 text-sm text-navy-700 hover:text-navy-900 border-b border-navy-100/60"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1920&q=80"
            alt="Istanbul Blue Mosque and Bosphorus skyline"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-navy-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              {tr.hero.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl font-semibold leading-[1.05] text-white text-balance animate-fade-up">
              {tr.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-100 leading-relaxed animate-fade-up" style={{ animationDelay: '120ms' }}>
              {tr.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
              <button
                onClick={() => scrollTo('properties')}
                className="group inline-flex items-center gap-2 rounded-md bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 hover:bg-gold-400 transition-all shadow-lg"
              >
                {tr.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {tr.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden max-w-4xl animate-fade-up" style={{ animationDelay: '360ms' }}>
            {tr.hero.stats.map((s, i) => (
              <div key={i} className="bg-navy-900/50 px-6 py-6">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-gold-400">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-navy-200">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-white/60 to-slate-50/80">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow={tr.services.eyebrow} title={tr.services.title} subtitle={tr.services.subtitle} />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tr.services.items.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-navy-100/60 bg-white/70 backdrop-blur-sm p-8 transition-all duration-500 hover:border-gold-400 hover:shadow-xl hover:shadow-navy-200/30 hover:bg-white/85"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-100/50 blur-3xl transition-opacity duration-500 group-hover:bg-gold-200/60" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-700 group-hover:bg-gold-500 transition-colors shadow-md">
                      <Icon className="h-7 w-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <div className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-600">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-navy-800">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-500">
                      {item.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-navy-700">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold-100">
                            <Check className="h-2.5 w-2.5 text-gold-600" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial & Legal Info Panel */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c4922f 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c4922f 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-8">
            <div className="flex items-center gap-2.5 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5">
              <Info className="h-4 w-4 text-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Legal & Financial Notes</span>
            </div>
            <p className="text-sm text-navy-300 max-w-lg">Key facts every foreign buyer should know before investing in Turkiye.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {legalFacts.map((f, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-gold-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/15 border border-gold-400/30 group-hover:bg-gold-500/25 transition-colors">
                  <f.icon className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-navy-400 font-medium">{f.title}</div>
                  <div className="mt-0.5 font-serif text-lg font-semibold text-white">{f.value}</div>
                  <div className="mt-1 text-xs text-navy-300 leading-relaxed">{f.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50/80 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow={tr.properties.eyebrow} title={tr.properties.title} subtitle={tr.properties.subtitle} />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-xl border border-navy-100/60 bg-white/75 backdrop-blur-sm transition-all duration-500 hover:border-gold-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-200/40 hover:bg-white/90"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy-900 shadow-lg">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {tr.properties.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-navy-700 border border-gold-300">
                      {p.program}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-navy-800">
                    {p.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
                    <MapPin className="h-4 w-4 text-gold-600 flex-shrink-0" />
                    {p.location}
                  </div>
                  <div className="mt-2.5 rounded-md bg-navy-50/80 border border-navy-100/60 px-3 py-2 text-[11px] text-navy-500 leading-relaxed">
                    {p.highlight}
                  </div>

                  <div className="mt-4 flex items-center gap-4 border-y border-navy-100/60 py-3.5 text-navy-600">
                    <span className="flex items-center gap-1.5 text-xs">
                      <BedDouble className="h-4 w-4 text-gold-600" /> {p.beds}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Bath className="h-4 w-4 text-gold-600" /> {p.baths}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Maximize2 className="h-4 w-4 text-gold-600" /> {p.area} m²
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-navy-400">
                        Guide Price
                      </div>
                      <div className="font-serif text-2xl font-semibold text-navy-800">
                        {formatPrice(p.price, tr.properties.currency)}
                      </div>
                    </div>
                    <button
                      onClick={() => scrollTo('contact')}
                      className="inline-flex items-center gap-1.5 rounded-md border border-navy-200/70 px-4 py-2 text-xs font-semibold text-navy-700 hover:bg-navy-700 hover:border-navy-700 hover:text-white transition-colors"
                    >
                      {tr.properties.viewDetails}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 md:py-32 bg-gradient-to-br from-white/70 via-slate-50/60 to-blue-50/20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold-300 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow={tr.about.eyebrow}
              title={tr.about.title}
              align="left"
            />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              {tr.about.body}
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {tr.about.pillars.map((p, i) => (
                <div key={i} className="border-l-2 border-gold-500 pl-4 bg-white/50 rounded-r-md pr-3 py-2 backdrop-blur-sm">
                  <div className="font-serif text-lg font-semibold text-navy-800">{p.title}</div>
                  <div className="mt-1 text-sm text-navy-500 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern interior"
                  loading="lazy"
                  className="h-56 w-full object-cover rounded-xl border border-navy-100/60 shadow-sm"
                />
                <img
                  src="https://images.pexels.com/photos/16915990/pexels-photo-16915990.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coastal estate"
                  loading="lazy"
                  className="h-40 w-full object-cover rounded-xl border border-navy-100/60 shadow-sm"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Penthouse view"
                  loading="lazy"
                  className="h-40 w-full object-cover rounded-xl border border-navy-100/60 shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=compress&cs=tinysrgb&w=600"
                  alt="Villa exterior"
                  loading="lazy"
                  className="h-56 w-full object-cover rounded-xl border border-navy-100/60 shadow-sm"
                />
              </div>
            </div>   
        </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50/60 to-navy-50/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-gold-200/60 bg-white/75 backdrop-blur-md p-10 md:p-16 shadow-xl">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-100/60 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-navy-100/50 blur-3xl" />
            <div className="relative text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-800 text-balance">
                {tr.cta.title}
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-navy-600 leading-relaxed">
                {tr.cta.subtitle}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setChatOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-md bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-900 hover:bg-gold-400 transition-all shadow-lg"
                >
                  {tr.cta.button}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-5 text-xs text-navy-400">{tr.cta.note}</div>
            </div>
          </div>

          {/* Contact details */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: 'Phone', value: '+90 533 513 78 02' },
              { icon: Mail, label: 'Email', value: 'private@realestateistanbul.co' },
              { icon: MapPinned, label: 'Head Office', value: tr.footer.address },
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-navy-100/60 bg-white/75 backdrop-blur-sm p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-700 shadow-md flex-shrink-0">
                  <c.icon className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-navy-400">{c.label}</div>
                  <div className="mt-1 text-sm text-navy-800 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-100/60 bg-white/85 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="mb-2">
                <img
                  src="/logo_final.png"
                  alt="Projects Istanbul"
                  className="w-auto object-contain"
                  style={{ maxHeight: '60px' }}
                />
              </div>
              <p className="mt-4 text-sm text-navy-500 leading-relaxed">
                {tr.footer.tagline}
              </p>
              <div className="mt-5 flex gap-3">
                {[Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-200/70 bg-white/60 text-navy-500 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold">
                {tr.footer.explore}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-500">
                <li><button onClick={() => scrollTo('services')} className="hover:text-navy-800 transition-colors">{tr.footer.links.services}</button></li>
                <li><button onClick={() => scrollTo('properties')} className="hover:text-navy-800 transition-colors">{tr.footer.links.properties}</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-navy-800 transition-colors">{tr.footer.links.about}</button></li>
                <li><a href="#" className="hover:text-navy-800 transition-colors">{tr.footer.links.careers}</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold">
                {tr.footer.legal}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-500">
                <li><a href="#" className="hover:text-navy-800 transition-colors">{tr.footer.links.privacy}</a></li>
                <li><a href="#" className="hover:text-navy-800 transition-colors">{tr.footer.links.terms}</a></li>
                <li><a href="#" className="hover:text-navy-800 transition-colors">{tr.footer.links.regulatory}</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold">
                {tr.footer.contact}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-500">
                <li>{tr.footer.address}</li>
                <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold-600 flex-shrink-0" /> +90 533 513 78 02</li>
                <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold-600 flex-shrink-0" /> private@realestateistanbul.co</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-navy-100/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs text-navy-400">
              © {new Date().getFullYear()} Projects Istanbul. {tr.footer.rights}
            </div>
            <div className="text-xs text-navy-400">
              Istanbul
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp sticky button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-72 rounded-xl border border-navy-100/60 bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden animate-fade-up">
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <MessageCircle className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="text-[11px] opacity-90">Typically replies in minutes</div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/90 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 bg-navy-50/60 backdrop-blur-sm">
              <div className="rounded-lg bg-white/80 border border-navy-100/60 p-3 text-sm text-navy-700 shadow-sm">
                Hello! How can we help you with property in Istanbul today?
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Start Chat
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1ebe57] transition-all hover:scale-110 relative"
          aria-label="Contact us on WhatsApp"
        >
          {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}>
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
        <span className="h-px w-8 bg-gold-500" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy-800 leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-navy-500 leading-relaxed text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export default App;
