// ============================================
// SAMA United Real Estate Co - Main JavaScript
// ============================================

// ---------- Translations ----------
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.properties": "Properties",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "nav.advisor": "Talk to an Advisor",
        "lang.current": "English",
        "hero.eyebrow": "Real Estate Consultant · Al Khobar",
        "hero.subtitle": "Professional and trusted real-estate consultation for clients and families in Al Khobar, Saudi Arabia.",
        "hero.viewProperties": "View Properties",
        "hero.talkAdvisor": "Talk to an Advisor",
        "about.eyebrow": "About Us",
        "about.heading": "About SAMA United Real Estate Co.",
        "about.paragraph1": "شركة سمة المتحدة العقارية SAMA United Real Estate Co is a professional real-estate consultant serving Al-Thuqbah / Al Khobar, Saudi Arabia. We provide trusted guidance for families and clients seeking residential, commercial, and investment properties.",
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
        "services.consultation.desc": "Professional real-estate consultation in Al Khobar.",
        "services.consultation.cta": "Book Consultation",
        "featured.eyebrow": "Curated Listings",
        "featured.heading": "Featured Properties",
        "featured.viewAll": "View All Properties",
        "featured.viewDetails": "View Details",
        "cta.heading": "Ready to find the right property?",
        "cta.subtitle": "Speak with our real-estate advisor and get professional property guidance.",
        "cta.viewProperties": "View Properties",
        "cta.talkAdvisor": "Talk to an Advisor",
        "footer.tagline": "Professional real-estate consultancy in Al Khobar, Saudi Arabia.",
        "footer.company": "Company",
        "footer.services": "Services",
        "footer.legal": "Legal",
        "footer.contact": "Contact",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookie Policy",
        "footer.address": "3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
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
        "contact.mapAddress": "شركة سمة المتحدة العقارية SAMA United Real Estate Co<br>3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
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
        "service.residential.paragraph1": "We help families find the perfect home in Al Khobar, focusing on safety, comfort, and long-term value. From modern apartments to spacious villas, our residential listings are curated to meet your needs.",
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
        "service.commercial.paragraph1": "Our commercial division offers expert consultation for office spaces, retail outlets, and investment properties in Al Khobar's dynamic market.",
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
        "service.guidance.paragraph1": "We help you navigate the Al Khobar real-estate market with transparent advice on pricing, legal processes, and property selection.",
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
        "service.consultation.paragraph1": "Our consultants provide personalised advice for buying, selling, or investing in Al Khobar's real-estate market.",
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
        "legal.privacyIntro": "SAMA United Real Estate Co (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
        "legal.privacyDataTitle": "Information We Collect",
        "legal.privacyData": "We may collect personal information such as your name, email address, phone number, and any details you provide through our contact forms or advisor inquiries.",
        "legal.privacyUseTitle": "How We Use Your Information",
        "legal.privacyUse": "We use your information to respond to inquiries, provide real-estate services, improve our website, and comply with legal obligations.",
        "legal.privacyShareTitle": "Information Sharing",
        "legal.privacyShare": "We do not sell your personal data. We may share information with trusted third parties who assist us in operating our website or conducting business, provided they agree to keep it confidential.",
        "legal.privacySecurityTitle": "Data Security",
        "legal.privacySecurity": "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or disclosure.",
        "legal.privacyRightsTitle": "Your Rights",
        "legal.privacyRights": "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact.sama.unitedrealestate@gmail.com.",
        "legal.privacyCookiesTitle": "Cookies",
        "legal.privacyCookies": "Our website may use cookies to enhance your browsing experience. See our Cookie Policy for more details.",
        "legal.privacyContactTitle": "Contact Us",
        "legal.privacyContact": "If you have any questions about this privacy policy, please contact us at contact.sama.unitedrealestate@gmail.com or call +966 50 572 3111.",
        "legal.termsTitle": "Terms of Service",
        "legal.termsIntroTitle": "Introduction",
        "legal.termsIntro": "These Terms of Service (\"Terms\") govern your use of the SAMA United Real Estate Co website and services. By accessing or using our website, you agree to be bound by these Terms.",
        "legal.termsAcceptTitle": "Acceptance of Terms",
        "legal.termsAccept": "By using our website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use our website.",
        "legal.termsUseTitle": "Use of Website",
        "legal.termsUse": "You may use our website for lawful purposes only. You must not misuse the website or attempt to gain unauthorised access to any part of it.",
        "legal.termsIntellectualTitle": "Intellectual Property",
        "legal.termsIntellectual": "All content, design, and materials on this website are the property of SAMA United Real Estate Co unless otherwise stated. You may not reproduce or distribute any content without prior written consent.",
        "legal.termsLiabilityTitle": "Limitation of Liability",
        "legal.termsLiability": "SAMA United Real Estate Co will not be liable for any direct, indirect, or consequential loss arising from the use of this website or reliance on its content.",
        "legal.termsGoverningTitle": "Governing Law",
        "legal.termsGoverning": "These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the Saudi courts.",
        "legal.termsContactTitle": "Contact Us",
        "legal.termsContact": "If you have any questions about these Terms, please contact us at contact.sama.unitedrealestate@gmail.com or call +966 50 572 3111.",
        "legal.cookieTitle": "Cookie Policy",
        "legal.cookieWhatTitle": "What Are Cookies",
        "legal.cookieWhat": "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.",
        "legal.cookieUseTitle": "How We Use Cookies",
        "legal.cookieUse": "We use cookies to enhance your browsing experience, analyse site traffic, and understand how visitors interact with our website. This helps us improve our services and content.",
        "legal.cookieTypesTitle": "Types of Cookies We Use",
        "legal.cookieTypes": "We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). We may also use third‑party cookies, such as those from analytics providers.",
        "legal.cookieManageTitle": "Managing Cookies",
        "legal.cookieManage": "You can control and/or delete cookies as you wish. Most browsers allow you to refuse or accept cookies. However, disabling cookies may affect the functionality of our website.",
        "legal.cookieContactTitle": "Contact Us",
        "legal.cookieContact": "If you have any questions about our use of cookies, please contact us at contact.sama.unitedrealestate@gmail.com.",
        "nav.villas": "Villas",
        "villas.eyebrow": "Exclusive Collection",
        "villas.pageTitle": "Luxury Villas in Al Khobar",
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
        "hero.eyebrow": "مستشار عقاري · الخبر",
        "hero.subtitle": "استشارات عقارية موثوقة ومهنية للعملاء والعائلات في الخبر، المملكة العربية السعودية.",
        "hero.viewProperties": "عرض العقارات",
        "hero.talkAdvisor": "تحدث إلى مستشار",
        "about.eyebrow": "من نحن",
        "about.heading": "عن شركة سمة المتحدة العقارية",
        "about.paragraph1": "شركة سمة المتحدة العقارية SAMA United Real Estate Co هي مستشار عقاري محترف يخدم الثقبة / الخبر، المملكة العربية السعودية. نقدم إرشادات موثوقة للعائلات والعملاء الباحثين عن عقارات سكنية وتجارية واستثمارية.",
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
        "services.consultation.desc": "استشارات عقارية احترافية في الخبر.",
        "services.consultation.cta": "احجز استشارة",
        "featured.eyebrow": "قوائم مختارة",
        "featured.heading": "عقارات مميزة",
        "featured.viewAll": "عرض جميع العقارات",
        "featured.viewDetails": "عرض التفاصيل",
        "cta.heading": "هل أنت مستعد للعثور على العقار المناسب؟",
        "cta.subtitle": "تحدث مع مستشارنا العقاري واحصل على إرشادات عقارية احترافية.",
        "cta.viewProperties": "عرض العقارات",
        "cta.talkAdvisor": "تحدث إلى مستشار",
        "footer.tagline": "استشارات عقارية احترافية في الخبر، المملكة العربية السعودية.",
        "footer.company": "الشركة",
        "footer.services": "الخدمات",
        "footer.legal": "قانوني",
        "footer.contact": "اتصل",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.cookies": "سياسة ملفات الارتباط",
        "footer.address": "الشارع الثالث، الثقبة، الخبر 34623، المملكة العربية السعودية",
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
        "contact.mapAddress": "شركة سمة المتحدة العقارية SAMA United Real Estate Co<br>الشارع الثالث، الثقبة، الخبر 34623، المملكة العربية السعودية",
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
        "service.residential.paragraph1": "نساعد العائلات في العثور على المنزل المثالي في الخبر، مع التركيز على الأمان والراحة والقيمة طويلة الأجل. من الشقق الحديثة إلى الفلل الفسيحة، قوائمنا السكنية مصممة لتلبية احتياجاتك.",
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
        "service.commercial.paragraph1": "يقدم قسمنا التجاري استشارات متخصصة للمساحات المكتبية ومنافذ البيع بالتجزئة والعقارات الاستثمارية في سوق الخبر الديناميكي.",
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
        "service.guidance.paragraph1": "نساعدك في التنقل في سوق العقارات بالخبر بنصائح شفافة حول التسعير والإجراءات القانونية واختيار العقار.",
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
        "service.consultation.paragraph1": "يقدم مستشارونا نصائح شخصية لشراء أو بيع أو الاستثمار في سوق العقارات بالخبر.",
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
        "legal.privacyIntro": "تحترم شركة سمة المتحدة العقارية خصوصيتك وتلتزم بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند زيارتك لموقعنا أو استخدام خدماتنا.",
        "legal.privacyDataTitle": "المعلومات التي نجمعها",
        "legal.privacyData": "قد نجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي تفاصيل تقدمها من خلال نماذج الاتصال أو استفسارات المستشار.",
        "legal.privacyUseTitle": "كيف نستخدم معلوماتك",
        "legal.privacyUse": "نستخدم معلوماتك للرد على الاستفسارات وتقديم الخدمات العقارية وتحسين موقعنا والامتثال للالتزامات القانونية.",
        "legal.privacyShareTitle": "مشاركة المعلومات",
        "legal.privacyShare": "لا نبيع بياناتك الشخصية. قد نشارك المعلومات مع أطراف ثالثة موثوقة تساعدنا في تشغيل موقعنا أو إدارة أعمالنا، بشرط موافقتهم على الحفاظ على سريتها.",
        "legal.privacySecurityTitle": "أمن البيانات",
        "legal.privacySecurity": "ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف.",
        "legal.privacyRightsTitle": "حقوقك",
        "legal.privacyRights": "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. لممارسة هذه الحقوق، يرجى الاتصال بنا على contact.sama.unitedrealestate@gmail.com.",
        "legal.privacyCookiesTitle": "ملفات الارتباط",
        "legal.privacyCookies": "قد يستخدم موقعنا ملفات الارتباط لتحسين تجربة التصفح. راجع سياسة ملفات الارتباط لمزيد من التفاصيل.",
        "legal.privacyContactTitle": "اتصل بنا",
        "legal.privacyContact": "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على contact.sama.unitedrealestate@gmail.com أو الاتصال على +966 50 572 3111.",
        "legal.termsTitle": "شروط الخدمة",
        "legal.termsIntroTitle": "مقدمة",
        "legal.termsIntro": "تحكم شروط الخدمة هذه (\"الشروط\") استخدامك لموقع شركة سمة المتحدة العقارية وخدماتها. من خلال الوصول إلى موقعنا أو استخدامه، فإنك توافق على الالتزام بهذه الشروط.",
        "legal.termsAcceptTitle": "قبول الشروط",
        "legal.termsAccept": "باستخدامك موقعنا، فإنك تؤكد قبولك لهذه الشروط وتوافق على الامتثال لها. إذا كنت لا توافق، يرجى عدم استخدام موقعنا.",
        "legal.termsUseTitle": "استخدام الموقع",
        "legal.termsUse": "يمكنك استخدام موقعنا للأغراض القانونية فقط. يجب عدم إساءة استخدام الموقع أو محاولة الوصول غير المصرح به إلى أي جزء منه.",
        "legal.termsIntellectualTitle": "الملكية الفكرية",
        "legal.termsIntellectual": "جميع المحتويات والتصميم والمواد الموجودة على هذا الموقع هي ملك لشركة سمة المتحدة العقارية ما لم يُذكر خلاف ذلك. لا يجوز لك إعادة إنتاج أو توزيع أي محتوى دون موافقة كتابية مسبقة.",
        "legal.termsLiabilityTitle": "تحديد المسؤولية",
        "legal.termsLiability": "لن تكون شركة سمة المتحدة العقارية مسؤولة عن أي خسارة مباشرة أو غير مباشرة أو تبعية تنشأ عن استخدام هذا الموقع أو الاعتماد على محتواه.",
        "legal.termsGoverningTitle": "القانون الحاكم",
        "legal.termsGoverning": "تخضع هذه الشروط لقوانين المملكة العربية السعودية. وأي نزاعات تخضع للاختصاص القضائي الحصري للمحاكم السعودية.",
        "legal.termsContactTitle": "اتصل بنا",
        "legal.termsContact": "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على contact.sama.unitedrealestate@gmail.com أو الاتصال على +966 50 572 3111.",
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
        "legal.cookieContact": "إذا كانت لديك أي أسئلة حول استخدامنا لملفات الارتباط، يرجى الاتصال بنا على contact.sama.unitedrealestate@gmail.com.",
        "nav.villas": "الفلل",
        "villas.eyebrow": "مجموعة حصرية",
        "villas.pageTitle": "فلل فاخرة في الخبر",
        "villas.subtitle": "اكتشف مجموعتنا المختارة من الفلل العائلية الفاخرة"
    },
    ur: {
        "nav.home": "ہوم",
        "nav.about": "ہمارے بارے میں",
        "nav.properties": "جائیدادیں",
        "nav.services": "خدمات",
        "nav.contact": "رابطہ کریں",
        "nav.advisor": "مشیر سے بات کریں",
        "lang.current": "اردو",
        "hero.eyebrow": "رئیل اسٹیٹ کنسلٹنٹ · الخبر",
        "hero.subtitle": "الخبر، سعودی عرب میں گاہکوں اور خاندانوں کے لیے پیشہ ورانہ اور قابل اعتماد رئیل اسٹیٹ مشاورت۔",
        "hero.viewProperties": "جائیدادیں دیکھیں",
        "hero.talkAdvisor": "مشیر سے بات کریں",
        "about.eyebrow": "ہمارے بارے میں",
        "about.heading": "SAMA United Real Estate Co. کے بارے میں",
        "about.paragraph1": "شركة سمة المتحدة العقارية SAMA United Real Estate Co ایک پیشہ ور رئیل اسٹیٹ کنسلٹنٹ ہے جو الثقبہ / الخبر، سعودی عرب میں خدمات فراہم کرتا ہے۔ ہم رہائشی، تجارتی اور سرمایہ کاری کی جائیدادوں کے خواہاں خاندانوں اور گاہکوں کے لیے قابل اعتماد رہنمائی فراہم کرتے ہیں۔",
        "about.paragraph2": "ہماری ٹیم واضح جائیداد کی رہنمائی، گاہک کی مدد اور پہلی انکوائری سے حتمی فیصلے تک ایک پریمیم رئیل اسٹیٹ تجربہ فراہم کرنے کے لیے وقف ہے۔",
        "about.learnMore": "ہمارے بارے میں مزید جانیں ←",
        "stats.rating": "گوگل ریٹنگ",
        "stats.reviews": "جائزے",
        "stats.local": "مقامی رئیل اسٹیٹ کنسلٹنٹ",
        "services.eyebrow": "ہم کیا کرتے ہیں",
        "services.heading": "رئیل اسٹیٹ خدمات",
        "services.residential.category": "رہائشی",
        "services.residential.title": "خاندانی رہائشی جائیدادیں",
        "services.residential.desc": "خاندان دوست رہائشی جائیدادیں اور رہنمائی۔",
        "services.residential.cta": "رہائشی دریافت کریں",
        "services.commercial.category": "تجارتی",
        "services.commercial.title": "تجارتی مواقع",
        "services.commercial.desc": "تجارتی جائیداد کے مواقع اور مشاورت۔",
        "services.commercial.cta": "تجارتی دریافت کریں",
        "services.villas.category": "ولاز",
        "services.villas.title": "لگژری ولاز",
        "services.villas.desc": "جدید سہولیات کے ساتھ پریمیم خاندانی ولاز۔",
        "services.villas.cta": "ولاز دریافت کریں",
        "services.guidance.category": "رہنمائی",
        "services.guidance.title": "جائیداد کی رہنمائی",
        "services.guidance.desc": "گاہکوں کو پراعتماد جائیداد کے فیصلے کرنے میں مدد کے لیے واضح رہنمائی۔",
        "services.guidance.cta": "رہنمائی حاصل کریں",
        "services.consultation.category": "مشاورت",
        "services.consultation.title": "رئیل اسٹیٹ مشاورت",
        "services.consultation.desc": "الخبر میں پیشہ ورانہ رئیل اسٹیٹ مشاورت۔",
        "services.consultation.cta": "مشاورت بک کریں",
        "featured.eyebrow": "منتخب فہرستیں",
        "featured.heading": "نمایاں جائیدادیں",
        "featured.viewAll": "تمام جائیدادیں دیکھیں",
        "featured.viewDetails": "تفصیلات دیکھیں",
        "cta.heading": "کیا آپ صحیح جائیداد تلاش کرنے کے لیے تیار ہیں؟",
        "cta.subtitle": "ہمارے رئیل اسٹیٹ مشیر سے بات کریں اور پیشہ ورانہ جائیداد کی رہنمائی حاصل کریں۔",
        "cta.viewProperties": "جائیدادیں دیکھیں",
        "cta.talkAdvisor": "مشیر سے بات کریں",
        "footer.tagline": "الخبر، سعودی عرب میں پیشہ ورانہ رئیل اسٹیٹ مشاورت۔",
        "footer.company": "کمپنی",
        "footer.services": "خدمات",
        "footer.legal": "قانونی",
        "footer.contact": "رابطہ",
        "footer.privacy": "پرائیویسی پالیسی",
        "footer.terms": "سروس کی شرائط",
        "footer.cookies": "کوکی پالیسی",
        "footer.address": "3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
        "footer.hours": "ہفتہ–جمعرات: 09:00–21:30، جمعہ: بند",
        "filters.all": "سب",
        "filters.residential": "رہائشی",
        "filters.commercial": "تجارتی",
        "filters.family": "خاندانی",
        "filters.available": "دستیاب",
        "properties.eyebrow": "فہرستیں",
        "properties.pageTitle": "ہماری جائیدادیں",
        "contact.eyebrow": "رابطے میں رہیں",
        "contact.pageTitle": "ہم سے رابطہ کریں",
        "contact.infoTitle": "رابطے کی معلومات",
        "contact.addressLabel": "پتہ:",
        "contact.emailLabel": "ای میل:",
        "contact.phoneLabel": "فون:",
        "contact.whatsappLabel": "واٹس ایپ:",
        "contact.hoursTitle": "کھلنے کے اوقات",
        "contact.mapTitle": "ہمارے مقام کا دورہ کریں",
        "contact.mapAddress": "شركة سمة المتحدة العقارية SAMA United Real Estate Co<br>3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
        "hours.saturday": "ہفتہ: 09:00–11:30, 15:30–21:30",
        "hours.sunday": "اتوار: 09:00–11:30, 15:30–21:30",
        "hours.monday": "پیر: 09:00–11:30, 15:30–21:30",
        "hours.tuesday": "منگل: 09:00–11:30, 13:30–21:30",
        "hours.wednesday": "بدھ: 09:00–11:30, 13:30–21:30",
        "hours.thursday": "جمعرات: 09:00–11:30, 13:30–21:30",
        "hours.friday": "جمعہ: بند",
        "advisor.eyebrow": "مشاورت",
        "advisor.pageTitle": "مشیر سے بات کریں",
        "advisor.subtitle": "ہماری ٹیم آپ کی رئیل اسٹیٹ ضروریات میں مدد کے لیے تیار ہے۔",
        "form.fullName": "پورا نام *",
        "form.email": "ای میل *",
        "form.phone": "فون *",
        "form.propertyType": "جائیداد کی قسم *",
        "form.selectProperty": "جائیداد کی قسم منتخب کریں",
        "form.residential": "رہائشی",
        "form.commercial": "تجارتی",
        "form.family": "خاندانی",
        "form.other": "دیگر",
        "form.message": "پیغام *",
        "form.sendInquiry": "انکوائری بھیجیں",
        "form.successMessage": "شکریہ۔ آپ کی انکوائری کامیابی سے موصول ہوگئی ہے۔ ہمارا مشیر جلد آپ سے رابطہ کرے گا۔",
        "form.fullNameError": "براہ کرم اپنا پورا نام درج کریں۔",
        "form.emailError": "براہ کرم ایک درست ای میل ایڈریس درج کریں۔",
        "form.phoneError": "براہ کرم اپنا فون نمبر درج کریں۔",
        "form.propertyTypeError": "براہ کرم جائیداد کی قسم منتخب کریں۔",
        "form.messageError": "براہ کرم پیغام درج کریں۔",
        "openNow": "اب کھلا ہے",
        "openClosed": "اب بند ہے",
        "opensSoon": "جلد کھلے گا",
        "soldText": "فروخت شدہ",
        "service.residential.eyebrow": "ہماری خدمات",
        "service.residential.title": "رہائشی جائیدادیں",
        "service.residential.heading": "خاندان دوست رہائشی رہنمائی",
        "service.residential.paragraph1": "ہم خاندانوں کو الخبر میں بہترین گھر تلاش کرنے میں مدد کرتے ہیں، حفاظت، آرام اور طویل مدتی قدر پر توجہ مرکوز کرتے ہیں۔ جدید اپارٹمنٹس سے لے کر کشادہ ولاز تک، ہماری رہائشی فہرستیں آپ کی ضروریات کو پورا کرنے کے لیے تیار کی گئی ہیں۔",
        "service.residential.paragraph2": "ہمارے مشیر محلے، سہولیات اور سرمایہ کاری کی صلاحیت کے بارے میں واضح رہنمائی فراہم کرتے ہیں، اس بات کو یقینی بناتے ہوئے کہ آپ پراعتماد فیصلہ کریں۔",
        "service.residential.benefit1": "خاندان پر مبنی جائیداد کے اختیارات",
        "service.residential.benefit2": "محلے کی بصیرتیں",
        "service.residential.benefit3": "سرمایہ کاری کا مشورہ",
        "service.residential.benefit4": "پریمیم گاہک کی مدد",
        "service.residential.viewProperties": "جائیدادیں دیکھیں",
        "service.residential.talkAdvisor": "مشیر سے بات کریں",
        "service.commercial.eyebrow": "ہماری خدمات",
        "service.commercial.title": "تجارتی جائیدادیں",
        "service.commercial.heading": "تجارتی مواقع اور مشاورت",
        "service.commercial.paragraph1": "ہمارا تجارتی ڈویژن الخبر کی متحرک مارکیٹ میں دفتری جگہوں، ریٹیل آؤٹ لیٹس اور سرمایہ کاری کی جائیدادوں کے لیے ماہرانہ مشاورت پیش کرتا ہے۔",
        "service.commercial.paragraph2": "ہم آپ کو صحیح تجارتی اثاثہ حاصل کرنے میں مدد کے لیے مقام، پیدل ٹریفک اور ترقی کی صلاحیت کا تجزیہ کرتے ہیں۔",
        "service.commercial.benefit1": "سرمایہ کاری کا تجزیہ",
        "service.commercial.benefit2": "اہم مقامات",
        "service.commercial.benefit3": "ROI پر مبنی مشورہ",
        "service.commercial.benefit4": "مذاکرات کی حمایت",
        "service.commercial.viewProperties": "جائیدادیں دیکھیں",
        "service.commercial.talkAdvisor": "مشیر سے بات کریں",
        "service.guidance.eyebrow": "ہماری خدمات",
        "service.guidance.title": "جائیداد کی رہنمائی",
        "service.guidance.heading": "واضح، پراعتماد جائیداد کے فیصلے",
        "service.guidance.paragraph1": "ہم قیمتوں، قانونی عمل اور جائیداد کے انتخاب کے بارے میں شفاف مشورے کے ساتھ الخبر رئیل اسٹیٹ مارکیٹ میں آپ کی رہنمائی کرتے ہیں۔",
        "service.guidance.paragraph2": "پہلی بار خریداروں سے لے کر تجربہ کار سرمایہ کاروں تک، ہماری رہنمائی یقینی بناتی ہے کہ آپ ہر قدم کو سمجھتے ہیں۔",
        "service.guidance.benefit1": "مارکیٹ کا تجزیہ",
        "service.guidance.benefit2": "قانونی عمل کا جائزہ",
        "service.guidance.benefit3": "جائیداد کا موازنہ",
        "service.guidance.benefit4": "مذاکرات کی تجاویز",
        "service.guidance.viewProperties": "جائیدادیں دیکھیں",
        "service.guidance.talkAdvisor": "مشیر سے بات کریں",
        "service.consultation.eyebrow": "ہماری خدمات",
        "service.consultation.title": "رئیل اسٹیٹ مشاورت",
        "service.consultation.heading": "پیشہ ورانہ رئیل اسٹیٹ مشاورت",
        "service.consultation.paragraph1": "ہمارے مشیر الخبر کی رئیل اسٹیٹ مارکیٹ میں خریداری، فروخت یا سرمایہ کاری کے لیے ذاتی مشورہ فراہم کرتے ہیں۔",
        "service.consultation.paragraph2": "ہم آپ کے جائیداد کے اہداف کو حاصل کرنے میں مدد کے لیے مقامی معلومات کو پیشہ ورانہ تجزیہ کے ساتھ جوڑتے ہیں۔",
        "service.consultation.benefit1": "ون ٹو ون مشاورت",
        "service.consultation.benefit2": "مارکیٹ کی تشخیص",
        "service.consultation.benefit3": "سرمایہ کاری کی حکمت عملی",
        "service.consultation.benefit4": "فروخت کے بعد سپورٹ",
        "service.consultation.viewProperties": "جائیدادیں دیکھیں",
        "service.consultation.talkAdvisor": "مشیر سے بات کریں",
        "service.relatedTitle": "متعلقہ خدمات",
        "legal.privacyTitle": "پرائیویسی پالیسی",
        "legal.updated": "آخری تازہ کاری: جنوری 2026",
        "legal.privacyIntroTitle": "تعارف",
        "legal.privacyIntro": "شركة سمة المتحدة العقارية آپ کی پرائیویسی کا احترام کرتی ہے اور آپ کے ذاتی ڈیٹا کی حفاظت کے لیے پرعزم ہے۔ یہ پرائیویسی پالیسی بتاتی ہے کہ جب آپ ہماری ویب سائٹ دیکھتے ہیں یا ہماری خدمات استعمال کرتے ہیں تو ہم آپ کی معلومات کو کیسے جمع، استعمال اور محفوظ کرتے ہیں۔",
        "legal.privacyDataTitle": "ہم جو معلومات جمع کرتے ہیں",
        "legal.privacyData": "ہم ذاتی معلومات جمع کر سکتے ہیں جیسے آپ کا نام، ای میل ایڈریس، فون نمبر، اور کوئی بھی تفصیلات جو آپ ہمارے رابطہ فارم یا مشیر کی انکوائریوں کے ذریعے فراہم کرتے ہیں۔",
        "legal.privacyUseTitle": "ہم آپ کی معلومات کیسے استعمال کرتے ہیں",
        "legal.privacyUse": "ہم آپ کی معلومات کو انکوائریوں کا جواب دینے، رئیل اسٹیٹ خدمات فراہم کرنے، اپنی ویب سائٹ کو بہتر بنانے اور قانونی ذمہ داریوں کی تعمیل کرنے کے لیے استعمال کرتے ہیں۔",
        "legal.privacyShareTitle": "معلومات کا اشتراک",
        "legal.privacyShare": "ہم آپ کا ذاتی ڈیٹا فروخت نہیں کرتے۔ ہم معلومات کو قابل اعتماد تیسرے فریقوں کے ساتھ شیئر کر سکتے ہیں جو ہماری ویب سائٹ چلانے یا کاروبار کرنے میں مدد کرتے ہیں، بشرطیکہ وہ اسے خفیہ رکھنے پر راضی ہوں۔",
        "legal.privacySecurityTitle": "ڈیٹا سیکیورٹی",
        "legal.privacySecurity": "ہم آپ کے ذاتی ڈیٹا کو غیر مجاز رسائی، تبدیلی یا افشاء سے بچانے کے لیے مناسب تکنیکی اور تنظیمی اقدامات نافذ کرتے ہیں۔",
        "legal.privacyRightsTitle": "آپ کے حقوق",
        "legal.privacyRights": "آپ کو اپنی ذاتی معلومات تک رسائی، درستگی یا حذف کرنے کا حق حاصل ہے۔ ان حقوق کو استعمال کرنے کے لیے، براہ کرم ہم سے contact.sama.unitedrealestate@gmail.com پر رابطہ کریں۔",
        "legal.privacyCookiesTitle": "کوکیز",
        "legal.privacyCookies": "ہماری ویب سائٹ آپ کے براؤزنگ کے تجربے کو بہتر بنانے کے لیے کوکیز استعمال کر سکتی ہے۔ مزید تفصیلات کے لیے ہماری کوکی پالیسی دیکھیں۔",
        "legal.privacyContactTitle": "ہم سے رابطہ کریں",
        "legal.privacyContact": "اگر آپ کو اس پرائیویسی پالیسی کے بارے میں کوئی سوالات ہیں، تو براہ کرم ہم سے contact.sama.unitedrealestate@gmail.com پر رابطہ کریں یا +966 50 572 3111 پر کال کریں۔",
        "legal.termsTitle": "سروس کی شرائط",
        "legal.termsIntroTitle": "تعارف",
        "legal.termsIntro": "یہ سروس کی شرائط (\"شرائط\") SAMA United Real Estate Co کی ویب سائٹ اور خدمات کے آپ کے استعمال پر لاگو ہوتی ہیں۔ ہماری ویب سائٹ تک رسائی یا استعمال کرکے، آپ ان شرائط کا پابند ہونے پر رضامند ہوتے ہیں۔",
        "legal.termsAcceptTitle": "شرائط کی منظوری",
        "legal.termsAccept": "ہماری ویب سائٹ استعمال کرکے، آپ تصدیق کرتے ہیں کہ آپ ان شرائط کو قبول کرتے ہیں اور ان کی تعمیل کرنے پر متفق ہیں۔ اگر آپ متفق نہیں ہیں، تو براہ کرم ہماری ویب سائٹ استعمال نہ کریں۔",
        "legal.termsUseTitle": "ویب سائٹ کا استعمال",
        "legal.termsUse": "آپ ہماری ویب سائٹ کو صرف قانونی مقاصد کے لیے استعمال کر سکتے ہیں۔ آپ کو ویب سائٹ کا غلط استعمال یا کسی بھی حصے تک غیر مجاز رسائی حاصل کرنے کی کوشش نہیں کرنی چاہیے۔",
        "legal.termsIntellectualTitle": "دانشورانہ املاک",
        "legal.termsIntellectual": "اس ویب سائٹ پر تمام مواد، ڈیزائن، اور مواد SAMA United Real Estate Co کی ملکیت ہے جب تک کہ دوسری صورت میں بیان نہ کیا گیا ہو۔ آپ پیشگی تحریری اجازت کے بغیر کسی بھی مواد کو دوبارہ پیش یا تقسیم نہیں کر سکتے۔",
        "legal.termsLiabilityTitle": "ذمہ داری کی حد",
        "legal.termsLiability": "SAMA United Real Estate Co اس ویب سائٹ کے استعمال یا اس کے مواد پر بھروسہ کرنے سے پیدا ہونے والے کسی بھی براہ راست، بالواسطہ، یا نتیجہ خیز نقصان کے لیے ذمہ دار نہیں ہوگی۔",
        "legal.termsGoverningTitle": "قانون کا اطلاق",
        "legal.termsGoverning": "یہ شرائط مملکت سعودی عرب کے قوانین کے تابع ہیں۔ کسی بھی تنازعات سعودی عدالتوں کے خصوصی دائرہ اختیار کے تابع ہوں گے۔",
        "legal.termsContactTitle": "ہم سے رابطہ کریں",
        "legal.termsContact": "اگر آپ کو ان شرائط کے بارے میں کوئی سوالات ہیں، تو براہ کرم ہم سے contact.sama.unitedrealestate@gmail.com پر رابطہ کریں یا +966 50 572 3111 پر کال کریں۔",
        "legal.cookieTitle": "کوکی پالیسی",
        "legal.cookieWhatTitle": "کوکیز کیا ہیں",
        "legal.cookieWhat": "کوکیز چھوٹی ٹیکسٹ فائلیں ہیں جو آپ کے آلے پر رکھی جاتی ہیں جب آپ کسی ویب سائٹ پر جاتے ہیں۔ وہ ویب سائٹس کو زیادہ مؤثر طریقے سے کام کرنے اور سائٹ کے مالکان کو معلومات فراہم کرنے کے لیے وسیع پیمانے پر استعمال ہوتی ہیں۔",
        "legal.cookieUseTitle": "ہم کوکیز کا استعمال کیسے کرتے ہیں",
        "legal.cookieUse": "ہم آپ کے براؤزنگ کے تجربے کو بہتر بنانے، سائٹ ٹریفک کا تجزیہ کرنے، اور یہ سمجھنے کے لیے کوکیز استعمال کرتے ہیں کہ زائرین ہماری ویب سائٹ کے ساتھ کیسے تعامل کرتے ہیں۔ اس سے ہمیں اپنی خدمات اور مواد کو بہتر بنانے میں مدد ملتی ہے۔",
        "legal.cookieTypesTitle": "ہم جو کوکیز استعمال کرتے ہیں ان کی اقسام",
        "legal.cookieTypes": "ہم سیشن کوکیز (جو آپ کے براؤزر کو بند کرنے پر ختم ہو جاتی ہیں) اور مستقل کوکیز (جو ایک مقررہ مدت تک آپ کے آلے پر رہتی ہیں) دونوں استعمال کر سکتے ہیں۔ ہم تیسری پارٹی کی کوکیز بھی استعمال کر سکتے ہیں، جیسے کہ تجزیہ فراہم کرنے والوں کی۔",
        "legal.cookieManageTitle": "کوکیز کا انتظام",
        "legal.cookieManage": "آپ اپنی مرضی کے مطابق کوکیز کو کنٹرول اور/یا حذف کر سکتے ہیں۔ زیادہ تر براؤزر آپ کو کوکیز کو مسترد یا قبول کرنے کی اجازت دیتے ہیں۔ تاہم، کوکیز کو غیر فعال کرنے سے ہماری ویب سائٹ کی فعالیت متاثر ہو سکتی ہے۔",
        "legal.cookieContactTitle": "ہم سے رابطہ کریں",
        "legal.cookieContact": "اگر آپ کو ہمارے کوکیز کے استعمال کے بارے میں کوئی سوالات ہیں، تو براہ کرم ہم سے contact.sama.unitedrealestate@gmail.com پر رابطہ کریں۔",
        "nav.villas": "ولاز",
        "villas.eyebrow": "خصوصی مجموعہ",
        "villas.pageTitle": "الخبر میں لگژری ولاز",
        "villas.subtitle": "ہماری منتخب کردہ پریمیم خاندانی ولاز دریافت کریں"
    },
    zh: {
        "nav.home": "首页",
        "nav.about": "关于我们",
        "nav.properties": "房产",
        "nav.services": "服务",
        "nav.contact": "联系我们",
        "nav.advisor": "咨询顾问",
        "lang.current": "中文",
        "hero.eyebrow": "房地产顾问 · 胡拜尔",
        "hero.subtitle": "为沙特阿拉伯胡拜尔的客户和家庭提供专业且值得信赖的房地产咨询。",
        "hero.viewProperties": "查看房产",
        "hero.talkAdvisor": "咨询顾问",
        "about.eyebrow": "关于我们",
        "about.heading": "关于 SAMA United Real Estate Co.",
        "about.paragraph1": "شركة سمة المتحدة العقارية SAMA United Real Estate Co 是一家专业的房地产顾问，服务于沙特阿拉伯塔克巴/胡拜尔地区。我们为寻求住宅、商业和投资物业的家庭和客户提供值得信赖的指导。",
        "about.paragraph2": "我们的团队致力于提供清晰的房产指导、客户支持以及从首次咨询到最终决策的优质房地产体验。",
        "about.learnMore": "了解更多关于我们 →",
        "stats.rating": "谷歌评分",
        "stats.reviews": "评论",
        "stats.local": "本地房地产顾问",
        "services.eyebrow": "我们的服务",
        "services.heading": "房地产服务",
        "services.residential.category": "住宅",
        "services.residential.title": "家庭住宅房产",
        "services.residential.desc": "适合家庭的住宅房产和指导。",
        "services.residential.cta": "探索住宅",
        "services.commercial.category": "商业",
        "services.commercial.title": "商业机会",
        "services.commercial.desc": "商业地产机会和咨询。",
        "services.commercial.cta": "探索商业",
        "services.villas.category": "别墅",
        "services.villas.title": "豪华别墅",
        "services.villas.desc": "配备现代设施的高级家庭别墅。",
        "services.villas.cta": "探索别墅",
        "services.guidance.category": "指导",
        "services.guidance.title": "房产指导",
        "services.guidance.desc": "清晰的指导，帮助客户做出自信的房产决策。",
        "services.guidance.cta": "获取指导",
        "services.consultation.category": "咨询",
        "services.consultation.title": "房地产咨询",
        "services.consultation.desc": "胡拜尔的专业房地产咨询。",
        "services.consultation.cta": "预约咨询",
        "featured.eyebrow": "精选房源",
        "featured.heading": "特色房产",
        "featured.viewAll": "查看所有房产",
        "featured.viewDetails": "查看详情",
        "cta.heading": "准备好找到合适的房产了吗？",
        "cta.subtitle": "与我们的房地产顾问交谈，获取专业的房产指导。",
        "cta.viewProperties": "查看房产",
        "cta.talkAdvisor": "咨询顾问",
        "footer.tagline": "沙特阿拉伯胡拜尔的专业房地产咨询。",
        "footer.company": "公司",
        "footer.services": "服务",
        "footer.legal": "法律",
        "footer.contact": "联系",
        "footer.privacy": "隐私政策",
        "footer.terms": "服务条款",
        "footer.cookies": "Cookie政策",
        "footer.address": "3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
        "footer.hours": "周六–周四：09:00–21:30，周五：休息",
        "filters.all": "全部",
        "filters.residential": "住宅",
        "filters.commercial": "商业",
        "filters.family": "家庭",
        "filters.available": "可用",
        "properties.eyebrow": "房源",
        "properties.pageTitle": "我们的房产",
        "contact.eyebrow": "联系",
        "contact.pageTitle": "联系我们",
        "contact.infoTitle": "联系信息",
        "contact.addressLabel": "地址：",
        "contact.emailLabel": "电子邮件：",
        "contact.phoneLabel": "电话：",
        "contact.whatsappLabel": "WhatsApp：",
        "contact.hoursTitle": "营业时间",
        "contact.mapTitle": "访问我们的位置",
        "contact.mapAddress": "شركة سمة المتحدة العقارية SAMA United Real Estate Co<br>3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
        "hours.saturday": "周六：09:00–11:30, 15:30–21:30",
        "hours.sunday": "周日：09:00–11:30, 15:30–21:30",
        "hours.monday": "周一：09:00–11:30, 15:30–21:30",
        "hours.tuesday": "周二：09:00–11:30, 13:30–21:30",
        "hours.wednesday": "周三：09:00–11:30, 13:30–21:30",
        "hours.thursday": "周四：09:00–11:30, 13:30–21:30",
        "hours.friday": "周五：休息",
        "advisor.eyebrow": "咨询",
        "advisor.pageTitle": "咨询顾问",
        "advisor.subtitle": "我们的团队随时准备帮助您解决房地产需求。",
        "form.fullName": "全名 *",
        "form.email": "电子邮件 *",
        "form.phone": "电话 *",
        "form.propertyType": "房产类型 *",
        "form.selectProperty": "选择房产类型",
        "form.residential": "住宅",
        "form.commercial": "商业",
        "form.family": "家庭",
        "form.other": "其他",
        "form.message": "留言 *",
        "form.sendInquiry": "发送咨询",
        "form.successMessage": "谢谢您。您的咨询已成功收到。我们的顾问将尽快与您联系。",
        "form.fullNameError": "请输入您的全名。",
        "form.emailError": "请输入有效的电子邮件地址。",
        "form.phoneError": "请输入您的电话号码。",
        "form.propertyTypeError": "请选择房产类型。",
        "form.messageError": "请输入留言。",
        "openNow": "营业中",
        "openClosed": "已关闭",
        "opensSoon": "即将营业",
        "soldText": "已售",
        "service.residential.eyebrow": "我们的服务",
        "service.residential.title": "住宅房产",
        "service.residential.heading": "适合家庭的住宅指导",
        "service.residential.paragraph1": "我们帮助家庭在胡拜尔找到完美的家，注重安全、舒适和长期价值。从现代公寓到宽敞别墅，我们的住宅房源精选以满足您的需求。",
        "service.residential.paragraph2": "我们的顾问就社区、设施和投资潜力提供清晰的指导，确保您做出自信的决定。",
        "service.residential.benefit1": "面向家庭的房产选择",
        "service.residential.benefit2": "社区洞察",
        "service.residential.benefit3": "投资建议",
        "service.residential.benefit4": "优质客户支持",
        "service.residential.viewProperties": "查看房产",
        "service.residential.talkAdvisor": "咨询顾问",
        "service.commercial.eyebrow": "我们的服务",
        "service.commercial.title": "商业房产",
        "service.commercial.heading": "商业机会与咨询",
        "service.commercial.paragraph1": "我们的商业部门为胡拜尔充满活力的市场中的办公空间、零售店面和投资物业提供专业咨询。",
        "service.commercial.paragraph2": "我们分析位置、人流量和增长潜力，帮助您获得合适的商业资产。",
        "service.commercial.benefit1": "投资分析",
        "service.commercial.benefit2": "黄金地段",
        "service.commercial.benefit3": "以ROI为重点的建议",
        "service.commercial.benefit4": "谈判支持",
        "service.commercial.viewProperties": "查看房产",
        "service.commercial.talkAdvisor": "咨询顾问",
        "service.guidance.eyebrow": "我们的服务",
        "service.guidance.title": "房产指导",
        "service.guidance.heading": "清晰、自信的房产决策",
        "service.guidance.paragraph1": "我们通过透明的定价、法律程序和房产选择建议，帮助您在胡拜尔房地产市场导航。",
        "service.guidance.paragraph2": "从首次购房者到经验丰富的投资者，我们的指导确保您理解每一步。",
        "service.guidance.benefit1": "市场分析",
        "service.guidance.benefit2": "法律流程概览",
        "service.guidance.benefit3": "房产比较",
        "service.guidance.benefit4": "谈判技巧",
        "service.guidance.viewProperties": "查看房产",
        "service.guidance.talkAdvisor": "咨询顾问",
        "service.consultation.eyebrow": "我们的服务",
        "service.consultation.title": "房地产咨询",
        "service.consultation.heading": "专业房地产咨询",
        "service.consultation.paragraph1": "我们的顾问为在胡拜尔房地产市场购买、出售或投资提供个性化建议。",
        "service.consultation.paragraph2": "我们将本地知识与专业分析相结合，帮助您实现房产目标。",
        "service.consultation.benefit1": "一对一咨询",
        "service.consultation.benefit2": "市场估值",
        "service.consultation.benefit3": "投资策略",
        "service.consultation.benefit4": "售后支持",
        "service.consultation.viewProperties": "查看房产",
        "service.consultation.talkAdvisor": "咨询顾问",
        "service.relatedTitle": "相关服务",
        "legal.privacyTitle": "隐私政策",
        "legal.updated": "最后更新：2026年1月",
        "legal.privacyIntroTitle": "引言",
        "legal.privacyIntro": "SAMA United Real Estate Co（“我们”）尊重您的隐私并致力于保护您的个人数据。本隐私政策解释了当您访问我们的网站或使用我们的服务时，我们如何收集、使用和保护您的信息。",
        "legal.privacyDataTitle": "我们收集的信息",
        "legal.privacyData": "我们可能会收集个人信息，例如您的姓名、电子邮件地址、电话号码，以及您通过我们的联系表格或顾问咨询提供的任何详细信息。",
        "legal.privacyUseTitle": "我们如何使用您的信息",
        "legal.privacyUse": "我们使用您的信息来回应咨询、提供房地产服务、改进我们的网站以及遵守法律义务。",
        "legal.privacyShareTitle": "信息共享",
        "legal.privacyShare": "我们不会出售您的个人数据。我们可能会与帮助我们运营网站或开展业务的可信第三方共享信息，前提是他们同意保密。",
        "legal.privacySecurityTitle": "数据安全",
        "legal.privacySecurity": "我们实施适当的技术和组织措施，保护您的个人数据免受未经授权的访问、篡改或泄露。",
        "legal.privacyRightsTitle": "您的权利",
        "legal.privacyRights": "您有权访问、更正或删除您的个人信息。要行使这些权利，请通过 contact.sama.unitedrealestate@gmail.com 联系我们。",
        "legal.privacyCookiesTitle": "Cookie",
        "legal.privacyCookies": "我们的网站可能会使用Cookie来增强您的浏览体验。详情请参阅我们的Cookie政策。",
        "legal.privacyContactTitle": "联系我们",
        "legal.privacyContact": "如果您对本隐私政策有任何疑问，请通过 contact.sama.unitedrealestate@gmail.com 联系我们或致电 +966 50 572 3111。",
        "legal.termsTitle": "服务条款",
        "legal.termsIntroTitle": "引言",
        "legal.termsIntro": "这些服务条款（“条款”）管辖您对 SAMA United Real Estate Co 网站和服务的使用。访问或使用我们的网站即表示您同意受这些条款的约束。",
        "legal.termsAcceptTitle": "条款的接受",
        "legal.termsAccept": "使用我们的网站即表示您确认接受这些条款并同意遵守。如果您不同意，请勿使用我们的网站。",
        "legal.termsUseTitle": "网站的使用",
        "legal.termsUse": "您仅可将我们的网站用于合法目的。您不得滥用网站或试图未经授权访问其任何部分。",
        "legal.termsIntellectualTitle": "知识产权",
        "legal.termsIntellectual": "本网站上的所有内容、设计和材料均为 SAMA United Real Estate Co 的财产，除非另有说明。未经事先书面同意，您不得复制或分发任何内容。",
        "legal.termsLiabilityTitle": "责任限制",
        "legal.termsLiability": "SAMA United Real Estate Co 对因使用本网站或依赖其内容而产生的任何直接、间接或后果性损失概不负责。",
        "legal.termsGoverningTitle": "管辖法律",
        "legal.termsGoverning": "这些条款受沙特阿拉伯王国法律管辖。任何争议应受沙特法院的专属管辖。",
        "legal.termsContactTitle": "联系我们",
        "legal.termsContact": "如果您对这些条款有任何疑问，请通过 contact.sama.unitedrealestate@gmail.com 联系我们或致电 +966 50 572 3111。",
        "legal.cookieTitle": "Cookie政策",
        "legal.cookieWhatTitle": "什么是Cookie",
        "legal.cookieWhat": "Cookie是当您访问网站时放置在您设备上的小型文本文件。它们被广泛用于使网站更高效地工作，并向网站所有者提供信息。",
        "legal.cookieUseTitle": "我们如何使用Cookie",
        "legal.cookieUse": "我们使用Cookie来增强您的浏览体验、分析网站流量并了解访问者如何与我们的网站互动。这有助于我们改进服务和内容。",
        "legal.cookieTypesTitle": "我们使用的Cookie类型",
        "legal.cookieTypes": "我们可能会使用会话Cookie（关闭浏览器时过期）和持久Cookie（在您的设备上保留一段时间）。我们还可能使用第三方Cookie，例如分析提供商提供的Cookie。",
        "legal.cookieManageTitle": "管理Cookie",
        "legal.cookieManage": "您可以按照自己的意愿控制和/或删除Cookie。大多数浏览器允许您拒绝或接受Cookie。但是，禁用Cookie可能会影响我们网站的功能。",
        "legal.cookieContactTitle": "联系我们",
        "legal.cookieContact": "如果您对我们使用Cookie有任何疑问，请通过 contact.sama.unitedrealestate@gmail.com 联系我们。",
        "nav.villas": "别墅",
        "villas.eyebrow": "独家系列",
        "villas.pageTitle": "胡拜尔的豪华别墅",
        "villas.subtitle": "探索我们精心挑选的优质家庭别墅"
    },
    sara: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.properties": "Properties",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "nav.advisor": "Talk to an Advisor",
        "lang.current": "European/Sara",
        "hero.eyebrow": "Real Estate Consultant · Al Khobar",
        "hero.subtitle": "Professional and trusted real-estate consultation for clients and families in Al Khobar, Saudi Arabia.",
        "hero.viewProperties": "View Properties",
        "hero.talkAdvisor": "Talk to an Advisor",
        "about.eyebrow": "About Us",
        "about.heading": "About SAMA United Real Estate Co.",
        "about.paragraph1": "شركة سمة المتحدة العقارية SAMA United Real Estate Co is a professional real-estate consultant serving Al-Thuqbah / Al Khobar, Saudi Arabia. We provide trusted guidance for families and clients seeking residential, commercial, and investment properties.",
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
        "services.consultation.desc": "Professional real-estate consultation in Al Khobar.",
        "services.consultation.cta": "Book Consultation",
        "featured.eyebrow": "Curated Listings",
        "featured.heading": "Featured Properties",
        "featured.viewAll": "View All Properties",
        "featured.viewDetails": "View Details",
        "cta.heading": "Ready to find the right property?",
        "cta.subtitle": "Speak with our real-estate advisor and get professional property guidance.",
        "cta.viewProperties": "View Properties",
        "cta.talkAdvisor": "Talk to an Advisor",
        "footer.tagline": "Professional real-estate consultancy in Al Khobar, Saudi Arabia.",
        "footer.company": "Company",
        "footer.services": "Services",
        "footer.legal": "Legal",
        "footer.contact": "Contact",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookie Policy",
        "footer.address": "3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
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
        "contact.mapAddress": "شركة سمة المتحدة العقارية SAMA United Real Estate Co<br>3rd St, Al-Thuqbah, Al Khobar 34623, Saudi Arabia",
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
        "service.residential.paragraph1": "We help families find the perfect home in Al Khobar, focusing on safety, comfort, and long-term value. From modern apartments to spacious villas, our residential listings are curated to meet your needs.",
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
        "service.commercial.paragraph1": "Our commercial division offers expert consultation for office spaces, retail outlets, and investment properties in Al Khobar's dynamic market.",
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
        "service.guidance.paragraph1": "We help you navigate the Al Khobar real-estate market with transparent advice on pricing, legal processes, and property selection.",
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
        "service.consultation.paragraph1": "Our consultants provide personalised advice for buying, selling, or investing in Al Khobar's real-estate market.",
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
        "legal.privacyIntro": "SAMA United Real Estate Co (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
        "legal.privacyDataTitle": "Information We Collect",
        "legal.privacyData": "We may collect personal information such as your name, email address, phone number, and any details you provide through our contact forms or advisor inquiries.",
        "legal.privacyUseTitle": "How We Use Your Information",
        "legal.privacyUse": "We use your information to respond to inquiries, provide real-estate services, improve our website, and comply with legal obligations.",
        "legal.privacyShareTitle": "Information Sharing",
        "legal.privacyShare": "We do not sell your personal data. We may share information with trusted third parties who assist us in operating our website or conducting business, provided they agree to keep it confidential.",
        "legal.privacySecurityTitle": "Data Security",
        "legal.privacySecurity": "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or disclosure.",
        "legal.privacyRightsTitle": "Your Rights",
        "legal.privacyRights": "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact.sama.unitedrealestate@gmail.com.",
        "legal.privacyCookiesTitle": "Cookies",
        "legal.privacyCookies": "Our website may use cookies to enhance your browsing experience. See our Cookie Policy for more details.",
        "legal.privacyContactTitle": "Contact Us",
        "legal.privacyContact": "If you have any questions about this privacy policy, please contact us at contact.sama.unitedrealestate@gmail.com or call +966 50 572 3111.",
        "legal.termsTitle": "Terms of Service",
        "legal.termsIntroTitle": "Introduction",
        "legal.termsIntro": "These Terms of Service (\"Terms\") govern your use of the SAMA United Real Estate Co website and services. By accessing or using our website, you agree to be bound by these Terms.",
        "legal.termsAcceptTitle": "Acceptance of Terms",
        "legal.termsAccept": "By using our website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use our website.",
        "legal.termsUseTitle": "Use of Website",
        "legal.termsUse": "You may use our website for lawful purposes only. You must not misuse the website or attempt to gain unauthorised access to any part of it.",
        "legal.termsIntellectualTitle": "Intellectual Property",
        "legal.termsIntellectual": "All content, design, and materials on this website are the property of SAMA United Real Estate Co unless otherwise stated. You may not reproduce or distribute any content without prior written consent.",
        "legal.termsLiabilityTitle": "Limitation of Liability",
        "legal.termsLiability": "SAMA United Real Estate Co will not be liable for any direct, indirect, or consequential loss arising from the use of this website or reliance on its content.",
        "legal.termsGoverningTitle": "Governing Law",
        "legal.termsGoverning": "These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the Saudi courts.",
        "legal.termsContactTitle": "Contact Us",
        "legal.termsContact": "If you have any questions about these Terms, please contact us at contact.sama.unitedrealestate@gmail.com or call +966 50 572 3111.",
        "legal.cookieTitle": "Cookie Policy",
        "legal.cookieWhatTitle": "What Are Cookies",
        "legal.cookieWhat": "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.",
        "legal.cookieUseTitle": "How We Use Cookies",
        "legal.cookieUse": "We use cookies to enhance your browsing experience, analyse site traffic, and understand how visitors interact with our website. This helps us improve our services and content.",
        "legal.cookieTypesTitle": "Types of Cookies We Use",
        "legal.cookieTypes": "We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). We may also use third‑party cookies, such as those from analytics providers.",
        "legal.cookieManageTitle": "Managing Cookies",
        "legal.cookieManage": "You can control and/or delete cookies as you wish. Most browsers allow you to refuse or accept cookies. However, disabling cookies may affect the functionality of our website.",
        "legal.cookieContactTitle": "Contact Us",
        "legal.cookieContact": "If you have any questions about our use of cookies, please contact us at contact.sama.unitedrealestate@gmail.com.",
        "nav.villas": "Villas",
        "villas.eyebrow": "Exclusive Selection",
        "villas.pageTitle": "Luxurious Villas in Al Khobar",
        "villas.subtitle": "Browse our curated premium family villas"
    }
};

