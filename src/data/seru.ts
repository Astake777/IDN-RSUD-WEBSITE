import type { Localized } from './types'

// Source: Profil_Ruang_ICU_Rapi.docx and index landing page.html (wording kept from the HTML).
export const seru = {
  kicker: { id: 'Edukasi untuk pasien dan keluarga', en: 'Education for patients and families', jv: 'Edukasi kangge pasien lan kulawarga' },
  title: { id: 'SERU - ICU', en: 'SERU - ICU', jv: 'SERU - ICU' },
  subtitle: { id: 'Smart Education Ruang ICU', en: 'Smart Education for the ICU', jv: 'Smart Education Ruang ICU' },
  lead: {
    id: 'Ruang untuk mengenal perawatan intensif melalui informasi yang jelas, terukur, dan berorientasi pada keselamatan pasien.',
    en: 'A place to understand intensive care through clear, measured information focused on patient safety.',
    jv: 'Papan kangge mangertosi perawatan intensif lumantar informasi ingkang cetha, terukur, lan ngutamakaken keslametan pasien.',
  },
  profil: {
    label: { id: 'Profil ICU', en: 'ICU Profile', jv: 'Profil ICU' },
    heading: { id: 'Apa itu Ruang ICU?', en: 'What is the ICU?', jv: 'Menapa punika Ruang ICU?' },
    keyTitle: { id: 'Poin penting', en: 'Key points', jv: 'Bab-bab wigatos' },
    keyPoints: [
      { strong: { id: '24 jam', en: '24 hours', jv: '24 jam' }, rest: { id: 'pelayanan berkesinambungan.', en: 'of continuous care.', jv: 'pelayanan ingkang tanpa kendhat.' } },
      { strong: { id: 'Multidisiplin:', en: 'Multidisciplinary:', jv: 'Multidisiplin:' }, rest: { id: 'kolaborasi sesuai kebutuhan pasien.', en: 'collaboration based on patient needs.', jv: 'kolaborasi jumbuh kaliyan kabetahan pasien.' } },
      { strong: { id: 'Keselamatan pasien', en: 'Patient safety', jv: 'Keslametan pasien' }, rest: { id: 'menjadi orientasi layanan.', en: 'guides every service.', jv: 'dados tujuan pelayanan.' } },
    ] satisfies { strong: Localized; rest: Localized }[],
    statement: {
      id: 'Perawatan intensif yang berlangsung secara komprehensif dan berkesinambungan.',
      en: 'Intensive care delivered comprehensively and continuously.',
      jv: 'Perawatan intensif ingkang lumampah kanthi komprehensif lan tanpa kendhat.',
    },
    paragraphs: [
      {
        id: 'Intensive Care Unit (ICU) atau Instalasi Perawatan Intensif merupakan unit pelayanan khusus di rumah sakit yang memberikan perawatan intensif bagi pasien dengan kondisi kritis, mengancam jiwa, atau mengalami gangguan fungsi satu maupun lebih organ tubuh. Pelayanan meliputi pemantauan ketat, terapi intensif, serta tindakan medis dan keperawatan secara berkesinambungan.',
        en: 'The Intensive Care Unit (ICU) is a specialised hospital unit that provides intensive care for patients in critical or life-threatening condition, or with failure of one or more organs. Care includes close monitoring, intensive therapy, and continuous medical and nursing treatment.',
        jv: 'Intensive Care Unit (ICU) utawi Instalasi Perawatan Intensif inggih punika unit pelayanan mirunggan ing griya sakit ingkang maringi perawatan intensif dhumateng pasien kanthi kawontenan kritis, ngancam nyawa, utawi ngalami gangguan fungsi setunggal utawi langkung organ badan. Pelayanan kalebet pemantauan ingkang ketat, terapi intensif, ugi tindakan medis lan keperawatan kanthi tanpa kendhat.',
      },
      {
        id: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus merupakan unit pelayanan unggulan yang berperan memberikan pelayanan kesehatan secara komprehensif, profesional, terintegrasi, dan berorientasi pada keselamatan pasien.',
        en: 'The ICU of RSUD dr. Loekmono Hadi Kudus is a leading service unit that provides comprehensive, professional, integrated care focused on patient safety.',
        jv: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus inggih punika unit pelayanan unggulan ingkang gadhah jejibahan maringi pelayanan kesehatan kanthi komprehensif, profesional, terintegrasi, lan ngutamakaken keslametan pasien.',
      },
      {
        id: 'Pelayanan ICU berjalan selama 24 jam melalui kolaborasi dokter spesialis, dokter intensivis, dokter jaga, perawat berkompetensi perawatan intensif, dan tenaga kesehatan lain sesuai kebutuhan pasien.',
        en: 'ICU care runs 24 hours a day through collaboration between specialists, intensivists, duty doctors, nurses trained in intensive care, and other health professionals as each patient requires.',
        jv: 'Pelayanan ICU lumampah salami 24 jam lumantar kolaborasi dokter spesialis, dokter intensivis, dokter jaga, perawat ingkang gadhah kompetensi perawatan intensif, lan tenaga kesehatan sanesipun jumbuh kaliyan kabetahan pasien.',
      },
    ] satisfies Localized[],
    toVisi: { id: 'Lanjut ke visi', en: 'Continue to vision', jv: 'Lajeng dhateng visi' },
  },
  visi: {
    label: { id: 'Visi', en: 'Vision', jv: 'Visi' },
    heading: { id: 'Visi Ruang ICU', en: 'ICU Vision', jv: 'Visi Ruang ICU' },
    text: {
      id: 'Terwujudnya pelayanan perawatan intensif yang profesional, bermutu, terintegrasi, dan berorientasi pada keselamatan pasien.',
      en: 'Professional, high-quality, integrated intensive care that is oriented to patient safety.',
      jv: 'Kawujudipun pelayanan perawatan intensif ingkang profesional, bermutu, terintegrasi, lan ngutamakaken keslametan pasien.',
    },
    hint: { id: 'Gulir pelan untuk membaca kalimat ini kata demi kata.', en: 'Scroll slowly to read this sentence word by word.', jv: 'Gulir alon-alon kangge maos ukara punika tembung saben tembung.' },
  },
  misi: {
    label: { id: 'Misi', en: 'Mission', jv: 'Misi' },
    heading: { id: 'Misi yang diterjemahkan dalam layanan sehari-hari.', en: 'A mission carried out in daily care.', jv: 'Misi ingkang kawujudaken wonten ing pelayanan saben dinten.' },
    items: [
      {
        id: 'Menyelenggarakan pelayanan perawatan intensif secara profesional sesuai standar pelayanan dan perkembangan ilmu pengetahuan serta teknologi kesehatan.',
        en: 'Provide professional intensive care in line with service standards and advances in health science and technology.',
        jv: 'Nindakaken pelayanan perawatan intensif kanthi profesional jumbuh kaliyan standar pelayanan lan ngrembakanipun ilmu pengetahuan ugi teknologi kesehatan.',
      },
      {
        id: 'Meningkatkan mutu pelayanan dan keselamatan pasien melalui penerapan standar pelayanan klinis dan keperawatan.',
        en: 'Improve service quality and patient safety by applying clinical and nursing care standards.',
        jv: 'Ningkataken mutu pelayanan lan keslametan pasien lumantar penerapan standar pelayanan klinis lan keperawatan.',
      },
      {
        id: 'Mengembangkan kompetensi sumber daya manusia melalui pendidikan dan pelatihan berkelanjutan.',
        en: 'Develop staff competence through continuing education and training.',
        jv: 'Ngrembakakaken kompetensi sumber daya manungsa lumantar pendidikan lan pelatihan ingkang tanpa kendhat.',
      },
      {
        id: 'Meningkatkan koordinasi dan kolaborasi antarprofesi dalam memberikan pelayanan yang terintegrasi.',
        en: 'Strengthen coordination and interprofessional collaboration to deliver integrated care.',
        jv: 'Ningkataken koordinasi lan kolaborasi antarprofesi wonten ing maringi pelayanan ingkang terintegrasi.',
      },
      {
        id: 'Mengoptimalkan penggunaan sarana, prasarana, dan peralatan medis untuk mendukung pelayanan pasien kritis.',
        en: 'Make the best use of facilities, infrastructure, and medical equipment to support critical patient care.',
        jv: 'Ngoptimalaken panganggening sarana, prasarana, lan piranti medis kangge nyengkuyung pelayanan pasien kritis.',
      },
      {
        id: 'Melaksanakan monitoring, evaluasi, dan peningkatan mutu pelayanan secara berkesinambungan.',
        en: 'Carry out continuous monitoring, evaluation, and quality improvement.',
        jv: 'Nindakaken monitoring, evaluasi, lan peningkatan mutu pelayanan kanthi tanpa kendhat.',
      },
    ] satisfies Localized[],
  },
}
