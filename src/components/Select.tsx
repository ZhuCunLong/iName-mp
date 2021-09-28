import _ from 'lodash'
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
  valueField?: string
}

const Select: React.FC<SelectProps> = (props) => {
  const { optionList, onChange, value, title, labelField, valueField = 'id' } = props

  const handleChange = (e:any)=> {
    const item = optionList[e.detail.value]
    if(_.isString(item) || _.isNumber(item)) {
      onChange(item)
    } else {
      if(!_.has(item, valueField)) {
        throw Error('please set valueField or check item of optionList whether miss required valueField')
      }
      onChange(item[valueField])
    }
  }

  const labelText = useMemo(() => {
    if(!value) return ''
    if(!labelField) {
      return value.toString()
    }
    const res = (optionList as Option[]).find(item => item[valueField] === value)
    return (res as Option)[labelField].toString()
  }, [value, optionList, labelField, valueField])

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