// ---------- Property Data ----------
const propertiesData = [
    {
        id: 1,
        category: "residential",
        type: "family",
        status: "available",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
        translations: {
            en: { title: "Modern Family Villa", location: "Al-Thuqbah, Al Khobar", description: "Spacious 4-bedroom family villa with private garden." },
            ar: { title: "فيلا عائلية حديثة", location: "الثقبة، الخبر", description: "فيلا عائلية واسعة من 4 غرف نوم مع حديقة خاصة." },
            ur: { title: "جدید خاندانی ولا", location: "الثقبہ، الخبر", description: "4 بیڈروم والی کشادہ خاندانی ولا جس میں نجی باغ ہے۔" },
            zh: { title: "现代家庭别墅", location: "塔克巴，胡拜尔", description: "宽敞的4卧室家庭别墅，带私人花园。" },
            sara: { title: "Modern Family Villa", location: "Al-Thuqbah, Al Khobar", description: "Spacious 4-bedroom family villa with private garden." }
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
            en: { title: "Cozy Family Apartment", location: "Al Khobar", description: "3-bedroom apartment in a quiet family neighbourhood." },
            ar: { title: "شقة عائلية مريحة", location: "الخبر", description: "شقة من 3 غرف نوم في حي عائلي هادئ." },
            ur: { title: "آرام دہ خاندانی اپارٹمنٹ", location: "الخبر", description: "پرسکون خاندانی محلے میں 3 بیڈروم اپارٹمنٹ۔" },
            zh: { title: "舒适家庭公寓", location: "胡拜尔", description: "位于安静家庭社区的3卧室公寓。" },
            sara: { title: "Cozy Family Apartment", location: "Al Khobar", description: "3-bedroom apartment in a quiet family neighbourhood." }
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
            en: { title: "Prime Office Space", location: "Al Khobar", description: "Modern office space in a prime commercial district." },
            ar: { title: "مساحة مكتبية متميزة", location: "الخبر", description: "مساحة مكتبية حديثة في منطقة تجارية رئيسية." },
            ur: { title: "پرائم آفس اسپیس", location: "الخبر", description: "اہم تجارتی علاقے میں جدید دفتر کی جگہ۔" },
            zh: { title: "优质办公空间", location: "胡拜尔", description: "位于主要商业区的现代办公空间。" },
            sara: { title: "Prime Office Space", location: "Al Khobar", description: "Modern office space in a prime commercial district." }
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
            en: { title: "Luxury Apartment", location: "Al Khobar", description: "High-end apartment with sea view and premium amenities." },
            ar: { title: "شقة فاخرة", location: "الخبر", description: "شقة راقية بإطلالة بحرية ومرافق متميزة." },
            ur: { title: "لگژری اپارٹمنٹ", location: "الخبر", description: "سمندری نظارے اور پریمیم سہولیات کے ساتھ اعلیٰ درجے کا اپارٹمنٹ۔" },
            zh: { title: "豪华公寓", location: "胡拜尔", description: "海景高端公寓，配备高级设施。" },
            sara: { title: "Luxury Apartment", location: "Al Khobar", description: "High-end apartment with sea view and premium amenities." }
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
            en: { title: "Elegant Townhouse", location: "Al-Thuqbah", description: "Stylish 3-bedroom townhouse with modern finishes." },
            ar: { title: "تاون هاوس أنيق", location: "الثقبة", description: "تاون هاوس أنيق من 3 غرف نوم بتشطيبات حديثة." },
            ur: { title: "خوبصورت ٹاؤن ہاؤس", location: "الثقبہ", description: "جدید فنش کے ساتھ 3 بیڈروم والا اسٹائلش ٹاؤن ہاؤس۔" },
            zh: { title: "优雅联排别墅", location: "塔克巴", description: "3卧室时尚联排别墅，现代装修。" },
            sara: { title: "Elegant Townhouse", location: "Al-Thuqbah", description: "Stylish 3-bedroom townhouse with modern finishes." }
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
            en: { title: "Retail Storefront", location: "Al Khobar", description: "High-traffic retail space ideal for business." },
            ar: { title: "واجهة متجر", location: "الخبر", description: "مساحة بيع بالتجزئة عالية الحركة مثالية للأعمال." },
            ur: { title: "ریٹیل اسٹور فرنٹ", location: "الخبر", description: "زیادہ ٹریفک والی ریٹیل جگہ کاروبار کے لیے مثالی۔" },
            zh: { title: "零售店面", location: "胡拜尔", description: "高人流量零售空间，适合商业用途。" },
            sara: { title: "Retail Storefront", location: "Al Khobar", description: "High-traffic retail space ideal for business." }
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
            en: { title: "Luxury Family Villa", location: "Al-Thuqbah, Al Khobar", description: "5-bedroom luxury villa with private pool and garden." },
            ar: { title: "فيلا عائلية فاخرة", location: "الثقبة، الخبر", description: "فيلا فاخرة من 5 غرف نوم مع مسبح خاص وحديقة." },
            ur: { title: "لگژری خاندانی ولا", location: "الثقبہ، الخبر", description: "5 بیڈروم لگژری ولا جس میں نجی پول اور باغ ہے۔" },
            zh: { title: "豪华家庭别墅", location: "塔克巴，胡拜尔", description: "5卧室豪华别墅，带私人泳池和花园。" },
            sara: { title: "Luxury Family Villa", location: "Al-Thuqbah, Al Khobar", description: "5-bedroom luxury villa with private pool and garden." }
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
            en: { title: "Modern Villa with Sea View", location: "Al Khobar", description: "Contemporary 4-bedroom villa with panoramic sea views." },
            ar: { title: "فيلا حديثة بإطلالة بحرية", location: "الخبر", description: "فيلا عصرية من 4 غرف نوم مع إطلالات بحرية بانورامية." },
            ur: { title: "سمندری نظارے والی جدید ولا", location: "الخبر", description: "4 بیڈروم معاصر ولا جس میں panoramic سمندری نظارے ہیں۔" },
            zh: { title: "海景现代别墅", location: "胡拜尔", description: "4卧室现代别墅，拥有全景海景。" },
            sara: { title: "Modern Villa with Sea View", location: "Al Khobar", description: "Contemporary 4-bedroom villa with panoramic sea views." }
        },
        bedrooms: 4,
        bathrooms: 3,
        area: "300 m²"
    }
];

