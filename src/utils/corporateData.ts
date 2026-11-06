import {
  BusinessPillar,
  CorporateValue,
  NewsArticle,
  ContactFormData,
  FormValidationErrors,
  DeswarthaCorporateData,
  FounderData
} from '../types';

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: 'ecommerce-digital-commerce',
    slug: 'ecommerce',
    title: {
      id: 'Ecommerce & Digital Commerce',
      en: 'Ecommerce & Digital Commerce',
    },
    shortDesc: {
      id: 'Fondasi perdagangan digital terintegrasi yang menghubungkan prinsipal bisnis, produsen, dan konsumen melalui kanal distribusi modern berstandar tinggi.',
      en: 'Integrated digital commerce foundation bridging business principals, producers, and modern consumers through high-standard distribution channels.',
    },
    fullDesc: {
      id: 'PT Lascramall Commerce Network merancang arsitektur rantai nilai perdagangan elektronik yang komprehensif. Kami berfokus pada efisiensi rantai pasok digital, integrasi katalog multi-kategori, sistem pembayaran terverifikasi, dan kepatuhan regulasi transaksi komersial digital di Indonesia.',
      en: 'PT Lascramall Commerce Network designs comprehensive electronic commerce value chain architectures, focusing on digital supply chain efficiency, multi-category catalog integration, verified transaction gateways, and regulatory compliance.',
    },
    keyCapabilities: {
      id: [
        'Manajemen rantai pasok digital hulu-ke-hilir',
        'Katalog terintegrasi multi-kategori',
        'Infrastruktur pemenuhan pesanan (fulfillment) digital',
        'Tata kelola transaksi komersial berstandar keamanan tinggi'
      ],
      en: [
        'End-to-end digital supply chain governance',
        'Multi-category catalog management',
        'Digital order fulfillment infrastructure',
        'High-security commercial transaction compliance'
      ]
    },
    strategicFocus: {
      id: 'Membangun keandalan logistik data, kepastian ketersediaan inventaris, dan pengalaman perdagangan elektronik yang efisien bagi mitra korporasi.',
      en: 'Building data logistics reliability, inventory certainty, and efficient digital commerce operations for enterprise partners.'
    },
    iconName: 'ShoppingBag',
    image: '/src/assets/images/business_digital_commerce_1793935841308.jpg'
  },
  {
    id: 'online-marketplace',
    slug: 'marketplace',
    title: {
      id: 'Online Marketplace',
      en: 'Online Marketplace',
    },
    shortDesc: {
      id: 'Pengembangan ekosistem pasar daring multi-tenant berkapasitas tinggi untuk memfasilitasi pertukaran nilai dan kolaborasi lintas pelaku usaha.',
      en: 'High-capacity multi-tenant online marketplace ecosystem facilitating seamless value exchange and multi-tier business collaboration.',
    },
    fullDesc: {
      id: 'Kami merancang fondasi pasar daring yang menitikberatkan pada tata kelola penjual (merchant onboarding), perlindungan pembeli, keterlacakan data transaksi, serta mekanisme verifikasi integritas produk. Pilar ini berorientasi pada pembangunan ekosistem yang sehat, adil, dan berkelanjutan.',
      en: 'We develop marketplace architectural frameworks prioritizing merchant governance, buyer protection, transactional traceability, and product authenticity verification to foster a sustainable digital ecosystem.',
    },
    keyCapabilities: {
      id: [
        'Arsitektur multi-tenant dengan isolasi data terstandardisasi',
        'Sistem verifikasi kepatuhan dan reputasi mitra dagang',
        'Algoritma penemuan katalog terkurasi',
        'Protokol rekonsiliasi keuangan transparan'
      ],
      en: [
        'Multi-tenant architecture with standardized data governance',
        'Merchant compliance verification and reputation index',
        'Curated catalog discovery systems',
        'Transparent financial reconciliation protocols'
      ]
    },
    strategicFocus: {
      id: 'Mendorong pemberdayaan pelaku usaha melalui platform perdagangan bersama yang inklusif, terukur, dan aman.',
      en: 'Empowering merchants through an inclusive, scalable, and secure unified trading platform.'
    },
    iconName: 'Store',
    image: '/src/assets/images/hero_corporate_lascramall_1793935841284.jpg'
  },
  {
    id: 'digital-products-services',
    slug: 'digital-products',
    title: {
      id: 'Digital Products & Services',
      en: 'Digital Products & Services',
    },
    shortDesc: {
      id: 'Distribusi dan agregasi produk digital esensial, voucher elektronik, serta layanan utilitas digital untuk memenuhi kebutuhan gaya hidup masyarakat modern.',
      en: 'Distribution and aggregation of essential digital products, electronic vouchers, and utility services catering to modern digital lifestyles.',
    },
    fullDesc: {
      id: 'Menyediakan saluran distribusi instan untuk produk non-fisik meliputi pulsa, paket data, tagihan utilitas, voucher ritel, dan layanan berlangganan. Melalui konektivitas API berkecepatan tinggi, kami memastikan proses konfirmasi transaksi terjadi secara real-time dengan tingkat keberhasilan optimal.',
      en: 'Providing high-speed distribution channels for non-physical products including telecommunications, utility billing, retail digital vouchers, and subscription services powered by reliable real-time API integrations.',
    },
    keyCapabilities: {
      id: [
        'Integrasi API biner real-time dengan mitra aggregator & penyedia layanan',
        'Ketersediaan layanan berkesinambungan dengan latensi rendah',
        'Pemrosesan penerbitan kode voucher instan',
        'Dukungan sistem inventaris digital terenkripsi'
      ],
      en: [
        'Real-time binary API integration with service providers and aggregators',
        'High-availability low-latency service provisioning',
        'Instant digital voucher generation and dispatch',
        'Encrypted digital inventory repository'
      ]
    },
    strategicFocus: {
      id: 'Memperluas aksesibilitas produk digital harian dengan reliabilitas transaksi di atas rata-rata industri.',
      en: 'Expanding seamless accessibility to daily digital commodities with enterprise-grade operational uptime.'
    },
    iconName: 'Cpu',
    image: '/src/assets/images/business_digital_commerce_1793935841308.jpg'
  },
  {
    id: 'gaming-digital-assets',
    slug: 'gaming-assets',
    title: {
      id: 'Gaming Digital Assets',
      en: 'Gaming Digital Assets',
    },
    shortDesc: {
      id: 'Infrastruktur distribusi resmi dan terpercaya untuk mata uang dalam game, voucher hiburan interaktif, dan lisensi konten digital gaming.',
      en: 'Official, reliable distribution infrastructure for in-game currencies, interactive entertainment vouchers, and licensed gaming content.',
    },
    fullDesc: {
      id: 'Sebagai bagian dari lanskap hiburan digital yang berkembang pesat, PT Lascramall Commerce Network membangun kanal distribusi legal untuk kebutuhan ekosistem gaming. Kami memprioritaskan keamanan akun pengguna, kepastian pengiriman aset, dan kemitraan resmi dengan penerbit konten terkemuka.',
      en: 'Recognizing the rapid growth of the interactive entertainment economy, PT Lascramall Commerce Network establishes compliant distribution pipelines for the gaming ecosystem, prioritizing user security, delivery precision, and authorized publisher partnerships.',
    },
    keyCapabilities: {
      id: [
        'Distribusi resmi mata uang dalam game dan voucher digital',
        'Penyelesaian pemesanan otomatis dalam hitungan detik',
        'Kepatuhan regulasi lisensi konten hiburan digital',
        'Sistem pencegahan penipuan (fraud detection) transaksi mikro'
      ],
      en: [
        'Official distribution of in-game currencies and digital codes',
        'Sub-second automated order fulfillment pipelines',
        'Compliance with interactive digital content licensing frameworks',
        'Microtransaction fraud prevention and risk assessment'
      ]
    },
    strategicFocus: {
      id: 'Menjadi mitra distribusi terpercaya bagi komunitas gamer dan korporasi penerbit game di tingkat nasional dan regional.',
      en: 'Becoming the trusted distribution partner for gaming communities and interactive media publishers nationally and regionally.'
    },
    iconName: 'Gamepad2',
    image: '/src/assets/images/business_gaming_digital_1793935842632.jpg'
  },
  {
    id: 'technology-digital-business',
    slug: 'technology-development',
    title: {
      id: 'Technology & Digital Business Development',
      en: 'Technology & Digital Business Development',
    },
    shortDesc: {
      id: 'Riset, pengembangan perangkat lunak proprietary, dan inkubasi model bisnis digital terdepan untuk memastikan keunggulan kompetitif jangka panjang.',
      en: 'Research, proprietary software engineering, and digital business incubation ensuring sustainable long-term competitive advantage.',
    },
    fullDesc: {
      id: 'Divisi ini bertanggung jawab atas pengembangan arsitektur teknologi inti, optimalisasi infrastruktur cloud komersial, integrasi analitik prediktif, serta eksplorasi model bisnis baru. Kami mentransformasi kapabilitas rekayasa perangkat lunak menjadi nilai bisnis yang nyata.',
      en: 'This division drives core software architecture, enterprise cloud optimization, predictive business intelligence, and new digital business model incubation, translating software engineering prowess into concrete economic value.',
    },
    keyCapabilities: {
      id: [
        'Pengembangan perangkat lunak korporat berskala besar',
        'Infrastruktur komputasi awan berdaya tahan tinggi',
        'Rekayasa analitik data komersial & intelijen pasar',
        'Inkubasi dan akselerasi model bisnis digital strategis'
      ],
      en: [
        'Enterprise-grade scalable software engineering',
        'High-resilience cloud infrastructure management',
        'Commercial data analytics and market intelligence',
        'Incubation and acceleration of strategic digital initiatives'
      ]
    },
    strategicFocus: {
      id: 'Menjaga keberlanjutan inovasi teknologi internal guna mendukung seluruh portofolio bisnis korporasi.',
      en: 'Sustaining technological innovation pipelines to empower the company’s comprehensive business portfolio.'
    },
    iconName: 'TrendingUp',
    image: '/src/assets/images/company_headquarters_1793935841998.jpg'
  }
];

