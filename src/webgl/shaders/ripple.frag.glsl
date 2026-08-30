varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uHover;
uniform float uTime;
uniform float uVelocity;
uniform vec2 uMouse;

void main() {
  vec2 uv = vUv;
  
  // Wave distortion
  float dist = distance(uv, uMouse);
  vec2 waveOffset = vec2(sin(dist * 20.0 - uTime * 3.0), cos(dist * 20.0 - uTime * 3.0)) * 0.03 * uHover;
  waveOffset += vec2(0.0, uVelocity * 0.05);

  // RGB Chromatic Aberration Split
  float r = texture2D(uTexture, uv + waveOffset * 1.2).r;
  float g = texture2D(uTexture, uv + waveOffset).g;
  float b = texture2D(uTexture, uv + waveOffset * 0.8).b;

  vec3 color = vec3(r, g, b);

  // Subtle dark vignette
  float vignette = 1.0 - smoothstep(0.4, 0.8, distance(uv, vec2(0.5)));
  color = mix(color * 0.85, color, vignette);

  gl_FragColor = vec4(color, 1.0);
}