// ---------- State ----------
let currentLang = localStorage.getItem('samaLanguage') || 'en';
let currentFilter = 'all';

// ---------- DOM Ready ----------
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initLanguageSelector();
    initMobileMenu();
    initActiveNav();
    initPropertyRendering();
    initPropertyFilters();
    initForms();
    initOpeningStatus();
    initScrollAnimations();
    closeDropdownsOnOutsideClick();
});

// ---------- Language Functions ----------
function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('samaLanguage', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = translations[lang]['lang.current'];
    }

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderProperties();
    updateActiveNav();
    updateOpeningStatus();
}

function initLanguageSelector() {
    const langBtn = document.querySelector('.lang-btn');
    const dropdown = document.getElementById('langDropdown');
    if (!langBtn || !dropdown) return;

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');
        dropdown.classList.toggle('open', !isOpen);
        langBtn.setAttribute('aria-expanded', !isOpen);
    });

    dropdown.addEventListener('click', (e) => {
        const option = e.target.closest('.lang-option');
        if (option) {
            applyLanguage(option.dataset.lang);
            dropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        mobileNav.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', !isOpen);
        toggle.classList.toggle('active', !isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('active');
        });
    });
}

// ---------- Active Nav ----------
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
        const href = link.getAttribute('href');
        const hrefPage = href.split('/').pop();
        link.classList.toggle('active', hrefPage === currentPage);
    });
}

