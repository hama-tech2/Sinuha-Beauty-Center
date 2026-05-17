/* ============================================
   SINUHA CENTER - INTERACTIONS & LOGIC
   ============================================ */

// ---------- TRANSLATIONS ----------
const translations = {
    ckb: {
        siteTitle: "سینوها سەنتەر",
        navHome: "ماڵەوە",
        navAbout: "دەربارە",
        navServices: "خزمەتگوزاریەکان",
        navTech: "تەکنەلۆژیا",
        navResults: "ئەنجامەکان",
        navContact: "پەیوەندی",
        bookBtn: "داتنەنی ماوە",
        exploreBtn: "بینینی خزمەتگوزاریەکان",
        heroLabel: "سەنتەری جوانکاری پێشکەوتوو",
        heroTitle: "سینوها سەنتەری جوانکاری",
        heroSubtitle: "شوێنێک کە جوانیت لێدەستێنێ",
        heroDesc: "ئێمە باشترین خزمەتگوزاریەکانی جوانکاری و چاکسازی پێشکەش دەکەین بە تەکنەلۆژیای پێشکەوتوو و ستافێکی پیشەیی.",
        highlightYears: "ساڵ ئەزموون",
        highlightServices: "خزمەتگوزاری",
        highlightClients: "کلیێنی دڵخۆش",
        catLabel: "بەشەکان",
        catTitle: "هەلبژاردەی خزمەتگوزاریەکان",
        catWomen: "ژنان",
        catWomenDesc: "باشترین خزمەتگوزاریەکانی جوانکاری بۆ ژنان",
        catMen: "پیاوان",
        catMenDesc: "خزمەتگوزاری تایبەت بە پیاوان",
        catAll: "هەموو خزمەتگوزاریەکان",
        catAllDesc: "بینینی هەموو خزمەتگوزاریەکان",
        catExplore: "بینین",
        servicesLabel: "خزمەتگوزاریەکان",
        servicesTitle: "چارەسەری پێشکەوتوو",
        filterAll: "هەموو",
        filterWomen: "ژنان",
        filterMen: "پیاوان",
        tagWomen: "ژنان",
        tagMen: "پیاوان",
        tagAll: "هەموو",
        svcAcne: "چارەسەری ئەکنە",
        svcAcneDesc: "چارەسەری تایبەت بۆ دانە سوورەکان و پاککردنەوەی پێست.",
        svcBeautyConsult: "ڕاوێژکاری جوانکاری",
        svcBeautyConsultDesc: "ڕاوێژکاری تایبەت لەگەڵ سپێشلیستی جوانکاری.",
        svcBotox: "بۆتۆکس",
        svcBotoxDesc: "دەرمانکردنی هێڵ و چەنیەکان بە بۆتۆکسی پێشکەوتوو.",
        svcConsult: "ڕاوێژکاری پزیشکی",
        svcConsultDesc: "شیکاری پیشەیی و پێشنیازی چارەسەری.",
        svcFillers: "فیلەر",
        svcFillersDesc: "پڕکردنەوەی ڕوخسار و لێدان بە فیلەری ئەورووپی.",
        svcFullBodyLaser: "لیزەری لەشی تەواو",
        svcFullBodyLaserDesc: "لیزەری ئەمانی بۆ لەشی تەواو بە ئامێری پێشکەوتوو.",
        svcGlowSkin: "پێستی درەوشاوە",
        svcGlowSkinDesc: "دەرمانکردنی پێست بۆ درەوشاوەیی و تازەیی.",
        svcVIP: "ئەزموونی VIP",
        svcVIPDesc: "خزمەتگوزاری تایبەت و ئەزموونی دڵخۆشی بێهاوتا.",
        svcHollywood: "پێکەنی هۆلیوود",
        svcHollywoodDesc: "دروستکردنی پێکەنی جوان و درەوشاوە وەک ئەستێرەکان.",
        svcHydro: "هایدرۆفەیشەڵ",
        svcHydroDesc: "پاککردنەوەی قووڵ و هیدراتەکردنی پێست بە تەکنەلۆژیای ئاو.",
        svcMenLaser: "لیزەری پیاوان",
        svcMenLaserDesc: "لیزەری ئەمانی تایبەت بە پیاوان بە ئەنجامی بەرز.",
        svcPDRN: "PDRN ساڵمۆن",
        svcPDRNDesc: "چارەسەری پێشکەوتوو بۆ نوێبوونەوەی پێست بە DNAی ساڵمۆن.",
        svcProfhilo: "پڕۆفایلۆ",
        svcProfhiloDesc: "هیدراتەکردنی قووڵ و کشانەوەی پێست بە پڕۆفایلۆ.",
        svcPRPMen: "PRP قژی پیاوان",
        svcPRPMenDesc: "چارەسەری PRP بۆ ڕێگری لە ڕەشوبوونی قژ و نوێبوونەوە.",
        svcPRPWomen: "PRP قژی ژنان",
        svcPRPWomenDesc: "چارەسەری سروشتی بۆ بەهێزکردنی قژ و ڕێگری لە کۆچ.",
        svcWhitening: "سپی کردنی پێست",
        svcWhiteningDesc: "چارەسەری تایبەت بۆ ڕووناکی و یەکسانکردنی ڕەنگی پێست.",
        svcTattoo: "سڕینەوەی تاتۆ",
        svcTattooDesc: "سڕینەوەی تاتۆ بە لیزەری پێشکەوتوو بە بێ جێهێشتنی ئاسەوار.",
        svcUnderarm: "ڕووناک کردنی بژێر",
        svcUnderarmDesc: "چارەسەری ئەمن بۆ ڕووناک کردنی هەرێمی بژێر.",
        svcBook: "داتنەنی ماوە",
        aboutLabel: "بەخێربێن",
        aboutTitle: "سینوها سەنتەر",
        aboutP1: "سینوها سەنتەر شوێنێکە کە جوانکاری تێدا واتا دەگۆڕێت. ئێمە پێشکەش دەکەین باشترین خزمەتگوزاریەکانی پزیشکی جوانکاری لە فەزایەکی شاهانە و ئارام.",
        aboutP2: "ستافەکەمان لە سپێشلیستی ناوخۆیی و بیانی پێکهاتووە، هەموویان بڕوانامەیان هەیە و ئەزموونیان لە بواری تەکنەلۆژیای پێشکەوتوودا هەیە.",
        feat1: "تەکنەلۆژیای پێشکەوتوو",
        feat2: "ستافی پیشەیی",
        feat3: "چێژی شاهانە",
        feat4: "ئەنجامی دڵنیاکەرەوە",
        aboutCta: "پەیوەندیمان پێوە بکە",
        techLabel: "تەکنەلۆژیا",
        techTitle: "ئامێری پزیشکی پێشکەوتوو",
        tech1Title: "لیزەری پێشکەوتوو",
        tech1Desc: "دواترین ئامێری لیزەری ئاڵمانی بۆ چارەسەری پێست و قژ.",
        tech2Title: "هیدرۆفەیشەڵ",
        tech2Desc: "تەکنەلۆژیای سێ هەنگاو بۆ پاککردنەوەی قووڵ و هیدراتەکردن.",
        tech3Title: "PRP / PDRN",
        tech3Desc: "چارەسەری سروشتی بە بەکارهێنانی پلاسمای خۆت بۆ نوێبوونەوە.",
        tech4Title: "فیلەر و بۆتۆکس",
        tech4Desc: "باشترین مادەی ئەورووپی بۆ دەرمانکردنی ڕوخسار.",
        resultsLabel: "ئەنجامەکان",
        resultsTitle: "باوەڕ بە ئەنجامەکان",
        test1Text: "باشترین ئەزموونی جوانکاری کە هەبووم. ستافەکە زۆر میهرەبان و پیشەیی بوون، ئەنجامی کارەکەش وا دڵم بەختاو کرد.",
        test1Name: "سارا م.",
        test1Role: "کلیێنی دڵخۆش",
        test2Text: "من چارەسەری PRPم کرد بۆ قژم، ئەنجامی کار زۆر سەرسوڕهێنەر بوو. سینوها باشترینە لە هەولێر.",
        test2Name: "محمد ر.",
        test2Role: "کلیێنی دڵخۆش",
        test3Text: "فەزای سینوها جیاوازە. هەست دەکەیت لە شوێنێکی شاهانەیت. هیدرۆفەیشەڵم کرد و پێستم وەک منداڵ بووەوە.",
        test3Name: "لەیلا ع.",
        test3Role: "کلیێنی دڵخۆش",
        contactLabel: "پەیوەندی",
        contactTitle: "پەیوەندیمان پێوە بکە",
        contactPhone: "تەلەفۆن",
        contactLocation: "شوێن",
        contactMap: "بینین لە گووگڵ مەپ",
        contactSocial: "میدیای کۆمەڵایەتی",
        footerDesc: "سەنتەری جوانکاری و پزیشکی ئێسێتیکی پێشکەوتوو.",
        footerQuick: "خێراکان",
        footerContact: "پەیوەندی",
        footerCopy: "© 2026 سینوها سەنتەر. هەموو مافەکان پارێزراون."
    },
    ar: {
        siteTitle: "مركز سينوها",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "الخدمات",
        navTech: "التقنيات",
        navResults: "النتائج",
        navContact: "تواصل معنا",
        bookBtn: "حجز موعد",
        exploreBtn: "استكشاف الخدمات",
        heroLabel: "مركز تجميل متطور",
        heroTitle: "مركز سينوها للتجميل",
        heroSubtitle: "المكان الذي تتجدد فيه جمالك",
        heroDesc: "نقدم أفضل خدمات التجميل والعلاج بأحدث التقنيات وفريق محترف.",
        highlightYears: "سنوات خبرة",
        highlightServices: "خدمة",
        highlightClients: "عميل سعيد",
        catLabel: "الأقسام",
        catTitle: "اختيار الخدمات",
        catWomen: "النساء",
        catWomenDesc: "أفضل خدمات التجميل للنساء",
        catMen: "الرجال",
        catMenDesc: "خدمات خاصة بالرجال",
        catAll: "جميع الخدمات",
        catAllDesc: "عرض جميع الخدمات المتوفرة",
        catExplore: "استكشاف",
        servicesLabel: "الخدمات",
        servicesTitle: "علاجات متطورة",
        filterAll: "الكل",
        filterWomen: "النساء",
        filterMen: "الرجال",
        tagWomen: "نساء",
        tagMen: "رجال",
        tagAll: "الكل",
        svcAcne: "علاج حب الشباب",
        svcAcneDesc: "علاج متخصص لحب الشباب وتنظيف البشرة.",
        svcBeautyConsult: "استشارة التجميل",
        svcBeautyConsultDesc: "استشارة خاصة مع أخصائي التجميل.",
        svcBotox: "بوتوكس",
        svcBotoxDesc: "علاج الخطوط والتجاعيد بأحدث تقنيات البوتوكس.",
        svcConsult: "الاستشارة الطبية",
        svcConsultDesc: "تحليل احترافي وتوصية علاجية.",
        svcFillers: "الفيلر",
        svcFillersDesc: "تعبئة الوجنتين والوجه بفيلر أوروبي.",
        svcFullBodyLaser: "ليزر الجسم الكامل",
        svcFullBodyLaserDesc: "ليزر إزالة الشعر للجسم كله بأحدث الأجهزة.",
        svcGlowSkin: "بشرة متوهجة",
        svcGlowSkinDesc: "علاج البشرة للحصول على إشراقة وحيوية.",
        svcVIP: "تجربة VIP",
        svcVIPDesc: "خدمة خاصة وتجربة رضا فريدة من نوعها.",
        svcHollywood: "ابتسامة هوليوود",
        svcHollywoodDesc: "ابتسامة جميلة ومشرقة مثل النجوم.",
        svcHydro: "هيدروفيشيال",
        svcHydroDesc: "تنظيف عميق وترطيب البشرة بتقنية الماء.",
        svcMenLaser: "ليزر الرجال",
        svcMenLaserDesc: "ليزر إزالة الشعر الخاص بالرجال بنتائج عالية.",
        svcPDRN: "PDRN السالمون",
        svcPDRNDesc: "علاج متطور لتجديد البشرة بـ DNA السالمون.",
        svcProfhilo: "بروفايلو",
        svcProfhiloDesc: "ترطيب عميق وشد البشرة ببروفايلو.",
        svcPRPMen: "PRP شعر الرجال",
        svcPRPMenDesc: "علاج PRP لمنع الصلع وتجديد الشعر.",
        svcPRPWomen: "PRP شعر النساء",
        svcPRPWomenDesc: "علاج طبيعي لتقوية الشعر ومنع التساقط.",
        svcWhitening: "تبييض البشرة",
        svcWhiteningDesc: "علاج خاص لتفتيح وتجانس لون البشرة.",
        svcTattoo: "إزالة الوشم",
        svcTattooDesc: "إزالة الوشم بالليزر المتطور بدون آثار.",
        svcUnderarm: "تفتيح الإبط",
        svcUnderarmDesc: "علاج آمن لتفتيح منطقة الإبط.",
        svcBook: "حجز موعد",
        aboutLabel: "أهلاً بك",
        aboutTitle: "مركز سينوها",
        aboutP1: "مركز سينوها هو المكان الذي يغير معنى الجمال. نقدم أفضل خدمات التجميل الطبي في أجواء ملكية وهادئة.",
        aboutP2: "فريقنا يتكون من أخصائيين محليين وأجانب، جميعهم حاصلين على شهادات وخبرة في أحدث التقنيات.",
        feat1: "تقنيات متطورة",
        feat2: "فريق محترف",
        feat3: "رفاهية ملكية",
        feat4: "نتائج مضمونة",
        aboutCta: "تواصل معنا",
        techLabel: "التقنيات",
        techTitle: "أجهزة طبية متطورة",
        tech1Title: "ليزر متطور",
        tech1Desc: "أحدث أجهزة الليزر الألمانية لعلاج البشرة والشعر.",
        tech2Title: "هيدروفيشيال",
        tech2Desc: "تقنية الخطوات الثلاث للتنظيف العميق والترطيب.",
        tech3Title: "PRP / PDRN",
        tech3Desc: "علاج طبيعي باستخدام بلازما دمك للتجديد.",
        tech4Title: "فيلر وبوتوكس",
        tech4Desc: "أفضل المواد الأوروبية لعلاج الوجه.",
        resultsLabel: "النتائج",
        resultsTitle: "ثق بالنتائج",
        test1Text: "أفضل تجربة تجميل مررت بها. الفريق كان لطيفاً ومحترفاً، والنتيجة جعلتني سعيدة للغاية.",
        test1Name: "سارة م.",
        test1Role: "عميلة سعيدة",
        test2Text: "جربت علاج PRP للشعر، النتيجة كانت مذهلة. سينوها الأفضل في أربيل.",
        test2Name: "محمد ر.",
        test2Role: "عميل سعيد",
        test3Text: "أجواء سينوها مختلفة. تشعر وكأنك في مكان ملكي. جربت الهيدروفيشيال وبشرتي عادت كطفلة.",
        test3Name: "ليلى ع.",
        test3Role: "عميلة سعيدة",
        contactLabel: "تواصل معنا",
        contactTitle: "تواصل معنا",
        contactPhone: "هاتف",
        contactLocation: "الموقع",
        contactMap: "عرض على خرائط جوجل",
        contactSocial: "وسائل التواصل",
        footerDesc: "مركز تجميل وطب تجميلي متطور.",
        footerQuick: "روابط سريعة",
        footerContact: "تواصل",
        footerCopy: "© 2026 مركز سينوها. جميع الحقوق محفوظة."
    },
    en: {
        siteTitle: "Sinuha Center",
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navTech: "Technologies",
        navResults: "Results",
        navContact: "Contact",
        bookBtn: "Book Appointment",
        exploreBtn: "Explore Services",
        heroLabel: "Advanced Aesthetic Center",
        heroTitle: "Sinuha Beauty Center",
        heroSubtitle: "Where Your Beauty is Reborn",
        heroDesc: "We offer the finest aesthetic and beauty treatments using advanced technologies and a professional team.",
        highlightYears: "Years Experience",
        highlightServices: "Services",
        highlightClients: "Happy Clients",
        catLabel: "Categories",
        catTitle: "Explore Our Services",
        catWomen: "Women",
        catWomenDesc: "Premium beauty services for women",
        catMen: "Men",
        catMenDesc: "Specialized services for men",
        catAll: "All Services",
        catAllDesc: "View all available services",
        catExplore: "Explore",
        servicesLabel: "Services",
        servicesTitle: "Advanced Treatments",
        filterAll: "All",
        filterWomen: "Women",
        filterMen: "Men",
        tagWomen: "Women",
        tagMen: "Men",
        tagAll: "All",
        svcAcne: "Acne Treatment",
        svcAcneDesc: "Specialized treatment for acne and deep skin cleansing.",
        svcBeautyConsult: "Beauty Consultation",
        svcBeautyConsultDesc: "Personal consultation with beauty specialists.",
        svcBotox: "Botox",
        svcBotoxDesc: "Treatment of lines and wrinkles with advanced Botox.",
        svcConsult: "Medical Consultation",
        svcConsultDesc: "Professional analysis and treatment recommendation.",
        svcFillers: "Dermal Fillers",
        svcFillersDesc: "Face contouring with premium European fillers.",
        svcFullBodyLaser: "Full Body Laser",
        svcFullBodyLaserDesc: "Advanced laser hair removal for the entire body.",
        svcGlowSkin: "Glow Skin",
        svcGlowSkinDesc: "Skin treatment for radiance and freshness.",
        svcVIP: "VIP Experience",
        svcVIPDesc: "Exclusive service and unparalleled satisfaction.",
        svcHollywood: "Hollywood Smile",
        svcHollywoodDesc: "Create a beautiful, star-like bright smile.",
        svcHydro: "Hydrofacial",
        svcHydroDesc: "Deep cleansing and hydration with water technology.",
        svcMenLaser: "Men's Laser",
        svcMenLaserDesc: "Specialized laser hair removal for men with high results.",
        svcPDRN: "PDRN Salmon",
        svcPDRNDesc: "Advanced skin renewal treatment with Salmon DNA.",
        svcProfhilo: "Profhilo",
        svcProfhiloDesc: "Deep hydration and skin tightening with Profhilo.",
        svcPRPMen: "PRP Hair (Men)",
        svcPRPMenDesc: "PRP treatment to prevent hair loss and renewal.",
        svcPRPWomen: "PRP Hair (Women)",
        svcPRPWomenDesc: "Natural treatment to strengthen hair and prevent fall.",
        svcWhitening: "Skin Whitening",
        svcWhiteningDesc: "Special treatment for brightening and evening skin tone.",
        svcTattoo: "Tattoo Removal",
        svcTattooDesc: "Advanced laser tattoo removal without scarring.",
        svcUnderarm: "Underarm Brightening",
        svcUnderarmDesc: "Safe treatment for brightening underarm area.",
        svcBook: "Book Now",
        aboutLabel: "Welcome",
        aboutTitle: "Sinuha Center",
        aboutP1: "Sinuha Center is where the meaning of beauty changes. We offer the finest medical aesthetic services in a royal and serene atmosphere.",
        aboutP2: "Our team consists of local and international specialists, all certified and experienced in the latest advanced technologies.",
        feat1: "Advanced Technology",
        feat2: "Professional Staff",
        feat3: "Royal Luxury",
        feat4: "Guaranteed Results",
        aboutCta: "Contact Us",
        techLabel: "Technology",
        techTitle: "Advanced Medical Equipment",
        tech1Title: "Advanced Laser",
        tech1Desc: "Latest German laser devices for skin and hair treatment.",
        tech2Title: "Hydrofacial",
        tech2Desc: "Three-step technology for deep cleansing and hydration.",
        tech3Title: "PRP / PDRN",
        tech3Desc: "Natural treatment using your own plasma for renewal.",
        tech4Title: "Fillers & Botox",
        tech4Desc: "Premium European materials for facial treatment.",
        resultsLabel: "Results",
        resultsTitle: "Trust the Results",
        test1Text: "The best aesthetic experience I've ever had. The staff was kind and professional, and the result made me incredibly happy.",
        test1Name: "Sara M.",
        test1Role: "Happy Client",
        test2Text: "I did PRP treatment for my hair, the results were amazing. Sinuha is the best in Erbil.",
        test2Name: "Mohammed R.",
        test2Role: "Happy Client",
        test3Text: "The atmosphere at Sinuha is different. You feel like you're in a royal place. I did Hydrofacial and my skin became like a baby's.",
        test3Name: "Layla A.",
        test3Role: "Happy Client",
        contactLabel: "Contact",
        contactTitle: "Get in Touch",
        contactPhone: "Phone",
        contactLocation: "Location",
        contactMap: "View on Google Maps",
        contactSocial: "Social Media",
        footerDesc: "Advanced aesthetic and cosmetic medical center.",
        footerQuick: "Quick Links",
        footerContact: "Contact",
        footerCopy: "© 2026 Sinuha Center. All rights reserved."
    }
};

