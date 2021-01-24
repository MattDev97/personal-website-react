
import React from 'react'
import { useSpring, animated } from 'react-spring'
import './landing-page-background.scss'

import M1 from '../../assets/svgs/SVG/M1.svg';
import M2 from '../../assets/svgs/SVG/M2.svg';
import M3 from '../../assets/svgs/SVG/M3.svg';
import M4 from '../../assets/svgs/SVG/M4.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 12}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20 + 35}px,${y / 20 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20 - 250}px,${y / 30 - 100}px, 0)`
const trans4 = (x, y) => `translate3d(${x / 40}px, ${y / 10}px, 0)`

function LandingPageBackground() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
	return (
		<div class="svg-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.img src={M1} class="M1" style={{ transform: props.xy.interpolate(trans1) }} />
			<animated.img src={M2} class="M2" style={{ transform: props.xy.interpolate(trans2) }} />
			<animated.img src={M3} class="M3" style={{ transform: props.xy.interpolate(trans3) }} />
			<animated.img src={M4} class="M4" style={{ transform: props.xy.interpolate(trans4) }} />
			{/* <animated.img class="card2" src=""/>
			<animated.img class="card3" src=""/> */}
		</div>
	)
}


export default LandingPageBackground;