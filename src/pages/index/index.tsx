import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import './index.less'

const Index: React.FC = () => {
  const goToOption = () => {
    Taro.navigateTo({
      url: '/pages/option/index'
    })
  }
  return (
    <View className='page'>
      <View className='page-container'>
        <View className='mb-20'>来取个好听的名字吧！</View>
        <AtButton type='primary' onClick={goToOption}>GO！</AtButton>
      </View>
    </View>
  )
}

export default Index
