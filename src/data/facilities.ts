import type { Facility } from './types'

// Paragraphs inside a description are separated by a blank line.
export const facilities: Facility[] = [
  {
    slug: 'ruang-tunggu',
    name: { id: 'Ruang Tunggu', en: 'Waiting Room' },
    description: {
      id: 'Fasilitas bagi pasien dan keluarga untuk beristirahat, menunggu pelayanan medis, serta memperoleh informasi terkait perawatan pasien. Dilengkapi tempat duduk nyaman, pencahayaan memadai, dan sirkulasi udara yang baik untuk menciptakan suasana bersih, tenang, dan nyaman.',
      en: 'A facility for patients and families to rest, wait for medical services, and receive information about patient care. It has comfortable seating, adequate lighting, and good air circulation to create a clean, calm, and comfortable atmosphere.',
    },
    image: {
      src: '/images/ruang-tunggu.webp',
      alt: {
        id: 'Ruang tunggu ICU dengan deretan tempat duduk untuk keluarga pasien',
        en: 'ICU waiting room with rows of seating for patient families',
      },
    },
  },
  {
    slug: 'ruang-tunggu-vip',
    name: { id: 'Ruang Tunggu VIP', en: 'VIP Waiting Room' },
    description: {
      id: 'Ruang tunggu VIP merupakan fasilitas khusus yang menawarkan kenyamanan dan privasi lebih bagi pasien dan keluarga. Dilengkapi sofa nyaman, TV, AC, serta fasilitas pendukung dengan suasana eksklusif, tenang, dan elegan.',
      en: 'The VIP waiting room is a special facility that offers more comfort and privacy for patients and families. It has comfortable sofas, a TV, air conditioning, and supporting facilities in an exclusive, calm, and elegant setting.',
    },
    image: {
      src: '/images/ruang-tunggu-vip.webp',
      alt: {
        id: 'Ruang tunggu VIP ICU dengan sofa untuk keluarga pasien',
        en: 'ICU VIP waiting room with sofas for patient families',
      },
    },
  },
  {
    slug: 'syringe-pump',
    name: { id: 'Alat Syringe Pump', en: 'Syringe Pump' },
    description: {
      id: 'Syringe Pump adalah alat medis berbentuk mesin pompa elektronik kecil yang dipasangi tabung suntikan (spuit) besar. Alat ini berfungsi untuk mendorong dan memasukkan obat cair atau cairan nutrisi ke dalam tubuh pasien melalui selang infus secara perlahan, konstan, dan sangat presisi.',
      en: 'A syringe pump is a medical device in the form of a small electronic pump fitted with a large syringe. It pushes liquid medicine or nutrition fluid into the patient’s body through an infusion line slowly, steadily, and very precisely.',
    },
    image: {
      src: '/images/syringe-pump.webp',
      alt: { id: 'Alat syringe pump elektronik', en: 'Electronic syringe pump device' },
    },
    educationSlug: 'syringe-pump',
  },
  {
    slug: 'tempat-tidur',
    name: { id: '20 Tempat Tidur', en: '20 Beds' },
    description: {
      id: 'Kasur pasien di ruang Intensive Care Unit (ICU) RSUD dr. Loekmono Hadi Kudus merupakan fasilitas tempat tidur khusus yang dirancang untuk menunjang perawatan intensif bagi pasien dengan kondisi kritis atau membutuhkan pemantauan medis secara berkelanjutan. Kasur dilengkapi dengan sistem pengaturan posisi yang dapat disesuaikan, seperti posisi kepala dan kaki, sehingga memudahkan tenaga medis dalam memberikan tindakan perawatan serta membantu meningkatkan kenyamanan pasien.\n\nTempat tidur dilengkapi dengan pagar pengaman di sisi kanan dan kiri, roda yang dilengkapi sistem pengunci, serta bagian kepala dan kaki yang dirancang untuk mendukung kebutuhan perawatan pasien. Kasur ini juga memungkinkan tenaga medis melakukan pemantauan dan tindakan medis dengan lebih mudah, aman, dan efektif.',
      en: 'The patient beds in the Intensive Care Unit (ICU) of RSUD dr. Loekmono Hadi Kudus are special beds designed to support intensive care for patients in critical condition or who need continuous medical monitoring. The beds have an adjustable positioning system, such as head and foot positions, making it easier for medical staff to provide care and helping improve patient comfort.\n\nThe beds have safety rails on the right and left sides, wheels with a locking system, and head and foot sections designed to support patient care needs. The beds also let medical staff carry out monitoring and medical procedures more easily, safely, and effectively.',
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
    },
    image: {
      src: '/images/tempat-tidur.webp',
      alt: {
        id: 'Tempat tidur pasien ICU dengan pagar pengaman di kedua sisi',
        en: 'ICU patient bed with safety rails on both sides',
      },
    },
  },
  {
    slug: 'crrt',
    name: { id: 'CRRT', en: 'CRRT' },
    description: {
      id: 'Alat CRRT (Continuous Renal Replacement Therapy) merupakan perangkat medis yang digunakan di ruang ICU RSUD dr. Loekmono Hadi Kudus untuk membantu menggantikan fungsi ginjal pasien yang mengalami gangguan ginjal berat, terutama pada pasien dengan kondisi kritis. Alat ini bekerja dengan menyaring darah secara terus-menerus untuk membuang zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh. Penggunaan CRRT memungkinkan proses terapi pengganti fungsi ginjal dilakukan secara bertahap dan berkelanjutan dengan pemantauan ketat oleh tenaga medis.',
      en: 'The CRRT (Continuous Renal Replacement Therapy) device is medical equipment used in the ICU of RSUD dr. Loekmono Hadi Kudus to help replace kidney function in patients with severe kidney disorders, especially patients in critical condition. It works by continuously filtering the blood to remove metabolic waste and excess fluid, and helps maintain the body’s electrolyte balance. CRRT allows kidney replacement therapy to be carried out gradually and continuously under close monitoring by medical staff.',
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
    },
    image: {
      src: '/images/crrt.webp',
      alt: {
        id: 'Mesin CRRT untuk terapi pengganti fungsi ginjal',
        en: 'CRRT machine for kidney replacement therapy',
      },
    },
    educationSlug: 'crrt',
  },
  {
    slug: 'hemodialisa',
    name: { id: 'Hemodialisa ICU', en: 'ICU Hemodialysis' },
    description: {
      id: 'Alat hemodialisa merupakan perangkat medis yang digunakan untuk membantu menggantikan sebagian fungsi ginjal pada pasien yang mengalami gangguan ginjal. Di ruang ICU RSUD dr. Loekmono Hadi Kudus, alat ini digunakan untuk membantu proses penyaringan darah dengan membuang zat sisa metabolisme, racun, serta kelebihan cairan dari dalam tubuh. Proses penyaringan dilakukan melalui membran khusus (dialyzer) sehingga darah yang telah dibersihkan dapat dialirkan kembali ke tubuh pasien. Penggunaan alat hemodialisa bertujuan membantu menjaga keseimbangan cairan dan elektrolit serta mendukung penanganan pasien yang membutuhkan terapi pengganti fungsi ginjal.',
      en: 'The hemodialysis machine is medical equipment used to help replace part of the kidney function in patients with kidney disorders. In the ICU of RSUD dr. Loekmono Hadi Kudus, it is used to help filter the blood by removing metabolic waste, toxins, and excess fluid from the body. Filtering takes place through a special membrane (dialyzer) so that the cleaned blood can flow back into the patient’s body. Hemodialysis aims to help maintain fluid and electrolyte balance and to support the care of patients who need kidney replacement therapy.',
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
    },
    image: {
      src: '/images/hemodialisa.webp',
      alt: { id: 'Mesin hemodialisa di ruang ICU', en: 'Hemodialysis machine in the ICU' },
    },
    educationSlug: 'hemodialisa',
  },
  {
    slug: 'bedside-monitor',
    name: { id: 'Bedside Monitor', en: 'Bedside Monitor' },
    description: {
      id: 'Bedside monitor merupakan perangkat medis yang digunakan untuk memantau kondisi dan tanda-tanda vital pasien secara terus-menerus di ruang ICU RSUD dr. Loekmono Hadi Kudus. Alat ini berfungsi menampilkan berbagai parameter kesehatan pasien, seperti detak jantung (HR), tekanan darah (NIBP), kadar oksigen dalam darah (SpO2), frekuensi pernapasan (RESP), serta suhu tubuh (TEMP), sesuai dengan fitur yang tersedia pada perangkat. Hasil pemantauan ditampilkan melalui layar monitor dalam bentuk angka dan grafik sehingga tenaga medis dapat mengetahui perubahan kondisi pasien secara cepat. Alat ini sangat penting dalam mendukung pengawasan pasien dengan kondisi kritis selama menjalani perawatan intensif.',
      en: 'A bedside monitor is a medical device used to continuously monitor the condition and vital signs of patients in the ICU of RSUD dr. Loekmono Hadi Kudus. It displays various health parameters of the patient, such as heart rate (HR), blood pressure (NIBP), blood oxygen level (SpO2), respiratory rate (RESP), and body temperature (TEMP), depending on the features available on the device. The readings are shown on the monitor screen as numbers and graphs so medical staff can quickly see changes in the patient’s condition. This device is very important for supervising patients in critical condition during intensive care.',
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
    },
    image: {
      src: '/images/bedside-monitor.webp',
      alt: {
        id: 'Bedside monitor yang menampilkan tanda vital pasien',
        en: 'Bedside monitor displaying patient vital signs',
      },
    },
  },
  {
    slug: 'echo',
    name: { id: 'ECHO', en: 'ECHO' },
    description: {
      id: 'Alat ECHO (Echocardiography) merupakan perangkat medis yang digunakan untuk melakukan pemeriksaan jantung menggunakan teknologi gelombang ultrasonografi (USG). Di ruang ICU RSUD dr. Loekmono Hadi Kudus, alat ini digunakan untuk membantu tenaga medis dalam melihat struktur dan menilai fungsi jantung pasien, terutama pasien dengan kondisi kritis yang membutuhkan pemantauan secara intensif. Pemeriksaan ECHO dapat memberikan gambaran mengenai ukuran ruang jantung, pergerakan otot jantung, fungsi katup jantung, serta kemampuan jantung dalam memompa darah. Hasil pemeriksaan ini membantu dokter dalam menentukan diagnosis dan tindakan medis yang sesuai dengan kondisi pasien.',
      en: 'The ECHO (Echocardiography) device is medical equipment used to examine the heart with ultrasound (USG) technology. In the ICU of RSUD dr. Loekmono Hadi Kudus, it helps medical staff see the structure and assess the function of the patient’s heart, especially for patients in critical condition who need intensive monitoring. An ECHO examination can show the size of the heart chambers, the movement of the heart muscle, the function of the heart valves, and the heart’s ability to pump blood. The results help doctors determine the diagnosis and the medical action that suits the patient’s condition.',
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
    },
    image: {
      src: '/images/echo.webp',
      alt: {
        id: 'Alat echocardiography (USG jantung) di ruang ICU',
        en: 'Echocardiography (heart ultrasound) machine in the ICU',
      },
    },
  },
  {
    slug: 'defibrilator',
    name: { id: 'Defibrilator', en: 'Defibrillator' },
    description: {
      id: 'Defibrilator adalah alat medis untuk memberikan kejutan listrik terkontrol saat terjadi gangguan irama jantung berbahaya, seperti fibrilasi ventrikel (VF), takikardia ventrikel tanpa denyut, atau henti jantung. Tujuannya adalah mengembalikan irama jantung agar kembali normal. Tindakan ini dilakukan oleh tenaga medis terlatih dengan menempelkan elektroda untuk memantau grafik jantung, lalu memberikan kejutan sesuai indikasi medis sambil terus memantau tanda vital pasien.',
      en: 'A defibrillator is a medical device that delivers a controlled electric shock during dangerous heart rhythm disorders, such as ventricular fibrillation (VF), pulseless ventricular tachycardia, or cardiac arrest. Its purpose is to restore the heart rhythm to normal. The procedure is performed by trained medical staff, who attach electrodes to monitor the heart tracing and then deliver a shock as medically indicated while continuing to monitor the patient’s vital signs.',
    },
    image: {
      src: '/images/defibrilator.webp',
      alt: { id: 'Alat defibrilator di ruang ICU', en: 'Defibrillator device in the ICU' },
    },
    educationSlug: 'defibrilator',
  },
]
