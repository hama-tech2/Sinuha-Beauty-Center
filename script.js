/* ════════════════════════════════════════════════════
   SINUHA BEAUTY CENTER — script.js
   Full Search System + Service Dictionary + All UI
   ════════════════════════════════════════════════════ */

/* ── SERVICE DICTIONARY ───────────────────────────── */
const serviceDict = [
  /* ════ WOMEN ════ */
  { id:'w2', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-fractional-co2.webp?raw=true',
    ckb:{title:'فراکشنال CO2',desc:'چارەسەری ئاسەواری زیپکە و نوێبوونەوەی پێست.'},
    ar:{title:'فراكشنال CO2',desc:'علاج آثار حب الشباب وتجديد البشرة.'},
    en:{title:'Fractional CO2',desc:'Acne scar treatment and skin renewal.'},
    keys:['fractional','co2','laser','acne','scar','renewal','resurfacing','پێست','ئەکنە','لیزەر','CO2','تجديد','بشرة','ليزر'] },

  { id:'w4', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-hifu.webp.png?raw=true',
    ckb:{title:'HIFU',desc:'توند کردنی پێست.'},
    ar:{title:'HIFU',desc:'شد البشرة.'},
    en:{title:'HIFU',desc:'Skin tightening.'},
    keys:['hifu','lift','tighten','ultrasound','skin','noninvasive','توند کردن','پێست','شد','بشرة'] },

  { id:'w5', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-microneedling3.png?raw=true',
    ckb:{title:'مایکرۆنیدلینگ',desc:'تازەکردنەوەی تەکسچەری پێست.'},
    ar:{title:'ميكرونيدلينج',desc:'تجديد ملمس البشرة.'},
    en:{title:'Microneedling',desc:'Skin texture renewal.'},
    keys:['microneedling','needle','texture','skin','collagen','مایکرۆ','پێست','ميكرو','بشرة','ابر'] },

  { id:'w6', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-chemical-peeling3.png?raw=true',
    ckb:{title:'کیمیاوی پێست',desc:'تەقشیر کیمیایی پێست. لابردنی چینی مردووەکەی پێست.'},
    ar:{title:'التقشير الكيميائي',desc:'إزالة الطبقة الميتة من البشرة.'},
    en:{title:'Chemical Peeling',desc:'Deep cleansing and dead cell removal.'},
    keys:['chemical','peel','peeling','acid','exfoliation','skin','کیمیاوی','تقشير','بشرة','حمض','تنظيف'] },

  { id:'w7', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-morpheus-8.webp.png?raw=true',
    ckb:{title:'مۆرفیوس 8',desc:'لادانی ئاسەواری زیپکە و هاندانی کۆلاجین.'},
    ar:{title:'مورفيوس 8',desc:'إزالة آثار حب الشباب وتحفيز الكولاجين.'},
    en:{title:'Morpheus 8',desc:'Acne scar removal and collagen stimulation.'},
    keys:['morpheus','morpheus8','rf','radiofrequency','collagen','tighten','lift','مۆرفیوس','کۆلاژن','مورفيوس','كولاجين','شد'] },

  { id:'w8', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-carbon-peeling3.png?raw=true',
    ckb:{title:'تەقشیر کاربۆنی پێست',desc:'بچووک کردنی کونیلە و هاندانی کۆلاجین.'},
    ar:{title:'تقشير كاربوني',desc:'سد المسامات وتحفيز الكولاجين.'},
    en:{title:'Carbon Peeling',desc:'Pore reduction and collagen stimulation.'},
    keys:['carbon','peel','blackhead','glow','shine','laser','کاربۆن','تقشير','كربون','إشراقة','تنظيف'] },

  { id:'w10', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-pdrn2.png?raw=true',
    ckb:{title:'PDRN',desc:'پشتگیری نوێبوونەوەی پێست.'},
    ar:{title:'PDRN',desc:'دعم تجديد البشرة.'},
    en:{title:'PDRN',desc:'Skin renewal support.'},
    keys:['pdrn','polynucleotide','dna','skin','repair','PDRN','پێست','بشرة','ترميم','DNA'] },

  { id:'w11', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-pologen.webp.png?raw=true',
    ckb:{title:'پۆڵۆجین',desc:'سپی بوونەوە و پاک کردنی پێست لە قولایی.'},
    ar:{title:'بولوجين',desc:'تنظيف وتوحيد لون البشرة.'},
    en:{title:'Pologen',desc:'Skin brightening and deep cleansing.'},
    keys:['pologen','lift','tighten','skin','radiofrequency','پۆلۆگین','پۆڵۆجین','بولوجين','بشرة'] },

  { id:'w12', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-profhilo-premium3.png?raw=true',
    ckb:{title:'پڕۆفایلۆ',desc:'باشترین دەرزی لێفتینگ و شیدارکردنەوە.'},
    ar:{title:'بروفايلو',desc:'أفضل إبرة لشد البشرة والنضارة.'},
    en:{title:'Profhilo',desc:'Best lifting needle for radiance.'},
    keys:['profhilo','hyaluronic','hydrate','hydration','lift','skin','پڕۆفایلۆ','بروفايلو','ترطيب','بشرة'] },

  { id:'w13', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-underarm-whitening3.png?raw=true',
    ckb:{title:'ڕووناككردنی بژێر',desc:'سپئ بوونەوەی بن باڵ و ناوچەی هەستیار. یەک رەنگ کردنی پێست بە نوێترین تەکنیک.'},
    ar:{title:'تفتيح الإبط',desc:'علاج المناطق الحساسة.'},
    en:{title:'Underarm Brightening',desc:'Sensitive area treatment.'},
    keys:['underarm','whitening','brightening','armpit','lighten','بژێر','ڕووناک','إبط','تفتيح','جسم'] },

  { id:'w14', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/imageswomen-hydrafacial.webp3.png?raw=true',
    ckb:{title:'هایدرۆفەیشەڵ',desc:'پاككردنەوە و هیدراتەکردنی پێست.'},
    ar:{title:'هيدروفيشل',desc:'تنظيف وترطيب البشرة.'},
    en:{title:'Hydrofacial',desc:'Cleansing and skin hydration.'},
    keys:['hydrofacial','hydra','facial','deep cleanse','pore','skin','هایدرۆ','فەیشەڵ','هيدرو','فيشيال','وجه','تنظيف'] },

  { id:'w15', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-secret-rf.webp3.png?raw=true',
    ckb:{title:'سیکرێت RF',desc:'مایکرۆنیدلینگی RF بۆ تازەکردنەوە.'},
    ar:{title:'سيكريت RF',desc:'ميكرونيدلينج RF للتجديد.'},
    en:{title:'Secret RF',desc:'RF microneedling for renewal.'},
    keys:['secret','rf','radiofrequency','microneedling','collagen','skin','سیکرێت','RF','سيكريت','كولاجين','بشرة'] },

  { id:'w16', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-skin-rejuvenation3.png?raw=true',
    ckb:{title:'تازەکردنەوەی پێست',desc:'شادابی و ڕووناکی سروشتی.'},
    ar:{title:'تجديد البشرة',desc:'إشراقة وحيوية طبيعية.'},
    en:{title:'Skin Rejuvenation',desc:'Natural brightness and vitality.'},
    keys:['rejuvenation','glow','radiance','skin','tazakrdnawa','تازەکردنەوە','پێست','تجديد','إشراقة','بشرة','نضارة'] },

  { id:'w17', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-skin-whitening-premium3.png?raw=true',
    ckb:{title:'سپی بوونەوەی پێست',desc:'سپی بوونەوەی پێست و یەک رەنگ کردنی.'},
    ar:{title:'تفتيح البشرة',desc:'تفتيح البشرة وتوحيد اللون.'},
    en:{title:'Skin Brightening',desc:'Even tone and glow.'},
    keys:['brightening','whitening','skin','tone','even','lighten','سپی','پێست','تفتيح','بشرة','لون'] },

  { id:'w18', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-acne-treatment2.png?raw=true',
    ckb:{title:'چارەسەری زیپکە',desc:'بن بر کردنی زیپکەی ئەکتیڤ.'},
    ar:{title:'علاج حب الشباب',desc:'إزالة الحبوب النشطة.'},
    en:{title:'Acne Treatment',desc:'Active pimple removal.'},
    keys:['acne','pimple','blemish','treatment','skin','پێست','زیپکە','حب الشباب','بشرة','علاج'] },

  { id:'w20', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-lip-rose3.png?raw=true',
    ckb:{title:'لێب ڕۆز',desc:'ڕووناکی و شێوەیەکی سروشتی.'},
    ar:{title:'ليب روز',desc:'إشراقة وشكل طبيعي.'},
    en:{title:'Lip Rose',desc:'Natural brightness and shape.'},
    keys:['lip','lips','rose','blush','colour','pink','لێب','ڕۆز','شفاه','لون','ورديه'] },

  { id:'w21', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-filler.webp.png?raw=true',
    ckb:{title:'فیلەر',desc:'هاوسەنگکردنی ڕوخسار.'},
    ar:{title:'فيلر',desc:'توازن ملامح الوجه.'},
    en:{title:'Filler',desc:'Facial balance.'},
    keys:['filler','hyaluronic','lip','cheek','face','volume','فیلەر','ڕوخسار','فيلر','وجه','حجم','شفاه'] },

  { id:'w22', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-fat-dissolving3.png?raw=true',
    ckb:{title:'تواندنەوەی چەوری',desc:'دەرزی تایبەت بە شیکردنەوەی خانەی چەوری.'},
    ar:{title:'إذابة الدهون',desc:'إبر خاصة لتفتيت الخلايا الدهنية.'},
    en:{title:'Fat Dissolving',desc:'Special needles for breaking down fat cells.'},
    keys:['fat','dissolve','lipolysis','slim','contour','body','چەوری','تواندنەوە','دهون','تخسيس','رسم'] },

  { id:'w23', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-botox3.png?raw=true',
    ckb:{title:'بۆتۆکس',desc:'کەم کردنەوەی هێلی رووخسار و نەهێشتنی وردە لۆچی.'},
    ar:{title:'بوتوكس',desc:'تقليل خطوط الوجه وإزالة التجاعيد الدقيقة.'},
    en:{title:'Botox',desc:'Reducing facial lines and fine wrinkles.'},
    keys:['botox','botulinum','wrinkle','line','forehead','brow','بۆتۆکس','رووخسار','بوتوكس','تجاعيد','خطوط','جبهة'] },

  { id:'w24', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-prp-hair3.png?raw=true',
    ckb:{title:'PRP قژ',desc:'پشتگیری بەهێزکردنی قژ.'},
    ar:{title:'PRP شعر',desc:'دعم تقوية الشعر.'},
    en:{title:'PRP Hair',desc:'Hair strengthening support.'},
    keys:['prp','platelet','hair','growth','loss','scalp','قژ','PRP','شعر','بلازما','نمو','تساقط'] },

  { id:'w25', section:'women', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/women-laser-hair-removal.webp4.png?raw=true',
    ckb:{title:'لەیزەری لادانی موو',desc:'لەیزەری لادانی موو بە نوێترین ئامێر.'},
    ar:{title:'ليزر إزالة الشعر',desc:'أحدث أجهزة إزالة الشعر بالليزر.'},
    en:{title:'Laser Hair Removal',desc:'Latest laser hair removal devices.'},
    keys:['laser','hair removal','body','diode','alexandrite','لیزەر','سڕینەوە','قژ','ليزر','إزالة شعر','جسم'] },

  /* ════ MEN ════ */
  { id:'m1', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-luxury-care-ad.webp.png?raw=true',
    ckb:{title:'چاودێری پریمیمی پیاوان',desc:'ئەزموونی پریمیم بۆ پیاوان.'},
    ar:{title:'عناية فاخرة للرجال',desc:'تجربة فاخرة للرجال.'},
    en:{title:"Men's Premium Care",desc:'Premium experience for men.'},
    keys:['men','male','premium','care','luxury','پیاوان','چاودێری','رجال','عناية','فاخرة'] },

  { id:'m2', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-advanced-technology.webp.png?raw=true',
    ckb:{title:'تەکنەلۆژیای پێشکەوتوو',desc:'ئامێری نوێترین تەکنەلۆژیا.'},
    ar:{title:'تقنيات متقدمة',desc:'أحدث أجهزة التجميل.'},
    en:{title:'Advanced Technology',desc:'Latest beauty technology devices.'},
    keys:['technology','advanced','device','modern','men','تەکنەلۆژیا','پیاوان','تقنية','أجهزة'] },

  { id:'m3', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-prp-hair.webp.png?raw=true',
    ckb:{title:'PRP قژی پیاوان',desc:'پشتگیری بەهێزکردن و نوێبوونەوەی قژ.'},
    ar:{title:'PRP شعر الرجال',desc:'دعم تقوية وتجديد الشعر.'},
    en:{title:'PRP Hair for Men',desc:'Hair strengthening and renewal.'},
    keys:['prp','platelet','hair','men','growth','loss','bald','قژ','PRP','پیاوان','شعر رجال','بلازما','نمو','صلع'] },

  { id:'m4', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-beard-line-laser.webp.png?raw=true',
    ckb:{title:'لیزەری ڕیش',desc:'دیزاینی هێڵی ڕیش بە لیزەر.'},
    ar:{title:'ليزر اللحية',desc:'تصميم خط اللحية بالليزر.'},
    en:{title:'Beard Laser',desc:'Beard line design with laser.'},
    keys:['beard','laser','design','line','men','ریش','لیزەر','لحية','ليزر','تصميم'] },

  { id:'m5', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-hair-treatment.webp.png?raw=true',
    ckb:{title:'چارەسەری قژ',desc:'پلانی تایبەت بۆ چاودێری قژ.'},
    ar:{title:'علاج الشعر',desc:'خطة خاصة لعناية الشعر.'},
    en:{title:'Hair Treatment',desc:'Dedicated hair care plan.'},
    keys:['hair','treatment','scalp','care','men','قژ','چارەسەر','شعر','علاج','عناية','رجال'] },

  { id:'m6', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-fractional-co2.webp.png?raw=true',
    ckb:{title:'فراکشنال CO2',desc:'چارەسەری پێستی پیاوان.'},
    ar:{title:'فراكشنال CO2',desc:'علاج بشرة الرجال.'},
    en:{title:'Fractional CO2',desc:"Men's skin treatment."},
    keys:['fractional','co2','laser','skin','men','acne','فراکشنال','CO2','پیاوان','ليزر','بشرة رجال'] },

  { id:'m7', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-carbon-peel.webp.png?raw=true',
    ckb:{title:'تەقشیر کاربۆنی پێست',desc:'بچووک کردنی کونیلە و هاندانی کۆلاجین.'},
    ar:{title:'تقشير كاربوني',desc:'سد المسامات وتحفيز الكولاجين.'},
    en:{title:'Carbon Peeling',desc:'Pore reduction and collagen stimulation.'},
    keys:['carbon','peel','blackhead','men','glow','کاربۆن','پیاوان','كربون','تنظيف','رجال'] },

  { id:'m8', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-chest-laser.webp.png?raw=true',
    ckb:{title:'لەیزەرئ سینگ',desc:'بن بر کردنی مووی پشت و سنگ.'},
    ar:{title:'ليزر الصدر والظهر',desc:'إزالة شعر الصدر والظهر.'},
    en:{title:'Chest & Back Laser',desc:'Chest and back hair removal.'},
    keys:['chest','back','laser','hair removal','men','body','سینگ','لیزەر','صدر','ظهر','ليزر','إزالة شعر'] },

  { id:'m9', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-neck-laser.webp.png?raw=true',
    ckb:{title:'لەیزەری مل',desc:'بن بر کردنی مووی مل.'},
    ar:{title:'ليزر الرقبة',desc:'إزالة شعر الرقبة.'},
    en:{title:'Neck Laser',desc:'Neck hair removal.'},
    keys:['neck','laser','hair removal','men','مل','لیزەر','رقبة','ليزر','إزالة شعر'] },

  { id:'m10', section:'men', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/men-full-body-laser3.png?raw=true',
    ckb:{title:'لیزەری لەشی تەواو',desc:'لیزەری خێرا بۆ لەشی تەواو.'},
    ar:{title:'ليزر الجسم الكامل',desc:'ليزر سريع للجسم الكامل.'},
    en:{title:'Full Body Laser',desc:'Fast full body laser.'},
    keys:['full body','laser','hair removal','full','men','لەشی تەواو','لیزەر','جسم كامل','ليزر','إزالة شعر كامل'] },

  /* ════ DENTAL ════ */
  { id:'d1', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-luxury-care.webp?raw=true',
    ckb:{title:'چاودێری ددان',desc:'چاودێری پریمیمی ددان.'},
    ar:{title:'عناية الأسنان',desc:'عناية فاخرة بالأسنان.'},
    en:{title:'Dental Care',desc:'Premium dental care.'},
    keys:['dental','care','teeth','tooth','ددان','چاودێری','أسنان','عناية','سن'] },

  { id:'d2', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-before-after.webp?raw=true',
    ckb:{title:'پێش و پاش',desc:'ئەنجامی چارەسەری ددان.'},
    ar:{title:'قبل وبعد',desc:'نتائج علاج الأسنان.'},
    en:{title:'Before & After',desc:'Dental treatment results.'},
    keys:['before after','results','dental','teeth','transformation','پێش و پاش','ددان','قبل وبعد','نتائج'] },

  { id:'d3', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-pediatric-dentistry.webp?raw=true',
    ckb:{title:'چارەسەری منداڵان',desc:'چاودێری تایبەت بە ددانە منداڵان.'},
    ar:{title:'علاج أسنان الأطفال',desc:'عناية خاصة بأسنان الأطفال.'},
    en:{title:'Pediatric Dentistry',desc:"Specialized children's dental care."},
    keys:['pediatric','children','kids','dental','teeth','منداڵان','ددان','أطفال','أسنان أطفال'] },

  { id:'d4', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-extraction.webp.png?raw=true',
    ckb:{title:'هەڵکێشانی ددان',desc:'کێشانەوەی ددان بە شێوەیە پزیشکی.'},
    ar:{title:'خلع الأسنان',desc:'خلع الأسنان طبياً.'},
    en:{title:'Extraction',desc:'Professional tooth extraction.'},
    keys:['extraction','remove','tooth','dental','ددان','هەڵکێشان','خلع','سن','أسنان'] },

  { id:'d5', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-dental-implant.webp?raw=true',
    ckb:{title:'چاندنەوەی ددان',desc:'چاندنەوەی ددان بە باشترین براندی جیهانی.'},
    ar:{title:'زراعة الأسنان',desc:'زراعة الأسنان بأفضل الماركات العالمية.'},
    en:{title:'Dental Implant',desc:'Tooth implantation with best global brands.'},
    keys:['implant','dental','tooth','crown','زراعة','ددان','چاندنەوە','أسنان','تاج'] },

  { id:'d6', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-consultation.webp?raw=true',
    ckb:{title:'ڕاوێژکاری ددان',desc:'شیکاری و پلانی چارەسەری.'},
    ar:{title:'استشارة أسنان',desc:'تحليل وخطة علاج.'},
    en:{title:'Consultation',desc:'Analysis and treatment planning.'},
    keys:['consultation','plan','dental','check','ڕاوێژکاری','ددان','استشارة','فحص','أسنان'] },

  { id:'d7', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/premium-root-canal-treatment.webp.png?raw=true',
    ckb:{title:'چارەسەری ڕەگی ددان',desc:'چارەسەری ڕەگی ددان.'},
    ar:{title:'علاج الجذور',desc:'علاج قنوات الجذور.'},
    en:{title:'Root Canal',desc:'Root canal treatment.'},
    keys:['root canal','nerve','tooth','pain','ڕەگ','ددان','جذور','قناة','سن','ألم'] },

  { id:'d8', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/premium-dental-filling-treatment.webp.png?raw=true',
    ckb:{title:'پڕکردنەوەی ددان',desc:'پڕکردنەوەی ددان بە مادەی باکوور.'},
    ar:{title:'حشو الأسنان',desc:'حشو الأسنان بالمواد الحديثة.'},
    en:{title:'Filling',desc:'Modern dental filling.'},
    keys:['filling','cavity','composite','tooth','ددان','پڕکردنەوە','حشو','سن','تجويف'] },

  { id:'d9', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-whitening.webp.png?raw=true',
    ckb:{title:'سپی کردنەوەی ددان',desc:'سپی کردنەوەی ددان بە شێوەیە پزیشکی.'},
    ar:{title:'تبييض الأسنان',desc:'تبييض أسنان طبي.'},
    en:{title:'Whitening',desc:'Medical teeth whitening.'},
    keys:['whitening','bleaching','teeth','white','smile','سپی','ددان','تبييض','أسنان','ابتسامة'] },

  { id:'d10', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-veneers.webp.png?raw=true',
    ckb:{title:'ڤینیر',desc:'دیزاینی ددان بە ڤینیر.'},
    ar:{title:'فينير',desc:'تصميم الأسنان بالفينير.'},
    en:{title:'Veneers',desc:'Dental design with veneers.'},
    keys:['veneer','porcelain','smile','design','teeth','ڤینیر','ددان','فينير','أسنان','تصميم'] },

  { id:'d11', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-braces.webp.png?raw=true',
    ckb:{title:'تێل دانان',desc:'ڕاستکردنەوەی ددان.'},
    ar:{title:'تركيب التقويم',desc:'تقويم وتصحيح الأسنان.'},
    en:{title:'Braces',desc:'Teeth alignment and correction.'},
    keys:['braces','orthodontic','align','teeth','metal','clear','تێل','ددان','تقويم','أسنان','اصلاح'] },

  { id:'d12', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-hollywood-smile.webp.png?raw=true',
    ckb:{title:'هۆلیوود سمایل',desc:'پێکەنینێکی ڕوون و گونجاو.'},
    ar:{title:'ابتسامة هوليوود',desc:'ابتسامة مشرقة ومناسبة.'},
    en:{title:'Hollywood Smile',desc:'Bright, suitable smile design.'},
    keys:['hollywood','smile','design','celebrity','teeth','perfect','هۆلیوود','سمایل','ابتسامة هوليوود','أسنان','تصميم'] },

  { id:'d13', section:'dental', img:'https://github.com/hama-tech2/Sinuha-Beauty-Center/blob/main/teeth-cleaning.webp.png?raw=true',
    ckb:{title:'پاككردنەوەی ددان',desc:'پاككردنەوەی پیشەیی.'},
    ar:{title:'تنظيف الأسنان',desc:'تنظيف احترافي.'},
    en:{title:'Cleaning',desc:'Professional dental cleaning.'},
    keys:['cleaning','scale','polish','teeth','tartar','plaque','پاك','ددان','تنظيف','أسنان','جير'] }
];

