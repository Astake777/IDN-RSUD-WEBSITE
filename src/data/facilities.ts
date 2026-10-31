import type { Facility } from './types'

// Paragraphs inside a description are separated by a blank line.
export const facilities: Facility[] = [
  {
    slug: 'ruang-tunggu',
    name: { id: 'Ruang Tunggu', en: 'Waiting Room', jv: 'Ruang Tengga' },
    description: {
      id: 'Fasilitas bagi pasien dan keluarga untuk beristirahat, menunggu pelayanan medis, serta memperoleh informasi terkait perawatan pasien. Dilengkapi tempat duduk nyaman, pencahayaan memadai, dan sirkulasi udara yang baik untuk menciptakan suasana bersih, tenang, dan nyaman.',
      en: 'A facility for patients and families to rest, wait for medical services, and receive information about patient care. It has comfortable seating, adequate lighting, and good air circulation to create a clean, calm, and comfortable atmosphere.',
      jv: 'Fasilitas kangge pasien lan kulawarga supados saged ngaso, nengga pelayanan medis, saha pikantuk informasi babagan perawatan pasien. Dipunjangkepi papan lenggah ingkang sekeca, pepadhang ingkang cekap, lan sirkulasi hawa ingkang sae kangge nuwuhaken swasana ingkang resik, tenang, lan sekeca.',
    },
    image: {
      src: '/images/ruang-tunggu.webp',
      alt: {
        id: 'Ruang tunggu ICU dengan deretan tempat duduk untuk keluarga pasien',
        en: 'ICU waiting room with rows of seating for patient families',
        jv: 'Ruang tengga ICU kanthi larikan papan lenggah kangge kulawarga pasien',
      },
    },
  },
  {
    slug: 'ruang-tunggu-vip',
    name: { id: 'Ruang Tunggu VIP', en: 'VIP Waiting Room', jv: 'Ruang Tengga VIP' },
    description: {
      id: 'Ruang tunggu VIP merupakan fasilitas khusus yang menawarkan kenyamanan dan privasi lebih bagi pasien dan keluarga. Dilengkapi sofa nyaman, TV, AC, serta fasilitas pendukung dengan suasana eksklusif, tenang, dan elegan.',
      en: 'The VIP waiting room is a special facility that offers more comfort and privacy for patients and families. It has comfortable sofas, a TV, air conditioning, and supporting facilities in an exclusive, calm, and elegant setting.',
      jv: 'Ruang tengga VIP inggih menika fasilitas mirunggan ingkang nyawisaken kasekecan lan privasi langkung kangge pasien lan kulawarga. Dipunjangkepi sofa ingkang sekeca, TV, AC, saha fasilitas pendukung kanthi swasana eksklusif, tenang, lan elegan.',
    },
    image: {
      src: '/images/ruang-tunggu-vip.webp',
      alt: {
        id: 'Ruang tunggu VIP ICU dengan sofa untuk keluarga pasien',
        en: 'ICU VIP waiting room with sofas for patient families',
        jv: 'Ruang tengga VIP ICU kanthi sofa kangge kulawarga pasien',
      },
    },
  },
  {
    slug: 'syringe-pump',
    name: { id: 'Alat Syringe Pump', en: 'Syringe Pump', jv: 'Piranti Syringe Pump' },
    description: {
      id: 'Syringe Pump adalah alat medis berbentuk mesin pompa elektronik kecil yang dipasangi tabung suntikan (spuit) besar. Alat ini berfungsi untuk mendorong dan memasukkan obat cair atau cairan nutrisi ke dalam tubuh pasien melalui selang infus secara perlahan, konstan, dan sangat presisi.',
      en: 'A syringe pump is a medical device in the form of a small electronic pump fitted with a large syringe. It pushes liquid medicine or nutrition fluid into the patient’s body through an infusion line slowly, steadily, and very precisely.',
      jv: 'Syringe Pump inggih menika piranti medis arupi mesin pompa elektronik alit ingkang dipunpasangi tabung suntikan (spuit) ageng. Piranti menika gadhah fungsi kangge nyurung lan nglebetaken obat cair utawi cairan nutrisi dhateng salebeting badan pasien lumantar selang infus kanthi alon, ajeg, lan presisi sanget.',
    },
    image: {
      src: '/images/syringe-pump.webp',
      alt: { id: 'Alat syringe pump elektronik', en: 'Electronic syringe pump device', jv: 'Piranti syringe pump elektronik' },
    },
    educationSlug: 'syringe-pump',
  },
  {
    slug: 'tempat-tidur',
    name: { id: '20 Tempat Tidur', en: '20 Beds', jv: '20 Papan Tilem' },
    description: {
      id: 'Kasur pasien di ruang Intensive Care Unit (ICU) RSUD dr. Loekmono Hadi Kudus merupakan fasilitas tempat tidur khusus yang dirancang untuk menunjang perawatan intensif bagi pasien dengan kondisi kritis atau membutuhkan pemantauan medis secara berkelanjutan. Kasur dilengkapi dengan sistem pengaturan posisi yang dapat disesuaikan, seperti posisi kepala dan kaki, sehingga memudahkan tenaga medis dalam memberikan tindakan perawatan serta membantu meningkatkan kenyamanan pasien.\n\nTempat tidur dilengkapi dengan pagar pengaman di sisi kanan dan kiri, roda yang dilengkapi sistem pengunci, serta bagian kepala dan kaki yang dirancang untuk mendukung kebutuhan perawatan pasien. Kasur ini juga memungkinkan tenaga medis melakukan pemantauan dan tindakan medis dengan lebih mudah, aman, dan efektif.',
      en: 'The patient beds in the Intensive Care Unit (ICU) of RSUD dr. Loekmono Hadi Kudus are special beds designed to support intensive care for patients in critical condition or who need continuous medical monitoring. The beds have an adjustable positioning system, such as head and foot positions, making it easier for medical staff to provide care and helping improve patient comfort.\n\nThe beds have safety rails on the right and left sides, wheels with a locking system, and head and foot sections designed to support patient care needs. The beds also let medical staff carry out monitoring and medical procedures more easily, safely, and effectively.',
      jv: 'Kasur pasien wonten ruang Intensive Care Unit (ICU) RSUD dr. Loekmono Hadi Kudus inggih menika fasilitas papan tilem mirunggan ingkang dipunrancang kangge nyengkuyung perawatan intensif tumrap pasien ingkang wonten ing kahanan kritis utawi mbetahaken pemantauan medis kanthi terus-terusan. Kasur dipunjangkepi sistem pangaturan posisi ingkang saged dipunjumbuhaken, kados posisi sirah lan suku, satemah nggampilaken tenaga medis anggenipun maringi tindakan perawatan saha mbiyantu nambah kasekecan pasien.\n\nPapan tilem dipunjangkepi pager pengaman wonten sisih tengen lan kiwa, roda ingkang dipunjangkepi sistem pengunci, saha perangan sirah lan suku ingkang dipunrancang kangge nyengkuyung kabetahan perawatan pasien. Kasur menika ugi ndadosaken tenaga medis saged nindakaken pemantauan lan tindakan medis kanthi langkung gampil, aman, lan efektif.',
    },
    functions: {
      id: [
        'Menunjang perawatan intensif pasien ICU.',
        'Membantu mengatur posisi tubuh pasien sesuai kebutuhan medis.',
        'Memberikan keamanan dan kenyamanan selama perawatan.',
        'Memudahkan tenaga medis dalam melakukan pemeriksaan dan tindakan medis.',
      ],
      en: [
        'Supports intensive care for ICU patients.',
        'Helps adjust the patient’s body position according to medical needs.',
        'Provides safety and comfort during care.',
        'Makes it easier for medical staff to carry out examinations and medical procedures.',
      ],
      jv: [
        'Nyengkuyung perawatan intensif pasien ICU.',
        'Mbiyantu ngatur posisi badan pasien jumbuh kaliyan kabetahan medis.',
        'Maringi keamanan lan kasekecan salebeting perawatan.',
        'Nggampilaken tenaga medis anggenipun nindakaken pamriksan lan tindakan medis.',
      ],
    },
    image: {
      src: '/images/tempat-tidur.webp',
      alt: {
        id: 'Tempat tidur pasien ICU dengan pagar pengaman di kedua sisi',
        en: 'ICU patient bed with safety rails on both sides',
        jv: 'Papan tilem pasien ICU kanthi pager pengaman wonten kalih sisihipun',
      },
    },
  },
  {
    slug: 'crrt',
    name: { id: 'CRRT', en: 'CRRT', jv: 'CRRT' },
    description: {
      id: 'Alat CRRT (Continuous Renal Replacement Therapy) merupakan perangkat medis yang digunakan di ruang ICU RSUD dr. Loekmono Hadi Kudus untuk membantu menggantikan fungsi ginjal pasien yang mengalami gangguan ginjal berat, terutama pada pasien dengan kondisi kritis. Alat ini bekerja dengan menyaring darah secara terus-menerus untuk membuang zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh. Penggunaan CRRT memungkinkan proses terapi pengganti fungsi ginjal dilakukan secara bertahap dan berkelanjutan dengan pemantauan ketat oleh tenaga medis.',
      en: 'The CRRT (Continuous Renal Replacement Therapy) device is medical equipment used in the ICU of RSUD dr. Loekmono Hadi Kudus to help replace kidney function in patients with severe kidney disorders, especially patients in critical condition. It works by continuously filtering the blood to remove metabolic waste and excess fluid, and helps maintain the body’s electrolyte balance. CRRT allows kidney replacement therapy to be carried out gradually and continuously under close monitoring by medical staff.',
      jv: 'Piranti CRRT (Continuous Renal Replacement Therapy) inggih menika piranti medis ingkang dipunginakaken wonten ruang ICU RSUD dr. Loekmono Hadi Kudus kangge mbiyantu nggantosi fungsi ginjel pasien ingkang nandhang gangguan ginjel awrat, mliginipun pasien ingkang wonten ing kahanan kritis. Piranti menika makarya kanthi nyaring rah kanthi terus-terusan kangge mbucal zat sisa metabolisme, cairan ingkang langkung, saha mbiyantu njagi keseimbangan elektrolit wonten salebeting badan. Panganggening CRRT ndadosaken proses terapi pengganti fungsi ginjel saged dipuntindakaken kanthi bertahap lan lestantun kanthi pemantauan ketat dening tenaga medis.',
    },
    functions: {
      id: [
        'Membantu menyaring darah dari zat sisa metabolisme.',
        'Mengeluarkan kelebihan cairan dalam tubuh.',
        'Membantu menjaga keseimbangan elektrolit.',
        'Mendukung terapi pengganti fungsi ginjal pada pasien kritis.',
        'Membantu menjaga kestabilan kondisi pasien selama perawatan intensif.',
      ],
      en: [
        'Helps filter metabolic waste from the blood.',
        'Removes excess fluid from the body.',
        'Helps maintain electrolyte balance.',
        'Supports kidney replacement therapy in critical patients.',
        'Helps keep the patient’s condition stable during intensive care.',
      ],
      jv: [
        'Mbiyantu nyaring rah saking zat sisa metabolisme.',
        'Ngedalaken cairan ingkang langkung wonten salebeting badan.',
        'Mbiyantu njagi keseimbangan elektrolit.',
        'Nyengkuyung terapi pengganti fungsi ginjel tumrap pasien kritis.',
        'Mbiyantu njagi kestabilan kahanan pasien salebeting perawatan intensif.',
      ],
    },
    image: {
      src: '/images/crrt.webp',
      alt: {
        id: 'Mesin CRRT untuk terapi pengganti fungsi ginjal',
        en: 'CRRT machine for kidney replacement therapy',
        jv: 'Mesin CRRT kangge terapi pengganti fungsi ginjel',
      },
    },
    educationSlug: 'crrt',
  },
  {
    slug: 'hemodialisa',
    name: { id: 'Hemodialisa ICU', en: 'ICU Hemodialysis', jv: 'Hemodialisa ICU' },
    description: {
      id: 'Alat hemodialisa merupakan perangkat medis yang digunakan untuk membantu menggantikan sebagian fungsi ginjal pada pasien yang mengalami gangguan ginjal. Di ruang ICU RSUD dr. Loekmono Hadi Kudus, alat ini digunakan untuk membantu proses penyaringan darah dengan membuang zat sisa metabolisme, racun, serta kelebihan cairan dari dalam tubuh. Proses penyaringan dilakukan melalui membran khusus (dialyzer) sehingga darah yang telah dibersihkan dapat dialirkan kembali ke tubuh pasien. Penggunaan alat hemodialisa bertujuan membantu menjaga keseimbangan cairan dan elektrolit serta mendukung penanganan pasien yang membutuhkan terapi pengganti fungsi ginjal.',
      en: 'The hemodialysis machine is medical equipment used to help replace part of the kidney function in patients with kidney disorders. In the ICU of RSUD dr. Loekmono Hadi Kudus, it is used to help filter the blood by removing metabolic waste, toxins, and excess fluid from the body. Filtering takes place through a special membrane (dialyzer) so that the cleaned blood can flow back into the patient’s body. Hemodialysis aims to help maintain fluid and electrolyte balance and to support the care of patients who need kidney replacement therapy.',
      jv: 'Piranti hemodialisa inggih menika piranti medis ingkang dipunginakaken kangge mbiyantu nggantosi saperangan fungsi ginjel tumrap pasien ingkang nandhang gangguan ginjel. Wonten ruang ICU RSUD dr. Loekmono Hadi Kudus, piranti menika dipunginakaken kangge mbiyantu proses nyaring rah kanthi mbucal zat sisa metabolisme, racun, saha cairan ingkang langkung saking salebeting badan. Proses nyaring dipuntindakaken lumantar membran mirunggan (dialyzer) satemah rah ingkang sampun dipunresiki saged dipunilekaken wangsul dhateng badan pasien. Panganggening piranti hemodialisa ancasipun mbiyantu njagi keseimbangan cairan lan elektrolit saha nyengkuyung penanganan pasien ingkang mbetahaken terapi pengganti fungsi ginjel.',
    },
    functions: {
      id: [
        'Menyaring darah dari zat sisa metabolisme.',
        'Membantu membuang kelebihan cairan dalam tubuh.',
        'Membantu menjaga keseimbangan elektrolit.',
        'Mengurangi penumpukan zat berbahaya dalam darah.',
        'Mendukung perawatan pasien dengan gangguan fungsi ginjal.',
      ],
      en: [
        'Filters metabolic waste from the blood.',
        'Helps remove excess fluid from the body.',
        'Helps maintain electrolyte balance.',
        'Reduces the build-up of harmful substances in the blood.',
        'Supports the care of patients with impaired kidney function.',
      ],
      jv: [
        'Nyaring rah saking zat sisa metabolisme.',
        'Mbiyantu mbucal cairan ingkang langkung wonten salebeting badan.',
        'Mbiyantu njagi keseimbangan elektrolit.',
        'Ngirangi tumpukan zat ingkang mbebayani wonten salebeting rah.',
        'Nyengkuyung perawatan pasien ingkang nandhang gangguan fungsi ginjel.',
      ],
    },
    image: {
      src: '/images/hemodialisa.webp',
      alt: { id: 'Mesin hemodialisa di ruang ICU', en: 'Hemodialysis machine in the ICU', jv: 'Mesin hemodialisa wonten ruang ICU' },
    },
    educationSlug: 'hemodialisa',
  },
  {
    slug: 'bedside-monitor',
    name: { id: 'Bedside Monitor', en: 'Bedside Monitor', jv: 'Bedside Monitor' },
    description: {
      id: 'Bedside monitor merupakan perangkat medis yang digunakan untuk memantau kondisi dan tanda-tanda vital pasien secara terus-menerus di ruang ICU RSUD dr. Loekmono Hadi Kudus. Alat ini berfungsi menampilkan berbagai parameter kesehatan pasien, seperti detak jantung (HR), tekanan darah (NIBP), kadar oksigen dalam darah (SpO2), frekuensi pernapasan (RESP), serta suhu tubuh (TEMP), sesuai dengan fitur yang tersedia pada perangkat. Hasil pemantauan ditampilkan melalui layar monitor dalam bentuk angka dan grafik sehingga tenaga medis dapat mengetahui perubahan kondisi pasien secara cepat. Alat ini sangat penting dalam mendukung pengawasan pasien dengan kondisi kritis selama menjalani perawatan intensif.',
      en: 'A bedside monitor is a medical device used to continuously monitor the condition and vital signs of patients in the ICU of RSUD dr. Loekmono Hadi Kudus. It displays various health parameters of the patient, such as heart rate (HR), blood pressure (NIBP), blood oxygen level (SpO2), respiratory rate (RESP), and body temperature (TEMP), depending on the features available on the device. The readings are shown on the monitor screen as numbers and graphs so medical staff can quickly see changes in the patient’s condition. This device is very important for supervising patients in critical condition during intensive care.',
      jv: 'Bedside monitor inggih menika piranti medis ingkang dipunginakaken kangge ngawasi kahanan lan tandha-tandha vital pasien kanthi terus-terusan wonten ruang ICU RSUD dr. Loekmono Hadi Kudus. Piranti menika gadhah fungsi nampilaken mawarni-warni parameter kesehatan pasien, kados detak jantung (HR), tekanan darah (NIBP), kadar oksigen wonten salebeting rah (SpO2), frekuensi napas (RESP), saha suhu badan (TEMP), jumbuh kaliyan fitur ingkang kasedhiya wonten piranti. Asil pemantauan dipuntampilaken lumantar layar monitor arupi angka lan grafik satemah tenaga medis saged mangertosi owah-owahan kahanan pasien kanthi cepet. Piranti menika wigati sanget kangge nyengkuyung pengawasan pasien ingkang wonten ing kahanan kritis salebeting nglampahi perawatan intensif.',
    },
    functions: {
      id: [
        'Memantau detak jantung pasien.',
        'Mengukur tekanan darah.',
        'Memantau kadar oksigen dalam darah (SpO2).',
        'Mengawasi frekuensi pernapasan pasien.',
        'Memantau suhu tubuh pasien jika tersedia.',
        'Memberikan peringatan melalui alarm apabila parameter terdeteksi melewati batas yang telah ditentukan.',
      ],
      en: [
        'Monitors the patient’s heart rate.',
        'Measures blood pressure.',
        'Monitors blood oxygen level (SpO2).',
        'Watches the patient’s respiratory rate.',
        'Monitors the patient’s body temperature where available.',
        'Gives an alarm when a parameter is detected beyond the set limits.',
      ],
      jv: [
        'Ngawasi detak jantung pasien.',
        'Ngukur tekanan darah.',
        'Ngawasi kadar oksigen wonten salebeting rah (SpO2).',
        'Ngawasi frekuensi napas pasien.',
        'Ngawasi suhu badan pasien menawi kasedhiya.',
        'Maringi pepenget lumantar alarm menawi parameter kadeteksi ngliwati wates ingkang sampun dipuntemtokaken.',
      ],
    },
    image: {
      src: '/images/bedside-monitor.webp',
      alt: {
        id: 'Bedside monitor yang menampilkan tanda vital pasien',
        en: 'Bedside monitor displaying patient vital signs',
        jv: 'Bedside monitor ingkang nampilaken tandha vital pasien',
      },
    },
  },
  {
    slug: 'echo',
    name: { id: 'ECHO', en: 'ECHO', jv: 'ECHO' },
    description: {
      id: 'Alat ECHO (Echocardiography) merupakan perangkat medis yang digunakan untuk melakukan pemeriksaan jantung menggunakan teknologi gelombang ultrasonografi (USG). Di ruang ICU RSUD dr. Loekmono Hadi Kudus, alat ini digunakan untuk membantu tenaga medis dalam melihat struktur dan menilai fungsi jantung pasien, terutama pasien dengan kondisi kritis yang membutuhkan pemantauan secara intensif. Pemeriksaan ECHO dapat memberikan gambaran mengenai ukuran ruang jantung, pergerakan otot jantung, fungsi katup jantung, serta kemampuan jantung dalam memompa darah. Hasil pemeriksaan ini membantu dokter dalam menentukan diagnosis dan tindakan medis yang sesuai dengan kondisi pasien.',
      en: 'The ECHO (Echocardiography) device is medical equipment used to examine the heart with ultrasound (USG) technology. In the ICU of RSUD dr. Loekmono Hadi Kudus, it helps medical staff see the structure and assess the function of the patient’s heart, especially for patients in critical condition who need intensive monitoring. An ECHO examination can show the size of the heart chambers, the movement of the heart muscle, the function of the heart valves, and the heart’s ability to pump blood. The results help doctors determine the diagnosis and the medical action that suits the patient’s condition.',
      jv: 'Piranti ECHO (Echocardiography) inggih menika piranti medis ingkang dipunginakaken kangge nindakaken pamriksan jantung ngginakaken teknologi gelombang ultrasonografi (USG). Wonten ruang ICU RSUD dr. Loekmono Hadi Kudus, piranti menika dipunginakaken kangge mbiyantu tenaga medis anggenipun ningali struktur lan mbiji fungsi jantung pasien, mliginipun pasien ingkang wonten ing kahanan kritis ingkang mbetahaken pemantauan kanthi intensif. Pamriksan ECHO saged maringi gambaran babagan ukuran ruang jantung, obahing otot jantung, fungsi katup jantung, saha kasagedan jantung anggenipun mompa rah. Asil pamriksan menika mbiyantu dokter anggenipun nemtokaken diagnosis lan tindakan medis ingkang jumbuh kaliyan kahanan pasien.',
    },
    functions: {
      id: [
        'Menampilkan gambaran struktur jantung melalui teknologi ultrasonografi.',
        'Menilai kemampuan jantung dalam memompa darah.',
        'Memeriksa kondisi dan fungsi katup jantung.',
        'Membantu mendeteksi gangguan pada struktur dan fungsi jantung.',
        'Mendukung pemantauan kondisi jantung pasien kritis di ruang ICU.',
      ],
      en: [
        'Shows images of the heart’s structure using ultrasound technology.',
        'Assesses the heart’s ability to pump blood.',
        'Examines the condition and function of the heart valves.',
        'Helps detect disorders in the structure and function of the heart.',
        'Supports monitoring of the heart condition of critical patients in the ICU.',
      ],
      jv: [
        'Nampilaken gambaran struktur jantung lumantar teknologi ultrasonografi.',
        'Mbiji kasagedan jantung anggenipun mompa rah.',
        'Mriksa kahanan lan fungsi katup jantung.',
        'Mbiyantu ndeteksi gangguan wonten struktur lan fungsi jantung.',
        'Nyengkuyung pemantauan kahanan jantung pasien kritis wonten ruang ICU.',
      ],
    },
    image: {
      src: '/images/echo.webp',
      alt: {
        id: 'Alat echocardiography (USG jantung) di ruang ICU',
        en: 'Echocardiography (heart ultrasound) machine in the ICU',
        jv: 'Piranti echocardiography (USG jantung) wonten ruang ICU',
      },
    },
  },
  {
    slug: 'defibrilator',
    name: { id: 'Defibrilator', en: 'Defibrillator', jv: 'Defibrilator' },
    description: {
      id: 'Defibrilator adalah alat medis untuk memberikan kejutan listrik terkontrol saat terjadi gangguan irama jantung berbahaya, seperti fibrilasi ventrikel (VF), takikardia ventrikel tanpa denyut, atau henti jantung. Tujuannya adalah mengembalikan irama jantung agar kembali normal. Tindakan ini dilakukan oleh tenaga medis terlatih dengan menempelkan elektroda untuk memantau grafik jantung, lalu memberikan kejutan sesuai indikasi medis sambil terus memantau tanda vital pasien.',
      en: 'A defibrillator is a medical device that delivers a controlled electric shock during dangerous heart rhythm disorders, such as ventricular fibrillation (VF), pulseless ventricular tachycardia, or cardiac arrest. Its purpose is to restore the heart rhythm to normal. The procedure is performed by trained medical staff, who attach electrodes to monitor the heart tracing and then deliver a shock as medically indicated while continuing to monitor the patient’s vital signs.',
      jv: 'Defibrilator inggih menika piranti medis kangge maringi kejutan listrik ingkang dipunkontrol nalika wonten gangguan irama jantung ingkang mbebayani, kados fibrilasi ventrikel (VF), takikardia ventrikel tanpa denyut, utawi henti jantung. Ancasipun inggih menika mangsulaken irama jantung supados normal malih. Tindakan menika dipuntindakaken dening tenaga medis ingkang sampun kalatih kanthi nempelaken elektroda kangge ngawasi grafik jantung, lajeng maringi kejutan jumbuh kaliyan indikasi medis kanthi tetep ngawasi tandha vital pasien.',
    },
    image: {
      src: '/images/defibrilator.webp',
      alt: { id: 'Alat defibrilator di ruang ICU', en: 'Defibrillator device in the ICU', jv: 'Piranti defibrilator wonten ruang ICU' },
    },
    educationSlug: 'defibrilator',
  },
]
