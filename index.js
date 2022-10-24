const router = require("express").Router();

router.use("/kecamatan", require("./module/kecamatan/route"));
router.use("/kelasKunjungan", require("./module/kelas_kunjungan/route"));
router.use("/kelurahan", require("./module/kelurahan/route"));
router.use("/kota", require("./module/kota/route"));
router.use("/msAsuransi", require("./module/ms_asuransi/route"));
router.use("/msBed", require("./module/ms_bed/route"));
router.use("/msGolonganDarah", require("./module/ms_golongan_darah/route"));
router.use("/msGolonganKelasAplicares", require("./module/ms_golongan_kelas_aplicares/route"));
router.use("/msJenisLayanan", require("./module/ms_jenis_layanan/route"));
router.use("/msKamar", require("./module/ms_kamar/route"));
router.use("/msKelasKamarSirOnline", require("./module/ms_kelas_kamar_sirsonline/route"));
router.use("/msKelasKamar", require("./module/ms_kelas_kamar/route"));
router.use("/msPekerjaan", require("./module/ms_pekerjaan/route"));
router.use("/msPendidikan", require("./module/ms_pendidikan/route"));
router.use("/msRuang", require("./module/ms_ruang/route"));
router.use("/pasien", require("./module/pasien/route"));
router.use("/provinsi", require("./module/provinsi/route"));
router.use("/ruangAplicares", require("./module/ruang_aplicares/route"));
router.use("/users", require("./module/users/route"));
router.use("/msEtnis", require("./module/ms_etnis/route"));
router.use("/panggilan",require('./module/panggilan/route'));
router.use("/msLayanan",require('./module/ms_layanan/route'));
router.use("/ruangLayanan",require('./module/ruang_layanan/route'));
router.use("/msSpecialist",require('./module/ms_specialist/route'));
router.use("/msKualifikasi",require('./module/ms_kualifikasi/route'));
router.use("/msPoliklinik",require('./module/ms_poliklinik/route'));
router.use("/msBank",require('./module/ms_bank/route'));
router.use("/msDokter",require('./module/ms_dokter/route'));
router.use("/jadwalDokter",require('./module/jadwal_dokter/route'));
router.use("/registrasi",require('./module/registrasi/route'));
router.use("/bedBookig",require('./module/bed_booking/route'));
router.use("/historyBed",require('./module/history_bed/route'));
router.use("/sepRegis",require('./module/sep_regis/route'));


module.exports = router;
