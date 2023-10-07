import { useRef, useEffect } from "react";
import * as THREE from 'three';
import saturnTextureImage from './static/saturnBodyTexture.jpeg'
import saturnRingsImage from './static/saturnRingTexture.png'
const Three = () => {
    const refContainer = useRef(null);
    let sphere = null
    let sphereGeometry = null
    let sphereMaterial = null
    let ringsGeometry = null
    let ringsMaterial = null
    let rings = null
    let scene;
    
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
          alpha: true
      });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight);
      refContainer.current && refContainer.current.appendChild(renderer.domElement);
      
      //textures
      const TextureLoader = new THREE.TextureLoader();
      const saturnTexture = TextureLoader.load(saturnTextureImage);
      const saturnRingTexture = TextureLoader.load(saturnRingsImage);
      saturnRingTexture.rotation = Math.PI * 0.5
      //group
      const saturnGroup = new THREE.Group()
      saturnGroup.rotation.x = Math.PI * 0.10
      saturnGroup.rotation.z = Math.PI * 0.075
        scene.add(saturnGroup)  
      // planet
    if (sphere !== null) {
        sphereGeometry.dispose()
        sphereMaterial.dispose()
        scene.remove(saturnGroup)
    }
    sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
    sphereMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
      sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      
    ringsGeometry = new THREE.TorusGeometry(1.8, 0.3, 2, 200);
    ringsMaterial = new THREE.MeshBasicMaterial({ map: saturnRingTexture})
    rings = new THREE.Mesh(ringsGeometry, ringsMaterial);
    rings.rotation.x = Math.PI * 0.5
    rings.position.y = 0.2
    saturnGroup.add(rings)
      saturnGroup.add(sphere);
      

      //directional light
      
      const directionalLight = new THREE.DirectionalLight(0xfffffff, 1)
      directionalLight.position.set(0.25, 0.25, 0)
      scene.add(directionalLight)
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
    return (
        <div ref={refContainer}></div>
    )
}
export default Three