function initActiveNav() {
    updateActiveNav();
}

// ---------- Property Rendering ----------
function getPropertyTranslation(prop, lang) {
    return prop.translations[lang] || prop.translations.en;
}

function createPropertyCard(prop) {
    const t = getPropertyTranslation(prop, currentLang);
    const card = document.createElement('article');
    card.className = 'property-card';
    card.dataset.id = prop.id;
    card.innerHTML = `
        <div class="property-card-image">
            <img src="${prop.image}" alt="${t.title}" loading="lazy" decoding="async">
            <span class="property-status ${prop.status}">${prop.status === 'available' ? translations[currentLang]['filters.available'] : translations[currentLang]['soldText']}</span>
        </div>
        <div class="property-card-body">
            <span class="property-category">${translations[currentLang]['filters.' + prop.category] || prop.category}</span>
            <h3 class="property-title">${t.title}</h3>
            <p class="property-location">📍 ${t.location}</p>
            <div class="property-details">
                <span class="property-detail-item">🛏 ${prop.bedrooms}</span>
                <span class="property-detail-item">🛁 ${prop.bathrooms}</span>
                <span class="property-detail-item">📐 ${prop.area}</span>
            </div>
            <p class="property-description">${t.description}</p>
            <button class="btn btn-outline view-details" data-id="${prop.id}">${translations[currentLang]['featured.viewDetails']}</button>
        </div>
    `;
    card.querySelector('.view-details').addEventListener('click', (e) => {
        e.stopPropagation();
        openPropertyModal(prop);
    });
    card.addEventListener('click', () => openPropertyModal(prop));
    return card;
}