/* Section label helpers */
const SECTION_LABELS = {
  ckb: { women:'ئافرەتان', men:'پیاوان', dental:'ددان' },
  ar:  { women:'النساء', men:'الرجال', dental:'الأسنان' },
  en:  { women:'Women', men:'Men', dental:'Dental' }
};
const SECTION_ANCHORS = { women:'#women', men:'#men', dental:'#dental' };

/* ── SEARCH ENGINE ───────────────────────────────────── */
function normalizeStr(s) {
  return (s || '').toLowerCase()
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىي]/g, 'ي')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreService(svc, q, lang) {
  let score = 0;
  const nq = normalizeStr(q);
  if (!nq) return 0;

  const title = normalizeStr(svc[lang]?.title || svc.en.title);
  const desc  = normalizeStr(svc[lang]?.desc  || svc.en.desc);
  const allKeys = svc.keys.map(normalizeStr).join(' ');

  if (title === nq) score += 20;
  else if (title.includes(nq)) score += 14;
  else if (title.split(' ').some(w => w.startsWith(nq))) score += 10;

  if (desc.includes(nq)) score += 6;
  if (allKeys.includes(nq)) score += 8;
  else if (allKeys.split(' ').some(w => w.startsWith(nq))) score += 5;

  ['ckb','ar','en'].forEach(lng => {
    const t = normalizeStr(svc[lng]?.title || '');
    if (t.includes(nq)) score += 4;
  });

  const combined = [title, desc, allKeys].join(' ');
  const words = nq.split(' ').filter(Boolean);
  if (words.length > 1) {
    const matched = words.filter(w => combined.includes(w));
    score += matched.length * 2;
  }

  if (score === 0 && nq.length >= 3) {
    if (combined.includes(nq.slice(0, 3))) score += 1;
  }

  return score;
}

