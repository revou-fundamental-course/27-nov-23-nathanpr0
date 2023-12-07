class SegiTiga {
  /**
   * @param {string} ID1 - Masukkan DOM ID1 sebagai Value Alas
   * @param {string} ID2 - Masukkan DOM ID2 sebagai Value Tinggi
   * @returns {number}
   */
  hitungLuas(ID1, ID2) {
    // Membuat Event Luas Segitiga pada tombol Hitung
    document.getElementById("hitung-luas").addEventListener("click", (event) => {
      // Mencegah Perpindahan | Refresh pada website
      event.preventDefault();

      // Mengambil Value dari inputan
      let alas = document.getElementById(ID1).value;
      let tinggi = document.getElementById(ID2).value;

      alas = Number(alas);
      tinggi = Number(tinggi);

      // Membuat tag HTML Baru untuk di jadikan output Perhitungan
      const outputL = document.createElement("p");
      outputL.setAttribute("id", "hasil-luas");
      outputL.style.fontSize = "1.15em";

      // Melakukan perhitungan Luas Segitiga
      if (alas !== 0 && tinggi !== 0) {
        const hasilL = (alas * tinggi) / 2;
        outputL.textContent = `Luas Segitiga = ${hasilL} cm²`;
        outputL.style.color = "#595959";
      } else {
        outputL.style.color = "#ff0000";

        // Penanganan error jika salah satu input kosong
        if (alas === 0) {
          outputL.textContent = "Nilai Alas tidak valid!";
        } else if (tinggi === 0) {
          outputL.textContent = "Nilai Tinggi tidak valid!";
        }
      }

      // Menyisipkan elemen baru sebelum button "hitung-luas"
      const elemenParentL = document.getElementById("fitur-luas-segitiga");
      const posisiBeforeL = document.getElementById("hitung-luas");
      elemenParentL.insertBefore(outputL, posisiBeforeL);
    });

    // Membuat Event pada tombol Reset
    document.getElementById("reset-luas").addEventListener("click", function () {
      const deleteEl = document.getElementById("hasil-luas");
      deleteEl.parentNode.removeChild(deleteEl);
    });
  }

  /**
   * @param {string} ID1 - Masukkan DOM ID1 sebagai Value Sisi ke-1
   * @param {string} ID2 - Masukkan DOM ID2 sebagai Value Sisi ke-2
   * @param {string} ID3 - Masukkan DOM ID3 sebagai Value Sisi ke-3
   * @returns {number}
   */
  hitungKeliling(ID1, ID2, ID3) {
    function keliling(event) {
      // Mencegah Perpindahan | Refresh pada website
      event.preventDefault();

      // Mengambil Value dari inputan
      let sisi1 = document.getElementById(ID1).value;
      let sisi2 = document.getElementById(ID2).value;
      let sisi3 = document.getElementById(ID3).value;

      sisi1 = Number(sisi1);
      sisi2 = Number(sisi2);
      sisi3 = Number(sisi3);

      // Membuat tag HTML Baru untuk di jadikan output Perhitungan
      const outputK = document.createElement("p");
      outputK.setAttribute("id", "hasil-keliling");
      outputK.style.fontSize = "1.15em";

      // Melakukan perhitungan Keliling Segitiga
      if (sisi1 !== 0 && sisi2 !== 0 && sisi3 !== 0) {
        const hasil = sisi1 + sisi2 + sisi3;
        outputK.textContent = `Keliling Segitiga = ${hasil} cm`;
        outputK.style.color = "#595959";
      } else {
        outputK.style.color = "#ff0000";

        // Penanganan error jika salah satu input kosong
        if (sisi1 === 0) {
          outputK.textContent = "Nilai Sisi ke-1 tidak valid!";
        } else if (sisi2 === 0) {
          outputK.textContent = "Nilai Sisi ke-2 tidak valid!";
        } else if (sisi3 === 0) {
          outputK.textContent = "Nilai Sisi ke-3 tidak valid!";
        }
      }

      // Menyisipkan elemen baru sebelum button "hitung-keliling"
      const elemenParentK = document.getElementById("fitur-keliling-segitiga");
      const posisiBeforeK = document.getElementById("hitung-keliling");
      elemenParentK.insertBefore(outputK, posisiBeforeK);
    }

    // Membuat Event Keliling Segitiga pada tombol Hitung
    document.getElementById("hitung-keliling").addEventListener("click", keliling);

    // Membuat Event pada tombol Reset
    document.getElementById("reset-keliling").addEventListener("click", function () {
      const deleteEK = document.getElementById("hasil-keliling");
      deleteEK.parentNode.removeChild(deleteEK);
    });
  }
}

const action = new SegiTiga();
action.hitungLuas("alas", "tinggi");
action.hitungKeliling("sisi1", "sisi2", "sisi3");