function renderFeaturedProperties() {
    const grid = document.getElementById('featuredPropertiesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    propertiesData.filter(p => p.status === 'available').slice(0, 3).forEach(prop => {
        grid.appendChild(createPropertyCard(prop));
    });
}

function renderAllProperties(filter = 'all') {
    const grid = document.getElementById('allPropertiesGrid') || document.getElementById('villasGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    let baseData = propertiesData;
    if (window.__PAGE_FILTER__ === 'villa') {
        baseData = propertiesData.filter(p => p.type === 'villa');
    }
    
    let filtered = baseData;
    if (filter !== 'all') {
        filtered = baseData.filter(p => {
            if (filter === 'available') return p.status === 'available';
            if (filter === 'villa') return p.type === 'villa';
            if (filter === 'family') return p.type === 'family';
            if (filter === 'residential') return p.category === 'residential' && p.type !== 'villa';
            if (filter === 'commercial') return p.category === 'commercial';
            return p.category === filter;
        });
    }
    filtered.forEach(prop => {
        grid.appendChild(createPropertyCard(prop));
    });
}

function renderProperties() {
    renderFeaturedProperties();
    renderAllProperties(currentFilter || 'all');
}

function initPropertyFilters() {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;
    filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        currentFilter = btn.dataset.filter;
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAllProperties(currentFilter);
    });
}

