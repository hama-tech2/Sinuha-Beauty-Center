/* ============================================
   SINUHA CENTER — INTERACTIONS & LOGIC
   Minimal • Elegant • Performance-First
   ============================================ */

const translations = {
    ckb: {
        siteTitle: "سینوها",
        navHome: "ماڵەوە", navAbout: "دەربارە", navServices: "خزمەتگوزاریەکان",
        navTech: "تەکنەلۆژیا", navReviews: "باوەڕکردن", navContact: "پەیوەندی",
        bookBtn: "داواکردنی نۆرە",
        heroLabel: "سەنتەری جوانکاری پێشکەوتوو",
        heroTitle: "سینوها سەنتەری جوانکاری",
        heroDesc: "باشترین خزمەتگوزاری جوانکاری و چاکسازی پێست لەگەڵ تەکنەلۆژیای جیهانی.",
        catLabel: "بەشەکان", catTitle: "هەلبژاردەی خزمەتگوزاریەکان",
        catWomen: "ژنان", catWomenDesc: "باشترین خزمەتگوزاریەکانی جوانکاری بۆ ژنان",
        catMen: "پیاوان", catMenDesc: "خزمەتگوزاری تایبەت بە پیاوان",
        catAll: "هەموو خزمەتگوزاریەکان", catAllDesc: "بینینی هەموو خزمەتگوزاریەکان",
        servicesLabel: "خزمەتگوزاریەکان", servicesTitle: "چارەسەری پێشکەوتوو",
        filterAll: "هەموو", filterWomen: "ژنان", filterMen: "پیاوان",
        tagWomen: "ژنان", tagMen: "پیاوان", tagAll: "هەموو",
        svcAcne: "چارەسەری ئەکنە", svcAcneDesc: "چارەسەری تایبەت بۆ دانە سوورەکان و پاککردنەوەی پێست.",
        svcBeautyConsult: "ڕاوێژکاری جوانکاری", svcBeautyConsultDesc: "ڕاوێژکاری تایبەت لەگەڵ سپێشلیستی جوانکاری.",
        svcBotox: "بۆتۆکس", svcBotoxDesc: "دەرمانکردنی هێڵ و چەنیەکان بە بۆتۆکسی پێشکەوتوو.",
        svcConsult: "ڕاوێژکاری پزیشکی", svcConsultDesc: "شیکاری پیشەیی و پێشنیازی چارەسەری.",
        svcFillers: "فیلەر", svcFillersDesc: "پڕکردنەوەی ڕوخسار و لێدان بە فیلەری ئەورووپی.",
        svcFullBodyLaser: "لیزەری لەشی تەواو", svcFullBodyLaserDesc: "لیزەری ئەمانی بۆ لەشی تەواو بە ئامێری پێشکەوتوو.",
        svcGlowSkin: "پێستی درەوشاوە", svcGlowSkinDesc: "دەرمانکردنی پێست بۆ درەوشاوەیی و تازەیی.",
        svcVIP: "ئەزموونی VIP", svcVIPDesc: "خزمەتگوزاری تایبەت و ئەزموونی دڵخۆشی بێهاوتا.",
        svcHollywood: "پێکەنی هۆلیوود", svcHollywoodDesc: "دروستکردنی پێکەنی جوان و درەوشاوە وەک ئەستێرەکان.",
        svcHydro: "هایدرۆفەیشەڵ", svcHydroDesc: "پاککردنەوەی قووڵ و هیدراتەکردنی پێست بە تەکنەلۆژیای ئاو.",
        svcMenLaser: "لیزەری پیاوان", svcMenLaserDesc: "لیزەری ئەمانی تایبەت بە پیاوان بە ئەنجامی بەرز.",
        svcPDRN: "PDRN ساڵمۆن", svcPDRNDesc: "چارەسەری پێشکەوتوو بۆ نوێبوونەوەی پێست بە DNAی ساڵمۆن.",
        svcProfhilo: "پڕۆفایلۆ", svcProfhiloDesc: "هیدراتەکردنی قووڵ و کشانەوەی پێست بە پڕۆفایلۆ.",
        svcPRPMen: "PRP قژی پیاوان", svcPRPMenDesc: "چارەسەری PRP بۆ ڕێگری لە ڕەشوبوونی قژ و نوێبوونەوە.",
        svcPRPWomen: "PRP قژی ژنان", svcPRPWomenDesc: "چارەسەری سروشتی بۆ بەهێزکردنی قژ و ڕێگری لە کۆچ.",
        svcWhitening: "سپی کردنی پێست", svcWhiteningDesc: "چارەسەری تایبەت بۆ ڕووناکی و یەکسانکردنی ڕەنگی پێست.",
        svcTattoo: "سڕینەوەی تاتۆ", svcTattooDesc: "سڕینەوەی تاتۆ بە لیزەری پێشکەوتوو بە بێ جێهێشتنی ئاسەوار.",
        svcUnderarm: "ڕووناک کردنی بژێر", svcUnderarmDesc: "چارەسەری ئەمن بۆ ڕووناک کردنی هەرێمی بژێر.",
        svcBook: "داواکردنی نۆرە",
        aboutLabel: "بەخێربێن", aboutTitle: "سینوها سەنتەر",
        aboutP1: "سینوها شوێنێکی شاهانەیە بۆ جوانکاری و چاکسازی پێست.",
        aboutP2: "ستافی پیشەیی و تەکنەلۆژیای پێشکەوتوو بۆ ئەنجامی بەرز.",
        feat1: "تەکنەلۆژیای پێشکەوتوو", feat2: "ستافی پیشەیی",
        feat3: "چێژی شاهانە", feat4: "ئەنجامی دڵنیاکەرەوە",
        aboutCta: "پەیوەندیمان پێوە بکە",
        techLabel: "تەکنەلۆژیا", techTitle: "ئامێری پزیشکی پێشکەوتوو",
        tech1Title: "لیزەری پێشکەوتوو", tech1Desc: "دواترین ئامێری لیزەری ئاڵمانی بۆ چارەسەری پێست و قژ.",
        tech2Title: "هیدرۆفەیشەڵ", tech2Desc: "تەکنەلۆژیای سێ هەنگاو بۆ پاککردنەوەی قووڵ و هیدراتەکردن.",
        tech3Title: "PRP / PDRN", tech3Desc: "چارەسەری سروشتی بە بەکارهێنانی پلاسمای خۆت بۆ نوێبوونەوە.",
        tech4Title: "فیلەر و بۆتۆکس", tech4Desc: "باشترین مادەی ئەورووپی بۆ دەرمانکردنی ڕوخسار.",
        reviewsLabel: "باوەڕکردن", reviewsTitle: "باوەڕ بە ئەنجامەکان",
        test1Text: "ئەزموونێکی شاهانە. ستافەکە زۆر پیشەیی و میهرەبان بوو.",
        test1Name: "سارا م.", test1Role: "کلیێنی دڵخۆش",
        test2Text: "PRP بۆ قژم زۆر سەرکەوتوو بوو. سینوها باشترینە.",
        test2Name: "محمد ر.", test2Role: "کلیێنی دڵخۆش",
        test3Text: "پێستم دوای هایدرۆفەیشەڵ وەک منداڵ بووەوە. سەرسوڕهێنەر.",
        test3Name: "لەیلا ع.", test3Role: "کلیێنی دڵخۆش",
        test4Text: "فەزای سینوها جیاوازە. هەستێکی شاهانە و پێشکەوتوو.",
        test4Name: "نەرگس ح.", test4Role: "کلیێنی دڵخۆش",
        contactLabel: "پەیوەندی", contactTitle: "پەیوەندیمان پێوە بکە",
        contactPhone: "تەلەفۆن", contactLocation: "شوێن",
        contactMap: "بینین لە گووگڵ مەپ", contactSocial: "میدیای کۆمەڵایەتی",
        footerDesc: "سەنتەری جوانکاری و پزیشکی ئێسێتیکی پێشکەوتوو.",
        footerQuick: "خێراکان", footerContact: "پەیوەندی",
        footerCopy: "© 2026 سینوها سەنتەر. هەموو مافەکان پارێزراون."
    },
    ar: {
        siteTitle: "سينوها",
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "الخدمات",
        navTech: "التقنيات", navReviews: "الآراء", navContact: "تواصل معنا",
        bookBtn: "حجز موعد",
        heroLabel: "مركز تجميل متطور",
        heroTitle: "مركز سينوها للتجميل",
        heroDesc: "أفضل خدمات التجميل وعلاج البشرة مع التقنيات العالمية.",
        catLabel: "الأقسام", catTitle: "اختيار الخدمات",
        catWomen: "النساء", catWomenDesc: "أفضل خدمات التجميل للنساء",
        catMen: "الرجال", catMenDesc: "خدمات خاصة بالرجال",
        catAll: "جميع الخدمات", catAllDesc: "عرض جميع الخدمات المتوفرة",
        servicesLabel: "الخدمات", servicesTitle: "علاجات متطورة",
        filterAll: "الكل", filterWomen: "النساء", filterMen: "الرجال",
        tagWomen: "نساء", tagMen: "رجال", tagAll: "الكل",
        svcAcne: "علاج حب الشباب", svcAcneDesc: "علاج متخصص لحب الشباب وتنظيف البشرة.",
        svcBeautyConsult: "استشارة التجميل", svcBeautyConsultDesc: "استشارة خاصة مع أخصائي التجميل.",
        svcBotox: "بوتوكس", svcBotoxDesc: "علاج الخطوط والتجاعيد بأحدث تقنيات البوتوكس.",
        svcConsult: "الاستشارة الطبية", svcConsultDesc: "تحليل احترافي وتوصية علاجية.",
        svcFillers: "الفيلر", svcFillersDesc: "تعبئة الوجنتين والوجه بفيلر أوروبي.",
        svcFullBodyLaser: "ليزر الجسم الكامل", svcFullBodyLaserDesc: "ليزر إزالة الشعر للجسم كله بأحدث الأجهزة.",
        svcGlowSkin: "بشرة متوهجة", svcGlowSkinDesc: "علاج البشرة للحصول على إشراقة وحيوية.",
        svcVIP: "تجربة VIP", svcVIPDesc: "خدمة خاصة وتجربة رضا فريدة من نوعها.",
        svcHollywood: "ابتسامة هوليوود", svcHollywoodDesc: "ابتسامة جميلة ومشرقة مثل النجوم.",
        svcHydro: "هيدروفيشيال", svcHydroDesc: "تنظيف عميق وترطيب البشرة بتقنية الماء.",
        svcMenLaser: "ليزر الرجال", svcMenLaserDesc: "ليزر إزالة الشعر الخاص بالرجال بنتائج عالية.",
        svcPDRN: "PDRN السالمون", svcPDRNDesc: "علاج متطور لتجديد البشرة بـ DNA السالمون.",
        svcProfhilo: "بروفايلو", svcProfhiloDesc: "ترطيب عميق وشد البشرة ببروفايلو.",
        svcPRPMen: "PRP شعر الرجال", svcPRPMenDesc: "علاج PRP لمنع الصلع وتجديد الشعر.",
        svcPRPWomen: "PRP شعر النساء", svcPRPWomenDesc: "علاج طبيعي لتقوية الشعر ومنع التساقط.",
        svcWhitening: "تبييض البشرة", svcWhiteningDesc: "علاج خاص لتفتيح وتجانس لون البشرة.",
        svcTattoo: "إزالة الوشم", svcTattooDesc: "إزالة الوشم بالليزر المتطور بدون آثار.",
        svcUnderarm: "تفتيح الإبط", svcUnderarmDesc: "علاج آمن لتفتيح منطقة الإبط.",
        svcBook: "حجز موعد",
        aboutLabel: "أهلاً بك", aboutTitle: "مركز سينوها",
        aboutP1: "سينوها مكان ملكي للتجميل وعلاج البشرة.",
        aboutP2: "فريق محترف وتقنيات متطورة لنتائج عالية.",
        feat1: "تقنيات متطورة", feat2: "فريق محترف",
        feat3: "رفاهية ملكية", feat4: "نتائج مضمونة",
        aboutCta: "تواصل معنا",
        techLabel: "التقنيات", techTitle: "أجهزة طبية متطورة",
        tech1Title: "ليزر متطور", tech1Desc: "أحدث أجهزة الليزر الألمانية لعلاج البشرة والشعر.",
        tech2Title: "هيدروفيشيال", tech2Desc: "تقنية الخطوات الثلاث للتنظيف العميق والترطيب.",
        tech3Title: "PRP / PDRN", tech3Desc: "علاج طبيعي باستخدام بلازما دمك للتجديد.",
        tech4Title: "فيلر وبوتوكس", tech4Desc: "أفضل المواد الأوروبية لعلاج الوجه.",
        reviewsLabel: "الآراء", reviewsTitle: "ثق بالنتائج",
        test1Text: "تجربة ملكية. الفريق محترف ولطيف للغاية.",
        test1Name: "سارة م.", test1Role: "عميلة سعيدة",
        test2Text: "علاج PRP للشعر ناجح جداً. سينوها الأفضل.",
        test2Name: "محمد ر.", test2Role: "عميل سعيد",
        test3Text: "بشرتي عادت كطفلة بعد الهيدروفيشيال. مذهل.",
        test3Name: "ليلى ع.", test3Role: "عميلة سعيدة",
        test4Text: "أجواء سينوها فريدة. شعور ملكي ومتطور.",
        test4Name: "نرجس ح.", test4Role: "عميلة سعيدة",
        contactLabel: "تواصل معنا", contactTitle: "تواصل معنا",
        contactPhone: "هاتف", contactLocation: "الموقع",
        contactMap: "عرض على خرائط جوجل", contactSocial: "وسائل التواصل",
        footerDesc: "مركز تجميل وطب تجميلي متطور.",
        footerQuick: "روابط سريعة", footerContact: "تواصل",
        footerCopy: "© 2026 مركز سينوها. جميع الحقوق محفوظة."
    },
    en: {
        siteTitle: "Sinuha",
        navHome: "Home", navAbout: "About", navServices: "Services",
        navTech: "Technologies", navReviews: "Reviews", navContact: "Contact",
        bookBtn: "Book Appointment",
        heroLabel: "Advanced Aesthetic Center",
        heroTitle: "Sinuha Beauty Center",
        heroDesc: "The finest aesthetic and skin treatments with world-class technology.",
        catLabel: "Categories", catTitle: "Explore Our Services",
        catWomen: "Women", catWomenDesc: "Premium beauty services for women",
        catMen: "Men", catMenDesc: "Specialized services for men",
        catAll: "All Services", catAllDesc: "View all available services",
        servicesLabel: "Services", servicesTitle: "Advanced Treatments",
        filterAll: "All", filterWomen: "Women", filterMen: "Men",
        tagWomen: "Women", tagMen: "Men", tagAll: "All",
        svcAcne: "Acne Treatment", svcAcneDesc: "Specialized treatment for acne and deep skin cleansing.",
        svcBeautyConsult: "Beauty Consultation", svcBeautyConsultDesc: "Personal consultation with beauty specialists.",
        svcBotox: "Botox", svcBotoxDesc: "Treatment of lines and wrinkles with advanced Botox.",
        svcConsult: "Medical Consultation", svcConsultDesc: "Professional analysis and treatment recommendation.",
        svcFillers: "Dermal Fillers", svcFillersDesc: "Face contouring with premium European fillers.",
        svcFullBodyLaser: "Full Body Laser", svcFullBodyLaserDesc: "Advanced laser hair removal for the entire body.",
        svcGlowSkin: "Glow Skin", svcGlowSkinDesc: "Skin treatment for radiance and freshness.",
        svcVIP: "VIP Experience", svcVIPDesc: "Exclusive service and unparalleled satisfaction.",
        svcHollywood: "Hollywood Smile", svcHollywoodDesc: "Create a beautiful, star-like bright smile.",
        svcHydro: "Hydrofacial", svcHydroDesc: "Deep cleansing and hydration with water technology.",
        svcMenLaser: "Men's Laser", svcMenLaserDesc: "Specialized laser hair removal for men with high results.",
        svcPDRN: "PDRN Salmon", svcPDRNDesc: "Advanced skin renewal treatment with Salmon DNA.",
        svcProfhilo: "Profhilo", svcProfhiloDesc: "Deep hydration and skin tightening with Profhilo.",
        svcPRPMen: "PRP Hair (Men)", svcPRPMenDesc: "PRP treatment to prevent hair loss and renewal.",
        svcPRPWomen: "PRP Hair (Women)", svcPRPWomenDesc: "Natural treatment to strengthen hair and prevent fall.",
        svcWhitening: "Skin Whitening", svcWhiteningDesc: "Special treatment for brightening and evening skin tone.",
        svcTattoo: "Tattoo Removal", svcTattooDesc: "Advanced laser tattoo removal without scarring.",
        svcUnderarm: "Underarm Brightening", svcUnderarmDesc: "Safe treatment for brightening underarm area.",
        svcBook: "Book Now",
        aboutLabel: "Welcome", aboutTitle: "Sinuha Center",
        aboutP1: "Sinuha is a royal destination for beauty and skin treatments.",
        aboutP2: "Professional staff and advanced technology for superior results.",
        feat1: "Advanced Technology", feat2: "Professional Staff",
        feat3: "Royal Luxury", feat4: "Guaranteed Results",
        aboutCta: "Contact Us",
        techLabel: "Technology", techTitle: "Advanced Medical Equipment",
        tech1Title: "Advanced Laser", tech1Desc: "Latest German laser devices for skin and hair treatment.",
        tech2Title: "Hydrofacial", tech2Desc: "Three-step technology for deep cleansing and hydration.",
        tech3Title: "PRP / PDRN", tech3Desc: "Natural treatment using your own plasma for renewal.",
        tech4Title: "Fillers & Botox", tech4Desc: "Premium European materials for facial treatment.",
        reviewsLabel: "Reviews", reviewsTitle: "Trust the Results",
        test1Text: "A royal experience. The team was incredibly professional and kind.",
        test1Name: "Sara M.", test1Role: "Happy Client",
        test2Text: "PRP hair treatment was very successful. Sinuha is the best.",
        test2Name: "Mohammed R.", test2Role: "Happy Client",
        test3Text: "My skin became like a baby's after Hydrofacial. Amazing.",
        test3Name: "Layla A.", test3Role: "Happy Client",
        test4Text: "Sinuha's atmosphere is unique. A royal and advanced feeling.",
        test4Name: "Narges H.", test4Role: "Happy Client",
        contactLabel: "Contact", contactTitle: "Get in Touch",
        contactPhone: "Phone", contactLocation: "Location",
        contactMap: "View on Google Maps", contactSocial: "Social Media",
        footerDesc: "Advanced aesthetic and cosmetic medical center.",
        footerQuick: "Quick Links", footerContact: "Contact",
        footerCopy: "© 2026 Sinuha Center. All rights reserved."
    }
};

