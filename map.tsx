import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useLocalSearchParams} from 'expo-router';
export default function MapScreen(){
 const {region='',vineyard='',country=''}=useLocalSearchParams<{region?:string;vineyard?:string;country?:string}>();
 const q=[vineyard,region,country].filter(Boolean).join(', '),url='https://www.google.com/maps?q='+encodeURIComponent(q)+'&output=embed&t=p';
 return <SafeAreaView style={s.wrap}><View style={s.head}><Text style={s.title}>{vineyard?`${vineyard} — ${region}`:region||'Wine Region Map'}</Text><Text style={s.sub}>{q}</Text></View><WebView source={{uri:url}} style={{flex:1}}/></SafeAreaView>;
}
const s=StyleSheet.create({wrap:{flex:1,backgroundColor:'#f6f3ef'},head:{padding:12},title:{fontSize:20,fontWeight:'800'},sub:{color:'#756c67',marginTop:2}});
