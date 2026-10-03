import React,{useState} from 'react';
import {Alert,Pressable,SafeAreaView,StyleSheet,Text,TextInput,View} from 'react-native';
import {router} from 'expo-router'; import {supabase} from '@/lib/supabase';
export default function Login(){
 const[email,setEmail]=useState(''),[password,setPassword]=useState('');
 async function signIn(){const{error}=await supabase.auth.signInWithPassword({email,password});if(error)return Alert.alert('Sign in failed',error.message);router.replace('/library')}
 async function signUp(){const{error}=await supabase.auth.signUp({email,password});if(error)return Alert.alert('Sign up failed',error.message);Alert.alert('Account created','Check your email if confirmation is enabled.')}
 return <SafeAreaView style={s.wrap}><View style={s.card}><Text style={s.title}>Wine Tasting Notebook</Text><Text style={s.sub}>Private tasting notes, synced to your account.</Text><TextInput style={s.input} autoCapitalize="none" placeholder="Email" value={email} onChangeText={setEmail}/><TextInput style={s.input} secureTextEntry placeholder="Password" value={password} onChangeText={setPassword}/><Pressable style={s.primary} onPress={signIn}><Text style={s.pt}>Sign in</Text></Pressable><Pressable style={s.secondary} onPress={signUp}><Text>Create account</Text></Pressable></View></SafeAreaView>
}
const s=StyleSheet.create({wrap:{flex:1,backgroundColor:'#f6f3ef',alignItems:'center',justifyContent:'center',padding:20},card:{width:'100%',maxWidth:440,backgroundColor:'#fffdf9',padding:24,borderRadius:18,borderWidth:1,borderColor:'#ded6d0'},title:{fontSize:26,fontWeight:'800'},sub:{color:'#756c67',marginVertical:10},input:{borderWidth:1,borderColor:'#ded6d0',borderRadius:10,padding:12,marginBottom:10,backgroundColor:'#fff'},primary:{backgroundColor:'#6f2136',padding:13,borderRadius:10,alignItems:'center'},pt:{color:'#fff',fontWeight:'700'},secondary:{backgroundColor:'#efe8e2',padding:13,borderRadius:10,alignItems:'center',marginTop:10}})
