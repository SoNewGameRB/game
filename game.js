(()=>{var cd=0,zh=1,hd=2;var Ya=1,ud=2,Ir=3,fs=0,Tn=1,en=2,wi=0,Pr=1,Lr=2,kh=3,Hh=4,fd=5;var Os=100,dd=101,pd=102,md=103,gd=104,xd=200,_d=201,yd=202,vd=203,Gh=204,Vh=205,Md=206,Sd=207,bd=208,Ed=209,Td=210,wd=211,Ad=212,Rd=213,Cd=214,tl=0,el=1,nl=2,gr=3,il=4,sl=5,rl=6,al=7,Ul=0,Id=1,Pd=2,hi=0,Wh=1,Xh=2,qh=3,Yh=4,$h=5,Zh=6,Jh=7,wh="attached",Ld="detached",Kh=300,ds=301,zs=302,Fl=303,Bl=304,$a=306,as=1e3,yi=1001,ol=1002,tn=1003,Dd=1004;var Za=1005;var cn=1006,Ol=1007;var ps=1008;var In=1009,Qh=1010,jh=1011,Dr=1012,zl=1013,ui=1014,Zn=1015,fi=1016,kl=1017,Hl=1018,Nr=1020,tu=35902,eu=35899,nu=1021,iu=1022,Hn=1023,Si=1026,ms=1027,su=1028,Gl=1029,gs=1030,Vl=1031;var Wl=1033,Ja=33776,Ka=33777,Qa=33778,ja=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,Zl=36196,Jl=37492,Kl=37496,Ql=37488,jl=37489,to=37490,tc=37491,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,xc=36495,_c=36283,yc=36284,eo=36285,vc=36286,ru=2200,au=2201;var ua=2300,ll=2301,Qo=2302,Ah=2303,Rh=2400,Ch=2401,Ih=2402;var Nd=3200;var no=0,Ud=1,Gi="",je="srgb",fa="srgb-linear",da="linear",ve="srgb";var jo=7680;var Fd=519,Bd=512,Od=513,zd=514,Mc=515,kd=516,Hd=517,Sc=518,Gd=519,ou=35044,Ur=35048;var lu="300 es",ai=2e3,xr=2001;function am(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function om(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){let n=pa("canvas");return n.style.display="block",n}var Af={},_r=null;function ma(...n){let t="THREE."+n.shift();_r?_r("log",t,...n):console.log(t,...n)}function Wd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Vt(...n){n=Wd(n);let t="THREE."+n.shift();if(_r)_r("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=Wd(n);let t="THREE."+n.shift();if(_r)_r("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){let t=n.join(" ");t in Af||(Af[t]=!0,Vt(...n))}function Xd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var qd={[tl]:el,[nl]:rl,[il]:al,[gr]:sl,[el]:tl,[rl]:nl,[al]:il,[sl]:gr},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kc=Math.PI/180,cl=180/Math.PI;function Mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function lm(n,t){return(n%t+t)%t}function Qc(n,t,e){return(1-e)*n+e*t}function _i(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var at=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ei=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||l!==f||c!==d||u!==g){let p=l*f+c*d+u*g+h*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let x=1-o;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);x=Math.sin(x*v)/M,o=Math.sin(o*v)/M,l=l*x+f*o,c=c*x+d*o,u=u*x+g*o,h=h*x+y*o}else{l=l*x+f*o,c=c*x+d*o,u=u*x+g*o,h=h*x+y*o;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jc.copy(this).projectOnVector(t),this.sub(jc)}reflect(t){return this.sub(jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new U,Rf=new Ei,Jt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],x=s[6],v=s[1],M=s[4],_=s[7],S=s[2],E=s[5],R=s[8];return r[0]=a*y+o*v+l*S,r[3]=a*p+o*M+l*E,r[6]=a*x+o*_+l*R,r[1]=c*y+u*v+h*S,r[4]=c*p+u*M+h*E,r[7]=c*x+u*_+h*R,r[2]=f*y+d*v+g*S,r[5]=f*p+d*M+g*E,r[8]=f*x+d*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(th.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(th.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},th=new Jt,Cf=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),If=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cm(){let n={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fa]:{primaries:t,whitePoint:i,transfer:da,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}var le=cm();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,hl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qs===void 0&&(Qs=pa("canvas")),Qs.width=t.width,Qs.height=t.height;let s=Qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Qs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hm=0,yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eh(s[a].image)):r.push(eh(s[a]))}else r=eh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var um=0,nh=new U,En=class n extends bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=yi,s=yi,r=cn,a=ps,o=Hn,l=In,c=n.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Mi(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Kh;En.DEFAULT_ANISOTROPY=1;var Se=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(d+1)/2,S=(x+1)/2,E=(u+f)/4,R=(h+y)/4,m=(g+p)/4;return M>_&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=R/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=m/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=m/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new En(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ga=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var he=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,u,h,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,y,p)}set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,y,p){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=g,x[11]=y,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),a=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*h,g=o*u,y=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f-y*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,d=a*h,g=o*u,y=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,dm)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),es.crossVectors(i,Dn),es.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),es.crossVectors(i,Dn)),es.normalize(),To.crossVectors(Dn,es),s[0]=es.x,s[4]=To.x,s[8]=Dn.x,s[1]=es.y,s[5]=To.y,s[9]=Dn.y,s[2]=es.z,s[6]=To.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],x=i[14],v=i[3],M=i[7],_=i[11],S=i[15],E=s[0],R=s[4],m=s[8],T=s[12],A=s[1],C=s[5],D=s[9],N=s[13],L=s[2],B=s[6],H=s[10],G=s[14],j=s[3],X=s[7],J=s[11],Z=s[15];return r[0]=a*E+o*A+l*L+c*j,r[4]=a*R+o*C+l*B+c*X,r[8]=a*m+o*D+l*H+c*J,r[12]=a*T+o*N+l*G+c*Z,r[1]=u*E+h*A+f*L+d*j,r[5]=u*R+h*C+f*B+d*X,r[9]=u*m+h*D+f*H+d*J,r[13]=u*T+h*N+f*G+d*Z,r[2]=g*E+y*A+p*L+x*j,r[6]=g*R+y*C+p*B+x*X,r[10]=g*m+y*D+p*H+x*J,r[14]=g*T+y*N+p*G+x*Z,r[3]=v*E+M*A+_*L+S*j,r[7]=v*R+M*C+_*B+S*X,r[11]=v*m+M*D+_*H+S*J,r[15]=v*T+M*N+_*G+S*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],x=t[15],v=l*d-c*f,M=o*d-c*h,_=o*f-l*h,S=a*d-c*u,E=a*f-l*u,R=a*h-o*u;return e*(y*v-p*M+x*_)-i*(g*v-p*S+x*E)+s*(g*M-y*S+x*R)-r*(g*_-y*E+p*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],x=t[15],v=e*o-i*a,M=e*l-s*a,_=e*c-r*a,S=i*l-s*o,E=i*c-r*o,R=s*c-r*l,m=u*y-h*g,T=u*p-f*g,A=u*x-d*g,C=h*p-f*y,D=h*x-d*y,N=f*x-d*p,L=v*N-M*D+_*C+S*A-E*T+R*m;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*N-l*D+c*C)*B,t[1]=(s*D-i*N-r*C)*B,t[2]=(y*R-p*E+x*S)*B,t[3]=(f*E-h*R-d*S)*B,t[4]=(l*A-a*N-c*T)*B,t[5]=(e*N-s*A+r*T)*B,t[6]=(p*_-g*R-x*M)*B,t[7]=(u*R-f*_+d*M)*B,t[8]=(a*D-o*A+c*m)*B,t[9]=(i*A-e*D-r*m)*B,t[10]=(g*E-y*_+x*v)*B,t[11]=(h*_-u*E-d*v)*B,t[12]=(o*T-a*C-l*m)*B,t[13]=(e*C-i*T+s*m)*B,t[14]=(y*M-g*S-p*v)*B,t[15]=(u*S-h*M+f*v)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,y=a*u,p=a*h,x=o*h,v=l*c,M=l*u,_=l*h,S=i.x,E=i.y,R=i.z;return s[0]=(1-(y+x))*S,s[1]=(d+_)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+x))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+M)*R,s[9]=(p-v)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);let c=1/a,u=1/o,h=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,e.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ai,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ai)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===xr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ai,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ai)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===xr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},js=new U,ni=new he,fm=new U(0,0,0),dm=new U(1,1,1),es=new U,To=new U,Dn=new U,Pf=new he,Lf=new Ei,Un=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pm=0,Df=new U,tr=new Ei,Di=new he,wo=new U,ta=new U,mm=new U,gm=new Ei,Nf=new U(1,0,0),Uf=new U(0,1,0),Ff=new U(0,0,1),Bf={type:"added"},xm={type:"removed"},er={type:"childadded",child:null},ih={type:"childremoved",child:null},Ye=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new Un,i=new Ei,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Jt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Uf,t)}rotateZ(t){return this.rotateOnAxis(Ff,t)}translateOnAxis(t,e){return Df.copy(t).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Uf,t)}translateZ(t){return this.translateOnAxis(Ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wo.copy(t):wo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ta,wo,this.up):Di.lookAt(wo,ta,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Di),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bf),er.child=t,this.dispatchEvent(er),er.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xm),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bf),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),x=this._getHandJoint(c,y);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function sh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=lm(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=sh(a,r,t+1/3),this.g=sh(a,r,t),this.b=sh(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let i=Yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return le.workingToColorSpace(_n.copy(this),t),Math.round(oe(_n.r*255,0,255))*65536+Math.round(oe(_n.g*255,0,255))*256+Math.round(oe(_n.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,r=_n.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=je){le.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(Ao);let i=Qc(ns.h,Ao.h,e),s=Qc(ns.s,Ao.s,e),r=Qc(ns.l,Ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Wt;Wt.NAMES=Yd;var _a=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ya=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new U,Ni=new U,rh=new U,Ui=new U,nr=new U,ir=new U,Of=new U,ah=new U,oh=new U,lh=new U,ch=new Se,hh=new Se,uh=new Se,Oi=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ii.subVectors(t,e),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ii.subVectors(s,e),Ni.subVectors(i,e),rh.subVectors(t,e);let a=ii.dot(ii),o=ii.dot(Ni),l=ii.dot(rh),c=Ni.dot(Ni),u=Ni.dot(rh),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ch.setScalar(0),hh.setScalar(0),uh.setScalar(0),ch.fromBufferAttribute(t,e),hh.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ch,r.x),a.addScaledVector(hh,r.y),a.addScaledVector(uh,r.z),a}static isFrontFacing(t,e,i,s){return ii.subVectors(i,e),Ni.subVectors(t,e),ii.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;nr.subVectors(s,i),ir.subVectors(r,i),ah.subVectors(t,i);let l=nr.dot(ah),c=ir.dot(ah);if(l<=0&&c<=0)return e.copy(i);oh.subVectors(t,s);let u=nr.dot(oh),h=ir.dot(oh);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(nr,a);lh.subVectors(t,r);let d=nr.dot(lh),g=ir.dot(lh);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ir,o);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Of.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Of,o);let x=1/(p+y+f);return a=y*x,o=f*x,e.copy(i).addScaledVector(nr,a).addScaledVector(ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),Co.subVectors(this.max,ea),sr.subVectors(t.a,ea),rr.subVectors(t.b,ea),ar.subVectors(t.c,ea),is.subVectors(rr,sr),ss.subVectors(ar,rr),Es.subVectors(sr,ar);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Es.z,Es.y,is.z,0,-is.x,ss.z,0,-ss.x,Es.z,0,-Es.x,-is.y,is.x,0,-ss.y,ss.x,0,-Es.y,Es.x,0];return!fh(e,sr,rr,ar,Co)||(e=[1,0,0,0,1,0,0,0,1],!fh(e,sr,rr,ar,Co))?!1:(Io.crossVectors(is,ss),e=[Io.x,Io.y,Io.z],fh(e,sr,rr,ar,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,Ro=new oi,sr=new U,rr=new U,ar=new U,is=new U,ss=new U,Es=new U,ea=new U,Co=new U,Io=new U,Ts=new U;function fh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ts.fromArray(n,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var qe=new U,Po=new at,ym=0,Me=class extends bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cs=class extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var va=class extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ee=class extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}},vm=new oi,na=new U,dh=new U,li=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):vm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);let e=na.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(na,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(dh)),this.expandByPoint(na.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mm=0,$n=new he,ph=new Ye,or=new U,Nn=new oi,ia=new oi,Qe=new U,me=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(am(t)?va:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Nn.min,ia.min),Nn.expandByPoint(Qe),Qe.addVectors(Nn.max,ia.max),Nn.expandByPoint(Qe)):(Nn.expandByPoint(ia.min),Nn.expandByPoint(ia.max))}Nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qe.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),Qe.add(or)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Me(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new U,l[m]=new U;let c=new U,u=new U,h=new U,f=new at,d=new at,g=new at,y=new U,p=new U;function x(m,T,A){c.fromBufferAttribute(i,m),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,A),f.fromBufferAttribute(r,m),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[m].add(y),o[T].add(y),o[A].add(y),l[m].add(p),l[T].add(p),l[A].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let m=0,T=v.length;m<T;++m){let A=v[m],C=A.start,D=A.count;for(let N=C,L=C+D;N<L;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new U,_=new U,S=new U,E=new U;function R(m){S.fromBufferAttribute(s,m),E.copy(S);let T=o[m];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(E,T);let C=_.dot(l[m])<0?-1:1;a.setXYZW(m,M.x,M.y,M.z,C)}for(let m=0,T=v.length;m<T;++m){let A=v[m],C=A.start,D=A.count;for(let N=C,L=C+D;N<L;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let x=0;x<u;x++)f[g++]=c[d++]}return new Me(f,u,h)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new U,Mr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mh=new U,Sm=new U,bm=new Jt,ri=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=mh.subVectors(i,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bm.getNormalMatrix(t),s=this.coplanarPoint(mh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Em=0,ci=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Pr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Is=class extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lr,sa=new U,cr=new U,hr=new U,ur=new at,ra=new at,$d=new he,Lo=new U,aa=new U,Do=new U,zf=new at,gh=new at,kf=new at,Sr=class extends Ye{constructor(t=new Is){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ma(e,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new Mr(i,3,0,!1)),lr.setAttribute("uv",new Mr(i,2,3,!1))}this.geometry=lr,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),$d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;No(Lo.set(-.5,-.5,0),hr,a,cr,s,r),No(aa.set(.5,-.5,0),hr,a,cr,s,r),No(Do.set(.5,.5,0),hr,a,cr,s,r),zf.set(0,0),gh.set(1,0),kf.set(1,1);let o=t.ray.intersectTriangle(Lo,aa,Do,!1,sa);if(o===null&&(No(aa.set(-.5,.5,0),hr,a,cr,s,r),gh.set(0,1),o=t.ray.intersectTriangle(Lo,Do,aa,!1,sa),o===null))return;let l=t.ray.origin.distanceTo(sa);l<t.near||l>t.far||e.push({distance:l,point:sa.clone(),uv:Oi.getInterpolation(sa,Lo,aa,Do,zf,gh,kf,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function No(n,t,e,i,s,r){ur.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ra.x=r*ur.x-s*ur.y,ra.y=s*ur.x+r*ur.y):ra.copy(ur),n.copy(t),n.x+=ra.x,n.y+=ra.y,n.applyMatrix4($d)}var Bi=new U,xh=new U,Uo=new U,Fo=new U,br=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){xh.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Fo.copy(this.origin).sub(xh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Uo),o=Fo.dot(this.direction),l=-Fo.dot(Uo),c=Fo.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xh).addScaledVector(Uo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,x=i.x-a.x,v=i.y-a.y,M=i.z-a.z,_=Math.abs(l),S=Math.abs(c),E=Math.abs(u),R,m,T,A,C,D,N,L,B,H,G,j;if(_>=S&&_>=E?(T=l,D=h,B=g,j=x,l>=0?(R=c,m=u,A=f,C=d,N=y,L=p,H=v,G=M):(R=u,m=c,A=d,C=f,N=p,L=y,H=M,G=v)):S>=E?(T=c,D=f,B=y,j=v,c>=0?(R=u,m=l,A=d,C=h,N=p,L=g,H=M,G=x):(R=l,m=u,A=h,C=d,N=g,L=p,H=x,G=M)):(T=u,D=d,B=p,j=M,u>=0?(R=l,m=c,A=h,C=f,N=g,L=y,H=x,G=v):(R=c,m=l,A=f,C=h,N=y,L=g,H=v,G=x)),T===0)return null;let X=R/T,J=m/T,Z=1/T,vt=A-X*D,lt=C-J*D,Qt=N-X*B,Zt=L-J*B,Ft=H-X*j,Y=G-J*j,tt=Ft*Zt-Y*Qt,ft=vt*Y-lt*Ft,Ht=Qt*lt-Zt*vt;if(s){if(tt<0||ft<0||Ht<0)return null}else if((tt<0||ft<0||Ht<0)&&(tt>0||ft>0||Ht>0))return null;let Mt=tt+ft+Ht;if(Mt===0)return null;let Nt=Z*(tt*D+ft*B+Ht*j);return(Mt>0?Nt<0:Nt>0)?null:this.at(Nt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hf=new he,ws=new br,Bo=new li,Gf=new U,Oo=new U,zo=new U,ko=new U,_h=new U,Ho=new U,Vf=new U,Go=new U,pt=class extends Ye{constructor(t=new me,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(_h.fromBufferAttribute(h,t),a?Ho.addScaledVector(_h,u):Ho.addScaledVector(_h.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(Bo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Bo,Gf)===null||ws.origin.distanceToSquared(Gf)>(t.far-t.near)**2))&&(Hf.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Hf),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],x=a[p.materialIndex],v=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,S=M;_<S;_+=3){let E=o.getX(_),R=o.getX(_+1),m=o.getX(_+2);s=Vo(this,x,t,i,c,u,h,E,R,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,x=y;p<x;p+=3){let v=o.getX(p),M=o.getX(p+1),_=o.getX(p+2);s=Vo(this,a,t,i,c,u,h,v,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],x=a[p.materialIndex],v=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,S=M;_<S;_+=3){let E=_,R=_+1,m=_+2;s=Vo(this,x,t,i,c,u,h,E,R,m),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,x=y;p<x;p+=3){let v=p,M=p+1,_=p+2;s=Vo(this,a,t,i,c,u,h,v,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Tm(n,t,e,i,s,r,a,o){let l;if(t.side===Tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===fs,o),l===null)return null;Go.copy(o),Go.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:n}}function Vo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Oo),n.getVertexPosition(l,zo),n.getVertexPosition(c,ko);let u=Tm(n,t,e,i,Oo,zo,ko,Vf);if(u){let h=new U;Oi.getBarycoord(Vf,Oo,zo,ko,h),s&&(u.uv=Oi.getInterpolatedAttribute(s,o,l,c,h,new at)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,o,l,c,h,new at)),a&&(u.normal=Oi.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};Oi.getNormal(Oo,zo,ko,f.normal),u.face=f,u.barycoord=h}return u}var oa=new Se,Wf=new Se,Xf=new Se,wm=new Se,qf=new he,Wo=new U,yh=new li,Yf=new he,vh=new br,Ps=class extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wh,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Wo),this.boundingSphere.expandByPoint(Wo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(s),t.ray.intersectsSphere(yh)!==!1&&(Yf.copy(s).invert(),vh.copy(t.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,vh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Se,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;Wf.fromBufferAttribute(s.attributes.skinIndex,t),Xf.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(oa.copy(e),e.set(0,0,0,0)):(oa.set(...e,1),e.set(0,0,0)),oa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Xf.getComponent(r);if(a!==0){let o=Wf.getComponent(r);qf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(wm.copy(oa).applyMatrix4(qf),a)}}return e.isVector4&&(e.w=oa.w),e.applyMatrix4(this.bindMatrixInverse)}},ze=class extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sa=class extends En{constructor(t=null,e=1,i=1,s,r,a,o,l,c=tn,u=tn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$f=new he,Am=new he,Ls=class n{constructor(t=[],e=[]){this.uuid=Mi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new he;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Am;$f.multiplyMatrices(o,e[r]),$f.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Sa(e,t,t,Hn,Zn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],a=e[r];a===void 0&&(Vt("Skeleton: No bone found with UUID:",r),a=new ze),this.bones.push(a),this.boneInverses.push(new he().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=i[s];t.boneInverses.push(o.toArray())}return t}};var As=new li,Rm=new at(.5,.5),Xo=new U,Er=class{constructor(t=new ri,e=new ri,i=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],x=r[11],v=r[12],M=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,d-u,x-g,S-v).normalize(),s[1].setComponents(c+a,d+u,x+g,S+v).normalize(),s[2].setComponents(c+o,d+h,x+y,S+M).normalize(),s[3].setComponents(c-o,d-h,x-y,S-M).normalize(),i)s[4].setComponents(l,f,p,_).normalize(),s[5].setComponents(c-l,d-f,x-p,S-_).normalize();else if(s[4].setComponents(c-l,d-f,x-p,S-_).normalize(),e===ai)s[5].setComponents(c+l,d+f,x+p,S+_).normalize();else if(e===xr)s[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Rm.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zf=new he,Ph=new br,qo=new li,Yo=new U,ba=class extends Ye{constructor(t=new me,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;Zf.copy(s).invert(),Ph.copy(t.ray).applyMatrix4(Zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);Yo.fromBufferAttribute(h,p),Jf(Yo,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,y=d;g<y;g++)Yo.fromBufferAttribute(h,g),Jf(Yo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jf(n,t,e,i,s,r,a){let o=Ph.distanceSqToPoint(n);if(o<e){let l=new U;Ph.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends En{constructor(t=[],e=ds,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ti=class extends En{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends En{constructor(t,e,i=ui,s,r,a,o=tn,l=tn,c,u=Si,h=1){if(u!==Si&&u!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dl=class extends os{constructor(t,e=ui,i=ds,s,r,a=tn,o=tn,l,c=Si){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ta=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ke=class n extends me{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(h,2));function g(y,p,x,v,M,_,S,E,R,m,T){let A=_/R,C=S/m,D=_/2,N=S/2,L=E/2,B=R+1,H=m+1,G=0,j=0,X=new U;for(let J=0;J<H;J++){let Z=J*C-N;for(let vt=0;vt<B;vt++){let lt=vt*A-D;X[y]=lt*v,X[p]=Z*M,X[x]=L,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[x]=E>0?1:-1,u.push(X.x,X.y,X.z),h.push(vt/R),h.push(1-J/m),G+=1}}for(let J=0;J<m;J++)for(let Z=0;Z<R;Z++){let vt=f+Z+B*J,lt=f+Z+B*(J+1),Qt=f+(Z+1)+B*(J+1),Zt=f+(Z+1)+B*J;l.push(vt,lt,Zt),l.push(lt,Qt,Zt),j+=6}o.addGroup(d,j,T),d+=j,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ds=class n extends me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,u=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fn=class n extends me{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,y=[],p=i/2,x=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function v(){let _=new U,S=new U,E=0,R=(e-t)/i;for(let m=0;m<=r;m++){let T=[],A=m/r,C=A*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,L=N*l+o,B=Math.sin(L),H=Math.cos(L);S.x=C*B,S.y=-A*i+p,S.z=C*H,h.push(S.x,S.y,S.z),_.set(B,R,H).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-A),T.push(g++)}y.push(T)}for(let m=0;m<s;m++)for(let T=0;T<r;T++){let A=y[T][m],C=y[T+1][m],D=y[T+1][m+1],N=y[T][m+1];(t>0||T!==0)&&(u.push(A,C,N),E+=3),(e>0||T!==r-1)&&(u.push(C,D,N),E+=3)}c.addGroup(x,E,0),x+=E}function M(_){let S=g,E=new at,R=new U,m=0,T=_===!0?t:e,A=_===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),g++;let C=g;for(let D=0;D<=s;D++){let L=D/s*l+o,B=Math.cos(L),H=Math.sin(L);R.x=T*H,R.y=p*A,R.z=T*B,h.push(R.x,R.y,R.z),f.push(0,A,0),E.x=B*.5+.5,E.y=H*.5*A+.5,d.push(E.x,E.y),g++}for(let D=0;D<s;D++){let N=S+D,L=C+D;_===!0?u.push(L,L+1,N):u.push(L+1,L,N),m+=3}c.addGroup(x,m,_===!0?1:2),x+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ns=class n extends Fn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pl=class n extends me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new U,_=new U,S=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],_),d(e[E+2],S),l(M,_,S,v)}function l(v,M,_,S){let E=S+1,R=[];for(let m=0;m<=E;m++){R[m]=[];let T=v.clone().lerp(_,m/E),A=M.clone().lerp(_,m/E),C=E-m;for(let D=0;D<=C;D++)D===0&&m===E?R[m][D]=T:R[m][D]=T.clone().lerp(A,D/C)}for(let m=0;m<E;m++)for(let T=0;T<2*(E-m)-1;T++){let A=Math.floor(T/2);T%2===0?(f(R[m][A+1]),f(R[m+1][A]),f(R[m][A])):(f(R[m][A+1]),f(R[m+1][A+1]),f(R[m+1][A]))}}function c(v){let M=new U;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let v=new U;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=p(v)/2/Math.PI+.5,S=x(v)/Math.PI+.5;a.push(_,1-S)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let M=a[v+0],_=a[v+2],S=a[v+4],E=Math.max(M,_,S),R=Math.min(M,_,S);E>.9&&R<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){let _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let v=new U,M=new U,_=new U,S=new U,E=new at,R=new at,m=new at;for(let T=0,A=0;T<r.length;T+=9,A+=6){v.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),E.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),m.set(a[A+4],a[A+5]),S.copy(v).add(M).add(_).divideScalar(3);let C=p(S);y(E,A+0,v,C),y(R,A+2,M,C),y(m,A+4,_,C)}}function y(v,M,_,S){S<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=S/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],a=[],o=new U,l=new he;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Bn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends wr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Kf=new U,Qf=new U,Mh=new cu,Sh=new cu,bh=new cu,Ar=class extends Bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Qf.subVectors(s[0],s[1]).add(s[0]),c=Qf);let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Kf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Mh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,y,p),Sh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,y,p),bh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Sh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Mh.calc(l),Sh.calc(l),bh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jf(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Cm(n,t){let e=1-n;return e*e*t}function Im(n,t){return 2*(1-n)*n*t}function Pm(n,t){return n*n*t}function ca(n,t,e,i){return Cm(n,t)+Im(n,e)+Pm(n,i)}function Lm(n,t){let e=1-n;return e*e*e*t}function Dm(n,t){let e=1-n;return 3*e*e*n*t}function Nm(n,t){return 3*(1-n)*n*n*t}function Um(n,t){return n*n*n*t}function ha(n,t,e,i,s){return Lm(n,t)+Dm(n,e)+Nm(n,i)+Um(n,s)}var wa=class extends Bn{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ha(t,s.x,r.x,a.x,o.x),ha(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends Bn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ha(t,s.x,r.x,a.x,o.x),ha(t,s.y,r.y,a.y,o.y),ha(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends Bn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Bn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Bn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ca(t,s.x,r.x,a.x),ca(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Bn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ca(t,s.x,r.x,a.x),ca(t,s.y,r.y,a.y),ca(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(jf(o,l.x,c.x,u.x,h.x),jf(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},_l=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:Ar,CubicBezierCurve:wa,CubicBezierCurve3:gl,EllipseCurve:wr,LineCurve:Aa,LineCurve3:xl,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Ca,SplineCurve:Ia}),yl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new _l[s.type]().fromJSON(s))}return this}},Pa=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Aa(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ra(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new wa(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ia(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new wr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Us=class extends Pa{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Pa().fromJSON(s))}return this}};function Fm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Zd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Hm(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,h=l;for(let f=e;f<s;f+=e){let d=n[f],g=n[f+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return La(r,a,e,o,l,c,0),a}function Zd(n,t,e,i,s){let r;if(s===Qm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=td(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=td(a/i|0,n[a],n[a+1],r);return r&&Rr(r,r.next)&&(Na(r),r=r.next),r}function Fs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Na(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function La(n,t,e,i,s,r,a){if(!n)return;!a&&r&&qm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Om(n,i,s,r):Bm(n)){t.push(l.i,n.i,c.i),Na(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=zm(Fs(n),t),La(n,t,e,i,s,r,2)):a===2&&km(n,t,e,i,s,r):La(Fs(n),t,e,i,s,r,1);break}}}function Bm(n){let t=n.prev,e=n,i=n.next;if(Fe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),h=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&la(s,o,r,l,a,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Om(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(u,h,f),y=Math.max(o,l,c),p=Math.max(u,h,f),x=Lh(d,g,t,e,i),v=Lh(y,p,t,e,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=x&&_&&_.z<=v;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&la(o,u,l,h,c,f,M.x,M.y)&&Fe(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&la(o,u,l,h,c,f,_.x,_.y)&&Fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=x;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&la(o,u,l,h,c,f,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&la(o,u,l,h,c,f,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Rr(i,s)&&Kd(i,e,e.next,s)&&Da(i,s)&&Da(s,i)&&(t.push(i.i,e.i,s.i),Na(e),Na(e.next),e=n=s),e=e.next}while(e!==n);return Fs(e)}function km(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zm(a,o)){let l=Qd(a,o);a=Fs(a,a.next),l=Fs(l,l.next),La(a,t,e,i,s,r,0),La(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Hm(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Zd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push($m(c))}s.sort(Gm);for(let r=0;r<s.length;r++)e=Vm(s[r],e);return e}function Gm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Vm(n,t){let e=Wm(n,t);if(!e)return t;let i=Qd(e,n);return Fs(i,i.next),Fs(e,e.next)}function Wm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Rr(n,e))return e;do{if(Rr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Jd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);Da(e,n)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Xm(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function Xm(n,t){return Fe(n.prev,n,t.prev)<0&&Fe(t.next,n,n.next)<0}function qm(n,t,e,i){let s=n;do s.z===0&&(s.z=Lh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Lh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $m(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Jd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function la(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Jd(n,t,e,i,s,r,a,o)}function Zm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jm(n,t)&&(Da(n,t)&&Da(t,n)&&Km(n,t)&&(Fe(n.prev,n,t.prev)||Fe(n,t.prev,t))||Rr(n,t)&&Fe(n.prev,n,n.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rr(n,t){return n.x===t.x&&n.y===t.y}function Kd(n,t,e,i){let s=Zo(Fe(n,t,e)),r=Zo(Fe(n,t,i)),a=Zo(Fe(e,i,n)),o=Zo(Fe(e,i,t));return!!(s!==r&&a!==o||s===0&&$o(n,e,t)||r===0&&$o(n,i,t)||a===0&&$o(e,n,i)||o===0&&$o(e,t,i))}function $o(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zo(n){return n>0?1:n<0?-1:0}function Jm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Kd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Da(n,t){return Fe(n.prev,n,n.next)<0?Fe(n,t,n.next)>=0&&Fe(n,n.prev,t)>=0:Fe(n,t,n.prev)<0||Fe(n,n.next,t)<0}function Km(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Qd(n,t){let e=Dh(n.i,n.x,n.y),i=Dh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function td(n,t,e,i){let s=Dh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Nh=class{static triangulate(t,e,i=2){return Fm(t,e,i)}},vi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ed(t),nd(i,t);let a=t.length;e.forEach(ed);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,nd(i,e[l]);let o=Nh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ed(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ua=class n extends me{constructor(t=new Us([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:jm,M,_=!1,S,E,R,m;if(x){M=x.getSpacedPoints(u),_=!0,f=!1;let it=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(u,it),E=new U,R=new U,m=new U}f||(p=0,d=0,g=0,y=0);let T=o.extractPoints(c),A=T.shape,C=T.holes;if(!vi.isClockWise(A)){A=A.reverse();for(let it=0,rt=C.length;it<rt;it++){let ot=C[it];vi.isClockWise(ot)&&(C[it]=ot.reverse())}}function N(it){let ot=10000000000000001e-36,ct=it[0];for(let dt=1;dt<=it.length;dt++){let Xt=dt%it.length,Gt=it[Xt],$t=Gt.x-ct.x,jt=Gt.y-ct.y,F=$t*$t+jt*jt,xe=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ct.x),Math.abs(ct.y)),re=ot*xe*xe;if(F<=re){it.splice(Xt,1),dt--;continue}ct=Gt}}N(A),C.forEach(N);let L=C.length,B=A;for(let it=0;it<L;it++){let rt=C[it];A=A.concat(rt)}function H(it,rt,ot){return rt||Yt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(rt,ot)}let G=A.length;function j(it,rt,ot){let ct,dt,Xt,Gt=it.x-rt.x,$t=it.y-rt.y,jt=ot.x-it.x,F=ot.y-it.y,xe=Gt*Gt+$t*$t,re=Gt*F-$t*jt;if(Math.abs(re)>Number.EPSILON){let P=Math.sqrt(xe),b=Math.sqrt(jt*jt+F*F),k=rt.x-$t/P,q=rt.y+Gt/P,K=ot.x-F/b,ht=ot.y+jt/b,ut=((K-k)*F-(ht-q)*jt)/(Gt*F-$t*jt);ct=k+Gt*ut-it.x,dt=q+$t*ut-it.y;let Q=ct*ct+dt*dt;if(Q<=2)return new at(ct,dt);Xt=Math.sqrt(Q/2)}else{let P=!1;Gt>Number.EPSILON?jt>Number.EPSILON&&(P=!0):Gt<-Number.EPSILON?jt<-Number.EPSILON&&(P=!0):Math.sign($t)===Math.sign(F)&&(P=!0),P?(ct=-$t,dt=Gt,Xt=Math.sqrt(xe)):(ct=Gt,dt=$t,Xt=Math.sqrt(xe/2))}return new at(ct/Xt,dt/Xt)}let X=[];for(let it=0,rt=B.length,ot=rt-1,ct=it+1;it<rt;it++,ot++,ct++)ot===rt&&(ot=0),ct===rt&&(ct=0),X[it]=j(B[it],B[ot],B[ct]);let J=[],Z,vt=X.concat();for(let it=0,rt=L;it<rt;it++){let ot=C[it];Z=[];for(let ct=0,dt=ot.length,Xt=dt-1,Gt=ct+1;ct<dt;ct++,Xt++,Gt++)Xt===dt&&(Xt=0),Gt===dt&&(Gt=0),Z[ct]=j(ot[ct],ot[Xt],ot[Gt]);J.push(Z),vt=vt.concat(Z)}let lt;if(p===0)lt=vi.triangulateShape(B,C);else{let it=[],rt=[];for(let ot=0;ot<p;ot++){let ct=ot/p,dt=d*Math.cos(ct*Math.PI/2),Xt=g*Math.sin(ct*Math.PI/2)+y;for(let Gt=0,$t=B.length;Gt<$t;Gt++){let jt=H(B[Gt],X[Gt],Xt);ft(jt.x,jt.y,-dt),ct===0&&it.push(jt)}for(let Gt=0,$t=L;Gt<$t;Gt++){let jt=C[Gt];Z=J[Gt];let F=[];for(let xe=0,re=jt.length;xe<re;xe++){let P=H(jt[xe],Z[xe],Xt);ft(P.x,P.y,-dt),ct===0&&F.push(P)}ct===0&&rt.push(F)}}lt=vi.triangulateShape(it,rt)}let Qt=lt.length,Zt=g+y;for(let it=0;it<G;it++){let rt=f?H(A[it],vt[it],Zt):A[it];_?(R.copy(S.normals[0]).multiplyScalar(rt.x),E.copy(S.binormals[0]).multiplyScalar(rt.y),m.copy(M[0]).add(R).add(E),ft(m.x,m.y,m.z)):ft(rt.x,rt.y,0)}for(let it=1;it<=u;it++)for(let rt=0;rt<G;rt++){let ot=f?H(A[rt],vt[rt],Zt):A[rt];_?(R.copy(S.normals[it]).multiplyScalar(ot.x),E.copy(S.binormals[it]).multiplyScalar(ot.y),m.copy(M[it]).add(R).add(E),ft(m.x,m.y,m.z)):ft(ot.x,ot.y,h/u*it)}for(let it=p-1;it>=0;it--){let rt=it/p,ot=d*Math.cos(rt*Math.PI/2),ct=g*Math.sin(rt*Math.PI/2)+y;for(let dt=0,Xt=B.length;dt<Xt;dt++){let Gt=H(B[dt],X[dt],ct);ft(Gt.x,Gt.y,h+ot)}for(let dt=0,Xt=C.length;dt<Xt;dt++){let Gt=C[dt];Z=J[dt];for(let $t=0,jt=Gt.length;$t<jt;$t++){let F=H(Gt[$t],Z[$t],ct);_?ft(F.x,F.y+M[u-1].y,M[u-1].x+ot):ft(F.x,F.y,h+ot)}}}Ft(),Y();function Ft(){let it=s.length/3;if(f){let rt=0,ot=G*rt;for(let ct=0;ct<Qt;ct++){let dt=lt[ct];Ht(dt[2]+ot,dt[1]+ot,dt[0]+ot)}rt=u+p*2,ot=G*rt;for(let ct=0;ct<Qt;ct++){let dt=lt[ct];Ht(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let rt=0;rt<Qt;rt++){let ot=lt[rt];Ht(ot[2],ot[1],ot[0])}for(let rt=0;rt<Qt;rt++){let ot=lt[rt];Ht(ot[0]+G*u,ot[1]+G*u,ot[2]+G*u)}}i.addGroup(it,s.length/3-it,0)}function Y(){let it=s.length/3,rt=0;tt(B,rt),rt+=B.length;for(let ot=0,ct=C.length;ot<ct;ot++){let dt=C[ot];tt(dt,rt),rt+=dt.length}i.addGroup(it,s.length/3-it,1)}function tt(it,rt){let ot=it.length;for(;--ot>=0;){let ct=ot,dt=ot-1;dt<0&&(dt=it.length-1);for(let Xt=0,Gt=u+p*2;Xt<Gt;Xt++){let $t=G*Xt,jt=G*(Xt+1),F=rt+ct+$t,xe=rt+dt+$t,re=rt+dt+jt,P=rt+ct+jt;Mt(F,xe,re,P)}}}function ft(it,rt,ot){l.push(it),l.push(rt),l.push(ot)}function Ht(it,rt,ot){Nt(it),Nt(rt),Nt(ot);let ct=s.length/3,dt=v.generateTopUV(i,s,ct-3,ct-2,ct-1);de(dt[0]),de(dt[1]),de(dt[2])}function Mt(it,rt,ot,ct){Nt(it),Nt(rt),Nt(ct),Nt(rt),Nt(ot),Nt(ct);let dt=s.length/3,Xt=v.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);de(Xt[0]),de(Xt[1]),de(Xt[3]),de(Xt[1]),de(Xt[2]),de(Xt[3])}function Nt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function de(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return tg(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _l[s.type]().fromJSON(s)),new n(i,t.options)}},jm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],x=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-h),new at(f,1-g),new at(y,1-x)]:[new at(o,1-l),new at(u,1-h),new at(d,1-g),new at(p,1-x)]}};function tg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fa=class n extends pl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var hn=class n extends me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],y=[],p=[];for(let x=0;x<u;x++){let v=x*f-a;for(let M=0;M<c;M++){let _=M*h-r;g.push(_,-v,0),y.push(0,0,1),p.push(M/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<o;v++){let M=v+c*x,_=v+c*(x+1),S=v+1+c*(x+1),E=v+1+c*x;d.push(M,_,E),d.push(_,S,E)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ba=class n extends me{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=t,f=(e-t)/s,d=new U,g=new at;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let x=r+p/i*a;d.x=h*Math.cos(x),d.y=h*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let x=0;x<i;x++){let v=x+p,M=v,_=v+i+1,S=v+i+2,E=v+1;o.push(M,_,E),o.push(_,S,E)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Oa=class n extends me{constructor(t=new Us([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function c(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;vi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,x=g.length;p<x;p++){let v=g[p];vi.isClockWise(v)===!0&&(g[p]=v.reverse())}let y=vi.triangulateShape(d,g);for(let p=0,x=g.length;p<x;p++){let v=g[p];d=d.concat(v)}for(let p=0,x=d.length;p<x;p++){let v=d[p];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,x=y.length;p<x;p++){let v=y[p],M=v[0]+h,_=v[1]+h,S=v[2]+h;i.push(M,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return eg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function eg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var On=class n extends me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new U,f=new U,d=[],g=[],y=[],p=[];for(let x=0;x<=i;x++){let v=[],M=x/i,_=a+M*o,S=t*Math.cos(_),E=Math.sqrt(t*t-S*S),R=0;x===0&&a===0?R=.5/e:x===i&&l===Math.PI&&(R=-.5/e);for(let m=0;m<=e;m++){let T=m/e,A=s+T*r;h.x=-E*Math.cos(A),h.y=S,h.z=E*Math.sin(A),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(T+R,1-M),v.push(c++)}u.push(v)}for(let x=0;x<i;x++)for(let v=0;v<e;v++){let M=u[x][v+1],_=u[x][v],S=u[x+1][v],E=u[x+1][v+1];(x!==0||a>0)&&d.push(M,_,E),(x!==i-1||l<Math.PI)&&d.push(_,S,E)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cn=class n extends me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new U,d=new U,g=new U;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let x=0;x<=s;x++){let v=x/s*r;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(x/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let x=(s+1)*y+p-1,v=(s+1)*(y-1)+p-1,M=(s+1)*(y-1)+p,_=(s+1)*y+p;l.push(x,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var za=class n extends me{constructor(t=new Ca(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new at,u=new U,h=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function y(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),v(),x()}function p(M){u=t.getPointAt(M/e,u);let _=a.normals[M],S=a.binormals[M];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,m=Math.sin(R),T=-Math.cos(R);l.x=T*_.x+m*S.x,l.y=T*_.y+m*S.y,l.z=T*_.z+m*S.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function x(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){let S=(s+1)*(M-1)+(_-1),E=(s+1)*M+(_-1),R=(s+1)*M+_,m=(s+1)*(M-1)+_;g.push(S,E,m),g.push(E,R,m)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new _l[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ks(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(id(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function yn(n){let t={};for(let e=0;e<n.length;e++){let i=ks(n[e]);for(let s in i)t[s]=i[s]}return t}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ng(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var jd={clone:ks,merge:yn},ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vl=class extends zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ki=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Hi=class extends ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ml=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sl=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Eh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ls=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bl=class extends ls{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:r=t,o=2*e-i;break;case Ih:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:a=t,l=2*i-e;break;case Ih:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,x=-f*p+2*f*y-f*g,v=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let S=0;S!==o;++S)r[S]=x*a[u+S]+v*a[c+S]+M*a[l+S]+_*a[h+S];return r}},El=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Tl=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends ls{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],x=d*f+g*2,v=h[x],M=h[x+1],_=t*f+g*2,S=u[_],E=u[_+1],R=ag(i,e,v,S,s);r[g]=tp(R,y,M,E,p)}return r}};function tp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function rg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ag(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=tp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=rg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Eh(t.settings)&&(i.settings={inTangents:fr(t.settings.inTangents,Array),outTangents:fr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ua:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break;case Ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Eh(this.settings)&&(sd(this.settings.inTangents,t),sd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&om(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=ll;var cs=class extends kn{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ua;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};Al.prototype.ValueTypeName="color";var Rl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};Rl.prototype.ValueTypeName="number";var Cl=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},ka=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends kn{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ua;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new Pl,Ll=class{constructor(t){this.manager=t!==void 0?t:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ha=class extends Bs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Th=new he,rd=new U,ad=new U,Ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(rd),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Th,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jo=new U,Ko=new Ei,xi=new U,Va=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,Ko,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Jo,Ko,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new U,od=new at,ld=new at,ln=class extends Va{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,od,ld),e.subVectors(ld,od)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uh=class extends Ga{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},us=class extends Bs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cr=class extends Va{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fh=class extends Ga{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wa=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Xa=class extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var dr=-90,pr=1,Dl=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(dr,pr,t,e);s.layers=this.layers,this.add(s);let r=new ln(dr,pr,t,e);r.layers=this.layers,this.add(r);let a=new ln(dr,pr,t,e);a.layers=this.layers,this.add(a);let o=new ln(dr,pr,t,e);o.layers=this.layers,this.add(o);let l=new ln(dr,pr,t,e);l.layers=this.layers,this.add(l);let c=new ln(dr,pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Nl=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uu="\\[\\]\\.:\\/",og=new RegExp("["+uu+"]","g"),fu="[^"+uu+"]",lg="[^"+uu.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",fu),hg=/(WCOD+)?/.source.replace("WCOD",lg),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),dg=new RegExp("^"+cg+hg+ug+fg+"$"),pg=["material","materials","bones","map"],Bh=class{constructor(t,e,i){let s=i||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let e=dg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Bh;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kM=new Float32Array(1);var qa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Oh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function du(n,t,e,i){let s=mg(i);switch(e){case nu:return n*t;case su:return n*t/s.components*s.byteLength;case Gl:return n*t/s.components*s.byteLength;case gs:return n*t*2/s.components*s.byteLength;case Vl:return n*t*2/s.components*s.byteLength;case iu:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case Wl:return n*t*4/s.components*s.byteLength;case Ja:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qa:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Xl:case Yl:return Math.max(n,8)*Math.max(t,8)/2;case Zl:case Jl:case Ql:case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kl:case to:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _c:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case eo:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(n){switch(n){case In:case Qh:return{byteLength:1,components:1};case Dr:case jh:case fi:return{byteLength:2,components:1};case kl:case Hl:return{byteLength:2,components:4};case ui:case zl:case Zn:return{byteLength:4,components:1};case tu:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sg(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,m1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:bg,alphahash_pars_fragment:Eg,alphamap_fragment:Tg,alphamap_pars_fragment:wg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Ig,batching_pars_vertex:Pg,batching_vertex:Lg,begin_vertex:Dg,beginnormal_vertex:Ng,bsdfs:Ug,iridescence_fragment:Fg,bumpmap_pars_fragment:Bg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Hg,color_fragment:Gg,color_pars_fragment:Vg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:Kg,emissivemap_pars_fragment:Qg,colorspace_fragment:jg,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:a1,fog_pars_vertex:o1,fog_fragment:l1,fog_pars_fragment:c1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:u1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:d1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:x1,lights_phong_fragment:_1,lights_phong_pars_fragment:y1,lights_physical_fragment:v1,lights_physical_pars_fragment:M1,lights_fragment_begin:S1,lights_fragment_maps:b1,lights_fragment_end:E1,lightprobes_pars_fragment:T1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:C1,map_fragment:I1,map_pars_fragment:P1,map_particle_fragment:L1,map_particle_pars_fragment:D1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:U1,morphinstance_vertex:F1,morphcolor_vertex:B1,morphnormal_vertex:O1,morphtarget_pars_vertex:z1,morphtarget_vertex:k1,normal_fragment_begin:H1,normal_fragment_maps:G1,normal_pars_fragment:V1,normal_pars_vertex:W1,normal_vertex:X1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:K1,packing:Q1,premultiplied_alpha_fragment:j1,project_vertex:tx,dithering_fragment:ex,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ax,shadowmap_vertex:ox,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:hx,skinning_vertex:ux,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:xx,transmission_pars_fragment:_x,uv_pars_fragment:yx,uv_pars_vertex:vx,uv_vertex:Mx,worldpos_vertex:Sx,background_vert:bx,background_frag:Ex,backgroundCube_vert:Tx,backgroundCube_frag:wx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Ix,distance_vert:Px,distance_frag:Lx,equirect_vert:Dx,equirect_frag:Nx,linedashed_vert:Ux,linedashed_frag:Fx,meshbasic_vert:Bx,meshbasic_frag:Ox,meshlambert_vert:zx,meshlambert_frag:kx,meshmatcap_vert:Hx,meshmatcap_frag:Gx,meshnormal_vert:Vx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:$x,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Kx,points_frag:Qx,shadow_vert:jx,shadow_frag:t_,sprite_vert:e_,sprite_frag:n_},bt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Ri={basic:{uniforms:yn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:yn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:yn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:yn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:yn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:yn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:yn([bt.points,bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:yn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:yn([bt.common,bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:yn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:yn([bt.sprite,bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:yn([bt.common,bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:yn([bt.lights,bt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Ri.physical={uniforms:yn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var bc={r:0,b:0,g:0},i_=new he,Ep=new Jt;Ep.set(-1,0,0,0,1,0,0,0,1);function s_(n,t,e,i,s,r){let a=new Wt(0),o=s===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(v){let M=!1,_=d(v);_===null?p(a,o):_&&_.isColor&&(p(_,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===$a)?(c===void 0&&(c=new pt(new ke(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ks(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ep),c.material.toneMapped=le.getTransfer(_.colorSpace)!==ve,(u!==_||h!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new pt(new hn(2,2),new zn({name:"BackgroundMaterial",uniforms:ks(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=le.getTransfer(_.colorSpace)!==ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(bc,hu(n)),e.buffers.color.setClear(bc.r,bc.g,bc.b,M,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:y,dispose:x}}function r_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(C,D,N,L,B){let H=!1,G=h(C,L,N,D);r!==G&&(r=G,c(r.object)),H=d(C,L,N,B),H&&g(C,L,N,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(C,D,N,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,D,N,L){let B=L.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let G=C.isInstancedMesh===!0?C.id:0,j=H[G];j===void 0&&(j={},H[G]=j);let X=j[N.id];X===void 0&&(X={},j[N.id]=X);let J=X[B];return J===void 0&&(J=f(l()),X[B]=J),J}function f(C){let D=[],N=[],L=[];for(let B=0;B<e;B++)D[B]=0,N[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:C,attributes:{},index:null}}function d(C,D,N,L){let B=r.attributes,H=D.attributes,G=0,j=N.getAttributes();for(let X in j)if(j[X].location>=0){let Z=B[X],vt=H[X];if(vt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),Z===void 0||Z.attribute!==vt||vt&&Z.data!==vt.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(C,D,N,L){let B={},H=D.attributes,G=0,j=N.getAttributes();for(let X in j)if(j[X].location>=0){let Z=H[X];Z===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));let vt={};vt.attribute=Z,Z&&Z.data&&(vt.data=Z.data),B[X]=vt,G++}r.attributes=B,r.attributesNum=G,r.index=L}function y(){let C=r.newAttributes;for(let D=0,N=C.length;D<N;D++)C[D]=0}function p(C){x(C,0)}function x(C,D){let N=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;N[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),B[C]!==D&&(n.vertexAttribDivisor(C,D),B[C]=D)}function v(){let C=r.newAttributes,D=r.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==C[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function M(C,D,N,L,B,H,G){G===!0?n.vertexAttribIPointer(C,D,N,B,H):n.vertexAttribPointer(C,D,N,L,B,H)}function _(C,D,N,L){y();let B=L.attributes,H=N.getAttributes(),G=D.defaultAttributeValues;for(let j in H){let X=H[j];if(X.location>=0){let J=B[j];if(J===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){let Z=J.normalized,vt=J.itemSize,lt=t.get(J);if(lt===void 0)continue;let Qt=lt.buffer,Zt=lt.type,Ft=lt.bytesPerElement,Y=Zt===n.INT||Zt===n.UNSIGNED_INT||J.gpuType===zl;if(J.isInterleavedBufferAttribute){let tt=J.data,ft=tt.stride,Ht=J.offset;if(tt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<X.locationSize;Mt++)x(X.location+Mt,tt.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Mt=0;Mt<X.locationSize;Mt++)p(X.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<X.locationSize;Mt++)M(X.location+Mt,vt/X.locationSize,Zt,Z,ft*Ft,(Ht+vt/X.locationSize*Mt)*Ft,Y)}else{if(J.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)x(X.location+tt,J.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let tt=0;tt<X.locationSize;tt++)M(X.location+tt,vt/X.locationSize,Zt,Z,vt*Ft,vt/X.locationSize*tt*Ft,Y)}}else if(G!==void 0){let Z=G[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(X.location,Z);break;case 3:n.vertexAttrib3fv(X.location,Z);break;case 4:n.vertexAttrib4fv(X.location,Z);break;default:n.vertexAttrib1fv(X.location,Z)}}}}v()}function S(){T();for(let C in i){let D=i[C];for(let N in D){let L=D[N];for(let B in L){let H=L[B];for(let G in H)u(H[G].object),delete H[G];delete L[B]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let D=i[C.id];for(let N in D){let L=D[N];for(let B in L){let H=L[B];for(let G in H)u(H[G].object),delete H[G];delete L[B]}}delete i[C.id]}function R(C){for(let D in i){let N=i[D];for(let L in N){let B=N[L];if(B[C.id]===void 0)continue;let H=B[C.id];for(let G in H)u(H[G].object),delete H[G];delete B[C.id]}}}function m(C){for(let D in i){let N=i[D],L=C.isInstancedMesh===!0?C.id:0,B=N[L];if(B!==void 0){for(let H in B){let G=B[H];for(let j in G)u(G[j].object),delete G[j];delete B[H]}delete N[L],Object.keys(N).length===0&&delete i[D]}}}function T(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function a_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function o_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let m=R===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==In&&R!==Zn&&!m&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:E}}function l_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ri,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,x=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,M=v*4,_=x.clippingState||null;l.value=_,_=u(g,f,M,d);for(let S=0;S!==M;++S)_[S]=e[S];x.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let x=d+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<x)&&(p=new Float32Array(x));for(let M=0,_=d;M!==y;++M,_+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Br=4,c_=6,h_=20,u_=256,io=new Cr,np=new Wt,pu=null,mu=0,gu=0,xu=!1,f_=new U,Hs=new U,Tc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=f_}=r;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=xu,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:fi,format:Hn,colorSpace:fa,depthBuffer:!1},s=ip(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d_(r)),this._blurMaterial=m_(r,t,e),this._ggxMaterial=p_(r,t,e)}return s}_compileMaterial(t){let e=new pt(new me,t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,i,s,r){let l=new ln(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(np),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new ke,new De({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,x=!1,v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,x=!0):(p.color.copy(np),x=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;Fr(s,_*S,M>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(y,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ds||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,io)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-Br?i-g+Br:0),x=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Fr(r,p,x,3*y,2*y),s.setRenderTarget(r),s.render(o,io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Fr(t,p,x,3*y,2*y),s.setRenderTarget(t),s.render(o,io)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Br?s-this._lodMax+Br:0),f=4*(this._cubeSize-u);Fr(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(l,io)}};function d_(n){let t=[],e=[],i=n,s=n-Br+1+c_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,g=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let x=0;x<h;x++){let v=x%3*2/3-1,M=x>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(_,d*f*x);for(let S=0;S<f;S++){let E=u[S*2]*2-1,R=u[S*2+1]*2-1;x===0?Hs.set(1,R,E):x===1?Hs.set(-E,1,-R):x===2?Hs.set(-E,R,1):x===3?Hs.set(-1,R,-E):x===4?Hs.set(-E,-1,R):Hs.set(E,R,-1),Hs.toArray(y,(x*f+S)*d)}}let p=new me;p.setAttribute("position",new Me(g,d)),p.setAttribute("outputDirection",new Me(y,d)),e.push(new pt(p,null)),i>Br&&i--}return{lodMeshes:e,sizeLods:t}}function ip(n,t,e){let i=new Rn(n,t,e);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function p_(n,t,e){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function m_(n,t,e){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:h_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function sp(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function rp(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ea(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:wi});r.uniforms.tEquirect.value=e;let a=new pt(s,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=cn),new Dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function g_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Fl||d===Bl)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new wc(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Fl||d===Bl,y=d===ds||d===zs;if(g||y){let p=e.get(f),x=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return i===null&&(i=new Tc(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Tc(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===Fl?f.mapping=ds:d===Bl&&(f.mapping=zs),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function x_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function __(n,t,e,i){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(d!==null){let v=d.array;y=d.version;for(let M=0,_=v.length;M<_;M+=3){let S=v[M+0],E=v[M+1],R=v[M+2];f.push(S,E,E,R,R,S)}}else{let v=g.array;y=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let S=M+0,E=M+1,R=M+2;f.push(S,E,E,R,R,S)}}let p=new(g.count>=65535?va:Cs)(f,1);p.version=y;let x=r.get(h);x&&t.remove(x),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function y_(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),e.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*a,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function v_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function M_(n,t,e){let i=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==h){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let _=o.attributes.position.count*M,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*S*4*h),R=new ga(E,_,S,h);R.type=Zn,R.needsUpdate=!0;let m=M*4;for(let A=0;A<h;A++){let C=p[A],D=x[A],N=v[A],L=_*S*4*A;for(let B=0;B<C.count;B++){let H=B*m;d===!0&&(s.fromBufferAttribute(C,B),E[L+H+0]=s.x,E[L+H+1]=s.y,E[L+H+2]=s.z,E[L+H+3]=0),g===!0&&(s.fromBufferAttribute(D,B),E[L+H+4]=s.x,E[L+H+5]=s.y,E[L+H+6]=s.z,E[L+H+7]=0),y===!0&&(s.fromBufferAttribute(N,B),E[L+H+8]=s.x,E[L+H+9]=s.y,E[L+H+10]=s.z,E[L+H+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new at(_,S)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function S_(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var b_={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function E_(n,t,e,i,s,r){let a=new Rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new me;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));let u=new vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new pt(c,u),f=new Cr(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,x=null,v=[],M=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let E=0;E<v.length;E++){let R=v[E];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;let S=a.width,E=a.height;v.length>0&&o===null&&(o=new Rn(S,E,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(S,E,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let m=v[R];m.setSize&&m.setSize(S,E)}},this.begin=function(_,S){if(y||_.toneMapping===hi&&v.length===0)return!1;if(x=S,S!==null){let E=S.width,R=S.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return M===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=hi,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=p,y=!0;let E=a,R=o;for(let m=0;m<v.length;m++){let T=v[m];T.enabled!==!1&&(T.render(_,R,E,S),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},le.getTransfer(d)===ve&&(u.defines.SRGB_TRANSFER="");let m=b_[g];m&&(u.defines[m]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(x),_.render(h,f),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Tp=new En,vu=new os(1,1),wp=new ga,Ap=new fl,Rp=new Ea,ap=[],op=[],lp=new Float32Array(16),cp=new Float32Array(9),hp=new Float32Array(4);function zr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ap[s];if(r===void 0&&(r=new Float32Array(s),ap[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Cc(n,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function T_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function C_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;hp.set(i),n.uniformMatrix2fv(this.addr,!1,hp),Ze(e,i)}}function I_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;cp.set(i),n.uniformMatrix3fv(this.addr,!1,cp),Ze(e,i)}}function P_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;lp.set(i),n.uniformMatrix4fv(this.addr,!1,lp),Ze(e,i)}}function L_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function N_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function U_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function F_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function k_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vu.compareFunction=e.isReversedDepthBuffer()?Sc:Mc,r=vu):r=Tp,e.setTexture2D(t||r,s)}function H_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ap,s)}function G_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rp,s)}function V_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wp,s)}function W_(n){switch(n){case 5126:return T_;case 35664:return w_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return I_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return B_;case 36295:return O_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}function X_(n,t){n.uniform1fv(this.addr,t)}function q_(n,t){let e=zr(t,this.size,2);n.uniform2fv(this.addr,e)}function Y_(n,t){let e=zr(t,this.size,3);n.uniform3fv(this.addr,e)}function $_(n,t){let e=zr(t,this.size,4);n.uniform4fv(this.addr,e)}function Z_(n,t){let e=zr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function J_(n,t){let e=zr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function K_(n,t){let e=zr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Q_(n,t){n.uniform1iv(this.addr,t)}function j_(n,t){n.uniform2iv(this.addr,t)}function ty(n,t){n.uniform3iv(this.addr,t)}function ey(n,t){n.uniform4iv(this.addr,t)}function ny(n,t){n.uniform1uiv(this.addr,t)}function iy(n,t){n.uniform2uiv(this.addr,t)}function sy(n,t){n.uniform3uiv(this.addr,t)}function ry(n,t){n.uniform4uiv(this.addr,t)}function ay(n,t,e){let i=this.cache,s=t.length,r=Cc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vu:a=Tp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function oy(n,t,e){let i=this.cache,s=t.length,r=Cc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ap,r[a])}function ly(n,t,e){let i=this.cache,s=t.length,r=Cc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rp,r[a])}function cy(n,t,e){let i=this.cache,s=t.length,r=Cc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wp,r[a])}function hy(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return $_;case 35674:return Z_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return j_;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}var Mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=W_(e.type)}},Su=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hy(e.type)}},bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},_u=/(\w+)(\])?(\[|\.)?/g;function up(n,t){n.seq.push(t),n.map[t.id]=t}function uy(n,t,e){let i=n.name,s=i.length;for(_u.lastIndex=0;;){let r=_u.exec(i),a=_u.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){up(e,c===void 0?new Mu(o,n,t):new Su(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new bu(o),up(e,h)),e=h}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);uy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function fp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var fy=37297,dy=0;function py(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var dp=new Jt;function my(n){le._getMatrix(dp,le.workingColorSpace,n);let t=`mat3( ${dp.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case da:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+py(n.getShaderSource(t),o)}else return r}function gy(n,t){let e=my(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var xy={[Wh]:"Linear",[Xh]:"Reinhard",[qh]:"Cineon",[Yh]:"ACESFilmic",[Zh]:"AgX",[Jh]:"Neutral",[$h]:"Custom"};function _y(n,t){let e=xy[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ec=new U;function yy(){le.getLuminanceCoefficients(Ec);let n=Ec.x.toFixed(4),t=Ec.y.toFixed(4),e=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function My(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ro(n){return n!==""}function mp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var by=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(n){return n.replace(by,Ty)}var Ey=new Map;function Ty(n,t){let e=se[t];if(e===void 0){let i=Ey.get(t);if(i!==void 0)e=se[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eu(e)}var wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(n){return n.replace(wy,Ay)}function Ay(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _p(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ry={[Ya]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function Cy(n){return Ry[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Iy={[ds]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function Py(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Iy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ly={[zs]:"ENVMAP_MODE_REFRACTION"};function Dy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ly[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ny={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function Uy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ny[n.combine]||"ENVMAP_BLENDING_NONE"}function Fy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function By(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cy(e),c=Py(e),u=Dy(e),h=Uy(e),f=Fy(e),d=vy(e),g=My(r),y=s.createProgram(),p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),x.length>0&&(x+=`
`)):(p=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),x=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?se.tonemapping_pars_fragment:"",e.toneMapping!==hi?_y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,gy("linearToOutputTexel",e.outputColorSpace),yy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),a=Eu(a),a=mp(a,e),a=gp(a,e),o=Eu(o),o=mp(o,e),o=gp(o,e),a=xp(a),o=xp(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=v+p+a,_=v+x+o,S=fp(s,s.VERTEX_SHADER,M),E=fp(s,s.FRAGMENT_SHADER,_);s.attachShader(y,S),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(E)||"",B=D.trim(),H=N.trim(),G=L.trim(),j=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,E);else{let J=pp(s,S,"vertex"),Z=pp(s,E,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+J+`
`+Z)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(H===""||G==="")&&(X=!1);X&&(C.diagnostics={runnable:j,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:G,prefix:x}})}s.deleteShader(S),s.deleteShader(E),m=new Or(s,y),T=Sy(s,y)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,fy)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var Oy=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wu(t),e.set(t,i)),i}},wu=class{constructor(t){this.id=Oy++,this.code=t,this.usedTimes=0}};function zy(n){return n===gs||n===to||n===eo}function ky(n,t,e,i,s,r){let a=new xa,o=new Tu,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return l.add(m),m===0?"uv":`uv${m}`}function y(m,T,A,C,D,N){let L=C.fog,B=D.geometry,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,j=t.get(m.envMap||H,G),X=j&&j.mapping===$a?j.image.height:null,J=d[m.type];m.precision!==null&&(f=i.getMaxPrecision(m.precision),f!==m.precision&&Vt("WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=Z!==void 0?Z.length:0,lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let Qt,Zt,Ft,Y;if(J){let Ce=Ri[J];Qt=Ce.vertexShader,Zt=Ce.fragmentShader}else{Qt=m.vertexShader,Zt=m.fragmentShader;let Ce=o.getVertexShaderStage(m),_e=o.getFragmentShaderStage(m);o.update(m,Ce,_e),Ft=Ce.id,Y=_e.id}let tt=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),Ht=D.isInstancedMesh===!0,Mt=D.isBatchedMesh===!0,Nt=!!m.map,de=!!m.matcap,it=!!j,rt=!!m.aoMap,ot=!!m.lightMap,ct=!!m.bumpMap&&m.wireframe===!1,dt=!!m.normalMap,Xt=!!m.displacementMap,Gt=!!m.emissiveMap,$t=!!m.metalnessMap,jt=!!m.roughnessMap,F=m.anisotropy>0,xe=m.clearcoat>0,re=m.dispersion>0,P=m.retroreflectivity>0,b=m.iridescence>0,k=m.sheen>0,q=m.transmission>0,K=F&&!!m.anisotropyMap,ht=xe&&!!m.clearcoatMap,ut=xe&&!!m.clearcoatNormalMap,Q=xe&&!!m.clearcoatRoughnessMap,nt=b&&!!m.iridescenceMap,mt=b&&!!m.iridescenceThicknessMap,Ot=k&&!!m.sheenColorMap,St=k&&!!m.sheenRoughnessMap,gt=!!m.specularMap,zt=!!m.specularColorMap,qt=!!m.specularIntensityMap,ne=q&&!!m.transmissionMap,z=q&&!!m.thicknessMap,xt=!!m.gradientMap,et=!!m.alphaMap,_t=m.alphaTest>0,At=!!m.alphaHash,st=!!m.extensions,kt=hi;m.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(kt=n.toneMapping);let Dt={shaderID:J,shaderType:m.type,shaderName:m.name,vertexShader:Qt,fragmentShader:Zt,defines:m.defines,customVertexShaderID:Ft,customFragmentShaderID:Y,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&D._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&D.instanceColor!==null,instancingMorph:Ht&&D.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Nt,matcap:de,envMap:it,envMapMode:it&&j.mapping,envMapCubeUVHeight:X,aoMap:rt,lightMap:ot,bumpMap:ct,normalMap:dt,displacementMap:Xt,emissiveMap:Gt,normalMapObjectSpace:dt&&m.normalMapType===Ud,normalMapTangentSpace:dt&&m.normalMapType===no,packedNormalMap:dt&&m.normalMapType===no&&zy(m.normalMap.format),metalnessMap:$t,roughnessMap:jt,anisotropy:F,anisotropyMap:K,clearcoat:xe,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:Q,dispersion:re,retroreflection:P,iridescence:b,iridescenceMap:nt,iridescenceThicknessMap:mt,sheen:k,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:gt,specularColorMap:zt,specularIntensityMap:qt,transmission:q,transmissionMap:ne,thicknessMap:z,gradientMap:xt,opaque:m.transparent===!1&&m.blending===Pr&&m.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:At,combine:m.combine,mapUv:Nt&&g(m.map.channel),aoMapUv:rt&&g(m.aoMap.channel),lightMapUv:ot&&g(m.lightMap.channel),bumpMapUv:ct&&g(m.bumpMap.channel),normalMapUv:dt&&g(m.normalMap.channel),displacementMapUv:Xt&&g(m.displacementMap.channel),emissiveMapUv:Gt&&g(m.emissiveMap.channel),metalnessMapUv:$t&&g(m.metalnessMap.channel),roughnessMapUv:jt&&g(m.roughnessMap.channel),anisotropyMapUv:K&&g(m.anisotropyMap.channel),clearcoatMapUv:ht&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(m.sheenRoughnessMap.channel),specularMapUv:gt&&g(m.specularMap.channel),specularColorMapUv:zt&&g(m.specularColorMap.channel),specularIntensityMapUv:qt&&g(m.specularIntensityMap.channel),transmissionMapUv:ne&&g(m.transmissionMap.channel),thicknessMapUv:z&&g(m.thicknessMap.channel),alphaMapUv:et&&g(m.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||F),vertexNormals:!!B.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Nt||et),fog:!!L,useFog:m.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:lt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Nt&&m.map.isVideoTexture===!0&&le.getTransfer(m.map.colorSpace)===ve,decodeVideoTextureEmissive:Gt&&m.emissiveMap.isVideoTexture===!0&&le.getTransfer(m.emissiveMap.colorSpace)===ve,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===en,flipSided:m.side===Tn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:st&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&m.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(m){let T=[];if(m.shaderID?T.push(m.shaderID):(T.push(m.customVertexShaderID),T.push(m.customFragmentShaderID)),m.defines!==void 0)for(let A in m.defines)T.push(A),T.push(m.defines[A]);return m.isRawShaderMaterial===!1&&(x(T,m),v(T,m),T.push(n.outputColorSpace)),T.push(m.customProgramCacheKey),T.join()}function x(m,T){m.push(T.precision),m.push(T.outputColorSpace),m.push(T.envMapMode),m.push(T.envMapCubeUVHeight),m.push(T.mapUv),m.push(T.alphaMapUv),m.push(T.lightMapUv),m.push(T.aoMapUv),m.push(T.bumpMapUv),m.push(T.normalMapUv),m.push(T.displacementMapUv),m.push(T.emissiveMapUv),m.push(T.metalnessMapUv),m.push(T.roughnessMapUv),m.push(T.anisotropyMapUv),m.push(T.clearcoatMapUv),m.push(T.clearcoatNormalMapUv),m.push(T.clearcoatRoughnessMapUv),m.push(T.iridescenceMapUv),m.push(T.iridescenceThicknessMapUv),m.push(T.sheenColorMapUv),m.push(T.sheenRoughnessMapUv),m.push(T.specularMapUv),m.push(T.specularColorMapUv),m.push(T.specularIntensityMapUv),m.push(T.transmissionMapUv),m.push(T.thicknessMapUv),m.push(T.combine),m.push(T.fogExp2),m.push(T.sizeAttenuation),m.push(T.morphTargetsCount),m.push(T.morphAttributeCount),m.push(T.numSunLights),m.push(T.numDirLights),m.push(T.numPointLights),m.push(T.numSpotLights),m.push(T.numSpotLightMaps),m.push(T.numHemiLights),m.push(T.numRectAreaLights),m.push(T.numSunLightShadows),m.push(T.numDirLightShadows),m.push(T.numPointLightShadows),m.push(T.numSpotLightShadows),m.push(T.numSpotLightShadowsWithMaps),m.push(T.numLightProbes),m.push(T.shadowMapType),m.push(T.toneMapping),m.push(T.numClippingPlanes),m.push(T.numClipIntersection),m.push(T.depthPacking)}function v(m,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function M(m){let T=d[m.type],A;if(T){let C=Ri[T];A=jd.clone(C.uniforms)}else A=m.uniforms;return A}function _(m,T){let A=u.get(T);return A!==void 0?++A.usedTimes:(A=new By(n,T,m,s),c.push(A),u.set(T,A)),A}function S(m){if(--m.usedTimes===0){let T=c.indexOf(m);c[T]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function E(m){o.remove(m)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function Hy(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Gy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function yp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,y,p,x){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:x},n[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=a(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=p,v.group=x),t++,v}function l(f,d,g,y,p,x,v){v.reversedDepth===!0&&(p=-p);let M=o(f,d,g,y,p,x);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(f,d,g,y,p,x){let v=o(f,d,g,y,p,x);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||Gy),i.length>1&&i.sort(d||yp),s.length>1&&s.sort(d||yp)}function h(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Vy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new vp,n.set(i,[a])):s>=r.length?(a=new vp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Xy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var qy=0;function Yy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $y(n){let t=new Wy,e=Xy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new he,a=new he;function o(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,g=0,y=0,p=0,x=0,v=0,M=0,_=0,S=0,E=0,R=0,m=0,T=0,A=0;c.sort(Yy);for(let D=0,N=c.length;D<N;D++){let L=c[D],B=L.color,H=L.intensity,G=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===gs?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*H,h+=B.g*H,f+=B.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);A++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=j;let vt=J.getViewportCount();for(let lt=0;lt<vt;lt++)i.sunShadowMatrix[y+lt]=J.getMatrix(lt),i.sunShadowCascade[y+lt]=J._cascadeData[lt];y+=vt,g++}i.sun[d]=X,d++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=X,p++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;let J=L.shadow;if(L.map&&(i.spotLightMap[m]=L.map,m++,J.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=J.matrix,L.castShadow){let Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=j,R++}v++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=X,M++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[x]=Z,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=L.shadow.matrix,E++}i.point[x]=X,x++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[_]=X,_++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let C=i.hash;(C.sunLength!==d||C.directionalLength!==p||C.pointLength!==x||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==R||C.numSpotMaps!==m||C.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=M,i.point.length=x,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+m-T,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.sunLength=d,C.directionalLength=p,C.pointLength=x,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=R,C.numSpotMaps=m,C.numLightProbes=A,i.version=qy++)}function l(c,u){let h=0,f=0,d=0,g=0,y=0,p=0,x=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let _=c[v];if(_.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(x),h++}else if(_.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),f++}else if(_.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(_.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(x),p++}}}return{setup:o,setupView:l,state:i}}function Mp(n){let t=new $y(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){e.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Zy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Mp(n),t.set(s,[o])):r>=a.length?(o=new Mp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Sp=new he,so=new U,yu=new U;function tv(n,t,e){let i=new Er,s=new at,r=new at,a=new Se,o=new Ml,l=new Sl,c={},u=e.maxTextureSize,h={[fs]:Tn,[Tn]:fs,[en]:en},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Jy,fragmentShader:Ky}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let x=this.type;this.render=function(E,R,m){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ud&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let T=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=x!==this.type;N&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=E.length;L<B;L++){let H=E[L],G=H.shadow;if(G===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ir){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Rn(s.x,s.y,{format:gs,type:fi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new os(s.x,s.y,Zn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=Si,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn}else H.isPointLight?(G.map=new wc(s.x),G.map.depthTexture=new dl(s.x,ui)):(G.map=new Rn(s.x,s.y),G.map.depthTexture=new os(s.x,s.y,ui)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=Si,this.type===Ya?(G.map.depthTexture.compareFunction=X?Sc:Mc,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,m);for(let Z=0;Z<J;Z++){let vt=G.getCamera(Z);if(H.isPointLight){let lt=G.camera,Qt=G.matrix,Zt=H.distance||lt.far;Zt!==lt.far&&(lt.far=Zt,lt.updateProjectionMatrix()),so.setFromMatrixPosition(H.matrixWorld),lt.position.copy(so),yu.copy(lt.position),yu.add(Qy[Z]),lt.up.copy(jy[Z]),lt.lookAt(yu),lt.updateMatrixWorld(),Qt.makeTranslation(-so.x,-so.y,-so.z),Sp.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Sp,lt.coordinateSystem,lt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(G.map),n.clear());let lt=G.getViewport(Z);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),D.viewport(a)}i=G.getFrustum(Z),_(R,m,vt,H,this.type)}G.isPointLightShadow!==!0&&this.type===Ir&&v(G,m),G.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(T,A,C)};function v(E,R){let m=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:gs,type:fi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,m,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,m,d,y,null)}function M(E,R,m,T){let A=null,C=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)A=C;else if(A=m.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=A.uuid,N=R.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let B=L[N];B===void 0&&(B=A.clone(),L[N]=B,R.addEventListener("dispose",S)),A=B}if(A.visible=R.visible,A.wireframe=R.wireframe,T===Ir?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:h[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,m.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=n.properties.get(A);D.light=m}return A}function _(E,R,m,T,A){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Ir)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);let N=t.update(E),L=E.material;if(Array.isArray(L)){let B=N.groups;for(let H=0,G=B.length;H<G;H++){let j=B[H],X=L[j.materialIndex];if(X&&X.visible){let J=M(E,X,T,A);E.onBeforeShadow(n,E,R,m,N,J,j),n.renderBufferDirect(m,null,N,J,E,j),E.onAfterShadow(n,E,R,m,N,J,j)}}}else if(L.visible){let B=M(E,L,T,A);E.onBeforeShadow(n,E,R,m,N,B,null),n.renderBufferDirect(m,null,N,B,E,null),E.onAfterShadow(n,E,R,m,N,B,null)}}let D=E.children;for(let N=0,L=D.length;N<L;N++)_(D[N],R,m,T,A)}function S(E){E.target.removeEventListener("dispose",S);for(let m in c){let T=c[m],A=E.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function ev(n,t){function e(){let z=!1,xt=new Se,et=null,_t=new Se(0,0,0,0);return{setMask:function(At){et!==At&&!z&&(n.colorMask(At,At,At,At),et=At)},setLocked:function(At){z=At},setClear:function(At,st,kt,Dt,Ce){Ce===!0&&(At*=Dt,st*=Dt,kt*=Dt),xt.set(At,st,kt,Dt),_t.equals(xt)===!1&&(n.clearColor(At,st,kt,Dt),_t.copy(xt))},reset:function(){z=!1,et=null,_t.set(-1,0,0,0)}}}function i(){let z=!1,xt=!1,et=null,_t=null,At=null;return{setReversed:function(st){if(xt!==st){let kt=t.get("EXT_clip_control");st?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),xt=st;let Dt=At;At=null,this.setClear(Dt)}},getReversed:function(){return xt},setTest:function(st){st?tt(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(st){et!==st&&!z&&(n.depthMask(st),et=st)},setFunc:function(st){if(xt&&(st=qd[st]),_t!==st){switch(st){case tl:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=st}},setLocked:function(st){z=st},setClear:function(st){At!==st&&(At=st,xt&&(st=1-st),n.clearDepth(st))},reset:function(){z=!1,et=null,_t=null,At=null,xt=!1}}}function s(){let z=!1,xt=null,et=null,_t=null,At=null,st=null,kt=null,Dt=null,Ce=null;return{setTest:function(_e){z||(_e?tt(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(_e){xt!==_e&&!z&&(n.stencilMask(_e),xt=_e)},setFunc:function(_e,ei,mi){(et!==_e||_t!==ei||At!==mi)&&(n.stencilFunc(_e,ei,mi),et=_e,_t=ei,At=mi)},setOp:function(_e,ei,mi){(st!==_e||kt!==ei||Dt!==mi)&&(n.stencilOp(_e,ei,mi),st=_e,kt=ei,Dt=mi)},setLocked:function(_e){z=_e},setClear:function(_e){Ce!==_e&&(n.clearStencil(_e),Ce=_e)},reset:function(){z=!1,xt=null,et=null,_t=null,At=null,st=null,kt=null,Dt=null,Ce=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],y=null,p=!1,x=null,v=null,M=null,_=null,S=null,E=null,R=null,m=new Wt(0,0,0),T=0,A=!1,C=null,D=null,N=null,L=null,B=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=j>=2);let J=null,Z={},vt=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),Qt=new Se().fromArray(vt),Zt=new Se().fromArray(lt);function Ft(z,xt,et,_t){let At=new Uint8Array(4),st=n.createTexture();n.bindTexture(z,st),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<et;kt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(xt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return st}let Y={};Y[n.TEXTURE_2D]=Ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(gr),ct(!1),dt(zh),tt(n.CULL_FACE),rt(wi);function tt(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function ft(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Ht(z,xt){return f[z]!==xt?(n.bindFramebuffer(z,xt),f[z]=xt,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xt),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Mt(z,xt){let et=g,_t=!1;if(z){et=d.get(xt),et===void 0&&(et=[],d.set(xt,et));let At=z.textures;if(et.length!==At.length||et[0]!==n.COLOR_ATTACHMENT0){for(let st=0,kt=At.length;st<kt;st++)et[st]=n.COLOR_ATTACHMENT0+st;et.length=At.length,_t=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,_t=!0);_t&&n.drawBuffers(et)}function Nt(z){return y!==z?(n.useProgram(z),y=z,!0):!1}let de={[Os]:n.FUNC_ADD,[dd]:n.FUNC_SUBTRACT,[pd]:n.FUNC_REVERSE_SUBTRACT};de[md]=n.MIN,de[gd]=n.MAX;let it={[xd]:n.ZERO,[_d]:n.ONE,[yd]:n.SRC_COLOR,[Gh]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[bd]:n.DST_COLOR,[Md]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[Ed]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[wd]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(z,xt,et,_t,At,st,kt,Dt,Ce,_e){if(z===wi){p===!0&&(ft(n.BLEND),p=!1);return}if(p===!1&&(tt(n.BLEND),p=!0),z!==fd){if(z!==x||_e!==A){if((v!==Os||S!==Os)&&(n.blendEquation(n.FUNC_ADD),v=Os,S=Os),_e)switch(z){case Pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",z);break}else switch(z){case Pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kh:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",z);break}M=null,_=null,E=null,R=null,m.set(0,0,0),T=0,x=z,A=_e}return}At=At||xt,st=st||et,kt=kt||_t,(xt!==v||At!==S)&&(n.blendEquationSeparate(de[xt],de[At]),v=xt,S=At),(et!==M||_t!==_||st!==E||kt!==R)&&(n.blendFuncSeparate(it[et],it[_t],it[st],it[kt]),M=et,_=_t,E=st,R=kt),(Dt.equals(m)===!1||Ce!==T)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Ce),m.copy(Dt),T=Ce),x=z,A=!1}function ot(z,xt){z.side===en?ft(n.CULL_FACE):tt(n.CULL_FACE);let et=z.side===Tn;xt&&(et=!et),ct(et),z.blending===Pr&&z.transparent===!1?rt(wi):rt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let _t=z.stencilWrite;o.setTest(_t),_t&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){C!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),C=z)}function dt(z){z!==cd?(tt(n.CULL_FACE),z!==D&&(z===zh?n.cullFace(n.BACK):z===hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),D=z}function Xt(z){z!==N&&(G&&n.lineWidth(z),N=z)}function Gt(z,xt,et){z?(tt(n.POLYGON_OFFSET_FILL),(L!==xt||B!==et)&&(L=xt,B=et,a.getReversed()&&(xt=-xt),n.polygonOffset(xt,et))):ft(n.POLYGON_OFFSET_FILL)}function $t(z){z?tt(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function jt(z){z===void 0&&(z=n.TEXTURE0+H-1),J!==z&&(n.activeTexture(z),J=z)}function F(z,xt,et){et===void 0&&(J===null?et=n.TEXTURE0+H-1:et=J);let _t=Z[et];_t===void 0&&(_t={type:void 0,texture:void 0},Z[et]=_t),(_t.type!==z||_t.texture!==xt)&&(J!==et&&(n.activeTexture(et),J=et),n.bindTexture(z,xt||Y[z]),_t.type=z,_t.texture=xt)}function xe(){let z=Z[J];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function b(){try{n.texSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function k(){try{n.texSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function ht(){try{n.texStorage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function ut(){try{n.texStorage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function Q(){try{n.texImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function nt(){try{n.texImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function mt(z){return h[z]!==void 0?h[z]:n.getParameter(z)}function Ot(z,xt){h[z]!==xt&&(n.pixelStorei(z,xt),h[z]=xt)}function St(z){Qt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Qt.copy(z))}function gt(z){Zt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Zt.copy(z))}function zt(z,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let _t=et.get(z);_t===void 0&&(_t=n.getUniformBlockIndex(xt,z.name),et.set(z,_t))}function qt(z,xt){let _t=c.get(xt).get(z);l.get(xt)!==_t&&(n.uniformBlockBinding(xt,_t,z.__bindingPointIndex),l.set(xt,_t))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,Z={},f={},d=new WeakMap,g=[],y=null,p=!1,x=null,v=null,M=null,_=null,S=null,E=null,R=null,m=new Wt(0,0,0),T=0,A=!1,C=null,D=null,N=null,L=null,B=null,Qt.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:ft,bindFramebuffer:Ht,drawBuffers:Mt,useProgram:Nt,setBlending:rt,setMaterial:ot,setFlipSided:ct,setCullFace:dt,setLineWidth:Xt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:jt,bindTexture:F,unbindTexture:xe,compressedTexImage2D:re,compressedTexImage3D:P,texImage2D:Q,texImage3D:nt,pixelStorei:Ot,getParameter:mt,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:St,viewport:gt,reset:ne}}function nv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return g?new OffscreenCanvas(P,b):pa("canvas")}function p(P,b,k){let q=1,K=re(P);if((K.width>k||K.height>k)&&(q=k/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(q*K.width),ut=Math.floor(q*K.height);f===void 0&&(f=y(ht,ut));let Q=b?y(ht,ut):f;return Q.width=ht,Q.height=ut,Q.getContext("2d").drawImage(P,0,0,ht,ut),Vt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ht+"x"+ut+")."),Q}else return"data"in P&&Vt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function x(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(P,b,k,q,K,ht=!1){if(P!==null){if(n[P]!==void 0)return n[P];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut;q&&(ut=t.get("EXT_texture_norm16"),ut||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===n.RED&&(k===n.FLOAT&&(Q=n.R32F),k===n.HALF_FLOAT&&(Q=n.R16F),k===n.UNSIGNED_BYTE&&(Q=n.R8),k===n.UNSIGNED_SHORT&&ut&&(Q=ut.R16_EXT),k===n.SHORT&&ut&&(Q=ut.R16_SNORM_EXT)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.R8UI),k===n.UNSIGNED_SHORT&&(Q=n.R16UI),k===n.UNSIGNED_INT&&(Q=n.R32UI),k===n.BYTE&&(Q=n.R8I),k===n.SHORT&&(Q=n.R16I),k===n.INT&&(Q=n.R32I)),b===n.RG&&(k===n.FLOAT&&(Q=n.RG32F),k===n.HALF_FLOAT&&(Q=n.RG16F),k===n.UNSIGNED_BYTE&&(Q=n.RG8),k===n.UNSIGNED_SHORT&&ut&&(Q=ut.RG16_EXT),k===n.SHORT&&ut&&(Q=ut.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RG8UI),k===n.UNSIGNED_SHORT&&(Q=n.RG16UI),k===n.UNSIGNED_INT&&(Q=n.RG32UI),k===n.BYTE&&(Q=n.RG8I),k===n.SHORT&&(Q=n.RG16I),k===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),k===n.UNSIGNED_INT&&(Q=n.RGB32UI),k===n.BYTE&&(Q=n.RGB8I),k===n.SHORT&&(Q=n.RGB16I),k===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),k===n.UNSIGNED_INT&&(Q=n.RGBA32UI),k===n.BYTE&&(Q=n.RGBA8I),k===n.SHORT&&(Q=n.RGBA16I),k===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_SHORT&&ut&&(Q=ut.RGB16_EXT),k===n.SHORT&&ut&&(Q=ut.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),b===n.RGBA){let nt=ht?da:le.getTransfer(K);k===n.FLOAT&&(Q=n.RGBA32F),k===n.HALF_FLOAT&&(Q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Q=nt===ve?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ut&&(Q=ut.RGBA16_EXT),k===n.SHORT&&ut&&(Q=ut.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(P,b){let k;return P?b===null||b===ui||b===Nr?k=n.DEPTH24_STENCIL8:b===Zn?k=n.DEPTH32F_STENCIL8:b===Dr&&(k=n.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===Nr?k=n.DEPTH_COMPONENT24:b===Zn?k=n.DEPTH_COMPONENT32F:b===Dr&&(k=n.DEPTH_COMPONENT16),k}function E(P,b){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){let b=P.target;b.removeEventListener("dispose",R),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function m(P){let b=P.target;b.removeEventListener("dispose",m),C(b)}function T(P){let b=i.get(P);if(b.__webglInit===void 0)return;let k=P.source,q=d.get(k);if(q){let K=q[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(P),Object.keys(q).length===0&&d.delete(k)}i.remove(P)}function A(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let k=P.source,q=d.get(k);delete q[b.__cacheKey],a.memory.textures--}function C(P){let b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let K=0;K<b.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(b.__webglFramebuffer[q][K]);else n.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)n.deleteFramebuffer(b.__webglFramebuffer[q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=P.textures;for(let q=0,K=k.length;q<K;q++){let ht=i.get(k[q]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(k[q])}i.remove(P)}let D=0;function N(){D=0}function L(){return D}function B(P){D=P}function H(){let P=D;return P>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function G(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function j(P,b){let k=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let q=P.image;if(q===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(k,P,b);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function X(P,b){let k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ft(k,P,b);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function J(P,b){let k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ft(k,P,b);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function Z(P,b){let k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Ht(k,P,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}let vt={[as]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},lt={[tn]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Za]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Ol]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},Qt={[Bd]:n.NEVER,[Gd]:n.ALWAYS,[Od]:n.LESS,[Mc]:n.LEQUAL,[zd]:n.EQUAL,[Sc]:n.GEQUAL,[kd]:n.GREATER,[Hd]:n.NOTEQUAL};function Zt(P,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===Ol||b.magFilter===Za||b.magFilter===ps||b.minFilter===cn||b.minFilter===Ol||b.minFilter===Za||b.minFilter===ps)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,vt[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,vt[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,vt[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,lt[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Qt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Za&&b.minFilter!==ps||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ft(P,b){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));let q=b.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let ht=G(b);if(ht!==P.__cacheKey){K[ht]===void 0&&(K[ht]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[ht].usedTimes++;let ut=K[P.__cacheKey];ut!==void 0&&(K[P.__cacheKey].usedTimes--,ut.usedTimes===0&&A(b)),P.__cacheKey=ht,P.__webglTexture=K[ht].texture}return k}function Y(P,b,k){return Math.floor(Math.floor(P/k)/b)}function tt(P,b,k,q){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,q,b.data);else{ht.sort((Ot,St)=>Ot.start-St.start);let ut=0;for(let Ot=1;Ot<ht.length;Ot++){let St=ht[ut],gt=ht[Ot],zt=St.start+St.count,qt=Y(gt.start,b.width,4),ne=Y(St.start,b.width,4);gt.start<=zt+1&&qt===ne&&Y(gt.start+gt.count-1,b.width,4)===qt?St.count=Math.max(St.count,gt.start+gt.count-St.start):(++ut,ht[ut]=gt)}ht.length=ut+1;let Q=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ot=0,St=ht.length;Ot<St;Ot++){let gt=ht[Ot],zt=Math.floor(gt.start/4),qt=Math.ceil(gt.count/4),ne=zt%b.width,z=Math.floor(zt/b.width),xt=qt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,ne,z,xt,et,k,q,b.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,mt)}}function ft(P,b,k){let q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=n.TEXTURE_3D);let K=Ft(P,b),ht=b.source;e.bindTexture(q,P.__webglTexture,n.TEXTURE0+k);let ut=i.get(ht);if(ht.version!==ut.__version||K===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),_t=b.colorSpace===Gi?null:le.getPrimaries(b.colorSpace),At=b.colorSpace===Gi||et===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let nt=p(b.image,!1,s.maxTextureSize);nt=xe(b,nt);let mt=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),St=_(b.internalFormat,mt,Ot,b.normalized,b.colorSpace,b.isVideoTexture);Zt(q,b);let gt,zt=b.mipmaps,qt=b.isVideoTexture!==!0,ne=ut.__version===void 0||K===!0,z=ht.dataReady,xt=E(b,nt);if(b.isDepthTexture)St=S(b.format===ms,b.type),ne&&(qt?e.texStorage2D(n.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,St,nt.width,nt.height,0,mt,Ot,null));else if(b.isDataTexture)if(zt.length>0){qt&&ne&&e.texStorage2D(n.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let et=0,_t=zt.length;et<_t;et++)gt=zt[et],qt?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ot,gt.data):e.texImage2D(n.TEXTURE_2D,et,St,gt.width,gt.height,0,mt,Ot,gt.data);b.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(n.TEXTURE_2D,xt,St,nt.width,nt.height),z&&tt(b,nt,mt,Ot)):e.texImage2D(n.TEXTURE_2D,0,St,nt.width,nt.height,0,mt,Ot,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,St,zt[0].width,zt[0].height,nt.depth);for(let et=0,_t=zt.length;et<_t;et++)if(gt=zt[et],b.format!==Hn)if(mt!==null)if(qt){if(z)if(b.layerUpdates.size>0){let At=du(gt.width,gt.height,b.format,b.type);for(let st of b.layerUpdates){let kt=gt.data.subarray(st*At/gt.data.BYTES_PER_ELEMENT,(st+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,st,gt.width,gt.height,1,mt,kt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,St,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,nt.depth,mt,Ot,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,St,gt.width,gt.height,nt.depth,0,mt,Ot,gt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qt&&ne&&e.texStorage2D(n.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let et=0,_t=zt.length;et<_t;et++)gt=zt[et],b.format!==Hn?mt!==null?qt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,St,gt.width,gt.height,0,gt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ot,gt.data):e.texImage2D(n.TEXTURE_2D,et,St,gt.width,gt.height,0,mt,Ot,gt.data)}else if(b.isDataArrayTexture)if(qt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,St,nt.width,nt.height,nt.depth),z)if(b.layerUpdates.size>0){let et=du(nt.width,nt.height,b.format,b.type);for(let _t of b.layerUpdates){let At=nt.data.subarray(_t*et/nt.data.BYTES_PER_ELEMENT,(_t+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,nt.width,nt.height,1,mt,Ot,At)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ot,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,mt,Ot,nt.data);else if(b.isData3DTexture)qt?(ne&&e.texStorage3D(n.TEXTURE_3D,xt,St,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ot,nt.data)):e.texImage3D(n.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,mt,Ot,nt.data);else if(b.isFramebufferTexture){if(ne)if(qt)e.texStorage2D(n.TEXTURE_2D,xt,St,nt.width,nt.height);else{let et=nt.width,_t=nt.height;for(let At=0;At<xt;At++)e.texImage2D(n.TEXTURE_2D,At,St,et,_t,0,mt,Ot,null),et>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),h.add(b),et.onpaint=_t=>{let At=_t.changedElements;for(let st of h)At.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{let At=n.RGBA,st=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,st,kt,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&ne){let et=re(zt[0]);e.texStorage2D(n.TEXTURE_2D,xt,St,et.width,et.height)}for(let et=0,_t=zt.length;et<_t;et++)gt=zt[et],qt?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,mt,Ot,gt):e.texImage2D(n.TEXTURE_2D,et,St,mt,Ot,gt);b.generateMipmaps=!1}else if(qt){if(ne){let et=re(nt);e.texStorage2D(n.TEXTURE_2D,xt,St,et.width,et.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ot,nt)}else e.texImage2D(n.TEXTURE_2D,0,St,mt,Ot,nt);x(b)&&v(q),ut.__version=ht.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ht(P,b,k){if(b.image.length!==6)return;let q=Ft(P,b),K=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+k);let ht=i.get(K);if(K.version!==ht.__version||q===!0){e.activeTexture(n.TEXTURE0+k);let ut=le.getPrimaries(le.workingColorSpace),Q=b.colorSpace===Gi?null:le.getPrimaries(b.colorSpace),nt=b.colorSpace===Gi||ut===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,St=[];for(let st=0;st<6;st++)!mt&&!Ot?St[st]=p(b.image[st],!0,s.maxCubemapSize):St[st]=Ot?b.image[st].image:b.image[st],St[st]=xe(b,St[st]);let gt=St[0],zt=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),ne=_(b.internalFormat,zt,qt,b.normalized,b.colorSpace),z=b.isVideoTexture!==!0,xt=ht.__version===void 0||q===!0,et=K.dataReady,_t=E(b,gt);Zt(n.TEXTURE_CUBE_MAP,b);let At;if(mt){z&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,gt.width,gt.height);for(let st=0;st<6;st++){At=St[st].mipmaps;for(let kt=0;kt<At.length;kt++){let Dt=At[kt];b.format!==Hn?zt!==null?z?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Dt.width,Dt.height,zt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,ne,Dt.width,Dt.height,0,Dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Dt.width,Dt.height,zt,qt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,ne,Dt.width,Dt.height,0,zt,qt,Dt.data)}}}else{if(At=b.mipmaps,z&&xt){At.length>0&&_t++;let st=re(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,st.width,st.height)}for(let st=0;st<6;st++)if(Ot){z?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St[st].width,St[st].height,zt,qt,St[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,St[st].width,St[st].height,0,zt,qt,St[st].data);for(let kt=0;kt<At.length;kt++){let Ce=At[kt].image[st].image;z?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,Ce.width,Ce.height,zt,qt,Ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,ne,Ce.width,Ce.height,0,zt,qt,Ce.data)}}else{z?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,zt,qt,St[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ne,zt,qt,St[st]);for(let kt=0;kt<At.length;kt++){let Dt=At[kt];z?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,zt,qt,Dt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,ne,zt,qt,Dt.image[st])}}}x(b)&&v(n.TEXTURE_CUBE_MAP),ht.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Mt(P,b,k,q,K,ht){let ut=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),nt=_(k.internalFormat,ut,Q,k.normalized,k.colorSpace),mt=i.get(b),Ot=i.get(k);if(Ot.__renderTarget=b,!mt.__hasExternalTextures){let St=Math.max(1,b.width>>ht),gt=Math.max(1,b.height>>ht);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,ht,nt,St,gt,b.depth,0,ut,Q,null):e.texImage2D(K,ht,nt,St,gt,0,ut,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),jt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,Ot.__webglTexture,0,$t(b)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,Ot.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(P,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let q=b.depthTexture,K=q&&q.isDepthTexture?q.type:null,ht=S(b.stencilBuffer,K),ut=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(b),ht,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(b),ht,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,P)}else{let q=b.textures;for(let K=0;K<q.length;K++){let ht=q[K],ut=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),nt=_(ht.internalFormat,ut,Q,ht.normalized,ht.colorSpace);jt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(b),nt,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(b),nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,nt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(P,b,k){let q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,b.depthTexture);let mt=r.convert(b.depthTexture.format),Ot=r.convert(b.depthTexture.type),St;b.depthTexture.format===Si?St=n.DEPTH_COMPONENT24:b.depthTexture.format===ms&&(St=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,St,b.width,b.height,0,mt,Ot,null)}}else j(b.depthTexture,0);let ht=K.__webglTexture,ut=$t(b),Q=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,nt=b.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Si)jt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Q,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,nt,Q,ht,0);else if(b.depthTexture.format===ms)jt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Q,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,nt,Q,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let b=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)de(b.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?de(b.__webglFramebuffer[0],P,0):de(b.__webglFramebuffer,P,0)}else if(k){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=n.createRenderbuffer(),Nt(b.__webglDepthbuffer[q],P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ht)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Nt(b.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,b,k){let q=i.get(P);b!==void 0&&Mt(q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&it(P)}function ot(P){let b=P.texture,k=i.get(P),q=i.get(b);P.addEventListener("dispose",m);let K=P.textures,ht=P.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,a.memory.textures++),ht){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let nt=0;nt<b.mipmaps.length;nt++)k.__webglFramebuffer[Q][nt]=n.createFramebuffer()}else k.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)k.__webglFramebuffer[Q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ut)for(let Q=0,nt=K.length;Q<nt;Q++){let mt=i.get(K[Q]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&jt(P)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let nt=K[Q];k.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let mt=r.convert(nt.format,nt.colorSpace),Ot=r.convert(nt.type),St=_(nt.internalFormat,mt,Ot,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),gt=$t(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,St,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)Mt(k.__webglFramebuffer[Q][nt],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else Mt(k.__webglFramebuffer[Q],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(b)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Q=0,nt=K.length;Q<nt;Q++){let mt=K[Q],Ot=i.get(mt),St=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,Ot.__webglTexture),Zt(St,mt),Mt(k.__webglFramebuffer,P,mt,n.COLOR_ATTACHMENT0+Q,St,0),x(mt)&&v(St)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),Zt(Q,b),b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)Mt(k.__webglFramebuffer[nt],P,b,n.COLOR_ATTACHMENT0,Q,nt);else Mt(k.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,Q,0);x(b)&&v(Q),e.unbindTexture()}P.depthBuffer&&it(P)}function ct(P){let b=P.textures;for(let k=0,q=b.length;k<q;k++){let K=b[k];if(x(K)){let ht=M(P),ut=i.get(K).__webglTexture;e.bindTexture(ht,ut),v(ht),e.unbindTexture()}}}let dt=[],Xt=[];function Gt(P){if(P.samples>0){if(jt(P)===!1){let b=P.textures,k=P.width,q=P.height,K=n.COLOR_BUFFER_BIT,ht=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(P),Q=b.length>1;if(Q)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Ot=i.get(b[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,K,n.NEAREST),l===!0&&(dt.length=0,Xt.length=0,dt.push(n.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Xt.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Ot=i.get(b[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function $t(P){return Math.min(s.maxSamples,P.samples)}function jt(P){let b=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(P){let b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function xe(P,b){let k=P.colorSpace,q=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==fa&&k!==Gi&&(le.getTransfer(k)===ve?(q!==Hn||K!==In)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",k)),b}function re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iv(n,t){function e(i,s=Gi){let r,a=le.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===jh)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===nu)return n.ALPHA;if(i===iu)return n.RGB;if(i===Hn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===su)return n.RED;if(i===Gl)return n.RED_INTEGER;if(i===gs)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===Ja||i===Ka||i===Qa||i===ja)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Kl||i===Ql||i===jl||i===to||i===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zl||i===Jl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ql)return r.COMPRESSED_R11_EAC;if(i===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===to)return r.COMPRESSED_RG11_EAC;if(i===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===yc||i===eo||i===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ta(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new zn({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends bi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Au,x={},v=e.getContextAttributes(),M=null,_=null,S=[],E=[],R=new at,m=null,T=null,A=new ln;A.viewport=new Se;let C=new ln;C.viewport=new Se;let D=[A,C],N=new Nl,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new vr,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new vr,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new vr,S[Y]=tt),tt.getHandSpace()};function H(Y){let tt=E.indexOf(Y.inputSource);if(tt===-1)return;let ft=S[tt];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||a),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<S.length;Y++){let tt=E[Y];tt!==null&&(E[Y]=null,S[Y].disconnect(tt))}L=null,B=null,p.reset();for(let Y in x)delete x[Y];if(t.setRenderTarget(M),d=null,f=null,h=null,s=null,_=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(m),t.setSize(R.width,R.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),m=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Ht=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=v.stencil?ms:Si,Ht=v.stencil?Nr:ui);let Nt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Rn(f.textureWidth,f.textureHeight,{format:Hn,type:In,depthTexture:new os(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ft={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Y){for(let tt=0;tt<Y.removed.length;tt++){let ft=Y.removed[tt],Ht=E.indexOf(ft);Ht>=0&&(E[Ht]=null,S[Ht].disconnect(ft))}for(let tt=0;tt<Y.added.length;tt++){let ft=Y.added[tt],Ht=E.indexOf(ft);if(Ht===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=E.length){E.push(ft),Ht=Nt;break}else if(E[Nt]===null){E[Nt]=ft,Ht=Nt;break}if(Ht===-1)break}let Mt=S[Ht];Mt&&Mt.connect(ft)}}let X=new U,J=new U;function Z(Y,tt,ft){X.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(ft.matrixWorld);let Ht=X.distanceTo(J),Mt=tt.projectionMatrix.elements,Nt=ft.projectionMatrix.elements,de=Mt[14]/(Mt[10]-1),it=Mt[14]/(Mt[10]+1),rt=(Mt[9]+1)/Mt[5],ot=(Mt[9]-1)/Mt[5],ct=(Mt[8]-1)/Mt[0],dt=(Nt[8]+1)/Nt[0],Xt=de*ct,Gt=de*dt,$t=Ht/(-ct+dt),jt=$t*-ct;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(jt),Y.translateZ($t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Mt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=de+$t,xe=it+$t,re=Xt-jt,P=Gt+(Ht-jt),b=rt*it/xe*F,k=ot*it/xe*F;Y.projectionMatrix.makePerspective(re,P,b,k,F,xe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function vt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,ft=Y.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),N.near=C.near=A.near=tt,N.far=C.far=A.far=ft,(L!==N.near||B!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,B=N.far),N.layers.mask=Y.layers.mask|6,A.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Ht=Y.parent,Mt=N.cameras;vt(N,Ht);for(let Nt=0;Nt<Mt.length;Nt++)vt(Mt[Nt],Ht);Mt.length===2?Z(N,A,C):N.projectionMatrix.copy(A.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),lt(Y,N,Ht)};function lt(Y,tt,ft){ft===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Y){return x[Y]};let Qt=null;function Zt(Y,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){let ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ht=!1;ft.length!==N.cameras.length&&(N.cameras.length=0,Ht=!0);for(let it=0;it<ft.length;it++){let rt=ft[it],ot=null;if(d!==null)ot=d.getViewport(rt);else{let dt=h.getViewSubImage(f,rt);ot=dt.viewport,it===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let ct=D[it];ct===void 0&&(ct=new ln,ct.layers.enable(it),ct.viewport=new Se,D[it]=ct),ct.matrix.fromArray(rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(N.matrix.copy(ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ht===!0&&N.cameras.push(ct)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let it=h.getDepthInformation(ft[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(Mt&&Mt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let it=0;it<ft.length;it++){let rt=ft[it].camera;if(rt){let ot=x[rt];ot||(ot=new Ta,x[rt]=ot);let ct=h.getCameraImage(rt);ot.sourceTexture=ct}}}}for(let ft=0;ft<S.length;ft++){let Ht=E[ft],Mt=S[ft];Ht!==null&&Mt!==void 0&&Mt.update(Ht,tt,c||a)}Qt&&Qt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Ft=new bp;Ft.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}},av=new he,Cp=new Jt;Cp.set(-1,0,0,0,1,0,0,0,1);function ov(n,t){function e(p,x){p.matrixAutoUpdate===!0&&p.updateMatrix(),x.value.copy(p.matrix)}function i(p,x){x.color.getRGB(p.fogColor.value,hu(n)),x.isFog?(p.fogNear.value=x.near,p.fogFar.value=x.far):x.isFogExp2&&(p.fogDensity.value=x.density)}function s(p,x,v,M,_){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(p,x):x.isMeshLambertMaterial?(r(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(p,x),h(p,x)):x.isMeshPhongMaterial?(r(p,x),u(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(p,x),f(p,x),x.isMeshPhysicalMaterial&&d(p,x,_)):x.isMeshMatcapMaterial?(r(p,x),g(p,x)):x.isMeshDepthMaterial?r(p,x):x.isMeshDistanceMaterial?(r(p,x),y(p,x)):x.isMeshNormalMaterial?r(p,x):x.isLineBasicMaterial?(a(p,x),x.isLineDashedMaterial&&o(p,x)):x.isPointsMaterial?l(p,x,v,M):x.isSpriteMaterial?c(p,x):x.isShadowMaterial?(p.color.value.copy(x.color),p.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(p,x){p.opacity.value=x.opacity,x.color&&p.diffuse.value.copy(x.color),x.emissive&&p.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.bumpMap&&(p.bumpMap.value=x.bumpMap,e(x.bumpMap,p.bumpMapTransform),p.bumpScale.value=x.bumpScale,x.side===Tn&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,e(x.normalMap,p.normalMapTransform),p.normalScale.value.copy(x.normalScale),x.side===Tn&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,e(x.displacementMap,p.displacementMapTransform),p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,p.emissiveMapTransform)),x.specularMap&&(p.specularMap.value=x.specularMap,e(x.specularMap,p.specularMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let v=t.get(x),M=v.envMap,_=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cp),p.reflectivity.value=x.reflectivity,p.ior.value=x.ior,p.refractionRatio.value=x.refractionRatio),x.lightMap&&(p.lightMap.value=x.lightMap,p.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,p.lightMapTransform)),x.aoMap&&(p.aoMap.value=x.aoMap,p.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,p.aoMapTransform))}function a(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform))}function o(p,x){p.dashSize.value=x.dashSize,p.totalSize.value=x.dashSize+x.gapSize,p.scale.value=x.scale}function l(p,x,v,M){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.size.value=x.size*v,p.scale.value=M*.5,x.map&&(p.map.value=x.map,e(x.map,p.uvTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function c(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.rotation.value=x.rotation,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function u(p,x){p.specular.value.copy(x.specular),p.shininess.value=Math.max(x.shininess,1e-4)}function h(p,x){x.gradientMap&&(p.gradientMap.value=x.gradientMap)}function f(p,x){p.metalness.value=x.metalness,x.metalnessMap&&(p.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,p.metalnessMapTransform)),p.roughness.value=x.roughness,x.roughnessMap&&(p.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,p.roughnessMapTransform)),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)}function d(p,x,v){p.ior.value=x.ior,x.sheen>0&&(p.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),p.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(p.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,p.sheenColorMapTransform)),x.sheenRoughnessMap&&(p.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,p.sheenRoughnessMapTransform))),x.clearcoat>0&&(p.clearcoat.value=x.clearcoat,p.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(p.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,p.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(p.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Tn&&p.clearcoatNormalScale.value.negate())),x.dispersion>0&&(p.dispersion.value=x.dispersion),x.retroreflectivity>0&&(p.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(p.iridescence.value=x.iridescence,p.iridescenceIOR.value=x.iridescenceIOR,p.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(p.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,p.iridescenceMapTransform)),x.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),x.transmission>0&&(p.transmission.value=x.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(p.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,p.transmissionMapTransform)),p.thickness.value=x.thickness,x.thicknessMap&&(p.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=x.attenuationDistance,p.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(p.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(p.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=x.specularIntensity,p.specularColor.value.copy(x.specularColor),x.specularColorMap&&(p.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,p.specularColorMapTransform)),x.specularIntensityMap&&(p.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,x){x.matcap&&(p.matcap.value=x.matcap)}function y(p,x){let v=t.get(x).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let E=S.program;i.uniformBlockBinding(_,E)}function c(_,S){let E=s[_.id];E===void 0&&(p(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",v));let R=S.program;i.updateUBOMapping(_,R);let m=t.render.frame;r[_.id]!==m&&(f(_),r[_.id]=m)}function u(_){let S=h();_.__bindingPointIndex=S;let E=n.createBuffer(),R=_.__size,m=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,m),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let S=s[_.id],E=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let m=0,T=E.length;m<T;m++){let A=E[m];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)d(A[C],m,C,R);else d(A,m,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,S,E,R){if(y(_,S,E,R)===!0){let m=_.__offset,T=_.value;if(Array.isArray(T)){let A=0;for(let C=0;C<T.length;C++){let D=T[C],N=x(D);g(D,_.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,m,_.__data)}}function g(_,S,E){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,E)}function y(_,S,E,R){let m=_.value,T=S+"_"+E;if(R[T]===void 0)return typeof m=="number"||typeof m=="boolean"?R[T]=m:ArrayBuffer.isView(m)?R[T]=m.slice():R[T]=m.clone(),!0;{let A=R[T];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return R[T]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function p(_){let S=_.uniforms,E=0,R=16;for(let T=0,A=S.length;T<A;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,N=C.length;D<N;D++){let L=C[D],B=Array.isArray(L.value)?L.value:[L.value];for(let H=0,G=B.length;H<G;H++){let j=B[H],X=x(j),J=E%R,Z=J%X.boundary,vt=J+Z;E+=Z,vt!==0&&R-vt<X.storage&&(E+=R-vt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=X.storage}}}let m=E%R;return m>0&&(E+=R-m),_.__size=E,_.__cache={},this}function x(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){let S=_.target;S.removeEventListener("dispose",v);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function hv(){return Ai===null&&(Ai=new Sa(cv,16,16,gs,fi),Ai.name="DFG_LUT",Ai.minFilter=cn,Ai.magFilter=cn,Ai.wrapS=yi,Ai.wrapT=yi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Ac=class{constructor(t={}){let{canvas:e=Vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=d,p=new Set([Wl,Vl,Gl]),x=new Set([In,ui,Dr,Nr,kl,Hl]),v=new Uint32Array(4),M=new Int32Array(4),_=new U,S=null,E=null,R=[],m=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,D=null,N=null,L=null,B=null;this._outputColorSpace=je;let H=0,G=0,j=null,X=-1,J=null,Z=new Se,vt=new Se,lt=null,Qt=new Wt(0),Zt=0,Ft=e.width,Y=e.height,tt=1,ft=null,Ht=null,Mt=new Se(0,0,Ft,Y),Nt=new Se(0,0,Ft,Y),de=!1,it=new Er,rt=!1,ot=!1,ct=new he,dt=new U,Xt=new Se,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function jt(){return j===null?tt:1}let F=i;function xe(w,O){return e.getContext(w,O)}let re,P,b,k,q,K,ht,ut,Q,nt,mt,Ot,St,gt,zt,qt,ne,z,xt,et,_t,At,st;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ei,!1),F===null){let O="webgl2";if(F=xe(O,w),F===null)throw xe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(w){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),Yt("WebGLRenderer: "+w.message),w}function kt(){re=new x_(F),re.init(),_t=new iv(F,re),P=new o_(F,re,t,_t),b=new ev(F,re),P.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),N=F.createFramebuffer(),L=F.createFramebuffer(),B=F.createFramebuffer(),k=new v_(F),q=new Hy,K=new nv(F,re,b,q,P,_t,k),ht=new g_(A),ut=new Sg(F),At=new r_(F,ut),Q=new __(F,ut,k,At),nt=new S_(F,Q,ut,At,k),z=new M_(F,P,K),zt=new l_(q),mt=new ky(A,ht,re,P,At,zt),Ot=new ov(A,q),St=new Vy,gt=new Zy(re),ne=new s_(A,ht,b,nt,g,l),qt=new tv(A,nt,P),st=new lv(F,k,P,b),xt=new a_(F,re,k),et=new y_(F,re,k),k.programs=mt.programs,A.capabilities=P,A.extensions=re,A.properties=q,A.renderLists=St,A.shadowMap=qt,A.state=b,A.info=k}y!==In&&(T=new E_(y,e.width,e.height,o,s,r));let Dt=new Ru(A,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(Ft,Y,!1))},this.getSize=function(w){return w.set(Ft,Y)},this.setSize=function(w,O,$=!0){if(Dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ft=w,Y=O,e.width=Math.floor(w*tt),e.height=Math.floor(O*tt),$===!0&&(e.style.width=w+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Ft*tt,Y*tt).floor()},this.setDrawingBufferSize=function(w,O,$){Ft=w,Y=O,tt=$,e.width=Math.floor(w*$),e.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(y===In){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,O,$,V){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,$,V),b.viewport(Z.copy(Mt).multiplyScalar(tt).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,O,$,V){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,O,$,V),b.scissor(vt.copy(Nt).multiplyScalar(tt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){b.setScissorTest(de=w)},this.setOpaqueSort=function(w){ft=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let V=0;if(w){let W=!1;if(j!==null){let wt=j.texture.format;W=p.has(wt)}if(W){let wt=j.texture.type,Ct=x.has(wt),Et=ne.getClearColor(),Pt=ne.getClearAlpha(),Ut=Et.r,ie=Et.g,ae=Et.b;Ct?(v[0]=Ut,v[1]=ie,v[2]=ae,v[3]=Pt,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ut,M[1]=ie,M[2]=ae,M[3]=Pt,F.clearBufferiv(F.COLOR,0,M))}else V|=F.COLOR_BUFFER_BIT}O&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),ne.dispose(),St.dispose(),gt.dispose(),q.dispose(),ht.dispose(),nt.dispose(),At.dispose(),st.dispose(),mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",_f),Dt.removeEventListener("sessionend",yf),bs.stop()};function Ce(w){w.preventDefault(),ma("WebGLRenderer: Context Lost."),C=!0}function _e(){ma("WebGLRenderer: Context Restored."),C=!1;let w=k.autoReset,O=qt.enabled,$=qt.autoUpdate,V=qt.needsUpdate,W=qt.type;kt(),k.autoReset=w,qt.enabled=O,qt.autoUpdate=$,qt.needsUpdate=V,qt.type=W}function ei(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mi(w){let O=w.target;O.removeEventListener("dispose",mi),j0(O)}function j0(w){tm(w),q.remove(w)}function tm(w){let O=q.get(w).programs;O!==void 0&&(O.forEach(function($){mt.releaseProgram($)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,V,W,wt){O===null&&(O=Gt);let Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,Et=im(w,O,$,V,W);b.setMaterial(V,Ct);let Pt=$.index,Ut=1;if(V.wireframe===!0){if(Pt=Q.getWireframeAttribute($),Pt===void 0)return;Ut=2}let ie=$.drawRange,ae=$.attributes.position,Lt=ie.start*Ut,ye=(ie.start+ie.count)*Ut;wt!==null&&(Lt=Math.max(Lt,wt.start*Ut),ye=Math.min(ye,(wt.start+wt.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),ye=Math.min(ye,Pt.count)):ae!=null&&(Lt=Math.max(Lt,0),ye=Math.min(ye,ae.count));let Xe=ye-Lt;if(Xe<0||Xe===1/0)return;At.setup(W,V,Et,$,Pt);let Pe,Te=xt;if(Pt!==null&&(Pe=ut.get(Pt),Te=et,Te.setIndex(Pe)),W.isMesh)V.wireframe===!0?(b.setLineWidth(V.wireframeLinewidth*jt()),Te.setMode(F.LINES)):Te.setMode(F.TRIANGLES);else if(W.isLine){let gn=V.linewidth;gn===void 0&&(gn=1),b.setLineWidth(gn*jt()),W.isLineSegments?Te.setMode(F.LINES):W.isLineLoop?Te.setMode(F.LINE_LOOP):Te.setMode(F.LINE_STRIP)}else W.isPoints?Te.setMode(F.POINTS):W.isSprite&&Te.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let gn=W._multiDrawStarts,Rt=W._multiDrawCounts,Sn=W._multiDrawCount,pe=Pt?ut.get(Pt).bytesPerElement:1,Yn=q.get(V).currentProgram.getUniforms();for(let gi=0;gi<Sn;gi++)Yn.setValue(F,"_gl_DrawID",gi),Te.render(gn[gi]/pe,Rt[gi])}else if(W.isInstancedMesh)Te.renderInstances(Lt,Xe,W.count);else if($.isInstancedBufferGeometry){let gn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rt=Math.min($.instanceCount,gn);Te.renderInstances(Lt,Xe,Rt)}else Te.render(Lt,Xe)};function xf(w,O,$,V){D!==null&&w.isNodeMaterial&&D.setObject(V,w),rt===!0&&zt.setState(w,$,!1),w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Eo(w,O,V),w.side=fs,w.needsUpdate=!0,Eo(w,O,V),w.side=en):Eo(w,O,V)}this.compile=function(w,O,$=null){$===null&&($=w),D!==null&&D.renderStart(w,O,$),E=gt.get($),E.init(O),m.push(E),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),w!==$&&w.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,rt=zt.init(this.clippingPlanes,ot),rt===!0&&zt.setGlobalState(this.clippingPlanes,O),D!==null&&qt.render(E.state.shadowsArray,$,O);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let wt=W.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let Et=wt[Ct];xf(Et,$,O,W),V.add(Et)}else xf(wt,$,O,W),V.add(wt)}),E=m.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(w,O,$=null){let V=this.compile(w,O,$);return new Promise(W=>{function wt(){if(V.forEach(function(Ct){let Pt=q.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Ct)}),V.size===0){W(w);return}setTimeout(wt,10)}re.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Zc=null;function em(w){Zc&&Zc(w)}function _f(){bs.stop()}function yf(){bs.start()}let bs=new bp;bs.setAnimationLoop(em),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(w){Zc=w,Dt.setAnimationLoop(w),w===null?bs.stop():bs.start()},Dt.addEventListener("sessionstart",_f),Dt.addEventListener("sessionend",yf),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(w,O);let $=Dt.enabled===!0&&Dt.isPresenting===!0,V=T!==null&&(j===null||$)&&T.begin(A,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(O),O=Dt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,O,j),E=gt.get(w,m.length),E.init(O),E.state.textureUnits=K.getTextureUnits(),m.push(E),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(ct,ai,O.reversedDepth),ot=this.localClippingEnabled,rt=zt.init(this.clippingPlanes,ot),S=St.get(w,R.length),S.init(),R.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&Jc(Ct,O,-1/0,A.sortObjects)}Jc(w,O,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(ft,Ht),$t=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,$t&&ne.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&zt.beginShadows();let W=E.state.shadowsArray;if(qt.render(W,w,O),rt===!0&&zt.endShadows(),(V&&T.hasRenderPass())===!1){let Ct=S.opaque,Et=S.transmissive;if(E.setupLights(),O.isArrayCamera){let Pt=O.cameras;if(Et.length>0)for(let Ut=0,ie=Pt.length;Ut<ie;Ut++){let ae=Pt[Ut];Mf(Ct,Et,w,ae)}$t&&ne.render(w);for(let Ut=0,ie=Pt.length;Ut<ie;Ut++){let ae=Pt[Ut];vf(S,w,ae,ae.viewport)}}else Et.length>0&&Mf(Ct,Et,w,O),$t&&ne.render(w),vf(S,w,O)}j!==null&&G===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),V&&T.end(A),w.isScene===!0&&w.onAfterRender(A,w,O),At.resetDefaultState(),X=-1,J=null,m.pop(),m.length>0?(E=m[m.length-1],K.setTextureUnits(E.state.textureUnits),rt===!0&&zt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,D!==null&&D.renderEnd()};function Jc(w,O,$,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(it)){V&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);let Ct=nt.update(w),Et=w.material;Et.visible&&S.push(w,Ct,Et,$,Xt.z,null,O)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(it))){let Ct=nt.update(w),Et=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Xt.copy(Ct.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Et)){let Pt=Ct.groups;for(let Ut=0,ie=Pt.length;Ut<ie;Ut++){let ae=Pt[Ut],Lt=Et[ae.materialIndex];Lt&&Lt.visible&&S.push(w,Ct,Lt,$,Xt.z,ae,O)}}else Et.visible&&S.push(w,Ct,Et,$,Xt.z,null,O)}}let wt=w.children;for(let Ct=0,Et=wt.length;Ct<Et;Ct++)Jc(wt[Ct],O,$,V)}function vf(w,O,$,V){let{opaque:W,transmissive:wt,transparent:Ct}=w;E.setupLightsView($),rt===!0&&zt.setGlobalState(A.clippingPlanes,$),V&&b.viewport(Z.copy(V)),W.length>0&&bo(W,O,$),wt.length>0&&bo(wt,O,$),Ct.length>0&&bo(Ct,O,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Mf(w,O,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Rn(1,1,{generateMipmaps:!0,type:Lt?fi:In,minFilter:ps,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let wt=E.state.transmissionRenderTarget[V.id],Ct=V.viewport||Z;wt.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let Et=A.getRenderTarget(),Pt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(Qt),Zt=A.getClearAlpha(),Zt<1&&A.setClearColor(16777215,.5),A.clear(),$t&&ne.render($);let ie=A.toneMapping;A.toneMapping=hi;let ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),rt===!0&&zt.setGlobalState(A.clippingPlanes,V),bo(w,$,V),K.updateMultisampleRenderTarget(wt),K.updateRenderTargetMipmap(wt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ye=0,Xe=O.length;ye<Xe;ye++){let Pe=O[ye],{object:Te,geometry:gn,material:Rt,group:Sn}=Pe;if(Rt.side===en&&Te.layers.test(V.layers)){let pe=Rt.side;Rt.side=Tn,Rt.needsUpdate=!0,Sf(Te,$,V,gn,Rt,Sn),Rt.side=pe,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(K.updateMultisampleRenderTarget(wt),K.updateRenderTargetMipmap(wt))}A.setRenderTarget(Et,Pt,Ut),A.setClearColor(Qt,Zt),ae!==void 0&&(V.viewport=ae),A.toneMapping=ie}function bo(w,O,$){let V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,wt=w.length;W<wt;W++){let Ct=w[W],{object:Et,geometry:Pt,group:Ut}=Ct,ie=Ct.material;ie.allowOverride===!0&&V!==null&&(ie=V),Et.layers.test($.layers)&&Sf(Et,O,$,Pt,ie,Ut)}}function Sf(w,O,$,V,W,wt){D!==null&&W.isNodeMaterial&&D.setObject(w,W),w.onBeforeRender(A,O,$,V,W,wt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(A,O,$,V,w,wt),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=Tn,W.needsUpdate=!0,A.renderBufferDirect($,O,V,W,w,wt),W.side=fs,W.needsUpdate=!0,A.renderBufferDirect($,O,V,W,w,wt),W.side=en):A.renderBufferDirect($,O,V,W,w,wt),w.onAfterRender(A,O,$,V,W,wt)}function Eo(w,O,$){O.isScene!==!0&&(O=Gt);let V=q.get(w),W=E.state.lights,wt=E.state.shadowsArray,Ct=W.state.version,Et=mt.getParameters(w,W.state,wt,O,$,E.state.lightProbeGridArray),Pt=mt.getProgramCacheKey(Et),Ut=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=ht.get(w.envMap||V.environment,ie),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",mi),Ut=new Map,V.programs=Ut);let ae=Ut.get(Pt);if(ae!==void 0){if(V.currentProgram===ae&&V.lightsStateVersion===Ct)return Ef(w,Et),ae}else Et.uniforms=mt.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,$,Et),w.onBeforeCompile(Et,A),ae=mt.acquireProgram(Et,Pt),Ut.set(Pt,ae),V.uniforms=Et.uniforms;let Lt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),Ef(w,Et),V.needsLights=rm(w),V.lightsStateVersion=Ct,V.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.sunLights.value=W.state.sun,Lt.sunLightShadows.value=W.state.sunShadow,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.sunShadowMatrix.value=W.state.sunShadowMatrix,Lt.sunShadowCascade.value=W.state.sunShadowCascade,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ae,V.uniformsList=null,ae}function bf(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Or.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ef(w,O){let $=q.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function nm(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let $=0,V=w.length;$<V;$++){let W=w[$];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function im(w,O,$,V,W){O.isScene!==!0&&(O=Gt),K.resetTextureUnits();let wt=O.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Et=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:le.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=ht.get(V.envMap||Ct,Pt),ie=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!$.morphAttributes.position,ye=!!$.morphAttributes.normal,Xe=!!$.morphAttributes.color,Pe=hi;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=A.toneMapping);let Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gn=Te!==void 0?Te.length:0,Rt=q.get(V),Sn=E.state.lights;if(rt===!0&&(ot===!0||w!==J)){let Ie=w===J&&V.id===X;zt.setState(V,w,Ie)}let pe=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Sn.state.version||Rt.outputColorSpace!==Et||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==Ut||V.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==zt.numPlanes||Rt.numIntersection!==zt.numIntersection)||Rt.vertexAlphas!==ie||Rt.vertexTangents!==ae||Rt.morphTargets!==Lt||Rt.morphNormals!==ye||Rt.morphColors!==Xe||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==gn||!!Rt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Rt.__version=V.version);let Yn=Rt.currentProgram;pe===!0&&(Yn=Eo(V,O,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Yn,Rt));let gi=!1,Qi=!1,Js=!1,be=Yn.getUniforms(),Oe=Rt.uniforms;if(b.useProgram(Yn.program)&&(gi=!0,Qi=!0,Js=!0),V.id!==X&&(X=V.id,Qi=!0),Rt.needsLights){let Ie=nm(E.state.lightProbeGridArray,W);Rt.lightProbeGrid!==Ie&&(Rt.lightProbeGrid=Ie,Qi=!0)}if(gi||J!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),be.setValue(F,"projectionMatrix",w.projectionMatrix),be.setValue(F,"viewMatrix",w.matrixWorldInverse);let ts=be.map.cameraPosition;ts!==void 0&&ts.setValue(F,dt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Qi=!0,Js=!0)}if(Rt.needsLights&&(Sn.state.sunShadowMap.length>0&&be.setValue(F,"sunShadowMap",Sn.state.sunShadowMap,K),Sn.state.directionalShadowMap.length>0&&be.setValue(F,"directionalShadowMap",Sn.state.directionalShadowMap,K),Sn.state.spotShadowMap.length>0&&be.setValue(F,"spotShadowMap",Sn.state.spotShadowMap,K),Sn.state.pointShadowMap.length>0&&be.setValue(F,"pointShadowMap",Sn.state.pointShadowMap,K)),W.isSkinnedMesh){be.setOptional(F,W,"bindMatrix"),be.setOptional(F,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),be.setValue(F,"boneTexture",Ie.boneTexture,K))}W.isBatchedMesh&&(be.setOptional(F,W,"batchingTexture"),be.setValue(F,"batchingTexture",W._matricesTexture,K),be.setOptional(F,W,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",W._indirectTexture,K),be.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",W._colorsTexture,K));let ji=$.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&z.update(W,$,Yn),(Qi||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,be.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Oe.envMapIntensity.value=O.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=hv()),Qi){if(be.setValue(F,"toneMappingExposure",A.toneMappingExposure),Rt.needsLights&&sm(Oe,Js),wt&&V.fog===!0&&Ot.refreshFogUniforms(Oe,wt),Ot.refreshMaterialUniforms(Oe,V,tt,Y,E.state.transmissionRenderTarget[w.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ie=Rt.lightProbeGrid;Oe.probesSH.value=Ie.texture,Oe.probesMin.value.copy(Ie.boundingBox.min),Oe.probesMax.value.copy(Ie.boundingBox.max),Oe.probesResolution.value.copy(Ie.resolution)}Or.upload(F,bf(Rt),Oe,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Or.upload(F,bf(Rt),Oe,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(F,"center",W.center),be.setValue(F,"modelViewMatrix",W.modelViewMatrix),be.setValue(F,"normalMatrix",W.normalMatrix),be.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ie=V.uniformsGroups;for(let ts=0,Ks=Ie.length;ts<Ks;ts++){let wf=Ie[ts];st.update(wf,Yn),st.bind(wf,Yn)}}return Yn}function sm(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,O,$){let V=q.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=O,q.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let $=q.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){j=w,H=O,G=$;let V=null,W=!1,wt=!1;if(w){let Et=q.get(w);if(Et.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Et.__webglFramebuffer),Z.copy(w.viewport),vt.copy(w.scissor),lt=w.scissorTest,b.viewport(Z),b.scissor(vt),b.setScissorTest(lt),X=-1;return}else if(Et.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Et.__hasExternalTextures)K.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ie=w.depthTexture;if(Et.__boundDepthTexture!==ie){if(ie!==null&&q.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(wt=!0);let Ut=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?V=Ut[O][$]:V=Ut[O],W=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?V=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[$]:V=Ut,Z.copy(w.viewport),vt.copy(w.scissor),lt=w.scissorTest}else Z.copy(Mt).multiplyScalar(tt).floor(),vt.copy(Nt).multiplyScalar(tt).floor(),lt=de;if($!==0&&(V=N),b.bindFramebuffer(F.FRAMEBUFFER,V)&&b.drawBuffers(w,V),b.viewport(Z),b.scissor(vt),b.setScissorTest(lt),W){let Et=q.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,$)}else if(wt){let Et=O;for(let Pt=0;Pt<w.textures.length;Pt++){let Ut=q.get(w.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,$,Et)}}else if(w!==null&&$!==0){let Et=q.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,$)}X=-1};function Tf(w){let O=q.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=P.textureFormatReadable(w.format),O.__typeReadable=P.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,$,V,W,wt,Ct,Et=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){b.bindFramebuffer(F.FRAMEBUFFER,Pt);try{let Ut=w.textures[Et],ie=Ut.format,ae=Ut.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let Lt=Tf(Ut);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&$>=0&&$<=w.height-W&&F.readPixels(O,$,V,W,_t.convert(ie),_t.convert(ae),wt)}finally{let Ut=j!==null?q.get(j).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,V,W,wt,Ct,Et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(O>=0&&O<=w.width-V&&$>=0&&$<=w.height-W){b.bindFramebuffer(F.FRAMEBUFFER,Pt);let Ut=w.textures[Et],ie=Ut.format,ae=Ut.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let Lt=Tf(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(O,$,V,W,_t.convert(ie),_t.convert(ae),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Xe=j!==null?q.get(j).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Xe);let Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Xd(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ye),F.deleteSync(Pe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){let V=Math.pow(2,-$),W=Math.floor(w.image.width*V),wt=Math.floor(w.image.height*V),Ct=O!==null?O.x:0,Et=O!==null?O.y:0;K.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ct,Et,W,wt),b.unbindTexture()},this.copyTextureToTexture=function(w,O,$=null,V=null,W=0,wt=0){let Ct,Et,Pt,Ut,ie,ae,Lt,ye,Xe,Pe=w.isCompressedTexture?w.mipmaps[wt]:w.image;if($!==null)Ct=$.max.x-$.min.x,Et=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,ie=$.min.y,ae=$.isBox3?$.min.z:0;else{let Oe=Math.pow(2,-W);Ct=Math.floor(Pe.width*Oe),Et=Math.floor(Pe.height*Oe),w.isDataArrayTexture?Pt=Pe.depth:w.isData3DTexture?Pt=Math.floor(Pe.depth*Oe):Pt=1,Ut=0,ie=0,ae=0}V!==null?(Lt=V.x,ye=V.y,Xe=V.z):(Lt=0,ye=0,Xe=0);let Te=_t.convert(O.format),gn=_t.convert(O.type),Rt;O.isData3DTexture?(K.setTexture3D(O,0),Rt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Rt=F.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Rt=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Sn=b.getParameter(F.UNPACK_ROW_LENGTH),pe=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Yn=b.getParameter(F.UNPACK_SKIP_PIXELS),gi=b.getParameter(F.UNPACK_SKIP_ROWS),Qi=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),b.pixelStorei(F.UNPACK_SKIP_ROWS,ie),b.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);let Js=w.isDataArrayTexture||w.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let Oe=q.get(w),ji=q.get(O),Ie=q.get(Oe.__renderTarget),ts=q.get(ji.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Ie.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Ks=0;Ks<Pt;Ks++)Js&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(w).__webglTexture,W,ae+Ks),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(O).__webglTexture,wt,Xe+Ks)),F.blitFramebuffer(Ut,ie,Ct,Et,Lt,ye,Ct,Et,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||q.has(w)){let Oe=q.get(w),ji=q.get(O);b.bindFramebuffer(F.READ_FRAMEBUFFER,L),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ie=0;Ie<Pt;Ie++)Js?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,W,ae+Ie):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,W),be?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ji.__webglTexture,wt,Xe+Ie):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ji.__webglTexture,wt),W!==0?F.blitFramebuffer(Ut,ie,Ct,Et,Lt,ye,Ct,Et,F.COLOR_BUFFER_BIT,F.NEAREST):be?F.copyTexSubImage3D(Rt,wt,Lt,ye,Xe+Ie,Ut,ie,Ct,Et):F.copyTexSubImage2D(Rt,wt,Lt,ye,Ut,ie,Ct,Et);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else be?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Rt,wt,Lt,ye,Xe,Ct,Et,Pt,Te,gn,Pe.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Rt,wt,Lt,ye,Xe,Ct,Et,Pt,Te,Pe.data):F.texSubImage3D(Rt,wt,Lt,ye,Xe,Ct,Et,Pt,Te,gn,Pe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,wt,Lt,ye,Ct,Et,Te,gn,Pe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,wt,Lt,ye,Pe.width,Pe.height,Te,Pe.data):F.texSubImage2D(F.TEXTURE_2D,wt,Lt,ye,Ct,Et,Te,gn,Pe);b.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Yn),b.pixelStorei(F.UNPACK_SKIP_ROWS,gi),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Qi),wt===0&&O.generateMipmaps&&F.generateMipmap(Rt),b.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){H=0,G=0,j=null,b.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};function Lp(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new me,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Pp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<a[u].length;++y)d.push(a[u][y][f]);let g=Pp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Pp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Me(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);o.setComponent(f+h,g,y)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function Dp(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(n.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,M=o.length;v<M;v++){let _=o[v],S=n.attributes[_];l[_]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let E=n.morphAttributes[_];E&&(c[_]||(c[_]=[]),E.forEach((R,m)=>{let T=new R.array.constructor(R.count*R.itemSize);c[_][m]=new R.constructor(T,R.itemSize,R.normalized)}))}let d=t*.5,g=Math.log10(1/t),y=Math.pow(10,g),p=d*y;for(let v=0;v<r;v++){let M=i?i.getX(v):v,_="";for(let S=0,E=o.length;S<E;S++){let R=o[S],m=n.getAttribute(R),T=m.itemSize;for(let A=0;A<T;A++)_+=`${Math.trunc(m[h[A]](M)*y+p)},`}if(_ in e)u.push(e[_]);else{for(let S=0,E=o.length;S<E;S++){let R=o[S],m=n.getAttribute(R),T=n.morphAttributes[R],A=m.itemSize,C=l[R],D=c[R];for(let N=0;N<A;N++){let L=h[N],B=f[N];if(C[B](a,m[L](M)),T)for(let H=0,G=T.length;H<G;H++)D[H][B](a,T[H][L](M))}}e[_]=a,u.push(a),a++}}let x=n.clone();for(let v in n.attributes){let M=l[v];if(x.setAttribute(v,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),v in c)for(let _=0;_<c[v].length;_++){let S=c[v][_];x.morphAttributes[v][_]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return x.setIndex(u),x}var Pc=class extends pt{constructor(t,e,i=!1,s=!1,r=1e4){let a=new me;super(a,e),this.isMarchingCubes=!0;let o=this,l=new Float32Array(36),c=new Float32Array(36),u=new Float32Array(36);this.enableUvs=i,this.enableColors=s,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let M=r*3;this.positionArray=new Float32Array(M*3);let _=new Me(this.positionArray,3);_.setUsage(Ur),a.setAttribute("position",_),this.normalArray=new Float32Array(M*3);let S=new Me(this.normalArray,3);if(S.setUsage(Ur),a.setAttribute("normal",S),this.enableUvs){this.uvArray=new Float32Array(M*2);let E=new Me(this.uvArray,2);E.setUsage(Ur),a.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(M*3);let E=new Me(this.colorArray,3);E.setUsage(Ur),a.setAttribute("color",E)}a.boundingSphere=new li(new U,1)};function h(v,M,_){return v+(M-v)*_}function f(v,M,_,S,E,R,m,T,A,C){let D=(_-m)/(T-m),N=o.normal_cache;l[M+0]=S+D*o.delta,l[M+1]=E,l[M+2]=R,c[M+0]=h(N[v+0],N[v+3],D),c[M+1]=h(N[v+1],N[v+4],D),c[M+2]=h(N[v+2],N[v+5],D),u[M+0]=h(o.palette[A*3+0],o.palette[C*3+0],D),u[M+1]=h(o.palette[A*3+1],o.palette[C*3+1],D),u[M+2]=h(o.palette[A*3+2],o.palette[C*3+2],D)}function d(v,M,_,S,E,R,m,T,A,C){let D=(_-m)/(T-m),N=o.normal_cache;l[M+0]=S,l[M+1]=E+D*o.delta,l[M+2]=R;let L=v+o.yd*3;c[M+0]=h(N[v+0],N[L+0],D),c[M+1]=h(N[v+1],N[L+1],D),c[M+2]=h(N[v+2],N[L+2],D),u[M+0]=h(o.palette[A*3+0],o.palette[C*3+0],D),u[M+1]=h(o.palette[A*3+1],o.palette[C*3+1],D),u[M+2]=h(o.palette[A*3+2],o.palette[C*3+2],D)}function g(v,M,_,S,E,R,m,T,A,C){let D=(_-m)/(T-m),N=o.normal_cache;l[M+0]=S,l[M+1]=E,l[M+2]=R+D*o.delta;let L=v+o.zd*3;c[M+0]=h(N[v+0],N[L+0],D),c[M+1]=h(N[v+1],N[L+1],D),c[M+2]=h(N[v+2],N[L+2],D),u[M+0]=h(o.palette[A*3+0],o.palette[C*3+0],D),u[M+1]=h(o.palette[A*3+1],o.palette[C*3+1],D),u[M+2]=h(o.palette[A*3+2],o.palette[C*3+2],D)}function y(v){let M=v*3;o.normal_cache[M]===0&&(o.normal_cache[M+0]=o.field[v-1]-o.field[v+1],o.normal_cache[M+1]=o.field[v-o.yd]-o.field[v+o.yd],o.normal_cache[M+2]=o.field[v-o.zd]-o.field[v+o.zd])}function p(v,M,_,S,E){let R=S+1,m=S+o.yd,T=S+o.zd,A=R+o.yd,C=R+o.zd,D=S+o.yd+o.zd,N=R+o.yd+o.zd,L=0,B=o.field[S],H=o.field[R],G=o.field[m],j=o.field[A],X=o.field[T],J=o.field[C],Z=o.field[D],vt=o.field[N];B<E&&(L|=1),H<E&&(L|=2),G<E&&(L|=8),j<E&&(L|=4),X<E&&(L|=16),J<E&&(L|=32),Z<E&&(L|=128),vt<E&&(L|=64);let lt=uv[L];if(lt===0)return 0;let Qt=o.delta,Zt=v+Qt,Ft=M+Qt,Y=_+Qt;lt&1&&(y(S),y(R),f(S*3,0,E,v,M,_,B,H,S,R)),lt&2&&(y(R),y(A),d(R*3,3,E,Zt,M,_,H,j,R,A)),lt&4&&(y(m),y(A),f(m*3,6,E,v,Ft,_,G,j,m,A)),lt&8&&(y(S),y(m),d(S*3,9,E,v,M,_,B,G,S,m)),lt&16&&(y(T),y(C),f(T*3,12,E,v,M,Y,X,J,T,C)),lt&32&&(y(C),y(N),d(C*3,15,E,Zt,M,Y,J,vt,C,N)),lt&64&&(y(D),y(N),f(D*3,18,E,v,Ft,Y,Z,vt,D,N)),lt&128&&(y(T),y(D),d(T*3,21,E,v,M,Y,X,Z,T,D)),lt&256&&(y(S),y(T),g(S*3,24,E,v,M,_,B,X,S,T)),lt&512&&(y(R),y(C),g(R*3,27,E,Zt,M,_,H,J,R,C)),lt&1024&&(y(A),y(N),g(A*3,30,E,Zt,Ft,_,j,vt,A,N)),lt&2048&&(y(m),y(D),g(m*3,33,E,v,Ft,_,G,Z,m,D)),L<<=4;let tt,ft,Ht,Mt=0,Nt=0;for(;Ic[L+Nt]!=-1;)tt=L+Nt,ft=tt+1,Ht=tt+2,x(l,c,u,3*Ic[tt],3*Ic[ft],3*Ic[Ht]),Nt+=3,Mt++;return Mt}function x(v,M,_,S,E,R){let m=o.count*3;if(o.positionArray[m+0]=v[S],o.positionArray[m+1]=v[S+1],o.positionArray[m+2]=v[S+2],o.positionArray[m+3]=v[E],o.positionArray[m+4]=v[E+1],o.positionArray[m+5]=v[E+2],o.positionArray[m+6]=v[R],o.positionArray[m+7]=v[R+1],o.positionArray[m+8]=v[R+2],o.material.flatShading===!0){let T=(M[S+0]+M[E+0]+M[R+0])/3,A=(M[S+1]+M[E+1]+M[R+1])/3,C=(M[S+2]+M[E+2]+M[R+2])/3;o.normalArray[m+0]=T,o.normalArray[m+1]=A,o.normalArray[m+2]=C,o.normalArray[m+3]=T,o.normalArray[m+4]=A,o.normalArray[m+5]=C,o.normalArray[m+6]=T,o.normalArray[m+7]=A,o.normalArray[m+8]=C}else o.normalArray[m+0]=M[S+0],o.normalArray[m+1]=M[S+1],o.normalArray[m+2]=M[S+2],o.normalArray[m+3]=M[E+0],o.normalArray[m+4]=M[E+1],o.normalArray[m+5]=M[E+2],o.normalArray[m+6]=M[R+0],o.normalArray[m+7]=M[R+1],o.normalArray[m+8]=M[R+2];if(o.enableUvs){let T=o.count*2;o.uvArray[T+0]=v[S+0],o.uvArray[T+1]=v[S+2],o.uvArray[T+2]=v[E+0],o.uvArray[T+3]=v[E+2],o.uvArray[T+4]=v[R+0],o.uvArray[T+5]=v[R+2]}o.enableColors&&(o.colorArray[m+0]=_[S+0],o.colorArray[m+1]=_[S+1],o.colorArray[m+2]=_[S+2],o.colorArray[m+3]=_[E+0],o.colorArray[m+4]=_[E+1],o.colorArray[m+5]=_[E+2],o.colorArray[m+6]=_[R+0],o.colorArray[m+7]=_[R+1],o.colorArray[m+8]=_[R+2]),o.count+=3}this.addBall=function(v,M,_,S,E,R){let m=Math.sign(S);S=Math.abs(S);let T=R!=null,A=new Wt(v,M,_);if(T)try{A=R instanceof Wt?R:Array.isArray(R)?new Wt(Math.min(Math.abs(R[0]),1),Math.min(Math.abs(R[1]),1),Math.min(Math.abs(R[2]),1)):new Wt(R)}catch{A=new Wt(v,M,_)}let C=this.size*Math.sqrt(S/E),D=_*this.size,N=M*this.size,L=v*this.size,B=Math.floor(D-C);B<1&&(B=1);let H=Math.floor(D+C);H>this.size-1&&(H=this.size-1);let G=Math.floor(N-C);G<1&&(G=1);let j=Math.floor(N+C);j>this.size-1&&(j=this.size-1);let X=Math.floor(L-C);X<1&&(X=1);let J=Math.floor(L+C);J>this.size-1&&(J=this.size-1);let Z,vt,lt,Qt,Zt,Ft,Y,tt,ft,Ht,Mt;for(lt=B;lt<H;lt++)for(Zt=this.size2*lt,tt=lt/this.size-_,ft=tt*tt,vt=G;vt<j;vt++)for(Qt=Zt+this.size*vt,Y=vt/this.size-M,Ht=Y*Y,Z=X;Z<J;Z++)if(Ft=Z/this.size-v,Mt=S/(1e-6+Ft*Ft+Ht+ft)-E,Mt>0){this.field[Qt+Z]+=Mt*m;let Nt=Math.sqrt((Z-L)*(Z-L)+(vt-N)*(vt-N)+(lt-D)*(lt-D))/C,de=1-Nt*Nt*Nt*(Nt*(Nt*6-15)+10);this.palette[(Qt+Z)*3+0]+=A.r*de,this.palette[(Qt+Z)*3+1]+=A.g*de,this.palette[(Qt+Z)*3+2]+=A.b*de}},this.addPlaneX=function(v,M){let _=this.size,S=this.yd,E=this.zd,R=this.field,m,T,A,C,D,N,L,B=_*Math.sqrt(v/M);for(B>_&&(B=_),m=0;m<B;m++)if(N=m/_,C=N*N,D=v/(1e-4+C)-M,D>0)for(T=0;T<_;T++)for(L=m+T*S,A=0;A<_;A++)R[E*A+L]+=D},this.addPlaneY=function(v,M){let _=this.size,S=this.yd,E=this.zd,R=this.field,m,T,A,C,D,N,L,B,H=_*Math.sqrt(v/M);for(H>_&&(H=_),T=0;T<H;T++)if(N=T/_,C=N*N,D=v/(1e-4+C)-M,D>0)for(L=T*S,m=0;m<_;m++)for(B=L+m,A=0;A<_;A++)R[E*A+B]+=D},this.addPlaneZ=function(v,M){let _=this.size,S=this.yd,E=this.zd,R=this.field,m,T,A,C,D,N,L,B,H=_*Math.sqrt(v/M);for(H>_&&(H=_),A=0;A<H;A++)if(N=A/_,C=N*N,D=v/(1e-4+C)-M,D>0)for(L=E*A,T=0;T<_;T++)for(B=L+T*S,m=0;m<_;m++)R[B+m]+=D},this.setCell=function(v,M,_,S){let E=this.size2*_+this.size*M+v;this.field[E]=S},this.getCell=function(v,M,_){let S=this.size2*_+this.size*M+v;return this.field[S]},this.blur=function(v=1){let M=this.field,_=M.slice(),S=this.size,E=this.size2;for(let R=0;R<S;R++)for(let m=0;m<S;m++)for(let T=0;T<S;T++){let A=E*T+S*m+R,C=_[A],D=1;for(let N=-1;N<=1;N+=2){let L=N+R;if(!(L<0||L>=S))for(let B=-1;B<=1;B+=2){let H=B+m;if(!(H<0||H>=S))for(let G=-1;G<=1;G+=2){let j=G+T;if(j<0||j>=S)continue;let X=E*j+S*H+L,J=_[X];D++,C+=v*(J-C)/D}}}M[A]=C}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;let v=this.size-2;for(let M=1;M<v;M++){let _=this.size2*M,S=(M-this.halfsize)/this.halfsize;for(let E=1;E<v;E++){let R=_+this.size*E,m=(E-this.halfsize)/this.halfsize;for(let T=1;T<v;T++){let A=(T-this.halfsize)/this.halfsize,C=R+T;p(A,m,S,C,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},uv=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ic=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Fp=Promise.resolve();var Hr={chi:{name:"\u5409\u5A03\u5A03\u4E3B\u7BA1",s:2.1},poo:{name:"\u5C0F\u578B\u8CB4\u8CD3\u72D7",s:1.9},pug:{name:"\u516B\u54E5\u72AC",s:1.75}},kr=new Map;function fv(n,t){let e="tex"+n+t;if(kr.has(e))return kr.get(e);let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),r=new Wt(n);s.fillStyle="#"+r.getHexString(),s.fillRect(0,0,128,128);let a=l=>{let c=r.clone().multiplyScalar(l);return`rgba(${Math.min(1,c.r)*255|0},${Math.min(1,c.g)*255|0},${Math.min(1,c.b)*255|0},0.55)`};if(t==="curly")for(let l=0;l<520;l++){s.strokeStyle=a(.7+Math.random()*.55),s.lineWidth=1.6;let c=Math.random()*128,u=Math.random()*128,h=2+Math.random()*3;s.beginPath(),s.arc(c,u,h,Math.random()*6,Math.random()*6+3.5),s.stroke()}else for(let l=0;l<1400;l++){s.strokeStyle=a(.9+Math.random()*.2),s.lineWidth=.8;let c=Math.random()*128,u=Math.random()*128,h=Math.PI/2+(Math.random()-.5)*.5,f=3+Math.random()*4;s.beginPath(),s.moveTo(c,u),s.lineTo(c+Math.cos(h)*f,u+Math.sin(h)*f),s.stroke()}let o=new Ti(i);return o.wrapS=o.wrapT=as,o.repeat.set(t==="curly"?2:5,t==="curly"?2:5),o.colorSpace=je,kr.set(e,o),o}function Jn(n,t={}){let{rough:e=.85,kind:i=null,metal:s=0,emissive:r=0}=t,a=[n,e,i,s,r].join("|");if(kr.has(a))return kr.get(a);let o=new ki({color:i?16777215:n,roughness:e,metalness:s,emissive:r});return i&&(o.map=fv(n,i)),kr.set(a,o),o}var Cu=new Map;function Bp(){return Cu.has("s")||Cu.set("s",new On(1,24,18)),Cu.get("s")}function Je(n,t,e,i,s,r=0,a=0,o=0,l=null){let c=new pt(l||Bp(),s);return c.scale.set(t,e,i),c.position.set(r,a,o),n.add(c),c}function Iu(n,t=0,e=0,i=0){let s=new Be;return s.position.set(t,e,i),n.add(s),s}function Op(n,t,e,i){let s=new Ar(t.map(o=>new U(...o))),r=new pt(new za(s,24,e,8,!1),i);n.add(r);let a=new pt(Bp(),i);return a.scale.setScalar(e),a.position.copy(s.getPoint(1)),n.add(a),r}function Lc(n,t,e,i,s,r,a={}){let o=Iu(n,t,e,i);o.rotation.y=a.yaw||0,a.sclera&&Je(o,s*1.02,s*1.02,s*.9,Jn(16052198,{rough:.3}),0,0,-s*.1),Je(o,s*(a.sclera?.86:1),s*(a.sclera?.86:1),s*.9,Jn(r,{rough:.15}),0,0,a.sclera?s*.12:0),Je(o,s*.55,s*.55,s*.4,Jn(328708,{rough:.1}),0,0,s*.62),Je(o,s*.22,s*.22,s*.12,Jn(16777215,{rough:.1,emissive:7829367}),s*.32,s*.35,s*.88),Je(o,s*.1,s*.1,s*.06,Jn(16777215,{rough:.1,emissive:7829367}),-s*.3,-s*.3,s*.9);let l=new pt(new Cn(s*.98,s*.16,8,20),Jn(a.rim||2759956,{rough:.6}));return l.position.z=s*.25,o.add(l),o}function Np(n,t,e=.25){let i=new Us;return i.moveTo(-n/2,0),i.quadraticCurveTo(-n*(.5+e),t*.55,-n*.02,t),i.quadraticCurveTo(n*.05,t*1.02,n*.04,t*.98),i.quadraticCurveTo(n*(.5+e),t*.5,n/2,0),i.quadraticCurveTo(0,-t*.08,-n/2,0),i}function Up(n,t,e,i,s,r,a,o,l,c){let u=Iu(n,t,e,i);u.rotation.set(-.15,c*.35,-c*l);let h=new pt(new Ua(Np(s,r),{depth:s*.06,bevelEnabled:!0,bevelThickness:s*.03,bevelSize:s*.03,bevelSegments:2,curveSegments:10}),a);h.position.z=-s*.06,u.add(h);let f=new pt(new Oa(Np(s*.7,r*.78)),o);return f.position.set(0,r*.08,s*.035),u.add(f),u}function dv(){let n=document.createElement("canvas");n.width=128,n.height=160;let t=n.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,160),t.fillStyle="#2f6fd6",t.fillRect(0,0,128,40),t.fillStyle="#e8c9a0",t.beginPath(),t.arc(64,82,24,0,7),t.fill(),t.fillStyle="#1b2333",t.font="bold 34px sans-serif",t.textAlign="center",t.fillText("\u4E3B\u7BA1",64,145),t.fillStyle="#fff",t.font="bold 22px sans-serif",t.fillText("BOSS",64,29);let e=new Ti(n);return e.colorSpace=je,e}var Pu=(n,t,e,i,s)=>{let r=(n-i[0])/s[0],a=(t-i[1])/s[1],o=(e-i[2])/s[2],l=Math.hypot(r,a,o),c=Math.hypot(r/s[0],a/s[1],o/s[2]);return c>1e-9?l*(l-1)/c:-Math.min(s[0],s[1],s[2])},Lu=(n,t,e,i,s,r,a)=>{let o=s[0]-i[0],l=s[1]-i[1],c=s[2]-i[2],u=n-i[0],h=t-i[1],f=e-i[2],d=(u*o+h*l+f*c)/(o*o+l*l+c*c);return d=Math.max(0,Math.min(1,d)),Math.hypot(u-o*d,h-l*d,f-c*d)-(r+(a-r)*d)},pv=(n,t,e)=>{let i=Math.max(e-Math.abs(n-t),0)/e;return Math.min(n,t)-i*i*e*.25};function Du(n,t,e,i){let[r,a,o,l]=i,c=l/2,u=(A,C,D)=>{let N=1e9;for(let L of n)N=pv(N,L.f(A,C,D),L.k);return N},h=new Pc(64,new De,!1,!1,12e4),f=64/2;for(let A=0;A<64;A++)for(let C=0;C<64;C++)for(let D=0;D<64;D++)h.field[A*64*64+C*64+D]=-u(r+(D-f)/f*c,a+(C-f)/f*c,o+(A-f)/f*c);h.isolation=0,h.update();let d=h.count,g=new Float32Array(d*3);for(let A=0;A<d;A++)g[A*3]=r+h.positionArray[A*3]*c,g[A*3+1]=a+h.positionArray[A*3+1]*c,g[A*3+2]=o+h.positionArray[A*3+2]*c;let y=new me;y.setAttribute("position",new Me(g,3)),y=Dp(y,1e-6);let p=y.attributes.position,x=new Float32Array(p.count*3),v=new Float32Array(p.count*3),M=new Uint16Array(p.count*4),_=new Float32Array(p.count*4),S=.0015,E=.007,R=new Wt(e[0]),m=new Wt(e[1]),T=new Float32Array(t);for(let A=0;A<p.count;A++){let C=p.getX(A),D=p.getY(A),N=p.getZ(A),L=u(C+S,D,N)-u(C-S,D,N),B=u(C,D+S,N)-u(C,D-S,N),H=u(C,D,N+S)-u(C,D,N-S),G=Math.hypot(L,B,H)||1;x[A*3]=L/G,x[A*3+1]=B/G,x[A*3+2]=H/G,T.fill(1e9);let j=1e9,X=1e9;for(let Ft of n){let Y=Ft.f(C,D,N);Y<T[Ft.bone]&&(T[Ft.bone]=Y),Ft.col?X=Math.min(X,Y):j=Math.min(j,Y)}let J=1/(1+Math.exp(-(j-X)/.003)),Z=R.clone().lerp(m,J);v[A*3]=Z.r,v[A*3+1]=Z.g,v[A*3+2]=Z.b;let vt=Math.min(...T),lt=[];for(let Ft=0;Ft<t;Ft++)lt.push([Ft,Math.exp(-(T[Ft]-vt)/E)]);lt.sort((Ft,Y)=>Y[1]-Ft[1]);let Qt=lt.slice(0,4),Zt=Qt.reduce((Ft,Y)=>Ft+Y[1],0);Qt.forEach(([Ft,Y],tt)=>{M[A*4+tt]=Ft,_[A*4+tt]=Y/Zt})}return y.setAttribute("normal",new Me(x,3)),y.setAttribute("color",new Me(v,3)),y.setAttribute("skinIndex",new Cs(M,4)),y.setAttribute("skinWeight",new Me(_,4)),y}var Vi={};function mv(n,t){let e=m=>Jn(m,{rough:.5}),i=e(14721106),s=e(16509388),r=e(4860436),a=e(15971482),o=Jn(16777215,{rough:.25}),l={hd:.03,u:.05,l:.05,zf:.07,zr:-.072},c=l.hd+l.u+l.l+.008;n.position.set(0,c,0);let u=[0,.105,.11],h=[[-.047,l.zf,1.2],[.047,l.zf,1.2],[-.05,l.zr,1.55],[.05,l.zr,1.55]],f=new ze;f.position.set(...u),n.add(f);let d=new ze;d.position.set(0,-.036,.05),f.add(d);let g=new ze;g.position.set(0,.045,-.105),n.add(g);let y=h.map(([m,T])=>{let A=new ze;A.position.set(m,-l.hd,T),n.add(A);let C=new ze;return C.position.set(0,-l.u,0),A.add(C),{hip:A,knee:C}}),p=[n,f,d,g,...y.flatMap(m=>[m.hip,m.knee])];if(!Vi.chi){let m=(N,L,B)=>[N,L+c,B],T=(N,L,B)=>[N+u[0],L+u[1]+c,B+u[2]],A=[],C=(N,L,B,H=0,G=.03)=>A.push({f:(j,X,J)=>Pu(j,X,J,N,L),bone:B,col:H,k:G}),D=(N,L,B,H,G,j=0,X=.03)=>A.push({f:(J,Z,vt)=>Lu(J,Z,vt,N,L,B,H),bone:G,col:j,k:X});C(m(0,.006,-.005),[.09,.083,.1],0),C(m(0,.014,.058),[.08,.08,.066],0),C(m(0,.012,-.066),[.074,.072,.062],0),C(m(0,-.03,.025),[.066,.058,.078],0,1),C(m(0,.015,.1),[.054,.06,.04],0,1),D(m(0,.04,.07),T(0,-.01,-.01),.058,.055,0),C(T(0,0,0),[.076,.07,.068],1),C(T(-.037,-.03,.03),[.035,.029,.03],1,1,.02),C(T(.037,-.03,.03),[.035,.029,.03],1,1,.02),C(T(0,-.022,.056),[.029,.021,.028],1,1,.02),C(T(0,.032,.05),[.03,.022,.02],1,1,.02),D(m(0,.045,-.105),m(0,.085,-.12),.018,.012,3,0,.02),h.forEach(([N,L,B],H)=>{let G=m(N,-l.hd,L),j=[G[0],G[1]-l.u,G[2]],X=[j[0],j[1]-l.l,j[2]];D([G[0],G[1]+.03,G[2]],j,.024*B,.02,4+H*2,0,.035),D(j,[X[0],X[1]+.012,X[2]],.02,.018,5+H*2,0,.02),C([X[0],X[1]+.011,X[2]+.01],[.023,.013,.029],5+H*2,1,.018)}),Vi.chi=Du(A,p.length,[14721106,16509388],[0,.17,.01,.46])}let x=new ki({vertexColors:!0,roughness:.5}),v=new Ps(Vi.chi,x);v.frustumCulled=!1,t.add(v),t.add(n),t.updateMatrixWorld(!0),v.bind(new Ls(p)),Je(f,.012,.009,.008,r,0,-.013,.084);for(let m of[-1,1]){let T=Iu(f,m*.032,.013,.056);T.rotation.y=m*.3,Je(T,.018,.018,.012,o,0,0,0),Je(T,.009,.01,.006,r,m*.004,-.003,.009),Je(T,.003,.003,.002,o,m*.004+.003,.001,.014);let A=Je(T,.0195,.011,.0135,i,0,.008,.001);A.rotation.x=-.15;let C=new pt(new ke(.034,.008,.008),r);C.position.set(m*.03,.038,.06),C.rotation.z=m*.32,f.add(C)}let M=new pt(new Cn(.01,.0025,5,10,Math.PI),r);M.position.set(0,-.044,.07),M.rotation.set(-.3,0,0),f.add(M),Up(f,-.05,.045,-.012,.095,.125,i,a,.72,-1),Up(f,.05,.045,-.012,.095,.125,i,a,.72,1),Je(d,.022,.009,.024,s,0,-.004,.008),Je(d,.015,.005,.017,e(14242906),0,.002,.01);for(let m of[-1,1]){let T=new pt(new Ns(.003,.008,5),o);T.position.set(m*.012,.006,.028),d.add(T)}Op(g,[[0,.02,-.01],[0,.05,-.02],[0,.072,.005],[0,.062,.03]],.012,i);let _=new pt(new ke(.026,.07,.008),e(12597547));_.position.set(.008,-.025,.145),_.rotation.set(-.35,0,.18),n.add(_);let S=new pt(new ke(.03,.018,.016),e(9316896));S.position.set(.004,.02,.14),S.rotation.z=.15,n.add(S);let E=new pt(new Cn(.06,.006,6,24),e(3108822));E.position.set(0,.058,.098),E.rotation.x=1.2,n.add(E);let R=new pt(new ke(.036,.046,.004),[o,o,o,o,new ki({map:dv(),roughness:.4}),o]);return R.position.set(-.03,-.035,.14),R.rotation.set(-.3,-.25,-.12),n.add(R),{head:f,jaw:d,tail:g,legs:y,D:l,top:.105+.12+c,pout:M}}function gv(n,t){let e=M=>Jn(M,{rough:.5}),i=e(14464380),s=e(2761760),r=e(9069632),a=e(14242906),o={hd:.03,u:.045,l:.046,zf:.072,zr:-.078},l=o.hd+o.u+o.l+.008;n.position.set(0,l,0);let c=[0,.075,.125],u=[[-.055,o.zf,1.25],[.055,o.zf,1.25],[-.058,o.zr,1.5],[.058,o.zr,1.5]],h=new ze;h.position.set(...c),n.add(h);let f=new ze;f.position.set(0,-.046,.05),h.add(f);let d=new ze;d.position.set(0,.06,-.11),n.add(d);let g=u.map(([M,_])=>{let S=new ze;S.position.set(M,-o.hd,_),n.add(S);let E=new ze;return E.position.set(0,-o.u,0),S.add(E),{hip:S,knee:E}}),y=[n,h,f,d,...g.flatMap(M=>[M.hip,M.knee])];if(!Vi.pug){let M=(m,T,A)=>[m,T+l,A],_=(m,T,A)=>[m+c[0],T+c[1]+l,A+c[2]],S=[],E=(m,T,A,C=0,D=.03)=>S.push({f:(N,L,B)=>Pu(N,L,B,m,T),bone:A,col:C,k:D}),R=(m,T,A,C,D,N=0,L=.03)=>S.push({f:(B,H,G)=>Lu(B,H,G,m,T,A,C),bone:D,col:N,k:L});E(M(0,.004,-.005),[.092,.086,.1],0),E(M(0,.01,.06),[.088,.086,.066],0),E(M(0,.01,-.072),[.08,.078,.062],0),R(M(0,.035,.075),_(0,-.012,-.025),.068,.064,0),E(_(0,0,0),[.08,.074,.07],1),E(_(0,.028,.018),[.064,.042,.05],1,0,.025),E(_(-.034,-.03,.045),[.035,.031,.028],1,1,.02),E(_(.034,-.03,.045),[.035,.031,.028],1,1,.02),E(_(0,-.016,.06),[.044,.032,.02],1,1,.018),u.forEach(([m,T,A],C)=>{let D=M(m,-o.hd,T),N=[D[0],D[1]-o.u,D[2]],L=[N[0],N[1]-o.l,N[2]];R([D[0],D[1]+.03,D[2]],N,.026*A,.023,4+C*2,0,.035),R(N,[L[0],L[1]+.013,L[2]],.023,.021,5+C*2,0,.02),E([L[0],L[1]+.012,L[2]+.01],[.026,.014,.031],5+C*2,0,.018)}),Vi.pug=Du(S,y.length,[14464380,2761760],[0,.16,.03,.48])}let p=new Ps(Vi.pug,new ki({vertexColors:!0,roughness:.5}));p.frustumCulled=!1,t.add(p),t.add(n),t.updateMatrixWorld(!0),p.bind(new Ls(y)),Je(h,.019,.012,.01,Jn(854794,{rough:.3}),0,-.002,.081);let x=new pt(new Cn(.026,.006,6,16,Math.PI),s);x.position.set(0,.008,.074),x.rotation.set(-.3,0,0),h.add(x);for(let M=0;M<2;M++){let _=new pt(new Cn(.022-M*.003,.0035,5,16,Math.PI*.8),r);_.position.set(0,.048+M*.011,.058-M*.01),_.rotation.set(-.95,0,Math.PI*1.1),h.add(_)}Lc(h,-.038,.016,.054,.022,1839628,{yaw:-.4,sclera:!0,rim:1446158}),Lc(h,.038,.016,.054,.022,1839628,{yaw:.4,sclera:!0,rim:1446158});for(let M of[-1,1])Je(h,.024,.028,.008,s,M*.068,.034,.022).rotation.set(.9,M*.5,M*1.2);Je(f,.024,.008,.02,s,0,0,.012),Je(f,.015,.004,.015,a,0,.004,.014);let v=[];for(let M=0;M<=16;M++){let _=M/16*Math.PI*3.2,S=.034*(1-M/22);v.push([Math.sin(_)*S*.6,.02+(1-Math.cos(_))*S*.6,-Math.cos(_)*S+S*.3+M*.002])}return Op(d,v,.013,i),{head:h,jaw:f,tail:d,legs:g,D:o,top:c[1]+.08+l}}function xv(n,t){let e=p=>Jn(p,{rough:.7}),i=e(11758130),s=e(13867618),r=e(14242906),a={hd:.03,u:.055,l:.055,zf:.075,zr:-.08},o=a.hd+a.u+a.l+.008;n.position.set(0,o,0);let l=[0,.112,.118],c=[[-.046,a.zf,1.15],[.046,a.zf,1.15],[-.05,a.zr,1.35],[.05,a.zr,1.35]],u=new ze;u.position.set(...l),n.add(u);let h=new ze;h.position.set(0,-.045,.055),u.add(h);let f=new ze;f.position.set(0,.05,-.11),n.add(f);let d=c.map(([p,x])=>{let v=new ze;v.position.set(p,-a.hd,x),n.add(v);let M=new ze;return M.position.set(0,-a.u,0),v.add(M),{hip:v,knee:M}}),g=[n,u,h,f,...d.flatMap(p=>[p.hip,p.knee])];if(!Vi.poo){let p=(S,E,R)=>[S,E+o,R],x=(S,E,R)=>[S+l[0],E+l[1]+o,R+l[2]],v=[],M=(S,E,R,m=0,T=.03)=>v.push({f:(A,C,D)=>Pu(A,C,D,S,E),bone:R,col:m,k:T}),_=(S,E,R,m,T,A=0,C=.03)=>v.push({f:(D,N,L)=>Lu(D,N,L,S,E,R,m),bone:T,col:A,k:C});M(p(0,0,-.01),[.08,.078,.105],0),M(p(0,.008,.06),[.076,.08,.066],0),M(p(0,.008,-.072),[.073,.072,.06],0),_(p(0,.04,.072),x(0,-.015,-.022),.056,.054,0),M(x(0,0,0),[.076,.072,.07],1),M(x(0,.046,-.006),[.062,.04,.056],1,0,.03),M(x(0,-.026,.062),[.036,.031,.036],1,1,.022),M(x(-.07,-.04,-.004),[.03,.066,.036],1,0,.02),M(x(.07,-.04,-.004),[.03,.066,.036],1,0,.02),_(p(0,.05,-.105),p(0,.085,-.12),.016,.014,3,0,.015),M(p(0,.1,-.128),[.036,.036,.036],3,0,.015),c.forEach(([S,E,R],m)=>{let T=p(S,-a.hd,E),A=[T[0],T[1]-a.u,T[2]],C=[A[0],A[1]-a.l,A[2]];_([T[0],T[1]+.03,T[2]],A,.029*R,.027,4+m*2,0,.035),_(A,[C[0],C[1]+.014,C[2]],.027,.027,5+m*2,0,.02),M([C[0],C[1]+.013,C[2]+.008],[.031,.016,.034],5+m*2,0,.02)}),Vi.poo=Du(v,g.length,[11758130,13867618],[0,.18,0,.5])}let y=new Ps(Vi.poo,new ki({vertexColors:!0,roughness:.75}));return y.frustumCulled=!1,t.add(y),t.add(n),t.updateMatrixWorld(!0),y.bind(new Ls(g)),Je(u,.015,.011,.01,Jn(1118481,{rough:.3}),0,-.012,.098),Lc(u,-.027,.012,.064,.013,788486,{yaw:-.2,rim:3808268}),Lc(u,.027,.012,.064,.013,788486,{yaw:.2,rim:3808268}),Je(h,.022,.008,.022,s,0,0,.012),Je(h,.014,.004,.015,r,0,.004,.014),{head:u,jaw:h,tail:f,legs:d,D:a,top:l[1]+.09+o}}function Nu(n){let t=Hr[n],e=new Be,i=new Be;e.add(i),i.scale.setScalar(t.s);let s=!0,r=s?new ze:new Be;s||i.add(r);let a=n==="chi"?mv(r,i):n==="pug"?gv(r,i):xv(r,i),{D:o}=a,l=o.u+o.l,u=o.hd+l+.008,h=-.75,d=.03-(-o.hd*Math.cos(h)-o.zr*Math.sin(h));return r.position.y=u,e.traverse(g=>{g.isMesh&&(g.castShadow=!1)}),{root:e,model:i,bp:r,head:a.head,jaw:a.jaw,tail:a.tail,legs:a.legs,bp0:u,L:l,sitY:d,lieY:o.hd+.045,sitPitch:h,height:a.top*t.s,pout:a.pout||null,pose:{y:u,pitch:0,head:0,jaw:0,hip:[0,0,0,0],knee:[0,0,0,0],tail:0}}}var xs=(n,t,e)=>n+(t-n)*e,_v={walk:"Walk",run:"Run",jump:"Run_Jump",sit:"Idle_2",lie:"Idle_2_HeadLow",eat:"Eating",idle:"Idle"};function yv(n,t){let e=n.model.glb,i=_v[n.hop>0?"jump":n.act]||"Idle";if(n.barkT>0&&(n.barkT-=t,i="Attack"),e.act[i]||(i="Idle"),i!==e.cur){let s=e.act[i];s.reset(),s.setLoop(i==="Attack"||i==="Run_Jump"?ru:au,1/0),s.clampWhenFinished=!0,s.fadeIn(.15).play(),e.cur&&e.act[e.cur]&&e.act[e.cur].fadeOut(.15),e.cur=i}e.mixer.update(t)}function Dc(n,t,e){let i=n.model;if(i.glb)return yv(n,t);let s=i.pose,r=1-Math.exp(-t*16),a={y:i.bp0,pitch:0,head:0,jaw:0,hip:[0,0,-.3,-.3],knee:[0,0,.55,.55],tail:0},o=n.hop>0?"jump":n.act;(o==="walk"||o==="run")&&(n.phase+=t*(o==="run"?16:9));let l=n.phase;if(o==="walk"){let u=[l,l+Math.PI,l+Math.PI,l];for(let h=0;h<4;h++){let f=Math.sin(u[h]),d=Math.cos(u[h]),g=Math.max(0,-d);h<2?(a.hip[h]=f*.45,a.knee[h]=g*.9):(a.hip[h]=-.3+f*.4,a.knee[h]=.55+g*.6)}a.y+=Math.abs(Math.sin(l))*.004,a.head=Math.sin(l*2)*.04,a.tail=Math.sin(e*7)*.35}else if(o==="run"){let u=Math.sin(l),h=Math.sin(l+1.7);a.hip=[u*.9-.1,Math.sin(l+.35)*.9-.1,-.3+h*.8,-.3+Math.sin(l+2.05)*.8],a.knee=[Math.max(0,-Math.cos(l))*1.2,Math.max(0,-Math.cos(l+.35))*1.2,.55+Math.max(0,-Math.cos(l+1.7))*.7,.55+Math.max(0,-Math.cos(l+2.05))*.7],a.y+=Math.abs(Math.sin(l))*.025,a.pitch=Math.sin(l)*.12,a.head=-Math.sin(l)*.12,a.tail=Math.sin(e*14)*.4}else o==="sit"?(a.y=i.sitY,a.pitch=i.sitPitch,a.head=.65,a.hip=[0,0,-1.55,-1.55],a.knee=[0,0,2.7,2.7],a.tail=Math.sin(e*4)*.3):o==="lie"||o==="eat"?(a.y=i.lieY,a.pitch=0,a.head=o==="eat"?.55:.08,a.hip=[-1.45,-1.45,-1.3,-1.3],a.knee=[.15,.15,2.5,2.5],a.tail=Math.sin(e*2)*.15,o==="eat"&&(a.jaw=.3*(.5+.5*Math.sin(e*18)))):o==="jump"?(a.pitch=-.25,a.head=-.1,a.hip=[-1,-1,.8,.8],a.knee=[1.1,1.1,.2,.2],a.tail=.4):(a.y+=Math.sin(e*2.2+n.seed)*.0025,a.tail=Math.sin(e*5+n.seed)*.25,a.head=Math.sin(e*.7+n.seed)*.08);n.type==="chi"&&n.state==="chase"&&(a.tail=Math.sin(e*40)*.5);let c=0;n.type==="chi"&&((o==="idle"||o==="walk"||o==="sit")&&(a.head-=.28),o==="walk"?c=Math.sin(l)*.09:o==="run"&&(c=Math.sin(l)*.05),o==="idle"&&(a.y+=Math.sin(e*1.6+n.seed)*.004)),n.barkT>0&&(n.barkT-=t,a.head-=.5,a.jaw=.6*(.5+.5*Math.sin(e*34)),a.pitch-=.08,a.y+=.006),s.y=xs(s.y,a.y,r),s.pitch=xs(s.pitch,a.pitch,r),s.head=xs(s.head,a.head,r),s.jaw=xs(s.jaw,a.jaw,r),s.tail=xs(s.tail,a.tail,r);for(let u=0;u<4;u++)s.hip[u]=xs(s.hip[u],a.hip[u],r),s.knee[u]=xs(s.knee[u],a.knee[u],r);i.bp.position.y=s.y,i.bp.rotation.x=s.pitch,i.bp.rotation.z=xs(i.bp.rotation.z,c,r),i.pout&&(i.pout.visible=s.jaw<.12),i.head.rotation.x=s.head,i.jaw.rotation.x=s.jaw,i.tail.rotation.y=s.tail;for(let u=0;u<4;u++)i.legs[u].hip.rotation.x=s.hip[u]-s.pitch,i.legs[u].knee.rotation.x=s.knee[u]}var Ae={SEEN_GRACE:2.5,CHI_BASE_COUNT:3,CHI_MAX:7,CHI_VISION:14,CHI_FOV_HALF:46*Math.PI/180,WALK:3.6,RUN:6.6,SNEAK_SPEED:[0,2,2.5,3],SNEAK_NOISE:[0,3.5,2.5,1.5],SNEAK_VIS:[1,.55,.45,.35],RADAR_R:[0,20,32,50],RADAR_T:[0,2,1,.4],UP_MAX:3},n0="chihuahua_hunter_lb_v1",i0="chihuahua_hunter_name",ce=40,pi=30,fo=-20,po=-15,rn=ce*pi,ue=4,$i={x1:2,x2:6,z1:2,z2:12},Tt=n=>document.getElementById(n),Ne=(n,t)=>n+Math.random()*(t-n),dn=n=>n[Math.floor(Math.random()*n.length)],an=(n,t,e)=>Math.max(t,Math.min(e,n)),An=(n,t,e)=>n+(t-n)*e;function s0(n,t){let e=t-n;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}var zp={};function yt(n,t){let e=n+(t?JSON.stringify(t):"");return zp[e]||(zp[e]=new Hi({color:n,...t||{}}))}var _o=(n,t)=>n>$i.x1&&n<$i.x2&&t>$i.z1&&t<$i.z2;function Gc(n,t,e){return _o(n,t)?ue*($i.z2-t)/($i.z2-$i.z1):e>=2.2?ue:0}var ti=n=>n>=2?1:0,Ji=Tt("c"),Zu=!!(window.matchMedia&&matchMedia("(pointer:coarse)").matches),mo=new Ac({canvas:Ji,antialias:!(Zu&&window.devicePixelRatio>=2),powerPreference:"high-performance"});mo.setPixelRatio(Math.min(window.devicePixelRatio,Zu?1.5:2));var te=new ya;te.background=new Wt(1053723);te.fog=new _a(1053723,16,55);var Ke=new ln(75,1,.05,120);Ke.rotation.order="YXZ";te.add(Ke);var r0=new Xa(14674175,.8);te.add(r0);var a0=new Ha(16777215,6715272,.55);te.add(a0);var Ju=new Wa(16777215,.35);Ju.position.set(5,10,3);te.add(Ju);var ku=new us(16773328,.7,14);Ke.add(ku);function Ku(){mo.setSize(window.innerWidth,window.innerHeight,!1);let n=window.innerWidth/window.innerHeight;Ke.aspect=n,Ke.fov=n>=1.4?75:Math.min(105,2*Math.atan(Math.tan(37.5*Math.PI/180)*1.4/n)*180/Math.PI),Ke.updateProjectionMatrix()}window.addEventListener("resize",Ku);window.addEventListener("orientationchange",()=>setTimeout(Ku,200));Ku();var Vc=[[],[]],yo=[[],[]],Hu=[[],[]],Ue=new Be;te.add(Ue);var Wc=[],o0=[],l0=[],Gu=null,kp=90210,Bt=()=>(kp=kp*1664525+1013904223>>>0)/4294967296,Bc=n=>n[Math.floor(Bt()*n.length)];function qn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}function Ln(n,t){let e=new Ti(n);return e.colorSpace=je,e.anisotropy=4,t&&(e.wrapS=e.wrapT=as),e}function Hp(n,t,e,i,s){let[r,a]=qn(128,128);a.fillStyle=`rgb(${n},${n},${n})`,a.fillRect(0,0,128,128);for(let o=0;o<e;o++){let l=n+(Bt()-.5)*2*t|0;a.fillStyle=`rgb(${l},${l},${l})`,a.fillRect(Bt()*128,Bt()*128,2,2)}a.strokeStyle=s,a.lineWidth=2;for(let o=0;o<=i;o++){let l=o*128/i;a.beginPath(),a.moveTo(l,0),a.lineTo(l,128),a.moveTo(0,l),a.lineTo(128,l),a.stroke()}return Ln(r,!0)}function vv(){let[n,t]=qn(128,128);t.fillStyle="#a3b3b9",t.fillRect(0,0,128,128);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let s=236+(Bt()*14|0);t.fillStyle=`rgb(${s},${s+3},${s+4})`,t.fillRect(e*32+1.5,i*32+1.5,29,29)}return Ln(n,!0)}function Mv(){let[n,t]=qn(256,256);for(let e=0;e<8;e++){let i=190+(Bt()*45|0);t.fillStyle=`rgb(${i},${i-38},${i-90})`,t.fillRect(0,e*32,256,32),t.strokeStyle="rgba(60,30,10,.22)",t.lineWidth=1;for(let s=0;s<5;s++){let r=e*32+4+Bt()*24;t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(80,r+Bt()*4-2,170,r+Bt()*4-2,256,r),t.stroke()}t.fillStyle="rgba(40,20,5,.5)",t.fillRect(0,e*32,256,1.5),t.fillRect(Bt()*256,e*32,1.5,32)}return Ln(n,!0)}function Sv(){let[n,t]=qn(128,128);t.fillStyle="#eceff2",t.fillRect(0,0,128,128);for(let e=0;e<500;e++){let i=200+(Bt()*40|0);t.fillStyle=`rgb(${i},${i},${i})`,t.fillRect(Bt()*128,Bt()*128,2,1)}return t.strokeStyle="#98a0aa",t.lineWidth=3,t.strokeRect(0,0,128,128),t.beginPath(),t.moveTo(64,0),t.lineTo(64,128),t.moveTo(0,64),t.lineTo(128,64),t.stroke(),Ln(n,!0)}function bv(){let[n,t]=qn(256,256),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#0d1836"),e.addColorStop(.6,"#2f437a"),e.addColorStop(1,"#c9895f"),t.fillStyle=e,t.fillRect(0,0,256,256);for(let i=0;i<40;i++)t.fillStyle="rgba(255,255,255,.7)",t.fillRect(Bt()*256,Bt()*110,1.5,1.5);for(let i=-10;i<256;){let s=18+Bt()*30,r=60+Bt()*110,a=256-r;t.fillStyle=`rgb(${16+Bt()*14|0},${20+Bt()*14|0},${38+Bt()*20|0})`,t.fillRect(i,a,s,r);for(let o=a+6;o<250;o+=9)for(let l=i+4;l<i+s-5;l+=8)Bt()<.35&&(t.fillStyle=Bt()<.8?"rgba(255,214,120,.85)":"rgba(170,220,255,.8)",t.fillRect(l,o,3.5,4.5));i+=s+2+Bt()*6}return Ln(n,!1)}function Ev(n){let[t,e]=qn(128,80);if(n===0){e.fillStyle="#14202e",e.fillRect(0,0,128,80);let i=["#6bd1ff","#ffd479","#9be37a","#ff8f8f","#c3a6ff"];for(let s=0;s<9;s++){let r=6+s%3*6,a=7+s*8;for(let o=0;o<3+(Bt()*3|0);o++){let l=10+Bt()*26;e.fillStyle=i[Bt()*5|0],e.fillRect(r,a,l,3),r+=l+4}}}else if(n===1){e.fillStyle="#f4f6f8",e.fillRect(0,0,128,80),e.fillStyle="#1f7a47",e.fillRect(0,0,128,9),e.strokeStyle="#c3ccd6",e.lineWidth=1;for(let i=1;i<8;i++)e.beginPath(),e.moveTo(0,9+i*9),e.lineTo(128,9+i*9),e.stroke();for(let i=1;i<6;i++)e.beginPath(),e.moveTo(i*21,0),e.lineTo(i*21,80),e.stroke();e.fillStyle="#44505f";for(let i=0;i<7;i++)for(let s=0;s<6;s++)Bt()<.7&&e.fillRect(s*21+4,12+i*9,8+Bt()*8,3)}else if(n===2){e.fillStyle="#e7edf4",e.fillRect(0,0,128,80);for(let i=0;i<5;i++){let s=i%2;e.fillStyle=s?"#7ac36a":"#ffffff";let r=36+Bt()*40;e.fillRect(s?120-r:8,8+i*14,r,10)}}else{e.fillStyle="#2a5ea8",e.fillRect(0,0,128,80),e.fillStyle="#fff",e.fillRect(10,10,70,6),e.fillStyle="#9fc6f5",e.fillRect(10,22,50,3);for(let i=0;i<5;i++){let s=10+Bt()*30;e.fillStyle=i===4?"#ffd24a":"#cfe3fb",e.fillRect(14+i*20,70-s,13,s)}}return Ln(t,!1)}function Gp(n){let[t,e]=qn(256,128);if(n==="white")e.fillStyle="#f7f8fa",e.fillRect(0,0,256,128),e.fillStyle="#d33",e.font="bold 22px sans-serif",e.textAlign="left",e.fillText("Q4 KPI \u885D\u523A",12,28),e.strokeStyle="#2a64c8",e.lineWidth=3,e.beginPath(),e.moveTo(14,110),e.lineTo(60,84),e.lineTo(100,96),e.lineTo(150,58),e.lineTo(210,40),e.stroke(),e.fillStyle="#2a64c8",e.beginPath(),e.moveTo(222,34),e.lineTo(204,36),e.lineTo(214,50),e.fill(),e.strokeStyle="#2a8a4a",e.lineWidth=2,e.strokeRect(150,70,90,44),e.fillStyle="#2a8a4a",e.font="16px sans-serif",e.fillText("\u5411\u4E0A\u7BA1\u7406",160,98),e.strokeStyle="#555",e.beginPath(),e.moveTo(12,118),e.lineTo(246,118),e.stroke();else{e.fillStyle="#b98a5a",e.fillRect(0,0,256,128);for(let s=0;s<700;s++){let r=150+(Bt()*60|0);e.fillStyle=`rgb(${r},${r-40},${r-90})`,e.fillRect(Bt()*256,Bt()*128,2,2)}let i=["#ffe27a","#ff9db0","#9fe0ff","#b8f0a0","#fff"];for(let s=0;s<11;s++){e.save(),e.translate(14+s%6*40+Bt()*8,14+(s/6|0)*56+Bt()*10),e.rotate((Bt()-.5)*.3),e.fillStyle=i[s%5],e.fillRect(0,0,32,36),e.fillStyle="#c33",e.fillRect(14,-2,4,4),e.fillStyle="#555";for(let r=0;r<4;r++)e.fillRect(4,8+r*7,18+Bt()*8,2);e.restore()}}return Ln(t,!1)}function ao(n){let[t,e]=qn(96,128),i=[["#f2c14e","#e2574c","#3a6ea5"],["#6bd1c0","#f08a5d","#2b2d42"],["#fff1d0","#b83b5e","#6a2c70"],["#d6e5fa","#3f72af","#112d4e"]][n%4];return e.fillStyle=i[0],e.fillRect(0,0,96,128),e.fillStyle=i[1],e.beginPath(),e.arc(30+Bt()*30,40+Bt()*20,24+Bt()*10,0,7),e.fill(),e.fillStyle=i[2],e.fillRect(8+Bt()*20,70+Bt()*20,50+Bt()*20,30+Bt()*10),e.strokeStyle=i[2],e.lineWidth=3,e.beginPath(),e.moveTo(0,100+Bt()*20),e.bezierCurveTo(30,60,60,120,96,80),e.stroke(),Ln(t,!1)}function Vp(n){let[t,e]=qn(64,64),i=e.createRadialGradient(32,32,2,32,32,31);return n==="shadow"?(i.addColorStop(0,"rgba(0,0,0,.55)"),i.addColorStop(.55,"rgba(0,0,0,.28)"),i.addColorStop(1,"rgba(0,0,0,0)")):(i.addColorStop(0,"rgba(255,244,214,.55)"),i.addColorStop(.5,"rgba(255,236,190,.2)"),i.addColorStop(1,"rgba(255,230,170,0)")),e.fillStyle=i,e.fillRect(0,0,64,64),Ln(t,!1)}var He={carpet:Hp(206,28,2600,2,"rgba(0,0,0,.2)"),vinyl:Hp(228,22,900,2,"rgba(0,0,0,.14)"),tile:vv(),wood:Mv(),ceil:Sv(),city:bv(),scr:[0,1,2,3].map(Ev),white:Gp("white"),cork:Gp("cork")},Wp={};function c0(n,t,e){let i=n+"|"+t.uuid+(e?JSON.stringify(e):"");return Wp[i]||(Wp[i]=new Hi({color:n,map:t,...e||{}}))}var Xp=new Map;function Zr(n){let t=Xp.get(n);return t||(t=new De({map:n}),Xp.set(n,t)),t}var Jr={},Vr=(n,t,e)=>{let i=n+","+t+","+e;return Jr[i]||(Jr[i]=new ke(n,t,e))};function vn(n,t,e,i=0){let s=new Be;return s.position.set(t,n*ue,e),s.rotation.y=i,Ue.add(s),s}function It(n,t,e,i,s,r,a,o){let l=new pt(Vr(t,e,i),o);return l.position.set(s,r,a),n.add(l),l}function Mn(n,t,e,i,s,r){let a=new pt(t,e);return a.position.set(i,s,r),n.add(a),a}var Qn=(n,t,e,i=10)=>{let s=`c${n},${t},${e},${i}`;return Jr[s]||(Jr[s]=new Fn(n,t,e,i))},co=(n,t=0)=>{let e=`i${n},${t}`;return Jr[e]||(Jr[e]=new Fa(n,t))};function Ii(n,t,e,i,s,r,a,o,l={}){let{col:c=!0,sight:u=!0,wall:h=!1,vis:f=!0}=l,d={x1:t,z1:e,x2:i,z2:s};if(c&&Vc[n].push(d),u&&yo[n].push(d),h&&Hu[n].push(d),!f)return null;let g=i-t,y=s-e,p=a-r,x=new pt(Vr(g,p,y),l.mat||yt(o,l.mo));return x.position.set((t+i)/2,n*ue+r+p/2,(e+s)/2),Ue.add(x),x}var ys=(n,t,e,i,s,r,a,o,l)=>Ii(n,t,e,i,s,r,a,o,{col:!1,sight:!1,mat:l});function Pn(n,t,e,i,s,r=.3,a=15001579){let o=e===s?[t-r/2,e-r/2,i+r/2,e+r/2]:[t-r/2,e-r/2,i+r/2,s+r/2];Ii(n,o[0],o[1],o[2],o[3],0,3.8,a,{wall:!0});let l=.025;ys(n,o[0]-l,o[1]-l,o[2]+l,o[3]+l,0,.11,3883081),ys(n,o[0]-l,o[1]-l,o[2]+l,o[3]+l,3.62,3.8,12830927),r>.2&&ys(n,o[0]-.01,o[1]-.01,o[2]+.01,o[3]+.01,.95,1.03,11450050)}function di(n,t,e,i,s,r,a=.015,o=null,l=2){let c=i-t,u=s-e,h=new hn(c,u);if(o){let d=h.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,d.getX(g)*c/l+t/l,d.getY(g)*u/l+e/l)}let f=new pt(h,o?c0(r,o):yt(r));f.rotation.x=-Math.PI/2,f.position.set((t+i)/2,n*ue+a,(e+s)/2),Ue.add(f)}function qp(n,t,e,i,s){let r=i-t,a=s-e,o=new hn(r,a),l=1.2,c=o.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*r/l+t/l,c.getY(h)*a/l+e/l);let u=new pt(o,c0(16777215,He.ceil));u.rotation.x=Math.PI/2,u.position.set((t+i)/2,n,(e+s)/2),Ue.add(u)}function h0(n,t,e,i,s,r){let a=document.createElement("canvas");a.width=t,a.height=e;let o=a.getContext("2d");return s&&(o.fillStyle=s,o.fillRect(0,0,t,e)),o.fillStyle=i,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(n,t/2,e/2),Ln(a,!1)}function Gn(n,t,e,i,s,r,a=1.8,o=.5,l="#1d5fa8"){let c=vn(n,e,s,r),u=new pt(new hn(a,o),new De({map:h0(t,256,Math.round(256*o/a),"#fff",l,"bold 44px sans-serif")}));u.position.set(0,i,.012),c.add(u),It(c,a+.06,o+.06,.02,0,i,0,yt(2830134))}function Wi(n,t,e,i,s,r,a,o){let l=vn(n,e,s,r);It(l,a+.1,o+.1,.04,0,i,0,yt(2959912));let c=new pt(new hn(a,o),Zr(t));c.position.set(0,i,.022),l.add(c)}function Xi(n,t,e,i,s){o0.push({f:n,x:t,z:e,w:i,d:s})}function Vu(n,t,e,i=0,s=4026280){let r=vn(n,t,e,i),a=yt(2830392),o=yt(s);Mn(r,Qn(.03,.03,.4,6),a,0,.23,0),It(r,.52,.035,.06,0,.05,0,a),It(r,.06,.035,.52,0,.05,0,a),It(r,.5,.08,.48,0,.45,0,o),It(r,.46,.5,.06,0,.78,.23,o),It(r,.05,.04,.34,-.27,.62,.02,a),It(r,.05,.04,.34,.27,.62,.02,a),It(r,.04,.17,.04,-.27,.54,.02,a),It(r,.04,.17,.04,.27,.54,.02,a),Xi(n,t,e,.95,.95)}var Wu=[4026280,3116931,14254138,8018598,4869978];function Uu(n,t,e,i=!0){Wc.push({f:n,x:t,z:e,type:"desk"}),Ii(n,t-.8,e-.4,t+.8,e+.4,0,.75,0,{sight:!1,vis:!1});let s=vn(n,t,e),r=yt(12620898),a=yt(7166022),o=yt(2106668);It(s,1.6,.05,.8,0,.745,0,r),It(s,.05,.72,.76,-.76,.36,0,a),It(s,.05,.72,.76,.76,.36,0,a),It(s,1.48,.42,.03,0,.5,-.36,a);let l=Bt()<.5?-1:1;It(s,.42,.62,.7,l*.52,.36,0,yt(9270104));for(let h=0;h<3;h++)It(s,.18,.025,.02,l*.52,.2+h*.2,.36,yt(13620185));let c=Bt()*4|0;It(s,.2,.012,.14,0,.776,-.12,o),It(s,.04,.17,.03,0,.86,-.14,o),It(s,.58,.35,.035,0,1.08,-.15,o);let u=new pt(new hn(.52,.3),Zr(He.scr[c]));if(u.position.set(0,1.08,-.15+.019),s.add(u),It(s,.42,.015,.14,-.05,.785,.12,yt(14343650)),It(s,.06,.02,.1,.3,.787,.13,yt(3159099)),Bt()<.6&&Mn(s,Qn(.036,.032,.09,8),yt(Bc([15263976,14241850,3837913,15909198])),-.55*l*-1,.82,.02),Bt()<.55){let h=It(s,.21,.025,.3,-l*.5,.79,.1,yt(16053488));h.rotation.y=(Bt()-.5)*.7}Bt()<.3&&(Mn(s,Qn(.05,.04,.07,8),yt(15328732),l*.55,.81,-.2),Mn(s,co(.07,0),yt(4168277),l*.55,.9,-.2)),Xi(n,t,e,2.1,1.3),i&&Vu(n,t+(Bt()-.5)*.3,e+.75+Bt()*.12,(Bt()-.5)*.7,Bc(Wu))}function Kn(n,t,e,i=1.2,s=.6,r=9213604){Ii(n,t-i/2,e-s/2,t+i/2,e+s/2,0,2,0,{vis:!1});let a=vn(n,t,e);if(Bt()<.5){It(a,i,2,s,0,1,0,yt(r)),It(a,i+.03,.04,s+.03,0,2.01,0,yt(10989757));for(let o of[-1,1])for(let l=0;l<4;l++)It(a,i-.08,.012,.01,0,.45+l*.45,o*(s/2+.005),yt(3817803)),It(a,.16,.025,.02,0,.62+l*.45,o*(s/2+.01),yt(14014943))}else{let o=yt(10123862);It(a,i,2,.03,0,1,0,o),It(a,.04,2,s,-i/2+.02,1,0,o),It(a,.04,2,s,i/2-.02,1,0,o);for(let l=0;l<5;l++)It(a,i,.035,s,0,.03+l*.49,0,o);for(let l of[-1,1])for(let c=0;c<4;c++){let u=-i/2+.08;for(;u<i/2-.1;){let h=.04+Bt()*.05,f=.28+Bt()*.12;It(a,h,f,s*.38,u+h/2,.05+c*.49+f/2,l*s*.22,yt(Bc([14241850,3829413,15909198,4889194,15263976,8018598]))),u+=h+.012}}}Xi(n,t,e,i+.9,s+.9)}function Gs(n,t,e,i=!0){Ii(n,t-.3,e-.3,t+.3,e+.3,0,.45,0,{sight:!1,vis:!1});let s=vn(n,t,e);Mn(s,Qn(.26,.19,.45,10),yt(Bc([11823423,15131094,3883602])),0,.225,0),Mn(s,Qn(.25,.25,.02,10),yt(3811868),0,.45,0),Mn(s,Qn(.03,.04,.5,5),yt(7031338),0,.7,0);let r=[3116874,4171354,2587199];Mn(s,co(.34,0),yt(r[0],{flatShading:!0}),0,.85,0),Mn(s,co(.27,0),yt(r[1],{flatShading:!0}),.12,1.15,.05),Mn(s,co(.24,0),yt(r[2],{flatShading:!0}),-.12,1.3,-.04),i&&Mn(s,co(.2,0),yt(r[1],{flatShading:!0}),.05,1.5,.05),Xi(n,t,e,1.1,1.1)}var u0=new De({color:16776166});function Tv(n,t,e){let i=vn(n,t,e);It(i,1.72,.06,.72,0,3.77,0,yt(13620442));let s=new pt(Vr(1.54,.02,.54),u0);s.position.set(0,3.735,0),i.add(s)}function Yp(n,t,e,i,s){let a=yt(8021330),o=yt(15001579);t==="x"&&(ys(n,i,e-.34/2,s,e+.34/2,2.55,3.8,0,o),ys(n,i-.05,e-.34/2-.02,i+.04,e+.34/2+.02,0,2.55,0,a),ys(n,s-.04,e-.34/2-.02,s+.05,e+.34/2+.02,0,2.55,0,a),ys(n,i-.05,e-.34/2-.02,s+.05,e+.34/2+.02,2.47,2.57,0,a))}function un(n,t,e,i=2){let s={N:[e,-14.835,0],S:[e,14.835,Math.PI],W:[-19.835,e,Math.PI/2],E:[19.835,e,-Math.PI/2]}[t],r=vn(n,s[0],s[1],s[2]),a=2,o=2.05,l=yt(15856629),c=new hn(i,a),u=c.attributes.uv,h=Bt()*.5;for(let d=0;d<u.count;d++)u.setX(d,h+u.getX(d)*.5);let f=new pt(c,Zr(He.city));f.position.set(0,o,.004),r.add(f),It(r,i+.16,.08,.06,0,o+a/2+.04,.02,l),It(r,i+.16,.08,.06,0,o-a/2-.04,.02,l),It(r,.08,a,.06,-i/2-.04,o,.02,l),It(r,.08,a,.06,i/2+.04,o,.02,l),It(r,.05,a,.05,0,o,.02,l),It(r,i,.05,.05,0,o+.1,.02,l),It(r,i+.3,.05,.16,0,o-a/2-.09,.08,l)}function wv(){let n={A:7175838,B:7311218,K:14278114,C:16777215,D:7044771,S:13157044},t=new pt(new hn(ce,pi),yt(2830392));t.rotation.x=-Math.PI/2,Ue.add(t);let e=[[-20,-15,2,15],[6,-15,20,15],[2,-15,6,2],[2,12,6,15]];for(let h of e){let f=new pt(new ke(h[2]-h[0],.2,h[3]-h[1]),yt(10133931));f.position.set((h[0]+h[2])/2,ue-.1,(h[1]+h[3])/2),Ue.add(f),qp(ue-.205,h[0],h[1],h[2],h[3])}qp(ue*2-.205,-20,-15,20,15);let i=new pt(new hn(ce,pi),yt(13488856));i.rotation.x=Math.PI/2,i.position.y=ue*2-.2,Ue.add(i);for(let h=0;h<2;h++){let f=h===0?.015:.02;di(h,-20,-2,20,2,n.K,f,He.vinyl),di(h,-20,-15,-4,-2,n.A,f,He.carpet),di(h,-4,-15,8,-2,16777215,f,He.tile,1),di(h,8,-15,20,-2,n.B,f,He.carpet),di(h,-20,2,-6,15,n.C,f,He.wood),di(h,6,2,20,15,n.D,f,He.carpet),h===0?di(h,-6,2,6,15,n.S,f,He.vinyl):(di(h,-6,2,2,15,n.S,f,He.vinyl),di(h,2,12,6,15,n.S,f,He.vinyl)),di(h,-17.8,5.7,-9.2,11,4016742,f+.01,He.carpet),di(h,-13.5,-1,-6.5,1,9059131,f+.01,He.carpet),Pn(h,-20,-15,20,-15,.3,14672872),Pn(h,-20,15,20,15,.3,14672872),Pn(h,-20,-15,-20,15,.3,14672872),Pn(h,20,-15,20,15,.3,14672872);for(let y of[[-20,-14],[-11,5],[7.5,12],[15,20]])Pn(h,y[0],-2,y[1],-2);for(let y of[[-14,-11],[5,7.5],[12,15]])Yp(h,"x",-2,y[0],y[1]);for(let y of[[-20,-14],[-11,-6],[6,12],[15,20]])Pn(h,y[0],2,y[1],2);for(let y of[[-14,-11],[12,15]])Yp(h,"x",2,y[0],y[1]);Pn(h,-4,-15,-4,-2),Pn(h,8,-15,8,-2),Pn(h,-6,2,-6,15),Pn(h,6,2,6,15),Pn(h,2,2,2,12,.3,13481100),h===0?Pn(h,2,2,6,2,.3,13481100):Pn(h,2,12,6,12,.3,13481100);for(let y of[-2,0,2,4])Pn(h,y,-15,y,-9,.12,9418956);let d=yt(16185594),g=yt(14870250);for(let y of[-3,-1,1,3]){Ii(h,y-.25,-14.9,y+.25,-14.4,0,.45,0,{sight:!1,vis:!1});let p=vn(h,y,-14.2);It(p,.46,.5,.2,0,.62,-.62,d),Mn(p,Qn(.22,.16,.4,12),d,0,.2,-.28).scale.set(1,1,1.35),Mn(p,Qn(.24,.24,.05,14),g,0,.42,-.26).scale.set(1,1,1.3),Xi(h,y,-14.2,1.2,1.3)}for(let y of[-2,0,2,4]){let p=vn(h,y+.12,-8.55,-.2);It(p,.04,1.75,.92,0,.95,0,yt(8368840))}for(let y of[-3,-1,1,3])Wc.push({f:h,x:y,z:-12.6,type:"stall"});for(let y of[-12,-10,-8]){Ii(h,7.2,y-.35,7.8,y+.35,.7,.95,0,{sight:!1,vis:!1});let p=vn(h,7.55,y,0);It(p,.5,.06,.62,0,.9,0,d),It(p,.34,.025,.46,0,.93,0,yt(13227742)),It(p,.14,.7,.14,.12,.35,0,d),It(p,.03,.12,.03,.2,1.02,0,yt(12173512)),It(p,.1,.025,.025,.16,1.07,0,yt(12173512)),It(p,.03,.96,.7,.3,1.58,0,yt(2830134)),It(p,.012,.9,.64,.28,1.58,0,yt(11130092)),Xi(h,7.5,y,1.2,1.1)}ys(h,7.55,-14.5,7.95,-14.1,0,.5,12107976),Gn(h,"\u5EC1\u6240 WC",6.25,2.9,-1.83,0,1.6,.45,"#1d8a6a"),Gn(h,h===0?"1F":"2F",0,3.1,-1.83,0,1,.5,"#b03a2e"),Gn(h,"\u6A13\u68AF "+(h===0?"\u2191":"\u2193"),-1,2.9,1.83,Math.PI,1.6,.45,"#c9811e"),Gn(h,"\u4E3B\u7BA1\u51FA\u6C92\u6CE8\u610F",17.5,2.6,1.83,Math.PI,2,.45,"#8a1c1c"),Gn(h,"\u8FA6\u516C\u5BA4 A",-12.5,2.9,-1.83,0,1.6,.4,"#36506e"),Gn(h,"\u8FA6\u516C\u5BA4 B",13.5,2.9,-1.83,0,1.6,.4,"#36506e"),Gn(h,"\u6703\u8B70\u5BA4",-12.5,2.9,1.83,Math.PI,1.6,.4,"#6e3650"),Gn(h,"\u8FA6\u516C\u5BA4 D",13.5,2.9,1.83,Math.PI,1.6,.4,"#36506e");for(let y of[-13,-9])for(let p of[-18.5,-15.5,-12.5,-9.5,-6.5])Uu(h,p,y);Kn(h,-19.5,-6.5),Kn(h,-19.5,-5.2),Kn(h,-4.7,-14.5),Gs(h,-5,-3.2),Wi(h,He.cork,-19.835,1.7,-3.2,Math.PI/2,2.2,1.1),Gn(h,"\u672C\u6708\u696D\u7E3E 120%",-14.5,2.5,-14.83,0,1.8,.5,"#8a1c1c"),Gn(h,"\u52A0\u73ED\u662F\u798F\u5831",-9.5,2.5,-14.83,0,1.5,.5,"#2f6f4f");for(let y of[-17,-12,-7])un(h,"N",y);un(h,"W",-11),un(h,"W",-8);for(let y of[-12,-8])for(let p of[10.5,13.5,16.5])Uu(h,p,y);Kn(h,19.5,-10),Kn(h,19.5,-8.7),Kn(h,9,-14.5,1.4),Gs(h,19,-3.3);for(let y of[11.5,16.5])un(h,"N",y);un(h,"E",-11.5),un(h,"E",-6),Wi(h,He.white,8.17,1.7,-4.2,Math.PI/2,2,1),Ii(h,-15.2,7.6,-11.8,9,0,.78,0,{sight:!1,vis:!1});{let y=vn(h,-13.5,8.3),p=yt(7031346);It(y,3.4,.07,1.4,0,.745,0,p),It(y,.18,.72,1,-1.1,.36,0,yt(3817291)),It(y,.18,.72,1,1.1,.36,0,yt(3817291)),It(y,.34,.015,.24,-.6,.79,.15,yt(13620185)),It(y,.34,.2,.01,-.6,.89,.03,yt(2106668)),It(y,.3,.17,.004,-.6,.89,.036,Zr(He.scr[3]));let x=It(y,.22,.015,.3,.7,.785,-.2,yt(16053488));x.rotation.y=.4,Mn(y,Qn(.04,.035,.1,8),yt(14241850),.2,.83,.2),Xi(h,-13.5,8.3,4.3,2.4)}[-14.8,-13.5,-12.2].forEach((y,p)=>{Vu(h,y,6.95,Math.PI,Wu[p%5]),Vu(h,y,9.65,0,Wu[(p+2)%5])}),Kn(h,-18,14.5),Kn(h,-16.5,14.5),Kn(h,-8,14.5,1.4),Gs(h,-19,3.4),Gs(h,-7,3.4),Wi(h,He.white,-19.835,1.65,8.5,Math.PI/2,3.2,1.6),un(h,"W",4.4),un(h,"W",12.6),un(h,"S",-13),un(h,"S",-10.5);{let y=vn(h,-6.18,5.2,-Math.PI/2);It(y,1.5,.9,.05,0,1.75,0,yt(1382429));let p=new pt(new hn(1.4,.8),Zr(He.scr[3]));p.position.set(0,1.75,.03),y.add(p)}for(let y of[8,12.3])for(let p of[9.5,12.5,15.5,18.5])Uu(h,p,y);Kn(h,19.5,5),Kn(h,7,14.5,1);for(let y of[10.5,14.5,18.5])un(h,"S",y);un(h,"E",8.5),un(h,"E",3.6),Wi(h,He.cork,6.17,1.7,5,Math.PI/2,1.8,1),Gs(h,-5,14),Kn(h,-1,14.5,1.6),un(h,"S",3.4),un(h,"S",-3.4),Ii(h,-19.2,.9,-18.2,1.6,0,1.1,0,{sight:!1,vis:!1});{let y=vn(h,-18.7,1.25),p=yt(15265008);It(y,.9,1.05,.6,0,.5,0,p),Mn(y,Qn(.19,.19,.45,12),new Hi({color:8308991,transparent:!0,opacity:.7}),0,1.27,0),It(y,.12,.05,.05,-.2,.75,.31,yt(3837913)),It(y,.12,.05,.05,.2,.75,.31,yt(14241850)),Xi(h,-18.7,1.25,1.8,1.5)}Ii(h,16.6,1,17.8,1.7,0,1,0,{sight:!1,vis:!1});{let y=vn(h,17.2,1.35),p=yt(14672872);It(y,1.2,.9,.7,0,.45,0,p),It(y,1.2,.12,.7,0,.96,0,yt(7041920)),It(y,.5,.05,.25,.3,1.04,.1,yt(2830392)).rotation.x=-.4,It(y,.9,.04,.02,0,.35,.36,yt(3817803)),Xi(h,17.2,1.35,2.2,1.7)}Gs(h,19,-1.2),Gs(h,-19,-1.2),Wi(h,ao(0),-8,1.8,-1.84,0,.9,1.2),Wi(h,ao(1),-4.5,1.8,-1.84,0,.9,1.2),Wi(h,ao(2),10,1.8,1.84,Math.PI,.9,1.2),Wi(h,ao(3),8,1.8,-1.84,0,.9,1.2),Wi(h,ao(h+1),-16,1.8,1.84,Math.PI,.9,1.2);{let y=vn(h,-10,1.8,Math.PI);Mn(y,Qn(.08,.08,.45,8),yt(12859438),0,.55,.02),It(y,.1,.1,.08,0,.88,.02,yt(2236962)),Gn(h,"\u6EC5\u706B\u5668",-10,1.2,1.84,Math.PI,.4,.2,"#c4382e")}Gn(h,"\u7DCA\u6025\u51FA\u53E3",-19.82,3.45,0,Math.PI/2,1,.3,"#1f8f4a"),Gn(h,"\u7DCA\u6025\u51FA\u53E3",19.82,3.45,0,-Math.PI/2,1,.3,"#1f8f4a"),un(h,"W",0,2.4),un(h,"E",0,2.4);for(let y of[-16,-8,0,8,16])for(let p of[-10,0,10]){if(y===0&&p===10)continue;Tv(h,y,p);let x=3.4;h===1&&y+x>2&&y-x<6&&p+x>2&&p-x<12||l0.push({f:h,x:y,z:p,r:x})}}let s=20,r=10/s,a=yt(9272940),o=yt(12562070),l=yt(14727242);for(let h=0;h<s;h++){let f=$i.z2-r*(h+1),d=$i.z2-r*h,g=ue*(h+.5)/s,y=new pt(Vr(3.7,g,r),a);y.position.set(4,g/2,(f+d)/2),Ue.add(y);let p=new pt(Vr(3.7,.025,r),o);p.position.set(4,g+.0125,(f+d)/2),Ue.add(p);let x=new pt(Vr(3.7,.03,.06),l);x.position.set(4,g+.03,d-.03),Ue.add(x)}let c=Math.hypot(10,ue),u=Math.atan2(ue,10);for(let h of[2.25,5.75]){let f=new pt(Qn(.035,.035,c,6),yt(10134446));f.rotation.x=Math.PI/2+u,f.position.set(h,ue/2+.95,7),Ue.add(f)}Av(),Rv()}function $p(n,t){let e=[],i=[],s=[];n.forEach((a,o)=>{let l=t(a),c=a.x-a.w/2,u=a.x+a.w/2,h=a.z-a.d/2,f=a.z+a.d/2;e.push(c,l,f,u,l,f,u,l,h,c,l,h),i.push(0,0,1,0,1,1,0,1),s.push(o*4,o*4+1,o*4+2,o*4,o*4+2,o*4+3)});let r=new me;return r.setAttribute("position",new ee(e,3)),r.setAttribute("uv",new ee(i,2)),r.setIndex(s),r}function Av(){let n=new pt($p(o0,i=>i.f*ue+.04),new De({map:Vp("shadow"),transparent:!0,depthWrite:!1,opacity:.8}));n.renderOrder=2,Ue.add(n);let t=l0.map(i=>({f:i.f,x:i.x,z:i.z,w:i.r*2,d:i.r*2})),e=new pt($p(t,i=>i.f*ue+.05),new De({map:Vp("glow"),transparent:!0,depthWrite:!1,blending:Lr,opacity:.55}));e.renderOrder=3,Ue.add(e),Gu=e}function Rv(){Ue.updateMatrixWorld(!0);let n=new Map,t=[];Ue.traverse(i=>{if(!i.isMesh||i.material.transparent)return;t.push(i);let s=i.matrixWorld.elements,r=`${i.material.uuid}|${s[13]>=ue-.5?1:0}|${s[12]<-7?0:s[12]<7?1:2}`,a=n.get(r);a||n.set(r,a={mat:i.material,geos:[]});let o=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&o.deleteAttribute(l);o.applyMatrix4(i.matrixWorld),a.geos.push(o)});let e=[];Ue.traverse(i=>{i.isMesh&&i.material.transparent&&i.parent!==Ue&&e.push(i)});for(let i of e)Ue.attach(i);for(let i of t)i.parent.remove(i);for(let i of Ue.children.filter(s=>s.isGroup))Ue.remove(i);for(let i of n.values()){let s=Lp(i.geos,!1);for(let a of i.geos)a.dispose();if(!s)continue;s.computeBoundingSphere();let r=new pt(s,i.mat);r.matrixAutoUpdate=!1,Ue.add(r)}}wv();function Cv(n,t,e){for(let i=0;i<3;i++)for(let s of Vc[n]){let r=an(t.x,s.x1,s.x2),a=an(t.z,s.z1,s.z2),o=t.x-r,l=t.z-a,c=o*o+l*l;if(c<e*e)if(c>1e-8){let u=Math.sqrt(c);t.x=r+o/u*e,t.z=a+l/u*e}else{let u=t.x-s.x1,h=s.x2-t.x,f=t.z-s.z1,d=s.z2-t.z,g=Math.min(u,h,f,d);g===u?t.x=s.x1-e:g===h?t.x=s.x2+e:g===f?t.z=s.z1-e:t.z=s.z2+e}}}function Iv(n,t,e,i,s){let r=0,a=1,o=e-n,l=i-t,c=[-o,o,-l,l],u=[n-s.x1,s.x2-n,t-s.z1,s.z2-t];for(let h=0;h<4;h++)if(c[h]===0){if(u[h]<0)return!1}else{let f=u[h]/c[h];if(c[h]<0){if(f>a)return!1;f>r&&(r=f)}else{if(f<r)return!1;f<a&&(a=f)}}return!0}function $s(n,t,e,i,s){for(let r of yo[n])if(Iv(t,e,i,s,r))return!1;return!0}var vs=(n,t,e)=>_o(n,t)?2:e>=2.2?1:0,Xu=n=>an(Math.floor(n-fo),0,ce-1),qu=n=>an(Math.floor(n-po),0,pi-1),Qu=n=>n+fo+.5,ju=n=>n+po+.5,Kr=[new Uint8Array(rn),new Uint8Array(rn),new Uint8Array(rn)];function Pv(){for(let n=0;n<2;n++)for(let t=0;t<pi;t++)for(let e=0;e<ce;e++){let i=Qu(e),s=ju(t),r=e>0&&e<ce-1&&t>0&&t<pi-1;if(r&&i>2&&i<6&&s>2&&s<12&&(r=!1),r)for(let a of Vc[n]){let o=an(i,a.x1,a.x2),l=an(s,a.z1,a.z2);if((i-o)**2+(s-l)**2<.45*.45){r=!1;break}}Kr[n][t*ce+e]=r?1:0}for(let n=17;n<=26;n++)for(let t of[23,24])Kr[2][n*ce+t]=1}Pv();var f0=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];function d0(n,t){t.length=0;let e=n/rn|0,i=n%rn,s=i/ce|0,r=i%ce,a=Kr[e];for(let[o,l,c]of f0){let u=r+o,h=s+l;u<0||h<0||u>=ce||h>=pi||a[h*ce+u]&&(o!==0&&l!==0&&(!a[s*ce+u]||!a[h*ce+r])||t.push(e*rn+h*ce+u,c))}e===0&&s===27&&(r===23||r===24)&&t.push(2*rn+26*ce+r,1),e===1&&s===16&&(r===23||r===24)&&t.push(2*rn+17*ce+r,1),e===2&&s===26&&t.push(0*rn+27*ce+r,1),e===2&&s===17&&t.push(1*rn+16*ce+r,1)}function Yu(n,t,e){if(Kr[n][e*ce+t])return n*rn+e*ce+t;for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++){if(Math.max(Math.abs(r),Math.abs(s))!==i)continue;let a=t+r,o=e+s;if(!(a<0||o<0||a>=ce||o>=pi)&&Kr[n][o*ce+a])return n*rn+o*ce+a}return-1}var Nc=[];function p0(n,t,e,i,s,r){let a=Yu(e,Xu(n),qu(t)),o=Yu(r,Xu(i),qu(s));if(a<0||o<0)return null;let l=o%rn,c=l%ce,u=l/ce|0,h=new Map,f=new Map,d=new Set,g=[],y=(S,E)=>{g.push([S,E]);let R=g.length-1;for(;R>0;){let m=R-1>>1;if(g[m][0]<=g[R][0])break;[g[m],g[R]]=[g[R],g[m]],R=m}},p=()=>{let S=g[0],E=g.pop();if(g.length){g[0]=E;let R=0;for(;;){let m=2*R+1,T=m+1,A=R;if(m<g.length&&g[m][0]<g[A][0]&&(A=m),T<g.length&&g[T][0]<g[A][0]&&(A=T),A===R)break;[g[A],g[R]]=[g[R],g[A]],R=A}}return S},x=S=>{let E=S%rn;return Math.hypot(E%ce-c,(E/ce|0)-u)};h.set(a,0),y(x(a),a);let v=!1;for(;g.length;){let[,S]=p();if(!d.has(S)){if(S===o){v=!0;break}d.add(S),d0(S,Nc);for(let E=0;E<Nc.length;E+=2){let R=Nc[E],m=h.get(S)+Nc[E+1];d.has(R)||(!h.has(R)||m<h.get(R))&&(h.set(R,m),f.set(R,S),y(m+x(R),R))}}}if(!v)return null;let M=[],_=o;for(;_!==a;){let S=_%rn;M.push({x:Qu(S%ce),z:ju(S/ce|0),l:_/rn|0}),_=f.get(_)}return M.reverse()}var Ms=[],go=[];(function(){let n=Yu(0,Xu(-18.5),qu(.5)),t=new Set([n]),e=[n],i=[];for(;e.length;){let s=e.pop();d0(s,i);for(let r=0;r<i.length;r+=2)t.has(i[r])||(t.add(i[r]),e.push(i[r]))}for(let s of t){let r=s/rn|0;if(r===2)continue;let a=s%rn,o=a%ce,l=a/ce|0,c=Qu(o),u=ju(l),h={l:r,ix:o,iz:l,x:c,z:u};if(Ms.push(h),u<-2.5||u>2.5){let f=0;for(let[d,g]of f0){let y=o+d,p=l+g;(y<0||p<0||y>=ce||p>=pi||!Kr[r][p*ce+y])&&f++}f>=3&&go.push(h)}}})();var oo=null;function m0(){if(!oo)try{oo=new(window.AudioContext||window.webkitAudioContext)}catch{return null}return oo.state==="suspended"&&oo.resume(),oo}function fe(n,t,e="square",i=.15,s=.5,r=0){let a=m0();if(!a||i<=.002)return;let o=a.currentTime+r,l=a.createOscillator(),c=a.createGain();l.type=e,l.frequency.setValueAtTime(n,o),l.frequency.exponentialRampToValueAtTime(Math.max(30,n*s),o+t),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(.001,o+t),l.connect(c).connect(a.destination),l.start(o),l.stop(o+t+.02)}function g0(n,t){let e=n==="chi"?1.9:n==="poo"?1.3:.9;fe(520*e,.12,"sawtooth",.18*t,.45),fe(480*e,.1,"square",.1*t,.5,0)}var x0=()=>{fe(900,.12,"square",.2,1),fe(1300,.25,"square",.2,.8,.12)},_0=n=>{fe(1400,.35,"sine",.18*n,.1),fe(300,.3,"triangle",.12*n,3,.05)},Lv=()=>fe(700,.25,"sawtooth",.1,.25),Dv=()=>{fe(660,.12,"square",.15,1),fe(880,.12,"square",.15,1,.1),fe(1320,.25,"square",.15,1,.2)},Nv=()=>{fe(300,.6,"sawtooth",.25,.2)},y0={voice:!0};function v0(n,t=1){if(!(!y0.voice||!("speechSynthesis"in window)||t<.15))try{let e=new SpeechSynthesisUtterance(n);e.lang="zh-TW",e.pitch=1.9,e.rate=1.15,e.volume=an(t,0,1),speechSynthesis.cancel(),speechSynthesis.speak(e)}catch{}}function vo(n,t,e=.6){let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");s.font="bold 110px sans-serif",s.textAlign="center",s.textBaseline="middle",s.lineWidth=10,s.strokeStyle="#000",s.strokeText(n,64,70),s.fillStyle=t,s.fillText(n,64,70);let r=new Sr(new Is({map:new Ti(i),transparent:!0,depthTest:!1}));return r.scale.set(e,e,e),r}function Uv(n,t){let e=document.createElement("canvas");e.width=512,e.height=128;let i=e.getContext("2d");i.font="bold 72px sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=12,i.strokeStyle="#000",i.strokeText(n,256,68),i.fillStyle=t,i.fillText(n,256,68);let s=new Sr(new Is({map:new Ti(e),transparent:!0}));return s.scale.set(1,.25,1),s}function Fv(){let n=vo("!","#ff3b30",.7);return n.visible=!1,n.renderOrder=10,n}var Kt="menu",Ss=!1,I={pos:new U(-18.5,0,.5),yaw:-Math.PI/2,pitch:0,eye:1.6,noise:0,moving:!1,running:!1,sneaking:!1,netCd:0,bob:0,stamina:100,tired:!1,hidden:null,hideFrom:null,treats:2,baton:3,batonCd:0,shake:0},Re={sneak:0,net:0,radar:0},Xn=1,jn=0,Oc=0,Zi=0,qs="\u6355\u7378\u54E1",tf=[],Uc=0,Bv=!1,M0=-1,Pi=[],Ge=[],Wr=[],Xr=[],qr=[],Qr=[],Ys=[],ef=!1,Fu=0,fn={},ho=["\u9019\u9EDE\u5C0F\u4E8B\u4E0D\u7528\u554F\u6211","\u4F60\u5011\u8981\u61C2\u5411\u4E0A\u7BA1\u7406","\u9001\u8ACB\u8CFC\u55AE\u963F","\u4F60\u6C92\u5099\u8A3B\u8AB0\u770B\u5F97\u61C2?","\u4F60\u5728\u5E79\u4EC0\u9EBC\uFF0C\u4E3B\u7BA1\u90FD\u770B\u5728\u773C\u88E1","\u6211\u90FD\u4E0D\u77E5\u9053\u4F60\u5011\u5728\u5E79\u4EC0\u9EBC"],Zp=["\u6C6A\uFF5E\u6211\u53EA\u662F\u4F86\u6CE1\u5496\u5561\u7684","\u5225\u6293\u6211\uFF01\u6211\u9084\u6C92\u9818\u85AA\u6C34"],Jp=["\u547C\u5695\u2026\uFF08\u5348\u4F11\u4E2D\uFF09","\u6C6A\uFF1F\u6211\u5728\u958B\u6703\u5566"],S0="chihuahua_hunter_meta_v1";function Ov(){try{let n=JSON.parse(localStorage.getItem(S0));if(n)return{coins:n.coins|0,lv:n.lv||{},best:n.best|0}}catch{}return{coins:0,lv:{},best:0}}var on=Ov();function Mo(){try{localStorage.setItem(S0,JSON.stringify(on))}catch{}}var Wn=n=>on.lv[n]||0,Xc=0;function b0(n){return n=Math.max(1,Math.round(n*(1+.25*Wn("magnet")))),on.coins+=n,Xc+=n,n}function jr(n){jn+=n,b0(n/10)}var nf={baton:{name:"\u96FB\u64CA\u68D2\u96FB\u6C60",icon:"\u26A1",max:4,cost:n=>300+n*350,desc:n=>`\u6BCF\u95DC\u96FB\u64CA\u6B21\u6578 ${3+n} \u2192 ${4+n}`},stun:{name:"\u9AD8\u58D3\u96FB\u6D41",icon:"\u{1F4AB}",max:3,cost:n=>350+n*400,desc:n=>`\u6688\u7729\u6642\u9593 ${4+n} \u79D2 \u2192 ${5+n} \u79D2`},reach:{name:"\u52A0\u9577\u96FB\u64CA\u68D2",icon:"\u{1F4CF}",max:3,cost:n=>300+n*300,desc:n=>`\u63EE\u64CA\u8DDD\u96E2 ${(2.2+.4*n).toFixed(1)}m \u2192 ${(2.6+.4*n).toFixed(1)}m`},grace:{name:"\u8ACB\u5047\u689D",icon:"\u{1F4DD}",max:3,cost:n=>400+n*450,desc:n=>`\u88AB\u4E3B\u7BA1\u76EF\u4E0A\u7684\u5BB9\u5FCD\u6642\u9593 +${(.5*n).toFixed(1)} \u2192 +${(.5*n+.5).toFixed(1)} \u79D2`},treat:{name:"\u8089\u4E7E\u5B58\u91CF",icon:"\u{1F969}",max:3,cost:n=>250+n*250,desc:n=>`\u6BCF\u95DC\u8D77\u59CB\u8089\u4E7E ${2+n} \u2192 ${3+n}`},stam:{name:"\u904B\u52D5\u978B",icon:"\u{1F45F}",max:3,cost:n=>300+n*300,desc:n=>`\u885D\u523A\u9AD4\u529B\u6062\u5FA9 +${n*30}% \u2192 +${n*30+30}%`},magnet:{name:"\u8CA1\u795E\u723A",icon:"\u{1F4B0}",max:3,cost:n=>500+n*500,desc:n=>`\u91D1\u5E63\u6536\u5165 +${n*25}% \u2192 +${n*25+25}%`},sSneak:{name:"\u8D77\u59CB\u88DD\u5099\uFF1A\u975C\u6084\u6084",icon:"\u{1F43E}",max:1,cost:()=>1200,desc:()=>"\u6BCF\u6B21\u958B\u5C40\u76F4\u63A5\u64C1\u6709\u300C\u975C\u6084\u6084\u300DLv1"},sNet:{name:"\u8D77\u59CB\u88DD\u5099\uFF1A\u6355\u7378\u7DB2",icon:"\u{1F945}",max:1,cost:()=>1200,desc:()=>"\u6BCF\u6B21\u958B\u5C40\u76F4\u63A5\u64C1\u6709\u300C\u6355\u7378\u7DB2\u300DLv1"},sRadar:{name:"\u8D77\u59CB\u88DD\u5099\uFF1A\u96F7\u9054",icon:"\u{1F4E1}",max:1,cost:()=>1500,desc:()=>"\u6BCF\u6B21\u958B\u5C40\u76F4\u63A5\u64C1\u6709\u300C\u96F7\u9054\u300DLv1"}},zv=Object.keys(nf),E0="menu";function T0(){Tt("shopCoins").textContent=on.coins;let n=Tt("shopGrid");n.innerHTML="";for(let t of zv){let e=nf[t],i=Wn(t),s=i>=e.max,r=s?0:e.cost(i),a=!s&&on.coins>=r,o=document.createElement("div");o.className="sitem"+(s?" maxed":""),o.innerHTML=`<div class="sh"><span class="si">${e.icon}</span><b>${e.name}</b></div><div class="pips">${Array.from({length:e.max},(c,u)=>`<i class="${u<i?"on":""}"></i>`).join("")}</div><p>${s?"\u5DF2\u5347\u81F3\u6700\u9AD8\u7B49\u7D1A":e.desc(i)}</p>`;let l=document.createElement("button");l.className=a?"":"alt",l.disabled=s,l.textContent=s?"\u5DF2\u6EFF":`\u8CFC\u8CB7  \u{1F4B0} ${r}`,l.onclick=()=>w0(t),o.appendChild(l),n.appendChild(o)}}function w0(n){let t=nf[n],e=Wn(n);if(e>=t.max)return;let i=t.cost(e);if(on.coins<i){We("\u91D1\u5E63\u4E0D\u5920\uFF01",900),fe(200,.15,"square",.1,.6);return}on.coins-=i,on.lv[n]=e+1,Mo(),fe(880,.1,"triangle",.15,1.2),fe(1320,.2,"triangle",.15,1.2,.08),T0()}function sf(n){E0=n,pn(n),T0(),mn("shop")}var Zs={none:{name:"",desc:"\u6293\u5230\u8CB4\u8CD3\u72D7\u548C\u516B\u54E5\u72AC\uFF01",bonus:1},raid:{name:"\u7A81\u64CA\u6AA2\u67E5",desc:"\u7E3D\u90E8\u4F86\u8996\u5BDF\uFF0C\u5409\u5A03\u5A03\u591A\u4E86 2 \u96BB\u3001\u8996\u7DDA\u66F4\u9060\uFF01",vis:1.15,extraChi:2,bonus:1.4},nap:{name:"\u5348\u4F11\u6642\u9593",desc:"\u4E3B\u7BA1\u660F\u660F\u6B32\u7761\uFF0C\u52D5\u4F5C\u8B8A\u6162\uFF0C\u734E\u52F5\u7565\u5C11\u3002",chiSpeed:.78,bonus:.9},dark:{name:"\u505C\u96FB",desc:"\u71C8\u5168\u6EC5\u4E86\uFF01\u53EA\u5269\u624B\u96FB\u7B52\uFF0C\u4E3B\u7BA1\u8996\u7DDA\u4E5F\u7E2E\u77ED\u3002",vis:.8,dark:!0,bonus:1.5},party:{name:"\u72D7\u72D7\u6D3E\u5C0D",desc:"\u8CB4\u8CD3\u72D7\u548C\u516B\u54E5\u72AC\u5404 2 \u96BB\uFF0C\u5168\u90E8\u6293\u5149\u624D\u904E\u95DC\uFF01",crit:2,bonus:1.3},payday:{name:"\u767C\u85AA\u65E5",desc:"\u5730\u4E0A\u5230\u8655\u90FD\u662F\u91D1\u5E63\uFF0C\u91D1\u5E63\u6536\u5165 \xD72\uFF01",coinMul:2,coins:12,bonus:1}},Ve=Zs.none;function kv(n){return n<=1||Math.random()<.2?Zs.none:Zs[dn(["raid","nap","dark","party","payday"])]}function A0(){let n=!!Ve.dark;r0.intensity=n?.14:.8,a0.intensity=n?.1:.55,Ju.intensity=n?.04:.35,ku.intensity=n?2.1:.7,ku.distance=n?20:14,te.fog.near=n?6:16,te.fog.far=n?30:55,u0.color.setHex(n?2830134:16776166),Gu&&(Gu.visible=!n)}var Hv=()=>{fe(180,.15,"sawtooth",.2,.4),fe(120,.2,"square",.14,.5,.06)},R0=()=>{fe(140,.35,"sawtooth",.18,.5),fe(90,.3,"square",.12,.6,.12)},C0=()=>{fe(260,.07,"square",.1,.6),fe(220,.07,"square",.1,.6,.12),fe(240,.07,"square",.1,.6,.24)};function I0(n,t,e){let i=new Be,s=yt(6964006,{flatShading:!0}),r=yt(8081456,{flatShading:!0}),a=new pt(new On(.17,8,6),s);a.scale.y=.45,a.position.y=.06,i.add(a);let o=new pt(new On(.12,8,6),r);o.scale.y=.55,o.position.y=.16,i.add(o);let l=new pt(new Ns(.07,.14,7),s);l.position.y=.27,i.add(l);let c=vo("~","#9acd32",.32);c.position.y=.6,i.add(c),i.position.set(n,e*ue+.01,t),te.add(i),Pi.push({mesh:i,x:n,z:t,f:e,t:Math.random()*6,stink:c})}function Gv(n){let t=null,e=11;for(let i of Pi){if(Math.abs(i.f*ue-n.pos.y)>1.5||i.claimed&&i.claimed!==n&&!i.claimed.captured)continue;let s=Math.hypot(i.x-n.pos.x,i.z-n.pos.z);s<e&&$s(i.f,n.pos.x,n.pos.z,i.x,i.z)&&(e=s,t=i)}return t}function P0(n){te.remove(n.mesh);let t=Pi.indexOf(n);t>=0&&Pi.splice(t,1)}function Vv(n){let t=n.poop;t&&P0(t),n.poop=null,n.fat++,n.size=1+.3*n.fat,n.speedMul=1/(1+.55*n.fat),C0(),R0(),Li(n.pos.x,n.pos.y+.4,n.pos.z,10145074,14,2,.6,.15,1),n.fat>=3?(n.stuck=!0,n.state="stuck",n.path=[],wn(n,"\u6211\u2026\u5361\u4F4F\u4E86\u2026\u9019\u9EDE\u5C0F\u4E8B\u4E0D\u7528\u554F\u6211",!0),Math.hypot(n.pos.x-I.pos.x,n.pos.z-I.pos.z)<18&&We("\u5409\u5A03\u5A03\u5403\u592A\u6490\uFF0C\u5361\u4F4F\u52D5\u4E0D\u4E86\u4E86\uFF01",1600)):(n.state="patrol",n.waiting=!1,n.path=[],We(n.fat===1?"\u5409\u5A03\u5A03\u5403\u4E86\u5927\u4FBF\uFF0C\u8B8A\u80D6\u4E86\uFF01":"\u5409\u5A03\u5A03\u53C8\u80D6\u4E86\u4E00\u5708\uFF0C\u8D8A\u4F86\u8D8A\u6162\u2026",1300))}function Wv(n){n.digT=1.2,n.stunT=0,n.size=1,n.stuck=!1,n.path=[],R0(),D0(),I.shake=.7,jr(400),We("\u4E3B\u7BA1\u6D88\u5316\u4E86\uFF01\u5657\uFF5E\u7260\u8981\u88AB\u50B3\u9001\u8D70\u4E86",1400),Li(n.pos.x,n.pos.y+.5,n.pos.z,12116042,26,3.6,.8,.2,2),Li(n.pos.x,n.pos.y+.4,n.pos.z,8376575,16,3,.5,.16,1),wn(n,"\u5657\u2026",!0)}function Xv(n){zc(n.pos.x,n.pos.y,n.pos.z);let t=qi(Ms,18,I.pos,50);n.pos.set(t.x,t.l*ue,t.z),zc(n.pos.x,n.pos.y,n.pos.z),_0(.6),n.fat=0,n.size=1,n.sizeV=1,n.speedMul=1,n.stuck=!1,n.state="patrol",n.path=[],n.waiting=!1,n.pop=.1,n.teleT=Ne(8,12)}function qv(n,t,e){n.act="lie",n.path=[],n.sleepT-=t;let i=I.pos.x-n.pos.x,s=I.pos.z-n.pos.z,r=Math.hypot(i,s),a=Math.abs(I.pos.y-n.pos.y)<2.3;n.zzz||(n.zzz=vo("Z","#9fd3ff",.2),n.zzz.renderOrder=11,n.model.root.add(n.zzz));let o=e*.7%1;n.zzz.visible=!0,n.zzz.position.set(.12*Math.sin(e*2),n.model.height+.12+o*.4,0),n.zzz.material.opacity=1-o;let l=a&&(r<1.3||I.noise>0&&r<I.noise*.35);(l||n.sleepT<=0)&&(n.zzz.visible=!1,n.state="hide",n.actT=0,n.fleeCd=0,n.sleepCd=Ne(12,24),l&&wn(n,"\u6C6A\uFF01\uFF1F",!0))}function L0(n,t,e){if(n.digT>0)return n.digT-=t,n.act="sit",n.path=[],n.seesPlayer=!1,n.sprite&&(n.sprite.visible=!1),n.digT<=0&&Xv(n),!0;if(!(n.stunT>0))return!1;if(n.stunT-=t,n.act="lie",n.path=[],n.seesPlayer=!1,n.hop=0,n.waiting=!1,n.stars||(n.stars=[0,1,2].map(()=>{let i=vo("\u2605","#ffd24a",.13);return i.renderOrder=11,n.model.root.add(i),i})),n.stars.forEach((i,s)=>{let r=e*5+s*2.1;i.visible=!0,i.position.set(Math.cos(r)*.16,n.model.height+.2,Math.sin(r)*.16)}),n.sprite&&(n.sprite.visible=!1),n.stunT<=0)if(n.stars.forEach(i=>{i.visible=!1}),n.type==="chi"){n.state="investigate",n.lostT=0;let i=vs(I.pos.x,I.pos.z,I.pos.y);n.lastSeen={x:I.pos.x,z:I.pos.z,l:i},n.target=n.lastSeen,Yi(n,I.pos.x,I.pos.z,i),n.wait=0,wn(n,dn(["\u525B\u525B\u662F\u8AB0\u96FB\u6211\uFF1F","\u4F60\u6C92\u5099\u8A3B\u8AB0\u770B\u5F97\u61C2?"]),!0)}else n.state="hide",n.actT=0,n.fleeCd=0;return!0}var D0=()=>{fe(1800,.12,"sawtooth",.16,.2),fe(300,.2,"square",.14,.4,.04),fe(2400,.08,"square",.1,.3,.1)},Yv=()=>fe(500,.12,"triangle",.08,.3);function N0(n){let t=n.stunT>0,e=4+Wn("stun");D0(),I.shake=.9,Li(n.pos.x,n.pos.y+.35,n.pos.z,8376575,28,4.2,.65,.22,2),Li(n.pos.x,n.pos.y+.35,n.pos.z,16777215,12,2.2,.4,.14,0),n.type==="chi"&&n.fat>0?Wv(n):n.type==="chi"?(n.stunT=e+(t?2:0),jr(t?200:300),We(t?"\u9023\u7E8C\u96FB\u64CA\uFF01\u4E3B\u7BA1\u6688\u66F4\u4E45\u4E86":"\u96FB\u6688\u4E3B\u7BA1\uFF01\u5FEB\u6E9C\uFF01",1200)):t?(cf(n),n.stunT=0):(n.stunT=e,jr(100),n.fleeCd=99,We(`${Hr[n.type].name}\u6688\u4E86\uFF01\u518D\u96FB\u4E00\u6B21\u6216\u7528\u7DB2\u5C31\u80FD\u6293`,1500))}function qc(){if(Kt!=="playing"||I.hidden||I.batonCd>0)return;if(I.baton<=0){We("\u96FB\u64CA\u68D2\u6C92\u96FB\u4E86\uFF01\u4E0B\u4E00\u95DC\u5145\u96FB",1e3),I.batonCd=.5,fe(200,.1,"square",.1,.5);return}I.batonCd=.6,sn.swing=1,Yv();let n=2.2+.4*Wn("reach"),t=-Math.sin(I.yaw),e=-Math.cos(I.yaw),i=null,s=1e9;for(let r of Ge){if(r.captured||Math.abs(r.pos.y-I.pos.y)>1.6)continue;let a=r.pos.x-I.pos.x,o=r.pos.z-I.pos.z,l=Math.hypot(a,o);l>n+.3||l>.8&&(a*t+o*e)/l<.5||$s(ti(I.pos.y),I.pos.x,I.pos.z,r.pos.x,r.pos.z)&&l<s&&(s=l,i=r)}i&&(I.baton--,N0(i))}function $v(n){let t=new Be,e=new pt(new Fn(.17,.17,.035,18),new De({color:16763176}));e.rotation.x=Math.PI/2,t.add(e);let i=new pt(new Cn(.15,.02,6,18),new De({color:16773280}));t.add(i),t.position.set(n.x,n.l*ue+.5,n.z),te.add(t),Ys.push({mesh:t,x:n.x,z:n.z,f:n.l,t:Math.random()*6,kind:"coin"})}function Fc(n,t){let e=Nu(n),i={type:n,model:e,pos:new U(t.x,t.l===1?ue:0,t.z),heading:Ne(0,Math.PI*2),state:n==="chi"?"patrol":"hide",path:[],act:"idle",phase:Math.random()*6,seed:Math.random()*10,barkT:0,hop:0,hopMax:.6,wait:Ne(.5,3),quoteT:Ne(4,10),teleT:Ne(8,14),lostT:0,fat:0,size:1,sizeV:1,pop:1,speedMul:1,stuck:!1,poopT:Ne(6,13),sleepCd:Ne(7,15),dirtyT:0,repathT:0,hopT:Ne(5,12),fleeCd:0,captured:!1,capT:0,actT:0,lastSeen:null,scaleBase:1,sprite:null};i.model.root.position.copy(i.pos),te.add(i.model.root),n==="chi"&&(i.sprite=Fv(),i.sprite.position.y=e.height+.38,i.model.root.add(i.sprite),i.cone=vM());{let s=Uv(Hr[n].name,n==="chi"?"#ff6b4a":"#ffffff");s.position.y=e.height+.12,i.model.root.add(s)}return Ge.push(i),i}function rf(){for(let n of Ge)te.remove(n.model.root),n.cone&&(te.remove(n.cone),te.remove(n.cone.userData.curtain));Ge=[];for(let n of Pi)te.remove(n.mesh);Pi=[];for(let n of[...qr,...Qr,...Ys])te.remove(n.mesh);qr=[],Qr=[],Ys=[],sM();for(let n of Xr)te.remove(n.mesh);Xr=[]}function qi(n,t,e,i=60){for(let s=0;s<i;s++){let r=dn(n);if(!e)return r;let a=r.l*ue-e.y;if(Math.hypot(r.x-e.x,r.z-e.z)+Math.abs(a)*2>=t)return r}return dn(n)}function U0(n){Xn=n,Oc=0,Zi=0,Bv=!1,rf(),Ve=kv(n),window.__forceMod&&(Ve=Zs[window.__forceMod]),A0(),I.pos.set(-18.5,0,.5),I.yaw=-Math.PI/2,I.pitch=0,I.netCd=0,I.hidden=null,I.stamina=100,I.tired=!1,I.slipT=0,I.treats=2+Wn("treat"),I.baton=3+Wn("baton"),I.batonCd=0,ef=!1;let t={x:-18.5,z:.5,y:0},e=Math.min(Ae.CHI_MAX,Ae.CHI_BASE_COUNT+n-1)+(Ve.extraChi||0);for(let s=0;s<e;s++)Fc("chi",qi(Ms,22,t));for(let s=0;s<(Ve.crit||1);s++)Fc("poo",qi(go,9,t)),Fc("pug",qi(go,9,t));let i=Ms.filter(s=>s.z<-2.5||s.z>2.5);for(let s=0;s<4;s++)gM(qi(i,8,t));for(let s=0;s<(Ve.coins||6);s++)$v(qi(i,4,t));tf=[],Uc=0,We(`\u7B2C ${n} \u95DC${Ve.name?"\u3014"+Ve.name+"\u3015":""}
${Ve.desc}\u5C0F\u5FC3 ${e} \u96BB\u5409\u5A03\u5A03\u4E3B\u7BA1`,3600),G0()}function Zv(){Xn=1,jn=0,Xc=0,Re.sneak=Wn("sSneak"),Re.net=Wn("sNet"),Re.radar=Wn("sRadar"),Ae.SEEN_GRACE=2.5+.5*Wn("grace")}function We(n,t=2e3){let e=Tt("toast");e.textContent=n,e.style.opacity=1,clearTimeout(We._t),We._t=setTimeout(()=>e.style.opacity=0,t)}function $u(n,t){let e=n.pos.x-I.pos.x,i=n.pos.z-I.pos.z,s=Math.hypot(e,i),r=n.pos.y-I.pos.y;if(s>32)return 0;let a=-Math.sin(I.yaw),o=-Math.cos(I.yaw),l=Math.cos(I.yaw),c=-Math.sin(I.yaw),u=Math.atan2(e*l+i*c,e*a+i*o),f=["\u2191","\u2197","\u2192","\u2198","\u2193","\u2199","\u2190","\u2196"][(Math.round(u/(Math.PI/4))%8+8)%8],d=Math.abs(r)>2?r>0?"(\u6A13\u4E0A)":"(\u6A13\u4E0B)":"",g=Tt("sub");return g.textContent=`${Hr[n.type].name} ${f} ${Math.round(s)}m${d}\uFF1A\u300C${t}\u300D`,g.style.opacity=1,clearTimeout($u._t),$u._t=setTimeout(()=>g.style.opacity=0,2300),an(1-s/28,0,1)*(Math.abs(r)>2?.5:1)}function wn(n,t,e=!0){e&&(n.barkT=.9);let i=$u(n,t);e&&g0(n.type,i),n.type==="chi"&&v0(t,i)}function zc(n,t,e,i=11758591){let s=new pt(new Ba(.2,.35,24),new De({color:i,side:en,transparent:!0,opacity:.9,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(n,t+.05,e),te.add(s);let r=new pt(new Fn(.3,.3,2.2,12,1,!0),new De({color:i,transparent:!0,opacity:.4,side:en,depthWrite:!1}));r.position.set(n,t+1.1,e),te.add(r),Xr.push({mesh:s,beam:r,t:0})}function af(){return I.sneaking?Ae.SNEAK_VIS[Re.sneak]:I.running?1.3:1}function Jv(n){let t=I.pos.x-n.pos.x,e=I.pos.z-n.pos.z,i=I.pos.y-n.pos.y;if(Math.abs(i)>2.3)return!1;let s=Math.hypot(t,e);if(I.hidden)return s<1.5&&$s(ti(n.pos.y),n.pos.x,n.pos.z,I.pos.x,I.pos.z);let r=Ae.CHI_VISION*(Ve.vis||1)*af()*(n.state==="eat"||n.state==="munch"?.55:1);if(s>r)return!1;if(s>1.6){let a=Math.atan2(t,e);if(Math.abs(s0(n.heading,a))>Ae.CHI_FOV_HALF)return!1}return $s(ti(Math.max(n.pos.y,I.pos.y)),n.pos.x,n.pos.z,I.pos.x,I.pos.z)}function Yi(n,t,e,i){let s=p0(n.pos.x,n.pos.z,vs(n.pos.x,n.pos.z,n.pos.y),t,e,i);return n.path=s||[],!!s}function Vs(n,t,e){n.type==="chi"&&(e*=(Ve.chiSpeed||1)*n.speedMul);let i=!1;if(n.path.length){let r=n.path[0],a=r.x-n.pos.x,o=r.z-n.pos.z,l=Math.hypot(a,o);if(l<.22)n.path.shift();else{let c=Math.min(l,e*t);n.pos.x+=a/l*c,n.pos.z+=o/l*c;let u=Math.atan2(a,o);n.heading+=s0(n.heading,u)*Math.min(1,t*10),i=!0}}let s=Gc(n.pos.x,n.pos.z,n.pos.y);return n.pos.y=_o(n.pos.x,n.pos.z)?s:An(n.pos.y,s,Math.min(1,t*12)),i}function Kv(n,t=6){for(let e=0;e<8;e++){let i=qi(Ms,t,I.pos,20);if(Yi(n,i.x,i.z,i.l))return!0}return!1}function Qv(n,t,e){if(L0(n,t,e))return;let i=Jv(n);n.teleT-=t,n.quoteT-=t;let s=4.4+.25*(Xn-1);if(i&&n.stuck?n.quoteT<=0&&(n.quoteT=Ne(2,4),wn(n,dn(ho))):i&&(n.poop&&(n.poop.claimed=null,n.poop=null),n.state!=="chase"&&(x0(),wn(n,dn(ho)),n.quoteT=Ne(2,4)),n.state="chase",n.lostT=0,n.lastSeen={x:I.pos.x,z:I.pos.z,l:vs(I.pos.x,I.pos.z,I.pos.y)}),n.seesPlayer=i,i){let r=Math.hypot(I.pos.x-n.pos.x,I.pos.z-n.pos.z);n.seeRate=An(1.8,.6,an(r/(Ae.CHI_VISION*af()),0,1))}if(!i&&(n.state==="patrol"||n.state==="investigate"||n.state==="lured")&&I.noise>0&&Math.hypot(I.pos.x-n.pos.x,I.pos.z-n.pos.z)+Math.abs(I.pos.y-n.pos.y)*3<I.noise&&n.state!=="investigate"&&(n.state="investigate",n.target={x:I.pos.x,z:I.pos.z,l:vs(I.pos.x,I.pos.z,I.pos.y)},Yi(n,n.target.x,n.target.z,n.target.l),n.wait=0),n.dirtyT-=t,n.dirtyT<=0&&(n.dirtyT=.6,(n.state==="patrol"||n.state==="investigate")&&!n.stuck)){let r=Gv(n);r&&Yi(n,r.x,r.z,r.f)&&(n.state="clean",n.poop=r,r.claimed=n,wn(n,dn(["\u54EA\u88E1\u9019\u9EBC\u81ED\uFF1F","\u8AB0\u5728\u6211\u7684\u8FA6\u516C\u5BA4\u4E82\u62C9\uFF1F"]),!1))}if(n.teleT<=0&&n.state!=="eat"&&n.state!=="lured"&&!n.stuck&&n.fat<1&&n.state!=="clean"&&n.state!=="munch"){n.teleT=Math.max(5,Ne(9,16)-Xn);let r=vs(I.pos.x,I.pos.z,I.pos.y),a=null;if(n.state==="chase"&&Math.hypot(I.pos.x-n.pos.x,I.pos.z-n.pos.z)>16)for(let o=0;o<40&&!a;o++){let l=dn(Ms);if(l.l!==Math.min(r,1))continue;let c=Math.hypot(l.x-I.pos.x,l.z-I.pos.z);c>7&&c<13&&!$s(l.l,l.x,l.z,I.pos.x,I.pos.z)&&(a=l)}else n.state!=="chase"&&(a=qi(Ms,12,I.pos,40));if(a){let o=an(1-Math.hypot(n.pos.x-I.pos.x,n.pos.z-I.pos.z)/30,0,1);zc(n.pos.x,n.pos.y,n.pos.z),zc(a.x,a.l*ue,a.z),_0(o),n.pos.set(a.x,a.l*ue,a.z),n.path=[],n.repathT=0,n.state!=="chase"&&(n.state="patrol",n.wait=Ne(.5,1.5)),n.pop=.1}}if(Math.abs(n.pos.y-I.pos.y)<1.5&&Math.hypot(n.pos.x-I.pos.x,n.pos.z-I.pos.z)<.9*n.sizeV&&n.state==="chase"){W0("caught");return}if(n.state==="chase"){if(n.repathT-=t,n.repathT<=0){n.repathT=.4;let r=i?I.pos.x:n.lastSeen.x,a=i?I.pos.z:n.lastSeen.z,o=i?vs(I.pos.x,I.pos.z,I.pos.y):n.lastSeen.l;Yi(n,r,a,o)}Vs(n,t,s),n.act="run",i||(n.lostT+=t,n.lostT>4.5&&(n.state="investigate",n.target=n.lastSeen,Yi(n,n.target.x,n.target.z,n.target.l),n.wait=0)),n.quoteT<=0&&(n.quoteT=Ne(3,5),wn(n,dn(ho)))}else if(n.state==="stuck")n.act="idle",n.heading+=Math.sin(e*.6+n.seed)*t*1.1,n.quoteT<=0&&(n.quoteT=Ne(6,10),wn(n,dn(["\u6211\u2026\u5361\u4F4F\u4E86","\u4F60\u5011\u9084\u4E0D\u5FEB\u4F86\u5E6B\u6211\uFF1F","\u9019\u9EDE\u5C0F\u4E8B\u4E0D\u7528\u554F\u6211\u2026"])));else if(n.state==="clean")!n.poop||!Pi.includes(n.poop)?(n.state="patrol",n.poop=null,n.path=[],n.waiting=!1):n.path.length?(Vs(n,t,3),n.act="walk"):Math.hypot(n.poop.x-n.pos.x,n.poop.z-n.pos.z)<1.1?(n.state="munch",n.munchT=2.8,n.heading=Math.atan2(n.poop.x-n.pos.x,n.poop.z-n.pos.z),wn(n,"\u4F60\u5011\u6C92\u6709\u6211\u4E0D\u884C\uFF0C\u9084\u4E0D\u611F\u8B1D\u6211\u3002",!0)):Yi(n,n.poop.x,n.poop.z,n.poop.f)||(n.state="patrol",n.poop.claimed=null,n.poop=null);else if(n.state==="munch")n.act="eat",n.munchT-=t,n.munchSnd=(n.munchSnd||0)-t,n.munchSnd<=0&&(n.munchSnd=.5,C0()),n.munchT<=0&&Vv(n);else if(n.state==="investigate")n.path.length?(Vs(n,t,3.4),n.act="walk"):(n.act="idle",n.wait+=t,n.heading+=Math.sin(e*2+n.seed)*t*1.5,n.wait>2.5&&(n.state="patrol",n.wait=0,n.actT=0));else if(n.state==="lured")!n.lure||n.lure.gone?(n.state="patrol",n.path=[],n.waiting=!1):n.path.length?(Vs(n,t,3.2),n.act="walk"):(n.state="eat",n.eatT=5.5,n.heading=Math.atan2(n.lure.x-n.pos.x,n.lure.z-n.pos.z),Math.random()<.5&&wn(n,dn(["\u5148\u5403\u518D\u8AAA\uFF0C\u9019\u9EDE\u5C0F\u4E8B\u4E0D\u7528\u554F\u6211","\u9019\u8089\u4E7E\u8AB0\u7684\uFF1F\u6C92\u5099\u8A3B\u5594"]),!1));else if(n.state==="eat")n.act="eat",n.eatT-=t,(n.eatT<=0||!n.lure||n.lure.gone)&&(n.lure&&uf(n.lure),n.state="patrol",n.waiting=!1,n.path=[]);else{if(n.path.length)Vs(n,t,2),n.act="walk",n.waiting=!1;else{if(!n.waiting){n.waiting=!0,n.waitLeft=Ne(2,5);let r=Math.random();n.pose=r<.4?"sit":r<.55?"lie":"idle"}n.act=n.pose,n.waitLeft-=t,n.pose==="idle"&&(n.heading+=Math.sin(e*1.3+n.seed)*t*1.2),n.waitLeft<=0&&(n.waiting=!1,Kv(n,5))}if(n.quoteT<=0&&(n.quoteT=Ne(5,9),wn(n,dn(ho))),n.yapT=(n.yapT??Ne(1,3))-t,n.yapT<=0){n.yapT=Ne(1.8,4),n.barkT=.45;let r=Math.hypot(n.pos.x-I.pos.x,n.pos.z-I.pos.z);g0("chi",an(1-r/26,0,1)*(Math.abs(n.pos.y-I.pos.y)>2?.4:1))}}n.sprite&&(n.sprite.visible=n.state==="chase"||n.state==="investigate"||n.state==="lured",n.sprite.material.map=n.state==="chase"?Kp.bang:Kp.q)}var Kp=(()=>{let n=(t,e)=>vo(t,e).material.map;return{bang:n("!","#ff3b30"),q:n("?","#ffd24a")}})();function jv(n,t,e){if(L0(n,t,e))return;if(n.state==="sleep"){qv(n,t,e);return}let i=I.pos.x-n.pos.x,s=I.pos.z-n.pos.z,r=Math.abs(I.pos.y-n.pos.y),a=Math.hypot(i,s);n.fleeCd-=t,n.hopT-=t,n.quoteT-=t;let o=n.type==="poo"?5.4:4.2;if(n.hop>0){n.hop-=t;let c=1-n.hop/n.hopMax;n.model.root.position.y=n.pos.y+Math.sin(Math.PI*an(c,0,1))*.55}let l=r<2.3&&(a<7&&$s(ti(n.pos.y),n.pos.x,n.pos.z,I.pos.x,I.pos.z)||a<3.2||I.noise>0&&a<I.noise*.6);if((n.state==="eat"||n.state==="lured")&&(l=r<2.3&&a<(I.running?4:1.6)),I.hidden&&(l=l&&a<2),l&&n.state!=="flee"&&n.fleeCd<=0){n.state="flee",n.fleeCd=1.5;for(let c=0;c<6;c++){let u=qi(go,14,I.pos,30);if(Yi(n,u.x,u.z,u.l))break}Math.random()<.6&&wn(n,dn(n.type==="poo"?Zp:Jp)),n.hop=n.hopMax}n.state==="lured"?!n.lure||n.lure.gone?(n.state="hide",n.path=[]):n.path.length?(Vs(n,t,n.type==="pug"?3:3.6),n.act="walk"):(n.state="eat",n.eatT=n.type==="pug"?8:5,n.heading=Math.atan2(n.lure.x-n.pos.x,n.lure.z-n.pos.z)):n.state==="eat"?(n.act="eat",n.eatT-=t,(n.eatT<=0||!n.lure||n.lure.gone)&&(n.lure&&uf(n.lure),n.state="hide",n.actT=0)):n.state==="poop"?(n.act="sit",n.pooT-=t,n.heading+=Math.sin(e*25)*t*.6,n.pooT<=0&&(I0(n.pos.x-Math.sin(n.heading)*.45,n.pos.z-Math.cos(n.heading)*.45,ti(n.pos.y)),n.state="hide",n.actT=0,n.poopT=Ne(12,24),a<14&&r<2.3&&We("\u516B\u54E5\u72AC\u5728\u5730\u4E0A\u7559\u4E0B\u4E86\u4E00\u5768\u2026",1300))):n.state==="flee"?(Vs(n,t,o),n.act="run",n.path.length||(n.state="hide",n.actT=0,n.fleeCd=.8),n.hopT<=0&&n.hop<=0&&(n.hopT=Ne(2,4),n.hop=n.hopMax)):(n.actT-=t,n.type==="poo"&&n.state==="hide"&&(n.sleepCd-=t,n.sleepCd<=0&&a>5&&(n.state="sleep",n.sleepT=Ne(9,17),a<14&&r<2.3&&We("\u5C0F\u578B\u8CB4\u8CD3\u72D7\u7761\u8457\u4E86\u2026\u975C\u6084\u6084\u9760\u8FD1\u7260\uFF01",1500))),n.type==="pug"&&n.state==="hide"&&(n.poopT-=t,n.poopT<=0&&a>4&&(n.state="poop",n.pooT=2.4)),n.actT<=0&&(n.actT=Ne(3,7),n.act=dn(["sit","lie","idle","sit"])),n.hopT<=0&&n.hop<=0&&(n.hopT=Ne(6,12),n.hop=n.hopMax),n.quoteT<=0&&(n.quoteT=Ne(6,12),wn(n,dn(n.type==="poo"?Zp:Jp))),n.act==="idle"&&(n.heading+=Math.sin(e+n.seed)*t*.8)),n.hop<=0&&(n.model.root.position.y=n.pos.y)}var Bu=null,lo=null;function tM(){if(Bu)return Bu;let[n,t]=qn(256,256);t.fillStyle="rgba(255,240,200,.15)",t.beginPath(),t.arc(128,128,122,0,7),t.fill(),t.save(),t.beginPath(),t.arc(128,128,121,0,7),t.clip(),t.strokeStyle="rgba(255,248,228,.95)",t.lineWidth=2.4;for(let e=-256;e<=512;e+=26)t.beginPath(),t.moveTo(e,0),t.lineTo(e+256,256),t.stroke(),t.beginPath(),t.moveTo(e,256),t.lineTo(e+256,0),t.stroke();return t.restore(),t.strokeStyle="#ffb43a",t.lineWidth=8,t.beginPath(),t.arc(128,128,121,0,7),t.stroke(),Bu=Ln(n,!1)}function eM(){if(lo)return lo;let[n,t]=qn(64,64);return t.fillStyle="rgba(255,236,190,.16)",t.fillRect(0,0,64,64),t.strokeStyle="rgba(255,248,230,.98)",t.lineWidth=3.2,t.beginPath(),t.moveTo(0,0),t.lineTo(64,64),t.moveTo(0,64),t.lineTo(64,0),t.stroke(),lo=Ln(n,!0),lo.repeat.set(5,3),lo}var nM=(()=>{let[n,t]=qn(32,32),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Ln(n,!1)})(),Yr=[],xo=[];function Li(n,t,e,i,s=24,r=3.5,a=.8,o=.18,l=4){let c=new Float32Array(s*3),u=[];for(let g=0;g<s;g++){c[g*3]=n,c[g*3+1]=t,c[g*3+2]=e;let y=Math.random()*6.283,p=Math.random()*1.3-.2,x=r*(.4+Math.random()*.8);u.push(Math.cos(y)*Math.cos(p)*x,Math.sin(p)*x+1,Math.sin(y)*Math.cos(p)*x)}let h=new me;h.setAttribute("position",new Me(c,3));let f=new Tr({map:nM,color:i,size:o,transparent:!0,depthWrite:!1,blending:Lr}),d=new ba(h,f);d.frustumCulled=!1,te.add(d),Yr.push({pts:d,pos:c,vel:u,t:0,life:a,grav:l,n:s,mat:f,geo:h})}function iM(n){for(let t=Yr.length-1;t>=0;t--){let e=Yr[t];e.t+=n;for(let i=0;i<e.n;i++)e.vel[i*3+1]-=e.grav*n,e.pos[i*3]+=e.vel[i*3]*n,e.pos[i*3+1]+=e.vel[i*3+1]*n,e.pos[i*3+2]+=e.vel[i*3+2]*n;e.geo.attributes.position.needsUpdate=!0,e.mat.opacity=Math.max(0,1-e.t/e.life),e.t>=e.life&&(te.remove(e.pts),e.geo.dispose(),e.mat.dispose(),Yr.splice(t,1))}}function sM(){for(let n of Wr)te.remove(n.mesh),n.web.material.dispose();Wr=[];for(let n of Yr)te.remove(n.pts),n.geo.dispose(),n.mat.dispose();Yr.length=0;for(let n of xo)te.remove(n.mesh),n.mesh.material.dispose();xo.length=0}var rM=new Ds(1,28),aM=new On(.075,8,6),oM=new On(.1,10,8),lM=new On(1,18,12),cM=yt(16757818),hM=yt(15128232);function uM(){let n=new Be,t=new pt(rM,new De({map:tM(),transparent:!0,side:en,depthWrite:!1}));for(let i=0;i<8;i++){let s=i/8*Math.PI*2,r=new pt(aM,cM);r.position.set(Math.cos(s),Math.sin(s),0),t.add(r)}let e=new pt(oM,hM);return n.add(t,e),t.scale.setScalar(.12),{grp:n,web:t,ball:e}}var F0=3.5;function of(){let n=Re.net,t=new U(I.pos.x,I.pos.y+I.eye,I.pos.z),e=new U(0,0,-1).applyEuler(new Un(I.pitch,I.yaw,0,"YXZ")),i=null,s=1e9;for(let r of Ge){if(r.captured||r.type==="chi")continue;let a=new U(r.pos.x,r.pos.y+.3,r.pos.z).sub(t),o=a.length();o>10+2*n||o<.3||a.clone().normalize().angleTo(e)>.45||Math.abs(r.pos.y-I.pos.y)>2.3||!$s(ti(I.pos.y),I.pos.x,I.pos.z,r.pos.x,r.pos.z)||o<s&&(s=o,i=r)}return{eye:t,dir:e,target:i,dist:s}}function lf(){if(I.netCd>0||Kt!=="playing"||I.hidden)return;let n=Re.net;I.netCd=Math.max(.7,1.8-.4*n),Lv(),sn.kick=1;let t=of(),e=15+2*n,i=new U(Math.cos(I.yaw),0,-Math.sin(I.yaw)),s=t.eye.clone().addScaledVector(i,.2).addScaledVector(t.dir,.55);s.y-=.18;let r;t.target?(r=new U(t.target.pos.x,t.target.pos.y+.3,t.target.pos.z),r.y+=.5*F0*(t.dist/e)**2):r=t.eye.clone().addScaledVector(t.dir,20);let a=r.sub(s).normalize(),o=uM();o.grp.position.copy(s),te.add(o.grp),Wr.push({mesh:o.grp,web:o.web,ball:o.ball,pos:o.grp.position,vel:a.multiplyScalar(e),range:9+2.5*n,dist:0,landed:!1,t:0,f:ti(I.pos.y),landR:1.5+.35*n,s:.12,s0:.12,endS:1,trailT:0}),Li(s.x,s.y,s.z,16773312,10,2.4,.35,.13,0)}function Qp(n,t,e){for(let i of Ge){if(i.captured||Math.abs(i.pos.y-(e?n.pos.y:i.pos.y))>2.5)continue;let s=i.pos.x-n.pos.x,r=i.pos.z-n.pos.z,a=i.pos.y+.3-n.pos.y,o=e?Math.hypot(s,r):Math.sqrt(s*s+r*r+a*a);if(!(e&&Math.abs(i.pos.y-n.pos.y)>1.2)&&o<t)return i.type==="chi"?(i.state="chase",i.lostT=0,i.lastSeen={x:I.pos.x,z:I.pos.z,l:vs(I.pos.x,I.pos.z,I.pos.y)},Zi=Math.min(Ae.SEEN_GRACE*.9,Zi+Ae.SEEN_GRACE*.6),wn(i,"\u9001\u8ACB\u8CFC\u55AE\u963F\uFF01"),x0(),We("\u4F60\u628A\u7DB2\u4E1F\u5230\u4E3B\u7BA1\u8EAB\u4E0A\u4E86\uFF01\uFF01",1500)):cf(i),i}return null}var B0=1.05;function cf(n){let t=n.state==="hide"||n.state==="eat"||n.state==="lured"||n.state==="sleep"||n.stunT>0;n.captured=!0,n.capT=B0,n.popped=!1,Dv();let e=new oi().setFromObject(n.model.root),i=e.getSize(new U),s=e.getCenter(new U),r=Math.max(.3,Math.max(i.x,i.z)*.6,i.y*.56),a=new pt(lM,new De({map:eM(),transparent:!0,side:en,depthWrite:!1}));a.position.copy(s),a.scale.setScalar(r*2.6),te.add(a),n.wrap={mesh:a,r,cy:s.y-n.pos.y},xo.push(n.wrap);let o=1e3*Xn+(t?500:0);jr(o),n.stars&&n.stars.forEach(l=>{l.visible=!1}),n.zzz&&(n.zzz.visible=!1),We(`\u6355\u7372 ${Hr[n.type].name}\uFF01 +${o}${t?`
\u5077\u8972\u6210\u529F +500`:""}`,1900)}function fM(n,t){n.capT-=t;let e=1-n.capT/B0,i=n.wrap,s=n.model.root;if(e<.45){let r=e/.45;i.mesh.scale.setScalar(i.r*An(2.6,1.15,1-(1-r)*(1-r))),i.mesh.position.set(n.pos.x,n.pos.y+i.cy,n.pos.z),s.rotation.z=Math.sin(e*70)*.22*r,s.position.y=n.pos.y+Math.abs(Math.sin(e*40))*.05*r}else{n.popped||(n.popped=!0,Li(n.pos.x,n.pos.y+i.cy,n.pos.z,16765514,30,4.2,.95,.24,3),Li(n.pos.x,n.pos.y+i.cy,n.pos.z,16777215,14,2.4,.7,.16,1),fe(1e3,.18,"triangle",.15,1.8));let r=(e-.45)/.55,a=Math.max(.01,1-r*r);s.scale.setScalar(a),s.rotation.y+=t*14,s.rotation.z=0,s.position.y=n.pos.y+r*1.2,i.mesh.scale.setScalar(i.r*1.15*a),i.mesh.position.set(n.pos.x,n.pos.y+i.cy+r*1.2,n.pos.z),i.mesh.material.opacity=1-r}if(n.capT<=0){te.remove(i.mesh),i.mesh.material.dispose();let r=xo.indexOf(i);r>=0&&xo.splice(r,1)}}var sn=new Be;sn.kick=0;var dM=(()=>{let n=l=>new Hi({color:l,depthTest:!1}),t=n(3488839),e=n(16742959),i=n(11845065),s=n(15128232),r=[],a=(l,c,u,h,f,d=0,g=0)=>{let y=new pt(l,c);return y.position.set(u,h,f),y.rotation.x=d,y.rotation.z=g,y.renderOrder=999,sn.add(y),r.push(y),y};a(new Fn(.04,.046,.46,12),t,0,0,0,Math.PI/2),a(new Fn(.085,.052,.14,14,1,!0),i,0,0,-.29,Math.PI/2).material.side=en,a(new Cn(.052,.013,6,16),e,0,0,-.13),a(new Cn(.05,.011,6,16),e,0,0,.1),a(new ke(.045,.13,.055),t,0,-.1,.06,.25),a(new ke(.03,.05,.09),i,0,.055,0);let o=a(new On(.058,10,8),s,0,0,-.28);return sn.position.set(.27,-.25,-.55),sn.rotation.y=.1,Ke.add(sn),o})(),Ws=new Be;Ws.visible=!1;(function(){let n=i=>new Hi({color:i,depthTest:!1}),t=i=>new De({color:i,depthTest:!1}),e=(i,s,r)=>{let a=new pt(i,s);return a.position.y=r,a.renderOrder=999,Ws.add(a),a};e(new Fn(.022,.026,.3,10),n(3093823),0),e(new Fn(.028,.028,.08,10),n(16742959),-.06),e(new Fn(.034,.034,.22,10),t(8376575),.25),e(new On(.04,10,8),t(15137791),.37),Ke.add(Ws)})();function pM(n){sn.swing=Math.max(0,(sn.swing||0)-n*3.2);let t=sn.swing,e=1-t;Ws.visible=t>0&&Kt==="playing",Ws.visible&&(Ws.position.set(.5-e*.85,-.3+Math.sin(e*Math.PI)*.1,-.5-Math.sin(e*Math.PI)*.2),Ws.rotation.set(-1.25,0,-1+e*2.1)),sn.visible=Kt==="playing"&&!I.hidden&&t<=0,sn.kick=Math.max(0,sn.kick-n*5);let i=I.moving?Math.sin(I.bob)*.012:0;sn.position.set(.27+i*.5,-.25+Math.abs(i),-.55+sn.kick*.12),sn.rotation.x=sn.kick*.3,dM.visible=I.netCd<=.05}function mM(){let n=new Be,t=new pt(new ke(.22,.05,.09),yt(9060124));t.rotation.y=.4,n.add(t);let e=new pt(new ke(.18,.04,.07),yt(10834730));return e.position.set(.03,.04,.02),e.rotation.y=-.3,n.add(e),n}function gM(n){let t=new Be,e=new pt(new ke(.32,.4,.14),new De({color:16753978}));t.add(e);let i=new pt(new hn(.28,.16),new De({map:h0("\u8089\u4E7E",128,72,"#fff","#b03a1a","bold 46px sans-serif")}));i.position.z=.071,t.add(i),t.position.set(n.x,n.l*ue+.45,n.z),te.add(t),Ys.push({mesh:t,x:n.x,z:n.z,f:n.l,t:Math.random()*6})}function hf(){if(Kt!=="playing"||I.hidden)return;if(I.treats<=0){We("\u6C92\u6709\u8089\u4E7E\u4E86\uFF01\u53BB\u8FA6\u516C\u5BA4\u627E\u6A58\u8272\u888B\u5B50",1300);return}I.treats--;let n=new U(I.pos.x,I.pos.y+I.eye-.2,I.pos.z),t=new U(0,0,-1).applyEuler(new Un(I.pitch,I.yaw,0,"YXZ")),e=mM();e.position.copy(n).addScaledVector(t,.5),te.add(e),qr.push({mesh:e,pos:e.position,vel:t.multiplyScalar(10).add(new U(0,3,0)),f:ti(I.pos.y)}),fe(500,.15,"triangle",.12,1.6)}function xM(n){let t={mesh:n.mesh,x:n.pos.x,z:n.pos.z,y:n.pos.y,f:n.f,life:14,gone:!1};Qr.push(t),fe(260,.12,"square",.1,.6);for(let e of Ge){if(e.captured||Math.abs(e.pos.y-t.y)>2.3)continue;let i=Math.hypot(e.pos.x-t.x,e.pos.z-t.z);(e.type==="chi"?i<14&&e.state!=="chase"&&e.state!=="eat":e.type==="pug"?i<18&&e.state!=="eat":i<10&&e.state==="hide"&&Math.random()<.7)&&Yi(e,t.x,t.z,vs(t.x,t.z,t.y))&&(e.state="lured",e.lure=t)}}function uf(n){n.gone||(n.gone=!0,te.remove(n.mesh),Qr=Qr.filter(t=>t!==n))}function _M(n,t){for(let e=qr.length-1;e>=0;e--){let i=qr[e];i.vel.y-=9*n,i.pos.addScaledVector(i.vel,n),i.mesh.rotation.x+=n*9;let s=Gc(i.pos.x,i.pos.z,i.f*ue),r=!1;for(let a of yo[i.f])if(i.pos.x>a.x1&&i.pos.x<a.x2&&i.pos.z>a.z1&&i.pos.z<a.z2){r=!0;break}r&&(i.pos.addScaledVector(i.vel,-n*1.5),i.vel.x*=-.2,i.vel.z*=-.2),i.pos.y<=s+.03&&(i.pos.y=s+.03,i.mesh.rotation.set(0,Math.random()*6,0),qr.splice(e,1),xM(i))}for(let e of[...Qr])e.life-=n,e.life<=0&&uf(e);for(let e=Ys.length-1;e>=0;e--){let i=Ys[e];if(i.t+=n,i.mesh.rotation.y+=n*1.5,i.mesh.position.y=i.f*ue+(i.kind==="coin"?.55:.45)+Math.sin(i.t*3)*.08,Math.abs(I.pos.y-i.f*ue)<1.5&&Math.hypot(I.pos.x-i.x,I.pos.z-i.z)<1)if(te.remove(i.mesh),Ys.splice(e,1),i.kind==="coin"){let s=b0((40+10*Xn)*(Ve.coinMul||1));fe(1200,.08,"square",.1,1.4),fe(1700,.12,"square",.1,1.2,.07),We(`+${s} \u91D1\u5E63`,700)}else I.treats++,fe(880,.1,"triangle",.12,1.3),We("\u64BF\u5230\u8089\u4E7E\uFF01(\u6309 Q \u4E1F\u51FA\u53BB\u5F15\u958B\u72D7)",1300)}}function O0(){let n=null,t=1.5;for(let e of Wc){if(Math.abs(e.f*ue-I.pos.y)>1)continue;let i=Math.hypot(e.x-I.pos.x,e.z-I.pos.z);i<t&&(t=i,n=e)}return n}function ff(){if(Kt!=="playing")return;if(I.hidden){I.pos.copy(I.hideFrom),I.hidden=null;return}let n=O0();n&&(I.hideFrom=I.pos.clone(),I.hidden=n,I.pos.set(n.x,n.f*ue,n.z),We(n.type==="desk"?"\u8EB2\u5230\u684C\u5B50\u5E95\u4E0B\u2026\u5225\u51FA\u8072":"\u8EB2\u9032\u5EC1\u6240\u9694\u9593\u2026",1100))}var $r=24,yM=(()=>{let[n,t]=qn(4,64),e=t.createLinearGradient(0,64,0,0);return e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,4,64),Ln(n,!1)})();function vM(){let n=new me;n.setAttribute("position",new Me(new Float32Array(($r+2)*3),3));let t=[];for(let l=0;l<$r;l++)t.push(0,l+1,l+2);n.setIndex(t);let e=new pt(n,new De({color:16747066,transparent:!0,opacity:.14,depthWrite:!1,side:en}));e.frustumCulled=!1,e.renderOrder=2,te.add(e);let i=$r+3,s=new me,r=[],a=[];s.setAttribute("position",new Me(new Float32Array(i*2*3),3));for(let l=0;l<i;l++)r.push(l/(i-1),0,l/(i-1),1);for(let l=0;l<i-1;l++){let c=l*2,u=c+1,h=c+2,f=c+3;a.push(c,h,u,u,h,f)}s.setAttribute("uv",new ee(r,2)),s.setIndex(a);let o=new pt(s,new De({map:yM,color:16747066,transparent:!0,opacity:.5,depthWrite:!1,side:en}));return o.frustumCulled=!1,o.renderOrder=2,te.add(o),e.userData.curtain=o,e}function MM(n,t,e,i,s,r){let a=r;for(let o of yo[n]){let l=0,c=a;if(Math.abs(i)<1e-9){if(t<o.x1||t>o.x2)continue}else{let u=(o.x1-t)/i,h=(o.x2-t)/i;if(u>h&&([u,h]=[h,u]),l=Math.max(l,u),c=Math.min(c,h),l>c)continue}if(Math.abs(s)<1e-9){if(e<o.z1||e>o.z2)continue}else{let u=(o.z1-e)/s,h=(o.z2-e)/s;if(u>h&&([u,h]=[h,u]),l=Math.max(l,u),c=Math.min(c,h),l>c)continue}l<a&&(a=l)}return a}function SM(n){let t=n.cone;if(!t)return;let e=Math.abs(n.pos.y-I.pos.y)<2.3&&Math.hypot(n.pos.x-I.pos.x,n.pos.z-I.pos.z)<34,i=n.stunT>0||n.digT>0,s=t.userData.curtain;if(t.visible=e&&!i,s.visible=t.visible,!t.visible)return;let r=ti(n.pos.y),a=Ae.CHI_VISION*(I.hidden?1:af())*(n.state==="eat"||n.state==="munch"?.55:1)*(Ve.vis||1),o=t.geometry.attributes.position.array,l=n.pos.y+.035;o[0]=n.pos.x,o[1]=l,o[2]=n.pos.z;for(let g=0;g<=$r;g++){let y=n.heading-Ae.CHI_FOV_HALF+2*Ae.CHI_FOV_HALF*g/$r,p=Math.sin(y),x=Math.cos(y),v=MM(r,n.pos.x,n.pos.z,p,x,a);o[(g+1)*3]=n.pos.x+p*v,o[(g+1)*3+1]=l,o[(g+1)*3+2]=n.pos.z+x*v}t.geometry.attributes.position.needsUpdate=!0;let c=s.geometry.attributes.position.array,u=1.15,h=0,f=(g,y)=>{c[h++]=g,c[h++]=l,c[h++]=y,c[h++]=g,c[h++]=l+u,c[h++]=y};f(n.pos.x,n.pos.z);for(let g=0;g<=$r;g++)f(o[(g+1)*3],o[(g+1)*3+2]);f(n.pos.x,n.pos.z),s.geometry.attributes.position.needsUpdate=!0;let d=t.material;n.state==="chase"?(d.color.setHex(16722458),d.opacity=.38):n.state==="investigate"||n.state==="lured"?(d.color.setHex(16765514),d.opacity=.28):n.state==="eat"?(d.color.setHex(8048895),d.opacity=.12):n.state==="stuck"?(d.color.setHex(16730762),d.opacity=.3):(d.color.setHex(16751162),d.opacity=.24),s.material.color.copy(d.color),s.material.opacity=n.state==="chase"?.62:n.state==="eat"||n.state==="munch"?.22:.42}var kc={sneak:{name:"\u975C\u6084\u6084\u5730\u8D70",icon:"\u{1F43E}",desc:n=>["\u89E3\u9396 C \u9375\u6F5B\u884C\uFF1A\u8D70\u8DEF\u8072\u6975\u5C0F\u3001\u5409\u5A03\u5A03\u8996\u7DDA\u8DDD\u96E2\u7E2E\u77ED\u81F3 55%","\u6F5B\u884C\u66F4\u5FEB\u3001\u8072\u97F3\u66F4\u5C0F\u3001\u8996\u7DDA\u8DDD\u96E2 45%","\u6F5B\u884C\u63A5\u8FD1\u6B63\u5E38\u901F\u5EA6\u3001\u5E7E\u4E4E\u7121\u8072\u3001\u8996\u7DDA\u8DDD\u96E2 35%"][n]},net:{name:"\u6355\u7378\u7DB2",icon:"\u{1F945}",desc:n=>["\u5C04\u7A0B +2.5m\u3001\u51B7\u537B -0.4 \u79D2\u3001\u7DB2\u66F4\u5927\u66F4\u5FEB","\u5C04\u7A0B\u518D +2.5m\u3001\u51B7\u537B\u66F4\u77ED","\u6700\u5927\u5C04\u7A0B\u8207\u843D\u5730\u7BC4\u570D\u3001\u51B7\u537B 0.7 \u79D2"][n]},radar:{name:"\u96F7\u9054",icon:"\u{1F4E1}",desc:n=>["\u986F\u793A 20m \u5167\u5409\u5A03\u5A03\u4F4D\u7F6E(\u6BCF 2 \u79D2\u66F4\u65B0)","\u7BC4\u570D 32m\u3001\u6BCF 1 \u79D2\u66F4\u65B0","\u7BC4\u570D 50m\u3001\u6BCF 0.4 \u79D2\u66F4\u65B0\uFF0C\u5E7E\u4E4E\u5373\u6642"][n]}},Hc=["sneak","net","radar"];function z0(){if(Hc.every(t=>Re[t]>=Ae.UP_MAX)){jr(500),We("\u5DF2\u5168\u90E8\u5347\u6EFF\uFF01\u984D\u5916 +500",1500),H0();return}Kt="upgrade",document.exitPointerLock(),Mo(),So();let n=Tt("upCards");n.innerHTML="",Hc.forEach((t,e)=>{let i=kc[t],s=Re[t],r=s>=Ae.UP_MAX,a=document.createElement("div");a.className="card"+(r?" max":""),a.innerHTML=`<h3>${e+1}. ${i.icon} ${i.name}</h3><div class="lv">Lv ${s} ${r?"(\u5DF2\u6EFF)":"\u2192 Lv "+(s+1)}</div><p>${r?"\u5DF2\u5347\u81F3\u6700\u9AD8\u7B49\u7D1A":i.desc(s)}</p>`,a.onclick=()=>k0(t),n.appendChild(a)}),mn("upgrade")}function k0(n){Kt!=="upgrade"||Re[n]>=Ae.UP_MAX||(Re[n]++,pn("upgrade"),G0(),We(`${kc[n].name} \u5347\u5230 Lv ${Re[n]}`,1500),H0())}function H0(){Ge.filter(t=>t.type!=="chi"&&!t.captured).length===0?bM():Yc()}function G0(){Tt("ups").innerHTML=Hc.map(n=>`${kc[n].icon} ${kc[n].name} Lv${Re[n]}`).join("<br>"),Tt("radarTxt").textContent=Re.radar?`\u96F7\u9054 Lv${Re.radar}\u3000\u7BC4\u570D ${Ae.RADAR_R[Re.radar]}m`:"\u96F7\u9054\uFF1A\u672A\u53D6\u5F97"}var mn=n=>Tt(n).classList.add("show"),pn=n=>Tt(n).classList.remove("show");function V0(){if(!(Ss||Ki))try{let n=Ji.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function Yc(){Kt="playing",pn("pause"),Tt("hud").classList.add("show"),V0()}function df(n){Ss=!!n,So(),qs=(Tt("nameIn").value||"").trim()||"\u6355\u7378\u54E1";try{localStorage.setItem(i0,qs)}catch{}y0.voice=Tt("voiceCk").checked,m0(),Zv(),pn("menu"),pn("dead"),pn("clear"),pn("lbOv"),U0(1),Yc()}function bM(){Kt="clear",document.exitPointerLock(),So();let n=Math.max(0,Math.round((240-Oc)*10)),t=2e3*Xn,e=!ef,i=Math.round((t+n)*(e?1.5:1)*(Ve.bonus||1));jr(i),jn>on.best&&(on.best=jn),Mo(),Tt("clearTxt").textContent=`\u904E\u95DC\u734E\u52F5 +${t}\u3000\u901F\u5EA6\u734E\u52F5 +${n}\uFF08\u7528\u6642 ${Oc.toFixed(0)} \u79D2\uFF09${e?"\u3000\u5B8C\u7F8E\u6F5B\u884C \xD71.5\uFF01":""}\u3000${Ve.name?`\u3000\u3014${Ve.name}\u3015\xD7${Ve.bonus}`:""}\u3000\u672C\u95DC +${i}\u3000\u76EE\u524D\u5206\u6578 ${jn}`,Tt("clearCoins").textContent=`\u672C\u6B21\u7D2F\u8A08\u91D1\u5E63 ${Xc}\u3000\uFF08\u6301\u6709 ${on.coins}\uFF09`,mn("clear")}var jp={seen:["\u4F60\u5728\u5E79\u4EC0\u9EBC\uFF0C\u4E3B\u7BA1\u90FD\u770B\u5728\u773C\u88E1","\u6211\u90FD\u4E0D\u77E5\u9053\u4F60\u5011\u5728\u5E79\u4EC0\u9EBC","\u4F60\u6C92\u5099\u8A3B\u8AB0\u770B\u5F97\u61C2?"],caught:["\u9001\u8ACB\u8CFC\u55AE\u963F\uFF01","\u4F60\u5011\u8981\u61C2\u5411\u4E0A\u7BA1\u7406","\u9019\u9EDE\u5C0F\u4E8B\u4E0D\u7528\u554F\u6211"]};function W0(n){if(Kt==="playing"){Kt="dead",mn("dead");try{document.exitPointerLock(),Nv(),So()}catch(t){Xs(t+"","die")}Tt("vig").style.opacity=0,Tt("deadQuote").textContent="\u5409\u5A03\u5A03\u4E3B\u7BA1\uFF1A\u300C"+dn(jp[n]||jp.seen)+"\u300D";try{EM(),jn>on.best&&(on.best=jn),Mo()}catch(t){Xs(t+"","save")}Tt("deadCoins").textContent=`\u672C\u5C40\u8CFA\u5230 ${Xc} \u91D1\u5E63\uFF08\u6301\u6709 ${on.coins}\uFF09`,Tt("deadScore").textContent=`${qs}\u3000\u62B5\u9054\u7B2C ${Xn} \u95DC\u3000\u7E3D\u5206 ${jn}`,mn("dead");try{q0(Tt("deadLb"),qs,{name:qs,score:jn,stage:Xn})}catch(t){Xs(t+"","lb")}try{let t=Tt("deadQuote").textContent;v0(t.replace(/^.*「|」$/g,""),1)}catch(t){Xs(t+"","say")}}}function X0(){try{return JSON.parse(localStorage.getItem(n0))||[]}catch{return[]}}function EM(){let n=X0(),t={name:qs,score:jn,stage:Xn,t:Date.now()};n.push(t),n.sort((i,s)=>s.score-i.score||i.t-s.t);let e=n.slice(0,50);try{localStorage.setItem(n0,JSON.stringify(e))}catch{}M0=e.findIndex(i=>i.t===t.t)}var TM=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),wM=null,t0=!1;function Ou(n=-1,t=null){let e=(t||X0()).slice(0,10),i=t?"\u{1F310} \u5168\u516C\u53F8\u6392\u884C\u699C":"\u{1F4F1} \u672C\u6A5F\u6392\u884C\u699C\uFF08\u9023\u7DDA\u5931\u6557\uFF0C\u50C5\u986F\u793A\u9019\u53F0\u88DD\u7F6E\u7684\u7D00\u9304\uFF09";return e.length?`<p class="sub" style="margin:0 0 6px">${i}</p><table><tr><th>#</th><th>\u540D\u5B57</th><th>\u5206\u6578</th><th>\u95DC\u5361</th><th>\u65E5\u671F</th></tr>`+e.map((s,r)=>`<tr class="${r===n?"me":""}"><td>${r+1}</td><td>${TM(s.name)}</td><td>${s.score}</td><td>${s.stage}</td><td>${new Date(s.t).toLocaleDateString()}</td></tr>`).join("")+"</table>":'<p class="sub">\u9084\u6C92\u6709\u7D00\u9304\uFF0C\u5FEB\u53BB\u6293\u72D7\uFF01</p>'}async function AM(n){let t=new AbortController,e=setTimeout(()=>t.abort(),6e3);try{let i=await fetch("/api/scores",n?{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n),signal:t.signal}:{signal:t.signal});if(!i.ok)throw new Error(i.status);let s=await i.json();return wM=s.top,t0=!0,s}catch{return t0=!1,null}finally{clearTimeout(e)}}async function q0(n,t=null,e=null){n.innerHTML=Ou(-1)+'<p class="sub">\u9023\u7DDA\u4E2D\u2026</p>';let i=await AM(e);if(!i){n.innerHTML=Ou(e?M0:-1);return}let s=t?i.top.findIndex(r=>r.name===t&&r.score===e.score):-1;n.innerHTML=Ou(s,i.top)+(e&&i.rank>10?`<p class="sub">\u4F60\u7684\u6700\u4F73\u540D\u6B21\uFF1A\u7B2C ${i.rank} \u540D</p>`:"")}function RM(n,t,e){if(_o(n,t))return"\u6A13\u68AF";let i;return t>-2&&t<2?i="\u8D70\u5ECA":t<-2?i=n<-4?"\u8FA6\u516C\u5BA4 A":n<8?"\u5EC1\u6240":"\u8FA6\u516C\u5BA4 B":i=n<-6?"\u6703\u8B70\u5BA4":n<6?"\u6A13\u68AF\u9593":"\u8FA6\u516C\u5BA4 D",(e===0?"1F ":"2F ")+i}function CM(n){if(I.hidden)I.moving=I.running=I.sneaking=!1,I.noise=0,I.stamina=Math.min(100,I.stamina+n*20),I.eye=An(I.eye,I.hidden.type==="desk"?.5:1,Math.min(1,n*10));else{let e=(fn.KeyW||fn.ArrowUp?1:0)-(fn.KeyS||fn.ArrowDown?1:0),i=(fn.KeyD||fn.ArrowRight?1:0)-(fn.KeyA||fn.ArrowLeft?1:0);if(Ki){e+=ge.y,i+=ge.x;let a=Math.hypot(e,i);a>1&&(e/=a,i/=a)}I.moving=e!==0||i!==0,I.sneaking=!!(fn.KeyC||fn.ControlLeft||ge.sneak)&&Re.sneak>0,I.stamina<=0?I.tired=!0:I.stamina>35&&(I.tired=!1),I.running=!!(fn.ShiftLeft||fn.ShiftRight||ge.run||ge.mag>.93)&&!I.sneaking&&I.moving&&!I.tired,I.stamina=an(I.stamina+(I.running?-22:14*(1+.3*Wn("stam")))*n,0,100);let s=(I.sneaking?Ae.SNEAK_SPEED[Re.sneak]:I.running?Ae.RUN:Ae.WALK)*(Ki&&!I.running?.65+.35*Math.min(1,ge.mag/.8):1);if(I.moving){let a=-Math.sin(I.yaw),o=-Math.cos(I.yaw),l=Math.cos(I.yaw),c=-Math.sin(I.yaw),u=a*e+l*i,h=o*e+c*i,f=Math.hypot(u,h)||1;I.pos.x+=u/f*s*n,I.pos.z+=h/f*s*n,I.bob+=n*s*2.4}Cv(ti(I.pos.y),I.pos,.35);let r=Gc(I.pos.x,I.pos.z,I.pos.y);I.pos.y=_o(I.pos.x,I.pos.z)?r:An(I.pos.y,r,Math.min(1,n*15)),I.slipT>0&&(I.slipT-=n),I.noise=I.moving?I.sneaking?Ae.SNEAK_NOISE[Re.sneak]:I.running?14:7:0,I.eye=An(I.eye,I.sneaking?1.1:1.6,Math.min(1,n*10)),I.slipT>0&&(I.noise=Math.max(I.noise,14))}I.netCd=Math.max(0,I.netCd-n),I.batonCd=Math.max(0,I.batonCd-n);let t=I.moving?Math.sin(I.bob)*.035*(I.running?1.6:1):0;Ke.position.set(I.pos.x,I.pos.y+I.eye+t,I.pos.z),I.shake>0&&(I.shake=Math.max(0,I.shake-n*3),Ke.position.x+=(Math.random()-.5)*I.shake*.12,Ke.position.y+=(Math.random()-.5)*I.shake*.12),Ke.rotation.set(I.pitch,I.yaw,0),pM(n)}function Y0(n,t){Oc+=n,CM(n);let e=!1,i=0;for(let a of Ge){if(a.captured){fM(a,n);continue}if(a.type==="chi"?Qv(a,n,t):jv(a,n,t),Kt!=="playing")return;a.type==="chi"&&a.seesPlayer&&(e=!0,i=Math.max(i,a.seeRate||1)),a.model.root.position.x=a.pos.x,a.model.root.position.z=a.pos.z,a.hop<=0&&(a.model.root.position.y=a.pos.y),a.model.root.rotation.y=a.heading,a.type==="chi"&&(a.sizeV=An(a.sizeV,a.size,Math.min(1,n*3)),a.pop=Math.min(1,a.pop+n*4),a.model.root.scale.setScalar(a.pop*a.sizeV*(a.digT>0?1+Math.sin(t*40)*.06:1))),Dc(a,n,t),a.cone&&SM(a)}let s=!1;for(let a=Ge.length-1;a>=0;a--)Ge[a].captured&&Ge[a].capT<=0&&(te.remove(Ge[a].model.root),Ge.splice(a,1),s=!0);if(s){z0();return}if(e&&(ef=!0),e?Zi+=n*i:Zi=Math.max(0,Zi-n*1.5),Ae.SEEN_GRACE<=0?e:Zi>=Ae.SEEN_GRACE){W0("seen");return}_M(n,t);for(let a=Pi.length-1;a>=0;a--){let o=Pi[a];o.t+=n,o.stink.position.y=.55+Math.sin(o.t*3)*.06,!I.hidden&&Math.abs(I.pos.y-o.f*ue)<1&&Math.hypot(I.pos.x-o.x,I.pos.z-o.z)<.5&&(P0(o),I.slipT=1.3,Hv(),We("\u8E29\u5230\u5927\u4FBF\u4E86\uFF01\u8072\u97F3\u8D85\u5927\u2026",1300),Li(o.x,o.f*ue+.1,o.z,8081456,12,2,.5,.14,4))}let r=1e9;for(let a of Ge)a.type==="chi"&&Math.abs(a.pos.y-I.pos.y)<2.3&&(r=Math.min(r,Math.hypot(a.pos.x-I.pos.x,a.pos.z-I.pos.z)));Fu-=n,r<9&&Fu<=0&&(Fu=An(.38,1.1,r/9),fe(68,.12,"sine",.4,.6),fe(58,.12,"sine",.32,.6,.17));for(let a=Wr.length-1;a>=0;a--){let o=Wr[a];o.t+=n;let l=!1;if(o.landed){let c=Math.min(1,o.t/.18);o.web.scale.setScalar(An(o.s0,o.endS,c));let u=an((o.t-.6)/.6,0,1);o.web.material.opacity=1-u;for(let h of o.web.children)h.visible=u<.4;o.t>1.25&&(l=!0)}else{o.vel.y-=F0*n;let c=o.vel.clone().multiplyScalar(n);o.pos.add(c),o.dist+=c.length();let u=Math.min(1,o.dist/o.range),h=an((u-.06)/.5,0,1),f=h*h*(3-2*h);o.s=An(.12,1.25,f),o.web.scale.setScalar(o.s),o.ball.visible=f<.55,o.ball.scale.setScalar(Math.max(.01,1-f*1.7)),o.mesh.lookAt(o.pos.x+o.vel.x,o.pos.y+o.vel.y,o.pos.z+o.vel.z),o.web.rotation.z+=n*7,o.trailT-=n,o.trailT<=0&&(o.trailT=.04,Li(o.pos.x,o.pos.y,o.pos.z,16773320,1,.1,.35,.16,0));let d=Qp(o,.4+.95*o.s,!1),g=Gc(o.pos.x,o.pos.z,o.f*ue),y=!1;if(o.pos.y<o.f*ue+2.2){for(let p of yo[o.f])if(o.pos.x>p.x1&&o.pos.x<p.x2&&o.pos.z>p.z1&&o.pos.z<p.z2){y=!0;break}}d?d.type!=="chi"?l=!0:(o.landed=!0,o.t=0,o.s0=o.s,o.endS=o.s,o.ball.visible=!1):(o.pos.y<=g+.05||o.dist>=o.range||y)&&(o.landed=!0,o.pos.y=Math.max(o.pos.y,g+.04),o.mesh.rotation.set(-Math.PI/2,0,0),o.t=0,o.s0=o.s,o.endS=o.landR,o.ball.visible=!1,y||Qp(o,o.landR,!0)&&(l=!0))}l&&(te.remove(o.mesh),o.web.material.dispose(),Wr.splice(a,1))}iM(n);for(let a=Xr.length-1;a>=0;a--){let o=Xr[a];o.t+=n;let l=o.t/.7;o.mesh.scale.setScalar(1+l*5),o.mesh.material.opacity=Math.max(0,.9*(1-l)),o.beam.material.opacity=Math.max(0,.4*(1-l)),l>=1&&(te.remove(o.mesh),te.remove(o.beam),Xr.splice(a,1))}Re.radar>0&&(Uc-=n,Uc<=0&&(Uc=Ae.RADAR_T[Re.radar],tf=Ge.filter(a=>a.type==="chi"&&!a.captured).map(a=>({x:a.pos.x,z:a.pos.z,y:a.pos.y,st:a.state})))),DM(n,t)}var $0=[null,null];function IM(){for(let n=0;n<2;n++){let t=document.createElement("canvas");t.width=ce*8,t.height=pi*8;let e=t.getContext("2d");e.fillStyle="rgba(60,200,110,.55)";for(let i of Hu[n])e.fillRect((i.x1-fo)*8,(i.z1-po)*8,(i.x2-i.x1)*8,(i.z2-i.z1)*8);e.fillStyle="rgba(60,200,110,.18)";for(let i of Vc[n])Hu[n].includes(i)||e.fillRect((i.x1-fo)*8,(i.z1-po)*8,(i.x2-i.x1)*8,(i.z2-i.z1)*8);$0[n]=t}}IM();var PM=Tt("radar").getContext("2d");function LM(n){let t=PM;if(t.clearRect(0,0,200,200),!Re.radar){t.fillStyle="rgba(160,200,170,.6)",t.font="14px sans-serif",t.textAlign="center",t.fillText("\u6293\u5230\u52D5\u7269\u5F8C\u53EF\u5347\u7D1A\u96F7\u9054",100,104);return}let e=Ae.RADAR_R[Re.radar],i=96/e,s=ti(I.pos.y);t.save(),t.beginPath(),t.arc(100,100,98,0,7),t.clip(),t.translate(100,100),t.rotate(I.yaw),t.scale(i,i),t.translate(-I.pos.x,-I.pos.z),t.imageSmoothingEnabled=!1,t.drawImage($0[s],fo,po,ce,pi);let r=n%1.6/1.6;for(let a of tf){let o=Math.abs(a.y-I.pos.y)<2.3;t.save(),t.translate(a.x,a.z),t.rotate(-I.yaw),t.fillStyle=a.st==="chase"?"#ff3b30":"#ff8a3a",t.strokeStyle="#ff3b30",t.lineWidth=1.5/i,t.beginPath(),t.arc(0,0,(o?5:4)/i,0,7),o?t.fill():t.stroke(),o||(t.fillStyle="#ff8a3a",t.font=`${11/i}px sans-serif`,t.textAlign="center",t.fillText(a.y>I.pos.y?"\u25B2":"\u25BC",0,-7/i)),t.restore()}t.restore(),t.strokeStyle="rgba(80,220,130,.35)",t.lineWidth=1;for(let a of[32,64,96])t.beginPath(),t.arc(100,100,a,0,7),t.stroke();t.beginPath(),t.arc(100,100,96*r,0,7),t.strokeStyle=`rgba(80,255,150,${.5*(1-r)})`,t.stroke(),t.fillStyle="#4aa8ff",t.beginPath(),t.moveTo(100,92),t.lineTo(95,106),t.lineTo(105,106),t.closePath(),t.fill()}var Ci={};function Vn(n,t){Ci[n]!==t&&(Ci[n]=t,Tt(n).textContent=t)}function DM(n,t){Vn("hStage",Xn),Vn("hScore",jn);let e=Ge.some(l=>l.type==="poo"&&!l.captured),i=Ge.some(l=>l.type==="pug"&&!l.captured),s=Ge.filter(l=>l.type==="poo"&&!l.captured).length,r=Ge.filter(l=>l.type==="pug"&&!l.captured).length;Vn("hLeft",[s?"\u5C0F\u578B\u8CB4\u8CD3\u72D7"+(s>1?"\xD7"+s:""):"",r?"\u516B\u54E5\u72AC"+(r>1?"\xD7"+r:""):""].filter(Boolean).join("\u3001")||"\u5168\u90E8\u6355\u7372"),Vn("hLoc",RM(I.pos.x,I.pos.z,ti(I.pos.y))),Tt("noiseF").style.width=Math.min(100,I.noise/14*100)+"%",Tt("stamF").style.width=I.stamina+"%",Tt("stamF").style.background=I.tired?"#ff8a3a":"#5fd38a",Vn("hTreat",I.treats),Vn("hBaton",I.baton),Vn("hCoin",on.coins),Vn("hMod",Ve.name?"\u3014"+Ve.name+"\u3015":"");let a=I.hidden?null:O0();Vn("prompt",I.hidden?"\u6309 E \u96E2\u958B\u85CF\u8EAB\u8655":a?a.type==="desk"?"\u6309 E \u8EB2\u5230\u684C\u5B50\u5E95\u4E0B":"\u6309 E \u8EB2\u9032\u5EC1\u6240\u9694\u9593":""),Tt("seenF").style.width=Math.min(100,Zi/Math.max(.01,Ae.SEEN_GRACE)*100)+"%",Tt("netF").style.width=(I.netCd>0?1-I.netCd/Math.max(.7,1.8-.4*Re.net):1)*100+"%",Tt("vig").style.opacity=an(Zi/Math.max(.01,Ae.SEEN_GRACE),0,1)*.95;let o=!I.hidden&&!!of().target;if(Ci._lk!==o&&(Ci._lk=o,Tt("cross").classList.toggle("lock",o)),Ki){Vn("tTreat",I.treats),Vn("tBaton",I.baton);let l=I.hidden||a?"flex":"none";Ci._hv!==l&&(Ci._hv=l,Tt("bHide").style.display=l,Tt("bHide").textContent=I.hidden?"\u96E2\u958B":"\u8EB2\u85CF");let c=Re.sneak>0?"flex":"none";Ci._sv!==c&&(Ci._sv=c,Tt("bSneak").style.display=c),Tt("bNet").lastElementChild.style.height=(I.netCd>0?I.netCd/Math.max(.7,1.8-.4*Re.net)*100:0)+"%"}LM(t)}window.addEventListener("keydown",n=>{if(fn[n.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),Kt==="upgrade"){let t=["Digit1","Digit2","Digit3"].indexOf(n.code);t>=0&&k0(Hc[t])}Kt==="playing"&&!n.repeat&&(n.code==="KeyE"&&ff(),n.code==="KeyQ"&&hf(),n.code==="KeyF"&&qc()),Kt==="playing"&&n.code==="Escape"&&Ss&&(Kt="paused",mn("pause"))});window.addEventListener("keyup",n=>{fn[n.code]=!1});window.addEventListener("blur",()=>{for(let n in fn)fn[n]=!1});document.addEventListener("mousemove",n=>{Kt!=="playing"||!Ss&&document.pointerLockElement!==Ji||(I.yaw-=n.movementX*.0022,I.pitch=an(I.pitch-n.movementY*.0022,-1.45,1.45))});Ji.addEventListener("mousedown",n=>{Kt==="playing"&&n.button===0&&(!Ss&&document.pointerLockElement!==Ji?V0():I.hidden||lf())});Ji.addEventListener("mousedown",n=>{Kt==="playing"&&n.button===2&&(Ss||document.pointerLockElement===Ji)&&qc()});Ji.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Ji&&Kt==="playing"&&!Ss&&!Ki&&(Kt="paused",mn("pause"))});document.addEventListener("pointerlockerror",()=>{Kt==="playing"&&!Ki&&(Kt="paused",mn("pause"))});var Ki=!1,ge={x:0,y:0,mag:0,run:!1,sneak:!1,sens:.0045},we={stick:null,look:null,btns:new Map};function pf(){Ki||(Ki=!0,document.body.classList.add("touch"))}(Zu||new URLSearchParams(location.search).has("touch"))&&pf();window.addEventListener("touchstart",pf,{passive:!0});try{let n=parseFloat(localStorage.getItem("chihuahua_hunter_sens"));n&&(ge.sens=n/1e3,Tt("sens").value=n)}catch{}Tt("sens").oninput=()=>{ge.sens=parseFloat(Tt("sens").value)/1e3;try{localStorage.setItem("chihuahua_hunter_sens",Tt("sens").value)}catch{}};function Z0(){Kt==="playing"&&(Kt="paused",mn("pause"),mf())}function mf(){we.stick=we.look=null,we.btns.clear(),ge.x=ge.y=ge.mag=0,ge.run=ge.run&&!1,Tt("stickBase").style.display="none",Tt("stickKnob").style.display="none";for(let n of document.querySelectorAll(".tb.hold"))n.classList.remove("hold")}var Gr=56;function gf(n,t){if(n==="net")t&&lf();else if(n==="treat")t&&hf();else if(n==="hit")t&&qc();else if(n==="hide")t&&ff();else if(n==="pause")t&&Z0();else if(n==="run")ge.run=t;else if(n==="sneak"&&t){if(Re.sneak<=0)return;ge.sneak=!ge.sneak,Tt("bSneak").classList.toggle("on",ge.sneak)}}var $c=Tt("touch"),So=()=>mf();function NM(n){let t=new Set;for(let e of n)t.add(e.identifier);we.stick&&!t.has(we.stick.id)&&(we.stick=null,ge.x=ge.y=ge.mag=0,Tt("stickBase").style.display="none",Tt("stickKnob").style.display="none"),we.look&&!t.has(we.look.id)&&(we.look=null);for(let[e,i]of[...we.btns])t.has(e)||(we.btns.delete(e),gf(i,!1),document.querySelectorAll(`.tb[data-act="${i}"]`).forEach(s=>s.classList.remove("hold")))}$c.addEventListener("touchstart",n=>{if(Kt!=="playing"){So();return}n.preventDefault(),NM([...n.touches].filter(t=>![...n.changedTouches].some(e=>e.identifier===t.identifier)));for(let t of n.changedTouches){let e=t.target.closest?t.target.closest("[data-act]"):null;if(e){we.btns.set(t.identifier,e.dataset.act),e.classList.add("hold"),gf(e.dataset.act,!0);continue}if(t.clientX<window.innerWidth*.45&&!we.stick){we.stick={id:t.identifier,ox:t.clientX,oy:t.clientY};let i=Tt("stickBase"),s=Tt("stickKnob");i.style.display=s.style.display="block",i.style.left=s.style.left=t.clientX+"px",i.style.top=s.style.top=t.clientY+"px"}else we.look||(we.look={id:t.identifier,x:t.clientX,y:t.clientY})}},{passive:!1});$c.addEventListener("touchmove",n=>{if(Kt==="playing"){n.preventDefault();for(let t of n.changedTouches){let e=we.stick,i=we.look;if(e&&t.identifier===e.id){let s=t.clientX-e.ox,r=t.clientY-e.oy,a=Math.hypot(s,r);a>Gr&&(s=s/a*Gr,r=r/a*Gr);let o=Math.min(1,a/Gr);ge.mag=o<.12?0:o,ge.x=ge.mag?s/Gr:0,ge.y=ge.mag?-r/Gr:0;let l=Tt("stickKnob");l.style.left=e.ox+s+"px",l.style.top=e.oy+r+"px"}else i&&t.identifier===i.id&&(I.yaw-=(t.clientX-i.x)*ge.sens,I.pitch=an(I.pitch-(t.clientY-i.y)*ge.sens,-1.45,1.45),i.x=t.clientX,i.y=t.clientY)}}},{passive:!1});function J0(n){for(let t of n.changedTouches)if(we.stick&&t.identifier===we.stick.id)we.stick=null,ge.x=ge.y=ge.mag=0,Tt("stickBase").style.display="none",Tt("stickKnob").style.display="none";else if(we.look&&t.identifier===we.look.id)we.look=null;else if(we.btns.has(t.identifier)){let e=we.btns.get(t.identifier);we.btns.delete(t.identifier),gf(e,!1),document.querySelectorAll(`.tb[data-act="${e}"]`).forEach(i=>i.classList.remove("hold"))}n.cancelable&&Kt==="playing"&&n.preventDefault()}$c.addEventListener("touchend",J0,{passive:!1});$c.addEventListener("touchcancel",J0,{passive:!1});document.addEventListener("visibilitychange",()=>{document.hidden&&Z0()});async function UM(){if(Ki){try{let n=document.documentElement;!document.fullscreenElement&&n.requestFullscreen&&await n.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}try{navigator.wakeLock&&navigator.wakeLock.request("screen").catch(()=>{})}catch{}}}Tt("shopBtn").onclick=()=>sf("menu");Tt("clearShop").onclick=()=>sf("clear");Tt("deadShop").onclick=()=>sf("dead");Tt("shopClose").onclick=()=>{pn("shop"),mn(E0)};Tt("helpBtn").onclick=()=>mn("help");Tt("helpClose").onclick=()=>pn("help");Tt("startBtn").onclick=()=>{qs=(Tt("nameIn").value||"").trim()||"\u6355\u7378\u54E1",pn("menu"),mn("brief"),Kt="brief"};Tt("againBtn").onclick=()=>df(Ss);Tt("menuBtn").onclick=()=>{pn("dead"),mn("menu"),Tt("hud").classList.remove("show"),Kt="menu",rf()};Tt("lbBtn").onclick=()=>{mn("lbOv"),q0(Tt("lbBody"))};Tt("lbClose").onclick=()=>pn("lbOv");Tt("resumeBtn").onclick=()=>{Kt==="paused"&&Yc()};Tt("quitBtn").onclick=()=>{pn("pause"),Tt("hud").classList.remove("show"),mn("menu"),Kt="menu",rf()};Tt("nextBtn").onclick=()=>{pn("clear"),U0(Xn+1),Yc()};try{Tt("nameIn").value=localStorage.getItem(i0)||""}catch{}var K0=[],nn={x:0,y:.8,z:82.7,p:-.16};function FM(){let n=new Be;n.position.set(0,0,80),te.add(n);let t=new pt(new Ds(5,32),yt(3752271));t.rotation.x=-Math.PI/2,n.add(t);let e=new pt(new Ds(40,32),yt(1251360));e.rotation.x=-Math.PI/2,e.position.y=-.01,n.add(e);let i=new pt(new Cn(4.7,.035,6,64),new De({color:16739146}));i.rotation.x=Math.PI/2,i.position.y=.02,n.add(i);let s=new pt(new hn(34,13),Zr(He.city));s.position.set(0,6.4,-6),n.add(s);for(let c=-3;c<=3;c++){let u=new pt(new ke(.12,13,.1),yt(1711913));u.position.set(c*4.2,6.4,-5.95),n.add(u)}let r=new pt(new ke(34,.2,.3),yt(1711913));r.position.set(0,.3,-5.9),n.add(r);let a=new us(16777215,1.4,16);a.position.set(0,4,3),n.add(a);let o=new us(16739146,1.1,14);o.position.set(-4.5,2.5,1.5),n.add(o);let l=new us(4892927,1,14);l.position.set(4.5,2.5,1.5),n.add(l),[["chi",-1.9],["poo",0],["pug",1.9]].forEach(([c,u])=>{let h=Nu(c);h.root.position.set(u,0,0),n.add(h.root),K0.push({type:c,model:h,act:"idle",phase:0,seed:Math.random()*5,barkT:0,hop:0,state:"show",baseX:u})})}Fp.then(FM);var e0=["idle","walk","sit","bark","lie","run"];function BM(n,t){sn.visible=!1;let e=window.innerWidth/window.innerHeight,i=e<1,s=window.innerHeight<480||i,r=Kt==="menu",a=Math.tan(Ke.fov*Math.PI/360)*e,o,l,c,u;r?i?(o=Math.max(3.6,3/a),l=0,c=1.9,u=-.74):(o=window.innerHeight<480?3.4:3.9,l=-1.52-.24*o*a,c=window.innerHeight<480?1:.8,u=window.innerHeight<480?-.12:-.16):(o=2.7*Math.max(1,1.1/e),l=0,c=s?1.25:.8,u=s?-.3:-.16),nn.init||(nn.init=!0,nn.x=l,nn.y=c,nn.z=80+o,nn.p=u),nn.x=An(nn.x,l,Math.min(1,n*3)),nn.z=An(nn.z,80+o,Math.min(1,n*3)),nn.y=An(nn.y,c,Math.min(1,n*3)),nn.p=An(nn.p,u,Math.min(1,n*3)),Ke.position.set(nn.x,nn.y,nn.z),Ke.rotation.set(nn.p,0,0),K0.forEach((h,f)=>{let d=Math.floor(t/2.2+f*1.3)%e0.length,g=e0[d];h.act=g==="bark"?"sit":g,g==="bark"&&h.barkT<=0&&(t*10|0)%9===0&&(h.barkT=.5),h.model.root.position.x=An(h.model.root.position.x,h.baseX*(Kt==="menu"?.8:1),Math.min(1,n*3)),h.model.root.rotation.y=Math.sin(t*.5+f)*.5,Dc(h,n,t)})}Tt("briefBtn").onclick=()=>{pn("menu"),mn("brief"),Kt="brief"};Tt("briefTxt").onclick=()=>document.body.classList.toggle("bt");Tt("briefBack").onclick=()=>{pn("brief"),mn("menu"),Kt="menu"};Tt("briefGo").onclick=()=>{pn("brief"),UM(),df(!1)};var _s=null,OM=0;function Xs(n,t){try{if(console.error("[game]",t,n),OM++>3)return;_s||(_s=document.createElement("div"),_s.style.cssText="position:fixed;left:6px;right:6px;bottom:6px;z-index:99999;background:rgba(120,0,0,.92);color:#fff;font:12px/1.4 monospace;padding:8px 10px;border-radius:8px;white-space:pre-wrap;word-break:break-all;max-height:40vh;overflow:auto;user-select:text",_s.onclick=()=>{_s.style.display="none"},document.body.appendChild(_s)),_s.style.display="block",_s.textContent=`\u26A0 \u767C\u751F\u932F\u8AA4\uFF08\u9EDE\u4E00\u4E0B\u95DC\u9589\uFF0C\u8ACB\u622A\u5716\u56DE\u5831\uFF09
[`+t+"] "+n}catch{}}window.addEventListener("error",n=>Xs((n.message||"")+" @"+(n.filename||"").split("/").pop()+":"+n.lineno+":"+n.colno,"error"));window.addEventListener("unhandledrejection",n=>Xs(String(n.reason&&(n.reason.stack||n.reason.message)||n.reason).slice(0,300),"promise"));var zM=new qa,uo=0,zu=0;function Q0(){requestAnimationFrame(Q0);let n=Math.min(.05,zM.getDelta());uo+=n;{let t=Kt==="menu"||Kt==="brief";Ue.visible===t&&(Ue.visible=!t)}{let t=Kt==="playing";Ci._tl!==t&&(Ci._tl=t,Tt("touch").classList.toggle("show",t),t||mf())}if(Kt==="playing")try{Y0(n,uo)}catch(t){Xs((t&&t.stack||t)+"","update")}else if(Kt==="menu"||Kt==="brief"){if(Ve!==Zs.none&&(Ve=Zs.none,A0()),Vn("mCoins",on.coins),Vn("mBest",on.best),zu-=n,zu<=0){zu=3.4;let t=Tt("bubble");t.style.opacity=0,setTimeout(()=>{t.textContent=dn(ho),t.style.opacity=1},250)}BM(n,uo)}mo.render(te,Ke)}Q0();window.__game={start:n=>df(n!==!1),step:(n=.05,t=1)=>{for(let e=0;e<t;e++)uo+=n,Kt==="playing"&&Y0(n,uo);mo.render(te,Ke)},get state(){return Kt},player:I,TS:ge,enableTouch:pf,aimInfo:of,meta:on,spawnPoop:I0,poops:()=>Pi,swing:qc,zap:N0,buy:w0,MODS:Zs,shopLv:Wn,dogs:()=>Ge,up:Re,keys:fn,setPlayer:(n,t,e)=>I.pos.set(n,t,e),net:lf,cfg:Ae,capture:n=>cf(n),openUpgrade:z0,stage:()=>Xn,score:()=>jn,render:()=>mo.render(te,Ke),spawnDog:Fc,animateDog:Dc,camera:Ke,scene:te,findPath:p0,cellsMain:Ms,nooks:go,toggleHide:ff,throwTreat:hf,hideSpots:Wc};window.addEventListener("pagehide",Mo);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