function searchServices(query, lang) {
  if (!query || !query.trim()) return [];
  const tokens = query.trim().split(/\s+/);

  return serviceDict.map(svc => {
    let maxScore = 0;
    tokens.forEach(token => {
      const s = scoreService(svc, token, lang);
      if (s > maxScore) maxScore = s;
    });
    if (tokens.length > 1) {
      const phraseScore = scoreService(svc, query, lang);
      if (phraseScore > maxScore) maxScore = phraseScore;
    }
    return { svc, score: maxScore };
  })
  .filter(r => r.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 12)
  .map(r => r.svc);
}

/* ── RENDER SEARCH RESULTS ───────────────────────────── */
function renderSearchResults(results, lang) {
  const container = document.getElementById('searchResults');
  if (!container) return;

  if (!results.length) {
    container.innerHTML = `<p class="search-empty" data-key="searchNoResults">${
      lang === 'ar' ? 'لا توجد نتائج' : lang === 'en' ? 'No results found' : 'ئەنجامێک نەدۆزرایەوە'
    }</p>`;
    return;
  }

  const labels = SECTION_LABELS[lang] || SECTION_LABELS.ckb;
  const count = lang === 'ar'
    ? `${results.length} نتيجة`
    : lang === 'en'
    ? `${results.length} result${results.length !== 1 ? 's' : ''}`
    : `${results.length} ئەنجام`;

  container.innerHTML = `
    <p class="search-count">${count}</p>
    <div class="search-grid">
      ${results.map(svc => {
        const t = svc[lang]?.title || svc.en.title;
        const d = svc[lang]?.desc  || svc.en.desc;
        const label = labels[svc.section] || svc.section;
        const anchor = SECTION_ANCHORS[svc.section] || '#';
        return `
          <a href="${anchor}" class="search-card" data-search-card>
            <img src="${svc.img}" alt="${t}" loading="lazy">
            <div class="search-card-body">
              <span class="search-card-tag">${label}</span>
              <span class="search-card-title">${t}</span>
              <span class="search-card-desc">${d}</span>
            </div>
          </a>`;
      }).join('')}
    </div>`;

  container.querySelectorAll('[data-search-card]').forEach(card => {
    card.addEventListener('click', () => closeSearch());
  });
}

