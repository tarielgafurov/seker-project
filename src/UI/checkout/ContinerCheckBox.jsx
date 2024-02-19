import React from 'react'
import Checkbox from './CheckBox'
import CheckBox from './CheckBox'
function ContinerCheckBox({products}) {
	return (
		<div>
			{
				products.map((el)=>{
					return <CheckBox>{el}</CheckBox>
				})
			}
		</div>
	)
}

export default ContinerCheckBox
