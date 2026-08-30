varying vec2 vUv;
uniform float uTime;
uniform float uHover;
uniform float uVelocity;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Wave ripple on hover & scroll velocity
  float dist = distance(uv, vec2(0.5));
  float wave = sin(dist * 15.0 - uTime * 4.0) * 0.05 * uHover;
  wave += sin(uv.y * 8.0 + uTime * 2.0) * uVelocity * 0.08;

  pos.z += wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
