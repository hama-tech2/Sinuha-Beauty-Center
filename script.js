/* ════════════════════════════════════════════
   SINUHA BEAUTY CENTER — script.js
   Full Service Dictionary + Smart Search + UI
   + Cinematic Motion Upgrade
   ════════════════════════════════════════════ */

const WA_MSG  = encodeURIComponent("سڵاو، چۆن نۆرە بگرم");
const WA_MSG_AR = encodeURIComponent("مرحباً، كيف يمكنني حجز موعد؟");
const WA_BASE = "https://wa.me/9647717007560?text=";

/* ─────────────────────────────────────────────
   SERVICE DICTIONARY
   ───────────────────────────────────────────── */
const serviceDict = [
  { id:'w1', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/kurdish_beauty_mesotherapy4.png?raw=true',
    ckb:{title:'مێسۆتێراپی',desc:'پێست و قژ بە ڤیتامین و مادەی خۆراکی.'},
    ar:{title:'ميزوثيرابي',desc:'البشرة والشعر بالفيتامينات.'},
    en:{title:'Mesotherapy',desc:'Skin and hair nourishment with vitamins.'},
    keys:['mesotherapy','meso','vitamin','skin','hair','injection','پێست','قژ','مێسۆ','بشرة','شعر','حقن']},
  { id:'w2', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-fractional-co2.webp?raw=true',
    ckb:{title:'فراکشنال CO2',desc:'چارەسەری ئاسەواری ئەکنە و نوێبوونەوەی پێست.'},
    ar:{title:'فراكشنال CO2',desc:'علاج آثار حب الشباب وتجديد البشرة.'},
    en:{title:'Fractional CO2',desc:'Acne scar treatment and skin renewal.'},
    keys:['fractional','co2','laser','acne','scar','renewal','فراکشنال','ئەکنە','زیپکە','فراكشنال','تجديد']},
  { id:'w3', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-exosome.webp.png?raw=true',
    ckb:{title:'ئێگزۆسۆم',desc:'پشتگیری نوێبوونەوەی پێست لە ئاستی زانستی.'},
    ar:{title:'إكسوزوم',desc:'دعم تجديد البشرة على المستوى العلمي.'},
    en:{title:'Exosome',desc:'Scientific skin regeneration support.'},
    keys:['exosome','regeneration','stem','پێست','ئێگزۆسۆم','إكسوزوم','تجديد']},
  { id:'w4', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-hifu.webp.png?raw=true',
    ckb:{title:'HIFU',desc:'توند کردنی پێست بەبێ نەشتەرگەری.'},
    ar:{title:'HIFU',desc:'شد البشرة بدون جراحة.'},
    en:{title:'HIFU',desc:'Non-surgical skin tightening.'},
    keys:['hifu','lift','tighten','ultrasound','توند','هەڵگرتن','پێست','شد','رفع']},
  { id:'w5', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-microneedling3.png?raw=true',
    ckb:{title:'مایکرۆنیدلینگ',desc:'تازەکردنەوەی تەکسچەری پێست.'},
    ar:{title:'ميكرونيدلينج',desc:'تجديد ملمس البشرة.'},
    en:{title:'Microneedling',desc:'Skin texture renewal.'},
    keys:['microneedling','needle','texture','مایکرۆ','پێست','ميكرو','بشرة']},
  { id:'w6', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-chemical-peeling3.png?raw=true',
    ckb:{title:'تەقشیر کیمیایی پێست',desc:'لابردنی چینی مردووەکەی پێست.'},
    ar:{title:'التقشير الكيميائي للبشرة',desc:'إزالة الطبقة الميتة من البشرة.'},
    en:{title:'Chemical Peeling',desc:'Dead skin layer removal.'},
    keys:['chemical','peel','peeling','acid','exfoliation','تەقشیر','کیمیایی','پێست','تقشير','بشرة']},
  { id:'w7', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-morpheus-8.webp.png?raw=true',
    ckb:{title:'مۆرفیوس 8',desc:'لادانی ئاسەواری زیپکە وهاندانی کۆلاجین.'},
    ar:{title:'مورفيوس 8',desc:'إزالة آثار حب الشباب وتحفيز الكولاجين.'},
    en:{title:'Morpheus 8',desc:'Acne scar removal and collagen stimulation.'},
    keys:['morpheus','rf','radiofrequency','collagen','tighten','مۆرفیوس','کۆلاژن','زیپکە','مورفيوس','كولاجين']},
  { id:'w8', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-carbon-peeling3.png?raw=true',
    ckb:{title:'تەقشیر کاربۆنی پێست',desc:'بچووک کردنی کونیلە وهاندانی کۆلاجین.'},
    ar:{title:'تقشير كاربوني',desc:'سد المسامات وتحفيز الكولاجين.'},
    en:{title:'Carbon Peeling',desc:'Pore minimizing and collagen boost.'},
    keys:['carbon','peel','blackhead','pore','کاربۆن','کونیلە','تقشير','مسامات']},
  { id:'w9', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-nctf-1353.png?raw=true',
    ckb:{title:'NCTF 135',desc:'تازەکردنەوەی پێست.'},
    ar:{title:'NCTF 135',desc:'تجديد فاخر للبشرة.'},
    en:{title:'NCTF 135',desc:'Premium skin revitalization.'},
    keys:['nctf','135','revitalize','NCTF','پێست','بشرة']},
  { id:'w10', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-pdrn2.png?raw=true',
    ckb:{title:'PDRN',desc:'پشتگیری نوێبوونەوەی پێست.'},
    ar:{title:'PDRN',desc:'دعم تجديد البشرة.'},
    en:{title:'PDRN',desc:'Skin renewal support.'},
    keys:['pdrn','polynucleotide','dna','PDRN','پێست','بشرة']},
  { id:'w11', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-pologen.webp.png?raw=true',
    ckb:{title:'پۆڵۆجین',desc:'سپی بوونەوە وپاک کردنی پێست لە قولایی.'},
    ar:{title:'بوليجين',desc:'تنظيف وتوحيد لون البشرة.'},
    en:{title:'Pologen',desc:'Skin whitening and deep cleansing.'},
    keys:['pologen','پۆڵۆجین','سپی','پێست','تنظيف','بشرة']},
  { id:'w12', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-profhilo-premium3.png?raw=true',
    ckb:{title:'پڕۆفایلۆ',desc:'باشترین دەرزی لێفتینگ وشیدارکردنەوە.'},
    ar:{title:'بروفايلو',desc:'أفضل إبرة لشد البشرة والنضارة.'},
    en:{title:'Profhilo',desc:'Best lifting and brightening injection.'},
    keys:['profhilo','hyaluronic','hydrate','lift','پڕۆفایلۆ','لێفتینگ','بروفايلو','شد']},
  { id:'w13', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-underarm-whitening3.png?raw=true',
    ckb:{title:'ڕووناككردنی بژێر',desc:'سپی بوونەوەی بن باڵ وناوچەی هەستیار — یەک رەنگ کردنی پێست بە نوێترین تەکنیک.'},
    ar:{title:'تفتيح الإبط',desc:'تبييض منطقة الإبط والمناطق الحساسة بأحدث التقنيات.'},
    en:{title:'Underarm Brightening',desc:'Brightening sensitive areas with latest techniques.'},
    keys:['underarm','whitening','brightening','armpit','بژێر','سپی','إبط','تفتيح']},
  { id:'w14', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/imageswomen-hydrafacial.webp3.png?raw=true',
    ckb:{title:'هایدرۆفەیشەڵ',desc:'پاككردنەوە و هیدراتەکردنی پێست.'},
    ar:{title:'هيدروفيشل',desc:'تنظيف وترطيب البشرة.'},
    en:{title:'Hydrofacial',desc:'Deep cleansing and skin hydration.'},
    keys:['hydrofacial','hydra','facial','هایدرۆ','فەیشەڵ','هيدرو','وجه','تنظيف']},
  { id:'w15', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-secret-rf.webp3.png?raw=true',
    ckb:{title:'سیکرێت RF',desc:'مایکرۆنیدلینگی RF بۆ تازەکردنەوە.'},
    ar:{title:'سيكريت RF',desc:'ميكرونيدلينج RF للتجديد.'},
    en:{title:'Secret RF',desc:'RF microneedling for renewal.'},
    keys:['secret','rf','radiofrequency','microneedling','سیکرێت','سيكريت']},
  { id:'w16', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-skin-rejuvenation3.png?raw=true',
    ckb:{title:'تازەکردنەوەی پێست',desc:'شادابی و ڕووناکی سروشتی.'},
    ar:{title:'تجديد البشرة',desc:'إشراقة وحيوية طبيعية.'},
    en:{title:'Skin Rejuvenation',desc:'Natural brightness and vitality.'},
    keys:['rejuvenation','glow','تازەکردنەوە','پێست','تجديد','إشراقة']},
  { id:'w17', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-skin-whitening-premium3.png?raw=true',
    ckb:{title:'سپی بوونەوەی پێست ویەک رەنگ کردنی',desc:'هاوسەنگکردنی ڕەنگ و درەوشانەوە.'},
    ar:{title:'تفتيح البشرة وتوحيد اللون',desc:'توحيد اللون وإشراقة.'},
    en:{title:'Skin Brightening & Toning',desc:'Even tone and glow.'},
    keys:['brightening','whitening','سپی','پێست','تفتيح','بشرة']},
  { id:'w18', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-acne-treatment2.png?raw=true',
    ckb:{title:'چارەسەری زیپکە',desc:'بن بر کردنی زیپکەی ئەکتیڤ.'},
    ar:{title:'علاج حب الشباب',desc:'إزالة الحبوب النشطة.'},
    en:{title:'Acne Treatment',desc:'Active acne removal.'},
    keys:['acne','pimple','blemish','زیپکە','ئەکنە','حب الشباب','علاج']},
  { id:'w19', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/kurdish_beauty_mesotherapy3.png?raw=true',
    ckb:{title:'مێسۆتێراپی قژ',desc:'بەهێزکردنی پێست و قژ.'},
    ar:{title:'ميزوثيرابي شعر',desc:'تقوية البشرة والشعر.'},
    en:{title:'Mesotherapy (Hair)',desc:'Skin and hair strengthening.'},
    keys:['mesotherapy','hair','growth','scalp','قژ','مێسۆ','شعر','تقوية']},
  { id:'w20', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-lip-rose3.png?raw=true',
    ckb:{title:'لێب ڕۆز',desc:'ڕووناکی و شێوەیەکی سروشتی.'},
    ar:{title:'ليب روز',desc:'إشراقة وشكل طبيعي.'},
    en:{title:'Lip Rose',desc:'Natural brightness and shape.'},
    keys:['lip','rose','lips','لێب','ڕۆز','شفاه']},
  { id:'w21', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-filler.webp.png?raw=true',
    ckb:{title:'فیلەر',desc:'هاوسەنگکردنی ڕوخسار.'},
    ar:{title:'فيلر',desc:'توازن ملامح الوجه.'},
    en:{title:'Filler',desc:'Facial balance.'},
    keys:['filler','hyaluronic','lip','cheek','فیلەر','ڕوخسار','فيلر','وجه']},
  { id:'w22', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-fat-dissolving3.png?raw=true',
    ckb:{title:'تواندنەوەی چەوری',desc:'دەرزی تایبەت بە شیکردنەوەی خانەی چەوری.'},
    ar:{title:'إذابة الدهون',desc:'إبر خاصة لتفتيت الخلايا الدهنية.'},
    en:{title:'Fat Dissolving',desc:'Special injections for fat cell breakdown.'},
    keys:['fat','dissolve','lipolysis','تواندنەوە','چەوری','إذابة','دهون']},
  { id:'w23', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-botox3.png?raw=true',
    ckb:{title:'بۆتۆکس',desc:'کەم کردنەوەی هێلی رووخسار ونەهێشتنی وردە لۆچی.'},
    ar:{title:'بوتوكس',desc:'تقليل خطوط الوجه وإزالة التجاعيد الدقيقة.'},
    en:{title:'Botox',desc:'Facial line reduction and fine wrinkle removal.'},
    keys:['botox','wrinkle','line','forehead','بۆتۆکس','رووخسار','بوتوكس','تجاعيد','خطوط']},
  { id:'w24', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-prp-hair3.png?raw=true',
    ckb:{title:'PRP قژ',desc:'پشتگیری بەهێزکردنی قژ.'},
    ar:{title:'PRP شعر',desc:'دعم تقوية الشعر.'},
    en:{title:'PRP Hair',desc:'Hair strengthening support.'},
    keys:['prp','platelet','hair','قژ','PRP','شعر','نمو']},
  { id:'w25', section:'women',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-laser-hair-removal.webp4.png?raw=true',
    ckb:{title:'لەیزەری لادانی موو',desc:'لەیزەری لادانی موو بە نوێترین ئامێر.'},
    ar:{title:'ليزر إزالة الشعر',desc:'أحدث أجهزة إزالة الشعر بالليزر.'},
    en:{title:'Laser Hair Removal',desc:'Latest laser hair removal devices.'},
    keys:['laser','hair removal','body','لەیزەر','موو','ليزر','إزالة شعر']},
  { id:'m1', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-luxury-care-ad.webp.png?raw=true',
    ckb:{title:'چاودێری پێشکەوتووەکان پیاوان',desc:'ئەزموونی پێشکەوتووەکان بۆ پیاوان.'},
    ar:{title:'عناية فاخرة للرجال',desc:'تجربة فاخرة للرجال.'},
    en:{title:"Men's Premium Care",desc:'Premium experience for men.'},
    keys:['men','male','premium','care','پیاوان','رجال','عناية']},
  { id:'m2', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-advanced-technology.webp.png?raw=true',
    ckb:{title:'تەکنەلۆژیای پێشکەوتوو',desc:'ئامێری نوێترین تەکنەلۆژیا.'},
    ar:{title:'تقنيات متقدمة',desc:'أحدث أجهزة التجميل.'},
    en:{title:'Advanced Technology',desc:'Latest beauty technology devices.'},
    keys:['technology','advanced','پیاوان','تقنية','أجهزة']},
  { id:'m3', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-prp-hair.webp.png?raw=true',
    ckb:{title:'PRP قژی پیاوان',desc:'پشتگیری بەهێزکردن و نوێبوونەوەی قژ.'},
    ar:{title:'PRP شعر الرجال',desc:'دعم تقوية وتجديد الشعر.'},
    en:{title:'PRP Hair for Men',desc:'Hair strengthening and renewal.'},
    keys:['prp','hair','men','قژ','PRP','پیاوان','شعر رجال','نمو']},
  { id:'m4', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-beard-line-laser.webp.png?raw=true',
    ckb:{title:'لەیزەری ڕیش',desc:'دیزاینی هێڵی ڕیش بە لیزەر.'},
    ar:{title:'ليزر اللحية',desc:'تصميم خط اللحية بالليزر.'},
    en:{title:'Beard Laser',desc:'Beard line design with laser.'},
    keys:['beard','laser','design','ریش','لەیزەر','لحية','ليزر']},
  { id:'m5', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-hair-treatment.webp.png?raw=true',
    ckb:{title:'چارەسەری قژ',desc:'پلانی تایبەت بۆ چاودێری قژ.'},
    ar:{title:'علاج الشعر',desc:'خطة خاصة لعناية الشعر.'},
    en:{title:'Hair Treatment',desc:'Dedicated hair care plan.'},
    keys:['hair','treatment','scalp','قژ','شعر','علاج']},
  { id:'m6', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-fractional-co2.webp.png?raw=true',
    ckb:{title:'فراکشنال CO2 پیاوان',desc:'چارەسەری پێستی پیاوان.'},
    ar:{title:'فراكشنال CO2 للرجال',desc:'علاج بشرة الرجال.'},
    en:{title:'Fractional CO2 (Men)',desc:"Men's skin treatment."},
    keys:['fractional','co2','skin','men','فراکشنال','پیاوان','فراكشنال','رجال']},
  { id:'m7', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-carbon-peel.webp.png?raw=true',
    ckb:{title:'کاربۆن پێست پیاوان',desc:'پاككردنەوەی قووڵی پێست.'},
    ar:{title:'كربون بيلينج للرجال',desc:'تنظيف عميق للبشرة.'},
    en:{title:'Carbon Peel (Men)',desc:'Deep skin cleansing.'},
    keys:['carbon','peel','men','کاربۆن','پیاوان','كربون','رجال']},
  { id:'m8', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-chest-laser.webp.png?raw=true',
    ckb:{title:'لەیزەری سینگ',desc:'بن بر کردنی مووی پشت وسنگ.'},
    ar:{title:'ليزر الصدر والظهر',desc:'إزالة شعر الصدر والظهر.'},
    en:{title:'Chest & Back Laser',desc:'Chest and back hair removal.'},
    keys:['chest','back','laser','hair','سینگ','پشت','موو','لەیزەر','صدر','ليزر']},
  { id:'m9', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-neck-laser.webp.png?raw=true',
    ckb:{title:'لەیزەری مل',desc:'بن بر کردنی مووی مل.'},
    ar:{title:'ليزر الرقبة',desc:'إزالة شعر الرقبة.'},
    en:{title:'Neck Laser',desc:'Neck hair removal.'},
    keys:['neck','laser','مل','موو','لەیزەر','رقبة','ليزر']},
  { id:'m10', section:'men',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-full-body-laser3.png?raw=true',
    ckb:{title:'لەیزەری لەشی تەواو',desc:'لەیزەری خێرا بۆ لەشی تەواو.'},
    ar:{title:'ليزر الجسم الكامل',desc:'ليزر سريع للجسم الكامل.'},
    en:{title:'Full Body Laser',desc:'Fast full body laser.'},
    keys:['full body','laser','لەشی تەواو','لەیزەر','جسم كامل','ليزر']},
  { id:'d1', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-luxury-care.webp?raw=true',
    ckb:{title:'چاودێری ددان',desc:'چاودێری پێشکەوتووەکان ددان.'},
    ar:{title:'عناية الأسنان',desc:'عناية فاخرة بالأسنان.'},
    en:{title:'Dental Care',desc:'Premium dental care.'},
    keys:['dental','care','teeth','ددان','أسنان']},
  { id:'d2', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-before-after.webp?raw=true',
    ckb:{title:'پێش و پاش',desc:'ئەنجامی چارەسەری ددان.'},
    ar:{title:'قبل وبعد',desc:'نتائج علاج الأسنان.'},
    en:{title:'Before & After',desc:'Dental treatment results.'},
    keys:['before after','results','پێش','پاش','قبل','بعد']},
  { id:'d3', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-pediatric-dentistry.webp?raw=true',
    ckb:{title:'چارەسەری منداڵان',desc:'چاودێری تایبەت بە ددانە منداڵان.'},
    ar:{title:'علاج اسنان الاطفال',desc:'عناية خاصة بأسنان الأطفال.'},
    en:{title:'Pediatric Dentistry',desc:"Specialized children's dental care."},
    keys:['pediatric','children','kids','منداڵان','ددان','أطفال']},
  { id:'d4', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-extraction.webp.png?raw=true',
    ckb:{title:'هەڵکێشانی ددان',desc:'هەڵکێشانی ددان بە شێوەیە پزیشکی.'},
    ar:{title:'خلع الأسنان',desc:'خلع الأسنان طبياً.'},
    en:{title:'Extraction',desc:'Professional tooth extraction.'},
    keys:['extraction','remove','tooth','هەڵکێشان','ددان','خلع','سن']},
  { id:'d5', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-dental-implant.webp?raw=true',
    ckb:{title:'چاندنەوەی ددان',desc:'چاندنەوەی ددان بە باشترین براندی جیهانی.'},
    ar:{title:'زراعة الأسنان',desc:'زراعة الأسنان بأفضل الماركات العالمية.'},
    en:{title:'Dental Implant',desc:'Best world brand tooth implantation.'},
    keys:['implant','dental','tooth','چاندنەوە','ددان','زراعة','أسنان']},
  { id:'d6', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-consultation.webp?raw=true',
    ckb:{title:'ڕاوێژکاری ددان',desc:'شیکاری و پلانی چارەسەری.'},
    ar:{title:'استشارة أسنان',desc:'تحليل وخطة علاج.'},
    en:{title:'Consultation',desc:'Analysis and treatment planning.'},
    keys:['consultation','plan','ڕاوێژکاری','ددان','استشارة']},
  { id:'d7', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/premium-root-canal-treatment.webp.png?raw=true',
    ckb:{title:'چارەسەری ڕەگی ددان',desc:'چارەسەری قووڵی ددان.'},
    ar:{title:'علاج الجذور',desc:'علاج قنوات الجذور.'},
    en:{title:'Root Canal',desc:'Root canal treatment.'},
    keys:['root canal','nerve','ڕەگ','ددان','جذور','قناة']},
  { id:'d8', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/premium-dental-filling-treatment.webp.png?raw=true',
    ckb:{title:'پڕکردنەوەی ددان',desc:'پڕکردنەوەی ددان بە مادەی باکوور.'},
    ar:{title:'حشو الأسنان',desc:'حشو الأسنان بالمواد الحديثة.'},
    en:{title:'Filling',desc:'Modern dental filling.'},
    keys:['filling','cavity','پڕکردنەوە','ددان','حشو','سن']},
  { id:'d9', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-whitening.webp.png?raw=true',
    ckb:{title:'سپی کردنەوەی ددان',desc:'سپی کردنەوەی ددان بە شێوەیە پزیشکی.'},
    ar:{title:'تبييض الأسنان',desc:'تبييض أسنان طبي.'},
    en:{title:'Whitening',desc:'Medical teeth whitening.'},
    keys:['whitening','bleaching','teeth','سپی','ددان','تبييض','أسنان']},
  { id:'d10', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-veneers.webp.png?raw=true',
    ckb:{title:'ڤینیر',desc:'دیزاینی ددان بە ڤینیر.'},
    ar:{title:'فينير',desc:'تصميم الأسنان بالفينير.'},
    en:{title:'Veneers',desc:'Dental design with veneers.'},
    keys:['veneer','porcelain','smile','ڤینیر','ددان','فينير','أسنان']},
  { id:'d11', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-braces.webp.png?raw=true',
    ckb:{title:'تێل دانان',desc:'ڕاستکردنەوەی ددان.'},
    ar:{title:'تركيب التقويم',desc:'تقويم وتصحيح الأسنان.'},
    en:{title:'Braces',desc:'Teeth alignment and correction.'},
    keys:['braces','orthodontic','align','تێل','ددان','تقويم','أسنان']},
  { id:'d12', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-hollywood-smile.webp.png?raw=true',
    ckb:{title:'هۆلیوود سمایل',desc:'پێکەنینێکی ڕوون و گونجاو.'},
    ar:{title:'ابتسامة هوليوود',desc:'ابتسامة مشرقة ومناسبة.'},
    en:{title:'Hollywood Smile',desc:'Bright, perfect smile design.'},
    keys:['hollywood','smile','هۆلیوود','سمایل','ابتسامة','أسنان']},
  { id:'d13', section:'dental',
    img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-cleaning.webp.png?raw=true',
    ckb:{title:'پاككردنەوەی ددان',desc:'پاككردنەوەی پیشەیی.'},
    ar:{title:'تنظيف الأسنان',desc:'تنظيف احترافي.'},
    en:{title:'Cleaning',desc:'Professional dental cleaning.'},
    keys:['cleaning','scale','polish','پاك','ددان','تنظيف','أسنان']}
];

