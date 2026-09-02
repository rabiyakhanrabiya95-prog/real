// ============================================
// FS Real Estate - Main JavaScript
// ============================================

// ---------- Wait for DOM to be fully loaded ----------
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // ---------- Translations ----------
    window.translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About Us",
            "nav.properties": "Properties",
            "nav.services": "Services",
            "nav.contact": "Contact",
            "nav.advisor": "Talk to an Advisor",
            "lang.current": "English",
            "hero.eyebrow": "Real Estate Consultant · Mumbai",
            "hero.subtitle": "Professional and trusted real-estate consultation for clients and families in Mumbai, Maharashtra, India.",
            "hero.viewProperties": "View Properties",
            "hero.talkAdvisor": "Talk to an Advisor",
            "about.eyebrow": "About Us",
            "about.heading": "About FS Real Estate",
            "about.paragraph1": "FS Real Estate is a professional real-estate consultant serving Mumbai, Maharashtra, India. We provide trusted guidance for families and clients seeking residential, commercial, and investment properties.",
            "about.paragraph2": "Our team is dedicated to clear property guidance, client support, and a premium real-estate experience from first inquiry to final decision.",
            "about.learnMore": "Learn more about us →",
            "stats.rating": "Google Rating",
            "stats.reviews": "Reviews",
            "stats.local": "Local Real Estate Consultant",
            "services.eyebrow": "What we do",
            "services.heading": "Real Estate Services",
            "services.residential.category": "Residential",
            "services.residential.title": "Family Residential Properties",
            "services.residential.desc": "Family-friendly residential properties and guidance.",
            "services.residential.cta": "Explore Residential",
            "services.commercial.category": "Commercial",
            "services.commercial.title": "Commercial Opportunities",
            "services.commercial.desc": "Commercial property opportunities and consultation.",
            "services.commercial.cta": "Explore Commercial",
            "services.villas.category": "Villas",
            "services.villas.title": "Luxury Villas",
            "services.villas.desc": "Premium family villas with modern amenities.",
            "services.villas.cta": "Explore Villas",
            "services.guidance.category": "Guidance",
            "services.guidance.title": "Property Guidance",
            "services.guidance.desc": "Clear guidance to help clients make confident property decisions.",
            "services.guidance.cta": "Get Guidance",
            "services.consultation.category": "Consultation",
            "services.consultation.title": "Real Estate Consultation",
            "services.consultation.desc": "Professional real-estate consultation in Mumbai.",
            "services.consultation.cta": "Book Consultation",
            "featured.eyebrow": "Curated Listings",
            "featured.heading": "Featured Properties",
            "featured.viewAll": "View All Properties",
            "featured.viewDetails": "View Details",
            "cta.heading": "Ready to find the right property?",
            "cta.subtitle": "Speak with our real-estate advisor and get professional property guidance.",
            "cta.viewProperties": "View Properties",
            "cta.talkAdvisor": "Talk to an Advisor",
            "footer.tagline": "Professional real-estate consultancy in Mumbai, Maharashtra, India.",
            "footer.company": "Company",
            "footer.services": "Services",
            "footer.legal": "Legal",
            "footer.contact": "Contact",
            "footer.privacy": "Privacy Policy",
            "footer.terms": "Terms of Service",
            "footer.cookies": "Cookie Policy",
            "footer.address": "FS Real Estate, Okaz Shopping Centre, A/31, Millat Nagar Rd, Milat Nagar, Andheri West, Mumbai, Maharashtra 400053",
            "footer.hours": "Sat–Thu: 09:00–21:30, Fri: Closed",
            "filters.all": "All",
            "filters.residential": "Residential",
            "filters.commercial": "Commercial",
            "filters.family": "Family",
            "filters.available": "Available",
            "properties.eyebrow": "Listings",
            "properties.pageTitle": "Our Properties",
            "contact.eyebrow": "Get in touch",
            "contact.pageTitle": "Contact Us",
            "contact.infoTitle": "Contact Information",
            "contact.addressLabel": "Address:",
            "contact.emailLabel": "Email:",
            "contact.phoneLabel": "Phone:",
            "contact.whatsappLabel": "WhatsApp:",
            "contact.hoursTitle": "Opening Hours",
            "contact.mapTitle": "Visit Our Location",
            "contact.mapAddress": "FS Real Estate<br>Okaz Shopping Centre, A/31, Millat Nagar Rd, Milat Nagar, Andheri West, Mumbai, Maharashtra 400053",
            "hours.saturday": "Saturday: 09:00–11:30, 15:30–21:30",
            "hours.sunday": "Sunday: 09:00–11:30, 15:30–21:30",
            "hours.monday": "Monday: 09:00–11:30, 15:30–21:30",
            "hours.tuesday": "Tuesday: 09:00–11:30, 13:30–21:30",
            "hours.wednesday": "Wednesday: 09:00–11:30, 13:30–21:30",
            "hours.thursday": "Thursday: 09:00–11:30, 13:30–21:30",
            "hours.friday": "Friday: Closed",
            "advisor.eyebrow": "Consultation",
            "advisor.pageTitle": "Talk to an Advisor",
            "advisor.subtitle": "Our team is ready to help you with your real-estate requirements.",
            "form.fullName": "Full Name *",
            "form.email": "Email *",
            "form.phone": "Phone *",
            "form.propertyType": "Property Type *",
            "form.selectProperty": "Select property type",
            "form.residential": "Residential",
            "form.commercial": "Commercial",
            "form.family": "Family",
            "form.other": "Other",
            "form.message": "Message *",
            "form.sendInquiry": "Send Inquiry",
            "form.successMessage": "Thank you. Your inquiry has been received successfully. Our advisor will assist you shortly.",
            "form.fullNameError": "Please enter your full name.",
            "form.emailError": "Please enter a valid email address.",
            "form.phoneError": "Please enter your phone number.",
            "form.propertyTypeError": "Please select a property type.",
            "form.messageError": "Please enter a message.",
            "openNow": "Open Now",
            "openClosed": "Closed Now",
            "opensSoon": "Opens Soon",
            "soldText": "Sold",
            "service.residential.eyebrow": "Our Services",
            "service.residential.title": "Residential Properties",
            "service.residential.heading": "Family-Friendly Residential Guidance",
            "service.residential.paragraph1": "We help families find the perfect home in Mumbai, focusing on safety, comfort, and long-term value. From modern apartments to spacious villas, our residential listings are curated to meet your needs.",
            "service.residential.paragraph2": "Our advisors provide clear guidance on neighbourhoods, amenities, and investment potential, ensuring you make a confident decision.",
            "service.residential.benefit1": "Family-oriented property options",
            "service.residential.benefit2": "Neighbourhood insights",
            "service.residential.benefit3": "Investment advice",
            "service.residential.benefit4": "Premium client support",
            "service.residential.viewProperties": "View Properties",
            "service.residential.talkAdvisor": "Talk to an Advisor",
            "service.commercial.eyebrow": "Our Services",
            "service.commercial.title": "Commercial Properties",
            "service.commercial.heading": "Commercial Opportunities & Consultation",
            "service.commercial.paragraph1": "Our commercial division offers expert consultation for office spaces, retail outlets, and investment properties in Mumbai's dynamic market.",
            "service.commercial.paragraph2": "We analyse location, footfall, and growth potential to help you secure the right commercial asset.",
            "service.commercial.benefit1": "Investment analysis",
            "service.commercial.benefit2": "Prime locations",
            "service.commercial.benefit3": "ROI-focused advice",
            "service.commercial.benefit4": "Negotiation support",
            "service.commercial.viewProperties": "View Properties",
            "service.commercial.talkAdvisor": "Talk to an Advisor",
            "service.guidance.eyebrow": "Our Services",
            "service.guidance.title": "Property Guidance",
            "service.guidance.heading": "Clear, Confident Property Decisions",
            "service.guidance.paragraph1": "We help you navigate the Mumbai real-estate market with transparent advice on pricing, legal processes, and property selection.",
            "service.guidance.paragraph2": "From first-time buyers to seasoned investors, our guidance ensures you understand every step.",
            "service.guidance.benefit1": "Market analysis",
            "service.guidance.benefit2": "Legal process overview",
            "service.guidance.benefit3": "Property comparison",
            "service.guidance.benefit4": "Negotiation tips",
            "service.guidance.viewProperties": "View Properties",
            "service.guidance.talkAdvisor": "Talk to an Advisor",
            "service.consultation.eyebrow": "Our Services",
            "service.consultation.title": "Real Estate Consultation",
            "service.consultation.heading": "Professional Real Estate Consultation",
            "service.consultation.paragraph1": "Our consultants provide personalised advice for buying, selling, or investing in Mumbai's real-estate market.",
            "service.consultation.paragraph2": "We combine local knowledge with professional analysis to help you achieve your property goals.",
            "service.consultation.benefit1": "One-on-one consultations",
            "service.consultation.benefit2": "Market valuation",
            "service.consultation.benefit3": "Investment strategy",
            "service.consultation.benefit4": "After-sale support",
            "service.consultation.viewProperties": "View Properties",
            "service.consultation.talkAdvisor": "Talk to an Advisor",
            "service.relatedTitle": "Related Services",
            "legal.privacyTitle": "Privacy Policy",
            "legal.updated": "Last updated: January 2026",
            "legal.privacyIntroTitle": "Introduction",
            "legal.privacyIntro": "FS Real Estate (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
            "legal.privacyDataTitle": "Information We Collect",
            "legal.privacyData": "We may collect personal information such as your name, email address, phone number, and any details you provide through our contact forms or advisor inquiries.",
            "legal.privacyUseTitle": "How We Use Your Information",
            "legal.privacyUse": "We use your information to respond to inquiries, provide real-estate services, improve our website, and comply with legal obligations.",
            "legal.privacyShareTitle": "Information Sharing",
            "legal.privacyShare": "We do not sell your personal data. We may share information with trusted third parties who assist us in operating our website or conducting business, provided they agree to keep it confidential.",
            "legal.privacySecurityTitle": "Data Security",
            "legal.privacySecurity": "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or disclosure.",
            "legal.privacyRightsTitle": "Your Rights",
            "legal.privacyRights": "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at fsdealsrealestate@gmail.com.",
            "legal.privacyCookiesTitle": "Cookies",
            "legal.privacyCookies": "Our website may use cookies to enhance your browsing experience. See our Cookie Policy for more details.",
            "legal.privacyContactTitle": "Contact Us",
            "legal.privacyContact": "If you have any questions about this privacy policy, please contact us at fsdealsrealestate@gmail.com or call +91 529 47571.",
            "legal.termsTitle": "Terms of Service",
            "legal.termsIntroTitle": "Introduction",
            "legal.termsIntro": "These Terms of Service (\"Terms\") govern your use of the FS Real Estate website and services. By accessing or using our website, you agree to be bound by these Terms.",
            "legal.termsAcceptTitle": "Acceptance of Terms",
            "legal.termsAccept": "By using our website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use our website.",
            "legal.termsUseTitle": "Use of Website",
            "legal.termsUse": "You may use our website for lawful purposes only. You must not misuse the website or attempt to gain unauthorised access to any part of it.",
            "legal.termsIntellectualTitle": "Intellectual Property",
            "legal.termsIntellectual": "All content, design, and materials on this website are the property of FS Real Estate unless otherwise stated. You may not reproduce or distribute any content without prior written consent.",
            "legal.termsLiabilityTitle": "Limitation of Liability",
            "legal.termsLiability": "FS Real Estate will not be liable for any direct, indirect, or consequential loss arising from the use of this website or reliance on its content.",
            "legal.termsGoverningTitle": "Governing Law",
            "legal.termsGoverning": "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the Indian courts.",
            "legal.termsContactTitle": "Contact Us",
            "legal.termsContact": "If you have any questions about these Terms, please contact us at fsdealsrealestate@gmail.com or call +91 529 47571.",
            "legal.cookieTitle": "Cookie Policy",
            "legal.cookieWhatTitle": "What Are Cookies",
            "legal.cookieWhat": "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.",
            "legal.cookieUseTitle": "How We Use Cookies",
            "legal.cookieUse": "We use cookies to enhance your browsing experience, analyse site traffic, and understand how visitors interact with our website. This helps us improve our services and content.",
            "legal.cookieTypesTitle": "Types of Cookies We Use",
            "legal.cookieTypes": "We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). We may also use third-party cookies, such as those from analytics providers.",
            "legal.cookieManageTitle": "Managing Cookies",
            "legal.cookieManage": "You can control and/or delete cookies as you wish. Most browsers allow you to refuse or accept cookies. However, disabling cookies may affect the functionality of our website.",
            "legal.cookieContactTitle": "Contact Us",
            "legal.cookieContact": "If you have any questions about our use of cookies, please contact us at fsdealsrealestate@gmail.com.",
            "nav.villas": "Villas",
            "villas.eyebrow": "Exclusive Collection",
            "villas.pageTitle": "Luxury Villas in Mumbai",
            "villas.subtitle": "Discover our handpicked selection of premium family villas"
        },
        ar: {
            "nav.home": "الرئيسية",
            "nav.about": "من نحن",
            "nav.properties": "العقارات",
            "nav.services": "الخدمات",
            "nav.contact": "اتصل بنا",
            "nav.advisor": "تحدث إلى مستشار",
            "lang.current": "العربية",
            "hero.eyebrow": "مستشار عقاري · مومباي",
            "hero.subtitle": "استشارات عقارية موثوقة ومهنية للعملاء والعائلات في مومباي، ماهاراشترا، الهند.",
            "hero.viewProperties": "عرض العقارات",
            "hero.talkAdvisor": "تحدث إلى مستشار",
            "about.eyebrow": "من نحن",
            "about.heading": "عن FS Real Estate",
            "about.paragraph1": "FS Real Estate هي مستشار عقاري محترف يخدم مومباي، ماهاراشترا، الهند. نقدم إرشادات موثوقة للعائلات والعملاء الباحثين عن عقارات سكنية وتجارية واستثمارية.",
            "about.paragraph2": "فريقنا ملتزم بتقديم إرشادات عقارية واضحة ودعم العملاء وتجربة عقارية متميزة من الاستفسار الأول حتى القرار النهائي.",
            "about.learnMore": "اعرف المزيد عنا ←",
            "stats.rating": "تقييم جوجل",
            "stats.reviews": "المراجعات",
            "stats.local": "مستشار عقاري محلي",
            "services.eyebrow": "ماذا نقدم",
            "services.heading": "الخدمات العقارية",
            "services.residential.category": "سكني",
            "services.residential.title": "عقارات سكنية عائلية",
            "services.residential.desc": "عقارات سكنية مناسبة للعائلات مع إرشادات.",
            "services.residential.cta": "استكشف السكني",
            "services.commercial.category": "تجاري",
            "services.commercial.title": "فرص تجارية",
            "services.commercial.desc": "فرص عقارية تجارية واستشارات.",
            "services.commercial.cta": "استكشف التجاري",
            "services.villas.category": "الفلل",
            "services.villas.title": "فلل فاخرة",
            "services.villas.desc": "فلل عائلية فاخرة مع وسائل راحة حديثة.",
            "services.villas.cta": "استكشف الفلل",
            "services.guidance.category": "إرشاد",
            "services.guidance.title": "الإرشاد العقاري",
            "services.guidance.desc": "إرشادات واضحة لمساعدة العملاء على اتخاذ قرارات عقارية واثقة.",
            "services.guidance.cta": "احصل على إرشاد",
            "services.consultation.category": "استشارة",
            "services.consultation.title": "الاستشارات العقارية",
            "services.consultation.desc": "استشارات عقارية احترافية في مومباي.",
            "services.consultation.cta": "احجز استشارة",
            "featured.eyebrow": "قوائم مختارة",
            "featured.heading": "عقارات مميزة",
            "featured.viewAll": "عرض جميع العقارات",
            "featured.viewDetails": "عرض التفاصيل",
            "cta.heading": "هل أنت مستعد للعثور على العقار المناسب؟",
            "cta.subtitle": "تحدث مع مستشارنا العقاري واحصل على إرشادات عقارية احترافية.",
            "cta.viewProperties": "عرض العقارات",
            "cta.talkAdvisor": "تحدث إلى مستشار",
            "footer.tagline": "استشارات عقارية احترافية في مومباي، ماهاراشترا، الهند.",
            "footer.company": "الشركة",
            "footer.services": "الخدمات",
            "footer.legal": "قانوني",
            "footer.contact": "اتصل",
            "footer.privacy": "سياسة الخصوصية",
            "footer.terms": "شروط الخدمة",
            "footer.cookies": "سياسة ملفات الارتباط",
            "footer.address": "FS Real Estate، Okaz Shopping Centre، A/31، Millat Nagar Rd، Milat Nagar، Andheri West، Mumbai، Maharashtra 400053",
            "footer.hours": "السبت–الخميس: 09:00–21:30، الجمعة: مغلق",
            "filters.all": "الكل",
            "filters.residential": "سكني",
            "filters.commercial": "تجاري",
            "filters.family": "عائلي",
            "filters.available": "متاح",
            "properties.eyebrow": "القوائم",
            "properties.pageTitle": "عقاراتنا",
            "contact.eyebrow": "تواصل معنا",
            "contact.pageTitle": "اتصل بنا",
            "contact.infoTitle": "معلومات الاتصال",
            "contact.addressLabel": "العنوان:",
            "contact.emailLabel": "البريد الإلكتروني:",
            "contact.phoneLabel": "الهاتف:",
            "contact.whatsappLabel": "واتساب:",
            "contact.hoursTitle": "ساعات العمل",
            "contact.mapTitle": "قم بزيارة موقعنا",
            "contact.mapAddress": "FS Real Estate<br>Okaz Shopping Centre, A/31, Millat Nagar Rd, Milat Nagar, Andheri West, Mumbai, Maharashtra 400053",
            "hours.saturday": "السبت: 09:00–11:30، 15:30–21:30",
            "hours.sunday": "الأحد: 09:00–11:30، 15:30–21:30",
            "hours.monday": "الاثنين: 09:00–11:30، 15:30–21:30",
            "hours.tuesday": "الثلاثاء: 09:00–11:30، 13:30–21:30",
            "hours.wednesday": "الأربعاء: 09:00–11:30، 13:30–21:30",
            "hours.thursday": "الخميس: 09:00–11:30، 13:30–21:30",
            "hours.friday": "الجمعة: مغلق",
            "advisor.eyebrow": "استشارة",
            "advisor.pageTitle": "تحدث إلى مستشار",
            "advisor.subtitle": "فريقنا جاهز لمساعدتك في متطلباتك العقارية.",
            "form.fullName": "الاسم الكامل *",
            "form.email": "البريد الإلكتروني *",
            "form.phone": "الهاتف *",
            "form.propertyType": "نوع العقار *",
            "form.selectProperty": "اختر نوع العقار",
            "form.residential": "سكني",
            "form.commercial": "تجاري",
            "form.family": "عائلي",
            "form.other": "أخرى",
            "form.message": "الرسالة *",
            "form.sendInquiry": "إرسال الاستفسار",
            "form.successMessage": "شكراً لك. تم استلام استفسارك بنجاح. سيتواصل معك مستشارنا قريباً.",
            "form.fullNameError": "يرجى إدخال اسمك الكامل.",
            "form.emailError": "يرجى إدخال عنوان بريد إلكتروني صالح.",
            "form.phoneError": "يرجى إدخال رقم هاتفك.",
            "form.propertyTypeError": "يرجى اختيار نوع العقار.",
            "form.messageError": "يرجى إدخال رسالة.",
            "openNow": "مفتوح الآن",
            "openClosed": "مغلق الآن",
            "opensSoon": "يفتح قريباً",
            "soldText": "مباع",
            "service.residential.eyebrow": "خدماتنا",
            "service.residential.title": "العقارات السكنية",
            "service.residential.heading": "إرشاد سكني مناسب للعائلات",
            "service.residential.paragraph1": "نساعد العائلات في العثور على المنزل المثالي في مومباي، مع التركيز على الأمان والراحة والقيمة طويلة الأجل. من الشقق الحديثة إلى الفلل الفسيحة، قوائمنا السكنية مصممة لتلبية احتياجاتك.",
            "service.residential.paragraph2": "يقدم مستشارونا إرشادات واضحة حول الأحياء والمرافق وإمكانات الاستثمار، مما يضمن لك قراراً واثقاً.",
            "service.residential.benefit1": "خيارات عقارية عائلية",
            "service.residential.benefit2": "رؤى الأحياء",
            "service.residential.benefit3": "نصائح استثمارية",
            "service.residential.benefit4": "دعم عملاء متميز",
            "service.residential.viewProperties": "عرض العقارات",
            "service.residential.talkAdvisor": "تحدث إلى مستشار",
            "service.commercial.eyebrow": "خدماتنا",
            "service.commercial.title": "العقارات التجارية",
            "service.commercial.heading": "الفرص التجارية والاستشارات",
            "service.commercial.paragraph1": "يقدم قسمنا التجاري استشارات متخصصة للمساحات المكتبية ومنافذ البيع بالتجزئة والعقارات الاستثمارية في سوق مومباي الديناميكي.",
            "service.commercial.paragraph2": "نحلل الموقع وحركة المرور وإمكانات النمو لمساعدتك في الحصول على الأصل التجاري المناسب.",
            "service.commercial.benefit1": "تحليل الاستثمار",
            "service.commercial.benefit2": "مواقع متميزة",
            "service.commercial.benefit3": "نصائح تركز على العائد",
            "service.commercial.benefit4": "دعم التفاوض",
            "service.commercial.viewProperties": "عرض العقارات",
            "service.commercial.talkAdvisor": "تحدث إلى مستشار",
            "service.guidance.eyebrow": "خدماتنا",
            "service.guidance.title": "الإرشاد العقاري",
            "service.guidance.heading": "قرارات عقارية واضحة وواثقة",
            "service.guidance.paragraph1": "نساعدك في التنقل في سوق العقارات بمومباي بنصائح شفافة حول التسعير والإجراءات القانونية واختيار العقار.",
            "service.guidance.paragraph2": "من المشترين لأول مرة إلى المستثمرين المخضرمين، يضمن إرشادنا فهمك لكل خطوة.",
            "service.guidance.benefit1": "تحليل السوق",
            "service.guidance.benefit2": "نظرة عامة على الإجراءات القانونية",
            "service.guidance.benefit3": "مقارنة العقارات",
            "service.guidance.benefit4": "نصائح التفاوض",
            "service.guidance.viewProperties": "عرض العقارات",
            "service.guidance.talkAdvisor": "تحدث إلى مستشار",
            "service.consultation.eyebrow": "خدماتنا",
            "service.consultation.title": "الاستشارات العقارية",
            "service.consultation.heading": "استشارات عقارية احترافية",
            "service.consultation.paragraph1": "يقدم مستشارونا نصائح شخصية لشراء أو بيع أو الاستثمار في سوق العقارات بمومباي.",
            "service.consultation.paragraph2": "نجمع بين المعرفة المحلية والتحليل المهني لمساعدتك على تحقيق أهدافك العقارية.",
            "service.consultation.benefit1": "استشارات فردية",
            "service.consultation.benefit2": "تقييم السوق",
            "service.consultation.benefit3": "استراتيجية الاستثمار",
            "service.consultation.benefit4": "دعم ما بعد البيع",
            "service.consultation.viewProperties": "عرض العقارات",
            "service.consultation.talkAdvisor": "تحدث إلى مستشار",
            "service.relatedTitle": "خدمات ذات صلة",
            "legal.privacyTitle": "سياسة الخصوصية",
            "legal.updated": "آخر تحديث: يناير 2026",
            "legal.privacyIntroTitle": "مقدمة",
            "legal.privacyIntro": "تحترم FS Real Estate خصوصيتك وتلتزم بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند زيارتك لموقعنا أو استخدام خدماتنا.",
            "legal.privacyDataTitle": "المعلومات التي نجمعها",
            "legal.privacyData": "قد نجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي تفاصيل تقدمها من خلال نماذج الاتصال أو استفسارات المستشار.",
            "legal.privacyUseTitle": "كيف نستخدم معلوماتك",
            "legal.privacyUse": "نستخدم معلوماتك للرد على الاستفسارات وتقديم الخدمات العقارية وتحسين موقعنا والامتثال للالتزامات القانونية.",
            "legal.privacyShareTitle": "مشاركة المعلومات",
            "legal.privacyShare": "لا نبيع بياناتك الشخصية. قد نشارك المعلومات مع أطراف ثالثة موثوقة تساعدنا في تشغيل موقعنا أو إدارة أعمالنا، بشرط موافقتهم على الحفاظ على سريتها.",
            "legal.privacySecurityTitle": "أمن البيانات",
            "legal.privacySecurity": "ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف.",
            "legal.privacyRightsTitle": "حقوقك",
            "legal.privacyRights": "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. لممارسة هذه الحقوق، يرجى الاتصال بنا على fsdealsrealestate@gmail.com.",
            "legal.privacyCookiesTitle": "ملفات الارتباط",
            "legal.privacyCookies": "قد يستخدم موقعنا ملفات الارتباط لتحسين تجربة التصفح. راجع سياسة ملفات الارتباط لمزيد من التفاصيل.",
            "legal.privacyContactTitle": "اتصل بنا",
            "legal.privacyContact": "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على fsdealsrealestate@gmail.com أو الاتصال على +91 529 47571.",
            "legal.termsTitle": "شروط الخدمة",
            "legal.termsIntroTitle": "مقدمة",
            "legal.termsIntro": "تحكم شروط الخدمة هذه (\"الشروط\") استخدامك لموقع FS Real Estate وخدماتها. من خلال الوصول إلى موقعنا أو استخدامه، فإنك توافق على الالتزام بهذه الشروط.",
            "legal.termsAcceptTitle": "قبول الشروط",
            "legal.termsAccept": "باستخدامك موقعنا، فإنك تؤكد قبولك لهذه الشروط وتوافق على الامتثال لها. إذا كنت لا توافق، يرجى عدم استخدام موقعنا.",
            "legal.termsUseTitle": "استخدام الموقع",
            "legal.termsUse": "يمكنك استخدام موقعنا للأغراض القانونية فقط. يجب عدم إساءة استخدام الموقع أو محاولة الوصول غير المصرح به إلى أي جزء منه.",
            "legal.termsIntellectualTitle": "الملكية الفكرية",
            "legal.termsIntellectual": "جميع المحتويات والتصميم والمواد الموجودة على هذا الموقع هي ملك لFS Real Estate ما لم يُذكر خلاف ذلك. لا يجوز لك إعادة إنتاج أو توزيع أي محتوى دون موافقة كتابية مسبقة.",
            "legal.termsLiabilityTitle": "تحديد المسؤولية",
            "legal.termsLiability": "لن تكون FS Real Estate مسؤولة عن أي خسارة مباشرة أو غير مباشرة أو تبعية تنشأ عن استخدام هذا الموقع أو الاعتماد على محتواه.",
            "legal.termsGoverningTitle": "القانون الحاكم",
            "legal.termsGoverning": "تخضع هذه الشروط لقوانين الهند. وأي نزاعات تخضع للاختصاص القضائي الحصري للمحاكم الهندية.",
            "legal.termsContactTitle": "اتصل بنا",
            "legal.termsContact": "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على fsdealsrealestate@gmail.com أو الاتصال على +91 529 47571.",
            "legal.cookieTitle": "سياسة ملفات الارتباط",
            "legal.cookieWhatTitle": "ما هي ملفات الارتباط",
            "legal.cookieWhat": "ملفات الارتباط هي ملفات نصية صغيرة يتم وضعها على جهازك عند زيارة موقع ويب. وهي تستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أكبر وتوفير المعلومات لأصحاب الموقع.",
            "legal.cookieUseTitle": "كيف نستخدم ملفات الارتباط",
            "legal.cookieUse": "نستخدم ملفات الارتباط لتحسين تجربة التصفح، وتحليل حركة المرور، وفهم كيفية تفاعل الزوار مع موقعنا. وهذا يساعدنا على تحسين خدماتنا ومحتوانا.",
            "legal.cookieTypesTitle": "أنواع ملفات الارتباط التي نستخدمها",
            "legal.cookieTypes": "قد نستخدم ملفات ارتباط الجلسة (التي تنتهي عند إغلاق المتصفح) وملفات الارتباط الدائمة (التي تبقى على جهازك لفترة محددة). كما قد نستخدم ملفات ارتباط من طرف ثالث، مثل تلك الخاصة بمقدمي التحليلات.",
            "legal.cookieManageTitle": "إدارة ملفات الارتباط",
            "legal.cookieManage": "يمكنك التحكم في ملفات الارتباط و/أو حذفها كما تشاء. تسمح معظم المتصفحات برفض ملفات الارتباط أو قبولها. ومع ذلك، قد يؤثر تعطيل ملفات الارتباط على وظائف موقعنا.",
            "legal.cookieContactTitle": "اتصل بنا",
            "legal.cookieContact": "إذا كانت لديك أي أسئلة حول استخدامنا لملفات الارتباط، يرجى الاتصال بنا على fsdealsrealestate@gmail.com.",
            "nav.villas": "الفلل",
            "villas.eyebrow": "مجموعة حصرية",
            "villas.pageTitle": "فلل فاخرة في مومباي",
            "villas.subtitle": "اكتشف مجموعتنا المختارة من الفلل العائلية الفاخرة"
        }
    };

    // ---------- Property Data ----------
    window.propertiesData = [
        {
            id: 1,
            category: "residential",
            type: "family",
            status: "available",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Modern Family Villa", location: "Andheri West, Mumbai", description: "Spacious 4-bedroom family villa with private garden." },
                ar: { title: "فيلا عائلية حديثة", location: "أنديري ويست، مومباي", description: "فيلا عائلية واسعة من 4 غرف نوم مع حديقة خاصة." }
            },
            bedrooms: 4,
            bathrooms: 3,
            area: "280 m²"
        },
        {
            id: 2,
            category: "residential",
            type: "family",
            status: "available",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Cozy Family Apartment", location: "Mumbai", description: "3-bedroom apartment in a quiet family neighbourhood." },
                ar: { title: "شقة عائلية مريحة", location: "مومباي", description: "شقة من 3 غرف نوم في حي عائلي هادئ." }
            },
            bedrooms: 3,
            bathrooms: 2,
            area: "180 m²"
        },
        {
            id: 3,
            category: "commercial",
            type: "commercial",
            status: "available",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Prime Office Space", location: "Andheri West, Mumbai", description: "Modern office space in a prime commercial district." },
                ar: { title: "مساحة مكتبية متميزة", location: "أنديري ويست، مومباي", description: "مساحة مكتبية حديثة في منطقة تجارية رئيسية." }
            },
            bedrooms: 0,
            bathrooms: 1,
            area: "120 m²"
        },
        {
            id: 4,
            category: "residential",
            type: "family",
            status: "sold",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Luxury Apartment", location: "Mumbai", description: "High-end apartment with sea view and premium amenities." },
                ar: { title: "شقة فاخرة", location: "مومباي", description: "شقة راقية بإطلالة بحرية ومرافق متميزة." }
            },
            bedrooms: 3,
            bathrooms: 3,
            area: "200 m²"
        },
        {
            id: 5,
            category: "residential",
            type: "family",
            status: "available",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Elegant Townhouse", location: "Andheri West, Mumbai", description: "Stylish 3-bedroom townhouse with modern finishes." },
                ar: { title: "تاون هاوس أنيق", location: "أنديري ويست، مومباي", description: "تاون هاوس أنيق من 3 غرف نوم بتشطيبات حديثة." }
            },
            bedrooms: 3,
            bathrooms: 2,
            area: "220 m²"
        },
        {
            id: 6,
            category: "commercial",
            type: "commercial",
            status: "available",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Retail Storefront", location: "Andheri West, Mumbai", description: "High-traffic retail space ideal for business." },
                ar: { title: "واجهة متجر", location: "أنديري ويست، مومباي", description: "مساحة بيع بالتجزئة عالية الحركة مثالية للأعمال." }
            },
            bedrooms: 0,
            bathrooms: 1,
            area: "80 m²"
        },
        {
            id: 7,
            category: "residential",
            type: "villa",
            status: "available",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Luxury Family Villa", location: "Andheri West, Mumbai", description: "5-bedroom luxury villa with private pool and garden." },
                ar: { title: "فيلا عائلية فاخرة", location: "أنديري ويست، مومباي", description: "فيلا فاخرة من 5 غرف نوم مع مسبح خاص وحديقة." }
            },
            bedrooms: 5,
            bathrooms: 4,
            area: "350 m²"
        },
        {
            id: 8,
            category: "residential",
            type: "villa",
            status: "available",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
            translations: {
                en: { title: "Modern Villa with Garden View", location: "Andheri West, Mumbai", description: "Contemporary 4-bedroom villa with panoramic garden views." },
                ar: { title: "فيلا حديثة بإطلالة حديقة", location: "أنديري ويست، مومباي", description: "فيلا عصرية من 4 غرف نوم مع إطلالات حديقة بانورامية." }
            },
            bedrooms: 4,
            bathrooms: 3,
            area: "300 m²"
        }
    ];

    // ---------- State ----------
    window.currentLang = localStorage.getItem('fsLanguage') || 'en';
    window.currentFilter = 'all';

    // ---------- Initialize Everything ----------
    applyLanguage(window.currentLang);
    initMobileMenu();
    initLanguageSelector();
    renderProperties();
    initPropertyFilters();
    initForms();
    updateOpeningStatus();
    setInterval(updateOpeningStatus, 60000);
    initScrollAnimations();

    console.log('FS Real Estate initialized successfully!');
});

