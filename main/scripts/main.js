
//handle resize
window.addEventListener('resize', () =>
{
// Update sizes
sizes.width = window.innerWidth
sizes.height = window.innerHeight

// Update camera
camera.aspect = sizes.width / sizes.height
camera.updateProjectionMatrix()

// Update renderer
renderer.setSize(sizes.width, sizes.height)

renderer.setPixelRatio(Math.min(window.devicePixelRatio),2) //better performance
})


// Canvas
const canvas = document.querySelector('canvas.webgl')

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

// Scene
const scene = new THREE.Scene()

//Texture
/*
const earthimage = new Image()
const earthtexture = new THREE.Texture(earthimage)      // to overcome javascript function scope

earthimage.onload = () =>{
    earthtexture.needsUpdate = true   //give value to upper texture
}
earthimage.src = '/textures/8k_earth_daymap.jpeg'
*/

/*
const textureLoader = new THREE.TextureLoader()
const earthtexture = textureLoader.load('/textures/8k_earth_daymap.jpeg')
*/

const loadingManager = new THREE.LoadingManager()
const textureLoader = new THREE.TextureLoader(loadingManager)
const earthtexture = textureLoader.load('./textures/8k_earth_daymap.jpeg')
earthtexture.generateMipmaps = false                 //more vivid



const  cloudtexture= textureLoader.load( './textures/2k_earth_clouds.jpeg')
//Object
const earthmaterial = new THREE.MeshBasicMaterial({ map:earthtexture})
const earthgeometry = new THREE.SphereGeometry(1, 100, 100)
const earthmesh = new THREE.Mesh(earthgeometry, earthmaterial)

const cloudmaterial = new THREE.MeshBasicMaterial({  
    alphaMap: cloudtexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8,})

const cloudgeometry = new THREE.SphereGeometry(1.01, 100, 100)
const cloudmesh = new THREE.Mesh(cloudgeometry, cloudmaterial)

// earth group
const earthGroup = new THREE.Group()
earthGroup.add(earthmesh)
earthGroup.add(cloudmesh)

scene.add(earthGroup)

//light
const ambientLight = new THREE.AmbientLight("white", 2);
scene.add(ambientLight);

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
camera.lookAt(earthmesh.position)
scene.add(camera)

// Controls
const controls = new THREE.OrbitControls(camera, canvas)
controls.enableDamping = true
// to disable zoom
controls.enableZoom = false;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //update Objects
    earthmesh.rotation.y = elapsedTime * 0.01
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()