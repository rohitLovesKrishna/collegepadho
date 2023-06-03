import * as React from 'react'
import { IconPicker } from 'react-fa-icon-picker'

const IconPickerr = (props) => {

  return (
    <IconPicker searchInputStyles={{margin:"17px",padding:"10px"}}  buttonIconStyles={{color:"#282a3c"}} pickerIconStyles={{backgroundColor:"white",color:"#282a3c",border:"1px solid gray",padding:"1px 12px",margin:"2px"}} containerStyles={{border:"1px solid lightgray",width:"35%",paddingLeft:"13px"}} buttonStyles={{width:"100%"}} value={props.value} onChange={props.onChange}/>
  )
}

export default IconPickerr