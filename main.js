import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.CircleGeometry(1, 5, 180)
const material = new THREE.MeshBasicMaterial({ color: 0xca0eb7 })
const circle = new THREE.Mesh(geometry, material)
scene.add(circle)

camera.position.z = 3

const render = () => {
  renderer.render(scene, camera)
}

render()