export const CORPORATE_VALUES: CorporateValue[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    subtitle: {
      id: 'Inovasi Berkelanjutan',
      en: 'Continuous Innovation'
    },
    description: {
      id: 'Kami senantiasa mengeksplorasi teknologi dan metodologi baru untuk menghadirkan solusi perdagangan digital yang lebih efisien, relevan, dan berdaya saing.',
      en: 'We continuously pioneer new technologies and operating models to deliver more efficient, relevant, and competitive digital commerce solutions.'
    },
    principles: {
      id: ['Eksplorasi teknologi adaptif', 'Pembaruan arsitektur berkelanjutan', 'Budaya pemecahan masalah kreatif'],
      en: ['Adaptive tech exploration', 'Continuous architectural refinement', 'Creative problem-solving culture']
    },
    iconName: 'Lightbulb'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    subtitle: {
      id: 'Integritas & Kepatuhan',
      en: 'Integrity & Governance'
    },
    description: {
      id: 'Menjunjung tinggi standar etika bisnis, transparansi tata kelola perusahaan, kepatuhan hukum, dan tanggung jawab penuh dalam setiap kemitraan.',
      en: 'Upholding uncompromising business ethics, corporate governance transparency, regulatory compliance, and total accountability.'
    },
    principles: {
      id: ['Kepatuhan regulasi komprehensif', 'Transparansi kemitraan', 'Perlindungan data dan privasi'],
      en: ['Comprehensive regulatory compliance', 'Partnership transparency', 'Data and privacy protection']
    },
    iconName: 'ShieldCheck'
  },
  {
    id: 'excellence',
    title: 'Excellence',
    subtitle: {
      id: 'Keunggulan Operasional',
      en: 'Operational Excellence'
    },
    description: {
      id: 'Berkomitmen pada kualitas tertinggi dalam perancangan sistem, eksekusi layanan, dan keandalan operasional tanpa kompromi.',
      en: 'Committed to superior engineering standards, service execution quality, and uncompromising operational uptime.'
    },
    principles: {
      id: ['Standar rekayasa kelas industri', 'Presisi eksekusi layanan', 'Evaluasi performa berkala'],
      en: ['Industrial-grade engineering', 'Precision in service delivery', 'Continuous performance benchmarking']
    },
    iconName: 'Award'
  },
  {
    id: 'customer-focus',
    title: 'Customer Focus',
    subtitle: {
      id: 'Fokus pada Nilai Pengguna',
      en: 'Customer-Centric Value'
    },
    description: {
      id: 'Menjadikan kebutuhan mitra bisnis, pelanggan, dan ekosistem sebagai pusat dari setiap pengambilan keputusan produk dan strategi komersial.',
      en: 'Placing partner, client, and ecosystem needs at the center of every architectural and commercial decision.'
    },
    principles: {
      id: ['Pengalaman pengguna yang mulus', 'Dukungan responsif terhadap mitra', 'Solusi berbasis kebutuhan nyata'],
      en: ['Frictionless user experience', 'Responsive partner support', 'Needs-based pragmatic solutions']
    },
    iconName: 'Users'
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: {
      id: 'Pertumbuhan Bersama',
      en: 'Mutual Sustainable Growth'
    },
    description: {
      id: 'Mendorong ekspansi bisnis yang berlandaskan keberlanjutan finansial, pengembangan kapabilitas talenta, dan perluasan dampak ekonomi positif.',
      en: 'Driving business expansion grounded in fiscal sustainability, talent capability development, and positive economic impact.'
    },
    principles: {
      id: ['Ekspansi terukur dan terencana', 'Pemberdayaan mitra lokal', 'Peningkatan kapasitas kapabilitas tim'],
      en: ['Measured scalable expansion', 'Empowerment of local merchants', 'Team capability elevation']
    },
    iconName: 'TrendingUp'
  },
  {
    id: 'trust',
    title: 'Trust',
    subtitle: {
      id: 'Kepercayaan yang Terjaga',
      en: 'Unwavering Trust'
    },
    description: {
      id: 'Membangun dan memelihara kepercayaan jangka panjang dengan seluruh pemangku kepentingan melalui konsistensi, keandalan, dan komitmen.',
      en: 'Building and nurturing enduring trust with all stakeholders through steadfast consistency, reliability, and fulfilled commitments.'
    },
    principles: {
      id: ['Konsistensi komitmen layanan', 'Sistem keamanan data andal', 'Hubungan kolaboratif jangka panjang'],
      en: ['Service commitment consistency', 'Reliable data security systems', 'Long-term collaborative partnerships']
    },
    iconName: 'CheckCircle2'
  }
];