const techList = [
  {ckb:{t:'لەیزەرکان',d:'لەیزەری پێشکەوتوو بۆ لادانی موو'},ar:{t:'ليزركان',d:'ليزر متقدم لإزالة الشعر'},en:{t:'Laserkan',d:'Advanced laser hair removal'}},
  {ckb:{t:'نۆرتێکس',d:'ئامێری پێشکەوتووەکان'},ar:{t:'نورتكس',d:'جهاز متقدم'},en:{t:'Northex',d:'Premium advanced device'}},
  {ckb:{t:'ئومێکس هایبرێد',d:'ئالێکساندرایت هایبرید'},ar:{t:'أوميكس هايبرد',d:'ألكساندريت هايبرد'},en:{t:'Umex Alexandrite Hybrid',d:'Alexandrite hybrid laser'}},
  {ckb:{t:'کاندێلا',d:'لادانی موو'},ar:{t:'كانديلا',d:'إزالة الشعر'},en:{t:'Candela Hair Removal',d:'Professional hair removal'}},
  {ckb:{t:'دێکا ئیتاڵی',d:'لادانی مووی ئیتاڵی'},ar:{t:'ديكا الإيطالي',d:'إزالة الشعر الإيطالي'},en:{t:'Deka Italian',d:'Italian laser hair removal'}},
  {ckb:{t:'ڕۆبۆت X',d:'مایکرۆ SEMENSE'},ar:{t:'روبوت X',d:'مايكرو SEMENSE'},en:{t:'Robot X',d:'Micro SEMENSE technology'}},
  {ckb:{t:'فراکشنال CO2',d:'ئاسەواری زیپکە ونوێبوونەوەی پێست'},ar:{t:'فراكشنال CO2',d:'علاج آثار حب الشباب وتجديد البشرة'},en:{t:'Fractional Laser CO2',d:'Acne scars & skin renewal'}},
  {ckb:{t:'مۆرفیوس 8',d:'لادانی ئاسەواری زیپکە وهاندانی کۆلاجین'},ar:{t:'مورفيوس 8',d:'إزالة آثار حب الشباب وتحفيز الكولاجين'},en:{t:'Morpheus 8',d:'Scar removal & collagen boost'}},
  {ckb:{t:'سیکرێت RF',d:'مایکرۆنیدلینگ پێشکەوتوو'},ar:{t:'سيكريت RF',d:'ميكرونيدلينج متقدم'},en:{t:'Secret RF',d:'Advanced microneedling'}},
  {ckb:{t:'HIFU',d:'توند کردنی پێست بەبێ نەشتەرگەری'},ar:{t:'HIFU',d:'شد البشرة بدون جراحة'},en:{t:'HIFU',d:'Non-surgical skin tightening'}},
  {ckb:{t:'کاندێلا تاتۆ',d:'سڕینەوەی تاتۆ'},ar:{t:'كانديلا تاتو',d:'إزالة الوشم'},en:{t:'Candela Tattoo Removal',d:'Professional tattoo removal'}},
  {ckb:{t:'پلاسماجێت',d:'چارەسەری پێست'},ar:{t:'بلازماجيت',d:'علاج البشرة'},en:{t:'Plasmaget',d:'Skin treatment'}},
  {ckb:{t:'دێرماپێن',d:'تازەکردنەوەی پێست'},ar:{t:'درماپن',d:'تجديد البشرة'},en:{t:'Dermapen',d:'Skin renewal microneedling'}}
];

