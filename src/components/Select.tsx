import * as _ from 'lodash'
import React, { useMemo } from 'react'
import { Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { Option } from './types'


interface SelectProps {
  title: string
  optionList: string[] | number[] | Option[]
  onChange: (value: any) => void
  value: string | number
  labelField?: string
}

const Select: React.FC<SelectProps> = (props) => {
  const { optionList, onChange, value, title, labelField } = props

  const handleChange = (e:any)=> {
    const item = optionList[e.detail.value]
    if(_.isString(item) || _.isNumber(item)) {
      onChange(item)
    } else {
      onChange(item.key)
    }
  }

  const labelText = useMemo(() => {
    if(!value) return ''
    if(!labelField) {
      return value.toString()
    }
    const res = (optionList as Option[]).find(item => item.key === value)
    return res?.title.toString()
  }, [value, optionList, labelField])

  return (
    <Picker mode='selector' range={optionList} rangeKey={labelField} onChange={handleChange}>
      <AtList>
        <AtListItem
          title={title}
          arrow='down'
          extraText={labelText}
        />
      </AtList>
    </Picker>
  )
}

export default Select