let currentLang = 'ckb';

// ---------- DOM READY ----------
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initNavbar();
    initMobileMenu();
    initLanguageSwitcher();
    initScrollProgress();
    initScrollAnimations();
    initParallax();
    initParticles();
    initServiceFilter();
    initTestimonialSlider();
    initMagneticButtons();
    initSmoothScroll();
});

// ---------- LOADING SCREEN ----------
function initLoadingScreen() {
    const loader = document.getElementById('loadingScreen');
    if (!loader) return;
    
    const minLoadTime = 600;
    const startTime = Date.now();
    
    const hide = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 700);
        }, remaining);
    };
    
    if (document.readyState === 'complete') {
        hide();
    } else {
        window.addEventListener('load', hide);
        // Fallback if load hangs
        setTimeout(hide, 2000);
    }
}

// ---------- NAVBAR SCROLL ----------
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ---------- MOBILE MENU ----------
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
    
    const links = menu.querySelectorAll('.nav-link');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ---------- LANGUAGE SWITCHER ----------
function initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;
            
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    const t = translations[lang];
    
    html.lang = lang;
    html.dir = lang === 'en' ? 'ltr' : 'rtl';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (t[key]) {
            if (el.tagName === 'TITLE') {
                document.title = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    updateActiveNav();
}

// ---------- SCROLL PROGRESS ----------
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress-bar');
    if (!bar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}

// ---------- SCROLL ANIMATIONS ----------
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('hero-text')) {
                    const children = entry.target.querySelectorAll('.reveal-text');
                    children.forEach((child, i) => {
                        setTimeout(() => child.classList.add('visible'), i * 140);
                    });
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal-item, .hero-text').forEach(el => observer.observe(el));
}