const SECTION_LABELS = {
  ckb:{women:'ئافرەتان',men:'پیاوان',dental:'ددان'},
  ar:{women:'النساء',men:'الرجال',dental:'الأسنان'},
  en:{women:'Women',men:'Men',dental:'Dental'}
};
const SECTION_ANCHORS = {women:'#women',men:'#men',dental:'#dental'};

/* ─────────────────────────────────────────────
   TRANSLATIONS
   ───────────────────────────────────────────── */
const translations = {
  ckb:{
    siteTitle:'سەنتەری جوانکاری سینوهه',navBrand:'سینوهه',siteSub:'سەنتەری جوانکاری سینوهه',siteSubLatin:'BEAUTY CENTER SINUHA',
    navHome:'ماڵەوە',navAbout:'دەربارە',navWomen:'ئافرەتان',navMen:'پیاوان',
    navDental:'ددان',navTech:'تەکنەلۆژیا',navReviews:'ئەنجامەکان',
    navFAQ:'پرسیارەکان',navContact:'پەیوەندی',navContactCta:'پەیوەندی',
    heroLabel:'لە جوانییەوە بۆ چاودێری شاهانە',
    heroTitle:'سینوهه، شکۆی شاهانە ، جوانی مۆدێرن',
    heroLocation:'هەولێر — گەڕەکی ژیان',
    heroDesc:'جوانکاریی پێشکەوتوو، چاودێری پزیشکی، متمانەی راستەقینە.',
    heroCtaBook:'نۆرە بگرم',heroCtaExplore:'خزمەتگوزاریەکان',heroCtaWhatsapp:'واتساپ',
    trust1Title:'ستافی شارەزا',trust1Desc:'چاودێری پڕۆفێشناڵ',
    trust2Title:'تەکنەلۆژیای پێشکەوتووەکان',trust2Desc:'ئامێری نوێ و دڵنیا',
    trust3Title:'سەلامەت و کاریگەر',trust3Desc:'ستانداردی بەرز',
    trust4Title:'ئەنجامی سروشتی',trust4Desc:'جوانییەکەت بە ناسکی',
    aboutLabel:'دەربارەی سینوهه',
    aboutTitle:'سینوهه، شکۆی شاهانە ، جوانی مۆدێرن',
    aboutP1:'سینوهه بەشیوەیەکی پرۆفیشناڵ وزانستی ،جوانکاری پێست ، وراوێژکاری پزیشکیت پێشکەش دەکات',
    aboutP2:'سینوهه سەنتەرێکی پێشەنگ و متمانەپێکراوە بۆ گۆڕینی پێست، زەردەخەنە و بەخشینی متمانەیی بە خۆت',
    aboutCta:'پەیوەندی بکە',
    feat1:'تەکنەلۆژیای پێشکەوتوو',feat2:'ستافی شارەزا',feat3:'متمانەی تەواو',feat4:'ئەنجامی سروشتی',
    catLabel:'بەشەکان',catTitle:'ڕێگای خێرا بۆ هەڵبژاردنی چاودێری گونجاو',
    catNote:'بەشەکان بە شێوەیەکی ڕێکخراو بۆ ئەوەی زۆر خێرا بگەیتە خزمەتگوزارییەکە.',
    catWomen:'ئافرەتان',catWomenDesc:'پێست، جوانکاری، هایدرۆفەیشەڵ و چاودێری تایبەت',
    catMen:'پیاوان',catMenDesc:'لیزەر، PRPی قژ و چاودێری تایبەت بە پیاوان',
    catDental:'ددان',catDentalDesc:'چاودێری ددان، هۆلیوود سمایل، و ڕاوێژکاری',
    womenLabel:'خزمەتگوزارییەکانی ئافرەتان',womenTitle:'چارەسەری پێشکەوتوو بۆ ئافرەتان',
    womenNote:'لیستی تەواوی خزمەتگوزارییە پێشکەوتووەکان بۆ ئافرەتان.',
    menLabel:'خزمەتگوزارییەکانی پیاوان',menTitle:'چارەسەری پێشکەوتوو بۆ پیاوان',
    menNote:'لیستی تەواوی خزمەتگوزارییە پێشکەوتووەکان بۆ پیاوان.',
    dentalLabel:'خزمەتگوزارییەکانی ددان',dentalTitle:'چاودێری ددان و هۆلیوود سمایل',
    dentalNote:'لیستی تەواوی خزمەتگوزارییە دندانییە پێشکەوتووەکان.',
    techLabel:'تەکنەلۆژیا',techTitle:'ئامێر و ڕێکارەکان بە وردی هەڵبژێردراون',
    techNote:'تەکنەلۆژیا لە سینوهه وەک بەشێک لە ڕێکاری جوانکاری بەکاردێت.',
    reviewsLabel:'ئەنجامەکان',reviewsTitle:'هەستێکی باش، ئەنجامێکی دڵنیا',
    test2Text:'بۆ قژم PRPم کرد، ڕاوێژکارییەکە ڕوون و ئەزموونەکە زۆر پاک بوو.',
    test2Initial:'م',test2Name:'محمد ر.',test2Role:'کلیێنی دڵخۆش',
    test3Text:'دوای هایدرۆفەیشەڵ پێستم ڕوونتر و تازەتر بوو. زۆر پێم باش بوو.',
    test3Initial:'ل',test3Name:'لەیلا ع.',test3Role:'کلیێنی دڵخۆش',
    test4Text:'شوێنەکە تەواو هەستێکی جیاوازی هەیە، ئەنجامەکان هێشتا زۆر سروشتی و ناسکن.',
    test4Initial:'ن',test4Name:'نەرگس ح.',test4Role:'کلیێنی دڵخۆش',
    test5Text:'بۆ لیزەری پیاوان هاتم. کاتەکە ڕێکخراو بوو و ستافەکە هەموو هەنگاوێکی بە ڕوونی باس کرد.',
    test5Initial:'ه',test5Name:'هێمن ک.',test5Role:'کلیێنی دڵخۆش',
    faqLabel:'پرسیارە باوەکان',faqTitle:'زۆرترین پرسیارەکان',
    faqQ1:'چۆن نۆرە بگرم؟',faqA1:'پەیوەندیمان پێوە بکە لە ڕێگەی تەلەفۆن یان واتساپ. تیمەکەمان ڕێکخستنی نۆرە بۆت دەکات.',
    faqQ2:'ڕاوێژکاری بەردەستە؟',faqA2:'بەڵێ، ڕاوێژکاری پزیشکی و جوانکاری بەردەستە بۆ هەموو خزمەتگوزارییەکان.',
    faqQ3:'چ تەکنەلۆژیایەک بەکاردێنن؟',faqA3:'سینوهه نوێترین ئامێرەکانی جوانکاری بەکاردەبێ وەک HIFU، لیزەر، PRP، و مۆرفیوس 8.',
    faqQ4:'لیزەر بۆ پیاوان و ئافرەتان هەیە؟',faqA4:'بەڵێ، خزمەتگوزارییەکانی لیزەر بۆ هەردوو پیاوان و ئافرەتان بەردەستە.',
    faqQ5:'چارەسەرەکان بۆ پیاوان و ئافرەتان هەیە؟',faqA5:'بەڵێ، سینوهه بەشێکی تایبەت بۆ پیاوان و بەشێکی تایبەت بۆ ئافرەتان هەیە.',
    bookingLabel:'نۆرە و ڕاوێژکاری',bookingTitle:'چۆن نۆرە بگرم؟',
    bookingDesc:'پەیوەندیمان پێوە بکە بۆ ڕاوێژکاری یان نۆرە.',
    bookingWhatsapp:'واتساپ',bookingContact:'پەیوەندی',
    contactLabel:'پەیوەندی',contactTitle:'بۆ ڕاوێژکاری و نۆرە، بە ئاسانی پەیوەندی بکە',
    contactDesc:'تیمەکەمان بەخێرایی و بە شێوەیەکی ڕێکخراو وەڵامت دەدات.',
    contactPhone:'تەلەفۆن',contactSecondPhone:'ژمارەی دووەم',
    contactLocation:'شوێن',contactMap:'بینین لە گووگڵ مەپ',
    footerDesc:'سەنتەری جوانکاری وپزیشکی وئێستیکی پێشکەوتوو',
    footerQuick:'لینکی خێرا',footerServices:'خزمەتگوزارییە پێشکەوتووەکان',
    footerContact:'پەیوەندی',
    footerCopy:'© 2025 سەنتەری جوانکاری سینوهه. هەموو مافەکان پارێزراون.',
    heroSearchPlaceholder:'خزمەتگوزاری بگەرێ... لیزەر، بۆتۆکس، ددان',
    navSearch:'گەڕان',sh1:'لیزەر',sh2:'بۆتۆکس',sh3:'PRP',sh4:'ددان',sh5:'هایدرۆفەیشەڵ',sh6:'فیلەر'
  },
  ar:{
    siteTitle:'مركز تجميل سينوهه',navBrand:'سينوهه',siteSub:'مركز التجميل سينوهه',siteSubLatin:'BEAUTY CENTER SINUHA',
    navHome:'الرئيسية',navAbout:'من نحن',navWomen:'النساء',navMen:'الرجال',
    navDental:'الأسنان',navTech:'التقنيات',navReviews:'النتائج',
    navFAQ:'الأسئلة',navContact:'التواصل',navContactCta:'تواصل',
    heroLabel:'حيث يلتقي الجمال بالعناية الراقية',
    heroTitle:'سينوهه ، فخامة ملكية ، جمال عصري',
    heroLocation:'أربيل — حي ژیان',
    heroDesc:'تجميل متقدم، رعاية طبية، ثقة فاخرة.',
    heroCtaBook:'احجز موعدي',heroCtaExplore:'اكتشف الخدمات',heroCtaWhatsapp:'واتساب',
    trust1Title:'فريق مختص',trust1Desc:'رعاية احترافية',
    trust2Title:'تقنيات فاخرة',trust2Desc:'أجهزة حديثة وآمنة',
    trust3Title:'آمن وفعال',trust3Desc:'معايير عالية',
    trust4Title:'نتائج طبيعية',trust4Desc:'جمالك بلمسة ناعمة',
    aboutLabel:'عن سينوهه',
    aboutTitle:'سينوهه، فخامة ملكية، جمال عصري',
    aboutP1:'تقدم سينوهه خدمات تجميل البشرة والاستشارات الطبية بأسلوب احترافي وعلمي.',
    aboutP2:'سينوهه مركز رائد وموثوق لتجديد البشرة، تحسين الابتسامة ومنح الثقة بالنفس.',
    aboutCta:'تواصل معنا',
    feat1:'تقنيات متقدمة',feat2:'فريق مختص',feat3:'فضاء فاخر',feat4:'نتائج طبيعية',
    catLabel:'الأقسام',catTitle:'طريق سريع لاختيار العناية المناسبة',
    catNote:'الأقسام منظمة للوصول للخدمة بسرعة.',
    catWomen:'النساء',catWomenDesc:'البشرة، التجميل، الهيدروفيشل والعناية الخاصة',
    catMen:'الرجال',catMenDesc:'ليزر، PRP للشعر وعناية خاصة بالرجال',
    catDental:'الأسنان',catDentalDesc:'عناية الأسنان، ابتسامة هوليوود، والاستشارة',
    womenLabel:'خدمات النساء',womenTitle:'علاجات متقدمة للنساء',
    womenNote:'قائمة كاملة بالخدمات الفاخرة للنساء.',
    menLabel:'خدمات الرجال',menTitle:'علاجات متقدمة للرجال',
    menNote:'قائمة كاملة بالخدمات الفاخرة للرجال.',
    dentalLabel:'خدمات الأسنان',dentalTitle:'عناية الأسنان وابتسامة هوليوود',
    dentalNote:'قائمة كاملة بخدمات الأسنان الفاخرة.',
    techLabel:'التقنيات',techTitle:'أجهزة وإجراءات مختارة بعناية',
    techNote:'في سينوها تستخدم التقنية كجزء من خطة جمالية هادئة.',
    reviewsLabel:'النتائج',reviewsTitle:'شعور جيد ونتيجة موثوقة',
    test2Text:'جربت PRP للشعر، الاستشارة كانت واضحة والتجربة نظيفة جداً.',
    test2Initial:'م',test2Name:'محمد ر.',test2Role:'عميل سعيد',
    test3Text:'بعد الهيدروفيشل أصبحت بشرتي أنقى وأكثر نضارة. تجربة ممتازة.',
    test3Initial:'ل',test3Name:'ليلى ع.',test3Role:'عميلة سعيدة',
    test4Text:'المكان يعطي شعوراً مختلفاً ومميزاً، والنتائج طبيعية وناعمة.',
    test4Initial:'ن',test4Name:'نرجس ح.',test4Role:'عميلة سعيدة',
    test5Text:'أتيت لليزر الخاص بالرجال. الموعد كان منظماً والفريق شرح كل خطوة.',
    test5Initial:'هـ',test5Name:'هيمن ك.',test5Role:'عميل سعيد',
    faqLabel:'الأسئلة الشائعة',faqTitle:'أكثر الأسئلة تكراراً',
    faqQ1:'كيف أحجز موعد؟',faqA1:'تواصل معنا عبر الهاتف أو واتساب. فريقنا سينظم موعداً لك.',
    faqQ2:'هل الاستشارة متاحة؟',faqA2:'نعم، الاستشارة الطبية والتجميلية متاحة لجميع الخدمات.',
    faqQ3:'ما التقنيات المستخدمة؟',faqA3:'سينوها تستخدم أحدث أجهزة مثل HIFU، الليزر، PRP، ومورفيوس 8.',
    faqQ4:'هل الليزر للرجال والنساء؟',faqA4:'نعم، خدمات الليزر متاحة للرجال والنساء.',
    faqQ5:'هل العلاجات للرجال والنساء؟',faqA5:'نعم، سينوها لديها قسم للرجال وقسم للنساء.',
    bookingLabel:'الحجز والاستشارة',bookingTitle:'كيف أحجز موعد؟',
    bookingDesc:'تواصل معنا للاستشارة أو الحجز.',
    bookingWhatsapp:'واتساب',bookingContact:'تواصل',
    contactLabel:'التواصل',contactTitle:'للاستشارة أو الحجز، تواصل معنا بسهولة',
    contactDesc:'فريقنا يرد عليك بسرعة وبطريقة منظمة.',
    contactPhone:'الهاتف',contactSecondPhone:'رقم ثان',
    contactLocation:'الموقع',contactMap:'عرض على خرائط جوجل',
    footerDesc:'مركز متطور للتجميل والطب والخدمات التجميلية الحديثة',
    footerQuick:'روابط سريعة',footerServices:'خدمات فاخرة',
    footerContact:'التواصل',
    footerCopy:'© 2025 مركز تجميل سينوهه. جميع الحقوق محفوظة.',
    heroSearchPlaceholder:'ابحث عن خدمة... ليزر، بوتوكس، أسنان',
    navSearch:'بحث',sh1:'ليزر',sh2:'بوتوكس',sh3:'PRP',sh4:'أسنان',sh5:'هيدروفيشل',sh6:'فيلر'
  },
  en:{
    siteTitle:'Sinuha Beauty Center',navBrand:'Sinuha',siteSub:'SINUHA BEAUTY CENTER',siteSubLatin:'',
    navHome:'Home',navAbout:'About',navWomen:'Women',navMen:'Men',
    navDental:'Dental',navTech:'Technologies',navReviews:'Results',
    navFAQ:'FAQ',navContact:'Contact',navContactCta:'Contact',
    heroLabel:'Where beauty meets royal care',
    heroTitle:'Sinuha, Royal Glory, Modern Beauty',
    heroLocation:'Erbil — Zhyan Dist',
    heroDesc:'Advanced beauty, medical care, premium confidence.',
    heroCtaBook:'Book Now',heroCtaExplore:'Explore Services',heroCtaWhatsapp:'WhatsApp',
    trust1Title:'Expert Team',trust1Desc:'Professional care',
    trust2Title:'Premium Technology',trust2Desc:'Modern safe devices',
    trust3Title:'Safe & Effective',trust3Desc:'High standards',
    trust4Title:'Natural Results',trust4Desc:'Soft refined beauty',
    aboutLabel:'About Sinuha',
    aboutTitle:'Sinuha, Royal Glory, Modern Beauty',
    aboutP1:'Sinuha offers professional and scientific skin care and medical consultation.',
    aboutP2:'Sinuha is a leading trusted center for skin transformation, smiles, and self-confidence.',
    aboutCta:'Contact us',
    feat1:'Advanced Technology',feat2:'Expert Team',feat3:'Premium Space',feat4:'Natural Results',
    catLabel:'Categories',catTitle:'A faster path to the right care',
    catNote:'Organized categories for quick navigation.',
    catWomen:'Women',catWomenDesc:"Skin, beauty, hydrofacial and personal care",
    catMen:'Men',catMenDesc:"Laser, PRP hair and dedicated men's care",
    catDental:'Dental',catDentalDesc:'Dental care, Hollywood smile, and consultation',
    womenLabel:"Women's Services",womenTitle:'Advanced Treatments for Women',
    womenNote:'Complete list of premium services for women.',
    menLabel:"Men's Services",menTitle:'Advanced Treatments for Men',
    menNote:'Complete list of premium services for men.',
    dentalLabel:'Dental Services',dentalTitle:'Dental Care & Hollywood Smile',
    dentalNote:'Complete list of premium dental services.',
    techLabel:'Technology',techTitle:'Devices and procedures chosen with care',
    techNote:'Technology at Sinuha supports calm aesthetic planning.',
    reviewsLabel:'Results',reviewsTitle:'Good feeling, trusted results',
    test2Text:'I tried PRP for hair. The consultation was clear and the experience felt very clean.',
    test2Initial:'M',test2Name:'Mohammed R.',test2Role:'Happy client',
    test3Text:'After Hydrofacial my skin looked clearer and fresher. A beautiful experience.',
    test3Initial:'L',test3Name:'Layla A.',test3Role:'Happy client',
    test4Text:'The place gives a completely different feeling. Results are natural and soft.',
    test4Initial:'N',test4Name:'Narges H.',test4Role:'Happy client',
    test5Text:"I came for men's laser. The appointment was organized and the team explained each step.",
    test5Initial:'H',test5Name:'Hemin K.',test5Role:'Happy client',
    faqLabel:'FAQ',faqTitle:'Frequently Asked Questions',
    faqQ1:'How can I book?',faqA1:'Contact us by phone or WhatsApp. Our team will arrange an appointment.',
    faqQ2:'Is consultation available?',faqA2:'Yes, medical and beauty consultation is available for all services.',
    faqQ3:'What technologies are used?',faqA3:'Sinuha uses the latest devices such as HIFU, Laser, PRP, and Morpheus 8.',
    faqQ4:'Is laser available for men and women?',faqA4:'Yes, laser services are available for both.',
    faqQ5:'Are treatments for men and women?',faqA5:'Yes, Sinuha has a dedicated section for each.',
    bookingLabel:'Booking & Consultation',bookingTitle:'How can I book?',
    bookingDesc:'Contact us for consultation or booking.',
    bookingWhatsapp:'WhatsApp',bookingContact:'Contact',
    contactLabel:'Contact',contactTitle:'For consultation or booking, reach us easily',
    contactDesc:'Our team replies quickly and keeps everything organized.',
    contactPhone:'Phone',contactSecondPhone:'Second number',
    contactLocation:'Location',contactMap:'View on Google Maps',
    footerDesc:'Advanced center for beauty, medicine and modern aesthetic services',
    footerQuick:'Quick links',footerServices:'Premium services',
    footerContact:'Contact',
    footerCopy:'© 2025 Sinuha Beauty Center. All rights reserved.',
    heroSearchPlaceholder:'Search a service... Laser, Botox, Dental',
    navSearch:'Search',sh1:'Laser',sh2:'Botox',sh3:'PRP',sh4:'Dental',sh5:'Hydrofacial',sh6:'Filler'
  }
};

