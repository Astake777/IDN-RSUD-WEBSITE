import type { EducationSection, EducationTopic, Localized } from './types'

// Source: "data FASILITAS DAN EDUKASI RS.docx" (family education material), Syringe Pump from the design PDFs.
type Pair = [id: string, en: string]

const loc = ([id, en]: Pair): Localized => ({ id, en })

function sec(heading: Pair, body: { p?: Pair[]; pts?: Pair[]; note?: Pair } = {}): EducationSection {
  return {
    heading: loc(heading),
    paragraphs: body.p?.map(loc),
    points: body.pts && { id: body.pts.map((x) => x[0]), en: body.pts.map((x) => x[1]) },
    note: body.note && loc(body.note),
  }
}

const img = (src: string, alt: Pair) => ({ src, alt: loc(alt) })

const ASK: Pair = [
  'Jangan ragu bertanya kepada dokter atau perawat apabila ada hal yang belum dipahami.',
  'Do not hesitate to ask the doctor or nurse if there is anything you do not yet understand.',
]

export interface VisitSlot {
  label: Localized
  time: string
}

/** ICU visiting schedule from the "Edukasi masuk ICU" material. */
export const icuVisitSchedule: { title: Localized; slots: VisitSlot[] } = {
  title: { id: 'Jadwal Kunjungan Pasien ICU', en: 'ICU Patient Visiting Hours' },
  slots: [
    { label: { id: 'Siang', en: 'Midday' }, time: '11.00–13.00 WIB' },
    { label: { id: 'Malam', en: 'Evening' }, time: '17.00–19.00 WIB' },
  ],
}

/** Index of the masuk-icu section that shows the visiting schedule. */
export const VISIT_SCHEDULE_SECTION = 3

const masukIcu: EducationTopic = {
  slug: 'masuk-icu',
  title: { id: 'Edukasi Masuk Ruang ICU', en: 'Education on Entering the ICU' },
  summary: {
    id: 'ICU (Intensive Care Unit) adalah ruang perawatan intensif khusus bagi pasien dengan kondisi kritis atau membutuhkan pengawasan dan penanganan medis secara ketat. Pasien akan mendapatkan pemantauan selama 24 jam oleh dokter, perawat, dan tenaga kesehatan lainnya dengan bantuan peralatan medis sesuai kebutuhan.',
    en: 'The ICU (Intensive Care Unit) is a special intensive care room for patients in critical condition or who need close medical supervision and treatment. Patients are monitored 24 hours a day by doctors, nurses, and other healthcare workers, with the help of medical equipment as needed.',
  },
  image: img('/images/ruang-tunggu.webp', ['Ruang tunggu keluarga pasien ICU', 'ICU family waiting room']),
  sections: [],
  importantMessage: [
    loc([
      'Perawatan di ruang ICU bertujuan memberikan pelayanan dan pemantauan intensif sesuai kondisi pasien.',
      'Care in the ICU aims to provide intensive service and monitoring according to the patient’s condition.',
    ]),
    loc([
      'Kami mengharapkan kerja sama keluarga dalam mematuhi jadwal kunjungan, menjaga kebersihan, serta mengikuti seluruh tata tertib yang berlaku di ruang ICU.',
      'We ask for the family’s cooperation in following the visiting schedule, maintaining cleanliness, and following all rules that apply in the ICU.',
    ]),
    loc([
      'Kepatuhan terhadap peraturan merupakan bagian penting dalam menjaga keselamatan pasien dan mencegah risiko infeksi selama perawatan.',
      'Following the rules is an important part of keeping patients safe and preventing the risk of infection during care.',
    ]),
  ],
  complete: true,
}
masukIcu.sections = [
  sec(['1. Apa itu ICU?', '1. What is the ICU?'], { p: [[masukIcu.summary.id, masukIcu.summary.en]] }),
  sec(['2. Mengapa pasien harus dirawat di ICU?', '2. Why does a patient need to be treated in the ICU?'], {
    p: [['Pasien dirawat di ruang ICU berdasarkan kondisi dan kebutuhan medis, antara lain:', 'Patients are treated in the ICU based on their condition and medical needs, including:']],
    pts: [
      ['Mengalami gangguan pernapasan.', 'Breathing problems.'],
      ['Mengalami gangguan fungsi jantung dan peredaran darah.', 'Problems with heart function and blood circulation.'],
      ['Mengalami penurunan kesadaran.', 'Decreased consciousness.'],
      ['Membutuhkan pemantauan tanda-tanda vital secara intensif.', 'Needing intensive monitoring of vital signs.'],
      ['Mengalami gangguan fungsi organ yang membutuhkan penanganan khusus.', 'Organ function problems that need special treatment.'],
      ['Membutuhkan perawatan intensif setelah tindakan medis atau operasi tertentu.', 'Needing intensive care after certain medical procedures or surgery.'],
    ],
  }),
  sec(['3. Bagaimana pelayanan pasien selama di ICU?', '3. What care do patients receive in the ICU?'], {
    p: [['Selama menjalani perawatan di ICU, pasien akan mendapatkan:', 'While being treated in the ICU, patients will receive:']],
    pts: [
      ['Pemantauan kondisi pasien selama 24 jam.', 'Monitoring of their condition 24 hours a day.'],
      ['Pemantauan tekanan darah, denyut jantung, pernapasan, dan kadar oksigen.', 'Monitoring of blood pressure, heart rate, breathing, and oxygen levels.'],
      ['Pemberian obat-obatan dan cairan sesuai instruksi dokter.', 'Medicines and fluids as instructed by the doctor.'],
      ['Bantuan alat medis seperti ventilator, bedside monitor, infusion pump, atau alat lainnya sesuai kebutuhan.', 'Support from medical equipment such as a ventilator, bedside monitor, infusion pump, or other devices as needed.'],
      ['Perawatan kebersihan dan kenyamanan pasien.', 'Care for their hygiene and comfort.'],
      ['Evaluasi kondisi pasien secara berkala oleh dokter dan perawat.', 'Regular evaluation of their condition by doctors and nurses.'],
    ],
  }),
  sec(['4. Ketentuan Jam Kunjung Pasien ICU', '4. ICU Patient Visiting Hours'], {
    p: [['Tata tertib pengunjung pasien:', 'Visitor rules:']],
    pts: [
      ['Anak di bawah usia 14 tahun dilarang masuk area perawatan ICU.', 'Children under 14 years of age are not allowed to enter the ICU care area.'],
      ['Setiap pengunjung dibatasi maksimal 2 (dua) orang.', 'Visitors are limited to a maximum of 2 (two) people at a time.'],
      ['Pengunjung dapat bergantian sesuai jam kunjung yang telah ditetapkan.', 'Visitors may take turns within the set visiting hours.'],
      ['Pengunjung wajib mematuhi arahan petugas ICU.', 'Visitors must follow the directions of ICU staff.'],
    ],
  }),
  sec(['5. Apa yang harus diperhatikan keluarga selama berkunjung?', '5. What should families pay attention to while visiting?'], {
    pts: [
      ['Melakukan kebersihan tangan sebelum dan sesudah mengunjungi pasien.', 'Clean your hands before and after visiting the patient.'],
      ['Mengikuti arahan petugas mengenai penggunaan alat pelindung diri.', 'Follow staff directions on using personal protective equipment.'],
      ['Menjaga ketenangan dan tidak membuat kegaduhan.', 'Stay calm and do not make noise.'],
      ['Tidak menyentuh, melepas, atau mengubah pengaturan alat medis pasien.', 'Do not touch, remove, or change the settings of the patient’s medical equipment.'],
      ['Tidak memberikan makanan atau minuman kepada pasien tanpa izin petugas.', 'Do not give the patient food or drink without staff permission.'],
      ['Tidak mengambil foto atau video tanpa izin sesuai ketentuan rumah sakit.', 'Do not take photos or videos without permission, in line with hospital rules.'],
      ['Segera melaporkan kepada perawat apabila melihat perubahan kondisi pasien.', 'Report to the nurse right away if you notice any change in the patient’s condition.'],
    ],
  }),
  sec(['6. Apa peran keluarga dalam mendukung kesembuhan pasien?', '6. What is the family’s role in supporting the patient’s recovery?'], {
    p: [['Keluarga memiliki peran penting dalam mendukung proses perawatan pasien, yaitu:', 'The family plays an important role in supporting the patient’s care, namely:']],
    pts: [
      ['Memberikan dukungan moral dan semangat kepada pasien.', 'Giving the patient moral support and encouragement.'],
      ['Memberikan informasi mengenai riwayat penyakit dan pengobatan pasien.', 'Providing information about the patient’s medical history and treatment.'],
      ['Mematuhi seluruh peraturan dan jadwal kunjungan ICU.', 'Following all ICU rules and the visiting schedule.'],
      ['Bekerja sama dengan dokter dan perawat selama proses perawatan.', 'Working together with doctors and nurses throughout the care process.'],
      ['Memberikan persetujuan tindakan medis sesuai ketentuan yang berlaku.', 'Giving consent for medical procedures according to applicable rules.'],
      ['Memberikan dukungan dan doa untuk kesembuhan pasien.', 'Offering support and prayers for the patient’s recovery.'],
    ],
  }),
  sec(['7. Bagaimana keluarga mendapatkan informasi perkembangan pasien?', '7. How can families get updates on the patient’s progress?'], {
    p: [[
      'Keluarga dapat berkomunikasi dengan dokter atau perawat yang bertugas untuk memperoleh informasi mengenai kondisi dan perkembangan pasien sesuai ketentuan pelayanan dan privasi rumah sakit.',
      'Families can speak with the doctor or nurse on duty to get information about the patient’s condition and progress, in line with the hospital’s service and privacy rules.',
    ]],
  }),
]

