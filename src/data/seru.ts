import type { Localized } from './types'

// Source: Profil_Ruang_ICU_Rapi.docx and index landing page.html (wording kept from the HTML).
export const seru = {
  kicker: { id: 'Edukasi untuk pasien dan keluarga', en: 'Education for patients and families' },
  title: { id: 'SERU ICU', en: 'SERU ICU' },
  subtitle: { id: 'Smart Education Ruang ICU', en: 'Smart Education for the ICU' },
  lead: {
    id: 'Ruang untuk mengenal perawatan intensif melalui informasi yang jelas, terukur, dan berorientasi pada keselamatan pasien.',
    en: 'A place to understand intensive care through clear, measured information focused on patient safety.',
  },
  profil: {
    label: { id: 'Profil ICU', en: 'ICU Profile' },
    heading: { id: 'Apa itu Ruang ICU?', en: 'What is the ICU?' },
    keyTitle: { id: 'Poin penting', en: 'Key points' },
    keyPoints: [
      { strong: { id: '24 jam', en: '24 hours' }, rest: { id: 'pelayanan berkesinambungan.', en: 'of continuous care.' } },
      { strong: { id: 'Multidisiplin:', en: 'Multidisciplinary:' }, rest: { id: 'kolaborasi sesuai kebutuhan pasien.', en: 'collaboration based on patient needs.' } },
      { strong: { id: 'Keselamatan pasien', en: 'Patient safety' }, rest: { id: 'menjadi orientasi layanan.', en: 'guides every service.' } },
    ] satisfies { strong: Localized; rest: Localized }[],
    statement: {
      id: 'Perawatan intensif yang berlangsung secara komprehensif dan berkesinambungan.',
      en: 'Intensive care delivered comprehensively and continuously.',
    },
    paragraphs: [
      {
        id: 'Intensive Care Unit (ICU) atau Instalasi Perawatan Intensif merupakan unit pelayanan khusus di rumah sakit yang memberikan perawatan intensif bagi pasien dengan kondisi kritis, mengancam jiwa, atau mengalami gangguan fungsi satu maupun lebih organ tubuh. Pelayanan meliputi pemantauan ketat, terapi intensif, serta tindakan medis dan keperawatan secara berkesinambungan.',
        en: 'The Intensive Care Unit (ICU) is a specialised hospital unit that provides intensive care for patients in critical or life-threatening condition, or with failure of one or more organs. Care includes close monitoring, intensive therapy, and continuous medical and nursing treatment.',
      },
      {
        id: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus merupakan unit pelayanan unggulan yang berperan memberikan pelayanan kesehatan secara komprehensif, profesional, terintegrasi, dan berorientasi pada keselamatan pasien.',
        en: 'The ICU of RSUD dr. Loekmono Hadi Kudus is a leading service unit that provides comprehensive, professional, integrated care focused on patient safety.',
      },
      {
        id: 'Pelayanan ICU berjalan selama 24 jam melalui kolaborasi dokter spesialis, dokter intensivis, dokter jaga, perawat berkompetensi perawatan intensif, dan tenaga kesehatan lain sesuai kebutuhan pasien.',
        en: 'ICU care runs 24 hours a day through collaboration between specialists, intensivists, duty doctors, nurses trained in intensive care, and other health professionals as each patient requires.',
      },
    ] satisfies Localized[],
    toVisi: { id: 'Lanjut ke visi', en: 'Continue to vision' },
  },
  visi: {
    label: { id: 'Visi', en: 'Vision' },
    heading: { id: 'Visi Ruang ICU', en: 'ICU Vision' },
    text: {
      id: 'Terwujudnya pelayanan perawatan intensif yang profesional, bermutu, terintegrasi, dan berorientasi pada keselamatan pasien.',
      en: 'Professional, high-quality, integrated intensive care that is oriented to patient safety.',
    },
    hint: { id: 'Gulir pelan untuk membaca kalimat ini kata demi kata.', en: 'Scroll slowly to read this sentence word by word.' },
  },
  misi: {
    label: { id: 'Misi', en: 'Mission' },
    heading: { id: 'Misi yang diterjemahkan dalam layanan sehari-hari.', en: 'A mission carried out in daily care.' },
    items: [
      {
        id: 'Menyelenggarakan pelayanan perawatan intensif secara profesional sesuai standar pelayanan dan perkembangan ilmu pengetahuan serta teknologi kesehatan.',
        en: 'Provide professional intensive care in line with service standards and advances in health science and technology.',
      },
      {
        id: 'Meningkatkan mutu pelayanan dan keselamatan pasien melalui penerapan standar pelayanan klinis dan keperawatan.',
        en: 'Improve service quality and patient safety by applying clinical and nursing care standards.',
      },
      {
        id: 'Mengembangkan kompetensi sumber daya manusia melalui pendidikan dan pelatihan berkelanjutan.',
        en: 'Develop staff competence through continuing education and training.',
      },
      {
        id: 'Meningkatkan koordinasi dan kolaborasi antarprofesi dalam memberikan pelayanan yang terintegrasi.',
        en: 'Strengthen coordination and interprofessional collaboration to deliver integrated care.',
      },
      {
        id: 'Mengoptimalkan penggunaan sarana, prasarana, dan peralatan medis untuk mendukung pelayanan pasien kritis.',
        en: 'Make the best use of facilities, infrastructure, and medical equipment to support critical patient care.',
      },
      {
        id: 'Melaksanakan monitoring, evaluasi, dan peningkatan mutu pelayanan secara berkesinambungan.',
        en: 'Carry out continuous monitoring, evaluation, and quality improvement.',
      },
    ] satisfies Localized[],
  },
}