// ---------- Language Functions ----------
function applyLanguage(lang) {
    if (!window.translations[lang]) lang = 'en';
    window.currentLang = lang;
    localStorage.setItem('fsLanguage', lang);
    
    // Set HTML language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Update all data-i18n elements
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var key = el.getAttribute('data-i18n');
        if (window.translations[lang] && window.translations[lang][key]) {
            el.textContent = window.translations[lang][key];
        }
    }

    // Update current language display
    var currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = window.translations[lang]['lang.current'];
    }

    // Update active language option
    var langOptions = document.querySelectorAll('.lang-option');
    for (var j = 0; j < langOptions.length; j++) {
        var btn = langOptions[j];
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }

    renderProperties();
    updateOpeningStatus();
}

// ---------- Language Selector ----------
function initLanguageSelector() {
    var langBtn = document.querySelector('.lang-btn');
    var dropdown = document.getElementById('langDropdown');
    
    if (!langBtn || !dropdown) {
        console.warn('Language selector elements not found');
        return;
    }

    // Remove any existing event listeners by cloning
    var newLangBtn = langBtn.cloneNode(true);
    langBtn.parentNode.replaceChild(newLangBtn, langBtn);
    langBtn = newLangBtn;

    // Toggle dropdown on button click
    langBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = dropdown.classList.contains('open');
        if (isOpen) {
            dropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        } else {
            dropdown.classList.add('open');
            langBtn.setAttribute('aria-expanded', 'true');
        }
        console.log('Language button clicked, dropdown open:', !isOpen);
    });

    // Handle language selection
    var options = dropdown.querySelectorAll('.lang-option');
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var lang = this.dataset.lang;
            if (lang) {
                applyLanguage(lang);
                dropdown.classList.remove('open');
                langBtn.setAttribute('aria-expanded', 'false');
                console.log('Language changed to:', lang);
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (dropdown.classList.contains('open') && 
            !dropdown.contains(e.target) && 
            !langBtn.contains(e.target)) {
            dropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    console.log('Language selector initialized');
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var mobileNav = document.getElementById('mobileNav');
    
    if (!toggle || !mobileNav) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Remove any existing event listeners by cloning
    var newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    toggle = newToggle;

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            mobileNav.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        } else {
            mobileNav.classList.add('open');
            toggle.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
        }
        console.log('Mobile menu toggled, open:', !isOpen);
    });

    // Close mobile menu when clicking a link
    var links = mobileNav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('open') && 
            !mobileNav.contains(e.target) && 
            !toggle.contains(e.target)) {
            mobileNav.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    console.log('Mobile menu initialized');
}