const defibrilator: EducationTopic = {
  slug: 'defibrilator',
  title: { id: 'Defibrilator', en: 'Defibrillator' },
  summary: {
    id: 'Defibrilator adalah alat medis yang digunakan untuk memberikan kejutan listrik terkontrol pada jantung pada kondisi gangguan irama jantung tertentu yang mengancam nyawa. Alat ini bertujuan membantu mengembalikan irama jantung yang efektif pada kondisi seperti fibrilasi ventrikel (VF) dan takikardia ventrikel tanpa denyut (pulseless VT).',
    en: 'A defibrillator is a medical device used to deliver a controlled electric shock to the heart in certain life-threatening heart rhythm disorders. It aims to help restore an effective heart rhythm in conditions such as ventricular fibrillation (VF) and pulseless ventricular tachycardia (pulseless VT).',
  },
  image: img('/images/defibrilator.webp', ['Alat defibrilator di Ruang ICU', 'Defibrillator in the ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Defibrilator merupakan alat medis yang berperan penting dalam penanganan gangguan irama jantung tertentu yang mengancam nyawa. Tindakan ini membutuhkan penanganan cepat dan tepat oleh tenaga medis yang terlatih.',
      'A defibrillator is a medical device that plays an important role in treating certain life-threatening heart rhythm disorders. This procedure requires fast and accurate handling by trained medical staff.',
    ]),
    loc([
      'Dukungan keluarga dan kerja sama dengan dokter serta perawat sangat penting selama proses penanganan pasien.',
      'Family support and cooperation with doctors and nurses are very important while the patient is being treated.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
defibrilator.sections = [
  sec(['1. Apa itu Defibrilator?', '1. What is a defibrillator?'], { p: [[defibrilator.summary.id, defibrilator.summary.en]] }),
  sec(['2. Mengapa pasien perlu menggunakan Defibrilator?', '2. Why does a patient need a defibrillator?'], {
    p: [['Penggunaan defibrilator dilakukan berdasarkan kondisi medis pasien, terutama ketika:', 'A defibrillator is used based on the patient’s medical condition, especially when:']],
    pts: [
      ['Pasien mengalami gangguan irama jantung yang berbahaya.', 'The patient has a dangerous heart rhythm disorder.'],
      ['Pasien mengalami fibrilasi ventrikel (VF).', 'The patient has ventricular fibrillation (VF).'],
      ['Pasien mengalami takikardia ventrikel tanpa denyut (pulseless VT).', 'The patient has pulseless ventricular tachycardia (pulseless VT).'],
      ['Pasien mengalami kondisi henti jantung tertentu yang membutuhkan tindakan defibrilasi.', 'The patient has a certain type of cardiac arrest that requires defibrillation.'],
    ],
    note: [
      'Catatan: Tidak semua gangguan irama jantung membutuhkan kejutan listrik. Penggunaannya harus berdasarkan hasil pemeriksaan dan penilaian tenaga medis.',
      'Note: Not all heart rhythm disorders need an electric shock. Its use must be based on examination results and assessment by medical staff.',
    ],
  }),
  sec(['3. Bagaimana proses penggunaan Defibrilator?', '3. How is a defibrillator used?'], {
    p: [
      [
        'Penggunaan defibrilator dilakukan oleh dokter atau tenaga medis yang terlatih. Alat akan dihubungkan dengan pasien melalui elektroda atau bantalan khusus untuk memantau aktivitas listrik jantung dan menentukan kebutuhan tindakan.',
        'A defibrillator is used by a doctor or trained medical staff. The device is connected to the patient through electrodes or special pads to monitor the heart’s electrical activity and determine whether a procedure is needed.',
      ],
      [
        'Apabila ditemukan irama jantung yang memerlukan defibrilasi, tenaga medis akan melakukan tindakan sesuai prosedur medis dan kondisi pasien. Selama tindakan berlangsung, kondisi jantung dan tanda-tanda vital pasien akan dipantau.',
        'If a heart rhythm that requires defibrillation is found, medical staff will carry out the procedure according to medical protocol and the patient’s condition. During the procedure, the patient’s heart condition and vital signs will be monitored.',
      ],
    ],
  }),
  sec(['4. Apa yang perlu diketahui keluarga pasien?', '4. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:']],
    pts: [
      ['Defibrilator merupakan alat medis untuk menangani gangguan irama jantung tertentu yang mengancam nyawa.', 'A defibrillator is a medical device for treating certain life-threatening heart rhythm disorders.'],
      ['Penggunaan alat dilakukan oleh tenaga medis yang memiliki kompetensi.', 'The device is used by competent medical staff.'],
      ['Tindakan defibrilasi dapat dilakukan sebagai bagian dari penanganan kegawatdaruratan jantung.', 'Defibrillation may be performed as part of emergency heart care.'],
      ['Keluarga tidak diperbolehkan menyentuh alat atau elektroda selama tindakan berlangsung.', 'The family must not touch the device or electrodes during the procedure.'],
      ['Keluarga harus mengikuti arahan dokter dan perawat selama proses penanganan.', 'The family must follow the directions of doctors and nurses during treatment.'],
      ['Setelah tindakan, pasien akan mendapatkan pemantauan kondisi jantung secara berkala.', 'After the procedure, the patient’s heart condition will be monitored regularly.'],
    ],
  }),
  sec(['5. Apakah penggunaan Defibrilator berbahaya?', '5. Is using a defibrillator dangerous?'], {
    p: [[
      'Defibrilasi merupakan tindakan medis yang memiliki manfaat penting dalam menangani gangguan irama jantung tertentu yang mengancam nyawa. Namun, tindakan ini juga memiliki risiko dan dilakukan berdasarkan pertimbangan medis. Tenaga medis akan melakukan evaluasi dan pemantauan untuk memastikan tindakan sesuai dengan kondisi pasien.',
      'Defibrillation is a medical procedure with important benefits in treating certain life-threatening heart rhythm disorders. However, it also carries risks and is performed based on medical judgment. Medical staff will evaluate and monitor to make sure the procedure suits the patient’s condition.',
    ]],
  }),
  sec(['6. Apa yang harus dilakukan keluarga selama tindakan?', '6. What should the family do during the procedure?'], {
    pts: [
      ['Tetap tenang dan tidak panik.', 'Stay calm and do not panic.'],
      ['Memberikan ruang kepada tenaga medis untuk melakukan tindakan.', 'Give medical staff room to carry out the procedure.'],
      ['Tidak menyentuh pasien, tempat tidur, kabel, atau alat selama tindakan defibrilasi berlangsung.', 'Do not touch the patient, bed, cables, or device while defibrillation is taking place.'],
      ['Mengikuti instruksi dokter dan perawat.', 'Follow the instructions of doctors and nurses.'],
      ['Menanyakan perkembangan kondisi pasien kepada tenaga medis setelah tindakan selesai.', 'Ask medical staff about the patient’s progress after the procedure is finished.'],
    ],
  }),
]

const syringePump: EducationTopic = {
  slug: 'syringe-pump',
  title: { id: 'Alat Syringe Pump', en: 'Syringe Pump' },
  summary: {
    id: 'Syringe Pump adalah suatu perangkat medis elektronik yang berfungsi untuk memberikan cairan obat atau nutrisi ke dalam tubuh pasien secara sangat presisi, bertahap, dan terkontrol dalam jangka waktu tertentu.',
    en: 'A syringe pump is an electronic medical device that delivers liquid medicine or nutrition into the patient’s body in a very precise, gradual, and controlled way over a set period of time.',
  },
  image: img('/images/syringe-pump.webp', ['Alat syringe pump di Ruang ICU', 'Syringe pump in the ICU']),
  sections: [],
  complete: false,
}
syringePump.sections = [
  sec(['Apa itu Syringe Pump?', 'What is a syringe pump?'], {
    p: [
      [syringePump.summary.id, syringePump.summary.en],
      [
        'Syringe Pump adalah alat medis berbentuk mesin pompa elektronik kecil yang dipasangi tabung suntikan (spuit) besar. Alat ini berfungsi untuk mendorong dan memasukkan obat cair atau cairan nutrisi ke dalam tubuh pasien melalui selang infus secara perlahan, konstan, dan sangat presisi.',
        'A syringe pump is a medical device in the form of a small electronic pump fitted with a large syringe. It pushes liquid medicine or nutrition fluid into the patient’s body through an infusion line slowly, constantly, and very precisely.',
      ],
    ],
  }),
]

const doubleLumen: EducationTopic = {
  slug: 'double-lumen',
  title: { id: 'Alat Double Lumen', en: 'Double Lumen Catheter' },
  summary: {
    id: 'Double Lumen (DL) adalah kateter atau selang khusus yang memiliki dua saluran (lumen) dan dipasang pada pembuluh darah vena besar. Alat ini umumnya digunakan sebagai akses pembuluh darah untuk tindakan hemodialisis atau terapi pengganti fungsi ginjal lainnya. Dua saluran tersebut berfungsi untuk mengalirkan darah dari tubuh menuju mesin dialisis dan mengembalikan darah yang telah melalui proses penyaringan ke dalam tubuh pasien.',
    en: 'A Double Lumen (DL) is a special catheter or tube with two channels (lumens) that is placed in a large vein. It is generally used as blood vessel access for hemodialysis or other kidney replacement therapy. The two channels carry blood from the body to the dialysis machine and return the filtered blood to the patient’s body.',
  },
  image: img('/images/double-lumen.webp', ['Kateter double lumen', 'Double lumen catheter']),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan Double Lumen merupakan tindakan medis yang membantu menyediakan akses pembuluh darah untuk proses hemodialisis atau terapi pengganti fungsi ginjal.',
      'Placing a Double Lumen is a medical procedure that helps provide blood vessel access for hemodialysis or kidney replacement therapy.',
    ]),
    loc([
      'Dukungan keluarga dalam menjaga kebersihan, keamanan kateter, serta mengikuti arahan tenaga medis sangat penting untuk membantu mencegah komplikasi selama perawatan.',
      'Family support in keeping things clean, keeping the catheter safe, and following medical staff directions is very important to help prevent complications during care.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
doubleLumen.sections = [
  sec(['1. Apa itu Double Lumen?', '1. What is a Double Lumen?'], { p: [[doubleLumen.summary.id, doubleLumen.summary.en]] }),
  sec(['2. Mengapa pasien perlu dipasang Double Lumen?', '2. Why does a patient need a Double Lumen?'], {
    p: [['Pemasangan Double Lumen dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'A Double Lumen is placed based on the patient’s condition and medical needs, including:']],
    pts: [
      ['Pasien membutuhkan tindakan hemodialisis.', 'The patient needs hemodialysis.'],
      ['Pasien mengalami gangguan fungsi ginjal yang memerlukan terapi pengganti ginjal.', 'The patient has impaired kidney function that requires kidney replacement therapy.'],
      ['Membutuhkan akses pembuluh darah untuk proses penyaringan darah.', 'Blood vessel access is needed for blood filtering.'],
      ['Membutuhkan terapi dialisis dalam kondisi perawatan intensif.', 'Dialysis therapy is needed during intensive care.'],
      ['Memerlukan akses pembuluh darah khusus sesuai pertimbangan dokter.', 'Special blood vessel access is required based on the doctor’s judgment.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan Double Lumen?', '3. How is a Double Lumen placed?'], {
    p: [
      [
        'Pemasangan Double Lumen dilakukan oleh dokter yang memiliki kompetensi dengan menggunakan prosedur steril. Kateter dimasukkan ke dalam pembuluh darah vena besar, kemudian dilakukan pemeriksaan untuk memastikan posisi kateter sudah tepat dan aman.',
        'A Double Lumen is placed by a competent doctor using a sterile procedure. The catheter is inserted into a large vein, and then a check is done to make sure the catheter is in the correct and safe position.',
      ],
      [
        'Setelah terpasang, kateter akan difiksasi dan ditutup menggunakan balutan steril agar tidak mudah bergeser serta mengurangi risiko infeksi.',
        'Once in place, the catheter is secured and covered with a sterile dressing so it does not shift easily and to reduce the risk of infection.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan Double Lumen?', '4. How is a patient with a Double Lumen cared for?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan Double Lumen:', 'Things to pay attention to while the patient has a Double Lumen:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.'],
      ['Memastikan balutan tetap bersih, kering, dan tidak terbuka.', 'Make sure the dressing stays clean, dry, and closed.'],
      ['Tidak menarik, memegang, atau mengubah posisi selang sendiri.', 'Do not pull, hold, or reposition the tube yourself.'],
      ['Tidak membuka penutup atau sambungan kateter.', 'Do not open the catheter caps or connections.'],
      ['Menghindari tekanan dan tarikan pada area pemasangan.', 'Avoid pressure and pulling on the insertion area.'],
      ['Memastikan perawatan kateter dilakukan oleh tenaga medis sesuai prosedur.', 'Make sure catheter care is done by medical staff according to procedure.'],
      ['Segera melaporkan kepada perawat apabila terjadi perdarahan, pembengkakan, kemerahan, nyeri, atau cairan keluar dari area pemasangan.', 'Report to the nurse right away if there is bleeding, swelling, redness, pain, or fluid coming from the insertion area.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:']],
    pts: [
      ['Double Lumen merupakan akses khusus yang digunakan untuk membantu proses terapi dialisis.', 'A Double Lumen is a special access used to support dialysis therapy.'],
      ['Kateter harus dijaga agar tidak tertarik, bergeser, atau terlepas.', 'The catheter must be protected so it is not pulled, shifted, or dislodged.'],
      ['Keluarga tidak diperbolehkan membuka balutan atau mengatur sambungan kateter sendiri.', 'The family must not open the dressing or adjust the catheter connections themselves.'],
      ['Area pemasangan harus dijaga kebersihannya.', 'The insertion area must be kept clean.'],
      ['Pasien perlu mengikuti anjuran dokter dan perawat selama menggunakan alat.', 'The patient needs to follow the advice of doctors and nurses while using the device.'],
      ['Segera hubungi perawat apabila terdapat keluhan atau perubahan pada area pemasangan.', 'Contact the nurse right away if there are complaints or changes at the insertion area.'],
    ],
  }),
  sec(['6. Kapan Double Lumen dapat dilepas?', '6. When can the Double Lumen be removed?'], {
    p: [[
      'Double Lumen dapat dilepas apabila sudah tidak diperlukan untuk tindakan medis atau terapi dialisis. Keputusan pelepasan dilakukan oleh dokter berdasarkan kondisi dan kebutuhan pasien.',
      'The Double Lumen can be removed when it is no longer needed for medical procedures or dialysis therapy. The decision to remove it is made by the doctor based on the patient’s condition and needs.',
    ]],
  }),
]

const crrt: EducationTopic = {
  slug: 'crrt',
  title: { id: 'Alat CRRT', en: 'CRRT Machine' },
  summary: {
    id: 'CRRT (Continuous Renal Replacement Therapy) adalah terapi pengganti fungsi ginjal yang dilakukan secara terus-menerus dan bertahap menggunakan mesin khusus. Terapi ini digunakan untuk membantu pasien dengan gangguan fungsi ginjal berat, terutama pasien dalam kondisi kritis yang dirawat di ruang ICU.',
    en: 'CRRT (Continuous Renal Replacement Therapy) is a kidney replacement therapy carried out continuously and gradually using a special machine. It is used to help patients with severe kidney impairment, especially critically ill patients treated in the ICU.',
  },
  image: img('/images/crrt.webp', ['Mesin CRRT di Ruang ICU', 'CRRT machine in the ICU']),
  sections: [],
  importantMessage: [
    loc([
      'CRRT merupakan salah satu terapi pengganti fungsi ginjal yang membantu membuang zat sisa metabolisme dan kelebihan cairan dari tubuh pasien secara bertahap dan berkelanjutan.',
      'CRRT is a kidney replacement therapy that helps remove metabolic waste and excess fluid from the patient’s body gradually and continuously.',
    ]),
    loc([
      'Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat penting selama proses perawatan berlangsung.',
      'Family support, calmness, and cooperation with doctors and nurses are very important throughout the care process.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
crrt.sections = [
  sec(['1. Apa itu CRRT?', '1. What is CRRT?'], {
    p: [
      [crrt.summary.id, crrt.summary.en],
      [
        'CRRT bekerja dengan menyaring darah untuk membuang zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh.',
        'CRRT works by filtering the blood to remove metabolic waste and excess fluid, and helps maintain the body’s electrolyte balance.',
      ],
    ],
  }),
  sec(['2. Mengapa pasien perlu menggunakan CRRT?', '2. Why does a patient need CRRT?'], {
    p: [['Penggunaan CRRT dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'CRRT is used based on the patient’s condition and medical needs, including:']],
    pts: [
      ['Pasien mengalami gangguan fungsi ginjal berat.', 'The patient has severe kidney impairment.'],
      ['Terjadi penumpukan cairan berlebih dalam tubuh.', 'Excess fluid has built up in the body.'],
      ['Terjadi peningkatan zat sisa metabolisme dalam darah.', 'Metabolic waste in the blood has increased.'],
      ['Pasien mengalami gangguan keseimbangan elektrolit.', 'The patient has an electrolyte imbalance.'],
      ['Pasien dalam kondisi kritis yang membutuhkan terapi pengganti fungsi ginjal secara bertahap dan berkelanjutan.', 'The patient is critically ill and needs gradual, continuous kidney replacement therapy.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan dan penggunaan CRRT?', '3. How is CRRT set up and used?'], {
    p: [
      [
        'Terapi CRRT dilakukan melalui akses kateter khusus pada pembuluh darah besar (biasanya Double Lumen). Kateter tersebut dihubungkan dengan selang mesin CRRT untuk mengalirkan darah menuju filter penyaring dan mengembalikannya ke tubuh pasien.',
        'CRRT is given through a special catheter in a large blood vessel (usually a Double Lumen). The catheter is connected to the CRRT machine tubing to carry blood to the filter and return it to the patient’s body.',
      ],
      [
        'Selama terapi berlangsung, mesin akan bekerja secara berkelanjutan sesuai pengaturan dokter. Kondisi pasien, tekanan darah, keseimbangan cairan, dan parameter lainnya akan dipantau secara berkala oleh tenaga medis.',
        'During therapy, the machine runs continuously according to the doctor’s settings. The patient’s condition, blood pressure, fluid balance, and other parameters are monitored regularly by medical staff.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien selama menggunakan CRRT?', '4. How is a patient cared for during CRRT?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menjalani terapi CRRT:', 'Things to pay attention to while the patient is on CRRT:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.'],
      ['Tidak menarik atau mengubah posisi selang CRRT.', 'Do not pull or reposition the CRRT tubing.'],
      ['Menjaga agar sambungan selang dan kateter tetap aman.', 'Keep the tubing and catheter connections secure.'],
      ['Tidak menyentuh pengaturan mesin tanpa izin petugas.', 'Do not touch the machine settings without staff permission.'],
      ['Memastikan pasien mendapatkan pemantauan secara berkala.', 'Make sure the patient is monitored regularly.'],
      ['Segera melaporkan kepada perawat apabila alarm mesin berbunyi atau terdapat perubahan kondisi pasien.', 'Report to the nurse right away if the machine alarm sounds or the patient’s condition changes.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:']],
    pts: [
      ['CRRT merupakan terapi untuk membantu fungsi ginjal pasien dalam membuang zat sisa dan kelebihan cairan.', 'CRRT is a therapy that supports the patient’s kidney function in removing waste and excess fluid.'],
      ['Terapi dilakukan secara terus-menerus sesuai kebutuhan dan kondisi pasien.', 'The therapy runs continuously according to the patient’s needs and condition.'],
      ['Selama terapi berlangsung, pasien membutuhkan pemantauan ketat oleh tenaga medis.', 'During therapy, the patient needs close monitoring by medical staff.'],
      ['Keluarga tidak diperbolehkan menyentuh, mengatur, atau menghentikan mesin CRRT sendiri.', 'The family must not touch, adjust, or stop the CRRT machine themselves.'],
      ['Keluarga tidak diperbolehkan menarik atau memegang kateter dan selang terapi.', 'The family must not pull or hold the catheter and therapy tubing.'],
      ['Keluarga dapat memberikan dukungan emosional kepada pasien selama menjalani perawatan.', 'The family can give the patient emotional support during care.'],
    ],
  }),
  sec(['6. Kapan terapi CRRT dapat dihentikan?', '6. When can CRRT be stopped?'], {
    p: [[
      'Terapi CRRT dapat dihentikan apabila kondisi pasien sudah membaik atau tidak lagi membutuhkan terapi tersebut. Dokter akan melakukan evaluasi terhadap fungsi ginjal, keseimbangan cairan, kondisi elektrolit, dan keadaan umum pasien sebelum memutuskan penghentian terapi.',
      'CRRT can be stopped when the patient’s condition has improved or the therapy is no longer needed. The doctor will evaluate kidney function, fluid balance, electrolytes, and the patient’s general condition before deciding to stop therapy.',
    ]],
  }),
]

const hemodialisa: EducationTopic = {
  slug: 'hemodialisa',
  title: { id: 'Alat Hemodialisa', en: 'Hemodialysis Machine' },
  summary: {
    id: 'Hemodialisa (HD) adalah suatu prosedur medis yang bertujuan membantu menggantikan sebagian fungsi ginjal dengan menggunakan mesin khusus. Proses ini dilakukan untuk menyaring darah dari zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh.',
    en: 'Hemodialysis (HD) is a medical procedure that helps replace part of the kidney’s function using a special machine. It filters metabolic waste and excess fluid from the blood and helps maintain the body’s electrolyte balance.',
  },
  image: img('/images/hemodialisa.webp', ['Mesin hemodialisa di Ruang ICU', 'Hemodialysis machine in the ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Hemodialisa merupakan terapi yang membantu membersihkan darah dari zat sisa metabolisme dan kelebihan cairan ketika fungsi ginjal mengalami gangguan.',
      'Hemodialysis is a therapy that helps clean the blood of metabolic waste and excess fluid when kidney function is impaired.',
    ]),
    loc([
      'Dukungan keluarga, kepatuhan terhadap anjuran medis, serta kerja sama dengan dokter dan perawat sangat penting dalam menunjang keberhasilan perawatan pasien.',
      'Family support, following medical advice, and cooperation with doctors and nurses are very important for successful patient care.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
hemodialisa.sections = [
  sec(['1. Apa itu Hemodialisa?', '1. What is hemodialysis?'], {
    p: [
      [hemodialisa.summary.id, hemodialisa.summary.en],
      [
        'Darah pasien dialirkan menuju mesin melalui akses pembuluh darah, kemudian melewati filter khusus (dialyzer) untuk proses penyaringan sebelum dikembalikan ke tubuh pasien.',
        'The patient’s blood flows to the machine through a blood vessel access, then passes through a special filter (dialyzer) to be cleaned before it is returned to the patient’s body.',
      ],
    ],
  }),
  sec(['2. Mengapa pasien perlu menjalani Hemodialisa?', '2. Why does a patient need hemodialysis?'], {
    p: [['Hemodialisa dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'Hemodialysis is performed based on the patient’s condition and medical needs, including:']],
    pts: [
      ['Pasien mengalami gangguan fungsi ginjal berat.', 'The patient has severe kidney impairment.'],
      ['Terjadi penumpukan zat sisa metabolisme dalam darah.', 'Metabolic waste has built up in the blood.'],
      ['Terdapat kelebihan cairan dalam tubuh.', 'There is excess fluid in the body.'],
      ['Terjadi gangguan keseimbangan elektrolit.', 'There is an electrolyte imbalance.'],
      ['Pasien membutuhkan terapi pengganti fungsi ginjal sesuai anjuran dokter.', 'The patient needs kidney replacement therapy as recommended by the doctor.'],
    ],
  }),
  sec(['3. Bagaimana proses penggunaan alat Hemodialisa?', '3. How is the hemodialysis machine used?'], {
    p: [
      [
        'Prosedur hemodialisa dilakukan oleh tenaga medis yang terlatih. Sebelum tindakan, tenaga medis akan memeriksa kondisi pasien dan menyiapkan akses pembuluh darah, seperti AV fistula atau kateter Double Lumen sesuai kebutuhan.',
        'Hemodialysis is performed by trained medical staff. Before the procedure, staff check the patient’s condition and prepare blood vessel access, such as an AV fistula or a Double Lumen catheter as needed.',
      ],
      [
        'Darah pasien kemudian dialirkan melalui selang menuju mesin hemodialisa dan melewati filter khusus (dialyzer). Setelah proses penyaringan, darah akan dikembalikan ke dalam tubuh pasien.',
        'The patient’s blood then flows through tubing to the hemodialysis machine and passes through a special filter (dialyzer). After filtering, the blood is returned to the patient’s body.',
      ],
      [
        'Selama tindakan berlangsung, kondisi pasien seperti tekanan darah, denyut jantung, dan kondisi umum akan dipantau oleh tenaga medis.',
        'During the procedure, the patient’s condition, such as blood pressure, heart rate, and general condition, is monitored by medical staff.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien selama menjalani Hemodialisa?', '4. How is a patient cared for during hemodialysis?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menjalani terapi:', 'Things to pay attention to while the patient is undergoing therapy:']],
    pts: [
      ['Menjaga kebersihan area akses pembuluh darah.', 'Keep the blood vessel access area clean.'],
      ['Tidak menarik atau mengubah posisi selang dan kateter.', 'Do not pull or reposition the tubing and catheter.'],
      ['Menjaga area pemasangan kateter agar tetap bersih dan kering.', 'Keep the catheter insertion area clean and dry.'],
      ['Mematuhi anjuran pembatasan cairan apabila direkomendasikan dokter.', 'Follow fluid restriction advice if recommended by the doctor.'],
      ['Mengikuti pengaturan pola makan sesuai anjuran tenaga medis.', 'Follow the diet plan advised by medical staff.'],
      ['Segera melaporkan kepada perawat apabila pasien mengalami pusing, mual, kram, perdarahan, atau keluhan lainnya.', 'Report to the nurse right away if the patient feels dizzy, nauseous, has cramps, bleeding, or other complaints.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:']],
    pts: [
      ['Hemodialisa merupakan terapi yang membantu menggantikan sebagian fungsi ginjal.', 'Hemodialysis is a therapy that helps replace part of the kidney’s function.'],
      ['Lama dan frekuensi tindakan disesuaikan dengan kondisi pasien.', 'The duration and frequency of treatment are adjusted to the patient’s condition.'],
      ['Selama proses terapi, pasien membutuhkan pemantauan oleh tenaga medis.', 'During therapy, the patient needs monitoring by medical staff.'],
      ['Keluarga tidak diperbolehkan menyentuh, menarik, atau mengatur selang dan kateter hemodialisa.', 'The family must not touch, pull, or adjust the hemodialysis tubing and catheter.'],
      ['Keluarga perlu mendukung pasien dalam mengikuti anjuran dokter.', 'The family should support the patient in following the doctor’s advice.'],
      ['Segera laporkan kepada perawat apabila terdapat perubahan kondisi pasien selama tindakan berlangsung.', 'Report to the nurse right away if the patient’s condition changes during the procedure.'],
    ],
  }),
  sec(['6. Kapan terapi Hemodialisa dapat dihentikan?', '6. When can hemodialysis be stopped?'], {
    p: [[
      'Penghentian terapi hemodialisa ditentukan oleh dokter berdasarkan kondisi dan perkembangan fungsi ginjal pasien. Pada pasien dengan gangguan ginjal kronis, hemodialisa mungkin diperlukan secara rutin dalam jangka panjang. Sementara itu, pada kondisi gangguan ginjal akut, terapi dapat dihentikan apabila fungsi ginjal sudah membaik dan pasien tidak lagi membutuhkan dialisis.',
      'The decision to stop hemodialysis is made by the doctor based on the patient’s condition and the progress of kidney function. Patients with chronic kidney disease may need hemodialysis regularly over the long term. In acute kidney impairment, therapy can be stopped once kidney function has improved and the patient no longer needs dialysis.',
    ]],
  }),
]

const ett: EducationTopic = {
  slug: 'ett',
  title: { id: 'Alat ETT', en: 'ETT (Endotracheal Tube)' },
  summary: {
    id: 'ETT (Endotracheal Tube) adalah selang khusus yang dimasukkan melalui mulut menuju saluran pernapasan (trakea). Alat ini digunakan untuk membantu pasien bernapas ketika pasien tidak mampu bernapas secara optimal atau membutuhkan bantuan alat ventilator.',
    en: 'An ETT (Endotracheal Tube) is a special tube inserted through the mouth into the airway (trachea). It is used to help the patient breathe when they cannot breathe adequately or need support from a ventilator.',
  },
  image: img('/images/ett.webp', ['Selang ETT (endotracheal tube)', 'ETT (endotracheal tube)']),
  illustration: img('/images/ett-ilustrasi.webp', [
    'Ilustrasi intubasi: selang endotrakeal dimasukkan melalui mulut ke trakea dengan bantuan laringoskop, panah menunjukkan aliran udara',
    'Intubation illustration: an endotracheal tube inserted through the mouth into the trachea with a laryngoscope, arrows showing the airflow',
  ]),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan ETT merupakan salah satu tindakan medis untuk membantu memenuhi kebutuhan pernapasan pasien. Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat penting dalam proses perawatan pasien.',
      'Placing an ETT is a medical procedure that helps meet the patient’s breathing needs. Family support, calmness, and cooperation with doctors and nurses are very important in the patient’s care.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
ett.sections = [
  sec(['1. Apa itu ETT?', '1. What is an ETT?'], { p: [[ett.summary.id, ett.summary.en]] }),
  sec(['2. Mengapa ETT perlu dipasang?', '2. Why does an ETT need to be placed?'], {
    p: [['Pemasangan ETT dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'An ETT is placed based on the patient’s condition and medical needs, including:']],
    pts: [
      ['Pasien mengalami kesulitan bernapas.', 'The patient has difficulty breathing.'],
      ['Pasien membutuhkan bantuan ventilator.', 'The patient needs ventilator support.'],
      ['Pasien tidak mampu mempertahankan jalan napas dengan baik.', 'The patient cannot keep their airway open properly.'],
      ['Pasien mengalami penurunan kesadaran sehingga perlindungan jalan napas terganggu.', 'The patient has decreased consciousness, so airway protection is impaired.'],
      ['Pasien membutuhkan dukungan pernapasan secara intensif.', 'The patient needs intensive breathing support.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan ETT?', '3. How is an ETT placed?'], {
    p: [
      [
        'Pemasangan ETT dilakukan oleh dokter atau tenaga medis yang memiliki kompetensi dengan prosedur medis yang sesuai. Selama proses pemasangan, kondisi pernapasan dan tanda-tanda vital pasien akan dipantau secara ketat.',
        'An ETT is placed by a doctor or competent medical staff following the proper medical procedure. During placement, the patient’s breathing and vital signs are closely monitored.',
      ],
      [
        'Setelah terpasang, selang ETT akan dihubungkan dengan alat bantu napas (ventilator) apabila diperlukan.',
        'Once in place, the ETT is connected to a breathing machine (ventilator) if needed.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan ETT?', '4. How is a patient with an ETT cared for?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan ETT:', 'Things to pay attention to while the patient has an ETT:']],
    pts: [
      ['Menjaga kebersihan area mulut dan selang ETT.', 'Keep the mouth area and the ETT clean.'],
      ['Tidak menarik, menggeser, atau memegang selang ETT tanpa arahan petugas.', 'Do not pull, move, or hold the ETT without staff directions.'],
      ['Memastikan posisi selang tetap aman sesuai pengawasan tenaga medis.', 'Make sure the tube stays in a safe position under medical staff supervision.'],
      ['Melakukan perawatan mulut secara berkala oleh petugas.', 'Mouth care is done regularly by staff.'],
      ['Mematuhi anjuran dan instruksi dokter serta perawat.', 'Follow the advice and instructions of doctors and nurses.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami bahwa:', 'The patient’s family should understand that:']],
    pts: [
      ['Pasien yang menggunakan ETT umumnya tidak dapat berbicara seperti biasa karena adanya selang pada saluran pernapasan.', 'Patients with an ETT generally cannot speak as usual because of the tube in their airway.'],
      ['Pasien tetap dapat mendengar suara keluarga, meskipun kemampuan merespons dapat berbeda-beda.', 'Patients can still hear their family’s voices, although their ability to respond may vary.'],
      ['Jangan memberikan makanan atau minuman melalui mulut selama ETT terpasang, kecuali atas instruksi tenaga medis.', 'Do not give food or drink by mouth while the ETT is in place, unless instructed by medical staff.'],
      ['Keluarga tidak diperbolehkan mengatur atau melepas selang ETT sendiri.', 'The family must not adjust or remove the ETT themselves.'],
      ['Segera laporkan kepada perawat apabila melihat selang bergeser, alarm berbunyi, atau terdapat perubahan kondisi pasien.', 'Report to the nurse right away if you see the tube shift, an alarm sounds, or the patient’s condition changes.'],
    ],
  }),
  sec(['6. Apakah ETT bisa dilepas?', '6. Can the ETT be removed?'], {
    p: [[
      'ETT dapat dilepas apabila kondisi pasien sudah membaik dan mampu bernapas secara mandiri dengan aman. Keputusan pelepasan ETT dilakukan oleh dokter berdasarkan hasil evaluasi kondisi pasien.',
      'The ETT can be removed once the patient’s condition has improved and they can breathe on their own safely. The decision to remove the ETT is made by the doctor based on an evaluation of the patient’s condition.',
    ]],
  }),
]

const ventilator: EducationTopic = {
  slug: 'ventilator',
  title: { id: 'Alat Ventilator', en: 'Ventilator' },
  summary: {
    id: 'Ventilator adalah alat bantu pernapasan yang digunakan untuk membantu atau mengambil alih sementara fungsi pernapasan pasien yang mengalami gangguan pernapasan. Alat ini membantu memasukkan oksigen ke dalam paru-paru dan mengeluarkan karbon dioksida dari tubuh sehingga kebutuhan oksigen pasien dapat terpenuhi.',
    en: 'A ventilator is a breathing support device used to assist or temporarily take over the breathing of a patient with breathing problems. It helps move oxygen into the lungs and remove carbon dioxide from the body so the patient’s oxygen needs are met.',
  },
  image: img('/images/ventilator.webp', ['Alat ventilator di Ruang ICU', 'Ventilator in the ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Ventilator merupakan alat bantu pernapasan yang berperan penting dalam mendukung kebutuhan oksigen pasien selama menjalani perawatan intensif.',
      'A ventilator is a breathing support device that plays an important role in meeting the patient’s oxygen needs during intensive care.',
    ]),
    loc([
      'Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat membantu proses perawatan pasien.',
      'Family support, calmness, and cooperation with doctors and nurses greatly help the patient’s care.',
    ]),
    loc([
      'Jangan ragu untuk bertanya kepada dokter atau perawat apabila terdapat hal yang belum dipahami.',
      'Do not hesitate to ask the doctor or nurse if there is anything you do not yet understand.',
    ]),
  ],
  complete: true,
}
ventilator.sections = [
  sec(['1. Apa itu Ventilator?', '1. What is a ventilator?'], { p: [[ventilator.summary.id, ventilator.summary.en]] }),
  sec(['2. Mengapa pasien perlu menggunakan Ventilator?', '2. Why does a patient need a ventilator?'], {
    p: [['Penggunaan ventilator dilakukan berdasarkan kondisi dan kebutuhan medis pasien, seperti:', 'A ventilator is used based on the patient’s condition and medical needs, such as:']],
    pts: [
      ['Pasien mengalami kesulitan bernapas berat.', 'The patient has severe difficulty breathing.'],
      ['Pasien mengalami kekurangan oksigen.', 'The patient lacks oxygen.'],
      ['Pasien tidak mampu bernapas secara mandiri dengan baik.', 'The patient cannot breathe well on their own.'],
      ['Pasien mengalami penurunan kesadaran yang memengaruhi kemampuan bernapas.', 'The patient has decreased consciousness that affects their ability to breathe.'],
      ['Pasien membutuhkan bantuan pernapasan selama menjalani perawatan intensif.', 'The patient needs breathing support during intensive care.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan Ventilator?', '3. How is a ventilator set up?'], {
    p: [
      [
        'Ventilator dipasang oleh tenaga medis sesuai kondisi pasien. Pada pasien yang membutuhkan bantuan napas melalui ETT, selang pernapasan akan dihubungkan dengan ventilator.',
        'A ventilator is set up by medical staff according to the patient’s condition. For patients who need breathing support through an ETT, the breathing tube is connected to the ventilator.',
      ],
      [
        'Setelah terpasang, tenaga medis akan mengatur bantuan pernapasan sesuai kebutuhan pasien dan melakukan pemantauan secara berkala terhadap kondisi pernapasan serta tanda-tanda vital.',
        'Once connected, medical staff adjust the breathing support to the patient’s needs and regularly monitor breathing and vital signs.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien yang menggunakan Ventilator?', '4. How is a patient on a ventilator cared for?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan ventilator:', 'Things to pay attention to while the patient is on a ventilator:']],
    pts: [
      ['Menjaga kebersihan lingkungan dan area sekitar pasien.', 'Keep the environment and the area around the patient clean.'],
      ['Tidak menyentuh, menarik, atau mengubah posisi selang dan kabel ventilator.', 'Do not touch, pull, or reposition the ventilator tubing and cables.'],
      ['Menjaga posisi selang agar tetap aman sesuai arahan petugas.', 'Keep the tubing in a safe position as directed by staff.'],
      ['Melakukan perawatan mulut dan saluran pernapasan sesuai prosedur.', 'Mouth and airway care is done according to procedure.'],
      ['Memastikan pasien mendapatkan pemantauan secara berkala oleh tenaga medis.', 'Make sure the patient is monitored regularly by medical staff.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien perlu memahami beberapa hal berikut:', 'The patient’s family needs to understand the following:']],
    pts: [
      ['Pasien yang menggunakan ventilator melalui ETT umumnya belum dapat berbicara seperti biasa.', 'Patients on a ventilator through an ETT generally cannot yet speak as usual.'],
      ['Pasien mungkin membutuhkan bantuan ventilator selama beberapa waktu, tergantung perkembangan kondisinya.', 'The patient may need ventilator support for some time, depending on how their condition develops.'],
      ['Keluarga tidak diperbolehkan melepas atau mengatur alat ventilator sendiri.', 'The family must not disconnect or adjust the ventilator themselves.'],
      ['Jangan memberikan makanan atau minuman melalui mulut tanpa persetujuan tenaga medis.', 'Do not give food or drink by mouth without the approval of medical staff.'],
      ['Keluarga dapat memberikan dukungan emosional dengan berbicara secara tenang kepada pasien.', 'The family can give emotional support by speaking calmly to the patient.'],
      ['Segera laporkan kepada perawat apabila alarm ventilator berbunyi atau terlihat perubahan kondisi pasien.', 'Report to the nurse right away if the ventilator alarm sounds or you notice a change in the patient’s condition.'],
    ],
  }),
  sec(['6. Kapan Ventilator dapat dilepas?', '6. When can the ventilator be removed?'], {
    p: [[
      'Ventilator dapat dihentikan secara bertahap apabila kondisi pasien sudah membaik dan mampu bernapas secara mandiri dengan aman. Dokter akan melakukan evaluasi kemampuan bernapas pasien sebelum memutuskan penghentian bantuan ventilator dan, jika pasien menggunakan ETT, pelepasan selang pernapasan.',
      'Ventilator support can be stopped gradually once the patient’s condition has improved and they can breathe on their own safely. The doctor will evaluate the patient’s breathing ability before deciding to stop ventilator support and, if the patient has an ETT, to remove the breathing tube.',
    ]],
  }),
]

const cvp: EducationTopic = {
  slug: 'cvp',
  title: { id: 'Alat CVP', en: 'CVP (Central Venous Pressure) Line' },
  summary: {
    id: 'CVP (Central Venous Pressure) adalah prosedur pemasangan kateter atau selang khusus ke dalam pembuluh darah vena besar yang berada di dekat jantung. Alat ini digunakan untuk membantu pemantauan tekanan vena sentral, pemberian cairan, obat-obatan tertentu, serta mendukung perawatan pasien dengan kondisi kritis.',
    en: 'CVP (Central Venous Pressure) is a procedure in which a special catheter or tube is placed into a large vein near the heart. It is used to help monitor central venous pressure, give fluids and certain medicines, and support the care of critically ill patients.',
  },
  image: img('/images/cvp.webp', ['Kateter CVP', 'CVP catheter']),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan CVP merupakan salah satu tindakan medis yang membantu pemantauan kondisi pasien serta pemberian terapi selama menjalani perawatan intensif.',
      'Placing a CVP line is a medical procedure that helps monitor the patient’s condition and deliver therapy during intensive care.',
    ]),
    loc([
      'Kerja sama keluarga dalam menjaga keamanan alat, memperhatikan kebersihan, dan mengikuti arahan petugas sangat penting untuk mencegah terjadinya komplikasi.',
      'The family’s cooperation in keeping the device safe, paying attention to cleanliness, and following staff directions is very important to prevent complications.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
cvp.sections = [
  sec(['1. Apa itu CVP?', '1. What is a CVP?'], { p: [[cvp.summary.id, cvp.summary.en]] }),
  sec(['2. Mengapa pasien perlu dipasang CVP?', '2. Why does a patient need a CVP?'], {
    p: [['Pemasangan CVP dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'A CVP is placed based on the patient’s condition and medical needs, including:']],
    pts: [
      ['Membutuhkan pemantauan tekanan vena sentral.', 'Central venous pressure needs to be monitored.'],
      ['Membutuhkan akses pembuluh darah untuk pemberian obat-obatan tertentu.', 'Blood vessel access is needed to give certain medicines.'],
      ['Membutuhkan pemberian cairan melalui pembuluh darah besar.', 'Fluids need to be given through a large blood vessel.'],
      ['Memerlukan akses pembuluh darah dalam perawatan intensif.', 'Blood vessel access is required during intensive care.'],
      ['Mengalami kondisi kritis yang membutuhkan pemantauan dan penanganan khusus.', 'The patient is in a critical condition that needs special monitoring and treatment.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan CVP?', '3. How is a CVP placed?'], {
    p: [
      [
        'Pemasangan CVP dilakukan oleh dokter atau tenaga medis yang memiliki kompetensi dengan memperhatikan prosedur steril. Kateter dimasukkan ke dalam pembuluh darah vena besar, kemudian dipastikan posisinya sesuai sebelum digunakan.',
        'A CVP is placed by a doctor or competent medical staff following sterile procedure. The catheter is inserted into a large vein, and its position is confirmed before use.',
      ],
      [
        'Setelah terpasang, kateter akan difiksasi agar tidak mudah bergeser dan dapat dihubungkan dengan alat pemantauan atau jalur pemberian cairan dan obat sesuai kebutuhan pasien.',
        'Once in place, the catheter is secured so it does not shift easily, and it can be connected to monitoring equipment or to lines for fluids and medicines as the patient needs.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan CVP?', '4. How is a patient with a CVP cared for?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan CVP:', 'Things to pay attention to while the patient has a CVP:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.'],
      ['Menjaga balutan CVP agar tetap bersih, kering, dan tidak terbuka.', 'Keep the CVP dressing clean, dry, and closed.'],
      ['Tidak menarik, memegang, atau mengubah posisi selang CVP sendiri.', 'Do not pull, hold, or reposition the CVP tube yourself.'],
      ['Menghindari tekanan atau tarikan pada area pemasangan.', 'Avoid pressure or pulling on the insertion area.'],
      ['Memastikan perawatan dan penggantian balutan dilakukan oleh petugas sesuai prosedur.', 'Make sure care and dressing changes are done by staff according to procedure.'],
      ['Segera melaporkan kepada perawat apabila area pemasangan terlihat kemerahan, bengkak, berdarah, atau terdapat cairan yang keluar.', 'Report to the nurse right away if the insertion area looks red, swollen, is bleeding, or has fluid coming out.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?'], {
    p: [['Keluarga pasien diharapkan memahami bahwa:', 'The patient’s family should understand that:']],
    pts: [
      ['CVP merupakan alat medis yang membantu pemantauan dan pemberian terapi kepada pasien.', 'A CVP is a medical device that helps with monitoring and giving therapy to the patient.'],
      ['Selang CVP harus dijaga agar tidak tertarik atau terlepas.', 'The CVP tube must be protected so it is not pulled or dislodged.'],
      ['Keluarga tidak diperbolehkan membuka balutan atau mengatur jalur CVP sendiri.', 'The family must not open the dressing or adjust the CVP line themselves.'],
      ['Pasien perlu mendapatkan pengawasan selama menggunakan CVP.', 'The patient needs supervision while the CVP is in place.'],
      ['Keluarga dapat membantu menjaga kebersihan dan kenyamanan pasien.', 'The family can help keep the patient clean and comfortable.'],
      ['Segera hubungi perawat apabila terdapat keluhan atau perubahan pada area pemasangan CVP.', 'Contact the nurse right away if there are complaints or changes at the CVP insertion area.'],
    ],
  }),
  sec(['6. Kapan CVP dapat dilepas?', '6. When can the CVP be removed?'], {
    p: [[
      'CVP dapat dilepas apabila sudah tidak diperlukan berdasarkan kondisi dan kebutuhan medis pasien. Keputusan pelepasan dilakukan oleh dokter atau tenaga medis yang berwenang setelah melakukan evaluasi terhadap kondisi pasien.',
      'The CVP can be removed when it is no longer needed based on the patient’s condition and medical needs. The decision to remove it is made by the doctor or authorized medical staff after evaluating the patient’s condition.',
    ]],
  }),
]

export const educationTopics: EducationTopic[] = [
  masukIcu,
  defibrilator,
  syringePump,
  doubleLumen,
  crrt,
  hemodialisa,
  ett,
  ventilator,
  cvp,
]

export const getTopic = (slug: string) => educationTopics.find((t) => t.slug === slug)
