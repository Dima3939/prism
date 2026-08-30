import * as THREE from 'three'

export function disposeHierarchy(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) {
        child.geometry.dispose()
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => disposeMaterial(mat))
        } else {
          disposeMaterial(child.material)
        }
      }
    }
  })
}

function disposeMaterial(mat: THREE.Material) {
  mat.dispose()
  // Dispose any textures assigned to material
  Object.keys(mat).forEach((prop) => {
    const value = (mat as any)[prop]
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose()
    }
  })
}
