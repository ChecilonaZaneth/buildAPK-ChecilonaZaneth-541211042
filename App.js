import React from 'react';
import {View,Text,Image, Button, Linking, ScrollView} from 'react-native';

const contactme = () => {
  const url  = 'https://www.instagram.com/cchlnaznth_/?hl=en';
  Linking.openURL(url)
}

const seedetail1 = () => {
  const url  = 'https://dribbble.com/shots/22014432-Medicalis-Healthcare-Landing-Page';
  Linking.openURL(url)
}
const seedetail2 = () => {
  const url  = 'https://dribbble.com/shots/21198348-Musikku-Music-Mobile-App';
  Linking.openURL(url)
}
const seedetail3 = () => {
  const url  = 'https://dribbble.com/shots/21742886-Salesgo-Landing-Page-Sales-Dashboard';
  Linking.openURL(url)
}

const App = () => {
  return(
    <ScrollView>
    <View style={{backgroundColor: '#1d2d44', flex : 1}}>
      <View style={{alignItems: 'center', padding:30}}>
        <Image style={{width: 160, height:160, borderRadius:100}} source={require('../portofolio/assets/Foto_Profil_CV_1.png')}/>
      </View>

      <View>
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontFamily: 'Roboto', color : 'white', padding:10, fontSize:24}}>Checilona Zaneth
        </Text>
        <Text style={{fontWeight: 'medium', textAlign: 'center', fontFamily: 'Roboto', color : 'white', padding:6, fontSize:18}}>Halo saya Checilona Zaneth saya memiliki keahlian di bidang UI/UX Designer
        </Text>
      </View>

      <View style={{padding:30}}>
      <Button title='Contact Me' color= '#748cab' onPress={contactme}/>
      </View>

      <View>
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontFamily: 'Roboto', color : 'white', padding:10, fontSize:24}}>My Recent Project
        </Text>
      </View>

      <View style={{paddingTop:10, alignItems: 'center'}}>
        <Image style={{width: 300, height:200, borderRadius:20, alignItems: 'center'}} source={require('../portofolio/assets/Medicalis.png')}/>
      </View>
      <View style={{marginLeft:10, paddingTop:10}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:18}}>
          Medicalis Healthcare
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:6}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:14}}>
          Medicalis Healthcare
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:10, flexDirection: 'row'}}>
      <Button title='See Detail' color= '#3e5c76' onPress={seedetail1}/>
      </View>

      <View style={{paddingTop:30, alignItems: 'center'}}>
        <Image style={{width: 300, height:200, borderRadius:20, alignItems: 'center'}} source={require('../portofolio/assets/Musikku.png')}/>
      </View>
      <View style={{marginLeft:10, paddingTop:10}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:18}}>
          Musikku
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:6}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:14}}>
          Music Mobile App
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:10, flexDirection: 'row'}}>
      <Button title='See Detail' color= '#3e5c76' onPress={seedetail2}/>
      </View>

      <View style={{paddingTop:30, alignItems: 'center'}}>
        <Image style={{width: 300, height:200, borderRadius:20, alignItems: 'center'}} source={require('../portofolio/assets/Salesgo.png')}/>
      </View>
      <View style={{marginLeft:10, paddingTop:10}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:18}}>
          Musikku
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:6}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', color : 'white',fontSize:14}}>
          Music Mobile App
        </Text>
      </View>
      <View style={{marginLeft:10, paddingTop:10,paddingBottom:20, flexDirection: 'row'}}>
      <Button title='See Detail' color= '#3e5c76' onPress={seedetail3}/>
      </View>
    </View>
    </ScrollView>
  );
}

export default App;
