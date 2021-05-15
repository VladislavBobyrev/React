class Slider {
	constructor(width, height) {
		this.width = width
		this.height =height
	}
	render() {
		console.log(`width: ${this.width}. height: ${this.height}`)
	}
}

const sliders = new Slider(400, 600)
console.log(sliders)