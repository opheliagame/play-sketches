/**
[header]
@author ertdfgcvb
@title  Circle
@desc   Draw a smooth circle with exp()
*/

import { sdCircle } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length } from '/src/modules/vec2.js'

// const density = sort('/\\MXYZabc!?=-. ', 'Simple Console', false)
const density = ('ばかああああった　')

export const settings = { 
	fps : 30, 
	// fontFamily: "M PLUS 1 Code",
	fontSize: '14px',
	fontWeight: 400, 
	// renderer: 'text',
	// element: document.querySelector('canvas'),
	// canvasSize : {            // canvas size in pixels
	// 	width  : 800,
	// 	height : 800
	// },
	// once: true,
}

export function main(coord, context, cursor, buffer) {
	const t  = context.time * 0.002
	const m = Math.min(context.cols, context.rows)
	const a = context.metrics.aspect

	// console.log(a)

	const st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}

	const radius = (Math.cos(t)) * 0.4 + 0.5
	
	// let f = Math.sin(coord.x + Math.cos(st.y*st.x+coord.y/10) + Math.sin(st.x * st.y + t))
	let f = length(st) - (t*0.2)
	f = f * density.length/5 
	// + Math.cos(st.y*3 + t) 
	// f = f * length(st)
	const index = Math.floor(Math.abs(f)) % density.length

	return {
		char : f < Math.sin(t/2) ? density[index] : '',
		// backgroundColor : index < 3 ? 'fuchsia' : 'white',
		// color : index < 3 ? 'whitesmoke' : 'fuchsia',
		// color : 'white'
	}
}
