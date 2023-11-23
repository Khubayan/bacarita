/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Mendapatkan data cuaca statis atau menggunakan data dummy
    const weatherData = {
      city: 'Canggu',
      temperature: '32°',
      maxTemperature: '34°',
      minTemperature: '30°',
      description: 'Cerah',
    };
    setWeather(weatherData);
  }, []);
  // Fungsi untuk mendapatkan waktu saat ini
  const getCurrentTime = () => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let period = 'AM';

    // Mengubah format 24 jam menjadi format 12 jam
    if (hours > 12) {
      hours -= 12;
      period = 'PM';
    }

    // Menambahkan nol di depan angka satu digit
    const formattedHours = hours < 10 ? `0${hours}` : hours;

    return `${formattedHours}: ${period}`;
  };

  // Fungsi untuk mendapatkan hari saat ini
  const getCurrentDay = () => {
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    return day;
  };

  // Fungsi untuk mendapatkan temperatur acak (hanya sebagai contoh)
  const getRandomTemperature = () => {
    const min = 20;
    const max = 40;
    return `${Math.floor(Math.random() * (max - min + 1)) + min}°`;
  };

  return (
    <View>
      <ScrollView style={styles.scrlview} stickyHeaderIndices={[1]}>
        <Text style={styles.cardTitle}>
          {weather && `${weather.city} `}{' '}
          <Icon name="location-outline" size={30} color="#090909" />
        </Text>
        <View style={styles.cardSubtitleContainer}>
          <Text style={styles.cardSubtitle}>FEW CLOUDS</Text>
          <Icon
            style={styles.icons}
            name="cloudy-outline"
            size={70}
            color="black"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.header}>{weather && weather.temperature}</Text>
          <Text style={styles.maxMin}>{weather && `Max | Min`}</Text>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>
              {weather && `${weather.maxTemperature}`}
            </Text>
            <Text style={styles.temperature}>
              {weather && `${weather.minTemperature}`}
            </Text>
          </View>
          {/* Garis horizontal di bawah teks "Max | Min" */}
          <View style={styles.horizontalLine} />

          <View style={styles.containeritems}>
            <View>
              <Text style={styles.additionalInfo1}>
                {getCurrentDay()}, {getCurrentTime()}
              </Text>
              <Icon
                style={styles.icons1}
                name="cloudy-outline"
                size={30}
                color="black"
              />
              <Text style={styles.additionalInfo1}>
                {getRandomTemperature()}
              </Text>
            </View>
            <View>
              <Text style={styles.additionalInfo2}>
                {getCurrentDay()}, {getCurrentTime()}
              </Text>
              <Icon
                style={styles.icons2}
                name="cloudy-outline"
                size={30}
                color="black"
              />
              <Text style={styles.additionalInfo2}>
                {getRandomTemperature()}
              </Text>
            </View>
            <View>
              <Text style={styles.additionalInfo3}>
                {getCurrentDay()}, {getCurrentTime()}
              </Text>
              <Icon
                style={styles.icons3}
                name="cloudy-outline"
                size={30}
                color="black"
              />
              <Text style={styles.additionalInfo3}>
                {getRandomTemperature()}
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Icon name="cloudy-night-outline" size={30} color="#fff" />
          <Text style={styles.buttonText}>Dapatkan Cuaca</Text>
        </TouchableOpacity>

        {weather && (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>
              <Icon name="business" size={30} color="#030303" />{' '}
              {`Kota: ${weather.city}`}
            </Text>
            <Text
              style={
                styles.weatherText
              }>{`Deskripsi: ${weather.description}`}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrlview: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 25,
    color: Colors.fontTernary,
    // color: 'black',
    marginLeft: '40%',
    marginTop: 70,
    fontWeight: 'bold',
  },
  cardSubtitleContainer: {
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 16,
    marginLeft: 160,
    color: 'grey',
    marginTop: 20,
  },
  icons: {
    marginLeft: '45%',
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 60,
    marginTop: 20,
    marginLeft: '15%',
  },
  maxMin: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 25,
    marginLeft: '11%',
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '15%',
  },
  temperature: {
    fontSize: 18,
    marginHorizontal: 10,
    marginLeft: '1%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
  additionalInfo1: {
    fontSize: 15,
    // marginTop: 5,
    color: 'black',
    alignSelf: 'center',
    // marginLeft: -250,
  },
  icons1: {
    // marginLeft: -250,
    marginTop: 1,
    alignSelf: 'center',
  },

  additionalInfo2: {
    fontSize: 15,
    // marginTop: 80,
    color: 'black',
    // marginLeft: 20,
    alignSelf: 'center',
  },
  icons2: {
    // marginLeft: 20,
    // marginTop: 1,
    alignSelf: 'center',
  },

  additionalInfo3: {
    fontSize: 15,
    // marginTop: 7,
    color: 'black',
    alignSelf: 'center',
    // marginLeft: 250,
  },
  icons3: {
    // marginLeft: 250,
    // marginTop: 1,
    alignSelf: 'center',
  },

  containeritems: {
    // justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: 400,
    // alignContent: 'space-between',
  },
});

export default WeatherScreen;
