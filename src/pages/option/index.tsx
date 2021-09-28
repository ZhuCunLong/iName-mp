import React, { useState } from 'react'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Select from '@/components/Select'
import { radicalList } from '@/constants'

const Option: React.FC = () => {
  const [lastName, setLastName] = useState('')
  const [radical, setRadical] = useState('')

  const handleSubmit = () => {
    console.log('表单提交')
  }

  const handleRest = () => {
    console.log('表单重置')
  }

  return (
    <>
      <AtForm>
        <AtInput
          name='lastName'
          title='姓氏'
          type='text'
          placeholder='请输入姓氏'
          value={lastName}
          onChange={value => setLastName(value as string)}
        />
        <Select
          title='偏旁'
          value={radical}
          optionList={radicalList}
          onChange={setRadical}
          labelField='text'
        />
        <AtButton type='primary' onClick={handleSubmit}>提交</AtButton>
        <AtButton formType='reset' onClick={handleRest}>重置</AtButton>
      </AtForm>
    </>
  )
}

export default Option