// ---------- Property Functions ----------
function getPropertyTranslation(prop, lang) {
    return prop.translations[lang] || prop.translations.en;
}

function createPropertyCard(prop) {
    var t = getPropertyTranslation(prop, window.currentLang);
    var card = document.createElement('article');
    card.className = 'property-card';
    card.dataset.id = prop.id;
    
    var statusText = prop.status === 'available' ? 
        window.translations[window.currentLang]['filters.available'] : 
        window.translations[window.currentLang]['soldText'];
    
    var categoryText = window.translations[window.currentLang]['filters.' + prop.category] || prop.category;
    
    card.innerHTML = 
        '<div class="property-card-image">' +
            '<img src="' + prop.image + '" alt="' + t.title + '" loading="lazy" decoding="async">' +
            '<span class="property-status ' + prop.status + '">' + statusText + '</span>' +
        '</div>' +
        '<div class="property-card-body">' +
            '<span class="property-category">' + categoryText + '</span>' +
            '<h3 class="property-title">' + t.title + '</h3>' +
            '<p class="property-location">📍 ' + t.location + '</p>' +
            '<div class="property-details">' +
                '<span class="property-detail-item">🛏 ' + prop.bedrooms + '</span>' +
                '<span class="property-detail-item">🛁 ' + prop.bathrooms + '</span>' +
                '<span class="property-detail-item">📐 ' + prop.area + '</span>' +
            '</div>' +
            '<p class="property-description">' + t.description + '</p>' +
            '<button class="btn btn-outline view-details" data-id="' + prop.id + '">' + 
                window.translations[window.currentLang]['featured.viewDetails'] + 
            '</button>' +
        '</div>';
    
    var viewBtn = card.querySelector('.view-details');
    viewBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        openPropertyModal(prop);
    });
    
    card.addEventListener('click', function() {
        openPropertyModal(prop);
    });
    
    return card;
}