/* ── SEARCH UI ───────────────────────────────────────── */
let searchDebounce = null;

function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.classList.add('search-open');
  document.getElementById('searchResults').innerHTML = '';
  setTimeout(() => input && input.focus(), 80);
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.classList.remove('search-open');
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function initSearch() {
  const toggleBtn  = document.getElementById('searchToggle');
  const closeBtn   = document.getElementById('searchClose');
  const input      = document.getElementById('searchInput');
  const overlay    = document.getElementById('searchOverlay');

  toggleBtn?.addEventListener('click', openSearch);
  closeBtn?.addEventListener('click', closeSearch);

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeSearch();
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay?.classList.contains('active')) closeSearch();
  });

  input?.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    const q = input.value.trim();
    if (!q) {
      document.getElementById('searchResults').innerHTML = '';
      return;
    }
    searchDebounce = setTimeout(() => {
      const results = searchServices(q, currentLang);
      renderSearchResults(results, currentLang);
    }, 180);
  });

  window.addEventListener('sinuha:languagechange', () => {
    if (!overlay?.classList.contains('active')) return;
    const q = input?.value.trim();
    if (q) {
      const results = searchServices(q, currentLang);
      renderSearchResults(results, currentLang);
    }
    const placeholders = {
      ckb: 'خزمەتگوزاری بگەرێ...',
      ar: 'ابحث عن خدمة...',
      en: 'Search a service...'
    };
    if (input) input.placeholder = placeholders[currentLang] || placeholders.ckb;
  });
}

