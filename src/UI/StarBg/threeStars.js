import * as THREE from 'three'

// Very old implementation of my own. Huge legacy but it works
export const initStars = (domElement) => {
	const firstCoordsForMove = -0.1111111111111111
	let scene,
		camera,
		renderer,
		container,
		aspect,
		fov,
		plane,
		far,
		mouseX,
		mouseY,
		windowHalfX,
		windowHalfY,
		geometry,
		starStuff,
		materialOptions,
		foo = 1000,
		isAnimationOnMouseAloud = false

	init()
	animate()

	function init() {
		container = domElement

		mouseX = 0
		mouseY = 0

		aspect = window.innerWidth / window.innerHeight
		fov = 40
		plane = 1
		far = 800

		windowHalfX = window.innerWidth / 2
		windowHalfY = window.innerHeight / 2

		camera = new THREE.PerspectiveCamera(fov, aspect, plane, far)

		camera.position.z = far / 2

		scene = new THREE.Scene({ antialias: true })
		scene.fog = new THREE.FogExp2(0x1b1b1b, 0.0001)

		starForge()

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		renderer.setPixelRatio(
			window.devicePixelRatio ? window.devicePixelRatio : 1
		)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.autoClear = false
		renderer.setClearColor(0x000000, 0.0)
		container.appendChild(renderer.domElement)

		document.addEventListener('mousemove', onMouseMove, false)
	}

	function animate() {
		requestAnimationFrame(animate)
		render()
	}

	function render() {
		if (isAnimationOnMouseAloud) {
			camera.position.x += (mouseX - camera.position.x) * 0.005
			camera.position.y += (-mouseY - camera.position.y) * 0.005
		} else {
			if (foo === 0) isAnimationOnMouseAloud = true
			foo--
			camera.position.x += firstCoordsForMove
			camera.position.y += firstCoordsForMove
		}
		camera.lookAt(scene.position)
		renderer.render(scene, camera)
	}

	function starForge() {
		const amount = 45000
		const starsObject = []
		geometry = new THREE.SphereGeometry(1000, 100, 50)

		materialOptions = {
			color: new THREE.Color(0xffffff),
			size: 1.1,
			transparency: true,
			opacity: 0.8,
		}

		starStuff = new THREE.PointsMaterial(materialOptions)

		for (let i = 0; i < amount; i++) {
			const x = Math.random() * 2500 - 1000
			const y = Math.random() * 2500 - 1000
			const z = Math.random() * 2500 - 1000
			starsObject.push(x, y, z)
		}

		var starsGeometry = new THREE.BufferGeometry()
		starsGeometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(starsObject, 3)
		)
		var starsMaterial = new THREE.PointsMaterial({ color: 0x888888 })
		var starField = new THREE.Points(starsGeometry, starsMaterial)
		scene.add(starField)
	}

	function onMouseMove(e) {
		isAnimationOnMouseAloud = true
		mouseX = e.clientX - windowHalfX
		mouseY = e.clientY - windowHalfY
	}

	return {
		camera,
		renderer,
		scene,
	}
}