/* ─────────────────────────────────────────────
   SEARCH ENGINE
   ───────────────────────────────────────────── */
function normalizeStr(s){
  return(s||'').toLowerCase()
    .replace(/[\u064B-\u065F]/g,'')
    .replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/[ىي]/g,'ي')
    .replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
}
function scoreService(svc,q,lang){
  let score=0;const nq=normalizeStr(q);if(!nq)return 0;
  const title=normalizeStr(svc[lang]?.title||svc.en.title);
  const desc=normalizeStr(svc[lang]?.desc||svc.en.desc);
  const allKeys=svc.keys.map(normalizeStr).join(' ');
  if(title===nq)score+=20;
  else if(title.includes(nq))score+=14;
  else if(title.split(' ').some(w=>w.startsWith(nq)))score+=10;
  if(desc.includes(nq))score+=6;
  if(allKeys.includes(nq))score+=8;
  else if(allKeys.split(' ').some(w=>w.startsWith(nq)))score+=5;
  ['ckb','ar','en'].forEach(l=>{const t=normalizeStr(svc[l]?.title||'');if(t.includes(nq))score+=4});
  const combined=[title,desc,allKeys].join(' ');
  const words=nq.split(' ').filter(Boolean);
  if(words.length>1){const m=words.filter(w=>combined.includes(w));score+=m.length*2;}
  if(score===0&&nq.length>=3&&combined.includes(nq.slice(0,3)))score+=1;
  return score;
}
function searchServices(query,lang){
  if(!query||!query.trim())return[];
  const tokens=query.trim().split(/\s+/);
  return serviceDict.map(svc=>{
    let maxScore=0;
    tokens.forEach(t=>{const s=scoreService(svc,t,lang);if(s>maxScore)maxScore=s;});
    if(tokens.length>1){const ps=scoreService(svc,query,lang);if(ps>maxScore)maxScore=ps;}
    return{svc,score:maxScore};
  }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,12).map(r=>r.svc);
}
function renderSearchResults(results,lang){
  const container=document.getElementById('searchResults');
  const hints=document.getElementById('searchHints');
  if(!container)return;
  if(!results.length){
    hints&&(hints.style.display='none');
    container.innerHTML=`<p class="search-empty">${lang==='ar'?'لا توجد نتائج':lang==='en'?'No results found':'ئەنجامێک نەدۆزرایەوە'}</p>`;
    return;
  }
  hints&&(hints.style.display='none');
  const labels=SECTION_LABELS[lang]||SECTION_LABELS.ckb;
  const count=lang==='ar'?`${results.length} نتيجة`:lang==='en'?`${results.length} result${results.length!==1?'s':''}`:` ${results.length} ئەنجام`;
  container.innerHTML=`<p class="search-count">${count}</p><div class="search-grid">${results.map(svc=>{
    const t=svc[lang]?.title||svc.en.title;
    const d=svc[lang]?.desc||svc.en.desc;
    const label=labels[svc.section]||svc.section;
    const anchor=SECTION_ANCHORS[svc.section]||'#';
    return`<a href="${anchor}" class="search-card" data-search-card><img src="${svc.img}" alt="${t}" loading="lazy"><div class="search-card-body"><span class="search-card-tag">${label}</span><span class="search-card-title">${t}</span><span class="search-card-desc">${d}</span></div></a>`;
  }).join('')}</div>`;
  container.querySelectorAll('[data-search-card]').forEach(c=>c.addEventListener('click',closeSearch));
}

