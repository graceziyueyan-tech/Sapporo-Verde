import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SapparotVerde() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    en: {
      nav: {
        story: 'Our Story',
        products: 'Products',
        impact: 'Impact'
      },
      hero: {
        title: 'Transform Waste Into Worth',
        subtitle: "We turn Thailand's agricultural waste into premium pineapple leather—reducing pollution, supporting farmers, and creating beautiful, durable products.",
        tagline: 'Every purchase removes agricultural waste burning. Every product supports Thai farming families.',
        cta: 'Read Our Story'
      },
      problem: {
        title: "Thailand's Hidden Opportunity",
        problemTitle: 'The Problem',
        problemP1: 'Thailand produces 1.5 million tonnes of pineapples annually. After harvest, 60–70% of the plant becomes waste: pineapple leaves that farmers can\'t dispose of easily.',
        problemP2: 'Instead of composting or managing this waste, farmers burn it in open fields. This contributes to Thailand\'s PM2.5 air pollution crisis—linked to 32,200 premature deaths in 2019 alone.',
        problemP3: 'Meanwhile, traditional leather production relies on chromium tanning, polluting soil and water. Synthetic vegan leather is often petroleum-based plastic.',
        solutionTitle: 'Our Solution',
        solutionP1: 'We transform pineapple leaf fiber into premium, durable leather alternatives—with zero chemical tanning.',
        solutionP2: 'Farmers now have a revenue stream from material they\'d otherwise burn. We support sustainable livelihoods while eliminating a major source of air pollution.',
        solutionP3: 'Every product you purchase removes waste from open-field burning and creates income for Thai farming families.',
        stat1: 'Of pineapple plant is waste leaves',
        stat2: 'Farming families we aim to support',
        stat3: 'Chemical tanning required'
      },
      mission: {
        title: 'Our Mission & Vision',
        missionTitle: 'Mission',
        missionText: 'To transform Thailand\'s agricultural heritage through innovative and sustainable design of pineapple vegan leather from agricultural waste that reduces pollution, supports local farmers, and creates ethical alternatives to animal leather.',
        visionTitle: 'Vision',
        visionText: 'To build a circular future where Thailand\'s agricultural resources are valued, waste becomes an opportunity, and environmental externalities of production are significantly reduced. We envision a circular economy in which environmental protection, cultural preservation, and economic opportunity build on each other rather than sacrificing one another.',
        valuesTitle: 'Core Values'
      },
      values: [
        { title: 'Sustainability', description: 'Zero-waste production from agricultural byproducts' },
        { title: 'Circular Economy', description: 'Waste becomes resource; farmers become partners' },
        { title: 'Empowerment', description: 'Supporting 15,000 Thai farming families with new income streams' },
        { title: 'Thai Heritage', description: 'Connecting cultural craftsmanship with environmental innovation' }
      ],
      craftsmanship: {
        title: 'Handcrafted Thai Heritage',
        designTitle: 'Traditional Patterns, Modern Purpose',
        designP1: 'Every piece features hand-tooled Thai geometric and mandala patterns—connecting pineapple leather innovation to Thailand\'s cultural heritage.',
        designP2: 'Our artisans combine traditional embossing techniques with sustainable materials, creating wallets and cardholders built to age beautifully.',
        designP3: 'Hand-stitched details and contrast threading showcase quality you can feel—proof that sustainable doesn\'t mean compromising on craftsmanship.',
        impactTitle: 'Why This Matters',
        impactIntro: 'When you buy Sapparot Verde, you\'re supporting:',
        impactList: [
          'Thai artisans and their families',
          'Pineapple farmers moving away from crop burning',
          'Reduction of PM2.5 air pollution',
          'Development of circular economy materials',
          'Preservation of traditional Thai craftsmanship'
        ]
      },
      products: {
        title: 'Our Collection',
        subtitle: 'Each piece is handcrafted from sustainable pineapple leather'
      },
      cta: {
        title: 'Join the Circular Economy',
        text: 'Every product removes agricultural waste from open burning and creates income for Thai farming families. You\'re not just buying a wallet—you\'re supporting environmental and economic transformation.',
        button: 'Coming Soon'
      },
      footer: {
        brand: 'Sapparot Verde',
        tagline: 'Transforming Thailand\'s agricultural waste into sustainable luxury. Supporting farmers. Reducing pollution.',
        copyright: '© 2026 Sapparot Verde. Crafted in Thailand.'
      }
    },
    th: {
      nav: {
        story: 'เรื่องของเรา',
        products: 'สินค้า',
        impact: 'ผลกระทบ'
      },
      hero: {
        title: 'เปลี่ยนขยะเป็นมูลค่า',
        subtitle: 'เราเปลี่ยนขยะการเกษตรของไทยให้เป็นหนังสัตว์สัปปะรดเรียงแบบพรีเมี่ยม เพื่อลดมลพิษ สนับสนุนเกษตรกร และสร้างผลิตภัณฑ์ที่สวยงามและทนทาน',
        tagline: 'การซื้อแต่ละครั้งช่วยลดการเผาการเกษตร ผลิตภัณฑ์แต่ละชิ้นสนับสนุนครอบครัวเกษตรกรไทย',
        cta: 'อ่านเรื่องของเรา'
      },
      problem: {
        title: 'โอกาสที่ซ่อนอยู่ของไทย',
        problemTitle: 'ปัญหา',
        problemP1: 'ไทยผลิตสัปปะรดประมาณ 1.5 ล้านตันต่อปี หลังการเก็บเกี่ยว 60-70% ของพืชจะกลายเป็นขยะ: ใบสัปปะรดที่เกษตรกรไม่สามารถกำจัดได้',
        problemP2: 'แทนที่จะนำเข้า หมักหรือจัดการขยะนี้ เกษตรกรเผามันในไร่นา สิ่งนี้ส่งผลต่อวิกฤตมลพิษ PM2.5 ของไทย - เกี่ยวข้องกับการเสียชีวิตก่อนวัยอันควร 32,200 คนในปี 2019 เพียงอย่างเดียว',
        problemP3: 'ในขณะเดียวกัน การผลิตหนังแบบดั้งเดิมพึ่งพาการแปรรูปโครเมียม ซึ่งทำให้มลพิษดินและน้ำ หนังเทียมแบบแนววีแกนมักเป็นพลาสติกจากปิโตรเลียม',
        solutionTitle: 'คำตอบของเรา',
        solutionP1: 'เราเปลี่ยนเส้นใยใบสัปปะรดให้เป็นหนังสัตว์ทดแทนเรียงแบบพรีเมี่ยมและทนทาน - โดยไม่ต้องแปรรูปทางเคมี',
        solutionP2: 'เกษตรกรมีกระแสรายได้จากวัสดุที่พวกเขาจะเผาไป เราสนับสนุนวิถีชีวิตที่ยั่งยืนขณะที่กำจัดแหล่งมลพิษหลัก',
        solutionP3: 'ผลิตภัณฑ์แต่ละชิ้นที่คุณซื้อจะลดขยะจากการเผาไร่และสร้างรายได้สำหรับครอบครัวเกษตรกรไทย',
        stat1: 'ของพืชสัปปะรดเป็นขยะใบไม้',
        stat2: 'ครอบครัวเกษตรกรที่เรามุ่งหมายจะสนับสนุน',
        stat3: 'การแปรรูปทางเคมีไม่จำเป็น'
      },
      mission: {
        title: 'พันธกิจและวิสัยทัศน์ของเรา',
        missionTitle: 'พันธกิจ',
        missionText: 'เพื่อเปลี่ยนแปลงมรดกทางวัฒนธรรมของไทยผ่านการออกแบบที่นวัตกรรมและยั่งยืนของหนังเทียมจากสัปปะรดจากขยะการเกษตรที่ลดมลพิษ สนับสนุนเกษตรกรท้องถิ่น และสร้างทางเลือกทางจริยธรรมแทนหนังสัตว์',
        visionTitle: 'วิสัยทัศน์',
        visionText: 'เพื่อสร้างอนาคตแบบวนรอบที่ทรัพยากรการเกษตรของไทยมีค่า ขยะกลายเป็นโอกาส และผลกระทบด้านลบของการผลิตลดลงอย่างมีนัยสำคัญ เราจินตนาการถึงเศรษฐกิจแบบวนรอบซึ่งการคุ้มครองสิ่งแวดล้อม การอนุรักษ์วัฒนธรรม และโอกาสทางเศรษฐกิจสร้างขึ้นซึ่งกันและกันแทนที่จะเสียสละซึ่งกันและกัน',
        valuesTitle: 'ค่านิยมหลัก'
      },
      values: [
        { title: 'ความยั่งยืน', description: 'การผลิตไร้ขยะจากผลพลอยได้ของการเกษตร' },
        { title: 'เศรษฐกิจวนรอบ', description: 'ขยะกลายเป็นทรัพยากร เกษตรกรกลายเป็นหุ้นส่วน' },
        { title: 'การเสริมอำนาจ', description: 'การสนับสนุน 15,000 ครอบครัวเกษตรกรไทยด้วยสตรีมรายได้ใหม่' },
        { title: 'มรดกไทย', description: 'การเชื่อมต่อกับหนังสัตว์นวัตกรรมของไทยของศิลปะงานฝีมือดั้งเดิม' }
      ],
      craftsmanship: {
        title: 'หนังสัตว์ที่ทำด้วยมือไทยแบบเรือนด้นแบบดั้งเดิม',
        designTitle: 'ลวดลายดั้งเดิม วัตถุประสงค์สมัยใหม่',
        designP1: 'ชิ้นแต่ละชิ้นมีลวดลายทางเรขาคณิตไทยและ mandala ที่ทำด้วยมือ - เชื่อมต่ออุตสาหกรรมนวัตกรรมหนังสัตว์สัปปะรดกับมรดกวัฒนธรรมของไทย',
        designP2: 'ช่างฝีมือของเราผสมผสานเทคนิคการเคาะลวดลายแบบดั้งเดิมกับวัสดุที่ยั่งยืน สร้างกระเป๋าเงินและกระเป๋าเก็บการ์ดที่ทำมาเพื่อให้มีอายุการใช้งานที่สวยงาม',
        designP3: 'รายละเอียดการเย็บด้วยมือและด้ายตัดกันแสดงให้เห็นคุณภาพที่คุณสามารถรู้สึกได้ - หลักฐานว่าความยั่งยืนไม่ได้หมายถึงการประนีประนอมในการก่อสร้าง',
        impactTitle: 'เหตุใดจึงมีความสำคัญ',
        impactIntro: 'เมื่อคุณซื้อ Sapparot Verde คุณกำลังสนับสนุน:',
        impactList: [
          'ช่างฝีมือและครอบครัวไทย',
          'เกษตรกรสัปปะรดที่ห่างไกลจากการเผาพืช',
          'การลดมลพิษ PM2.5',
          'การพัฒนาวัสดุเศรษฐกิจแบบวนรอบ',
          'การอนุรักษ์งานฝีมือดั้งเดิมไทย'
        ]
      },
      products: {
        title: 'คอลเลคชั่นของเรา',
        subtitle: 'ชิ้นแต่ละชิ้นทำด้วยมือจากหนังสัตว์สัปปะรดที่ยั่งยืน'
      },
      cta: {
        title: 'เข้าร่วมเศรษฐกิจแบบวนรอบ',
        text: 'ผลิตภัณฑ์แต่ละชิ้นลบขยะการเกษตรจากการเผาไร่และสร้างรายได้สำหรับครอบครัวเกษตรกรไทย คุณไม่ได้แค่ซื้อกระเป๋าเงิน - คุณกำลังสนับสนุนการเปลี่ยนแปลงสิ่งแวดล้อมและเศรษฐกิจ',
        button: 'เร็ว ๆ นี้'
      },
      footer: {
        brand: 'Sapparot Verde',
        tagline: 'เปลี่ยนขยะการเกษตรของไทยเป็นแหล่งที่มีความหรูหรายั่งยืน สนับสนุนเกษตรกร ลดมลพิษ',
        copyright: '© 2026 Sapparot Verde ทำด้วยมือในไทย'
      }
    }
  };

  const products = [
  {
    id: 1,
    name: 'Card Holder',
    variant: 'Geometric Diamond',
    category: 'Accessories',
    description: 'Minimalist card holder with Thai-inspired diamond pattern. Holds up to 4 cards.',
    image: 'url("/images/cardholder-1.png")',
    imageAlt: 'Thai-inspired pineapple leather card holder with geometric pattern'
  },
  {
    id: 2,
    name: 'Card Holder',
    variant: 'Mandala Emboss',
    category: 'Accessories',
    description: 'Card holder featuring traditional Thai mandala motif. Handcrafted detailing.',
    image: 'url("/images/cardholder-2.png")',
    imageAlt: 'Pineapple leather card holder with embossed mandala design'
  },
  {
    id: 3,
    name: 'Bifold Wallet',
    variant: 'Classic',
    category: 'Wallets',
    description: 'Hand-stitched bifold wallet with embossed mandala pattern. Multiple card slots.',
    image: 'url("/images/wallet-1.png")',
    imageAlt: 'Bifold pineapple leather wallet showing interior card slots'
  },
  {
    id: 4,
    name: 'Bifold Wallet',
    variant: 'Heritage',
    category: 'Wallets',
    description: 'Premium bifold with hand-tooled Thai patterns. Coin pocket included.',
    image: 'url("/images/wallet-2.png")',
    imageAlt: 'Heritage-inspired bifold wallet in pineapple leather'
  }
];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{ backgroundColor: scrolled ? '#FAF9F7' : 'transparent' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
            Sapparot Verde
          </div>
          <div className="flex gap-8 items-center text-sm">
            <a href="#story" className="hover:opacity-60 transition" style={{ color: '#5A6E4A' }}>
              {t[language].nav.story}
            </a>
            <a href="#products" className="hover:opacity-60 transition" style={{ color: '#5A6E4A' }}>
              {t[language].nav.products}
            </a>
            <a href="#impact" className="hover:opacity-60 transition" style={{ color: '#5A6E4A' }}>
              {t[language].nav.impact}
            </a>
            
            {/* Language Toggle */}
            <div className="flex gap-2 border-l pl-8" style={{ borderColor: '#DDD' }}>
              <button
                onClick={() => setLanguage('en')}
                className="px-3 py-1 rounded transition"
                style={{
                  backgroundColor: language === 'en' ? '#8B9D6D' : 'transparent',
                  color: language === 'en' ? 'white' : '#5A6E4A',
                  fontWeight: language === 'en' ? '500' : '400',
                  fontSize: '12px'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('th')}
                className="px-3 py-1 rounded transition"
                style={{
                  backgroundColor: language === 'th' ? '#8B9D6D' : 'transparent',
                  color: language === 'th' ? 'white' : '#5A6E4A',
                  fontWeight: language === 'th' ? '500' : '400',
                  fontSize: '12px'
                }}
              >
                TH
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8D9C3' }}>
              <div style={{ fontSize: '80px' }}>🍍</div>
            </div>
          </div>
          
          <h1
            className="text-6xl md:text-7xl font-light mb-6 leading-tight"
            style={{
              color: '#2B2B2B',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em'
            }}
          >
            {t[language].hero.title}
          </h1>
          
          <p className="text-xl mb-4 leading-relaxed" style={{ color: '#666', maxWidth: '700px', margin: '0 auto 2rem' }}>
            {t[language].hero.subtitle}
          </p>
          
          <p className="text-sm mb-12" style={{ color: '#999' }}>
            {t[language].hero.tagline}
          </p>

          <a
            href="#story"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition hover:opacity-80 font-light"
            style={{ backgroundColor: '#8B9D6D', color: 'white' }}
          >
            {t[language].hero.cta}
            <ChevronDown size={18} />
          </a>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section id="story" className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-light mb-16 text-center"
            style={{
              color: '#2B2B2B',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em'
            }}
          >
            {t[language].problem.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#C44E3E', fontFamily: 'Georgia, serif' }}>
                {t[language].problem.problemTitle}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.problemP1}
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.problemP2}
              </p>
              <p className="leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.problemP3}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
                {t[language].problem.solutionTitle}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.solutionP1}
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.solutionP2}
              </p>
              <p className="leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].problem.solutionP3}
              </p>
            </div>
          </div>

          <div className="border-t border-b py-12" style={{ borderColor: '#E0D5C8' }}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-light mb-2" style={{ color: '#8B9D6D', fontFamily: 'Georgia, serif' }}>
                  60–70%
                </div>
                <p style={{ color: '#999', fontSize: '14px' }}>{t[language].problem.stat1}</p>
              </div>
              <div>
                <div className="text-4xl font-light mb-2" style={{ color: '#8B9D6D', fontFamily: 'Georgia, serif' }}>
                  15,000
                </div>
                <p style={{ color: '#999', fontSize: '14px' }}>{t[language].problem.stat2}</p>
              </div>
              <div>
                <div className="text-4xl font-light mb-2" style={{ color: '#8B9D6D', fontFamily: 'Georgia, serif' }}>
                  0
                </div>
                <p style={{ color: '#999', fontSize: '14px' }}>{t[language].problem.stat3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section id="impact" className="py-24 px-6" style={{ backgroundColor: '#F3EFE9' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-light mb-12 text-center"
            style={{
              color: '#2B2B2B',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em'
            }}
          >
            {t[language].mission.title}
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-light mb-4" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
              {t[language].mission.missionTitle}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
              {t[language].mission.missionText}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-light mb-4" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
              {t[language].mission.visionTitle}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
              {t[language].mission.visionText}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-8" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
              {t[language].mission.valuesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t[language].values.map((value, idx) => (
                <div key={idx} className="pb-8" style={{ borderBottom: '1px solid #E0D5C8' }}>
                  <h4 className="text-lg font-light mb-3" style={{ color: '#8B9D6D' }}>
                    {value.title}
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-light mb-12 text-center"
            style={{
              color: '#2B2B2B',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em'
            }}
          >
            {t[language].craftsmanship.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
                {t[language].craftsmanship.designTitle}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].craftsmanship.designP1}
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].craftsmanship.designP2}
              </p>
              <p className="leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].craftsmanship.designP3}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#5A6E4A', fontFamily: 'Georgia, serif' }}>
                {t[language].craftsmanship.impactTitle}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].craftsmanship.impactIntro}
              </p>
              <ul className="space-y-3" style={{ color: '#555', lineHeight: '1.8' }}>
                {t[language].craftsmanship.impactList.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-light mb-4 text-center"
            style={{
              color: '#2B2B2B',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em'
            }}
          >
            {t[language].products.title}
          </h2>
          <p className="text-center mb-16 text-lg" style={{ color: '#999' }}>
            {t[language].products.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div
                  className="aspect-square rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105 cursor-pointer overflow-hidden bg-gray-100"
                  style={{
                    backgroundImage: product.image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Image will load from public folder */}
                </div>
                <p className="text-xs tracking-wide mb-1 uppercase" style={{ color: '#999' }}>
                  {product.category}
                </p>
                <h3
                  className="text-lg font-light mb-1"
                  style={{
                    color: '#2B2B2B',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {product.name}
                </h3>
                <p className="text-xs mb-3" style={{ color: '#8B9D6D' }}>
                  {product.variant}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#5A6E4A' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-6" style={{ color: 'white', fontFamily: 'Georgia, serif' }}>
            {t[language].cta.title}
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#DDD' }}>
            {t[language].cta.text}
          </p>
          <button
            className="px-8 py-4 rounded-lg font-light transition hover:opacity-90"
            style={{ backgroundColor: '#D4A574', color: '#2B2B2B' }}
          >
            {t[language].cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center" style={{ backgroundColor: '#F3EFE9' }}>
        <div className="max-w-6xl mx-auto">
          <p className="mb-2 font-light" style={{ color: '#2B2B2B', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
            {t[language].footer.brand}
          </p>
          <p className="text-sm" style={{ color: '#999' }}>
            {t[language].footer.tagline}
          </p>
          <p className="text-xs mt-4" style={{ color: '#bbb' }}>
            {t[language].footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
