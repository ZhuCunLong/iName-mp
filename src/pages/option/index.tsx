import React, { useState } from 'react'
import { Picker } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtList, AtListItem } from 'taro-ui'

const Option: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [country, setCountry] = useState('中国')

  const handleSubmit = () => {
    console.log('表单提交')
  }

  const handleRest = () => {
    console.log('表单重置')
  }

  const range = ['中国', '美国', '英国']

  const handleChange = (e) => {
    setCountry(range[e.detail.value])
  }

  return (
    <>
      <AtForm
        onSubmit={handleSubmit}
        onReset={handleRest}
      >
        <AtInput
          name='value'
          title='姓氏'
          type='text'
          placeholder='请输入姓氏'
          value={firstName}
          onChange={value => setFirstName(value as string)}
        />
        <Picker mode='selector' range={range} onChange={handleChange}>
          <AtList>
            <AtListItem
              title='国家地区'
              arrow='down'
              extraText={country}
            />
          </AtList>
        </Picker>
        <AtButton type='primary' onClick={handleSubmit}>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    </>
  )
}

export default Option
