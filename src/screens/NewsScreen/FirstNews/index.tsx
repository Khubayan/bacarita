/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FirstNews = params => {
  const [newsData, setNewsData] = useState(params.route.params);
  console.log(newsData, 'news data niiih');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment);
    // Add logic to handle comment submission
    // For example, you can send the comment to a server or update state
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrlview} stickyHeaderIndices={[1]}>
        <Text style={styles.judul}>{newsData.title_berita}</Text>
        <Text style={styles.inteks}>November 20, 2023 - CNBC</Text>
        <Image
          source={require('../../../assets/images/meta.jpg')}
          style={styles.gambar}
        />
        <Text style={styles.isi}>
          <Text style={styles.isi}>{newsData.body_berita}</Text>
          {/* <Text style={styles.isi}>
            Berapa Banyak Koin EFFORCE (WOZX) yang Beredar? Token EFFORCE (WOZX)
            adalah cryptocurrency standar ERC-20 dengan batas tetap di Ethereum
            untuk digunakan dan diperdagangkan secara bersamaan dengan platform
            efisiensi energi Efforce. Pada saat peluncuran ada sebanyak 100 juta
            WOZX dibuat dan pasokan tetap pada 100 persen dari alokasi awal.
            Dari 100 juta, 45 persen token akan dialokasikan melalui penempatan
            pribadi. Kemudian 20 persen digunakan untuk Efforce sendiri, 20
            persen lainnya untuk insentif pertambangan dan 15 persen sisanya
            untuk kegiatan ekosistem dan konsultasi.
          </Text> */}
        </Text>

        {/* Comment Input */}
        <View style={styles.commentContainer}>
          <TextInput
            placeholder="Add a comment..."
            style={styles.commentInput}
            value={comment}
            onChangeText={text => setComment(text)}
          />
          <TouchableOpacity onPress={handleCommentSubmit}>
            <Text style={styles.commentButton}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  commentContainer: {
    marginTop: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  commentButton: {
    color: '#3498db',
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 5,
  },
});

export default FirstNews;
