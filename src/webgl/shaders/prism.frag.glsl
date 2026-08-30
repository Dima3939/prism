precision highp float;

varying vec3 vNormalVec;
varying vec3 vWorldPosition;
varying vec3 vEyeVector;

uniform float uTime;
uniform vec2 uMouse;
uniform float uDispersion;
uniform float uRoughness;
uniform float uTransmission;
uniform float uColorTheme;
uniform float uIsBack;

// Subtle muted cosine palette
vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  // 1. Sharp flat facet normal
  vec3 fdx = dFdx(vWorldPosition);
  vec3 fdy = dFdy(vWorldPosition);
  vec3 facetNormal = normalize(cross(fdx, fdy));
  vec3 normal = normalize(mix(facetNormal, vNormalVec, 0.05));
  vec3 eye = normalize(vEyeVector);

  // 2. Light vectors
  vec3 light1 = normalize(vec3(uMouse.x * 2.0 + 0.5, uMouse.y * 2.0 + 1.2, 2.2));
  vec3 light2 = normalize(vec3(-2.0, -1.5, 1.2));

  // 3. Controlled, elegant specular gleams (not blinding)
  vec3 half1 = normalize(light1 - eye);
  float spec1 = pow(max(dot(normal, half1), 0.0), 32.0 / (uRoughness + 0.03));

  // 4. Subtle Fresnel rim
  float fresnel = pow(1.0 - max(dot(-eye, normal), 0.0), 2.5);

  // 5. Chromatic Dispersion
  float disp = uDispersion * 0.05;
  vec3 refr = refract(eye, normal, 1.0 / 1.35);
  float dispIndex = dot(refr, facetNormal) * 1.8 + sin(uTime * 0.35 + vWorldPosition.y * 1.2) * 0.4;

  // More subdued, elegant luxury palette (less saturated neon)
  vec3 palA = vec3(0.35, 0.30, 0.40);
  vec3 palB = vec3(0.25, 0.25, 0.30);
  vec3 palC = vec3(0.80, 0.80, 0.80);
  vec3 palD = vec3(0.00, 0.33, 0.67);

  if (uColorTheme > 0.5 && uColorTheme < 1.5) {
    palA = vec3(0.45, 0.20, 0.40);
    palB = vec3(0.30, 0.18, 0.35);
    palD = vec3(0.80, 0.15, 0.90);
  } else if (uColorTheme >= 1.5) {
    palA = vec3(0.45, 0.38, 0.20);
    palB = vec3(0.30, 0.22, 0.10);
    palD = vec3(0.10, 0.25, 0.40);
  }

  vec3 rainbow = palette(dispIndex, palA, palB, palC, palD);

  // Deep smoky crystal base
  vec3 baseGlass = vec3(0.03, 0.04, 0.08);
  vec3 color = baseGlass;

  // Subdued internal caustics (dimmed by ~60%)
  color += rainbow * (0.45 + uDispersion * 0.2);

  // Soft diamond specular highlights
  color += vec3(0.9, 0.95, 1.0) * spec1 * 1.1;

  // Delicate Fresnel edge sheen
  vec3 rimColor = uColorTheme < 0.5 ? vec3(0.0, 0.7, 0.85) : (uColorTheme < 1.5 ? vec3(0.8, 0.2, 0.5) : vec3(0.8, 0.65, 0.3));
  color += rimColor * fresnel * 0.55;

  // Subtle facet edge highlight
  float facetGlint = pow(1.0 - abs(dot(facetNormal, vec3(0.0, 0.0, 1.0))), 2.0) * 0.35;
  color += vec3(0.6, 0.7, 0.8) * facetGlint;

  if (uIsBack > 0.5) {
    // Back faces: deeper smoky glass
    gl_FragColor = vec4(color * 0.5, 0.5);
  } else {
    // Front faces: clean translucent glass
    float alpha = clamp(0.55 + fresnel * 0.25 + spec1 * 0.15, 0.35, 0.85);
    gl_FragColor = vec4(color, alpha);
  }
}