function renderFeaturedProperties() {
    var grid = document.getElementById('featuredPropertiesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    var availableProps = [];
    for (var i = 0; i < window.propertiesData.length; i++) {
        if (window.propertiesData[i].status === 'available') {
            availableProps.push(window.propertiesData[i]);
        }
    }
    
    var featured = availableProps.slice(0, 3);
    for (var j = 0; j < featured.length; j++) {
        grid.appendChild(createPropertyCard(featured[j]));
    }
}

function renderAllProperties(filter) {
    if (typeof filter === 'undefined') filter = 'all';
    var grid = document.getElementById('allPropertiesGrid') || document.getElementById('villasGrid');
    if (!grid) return;
    grid.innerHTML = '';

    var baseData = window.propertiesData;
    var filtered = [];
    
    if (filter === 'all') {
        filtered = baseData;
    } else if (filter === 'available') {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].status === 'available') {
                filtered.push(baseData[i]);
            }
        }
    } else if (filter === 'villa') {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].type === 'villa') {
                filtered.push(baseData[i]);
            }
        }
    } else if (filter === 'family') {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].type === 'family') {
                filtered.push(baseData[i]);
            }
        }
    } else if (filter === 'residential') {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].category === 'residential' && baseData[i].type !== 'villa') {
                filtered.push(baseData[i]);
            }
        }
    } else if (filter === 'commercial') {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].category === 'commercial') {
                filtered.push(baseData[i]);
            }
        }
    } else {
        for (var i = 0; i < baseData.length; i++) {
            if (baseData[i].category === filter) {
                filtered.push(baseData[i]);
            }
        }
    }
    
    for (var j = 0; j < filtered.length; j++) {
        grid.appendChild(createPropertyCard(filtered[j]));
    }
}

