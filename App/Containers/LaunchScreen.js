// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

type Props = {
  navigation: {
    navigate: () => void
  }
}

export default class LaunchScreen extends Component {
  props: Props

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText} onPress={() => this.props.navigation.navigate('TestScreen')}>
              Test
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
