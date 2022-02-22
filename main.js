import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...a

//import './table.css'
import 'reveal.js/dist/theme/simple.css'
//
// our styles to adjust the presentation
import './styles.css'
import './chalkboard.css'
import './customcontrols.css'
import './pointer.css'
import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({

	center: true,
	margin: 0,
	padding: 0,
	//	controls: true,  
	width: 1920,
	height: 1080,
	minScale: 0.2,
	maxScale: 1.5,
	keyboard: true,
	overview: true,
	padding: 0,
	pointer: {
		key: "q",
		color: "red",
		pointerSize: 23,
		alwaysVisible: false
	},
	plugins: [RevealMarkdown, RevealMath.KaTeX, RevealChalkboard, RevealMath, RevealPointer]
})

