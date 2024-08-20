/**
@author ertdfgcvb 
@title  Coordinates: x, y
@desc   Use of coord.x and coord.y
*/



export const settings = {
  // once: true
}

let seed = (Math.random()*2-1) * 3

const {floor, abs} = Math	
let colors_main = ['#437742', 'whitesmoke',  '#ffdd00']
// let colors_main = ['white', '#437742', '#ffdd00', '#f99d1b' ]
let colors = colors_main

export function main(coord, context, cursor, buffer) {
	
	// if(context.frame % 100 == 0) {
	// 	colors = [...colors_main.slice(1), colors_main[0]]
	// 	colors_main = colors
	// }
		
	
	// contex.metrics.aspect holds the font (or cell) aspect ratio
	const aspectRatio = cursor.pressed ? 1 : context.metrics.aspect

	// Transform coordinate space to (-1, 1)
	// width corrected screen aspect (m) and cell aspect (aspectRatio)
    const m = Math.min(context.cols * aspectRatio, context.rows)
	const st = {
        x : 2.0 * (coord.x - context.cols / 2) / m * aspectRatio, // apply aspect
        y : 2.0 * (coord.y - context.rows / 2) / m
    }
	
	const t  = context.time * 0.00005
  	const beat = (
			Math.floor(t*200) +
				   Math.floor(Math.sin(st.y * t * coord.y*t + t*20)  )) 
	
	// + Math.floor(Math.sin(coord.x * coord.y + t*2) * t)
  	// const stx = st.y < 0 ? st.x : 1.0-st.x
  	const res =  beat
  	let cindex = coord.x 
	// * abs(floor(st.x * res )) 
	* (res + 1 * floor(st.x + st.y * seed))
	// * res
	
	cindex = abs(cindex)
	
	// cindex = Math.abs(Math.floor(st.x))
	
		  
    
	return {
		char: '',
    color: 'transparent',
		backgroundColor: colors[cindex % colors.length]
	}
}


