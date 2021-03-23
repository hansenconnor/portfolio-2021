import * as THREE from 'three'
import { Texture, Vector2, Uniform, Vector3 } from 'three';

const StarShader2 = {
    uniforms: {
        iResolution: {
            value: new Vector3(window.innerWidth, window.innerHeight, 1)
        },
        iTime: {
            value: 0.0 
        },
        time: {
            type: "f",
            value: 0.04
        },
        pointscale: {
            type: "f",
            value: 1
        },
        decay: {
            type: "f",
            value: 1.20
        },
        size: {
            type: "f",
            value: 0.7
        },
        displace: {
            type: "f",
            value: 0.1
        },
        complex: {
            type: "f",
            value:0.25
        },
        waves: {
            type: "f",
            value: 0.10
        },
        eqcolor: {
            type: "f",
            value: 10.0
        },
        rcolor: {
            type: "f",
            value: 1.5
        },
        gcolor: {
            type: "f",
            value: 1.5
        },
        bcolor: {
            type: "f",
            value: 1.5
        },
        fragment: {
            type: "i",
            value: true
        },
        redhell: {
            type: "i",
            value: true
        },
        color1: {
            value: new THREE.Color("red")
        },
        color2: {
            value: new THREE.Color("purple")
        }
    },
    vertexShader: `
        //
        // GLSL textureless classic 3D noise "cnoise",
        // with an RSL-style periodic variant "pnoise".
        // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
        // Version: 2011-10-11
        //
        // Many thanks to Ian McEwan of Ashima Arts for the
        // ideas for permutation and gradient selection.
        //
        // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
        // Distributed under the MIT license. See LICENSE file.
        // https://github.com/ashima/webgl-noise
        //
        
        vec3 mod289(vec3 x)
        {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec4 mod289(vec4 x)
        {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec4 permute(vec4 x)
        {
        return mod289(((x*34.0)+1.0)*x);
        }
        
        vec4 taylorInvSqrt(vec4 r)
        {
        return 1.79284291400159 - 0.85373472095314 * r;
        }
        
        vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
        }
        
        // Classic Perlin noise
        float cnoise(vec3 P)
        {
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        
        vec4 gx0 = ixy0 * (1.0 / 5.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 5.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        
        vec4 gx1 = ixy1 * (1.0 / 5.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 5.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
        
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
        }
        
        // Classic Perlin noise, periodic variant
        float pnoise(vec3 P, vec3 rep)
        {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        
        vec4 gx0 = ixy0 * (1.0 / 5.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 5.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        
        vec4 gx1 = ixy1 * (1.0 / 5.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 5.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
        
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 1.5 * n_xyz;
        }
        
        // Turbulence By Jaume Sanchez => https://codepen.io/spite/
        
        varying vec2 vUv;
        varying float noise;
        varying float qnoise;
        varying float displacement;
        
        uniform float time;
        uniform float displace;
        uniform float pointscale;
        uniform float decay;
        uniform float size;
        uniform float complex;
        uniform float waves;
        uniform float eqcolor;
        uniform bool fragment;
        
        float turbulence( vec3 p) {
        float t = - 0.005;
        for (float f = 1.0 ; f <= 1.0 ; f++ ){
            float power = pow( 1.3, f );
            t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
        }
        return t;
        }
        
        void main() {
        
        vUv = uv;
        
        noise = (2.0 *  - waves) * turbulence( decay * abs(normal + time));
        qnoise = (0.3 *  - eqcolor) * turbulence( decay * abs(normal + time));
        float b = pnoise( complex * (position) + vec3( (decay * 2.0) * time ), vec3( 100.0 ) );
        
        displacement = - atan(noise) + tan(b * displace);
        
        vec3 newPosition = (position) + (normal * displacement);
        gl_Position = (projectionMatrix * modelViewMatrix) * vec4( newPosition, abs(size) );
        gl_PointSize = (3.0);
        }
    `,
    fragmentShader: `
        float snoise(vec3 uv, float res)	// by trisomie21
        {
            const vec3 s = vec3(1e0, 1e2, 1e4);
            
            uv *= res;
            
            vec3 uv0 = floor(mod(uv, res))*s;
            vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;
            
            vec3 f = fract(uv); f = f*f*(3.0-2.0*f);
            
            vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,
                            uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);
            
            vec4 r = fract(sin(v*1e-3)*1e5);
            float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
            
            r = fract(sin((v + uv1.z - uv0.z)*1e-3)*1e5);
            float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
            
            return mix(r0, r1, f.z)*2.-1.;
        }
        
        float freqs[4];

        uniform vec3      iResolution;           // viewport resolution (in pixels)
        uniform float     iTime;                 // shader playback time (in seconds)
        uniform sampler2D iChannel0;          // input channel. XX = 2D/Cube
        uniform sampler2D iChannel1;          // input channel. XX = 2D/Cube

        varying vec2 vUv;
        
        void mainImage( out vec4 fragColor, in vec2 fragCoord )
        {
            freqs[0] = texture( iChannel1, vec2( 0.01, 0.25 ) ).x;
            freqs[1] = texture( iChannel1, vec2( 0.07, 0.25 ) ).x;
            freqs[2] = texture( iChannel1, vec2( 0.15, 0.25 ) ).x;
            freqs[3] = texture( iChannel1, vec2( 0.30, 0.25 ) ).x;
        
            float brightness	= freqs[1] * 0.25 + freqs[2] * 0.25;
            float radius		= 0.24 + brightness * 0.2;
            float invRadius 	= 1.0/radius;
            
            vec3 orange			= vec3( 0.8, 0.65, 0.3 );
            vec3 orangeRed		= vec3( 0.8, 0.35, 0.1 );
            float time		= iTime * 0.1;
            float aspect	= iResolution.x/iResolution.y;
            vec2 uv			= vUv;
            vec2 p 			= -0.5 + uv;
            p.x *= aspect;
        
            float fade		= pow( length( 2.0 * p ), 0.5 );
            float fVal1		= 1.0 - fade;
            float fVal2		= 1.0 - fade;
            
            float angle		= atan( p.x, p.y )/6.2832;
            float dist		= length(p);
            vec3 coord		= vec3( angle, dist, time * 0.1 );
            
            float newTime1	= abs( snoise( coord + vec3( 0.0, -time * ( 0.35 + brightness * 0.001 ), time * 0.015 ), 15.0 ) );
            float newTime2	= abs( snoise( coord + vec3( 0.0, -time * ( 0.15 + brightness * 0.001 ), time * 0.015 ), 45.0 ) );	
            for( int i=1; i<=7; i++ ){
                float power = pow( 2.0, float(i + 1) );
                fVal1 += ( 0.5 / power ) * snoise( coord + vec3( 0.0, -time, time * 0.2 ), ( power * ( 10.0 ) * ( newTime1 + 1.0 ) ) );
                fVal2 += ( 0.5 / power ) * snoise( coord + vec3( 0.0, -time, time * 0.2 ), ( power * ( 25.0 ) * ( newTime2 + 1.0 ) ) );
            }
            
            float corona		= pow( fVal1 * max( 1.1 - fade, 0.0 ), 2.0 ) * 50.0;
            corona				+= pow( fVal2 * max( 1.1 - fade, 0.0 ), 2.0 ) * 50.0;
            corona				*= 1.2 - newTime1;
            vec3 sphereNormal 	= vec3( 0.0, 0.0, 1.0 );
            vec3 dir 			= vec3( 0.0 );
            vec3 center			= vec3( 0.5, 0.5, 1.0 );
            vec3 starSphere		= vec3( 0.0 );
            
            vec2 sp = -1.0 + 2.0 * uv;
            sp.x *= aspect;
            sp *= ( 2.0 - brightness );
            float r = dot(sp,sp);
            float f = (1.0-sqrt(abs(1.0-r)))/(r) + brightness * 0.5;
            if( dist < radius ){
                corona			*= pow( dist * invRadius, 24.0 );
                vec2 newUv;
                newUv.x = sp.x*f;
                newUv.y = sp.y*f;
                newUv += vec2( time, 0.0 );
                
                vec3 texSample 	= texture( iChannel0, newUv ).rgb;
                float uOff		= ( texSample.g * brightness * 4.5 + time );
                vec2 starUV		= newUv + vec2( uOff, 0.0 );
                starSphere		= texture( iChannel0, starUV ).rgb;
            }
            
            float starGlow	= min( max( 1.0 - dist * ( 1.0 - brightness ), 0.0 ), 1.0 );
            //fragColor.rgb	= vec3( r );
            fragColor.rgb	= vec3( f * ( 0.75 + brightness * 0.3 ) * orange ) + starSphere + corona * orange + starGlow * orangeRed;
            fragColor.a		= 1.0;
        }

        void main() {
            mainImage(gl_FragColor, gl_FragCoord.xy);
        }
    `
  };
  
  export { StarShader2 }
  