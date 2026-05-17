/* =====================================================
   Sinuha Beauty Center — Premium Interactions
   ===================================================== */

const App = {
  currentLang: 'ckb',

  translations: {
    ckb: {
      nav_categories: 'بەشەکان',
      nav_services: 'خزمەتگوزاریەکان',
      nav_reviews: 'بیروبۆچوونەکان',
      nav_contact: 'پەیوەندی',
      hero_eyebrow: 'سەنتەری جوانکاری',
      hero_title: 'جوانێکی شاهانە<br>بۆ هەر کەسێک',
      hero_desc: 'بە باشترین تەکنەلۆژیا و شێوازە نوێیەکان، ئێمە بەهرەی سروشتی جوانیتان دەردەخەین.',
      btn_book: 'کات دیاریکردن',
      btn_explore: 'خزمەتگوزاریەکان',
      cat_eyebrow: 'بەشەکان',
      cat_title: 'ئێمە چی پێشکەش دەکەین',
      cat_women: 'ژنان',
      cat_men: 'پیاوان',
      cat_all: 'هەموو خزمەتگوزاریەکان',
      info_premium: 'چاودێری پریمیوم',
      info_expert: 'تیمی شارەزا',
      info_happy: 'کڕیاری دڵخۆش',
      services_eyebrow: 'خزمەتگوزاریەکان',
      services_title: 'چارەسەری تایبەت بە تۆ',
      srv_acne: 'چارەسەری ئەکنە',
      srv_botox: 'بۆتۆکس',
      srv_fillers: 'فیلەر',
      srv_laser: 'لیزەری لەشی تەواو',
      srv_glow: 'پێستی درەوشاوە',
      srv_smile: 'پێکەنی هۆلیوود',
      srv_hydro: 'هایدرۆفەیشەڵ',
      srv_menlaser: 'لیزەری پیاوان',
      srv_pdrn: 'PDRN ساڵمۆن',
      srv_profhilo: 'پرۆفهیلۆ',
      srv_prp: 'PRP قژ',
      srv_whitening: 'سپی کردنی پێست',
      reviews_eyebrow: 'بیروبۆچوونەکان',
      reviews_title: 'چی دەربارەی ئێمە دەڵێن',
      review_1: 'باشترین ئەزموونی جوانکاری کەم لە سینوها بەدەستهێناوە. ستافەکە زۆر پڕۆفیشناڵ و میواندۆستن.',
      review_2: 'ئەنجامی PRP زۆر سەرسوڕهێنەر بوو. قژم زۆر بەهێز و تەنور بووەوە. زۆر سوپاس!',
      review_3: 'سەنتەرێکی ڕاستەقینەی پریمیوم. هەموو شتێک پاک و ئۆرگانیزە. پێشنیازم پێ دەکەم.',
      review_4: 'لیزەر و هایدرۆفەیشەڵیان بۆم کرد و پێستم زۆر گۆڕا. ستافەکە زۆر خاوێن و شارەزان.',
      contact_eyebrow: 'پەیوەندی',
      contact_title: 'بە ئاسانی پەیوەندیمان پێوە بکە',
      lbl_phone: 'تەلەفۆن',
      lbl_location: 'شوێن',
      link_map: 'بینینی لەسەر نەخشە',
      footer_copy: 'سەنتەری جوانکاری سینوها. هەموو مافێک پارێزراوە.'
    },
    ar: {
      nav_categories: 'الأقسام',
      nav_services: 'الخدمات',
      nav_reviews: 'آراء العملاء',
      nav_contact: 'تواصل معنا',
      hero_eyebrow: 'مركز التجميل',
      hero_title: 'جمال ملكي<br>لكل إنسان',
      hero_desc: 'بأفضل التقنيات والأساليب الحديثة، نكشف عن جمالك الطبيعي.',
      btn_book: 'حجز موعد',
      btn_explore: 'خدماتنا',
      cat_eyebrow: 'الأقسام',
      cat_title: 'ما نقدمه لك',
      cat_women: 'نساء',
      cat_men: 'رجال',
      cat_all: 'جميع الخدمات',
      info_premium: 'رعاية متميزة',
      info_expert: 'فريق خبير',
      info_happy: 'عملاء سعداء',
      services_eyebrow: 'الخدمات',
      services_title: 'علاج مخصص لك',
      srv_acne: 'علاج حب الشباب',
      srv_botox: 'بوتكس',
      srv_fillers: 'فيلر',
      srv_laser: 'ليزر الجسم الكامل',
      srv_glow: 'بشرة متألقة',
      srv_smile: 'ابتسامة هوليوود',
      srv_hydro: 'هيدرافيشل',
      srv_menlaser: 'ليزر رجال',
      srv_pdrn: 'PDRN سالمون',
      srv_profhilo: 'بروفايلو',
      srv_prp: 'PRP شعر',
      srv_whitening: 'تبييض البشرة',
      reviews_eyebrow: 'آراء العملاء',
      reviews_title: 'ماذا يقولون عنا',
      review_1: 'أفضل تجربة تجميل مررت بها في سينوها. الموظفون محترفون وضيافيون للغاية.',
      review_2: 'كانت نتيجة PRP مذهلة. شعري أصبح أقوى وأكثر كثافة. شكراً جزيلاً!',
      review_3: 'مركز بريميوم حقيقي. كل شيء نظيف ومنظم. أنصح به بشدة.',
      review_4: 'أجريت ليزر وهيدرافيشل وبشرتي تغيرت كثيراً. الموظفون نظيفون وخبراء.',
      contact_eyebrow: 'تواصل معنا',
      contact_title: 'تواصل معنا بسهولة',
      lbl_phone: 'هاتف',
      lbl_location: 'الموقع',
      link_map: 'عرض على الخريطة',
      footer_copy: 'مركز سينوها للتجميل. جميع الحقوق محفوظة.'
    },
    en: {
      nav_categories: 'Categories',
      nav_services: 'Services',
      nav_reviews: 'Reviews',
      nav_contact: 'Contact',
      hero_eyebrow: 'Beauty Center',
      hero_title: 'Royal Beauty<br>for Everyone',
      hero_desc: 'With the finest technology and modern techniques, we reveal your natural beauty.',
      btn_book: 'Book Appointment',
      btn_explore: 'Our Services',
      cat_eyebrow: 'Categories',
      cat_title: 'What We Offer',
      cat_women: 'Women',
      cat_men: 'Men',
      cat_all: 'All Services',
      info_premium: 'Premium Care',
      info_expert: 'Expert Team',
      info_happy: 'Happy Clients',
      services_eyebrow: 'Services',
      services_title: 'Treatments Tailored for You',
      srv_acne: 'Acne Treatment',
      srv_botox: 'Botox',
      srv_fillers: 'Fillers',
      srv_laser: 'Full Body Laser',
      srv_glow: 'Glow Skin',
      srv_smile: 'Hollywood Smile',
      srv_hydro: 'Hydrofacial',
      srv_menlaser: "Men's Laser",
      srv_pdrn: 'PDRN Salmon',
      srv_profhilo: 'Profhilo',
      srv_prp: 'PRP Hair',
      srv_whitening: 'Skin Whitening',
      reviews_eyebrow: 'Testimonials',
      reviews_title: 'What They Say About Us',
      review_1: 'The best beauty experience I've had at Sinuha. The staff are extremely professional and hospitable.',
      review_2: 'The PRP results were amazing. My hair became much stronger and fuller. Thank you so much!',
      review_3: 'A truly premium center. Everything is clean and organized. I highly recommend it.',
      review_4: 'I had laser and hydrofacial done and my skin transformed. The staff are clean and knowledgeable.',
      contact_eyebrow: 'Contact',
      contact_title: 'Get in Touch With Ease',
      lbl_phone: 'Phone',
      lbl_location: 'Location',
      link_map: 'View on Map',
      footer_copy: 'Sinuha Beauty Center. All rights reserved.'
    }
  },

  init() {
    this.bindLangSwitch();
    this.bindMobileNav();
    this.initReveal();
    this.initParticles();
    this.bindSmoothScroll();
    this.setLanguage('ckb');
  },

  setLanguage(lang) {
    this.currentLang = lang;
    const t = this.translations[lang];
    const html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (key === 'hero_title') {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  },

  bindLangSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.dataset.lang);
      });
    });
  },

  bindMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  },

  initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const count = 40;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = Math.random() * 0.3 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.life = Math.random() * 100 + 100;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.life--;

        if (this.y < -10 || this.life <= 0) {
          this.reset();
          this.y = height + 10;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 2 === 0) {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
          p.update();
          p.draw();
        });
      }
      requestAnimationFrame(animate);
    };

    animate();
  },

  bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