function initPropertyRendering() {
    renderFeaturedProperties();
    renderAllProperties('all');
}

// ---------- Property Modal ----------
function openPropertyModal(prop) {
    const t = getPropertyTranslation(prop, currentLang);
    const modal = document.createElement('div');
    modal.className = 'property-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close">&times;</button>
            <img src="${prop.image}" alt="${t.title}">
            <h2>${t.title}</h2>
            <p>📍 ${t.location}</p>
            <p>🛏 ${prop.bedrooms} | 🛁 ${prop.bathrooms} | 📐 ${prop.area}</p>
            <p>${t.description}</p>
            <p><strong>${translations[currentLang]['filters.' + prop.category] || prop.category}</strong> · ${prop.status}</p>
            <a href="../company/talk-to-an-advisor.html" class="btn btn-primary">${translations[currentLang]['nav.advisor']}</a>
        </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-close').focus();
}

// ---------- Form Validation ----------
function initForms() {
    const advisorForm = document.getElementById('advisorForm');
    if (advisorForm) {
        advisorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateAdvisorForm()) {
                const success = document.getElementById('advisorFormSuccess');
                if (success) {
                    success.hidden = false;
                    advisorForm.reset();
                    setTimeout(() => { success.hidden = true; }, 5000);
                }
            }
        });
    }
}