let searchDebounce=null;
function openSearch(){
  const overlay=document.getElementById('searchOverlay');
  const input=document.getElementById('searchInput');
  const hints=document.getElementById('searchHints');
  if(!overlay)return;
  overlay.classList.add('active');document.body.classList.add('search-open');
  hints&&(hints.style.display='');
  document.getElementById('searchResults').innerHTML='';
  setTimeout(()=>input&&input.focus(),80);
}
function closeSearch(){
  const overlay=document.getElementById('searchOverlay');
  if(!overlay)return;
  overlay.classList.remove('active');document.body.classList.remove('search-open');
  const input=document.getElementById('searchInput');
  if(input)input.value='';
  const hints=document.getElementById('searchHints');
  if(hints)hints.style.display='';
  document.getElementById('searchResults').innerHTML='';
}
function initSearch(){
  const toggleBtn=document.getElementById('searchToggle');
  const closeBtn=document.getElementById('searchClose');
  const input=document.getElementById('searchInput');
  const overlay=document.getElementById('searchOverlay');
  toggleBtn?.addEventListener('click',openSearch);
  closeBtn?.addEventListener('click',closeSearch);
  overlay?.addEventListener('click',e=>{if(e.target===overlay)closeSearch();});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay?.classList.contains('active'))closeSearch();});
  document.getElementById('searchHints')?.querySelectorAll('span').forEach(span=>{
    span.addEventListener('click',()=>{if(!input)return;input.value=span.textContent.trim();input.dispatchEvent(new Event('input'));input.focus();});
  });
  input?.addEventListener('input',()=>{
    clearTimeout(searchDebounce);
    const q=input.value.trim();
    if(!q){const h=document.getElementById('searchHints');if(h)h.style.display='';document.getElementById('searchResults').innerHTML='';return;}
    searchDebounce=setTimeout(()=>{renderSearchResults(searchServices(q,currentLang),currentLang);},160);
  });
  window.addEventListener('sinuha:languagechange',()=>{
    if(!overlay?.classList.contains('active'))return;
    const q=input?.value.trim();
    if(q){renderSearchResults(searchServices(q,currentLang),currentLang);}
    const ph={ckb:'خزمەتگوزاری بگەرێ...',ar:'ابحث عن خدمة...',en:'Search a service...'};
    if(input)input.placeholder=ph[currentLang]||ph.ckb;
  });
}