// ---------- PARALLAX ----------
function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768 || 'ontouchstart' in window) return;
    
    const heroImg = document.querySelector('.hero-bg img');
    const categoryImgs = document.querySelectorAll('.category-image img');
    
    const targets = [];
    if (heroImg) targets.push({ el: heroImg, container: heroImg.parentElement, speed: 0.35 });
    categoryImgs.forEach((img, i) => {
        targets.push({ el: img, container: img.parentElement, speed: 0.12 + (i * 0.02) });
    });
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax(targets);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function updateParallax(targets) {
    const scrollY = window.pageYOffset;
    const winHeight = window.innerHeight;
    
    targets.forEach(item => {
        const rect = item.container.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < winHeight) {
            const yPos = (scrollY - item.container.offsetTop) * item.speed;
            item.el.style.transform = `translateY(${yPos}px) scale(1.1)`;
        }
    });
}

// ---------- PARTICLES ----------
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 12 : 28;
    let particles = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize, { passive: true });
    
    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 80;
            this.size = Math.random() * 1.8 + 0.4;
            this.speedY = Math.random() * 0.4 + 0.15;
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.opacity = Math.random() * 0.45 + 0.15;
            this.gold = Math.random() > 0.35;
        }
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            if (this.y < -10) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.gold 
                ? `rgba(201, 169, 98, ${this.opacity})` 
                : `rgba(232, 213, 163, ${this.opacity * 0.45})`;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        p.y = Math.random() * canvas.height;
        particles.push(p);
    }
    
    let animationId;
    let frameCount = 0;
    
    function animate() {
        frameCount++;
        const skipFrame = isMobile && frameCount % 2 !== 0;
        if (!skipFrame) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
        }
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(animationId);
        else animate();
    });
}

// ---------- SERVICE FILTER ----------
function initServiceFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.service-card');
    const TRANSITION_MS = 450;
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            cards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter || category === 'all';
                
                if (shouldShow) {
                    card.classList.remove('hidden');
                    // Force reflow then animate in
                    requestAnimationFrame(() => {
                        card.classList.remove('is-exiting');
                    });
                } else {
                    card.classList.add('is-exiting');
                    setTimeout(() => {
                        if (card.classList.contains('is-exiting')) {
                            card.classList.add('hidden');
                        }
                    }, TRANSITION_MS);
                }
            });
        });
    });
}

// ---------- TESTIMONIAL SLIDER ----------
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    if (!slides.length) return;
    
    let currentSlide = 0;
    let interval;
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide]?.classList.add('active');
    }
    
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetInterval();
        });
    });
    
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 6000);
    }
    
    interval = setInterval(nextSlide, 6000);
}

// ---------- MAGNETIC BUTTONS ----------
function initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ---------- SMOOTH SCROLL & ACTIVE NAV ----------
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 85;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}