/* ── TRANSLATIONS ────────────────────────────────────── */
const translations = {
    ckb: {
        siteTitle: "سەنتەری جوانکاری سینوهه",
        siteSub: "Beauty Center",
        navHome: "ماڵەوە", navAbout: "دەربارە", navWomen: "ئافرەتان",
        navMen: "پیاوان", navDental: "ددان", navTech: "تەکنەلۆژیا",
        navReviews: "ئەنجامەکان", navFAQ: "پرسیارەکان",
        navContact: "پەیوەندی", navContactCta: "پەیوەندی",
        heroLabel: "لە جوانییەوە بۆ چاودێری شاهانە",
        heroTitle: "سینوهه ، شکۆی شاهانە ، جوانی مۆدێرن",
        heroLocation: "هەولێر، حي ژيان",
        heroDesc: "جوانکاریی پێشکەوتوو، چاودێری پزیشکی، متمانەی پریمیم.",
        heroCtaBook: "نۆرە بگرم", heroCtaExplore: "خزمەتگوزاریەکان",
        heroCtaWhatsapp: "واتساپ",
        searchPlaceholder: "خزمەتگوزاری بگەرێ...",
        searchHint1:"لیزەر", searchHint2:"بۆتۆکس", searchHint3:"PRP",
        searchHint4:"ددان", searchHint5:"هایدرۆفەیشەڵ", searchHint6:"فیلەر",
        trust1Title:"ستافی شارەزا", trust1Desc:"چاودێری پڕۆفێشناڵ",
        trust2Title:"تەکنەلۆژیای پریمیم", trust2Desc:"ئامێری نوێ و دڵنیا",
        trust3Title:"سەلامەت و کاریگەر", trust3Desc:"ستانداردی بەرز",
        trust4Title:"ئەنجامی سروشتی", trust4Desc:"جوانییەکەت بە ناسکی",
        aboutLabel:"دەربارەی سینوهه",
        aboutTitle:"سینوهه، شکۆی شاهانە ، جوانی مۆدێرن",
        aboutP1:"سینوهه بەشیوەیەکی پرۆفیشناڵ وزانستی ،جوانکاری پێست ، وراوێژکاری پزیشکیت پێشکەش دەکات",
        aboutP2:"سینوهه سەنتەرێکی پێشەنگ و متمانەپێکراوە بۆ گۆڕینی پێست، زەردەخەنە و بەخشینی متمانەیی بە خۆت",
        aboutCta:"پەیوەندی بکە",
        feat1:"تەکنەلۆژیای پێشکەوتوو", feat2:"ستافی شارەزا",
        feat3:"فەزای پریمیم", feat4:"ئەنجامی سروشتی",
        catLabel:"بەشەکان",
        catTitle:"ڕێگای خێرا بۆ هەڵبژاردنی چاودێری گونجاو",
        catNote:"بەشەکان بە شێوەیەکی ڕێکخراو، کورت و پریمیم بۆ ئەوەی لە مۆبایل زۆر خێرا بگەیتە خزمەتگوزارییەکە.",
        catWomen:"ئافرەتان", catWomenDesc:"پێست، جوانکاری، هایدرۆفەیشەڵ و چاودێری تایبەت",
        catMen:"پیاوان", catMenDesc:"لیزەر، PRPی قژ و چاودێری تایبەت بە پیاوان",
        catDental:"ددان", catDentalDesc:"چاودێری ددان، هۆلیوود سمایل، و ڕاوێژکاری",
        womenLabel:"خزمەتگوزارییەکانی ئافرەتان",
        womenTitle:"چارەسەری پێشکەوتوو بۆ ئافرەتان",
        womenNote:"لیستی تەواوی خزمەتگوزارییە پریمیمەکان بۆ ئافرەتان.",
        menLabel:"خزمەتگوزارییەکانی پیاوان",
        menTitle:"چارەسەری پێشکەوتوو بۆ پیاوان",
        menNote:"لیستی تەواوی خزمەتگوزارییە پریمیمەکان بۆ پیاوان.",
        dentalLabel:"خزمەتگوزارییەکانی ددان",
        dentalTitle:"چاودێری ددان و هۆلیوود سمایل",
        dentalNote:"لیستی تەواوی خزمەتگوزارییە دندانییە پریمیمەکان.",
        techLabel:"تەکنەلۆژیا",
        techTitle:"ئامێر و ڕێکارەکان بە وردی هەڵبژێردراون",
        techNote:"تەکنەلۆژیا لە سینوهه وەک بەشێک لە ڕێکاری جوانکاری بەکاردێت: پاک، دڵنیا و بە پلانی گونجاو.",
        t1Title:"لەیزەرکان",t1Desc:"ئامێری پێشکەوتووی لەیزەر.",
        t2Title:"نۆرتێکس",t2Desc:"ئامێری پێشکەوتوو.",
        t3Title:"ئومێکس ئالێکساندرایت هایبرێد",t3Desc:"لەیزەری هایبرێدی پێشکەوتوو.",
        t4Title:"کاندێلا لادانی موو",t4Desc:"سڕینەوەی موو بە کاندێلا.",
        t5Title:"دێکا لادانی مووی ئیتاڵی",t5Desc:"سڕینەوەی موو بە دێکا.",
        t6Title:"ڕۆبۆت X مایکرۆ SEMENSE",t6Desc:"تەکنەلۆژیای مایکرۆ.",
        t7Title:"فراکشنال لەیزەر CO2",t7Desc:"نوێبوونەوەی پێست.",
        t8Title:"مۆرفیۆس 8",t8Desc:"لادانی ئاسەواری زیپکە و هاندانی کۆلاجین.",
        t9Title:"سیکرێت RF",t9Desc:"مایکرۆنیدلینگی RF.",
        t10Title:"HIFU",t10Desc:"توند کردنی پێست.",
        t11Title:"کاندێلا سڕینەوەی تاتۆ",t11Desc:"سڕینەوەی تاتۆ.",
        t12Title:"پلاسماجێت",t12Desc:"چارەسەری پێست.",
        t13Title:"دێرماپێن",t13Desc:"تەکسچەری پێست.",
        reviewsLabel:"ئەنجامەکان", reviewsTitle:"هەستێکی باش، ئەنجامێکی دڵنیا",
        test2Text:"بۆ قژم PRPم کرد، ڕاوێژکارییەکە ڕوون و ئەزموونەکە زۆر پاک بوو.",
        test2Initial:"م", test2Name:"محمد ر.", test2Role:"کلیێنی دڵخۆش",
        test3Text:"دوای هایدرۆفەیشەڵ پێستم ڕوونتر و تازەتر بوو. زۆر پێم باش بوو.",
        test3Initial:"ل", test3Name:"لەیلا ع.", test3Role:"کلیێنی دڵخۆش",
        test4Text:"شوێنەکە تەواو هەستێکی جیاوازی هەیە",
        test4Initial:"ن", test4Name:"نەرگس ح.", test4Role:"کلیێنی دڵخۆش",
        test5Text:"بۆ لیزەری پیاوان هاتم. کاتەکە ڕێکخراو بوو و ستافەکە هەموو هەنگاوێکی بە ڕوونی باس کرد.",
        test5Initial:"ه", test5Name:"هێمن ک.", test5Role:"کلیێنی دڵخۆش",
        faqLabel:"پرسیارە باوەکان", faqTitle:"زۆرترین پرسیارەکان",
        faqQ1:"چۆن نۆرە بکەم؟", faqA1:"پەیوەندیمان پێوە بکە لە ڕێگەی تەلەفۆن یان واتساپ. تیمەکەمان ڕێکخستنی نۆرە بۆت دەکات.",
        faqQ2:"ڕاوێژکاری بەردەستە؟", faqA2:"بەڵێ، ڕاوێژکاری پزیشکی و جوانکاری بەردەستە بۆ هەموو خزمەتگوزارییەکان.",
        faqQ3:"چ تەکنەلۆژیایەک بەکاردێنن؟", faqA3:"سینوهه نوێترین ئامێرەکانی جوانکاری بەکاردەبێ وەک HIFU، لیزەر، PRP، و مۆرفیوس 8.",
        faqQ4:"لیزەر بۆ پیاوان و ئافرەتان هەیە؟", faqA4:"بەڵێ، خزمەتگوزارییەکانی لیزەر بۆ هەردوو پیاوان و ئافرەتان بەردەستە.",
        faqQ5:"چارەسەرەکان بۆ پیاوان و ئافرەتان هەیە؟", faqA5:"بەڵێ، سینوهه بەشێکی تایبەت بۆ پیاوان و بەشێکی تایبەت بۆ ئافرەتان هەیە.",
        bookingLabel:"نۆرە و ڕاوێژکاری", bookingTitle:"چۆن نۆرە بکەم؟",
        bookingDesc:"پەیوەندیمان پێوە بکە بۆ ڕاوێژکاری یان نۆرە.",
        bookingWhatsapp:"واتساپ", bookingContact:"پەیوەندی",
        contactLabel:"پەیوەندی",
        contactTitle:"بۆ ڕاوێژکاری و نۆرە، بە ئاسانی پەیوەندی بکە",
        contactDesc:"تیمەکەمان بەخێرایی و بە شێوەیەکی ڕێکخراو وەڵامت دەدات.",
        contactPhone:"تەلەفۆن", contactSecondPhone:"ژمارەی دووەم",
        contactLocation:"شوێن", contactMap:"بینین لە گووگڵ مەپ",
        footerDesc:"سەنتەری جوانکاری وپزیشکی وئێستیکی پێشکەوتوو.",
        footerQuick:"لینکی خێرا", footerServices:"خزمەتگوزارییە پریمیمەکان",
        footerContact:"پەیوەندی",
        footerCopy:"© 2026 سەنتەری جوانکاری سینوهه. هەموو مافەکان پارێزراون.",
        svcW23:"بۆتۆکس", svcW21:"فیلەر", svcM8:"لیزەری پیاوان", svcW14:"هایدرۆفەیشەڵ"
    },
    ar: {
        siteTitle:"مركز تجميل سينوهه", siteSub:"Beauty Center",
        navHome:"الرئيسية", navAbout:"من نحن", navWomen:"النساء", navMen:"الرجال",
        navDental:"الأسنان", navTech:"التقنيات", navReviews:"النتائج",
        navFAQ:"الأسئلة", navContact:"التواصل", navContactCta:"تواصل",
        heroLabel:"حيث يلتقي الجمال بالعناية الراقية",
        heroTitle:"سينوهه ، فخامة ملكية ، جمال عصري",
        heroLocation:"أربيل ، حي زيان",
        heroDesc:"تجميل متقدم، رعاية طبية، ثقة فاخرة.",
        heroCtaBook:"احجز موعدي", heroCtaExplore:"اكتشف الخدمات", heroCtaWhatsapp:"واتساب",
        searchPlaceholder:"ابحث عن خدمة...",
        searchHint1:"ليزر", searchHint2:"بوتوكس", searchHint3:"PRP",
        searchHint4:"أسنان", searchHint5:"هيدروفيشل", searchHint6:"فيلر",
        trust1Title:"فريق مختص", trust1Desc:"رعاية احترافية",
        trust2Title:"تقنيات فاخرة", trust2Desc:"أجهزة حديثة وآمنة",
        trust3Title:"آمن وفعال", trust3Desc:"معايير عالية",
        trust4Title:"نتائج طبيعية", trust4Desc:"جمالك بلمسة ناعمة",
        aboutLabel:"عن سينوهه",
        aboutTitle:"سينوهه ، فخامة ملكية ، جمال عصري",
        aboutP1:"تقدم سينوهه خدمات تجميل البشرة والاستشارات الطبية بأسلوب احترافي وعلمي.",
        aboutP2:"سينوهه مركز رائد وموثوق لتجديد البشرة، تحسين الابتسامة ومنح الثقة بالنفس.",
        aboutCta:"تواصل معنا",
        feat1:"تقنيات متقدمة", feat2:"فريق مختص",
        feat3:"فضاء فاخر", feat4:"نتائج طبيعية",
        catLabel:"الأقسام", catTitle:"طريق سريع لاختيار العناية المناسبة",
        catNote:"الأقسام منظمة ومختصرة وفاخرة للوصول للخدمة بسرعة.",
        catWomen:"النساء", catWomenDesc:"البشرة، التجميل، الهيدروفيشل والعناية الخاصة",
        catMen:"الرجال", catMenDesc:"ليزر، PRP للشعر وعناية خاصة بالرجال",
        catDental:"الأسنان", catDentalDesc:"عناية الأسنان، ابتسامة هوليوود، والاستشارة",
        womenLabel:"خدمات النساء", womenTitle:"علاجات متقدمة للنساء",
        womenNote:"قائمة كاملة بالخدمات الفاخرة للنساء.",
        menLabel:"خدمات الرجال", menTitle:"علاجات متقدمة للرجال",
        menNote:"قائمة كاملة بالخدمات الفاخرة للرجال.",
        dentalLabel:"خدمات الأسنان", dentalTitle:"عناية الأسنان وابتسامة هوليوود",
        dentalNote:"قائمة كاملة بخدمات الأسنان الفاخرة.",
        techLabel:"التقنيات", techTitle:"أجهزة وإجراءات مختارة بعناية",
        techNote:"في سينوها تُستخدم التقنية كجزء من خطة جمالية هادئة.",
        t1Title:"ليزركان",t1Desc:"أحدث أجهزة الليزر.",
        t2Title:"نورتكس",t2Desc:"جهاز متقدم.",
        t3Title:"أوميكس ألكساندريت هايبرد",t3Desc:"ليزر هايبرد متقدم.",
        t4Title:"كانديلا إزالة الشعر",t4Desc:"إزالة الشعر بكانديلا.",
        t5Title:"ديكا إزالة شعر إيطالي",t5Desc:"إزالة الشعر بديكا.",
        t6Title:"روبوت X مايكرو SEMENSE",t6Desc:"تقنية مايكرو.",
        t7Title:"فريكشنال ليزر CO2",t7Desc:"تجديد البشرة.",
        t8Title:"مورفيوس 8",t8Desc:"إزالة آثار حب الشباب وتحفيز الكولاجين.",
        t9Title:"سيكريت RF",t9Desc:"ميكرونيدلينج RF.",
        t10Title:"HIFU",t10Desc:"شد البشرة.",
        t11Title:"كانديلا إزالة الوشم",t11Desc:"إزالة الوشم.",
        t12Title:"بلازماجيت",t12Desc:"علاج البشرة.",
        t13Title:"ديرمابين",t13Desc:"ملمس البشرة.",
        reviewsLabel:"النتائج", reviewsTitle:"شعور جيد ونتيجة موثوقة",
        test2Text:"جربت PRP للشعر، الاستشارة كانت واضحة والتجربة نظيفة جداً.",
        test2Initial:"م", test2Name:"محمد ر.", test2Role:"عميل سعيد",
        test3Text:"بعد الهيدروفيشل أصبحت بشرتي أنقى وأكثر نضارة. تجربة ممتازة.",
        test3Initial:"ل", test3Name:"ليلى ع.", test3Role:"عميلة سعيدة",
        test4Text:"المكان يعطي شعوراً مختلفاً ومميزاً",
        test4Initial:"ن", test4Name:"نرجس ح.", test4Role:"عميلة سعيدة",
        test5Text:"أتيت لليزر الخاص بالرجال. الموعد كان منظماً والفريق شرح كل خطوة بوضوح.",
        test5Initial:"هـ", test5Name:"هيمن ك.", test5Role:"عميل سعيد",
        faqLabel:"الأسئلة الشائعة", faqTitle:"أكثر الأسئلة تكراراً",
        faqQ1:"كيف أحجز موعد؟", faqA1:"تواصل معنا عبر الهاتف أو واتساب. فريقنا سينظم موعداً لك.",
        faqQ2:"هل الاستشارة متاحة؟", faqA2:"نعم، الاستشارة الطبية والتجميلية متاحة لجميع الخدمات.",
        faqQ3:"ما التقنيات المستخدمة؟", faqA3:"سينوها تستخدم أحدث أجهزة التجميل مثل HIFU، الليزر، PRP، ومورفيوس 8.",
        faqQ4:"هل الليزر متاح للرجال والنساء؟", faqA4:"نعم، خدمات الليزر متاحة للرجال والنساء.",
        faqQ5:"هل العلاجات متاحة للرجال والنساء؟", faqA5:"نعم، سينوها لديها قسم خاص للرجال وقسم خاص للنساء.",
        bookingLabel:"الحجز والاستشارة", bookingTitle:"كيف أحجز موعد؟",
        bookingDesc:"تواصل معنا للاستشارة أو الحجز.",
        bookingWhatsapp:"واتساب", bookingContact:"تواصل",
        contactLabel:"التواصل",
        contactTitle:"للاستشارة أو الحجز، تواصل معنا بسهولة",
        contactDesc:"فريقنا يرد عليك بسرعة وبطريقة منظمة.",
        contactPhone:"الهاتف", contactSecondPhone:"رقم ثان",
        contactLocation:"الموقع", contactMap:"عرض على خرائط جوجل",
        footerDesc:"مركز متطور للتجميل والطب والخدمات التجميلية الحديثة.",
        footerQuick:"روابط سريعة", footerServices:"خدمات فاخرة",
        footerContact:"التواصل",
        footerCopy:"© 2026 مركز تجميل سينوهه. جميع الحقوق محفوظة.",
        svcW23:"بوتوكس", svcW21:"فيلر", svcM8:"ليزر الرجال", svcW14:"هيدروفيشل"
    },
    en: {
        siteTitle:"Sinuha Beauty Center", siteSub:"Beauty Center",
        navHome:"Home", navAbout:"About", navWomen:"Women", navMen:"Men",
        navDental:"Dental", navTech:"Technologies", navReviews:"Results",
        navFAQ:"FAQ", navContact:"Contact", navContactCta:"Contact",
        heroLabel:"Where beauty meets royal care",
        heroTitle:"Sinuha, Royal Glory, Modern Beauty",
        heroLocation:"Erbil, Hay Zian",
        heroDesc:"Advanced beauty, medical care, premium confidence.",
        heroCtaBook:"Book Now", heroCtaExplore:"Explore Services", heroCtaWhatsapp:"WhatsApp",
        searchPlaceholder:"Search a service...",
        searchHint1:"Laser", searchHint2:"Botox", searchHint3:"PRP",
        searchHint4:"Dental", searchHint5:"Hydrofacial", searchHint6:"Filler",
        trust1Title:"Expert Team", trust1Desc:"Professional care",
        trust2Title:"Premium Technology", trust2Desc:"Modern safe devices",
        trust3Title:"Safe & Effective", trust3Desc:"High standards",
        trust4Title:"Natural Results", trust4Desc:"Soft refined beauty",
        aboutLabel:"About Sinuha",
        aboutTitle:"Sinuha, Royal Glory, Modern Beauty",
        aboutP1:"Sinuha offers professional and scientific skin care and medical consultation",
        aboutP2:"Sinuha is a leading trusted center for skin transformation, smiles, and self-confidence",
        aboutCta:"Contact us",
        feat1:"Advanced Technology", feat2:"Expert Team",
        feat3:"Premium Space", feat4:"Natural Results",
        catLabel:"Categories", catTitle:"A faster path to the right care",
        catNote:"The categories are organized, concise and premium for quick mobile navigation.",
        catWomen:"Women", catWomenDesc:"Skin, beauty, hydrofacial and personal care",
        catMen:"Men", catMenDesc:"Laser, PRP hair and dedicated men's care",
        catDental:"Dental", catDentalDesc:"Dental care, Hollywood smile, and consultation",
        womenLabel:"Women's Services", womenTitle:"Advanced Treatments for Women",
        womenNote:"Complete list of premium services for women.",
        menLabel:"Men's Services", menTitle:"Advanced Treatments for Men",
        menNote:"Complete list of premium services for men.",
        dentalLabel:"Dental Services", dentalTitle:"Dental Care & Hollywood Smile",
        dentalNote:"Complete list of premium dental services.",
        techLabel:"Technology", techTitle:"Devices and procedures chosen with care",
        techNote:"Technology at Sinuha supports calm aesthetic planning.",
        t1Title:"Laserkan",t1Desc:"Advanced laser device.",
        t2Title:"Northex",t2Desc:"Advanced device.",
        t3Title:"Umex Alexandrite Hybrid",t3Desc:"Advanced hybrid laser.",
        t4Title:"Candela Hair Removal",t4Desc:"Hair removal with Candela.",
        t5Title:"Deka Italic Hair Removal",t5Desc:"Hair removal with Deka.",
        t6Title:"Robot X Micro SEMENSE",t6Desc:"Micro technology.",
        t7Title:"Fractional Laser CO2",t7Desc:"Skin renewal.",
        t8Title:"Morpheous 8",t8Desc:"Acne scar removal and collagen stimulation.",
        t9Title:"Secret RF",t9Desc:"RF microneedling.",
        t10Title:"HIFU",t10Desc:"Skin tightening.",
        t11Title:"Candela Tattoo Removal",t11Desc:"Tattoo removal.",
        t12Title:"Plasmaget",t12Desc:"Skin treatment.",
        t13Title:"Dermapen",t13Desc:"Skin texture.",
        reviewsLabel:"Results", reviewsTitle:"Good feeling, trusted results",
        test2Text:"I tried PRP for hair. The consultation was clear and the whole experience felt very clean.",
        test2Initial:"M", test2Name:"Mohammed R.", test2Role:"Happy client",
        test3Text:"After Hydrofacial my skin looked clearer and fresher. A beautiful experience.",
        test3Initial:"L", test3Name:"Layla A.", test3Role:"Happy client",
        test4Text:"The place gives a completely different and special feeling",
        test4Initial:"N", test4Name:"Narges H.", test4Role:"Happy client",
        test5Text:"I came for men's laser. The appointment was organized and the team explained each step clearly.",
        test5Initial:"H", test5Name:"Hemin K.", test5Role:"Happy client",
        faqLabel:"FAQ", faqTitle:"Frequently Asked Questions",
        faqQ1:"How can I book?", faqA1:"Contact us by phone or WhatsApp. Our team will arrange an appointment for you.",
        faqQ2:"Is consultation available?", faqA2:"Yes, medical and beauty consultation is available for all services.",
        faqQ3:"What technologies are used?", faqA3:"Sinuha uses the latest beauty devices such as HIFU, Laser, PRP, and Morpheus 8.",
        faqQ4:"Is laser available for men and women?", faqA4:"Yes, laser services are available for both men and women.",
        faqQ5:"Are treatments available for men and women?", faqA5:"Yes, Sinuha has a dedicated section for men and a dedicated section for women.",
        bookingLabel:"Booking & Consultation", bookingTitle:"How can I book?",
        bookingDesc:"Contact us for consultation or booking.",
        bookingWhatsapp:"WhatsApp", bookingContact:"Contact",
        contactLabel:"Contact",
        contactTitle:"For consultation or booking, reach us easily",
        contactDesc:"Our team replies quickly and keeps everything simple and organized.",
        contactPhone:"Phone", contactSecondPhone:"Second number",
        contactLocation:"Location", contactMap:"View on Google Maps",
        footerDesc:"Advanced center for beauty, medicine and modern aesthetic services.",
        footerQuick:"Quick links", footerServices:"Premium services",
        footerContact:"Contact",
        footerCopy:"© 2026 Sinuha Beauty Center. All rights reserved.",
        svcW23:"Botox", svcW21:"Filler", svcM8:"Men's Laser", svcW14:"Hydrofacial"
    }
};

