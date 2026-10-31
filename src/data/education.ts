import type { EducationSection, EducationTopic, Localized } from './types'

// Source: "data FASILITAS DAN EDUKASI RS.docx" (family education material), Syringe Pump from the design PDFs.
type Pair = [id: string, en: string, jv?: string]

const loc = ([id, en, jv]: Pair): Localized => ({ id, en, jv })

function sec(heading: Pair, body: { p?: Pair[]; pts?: Pair[]; note?: Pair } = {}): EducationSection {
  return {
    heading: loc(heading),
    paragraphs: body.p?.map(loc),
    points: body.pts && {
      id: body.pts.map((x) => x[0]),
      en: body.pts.map((x) => x[1]),
      jv: body.pts.map((x) => x[2] ?? x[0]),
    },
    note: body.note && loc(body.note),
  }
}

const img = (src: string, alt: Pair) => ({ src, alt: loc(alt) })

const ASK: Pair = [
  'Jangan ragu bertanya kepada dokter atau perawat apabila ada hal yang belum dipahami.',
  'Do not hesitate to ask the doctor or nurse if there is anything you do not yet understand.',
  'Sampun mamang nyuwun pirsa dhateng dokter utawi perawat menawi wonten bab ingkang dereng dipunmangertosi.',
]

export interface VisitSlot {
  label: Localized
  time: string
}

/** ICU visiting schedule from the "Edukasi masuk ICU" material. */
export const icuVisitSchedule: { title: Localized; slots: VisitSlot[] } = {
  title: { id: 'Jadwal Kunjungan Pasien ICU', en: 'ICU Patient Visiting Hours', jv: 'Jadwal Tuwi Pasien ICU' },
  slots: [
    { label: { id: 'Siang', en: 'Midday', jv: 'Siang' }, time: '11.00–13.00 WIB' },
    { label: { id: 'Malam', en: 'Evening', jv: 'Dalu' }, time: '17.00–19.00 WIB' },
  ],
}

/** Index of the masuk-icu section that shows the visiting schedule. */
export const VISIT_SCHEDULE_SECTION = 3

const masukIcu: EducationTopic = {
  slug: 'masuk-icu',
  title: { id: 'Edukasi Masuk Ruang ICU', en: 'Education on Entering the ICU', jv: 'Edukasi Mlebet Ruang ICU' },
  summary: {
    id: 'ICU (Intensive Care Unit) adalah ruang perawatan intensif khusus bagi pasien dengan kondisi kritis atau membutuhkan pengawasan dan penanganan medis secara ketat. Pasien akan mendapatkan pemantauan selama 24 jam oleh dokter, perawat, dan tenaga kesehatan lainnya dengan bantuan peralatan medis sesuai kebutuhan.',
    en: 'The ICU (Intensive Care Unit) is a special intensive care room for patients in critical condition or who need close medical supervision and treatment. Patients are monitored 24 hours a day by doctors, nurses, and other healthcare workers, with the help of medical equipment as needed.',
    jv: 'ICU (Intensive Care Unit) inggih menika ruang perawatan intensif mligi kangge pasien kanthi kawontenan kritis utawi ingkang mbetahaken pengawasan saha penanganan medis kanthi ketat. Pasien badhe pikantuk pemantauan salebetipun 24 jam dening dokter, perawat, lan tenaga kesehatan sanesipun kanthi bantuan peralatan medis miturut kabetahan.',
  },
  image: img('/images/ruang-tunggu.webp', ['Ruang tunggu keluarga pasien ICU', 'ICU family waiting room', 'Ruang tengga kulawarga pasien ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Perawatan di ruang ICU bertujuan memberikan pelayanan dan pemantauan intensif sesuai kondisi pasien.',
      'Care in the ICU aims to provide intensive service and monitoring according to the patient’s condition.',
      'Perawatan wonten ing ruang ICU ancasipun maringi pelayanan saha pemantauan intensif miturut kawontenan pasien.',
    ]),
    loc([
      'Kami mengharapkan kerja sama keluarga dalam mematuhi jadwal kunjungan, menjaga kebersihan, serta mengikuti seluruh tata tertib yang berlaku di ruang ICU.',
      'We ask for the family’s cooperation in following the visiting schedule, maintaining cleanliness, and following all rules that apply in the ICU.',
      'Kula sedaya ngajab kerja sama kulawarga anggenipun netepi jadwal tuwi, njagi kabersihan, saha netepi sedaya tata tertib ingkang lumampah wonten ing ruang ICU.',
    ]),
    loc([
      'Kepatuhan terhadap peraturan merupakan bagian penting dalam menjaga keselamatan pasien dan mencegah risiko infeksi selama perawatan.',
      'Following the rules is an important part of keeping patients safe and preventing the risk of infection during care.',
      'Netepi peraturan menika perangan ingkang wigati kangge njagi keslametan pasien lan nyegah risiko infeksi salebetipun perawatan.',
    ]),
  ],
  complete: true,
}
masukIcu.sections = [
  sec(['1. Apa itu ICU?', '1. What is the ICU?', '1. Menapa menika ICU?'], { p: [[masukIcu.summary.id, masukIcu.summary.en, masukIcu.summary.jv]] }),
  sec(['2. Mengapa pasien harus dirawat di ICU?', '2. Why does a patient need to be treated in the ICU?', '2. Kenging menapa pasien kedah dipunrawat wonten ing ICU?'], {
    p: [['Pasien dirawat di ruang ICU berdasarkan kondisi dan kebutuhan medis, antara lain:', 'Patients are treated in the ICU based on their condition and medical needs, including:', 'Pasien dipunrawat wonten ing ruang ICU adhedhasar kawontenan lan kabetahan medis, ing antawisipun:']],
    pts: [
      ['Mengalami gangguan pernapasan.', 'Breathing problems.', 'Ngalami gangguan pernapasan.'],
      ['Mengalami gangguan fungsi jantung dan peredaran darah.', 'Problems with heart function and blood circulation.', 'Ngalami gangguan fungsi jantung lan peredaran darah.'],
      ['Mengalami penurunan kesadaran.', 'Decreased consciousness.', 'Ngalami penurunan kesadaran.'],
      ['Membutuhkan pemantauan tanda-tanda vital secara intensif.', 'Needing intensive monitoring of vital signs.', 'Mbetahaken pemantauan tanda-tanda vital kanthi intensif.'],
      ['Mengalami gangguan fungsi organ yang membutuhkan penanganan khusus.', 'Organ function problems that need special treatment.', 'Ngalami gangguan fungsi organ ingkang mbetahaken penanganan mligi.'],
      ['Membutuhkan perawatan intensif setelah tindakan medis atau operasi tertentu.', 'Needing intensive care after certain medical procedures or surgery.', 'Mbetahaken perawatan intensif sasampunipun tindakan medis utawi operasi tartamtu.'],
    ],
  }),
  sec(['3. Bagaimana pelayanan pasien selama di ICU?', '3. What care do patients receive in the ICU?', '3. Kados pundi pelayanan pasien salebetipun wonten ing ICU?'], {
    p: [['Selama menjalani perawatan di ICU, pasien akan mendapatkan:', 'While being treated in the ICU, patients will receive:', 'Salebetipun nglampahi perawatan wonten ing ICU, pasien badhe pikantuk:']],
    pts: [
      ['Pemantauan kondisi pasien selama 24 jam.', 'Monitoring of their condition 24 hours a day.', 'Pemantauan kawontenan pasien salebetipun 24 jam.'],
      ['Pemantauan tekanan darah, denyut jantung, pernapasan, dan kadar oksigen.', 'Monitoring of blood pressure, heart rate, breathing, and oxygen levels.', 'Pemantauan tekanan darah, denyut jantung, pernapasan, lan kadar oksigen.'],
      ['Pemberian obat-obatan dan cairan sesuai instruksi dokter.', 'Medicines and fluids as instructed by the doctor.', 'Paring obat-obatan lan cairan miturut instruksi dokter.'],
      ['Bantuan alat medis seperti ventilator, bedside monitor, infusion pump, atau alat lainnya sesuai kebutuhan.', 'Support from medical equipment such as a ventilator, bedside monitor, infusion pump, or other devices as needed.', 'Bantuan piranti medis kados ta ventilator, bedside monitor, infusion pump, utawi piranti sanesipun miturut kabetahan.'],
      ['Perawatan kebersihan dan kenyamanan pasien.', 'Care for their hygiene and comfort.', 'Perawatan kabersihan lan kanyamanan pasien.'],
      ['Evaluasi kondisi pasien secara berkala oleh dokter dan perawat.', 'Regular evaluation of their condition by doctors and nurses.', 'Evaluasi kawontenan pasien kanthi berkala dening dokter lan perawat.'],
    ],
  }),
  sec(['4. Ketentuan Jam Kunjung Pasien ICU', '4. ICU Patient Visiting Hours', '4. Pranatan Jam Tuwi Pasien ICU'], {
    p: [['Tata tertib pengunjung pasien:', 'Visitor rules:', 'Tata tertib pengunjung pasien:']],
    pts: [
      ['Anak di bawah usia 14 tahun dilarang masuk area perawatan ICU.', 'Children under 14 years of age are not allowed to enter the ICU care area.', 'Lare ing sangandhapipun umur 14 taun dipunlarang mlebet area perawatan ICU.'],
      ['Setiap pengunjung dibatasi maksimal 2 (dua) orang.', 'Visitors are limited to a maximum of 2 (two) people at a time.', 'Saben pengunjung dipunwatesi paling kathah 2 (kalih) tiyang.'],
      ['Pengunjung dapat bergantian sesuai jam kunjung yang telah ditetapkan.', 'Visitors may take turns within the set visiting hours.', 'Pengunjung saged gantosan miturut jam tuwi ingkang sampun dipuntetepaken.'],
      ['Pengunjung wajib mematuhi arahan petugas ICU.', 'Visitors must follow the directions of ICU staff.', 'Pengunjung wajib netepi pitedah petugas ICU.'],
    ],
  }),
  sec(['5. Apa yang harus diperhatikan keluarga selama berkunjung?', '5. What should families pay attention to while visiting?', '5. Menapa ingkang kedah dipungatosaken kulawarga salebetipun tuwi?'], {
    pts: [
      ['Melakukan kebersihan tangan sebelum dan sesudah mengunjungi pasien.', 'Clean your hands before and after visiting the patient.', 'Nindakaken kabersihan tangan saderengipun lan sasampunipun tuwi pasien.'],
      ['Mengikuti arahan petugas mengenai penggunaan alat pelindung diri.', 'Follow staff directions on using personal protective equipment.', 'Netepi pitedah petugas babagan panganggening alat pelindung diri.'],
      ['Menjaga ketenangan dan tidak membuat kegaduhan.', 'Stay calm and do not make noise.', 'Njagi katentreman lan mboten damel rame.'],
      ['Tidak menyentuh, melepas, atau mengubah pengaturan alat medis pasien.', 'Do not touch, remove, or change the settings of the patient’s medical equipment.', 'Mboten ndemek, nglepas, utawi ngewahi setelan piranti medis pasien.'],
      ['Tidak memberikan makanan atau minuman kepada pasien tanpa izin petugas.', 'Do not give the patient food or drink without staff permission.', 'Mboten maringi dhaharan utawi unjukan dhateng pasien tanpa idin petugas.'],
      ['Tidak mengambil foto atau video tanpa izin sesuai ketentuan rumah sakit.', 'Do not take photos or videos without permission, in line with hospital rules.', 'Mboten mendhet foto utawi video tanpa idin miturut pranatan griya sakit.'],
      ['Segera melaporkan kepada perawat apabila melihat perubahan kondisi pasien.', 'Report to the nurse right away if you notice any change in the patient’s condition.', 'Enggal matur dhateng perawat menawi ningali ewah-ewahan kawontenan pasien.'],
    ],
  }),
  sec(['6. Apa peran keluarga dalam mendukung kesembuhan pasien?', '6. What is the family’s role in supporting the patient’s recovery?', '6. Menapa peranipun kulawarga anggenipun nyengkuyung kasarasan pasien?'], {
    p: [['Keluarga memiliki peran penting dalam mendukung proses perawatan pasien, yaitu:', 'The family plays an important role in supporting the patient’s care, namely:', 'Kulawarga gadhah peran ingkang wigati anggenipun nyengkuyung proses perawatan pasien, inggih menika:']],
    pts: [
      ['Memberikan dukungan moral dan semangat kepada pasien.', 'Giving the patient moral support and encouragement.', 'Maringi panyengkuyung moral lan semangat dhateng pasien.'],
      ['Memberikan informasi mengenai riwayat penyakit dan pengobatan pasien.', 'Providing information about the patient’s medical history and treatment.', 'Maringi informasi babagan riwayat sakit lan pengobatan pasien.'],
      ['Mematuhi seluruh peraturan dan jadwal kunjungan ICU.', 'Following all ICU rules and the visiting schedule.', 'Netepi sedaya peraturan lan jadwal tuwi ICU.'],
      ['Bekerja sama dengan dokter dan perawat selama proses perawatan.', 'Working together with doctors and nurses throughout the care process.', 'Kerja sama kaliyan dokter lan perawat salebetipun proses perawatan.'],
      ['Memberikan persetujuan tindakan medis sesuai ketentuan yang berlaku.', 'Giving consent for medical procedures according to applicable rules.', 'Maringi persetujuan tindakan medis miturut pranatan ingkang lumampah.'],
      ['Memberikan dukungan dan doa untuk kesembuhan pasien.', 'Offering support and prayers for the patient’s recovery.', 'Maringi panyengkuyung lan donga kangge kasarasan pasien.'],
    ],
  }),
  sec(['7. Bagaimana keluarga mendapatkan informasi perkembangan pasien?', '7. How can families get updates on the patient’s progress?', '7. Kados pundi kulawarga pikantuk informasi perkembangan pasien?'], {
    p: [[
      'Keluarga dapat berkomunikasi dengan dokter atau perawat yang bertugas untuk memperoleh informasi mengenai kondisi dan perkembangan pasien sesuai ketentuan pelayanan dan privasi rumah sakit.',
      'Families can speak with the doctor or nurse on duty to get information about the patient’s condition and progress, in line with the hospital’s service and privacy rules.',
      'Kulawarga saged rembagan kaliyan dokter utawi perawat ingkang tugas kangge pikantuk informasi babagan kawontenan lan perkembangan pasien miturut pranatan pelayanan lan privasi griya sakit.',
    ]],
  }),
]

