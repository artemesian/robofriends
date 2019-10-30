import React from 'react'

function Scroll({children}) {
	return (
		<div id="style-7" style={{border:"2px solid black",boxShadow:"0px 4px 3px 1px rgba(0,0,0,0.4) inset",overflowY:"scroll",height:"650px",width:"calc(100% - 7px)",paddingTop:"50px"}}>
			{children}
		</div>
	)
}

export default Scroll