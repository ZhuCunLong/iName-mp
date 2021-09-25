import React, { useState } from 'react'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Select from '@/components/Select'

const Option: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [country, setCountry] = useState('China')

  const handleSubmit = () => {
    console.log('表单提交')
  }

  const handleRest = () => {
    console.log('表单重置')
  }

  const range = [{ key: 'China', title: '中国' },
    { key: 'American', title: '美国' }]

  // const range = ['中国', '美国']

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
        <Select
          title='国家地区'
          value={country}
          optionList={range}
          onChange={setCountry}
          labelField='title'
        />
        <AtButton type='primary' onClick={handleSubmit}>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    </>
  )
}

export default Option