function renderProperties() {
    renderFeaturedProperties();
    renderAllProperties(window.currentFilter || 'all');
}

// ---------- Property Filters ----------
function initPropertyFilters() {
    var filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;
    
    filterBar.addEventListener('click', function(e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        window.currentFilter = btn.dataset.filter;
        
        var buttons = filterBar.querySelectorAll('.filter-btn');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        btn.classList.add('active');
        
        renderAllProperties(window.currentFilter);
    });
}

// ---------- Property Modal ----------
function openPropertyModal(prop) {
    var t = getPropertyTranslation(prop, window.currentLang);
    var modal = document.createElement('div');
    modal.className = 'property-modal';
    
    var categoryText = window.translations[window.currentLang]['filters.' + prop.category] || prop.category;
    
    modal.innerHTML = 
        '<div class="modal-backdrop"></div>' +
        '<div class="modal-content">' +
            '<button class="modal-close" aria-label="Close">×</button>' +
            '<img src="' + prop.image + '" alt="' + t.title + '">' +
            '<h2>' + t.title + '</h2>' +
            '<p>📍 ' + t.location + '</p>' +
            '<p>🛏 ' + prop.bedrooms + ' | 🛁 ' + prop.bathrooms + ' | 📐 ' + prop.area + '</p>' +
            '<p>' + t.description + '</p>' +
            '<p><strong>' + categoryText + '</strong> · ' + prop.status + '</p>' +
            '<a href="../company/talk-to-an-advisor.html" class="btn btn-primary">' + 
                window.translations[window.currentLang]['nav.advisor'] + 
            '</a>' +
        '</div>';
    
    document.body.appendChild(modal);
    
    var closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', function() {
        modal.remove();
    });
    
    var backdrop = modal.querySelector('.modal-backdrop');
    backdrop.addEventListener('click', function() {
        modal.remove();
    });
    
    closeBtn.focus();
}