/* Section label helpers */
const SECTION_LABELS = {
  ckb: { women:'ئافرەتان', men:'پیاوان', dental:'ددان' },
  ar:  { women:'النساء', men:'الرجال', dental:'الأسنان' },
  en:  { women:'Women', men:'Men', dental:'Dental' }
};
const SECTION_ANCHORS = { women:'#women', men:'#men', dental:'#dental' };

/* ── LANGUAGE STATE ─────────────────────────────────── */
let currentLang = localStorage.getItem('sinuhaLang') || 'ckb';

/* ── INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
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
    initTechScroll();
    initSearch();
    initLightbox();
});

/* ── LOADING ────────────────────────────────────────── */
function initLoading() {
    const loader = document.getElementById('loadingScreen');
    if (!loader) return;
    const hide = () => loader.classList.add('done');
    window.addEventListener('load', () => setTimeout(hide, 420), { once: true });
    setTimeout(hide, 1500);
}

/* ── SCROLL PROGRESS ────────────────────────────────── */
function initScrollProgress() {
    const fill = document.getElementById('scrollFill');
    if (!fill) return;
    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        fill.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
}

/* ── NAVBAR ─────────────────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const update = () => navbar.classList.toggle('scrolled', window.scrollY > 22);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

/* ── MOBILE MENU ─────────────────────────────────────── */
function initMobileMenu() {
    const toggle   = document.getElementById('navToggle');
    const menu     = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');
    if (!toggle || !menu || !backdrop) return;
    const close = () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        backdrop.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
        const open = !menu.classList.contains('active');
        toggle.classList.toggle('active', open);
        menu.classList.toggle('active', open);
        backdrop.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    });
    backdrop.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── LANGUAGE ────────────────────────────────────────── */
