/* ==========================================================================
   SARKER STUDIO — TRANSLATE ENGINE
   Instant bilingual switching (English / বাংলা) — no reload required.
   Usage: add data-i18n="key" to any element's text content,
   or data-i18n-placeholder="key" for input placeholders.
   ========================================================================== */

const translations = {
  en: {
    /* ---------- Navbar ---------- */
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_order: "Order Now",

    /* ---------- Hero (index) ---------- */
    hero_tag: "Now booking new projects — 2026",
    hero_title_1: "Design. Develop.",
    hero_title_2: "Digitalize.",
    hero_typed_1: "Websites that convert.",
    hero_typed_2: "Brands that stand out.",
    hero_typed_3: "AI that saves you time.",
    hero_typed_4: "Marketing that grows sales.",
    hero_desc: "At Sarker Studio, we transform ideas into powerful digital experiences through web development, branding, AI solutions, and social media marketing. Your vision, our creativity.",
    btn_get_started: "Get Started",
    btn_view_portfolio: "View Portfolio",
    btn_order_now: "Order Now",
    stat_projects: "Projects Delivered",
    stat_clients: "Happy Clients",
    stat_support: "Support Available",
    stat_experts: "Team Experts",

    /* ---------- About preview / section ---------- */
    eyebrow_about: "About Sarker Studio",
    about_title: "A studio built to make your brand unmissable",
    about_desc: "Sarker Studio was founded with a simple goal — to help businesses establish a strong digital presence through creative design and modern technology. We believe every brand deserves a professional identity, whether it's a startup, local business, hospital, or growing company.",
    btn_learn_more: "Learn More About Us",

    /* ---------- Services ---------- */
    eyebrow_services: "What We Do",
    services_title: "Services built around your growth",
    services_desc: "From your first landing page to full-scale automation, every service is designed, built and supported in-house.",
    svc_web_title: "Website Development",
    svc_web_desc: "Landing pages, business sites, hospitals, restaurants, schools, colleges, news portals and e-commerce — built fast and built right.",
    svc_graphic_title: "Graphic Design",
    svc_graphic_desc: "Logos, brand identity, posters, business cards, banners and social posts that make your brand recognisable.",
    svc_uiux_title: "UI/UX Design",
    svc_uiux_desc: "Interfaces people enjoy using — wireframed, tested and polished for real customers.",
    svc_smm_title: "Social Media Marketing",
    svc_smm_desc: "Facebook Ads and Google Ads campaigns managed end-to-end to bring in real customers.",
    svc_seo_title: "SEO",
    svc_seo_desc: "On-page and technical SEO that gets your business found on Google.",
    svc_ai_title: "AI Automation",
    svc_ai_desc: "Chatbots and workflow automation that save your team hours every week.",
    svc_hosting_title: "Domain & Hosting",
    svc_hosting_desc: "Domain registration, hosting setup and ongoing website maintenance, handled for you.",
    svc_redesign_title: "Website Redesign",
    svc_redesign_desc: "Give an outdated website a modern, faster, mobile-friendly upgrade.",
    btn_view_all_services: "View All Services",
    btn_order: "Order Now",

    /* ---------- Why choose us ---------- */
    eyebrow_why: "Why Sarker Studio",
    why_title: "Reasons clients choose to work with us",
    why_1_t: "Affordable Price", why_1_d: "Premium quality delivered at prices built for local businesses and startups.",
    why_2_t: "Modern UI", why_2_d: "Contemporary, glassmorphism-driven interfaces that feel current, not templated.",
    why_3_t: "Responsive", why_3_d: "Every project works flawlessly on mobile, tablet and desktop.",
    why_4_t: "SEO Friendly", why_4_d: "Built with clean semantic structure so search engines can find you.",
    why_5_t: "Fast Delivery", why_5_d: "Clear timelines and on-time handover, every time.",
    why_6_t: "24/7 Support", why_6_d: "Round-the-clock support whenever you need us — we operate 24 hours.",
    why_7_t: "Clean Code", why_7_d: "Hand-written, well-commented, maintainable code — no bloated builders.",
    why_8_t: "Premium Design", why_8_d: "A visual identity that could not be mistaken for anyone else's.",

    /* ---------- Portfolio preview ---------- */
    eyebrow_portfolio: "Our Work",
    portfolio_title: "Recent projects we're proud of",
    btn_view_full_portfolio: "View Full Portfolio",
    pf_live_demo: "Live Demo",

    /* ---------- Pricing preview ---------- */
    eyebrow_pricing: "Pricing",
    pricing_title: "Transparent pricing, no surprises",
    pricing_desc: "Simple packages that scale with your business. Need something custom? We'll build a quote around your project.",
    btn_view_all_pricing: "View Full Pricing",
    price_most_popular: "Most Popular",

    /* ---------- Testimonials ---------- */
    eyebrow_testimonials: "Client Words",
    testimonials_title: "What our clients say",

    /* ---------- FAQ ---------- */
    eyebrow_faq: "FAQ",
    faq_title: "Frequently asked questions",
    faq_1_q: "How long does a website take to build?",
    faq_1_a: "Most landing pages are delivered in 2–4 days, while full business or e-commerce websites typically take 1–3 weeks depending on scope.",
    faq_2_q: "Do you offer support after delivery?",
    faq_2_a: "Yes. We operate 24 hours and offer ongoing maintenance packages so your site stays fast, secure and up to date.",
    faq_3_q: "Can I request a custom design?",
    faq_3_a: "Absolutely. Every project starts with your brand and goals — we don't reuse templates between clients.",
    faq_4_q: "What payment methods do you accept?",
    faq_4_a: "We accept bKash, Nagad, Rocket and bank transfer. A project is confirmed once an advance payment is received.",
    faq_5_q: "Do you work with clients outside Bangladesh?",
    faq_5_a: "Yes, we serve clients internationally and communicate in both English and বাংলা.",

    /* ---------- CTA band ---------- */
    cta_title: "Ready to build something great?",
    cta_desc: "Tell us about your project and get a free consultation — no obligation, just honest advice.",
    btn_start_project: "Start Your Project",
    btn_contact_us: "Contact Us",

    /* ---------- Footer ---------- */
    footer_about_title: "Sarker Studio",
    footer_about_desc: "Design. Develop. Digitalize. A digital agency helping brands in Bangladesh and beyond grow online.",
    footer_quick_links: "Quick Links",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_hours: "Business Hours: 24 Hours",
    footer_rights: "All rights reserved.",
    footer_made: "Crafted with care in Dhaka, Bangladesh.",

    /* ---------- Page heros ---------- */
    ph_about_tag: "About Us",
    ph_about_title: "The story behind Sarker Studio",
    ph_services_tag: "Services",
    ph_services_title: "Everything your brand needs, in one studio",
    ph_pricing_tag: "Pricing",
    ph_pricing_title: "Simple, honest pricing",
    ph_portfolio_tag: "Portfolio",
    ph_portfolio_title: "Work we've shipped",
    ph_contact_tag: "Contact",
    ph_contact_title: "Let's start a conversation",
    ph_order_tag: "Order",
    ph_order_title: "Tell us about your project",
    ph_privacy_tag: "Legal",
    ph_privacy_title: "Privacy Policy",
    ph_terms_tag: "Legal",
    ph_terms_title: "Terms & Conditions",

    /* ---------- About page ---------- */
    story_title: "Our Story",
    story_desc: "Sarker Studio was founded with a simple goal—to help businesses establish a strong digital presence through creative design and modern technology. We believe every brand deserves a professional identity, whether it's a startup, local business, hospital, or growing company.",
    mission_title: "Our Mission",
    mission_desc: "Our mission is to deliver high-quality, affordable digital solutions that empower businesses to grow online.",
    vision_title: "Our Vision",
    vision_desc: "To become one of Bangladesh's leading digital creative agencies recognized for innovation and reliability.",
    ceo_title: "Message from the CEO",
    ceo_name: "Shiddanta Sarker",
    ceo_role: "Founder & CEO, Sarker Studio",
    ceo_quote: "We started Sarker Studio to prove that great digital work doesn't need to come with a big-agency price tag. Every project we take on gets the same care we'd want for our own brand.",
    timeline_title: "Our Journey",
    tl_1_y: "Early 2026", tl_1_t: "Sarker Studio founded", tl_1_d: "Started in Dhaka with a mission to make premium web design accessible.",
    tl_2_y: "Mid 2026", tl_2_t: "First 25 projects delivered", tl_2_d: "Websites shipped for local businesses, restaurants and clinics.",
    tl_3_y: "Late 2026", tl_3_t: "AI & marketing services launched", tl_3_d: "Expanded into chatbots, automation and paid ad management.",
    tl_4_y: "Today", tl_4_t: "Growing every week", tl_4_d: "Serving clients across Bangladesh and internationally.",

    /* ---------- Contact page ---------- */
    contact_form_title: "Send us a message",
    contact_info_title: "Get in touch",
    label_phone: "Phone", label_email: "Email", label_facebook: "Facebook", label_hours: "Business Hours",
    label_location: "Location",
    full_name: "Full Name",
    subject: "Subject",
    message: "Message",
    send_message: "Send Message",

    /* ---------- Order page ---------- */
    order_form_title: "Project Order Form",
    order_form_desc: "Fill in the details below and our team will reach out within a few hours to confirm scope and pricing.",
    company_name: "Company Name",
    business_type: "Business Type",
    selected_service: "Selected Service",
    budget: "Budget (BDT)",
    deadline: "Project Deadline",
    project_desc: "Project Description",
    file_upload: "Attach Files (brief, logo, reference images)",
    file_drop_text: "Click or drag files here to upload",
    submit_order: "Submit Order",

    /* ---------- Buttons generic ---------- */
    btn_order_this: "Order This Service",
    required_note: "Fields marked with * are required.",

    /* ---------- 404 ---------- */
    error_title: "Page not found",
    error_desc: "The page you're looking for has been moved, renamed, or doesn't exist.",
    btn_go_home: "Back to Homepage",
  },

  bn: {
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_services: "সার্ভিসেস",
    nav_pricing: "মূল্য তালিকা",
    nav_portfolio: "পোর্টফোলিও",
    nav_contact: "যোগাযোগ",
    nav_order: "অর্ডার করুন",

    hero_tag: "নতুন প্রজেক্টের জন্য বুকিং চলছে — ২০২৬",
    hero_title_1: "ডিজাইন। ডেভেলপ।",
    hero_title_2: "ডিজিটালাইজ।",
    hero_typed_1: "ওয়েবসাইট যা বিক্রি বাড়ায়।",
    hero_typed_2: "ব্র্যান্ড যা আলাদা করে চেনায়।",
    hero_typed_3: "AI যা সময় বাঁচায়।",
    hero_typed_4: "মার্কেটিং যা বিক্রয় বৃদ্ধি করে।",
    hero_desc: "Sarker Studio-তে, আমরা ওয়েব ডেভেলপমেন্ট, ব্র্যান্ডিং, AI সল্যুশন এবং সোশ্যাল মিডিয়া মার্কেটিংয়ের মাধ্যমে আপনার আইডিয়াকে শক্তিশালী ডিজিটাল অভিজ্ঞতায় রূপান্তরিত করি। আপনার ভিশন, আমাদের সৃজনশীলতা।",
    btn_get_started: "শুরু করুন",
    btn_view_portfolio: "পোর্টফোলিও দেখুন",
    btn_order_now: "অর্ডার করুন",
    stat_projects: "সম্পন্ন প্রজেক্ট",
    stat_clients: "সন্তুষ্ট ক্লায়েন্ট",
    stat_support: "সাপোর্ট সুবিধা",
    stat_experts: "টিম এক্সপার্ট",

    eyebrow_about: "Sarker Studio সম্পর্কে",
    about_title: "আপনার ব্র্যান্ডকে অনন্য করে তোলার জন্য তৈরি একটি স্টুডিও",
    about_desc: "Sarker Studio প্রতিষ্ঠিত হয়েছে একটি সাধারণ লক্ষ্য নিয়ে—সৃজনশীল ডিজাইন ও আধুনিক প্রযুক্তির মাধ্যমে ব্যবসাকে শক্তিশালী ডিজিটাল উপস্থিতি গড়তে সাহায্য করা। আমরা বিশ্বাস করি প্রতিটি ব্র্যান্ডের একটি প্রফেশনাল পরিচিতি প্রাপ্য, তা স্টার্টআপ, স্থানীয় ব্যবসা, হাসপাতাল বা প্রবৃদ্ধিশীল কোম্পানি যাই হোক না কেন।",
    btn_learn_more: "আরও জানুন",

    eyebrow_services: "আমরা যা করি",
    services_title: "আপনার প্রবৃদ্ধির জন্য তৈরি সার্ভিস",
    services_desc: "প্রথম ল্যান্ডিং পেজ থেকে শুরু করে সম্পূর্ণ অটোমেশন পর্যন্ত, প্রতিটি সার্ভিস আমাদের নিজস্ব টিম দ্বারা ডিজাইন, তৈরি ও সাপোর্ট করা হয়।",
    svc_web_title: "ওয়েবসাইট ডেভেলপমেন্ট",
    svc_web_desc: "ল্যান্ডিং পেজ, বিজনেস সাইট, হাসপাতাল, রেস্টুরেন্ট, স্কুল, কলেজ, নিউজ পোর্টাল ও ই-কমার্স — দ্রুত ও সঠিকভাবে তৈরি।",
    svc_graphic_title: "গ্রাফিক ডিজাইন",
    svc_graphic_desc: "লোগো, ব্র্যান্ড আইডেন্টিটি, পোস্টার, বিজনেস কার্ড, ব্যানার ও সোশ্যাল পোস্ট যা আপনার ব্র্যান্ডকে স্বীকৃত করে তোলে।",
    svc_uiux_title: "UI/UX ডিজাইন",
    svc_uiux_desc: "ব্যবহারকারীরা উপভোগ করবে এমন ইন্টারফেস — ওয়্যারফ্রেমড, টেস্টেড ও পালিশড।",
    svc_smm_title: "সোশ্যাল মিডিয়া মার্কেটিং",
    svc_smm_desc: "Facebook Ads এবং Google Ads ক্যাম্পেইন সম্পূর্ণভাবে পরিচালনা করে বাস্তব গ্রাহক নিয়ে আসা।",
    svc_seo_title: "SEO",
    svc_seo_desc: "অন-পেজ ও টেকনিক্যাল SEO যা আপনার ব্যবসাকে Google-এ খুঁজে পেতে সাহায্য করে।",
    svc_ai_title: "AI অটোমেশন",
    svc_ai_desc: "চ্যাটবট ও ওয়ার্কফ্লো অটোমেশন যা আপনার টিমের প্রতি সপ্তাহে অনেক সময় বাঁচায়।",
    svc_hosting_title: "ডোমেইন ও হোস্টিং",
    svc_hosting_desc: "ডোমেইন রেজিস্ট্রেশন, হোস্টিং সেটআপ ও চলমান ওয়েবসাইট মেইনটেন্যান্স, সবকিছু আমরা সামলাই।",
    svc_redesign_title: "ওয়েবসাইট রিডিজাইন",
    svc_redesign_desc: "পুরনো ওয়েবসাইটকে আধুনিক, দ্রুত ও মোবাইল-ফ্রেন্ডলি করে তুলুন।",
    btn_view_all_services: "সব সার্ভিস দেখুন",
    btn_order: "অর্ডার করুন",

    eyebrow_why: "কেন Sarker Studio",
    why_title: "ক্লায়েন্টরা কেন আমাদের সাথে কাজ করতে বেছে নেয়",
    why_1_t: "সাশ্রয়ী মূল্য", why_1_d: "স্থানীয় ব্যবসা ও স্টার্টআপদের জন্য উপযুক্ত মূল্যে প্রিমিয়াম মানের কাজ।",
    why_2_t: "আধুনিক UI", why_2_d: "গ্লাসমরফিজম-চালিত ইন্টারফেস যা টেমপ্লেটেড নয়, বরং একদম আধুনিক মনে হয়।",
    why_3_t: "রেসপন্সিভ", why_3_d: "প্রতিটি প্রজেক্ট মোবাইল, ট্যাবলেট ও ডেস্কটপে নিখুঁতভাবে কাজ করে।",
    why_4_t: "SEO ফ্রেন্ডলি", why_4_d: "পরিষ্কার সিমান্টিক স্ট্রাকচার দিয়ে তৈরি যাতে সার্চ ইঞ্জিন আপনাকে খুঁজে পায়।",
    why_5_t: "দ্রুত ডেলিভারি", why_5_d: "স্পষ্ট সময়সূচি ও যথাসময়ে হস্তান্তর, প্রতিবার।",
    why_6_t: "২৪/৭ সাপোর্ট", why_6_d: "যখনই প্রয়োজন, আমরা পাশে আছি — আমরা ২৪ ঘণ্টা সচল।",
    why_7_t: "ক্লিন কোড", why_7_d: "হাতে লেখা, ভালোভাবে কমেন্ট করা, মেইনটেইনেবল কোড — কোনো ভারী বিল্ডার নয়।",
    why_8_t: "প্রিমিয়াম ডিজাইন", why_8_d: "এমন একটি ভিজ্যুয়াল পরিচিতি যা অন্য কারো সাথে গুলিয়ে ফেলা যাবে না।",

    eyebrow_portfolio: "আমাদের কাজ",
    portfolio_title: "সাম্প্রতিক প্রজেক্ট যা নিয়ে আমরা গর্বিত",
    btn_view_full_portfolio: "সম্পূর্ণ পোর্টফোলিও দেখুন",
    pf_live_demo: "লাইভ ডেমো",

    eyebrow_pricing: "মূল্য তালিকা",
    pricing_title: "স্বচ্ছ মূল্য, কোনো লুকোচুরি নেই",
    pricing_desc: "সহজ প্যাকেজ যা আপনার ব্যবসার সাথে বাড়ে। কাস্টম কিছু দরকার? আমরা আপনার প্রজেক্ট অনুযায়ী কোট তৈরি করব।",
    btn_view_all_pricing: "সম্পূর্ণ মূল্য তালিকা দেখুন",
    price_most_popular: "সবচেয়ে জনপ্রিয়",

    eyebrow_testimonials: "ক্লায়েন্টদের কথা",
    testimonials_title: "আমাদের ক্লায়েন্টরা যা বলেন",

    eyebrow_faq: "সাধারণ জিজ্ঞাসা",
    faq_title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    faq_1_q: "একটি ওয়েবসাইট তৈরি করতে কত সময় লাগে?",
    faq_1_a: "বেশিরভাগ ল্যান্ডিং পেজ ২–৪ দিনে ডেলিভার করা হয়, আর সম্পূর্ণ বিজনেস বা ই-কমার্স ওয়েবসাইট স্কোপ অনুযায়ী সাধারণত ১–৩ সপ্তাহ সময় নেয়।",
    faq_2_q: "ডেলিভারির পরেও কি সাপোর্ট পাওয়া যায়?",
    faq_2_a: "হ্যাঁ। আমরা ২৪ ঘণ্টা সচল এবং চলমান মেইনটেন্যান্স প্যাকেজ অফার করি যাতে আপনার সাইট দ্রুত, নিরাপদ ও আপ-টু-ডেট থাকে।",
    faq_3_q: "আমি কি কাস্টম ডিজাইন চাইতে পারি?",
    faq_3_a: "অবশ্যই। প্রতিটি প্রজেক্ট শুরু হয় আপনার ব্র্যান্ড ও লক্ষ্য দিয়ে — আমরা ক্লায়েন্টদের মধ্যে টেমপ্লেট পুনরায় ব্যবহার করি না।",
    faq_4_q: "কোন পেমেন্ট পদ্ধতি গ্রহণযোগ্য?",
    faq_4_a: "আমরা bKash, Nagad, Rocket ও ব্যাংক ট্রান্সফার গ্রহণ করি। অগ্রিম পেমেন্ট পাওয়ার পর প্রজেক্ট নিশ্চিত করা হয়।",
    faq_5_q: "আপনারা কি বাংলাদেশের বাইরের ক্লায়েন্টদের সাথে কাজ করেন?",
    faq_5_a: "হ্যাঁ, আমরা আন্তর্জাতিকভাবে ক্লায়েন্টদের সেবা দিই এবং ইংরেজি ও বাংলা উভয় ভাষায় যোগাযোগ করি।",

    cta_title: "কিছু দুর্দান্ত তৈরি করতে প্রস্তুত?",
    cta_desc: "আপনার প্রজেক্ট সম্পর্কে আমাদের জানান এবং বিনামূল্যে পরামর্শ নিন — কোনো বাধ্যবাধকতা ছাড়াই, শুধু সৎ পরামর্শ।",
    btn_start_project: "আপনার প্রজেক্ট শুরু করুন",
    btn_contact_us: "যোগাযোগ করুন",

    footer_about_title: "Sarker Studio",
    footer_about_desc: "ডিজাইন। ডেভেলপ। ডিজিটালাইজ। বাংলাদেশ ও তার বাইরের ব্র্যান্ডগুলোকে অনলাইনে বৃদ্ধি পেতে সাহায্যকারী একটি ডিজিটাল এজেন্সি।",
    footer_quick_links: "দ্রুত লিংক",
    footer_services: "সার্ভিসেস",
    footer_contact: "যোগাযোগ",
    footer_hours: "ব্যবসার সময়: ২৪ ঘণ্টা",
    footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
    footer_made: "ঢাকা, বাংলাদেশে যত্নসহকারে তৈরি।",

    ph_about_tag: "আমাদের সম্পর্কে",
    ph_about_title: "Sarker Studio-র পেছনের গল্প",
    ph_services_tag: "সার্ভিসেস",
    ph_services_title: "একটি স্টুডিওতে আপনার ব্র্যান্ডের সবকিছু",
    ph_pricing_tag: "মূল্য তালিকা",
    ph_pricing_title: "সহজ, সৎ মূল্য",
    ph_portfolio_tag: "পোর্টফোলিও",
    ph_portfolio_title: "আমরা যা ডেলিভার করেছি",
    ph_contact_tag: "যোগাযোগ",
    ph_contact_title: "চলুন কথোপকথন শুরু করি",
    ph_order_tag: "অর্ডার",
    ph_order_title: "আপনার প্রজেক্ট সম্পর্কে আমাদের জানান",
    ph_privacy_tag: "আইনি",
    ph_privacy_title: "প্রাইভেসি পলিসি",
    ph_terms_tag: "আইনি",
    ph_terms_title: "শর্তাবলী",

    story_title: "আমাদের গল্প",
    story_desc: "Sarker Studio প্রতিষ্ঠিত হয়েছে একটি সাধারণ লক্ষ্য নিয়ে—সৃজনশীল ডিজাইন ও আধুনিক প্রযুক্তির মাধ্যমে ব্যবসাকে শক্তিশালী ডিজিটাল উপস্থিতি গড়তে সাহায্য করা। আমরা বিশ্বাস করি প্রতিটি ব্র্যান্ডের একটি প্রফেশনাল পরিচিতি প্রাপ্য।",
    mission_title: "আমাদের লক্ষ্য",
    mission_desc: "আমাদের লক্ষ্য হলো উচ্চমানের, সাশ্রয়ী ডিজিটাল সমাধান প্রদান করা যা ব্যবসাকে অনলাইনে বৃদ্ধি পেতে সক্ষম করে।",
    vision_title: "আমাদের ভিশন",
    vision_desc: "উদ্ভাবন ও নির্ভরযোগ্যতার জন্য স্বীকৃত বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল ক্রিয়েটিভ এজেন্সিগুলোর একটি হয়ে ওঠা।",
    ceo_title: "সিইও-র বার্তা",
    ceo_name: "শিদ্ধান্ত সরকার",
    ceo_role: "প্রতিষ্ঠাতা ও সিইও, Sarker Studio",
    ceo_quote: "আমরা Sarker Studio শুরু করেছি এটা প্রমাণ করতে যে দুর্দান্ত ডিজিটাল কাজের জন্য বড় এজেন্সির মূল্য দিতে হয় না। আমরা যে প্রজেক্টই নিই না কেন, নিজের ব্র্যান্ডের মতোই যত্ন নিই।",
    timeline_title: "আমাদের যাত্রা",
    tl_1_y: "২০২৬-এর শুরু", tl_1_t: "Sarker Studio প্রতিষ্ঠিত", tl_1_d: "প্রিমিয়াম ওয়েব ডিজাইনকে সহজলভ্য করার লক্ষ্য নিয়ে ঢাকায় যাত্রা শুরু।",
    tl_2_y: "২০২৬-এর মাঝামাঝি", tl_2_t: "প্রথম ২৫টি প্রজেক্ট ডেলিভার", tl_2_d: "স্থানীয় ব্যবসা, রেস্টুরেন্ট ও ক্লিনিকের জন্য ওয়েবসাইট তৈরি।",
    tl_3_y: "২০২৬-এর শেষে", tl_3_t: "AI ও মার্কেটিং সার্ভিস চালু", tl_3_d: "চ্যাটবট, অটোমেশন ও পেইড বিজ্ঞাপন ব্যবস্থাপনায় সম্প্রসারণ।",
    tl_4_y: "বর্তমানে", tl_4_t: "প্রতি সপ্তাহে বৃদ্ধি পাচ্ছে", tl_4_d: "বাংলাদেশ ও আন্তর্জাতিকভাবে ক্লায়েন্টদের সেবা প্রদান।",

    contact_form_title: "আমাদের একটি বার্তা পাঠান",
    contact_info_title: "যোগাযোগ করুন",
    label_phone: "ফোন", label_email: "ইমেইল", label_facebook: "ফেসবুক", label_hours: "ব্যবসার সময়",
    label_location: "অবস্থান",
    full_name: "পুরো নাম",
    subject: "বিষয়",
    message: "বার্তা",
    send_message: "বার্তা পাঠান",

    order_form_title: "প্রজেক্ট অর্ডার ফর্ম",
    order_form_desc: "নিচের বিবরণ পূরণ করুন এবং আমাদের টিম কয়েক ঘণ্টার মধ্যে স্কোপ ও মূল্য নিশ্চিত করতে যোগাযোগ করবে।",
    company_name: "কোম্পানির নাম",
    business_type: "ব্যবসার ধরন",
    selected_service: "নির্বাচিত সার্ভিস",
    budget: "বাজেট (টাকা)",
    deadline: "প্রজেক্ট ডেডলাইন",
    project_desc: "প্রজেক্টের বিবরণ",
    file_upload: "ফাইল সংযুক্ত করুন (ব্রিফ, লোগো, রেফারেন্স ছবি)",
    file_drop_text: "ফাইল আপলোড করতে ক্লিক করুন বা এখানে টেনে আনুন",
    submit_order: "অর্ডার জমা দিন",

    btn_order_this: "এই সার্ভিস অর্ডার করুন",
    required_note: "* চিহ্নিত ফিল্ডগুলো আবশ্যক।",

    error_title: "পেজ খুঁজে পাওয়া যায়নি",
    error_desc: "আপনি যে পেজটি খুঁজছেন তা সরানো হয়েছে, নাম পরিবর্তন হয়েছে, অথবা বিদ্যমান নেই।",
    btn_go_home: "হোমপেজে ফিরে যান",
  }
};

/* ---- Engine ---- */
function applyLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){ el.textContent = dict[key]; }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] !== undefined){ el.setAttribute('placeholder', dict[key]); }
  });
  document.querySelectorAll('.lang-switch button, .mobile-lang button').forEach(btn=>{
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('sarker_lang', lang);
}

function initLanguage(){
  const saved = localStorage.getItem('sarker_lang') || 'en';
  applyLanguage(saved);
  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=> applyLanguage(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