export const CORPORATE_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: {
      id: 'Penguatan Infrastruktur Digital Commerce PT Lascramall Commerce Network Menyongsong Pertumbuhan Pasar 2026',
      en: 'Strengthening Digital Commerce Infrastructure: PT Lascramall Commerce Network Prepares for 2026 Market Dynamics'
    },
    category: 'Corporate',
    date: '24 Oktober 2026',
    readTime: '4 min read',
    featured: true,
    summary: {
      id: 'PT Lascramall Commerce Network mengumumkan pembaruan arsitektur teknologi inti guna meningkatkan efisiensi pemrosesan transaksi dan keandalan sistem multi-tenant.',
      en: 'PT Lascramall Commerce Network announces core architecture upgrades to elevate transaction processing speed and enterprise multi-tenant system stability.'
    },
    content: {
      id: [
        'JAKARTA — Menghadapi dinamika industri perdagangan digital yang kian menuntut keandalan dan kecepatan tinggi, PT Lascramall Commerce Network secara resmi menuntaskan tahap pertama modernisasi infrastruktur transaksi komersialnya.',
        'Langkah strategis ini mencakup penguatan jaringan gateway data terpusat, pengoptimalan protokol sinkronisasi inventaris digital, serta pengetatan standar enkripsi keamanan data pengguna.',
        '"Fondasi bisnis kami dibangun atas keyakinan bahwa masa depan perdagangan digital bertumpu pada arsitektur teknologi yang kokoh dan tata kelola yang terpercaya," ungkap perwakilan manajemen korporasi. Dengan arsitektur yang diperbarui, kapasitas pemrosesan transaksi dapat diskalakan secara dinamis seiring ekspansi ekosistem.'
      ],
      en: [
        'JAKARTA — In response to the surging demand for speed and resilience in digital commerce, PT Lascramall Commerce Network has officially concluded the initial phase of its commercial transaction infrastructure upgrade.',
        'This strategic milestone encompasses centralized data gateway modernization, real-time digital inventory synchronization protocols, and upgraded cryptographic security benchmarks.',
        '"Our enterprise thesis is anchored in the conviction that the future of digital trade depends upon rigorous engineering and transparent corporate governance," stated company leadership. The upgraded architecture enables seamless horizontal scalability across the growing ecosystem.'
      ]
    },
    author: 'Corporate Communications Desk'
  },
  {
    id: 'news-2',
    title: {
      id: 'Ekspansi Kanal Distribusi Digital Products & Gaming Assets: Menghubungkan Ekosistem Kreatif dan Konsumen',
      en: 'Expanding Digital Products & Gaming Assets Distribution: Connecting the Creative Ecosystem with Consumers'
    },
    category: 'Technology',
    date: '12 September 2026',
    readTime: '3 min read',
    featured: false,
    summary: {
      id: 'Divisi Digital Asset LASCRAMALL memperluas integrasi langsung dengan penyedia konten digital guna menjamin ketersediaan voucher dan aset hiburan secara instan.',
      en: 'LASCRAMALL Digital Asset division broadens direct API integrations with authorized digital content providers to guarantee instant delivery.'
    },
    content: {
      id: [
        'Sebagai bagian dari komitmen memperluas pilar bisnis non-fisik, LASCRAMALL meresmikan kolaborasi teknologi untuk integrasi langsung API penerbitan voucher hiburan dan aset digital interaktif.',
        'Inisiatif ini mengurangi waktu latensi konfirmasi transaksi hingga di bawah 1 detik, sekaligus menghadirkan lapisan verifikasi ganda untuk mencegah potensi fraudulent transactions.',
        'PT Lascramall Commerce Network terus menegaskan posisinya sebagai mitra distribusi terpercaya yang menjunjung tinggi legalitas konten dan perlindungan konsumen.'
      ],
      en: [
        'As part of its ongoing expansion in non-physical digital commodities, LASCRAMALL finalized direct technological integrations with authorized interactive entertainment and voucher providers.',
        'This upgrade reduces order validation latency to under one second while applying dual-layer algorithmic verification to eliminate unauthorized transaction attempts.',
        'PT Lascramall Commerce Network reinforces its standing as a compliant distribution bridge championing content legitimacy and consumer trust.'
      ]
    },
    author: 'Technology & Distribution Team'
  },
  {
    id: 'news-3',
    title: {
      id: 'PT Lascramall Commerce Network Tegaskan Komitmen Tata Kelola Perusahaan yang Baik (Good Corporate Governance)',
      en: 'PT Lascramall Commerce Network Affirms Commitment to Good Corporate Governance and Compliance'
    },
    category: 'Corporate',
    date: '18 Agustus 2026',
    readTime: '5 min read',
    featured: false,
    summary: {
      id: 'Penerapan standar kepatuhan regulasi, perlindungan data pribadi, dan audit berkala menjadi pilar fundamental dalam peta jalan pertumbuhan jangka panjang perseroan.',
      en: 'Implementation of regulatory compliance protocols, personal data safeguards, and systematic audits form the backbone of the company roadmap.'
    },
    content: {
      id: [
        'Dalam rangka memastikan keberlanjutan bisnis di tengah perkembangan regulasi perdagangan elektronik di Indonesia, manajemen PT Lascramall Commerce Network mengumumkan pembaruan kerangka kerja tata kelola perusahaan (GCG).',
        'Kebijakan ini memfokuskan pada tiga pilar utama: perlindungan privasi dan data mitra dagang, transparansi operasional transaksi, serta kepatuhan penuh terhadap undang-undang perlindungan konsumen dan sistem elektronik nasional.',
        'Perseroan meyakini bahwa integritas bukan sekadar slogan, melainkan prasyarat mutlak untuk membangun institusi digital yang disegani dan berdaya saing global.'
      ],
      en: [
        'To ensure enduring business resilience within Indonesia’s evolving electronic commerce regulatory framework, the management of PT Lascramall Commerce Network has published its comprehensive Good Corporate Governance (GCG) charter.',
        'The policy targets three core areas: merchant data privacy safeguards, transaction transparency, and adherence to statutory consumer protection standards.',
        'The company maintains that integrity is an indispensable prerequisite for building a respected, nationally competitive digital enterprise.'
      ]
    },
    author: 'Legal & Compliance Division'
  },
  {
    id: 'news-4',
    title: {
      id: 'Inkubasi Bisnis Digital: Mengakselerasi Solusi Multi-Tenant untuk Mitra Strategis',
      en: 'Digital Business Incubation: Accelerating Multi-Tenant Solutions for Enterprise Partners'
    },
    category: 'Partnership',
    date: '05 Juli 2026',
    readTime: '4 min read',
    featured: false,
    summary: {
      id: 'Pengembangan kapabilitas bisnis digital diarahkan untuk memfasilitasi transformasi digital mitra usaha mikro, menengah, hingga korporasi besar.',
      en: 'Digital business capabilities are orchestrated to facilitate digital transformation for enterprises, suppliers, and commercial partners.'
    },
    content: {
      id: [
        'Divisi Technology & Digital Business Development terus menguji model bisnis baru yang dirancang untuk mengatasi hambatan akses pasar yang kerap dihadapi mitra rantai pasok tradisional.',
        'Melalui penyediaan kerangka kerja integrasi modular, mitra usaha dapat memanfaatkan platform digital LASCRAMALL untuk memperluas jangkauan distribusi tanpa harus membangun infrastruktur perangkat lunak dari nol.',
        'Fasilitas ini membuktikan komitmen perseroan dalam merajut jaringan ekonomi digital yang inklusif dan produktif.'
      ],
      en: [
        'The Technology & Digital Business Development division continues to pilot innovative business configurations designed to resolve distribution hurdles encountered by traditional merchants.',
        'Through modular onboarding frameworks, commercial partners can leverage LASCRAMALL’s technological backbone to extend market reach without incurring prohibitively high custom software costs.',
        'This initiative highlights the organization’s dedication to weaving an inclusive, highly productive digital economy.'
      ]
    },
    author: 'Business Development Team'
  }
];