function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    setLang(currentLang);
}

function updateWhatsAppLinks() {
    const msgs = {
        ckb: 'سڵاو، چۆن نۆرە بگرم',
        ar: 'مرحباً، كيف يمكنني حجز موعد؟',
        en: 'Hello, how can I book an appointment?'
    };
    const msg = encodeURIComponent(msgs[currentLang] || msgs.ckb);
    document.querySelectorAll('a[href^="https://wa.me/9647717007560"]').forEach(a => {
        a.href = `https://wa.me/9647717007560?text=${msg}`;
    });
}

function setLang(lang) {
    const t = translations[lang] || translations.ckb;
    currentLang = lang;
    localStorage.setItem('sinuhaLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.title = t.siteTitle;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (Object.prototype.hasOwnProperty.call(t, key)) el.textContent = t[key];
    });
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.dataset.keyPlaceholder;
        if (Object.prototype.hasOwnProperty.call(t, key)) el.setAttribute('placeholder', t[key]);
    });
    const si = document.getElementById('searchInput');
    if (si && t.searchPlaceholder) si.placeholder = t.searchPlaceholder;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    renderServiceGrids();
    updateWhatsAppLinks();
    window.dispatchEvent(new CustomEvent('sinuha:languagechange'));
}

/* ── REVEAL ─────────────────────────────────────────── */
function initReveal() {
    const items = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -42px 0px' });
    items.forEach(item => observer.observe(item));
}