let currentLang = 'ckb';

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initLoading();
    initScrollProgress();
    initNavbar();
    initMobileMenu();
    initLangSwitch();
    initReveal();
    initServiceFilter();
    initParallax();
    initParticles();
    initMagnetic();
    initSmoothScroll();
});

/* ---------- LOADING ---------- */
function initLoading() {
    const loader = document.getElementById('loadingScreen');
    if (!loader) return;
    const done = () => loader.classList.add('done');
    if (document.readyState === 'complete') setTimeout(done, 600);
    else window.addEventListener('load', () => setTimeout(done, 600));
    setTimeout(done, 2000);
}

/* ---------- SCROLL PROGRESS ---------- */
function initScrollProgress() {
    const fill = document.getElementById('scrollFill');
    if (!fill) return;
    window.addEventListener('scroll', () => {
        const st = window.scrollY;
        const dh = document.documentElement.scrollHeight - window.innerHeight;
        fill.style.width = dh > 0 ? (st / dh * 100) + '%' : '0%';
    }, { passive: true });
}

/* ---------- NAVBAR ---------- */
function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }));
}

/* ---------- LANGUAGE SWITCH ---------- */
function initLangSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setLang(lang);
        });
    });
}

function setLang(lang) {
    currentLang = lang;
    const html = document.documentElement;
    const t = translations[lang];
    html.lang = lang;
    html.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.dataset.key;
        if (t[k]) el.textContent = t[k];
    });
    document.title = t.siteTitle;
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal-item').forEach(el => obs.observe(el));
}