// ---------- Form Validation ----------
function initForms() {
    var advisorForm = document.getElementById('advisorForm');
    if (!advisorForm) return;
    
    advisorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateAdvisorForm()) {
            var success = document.getElementById('advisorFormSuccess');
            if (success) {
                success.hidden = false;
                advisorForm.reset();
                setTimeout(function() {
                    success.hidden = true;
                }, 5000);
            }
        }
    });
}

function validateAdvisorForm() {
    var name = document.getElementById('fullName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var propertyType = document.getElementById('propertyType');
    var message = document.getElementById('message');
    var isValid = true;

    clearErrors();

    if (!name || !name.value.trim()) {
        showError('fullNameError', window.translations[window.currentLang]['form.fullNameError']);
        isValid = false;
    }
    if (!email || !email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        showError('emailError', window.translations[window.currentLang]['form.emailError']);
        isValid = false;
    }
    if (!phone || !phone.value.trim()) {
        showError('phoneError', window.translations[window.currentLang]['form.phoneError']);
        isValid = false;
    }
    if (!propertyType || !propertyType.value) {
        showError('propertyTypeError', window.translations[window.currentLang]['form.propertyTypeError']);
        isValid = false;
    }
    if (!message || !message.value.trim()) {
        showError('messageError', window.translations[window.currentLang]['form.messageError']);
        isValid = false;
    }
    return isValid;
}

function showError(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function clearErrors() {
    var elements = document.querySelectorAll('.error-message');
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = '';
    }
}

// ---------- Opening Status ----------
function updateOpeningStatus() {
    var statusEl = document.getElementById('openStatus');
    if (!statusEl) return;
    
    var now = new Date();
    var indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    var day = indiaTime.getDay();
    var hours = indiaTime.getHours();
    var minutes = indiaTime.getMinutes();
    var timeInMinutes = hours * 60 + minutes;

    var status = 'closed';
    var label = window.translations[window.currentLang]['openClosed'];

    if (day === 5) {
        status = 'closed';
        label = window.translations[window.currentLang]['openClosed'];
    } else {
        var morningStart = 9 * 60;
        var morningEnd = 11 * 60 + 30;
        var eveningStart, eveningEnd = 21 * 60 + 30;
        
        if (day === 6 || day === 0 || day === 1) {
            eveningStart = 15 * 60 + 30;
        } else {
            eveningStart = 13 * 60 + 30;
        }
        
        if ((timeInMinutes >= morningStart && timeInMinutes < morningEnd) ||
            (timeInMinutes >= eveningStart && timeInMinutes < eveningEnd)) {
            status = 'open';
            label = window.translations[window.currentLang]['openNow'];
        } else if (timeInMinutes < morningStart) {
            status = 'soon';
            label = window.translations[window.currentLang]['opensSoon'];
        } else {
            status = 'closed';
            label = window.translations[window.currentLang]['openClosed'];
        }
    }

    statusEl.className = 'open-status ' + status;
    statusEl.textContent = label;
}

// ---------- Scroll Animations ----------
function initScrollAnimations() {
    var elements = document.querySelectorAll('.service-card, .property-card, .about-image, .about-content');
    
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.1 });
        
        for (var j = 0; j < elements.length; j++) {
            var el = elements[j];
            el.classList.add('animate-ready');
            observer.observe(el);
        }
    } else {
        // Fallback for older browsers
        for (var k = 0; k < elements.length; k++) {
            elements[k].classList.add('fade-in');
        }
    }
                  }