/* ── SERVICE GRIDS ───────────────────────────────────── */
function renderServiceCard(svc, lang) {
    const labels = SECTION_LABELS[lang] || SECTION_LABELS.ckb;
    const title  = svc[lang]?.title || svc.en.title;
    const desc   = svc[lang]?.desc  || svc.en.desc;
    const tag    = labels[svc.section] || svc.section;
    return `
      <article class="service-card reveal-item">
        <img src="${svc.img}" alt="${title}" loading="lazy">
        <div class="service-body">
          <span class="service-tag">${tag}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </article>`;
}

function renderServiceGrids() {
    const lang = currentLang;
    const wGrid = document.getElementById('womenGrid');
    const mGrid = document.getElementById('menGrid');
    const dGrid = document.getElementById('dentalGrid');
    if (wGrid) {
        const women = serviceDict.filter(s => s.section === 'women');
        wGrid.innerHTML = women.map(s => renderServiceCard(s, lang)).join('');
        observeNewRevealItems(wGrid);
    }
    if (mGrid) {
        const men = serviceDict.filter(s => s.section === 'men');
        mGrid.innerHTML = men.map(s => renderServiceCard(s, lang)).join('');
        observeNewRevealItems(mGrid);
    }
    if (dGrid) {
        const dental = serviceDict.filter(s => s.section === 'dental');
        dGrid.innerHTML = dental.map(s => renderServiceCard(s, lang)).join('');
        observeNewRevealItems(dGrid);
    }
}

function observeNewRevealItems(container) {
    if (!('IntersectionObserver' in window)) {
        container.querySelectorAll('.reveal-item').forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });
    container.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

function initServices() {
    renderServiceGrids();
}

/* ── TECHNOLOGY ──────────────────────────────────────── */
function initTech() {
    const container = document.getElementById('techScroll');
    if (!container) return;
    let html = '';
    for (let i = 1; i <= 13; i++) {
        html += `
          <article class="tech-card reveal-item">
            <span class="tech-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7l14 10M19 7 5 17"/></svg>
            </span>
            <h3 data-key="t${i}Title"></h3>
            <p data-key="t${i}Desc"></p>
          </article>`;
    }
    container.innerHTML = html + html;
}

/* ── FAQ ─────────────────────────────────────────────── */
function initFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `
          <div class="faq-item reveal-item">
            <button class="faq-question" aria-expanded="false">
              <span data-key="faqQ${i}"></span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer"><div><p data-key="faqA${i}"></p></div></div>
          </div>`;
    }
    container.innerHTML = html;
    container.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const open = !item.classList.contains('open');
            container.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
            if (open) item.classList.add('open');
            btn.setAttribute('aria-expanded', String(open));
        });
    });
}

/* ── TECH SCROLL ─────────────────────────────────────── */
function initTechScroll() {
    const scroll = document.getElementById('techScroll');
    if (!scroll) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) scroll.style.animation = 'none';
}

/* ── REVIEWS CAROUSEL ────────────────────────────────── */
function initReviewsCarousel() {
    const carousel = document.querySelector('[data-review-carousel]');
    const track    = document.querySelector('[data-review-track]');
    const prev     = document.querySelector('[data-review-prev]');
    const next     = document.querySelector('[data-review-next]');
    if (!carousel || !track) return;
    const cards = Array.from(track.querySelectorAll('.review-card'));
    if (!cards.length) return;
    let index = 0;
    let timer = null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cardStep = () => {
        const first = cards[0].getBoundingClientRect();
        const gap = Number.parseFloat(getComputedStyle(track).columnGap || '0');
        return first.width + gap;
    };
    const goTo = nextIndex => {
        index = (nextIndex + cards.length) % cards.length;
        carousel.scrollTo({ left: index * cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    const start = () => {
        if (reduceMotion || timer) return;
        timer = window.setInterval(() => goTo(index + 1), 5200);
    };
    const stop = () => { if (timer) { window.clearInterval(timer); timer = null; } };
    prev?.addEventListener('click', () => { stop(); goTo(index - 1); start(); });
    next?.addEventListener('click', () => { stop(); goTo(index + 1); start(); });
    carousel.addEventListener('pointerenter', stop);
    carousel.addEventListener('pointerleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    window.addEventListener('resize', () => goTo(index), { passive: true });
    start();
}

/* ── SMOOTH SCROLL & ACTIVE NAV ──────────────────────── */
function initSmoothScroll() {
    const links    = document.querySelectorAll('a[href^="#"]');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const selector = link.getAttribute('href');
            if (!selector || selector === '#') return;
            const target = document.querySelector(selector);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
        });
    });
    const updateActiveLink = () => {
        let current = 'home';
        sections.forEach(section => { if (window.scrollY >= section.offsetTop - 140) current = section.id; });
        navLinks.forEach(link => { link.classList.toggle('active', link.getAttribute('href') === `#${current}`); });
    };
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* ── LIGHTBOX ────────────────────────────────────────── */
function initLightbox() {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.id = 'lightbox';
    box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
    document.body.appendChild(box);
    const img = box.querySelector('img');
    const closeBtn = box.querySelector('.lightbox-close');
    const close = () => box.classList.remove('active');
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', e => { if (e.target === box) close(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    document.addEventListener('click', e => {
        const cardImg = e.target.closest('.service-card img');
        if (cardImg) {
            img.src = cardImg.src;
            img.alt = cardImg.alt;
            box.classList.add('active');
        }
    });
}
