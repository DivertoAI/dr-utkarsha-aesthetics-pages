export const siteUrl = "https://www.drutkarshaaesthetics.com";

export const clinic = {
  name: "Dr Utkarsha's Esthetic Centre",
  brand: "Dr Utkarsha Aesthetics",
  tagline: "Premium dental, skin, hair and body aesthetics in Malleswaram, Bangalore.",
  description:
    "Dr Utkarsha's Esthetic Centre in Malleswaram brings dental, skin, hair, and body aesthetic care under one roof with a consultation-first and minimal-intervention approach.",
  foundedText: "Serving Bengaluru with specialist-led care since 2002.",
  primaryPhone: "+91 98451 08895",
  phones: ["+91 98451 08895", "+91 81055 63594", "+91 80 2331 2323"],
  whatsapp: "https://wa.me/918105563594?text=Hi%20I%20want%20to%20book%20a%20consultation%20at%20Dr%20Utkarsha%20Aesthetics.",
  email: "drutkarshalokesh@gmail.com",
  address: [
    "#298, Between 16th and 17th Cross",
    "Sampige Road, Below Utkarshas Dental & Implant Clinic",
    "Malleswaram, Bangalore - 560003"
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d646.7861983345158!2d77.57110331616533!3d13.000681963836922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70eb42910d54bd42!2sDr%20Utkarshas%20Esthetic%20Centre!5e0!3m2!1sen!2sin!4v1656751252110!5m2!1sen!2sin",
  coordinates: {
    latitude: 13.000681963836922,
    longitude: 77.57110331616533
  },
  social: {
    facebook: "https://www.facebook.com/drutkarshasestheticcentre",
    instagram: "https://www.instagram.com/drutkarshasestheticcentre/",
    youtube: "https://www.youtube.com/channel/UCpbnqItCONob-54wq1Oo9AA/videos"
  }
};

export type Service = {
  slug: string;
  title: string;
  category: "Dental" | "Hair" | "Skin" | "Body";
  summary: string;
};

export const services: Service[] = [
  {
    slug: "cosmetic-dentistry-services-malleswaram",
    title: "Cosmetic Dentistry",
    category: "Dental",
    summary: "Smile enhancement plans for shape, symmetry, and natural confidence."
  },
  {
    slug: "dental-implants-in-malleswaram",
    title: "Dental Implants",
    category: "Dental",
    summary: "Specialist implant restoration workflows with long-term function in mind."
  },
  {
    slug: "maxillofacial-surgery-malleswaram",
    title: "Maxillofacial Surgery",
    category: "Dental",
    summary: "Comprehensive oral and facial surgical consultation and treatment planning."
  },
  {
    slug: "teeth-whitening-services-malleswaram",
    title: "Teeth Whitening",
    category: "Dental",
    summary: "Professional whitening protocols for brighter, balanced smile outcomes."
  },
  {
    slug: "root-canal-treatment-malleswaram",
    title: "Root Canal Treatment",
    category: "Dental",
    summary: "Precision endodontic treatment with comfort-focused appointments."
  },
  {
    slug: "peridontia-malleswaram-bangalore",
    title: "Crown, Bridge, Denture and Periodontia",
    category: "Dental",
    summary: "Functional and aesthetic dental reconstruction under one care pathway."
  },
  {
    slug: "sterlization",
    title: "Sterilization Standards",
    category: "Dental",
    summary: "Stringent hygiene and sterilization protocol across clinical procedures."
  },
  {
    slug: "hair-loss-treatment-malleswaram",
    title: "Hair Loss Treatment",
    category: "Hair",
    summary: "Root-cause-led plans for male and female hair fall management."
  },
  {
    slug: "hair-transplant-in-malleswaram",
    title: "Hair Transplant",
    category: "Hair",
    summary: "Team-based transplant planning, design, and post-procedure follow up."
  },
  {
    slug: "prp-for-hair-loss",
    title: "PRP for Hair Loss",
    category: "Hair",
    summary: "Platelet-rich plasma sessions designed to support scalp recovery."
  },
  {
    slug: "mesotherapy-for-hair-growth",
    title: "Mesotherapy for Hair Growth",
    category: "Hair",
    summary: "Targeted scalp nutrition and stimulation protocols."
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    category: "Hair",
    summary: "Clinic-supervised laser sessions for predictable reduction outcomes."
  },
  {
    slug: "chemical-peel-malleswaram",
    title: "Chemical Peel",
    category: "Skin",
    summary: "Medical peels tailored for tone, texture, and controlled resurfacing."
  },
  {
    slug: "acne-treatment-malleswaram",
    title: "Acne Treatment",
    category: "Skin",
    summary: "Integrated plans for active acne control and post-acne recovery."
  },
  {
    slug: "prp-for-skin-malleswaram",
    title: "PRP for Skin",
    category: "Skin",
    summary: "Regenerative skin rejuvenation using platelet-rich plasma therapy."
  },
  {
    slug: "botolinium-toxin-botox",
    title: "Botulinum Toxin (Botox)",
    category: "Skin",
    summary: "Natural-looking expression balancing with expert dosage planning."
  },
  {
    slug: "derma-filler",
    title: "Derma Filler",
    category: "Skin",
    summary: "Facial volume harmonization with conservative aesthetic strategy."
  },
  {
    slug: "anti-aging-bangalore",
    title: "Anti-Aging Treatments",
    category: "Skin",
    summary: "Personalized anti-aging protocols based on skin goals and lifestyle."
  },
  {
    slug: "tattoo-removal-center-in-bangalore",
    title: "Tattoo Removal",
    category: "Skin",
    summary: "Clinic-guided tattoo fading journeys with staged care plans."
  },
  {
    slug: "skin-tightening-malleswaram",
    title: "Skin Tightening",
    category: "Body",
    summary: "Non-surgical tightening pathways for facial and body zones."
  },
  {
    slug: "face-rejuvenation",
    title: "Face Rejuvenation",
    category: "Body",
    summary: "Multi-modal facial rejuvenation plans for refreshed, natural results."
  },
  {
    slug: "face-lift",
    title: "Face Lift (Non-Surgical)",
    category: "Body",
    summary: "Structured non-surgical lift protocols with recovery-conscious planning."
  },
  {
    slug: "breast-firming",
    title: "Breast Firming",
    category: "Body",
    summary: "Aesthetic body contour consultations with personalized recommendations."
  },
  {
    slug: "gynecomastia",
    title: "Gynecomastia",
    category: "Body",
    summary: "Male chest contour correction consultation and treatment guidance."
  },
  {
    slug: "body-shaping-malleswaram",
    title: "Body Shaping",
    category: "Body",
    summary: "Targeted sculpting plans aligned to realistic body goals."
  },
  {
    slug: "bra-fat-reduction",
    title: "Bra Fat Reduction",
    category: "Body",
    summary: "Localized contour correction focused on difficult upper-back areas."
  },
  {
    slug: "radio-frequency-cavitation",
    title: "Radio Frequency and Cavitation",
    category: "Body",
    summary: "Non-invasive contouring modalities combined for gradual transformation."
  },
  {
    slug: "fat-reduction",
    title: "Fat Reduction",
    category: "Body",
    summary: "Evidence-based treatment planning for targeted fat reduction areas."
  },
  {
    slug: "spot-fat-reduction",
    title: "Spot Fat Reduction",
    category: "Body",
    summary: "Area-specific shaping for abdomen, flanks, chin, and localized zones."
  },
  {
    slug: "cryotherapy-treatment-in-malleswaram",
    title: "Cryotherapy",
    category: "Body",
    summary: "Cold-based treatment protocols selected for suitable body concerns."
  },
  {
    slug: "top-dental-care-clinic-malleswaram",
    title: "Top Dental Care Clinic in Malleswaram",
    category: "Dental",
    summary: "Local Bangalore dental consultation page for nearby families and professionals."
  },
  {
    slug: "best-dentists-in-malleswaram",
    title: "Best Dentists in Malleswaram",
    category: "Dental",
    summary: "Dentist discovery and appointment booking page focused on Malleswaram."
  }
];

export const servicesByCategory = {
  Dental: services.filter((service) => service.category === "Dental"),
  Hair: services.filter((service) => service.category === "Hair"),
  Skin: services.filter((service) => service.category === "Skin"),
  Body: services.filter((service) => service.category === "Body")
} as const;

export const doctors = [
  {
    name: "Dr. Utkarsha Lokesh",
    role: "Oral & Maxillofacial Surgeon, Cosmetologist, Hair Transplant Surgeon",
    image: "/doctors/dr-utkarsha.png",
    credentials:
      "MDS (Oral & Maxillofacial Surgery), Fellowship in Aesthetic Medicine, PG Diploma in Trichology, BDS"
  },
  {
    name: "Dr. Pallavi Sarji",
    role: "Cosmetic / Aesthetic Physician and Dermatology Specialist",
    image: "/doctors/dr-pallavi.png",
    credentials:
      "Diploma in Practical Dermatology (Cardiff University), Fellowship in Aesthetic Medicine (Germany)"
  },
  {
    name: "Dr. Vinod Sonawane",
    role: "Hair Transplant Expert",
    image: "/doctors/dr-vinod.png",
    credentials: "MD Anaesthesiology, PG Diploma in Trichology"
  }
];

export const patientJourney = [
  {
    step: "1",
    title: "Outcome-Focused Consultation",
    detail:
      "Share your concerns and goals. The doctor team aligns treatment options to timeline, budget, and comfort."
  },
  {
    step: "2",
    title: "Clinical Assessment",
    detail:
      "Detailed evaluation with diagnostics where required, followed by transparent treatment recommendations."
  },
  {
    step: "3",
    title: "Personalized Plan",
    detail:
      "You receive a clear stepwise plan with expected sessions, recovery guidance, and checkpoint reviews."
  },
  {
    step: "4",
    title: "After-Care and Follow-Up",
    detail:
      "Post-treatment follow-up and maintenance to sustain outcomes over the long term."
  }
];

export const businessPrograms = [
  {
    title: "Corporate Skin & Hair Wellness Days",
    detail:
      "On-site or clinic-based aesthetic awareness and screening sessions for employee wellness initiatives."
  },
  {
    title: "Leadership Grooming Programs",
    detail:
      "Consultative image and confidence-focused programs for client-facing teams and leadership roles."
  },
  {
    title: "Preferred Partner Access",
    detail:
      "Priority scheduling and centralized coordination for businesses referring employees or clients."
  }
];

export const testimonials = [
  {
    name: "Sandhya Banda",
    text: "Professional team, clear guidance, and careful treatment planning for both dental and cosmetic concerns."
  },
  {
    name: "Zayba Syed",
    text: "A complete makeover clinic experience with dedicated support for acne and confidence-building outcomes."
  },
  {
    name: "Shobha Sharath",
    text: "Strong counselling before treatment, patient-friendly doctors, and consistent follow-up."
  },
  {
    name: "Meera Darji",
    text: "Excellent pediatric comfort and a caring environment that made the visit stress-free for our family."
  }
];

export const faqs = [
  {
    question: "How do first-time consultations work?",
    answer:
      "You begin with registration, clinical examination, and diagnostics where required. The team then shares a detailed treatment plan and cost estimate."
  },
  {
    question: "Do you accept new patients in Bangalore?",
    answer:
      "Yes. New patients are accepted. Emergency pain cases are prioritized and regular consultations are scheduled at the earliest available slot."
  },
  {
    question: "How can I book an appointment quickly?",
    answer:
      "You can call, WhatsApp, or email the clinic. The team coordinates appointment slots based on urgency and convenience."
  },
  {
    question: "Is this a franchise or corporate chain clinic?",
    answer:
      "The centre states that it is doctor-owned and managed, with specialist consultants selected by the chief doctors."
  },
  {
    question: "Is parking available near the clinic?",
    answer:
      "Yes. The clinic highlights road-side parking availability on Sampige Road in Malleswaram."
  },
  {
    question: "Do you have multiple branches in Bangalore?",
    answer:
      "The FAQ indicates two Bengaluru centres and advises patients to confirm the preferred branch while booking."
  }
];

export type GalleryItem = {
  src: string;
  title: string;
  subtitle?: string;
};

export const gallery: GalleryItem[] = [
  { src: "/gallery/2.jpg", title: "His Holiness 14th Dalai Lama" },
  {
    src: "/gallery/1.jpg",
    title: "B S Yediyurappa",
    subtitle: "Former Chief Minister, Karnataka"
  },
  {
    src: "/gallery/3.jpg",
    title: "Sri CN Aswath Narayan",
    subtitle: "Former Deputy Chief Minister, Karnataka"
  },
  {
    src: "/gallery/4.jpg",
    title: "Sri Manjunath",
    subtitle: "DC Revenue Department, Karnataka"
  },
  {
    src: "/gallery/5.jpg",
    title: "Sri GM Siddeswara",
    subtitle: "Member of Parliament"
  },
  {
    src: "/gallery/6.jpg",
    title: "Sri Mallikarjuna Kharge",
    subtitle: "Senior Political Leader"
  },
  {
    src: "/gallery/7.jpg",
    title: "Sri Ka Go Du Thimmapp",
    subtitle: "Former Speaker, Karnataka Legislative Assembly"
  },
  {
    src: "/gallery/8.jpg",
    title: "Mr. Abdul Gayoom",
    subtitle: "Former President of Maldives"
  },
  {
    src: "/gallery/9.jpg",
    title: "Vishwabooshana Teertha Swamiji - Pejawar"
  },
  {
    src: "/gallery/10.jpg",
    title: "Sri Kondaiah",
    subtitle: "Senior Congress Leader and Minister"
  },
  {
    src: "/gallery/11.jpg",
    title: "Sri Renukacharya",
    subtitle: "Principal Secretary to the Chief Minister of Karnataka"
  },
  {
    src: "/gallery/12.jpg",
    title: "Sri Katta Subramanya Naidu",
    subtitle: "Senior BJP Leader"
  },
  {
    src: "/gallery/13.jpg",
    title: "Dr. Y Bharath Shetty",
    subtitle: "MLA, Mangalore North"
  },
  {
    src: "/gallery/14.jpg",
    title: "Late Sri Suresh Angadi",
    subtitle: "Former Minister of State for Railways"
  },
  { src: "/gallery/15.jpg", title: "Prof. Mettleman" },
  {
    src: "/gallery/16.jpg",
    title: "Plastic Surgery Team",
    subtitle: "Greifswald, Germany"
  },
  {
    src: "/gallery/17.jpg",
    title: "Mr. Gali Janardhana Reddy",
    subtitle: "Former Politician and Mining Entrepreneur"
  },
  {
    src: "/gallery/18.jpg",
    title: "Sri SN Nidhish",
    subtitle: "Vastu Expert"
  },
  {
    src: "/gallery/19.jpg",
    title: "Hari Menon",
    subtitle: "Senior Vice President, Wipro"
  },
  {
    src: "/gallery/20.jpg",
    title: "Sri Sriramulu",
    subtitle: "Former Health Minister, Karnataka"
  },
  {
    src: "/gallery/21.jpg",
    title: "Mr. Dipesh",
    subtitle: "Former VP, Samsung India"
  },
  {
    src: "/gallery/22.jpg",
    title: "Sri Vikram Jairam",
    subtitle: "Dean, IISc"
  },
  {
    src: "/gallery/23.jpg",
    title: "Sri Asnorikar",
    subtitle: "Senior BJP Leader"
  },
  {
    src: "/gallery/24.jpg",
    title: "Sri Chandrachud Chakravarthy",
    subtitle: "Senior Editor and Film Maker"
  },
  {
    src: "/gallery/25.jpg",
    title: "Javagal Srinath",
    subtitle: "Former Indian Cricketer"
  },
  {
    src: "/gallery/26.jpg",
    title: "Dr Sudhakar",
    subtitle: "Former Chintamani MLA"
  },
  {
    src: "/gallery/27.jpg",
    title: "Nenapirali Prem",
    subtitle: "Kannada Film Actor"
  },
  {
    src: "/gallery/28.jpg",
    title: "Ricky Kej",
    subtitle: "Grammy Award Winner"
  },
  { src: "/gallery/29.jpg", title: "Danish Sait" }
];

export const highlightedServiceSlugs = [
  "cosmetic-dentistry-services-malleswaram",
  "hair-transplant-in-malleswaram",
  "acne-treatment-malleswaram",
  "laser-hair-removal",
  "botolinium-toxin-botox",
  "face-rejuvenation",
  "dental-implants-in-malleswaram",
  "body-shaping-malleswaram"
];

export const highlightedServices = highlightedServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);

