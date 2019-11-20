import React, { } from 'react'
import { View, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { IconButton } from '@components'

import styles from './About.style'
import { Colors } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')

const About = (props) => {

  const aboutusText = 'Mae Fah Luang Botanical Garden was officially established on December 21st, 2007 on the auspicious occasion of His Majesty the king\'s 80th Birthday Anniversary. The objectives were to collect the plant richness, to provide educational services to the public, student and professionals in the botany fields and related subjects and to create the unique tourist attration with a varaity of gardens and collections on 5,000 rai (800 hectares).'
  const aboutText = 'สวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวงฯ เป็นสถานที่ที่เก็บรวบรวมพรรณไม้ต่างๆเพื่อเป็นแหล่งศึกษาและสนับสนุนการเรียนการสอนภายในมหาวิทยาลัย ตลอดจนเป็นแหล่งความรู้ให้แก่บุคคลภายนอก'

  onPressBack = () => {
    props.navigator.pop()
  }

  return (
    <SafeAreaView
      forceInset={{ vertical: 'always' }}
      style={styles.container}>
      <View style={styles.headerWrapper}>
        <IconButton
          icon={BACK_ICON}
          tintColor={Colors.BLACK}
          iconSize={20}
          onPress={onPressBack} />
        <Text style={styles.sceneText}>About</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.mfuWrapper}>
            <Text style={styles.mfuText}>MFU</Text>
          </View>
          <Text style={styles.botanicalText}>Biotanical Garden App</Text>
        </View>
        <View style={styles.aboutusWrapper}>
          <Text style={styles.aboutusText}>{aboutusText}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default About