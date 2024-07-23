/**
@author ertdfgcvb 
@title  Coordinates: x, y
@desc   Use of coord.x and coord.y
*/

const colors = ['#b73f74', '#b5decc', '#c7d14f']

import { fract } from '../src/modules/num.js'

const tri = (v) => {
	const p = 2
	// return 4 * Math.abs(v - Math.floor(v + 3/4) - 1/4) - 1
	return 2 * Math.abs(v/p - Math.floor(v/p + 1/2))
}

export const settings = {
  // once: true
}

const {floor, abs} = Math

export function main(coord, context, cursor, buffer) {
	// contex.metrics.aspect holds the font (or cell) aspect ratio
	const aspectRatio = cursor.pressed ? 1 : context.metrics.aspect

	// Transform coordinate space to (-1, 1)
	// width corrected screen aspect (m) and cell aspect (aspectRatio)
    const m = Math.min(context.cols * aspectRatio, context.rows)
	const st = {
        x : 2.0 * (coord.x - context.cols / 2) / m * aspectRatio, // apply aspect
        y : 2.0 * (coord.y - context.rows / 2) / m
    }
	
	
	// const t  = context.time * 0.000002
	// const beat = Math.floor(t*100) * 6
	// const stx = st.y < 0 ? st.x : 1.0-st.x
	// const cindex = coord.y + Math.floor((tri(stx + Math.floor(t*1000)*3)) * context.cols * beat)

	const t  = context.time * 0.000002
  const beat = (Math.floor(t*500) * 3) % 32
  const stx = st.y < 0 ? st.x : 1.0-st.x
  const res = 3 + beat
  const cindex = 
      floor(abs(fract(st.x*res) - 0.5) * context.cols) 
    + floor(abs(tri(fract(st.y * res/2) - 0.5)) * context.rows/res)
	
	return {
		char: '',
    color: 'black',
		backgroundColor: colors[cindex % colors.length]
	}
}


