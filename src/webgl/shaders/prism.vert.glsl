varying vec3 vNormalVec;
varying vec3 vWorldPosition;
varying vec3 vEyeVector;

void main() {
  vNormalVec = normalize(normalMatrix * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vEyeVector = normalize(worldPosition.xyz - cameraPosition);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}