/* ── LIGHTBOX ── */
function initLightbox(){
  const lb=document.getElementById('lightbox');
  const lbImg=document.getElementById('lightboxImg');
  const lbClose=document.getElementById('lightboxClose');
  if(!lb||!lbImg)return;
  function openLightbox(src,alt){
    lbImg.src=src;lbImg.alt=alt||'';
    lb.classList.add('active');lb.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
  }
  function closeLightbox(){
    lb.classList.remove('active');lb.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
    setTimeout(()=>{lbImg.src='';},350);
  }
  lbClose?.addEventListener('click',closeLightbox);
  lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox();});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('active'))closeLightbox();});
  document.addEventListener('click',e=>{
    const wrap=e.target.closest('.service-card-img-wrap');
    if(wrap){const img=wrap.querySelector('img');if(img){e.preventDefault();openLightbox(img.src,img.alt);}}
  });
}

/* ── LANGUAGE ── */
let currentLang=localStorage.getItem('sinuhaLang')||'ckb';

/* ── CINEMATIC RIPPLE on buttons ── */
function initRipple(){
  document.addEventListener('click',e=>{
    const btn=e.target.closest('.btn,.nav-contact');
    if(!btn)return;
    const r=document.createElement('span');
    const rect=btn.getBoundingClientRect();
    const size=Math.max(rect.width,rect.height)*2;
    r.style.cssText=`
      position:absolute;border-radius:50%;pointer-events:none;
      width:${size}px;height:${size}px;
      left:${e.clientX-rect.left-size/2}px;
      top:${e.clientY-rect.top-size/2}px;
      background:rgba(255,226,164,.18);
      transform:scale(0);opacity:1;
      animation:sinuhaRipple .55s cubic-bezier(.2,.8,.2,1) forwards;
    `;
    btn.style.position='relative';
    btn.style.overflow='hidden';
    btn.appendChild(r);
    r.addEventListener('animationend',()=>r.remove());
  });
}

