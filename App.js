import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "8751d40ce41834e5f214310e34dd9443";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  //API 접근
  getWeather = async (latitude, longitude) => {
    const { data: {main: {temp, temp_max, temp_min, feels_like}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp, temp_max, temp_min, feels_like, icon: weather[0].icon, cond: weather[0].main})
  };
  //위치 요청
  getLocation = async () => {
    try {
      //위치 권한 요청
      const response = await Location.requestPermissionsAsync();
      //현재 위치 요청
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      //API 날씨 요청
      this.getWeather(latitude, longitude);
      //로딩창 해제
      this.setState({ isLoading: false });
    } catch (error) {
      //오류 반환시
      Alert.alert("이런!!", "위치를 찾을 수 없습니다! 위치 권한을 허용해주세요!");
    }
  };
  componentDidMount() {
    //앱 실행시 위치 요청
    this.getLocation();
  }
  //화면 렌더
  render() {
    const { isLoading, temp, temp_max, temp_min, feels_like, cond, icon } = this.state;
    //로딩이 true이면 로딩창, 로딩 끝나면 날씨 표시
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} temp_max={Math.round(temp_max)} temp_min={Math.round(temp_min)} feels_like={Math.round(feels_like)} icon={icon} cond={cond} />;
  }
}