/* ---------- SERVICE FILTER ---------- */
function initServiceFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.service-card');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            cards.forEach((card, i) => {
                const cat = card.dataset.category;
                const match = filter === 'all' || cat === filter || cat === 'all';
                if (match) {
                    card.classList.remove('hidden');
                    setTimeout(() => card.classList.remove('exiting'), i * 25);
                } else {
                    card.classList.add('exiting');
                    setTimeout(() => { if (card.classList.contains('exiting')) card.classList.add('hidden'); }, 400);
                }
            });
        });
    });
}

/* ---------- PARALLAX (desktop only) ---------- */
function initParallax() {
    if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const heroImg = document.querySelector('.hero-media img');
    if (!heroImg) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const y = window.scrollY * 0.12;
                heroImg.style.transform = `translateY(${y}px) scale(1.08)`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ---------- PARTICLES (desktop only, minimal) ---------- */
function initParticles() {
    const canvas = document.getElementById('heroParticles');
    if (!canvas || window.innerWidth < 1024) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    const count = 16;
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 1.2 + 0.3, d: Math.random() * 0.15 + 0.05,
            o: Math.random() * 0.35 + 0.1
        });
    }
    let frame = 0, req;
    function draw() {
        frame++;
        if (frame % 2 === 0) {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => {
                p.y -= p.d;
                if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212,176,106,${p.o})`;
                ctx.fill();
            });
        }
        req = requestAnimationFrame(draw);
    }
    draw();
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(req); else draw();
    });
}

/* ---------- MAGNETIC BUTTONS ---------- */
function initMagnetic() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            btn.style.transform = `translate(${(e.clientX - r.left - r.width/2) * 0.15}px, ${(e.clientY - r.top - r.height/2) * 0.15}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
}

/* ---------- SMOOTH SCROLL + ACTIVE LINK ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            e.preventDefault();
            const el = document.querySelector(id);
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        });
    });
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 150) cur = s.id; });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${cur}`);
        });
    }, { passive: true });
}