/* ── STAGGER REVEAL for grids ── */
function staggerReveal(container){
  const items=container.querySelectorAll('.reveal-item');
  items.forEach((el,i)=>{
    el.style.transitionDelay=`${i*55}ms`;
  });
}

/* ── HERO PARALLAX (desktop only, subtle) ── */
function initHeroParallax(){
  const media=document.querySelector('.hero-media');
  if(!media||window.innerWidth<1024)return;
  let ticking=false;
  window.addEventListener('scroll',()=>{
    if(ticking)return;
    requestAnimationFrame(()=>{
      const y=window.scrollY;
      if(y<window.innerHeight){
        media.style.transform=`translateY(${y*0.22}px)`;
      }
      ticking=false;
    });
    ticking=true;
  },{passive:true});
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',()=>{
  initLoading();
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initServices();
  initTech();
  initFAQ();
  initLanguage();
  initReveal();
  initReviewsCarousel();
  initSmoothScroll();
  initSearch();
  initLightbox();
  initRipple();
  initHeroParallax();
});

function initLoading(){
  const loader=document.getElementById('loadingScreen');if(!loader)return;
  const hide=()=>loader.classList.add('done');
  window.addEventListener('load',()=>setTimeout(hide,420),{once:true});
  setTimeout(hide,1600);
}

function initScrollProgress(){
  const fill=document.getElementById('scrollFill');if(!fill)return;
  const update=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    fill.style.width=max>0?`${(window.scrollY/max)*100}%`:'0%';
  };
  update();window.addEventListener('scroll',update,{passive:true});
}

