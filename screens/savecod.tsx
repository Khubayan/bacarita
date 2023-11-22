import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Berita = ({judul, gambar, teks}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrlview} stickyHeaderIndices={[1]}>
        <Text style={styles.judul}>
          Salah Satu Pendiri Apple Sempat Buat Kripto WOZX Coin, Apa Itu?
        </Text>
        <Text style={styles.inteks} >  
          Ilustrasi Mata Uang Crypto. Foto: Unsplash+
          </Text>
        <Image source={require('../Source/Crypto.jpg')} style={styles.gambar} />
        <Text style={styles.isi}>
          Efforce (WOZX) adalah token cryptocurrency asli dari platform
          efisiensi energi Efforce. Diluncurkan pada Desember 2020, proyek WOZX
          Coin adalah gagasan Steve Wozniak, salah satu pendiri Apple. Dilansir
          dari Coinmarketcap, tujuan utama dari Efforce adalah untuk
          mendemokratisasikan industri efisiensi energi, yang hingga hari ini
          masih menghadapi masalah keuangan dan jangkauan global.
        </Text>
        <Text style={styles.isi}>
          Token WOZX berfungsi sebagai media di mana penghematan energi yang
          dibuat pada platform Efforce diberi token untuk digunakan oleh setiap
          pengguna. Pendiri Efforce Sesuai dengan namanya, (WOZX) didirikan dan
          dikembangkan oleh Steve Wozniak, sang maestro IT yang dikenal di
          seluruh dunia karena ikut mendirikan Apple bersama Steve Jobs. Wozniak
          telah menyatakan pada saat itu, salah satu tujuan utamanya adalah
          meningkatkan efisiensi energi dalam teknologi yang sedang berkembang,
          dengan Apple akan fokus pada mesin yang lebih kecil dan lebih efisien.
          Efforce melanjutkan etos itu, dengan siaran pers resmi saat peluncuran
          yang menggambarkan produk tersebut sebagai "platform terdesentralisasi
          pertama yang memungkinkan setiap orang untuk berpartisipasi dan
          mendapatkan keuntungan finansial dari proyek efisiensi energi di
          seluruh dunia, dan menciptakan perubahan lingkungan yang berarti.”
          Adapun pendiri perusahaan lainnya Jacopo Vanetti dan Andrea
          Castiglione yang memiliki pengalaman lebih dari satu dekade di
          industri efisiensi energi.
        </Text>
        <Text style={styles.isi}>
          Berapa Banyak Koin EFFORCE (WOZX) yang Beredar? Token EFFORCE (WOZX)
          adalah cryptocurrency standar ERC-20 dengan batas tetap di Ethereum
          untuk digunakan dan diperdagangkan secara bersamaan dengan platform
          efisiensi energi Efforce. Pada saat peluncuran ada sebanyak 100 juta
          WOZX dibuat dan pasokan tetap pada 100 persen dari alokasi awal. Dari
          100 juta, 45 persen token akan dialokasikan melalui penempatan
          pribadi. Kemudian 20 persen digunakan untuk Efforce sendiri, 20 persen
          lainnya untuk insentif pertambangan dan 15 persen sisanya untuk
          kegiatan ekosistem dan konsultasi.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  gambar: {
    width: '100%',
    height: 200,
    borderRadius: 50,
    marginTop: 30,
  },
  judul: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inteks: {
    fontSize: 12,
    padding: 1,
    marginTop: 10,
  },
  isi: {
    fontSize: 16,
    padding: 10,
    textAlign: 'justify',
  },

  scrlview: {
    padding: 10,
  },
});

export default Berita;
