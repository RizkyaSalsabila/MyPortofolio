const projects = {
  "sipola": {
    title: "SIPOLA (Sistem Pencatatan Prestasi dan Rekomendasi Lomba Mahasiswa)",
    mainImage: "assets/view/p1.1.PNG",
    images: [
      "assets/view/p1.2.PNG",
      "assets/view/p1.3.PNG",
      "assets/view/p1.4.PNG",
      "assets/view/p1.5.PNG"
    ],
    description:
    "SIPOLA adalah Sistem Pencatatan Prestasi dan Rekomendasi Lomba Mahasiswa yang dikembangkan menggunakan <b>Laravel</b>. Sistem ini membantu mahasiswa dalam <b>melaporkan dan mengarsipkan prestasi lomba</b>, serta memudahkan dosen dalam <b>proses verifikasi data</b>. Selain itu, SIPOLA dilengkapi fitur rekomendasi lomba berbasis <b>Metode ARAS</b> untuk membantu mahasiswa menemukan kompetisi yang sesuai dengan minat dan kemampuan mereka.",
    contribution:
    "Saya berkontribusi dalam pengembangan <b>front-end dan back-end</b> sistem, meliputi <b>pengelolaan role & user</b>, <b>modul manajemen lomba</b>, <b>fitur reset password</b>, serta <b>implementasi perhitungan rekomendasi menggunakan Metode ARAS</b> dengan pemrosesan data dinamis.",
    github: "https://github.com/TyaraKusumaNevada/PBL-2025_SIPOLA"

  },

  "prespol": {
    title: "PRESPOL (Sistem Pencatatan Presatasi Mahasiswa)",
    mainImage: "assets/view/p2.1.PNG",
    images: [
        "assets/view/p2.2.PNG",
        "assets/view/p2.3.PNG",
        "assets/view/p2.4.PNG",
        "assets/view/p2.5.PNG"
    ],
    description: "PRESPOL adalah sistem pencatatan prestasi mahasiswa yang dikembangkan menggunakan <b>Tailwind CSS</b>, <b>PHP native</b>, dan <b>jQuery</b>. Aplikasi ini memudahkan mahasiswa dan admin dalam mencatat, mengelola, dan mengekspor data prestasi secara terstruktur. Selain fitur input dan verifikasi, PRESPOL juga menyediakan fungsi ekspor laporan otomatis ke format seperti <b>PPT</b> dan <b>PDF</b> untuk keperluan dokumentasi atau presentasi.",
    contribution: "Saya bertanggung jawab utama pada pengembangan <b>front-end</b> menggunakan Tailwind CSS dan jQuery, serta membantu tim <b>back-end (PHP native)</b> pada beberapa modul. Selain itu saya juga bertugas membuat dan mengotomasi pembuatan <b>laporan</b> (PPT / PDF) sehingga data siap dipresentasikan atau diarsipkan.",
    github: "https://github.com/RizkyaSalsabila/PRESPOL"
  },

  "slicingSales": {
    title: "Barokah Smartphone - Slicing Design Website E-commerce",
    mainImage: "assets/view/p3.2.PNG",
    images: [
        "assets/view/p3.1.PNG",
        "assets/view/p3.3.PNG",
    ],
    description: "Barokah Smartphone adalah sebuah <b>website e-commerce</b> yang menjual berbagai jenis smartphone dengan <b>harga terjangkau</b>. Website ini merupakan <b>implementasi perlombaan</b> setelah melalui berbagai babak, dimana pada tahap sebelumnya merupakan babak <b>analisis data</b> dan berlanjut ke <b>pembuatan desain di Figma</b>.",

contribution: "Kontribusi saya pada babak ini adalah melakukan <b>slicing desain dari Figma</b> ke dalam bentuk <b>website statis</b> menggunakan <b>HTML</b>, <b>Tailwind CSS</b>, dan <b>jQuery</b> pada halaman <b>Detail Produk</b>, dengan waktu <b>2 jam (koding secara live)</b>.",

github: "https://github.com/RizkyaSalsabila/SlicingDesign_AsaBaswara"

  }
};

// Ambil parameter ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (projects[id]) {
  const p = projects[id];

  document.getElementById("title").innerText = p.title;
  document.getElementById("description").innerHTML = p.description;
  document.getElementById("mainImage").src = p.mainImage;

  // document.getElementById("img1").src = p.images[0];
  // document.getElementById("img2").src = p.images[1];
  // document.getElementById("img3").src = p.images[2];
  // document.getElementById("img4").src = p.images[3];

  const images = p.images || []; // jaga-jaga kalau p.images undefined

  for (let i = 0; i < 4; i++) {
    const imgElement = document.getElementById(`img${i + 1}`);
    const src = images[i];

    if (src) {
      imgElement.src = src;
      imgElement.style.display = "block"; // tampilkan jika ada
    } else {
      imgElement.style.display = "none"; // sembunyikan jika tidak ada
    }
  }

  document.getElementById("contribution").innerHTML = p.contribution;
  document.getElementById("githubLink").href = p.github;
} else {
  document.body.innerHTML = "<h2>Project not found</h2>";
}