const defibrilator: EducationTopic = {
  slug: 'defibrilator',
  videoUrl: 'https://youtu.be/FSiDT5P0ZlI',
  title: { id: 'Defibrilator', en: 'Defibrillator', jv: 'Defibrilator' },
  summary: {
    id: 'Defibrilator adalah alat medis yang digunakan untuk memberikan kejutan listrik terkontrol pada jantung pada kondisi gangguan irama jantung tertentu yang mengancam nyawa. Alat ini bertujuan membantu mengembalikan irama jantung yang efektif pada kondisi seperti fibrilasi ventrikel (VF) dan takikardia ventrikel tanpa denyut (pulseless VT).',
    en: 'A defibrillator is a medical device used to deliver a controlled electric shock to the heart in certain life-threatening heart rhythm disorders. It aims to help restore an effective heart rhythm in conditions such as ventricular fibrillation (VF) and pulseless ventricular tachycardia (pulseless VT).',
    jv: 'Defibrilator inggih menika piranti medis ingkang dipunagem kangge maringi kejutan listrik ingkang dipunkontrol dhateng jantung ing kawontenan gangguan irama jantung tartamtu ingkang ngancam nyawa. Piranti menika ancasipun mbantu mangsulaken irama jantung ingkang efektif ing kawontenan kados ta fibrilasi ventrikel (VF) lan takikardia ventrikel tanpa denyut (pulseless VT).',
  },
  image: img('/images/defibrilator.webp', ['Alat defibrilator di Ruang ICU', 'Defibrillator in the ICU', 'Piranti defibrilator wonten ing Ruang ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Defibrilator merupakan alat medis yang berperan penting dalam penanganan gangguan irama jantung tertentu yang mengancam nyawa. Tindakan ini membutuhkan penanganan cepat dan tepat oleh tenaga medis yang terlatih.',
      'A defibrillator is a medical device that plays an important role in treating certain life-threatening heart rhythm disorders. This procedure requires fast and accurate handling by trained medical staff.',
      'Defibrilator menika piranti medis ingkang gadhah peran wigati ing penanganan gangguan irama jantung tartamtu ingkang ngancam nyawa. Tindakan menika mbetahaken penanganan ingkang cepet lan leres dening tenaga medis ingkang sampun kalatih.',
    ]),
    loc([
      'Dukungan keluarga dan kerja sama dengan dokter serta perawat sangat penting selama proses penanganan pasien.',
      'Family support and cooperation with doctors and nurses are very important while the patient is being treated.',
      'Panyengkuyung kulawarga lan kerja sama kaliyan dokter saha perawat wigati sanget salebetipun proses penanganan pasien.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
defibrilator.sections = [
  sec(['1. Apa itu Defibrilator?', '1. What is a defibrillator?', '1. Menapa menika Defibrilator?'], { p: [[defibrilator.summary.id, defibrilator.summary.en, defibrilator.summary.jv]] }),
  sec(['2. Mengapa pasien perlu menggunakan Defibrilator?', '2. Why does a patient need a defibrillator?', '2. Kenging menapa pasien perlu ngagem Defibrilator?'], {
    p: [['Penggunaan defibrilator dilakukan berdasarkan kondisi medis pasien, terutama ketika:', 'A defibrillator is used based on the patient’s medical condition, especially when:', 'Panganggening defibrilator dipuntindakaken adhedhasar kawontenan medis pasien, mliginipun nalika:']],
    pts: [
      ['Pasien mengalami gangguan irama jantung yang berbahaya.', 'The patient has a dangerous heart rhythm disorder.', 'Pasien ngalami gangguan irama jantung ingkang mbebayani.'],
      ['Pasien mengalami fibrilasi ventrikel (VF).', 'The patient has ventricular fibrillation (VF).', 'Pasien ngalami fibrilasi ventrikel (VF).'],
      ['Pasien mengalami takikardia ventrikel tanpa denyut (pulseless VT).', 'The patient has pulseless ventricular tachycardia (pulseless VT).', 'Pasien ngalami takikardia ventrikel tanpa denyut (pulseless VT).'],
      ['Pasien mengalami kondisi henti jantung tertentu yang membutuhkan tindakan defibrilasi.', 'The patient has a certain type of cardiac arrest that requires defibrillation.', 'Pasien ngalami kawontenan henti jantung tartamtu ingkang mbetahaken tindakan defibrilasi.'],
    ],
    note: [
      'Catatan: Tidak semua gangguan irama jantung membutuhkan kejutan listrik. Penggunaannya harus berdasarkan hasil pemeriksaan dan penilaian tenaga medis.',
      'Note: Not all heart rhythm disorders need an electric shock. Its use must be based on examination results and assessment by medical staff.',
      'Cathetan: Mboten sedaya gangguan irama jantung mbetahaken kejutan listrik. Panganggenipun kedah adhedhasar asil pemeriksaan lan penilaian tenaga medis.',
    ],
  }),
  sec(['3. Bagaimana proses penggunaan Defibrilator?', '3. How is a defibrillator used?', '3. Kados pundi proses panganggening Defibrilator?'], {
    p: [
      [
        'Penggunaan defibrilator dilakukan oleh dokter atau tenaga medis yang terlatih. Alat akan dihubungkan dengan pasien melalui elektroda atau bantalan khusus untuk memantau aktivitas listrik jantung dan menentukan kebutuhan tindakan.',
        'A defibrillator is used by a doctor or trained medical staff. The device is connected to the patient through electrodes or special pads to monitor the heart’s electrical activity and determine whether a procedure is needed.',
        'Panganggening defibrilator dipuntindakaken dening dokter utawi tenaga medis ingkang sampun kalatih. Piranti badhe dipunsambungaken dhateng pasien lumantar elektroda utawi bantalan mligi kangge mantau aktivitas listrik jantung lan nemtokaken kabetahan tindakan.',
      ],
      [
        'Apabila ditemukan irama jantung yang memerlukan defibrilasi, tenaga medis akan melakukan tindakan sesuai prosedur medis dan kondisi pasien. Selama tindakan berlangsung, kondisi jantung dan tanda-tanda vital pasien akan dipantau.',
        'If a heart rhythm that requires defibrillation is found, medical staff will carry out the procedure according to medical protocol and the patient’s condition. During the procedure, the patient’s heart condition and vital signs will be monitored.',
        'Menawi dipunpanggihaken irama jantung ingkang mbetahaken defibrilasi, tenaga medis badhe nindakaken tindakan miturut prosedur medis lan kawontenan pasien. Salebetipun tindakan lumampah, kawontenan jantung lan tanda-tanda vital pasien badhe dipunpantau.',
      ],
    ],
  }),
  sec(['4. Apa yang perlu diketahui keluarga pasien?', '4. What should the patient’s family know?', '4. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:', 'Kulawarga pasien dipunajab mangertosi bab-bab ing ngandhap menika:']],
    pts: [
      ['Defibrilator merupakan alat medis untuk menangani gangguan irama jantung tertentu yang mengancam nyawa.', 'A defibrillator is a medical device for treating certain life-threatening heart rhythm disorders.', 'Defibrilator menika piranti medis kangge nangani gangguan irama jantung tartamtu ingkang ngancam nyawa.'],
      ['Penggunaan alat dilakukan oleh tenaga medis yang memiliki kompetensi.', 'The device is used by competent medical staff.', 'Panganggening piranti dipuntindakaken dening tenaga medis ingkang gadhah kompetensi.'],
      ['Tindakan defibrilasi dapat dilakukan sebagai bagian dari penanganan kegawatdaruratan jantung.', 'Defibrillation may be performed as part of emergency heart care.', 'Tindakan defibrilasi saged dipuntindakaken minangka perangan saking penanganan kegawatdaruratan jantung.'],
      ['Keluarga tidak diperbolehkan menyentuh alat atau elektroda selama tindakan berlangsung.', 'The family must not touch the device or electrodes during the procedure.', 'Kulawarga mboten kepareng ndemek piranti utawi elektroda salebetipun tindakan lumampah.'],
      ['Keluarga harus mengikuti arahan dokter dan perawat selama proses penanganan.', 'The family must follow the directions of doctors and nurses during treatment.', 'Kulawarga kedah netepi pitedah dokter lan perawat salebetipun proses penanganan.'],
      ['Setelah tindakan, pasien akan mendapatkan pemantauan kondisi jantung secara berkala.', 'After the procedure, the patient’s heart condition will be monitored regularly.', 'Sasampunipun tindakan, pasien badhe pikantuk pemantauan kawontenan jantung kanthi berkala.'],
    ],
  }),
  sec(['5. Apakah penggunaan Defibrilator berbahaya?', '5. Is using a defibrillator dangerous?', '5. Menapa panganggening Defibrilator mbebayani?'], {
    p: [[
      'Defibrilasi merupakan tindakan medis yang memiliki manfaat penting dalam menangani gangguan irama jantung tertentu yang mengancam nyawa. Namun, tindakan ini juga memiliki risiko dan dilakukan berdasarkan pertimbangan medis. Tenaga medis akan melakukan evaluasi dan pemantauan untuk memastikan tindakan sesuai dengan kondisi pasien.',
      'Defibrillation is a medical procedure with important benefits in treating certain life-threatening heart rhythm disorders. However, it also carries risks and is performed based on medical judgment. Medical staff will evaluate and monitor to make sure the procedure suits the patient’s condition.',
      'Defibrilasi menika tindakan medis ingkang gadhah paedah wigati kangge nangani gangguan irama jantung tartamtu ingkang ngancam nyawa. Nanging, tindakan menika ugi gadhah risiko lan dipuntindakaken adhedhasar pertimbangan medis. Tenaga medis badhe nindakaken evaluasi lan pemantauan kangge mesthekaken tindakan jumbuh kaliyan kawontenan pasien.',
    ]],
  }),
  sec(['6. Apa yang harus dilakukan keluarga selama tindakan?', '6. What should the family do during the procedure?', '6. Menapa ingkang kedah dipuntindakaken kulawarga salebetipun tindakan?'], {
    pts: [
      ['Tetap tenang dan tidak panik.', 'Stay calm and do not panic.', 'Tetep tenang lan mboten panik.'],
      ['Memberikan ruang kepada tenaga medis untuk melakukan tindakan.', 'Give medical staff room to carry out the procedure.', 'Maringi papan dhateng tenaga medis kangge nindakaken tindakan.'],
      ['Tidak menyentuh pasien, tempat tidur, kabel, atau alat selama tindakan defibrilasi berlangsung.', 'Do not touch the patient, bed, cables, or device while defibrillation is taking place.', 'Mboten ndemek pasien, papan tilem, kabel, utawi piranti salebetipun tindakan defibrilasi lumampah.'],
      ['Mengikuti instruksi dokter dan perawat.', 'Follow the instructions of doctors and nurses.', 'Netepi instruksi dokter lan perawat.'],
      ['Menanyakan perkembangan kondisi pasien kepada tenaga medis setelah tindakan selesai.', 'Ask medical staff about the patient’s progress after the procedure is finished.', 'Nyuwun pirsa perkembangan kawontenan pasien dhateng tenaga medis sasampunipun tindakan rampung.'],
    ],
  }),
]

const syringePump: EducationTopic = {
  slug: 'syringe-pump',
  title: { id: 'Alat Syringe Pump', en: 'Syringe Pump', jv: 'Piranti Syringe Pump' },
  summary: {
    id: 'Syringe Pump adalah suatu perangkat medis elektronik yang berfungsi untuk memberikan cairan obat atau nutrisi ke dalam tubuh pasien secara sangat presisi, bertahap, dan terkontrol dalam jangka waktu tertentu.',
    en: 'A syringe pump is an electronic medical device that delivers liquid medicine or nutrition into the patient’s body in a very precise, gradual, and controlled way over a set period of time.',
    jv: 'Syringe Pump inggih menika satunggaling piranti medis elektronik ingkang fungsinipun kangge maringi cairan obat utawi nutrisi dhateng salebeting badan pasien kanthi presisi sanget, mbaka sekedhik, lan dipunkontrol salebetipun wekdal tartamtu.',
  },
  image: img('/images/syringe-pump.webp', ['Alat syringe pump di Ruang ICU', 'Syringe pump in the ICU', 'Piranti syringe pump wonten ing Ruang ICU']),
  sections: [],
  complete: false,
}
syringePump.sections = [
  sec(['Apa itu Syringe Pump?', 'What is a syringe pump?', 'Menapa menika Syringe Pump?'], {
    p: [
      [syringePump.summary.id, syringePump.summary.en, syringePump.summary.jv],
      [
        'Syringe Pump adalah alat medis berbentuk mesin pompa elektronik kecil yang dipasangi tabung suntikan (spuit) besar. Alat ini berfungsi untuk mendorong dan memasukkan obat cair atau cairan nutrisi ke dalam tubuh pasien melalui selang infus secara perlahan, konstan, dan sangat presisi.',
        'A syringe pump is a medical device in the form of a small electronic pump fitted with a large syringe. It pushes liquid medicine or nutrition fluid into the patient’s body through an infusion line slowly, constantly, and very precisely.',
        'Syringe Pump inggih menika piranti medis awujud mesin pompa elektronik alit ingkang dipunpasangi tabung suntikan (spuit) ageng. Piranti menika fungsinipun kangge nyurung lan nglebetaken obat cair utawi cairan nutrisi dhateng salebeting badan pasien lumantar selang infus kanthi alon, ajeg (konstan), lan presisi sanget.',
      ],
    ],
  }),
]

const doubleLumen: EducationTopic = {
  slug: 'double-lumen',
  title: { id: 'Alat Double Lumen', en: 'Double Lumen Catheter', jv: 'Piranti Double Lumen' },
  summary: {
    id: 'Double Lumen (DL) adalah kateter atau selang khusus yang memiliki dua saluran (lumen) dan dipasang pada pembuluh darah vena besar. Alat ini umumnya digunakan sebagai akses pembuluh darah untuk tindakan hemodialisis atau terapi pengganti fungsi ginjal lainnya. Dua saluran tersebut berfungsi untuk mengalirkan darah dari tubuh menuju mesin dialisis dan mengembalikan darah yang telah melalui proses penyaringan ke dalam tubuh pasien.',
    en: 'A Double Lumen (DL) is a special catheter or tube with two channels (lumens) that is placed in a large vein. It is generally used as blood vessel access for hemodialysis or other kidney replacement therapy. The two channels carry blood from the body to the dialysis machine and return the filtered blood to the patient’s body.',
    jv: 'Double Lumen (DL) inggih menika kateter utawi selang mligi ingkang gadhah kalih saluran (lumen) lan dipunpasang ing pembuluh darah vena ageng. Piranti menika umumipun dipunagem minangka akses pembuluh darah kangge tindakan hemodialisis utawi terapi pengganti fungsi ginjal sanesipun. Kalih saluran kasebat fungsinipun kangge ngilikaken darah saking badan dhateng mesin dialisis lan mangsulaken darah ingkang sampun ngliwati proses penyaringan dhateng salebeting badan pasien.',
  },
  image: img('/images/double-lumen.webp', ['Kateter double lumen', 'Double lumen catheter', 'Kateter double lumen']),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan Double Lumen merupakan tindakan medis yang membantu menyediakan akses pembuluh darah untuk proses hemodialisis atau terapi pengganti fungsi ginjal.',
      'Placing a Double Lumen is a medical procedure that helps provide blood vessel access for hemodialysis or kidney replacement therapy.',
      'Pemasangan Double Lumen menika tindakan medis ingkang mbantu nyawisaken akses pembuluh darah kangge proses hemodialisis utawi terapi pengganti fungsi ginjal.',
    ]),
    loc([
      'Dukungan keluarga dalam menjaga kebersihan, keamanan kateter, serta mengikuti arahan tenaga medis sangat penting untuk membantu mencegah komplikasi selama perawatan.',
      'Family support in keeping things clean, keeping the catheter safe, and following medical staff directions is very important to help prevent complications during care.',
      'Panyengkuyung kulawarga anggenipun njagi kabersihan, keamanan kateter, saha netepi pitedah tenaga medis wigati sanget kangge mbantu nyegah komplikasi salebetipun perawatan.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
doubleLumen.sections = [
  sec(['1. Apa itu Double Lumen?', '1. What is a Double Lumen?', '1. Menapa menika Double Lumen?'], { p: [[doubleLumen.summary.id, doubleLumen.summary.en, doubleLumen.summary.jv]] }),
  sec(['2. Mengapa pasien perlu dipasang Double Lumen?', '2. Why does a patient need a Double Lumen?', '2. Kenging menapa pasien perlu dipunpasang Double Lumen?'], {
    p: [['Pemasangan Double Lumen dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'A Double Lumen is placed based on the patient’s condition and medical needs, including:', 'Pemasangan Double Lumen dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, ing antawisipun:']],
    pts: [
      ['Pasien membutuhkan tindakan hemodialisis.', 'The patient needs hemodialysis.', 'Pasien mbetahaken tindakan hemodialisis.'],
      ['Pasien mengalami gangguan fungsi ginjal yang memerlukan terapi pengganti ginjal.', 'The patient has impaired kidney function that requires kidney replacement therapy.', 'Pasien ngalami gangguan fungsi ginjal ingkang mbetahaken terapi pengganti ginjal.'],
      ['Membutuhkan akses pembuluh darah untuk proses penyaringan darah.', 'Blood vessel access is needed for blood filtering.', 'Mbetahaken akses pembuluh darah kangge proses penyaringan darah.'],
      ['Membutuhkan terapi dialisis dalam kondisi perawatan intensif.', 'Dialysis therapy is needed during intensive care.', 'Mbetahaken terapi dialisis ing kawontenan perawatan intensif.'],
      ['Memerlukan akses pembuluh darah khusus sesuai pertimbangan dokter.', 'Special blood vessel access is required based on the doctor’s judgment.', 'Mbetahaken akses pembuluh darah mligi miturut pertimbangan dokter.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan Double Lumen?', '3. How is a Double Lumen placed?', '3. Kados pundi proses pemasangan Double Lumen?'], {
    p: [
      [
        'Pemasangan Double Lumen dilakukan oleh dokter yang memiliki kompetensi dengan menggunakan prosedur steril. Kateter dimasukkan ke dalam pembuluh darah vena besar, kemudian dilakukan pemeriksaan untuk memastikan posisi kateter sudah tepat dan aman.',
        'A Double Lumen is placed by a competent doctor using a sterile procedure. The catheter is inserted into a large vein, and then a check is done to make sure the catheter is in the correct and safe position.',
        'Pemasangan Double Lumen dipuntindakaken dening dokter ingkang gadhah kompetensi kanthi ngagem prosedur steril. Kateter dipunlebetaken dhateng pembuluh darah vena ageng, lajeng dipuntindakaken pemeriksaan kangge mesthekaken posisi kateter sampun leres lan aman.',
      ],
      [
        'Setelah terpasang, kateter akan difiksasi dan ditutup menggunakan balutan steril agar tidak mudah bergeser serta mengurangi risiko infeksi.',
        'Once in place, the catheter is secured and covered with a sterile dressing so it does not shift easily and to reduce the risk of infection.',
        'Sasampunipun kapasang, kateter badhe dipunfiksasi lan dipuntutup ngagem balutan steril supados mboten gampil owah posisinipun saha nyuda risiko infeksi.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan Double Lumen?', '4. How is a patient with a Double Lumen cared for?', '4. Kados pundi perawatan pasien ingkang ngagem Double Lumen?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan Double Lumen:', 'Things to pay attention to while the patient has a Double Lumen:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien ngagem Double Lumen:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.', 'Njagi kabersihan area pemasangan kateter.'],
      ['Memastikan balutan tetap bersih, kering, dan tidak terbuka.', 'Make sure the dressing stays clean, dry, and closed.', 'Mesthekaken balutan tetep resik, garing, lan mboten kabikak.'],
      ['Tidak menarik, memegang, atau mengubah posisi selang sendiri.', 'Do not pull, hold, or reposition the tube yourself.', 'Mboten narik, nyepeng, utawi ngewahi posisi selang piyambak.'],
      ['Tidak membuka penutup atau sambungan kateter.', 'Do not open the catheter caps or connections.', 'Mboten mbikak tutup utawi sambungan kateter.'],
      ['Menghindari tekanan dan tarikan pada area pemasangan.', 'Avoid pressure and pulling on the insertion area.', 'Nyingkiri tekanan lan tarikan ing area pemasangan.'],
      ['Memastikan perawatan kateter dilakukan oleh tenaga medis sesuai prosedur.', 'Make sure catheter care is done by medical staff according to procedure.', 'Mesthekaken perawatan kateter dipuntindakaken dening tenaga medis miturut prosedur.'],
      ['Segera melaporkan kepada perawat apabila terjadi perdarahan, pembengkakan, kemerahan, nyeri, atau cairan keluar dari area pemasangan.', 'Report to the nurse right away if there is bleeding, swelling, redness, pain, or fluid coming from the insertion area.', 'Enggal matur dhateng perawat menawi wonten perdarahan, pembengkakan, kemerahan, nyeri, utawi cairan medal saking area pemasangan.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:', 'Kulawarga pasien dipunajab mangertosi bab-bab ing ngandhap menika:']],
    pts: [
      ['Double Lumen merupakan akses khusus yang digunakan untuk membantu proses terapi dialisis.', 'A Double Lumen is a special access used to support dialysis therapy.', 'Double Lumen menika akses mligi ingkang dipunagem kangge mbantu proses terapi dialisis.'],
      ['Kateter harus dijaga agar tidak tertarik, bergeser, atau terlepas.', 'The catheter must be protected so it is not pulled, shifted, or dislodged.', 'Kateter kedah dipunjagi supados mboten ketarik, owah posisinipun, utawi ucul.'],
      ['Keluarga tidak diperbolehkan membuka balutan atau mengatur sambungan kateter sendiri.', 'The family must not open the dressing or adjust the catheter connections themselves.', 'Kulawarga mboten kepareng mbikak balutan utawi ngatur sambungan kateter piyambak.'],
      ['Area pemasangan harus dijaga kebersihannya.', 'The insertion area must be kept clean.', 'Area pemasangan kedah dipunjagi kabersihanipun.'],
      ['Pasien perlu mengikuti anjuran dokter dan perawat selama menggunakan alat.', 'The patient needs to follow the advice of doctors and nurses while using the device.', 'Pasien perlu netepi pitutur dokter lan perawat salebetipun ngagem piranti.'],
      ['Segera hubungi perawat apabila terdapat keluhan atau perubahan pada area pemasangan.', 'Contact the nurse right away if there are complaints or changes at the insertion area.', 'Enggal ngabari perawat menawi wonten keluhan utawi ewah-ewahan ing area pemasangan.'],
    ],
  }),
  sec(['6. Kapan Double Lumen dapat dilepas?', '6. When can the Double Lumen be removed?', '6. Kapan Double Lumen saged dipunlepas?'], {
    p: [[
      'Double Lumen dapat dilepas apabila sudah tidak diperlukan untuk tindakan medis atau terapi dialisis. Keputusan pelepasan dilakukan oleh dokter berdasarkan kondisi dan kebutuhan pasien.',
      'The Double Lumen can be removed when it is no longer needed for medical procedures or dialysis therapy. The decision to remove it is made by the doctor based on the patient’s condition and needs.',
      'Double Lumen saged dipunlepas menawi sampun mboten dipunbetahaken kangge tindakan medis utawi terapi dialisis. Keputusan pelepasan dipuntindakaken dening dokter adhedhasar kawontenan lan kabetahan pasien.',
    ]],
  }),
]

const crrt: EducationTopic = {
  slug: 'crrt',
  videoUrl: 'https://youtu.be/H6JfCxUnDmw',
  title: { id: 'Alat CRRT', en: 'CRRT Machine', jv: 'Piranti CRRT' },
  summary: {
    id: 'CRRT (Continuous Renal Replacement Therapy) adalah terapi pengganti fungsi ginjal yang dilakukan secara terus-menerus dan bertahap menggunakan mesin khusus. Terapi ini digunakan untuk membantu pasien dengan gangguan fungsi ginjal berat, terutama pasien dalam kondisi kritis yang dirawat di ruang ICU.',
    en: 'CRRT (Continuous Renal Replacement Therapy) is a kidney replacement therapy carried out continuously and gradually using a special machine. It is used to help patients with severe kidney impairment, especially critically ill patients treated in the ICU.',
    jv: 'CRRT (Continuous Renal Replacement Therapy) inggih menika terapi pengganti fungsi ginjal ingkang dipuntindakaken kanthi terus-terusan lan mbaka sekedhik ngagem mesin mligi. Terapi menika dipunagem kangge mbantu pasien kanthi gangguan fungsi ginjal awrat, mliginipun pasien ing kawontenan kritis ingkang dipunrawat wonten ing ruang ICU.',
  },
  image: img('/images/crrt.webp', ['Mesin CRRT di Ruang ICU', 'CRRT machine in the ICU', 'Mesin CRRT wonten ing Ruang ICU']),
  sections: [],
  importantMessage: [
    loc([
      'CRRT merupakan salah satu terapi pengganti fungsi ginjal yang membantu membuang zat sisa metabolisme dan kelebihan cairan dari tubuh pasien secara bertahap dan berkelanjutan.',
      'CRRT is a kidney replacement therapy that helps remove metabolic waste and excess fluid from the patient’s body gradually and continuously.',
      'CRRT menika salah satunggaling terapi pengganti fungsi ginjal ingkang mbantu mbucal zat sisa metabolisme lan kaluwihan cairan saking badan pasien kanthi mbaka sekedhik lan lumintu.',
    ]),
    loc([
      'Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat penting selama proses perawatan berlangsung.',
      'Family support, calmness, and cooperation with doctors and nurses are very important throughout the care process.',
      'Panyengkuyung kulawarga, katentreman, saha kerja sama kaliyan dokter lan perawat wigati sanget salebetipun proses perawatan lumampah.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
crrt.sections = [
  sec(['1. Apa itu CRRT?', '1. What is CRRT?', '1. Menapa menika CRRT?'], {
    p: [
      [crrt.summary.id, crrt.summary.en, crrt.summary.jv],
      [
        'CRRT bekerja dengan menyaring darah untuk membuang zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh.',
        'CRRT works by filtering the blood to remove metabolic waste and excess fluid, and helps maintain the body’s electrolyte balance.',
        'CRRT makarya kanthi nyaring darah kangge mbucal zat sisa metabolisme, kaluwihan cairan, saha mbantu njagi keseimbangan elektrolit ing salebeting badan.',
      ],
    ],
  }),
  sec(['2. Mengapa pasien perlu menggunakan CRRT?', '2. Why does a patient need CRRT?', '2. Kenging menapa pasien perlu ngagem CRRT?'], {
    p: [['Penggunaan CRRT dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'CRRT is used based on the patient’s condition and medical needs, including:', 'Panganggening CRRT dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, ing antawisipun:']],
    pts: [
      ['Pasien mengalami gangguan fungsi ginjal berat.', 'The patient has severe kidney impairment.', 'Pasien ngalami gangguan fungsi ginjal awrat.'],
      ['Terjadi penumpukan cairan berlebih dalam tubuh.', 'Excess fluid has built up in the body.', 'Kedadosan tumpukan cairan ingkang langkung ing salebeting badan.'],
      ['Terjadi peningkatan zat sisa metabolisme dalam darah.', 'Metabolic waste in the blood has increased.', 'Kedadosan mindhakipun zat sisa metabolisme ing salebeting darah.'],
      ['Pasien mengalami gangguan keseimbangan elektrolit.', 'The patient has an electrolyte imbalance.', 'Pasien ngalami gangguan keseimbangan elektrolit.'],
      ['Pasien dalam kondisi kritis yang membutuhkan terapi pengganti fungsi ginjal secara bertahap dan berkelanjutan.', 'The patient is critically ill and needs gradual, continuous kidney replacement therapy.', 'Pasien ing kawontenan kritis ingkang mbetahaken terapi pengganti fungsi ginjal kanthi mbaka sekedhik lan lumintu.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan dan penggunaan CRRT?', '3. How is CRRT set up and used?', '3. Kados pundi proses pemasangan lan panganggening CRRT?'], {
    p: [
      [
        'Terapi CRRT dilakukan melalui akses kateter khusus pada pembuluh darah besar (biasanya Double Lumen). Kateter tersebut dihubungkan dengan selang mesin CRRT untuk mengalirkan darah menuju filter penyaring dan mengembalikannya ke tubuh pasien.',
        'CRRT is given through a special catheter in a large blood vessel (usually a Double Lumen). The catheter is connected to the CRRT machine tubing to carry blood to the filter and return it to the patient’s body.',
        'Terapi CRRT dipuntindakaken lumantar akses kateter mligi ing pembuluh darah ageng (limrahipun Double Lumen). Kateter kasebat dipunsambungaken kaliyan selang mesin CRRT kangge ngilikaken darah dhateng filter penyaring lan mangsulaken dhateng badan pasien.',
      ],
      [
        'Selama terapi berlangsung, mesin akan bekerja secara berkelanjutan sesuai pengaturan dokter. Kondisi pasien, tekanan darah, keseimbangan cairan, dan parameter lainnya akan dipantau secara berkala oleh tenaga medis.',
        'During therapy, the machine runs continuously according to the doctor’s settings. The patient’s condition, blood pressure, fluid balance, and other parameters are monitored regularly by medical staff.',
        'Salebetipun terapi lumampah, mesin badhe makarya kanthi lumintu miturut setelan dokter. Kawontenan pasien, tekanan darah, keseimbangan cairan, lan parameter sanesipun badhe dipunpantau kanthi berkala dening tenaga medis.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien selama menggunakan CRRT?', '4. How is a patient cared for during CRRT?', '4. Kados pundi perawatan pasien salebetipun ngagem CRRT?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menjalani terapi CRRT:', 'Things to pay attention to while the patient is on CRRT:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien nglampahi terapi CRRT:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.', 'Njagi kabersihan area pemasangan kateter.'],
      ['Tidak menarik atau mengubah posisi selang CRRT.', 'Do not pull or reposition the CRRT tubing.', 'Mboten narik utawi ngewahi posisi selang CRRT.'],
      ['Menjaga agar sambungan selang dan kateter tetap aman.', 'Keep the tubing and catheter connections secure.', 'Njagi supados sambungan selang lan kateter tetep aman.'],
      ['Tidak menyentuh pengaturan mesin tanpa izin petugas.', 'Do not touch the machine settings without staff permission.', 'Mboten ndemek setelan mesin tanpa idin petugas.'],
      ['Memastikan pasien mendapatkan pemantauan secara berkala.', 'Make sure the patient is monitored regularly.', 'Mesthekaken pasien pikantuk pemantauan kanthi berkala.'],
      ['Segera melaporkan kepada perawat apabila alarm mesin berbunyi atau terdapat perubahan kondisi pasien.', 'Report to the nurse right away if the machine alarm sounds or the patient’s condition changes.', 'Enggal matur dhateng perawat menawi alarm mesin muni utawi wonten ewah-ewahan kawontenan pasien.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:', 'Kulawarga pasien dipunajab mangertosi bab-bab ing ngandhap menika:']],
    pts: [
      ['CRRT merupakan terapi untuk membantu fungsi ginjal pasien dalam membuang zat sisa dan kelebihan cairan.', 'CRRT is a therapy that supports the patient’s kidney function in removing waste and excess fluid.', 'CRRT menika terapi kangge mbantu fungsi ginjal pasien anggenipun mbucal zat sisa lan kaluwihan cairan.'],
      ['Terapi dilakukan secara terus-menerus sesuai kebutuhan dan kondisi pasien.', 'The therapy runs continuously according to the patient’s needs and condition.', 'Terapi dipuntindakaken kanthi terus-terusan miturut kabetahan lan kawontenan pasien.'],
      ['Selama terapi berlangsung, pasien membutuhkan pemantauan ketat oleh tenaga medis.', 'During therapy, the patient needs close monitoring by medical staff.', 'Salebetipun terapi lumampah, pasien mbetahaken pemantauan ketat dening tenaga medis.'],
      ['Keluarga tidak diperbolehkan menyentuh, mengatur, atau menghentikan mesin CRRT sendiri.', 'The family must not touch, adjust, or stop the CRRT machine themselves.', 'Kulawarga mboten kepareng ndemek, ngatur, utawi mandhegaken mesin CRRT piyambak.'],
      ['Keluarga tidak diperbolehkan menarik atau memegang kateter dan selang terapi.', 'The family must not pull or hold the catheter and therapy tubing.', 'Kulawarga mboten kepareng narik utawi nyepeng kateter lan selang terapi.'],
      ['Keluarga dapat memberikan dukungan emosional kepada pasien selama menjalani perawatan.', 'The family can give the patient emotional support during care.', 'Kulawarga saged maringi panyengkuyung emosional dhateng pasien salebetipun nglampahi perawatan.'],
    ],
  }),
  sec(['6. Kapan terapi CRRT dapat dihentikan?', '6. When can CRRT be stopped?', '6. Kapan terapi CRRT saged dipunkendelaken?'], {
    p: [[
      'Terapi CRRT dapat dihentikan apabila kondisi pasien sudah membaik atau tidak lagi membutuhkan terapi tersebut. Dokter akan melakukan evaluasi terhadap fungsi ginjal, keseimbangan cairan, kondisi elektrolit, dan keadaan umum pasien sebelum memutuskan penghentian terapi.',
      'CRRT can be stopped when the patient’s condition has improved or the therapy is no longer needed. The doctor will evaluate kidney function, fluid balance, electrolytes, and the patient’s general condition before deciding to stop therapy.',
      'Terapi CRRT saged dipunkendelaken menawi kawontenan pasien sampun mindhak sae utawi sampun mboten mbetahaken terapi kasebat. Dokter badhe nindakaken evaluasi dhateng fungsi ginjal, keseimbangan cairan, kawontenan elektrolit, lan kawontenan umum pasien saderengipun mutusaken mandhegaken terapi.',
    ]],
  }),
]

const hemodialisa: EducationTopic = {
  slug: 'hemodialisa',
  videoUrl: 'https://youtu.be/_eQxD1w25zA',
  title: { id: 'Alat Hemodialisa', en: 'Hemodialysis Machine', jv: 'Piranti Hemodialisa' },
  summary: {
    id: 'Hemodialisa (HD) adalah suatu prosedur medis yang bertujuan membantu menggantikan sebagian fungsi ginjal dengan menggunakan mesin khusus. Proses ini dilakukan untuk menyaring darah dari zat sisa metabolisme, kelebihan cairan, serta membantu menjaga keseimbangan elektrolit dalam tubuh.',
    en: 'Hemodialysis (HD) is a medical procedure that helps replace part of the kidney’s function using a special machine. It filters metabolic waste and excess fluid from the blood and helps maintain the body’s electrolyte balance.',
    jv: 'Hemodialisa (HD) inggih menika satunggaling prosedur medis ingkang ancasipun mbantu nggantosi saperangan fungsi ginjal kanthi ngagem mesin mligi. Proses menika dipuntindakaken kangge nyaring darah saking zat sisa metabolisme, kaluwihan cairan, saha mbantu njagi keseimbangan elektrolit ing salebeting badan.',
  },
  image: img('/images/hemodialisa.webp', ['Mesin hemodialisa di Ruang ICU', 'Hemodialysis machine in the ICU', 'Mesin hemodialisa wonten ing Ruang ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Hemodialisa merupakan terapi yang membantu membersihkan darah dari zat sisa metabolisme dan kelebihan cairan ketika fungsi ginjal mengalami gangguan.',
      'Hemodialysis is a therapy that helps clean the blood of metabolic waste and excess fluid when kidney function is impaired.',
      'Hemodialisa menika terapi ingkang mbantu ngresiki darah saking zat sisa metabolisme lan kaluwihan cairan nalika fungsi ginjal ngalami gangguan.',
    ]),
    loc([
      'Dukungan keluarga, kepatuhan terhadap anjuran medis, serta kerja sama dengan dokter dan perawat sangat penting dalam menunjang keberhasilan perawatan pasien.',
      'Family support, following medical advice, and cooperation with doctors and nurses are very important for successful patient care.',
      'Panyengkuyung kulawarga, netepi pitutur medis, saha kerja sama kaliyan dokter lan perawat wigati sanget kangge nyengkuyung kasil perawatan pasien.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
hemodialisa.sections = [
  sec(['1. Apa itu Hemodialisa?', '1. What is hemodialysis?', '1. Menapa menika Hemodialisa?'], {
    p: [
      [hemodialisa.summary.id, hemodialisa.summary.en, hemodialisa.summary.jv],
      [
        'Darah pasien dialirkan menuju mesin melalui akses pembuluh darah, kemudian melewati filter khusus (dialyzer) untuk proses penyaringan sebelum dikembalikan ke tubuh pasien.',
        'The patient’s blood flows to the machine through a blood vessel access, then passes through a special filter (dialyzer) to be cleaned before it is returned to the patient’s body.',
        'Darah pasien dipunilikaken dhateng mesin lumantar akses pembuluh darah, lajeng ngliwati filter mligi (dialyzer) kangge proses penyaringan saderengipun dipunwangsulaken dhateng badan pasien.',
      ],
    ],
  }),
  sec(['2. Mengapa pasien perlu menjalani Hemodialisa?', '2. Why does a patient need hemodialysis?', '2. Kenging menapa pasien perlu nglampahi Hemodialisa?'], {
    p: [['Hemodialisa dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'Hemodialysis is performed based on the patient’s condition and medical needs, including:', 'Hemodialisa dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, ing antawisipun:']],
    pts: [
      ['Pasien mengalami gangguan fungsi ginjal berat.', 'The patient has severe kidney impairment.', 'Pasien ngalami gangguan fungsi ginjal awrat.'],
      ['Terjadi penumpukan zat sisa metabolisme dalam darah.', 'Metabolic waste has built up in the blood.', 'Kedadosan tumpukan zat sisa metabolisme ing salebeting darah.'],
      ['Terdapat kelebihan cairan dalam tubuh.', 'There is excess fluid in the body.', 'Wonten kaluwihan cairan ing salebeting badan.'],
      ['Terjadi gangguan keseimbangan elektrolit.', 'There is an electrolyte imbalance.', 'Kedadosan gangguan keseimbangan elektrolit.'],
      ['Pasien membutuhkan terapi pengganti fungsi ginjal sesuai anjuran dokter.', 'The patient needs kidney replacement therapy as recommended by the doctor.', 'Pasien mbetahaken terapi pengganti fungsi ginjal miturut pitutur dokter.'],
    ],
  }),
  sec(['3. Bagaimana proses penggunaan alat Hemodialisa?', '3. How is the hemodialysis machine used?', '3. Kados pundi proses panganggening piranti Hemodialisa?'], {
    p: [
      [
        'Prosedur hemodialisa dilakukan oleh tenaga medis yang terlatih. Sebelum tindakan, tenaga medis akan memeriksa kondisi pasien dan menyiapkan akses pembuluh darah, seperti AV fistula atau kateter Double Lumen sesuai kebutuhan.',
        'Hemodialysis is performed by trained medical staff. Before the procedure, staff check the patient’s condition and prepare blood vessel access, such as an AV fistula or a Double Lumen catheter as needed.',
        'Prosedur hemodialisa dipuntindakaken dening tenaga medis ingkang sampun kalatih. Saderengipun tindakan, tenaga medis badhe mriksa kawontenan pasien lan nyawisaken akses pembuluh darah, kados ta AV fistula utawi kateter Double Lumen miturut kabetahan.',
      ],
      [
        'Darah pasien kemudian dialirkan melalui selang menuju mesin hemodialisa dan melewati filter khusus (dialyzer). Setelah proses penyaringan, darah akan dikembalikan ke dalam tubuh pasien.',
        'The patient’s blood then flows through tubing to the hemodialysis machine and passes through a special filter (dialyzer). After filtering, the blood is returned to the patient’s body.',
        'Darah pasien lajeng dipunilikaken lumantar selang dhateng mesin hemodialisa lan ngliwati filter mligi (dialyzer). Sasampunipun proses penyaringan, darah badhe dipunwangsulaken dhateng salebeting badan pasien.',
      ],
      [
        'Selama tindakan berlangsung, kondisi pasien seperti tekanan darah, denyut jantung, dan kondisi umum akan dipantau oleh tenaga medis.',
        'During the procedure, the patient’s condition, such as blood pressure, heart rate, and general condition, is monitored by medical staff.',
        'Salebetipun tindakan lumampah, kawontenan pasien kados ta tekanan darah, denyut jantung, lan kawontenan umum badhe dipunpantau dening tenaga medis.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien selama menjalani Hemodialisa?', '4. How is a patient cared for during hemodialysis?', '4. Kados pundi perawatan pasien salebetipun nglampahi Hemodialisa?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menjalani terapi:', 'Things to pay attention to while the patient is undergoing therapy:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien nglampahi terapi:']],
    pts: [
      ['Menjaga kebersihan area akses pembuluh darah.', 'Keep the blood vessel access area clean.', 'Njagi kabersihan area akses pembuluh darah.'],
      ['Tidak menarik atau mengubah posisi selang dan kateter.', 'Do not pull or reposition the tubing and catheter.', 'Mboten narik utawi ngewahi posisi selang lan kateter.'],
      ['Menjaga area pemasangan kateter agar tetap bersih dan kering.', 'Keep the catheter insertion area clean and dry.', 'Njagi area pemasangan kateter supados tetep resik lan garing.'],
      ['Mematuhi anjuran pembatasan cairan apabila direkomendasikan dokter.', 'Follow fluid restriction advice if recommended by the doctor.', 'Netepi pitutur pembatasan cairan menawi dipunrekomendasikaken dokter.'],
      ['Mengikuti pengaturan pola makan sesuai anjuran tenaga medis.', 'Follow the diet plan advised by medical staff.', 'Netepi pangaturan pola dhahar miturut pitutur tenaga medis.'],
      ['Segera melaporkan kepada perawat apabila pasien mengalami pusing, mual, kram, perdarahan, atau keluhan lainnya.', 'Report to the nurse right away if the patient feels dizzy, nauseous, has cramps, bleeding, or other complaints.', 'Enggal matur dhateng perawat menawi pasien ngalami pusing, mual, kram, perdarahan, utawi keluhan sanesipun.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami beberapa hal berikut:', 'The patient’s family should understand the following:', 'Kulawarga pasien dipunajab mangertosi bab-bab ing ngandhap menika:']],
    pts: [
      ['Hemodialisa merupakan terapi yang membantu menggantikan sebagian fungsi ginjal.', 'Hemodialysis is a therapy that helps replace part of the kidney’s function.', 'Hemodialisa menika terapi ingkang mbantu nggantosi saperangan fungsi ginjal.'],
      ['Lama dan frekuensi tindakan disesuaikan dengan kondisi pasien.', 'The duration and frequency of treatment are adjusted to the patient’s condition.', 'Dangu lan frekuensi tindakan dipunjumbuhaken kaliyan kawontenan pasien.'],
      ['Selama proses terapi, pasien membutuhkan pemantauan oleh tenaga medis.', 'During therapy, the patient needs monitoring by medical staff.', 'Salebetipun proses terapi, pasien mbetahaken pemantauan dening tenaga medis.'],
      ['Keluarga tidak diperbolehkan menyentuh, menarik, atau mengatur selang dan kateter hemodialisa.', 'The family must not touch, pull, or adjust the hemodialysis tubing and catheter.', 'Kulawarga mboten kepareng ndemek, narik, utawi ngatur selang lan kateter hemodialisa.'],
      ['Keluarga perlu mendukung pasien dalam mengikuti anjuran dokter.', 'The family should support the patient in following the doctor’s advice.', 'Kulawarga perlu nyengkuyung pasien anggenipun netepi pitutur dokter.'],
      ['Segera laporkan kepada perawat apabila terdapat perubahan kondisi pasien selama tindakan berlangsung.', 'Report to the nurse right away if the patient’s condition changes during the procedure.', 'Enggal matur dhateng perawat menawi wonten ewah-ewahan kawontenan pasien salebetipun tindakan lumampah.'],
    ],
  }),
  sec(['6. Kapan terapi Hemodialisa dapat dihentikan?', '6. When can hemodialysis be stopped?', '6. Kapan terapi Hemodialisa saged dipunkendelaken?'], {
    p: [[
      'Penghentian terapi hemodialisa ditentukan oleh dokter berdasarkan kondisi dan perkembangan fungsi ginjal pasien. Pada pasien dengan gangguan ginjal kronis, hemodialisa mungkin diperlukan secara rutin dalam jangka panjang. Sementara itu, pada kondisi gangguan ginjal akut, terapi dapat dihentikan apabila fungsi ginjal sudah membaik dan pasien tidak lagi membutuhkan dialisis.',
      'The decision to stop hemodialysis is made by the doctor based on the patient’s condition and the progress of kidney function. Patients with chronic kidney disease may need hemodialysis regularly over the long term. In acute kidney impairment, therapy can be stopped once kidney function has improved and the patient no longer needs dialysis.',
      'Pamandheging terapi hemodialisa dipuntemtokaken dening dokter adhedhasar kawontenan lan perkembangan fungsi ginjal pasien. Ing pasien kanthi gangguan ginjal kronis, hemodialisa saged ugi dipunbetahaken kanthi rutin ing wekdal ingkang dangu. Dene ing kawontenan gangguan ginjal akut, terapi saged dipunkendelaken menawi fungsi ginjal sampun mindhak sae lan pasien sampun mboten mbetahaken dialisis.',
    ]],
  }),
]

const ett: EducationTopic = {
  slug: 'ett',
  title: { id: 'Alat ETT', en: 'ETT (Endotracheal Tube)', jv: 'Piranti ETT' },
  summary: {
    id: 'ETT (Endotracheal Tube) adalah selang khusus yang dimasukkan melalui mulut menuju saluran pernapasan (trakea). Alat ini digunakan untuk membantu pasien bernapas ketika pasien tidak mampu bernapas secara optimal atau membutuhkan bantuan alat ventilator.',
    en: 'An ETT (Endotracheal Tube) is a special tube inserted through the mouth into the airway (trachea). It is used to help the patient breathe when they cannot breathe adequately or need support from a ventilator.',
    jv: 'ETT (Endotracheal Tube) inggih menika selang mligi ingkang dipunlebetaken lumantar tutuk dhateng saluran pernapasan (trakea). Piranti menika dipunagem kangge mbantu pasien ambegan nalika pasien mboten saged ambegan kanthi optimal utawi mbetahaken bantuan piranti ventilator.',
  },
  image: img('/images/ett.webp', ['Selang ETT (endotracheal tube)', 'ETT (endotracheal tube)', 'Selang ETT (endotracheal tube)']),
  illustration: img('/images/ett-ilustrasi.webp', [
    'Ilustrasi intubasi: selang endotrakeal dimasukkan melalui mulut ke trakea dengan bantuan laringoskop, panah menunjukkan aliran udara',
    'Intubation illustration: an endotracheal tube inserted through the mouth into the trachea with a laryngoscope, arrows showing the airflow',
    'Ilustrasi intubasi: selang endotrakeal dipunlebetaken lumantar tutuk dhateng trakea kanthi bantuan laringoskop, panah nedahaken ilining hawa',
  ]),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan ETT merupakan salah satu tindakan medis untuk membantu memenuhi kebutuhan pernapasan pasien. Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat penting dalam proses perawatan pasien.',
      'Placing an ETT is a medical procedure that helps meet the patient’s breathing needs. Family support, calmness, and cooperation with doctors and nurses are very important in the patient’s care.',
      'Pemasangan ETT menika salah satunggaling tindakan medis kangge mbantu nyekapi kabetahan pernapasan pasien. Panyengkuyung kulawarga, katentreman, saha kerja sama kaliyan dokter lan perawat wigati sanget ing proses perawatan pasien.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
ett.sections = [
  sec(['1. Apa itu ETT?', '1. What is an ETT?', '1. Menapa menika ETT?'], { p: [[ett.summary.id, ett.summary.en, ett.summary.jv]] }),
  sec(['2. Mengapa ETT perlu dipasang?', '2. Why does an ETT need to be placed?', '2. Kenging menapa ETT perlu dipunpasang?'], {
    p: [['Pemasangan ETT dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'An ETT is placed based on the patient’s condition and medical needs, including:', 'Pemasangan ETT dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, ing antawisipun:']],
    pts: [
      ['Pasien mengalami kesulitan bernapas.', 'The patient has difficulty breathing.', 'Pasien ngalami kangelan ambegan.'],
      ['Pasien membutuhkan bantuan ventilator.', 'The patient needs ventilator support.', 'Pasien mbetahaken bantuan ventilator.'],
      ['Pasien tidak mampu mempertahankan jalan napas dengan baik.', 'The patient cannot keep their airway open properly.', 'Pasien mboten saged njagi jalan napas kanthi sae.'],
      ['Pasien mengalami penurunan kesadaran sehingga perlindungan jalan napas terganggu.', 'The patient has decreased consciousness, so airway protection is impaired.', 'Pasien ngalami penurunan kesadaran satemah perlindungan jalan napas keganggu.'],
      ['Pasien membutuhkan dukungan pernapasan secara intensif.', 'The patient needs intensive breathing support.', 'Pasien mbetahaken panyengkuyung pernapasan kanthi intensif.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan ETT?', '3. How is an ETT placed?', '3. Kados pundi proses pemasangan ETT?'], {
    p: [
      [
        'Pemasangan ETT dilakukan oleh dokter atau tenaga medis yang memiliki kompetensi dengan prosedur medis yang sesuai. Selama proses pemasangan, kondisi pernapasan dan tanda-tanda vital pasien akan dipantau secara ketat.',
        'An ETT is placed by a doctor or competent medical staff following the proper medical procedure. During placement, the patient’s breathing and vital signs are closely monitored.',
        'Pemasangan ETT dipuntindakaken dening dokter utawi tenaga medis ingkang gadhah kompetensi kanthi prosedur medis ingkang jumbuh. Salebetipun proses pemasangan, kawontenan pernapasan lan tanda-tanda vital pasien badhe dipunpantau kanthi ketat.',
      ],
      [
        'Setelah terpasang, selang ETT akan dihubungkan dengan alat bantu napas (ventilator) apabila diperlukan.',
        'Once in place, the ETT is connected to a breathing machine (ventilator) if needed.',
        'Sasampunipun kapasang, selang ETT badhe dipunsambungaken kaliyan piranti bantu napas (ventilator) menawi dipunbetahaken.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan ETT?', '4. How is a patient with an ETT cared for?', '4. Kados pundi perawatan pasien ingkang ngagem ETT?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan ETT:', 'Things to pay attention to while the patient has an ETT:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien ngagem ETT:']],
    pts: [
      ['Menjaga kebersihan area mulut dan selang ETT.', 'Keep the mouth area and the ETT clean.', 'Njagi kabersihan area tutuk lan selang ETT.'],
      ['Tidak menarik, menggeser, atau memegang selang ETT tanpa arahan petugas.', 'Do not pull, move, or hold the ETT without staff directions.', 'Mboten narik, nggeser, utawi nyepeng selang ETT tanpa pitedah petugas.'],
      ['Memastikan posisi selang tetap aman sesuai pengawasan tenaga medis.', 'Make sure the tube stays in a safe position under medical staff supervision.', 'Mesthekaken posisi selang tetep aman miturut pengawasan tenaga medis.'],
      ['Melakukan perawatan mulut secara berkala oleh petugas.', 'Mouth care is done regularly by staff.', 'Nindakaken perawatan tutuk kanthi berkala dening petugas.'],
      ['Mematuhi anjuran dan instruksi dokter serta perawat.', 'Follow the advice and instructions of doctors and nurses.', 'Netepi pitutur lan instruksi dokter saha perawat.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami bahwa:', 'The patient’s family should understand that:', 'Kulawarga pasien dipunajab mangertosi bilih:']],
    pts: [
      ['Pasien yang menggunakan ETT umumnya tidak dapat berbicara seperti biasa karena adanya selang pada saluran pernapasan.', 'Patients with an ETT generally cannot speak as usual because of the tube in their airway.', 'Pasien ingkang ngagem ETT umumipun mboten saged ngendika kados limrahipun amargi wonten selang ing saluran pernapasan.'],
      ['Pasien tetap dapat mendengar suara keluarga, meskipun kemampuan merespons dapat berbeda-beda.', 'Patients can still hear their family’s voices, although their ability to respond may vary.', 'Pasien tetep saged mireng swanten kulawarga, sanadyan kemampuan nanggapi saged beda-beda.'],
      ['Jangan memberikan makanan atau minuman melalui mulut selama ETT terpasang, kecuali atas instruksi tenaga medis.', 'Do not give food or drink by mouth while the ETT is in place, unless instructed by medical staff.', 'Sampun ngantos maringi dhaharan utawi unjukan lumantar tutuk salebetipun ETT kapasang, kajawi miturut instruksi tenaga medis.'],
      ['Keluarga tidak diperbolehkan mengatur atau melepas selang ETT sendiri.', 'The family must not adjust or remove the ETT themselves.', 'Kulawarga mboten kepareng ngatur utawi nglepas selang ETT piyambak.'],
      ['Segera laporkan kepada perawat apabila melihat selang bergeser, alarm berbunyi, atau terdapat perubahan kondisi pasien.', 'Report to the nurse right away if you see the tube shift, an alarm sounds, or the patient’s condition changes.', 'Enggal matur dhateng perawat menawi ningali selang owah posisinipun, alarm muni, utawi wonten ewah-ewahan kawontenan pasien.'],
    ],
  }),
  sec(['6. Apakah ETT bisa dilepas?', '6. Can the ETT be removed?', '6. Menapa ETT saged dipunlepas?'], {
    p: [[
      'ETT dapat dilepas apabila kondisi pasien sudah membaik dan mampu bernapas secara mandiri dengan aman. Keputusan pelepasan ETT dilakukan oleh dokter berdasarkan hasil evaluasi kondisi pasien.',
      'The ETT can be removed once the patient’s condition has improved and they can breathe on their own safely. The decision to remove the ETT is made by the doctor based on an evaluation of the patient’s condition.',
      'ETT saged dipunlepas menawi kawontenan pasien sampun mindhak sae lan saged ambegan piyambak kanthi aman. Keputusan pelepasan ETT dipuntindakaken dening dokter adhedhasar asil evaluasi kawontenan pasien.',
    ]],
  }),
]

const ventilator: EducationTopic = {
  slug: 'ventilator',
  videoUrl: 'https://youtu.be/vWDn8THZfps',
  title: { id: 'Alat Ventilator', en: 'Ventilator', jv: 'Piranti Ventilator' },
  summary: {
    id: 'Ventilator adalah alat bantu pernapasan yang digunakan untuk membantu atau mengambil alih sementara fungsi pernapasan pasien yang mengalami gangguan pernapasan. Alat ini membantu memasukkan oksigen ke dalam paru-paru dan mengeluarkan karbon dioksida dari tubuh sehingga kebutuhan oksigen pasien dapat terpenuhi.',
    en: 'A ventilator is a breathing support device used to assist or temporarily take over the breathing of a patient with breathing problems. It helps move oxygen into the lungs and remove carbon dioxide from the body so the patient’s oxygen needs are met.',
    jv: 'Ventilator inggih menika piranti bantu pernapasan ingkang dipunagem kangge mbantu utawi ngambil alih sawetawis fungsi pernapasan pasien ingkang ngalami gangguan pernapasan. Piranti menika mbantu nglebetaken oksigen dhateng paru-paru lan ngedalaken karbon dioksida saking badan satemah kabetahan oksigen pasien saged kacekapan.',
  },
  image: img('/images/ventilator.webp', ['Alat ventilator di Ruang ICU', 'Ventilator in the ICU', 'Piranti ventilator wonten ing Ruang ICU']),
  sections: [],
  importantMessage: [
    loc([
      'Ventilator merupakan alat bantu pernapasan yang berperan penting dalam mendukung kebutuhan oksigen pasien selama menjalani perawatan intensif.',
      'A ventilator is a breathing support device that plays an important role in meeting the patient’s oxygen needs during intensive care.',
      'Ventilator menika piranti bantu pernapasan ingkang gadhah peran wigati anggenipun nyengkuyung kabetahan oksigen pasien salebetipun nglampahi perawatan intensif.',
    ]),
    loc([
      'Dukungan keluarga, ketenangan, serta kerja sama dengan dokter dan perawat sangat membantu proses perawatan pasien.',
      'Family support, calmness, and cooperation with doctors and nurses greatly help the patient’s care.',
      'Panyengkuyung kulawarga, katentreman, saha kerja sama kaliyan dokter lan perawat sanget mbantu proses perawatan pasien.',
    ]),
    loc([
      'Jangan ragu untuk bertanya kepada dokter atau perawat apabila terdapat hal yang belum dipahami.',
      'Do not hesitate to ask the doctor or nurse if there is anything you do not yet understand.',
      'Sampun mamang nyuwun pirsa dhateng dokter utawi perawat menawi wonten bab ingkang dereng dipunmangertosi.',
    ]),
  ],
  complete: true,
}
ventilator.sections = [
  sec(['1. Apa itu Ventilator?', '1. What is a ventilator?', '1. Menapa menika Ventilator?'], { p: [[ventilator.summary.id, ventilator.summary.en, ventilator.summary.jv]] }),
  sec(['2. Mengapa pasien perlu menggunakan Ventilator?', '2. Why does a patient need a ventilator?', '2. Kenging menapa pasien perlu ngagem Ventilator?'], {
    p: [['Penggunaan ventilator dilakukan berdasarkan kondisi dan kebutuhan medis pasien, seperti:', 'A ventilator is used based on the patient’s condition and medical needs, such as:', 'Panganggening ventilator dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, kados ta:']],
    pts: [
      ['Pasien mengalami kesulitan bernapas berat.', 'The patient has severe difficulty breathing.', 'Pasien ngalami kangelan ambegan ingkang awrat.'],
      ['Pasien mengalami kekurangan oksigen.', 'The patient lacks oxygen.', 'Pasien ngalami kekirangan oksigen.'],
      ['Pasien tidak mampu bernapas secara mandiri dengan baik.', 'The patient cannot breathe well on their own.', 'Pasien mboten saged ambegan piyambak kanthi sae.'],
      ['Pasien mengalami penurunan kesadaran yang memengaruhi kemampuan bernapas.', 'The patient has decreased consciousness that affects their ability to breathe.', 'Pasien ngalami penurunan kesadaran ingkang ngaruhi kemampuan ambegan.'],
      ['Pasien membutuhkan bantuan pernapasan selama menjalani perawatan intensif.', 'The patient needs breathing support during intensive care.', 'Pasien mbetahaken bantuan pernapasan salebetipun nglampahi perawatan intensif.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan Ventilator?', '3. How is a ventilator set up?', '3. Kados pundi proses pemasangan Ventilator?'], {
    p: [
      [
        'Ventilator dipasang oleh tenaga medis sesuai kondisi pasien. Pada pasien yang membutuhkan bantuan napas melalui ETT, selang pernapasan akan dihubungkan dengan ventilator.',
        'A ventilator is set up by medical staff according to the patient’s condition. For patients who need breathing support through an ETT, the breathing tube is connected to the ventilator.',
        'Ventilator dipunpasang dening tenaga medis miturut kawontenan pasien. Ing pasien ingkang mbetahaken bantuan napas lumantar ETT, selang pernapasan badhe dipunsambungaken kaliyan ventilator.',
      ],
      [
        'Setelah terpasang, tenaga medis akan mengatur bantuan pernapasan sesuai kebutuhan pasien dan melakukan pemantauan secara berkala terhadap kondisi pernapasan serta tanda-tanda vital.',
        'Once connected, medical staff adjust the breathing support to the patient’s needs and regularly monitor breathing and vital signs.',
        'Sasampunipun kapasang, tenaga medis badhe ngatur bantuan pernapasan miturut kabetahan pasien lan nindakaken pemantauan kanthi berkala dhateng kawontenan pernapasan saha tanda-tanda vital.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien yang menggunakan Ventilator?', '4. How is a patient on a ventilator cared for?', '4. Kados pundi perawatan pasien ingkang ngagem Ventilator?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan ventilator:', 'Things to pay attention to while the patient is on a ventilator:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien ngagem ventilator:']],
    pts: [
      ['Menjaga kebersihan lingkungan dan area sekitar pasien.', 'Keep the environment and the area around the patient clean.', 'Njagi kabersihan lingkungan lan area sakiwa-tengenipun pasien.'],
      ['Tidak menyentuh, menarik, atau mengubah posisi selang dan kabel ventilator.', 'Do not touch, pull, or reposition the ventilator tubing and cables.', 'Mboten ndemek, narik, utawi ngewahi posisi selang lan kabel ventilator.'],
      ['Menjaga posisi selang agar tetap aman sesuai arahan petugas.', 'Keep the tubing in a safe position as directed by staff.', 'Njagi posisi selang supados tetep aman miturut pitedah petugas.'],
      ['Melakukan perawatan mulut dan saluran pernapasan sesuai prosedur.', 'Mouth and airway care is done according to procedure.', 'Nindakaken perawatan tutuk lan saluran pernapasan miturut prosedur.'],
      ['Memastikan pasien mendapatkan pemantauan secara berkala oleh tenaga medis.', 'Make sure the patient is monitored regularly by medical staff.', 'Mesthekaken pasien pikantuk pemantauan kanthi berkala dening tenaga medis.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien perlu memahami beberapa hal berikut:', 'The patient’s family needs to understand the following:', 'Kulawarga pasien perlu mangertosi bab-bab ing ngandhap menika:']],
    pts: [
      ['Pasien yang menggunakan ventilator melalui ETT umumnya belum dapat berbicara seperti biasa.', 'Patients on a ventilator through an ETT generally cannot yet speak as usual.', 'Pasien ingkang ngagem ventilator lumantar ETT umumipun dereng saged ngendika kados limrahipun.'],
      ['Pasien mungkin membutuhkan bantuan ventilator selama beberapa waktu, tergantung perkembangan kondisinya.', 'The patient may need ventilator support for some time, depending on how their condition develops.', 'Pasien saged ugi mbetahaken bantuan ventilator salebetipun sawetawis wekdal, gumantung perkembangan kawontenanipun.'],
      ['Keluarga tidak diperbolehkan melepas atau mengatur alat ventilator sendiri.', 'The family must not disconnect or adjust the ventilator themselves.', 'Kulawarga mboten kepareng nglepas utawi ngatur piranti ventilator piyambak.'],
      ['Jangan memberikan makanan atau minuman melalui mulut tanpa persetujuan tenaga medis.', 'Do not give food or drink by mouth without the approval of medical staff.', 'Sampun ngantos maringi dhaharan utawi unjukan lumantar tutuk tanpa persetujuan tenaga medis.'],
      ['Keluarga dapat memberikan dukungan emosional dengan berbicara secara tenang kepada pasien.', 'The family can give emotional support by speaking calmly to the patient.', 'Kulawarga saged maringi panyengkuyung emosional kanthi ngendika kanthi tenang dhateng pasien.'],
      ['Segera laporkan kepada perawat apabila alarm ventilator berbunyi atau terlihat perubahan kondisi pasien.', 'Report to the nurse right away if the ventilator alarm sounds or you notice a change in the patient’s condition.', 'Enggal matur dhateng perawat menawi alarm ventilator muni utawi katingal ewah-ewahan kawontenan pasien.'],
    ],
  }),
  sec(['6. Kapan Ventilator dapat dilepas?', '6. When can the ventilator be removed?', '6. Kapan Ventilator saged dipunlepas?'], {
    p: [[
      'Ventilator dapat dihentikan secara bertahap apabila kondisi pasien sudah membaik dan mampu bernapas secara mandiri dengan aman. Dokter akan melakukan evaluasi kemampuan bernapas pasien sebelum memutuskan penghentian bantuan ventilator dan, jika pasien menggunakan ETT, pelepasan selang pernapasan.',
      'Ventilator support can be stopped gradually once the patient’s condition has improved and they can breathe on their own safely. The doctor will evaluate the patient’s breathing ability before deciding to stop ventilator support and, if the patient has an ETT, to remove the breathing tube.',
      'Ventilator saged dipunkendelaken kanthi mbaka sekedhik menawi kawontenan pasien sampun mindhak sae lan saged ambegan piyambak kanthi aman. Dokter badhe nindakaken evaluasi kemampuan ambegan pasien saderengipun mutusaken mandhegaken bantuan ventilator lan, menawi pasien ngagem ETT, pelepasan selang pernapasan.',
    ]],
  }),
]

const cvp: EducationTopic = {
  slug: 'cvp',
  videoUrl: 'https://youtu.be/1HOQiJUyQXA',
  title: { id: 'Alat CVP', en: 'CVP (Central Venous Pressure) Line', jv: 'Piranti CVP' },
  summary: {
    id: 'CVP (Central Venous Pressure) adalah prosedur pemasangan kateter atau selang khusus ke dalam pembuluh darah vena besar yang berada di dekat jantung. Alat ini digunakan untuk membantu pemantauan tekanan vena sentral, pemberian cairan, obat-obatan tertentu, serta mendukung perawatan pasien dengan kondisi kritis.',
    en: 'CVP (Central Venous Pressure) is a procedure in which a special catheter or tube is placed into a large vein near the heart. It is used to help monitor central venous pressure, give fluids and certain medicines, and support the care of critically ill patients.',
    jv: 'CVP (Central Venous Pressure) inggih menika prosedur pemasangan kateter utawi selang mligi dhateng salebeting pembuluh darah vena ageng ingkang wonten ing celakipun jantung. Piranti menika dipunagem kangge mbantu pemantauan tekanan vena sentral, paring cairan, obat-obatan tartamtu, saha nyengkuyung perawatan pasien kanthi kawontenan kritis.',
  },
  image: img('/images/cvp.webp', ['Kateter CVP', 'CVP catheter', 'Kateter CVP']),
  sections: [],
  importantMessage: [
    loc([
      'Pemasangan CVP merupakan salah satu tindakan medis yang membantu pemantauan kondisi pasien serta pemberian terapi selama menjalani perawatan intensif.',
      'Placing a CVP line is a medical procedure that helps monitor the patient’s condition and deliver therapy during intensive care.',
      'Pemasangan CVP menika salah satunggaling tindakan medis ingkang mbantu pemantauan kawontenan pasien saha paring terapi salebetipun nglampahi perawatan intensif.',
    ]),
    loc([
      'Kerja sama keluarga dalam menjaga keamanan alat, memperhatikan kebersihan, dan mengikuti arahan petugas sangat penting untuk mencegah terjadinya komplikasi.',
      'The family’s cooperation in keeping the device safe, paying attention to cleanliness, and following staff directions is very important to prevent complications.',
      'Kerja sama kulawarga anggenipun njagi keamanan piranti, nggatosaken kabersihan, lan netepi pitedah petugas wigati sanget kangge nyegah kedadosanipun komplikasi.',
    ]),
    loc(ASK),
  ],
  complete: true,
}
cvp.sections = [
  sec(['1. Apa itu CVP?', '1. What is a CVP?', '1. Menapa menika CVP?'], { p: [[cvp.summary.id, cvp.summary.en, cvp.summary.jv]] }),
  sec(['2. Mengapa pasien perlu dipasang CVP?', '2. Why does a patient need a CVP?', '2. Kenging menapa pasien perlu dipunpasang CVP?'], {
    p: [['Pemasangan CVP dilakukan berdasarkan kondisi dan kebutuhan medis pasien, antara lain:', 'A CVP is placed based on the patient’s condition and medical needs, including:', 'Pemasangan CVP dipuntindakaken adhedhasar kawontenan lan kabetahan medis pasien, ing antawisipun:']],
    pts: [
      ['Membutuhkan pemantauan tekanan vena sentral.', 'Central venous pressure needs to be monitored.', 'Mbetahaken pemantauan tekanan vena sentral.'],
      ['Membutuhkan akses pembuluh darah untuk pemberian obat-obatan tertentu.', 'Blood vessel access is needed to give certain medicines.', 'Mbetahaken akses pembuluh darah kangge paring obat-obatan tartamtu.'],
      ['Membutuhkan pemberian cairan melalui pembuluh darah besar.', 'Fluids need to be given through a large blood vessel.', 'Mbetahaken paring cairan lumantar pembuluh darah ageng.'],
      ['Memerlukan akses pembuluh darah dalam perawatan intensif.', 'Blood vessel access is required during intensive care.', 'Mbetahaken akses pembuluh darah ing perawatan intensif.'],
      ['Mengalami kondisi kritis yang membutuhkan pemantauan dan penanganan khusus.', 'The patient is in a critical condition that needs special monitoring and treatment.', 'Ngalami kawontenan kritis ingkang mbetahaken pemantauan lan penanganan mligi.'],
    ],
  }),
  sec(['3. Bagaimana proses pemasangan CVP?', '3. How is a CVP placed?', '3. Kados pundi proses pemasangan CVP?'], {
    p: [
      [
        'Pemasangan CVP dilakukan oleh dokter atau tenaga medis yang memiliki kompetensi dengan memperhatikan prosedur steril. Kateter dimasukkan ke dalam pembuluh darah vena besar, kemudian dipastikan posisinya sesuai sebelum digunakan.',
        'A CVP is placed by a doctor or competent medical staff following sterile procedure. The catheter is inserted into a large vein, and its position is confirmed before use.',
        'Pemasangan CVP dipuntindakaken dening dokter utawi tenaga medis ingkang gadhah kompetensi kanthi nggatosaken prosedur steril. Kateter dipunlebetaken dhateng pembuluh darah vena ageng, lajeng dipunpesthekaken posisinipun sampun jumbuh saderengipun dipunagem.',
      ],
      [
        'Setelah terpasang, kateter akan difiksasi agar tidak mudah bergeser dan dapat dihubungkan dengan alat pemantauan atau jalur pemberian cairan dan obat sesuai kebutuhan pasien.',
        'Once in place, the catheter is secured so it does not shift easily, and it can be connected to monitoring equipment or to lines for fluids and medicines as the patient needs.',
        'Sasampunipun kapasang, kateter badhe dipunfiksasi supados mboten gampil owah posisinipun lan saged dipunsambungaken kaliyan piranti pemantauan utawi jalur paring cairan lan obat miturut kabetahan pasien.',
      ],
    ],
  }),
  sec(['4. Bagaimana perawatan pasien dengan CVP?', '4. How is a patient with a CVP cared for?', '4. Kados pundi perawatan pasien ingkang ngagem CVP?'], {
    p: [['Hal-hal yang perlu diperhatikan selama pasien menggunakan CVP:', 'Things to pay attention to while the patient has a CVP:', 'Bab-bab ingkang perlu dipungatosaken salebetipun pasien ngagem CVP:']],
    pts: [
      ['Menjaga kebersihan area pemasangan kateter.', 'Keep the catheter insertion area clean.', 'Njagi kabersihan area pemasangan kateter.'],
      ['Menjaga balutan CVP agar tetap bersih, kering, dan tidak terbuka.', 'Keep the CVP dressing clean, dry, and closed.', 'Njagi balutan CVP supados tetep resik, garing, lan mboten kabikak.'],
      ['Tidak menarik, memegang, atau mengubah posisi selang CVP sendiri.', 'Do not pull, hold, or reposition the CVP tube yourself.', 'Mboten narik, nyepeng, utawi ngewahi posisi selang CVP piyambak.'],
      ['Menghindari tekanan atau tarikan pada area pemasangan.', 'Avoid pressure or pulling on the insertion area.', 'Nyingkiri tekanan utawi tarikan ing area pemasangan.'],
      ['Memastikan perawatan dan penggantian balutan dilakukan oleh petugas sesuai prosedur.', 'Make sure care and dressing changes are done by staff according to procedure.', 'Mesthekaken perawatan lan penggantian balutan dipuntindakaken dening petugas miturut prosedur.'],
      ['Segera melaporkan kepada perawat apabila area pemasangan terlihat kemerahan, bengkak, berdarah, atau terdapat cairan yang keluar.', 'Report to the nurse right away if the insertion area looks red, swollen, is bleeding, or has fluid coming out.', 'Enggal matur dhateng perawat menawi area pemasangan katingal abrit, abuh, medal darahipun, utawi wonten cairan ingkang medal.'],
    ],
  }),
  sec(['5. Apa yang perlu diketahui keluarga pasien?', '5. What should the patient’s family know?', '5. Menapa ingkang perlu dipunmangertosi kulawarga pasien?'], {
    p: [['Keluarga pasien diharapkan memahami bahwa:', 'The patient’s family should understand that:', 'Kulawarga pasien dipunajab mangertosi bilih:']],
    pts: [
      ['CVP merupakan alat medis yang membantu pemantauan dan pemberian terapi kepada pasien.', 'A CVP is a medical device that helps with monitoring and giving therapy to the patient.', 'CVP menika piranti medis ingkang mbantu pemantauan lan paring terapi dhateng pasien.'],
      ['Selang CVP harus dijaga agar tidak tertarik atau terlepas.', 'The CVP tube must be protected so it is not pulled or dislodged.', 'Selang CVP kedah dipunjagi supados mboten ketarik utawi ucul.'],
      ['Keluarga tidak diperbolehkan membuka balutan atau mengatur jalur CVP sendiri.', 'The family must not open the dressing or adjust the CVP line themselves.', 'Kulawarga mboten kepareng mbikak balutan utawi ngatur jalur CVP piyambak.'],
      ['Pasien perlu mendapatkan pengawasan selama menggunakan CVP.', 'The patient needs supervision while the CVP is in place.', 'Pasien perlu pikantuk pengawasan salebetipun ngagem CVP.'],
      ['Keluarga dapat membantu menjaga kebersihan dan kenyamanan pasien.', 'The family can help keep the patient clean and comfortable.', 'Kulawarga saged mbantu njagi kabersihan lan kanyamanan pasien.'],
      ['Segera hubungi perawat apabila terdapat keluhan atau perubahan pada area pemasangan CVP.', 'Contact the nurse right away if there are complaints or changes at the CVP insertion area.', 'Enggal ngabari perawat menawi wonten keluhan utawi ewah-ewahan ing area pemasangan CVP.'],
    ],
  }),
  sec(['6. Kapan CVP dapat dilepas?', '6. When can the CVP be removed?', '6. Kapan CVP saged dipunlepas?'], {
    p: [[
      'CVP dapat dilepas apabila sudah tidak diperlukan berdasarkan kondisi dan kebutuhan medis pasien. Keputusan pelepasan dilakukan oleh dokter atau tenaga medis yang berwenang setelah melakukan evaluasi terhadap kondisi pasien.',
      'The CVP can be removed when it is no longer needed based on the patient’s condition and medical needs. The decision to remove it is made by the doctor or authorized medical staff after evaluating the patient’s condition.',
      'CVP saged dipunlepas menawi sampun mboten dipunbetahaken adhedhasar kawontenan lan kabetahan medis pasien. Keputusan pelepasan dipuntindakaken dening dokter utawi tenaga medis ingkang wenang sasampunipun nindakaken evaluasi dhateng kawontenan pasien.',
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
