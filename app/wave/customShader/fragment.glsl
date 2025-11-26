uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

varying vec3 vPos;

void main(){

  vec3 color1 = vec3(0.745098039216, 0.760784313725, 0.929411764706);

  vec3 color2 = vec3(0.513725490196, 0.549019607843, 0.870588235294);  

  vec3 color3 = vec3(0.02352941176, 0.07450980392, 0.57647058824);

  // If vPos.x < -3 → output ≈ 0
  // If vPos.x > 3 → output ≈ 1
  // Between -3 and 3 → smooth gradient between 0 and 1
  // vec3 mix1 = mix(color1, color2,  smoothstep(-3. , 3.,vPos.x));
  vec3 mix1 = mix(uColor1,uColor2,  smoothstep(-3. , 3.,vPos.x));

  // vec3 mix2 = mix(mix1, uColor3,  smoothstep(-3. , 3.,vPos.z));
  vec3 mix2 = mix(mix1, uColor3, smoothstep(-3.0, 3.0, vPos.z)); 

  csm_DiffuseColor = vec4(mix2, 1.0);
  // gl_FragColor = vec4(mix2, 1.0);
}