const serviceImageBySlug: Record<string, string> = {
  "cosmetic-dentistry-services-malleswaram": "/service-images/clinic-s1.jpg",
  "dental-implants-in-malleswaram": "/service-images/clinic-s2.jpg",
  "maxillofacial-surgery-malleswaram": "/service-images/clinic-s4.jpg",
  "teeth-whitening-services-malleswaram": "/service-images/clinic-s3.jpg",
  "root-canal-treatment-malleswaram": "/service-images/clinic-s2.jpg",
  "peridontia-malleswaram-bangalore": "/service-images/clinic-s4.jpg",
  sterlization: "/service-images/clinic-sl1.jpg",
  "hair-loss-treatment-malleswaram": "/service-images/clinic-hair-loss.jpg",
  "hair-transplant-in-malleswaram": "/service-images/clinic-hair-transplant.jpg",
  "prp-for-hair-loss": "/service-images/clinic-prp.jpg",
  "mesotherapy-for-hair-growth": "/service-images/clinic-mesotherapy.jpg",
  "laser-hair-removal": "/service-images/clinic-laser-hair-removal.jpg",
  "chemical-peel-malleswaram": "/service-images/clinic-chemical-peel.jpg",
  "acne-treatment-malleswaram": "/service-images/clinic-acne-treatment.jpg",
  "prp-for-skin-malleswaram": "/service-images/clinic-prp-skin.jpg",
  "botolinium-toxin-botox": "/service-images/clinic-botox.jpg",
  "derma-filler": "/service-images/clinic-derma-filler.jpg",
  "anti-aging-bangalore": "/service-images/clinic-anti-aging.jpg",
  "tattoo-removal-center-in-bangalore": "/service-images/clinic-tatoo-removal.jpg",
  "skin-tightening-malleswaram": "/service-images/clinic-skin-tightening.jpg",
  "face-rejuvenation": "/service-images/clinic-face-rejuvenation.jpg",
  "face-lift": "/service-images/clinic-face-lift.jpg",
  "breast-firming": "/service-images/clinic-breast-firming.jpg",
  gynecomastia: "/service-images/clinic-gynecomastia.jpg",
  "body-shaping-malleswaram": "/service-images/clinic-body-shaping.jpg",
  "bra-fat-reduction": "/service-images/clinic-bra-fat.jpg",
  "radio-frequency-cavitation": "/service-images/clinic-radio.jpg",
  "fat-reduction": "/service-images/clinic-fat-reduction.jpg",
  "spot-fat-reduction": "/service-images/clinic-spot-fat.jpg",
  "cryotherapy-treatment-in-malleswaram": "/service-images/clinic-cryotherapy.jpg",
  "top-dental-care-clinic-malleswaram": "/service-images/clinic-sl2.jpg",
  "best-dentists-in-malleswaram": "/service-images/clinic-sl3.jpg"
};

const serviceCategoryFallback: Record<Service["category"], string> = {
  Dental: "/service-images/clinic-s1.jpg",
  Hair: "/service-images/clinic-hair-transplant.jpg",
  Skin: "/service-images/clinic-acne-treatment.jpg",
  Body: "/service-images/clinic-body-shaping.jpg"
};

export const getServiceImage = (service: Service) => {
  return serviceImageBySlug[service.slug] ?? serviceCategoryFallback[service.category];
};