export const DESWARTHA_DATA: DeswarthaCorporateData = {
  name: 'Deswartha Group',
  role: {
    id: 'Perusahaan Induk & Organisasi Pengawasan Terpusat',
    en: 'Parent Corporate Holding & Central Supervisory Organization'
  },
  overview: {
    id: 'Deswartha Group adalah organisasi korporat induk yang bertanggung jawab atas penentuan arah strategis, tata kelola perusahaan (corporate governance), pengawasan operasional, pengendalian keuangan, manajemen organisasi, dan pengembangan teknologi internal di seluruh ekosistem bisnisnya. Deswartha Group berperan sebagai organisasi manajemen dan supervisi sentral yang memastikan setiap anak perusahaan beroperasi sesuai dengan standar, sistem, dan sasaran korporasi yang telah ditetapkan.',
    en: 'Deswartha Group is the parent corporate organization responsible for strategic direction, corporate governance, operational supervision, financial control, organizational management, and internal technology development across its business ecosystem. Deswartha Group serves as the central management and supervisory organization that ensures every subsidiary operates according to established standards, systems, and corporate objectives.'
  },
  vision: {
    id: 'Membangun ekosistem bisnis yang terintegrasi, terstruktur, tangguh, dan berorientasi internasional melalui tata kelola yang kuat, inovasi, teknologi, serta pengembangan bisnis yang berkelanjutan.',
    en: 'To build an integrated, structured, resilient, and internationally oriented business ecosystem through strong governance, innovation, technology, and sustainable business development.'
  },
  missions: {
    id: [
      'Membangun tata kelola perusahaan profesional di seluruh entitas bisnis.',
      'Mengembangkan sistem operasional terstandarisasi dan SOP yang terstruktur.',
      'Menjaga disiplin finansial, transparansi, dan akuntabilitas keuangan.',
      'Mengawasi kinerja organisasi dan manajemen sumber daya manusia.',
      'Mengembangkan serta mengelola perangkat lunak internal dan infrastruktur teknologi yang esensial.',
      'Membangun bisnis berkelanjutan dengan kinerja yang terukur.',
      'Memperluas ekosistem korporasi ke pasar internasional.'
    ],
    en: [
      'Establish professional corporate governance across all business entities.',
      'Develop standardized operational systems and SOPs.',
      'Maintain financial discipline, transparency, and accountability.',
      'Supervise organizational performance and human resource management.',
      'Develop and manage essential internal software and technology infrastructure.',
      'Build sustainable businesses with measurable performance.',
      'Expand the corporate ecosystem into international markets.'
    ]
  },
  philosophy: [
    {
      letter: 'D',
      word: 'Direction',
      title: {
        id: 'Arah & Visi Strategis',
        en: 'Strategic Direction'
      },
      description: {
        id: 'Visi yang jelas, arah strategis, dan sasaran jangka panjang.',
        en: 'Clear vision, strategic direction, and long-term objectives.'
      }
    },
    {
      letter: 'E',
      word: 'Excellence',
      title: {
        id: 'Standar Keunggulan',
        en: 'High Standards'
      },
      description: {
        id: 'Komitmen pada standar tinggi, profesionalisme, dan perbaikan berkelanjutan.',
        en: 'Commitment to high standards, professionalism, and continuous improvement.'
      }
    },
    {
      letter: 'S',
      word: 'System',
      title: {
        id: 'Sistem Terstandarisasi',
        en: 'Structured Systems'
      },
      description: {
        id: 'Proses terstruktur, SOP terstandarisasi, dan eksekusi yang disiplin.',
        en: 'Structured processes, standardized SOPs, and disciplined execution.'
      }
    },
    {
      letter: 'W',
      word: 'Wisdom',
      title: {
        id: 'Kebijaksanaan & Analitika',
        en: 'Analytical Wisdom'
      },
      description: {
        id: 'Pengetahuan, pemikiran analitis, dan pengambilan keputusan berbasis data.',
        en: 'Knowledge, analytical thinking, and data-driven decision-making.'
      }
    },
    {
      letter: 'A',
      word: 'Accountability',
      title: {
        id: 'Akuntabilitas & Transparansi',
        en: 'Measurable Accountability'
      },
      description: {
        id: 'Tanggung jawab, transparansi, dan kinerja yang dapat diukur.',
        en: 'Responsibility, transparency, and measurable performance.'
      }
    },
    {
      letter: 'R',
      word: 'Resilience',
      title: {
        id: 'Ketahanan & Adaptabilitas',
        en: 'Organizational Resilience'
      },
      description: {
        id: 'Ketangguhan organisasi, kemampuan beradaptasi, dan daya tahan mengatasi tantangan.',
        en: 'Organizational strength, adaptability, and the ability to overcome challenges.'
      }
    },
    {
      letter: 'T',
      word: 'Trust',
      title: {
        id: 'Integritas & Kredibilitas',
        en: 'Professional Trust'
      },
      description: {
        id: 'Integritas, kredibilitas, dan relasi profesional yang saling percaya.',
        en: 'Integrity, credibility, and professional relationships.'
      }
    },
    {
      letter: 'H',
      word: 'Hierarchy',
      title: {
        id: 'Struktur Organisasi & Koordinasi',
        en: 'Organizational Hierarchy'
      },
      description: {
        id: 'Struktur organisasi yang jelas, wewenang, tanggung jawab, dan koordinasi.',
        en: 'Clear organizational structure, authority, responsibility, and coordination.'
      }
    },
    {
      letter: 'A',
      word: 'Authority',
      title: {
        id: 'Otoritas Kepemimpinan & Standar',
        en: 'Governance Authority'
      },
      description: {
        id: 'Kepemimpinan, tata kelola, dan kekuasaan untuk menetapkan serta menegakkan standar korporasi.',
        en: 'Leadership, governance, and the power to establish and enforce corporate standards.'
      }
    }
  ],
  governanceFunctions: [
    {
      id: 'corporate-governance',
      title: {
        id: 'Corporate Governance & Compliance',
        en: 'Corporate Governance & Compliance'
      },
      description: {
        id: 'Penyusunan kerangka kepatuhan hukum, audit regulasi, serta penetapan etika korporat terpadu di setiap lini unit usaha.',
        en: 'Establishing legal compliance frameworks, regulatory audits, and unified corporate ethics across all business lines.'
      },
      iconName: 'ShieldCheck'
    },
    {
      id: 'sop-operational',
      title: {
        id: 'SOP and Operational Supervision',
        en: 'SOP and Operational Supervision'
      },
      description: {
        id: 'Standardisasi proses kerja, perumusan standar operasional prosedur (SOP) baku, dan pengawasan mutu eksekusi operasional berkala.',
        en: 'Standardizing workflows, formulating verified operating procedures (SOPs), and conducting regular operational quality supervision.'
      },
      iconName: 'ClipboardCheck'
    },
    {
      id: 'financial-monitoring',
      title: {
        id: 'Financial Monitoring & Control',
        en: 'Financial Monitoring & Control'
      },
      description: {
        id: 'Disiplin anggaran terpusat, pengawasan likuiditas, audit keuangan berkala, transparansi akuntansi, dan alokasi modal terarah.',
        en: 'Centralized budgeting discipline, liquidity monitoring, periodic financial audits, accounting transparency, and strategic capital allocation.'
      },
      iconName: 'BarChart3'
    },
    {
      id: 'hr-organizational',
      title: {
        id: 'Human Resource & Organizational Supervision',
        en: 'Human Resource & Organizational Supervision'
      },
      description: {
        id: 'Pengembangan kepemimpinan, manajemen talenta strategis, standarisasi remunerasi, dan pembinaan budaya kerja berorientasi kinerja.',
        en: 'Leadership talent cultivation, strategic workforce management, standardized remuneration, and high-performance culture development.'
      },
      iconName: 'Users'
    },
    {
      id: 'internal-tech',
      title: {
        id: 'Internal Software & Technology Development',
        en: 'Internal Software & Technology Development'
      },
      description: {
        id: 'Rekayasa perangkat lunak proprietary, sistem Enterprise Resource Planning (ERP) internal, infrastruktur data aman, dan otomatisasi digital.',
        en: 'Engineering proprietary internal software, enterprise resource management systems, secure data infrastructure, and digital automation.'
      },
      iconName: 'Code2'
    },
    {
      id: 'strategic-planning',
      title: {
        id: 'Strategic Planning & Business Development',
        en: 'Strategic Planning & Business Development'
      },
      description: {
        id: 'Perumusan peta jalan jangka panjang, identifikasi potensi pasar baru, ekspansi skala internasional, dan sinergi antar-entitas bisnis.',
        en: 'Formulating long-term roadmaps, identifying new market frontiers, planning international expansion, and fostering inter-entity synergy.'
      },
      iconName: 'Compass'
    },
    {
      id: 'risk-management',
      title: {
        id: 'Performance Evaluation & Risk Management',
        en: 'Performance Evaluation & Risk Management'
      },
      description: {
        id: 'Pemantauan indikator kinerja utama (KPI) berbasis data nyata, mitigasi risiko komprehensif, dan protokol kesiapsiagaan kontinuitas bisnis.',
        en: 'Data-driven KPI monitoring, enterprise risk mitigation protocols, and business continuity resilience frameworks.'
      },
      iconName: 'Activity'
    }
  ],
  culture: {
    principles: [
      'SYSTEM DI ATAS SEGALANYA',
      'HASIL: NYATA, TERUKUR, BERULANG'
    ],
    slogans: [
      'SYSTEM JALAN',
      'DATA BICARA',
      'RISIKO TERKENDALI',
      'PROFIT NYATA',
      'DESWARTHA'
    ]
  },
  subsidiary: {
    name: 'PT Lascramall Commerce Network',
    brand: 'LASCRAMALL',
    description: {
      id: 'PT Lascramall Commerce Network beroperasi sebagai anak perusahaan (subsidiary) resmi di bawah naungan Deswartha Group, dengan fokus bidang usaha pada ekosistem ecommerce, infrastruktur perdagangan digital modern, dan pengembangan bisnis online terintegrasi.',
      en: 'PT Lascramall Commerce Network operates as an official subsidiary under Deswartha Group, focusing on the ecommerce ecosystem, modern digital commerce infrastructure, and integrated online business development.'
    }
  }
};