function initNavbar(){
  const navbar=document.getElementById('navbar');if(!navbar)return;
  const update=()=>navbar.classList.toggle('scrolled',window.scrollY>22);
  update();window.addEventListener('scroll',update,{passive:true});
}

function initMobileMenu(){
  const toggle=document.getElementById('navToggle');
  const menu=document.getElementById('navMenu');
  const backdrop=document.getElementById('navBackdrop');
  if(!toggle||!menu||!backdrop)return;
  const close=()=>{
    toggle.classList.remove('active');menu.classList.remove('active');
    backdrop.classList.remove('active');toggle.setAttribute('aria-expanded','false');
    document.body.style.overflow='';
  };
  toggle.addEventListener('click',()=>{
    const open=!menu.classList.contains('active');
    toggle.classList.toggle('active',open);menu.classList.toggle('active',open);
    backdrop.classList.toggle('active',open);
    toggle.setAttribute('aria-expanded',String(open));
    document.body.style.overflow=open?'hidden':'';
  });
  backdrop.addEventListener('click',close);
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
  window.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}

function initLanguage(){
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLang(btn.dataset.lang)));
  setLang(currentLang);
}

function setLang(lang){
  const t=translations[lang]||translations.ckb;
  currentLang=lang;localStorage.setItem('sinuhaLang',lang);
  document.documentElement.lang=lang;
  document.documentElement.dir='rtl';
  document.title=t.siteTitle;
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key=el.dataset.key;
    if(Object.prototype.hasOwnProperty.call(t,key))el.textContent=t[key];
  });
  const si=document.getElementById('searchInput');
  if(si){const ph={ckb:'خزمەتگوزاری بگەرێ...',ar:'ابحث عن خدمة...',en:'Search a service...'};si.placeholder=ph[lang]||ph.ckb;}
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  renderServiceGrids();
  window.dispatchEvent(new CustomEvent('sinuha:languagechange'));
}

function initReveal(){
  const items=document.querySelectorAll('.reveal-item');
  if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('visible'));return;}
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  items.forEach(i=>obs.observe(i));
}

function observeNewItems(container){
  if(!('IntersectionObserver' in window)){
    container.querySelectorAll('.reveal-item').forEach(el=>el.classList.add('visible'));return;
  }
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    });
  },{threshold:0.06,rootMargin:'0px 0px -30px 0px'});
  container.querySelectorAll('.reveal-item').forEach((el,i)=>{
    el.style.transitionDelay=`${i*50}ms`;
    obs.observe(el);
  });
}

function renderServiceCard(svc,lang){
  const labels=SECTION_LABELS[lang]||SECTION_LABELS.ckb;
  const title=svc[lang]?.title||svc.en.title;
  const desc=svc[lang]?.desc||svc.en.desc;
  const tag=labels[svc.section]||svc.section;
  return`<article class="service-card reveal-item"><div class="service-card-img-wrap"><img src="${svc.img}" alt="${title}" loading="lazy"></div><div class="service-body"><span class="service-tag">${tag}</span><h3>${title}</h3><p>${desc}</p></div></article>`;
}

function renderServiceGrids(){
  const lang=currentLang;
  ['women','men','dental'].forEach(section=>{
    const grid=document.getElementById(section+'Grid');
    if(!grid)return;
    const items=serviceDict.filter(s=>s.section===section);
    grid.innerHTML=items.map(s=>renderServiceCard(s,lang)).join('');
    observeNewItems(grid);
  });
}

function initServices(){}

function initTech(){
  const container=document.getElementById('techScroll');if(!container)return;
  const render=()=>{
    const lang=currentLang;
    let html=techList.map(t=>{
      const data=t[lang]||t.en;
      return`<article class="tech-card"><span class="tech-icon"><svg viewBox="0 0 24 24"><path d="M12 2v20M5 7l14 10M19 7 5 17"/></svg></span><h3>${data.t}</h3><p>${data.d}</p></article>`;
    }).join('');
    container.innerHTML=html+html;
  };
  render();
  window.addEventListener('sinuha:languagechange',render);
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion)container.style.animation='none';
}

function initFAQ(){
  const container=document.getElementById('faqList');if(!container)return;
  let html='';
  for(let i=1;i<=5;i++){
    html+=`<div class="faq-item reveal-item"><button class="faq-question" aria-expanded="false"><span data-key="faqQ${i}"></span><span class="faq-icon">+</span></button><div class="faq-answer"><div><p data-key="faqA${i}"></p></div></div></div>`;
  }
  container.innerHTML=html;
  container.querySelectorAll('.faq-question').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=btn.closest('.faq-item');
      const open=!item.classList.contains('open');
      container.querySelectorAll('.faq-item').forEach(el=>el.classList.remove('open'));
      if(open)item.classList.add('open');
      btn.setAttribute('aria-expanded',String(open));
    });
  });
}

function initReviewsCarousel(){
  const carousel=document.querySelector('[data-review-carousel]');
  const track=document.querySelector('[data-review-track]');
  const prev=document.querySelector('[data-review-prev]');
  const next=document.querySelector('[data-review-next]');
  if(!carousel||!track)return;
  const cards=Array.from(track.querySelectorAll('.review-card'));if(!cards.length)return;
  let index=0,timer=null;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cardStep=()=>{const f=cards[0].getBoundingClientRect();const gap=Number.parseFloat(getComputedStyle(track).columnGap||'0');return f.width+gap;};
  const goTo=n=>{index=(n+cards.length)%cards.length;carousel.scrollTo({left:index*cardStep(),behavior:reduceMotion?'auto':'smooth'});};
  const start=()=>{if(reduceMotion||timer)return;timer=window.setInterval(()=>goTo(index+1),5200);};
  const stop=()=>{if(timer){window.clearInterval(timer);timer=null;}};
  prev?.addEventListener('click',()=>{stop();goTo(index-1);start();});
  next?.addEventListener('click',()=>{stop();goTo(index+1);start();});
  carousel.addEventListener('pointerenter',stop);carousel.addEventListener('pointerleave',start);
  carousel.addEventListener('focusin',stop);carousel.addEventListener('focusout',start);
  window.addEventListener('resize',()=>goTo(index),{passive:true});
  start();
}

function initSmoothScroll(){
  const links=document.querySelectorAll('a[href^="#"]');
  const navLinks=document.querySelectorAll('.nav-link');
  const sections=document.querySelectorAll('main section[id]');
  links.forEach(link=>{
    link.addEventListener('click',e=>{
      const sel=link.getAttribute('href');
      if(!sel||sel==='#')return;
      const target=document.querySelector(sel);
      if(!target)return;
      e.preventDefault();
      window.scrollTo({top:target.offsetTop-70,behavior:'smooth'});
    });
  });
  const updateActive=()=>{
    let current='home';
    sections.forEach(s=>{if(window.scrollY>=s.offsetTop-138)current=s.id;});
    navLinks.forEach(l=>{l.classList.toggle('active',l.getAttribute('href')===`#${current}`);});
  };
  updateActive();window.addEventListener('scroll',updateActive,{passive:true});
}

/* ─────────────────────────────────────────────
   EMOTIONAL SECTION OBSERVER
   Adds .visible to sections + .in-view to .section elements
   ───────────────────────────────────────────── */
(function initEmotionalObserver(){
  if(!('IntersectionObserver' in window))return;

  /* Add .visible to: reviews-shell, contact-premium, about-visual,
     about-copy, contact-copy, booking-premium, footer */
  const emotionalTargets = [
    '.reviews-shell',
    '.contact-premium',
    '.contact-copy',
    '.about-visual',
    '.about-copy',
    '.booking-premium',
    '.footer'
  ];

  const obsEmotion = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obsEmotion.unobserve(e.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -30px 0px'});

  document.addEventListener('DOMContentLoaded',()=>{
    emotionalTargets.forEach(sel=>{
      document.querySelectorAll(sel).forEach(el=>obsEmotion.observe(el));
    });

    /* Section line animation — add .in-view to .section elements */
    const obsSection = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in-view');
          obsSection.unobserve(e.target);
        }
      });
    },{threshold:0.05});
    document.querySelectorAll('.section').forEach(s=>obsSection.observe(s));
  });
})();