function validateAdvisorForm() {
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const propertyType = document.getElementById('propertyType');
    const message = document.getElementById('message');
    let isValid = true;

    clearErrors();

    if (!name.value.trim()) {
        showError('fullNameError', translations[currentLang]['form.fullNameError']);
        isValid = false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        showError('emailError', translations[currentLang]['form.emailError']);
        isValid = false;
    }
    if (!phone.value.trim()) {
        showError('phoneError', translations[currentLang]['form.phoneError']);
        isValid = false;
    }
    if (!propertyType.value) {
        showError('propertyTypeError', translations[currentLang]['form.propertyTypeError']);
        isValid = false;
    }
    if (!message.value.trim()) {
        showError('messageError', translations[currentLang]['form.messageError']);
        isValid = false;
    }
    return isValid;
}

function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// ---------- Opening Status (Saudi Timezone) ----------
function updateOpeningStatus() {
    const statusEl = document.getElementById('openStatus');
    if (!statusEl) return;
    const now = new Date();
    const saudiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }));
    const day = saudiTime.getDay();
    const hours = saudiTime.getHours();
    const minutes = saudiTime.getMinutes();
    const timeInMinutes = hours * 60 + minutes;

    let status = 'closed';
    let label = translations[currentLang]['openClosed'];

    if (day === 5) {
        status = 'closed';
        label = translations[currentLang]['openClosed'];
    } else {
        let morningStart = 9 * 60;
        let morningEnd = 11 * 60 + 30;
        let eveningStart, eveningEnd = 21 * 60 + 30;
        if ([6,0,1].includes(day)) {
            eveningStart = 15 * 60 + 30;
        } else {
            eveningStart = 13 * 60 + 30;
        }
        if ((timeInMinutes >= morningStart && timeInMinutes < morningEnd) ||
            (timeInMinutes >= eveningStart && timeInMinutes < eveningEnd)) {
            status = 'open';
            label = translations[currentLang]['openNow'];
        } else if (timeInMinutes < morningStart) {
            status = 'soon';
            label = translations[currentLang]['opensSoon'];
        } else {
            status = 'closed';
            label = translations[currentLang]['openClosed'];
        }
    }

    statusEl.className = 'open-status ' + status;
    statusEl.textContent = label;
}

function initOpeningStatus() {
    updateOpeningStatus();
    setInterval(updateOpeningStatus, 60000);
}

// ---------- Scroll Animations ----------
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .property-card, .about-image, .about-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
}

// ---------- Close dropdowns on outside click ----------
function closeDropdownsOnOutsideClick() {
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('langDropdown');
        const langBtn = document.querySelector('.lang-btn');
        if (dropdown && dropdown.classList.contains('open') &&
            !dropdown.contains(e.target) && !langBtn.contains(e.target)) {
            dropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const dropdown = document.getElementById('langDropdown');
            if (dropdown && dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
                document.querySelector('.lang-btn').setAttribute('aria-expanded', 'false');
            }
        }
    });
        }