export const LEADERSHIP_DATA: FounderData = {
  namePlaceholder: '[Nama Lengkap Pendiri / Founder Name]',
  title: {
    id: 'Pendiri & Pimpinan Eksekutif Perseroan',
    en: 'Founder & Chief Executive Officer'
  },
  organization: 'PT Lascramall Commerce Network',
  parentAffiliation: 'Deswartha Group',
  portraitPlaceholderNote: {
    id: 'Potret Resmi Eksekutif (Dapat diperbarui dengan foto formal pimpinan korporat)',
    en: 'Official Executive Portrait (Editable with formal executive leadership photography)'
  },
  backgroundPlaceholder: {
    id: '[Area Latar Belakang Profesional: Memimpin arah strategis, perancangan sistem niaga digital, dan tata kelola perusahaan di bawah pengawasan Deswartha Group. Informasi kualifikasi profesional dan riwayat kepemimpinan resmi dapat disesuaikan pada area ini.]',
    en: '[Professional Background Area: Leading strategic direction, digital commerce systems architecture, and corporate governance under Deswartha Group supervisory framework. Official credentials and leadership background can be edited here.]'
  },
  message: {
    id: {
      headline: 'Membangun Infrastruktur Niaga Digital yang Terstruktur, Aman, dan Berkelanjutan',
      paragraphs: [
        'PT Lascramall Commerce Network didirikan atas keyakinan mendasar bahwa akselerasi perdagangan modern di Indonesia membutuhkan infrastruktur niaga digital yang kokoh, transparan, dan mematuhi seluruh koridor hukum perundang-undangan.',
        'Sebagai entitas anak perusahaan di bawah naungan Deswartha Group, kami menempatkan sistem, integritas, dan disiplin eksekusi di atas segalanya. Kami tidak semata-mata mengembangkan platform transaksi, melainkan membangun jaringan komersial berdaya tahan tinggi yang menghubungkan prinsipal bisnis, mitra dagang, dan konsumen secara efisien.',
        'Visi jangka panjang kami adalah memastikan setiap inovasi teknologi niaga yang dihadirkan mampu memberikan nilai nyata yang terukur, berulang, dan berkelanjutan bagi seluruh pemangku kepentingan dalam ekosistem perdagangan digital nasional.'
      ]
    },
    en: {
      headline: 'Building Structured, Secure, and Sustainable Digital Commerce Infrastructure',
      paragraphs: [
        'PT Lascramall Commerce Network was founded on the conviction that the acceleration of modern commerce in Indonesia demands robust, transparent, and fully compliant digital trade infrastructure.',
        'Operating as an operating subsidiary under Deswartha Group, we place structured systems, integrity, and disciplined execution above all else. We do not merely deploy transactional software; we orchestrate resilient commercial networks that seamlessly connect enterprise principals, merchants, and modern consumers.',
        'Our long-term commitment is ensuring that every commercial technology innovation delivers measurable, repeatable, and sustainable economic value across the national digital ecosystem.'
      ]
    }
  },
  principles: [
    {
      id: 'system-driven',
      title: 'System-Driven Management',
      subtitle: {
        id: 'Pengelolaan Berbasis Sistem',
        en: 'System-Driven Management'
      },
      description: {
        id: 'Standardisasi proses kerja, kepatuhan pada SOP baku, dan disiplin eksekusi di setiap lini operasional perseroan mendahului segala tindakan.',
        en: 'Standardized workflows, strict SOP compliance, and disciplined operational execution take precedence across all organizational units.'
      },
      iconName: 'Workflow'
    },
    {
      id: 'integrity-accountability',
      title: 'Integrity & Accountability',
      subtitle: {
        id: 'Integritas & Akuntabilitas',
        en: 'Integrity & Accountability'
      },
      description: {
        id: 'Transparansi tata kelola korporasi, kepatuhan hukum Republik Indonesia, dan tanggung jawab penuh kepada pemangku kepentingan.',
        en: 'Corporate governance transparency, full statutory compliance in Indonesia, and comprehensive stakeholder accountability.'
      },
      iconName: 'ShieldCheck'
    },
    {
      id: 'data-driven',
      title: 'Data-Driven Decisions',
      subtitle: {
        id: 'Keputusan Berbasis Data',
        en: 'Data-Driven Decisions'
      },
      description: {
        id: 'Pengambilan keputusan strategis didasari analitika numerik, fakta pasar empiris, dan mitigasi risiko yang teruji secara cermat.',
        en: 'Strategic decisions founded upon empirical data analytics, market realities, and rigorously validated risk mitigation models.'
      },
      iconName: 'BarChart3'
    },
    {
      id: 'operational-excellence',
      title: 'Operational Excellence',
      subtitle: {
        id: 'Keunggulan Operasional',
        en: 'Operational Excellence'
      },
      description: {
        id: 'Efisiensi rantai pasok digital, ketersediaan sistem berlatensi rendah, dan konsistensi kualitas layanan tanpa kompromi.',
        en: 'Digital supply chain efficiency, low-latency system uptime, and unwavering service delivery consistency.'
      },
      iconName: 'Award'
    },
    {
      id: 'innovation-tech',
      title: 'Innovation & Technology',
      subtitle: {
        id: 'Inovasi & Teknologi',
        en: 'Innovation & Technology'
      },
      description: {
        id: 'Pengembangan perangkat lunak komersial proprietary dan adopsi teknologi adaptif untuk mempertahankan daya saing jangka panjang.',
        en: 'Engineering proprietary commercial software and deploying adaptive technologies to sustain long-term competitive advantage.'
      },
      iconName: 'Code2'
    },
    {
      id: 'sustainable-growth',
      title: 'Sustainable Growth',
      subtitle: {
        id: 'Pertumbuhan Berkelanjutan',
        en: 'Sustainable Growth'
      },
      description: {
        id: 'Mendorong ekspansi ekosistem bisnis yang berlandaskan kinerja finansial sehat, manajemen risiko terukur, dan kemitraan berulang.',
        en: 'Advancing enterprise expansion anchored in sound financial health, measured risk governance, and enduring partnerships.'
      },
      iconName: 'TrendingUp'
    }
  ],
  responsibilities: [
    {
      id: 'strategy-dev',
      title: 'Corporate Strategy & Business Development',
      subtitle: {
        id: 'Arah Strategi Korporat & Pengembangan Bisnis',
        en: 'Corporate Strategy & Business Development'
      },
      description: {
        id: 'Merumuskan peta jalan jangka panjang, ekspansi lima pilar usaha niaga digital, dan pembentukan aliansi bisnis strategis.',
        en: 'Formulating long-term roadmaps, expanding the five digital commerce pillars, and forging strategic enterprise alliances.'
      }
    },
    {
      id: 'org-leadership',
      title: 'Organizational Leadership',
      subtitle: {
        id: 'Kepemimpinan Organisasi & Budaya Kerja',
        en: 'Organizational Leadership'
      },
      description: {
        id: 'Membina talenta kepemimpinan, menegakkan etika kerja profesional, dan memperkuat koordinasi lintas divisi internal perseroan.',
        en: 'Developing leadership talent, instilling professional work ethics, and strengthening cross-divisional coordination.'
      }
    },
    {
      id: 'governance',
      title: 'Corporate Governance',
      subtitle: {
        id: 'Tata Kelola & Kepatuhan Regulasi',
        en: 'Corporate Governance'
      },
      description: {
        id: 'Menegakkan kepatuhan hukum menyeluruh dan memastikan seluruh operasional selaras dengan standar supervisi Deswartha Group.',
        en: 'Enforcing statutory compliance and ensuring all operations adhere strictly to Deswartha Group supervisory benchmarks.'
      }
    },
    {
      id: 'financial-oversight',
      title: 'Financial & Business Performance Oversight',
      subtitle: {
        id: 'Pengawasan Kinerja Keuangan & Bisnis',
        en: 'Financial & Business Performance Oversight'
      },
      description: {
        id: 'Mengawal disiplin anggaran terpusat, likuiditas yang sehat, dan pencapaian target profitabilitas yang nyata dan terukur.',
        en: 'Overseeing budgeting discipline, healthy liquidity, and achieving verifiable, measurable commercial profitability.'
      }
    },
    {
      id: 'tech-transformation',
      title: 'Technology & Digital Transformation',
      subtitle: {
        id: 'Teknologi & Transformasi Digital',
        en: 'Technology & Digital Transformation'
      },
      description: {
        id: 'Mengarahkan pengembangan arsitektur teknologi proprietary, keamanan transaksi digital, dan integrasi API antar-mitra.',
        en: 'Directing proprietary technology architectures, transactional cybersecurity, and enterprise API integrations.'
      }
    },
    {
      id: 'sustainability',
      title: 'Long-Term Business Sustainability',
      subtitle: {
        id: 'Keberlanjutan Bisnis Jangka Panjang',
        en: 'Long-Term Business Sustainability'
      },
      description: {
        id: 'Membangun ketahanan organisasi dalam menghadapi dinamika pasar dan memelihara kepercayaan jangka panjang mitra korporat.',
        en: 'Fortifying organizational resilience against market shifts and safeguarding long-term enterprise stakeholder trust.'
      }
    }
  ]
};

export const COMPANY_DETAILS = {
  legalName: 'PT LASCRAMALL COMMERCE NETWORK',
  brandName: 'LASCRAMALL',
  tagline: {
    id: 'Connecting Business. Empowering Digital Commerce.',
    en: 'Connecting Business. Empowering Digital Commerce.'
  },
  headquarters: {
    city: 'Jakarta Timur',
    province: 'DKI Jakarta',
    country: 'Indonesia',
    address: 'Jl. Tambun Rengas. Cakung Timur, Jakarta Timur 13910, Indonesia',
    phone: '+62 815 1852 500',
    emailCorporate: 'lascramall@gmail.com',
    emailPartnership: 'lascramall@gmail.com',
    emailInquiries: 'lascramall@gmail.com',
    operatingHours: 'Senin – Minggu: 08.00 – 21.00 WIB (Kecuali Hari Libur Nasional)'
  },
  registeredEntity: {
    nib: '1904260081294',
    sector: 'Ekosistem Perdagangan Digital & Teknologi Informasi',
    incorporationYear: '2024',
    jurisdiction: 'Republik Indonesia'
  }
};

export function validateContactForm(data: ContactFormData): FormValidationErrors {
  const errors: FormValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Nama lengkap wajib diisi (minimal 2 karakter)';
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Nama perusahaan atau institusi wajib diisi';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Alamat email korporat tidak valid';
  }

  if (!data.phone || data.phone.trim().length < 8) {
    errors.phone = 'Nomor telepon kontak aktif wajib diisi (minimal 8 digit)';
  }

  if (!data.message || data.message.trim().length < 15) {
    errors.message = 'Pesan atau rincian permohonan wajib diisi (minimal 15 karakter)';
  }

  return errors;
}

export function filterNewsArticles(
  articles: NewsArticle[],
  selectedCategory: string,
  searchQuery: string,
  lang: 'id' | 'en' = 'id'
): NewsArticle[] {
  return articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category.toLowerCase() === selectedCategory.toLowerCase();

    const titleText = article.title[lang].toLowerCase();
    const summaryText = article.summary[lang].toLowerCase();
    const query = searchQuery.trim().toLowerCase();

    const matchesQuery = query === '' || titleText.includes(query) || summaryText.includes(query);

    return matchesCategory && matchesQuery;
  });
}
