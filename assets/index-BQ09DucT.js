(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="170",Ki={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,xl=1,fu=2,Jc=1,pu=2,Cn=3,Qn=0,ke=1,cn=2,Zn=0,Ji=1,yl=2,Ml=3,Sl=4,mu=5,fi=100,gu=101,_u=102,vu=103,xu=104,yu=200,Mu=201,Su=202,bu=203,Vo=204,Go=205,Eu=206,wu=207,Tu=208,Au=209,Cu=210,Ru=211,Pu=212,Lu=213,Du=214,Wo=0,Xo=1,Yo=2,ss=3,$o=4,qo=5,jo=6,Zo=7,Qc=0,Iu=1,Uu=2,Kn=0,Nu=1,Fu=2,Ou=3,ku=4,Bu=5,zu=6,Hu=7,th=300,rs=301,os=302,Ko=303,Jo=304,qr=306,Qo=1e3,vi=1001,ta=1002,Ye=1003,Vu=1004,Zs=1005,_n=1006,io=1007,jn=1008,In=1009,eh=1010,nh=1011,Ns=1012,za=1013,ti=1014,vn=1015,Hs=1016,Ha=1017,Va=1018,as=1020,ih=35902,sh=1021,rh=1022,hn=1023,oh=1024,ah=1025,Qi=1026,ls=1027,Ga=1028,Wa=1029,lh=1030,Xa=1031,Ya=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,la=37808,ca=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,xa=37819,ya=37820,Ma=37821,Nr=36492,Sa=36494,ba=36495,ch=36283,Ea=36284,wa=36285,Ta=36286,Gu=3200,Wu=3201,Xu=0,Yu=1,qn="",Oe="srgb",fs="srgb-linear",jr="linear",se="srgb",Pi=7680,bl=519,$u=512,qu=513,ju=514,hh=515,Zu=516,Ku=517,Ju=518,Qu=519,El=35044,td=35048,wl="300 es",Pn=2e3,Br=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const ts=Math.PI/180,Fs=180/Math.PI;function Ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function $a(n,t){return(n%t+t)%t}function ed(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function nd(n,t,e){return n!==t?(e-n)/(t-n):0}function Ps(n,t,e){return(1-e)*n+e*t}function id(n,t,e,i){return Ps(n,t,1-Math.exp(-e*i))}function sd(n,t=1){return t-Math.abs($a(n,t*2)-t)}function rd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function od(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ad(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ld(n,t){return n+Math.random()*(t-n)}function cd(n){return n*(.5-Math.random())}function hd(n){n!==void 0&&(Tl=n);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ud(n){return n*ts}function dd(n){return n*Fs}function fd(n){return(n&n-1)===0&&n!==0}function pd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function md(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gd(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fe={DEG2RAD:ts,RAD2DEG:Fs,generateUUID:Ti,clamp:Te,euclideanModulo:$a,mapLinear:ed,inverseLerp:nd,lerp:Ps,damp:id,pingpong:sd,smoothstep:rd,smootherstep:od,randInt:ad,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:Ne,denormalize:Yi};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],P=s[2],C=s[5],w=s[8];return r[0]=o*_+a*y+c*P,r[3]=o*m+a*x+c*C,r[6]=o*p+a*v+c*w,r[1]=l*_+h*y+d*P,r[4]=l*m+h*x+d*C,r[7]=l*p+h*v+d*w,r[2]=u*_+f*y+g*P,r[5]=u*m+f*x+g*C,r[8]=u*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(so.makeScale(t,e)),this}rotate(t){return this.premultiply(so.makeRotation(-t)),this}translate(t,e){return this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Ht;function uh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _d(){const n=zr("canvas");return n.style.display="block",n}const Al={};function As(n){n in Al||(Al[n]=!0,console.warn(n))}function vd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function xd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=es(n.r),n.g=es(n.g),n.b=es(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qn?jr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Cl=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Pl=[.3127,.329],Ll=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[fs]:{primaries:Cl,whitePoint:Pl,transfer:jr,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Cl,whitePoint:Pl,transfer:se,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Li;class Md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=zr("canvas")),Li.width=t.width,Li.height=t.height;const i=Li.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ro(s[o].image)):r.push(ro(s[o]))}else r=ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Md.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class Pe extends wi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=vi,s=vi,r=_n,o=jn,a=hn,c=In,l=Pe.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ti(),this.name="",this.source=new dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=th;Pe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(f+1)/2,P=(p+1)/2,C=(h+u)/4,w=(d+_)/4,L=(g+m)/4;return x>v&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=w/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=w/r,s=L/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ed extends wi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Pe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Ed{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fh extends Pe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Pe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,p*y);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const v=a*y;if(c=c*m+u*v,l=l*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new R,Il=new Un;class Fn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Js.subVectors(this.max,vs),Di.subVectors(t.a,vs),Ii.subVectors(t.b,vs),Ui.subVectors(t.c,vs),Bn.subVectors(Ii,Di),zn.subVectors(Ui,Ii),ri.subVectors(Di,Ui);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ri.z,ri.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!ao(e,Di,Ii,Ui,Js)||(e=[1,0,0,0,1,0,0,0,1],!ao(e,Di,Ii,Ui,Js))?!1:(Qs.crossVectors(Bn,zn),e=[Qs.x,Qs.y,Qs.z],ao(e,Di,Ii,Ui,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,Ks=new Fn,Di=new R,Ii=new R,Ui=new R,Bn=new R,zn=new R,ri=new R,vs=new R,Js=new R,Qs=new R,oi=new R;function ao(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Td=new Fn,xs=new R,lo=new R;class Ai{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Td.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(lo)),this.expandByPoint(xs.copy(t.center).sub(lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new R,co=new R,tr=new R,Hn=new R,ho=new R,er=new R,uo=new R;class Zr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){co.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(co);const r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=Hn.dot(this.direction),c=-Hn.dot(tr),l=Hn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(co).addScaledVector(tr,u),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),s=bn.dot(bn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,s,r){ho.subVectors(e,t),er.subVectors(i,t),uo.crossVectors(ho,er);let o=this.direction.dot(uo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const c=a*this.direction.dot(er.crossVectors(Hn,er));if(c<0)return null;const l=a*this.direction.dot(ho.cross(Hn));if(l<0||c+l>o)return null;const h=-a*Hn.dot(uo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(t,e,i,s,r,o,a,c,l,h,d,u,f,g,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,d,u,f,g,_,m)}set(t,e,i,s,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Cd)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Vn.crossVectors(i,We),Vn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Vn.crossVectors(i,We)),Vn.normalize(),nr.crossVectors(We,Vn),s[0]=Vn.x,s[4]=nr.x,s[8]=We.x,s[1]=Vn.y,s[5]=nr.y,s[9]=We.y,s[2]=Vn.z,s[6]=nr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],v=i[11],P=i[15],C=s[0],w=s[4],L=s[8],E=s[12],M=s[1],D=s[5],V=s[9],O=s[13],W=s[2],q=s[6],X=s[10],st=s[14],B=s[3],ut=s[7],_t=s[11],wt=s[15];return r[0]=o*C+a*M+c*W+l*B,r[4]=o*w+a*D+c*q+l*ut,r[8]=o*L+a*V+c*X+l*_t,r[12]=o*E+a*O+c*st+l*wt,r[1]=h*C+d*M+u*W+f*B,r[5]=h*w+d*D+u*q+f*ut,r[9]=h*L+d*V+u*X+f*_t,r[13]=h*E+d*O+u*st+f*wt,r[2]=g*C+_*M+m*W+p*B,r[6]=g*w+_*D+m*q+p*ut,r[10]=g*L+_*V+m*X+p*_t,r[14]=g*E+_*O+m*st+p*wt,r[3]=y*C+x*M+v*W+P*B,r[7]=y*w+x*D+v*q+P*ut,r[11]=y*L+x*V+v*X+P*_t,r[15]=y*E+x*O+v*st+P*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*f-i*c*f)+_*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-i*o*u+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,x=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,v=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,P=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,C=e*y+i*x+s*v+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=y*w,t[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*w,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*w,t[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*f-i*c*f)*w,t[4]=x*w,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*w,t[8]=v*w,t[9]=(g*d*r-h*_*r-g*i*f+e*_*f+h*i*p-e*d*p)*w,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*p+e*a*p)*w,t[11]=(h*a*r-o*d*r-h*i*l+e*d*l+o*i*f-e*a*f)*w,t[12]=P*w,t[13]=(h*_*s-g*d*s+g*i*u-e*_*u-h*i*m+e*d*m)*w,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*i*c-e*d*c-o*i*u+e*a*u)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,y=c*l,x=c*h,v=c*d,P=i.x,C=i.y,w=i.z;return s[0]=(1-(_+p))*P,s[1]=(f+v)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(u+p))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(g+x)*w,s[9]=(m-y)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const l=1/r,h=1/o,d=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pn){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s);let f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn){const c=this.elements,l=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*l,f=(i+s)*h;let g,_;if(a===Pn)g=(o+r)*d,_=-2*d;else if(a===Br)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new R,on=new At,Ad=new R(0,0,0),Cd=new R(1,1,1),Vn=new R,nr=new R,We=new R,Ul=new At,Nl=new Un;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rd=0;const Fl=new R,Fi=new Un,En=new At,ir=new R,ys=new R,Pd=new R,Ld=new Un,Ol=new R(1,0,0),kl=new R(0,1,0),Bl=new R(0,0,1),zl={type:"added"},Dd={type:"removed"},Oi={type:"childadded",child:null},fo={type:"childremoved",child:null};class Ve extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new R,e=new Nn,i=new Un,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Ht}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ys,ir,this.up):En.lookAt(ir,ys,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(En),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new R(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new R,wn=new R,po=new R,Tn=new R,ki=new R,Bi=new R,Hl=new R,mo=new R,go=new R,_o=new R,vo=new ge,xo=new ge,yo=new ge;class Qe{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){an.subVectors(s,e),wn.subVectors(i,e),po.subVectors(t,e);const o=an.dot(an),a=an.dot(wn),c=an.dot(po),l=wn.dot(wn),h=wn.dot(po),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,i),yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vo,r.x),o.addScaledVector(xo,r.y),o.addScaledVector(yo,r.z),o}static isFrontFacing(t,e,i,s){return an.subVectors(i,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,i),Bi.subVectors(r,i),mo.subVectors(t,i);const c=ki.dot(mo),l=Bi.dot(mo);if(c<=0&&l<=0)return e.copy(i);go.subVectors(t,s);const h=ki.dot(go),d=Bi.dot(go);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(ki,o);_o.subVectors(t,r);const f=ki.dot(_o),g=Bi.dot(_o);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Bi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Hl,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(ki,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Mo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=$a(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Mo(o,r,t+1/3),this.g=Mo(o,r,t),this.b=Mo(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const i=ph[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Te(Ie.r*255,0,255))*65536+Math.round(Te(Ie.g*255,0,255))*256+Math.round(Te(Ie.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Oe){Jt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,s=Ie.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(sr);const i=Ps(Gn.h,sr.h,e),s=Ps(Gn.s,sr.s,e),r=Ps(Gn.l,sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Vt;Vt.NAMES=ph;let Id=0;class Vs extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ti(),this.name="",this.blending=Ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ns extends Vs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new R,rr=new Q;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=El,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}}class mh extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gh extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Bt extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ud=0;const je=new At,So=new Ve,zi=new R,Xe=new Fn,Ms=new Fn,Ee=new R;class pe extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?gh:mh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Xe.min,Ms.min),Xe.expandByPoint(Ee),Ee.addVectors(Xe.max,Ms.max),Xe.expandByPoint(Ee)):(Xe.expandByPoint(Ms.min),Xe.expandByPoint(Ms.max))}Xe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(zi.fromBufferAttribute(t,l),Ee.add(zi)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new R,c[L]=new R;const l=new R,h=new R,d=new R,u=new Q,f=new Q,g=new Q,_=new R,m=new R;function p(L,E,M){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(_),a[E].add(_),a[M].add(_),c[L].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,E=y.length;L<E;++L){const M=y[L],D=M.start,V=M.count;for(let O=D,W=D+V;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new R,v=new R,P=new R,C=new R;function w(L){P.fromBufferAttribute(s,L),C.copy(P);const E=a[L];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(C,E);const D=v.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,E=y.length;L<E;++L){const M=y[L],D=M.start,V=M.count;for(let O=D,W=D+V;O<W;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new dn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new At,ai=new Zr,or=new Ai,Gl=new R,ar=new R,lr=new R,cr=new R,bo=new R,hr=new R,Wl=new R,ur=new R;class ie extends Ve{constructor(t=new pe,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(bo.fromBufferAttribute(d,t),o?hr.addScaledVector(bo,h):hr.addScaledVector(bo.sub(e),h))}e.add(hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(or.containsPoint(ai.origin)===!1&&(ai.intersectSphere(or,Gl)===null||ai.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,P=x;v<P;v+=3){const C=a.getX(v),w=a.getX(v+1),L=a.getX(v+2);s=dr(this,p,t,i,l,h,d,C,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=dr(this,o,t,i,l,h,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,P=x;v<P;v+=3){const C=v,w=v+1,L=v+2;s=dr(this,p,t,i,l,h,d,C,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;s=dr(this,o,t,i,l,h,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nd(n,t,e,i,s,r,o,a){let c;if(t.side===ke?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Qn,a),c===null)return null;ur.copy(a),ur.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:n}}function dr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ar),n.getVertexPosition(c,lr),n.getVertexPosition(l,cr);const h=Nd(n,t,e,i,ar,lr,cr,Wl);if(h){const d=new R;Qe.getBarycoord(Wl,ar,lr,cr,d),s&&(h.uv=Qe.getInterpolatedAttribute(s,a,c,l,d,new Q)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,a,c,l,d,new Q)),o&&(h.normal=Qe.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};Qe.getNormal(ar,lr,cr,u.normal),h.face=u,h.barycoord=d}return h}class tn extends pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function g(_,m,p,y,x,v,P,C,w,L,E){const M=v/w,D=P/L,V=v/2,O=P/2,W=C/2,q=w+1,X=L+1;let st=0,B=0;const ut=new R;for(let _t=0;_t<X;_t++){const wt=_t*D-O;for(let Ot=0;Ot<q;Ot++){const Yt=Ot*M-V;ut[_]=Yt*y,ut[m]=wt*x,ut[p]=W,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),d.push(Ot/w),d.push(1-_t/L),st+=1}}for(let _t=0;_t<L;_t++)for(let wt=0;wt<w;wt++){const Ot=u+wt+q*_t,Yt=u+wt+q*(_t+1),J=u+(wt+1)+q*(_t+1),ct=u+(wt+1)+q*_t;c.push(Ot,Yt,ct),c.push(Yt,J,ct),B+=6}a.addGroup(f,B,E),f+=B,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=cs(n[e]);for(const s in i)t[s]=i[s]}return t}function Fd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _h(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Od={clone:cs,merge:Fe};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends Vs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vh extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new R,Xl=new Q,Yl=new Q;class Je extends vh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,Yl),e.subVectors(Yl,Xl)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class zd extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new Je(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const o=new Je(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const a=new Je(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const c=new Je(Hi,Vi,t,e);c.layers=this.layers,this.add(c);const l=new Je(Hi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xh extends Pe{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hd extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Zn});r.uniforms.tEquirect.value=e;const o=new ie(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=_n),new zd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Eo=new R,Vd=new R,Gd=new Ht;class Xn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Eo.subVectors(i,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ai,fr=new R;class yh{constructor(t=new Xn,e=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(i[0].setComponents(c-r,u-l,m-f,v-p).normalize(),i[1].setComponents(c+r,u+l,m+f,v+p).normalize(),i[2].setComponents(c+o,u+h,m+g,v+y).normalize(),i[3].setComponents(c-o,u-h,m-g,v-y).normalize(),i[4].setComponents(c-a,u-d,m-_,v-x).normalize(),e===Pn)i[5].setComponents(c+a,u+d,m+_,v+x).normalize();else if(e===Br)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Wd(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ci extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let x=0;x<l;x++){const v=x*d-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,v=y+l*(p+1),P=y+1+l*(p+1),C=y+1+l*p;f.push(x,v,C),f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qp=`#define DISTANCE
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
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,um=`#define NORMAL
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
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xm=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Xd,alphahash_pars_fragment:Yd,alphamap_fragment:$d,alphamap_pars_fragment:qd,alphatest_fragment:jd,alphatest_pars_fragment:Zd,aomap_fragment:Kd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:Mf,colorspace_fragment:Sf,colorspace_pars_fragment:bf,envmap_fragment:Ef,envmap_common_pars_fragment:wf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:kf,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:Yf,lights_fragment_end:$f,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:bp,dithering_pars_fragment:Ep,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Ip,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:kp,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:Yp,backgroundCube_vert:$p,backgroundCube_frag:qp,cube_vert:jp,cube_frag:Zp,depth_vert:Kp,depth_frag:Jp,distanceRGBA_vert:Qp,distanceRGBA_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:xm,points_frag:ym,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:bm,sprite_frag:Em},vt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Fe([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Fe([vt.lights,vt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const pr={r:0,b:0,g:0},ci=new Nn,wm=new At;function Tm(n,t,e,i,s,r,o){const a=new Vt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===qr)?(h===void 0&&(h=new ie(new tn(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:cs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(x.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(ci)),h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==se,(d!==v||u!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ie(new Ci(2,2),new Ce({name:"BackgroundMaterial",uniforms:cs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(pr,_h(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m}}function Am(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,D,V,O,W){let q=!1;const X=d(O,V,D);r!==X&&(r=X,l(r.object)),q=f(M,O,V,W),q&&g(M,O,V,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(M,D,V,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,D,V){const O=V.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let X=q[O];return X===void 0&&(X=u(c()),q[O]=X),X}function u(M){const D=[],V=[],O=[];for(let W=0;W<e;W++)D[W]=0,V[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,D,V,O){const W=r.attributes,q=D.attributes;let X=0;const st=V.getAttributes();for(const B in st)if(st[B].location>=0){const _t=W[B];let wt=q[B];if(wt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),_t===void 0||_t.attribute!==wt||wt&&_t.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(M,D,V,O){const W={},q=D.attributes;let X=0;const st=V.getAttributes();for(const B in st)if(st[B].location>=0){let _t=q[B];_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const wt={};wt.attribute=_t,_t&&_t.data&&(wt.data=_t.data),W[B]=wt,X++}r.attributes=W,r.attributesNum=X,r.index=O}function _(){const M=r.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const V=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;V[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),W[M]!==D&&(n.vertexAttribDivisor(M,D),W[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let V=0,O=D.length;V<O;V++)D[V]!==M[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function x(M,D,V,O,W,q,X){X===!0?n.vertexAttribIPointer(M,D,V,W,q):n.vertexAttribPointer(M,D,V,O,W,q)}function v(M,D,V,O){_();const W=O.attributes,q=V.getAttributes(),X=D.defaultAttributeValues;for(const st in q){const B=q[st];if(B.location>=0){let ut=W[st];if(ut===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const _t=ut.normalized,wt=ut.itemSize,Ot=t.get(ut);if(Ot===void 0)continue;const Yt=Ot.buffer,J=Ot.type,ct=Ot.bytesPerElement,xt=J===n.INT||J===n.UNSIGNED_INT||ut.gpuType===za;if(ut.isInterleavedBufferAttribute){const z=ut.data,at=z.stride,Z=ut.offset;if(z.isInstancedInterleavedBuffer){for(let G=0;G<B.locationSize;G++)p(B.location+G,z.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let G=0;G<B.locationSize;G++)m(B.location+G);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let G=0;G<B.locationSize;G++)x(B.location+G,wt/B.locationSize,J,_t,at*ct,(Z+wt/B.locationSize*G)*ct,xt)}else{if(ut.isInstancedBufferAttribute){for(let z=0;z<B.locationSize;z++)p(B.location+z,ut.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let z=0;z<B.locationSize;z++)m(B.location+z);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let z=0;z<B.locationSize;z++)x(B.location+z,wt/B.locationSize,J,_t,wt*ct,wt/B.locationSize*z*ct,xt)}}else if(X!==void 0){const _t=X[st];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(B.location,_t);break;case 3:n.vertexAttrib3fv(B.location,_t);break;case 4:n.vertexAttrib4fv(B.location,_t);break;default:n.vertexAttrib1fv(B.location,_t)}}}}y()}function P(){L();for(const M in i){const D=i[M];for(const V in D){const O=D[V];for(const W in O)h(O[W].object),delete O[W];delete D[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const V in D){const O=D[V];for(const W in O)h(O[W].object),delete O[W];delete D[V]}delete i[M.id]}function w(M){for(const D in i){const V=i[D];if(V[M.id]===void 0)continue;const O=V[M.id];for(const W in O)h(O[W].object),delete O[W];delete V[M.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Cm(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===Hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==In&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vn&&!L)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:C}}function Pm(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Xn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,x=y*4;let v=p.clippingState||null;c.value=v,v=h(g,u,x,f);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Lm(n){let t=new WeakMap;function e(o,a){return a===Ko?o.mapping=rs:a===Jo&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===Jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hd(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Sh extends vh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,$l=[.125,.215,.35,.446,.526,.582],pi=20,wo=new Sh,ql=new Vt;let To=null,Ao=0,Co=0,Ro=!1;const ui=(1+Math.sqrt(5))/2,Gi=1/ui,jl=[new R(-ui,Gi,0),new R(ui,Gi,0),new R(-Gi,0,ui),new R(Gi,0,ui),new R(0,ui,-Gi),new R(0,ui,Gi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ao,Co),this._renderer.xr.enabled=Ro,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Hs,format:hn,colorSpace:fs,depthBuffer:!1},s=Kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Im(r,t,e)}return s}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,i,s){const a=new Je(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ql),h.toneMapping=Kn,h.autoClear=!1;const f=new ns({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new ie(new tn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ql),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;mr(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rs||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;mr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,wo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ie(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let y=0;for(let w=0;w<pi;++w){const L=w/_,E=Math.exp(-L*L/2);p.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const v=this._sizeLods[s],P=3*v*(s>x-qi?s-x+qi:0),C=4*(this._cubeSize-v);mr(e,P,C,3*v,2*v),c.setRenderTarget(e),c.render(d,wo)}}function Dm(n){const t=[],e=[],i=[];let s=n;const r=n-qi+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-qi?c=$l[o-n+qi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,L=C>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(E,_*g*C),x.set(u,m*g*C);const M=[C,C,C,C,C,C];v.set(M,p*g*C)}const P=new pe;P.setAttribute("position",new dn(y,_)),P.setAttribute("uv",new dn(x,m)),P.setAttribute("faceIndex",new dn(v,p)),t.push(P),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kl(n,t,e){const i=new ei(n,t,e);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Im(n,t,e){const i=new Float32Array(pi),s=new R(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Jl(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Um(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ko||c===Jo,h=c===rs||c===os;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Zl(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Zl(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Nm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Fm(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const P=y[x+0],C=y[x+1],w=y[x+2];u.push(P,C,C,w,w,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const P=x+0,C=x+1,w=x+2;u.push(P,C,C,w,w,P)}}else return;const m=new(uh(u)?gh:mh)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Om(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function km(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Bm(n,t,e){const i=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*C*4*d),L=new fh(w,P,C,d);L.type=vn,L.needsUpdate=!0;const E=v*4;for(let D=0;D<d;D++){const V=p[D],O=y[D],W=x[D],q=P*C*4*D;for(let X=0;X<V.count;X++){const st=X*E;g===!0&&(s.fromBufferAttribute(V,X),w[q+st+0]=s.x,w[q+st+1]=s.y,w[q+st+2]=s.z,w[q+st+3]=0),_===!0&&(s.fromBufferAttribute(O,X),w[q+st+4]=s.x,w[q+st+5]=s.y,w[q+st+6]=s.z,w[q+st+7]=0),m===!0&&(s.fromBufferAttribute(W,X),w[q+st+8]=s.x,w[q+st+9]=s.y,w[q+st+10]=s.z,w[q+st+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Q(P,C)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function zm(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Za extends Pe{constructor(t,e,i,s,r,o,a,c,l,h=Qi){if(h!==Qi&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qi&&(i=ti),i===void 0&&h===ls&&(i=as),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bh=new Pe,tc=new Za(1,1),Eh=new fh,wh=new wd,Th=new xh,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function ps(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kr(n,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function Wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function Xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),be(e,i)}}function Ym(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),be(e,i)}}function $m(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),be(e,i)}}function qm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function Km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function Jm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function n0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=hh,r=tc):r=bh,e.setTexture2D(t||r,s)}function i0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||wh,s)}function s0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Th,s)}function r0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Eh,s)}function o0(n){switch(n){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return qm;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return Jm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(n,t){n.uniform1fv(this.addr,t)}function l0(n,t){const e=ps(t,this.size,2);n.uniform2fv(this.addr,e)}function c0(n,t){const e=ps(t,this.size,3);n.uniform3fv(this.addr,e)}function h0(n,t){const e=ps(t,this.size,4);n.uniform4fv(this.addr,e)}function u0(n,t){const e=ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d0(n,t){const e=ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function f0(n,t){const e=ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function p0(n,t){n.uniform1iv(this.addr,t)}function m0(n,t){n.uniform2iv(this.addr,t)}function g0(n,t){n.uniform3iv(this.addr,t)}function _0(n,t){n.uniform4iv(this.addr,t)}function v0(n,t){n.uniform1uiv(this.addr,t)}function x0(n,t){n.uniform2uiv(this.addr,t)}function y0(n,t){n.uniform3uiv(this.addr,t)}function M0(n,t){n.uniform4uiv(this.addr,t)}function S0(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bh,r[o])}function b0(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wh,r[o])}function E0(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Th,r[o])}function w0(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Eh,r[o])}function T0(n){switch(n){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}class A0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}}class C0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}}class R0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function oc(n,t){n.seq.push(t),n.map[t.id]=t}function P0(n,t,e){const i=n.name,s=i.length;for(Po.lastIndex=0;;){const r=Po.exec(i),o=Po.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oc(e,l===void 0?new A0(a,n,t):new C0(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new R0(a),oc(e,d)),e=d}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);P0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ac(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const L0=37297;let D0=0;function I0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const lc=new Ht;function U0(n){Jt._getMatrix(lc,Jt.workingColorSpace,n);const t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case jr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+I0(n.getShaderSource(t),o)}else return s}function N0(n,t){const e=U0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(n,t){let e;switch(t){case Nu:e="Linear";break;case Fu:e="Reinhard";break;case Ou:e="Cineon";break;case ku:e="ACESFilmic";break;case zu:e="AgX";break;case Hu:e="Neutral";break;case Bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new R;function O0(){Jt.getLuminanceCoefficients(gr);const n=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function B0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function z0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cs(n){return n!==""}function hc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(n){return n.replace(H0,G0)}const V0=new Map;function G0(n,t){let e=qt[t];if(e===void 0){const i=V0.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(n){return n.replace(W0,X0)}function X0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Y0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function $0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function j0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function Z0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function K0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Y0(e),l=$0(e),h=q0(e),d=j0(e),u=Z0(e),f=k0(e),g=B0(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Aa(o),o=hc(o,e),o=uc(o,e),a=Aa(a),a=hc(a,e),a=uc(a,e),o=dc(o),a=dc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,P=ac(s,s.VERTEX_SHADER,x),C=ac(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(C).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,C);else{const st=cc(s,P,"vertex"),B=cc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+st+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:q,programLog:V,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(P),s.deleteShader(C),L=new Fr(s,_),E=z0(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,L0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tg(t),e.set(t,i)),i}}class tg{constructor(t){this.id=J0++,this.code=t,this.usedTimes=0}}function eg(n,t,e,i,s,r,o){const a=new qa,c=new Q0,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,V,O){const W=V.fog,q=O.geometry,X=E.isMeshStandardMaterial?V.environment:null,st=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),B=st&&st.mapping===qr?st.image.height:null,ut=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=_t!==void 0?_t.length:0;let Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let Yt,J,ct,xt;if(ut){const ne=mn[ut];Yt=ne.vertexShader,J=ne.fragmentShader}else Yt=E.vertexShader,J=E.fragmentShader,c.update(E),ct=c.getVertexShaderID(E),xt=c.getFragmentShaderID(E);const z=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),Z=O.isInstancedMesh===!0,G=O.isBatchedMesh===!0,it=!!E.map,k=!!E.matcap,j=!!st,T=!!E.aoMap,ot=!!E.lightMap,et=!!E.bumpMap,mt=!!E.normalMap,ht=!!E.displacementMap,Pt=!!E.emissiveMap,gt=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,tt=E.dispersion>0,lt=E.iridescence>0,nt=E.sheen>0,Lt=E.transmission>0,yt=S&&!!E.anisotropyMap,Tt=H&&!!E.clearcoatMap,jt=H&&!!E.clearcoatNormalMap,dt=H&&!!E.clearcoatRoughnessMap,Ct=lt&&!!E.iridescenceMap,Ft=lt&&!!E.iridescenceThicknessMap,kt=nt&&!!E.sheenColorMap,Rt=nt&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,$t=!!E.specularColorMap,ae=!!E.specularIntensityMap,U=Lt&&!!E.transmissionMap,Mt=Lt&&!!E.thicknessMap,K=!!E.gradientMap,rt=!!E.alphaMap,Et=E.alphaTest>0,St=!!E.alphaHash,Gt=!!E.extensions;let me=Kn;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(me=n.toneMapping);const Le={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:J,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:G,batchingColor:G&&O._colorsTexture!==null,instancing:Z,instancingColor:Z&&O.instanceColor!==null,instancingMorph:Z&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:fs,alphaToCoverage:!!E.alphaToCoverage,map:it,matcap:k,envMap:j,envMapMode:j&&st.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:ot,bumpMap:et,normalMap:mt,displacementMap:u&&ht,emissiveMap:Pt,normalMapObjectSpace:mt&&E.normalMapType===Yu,normalMapTangentSpace:mt&&E.normalMapType===Xu,metalnessMap:gt,roughnessMap:A,anisotropy:S,anisotropyMap:yt,clearcoat:H,clearcoatMap:Tt,clearcoatNormalMap:jt,clearcoatRoughnessMap:dt,dispersion:tt,iridescence:lt,iridescenceMap:Ct,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:kt,sheenRoughnessMap:Rt,specularMap:Zt,specularColorMap:$t,specularIntensityMap:ae,transmission:Lt,transmissionMap:U,thicknessMap:Mt,gradientMap:K,opaque:E.transparent===!1&&E.blending===Ji&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:St,combine:E.combine,mapUv:it&&_(E.map.channel),aoMapUv:T&&_(E.aoMap.channel),lightMapUv:ot&&_(E.lightMap.channel),bumpMapUv:et&&_(E.bumpMap.channel),normalMapUv:mt&&_(E.normalMap.channel),displacementMapUv:ht&&_(E.displacementMap.channel),emissiveMapUv:Pt&&_(E.emissiveMap.channel),metalnessMapUv:gt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:yt&&_(E.anisotropyMap.channel),clearcoatMapUv:Tt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(E.sheenRoughnessMap.channel),specularMapUv:Zt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:ae&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:Mt&&_(E.thicknessMap.channel),alphaMapUv:rt&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(mt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(it||rt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:at,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:it&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||G)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(y(M,E),x(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let D;if(M){const V=mn[M];D=Od.clone(V.uniforms)}else D=E.uniforms;return D}function P(E,M){let D;for(let V=0,O=h.length;V<O;V++){const W=h[V];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new K0(n,M,E,r),h.push(D)),D}function C(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:L}}function ng(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ig(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,g,_,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||ig),i.length>1&&i.sort(u||pc),s.length>1&&s.sort(u||pc)}function h(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function sg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new mc,n.set(i,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function rg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Vt};break;case"SpotLight":e={position:new R,direction:new R,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function og(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ag=0;function lg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cg(n){const t=new rg,e=og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new At,o=new At;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,P=0,C=0,w=0;l.sort(lg);for(let E=0,M=l.length;E<M;E++){const D=l[E],V=D.color,O=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*O,d+=V.g*O,u+=V.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],O);w++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const st=D.shadow,B=e.get(D);B.shadowIntensity=st.intensity,B.shadowBias=st.bias,B.shadowNormalBias=st.normalBias,B.shadowRadius=st.radius,B.shadowMapSize=st.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=D.shadow.matrix,y++}i.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(V).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const st=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,st.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=st.matrix,D.castShadow){const B=e.get(D);B.shadowIntensity=st.intensity,B.shadowBias=st.bias,B.shadowNormalBias=st.normalBias,B.shadowRadius=st.radius,B.shadowMapSize=st.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=q,v++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(V).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const st=D.shadow,B=e.get(D);B.shadowIntensity=st.intensity,B.shadowBias=st.bias,B.shadowNormalBias=st.normalBias,B.shadowRadius=st.radius,B.shadowMapSize=st.mapSize,B.shadowCameraNear=st.camera.near,B.shadowCameraFar=st.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=w,i.version=ag++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gc(n){const t=new cg(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hg(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gc(n),t.set(s,[a])):r>=o.length?(a=new gc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ug extends Vs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends Vs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mg(n,t,e){let i=new yh;const s=new Q,r=new Q,o=new ge,a=new ug({depthPacking:Wu}),c=new dg,l={},h=e.maxTextureSize,d={[Qn]:ke,[ke]:Qn,[cn]:cn},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ie(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let p=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Zn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==Cn&&this.type===Cn,W=p===Cn&&this.type!==Cn;for(let q=0,X=C.length;q<X;q++){const st=C[q],B=st.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ut=B.getFrameExtents();if(s.multiply(ut),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,B.mapSize.y=r.y)),B.map===null||O===!0||W===!0){const wt=this.type!==Cn?{minFilter:Ye,magFilter:Ye}:{};B.map!==null&&B.map.dispose(),B.map=new ei(s.x,s.y,wt),B.map.texture.name=st.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const _t=B.getViewportCount();for(let wt=0;wt<_t;wt++){const Ot=B.getViewport(wt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),V.viewport(o),B.updateMatrices(st,wt),i=B.getFrustum(),v(w,L,B.camera,st,this.type)}B.isPointLightShadow!==!0&&this.type===Cn&&y(B,L),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,D)};function y(C,w){const L=t.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ei(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,L,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,L,f,_,null)}function x(C,w,L,E){let M=null;const D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,O=w.uuid;let W=l[V];W===void 0&&(W={},l[V]=W);let q=W[O];q===void 0&&(q=M.clone(),W[O]=q,w.addEventListener("dispose",P)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,E===Cn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=L}return M}function v(C,w,L,E,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Cn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const O=t.update(C),W=C.material;if(Array.isArray(W)){const q=O.groups;for(let X=0,st=q.length;X<st;X++){const B=q[X],ut=W[B.materialIndex];if(ut&&ut.visible){const _t=x(C,ut,E,M);C.onBeforeShadow(n,C,w,L,O,_t,B),n.renderBufferDirect(L,null,O,_t,C,B),C.onAfterShadow(n,C,w,L,O,_t,B)}}}else if(W.visible){const q=x(C,W,E,M);C.onBeforeShadow(n,C,w,L,O,q,null),n.renderBufferDirect(L,null,O,q,C,null),C.onAfterShadow(n,C,w,L,O,q,null)}}const V=C.children;for(let O=0,W=V.length;O<W;O++)v(V[O],w,L,E,M)}function P(C){C.target.removeEventListener("dispose",P);for(const L in l){const E=l[L],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const gg={[Wo]:Xo,[Yo]:jo,[$o]:Zo,[ss]:qo,[Xo]:Wo,[jo]:Yo,[Zo]:$o,[qo]:ss};function _g(n,t){function e(){let U=!1;const Mt=new ge;let K=null;const rt=new ge(0,0,0,0);return{setMask:function(Et){K!==Et&&!U&&(n.colorMask(Et,Et,Et,Et),K=Et)},setLocked:function(Et){U=Et},setClear:function(Et,St,Gt,me,Le){Le===!0&&(Et*=me,St*=me,Gt*=me),Mt.set(Et,St,Gt,me),rt.equals(Mt)===!1&&(n.clearColor(Et,St,Gt,me),rt.copy(Mt))},reset:function(){U=!1,K=null,rt.set(-1,0,0,0)}}}function i(){let U=!1,Mt=!1,K=null,rt=null,Et=null;return{setReversed:function(St){if(Mt!==St){const Gt=t.get("EXT_clip_control");Mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const me=Et;Et=null,this.setClear(me)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?z(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(St){K!==St&&!U&&(n.depthMask(St),K=St)},setFunc:function(St){if(Mt&&(St=gg[St]),rt!==St){switch(St){case Wo:n.depthFunc(n.NEVER);break;case Xo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case jo:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=St}},setLocked:function(St){U=St},setClear:function(St){Et!==St&&(Mt&&(St=1-St),n.clearDepth(St),Et=St)},reset:function(){U=!1,K=null,rt=null,Et=null,Mt=!1}}}function s(){let U=!1,Mt=null,K=null,rt=null,Et=null,St=null,Gt=null,me=null,Le=null;return{setTest:function(ne){U||(ne?z(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!U&&(n.stencilMask(ne),Mt=ne)},setFunc:function(ne,nn,yn){(K!==ne||rt!==nn||Et!==yn)&&(n.stencilFunc(ne,nn,yn),K=ne,rt=nn,Et=yn)},setOp:function(ne,nn,yn){(St!==ne||Gt!==nn||me!==yn)&&(n.stencilOp(ne,nn,yn),St=ne,Gt=nn,me=yn)},setLocked:function(ne){U=ne},setClear:function(ne){Le!==ne&&(n.clearStencil(ne),Le=ne)},reset:function(){U=!1,Mt=null,K=null,rt=null,Et=null,St=null,Gt=null,me=null,Le=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,P=null,C=null,w=new Vt(0,0,0),L=0,E=!1,M=null,D=null,V=null,O=null,W=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,st=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=st>=1):B.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=st>=2);let ut=null,_t={};const wt=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),Yt=new ge().fromArray(wt),J=new ge().fromArray(Ot);function ct(U,Mt,K,rt){const Et=new Uint8Array(4),St=n.createTexture();n.bindTexture(U,St),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<K;Gt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(Mt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return St}const xt={};xt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),xt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(n.DEPTH_TEST),o.setFunc(ss),et(!1),mt(xl),z(n.CULL_FACE),T(Zn);function z(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function at(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Z(U,Mt){return d[U]!==Mt?(n.bindFramebuffer(U,Mt),d[U]=Mt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Mt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function G(U,Mt){let K=f,rt=!1;if(U){K=u.get(Mt),K===void 0&&(K=[],u.set(Mt,K));const Et=U.textures;if(K.length!==Et.length||K[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Gt=Et.length;St<Gt;St++)K[St]=n.COLOR_ATTACHMENT0+St;K.length=Et.length,rt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,rt=!0);rt&&n.drawBuffers(K)}function it(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const k={[fi]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[_u]:n.FUNC_REVERSE_SUBTRACT};k[vu]=n.MIN,k[xu]=n.MAX;const j={[yu]:n.ZERO,[Mu]:n.ONE,[Su]:n.SRC_COLOR,[Vo]:n.SRC_ALPHA,[Cu]:n.SRC_ALPHA_SATURATE,[Tu]:n.DST_COLOR,[Eu]:n.DST_ALPHA,[bu]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[wu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Pu]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function T(U,Mt,K,rt,Et,St,Gt,me,Le,ne){if(U===Zn){_===!0&&(at(n.BLEND),_=!1);return}if(_===!1&&(z(n.BLEND),_=!0),U!==mu){if(U!==m||ne!==E){if((p!==fi||v!==fi)&&(n.blendEquation(n.FUNC_ADD),p=fi,v=fi),ne)switch(U){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,P=null,C=null,w.set(0,0,0),L=0,m=U,E=ne}return}Et=Et||Mt,St=St||K,Gt=Gt||rt,(Mt!==p||Et!==v)&&(n.blendEquationSeparate(k[Mt],k[Et]),p=Mt,v=Et),(K!==y||rt!==x||St!==P||Gt!==C)&&(n.blendFuncSeparate(j[K],j[rt],j[St],j[Gt]),y=K,x=rt,P=St,C=Gt),(me.equals(w)===!1||Le!==L)&&(n.blendColor(me.r,me.g,me.b,Le),w.copy(me),L=Le),m=U,E=!1}function ot(U,Mt){U.side===cn?at(n.CULL_FACE):z(n.CULL_FACE);let K=U.side===ke;Mt&&(K=!K),et(K),U.blending===Ji&&U.transparent===!1?T(Zn):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const rt=U.stencilWrite;a.setTest(rt),rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function mt(U){U!==du?(z(n.CULL_FACE),U!==D&&(U===xl?n.cullFace(n.BACK):U===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),D=U}function ht(U){U!==V&&(X&&n.lineWidth(U),V=U)}function Pt(U,Mt,K){U?(z(n.POLYGON_OFFSET_FILL),(O!==Mt||W!==K)&&(n.polygonOffset(Mt,K),O=Mt,W=K)):at(n.POLYGON_OFFSET_FILL)}function gt(U){U?z(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function A(U){U===void 0&&(U=n.TEXTURE0+q-1),ut!==U&&(n.activeTexture(U),ut=U)}function S(U,Mt,K){K===void 0&&(ut===null?K=n.TEXTURE0+q-1:K=ut);let rt=_t[K];rt===void 0&&(rt={type:void 0,texture:void 0},_t[K]=rt),(rt.type!==U||rt.texture!==Mt)&&(ut!==K&&(n.activeTexture(K),ut=K),n.bindTexture(U,Mt||xt[U]),rt.type=U,rt.texture=Mt)}function H(){const U=_t[ut];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(U){Yt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function Rt(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function Zt(U,Mt){let K=l.get(Mt);K===void 0&&(K=new WeakMap,l.set(Mt,K));let rt=K.get(U);rt===void 0&&(rt=n.getUniformBlockIndex(Mt,U.name),K.set(U,rt))}function $t(U,Mt){const rt=l.get(Mt).get(U);c.get(Mt)!==rt&&(n.uniformBlockBinding(Mt,rt,U.__bindingPointIndex),c.set(Mt,rt))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,_t={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,P=null,C=null,w=new Vt(0,0,0),L=0,E=!1,M=null,D=null,V=null,O=null,W=null,Yt.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:at,bindFramebuffer:Z,drawBuffers:G,useProgram:it,setBlending:T,setMaterial:ot,setFlipSided:et,setCullFace:mt,setLineWidth:ht,setPolygonOffset:Pt,setScissorTest:gt,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Ct,texImage3D:Ft,updateUBOMapping:Zt,uniformBlockBinding:$t,texStorage2D:jt,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:Lt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:kt,viewport:Rt,reset:ae}}function _c(n,t,e,i){const s=vg(i);switch(e){case sh:return n*t;case oh:return n*t;case ah:return n*t*2;case Ga:return n*t/s.components*s.byteLength;case Wa:return n*t/s.components*s.byteLength;case lh:return n*t*2/s.components*s.byteLength;case Xa:return n*t*2/s.components*s.byteLength;case rh:return n*t*3/s.components*s.byteLength;case hn:return n*t*4/s.components*s.byteLength;case Ya:return n*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(n,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(n,8)*Math.max(t,8)/2;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case da:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ma:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ga:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Sa:case ba:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ch:case Ea:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wa:case Ta:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(n){switch(n){case In:case eh:return{byteLength:1,components:1};case Ns:case nh:case Hs:return{byteLength:2,components:1};case Ha:case Va:return{byteLength:2,components:4};case ti:case za:case vn:return{byteLength:4,components:1};case ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):zr("canvas")}function _(A,S,H){let tt=1;const lt=gt(A);if((lt.width>H||lt.height>H)&&(tt=H/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const nt=Math.floor(tt*lt.width),Lt=Math.floor(tt*lt.height);d===void 0&&(d=g(nt,Lt));const yt=S?g(nt,Lt):d;return yt.width=nt,yt.height=Lt,yt.getContext("2d").drawImage(A,0,0,nt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+Lt+")."),yt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,S,H,tt,lt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt=S;if(S===n.RED&&(H===n.FLOAT&&(nt=n.R32F),H===n.HALF_FLOAT&&(nt=n.R16F),H===n.UNSIGNED_BYTE&&(nt=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(nt=n.R8UI),H===n.UNSIGNED_SHORT&&(nt=n.R16UI),H===n.UNSIGNED_INT&&(nt=n.R32UI),H===n.BYTE&&(nt=n.R8I),H===n.SHORT&&(nt=n.R16I),H===n.INT&&(nt=n.R32I)),S===n.RG&&(H===n.FLOAT&&(nt=n.RG32F),H===n.HALF_FLOAT&&(nt=n.RG16F),H===n.UNSIGNED_BYTE&&(nt=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(nt=n.RG8UI),H===n.UNSIGNED_SHORT&&(nt=n.RG16UI),H===n.UNSIGNED_INT&&(nt=n.RG32UI),H===n.BYTE&&(nt=n.RG8I),H===n.SHORT&&(nt=n.RG16I),H===n.INT&&(nt=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),H===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),H===n.UNSIGNED_INT&&(nt=n.RGB32UI),H===n.BYTE&&(nt=n.RGB8I),H===n.SHORT&&(nt=n.RGB16I),H===n.INT&&(nt=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),H===n.UNSIGNED_INT&&(nt=n.RGBA32UI),H===n.BYTE&&(nt=n.RGBA8I),H===n.SHORT&&(nt=n.RGBA16I),H===n.INT&&(nt=n.RGBA32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),S===n.RGBA){const Lt=lt?jr:Jt.getTransfer(tt);H===n.FLOAT&&(nt=n.RGBA32F),H===n.HALF_FLOAT&&(nt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(nt=Lt===se?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(A,S){let H;return A?S===null||S===ti||S===as?H=n.DEPTH24_STENCIL8:S===vn?H=n.DEPTH32F_STENCIL8:S===Ns&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===as?H=n.DEPTH_COMPONENT24:S===vn?H=n.DEPTH_COMPONENT32F:S===Ns&&(H=n.DEPTH_COMPONENT16),H}function P(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),L(S),S.isVideoTexture&&h.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),M(S)}function L(A){const S=i.get(A);if(S.__webglInit===void 0)return;const H=A.source,tt=u.get(H);if(tt){const lt=tt[S.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(A),Object.keys(tt).length===0&&u.delete(H)}i.remove(A)}function E(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const H=A.source,tt=u.get(H);delete tt[S.__cacheKey],o.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let lt=0;lt<S.__webglFramebuffer[tt].length;lt++)n.deleteFramebuffer(S.__webglFramebuffer[tt][lt]);else n.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[tt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let tt=0,lt=H.length;tt<lt;tt++){const nt=i.get(H[tt]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(H[tt])}i.remove(A)}let D=0;function V(){D=0}function O(){const A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const H=i.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,A,S);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function X(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function st(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,S);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function B(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ct(H,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const ut={[Qo]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[ta]:n.MIRRORED_REPEAT},_t={[Ye]:n.NEAREST,[Vu]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[io]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},wt={[$u]:n.NEVER,[Qu]:n.ALWAYS,[qu]:n.LESS,[hh]:n.LEQUAL,[ju]:n.EQUAL,[Ju]:n.GEQUAL,[Zu]:n.GREATER,[Ku]:n.NOTEQUAL};function Ot(A,S){if(S.type===vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===io||S.magFilter===Zs||S.magFilter===jn||S.minFilter===_n||S.minFilter===io||S.minFilter===Zs||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ut[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ut[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ut[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_t[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_t[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==Zs&&S.minFilter!==jn||S.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const tt=S.source;let lt=u.get(tt);lt===void 0&&(lt={},u.set(tt,lt));const nt=W(S);if(nt!==A.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),lt[nt].usedTimes++;const Lt=lt[A.__cacheKey];Lt!==void 0&&(lt[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(S)),A.__cacheKey=nt,A.__webglTexture=lt[nt].texture}return H}function J(A,S,H){let tt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=n.TEXTURE_3D);const lt=Yt(A,S),nt=S.source;e.bindTexture(tt,A.__webglTexture,n.TEXTURE0+H);const Lt=i.get(nt);if(nt.version!==Lt.__version||lt===!0){e.activeTexture(n.TEXTURE0+H);const yt=Jt.getPrimaries(Jt.workingColorSpace),Tt=S.colorSpace===qn?null:Jt.getPrimaries(S.colorSpace),jt=S.colorSpace===qn||yt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let dt=_(S.image,!1,s.maxTextureSize);dt=Pt(S,dt);const Ct=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let kt=x(S.internalFormat,Ct,Ft,S.colorSpace,S.isVideoTexture);Ot(tt,S);let Rt;const Zt=S.mipmaps,$t=S.isVideoTexture!==!0,ae=Lt.__version===void 0||lt===!0,U=nt.dataReady,Mt=P(S,dt);if(S.isDepthTexture)kt=v(S.format===ls,S.type),ae&&($t?e.texStorage2D(n.TEXTURE_2D,1,kt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,Ft,null));else if(S.isDataTexture)if(Zt.length>0){$t&&ae&&e.texStorage2D(n.TEXTURE_2D,Mt,kt,Zt[0].width,Zt[0].height);for(let K=0,rt=Zt.length;K<rt;K++)Rt=Zt[K],$t?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,Ft,Rt.data):e.texImage2D(n.TEXTURE_2D,K,kt,Rt.width,Rt.height,0,Ct,Ft,Rt.data);S.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(n.TEXTURE_2D,Mt,kt,dt.width,dt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,Ft,dt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,Ft,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,kt,Zt[0].width,Zt[0].height,dt.depth);for(let K=0,rt=Zt.length;K<rt;K++)if(Rt=Zt[K],S.format!==hn)if(Ct!==null)if($t){if(U)if(S.layerUpdates.size>0){const Et=_c(Rt.width,Rt.height,S.format,S.type);for(const St of S.layerUpdates){const Gt=Rt.data.subarray(St*Et/Rt.data.BYTES_PER_ELEMENT,(St+1)*Et/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,St,Rt.width,Rt.height,1,Ct,Gt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,kt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Ft,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,kt,Rt.width,Rt.height,dt.depth,0,Ct,Ft,Rt.data)}else{$t&&ae&&e.texStorage2D(n.TEXTURE_2D,Mt,kt,Zt[0].width,Zt[0].height);for(let K=0,rt=Zt.length;K<rt;K++)Rt=Zt[K],S.format!==hn?Ct!==null?$t?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,kt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,Ft,Rt.data):e.texImage2D(n.TEXTURE_2D,K,kt,Rt.width,Rt.height,0,Ct,Ft,Rt.data)}else if(S.isDataArrayTexture)if($t){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,kt,dt.width,dt.height,dt.depth),U)if(S.layerUpdates.size>0){const K=_c(dt.width,dt.height,S.format,S.type);for(const rt of S.layerUpdates){const Et=dt.data.subarray(rt*K/dt.data.BYTES_PER_ELEMENT,(rt+1)*K/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,Ct,Ft,Et)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ft,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,dt.width,dt.height,dt.depth,0,Ct,Ft,dt.data);else if(S.isData3DTexture)$t?(ae&&e.texStorage3D(n.TEXTURE_3D,Mt,kt,dt.width,dt.height,dt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ft,dt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,dt.width,dt.height,dt.depth,0,Ct,Ft,dt.data);else if(S.isFramebufferTexture){if(ae)if($t)e.texStorage2D(n.TEXTURE_2D,Mt,kt,dt.width,dt.height);else{let K=dt.width,rt=dt.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(n.TEXTURE_2D,Et,kt,K,rt,0,Ct,Ft,null),K>>=1,rt>>=1}}else if(Zt.length>0){if($t&&ae){const K=gt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,kt,K.width,K.height)}for(let K=0,rt=Zt.length;K<rt;K++)Rt=Zt[K],$t?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Ct,Ft,Rt):e.texImage2D(n.TEXTURE_2D,K,kt,Ct,Ft,Rt);S.generateMipmaps=!1}else if($t){if(ae){const K=gt(dt);e.texStorage2D(n.TEXTURE_2D,Mt,kt,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Ft,dt)}else e.texImage2D(n.TEXTURE_2D,0,kt,Ct,Ft,dt);m(S)&&p(tt),Lt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,H){if(S.image.length!==6)return;const tt=Yt(A,S),lt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const nt=i.get(lt);if(lt.version!==nt.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const Lt=Jt.getPrimaries(Jt.workingColorSpace),yt=S.colorSpace===qn?null:Jt.getPrimaries(S.colorSpace),Tt=S.colorSpace===qn||Lt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let rt=0;rt<6;rt++)!jt&&!dt?Ct[rt]=_(S.image[rt],!0,s.maxCubemapSize):Ct[rt]=dt?S.image[rt].image:S.image[rt],Ct[rt]=Pt(S,Ct[rt]);const Ft=Ct[0],kt=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),Zt=x(S.internalFormat,kt,Rt,S.colorSpace),$t=S.isVideoTexture!==!0,ae=nt.__version===void 0||tt===!0,U=lt.dataReady;let Mt=P(S,Ft);Ot(n.TEXTURE_CUBE_MAP,S);let K;if(jt){$t&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Zt,Ft.width,Ft.height);for(let rt=0;rt<6;rt++){K=Ct[rt].mipmaps;for(let Et=0;Et<K.length;Et++){const St=K[Et];S.format!==hn?kt!==null?$t?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,St.width,St.height,kt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,St.width,St.height,kt,Rt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Zt,St.width,St.height,0,kt,Rt,St.data)}}}else{if(K=S.mipmaps,$t&&ae){K.length>0&&Mt++;const rt=gt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){$t?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct[rt].width,Ct[rt].height,kt,Rt,Ct[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,Ct[rt].width,Ct[rt].height,0,kt,Rt,Ct[rt].data);for(let Et=0;Et<K.length;Et++){const Gt=K[Et].image[rt].image;$t?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,Gt.width,Gt.height,kt,Rt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Zt,Gt.width,Gt.height,0,kt,Rt,Gt.data)}}else{$t?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,Rt,Ct[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,kt,Rt,Ct[rt]);for(let Et=0;Et<K.length;Et++){const St=K[Et];$t?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,kt,Rt,St.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Zt,kt,Rt,St.image[rt])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),nt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,H,tt,lt,nt){const Lt=r.convert(H.format,H.colorSpace),yt=r.convert(H.type),Tt=x(H.internalFormat,Lt,yt,H.colorSpace),jt=i.get(S),dt=i.get(H);if(dt.__renderTarget=S,!jt.__hasExternalTextures){const Ct=Math.max(1,S.width>>nt),Ft=Math.max(1,S.height>>nt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Tt,Ct,Ft,S.depth,0,Lt,yt,null):e.texImage2D(lt,nt,Tt,Ct,Ft,0,Lt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),mt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,lt,dt.__webglTexture,0,et(S)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,lt,dt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function z(A,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const tt=S.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,nt=v(S.stencilBuffer,lt),Lt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=et(S);mt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,nt,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,nt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,nt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,A)}else{const tt=S.textures;for(let lt=0;lt<tt.length;lt++){const nt=tt[lt],Lt=r.convert(nt.format,nt.colorSpace),yt=r.convert(nt.type),Tt=x(nt.internalFormat,Lt,yt,nt.colorSpace),jt=et(S);H&&mt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Tt,S.width,S.height):mt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,Tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const lt=tt.__webglTexture,nt=et(S);if(S.depthTexture.format===Qi)mt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(S.depthTexture.format===ls)mt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Z(A){const S=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const lt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),S.__depthDisposeCallback=lt}S.__boundDepthTexture=tt}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=n.createRenderbuffer(),z(S.__webglDepthbuffer[tt],A,!1);else{const lt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),z(S.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(A,S,H){const tt=i.get(A);S!==void 0&&xt(tt.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Z(A)}function it(A){const S=A.texture,H=i.get(A),tt=i.get(S);A.addEventListener("dispose",w);const lt=A.textures,nt=A.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=S.version,o.memory.textures++),nt){H.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)H.__webglFramebuffer[yt][Tt]=n.createFramebuffer()}else H.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)H.__webglFramebuffer[yt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let yt=0,Tt=lt.length;yt<Tt;yt++){const jt=i.get(lt[yt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&mt(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let yt=0;yt<lt.length;yt++){const Tt=lt[yt];H.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[yt]);const jt=r.convert(Tt.format,Tt.colorSpace),dt=r.convert(Tt.type),Ct=x(Tt.internalFormat,jt,dt,Tt.colorSpace,A.isXRRenderTarget===!0),Ft=et(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Ct,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,H.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),z(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)xt(H.__webglFramebuffer[yt][Tt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else xt(H.__webglFramebuffer[yt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let yt=0,Tt=lt.length;yt<Tt;yt++){const jt=lt[yt],dt=i.get(jt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),Ot(n.TEXTURE_2D,jt),xt(H.__webglFramebuffer,A,jt,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),Ot(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)xt(H.__webglFramebuffer[Tt],A,S,n.COLOR_ATTACHMENT0,yt,Tt);else xt(H.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,yt,0);m(S)&&p(yt),e.unbindTexture()}A.depthBuffer&&Z(A)}function k(A){const S=A.textures;for(let H=0,tt=S.length;H<tt;H++){const lt=S[H];if(m(lt)){const nt=y(A),Lt=i.get(lt).__webglTexture;e.bindTexture(nt,Lt),p(nt),e.unbindTexture()}}}const j=[],T=[];function ot(A){if(A.samples>0){if(mt(A)===!1){const S=A.textures,H=A.width,tt=A.height;let lt=n.COLOR_BUFFER_BIT;const nt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(A),yt=S.length>1;if(yt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const jt=i.get(S[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,H,tt,0,0,H,tt,lt,n.NEAREST),c===!0&&(j.length=0,T.length=0,j.push(n.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(nt),T.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const jt=i.get(S[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function et(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Pt(A,S){const H=A.colorSpace,tt=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==fs&&H!==qn&&(Jt.getTransfer(H)===se?(tt!==hn||lt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=B,this.rebindTextures=G,this.setupRenderTarget=it,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=mt}function yg(n,t){function e(i,s=qn){let r;const o=Jt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eh)return n.BYTE;if(i===nh)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===za)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Hs)return n.HALF_FLOAT;if(i===sh)return n.ALPHA;if(i===rh)return n.RGB;if(i===hn)return n.RGBA;if(i===oh)return n.LUMINANCE;if(i===ah)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Ga)return n.RED;if(i===Wa)return n.RED_INTEGER;if(i===lh)return n.RG;if(i===Xa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===Lr||i===Dr||i===Ir||i===Ur)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ea||i===na||i===ia||i===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ra||i===oa||i===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ra||i===oa)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===va||i===xa||i===ya||i===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===la)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ha)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ma)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ga)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_a)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===va)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ya)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ma)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nr||i===Sa||i===ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===Ea||i===wa||i===Ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Mg extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sg={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
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

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ce({vertexShader:bg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends wi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new wg,m=e.getContextAttributes();let p=null,y=null;const x=[],v=[],P=new Q;let C=null;const w=new Je;w.viewport=new ge;const L=new Je;L.viewport=new ge;const E=[w,L],M=new Mg;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=x[J];return ct===void 0&&(ct=new Lo,x[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=x[J];return ct===void 0&&(ct=new Lo,x[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=x[J];return ct===void 0&&(ct=new Lo,x[J]=ct),ct.getHandSpace()};function O(J){const ct=v.indexOf(J.inputSource);if(ct===-1)return;const xt=x[ct];xt!==void 0&&(xt.update(J.inputSource,J.frame,l||o),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let J=0;J<x.length;J++){const ct=v[J];ct!==null&&(v[J]=null,x[J].disconnect(ct))}D=null,V=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,y=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:hn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,xt=null,z=null;m.depth&&(z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?ls:Qi,xt=m.stencil?as:ti);const at={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(at),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ei(u.textureWidth,u.textureHeight,{format:hn,type:In,depthTexture:new Za(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(J){for(let ct=0;ct<J.removed.length;ct++){const xt=J.removed[ct],z=v.indexOf(xt);z>=0&&(v[z]=null,x[z].disconnect(xt))}for(let ct=0;ct<J.added.length;ct++){const xt=J.added[ct];let z=v.indexOf(xt);if(z===-1){for(let Z=0;Z<x.length;Z++)if(Z>=v.length){v.push(xt),z=Z;break}else if(v[Z]===null){v[Z]=xt,z=Z;break}if(z===-1)break}const at=x[z];at&&at.connect(xt)}}const X=new R,st=new R;function B(J,ct,xt){X.setFromMatrixPosition(ct.matrixWorld),st.setFromMatrixPosition(xt.matrixWorld);const z=X.distanceTo(st),at=ct.projectionMatrix.elements,Z=xt.projectionMatrix.elements,G=at[14]/(at[10]-1),it=at[14]/(at[10]+1),k=(at[9]+1)/at[5],j=(at[9]-1)/at[5],T=(at[8]-1)/at[0],ot=(Z[8]+1)/Z[0],et=G*T,mt=G*ot,ht=z/(-T+ot),Pt=ht*-T;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),at[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const gt=G+ht,A=it+ht,S=et-Pt,H=mt+(z-Pt),tt=k*it/A*gt,lt=j*it/A*gt;J.projectionMatrix.makePerspective(S,H,tt,lt,gt,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ct=J.near,xt=J.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=L.near=w.near=ct,M.far=L.far=w.far=xt,(D!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,V=M.far),w.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const z=J.parent,at=M.cameras;ut(M,z);for(let Z=0;Z<at.length;Z++)ut(at[Z],z);at.length===2?B(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),_t(J,M,z)};function _t(J,ct,xt){xt===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let wt=null;function Ot(J,ct){if(h=ct.getViewerPose(l||o),g=ct,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let z=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,z=!0);for(let Z=0;Z<xt.length;Z++){const G=xt[Z];let it=null;if(f!==null)it=f.getViewport(G);else{const j=d.getViewSubImage(u,G);it=j.viewport,Z===0&&(t.setRenderTargetTextures(y,j.colorTexture,u.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(y))}let k=E[Z];k===void 0&&(k=new Je,k.layers.enable(Z),k.viewport=new ge,E[Z]=k),k.matrix.fromArray(G.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(G.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(it.x,it.y,it.width,it.height),Z===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),z===!0&&M.cameras.push(k)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const Z=d.getDepthInformation(xt[0]);Z&&Z.isValid&&Z.texture&&_.init(t,Z,s.renderState)}}for(let xt=0;xt<x.length;xt++){const z=v[xt],at=x[xt];z!==null&&at!==void 0&&at.update(z,ct,l||o)}wt&&wt(J,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Yt=new Mh;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(J){wt=J},this.dispose=function(){}}}const hi=new Nn,Ag=new At;function Cg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_h(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(hi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rg(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(y,P);const C=t.render.frame;r[y.id]!==C&&(u(y),r[y.id]=C)}function h(y){const x=d();y.__bindingPointIndex=x;const v=n.createBuffer(),P=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=s[y.id],v=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,w=v.length;C<w;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,M=L.length;E<M;E++){const D=L[E];if(f(D,C,E,P)===!0){const V=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<O.length;q++){const X=O[q],st=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,x,v,P){const C=y.value,w=x+"_"+v;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const L=P[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return P[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(y){const x=y.uniforms;let v=0;const P=16;for(let w=0,L=x.length;w<L;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,D=E.length;M<D;M++){const V=E[M],O=Array.isArray(V.value)?V.value:[V.value];for(let W=0,q=O.length;W<q;W++){const X=O[W],st=_(X),B=v%P,ut=B%st.boundary,_t=B+ut;v+=ut,_t!==0&&P-_t<st.storage&&(v+=P-_t),V.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=st.storage}}}const C=v%P;return C>0&&(v+=P-C),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Pg{constructor(t={}){const{canvas:e=_d(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let P=!1,C=0,w=0,L=null,E=-1,M=null;const D=new ge,V=new ge;let O=null;const W=new Vt(0);let q=0,X=e.width,st=e.height,B=1,ut=null,_t=null;const wt=new ge(0,0,X,st),Ot=new ge(0,0,X,st);let Yt=!1;const J=new yh;let ct=!1,xt=!1;const z=new At,at=new At,Z=new R,G=new ge,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function j(){return L===null?B:1}let T=i;function ot(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",St,!1),T===null){const N="webgl2";if(T=ot(N,b),T===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,mt,ht,Pt,gt,A,S,H,tt,lt,nt,Lt,yt,Tt,jt,dt,Ct,Ft,kt,Rt,Zt,$t,ae,U;function Mt(){et=new Nm(T),et.init(),$t=new yg(T,et),mt=new Rm(T,et,t,$t),ht=new _g(T,et),mt.reverseDepthBuffer&&u&&ht.buffers.depth.setReversed(!0),Pt=new km(T),gt=new ng,A=new xg(T,et,ht,gt,mt,$t,Pt),S=new Lm(v),H=new Um(v),tt=new Wd(T),ae=new Am(T,tt),lt=new Fm(T,tt,Pt,ae),nt=new zm(T,lt,tt,Pt),kt=new Bm(T,mt,A),dt=new Pm(gt),Lt=new eg(v,S,H,et,mt,ae,dt),yt=new Cg(v,gt),Tt=new sg,jt=new hg(et),Ft=new Tm(v,S,H,ht,nt,f,c),Ct=new mg(v,nt,mt),U=new Rg(T,Pt,mt,ht),Rt=new Cm(T,et,Pt),Zt=new Om(T,et,Pt),Pt.programs=Lt.programs,v.capabilities=mt,v.extensions=et,v.properties=gt,v.renderLists=Tt,v.shadowMap=Ct,v.state=ht,v.info=Pt}Mt();const K=new Tg(v,T);this.xr=K,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(X,st,!1))},this.getSize=function(b){return b.set(X,st)},this.setSize=function(b,N,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,st=N,e.width=Math.floor(b*B),e.height=Math.floor(N*B),Y===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*B,st*B).floor()},this.setDrawingBufferSize=function(b,N,Y){X=b,st=N,B=Y,e.width=Math.floor(b*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,N,Y,$){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,N,Y,$),ht.viewport(D.copy(wt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,N,Y,$){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,N,Y,$),ht.scissor(V.copy(Ot).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){ht.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(b=!0,N=!0,Y=!0){let $=0;if(b){let F=!1;if(L!==null){const pt=L.texture.format;F=pt===Ya||pt===Xa||pt===Wa}if(F){const pt=L.texture.type,bt=pt===In||pt===ti||pt===Ns||pt===as||pt===Ha||pt===Va,Dt=Ft.getClearColor(),It=Ft.getClearAlpha(),zt=Dt.r,Wt=Dt.g,Ut=Dt.b;bt?(g[0]=zt,g[1]=Wt,g[2]=Ut,g[3]=It,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=zt,_[1]=Wt,_[2]=Ut,_[3]=It,T.clearBufferiv(T.COLOR,0,_))}else $|=T.COLOR_BUFFER_BIT}N&&($|=T.DEPTH_BUFFER_BIT),Y&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Tt.dispose(),jt.dispose(),gt.dispose(),S.dispose(),H.dispose(),nt.dispose(),ae.dispose(),U.dispose(),Lt.dispose(),K.dispose(),K.removeEventListener("sessionstart",ul),K.removeEventListener("sessionend",dl),si.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Pt.autoReset,N=Ct.enabled,Y=Ct.autoUpdate,$=Ct.needsUpdate,F=Ct.type;Mt(),Pt.autoReset=b,Ct.enabled=N,Ct.autoUpdate=Y,Ct.needsUpdate=$,Ct.type=F}function St(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gt(b){const N=b.target;N.removeEventListener("dispose",Gt),me(N)}function me(b){Le(b),gt.remove(b)}function Le(b){const N=gt.get(b).programs;N!==void 0&&(N.forEach(function(Y){Lt.releaseProgram(Y)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Y,$,F,pt){N===null&&(N=it);const bt=F.isMesh&&F.matrixWorld.determinant()<0,Dt=cu(b,N,Y,$,F);ht.setMaterial($,bt);let It=Y.index,zt=1;if($.wireframe===!0){if(It=lt.getWireframeAttribute(Y),It===void 0)return;zt=2}const Wt=Y.drawRange,Ut=Y.attributes.position;let Qt=Wt.start*zt,le=(Wt.start+Wt.count)*zt;pt!==null&&(Qt=Math.max(Qt,pt.start*zt),le=Math.min(le,(pt.start+pt.count)*zt)),It!==null?(Qt=Math.max(Qt,0),le=Math.min(le,It.count)):Ut!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Ut.count));const ce=le-Qt;if(ce<0||ce===1/0)return;ae.setup(F,$,Dt,Y,It);let ze,te=Rt;if(It!==null&&(ze=tt.get(It),te=Zt,te.setIndex(ze)),F.isMesh)$.wireframe===!0?(ht.setLineWidth($.wireframeLinewidth*j()),te.setMode(T.LINES)):te.setMode(T.TRIANGLES);else if(F.isLine){let Nt=$.linewidth;Nt===void 0&&(Nt=1),ht.setLineWidth(Nt*j()),F.isLineSegments?te.setMode(T.LINES):F.isLineLoop?te.setMode(T.LINE_LOOP):te.setMode(T.LINE_STRIP)}else F.isPoints?te.setMode(T.POINTS):F.isSprite&&te.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Nt=F._multiDrawStarts,Mn=F._multiDrawCounts,ee=F._multiDrawCount,sn=It?tt.get(It).bytesPerElement:1,Ri=gt.get($).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)Ri.setValue(T,"_gl_DrawID",Ge),te.render(Nt[Ge]/sn,Mn[Ge])}else if(F.isInstancedMesh)te.renderInstances(Qt,ce,F.count);else if(Y.isInstancedBufferGeometry){const Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mn=Math.min(Y.instanceCount,Nt);te.renderInstances(Qt,ce,Mn)}else te.render(Qt,ce)};function ne(b,N,Y){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=ke,b.needsUpdate=!0,js(b,N,Y),b.side=Qn,b.needsUpdate=!0,js(b,N,Y),b.side=cn):js(b,N,Y)}this.compile=function(b,N,Y=null){Y===null&&(Y=b),p=jt.get(Y),p.init(N),x.push(p),Y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==Y&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const $=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const pt=F.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Dt=pt[bt];ne(Dt,Y,F),$.add(Dt)}else ne(pt,Y,F),$.add(pt)}),x.pop(),p=null,$},this.compileAsync=function(b,N,Y=null){const $=this.compile(b,N,Y);return new Promise(F=>{function pt(){if($.forEach(function(bt){gt.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){F(b);return}setTimeout(pt,10)}et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let nn=null;function yn(b){nn&&nn(b)}function ul(){si.stop()}function dl(){si.start()}const si=new Mh;si.setAnimationLoop(yn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){nn=b,K.setAnimationLoop(b),b===null?si.stop():si.start()},K.addEventListener("sessionstart",ul),K.addEventListener("sessionend",dl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,L),p=jt.get(b,x.length),p.init(N),x.push(p),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(at),xt=this.localClippingEnabled,ct=dt.init(this.clippingPlanes,xt),m=Tt.get(b,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&no(pt,N,-1/0,v.sortObjects)}no(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,_t),k=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,k&&Ft.addToRenderList(m,b),this.info.render.frame++,ct===!0&&dt.beginShadows();const Y=p.state.shadowsArray;Ct.render(Y,b,N),ct===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const pt=N.cameras;if(F.length>0)for(let bt=0,Dt=pt.length;bt<Dt;bt++){const It=pt[bt];pl($,F,b,It)}k&&Ft.render(b);for(let bt=0,Dt=pt.length;bt<Dt;bt++){const It=pt[bt];fl(m,b,It,It.viewport)}}else F.length>0&&pl($,F,b,N),k&&Ft.render(b),fl(m,b,N);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,N),ae.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ct===!0&&dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function no(b,N,Y,$){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){$&&G.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const bt=nt.update(b),Dt=b.material;Dt.visible&&m.push(b,bt,Dt,Y,G.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const bt=nt.update(b),Dt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),G.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),G.copy(bt.boundingSphere.center)),G.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(Dt)){const It=bt.groups;for(let zt=0,Wt=It.length;zt<Wt;zt++){const Ut=It[zt],Qt=Dt[Ut.materialIndex];Qt&&Qt.visible&&m.push(b,bt,Qt,Y,G.z,Ut)}}else Dt.visible&&m.push(b,bt,Dt,Y,G.z,null)}}const pt=b.children;for(let bt=0,Dt=pt.length;bt<Dt;bt++)no(pt[bt],N,Y,$)}function fl(b,N,Y,$){const F=b.opaque,pt=b.transmissive,bt=b.transparent;p.setupLightsView(Y),ct===!0&&dt.setGlobalState(v.clippingPlanes,Y),$&&ht.viewport(D.copy($)),F.length>0&&qs(F,N,Y),pt.length>0&&qs(pt,N,Y),bt.length>0&&qs(bt,N,Y),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function pl(b,N,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ei(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Hs:In,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const pt=p.state.transmissionRenderTarget[$.id],bt=$.viewport||D;pt.setSize(bt.z,bt.w);const Dt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),k&&Ft.render(Y);const It=v.toneMapping;v.toneMapping=Kn;const zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ct===!0&&dt.setGlobalState(v.clippingPlanes,$),qs(b,Y,$),A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,Qt=N.length;Ut<Qt;Ut++){const le=N[Ut],ce=le.object,ze=le.geometry,te=le.material,Nt=le.group;if(te.side===cn&&ce.layers.test($.layers)){const Mn=te.side;te.side=ke,te.needsUpdate=!0,ml(ce,Y,$,ze,te,Nt),te.side=Mn,te.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt))}v.setRenderTarget(Dt),v.setClearColor(W,q),zt!==void 0&&($.viewport=zt),v.toneMapping=It}function qs(b,N,Y){const $=N.isScene===!0?N.overrideMaterial:null;for(let F=0,pt=b.length;F<pt;F++){const bt=b[F],Dt=bt.object,It=bt.geometry,zt=$===null?bt.material:$,Wt=bt.group;Dt.layers.test(Y.layers)&&ml(Dt,N,Y,It,zt,Wt)}}function ml(b,N,Y,$,F,pt){b.onBeforeRender(v,N,Y,$,F,pt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,Y,$,b,pt),F.transparent===!0&&F.side===cn&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,v.renderBufferDirect(Y,N,$,F,b,pt),F.side=Qn,F.needsUpdate=!0,v.renderBufferDirect(Y,N,$,F,b,pt),F.side=cn):v.renderBufferDirect(Y,N,$,F,b,pt),b.onAfterRender(v,N,Y,$,F,pt)}function js(b,N,Y){N.isScene!==!0&&(N=it);const $=gt.get(b),F=p.state.lights,pt=p.state.shadowsArray,bt=F.state.version,Dt=Lt.getParameters(b,F.state,pt,N,Y),It=Lt.getProgramCacheKey(Dt);let zt=$.programs;$.environment=b.isMeshStandardMaterial?N.environment:null,$.fog=N.fog,$.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",Gt),zt=new Map,$.programs=zt);let Wt=zt.get(It);if(Wt!==void 0){if($.currentProgram===Wt&&$.lightsStateVersion===bt)return _l(b,Dt),Wt}else Dt.uniforms=Lt.getUniforms(b),b.onBeforeCompile(Dt,v),Wt=Lt.acquireProgram(Dt,It),zt.set(It,Wt),$.uniforms=Dt.uniforms;const Ut=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),_l(b,Dt),$.needsLights=uu(b),$.lightsStateVersion=bt,$.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Wt,$.uniformsList=null,Wt}function gl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Fr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function _l(b,N){const Y=gt.get(b);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function cu(b,N,Y,$,F){N.isScene!==!0&&(N=it),A.resetTextureUnits();const pt=N.fog,bt=$.isMeshStandardMaterial?N.environment:null,Dt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fs,It=($.isMeshStandardMaterial?H:S).get($.envMap||bt),zt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!Y.morphAttributes.position,Qt=!!Y.morphAttributes.normal,le=!!Y.morphAttributes.color;let ce=Kn;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=v.toneMapping);const ze=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,te=ze!==void 0?ze.length:0,Nt=gt.get($),Mn=p.state.lights;if(ct===!0&&(xt===!0||b!==M)){const qe=b===M&&$.id===E;dt.setState($,b,qe)}let ee=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Mn.state.version||Nt.outputColorSpace!==Dt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==It||$.fog===!0&&Nt.fog!==pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Wt||Nt.morphTargets!==Ut||Nt.morphNormals!==Qt||Nt.morphColors!==le||Nt.toneMapping!==ce||Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=$.version);let sn=Nt.currentProgram;ee===!0&&(sn=js($,N,F));let Ri=!1,Ge=!1,gs=!1;const he=sn.getUniforms(),fn=Nt.uniforms;if(ht.useProgram(sn.program)&&(Ri=!0,Ge=!0,gs=!0),$.id!==E&&(E=$.id,Ge=!0),Ri||M!==b){ht.buffers.depth.getReversed()?(z.copy(b.projectionMatrix),xd(z),yd(z),he.setValue(T,"projectionMatrix",z)):he.setValue(T,"projectionMatrix",b.projectionMatrix),he.setValue(T,"viewMatrix",b.matrixWorldInverse);const On=he.map.cameraPosition;On!==void 0&&On.setValue(T,Z.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&he.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&he.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ge=!0,gs=!0)}if(F.isSkinnedMesh){he.setOptional(T,F,"bindMatrix"),he.setOptional(T,F,"bindMatrixInverse");const qe=F.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),he.setValue(T,"boneTexture",qe.boneTexture,A))}F.isBatchedMesh&&(he.setOptional(T,F,"batchingTexture"),he.setValue(T,"batchingTexture",F._matricesTexture,A),he.setOptional(T,F,"batchingIdTexture"),he.setValue(T,"batchingIdTexture",F._indirectTexture,A),he.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(T,"batchingColorTexture",F._colorsTexture,A));const _s=Y.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&kt.update(F,Y,sn),(Ge||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,he.setValue(T,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fn.envMap.value=It,fn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&N.environment!==null&&(fn.envMapIntensity.value=N.environmentIntensity),Ge&&(he.setValue(T,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&hu(fn,gs),pt&&$.fog===!0&&yt.refreshFogUniforms(fn,pt),yt.refreshMaterialUniforms(fn,$,B,st,p.state.transmissionRenderTarget[b.id]),Fr.upload(T,gl(Nt),fn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Fr.upload(T,gl(Nt),fn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&he.setValue(T,"center",F.center),he.setValue(T,"modelViewMatrix",F.modelViewMatrix),he.setValue(T,"normalMatrix",F.normalMatrix),he.setValue(T,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qe=$.uniformsGroups;for(let On=0,kn=qe.length;On<kn;On++){const vl=qe[On];U.update(vl,sn),U.bind(vl,sn)}}return sn}function hu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function uu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,Y){gt.get(b.texture).__webglTexture=N,gt.get(b.depthTexture).__webglTexture=Y;const $=gt.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const Y=gt.get(b);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Y=0){L=b,C=N,w=Y;let $=!0,F=null,pt=!1,bt=!1;if(b){const It=gt.get(b);if(It.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(It.__hasExternalTextures)A.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ut=b.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&gt.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Wt=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?F=Wt[N][Y]:F=Wt[N],pt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?F=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?F=Wt[Y]:F=Wt,D.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest}else D.copy(wt).multiplyScalar(B).floor(),V.copy(Ot).multiplyScalar(B).floor(),O=Yt;if(ht.bindFramebuffer(T.FRAMEBUFFER,F)&&$&&ht.drawBuffers(b,F),ht.viewport(D),ht.scissor(V),ht.setScissorTest(O),pt){const It=gt.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,Y)}else if(bt){const It=gt.get(b.texture),zt=N||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,It.__webglTexture,Y||0,zt)}E=-1},this.readRenderTargetPixels=function(b,N,Y,$,F,pt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){ht.bindFramebuffer(T.FRAMEBUFFER,Dt);try{const It=b.texture,zt=It.format,Wt=It.type;if(!mt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-$&&Y>=0&&Y<=b.height-F&&T.readPixels(N,Y,$,F,$t.convert(zt),$t.convert(Wt),pt)}finally{const It=L!==null?gt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(T.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,N,Y,$,F,pt,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){const It=b.texture,zt=It.format,Wt=It.type;if(!mt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-$&&Y>=0&&Y<=b.height-F){ht.bindFramebuffer(T.FRAMEBUFFER,Dt);const Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,pt.byteLength,T.STREAM_READ),T.readPixels(N,Y,$,F,$t.convert(zt),$t.convert(Wt),0);const Qt=L!==null?gt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(T.FRAMEBUFFER,Qt);const le=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await vd(T,le,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,pt),T.deleteBuffer(Ut),T.deleteSync(le),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,Y=0){b.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-Y),F=Math.floor(b.image.width*$),pt=Math.floor(b.image.height*$),bt=N!==null?N.x:0,Dt=N!==null?N.y:0;A.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,bt,Dt,F,pt),ht.unbindTexture()},this.copyTextureToTexture=function(b,N,Y=null,$=null,F=0){b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,Y=null);let pt,bt,Dt,It,zt,Wt,Ut,Qt,le;const ce=b.isCompressedTexture?b.mipmaps[F]:b.image;Y!==null?(pt=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,zt=Y.min.y,Wt=Y.isBox3?Y.min.z:0):(pt=ce.width,bt=ce.height,Dt=ce.depth||1,It=0,zt=0,Wt=0),$!==null?(Ut=$.x,Qt=$.y,le=$.z):(Ut=0,Qt=0,le=0);const ze=$t.convert(N.format),te=$t.convert(N.type);let Nt;N.isData3DTexture?(A.setTexture3D(N,0),Nt=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Nt=T.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Nt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const Mn=T.getParameter(T.UNPACK_ROW_LENGTH),ee=T.getParameter(T.UNPACK_IMAGE_HEIGHT),sn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ri=T.getParameter(T.UNPACK_SKIP_ROWS),Ge=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,It),T.pixelStorei(T.UNPACK_SKIP_ROWS,zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Wt);const gs=b.isDataArrayTexture||b.isData3DTexture,he=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const fn=gt.get(b),_s=gt.get(N),qe=gt.get(fn.__renderTarget),On=gt.get(_s.__renderTarget);ht.bindFramebuffer(T.READ_FRAMEBUFFER,qe.__webglFramebuffer),ht.bindFramebuffer(T.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let kn=0;kn<Dt;kn++)gs&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,gt.get(b).__webglTexture,F,Wt+kn),b.isDepthTexture?(he&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,F,le+kn),T.blitFramebuffer(It,zt,pt,bt,Ut,Qt,pt,bt,T.DEPTH_BUFFER_BIT,T.NEAREST)):he?T.copyTexSubImage3D(Nt,F,Ut,Qt,le+kn,It,zt,pt,bt):T.copyTexSubImage2D(Nt,F,Ut,Qt,le+kn,It,zt,pt,bt);ht.bindFramebuffer(T.READ_FRAMEBUFFER,null),ht.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Nt,F,Ut,Qt,le,pt,bt,Dt,ze,te,ce.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(Nt,F,Ut,Qt,le,pt,bt,Dt,ze,ce.data):T.texSubImage3D(Nt,F,Ut,Qt,le,pt,bt,Dt,ze,te,ce):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Ut,Qt,pt,bt,ze,te,ce.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Ut,Qt,ce.width,ce.height,ze,ce.data):T.texSubImage2D(T.TEXTURE_2D,F,Ut,Qt,pt,bt,ze,te,ce);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ee),T.pixelStorei(T.UNPACK_SKIP_PIXELS,sn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ri),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ge),F===0&&N.generateMipmaps&&T.generateMipmap(Nt),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,N,Y=null,$=null,F=0){return b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,Y,$,F)},this.initRenderTarget=function(b){gt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){C=0,w=0,L=null,ht.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Lg extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dg extends Pe{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ye,h=Ye,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends dn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new At,xc=new At,_r=[],yc=new Fn,Ig=new At,Ss=new ie,bs=new Ai;class Ug extends ie{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ig)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wi),yc.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wi),bs.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(i),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),xc.multiplyMatrices(i,Wi),Ss.matrixWorld=xc,Ss.raycast(t,_r);for(let o=0,a=_r.length;o<a;o++){const c=_r[o];c.instanceId=r,c.object=this,e.push(c)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dg(new Float32Array(s*this.count),s,this.count,Ga,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ng extends Vs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new R,Vr=new R,Mc=new At,Es=new Zr,vr=new Ai,Do=new R,Sc=new R;let Fg=class extends Ve{constructor(t=new pe,e=new Ng){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Vr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;Mc.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),x=xr(this,t,Es,c,p,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=xr(this,t,Es,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=xr(this,t,Es,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=xr(this,t,Es,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Do,Sc)>i)return;Do.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Do);if(!(c<t.near||c>t.far))return{distance:c,point:Sc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const bc=new R,Ec=new R;class Og extends Fg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bc.fromBufferAttribute(e,s),Ec.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bc.distanceTo(Ec);t.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kg extends Pe{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Q:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,s=[],r=[],o=[],a=new R,c=new At;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends xn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Q){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bg extends Ka{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ja(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const yr=new R,Io=new Ja,Uo=new Ja,No=new Ja;class hs extends xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),l=yr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Io.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),Uo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),No.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Uo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),No.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(Io.calc(c),Uo.calc(c),No.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wc(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function zg(n,t){const e=1-n;return e*e*t}function Hg(n,t){return 2*(1-n)*n*t}function Vg(n,t){return n*n*t}function Ls(n,t,e,i){return zg(n,t)+Hg(n,e)+Vg(n,i)}function Gg(n,t){const e=1-n;return e*e*e*t}function Wg(n,t){const e=1-n;return 3*e*e*n*t}function Xg(n,t){return 3*(1-n)*n*n*t}function Yg(n,t){return n*n*n*t}function Ds(n,t,e,i,s){return Gg(n,t)+Wg(n,e)+Xg(n,i)+Yg(n,s)}class Ah extends xn{constructor(t=new Q,e=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $g extends xn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ch extends xn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qg extends xn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends xn{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends xn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y),Ls(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(wc(a,c.x,l.x,h.x,d.x),wc(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:hs,CubicBezierCurve:Ah,CubicBezierCurve3:$g,EllipseCurve:Ka,LineCurve:Ch,LineCurve3:qg,QuadraticBezierCurve:Rh,QuadraticBezierCurve3:Ph,SplineCurve:Lh});class jg extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Gr[s.type]().fromJSON(s))}return this}}class Wr extends jg{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ch(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Rh(this.currentPoint.clone(),new Q(t,e),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Ah(this.currentPoint.clone(),new Q(t,e),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Lh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ka(t,e,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $e extends pe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function y(){const v=new R,P=new R;let C=0;const w=(e-t)/i;for(let L=0;L<=r;L++){const E=[],M=L/r,D=M*(e-t)+t;for(let V=0;V<=s;V++){const O=V/s,W=O*c+a,q=Math.sin(W),X=Math.cos(W);P.x=D*q,P.y=-M*i+m,P.z=D*X,d.push(P.x,P.y,P.z),v.set(q,w,X).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-M),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const M=_[E][L],D=_[E+1][L],V=_[E+1][L+1],O=_[E][L+1];(t>0||E!==0)&&(h.push(M,D,O),C+=3),(e>0||E!==r-1)&&(h.push(D,V,O),C+=3)}l.addGroup(p,C,0),p+=C}function x(v){const P=g,C=new Q,w=new R;let L=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let V=0;V<=s;V++){const W=V/s*c+a,q=Math.cos(W),X=Math.sin(W);w.x=E*X,w.y=m*M,w.z=E*q,d.push(w.x,w.y,w.z),u.push(0,M,0),C.x=q*.5+.5,C.y=X*.5*M+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){const O=P+V,W=D+V;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gs extends $e{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Gs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Mr=new R,Sr=new R,Fo=new R,br=new Qe;class Zg extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ts*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=br;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),br.getNormal(Fo),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=d[y],P=d[x],C=br[h[y]],w=br[h[x]],L=`${v}_${P}`,E=`${P}_${v}`;E in u&&u[E]?(Fo.dot(u[E].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(w.x,w.y,w.z)),u[E]=null):L in u||(u[L]={index0:l[y],index1:l[x],normal:Fo.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];Mr.fromBufferAttribute(a,_),Sr.fromBufferAttribute(a,m),f.push(Mr.x,Mr.y,Mr.z),f.push(Sr.x,Sr.y,Sr.z)}this.setAttribute("position",new Bt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ae extends Wr{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Wr().fromJSON(s))}return this}}const Kg={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Dh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(i&&(r=n_(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)d=n[g],u=n[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Os(r,o,e,a,c,f,0),o}};function Dh(n,t,e,i,s){let r,o;if(s===f_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Tc(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Tc(r,n[r],n[r+1],o);return o&&Jr(o,o.next)&&(Bs(o),o=o.next),o}function Mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Jr(e,e.next)||de(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Os(n,t,e,i,s,r,o){if(!n)return;!o&&r&&a_(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Qg(n,i,s,r):Jg(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Bs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=t_(Mi(n),t,e),Os(n,t,e,i,s,r,2)):o===2&&e_(n,t,e,i,s,r):Os(Mi(n),t,e,i,s,r,1);break}}}function Jg(n){const t=n.prev,e=n,i=n.next;if(de(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ji(s,a,r,c,o,l,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qg(n,t,e,i){const s=n.prev,r=n,o=n.next;if(de(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,p=Ca(f,g,t,e,i),y=Ca(_,m,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ji(a,h,c,d,l,u,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ji(a,h,c,d,l,u,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ji(a,h,c,d,l,u,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ji(a,h,c,d,l,u,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function t_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Jr(s,r)&&Ih(s,i,i.next,r)&&ks(s,r)&&ks(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Bs(i),Bs(i.next),i=n=r),i=i.next}while(i!==n);return Mi(i)}function e_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let c=Uh(o,a);o=Mi(o,o.next),c=Mi(c,c.next),Os(o,t,e,i,s,r,0),Os(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function n_(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Dh(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(c_(l));for(s.sort(i_),r=0;r<s.length;r++)e=s_(s[r],e);return e}function i_(n,t){return n.x-t.x}function s_(n,t){const e=r_(n,t);if(!e)return t;const i=Uh(e,n);return Mi(i,i.next),Mi(e,e.next)}function r_(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ji(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ks(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&o_(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function o_(n,t){return de(n.prev,n,t.prev)<0&&de(t.next,n,n.next)<0}function a_(n,t,e,i){let s=n;do s.z===0&&(s.z=Ca(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Ca(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function c_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ji(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function h_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!u_(n,t)&&(ks(n,t)&&ks(t,n)&&d_(n,t)&&(de(n.prev,n,t.prev)||de(n,t.prev,t))||Jr(n,t)&&de(n.prev,n,n.next)>0&&de(t.prev,t,t.next)>0)}function de(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Jr(n,t){return n.x===t.x&&n.y===t.y}function Ih(n,t,e,i){const s=wr(de(n,t,e)),r=wr(de(n,t,i)),o=wr(de(e,i,n)),a=wr(de(e,i,t));return!!(s!==r&&o!==a||s===0&&Er(n,e,t)||r===0&&Er(n,i,t)||o===0&&Er(e,n,i)||a===0&&Er(e,t,i))}function Er(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wr(n){return n>0?1:n<0?-1:0}function u_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ks(n,t){return de(n.prev,n,n.next)<0?de(n,t,n.next)>=0&&de(n,n.prev,t)>=0:de(n,t,n.prev)<0||de(n,n.next,t)<0}function d_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Uh(n,t){const e=new Ra(n.i,n.x,n.y),i=new Ra(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Tc(n,t,e,i){const s=new Ra(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Bs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ra(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Jn{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Jn.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ac(t),Cc(i,t);let o=t.length;e.forEach(Ac);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Cc(i,e[c]);const a=Kg.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ac(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Cc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class en extends pe{constructor(t=new Ae([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:p_;let x,v=!1,P,C,w,L;p&&(x=p.getSpacedPoints(h),v=!0,u=!1,P=p.computeFrenetFrames(h,!1),C=new R,w=new R,L=new R),u||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let M=E.shape;const D=E.holes;if(!Jn.isClockWise(M)){M=M.reverse();for(let k=0,j=D.length;k<j;k++){const T=D[k];Jn.isClockWise(T)&&(D[k]=T.reverse())}}const O=Jn.triangulateShape(M,D),W=M;for(let k=0,j=D.length;k<j;k++){const T=D[k];M=M.concat(T)}function q(k,j,T){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(j,T)}const X=M.length,st=O.length;function B(k,j,T){let ot,et,mt;const ht=k.x-j.x,Pt=k.y-j.y,gt=T.x-k.x,A=T.y-k.y,S=ht*ht+Pt*Pt,H=ht*A-Pt*gt;if(Math.abs(H)>Number.EPSILON){const tt=Math.sqrt(S),lt=Math.sqrt(gt*gt+A*A),nt=j.x-Pt/tt,Lt=j.y+ht/tt,yt=T.x-A/lt,Tt=T.y+gt/lt,jt=((yt-nt)*A-(Tt-Lt)*gt)/(ht*A-Pt*gt);ot=nt+ht*jt-k.x,et=Lt+Pt*jt-k.y;const dt=ot*ot+et*et;if(dt<=2)return new Q(ot,et);mt=Math.sqrt(dt/2)}else{let tt=!1;ht>Number.EPSILON?gt>Number.EPSILON&&(tt=!0):ht<-Number.EPSILON?gt<-Number.EPSILON&&(tt=!0):Math.sign(Pt)===Math.sign(A)&&(tt=!0),tt?(ot=-Pt,et=ht,mt=Math.sqrt(S)):(ot=ht,et=Pt,mt=Math.sqrt(S/2))}return new Q(ot/mt,et/mt)}const ut=[];for(let k=0,j=W.length,T=j-1,ot=k+1;k<j;k++,T++,ot++)T===j&&(T=0),ot===j&&(ot=0),ut[k]=B(W[k],W[T],W[ot]);const _t=[];let wt,Ot=ut.concat();for(let k=0,j=D.length;k<j;k++){const T=D[k];wt=[];for(let ot=0,et=T.length,mt=et-1,ht=ot+1;ot<et;ot++,mt++,ht++)mt===et&&(mt=0),ht===et&&(ht=0),wt[ot]=B(T[ot],T[mt],T[ht]);_t.push(wt),Ot=Ot.concat(wt)}for(let k=0;k<m;k++){const j=k/m,T=f*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+_;for(let et=0,mt=W.length;et<mt;et++){const ht=q(W[et],ut[et],ot);z(ht.x,ht.y,-T)}for(let et=0,mt=D.length;et<mt;et++){const ht=D[et];wt=_t[et];for(let Pt=0,gt=ht.length;Pt<gt;Pt++){const A=q(ht[Pt],wt[Pt],ot);z(A.x,A.y,-T)}}}const Yt=g+_;for(let k=0;k<X;k++){const j=u?q(M[k],Ot[k],Yt):M[k];v?(w.copy(P.normals[0]).multiplyScalar(j.x),C.copy(P.binormals[0]).multiplyScalar(j.y),L.copy(x[0]).add(w).add(C),z(L.x,L.y,L.z)):z(j.x,j.y,0)}for(let k=1;k<=h;k++)for(let j=0;j<X;j++){const T=u?q(M[j],Ot[j],Yt):M[j];v?(w.copy(P.normals[k]).multiplyScalar(T.x),C.copy(P.binormals[k]).multiplyScalar(T.y),L.copy(x[k]).add(w).add(C),z(L.x,L.y,L.z)):z(T.x,T.y,d/h*k)}for(let k=m-1;k>=0;k--){const j=k/m,T=f*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+_;for(let et=0,mt=W.length;et<mt;et++){const ht=q(W[et],ut[et],ot);z(ht.x,ht.y,d+T)}for(let et=0,mt=D.length;et<mt;et++){const ht=D[et];wt=_t[et];for(let Pt=0,gt=ht.length;Pt<gt;Pt++){const A=q(ht[Pt],wt[Pt],ot);v?z(A.x,A.y+x[h-1].y,x[h-1].x+T):z(A.x,A.y,d+T)}}}J(),ct();function J(){const k=s.length/3;if(u){let j=0,T=X*j;for(let ot=0;ot<st;ot++){const et=O[ot];at(et[2]+T,et[1]+T,et[0]+T)}j=h+m*2,T=X*j;for(let ot=0;ot<st;ot++){const et=O[ot];at(et[0]+T,et[1]+T,et[2]+T)}}else{for(let j=0;j<st;j++){const T=O[j];at(T[2],T[1],T[0])}for(let j=0;j<st;j++){const T=O[j];at(T[0]+X*h,T[1]+X*h,T[2]+X*h)}}i.addGroup(k,s.length/3-k,0)}function ct(){const k=s.length/3;let j=0;xt(W,j),j+=W.length;for(let T=0,ot=D.length;T<ot;T++){const et=D[T];xt(et,j),j+=et.length}i.addGroup(k,s.length/3-k,1)}function xt(k,j){let T=k.length;for(;--T>=0;){const ot=T;let et=T-1;et<0&&(et=k.length-1);for(let mt=0,ht=h+m*2;mt<ht;mt++){const Pt=X*mt,gt=X*(mt+1),A=j+ot+Pt,S=j+et+Pt,H=j+et+gt,tt=j+ot+gt;Z(A,S,H,tt)}}}function z(k,j,T){c.push(k),c.push(j),c.push(T)}function at(k,j,T){G(k),G(j),G(T);const ot=s.length/3,et=y.generateTopUV(i,s,ot-3,ot-2,ot-1);it(et[0]),it(et[1]),it(et[2])}function Z(k,j,T,ot){G(k),G(j),G(ot),G(j),G(T),G(ot);const et=s.length/3,mt=y.generateSideWallUV(i,s,et-6,et-3,et-2,et-1);it(mt[0]),it(mt[1]),it(mt[3]),it(mt[1]),it(mt[2]),it(mt[3])}function G(k){s.push(c[k*3+0]),s.push(c[k*3+1]),s.push(c[k*3+2])}function it(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return m_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gr[s.type]().fromJSON(s)),new en(i,t.options)}}const p_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Q(r,o),new Q(a,c),new Q(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-d),new Q(u,1-g),new Q(_,1-p)]:[new Q(a,1-c),new Q(h,1-d),new Q(f,1-g),new Q(m,1-p)]}};function m_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qa extends pe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,f=new R,g=new Q;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const y=p+m,x=y,v=y+i+1,P=y+i+2,C=y+1;a.push(x,v,C),a.push(v,P,C)}}this.setIndex(a),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ws extends pe{constructor(t=new Ae([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(o,2));function l(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Jn.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+d,v=y[1]+d,P=y[2]+d;i.push(x,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return g_(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Ws(i,t.curveSegments)}}function g_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Si extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const C=P/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(C+v,1-x),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=h[p][y+1],v=h[p][y],P=h[p+1][y],C=h[p+1][y+1];(p!==0||o>0)&&f.push(x,v,C),(p!==i-1||c<Math.PI)&&f.push(v,P,C)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xr extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,d=new R,u=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tl extends pe{constructor(t=new Ph(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new Q;let h=new R;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],P=o.binormals[x];for(let C=0;C<=s;C++){const w=C/s*Math.PI*2,L=Math.sin(w),E=-Math.cos(w);c.x=E*v.x+L*P.x,c.y=E*v.y+L*P.y,c.z=E*v.z+L*P.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const P=(s+1)*(x-1)+(v-1),C=(s+1)*x+(v-1),w=(s+1)*x+v,L=(s+1)*(x-1)+v;g.push(P,C,L),g.push(C,w,L)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new tl(new Gr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}const Tr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class __{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const v_=new __;class Nh{constructor(t){this.manager=t!==void 0?t:v_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Nh.DEFAULT_MATERIAL_NAME="__DEFAULT";class x_ extends Nh{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Tr.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Tr.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Tr.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Tr.add(t,c),r.manager.itemStart(t)}}class y_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rc(){return performance.now()}const Pc=new At;class M_{constructor(t,e,i=0,s=1/0){this.ray=new Zr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(t,e=!0,i=[]){return Pa(t,this,i,e),i.sort(Lc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pa(t[s],this,i,e);return i.sort(Lc),i}}function Lc(n,t){return n.distance-t.distance}function Pa(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,e,!0)}}class is{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class S_ extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Dc={type:"change"},el={type:"start"},Fh={type:"end"},Ar=new Zr,Ic=new Xn,b_=Math.cos(70*fe.DEG2RAD),Me=new R,He=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class E_ extends S_{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Un,this._lastTargetPosition=new R,this._quat=new Un().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new is,this._sphericalDelta=new is,this._scale=1,this._panOffset=new R,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new R,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=A_.bind(this),this._onContextMenu=U_.bind(this),this._onMouseWheel=P_.bind(this),this._onKeyDown=L_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=R_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=F_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ar.origin.copy(this.object.position),Ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ar.direction))<b_?this.object.lookAt(this.target):(Ic.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ar.intersectPlane(Ic,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function w_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function T_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function C_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case Ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case Ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(el)}function R_(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function P_(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fh))}function L_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function D_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(el)}function I_(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function U_(n){this.enabled!==!1&&n.preventDefault()}function N_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Oh=52.3731,O_=4.8926,mi=6378137,Zi=Math.cos(Oh*Math.PI/180),kh=(n,t)=>[t*Math.PI/180*mi,Math.log(Math.tan(Math.PI/4+n*Math.PI/360))*mi],[La,Da]=kh(Oh,O_);function Bh(n,t){const[e,i]=kh(n,t);return[(e-La)*Zi,(i-Da)*Zi]}function Uc(n,t,e=0,i=new R){const[s,r]=Bh(n,t);return i.set(s,e,-r)}function Is(n,t,e){const i=2**n,s=2*Math.PI*mi,r=t/i*s-Math.PI*mi,o=(t+1)/i*s-Math.PI*mi,a=Math.PI*mi-e/i*s,c=Math.PI*mi-(e+1)/i*s;return[(r-La)*Zi,(c-Da)*Zi,(o-La)*Zi,(a-Da)*Zi]}const k_=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];function zh(n){let t="",e=Math.floor(n);const i=[];for(const[s,r]of k_){for(;e>=s;)t+=r,e-=s;(s===1e3||s===100)&&(t&&i.push(t),t="")}return t&&i.push(t),i.join("·")}const Hh="https://images.huygens.knaw.nl/webmapper/maps",Nc=420,Fc=10,B_=`
  uniform vec4 uRect; // uv offset (xy) and scale (zw) into the texture
  varying vec2 vUv;
  varying vec2 vLocal;
  varying float vDepth;
  void main() {
    vUv = uRect.xy + uv * uRect.zw;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vLocal = vec2(wp.x, -wp.z);
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }`,z_=`
  uniform sampler2D map;
  uniform vec2 uCorners[4];
  uniform vec3 uPaper;
  uniform vec3 uInk;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uOpacity;
  uniform float uTone;   // 0 = original scan colours, 1 = toned to the paper/ink palette
  uniform float uBlueKey; // 1: cut away a pale blue-grey backing board (the Berckenrode scan)
  varying vec2 vUv;
  varying vec2 vLocal;
  varying float vDepth;
  float edgeSide(vec2 a, vec2 b, vec2 p) { return (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x); }
  void main() {
    // inside the (convex, rotated) sheet? distance-ish margin of a few metres
    float s0 = edgeSide(uCorners[0], uCorners[1], vLocal);
    float s1 = edgeSide(uCorners[1], uCorners[2], vLocal);
    float s2 = edgeSide(uCorners[2], uCorners[3], vLocal);
    float s3 = edgeSide(uCorners[3], uCorners[0], vLocal);
    bool inside = (s0 <= 0.0 && s1 <= 0.0 && s2 <= 0.0 && s3 <= 0.0) || (s0 >= 0.0 && s1 >= 0.0 && s2 >= 0.0 && s3 >= 0.0);
    if (!inside) discard;
    vec4 t = texture2D(map, vUv);
    float lum = dot(t.rgb, vec3(0.299, 0.587, 0.114));
    // the scan's own black border sneaks in at the very edge
    if (lum < 0.004) discard;
    if (uBlueKey > 0.5 && t.b - t.r > 0.025 && lum > 0.35) discard;
    float k = smoothstep(0.16, 0.9, pow(lum, 0.4545)); // perceptual lightness
    vec3 toned = mix(uInk, uPaper, k);
    vec3 col = mix(t.rgb, toned, uTone);
    float f = smoothstep(uFogNear, uFogFar, vDepth);
    gl_FragColor = vec4(mix(col, uFogColor, f), uOpacity);
    #include <colorspace_fragment>
  }`;class Vh{constructor({scene:t,sheet:e,renderer:i,map:s="debroen",blueKey:r=!1}){this.scene=t,this.renderer=i,this.url=`${Hh}/${s}`,this.group=new un,this.group.name=s,t.add(this.group),this.rootZ=e.z,this.roots=e.tiles.map(([l,h])=>[e.z,l,h]);const o=e.corners,a=(o.top[0]+o.right[0]+o.bottom[0]+o.left[0])/4,c=(o.top[1]+o.right[1]+o.bottom[1]+o.left[1])/4;this.corners=[o.top,o.right,o.bottom,o.left].map(([l,h])=>new Q(a+(l-a)*.985,c+(h-c)*.985)),this.cache=new Map,this.meshes=new Map,this.queue=[],this.inflight=0,this.maxZ=19,this.frame=0,this.geom=new Ci(1,1).rotateX(-Math.PI/2),this.uniforms={uCorners:{value:this.corners},uPaper:{value:new Vt("#efe4cb")},uInk:{value:new Vt("#2c2318")},uFogColor:{value:new Vt("#17130f")},uFogNear:{value:1e6},uFogFar:{value:2e6},uOpacity:{value:1},uTone:{value:.85},uBlueKey:{value:r?1:0}},this.loader=new x_().setOptions({imageOrientation:"flipY"}),this.loader.setCrossOrigin("anonymous"),this.onProgress=null,this.rootsLoaded=0}key(t,e,i){return`${t}/${e}/${i}`}preload(){return new Promise(t=>{let e=0;const i=this.roots.length;for(const[s,r,o]of this.roots)this.request(s,r,o,0,()=>{var a;e++,(a=this.onProgress)==null||a.call(this,e/i),e===i&&t()})})}request(t,e,i,s,r){const o=this.key(t,e,i);let a=this.cache.get(o);return a?(a.used=this.frame,r&&(a.state==="ready"||a.state==="missing"?r():(a.cbs||(a.cbs=[])).push(r)),a.state==="queued"&&(a.priority=Math.min(a.priority,s)),a):(a={state:"queued",priority:s,used:this.frame,z:t,x:e,y:i,cbs:r?[r]:[]},this.cache.set(o,a),this.queue.push(a),this.pump(),a)}pump(){if(!(this.inflight>=Fc||!this.queue.length))for(this.queue.sort((t,e)=>t.priority-e.priority);this.inflight<Fc&&this.queue.length;){const t=this.queue.shift();if(t.state==="queued"){if(this.frame-t.used>90&&t.z>this.rootZ){this.cache.delete(this.key(t.z,t.x,t.y));continue}t.state="loading",this.inflight++,this.loader.load(`${this.url}/${t.z}/${t.x}/${t.y}.png`,e=>{var s;const i=new Pe(e);i.colorSpace=Oe,i.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),i.generateMipmaps=!0,i.minFilter=jn,i.needsUpdate=!0,t.tex=i,t.state="ready",this.inflight--,(s=t.cbs)==null||s.forEach(r=>r()),t.cbs=null,this.pump()},void 0,()=>{var e;t.state="missing",this.inflight--,(e=t.cbs)==null||e.forEach(i=>i()),t.cbs=null,this.pump()})}}}update(t,e){this.frame++;const i=e/(2*Math.tan(fe.degToRad(t.fov)/2)),s=t.position,r=[],o=(c,l,h)=>{const[d,u,f,g]=Is(c,l,h),_=f-d,m=Math.max(d,Math.min(s.x,f)),p=Math.max(u,Math.min(-s.z,g)),y=Math.hypot(s.x-m,-s.z-p,s.y),x=_/Math.max(y,1)*i;if(c<this.maxZ&&x>330){const v=[[2*l,2*h],[2*l+1,2*h],[2*l,2*h+1],[2*l+1,2*h+1]];let P=!1;for(const[C,w]of v){const L=this.cache.get(this.key(c+1,C,w));L&&L.state==="missing"||(P=!0,o(c+1,C,w))}if(P)return}r.push([c,l,h,y])};for(const[c,l,h]of this.roots)o(c,l,h);const a=new Set;for(const[c,l,h,d]of r){const u=this.key(c,l,h),f=this.request(c,l,h,d/(c+1));let g=c,_=l,m=h,p=f;for(;p.state!=="ready"&&g>this.rootZ&&(g--,_>>=1,m>>=1,p=this.cache.get(this.key(g,_,m)),!!p););if(!p||p.state!=="ready")continue;p.used=this.frame,a.add(u);let y=this.meshes.get(u);if(!y){const[w,L,E,M]=Is(c,l,h);y=new ie(this.geom,new Ce({uniforms:{...this.uniforms,map:{value:null},uRect:{value:new ge(0,0,1,1)}},vertexShader:B_,fragmentShader:z_,transparent:!1,depthWrite:!1})),y.position.set((w+E)/2,0,-(L+M)/2),y.scale.set(E-w,1,M-L),y.renderOrder=-10,y.frustumCulled=!0,y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.z=c,this.meshes.set(u,y),this.group.add(y)}const x=c-g,v=1/2**x,P=(l-(_<<x))*v,C=1-(h-(m<<x)+1)*v;y.material.uniforms.map.value=p.tex,y.material.uniforms.uRect.value.set(P,C,v,v),y.visible=!0}for(const[c,l]of this.meshes)a.has(c)?l.userData.seen=this.frame:(l.visible=!1,this.frame-(l.userData.seen??this.frame)>240&&(l.material.dispose(),this.group.remove(l),this.meshes.delete(c)));this.evict(),this.pump()}evict(){var e,i;if(this.cache.size<=Nc)return;const t=[...this.cache.entries()].filter(([,s])=>s.state==="ready"&&s.z>this.rootZ).sort((s,r)=>s[1].used-r[1].used);for(const[s,r]of t.slice(0,this.cache.size-Nc)){if(this.frame-r.used<30)break;(i=(e=r.tex.image)==null?void 0:e.close)==null||i.call(e),r.tex.dispose(),this.cache.delete(s)}}setFog(t,e,i){this.uniforms.uFogColor.value.copy(t),this.uniforms.uFogNear.value=e,this.uniforms.uFogFar.value=i}}function Gh(n){const t=n.corners,e=[t.top,t.right,t.bottom,t.left],i=e.reduce((h,d)=>h+d[0],0)/4,s=e.reduce((h,d)=>h+d[1],0)/4,r=(h,d)=>[i+(h[0]-i)*d,s+(h[1]-s)*d],o=new Ae(e.map(h=>r(h,1.09)).map(([h,d])=>new Q(h,d))),a=new Ws(o).rotateX(-Math.PI/2),c=new Ce({transparent:!0,depthWrite:!1,uniforms:{uCorners:{value:e.map(([h,d])=>new Q(h,d))},uOpacity:{value:1}},vertexShader:"varying vec2 vL; void main(){ vec4 wp = modelMatrix*vec4(position,1.); vL = vec2(wp.x,-wp.z); gl_Position = projectionMatrix*viewMatrix*wp; }",fragmentShader:`
      uniform vec2 uCorners[4]; uniform float uOpacity; varying vec2 vL;
      float segd(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.); return length(pa-ba*h); }
      void main(){
        float d = 1e9;
        for (int i=0;i<4;i++){ d = min(d, segd(vL, uCorners[i], uCorners[(i+1)%4])); }
        float a = (1.0 - smoothstep(0.0, 210.0, d)) * 0.62;
        gl_FragColor = vec4(0.02, 0.012, 0.0, a * uOpacity);
      }`}),l=new ie(a,c);return l.position.y=-.6,l.renderOrder=-20,l}const yi={paper:new Vt("#efe6d2"),sky:new Vt("#ece2cb"),ink:new Vt("#2a2119"),table:new Vt("#17130f")},oe={uSun:{value:new R(.55,.62,.56).normalize()},uPaper:{value:yi.paper.clone()},uInk:{value:yi.ink.clone()},uFogColor:{value:yi.sky.clone()},uFogNear:{value:120},uFogFar:{value:900},uTime:{value:0},uGrow:{value:1},uGrowCenter:{value:new Q(0,0)},uGrowRadius:{value:900},uShadowMap:{value:null},uShadowMatrix:{value:new At},uShadowOn:{value:0},uHatch:{value:1},uYear:{value:1650}},nl=`
  attribute vec2 span;
  uniform float uYear;
  bool outOfTime() { return span.y > span.x && (uYear < span.x || uYear >= span.y); }`,il={color:[1,1,1],uv:[0,0],uv1:[0,0],span:[0,0]},sl=`
  uniform float uGrow;
  uniform vec2 uGrowCenter;
  uniform float uGrowRadius;
  float growFactor(vec3 wp) {
    if (uGrow >= 1.0) return 1.0;
    float d = length(wp.xz - uGrowCenter);
    float front = uGrow * (uGrowRadius + 140.0);
    float g = clamp((front - d) / 140.0, 0.0, 1.0);
    return g * g * (3.0 - 2.0 * g);
  }`,rl=`
  uniform vec3 uPaper;
  uniform vec3 uInk;
  uniform float uHatch;
  // anti-aliased line field: lines at integer values of v; w = width as a fraction of spacing
  float lineAt(float v, float w) {
    float aa = fwidth(v);
    float d = abs(fract(v + 0.5) - 0.5);
    float ink = 1.0 - smoothstep(w * 0.5 - aa, w * 0.5 + aa, d);
    // fade into flat tone where lines would alias (closer than ~2.5 px)
    float vis = smoothstep(0.32, 0.12, aa);
    return mix(w, ink, vis);
  }
  float hatch(vec2 hc, float tone, float spacing) {
    float w1 = clamp((0.92 - tone) * 0.95, 0.0, 0.5);
    float w2 = clamp((0.6 - tone) * 1.1, 0.0, 0.45);
    float w3 = clamp((0.34 - tone) * 1.3, 0.0, 0.4);
    float wob = 0.06 * sin(hc.x * 1.7 + hc.y * 0.21) + 0.04 * sin(hc.x * 0.43 - 1.3);
    float a = lineAt(hc.y / spacing + wob, w1);
    float b = w2 > 0.0 ? lineAt((hc.x + hc.y) / (spacing * 1.3), w2) : 0.0;
    float c = w3 > 0.0 ? lineAt((hc.x - hc.y) / (spacing * 1.15), w3) : 0.0;
    return 1.0 - (1.0 - a) * (1.0 - b) * (1.0 - c);
  }
  // keep the engraving's line density roughly constant on screen: blend between
  // world-space spacings that double with distance
  float hatchLod(vec2 hc, float tone, float spacing, float depth) {
    float lod = max(log2(max(depth, 0.5) / 5.0), -1.0);
    float l0 = floor(lod);
    float k = smoothstep(0.15, 0.85, fract(lod));
    float s0 = spacing * exp2(l0);
    return mix(hatch(hc, tone, s0), hatch(hc, tone, s0 * 2.0), k);
  }`,ol=`
  uniform sampler2D uShadowMap;
  uniform mat4 uShadowMatrix;
  uniform float uShadowOn;
  float shadowAt(vec3 wp, vec3 n) {
    if (uShadowOn < 0.01) return 1.0;
    vec4 sc = uShadowMatrix * vec4(wp + n * 0.25, 1.0);
    vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
    if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0 || p.z > 1.0) return 1.0;
    float lit = 0.0;
    vec2 texel = vec2(1.0 / 4096.0);
    for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) {
      float d = texture2D(uShadowMap, p.xy + vec2(float(i), float(j)) * texel * 1.5).r;
      lit += p.z - 0.00028 > d ? 0.0 : 1.0;
    }
    return mix(1.0, lit / 9.0, uShadowOn);
  }`,Qr=`
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  vec3 applyFog(vec3 c, float depth) {
    float f = smoothstep(uFogNear, uFogFar, depth);
    return mix(c, uFogColor, f * f * (3.0 - 2.0 * f) * 0.98);
  }`;function Oc({spacing:n=.03,wash:t=.62}={}){return new Ce({uniforms:{...oe,uSpacing:{value:n},uWash:{value:t}},vertexColors:!0,defaultAttributeValues:il,vertexShader:`
      ${sl}
      ${nl}
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying vec3 vColor;
      varying float vDepth;
      void main() {
        if (outOfTime()) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        vec4 wp = modelMatrix * vec4(position, 1.0);
        #ifdef USE_INSTANCING
          wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #endif
        float g = growFactor(wp.xyz);
        wp.y *= g;
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vColor = color;
        vec4 mv = viewMatrix * wp;
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uSun;
      uniform float uSpacing;
      uniform float uWash;
      ${rl}
      ${ol}
      ${Qr}
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying vec3 vColor;
      varying float vDepth;
      void main() {
        vec3 n = normalize(vNormal);
        if (!gl_FrontFacing) n = -n;
        float ndl = max(dot(n, uSun), 0.0);
        float sh = ndl > 0.0 ? shadowAt(vWorld, n) : 1.0;
        float sky = 0.5 + 0.5 * n.y;
        float light = 0.30 + 0.22 * sky + 0.62 * ndl * sh;
        float albedo = pow(dot(vColor, vec3(0.299, 0.587, 0.114)), 0.4545); // perceptual
        float tone = clamp(light * (0.5 + 0.62 * albedo), 0.0, 1.0);
        // hatch coordinates: along walls (horizontal courses) or across the ground
        vec2 hc;
        if (abs(n.y) < 0.55) {
          vec2 t = normalize(vec2(-n.z, n.x));
          hc = vec2(dot(vWorld.xz, t), vWorld.y);
        } else {
          hc = vec2(vWorld.x * 0.8 + vWorld.z * 0.6, vWorld.z * 0.8 - vWorld.x * 0.6);
        }
        float ink = hatchLod(hc, tone, uSpacing, vDepth) * uHatch;
        vec3 washed = mix(uPaper, vColor, uWash) * (0.86 + 0.18 * light);
        vec3 col = mix(washed, uInk, ink * 0.8);
        gl_FragColor = vec4(applyFog(col, vDepth), 1.0);
        #include <colorspace_fragment>
      }`})}function H_({opacity:n=.9}={}){return new Ce({uniforms:{...oe,uOpacity:{value:n}},transparent:!0,depthWrite:!1,defaultAttributeValues:il,vertexShader:`
      ${sl}
      ${nl}
      varying float vDepth;
      void main() {
        if (outOfTime()) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        vec4 wp = modelMatrix * vec4(position, 1.0);
        wp.y *= growFactor(wp.xyz);
        vec4 mv = viewMatrix * wp;
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
        gl_Position.z -= 0.00025 * gl_Position.w; // sit on top of faces
      }`,fragmentShader:`
      ${Qr}
      uniform vec3 uInk;
      uniform float uOpacity;
      varying float vDepth;
      void main() {
        float f = smoothstep(uFogNear, uFogFar, vDepth);
        float near = smoothstep(380.0, 60.0, vDepth);
        gl_FragColor = vec4(mix(uInk, uFogColor, f), uOpacity * (1.0 - f) * (0.55 + 0.45 * near));
        #include <colorspace_fragment>
      }`})}function V_(){return new Ce({uniforms:{uYear:oe.uYear},defaultAttributeValues:il,side:cn,colorWrite:!1,vertexShader:`
      ${nl}
      void main() {
        if (outOfTime()) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        vec4 wp = modelMatrix * vec4(position, 1.0);
        #ifdef USE_INSTANCING
          wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:"void main() { gl_FragColor = vec4(1.0); }"})}function G_(){return new Ce({uniforms:{...oe,uBase:{value:new Vt("#c9b48f")}},vertexShader:`
      varying vec2 vUv; varying vec3 vWorld; varying float vDepth; varying float vEdge;
      attribute float edge;
      void main() {
        vUv = uv; vEdge = edge;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uBase; uniform vec3 uSun;
      ${rl}
      ${ol}
      ${Qr}
      varying vec2 vUv; varying vec3 vWorld; varying float vDepth; varying float vEdge;
      void main() {
        // brick courses: joints across every 0.11 m, bond offsets along every 0.22 m
        float row = floor(vUv.y / 0.11);
        float jA = lineAt(vUv.y / 0.11, 0.10);
        float jB = lineAt(vUv.x / 0.22 + mod(row, 2.0) * 0.5, 0.08);
        float joints = max(jA, jB);
        float sh = shadowAt(vWorld, vec3(0.0, 1.0, 0.0));
        float light = 0.55 + 0.4 * uSun.y * sh;
        // darker in the gutter close to the house fronts
        light *= mix(0.72, 1.0, smoothstep(0.0, 1.6, vEdge));
        float tone = clamp(light * 0.92, 0.0, 1.0);
        float ink = hatchLod(vec2(vUv.y, vUv.x), tone + 0.12, 0.03, vDepth) * 0.55;
        vec3 col = mix(uPaper, uBase, 0.55) * (0.88 + 0.16 * light);
        col = mix(col, uInk, max(ink, joints * 0.32 * smoothstep(28.0, 4.0, vDepth)));
        gl_FragColor = vec4(applyFog(col, vDepth), 1.0);
        #include <colorspace_fragment>
      }`})}function W_(){return new Ce({uniforms:{...oe,uTint:{value:new Vt("#8fa59d")}},transparent:!0,vertexShader:`
      varying vec2 vUv; varying vec3 vWorld; varying float vDepth;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uTint; uniform float uTime;
      ${sl}
      ${rl}
      ${ol}
      ${Qr}
      varying vec2 vUv; varying vec3 vWorld; varying float vDepth;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y); }
      void main() {
        vec2 p = vWorld.xz;
        float t = uTime;
        // the water floods out over the map with the rising city, behind a ragged shoreline
        float flood = 1.0;
        if (uGrow < 1.0) {
          float rag = noise(p * 0.018) * 0.6 + noise(p * 0.07) * 0.25 - 0.42;
          flood = smoothstep(0.45, 0.6, growFactor(vWorld) + rag * 0.5);
          if (flood <= 0.0) discard;
        }
        // strokes follow the water (along x in uv), wavering with slow noise
        float wav = noise(vec2(vUv.x * 0.06 + t * 0.05, vUv.y * 0.35)) * 1.6 + 0.35 * sin(vUv.x * 0.35 + t * 0.9 + vUv.y);
        float band = noise(vec2(vUv.x * 0.025 - t * 0.02, vUv.y * 0.12));
        float sh = shadowAt(vWorld, vec3(0.0, 1.0, 0.0));
        float tone = 0.66 - 0.36 * band - (1.0 - sh) * 0.25;
        // glints: gaps in the strokes
        float glint = smoothstep(0.78, 0.92, noise(vec2(vUv.x * 0.3 + t * 0.3, vUv.y * 2.5)));
        // stroke spacing follows the screen (about 7 px), so distant water stays finely engraved
        float lod = max(log2(7.0 * fwidth(vUv.y) / 0.1), 0.0);
        float k = smoothstep(0.15, 0.85, fract(lod));
        float sp = 0.1 * exp2(floor(lod));
        float y = vUv.y + wav * 0.22;
        float w = clamp((0.95 - tone) * 0.5, 0.05, 0.3);
        float l = mix(lineAt(y / sp, w), lineAt(y / (2.0 * sp), w), k);
        float ink = l * (1.0 - glint * 0.9);
        vec3 col = mix(uPaper, uTint, 0.7) * (0.92 + 0.12 * band);
        col = mix(col, uInk * 1.1, ink * 0.6);
        gl_FragColor = vec4(applyFog(col, vDepth), flood);
        #include <colorspace_fragment>
      }`})}function X_(n,t){const e=oe.uGrow.value;if(e>=1)return 1;const i=oe.uGrowCenter.value,s=e*(oe.uGrowRadius.value+140),r=fe.clamp((s-Math.hypot(n-i.x,t-i.y))/140,0,1);return r*r*(3-2*r)}function Y_(){return new Ce({uniforms:{...oe},side:ke,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_Position.z = gl_Position.w * 0.99999;
      }`,fragmentShader:`
      uniform vec3 uPaper; uniform vec3 uInk; uniform vec3 uFogColor; uniform float uTime;
      varying vec3 vDir;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y); }
      float fbm(vec2 p){ float a=0.5, s=0.; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=.5; } return s; }
      void main() {
        vec3 d = normalize(vDir);
        float el = asin(clamp(d.y, -1.0, 1.0));
        float az = atan(d.x, d.z);
        vec2 cp = vec2(az * 3.0 + uTime * 0.004, el * 9.0);
        float cloud = smoothstep(0.50, 0.66, fbm(cp * vec2(1.0, 1.6)) + 0.18 * (1.0 - el * 2.0));
        float rim = smoothstep(0.47, 0.5, fbm(cp * vec2(1.0, 1.6)) + 0.18 * (1.0 - el * 2.0)) * (1.0 - cloud);
        float density = smoothstep(0.02, 0.9, el);           // more strokes up high
        float v = el * 420.0 + 0.6 * sin(az * 7.0);
        float aa = fwidth(v);
        float w = 0.07 + 0.26 * density;
        float line = 1.0 - smoothstep(w * 0.5 - aa, w * 0.5 + aa, abs(fract(v) - 0.5));
        line *= (1.0 - cloud) * smoothstep(0.0, 0.05, el);
        vec3 base = mix(uFogColor, uPaper, smoothstep(0.0, 0.25, el));
        vec3 col = mix(base, uInk, line * 0.55 + rim * 0.25);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`})}function $_(){return new Ce({uniforms:{...oe,uHighlight:{value:-1}},vertexShader:`
      varying vec3 vN; varying vec3 vObj; varying vec3 vCol; varying float vId; varying float vDepth;
      void main() {
        vObj = position;
        vCol = vec3(0.8);
        #ifdef USE_INSTANCING_COLOR
          vCol = instanceColor;
        #endif
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
        vId = float(gl_InstanceID);
        vec4 mv = viewMatrix * wp; vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uSun; uniform vec3 uPaper; uniform vec3 uInk; uniform float uHighlight;
      varying vec3 vN; varying vec3 vObj; varying vec3 vCol; varying float vId; varying float vDepth;
      void main() {
        vec3 n = normalize(vN);
        float l = 0.42 + 0.58 * max(dot(n, uSun), 0.0) + 0.12 * n.y;
        vec3 col = vCol;
        // object space: x = length (spine at -x), y = thickness, z = width
        bool board = abs(vObj.y) > 0.499;
        bool spine = vObj.x < -0.499;
        if (!board && !spine) {
          // page block: cream with fine lines
          float lines = abs(fract(vObj.y * 9.0) - 0.5);
          col = mix(vec3(0.93, 0.89, 0.80), vec3(0.7, 0.64, 0.54), smoothstep(0.35, 0.5, lines) * 0.6);
          float inset = step(0.44, abs(vObj.y));
          col = mix(col, vCol, inset);
        } else if (board) {
          // gilt fillet on the boards
          vec2 q = abs(vObj.xz);
          float fil = step(0.40, q.x) * step(q.x, 0.43) + step(0.40, q.y) * step(q.y, 0.43);
          col = mix(col, vec3(0.80, 0.64, 0.30), clamp(fil, 0.0, 1.0) * 0.8);
        }
        col *= l;
        if (abs(vId - uHighlight) < 0.5) col = mix(col, vec3(1.0, 0.86, 0.45), 0.55);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`})}const Yr={wereldlijk:"#9b3a2a",geestelijk:"#34465c","wereldlijk en geestelijk":"#a8823a",other:"#d6c9a8"},q_=.9,j_=260;function bi(n,t){var e;return n.street?((e=t[n.street])==null?void 0:e.label)??n.street:n.address||"Amsterdam"}class Z_{constructor(t,e){this.data=t,this.scene=e,this.group=new un,this.group.name="city",e.add(this.group),this.printers=new Map(t.printers.map(i=>[i.id,i])),this.buildBooks(),this.ripples=[],this.makeRipples(),this.highlight=null}buildBooks(){const{sources:t}=this.data,e=[],i=new Map;for(const u of t)for(const f of u.parties)f.lat!=null&&e.push({s:u,p:f});e.sort((u,f)=>u.s.year-f.s.year||u.s.id-f.s.id);for(const u of e)i.set(u.s.year,(i.get(u.s.year)??0)+1);const s=new Map;for(const u of e){const f=s.get(u.s.year)??0;s.set(u.s.year,f+1),u.t=u.s.year+(f+.5)/i.get(u.s.year)}const r=new Map;for(const u of e){const f=`${u.p.lat.toFixed(5)},${u.p.lon.toFixed(5)}`;let g=r.get(f);g||(g={key:f,lat:u.p.lat,lon:u.p.lon,street:u.p.street,address:u.p.address,stacks:new Map,count:0,events:[]},r.set(f,g));let _=g.stacks.get(u.p.printer);_||(_={printer:u.p.printer,books:[],height:0},g.stacks.set(u.p.printer,_)),u.site=g,u.stack=_,g.events.push(u),_.books.push(u)}const o=u=>1.6+1.25*Math.log2(1+(u.songs||1));for(const u of r.values()){const f=Uc(u.lat,u.lon),g=[...u.stacks.values()].sort((_,m)=>m.books.length-_.books.length);g.forEach((_,m)=>{if(m===0)_.pos=f.clone();else{const p=Math.ceil(m/6),y=m/Math.min(6,g.length-1)*Math.PI*2+p;_.pos=f.clone().add(new R(Math.cos(y)*30*p,0,Math.sin(y)*30*p))}_.rot=_.printer.length*37%100/100*Math.PI})}for(const u of e){const f=u.stack;u.th=o(u.s),u.y=f.height+u.th/2,f.height+=u.th,u.rot=f.rot+Math.sin(u.s.id*12.9898)*.5*.35,u.jx=Math.sin(u.s.id*78.233)*2.2,u.jz=Math.cos(u.s.id*43.11)*2.2}this.events=e,this.sites=[...r.values()];const a=new tn(1,1,1);this.mat=$_(),this.mesh=new Ug(a,this.mat,e.length),this.mesh.instanceMatrix.setUsage(td),this.mesh.count=0,this.mesh.frustumCulled=!1;const c=new Vt,l=new At;e.forEach((u,f)=>{c.set(Yr[u.s.kind]??Yr.other),c.offsetHSL(0,0,Math.sin(u.s.id)*.5*.06),this.mesh.setColorAt(f,c),this.composeBook(u,0,l),this.mesh.setMatrixAt(f,l)}),this.mesh.instanceColor.needsUpdate=!0;const h=new Fn,d=new R;for(const u of e)for(const f of[0,1])h.expandByPoint(d.setFromMatrixPosition(this.composeBook(u,f,l)));h.expandByScalar(40),this.mesh.boundingBox=h,this.mesh.boundingSphere=h.getBoundingSphere(new Ai),this.group.add(this.mesh),this.shown=0,this.landing=new Map}composeBook(t,e,i){const s=new Un().setFromAxisAngle(new R(0,1,0),t.rot+e*1.2),r=t.stack.pos.clone();r.x+=t.jx,r.z+=t.jz,r.y=t.y+e*j_;const o=new R(34,t.th*.96,24);return i.compose(r,s,o)}makeRipples(){const t=new Qa(.92,1,48).rotateX(-Math.PI/2);for(let e=0;e<40;e++){const i=new ns({color:"#2a2119",transparent:!0,opacity:0,depthWrite:!1}),s=new ie(t,i);s.visible=!1,s.renderOrder=1,this.group.add(s),this.ripples.push({mesh:s,t0:-1})}this.rippleIdx=0}ripple(t,e){const i=this.ripples[this.rippleIdx++%this.ripples.length];i.mesh.position.set(t.x,1.2,t.z),i.t0=e,i.mesh.visible=!0}setTime(t,e,i=!0){var o;let s=this.shown;const r=[];if(t<(((o=this.events[s-1])==null?void 0:o.t)??-1/0)){for(;s>0&&this.events[s-1].t>t;)s--;for(const a of[...this.landing.keys()])a>=s&&this.landing.delete(a)}else{for(;s<this.events.length&&this.events[s].t<=t;)i&&this.landing.set(s,e),r.push(this.events[s]),s++;if(!i){const a=new At;for(let c=this.shown;c<s;c++)this.composeBook(this.events[c],0,a),this.mesh.setMatrixAt(c,a);this.mesh.instanceMatrix.needsUpdate=!0}}return this.shown=s,this.mesh.count=s,r}update(t){const e=new At;let i=!1;for(const[s,r]of this.landing){const o=this.events[s],a=Math.min(1,(t-r)/q_),c=a<1?(1-a)*(1-a):0,l=a>.82&&a<1?Math.sin((a-.82)/.18*Math.PI)*.012:0;this.composeBook(o,c+l,e),this.mesh.setMatrixAt(s,e),i=!0,a>=1&&(this.landing.delete(s),this.ripple(o.stack.pos,t))}i&&(this.mesh.instanceMatrix.needsUpdate=!0);for(const s of this.ripples){if(s.t0<0)continue;const r=(t-s.t0)/1.1;if(r>=1){s.mesh.visible=!1,s.t0=-1;continue}const o=26+r*110;s.mesh.scale.set(o,1,o),s.mesh.material.opacity=(1-r)**2*.75}this.highlight&&(this.highlight.material.uniforms.uTime.value=t)}pick(t){const e=t.intersectObject(this.mesh,!1);if(!e.length)return null;const i=e[0].instanceId;return i<this.shown?{index:i,event:this.events[i]}:null}setHover(t){this.mat.uniforms.uHighlight.value=t??-1}visibleSites(t=14){const e=new Map;for(let i=0;i<this.shown;i++){const s=this.events[i];e.set(s.site,(e.get(s.site)??0)+1)}return[...e.entries()].sort((i,s)=>s[1]-i[1]).slice(0,t).map(([i,s])=>{let r=0;const o=new Map;for(let l=0;l<this.shown;l++){const h=this.events[l];h.site===i&&(r=Math.max(r,h.y+h.th/2),o.set(h.p.printer,(o.get(h.p.printer)??0)+1))}const a=[...o.entries()].sort((l,h)=>h[1]-l[1]).slice(0,2).map(([l])=>{var h;return K_(((h=this.printers.get(l))==null?void 0:h.name)??"")}),c=Uc(i.lat,i.lon,r+6);return{site:i,n:s,anchor:c,who:a}})}showStreet(t){this.hideStreet();const e=new hs(t.map(r=>new R(r[0],3,-r[1]))),i=new tl(e,Math.max(40,t.length*3),10,6,!1),s=new Ce({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
        void main(){
          float flow = 0.5 + 0.5 * sin(vUv.x * 40.0 - uTime * 4.0);
          vec3 c = mix(vec3(0.66, 0.25, 0.17), vec3(0.95, 0.75, 0.35), flow * 0.6);
          gl_FragColor = vec4(c, 0.9);
        }`});this.highlight=new ie(i,s),this.highlight.renderOrder=30,this.group.add(this.highlight)}hideStreet(){this.highlight&&(this.group.remove(this.highlight),this.highlight.geometry.dispose(),this.highlight.material.dispose(),this.highlight=null)}}function K_(n){const t=n.replace(/\((wed\.|erven)\)/,"").replace(/\b(I|II|III)\b/g,"").trim(),e=t.match(/\b(van der|van den|vander|van|de|ten|ter)\s+(\S+)$/i);if(e)return`${e[1][0].toUpperCase()}${e[1].slice(1)} ${e[2]}`;const i=t.split(/\s+/);return i[i.length-1]||n}const kc=new At,Bc=new Ht,ye=new R,Cr=new Vt;class Rs{constructor(){this.pos=[],this.nrm=[],this.col=[],this.lines=[],this.span=null,this.spans=[],this.lspans=[],this.anySpan=!1}during(t,e,i){const s=this.span,r=t!=null||e!=null;this.span=r?[t??-1e4,e??1e4]:s,r&&(this.anySpan=!0);try{return i()}finally{this.span=s}}add(t,e,i,s=28){const r=t.index?t.toNonIndexed():t;r.attributes.normal||r.computeVertexNormals();const o=r.attributes.position,a=r.attributes.normal,c=e==null?r.attributes.color:null;Bc.getNormalMatrix(i),c||Cr.set(e);const[l,h]=this.span??[0,0];for(let d=0;d<o.count;d++)ye.fromBufferAttribute(o,d).applyMatrix4(i),this.pos.push(ye.x,ye.y,ye.z),ye.fromBufferAttribute(a,d).applyMatrix3(Bc).normalize(),this.nrm.push(ye.x,ye.y,ye.z),c?this.col.push(c.getX(d),c.getY(d),c.getZ(d)):this.col.push(Cr.r,Cr.g,Cr.b),this.spans.push(l,h);if(s!==!1){const d=new Zg(t,s),u=d.attributes.position;for(let f=0;f<u.count;f++)ye.fromBufferAttribute(u,f).applyMatrix4(i),this.lines.push(ye.x,ye.y,ye.z),this.lspans.push(l,h);d.dispose()}return r!==t&&r.dispose(),this}box(t,e,i,s,r,o,a,c,l=28){const h=J_;return kc.makeScale(t,e,i).setPosition(s+t/2,r+e/2,o+i/2),this.add(h,a,Q_.multiplyMatrices(c,kc),l)}segment(t,e,i){const[s,r]=this.span??[0,0];ye.copy(t).applyMatrix4(i),this.lines.push(ye.x,ye.y,ye.z),ye.copy(e).applyMatrix4(i),this.lines.push(ye.x,ye.y,ye.z),this.lspans.push(s,r,s,r)}get vertexCount(){return this.pos.length/3}build(t,e){const i=new pe;i.setAttribute("position",new Bt(this.pos,3)),i.setAttribute("normal",new Bt(this.nrm,3)),i.setAttribute("color",new Bt(this.col,3)),this.anySpan&&i.setAttribute("span",new Bt(this.spans,2)),i.computeBoundingSphere();const s=new ie(i,t),r=new un;if(r.add(s),e&&this.lines.length){const o=new pe;o.setAttribute("position",new Bt(this.lines,3)),this.anySpan&&o.setAttribute("span",new Bt(this.lspans,2)),o.computeBoundingSphere();const a=new Og(o,e);a.renderOrder=2,r.add(a)}return r.userData.mesh=s,r}}const J_=new tn(1,1,1),Q_=new At;function gn(n,t,e){const i=t.clone().normalize(),s=e.clone().normalize(),r=new R().crossVectors(s,i).normalize();return s.crossVectors(i,r).normalize(),new At().makeBasis(i,r,s).setPosition(n)}function Ke(n){let t=typeof n=="string"?[...n].reduce((e,i)=>Math.imul(e^i.charCodeAt(0),2654435761),1779033703):n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Re=(n,t)=>t[Math.floor(n()*t.length)%t.length],ft={bricks:["#a2543c","#92482f","#b06a4b","#8b4a35","#9d5a3f","#a65f45","#7e4636"],bricksLate:["#8a4632","#7e4030","#94503a","#83452f","#7a3f2e"],woodPaint:["#5d4a3a","#4f5546","#6a5238","#4a4238","#5a3e2f"],stone:"#d9cdb0",stoneDark:"#b9ab8c",frame:"#ece5d2",glass:"#3d434b",shutters:["#8e3a2a","#8e3a2a","#4a5c43","#3b3632","#6e3328"],doors:["#4a3426","#2f3a2c","#3c2b23","#55341f"],tiles:["#8d4b33","#9a5a3a","#7b4430"],glazed:["#3e4650","#454d57"],slate:["#555a62","#4d5158"],wood:"#6f5a43",woodDark:"#4a3b2d"},zc={wood:"timber front",step:"step gable",stepR:"step gable in the manner of Hendrick de Keyser",spout:"spout gable",neck:"neck gable",raisedNeck:"raised neck gable",bell:"bell gable",cornice:"straight cornice",pilaster:"classicist front with pilasters"},Hc=1/40;function Wh(n,t){const e=Object.entries(t).filter(([,s])=>s>0);let i=n()*e.reduce((s,[,r])=>s+r,0);for(const[s,r]of e)if((i-=r)<=0)return s;return e[e.length-1][0]}function Xh(n,t,e,i){let s;t==="warehouse"?s=n<1640?{spout:.75,step:.25}:{spout:.8,neck:.12,step:.08}:t==="low"?s={spout:1}:n<1600?s={wood:.3,step:.45,spout:.25}:n<1620?s={stepR:.6,step:.2,spout:.2}:n<1640?s={stepR:.62,step:.1,spout:.18,neck:n>=1638?.1:0}:n<1660?s={stepR:.18,raisedNeck:.25,neck:.3,spout:.14,pilaster:e>7?.25:.04}:n<1680?s={neck:.46,raisedNeck:.08,bell:.12,spout:.14,pilaster:e>7?.15:.02,cornice:.05}:s={neck:.4,bell:.24,spout:.13,cornice:.12,pilaster:e>7?.1:.02};const r=Wh(i,s),o=n<1685?0:Math.min(.55,(n-1680)/40),a=r==="wood"?"band":i()<o?"sash":"cross";return{gable:r,windows:a,year:n}}function Yh(n,t){const e=n<1600?{wood:.3,spout:.5,step:.2}:n<1650?{spout:.6,step:.32,neck:n>1640?.08:0}:{spout:.58,step:.14,neck:.22,cornice:n>1670?.06:0};return{gable:Wh(t,e),windows:"cross",year:n}}function $h(n,t,e,i){const s=[],r=t/2;if(n==="step"||n==="stepR"){const o=n==="stepR"?t<5?3:t<7.5?4:5:t<5.6?3:4,a=Math.min(1.25,t*.2),c=e+i+.9,l=(r-a/2)/o,h=(c-.8-e)/(o+.2);let d=t,u=e;const f=[];for(let _=0;_<o;_++)u+=h,s.push([d,u]),f.push([d,u]),d-=l,s.push([d,u]);s.push([d,c]);const g=s.slice();s.push([t-d,c]);for(let _=g.length-2;_>=0;_--)s.push([t-g[_][0],g[_][1]]);return{pts:s,top:c,kind:n,treads:f,sw:l,sh:h}}if(n==="spout"){const o=e+i+.4,a=.7;return s.push([r+a,o-.55],[r+a,o],[r-a,o],[r-a,o-.55]),{pts:s,top:o,kind:n}}if(n==="wood"){const o=e+i+.2;return s.push([r,o]),{pts:s,top:o,kind:n}}if(n==="neck"||n==="raisedNeck"){const o=Math.max(1.9,t*.4),a=n==="raisedNeck",c=a?Math.min(2.4,i*.3):0,l=a?Math.max(.45,(r-o/2)*.32):0,h=e+c,d=r+o/2,u=t-l-d,f=Math.max(.3,Math.min(1.5,u-.15,u*.85)),g=Math.min(2,f*1.4),_=Math.max(e+i+.6,h+g+1.7);a&&s.push([t,h],[t-l,h]),s.push([d+f,h]);for(let m=1;m<=8;m++){const p=m/8*Math.PI/2;s.push([d+f*Math.cos(p),h+g*Math.sin(p)])}s.push([d,_]),s.push([d+.18,_],[r,_+.95],[r-o/2-.18,_],[r-o/2,_]);for(let m=8;m>=1;m--){const p=m/8*Math.PI/2;s.push([t-d-f*Math.cos(p),h+g*Math.sin(p)])}return s.push([t-d-f,h]),a&&s.push([l,h],[0,h]),{pts:s,top:_+.95,kind:n,neck:[r-o/2,d,h+g,_],scroll:{xn:d,kw:f,kh:g,base:h},lift:c,stepIn:l}}if(n==="pilaster"){const o=t*.56,a=e+Math.min(i*.55,3.2);return s.push([t,e+.7],[r+o/2,e+.7],[r+o/2,a],[r+o/2+.25,a],[r,a+Math.min(2.2,o*.3)],[r-o/2-.25,a],[r-o/2,a],[r-o/2,e+.7],[0,e+.7]),{pts:s,top:a+Math.min(2.2,o*.3),kind:n,centre:[r-o/2,r+o/2,a]}}if(n==="bell"){const o=Math.max(1.8,t*.38),a=e+i+.35,c=(p,y,x,v,P)=>{const C=1-P;return[C*C*C*p[0]+3*C*C*P*y[0]+3*C*P*P*x[0]+P*P*P*v[0],C*C*C*p[1]+3*C*C*P*y[1]+3*C*P*P*x[1]+P*P*P*v[1]]},l=[t,e],h=[t+.1,e+i*.55],d=[r+o/2+.6,e+i*.5],u=[r+o/2,a];for(let p=1;p<=12;p++)s.push(c(l,h,d,u,p/12));for(let p=1;p<10;p++){const y=p/10*Math.PI;s.push([r+o/2*Math.cos(y),a+.7*Math.sin(y)])}const f=[0,e],g=[-.1,e+i*.55],_=[r-o/2-.6,e+i*.5],m=[r-o/2,a];for(let p=12;p>=1;p--)s.push(c(f,g,_,m,p/12));return{pts:s,top:a+.7,kind:n}}return s.push([t,e+.6],[0,e+.6]),{pts:s,top:e+.6,kind:"cornice"}}const qh=new At,tv=new At;function Yn(n,t,e,i){return qh.multiplyMatrices(n,tv.makeTranslation(t,e,i))}function ln(n,t,e,i,s,r,o=25,a=6){const c=new en(t,{depth:e,bevelEnabled:!1,curveSegments:a});n.add(c,i,Yn(s,0,0,r),o),c.dispose()}function di(n){return new Ae(n.map(([t,e])=>new Q(t,e)))}function xi(n,t,e,i,s,r,o,a){const c=ft.frame,l=.07;if(o.head==="arch"){const _=new Ae;_.moveTo(-s/2-.08,0),_.absarc(0,0,s/2+.08,0,Math.PI,!1);const m=new en(_,{depth:.05,bevelEnabled:!1,curveSegments:10});m.scale(1,.42,1),n.add(m,o.brickAccent,Yn(t,e+s/2,i+r+.06,0),30),m.dispose(),n.box(.2,.2,.07,e+s/2-.1,i+r+.06+s/2*.42-.16,0,ft.stone,t,40),n.box(.18,.14,.07,e-.16,i+r+.02,0,ft.stone,t,!1),n.box(.18,.14,.07,e+s-.02,i+r+.02,0,ft.stone,t,!1)}else o.head==="lintel"&&n.box(s+.3,.16,.08,e-.15,i+r,0,ft.stone,t);n.box(s+.18,.1,.12,e-.09,i-.1,0,ft.stone,t),n.box(s,r,.05,e,i,0,c,t),n.box(s-2*l,r-2*l,.03,e+l,i+l,.04,ft.glass,t,!1),n.box(l,r-2*l,.06,e+s/2-l/2,i+l,.04,c,t,!1),n.box(s-2*l,l,.06,e+l,i+r*.55,.04,c,t,!1);const h=i+r*.55+l,d=i+r-l,u=.075;for(const[_,m]of[[e+l,e+s/2-l/2],[e+s/2+l/2,e+s-l]]){const p=(_+m)/2;n.segment(new R(p,h,u),new R(p,d,u),t);for(let y=1;y<3;y++){const x=h+(d-h)*y/3;n.segment(new R(_,x,u),new R(m,x,u),t)}}const f=a(),g=r*.55-l;if(f<.38)n.box((s-2*l)/2-.01,g,.05,e+l,i+l,.07,o.shutter,t),n.box((s-2*l)/2-.01,g,.05,e+s/2+.01,i+l,.07,o.shutter,t);else if(f<.78){const _=(s-2*l)/2;n.box(_,g,.05,e-_-.02,i+l,.02,o.shutter,t),n.box(_,g,.05,e+s+.02,i+l,.02,o.shutter,t)}}function ev(n,t,e,i,s,r,o){o.head!=="plain"&&n.box(s+.3,.16,.08,e-.15,i+r,0,ft.stone,t),n.box(s+.18,.1,.12,e-.09,i-.1,0,ft.stone,t),n.box(s,r,.05,e,i,0,ft.frame,t),n.box(s-2*.08,r-2*.08,.03,e+.08,i+.08,.04,ft.glass,t,!1);const c=.035,l=s>1.1?3:2;for(let d=1;d<l;d++)n.box(c,r-2*.08,.05,e+.08+(s-2*.08)*d/l-c/2,i+.08,.045,ft.frame,t,!1);const h=6;for(let d=1;d<h;d++){const u=d===h/2?.07:c;n.box(s-2*.08,u,.05,e+.08,i+.08+(r-2*.08)*d/h-u/2,.045,ft.frame,t,!1)}}function nv(n,t,e,i,s,r,o){n.box(i-e,r,.05,e,s,0,ft.frame,t),n.box(i-e-.12,r-.12,.03,e+.06,s+.06,.04,ft.glass,t,!1);const a=Math.max(2,Math.round((i-e)/.62));for(let c=1;c<a;c++)n.box(.07,r-.12,.07,e+(i-e)*c/a-.035,s+.06,.03,o.trim,t,!1);n.box(i-e-.12,.06,.06,e+.06,s+r*.58,.04,o.trim,t,!1);for(let c=0;c<a;c++){const l=e+(i-e)*c/a+.04,h=e+(i-e)*(c+1)/a-.04;n.segment(new R((l+h)/2,s+r*.6,.075),new R((l+h)/2,s+r-.07,.075),t)}}function iv(n,t,e,i,s,r,o,a,c){e==="sash"?ev(n,t,i,s,r,o*1.08,a):xi(n,t,i,s,r,o,a,c)}function sv(n,t,e){const i=Ke(e.seed??1),s=e.w,r=e.depth??14,o=e.style??Xh(1620,e.use,s,i),a=o.gable,c=e.use==="warehouse",l=e.floors??2+Math.floor(i()*3),h=e.groundH??(c?3.3:3.9+i()*.5),d=e.floorH??(c?2.55+i()*.2:2.9+i()*.4),u=h+l*d,f=.62+i()*.1,g=s/2*Math.tan(f*Math.PI/2*.9),_=o.year>=1640,m=e.brick??(_?Re(i,ft.bricksLate):Re(i,ft.bricks)),p=Re(i,ft.bricks),y=Re(i,ft.shutters),x=e.base??0,v=a==="wood",P=a==="stepR"?"arch":a==="step"?i()<.5?"arch":"lintel":v?"plain":"lintel",C={shutter:y,head:P,brickAccent:p,trim:ft.woodDark},w=v?t:new At().multiplyMatrices(t,new At().makeRotationX(Hc)),L=.24,E=i()<.5,M=c?1.6:1.15,D=Math.min(h-.9,c?2.4:2.5),V=c?s/2-M/2:E?.45:s-.45-M,O=E?V+M+.35:.35,W=E?s-.35:V-.35,q=.85,X=h-.5,st=e.shop&&!c;n.box(s-.04,u-x,r-.8,.02,x,-r,m,t);const B=$h(a,s,u,g),ut=Z=>{const G=new Ae;G.moveTo(0,x),G.lineTo(s,x),G.lineTo(s,u);for(const[it,k]of B.pts)G.lineTo(it,k);if(G.lineTo(0,u),G.closePath(),Z){const it=new Wr;it.moveTo(O,q),it.lineTo(O,X),it.lineTo(W,X),it.lineTo(W,q),it.closePath(),G.holes.push(it)}return G},_t=v?Re(i,ft.woodPaint):m;if(v){const Z=new Ae([[0,x],[s,x],[s,h],[0,h]].map(([T,ot])=>new Q(T,ot)));if(st){const T=new Wr;T.moveTo(O,q),T.lineTo(O,X),T.lineTo(W,X),T.lineTo(W,q),T.closePath(),Z.holes.push(T)}ln(n,Z,.8,_t,t,-.8);for(let T=0;T<l;T++){const ot=(T+1)*L,et=h+T*d;n.box(s,d,ot+.8,0,et,-.8,_t,t),n.box(s+.06,.26,.3,-.03,et-.26,ot-.3+.02,ft.woodDark,t,40);for(let mt=.3;mt<s;mt+=Math.max(1.2,s/4))n.box(.14,.5,L+.02,mt-.07,et-.76,ot-L-.01,ft.woodDark,t,!1);for(let mt=.4;mt<s-.2;mt+=.42)n.segment(new R(mt,et+.05,ot+.01),new R(mt,et+d-.3,ot+.01),t)}const G=l*L+L,it=di([[0,u],[s,u],[s/2,B.top]]);ln(n,it,G+.8,_t,t,-.8);const k=Math.atan2(B.top-u,s/2),j=Math.hypot(s/2,B.top-u)+.4;for(const T of[-1,1]){const ot=new tn(j,.28,.1),et=new At().makeRotationZ(T*k);et.setPosition(s/2-T*(s/4),(u+B.top)/2+.12,G+.06),n.add(ot,ft.woodDark,new At().multiplyMatrices(t,et),30),ot.dispose()}n.box(.16,1.4,.14,s/2-.08,B.top-.8,G+.04,ft.woodDark,t);for(let T=.5;T<s-.3;T+=.42){const ot=u+(B.top-u)*(1-Math.abs(T-s/2)/(s/2))-.2;ot>u+.3&&n.segment(new R(T,u+.1,G+.01),new R(T,ot,G+.01),t)}}else ln(n,ut(st),.8,m,w,-.8);ln(n,ut(!1),.3,m,t,-r,35,4);const wt=i()<.12&&_?Re(i,ft.glazed):i()<.8?Re(i,ft.tiles):Re(i,ft.slate),Ot=a==="cornice"||a==="pilaster"?u+g*.8:Math.min(u+g,B.top-.35),Yt=di([[-.05,u-.05],[s+.05,u-.05],[s/2,Ot]]),J=v?l*L+L-.1:-.75;if(ln(n,Yt,J+r-.35,wt,t,-r+.35,30),a==="step"||a==="stepR"){for(let G=0;G<B.pts.length-1;G++){const[it,k]=B.pts[G],[j,T]=B.pts[G+1];if(Math.abs(k-T)<.001&&Math.abs(it-j)>.2){const ot=Math.min(it,j);n.box(Math.abs(j-it)+.12,.14,.95,ot-.06,k,-.88,ft.stone,w,40)}}if(a==="stepR"){for(const G of[1,-1])for(const[it,k]of B.treads){const j=G===1?it:s-it,T=Math.min(B.sw,B.sh)*.62,ot=j-G*B.sw,et=k+.14,mt=[[ot,et]];for(let Pt=0;Pt<=6;Pt++){const gt=Pt/6*Math.PI/2;mt.push([ot+G*T*Math.cos(gt),et+T*Math.sin(gt)])}ln(n,di(mt),.18,ft.stone,w,0,40);const ht=new Gs(.12,.75,4);n.add(ht,ft.stone,Yn(w,j-G*.14,k+.14+.38,-.2),40),ht.dispose()}for(let G=h+.9;G<u-.3;G+=d/2)n.box(s,.13,.04,0,G,0,ft.stone,w,35);for(let G=u+.8;G<B.top-1.2;G+=d/2){const it=s/2*Math.max(0,1-(G-u)/(B.top-u))-.3;it>.6&&n.box(2*it,.13,.04,s/2-it,G,0,ft.stone,w,35)}}const Z=new Si(.22,8,6);n.add(Z,ft.stone,Yn(w,s/2,B.top+.3,-.3),!1),Z.dispose()}else if(a==="neck"||a==="raisedNeck"){const{xn:Z,kw:G,kh:it,base:k}=B.scroll;for(const ht of[1,-1]){const Pt=ht===1?Z:s-Z,gt=[[Pt,k]];for(let S=0;S<=8;S++){const H=S/8*Math.PI/2;gt.push([Pt+ht*G*Math.cos(H),k+it*Math.sin(H)])}ln(n,di(gt),.12,ft.stone,w,0,40);const A=new $e(.2,.2,.16,10).rotateX(Math.PI/2);n.add(A,ft.stone,Yn(w,Pt+ht*(G-.15),k+.2,.1),!1),A.dispose()}for(const[ht,Pt]of[[Z+G-.05,s-Z-G+.1],[-.05,s-Z-G+.1]])Pt>.2&&n.box(Pt,.14,.95,ht,k,-.88,ft.stone,w,40);const[j,T,,ot]=B.neck;n.box(T-j+.5,.18,.95,j-.25,ot,-.88,ft.stone,w,40);const et=di([[j-.18,ot],[T+.18,ot],[(j+T)/2,ot+.95]]);ln(n,et,.12,ft.stone,w,0,40),B.lift>0&&(n.box(B.stepIn+.12,.14,.95,-.06,u+B.lift,-.88,ft.stone,w,40),n.box(B.stepIn+.12,.14,.95,s-B.stepIn-.06,u+B.lift,-.88,ft.stone,w,40));const mt=new Si(.18,8,6);n.add(mt,ft.stone,Yn(w,s/2,B.top+.18,-.3),!1),mt.dispose()}else if(a==="bell"){n.box(s*.5,.16,.9,s*.25,B.top-.75,-.85,ft.stone,w,40);for(const Z of[.15,s-.95])n.box(.8,.9,.12,Z,u+.1,0,ft.stone,w,40)}else if(a==="spout")n.box(1.6,.12,.9,s/2-.8,B.top,-.8,ft.woodDark,w,40);else if(a==="pilaster"){const Z=s>8.5?4:3;for(let T=0;T<Z;T++){const ot=.15+(s-.85)*T/(Z-1);n.box(.55,u-h-.3,.12,ot,h+.1,0,ft.stone,w,40),n.box(.75,.25,.18,ot-.1,u-.45,0,ft.stone,w,40)}n.box(s+.1,.55,.22,-.05,u+.1,0,ft.stone,w,40);const[G,it,k]=B.centre;n.box(it-G+.5,.25,.2,G-.25,k-.1,0,ft.stone,w,40);const j=di([[G-.25,k],[it+.25,k],[(G+it)/2,B.top]]);ln(n,j,.14,ft.stone,w,0,40)}else if(a==="cornice"){n.box(s+.3,.45,.55,-.15,u+.2,0,ft.frame,w,40);for(let Z=.3;Z<s;Z+=.9)n.box(.14,.3,.4,Z,u-.12,.1,ft.frame,w,!1);n.box(1.6,2.2,1.6,s/2-.8,u+.6,-2,ft.frame,t,40),n.box(1,1.6,.05,s/2-.5,u+.8,-.38,ft.woodDark,t,!1)}!v&&a!=="cornice"&&a!=="pilaster"&&a!=="stepR"&&n.box(s+.06,.22,.12,-.03,u-.22,0,ft.stoneDark,w),a==="stepR"&&n.box(s+.06,.22,.12,-.03,u-.22,0,ft.stone,w);const ct=o.windows;if(v)for(let Z=0;Z<l;Z++){const G=h+Z*d+.45,it=Yn(t,0,0,(Z+1)*L).clone();nv(n,it,.35,s-.35,G,Math.min(d-.85,1.9),C)}else if(c)for(let Z=0;Z<l;Z++){const G=h+Z*d+.25;if(n.box(1.25,d-.55,.05,s/2-.625,G,0,ft.woodDark,w),n.box(1.45,.12,.1,s/2-.725,G+d-.55,0,ft.stone,w,!1),s>5.2)for(const it of[.55,s-1.35])xi(n,w,it,G+.35,.8,Math.min(1.3,d-1),{...C,head:"lintel"},i)}else{const Z=Math.max(2,Math.min(a==="pilaster"?5:4,Math.round(s/1.85))),G=Math.min(ct==="sash"?1.15:1.25,(s-.6)/Z-.45),it=(s-Z*G)/(Z+1);for(let k=0;k<l;k++){const j=h+k*d+.55,T=Math.min(d-.95,2.05);for(let ot=0;ot<Z;ot++)iv(n,w,ct,it+ot*(G+it),j,G,T,C,i)}}const xt=u+.35;if(B.top-xt>2&&a!=="cornice"){const Z=v?l*L+L:0,G=v?Yn(t,0,0,Z).clone():w;if(i()<.6||a==="spout"||c)n.box(1,1.7,.05,s/2-1/2,xt,0,ft.woodDark,G),n.box(1+.16,.12,.1,s/2-1/2-.08,xt+1.7,0,ft.stone,G);else if(a==="neck"||a==="raisedNeck"){const[k,j,T]=B.neck;xi(n,w,(k+j)/2-.5,Math.max(xt+.1,T-.2),1,1.4,C,i)}else xi(n,G,s/2-.5,xt+.1,1,1.4,C,i);const it=Math.min(B.top-.8,xt+2.4);n.box(.22,.24,1.25,s/2-.11,it,-.2,ft.woodDark,G)}n.box(M,D,.05,V,.32,0,Re(i,ft.doors),w),n.box(M+.2,h-.32-D-.15,.05,V-.1,.32+D+.05,0,ft.frame,w),n.box(M-.2,h-.32-D-.35,.03,V,.32+D+.15,.04,ft.glass,w,!1),c||n.box(M+.9,.32,1.1,V-.45,0,0,ft.stoneDark,t),!st&&!v&&!c&&i()<.14&&(n.box(.78,.6,.08,V+M/2-.39,h+.12,0,ft.stone,w,40),n.box(.5,.34,.04,V+M/2-.25,h+.25,.06,Re(i,["#7d6a4d","#5d6d6a","#8a5a3c"]),w,!1));let z=null,at=null;if(st){const Z=W-O,G=["#7d2e22","#2f3e52","#a07a35","#dcd0b3","#5a3a28","#3d4a35","#8a6a3a"];n.box(Z,X-q,.04,O,q,-.84,"#3a2f25",t,!1);for(let j=q+.05;j<X-.4;j+=.52){n.box(Z,.04,.32,O,j,-.8,ft.woodDark,t,!1);for(let T=O+.03;T<W-.1;){const ot=.04+i()*.07,et=.26+i()*.18;n.box(ot,et,.24,T,j+.04,-.78,Re(i,G),t,!1),T+=ot+.008+(i()<.08?.12:0)}}n.box(.12,X-q,.9,O-.12,q,-.82,ft.woodDark,t),n.box(.12,X-q,.9,W,q,-.82,ft.woodDark,t),n.box(Z+.2,.18,.12,O-.1,h-.38,0,ft.woodDark,t);const it=new tn(Z+.5,.07,1.45),k=new At().makeRotationX(.32);k.setPosition(O+Z/2,h-.55,.62),n.add(it,ft.wood,qh.multiplyMatrices(t,k),30),it.dispose(),n.box(Z-.2,.85,.75,O+.1,0,.05,ft.woodDark,t);for(let j=O+.22;j<W-.4;j+=.36+i()*.12){const T=1+Math.floor(i()*3);for(let ot=0;ot<T;ot++)n.box(.28,.06,.38,j,.85+ot*.065,.2+i()*.1,Re(i,G),t,!1)}at=new R((O+W)/2,1,.5),z=new R(E?V+M+.25:V-.25,h+1.4,v?L:(h+1.4)*Hc)}else if(!c){const Z=Math.max(1,Math.round((W-O)/1.7)),G=Math.min(1.3,(W-O)/Z-.35),it=(W-O-Z*G)/(Z+1);for(let k=0;k<Z;k++)xi(n,w,O+it+k*(G+it),.9,G,Math.min(h-1.5,2.3),{...C,head:v?"plain":"lintel"},i)}return{height:B.top,h0:u,signAnchor:z,counter:at,gable:a,w:s,depth:r}}function rv(n,t,e){const i=Ke(e.seed??7),s=e.w,r=-1.6,o=e.style??Yh(1620,i),a=o.gable,c=a==="wood",l=e.floors??2+Math.floor(i()*3),h=3.2,d=2.9,u=h+l*d,f=s/2*1.05,g=c?Re(i,ft.woodPaint):o.year>=1640?Re(i,ft.bricksLate):Re(i,ft.bricks),_={shutter:Re(i,ft.shutters),head:"lintel",brickAccent:g},m=e.depth??10;n.box(s-.04,u-r,m-.4,.02,r,-m,g,t);const p=$h(a,s,u,f),y=new Ae;y.moveTo(0,r),y.lineTo(s,r),y.lineTo(s,u);for(const[v,P]of p.pts)y.lineTo(v,P);y.lineTo(0,u),y.closePath(),ln(n,y,.35,g,t,-.35,25,5);const x=di([[-.05,u-.05],[s+.05,u-.05],[s/2,Math.min(u+f,p.top-.3)]]);if(ln(n,x,m-.8,Re(i,ft.tiles),t,-m+.35,30),c)for(let v=.4;v<s-.2;v+=.42)n.segment(new R(v,0,.01),new R(v,u-.2,.01),t);if(a==="step")for(let v=0;v<p.pts.length-1;v++){const[P,C]=p.pts[v],[w,L]=p.pts[v+1];Math.abs(C-L)<.001&&Math.abs(P-w)>.2&&n.box(Math.abs(w-P)+.12,.14,.5,Math.min(P,w)-.06,C,-.45,ft.stone,t,40)}n.box(s,.9,.06,0,r,0,"#3f3a33",t,!1);for(let v=0;v<l+1;v++){const P=.6+v*d;if(P>u-1)break;i()<.55?n.box(1.1,1.9,.05,s/2-.55,P,0,ft.woodDark,t):xi(n,t,s/2-.55,P+.2,1.1,1.7,_,i),s>5.5&&i()<.6&&xi(n,t,.5,P+.25,.9,1.5,_,i)}if(i()<.35){n.box(s-.6,.12,1.3,.3,h-.1,0,ft.wood,t),n.box(s-.6,.9,.05,.3,h,1.25,ft.wood,t);for(let v=.4;v<s-.3;v+=1.2)n.box(.1,h+1.6,.1,v,r,1.2,ft.woodDark,t)}return p.top-u>2&&n.box(.2,.22,1.2,s/2-.1,Math.min(p.top-.9,u+2),-.2,ft.woodDark,t),{height:p.top}}const Ze="#d6cbb0",ov="#c4b593",$n="#5e6268",Vc="#8d4b33",av=new At,Rn=(n,t,e,i=0)=>av.makeRotationY(i).setPosition(n,t,e);function Or(n,t,e,i,s){const r=Xs(t),[o,a,c,l,h,d]=r,u=h>=d,f=u?h:d,g=u?d:h,_=new Ae([new Q(-g,0),new Q(g,0),new Q(0,i-e)]),m=new en(_,{depth:2*f,bevelEnabled:!1});m.translate(0,0,-f);const[p,y]=u?[c,l]:[-l,c],x=new At().makeRotationY(Math.atan2(p,-y));x.setPosition(o,e,-a),n.add(m,s,x,30),m.dispose()}function Xs(n){let t=null;for(let e=0;e<n.length;e++){const i=n[e],s=n[(e+1)%n.length],r=s[0]-i[0],o=s[1]-i[1],a=Math.hypot(r,o);if(a<.5)continue;const c=r/a,l=o/a;let h=1/0,d=-1/0,u=1/0,f=-1/0;for(const[_,m]of n){const p=_*c+m*l,y=-_*l+m*c;h=Math.min(h,p),d=Math.max(d,p),u=Math.min(u,y),f=Math.max(f,y)}const g=(d-h)*(f-u);if(!t||g<t.area){const _=(h+d)/2,m=(u+f)/2;t={area:g,v:[_*c-m*l,_*l+m*c,c,l,(d-h)/2,(f-u)/2]}}}return t.v}function gi(n,t,e,i,s=0,r=30){const o=new Ae(t.map(([c,l])=>new Q(c,l))),a=new en(o,{depth:e-s,bevelEnabled:!1});a.rotateX(-Math.PI/2),a.translate(0,s,0),n.add(a,i,new At,r),a.dispose()}function Xi(n,t,e,i,{base:s=0,shaft:r=.42,width:o=9,color:a=ov,seed:c=1}={}){const l=Ke(c),h=i*r;n.box(o,h-s,o,t-o/2,s,e-o/2,a,new At),n.box(o+.8,.5,o+.8,t-o/2-.4,h,e-o/2-.4,Ze,new At);let d=h+.5,u=o*.78;const f=2+Math.floor(l()*2);for(let p=0;p<f;p++){const y=(i-h)*(p===0?.24:.16),x=new $e(u/2,u/2,y,8,1);n.add(x,p%2?Ze:"#d9d2bf",Rn(t,d+y/2,e,Math.PI/8),30),x.dispose();const v=new $e(u/2+.02,u/2+.02,y*.45,8,1,!0);n.add(v,"#3a3a3a",Rn(t,d+y*.52,e,Math.PI/8),!1),v.dispose();const P=new $e(u*.42,u*.56,.6,8);n.add(P,$n,Rn(t,d+y+.3,e,Math.PI/8),30),P.dispose(),d+=y+.6,u*=.72}const g=Math.max(3,i-d),_=new Gs(u*.55,g,8);n.add(_,$n,Rn(t,d+g/2,e,Math.PI/8),30),_.dispose();const m=new Si(.35,8,6);n.add(m,"#c9a24a",Rn(t,i+.2,e),!1),m.dispose()}function Us(n){let t=0;for(let i=0;i<n.length;i++){const[s,r]=n[i],[o,a]=n[(i+1)%n.length];t+=s*a-o*r}const e=[];for(let i=0;i<n.length;i++){const s=n[i],r=n[(i+1)%n.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);if(o<3)continue;const a=(r[0]-s[0])/o,c=(r[1]-s[1])/o,l=t>0?c:-c,h=t>0?-a:a,d=new R(a,0,-c),u=new R(l,0,-h);let f=gn(new R(s[0],0,-s[1]),d,u);f.elements[5]<0&&(f=gn(new R(r[0],0,-r[1]),d.clone().negate(),u)),e.push({M:f,len:o,normal:[l,h],mid:[(s[0]+r[0])/2,(s[1]+r[1])/2]})}return e}function ws(n,t,{tiers:e,spacing:i,ww:s,wh:r,pilasters:o=!1,pointed:a=!1,top:c=0,frame:l="#ece5d2"}){for(const h of Us(t)){const d=Math.floor((h.len-2)/i);if(d<1)continue;const u=(h.len-d*i)/2;for(let f=0;f<d;f++){const g=u+(f+.5)*i;e.forEach((_,m)=>{const p=Array.isArray(r)?r[m]:r;if(n.box(s+.3,p+.3,.08,g-s/2-.15,_-.15,0,l,h.M,40),n.box(s,p,.06,g-s/2,_,.05,"#3d434b",h.M,!1),a){const y=new Ae([new Q(-s/2-.15,0),new Q(s/2+.15,0),new Q(0,s*.9)]),x=new en(y,{depth:.08,bevelEnabled:!1});n.add(x,l,new At().multiplyMatrices(h.M,new At().makeTranslation(g,_+p+.15,0)),40),x.dispose()}}),o&&f>0&&n.box(.7,c-4.5,.3,u+f*i-.35,4.2,0,"#e2d8bf",h.M,40)}}}function lv(n,t,e,i,s){const[r,o,a,c,l,h]=Xs(t),d=l>=h,[u,f]=d?[a,c]:[-c,a],g=d?l:h,_=d?h:l,m=-f,p=u,y=(M,D,V)=>new R(r+u*M+m*D,V,-(o+f*M+p*D)),x=[y(-g,-_,e),y(g,-_,e),y(g,_,e),y(-g,_,e)],v=y(-(g-_*.9),0,i),P=y(g-_*.9,0,i),C=[[x[0],x[1],P],[x[0],P,v],[x[1],x[2],P],[x[2],x[3],v],[x[2],v,P],[x[3],x[0],v]],w=new R(r,e,-o),L=[];for(const[M,D,V]of C){const O=new R().subVectors(D,M).cross(new R().subVectors(V,M)),W=M.clone().add(D).add(V).multiplyScalar(1/3).sub(w),[q,X]=O.dot(W)>=0?[D,V]:[V,D];L.push(M.x,M.y,M.z,q.x,q.y,q.z,X.x,X.y,X.z)}const E=new pe;E.setAttribute("position",new Bt(L,3)),E.computeVertexNormals(),n.add(E,s,new At,30),E.dispose()}function cv(n,t,e,i,s,r=5){const[o,a,c,l,h,d]=Xs(t),u=h>=d,[f,g]=u?[c,l]:[-l,c],_=u?h:d,m=u?d:h,p=-g,y=f,x=[],v=m/(r+.5),P=(i-e)/(r+.4);let C=0,w=0;x.push([0,0],[2*m,0]);const L=[];for(let M=0;M<r;M++)w+=P,L.push([2*m-C,w]),C+=v,L.push([2*m-C,w]);x.push(...L,[m+v*.25,i-e+P*.4],[m-v*.25,i-e+P*.4]);for(let M=L.length-1;M>=0;M--)x.push([2*m-L[M][0],L[M][1]]);const E=new Ae(x.map(([M,D])=>new Q(M,D)));for(const M of[-1,1]){const D=new R(o+f*_*M-p*m,e,-(a+g*_*M-y*m)),V=new R(p,0,-y),O=new R(f*M,0,-g*M);let W=gn(D,V,O);W.elements[5]<0&&(W=gn(D.clone().add(V.clone().multiplyScalar(2*m)),V.clone().negate(),O));const q=new en(E,{depth:.8,bevelEnabled:!1});q.translate(0,0,-.6),n.add(q,s,W,30),q.dispose()}}function Gc(n,t,e){gi(n,t,e,"#d3c7a9");for(const i of Us(t)){for(let s=.5;s<i.len;s+=3.2)n.box(.22,e+3.5,.22,s,0,1.6,"#6f5a43",i.M,!1);for(let s=2;s<e+3;s+=2.2)n.box(i.len,.14,.14,0,s,1.62,"#6f5a43",i.M,!1)}}function hv(n,t){const e=[];for(const r of t)n.during(r.from,r.to,()=>uv(n,r,e));const i=t.find(r=>r.kind==="townhall"&&r.buildFrom),s=t.find(r=>r.kind==="oldtownhall");if(i&&s){const[r,o,a,c,l,h]=Xs(i.p),[d,u]=s.front,f=Math.abs(a*d+c*u)>.7?[a,c,l]:[-c,a,h],g=f[2]===l?h:l,_=f[2],m=f[0]*d+f[1]*u>0?1:-1,p=[f[0]*m,f[1]*m],y=-p[1],x=p[0],v=(P,C)=>[[P,-g],[C,-g],[C,g],[P,g]].map(([w,L])=>[r+p[0]*w+y*L,o+p[1]*w+x*L]);n.during(i.buildFrom,i.from,()=>Gc(n,v(-_,_-31),13)),n.during(s.to,i.from,()=>Gc(n,v(_-31,_),6))}return e}function uv(n,t,e){const i=s=>e.push({...s,from:t.from,to:t.to});{if(t.kind==="exchange"){const[r,o]=t.center,[a,c]=t.size,[l,h]=t.axis??[.247,.969],d=new At().makeRotationY(Math.atan2(l,-h)).setPosition(r,0,-o),u=[[-a/2,-c/2,a,7],[-a/2,c/2-7,a,7],[-a/2,-c/2,7,c],[a/2-7,-c/2,7,c]];for(const[_,m,p,y]of u)n.box(p,t.h,y,_,-1.5,m,"#b77a5a",d),n.box(p+.4,.4,y+.4,_-.2,t.h-1.5,m-.2,Ze,d);for(let _=-a/2+2;_<a/2-1;_+=4)n.box(1.6,3.6,.2,_,-1.5,-c/2-.1,"#2c2620",d,!1);const[f,g]=t.tower;Xi(n,f,-g,t.tower[2],{base:t.h-1.5,shaft:.42,width:6,color:Ze,seed:3}),i({key:t.key,label:t.label,pos:new R(f,t.tower[2]+6,-g)});return}if(t.kind==="oldtownhall"){const r=t.p;gi(n,r,t.h,"#cbbd9c"),ws(n,r,{tiers:[2.4,8],wh:[3.8,4],ww:1.5,spacing:4.4,pointed:!0,frame:"#e2d8bf"}),Or(n,r,t.h,t.h+11,Vc),cv(n,r,t.h,t.h+11,"#cbbd9c");const[o,a,c]=t.tower;Xi(n,o,-a,c,{base:0,shaft:.62,width:6.5,color:"#c4b593",seed:21}),i({key:t.key,label:t.label,pos:new R(o,c+5,-a)});return}if(t.kind==="weighhouse"){const r=t.p;gi(n,r,t.h,"#a7745a"),ws(n,r,{tiers:[.2],wh:3.6,ww:2.4,spacing:4.3,frame:"#d9ccae"}),ws(n,r,{tiers:[5],wh:2,ww:1.2,spacing:3});for(const a of Us(r))n.box(a.len+.4,.4,.4,-.2,t.h-.4,0,Ze,a.M,40);lv(n,r,t.h,t.ridge,Vc);const o=r.reduce((a,c)=>[a[0]+c[0]/r.length,a[1]+c[1]/r.length],[0,0]);Xi(n,o[0],-o[1],t.ridge+7,{base:t.ridge-1.5,shaft:0,width:2.4,color:$n,seed:5}),i({key:t.key,label:t.label,pos:new R(o[0],t.ridge+10,-o[1])});return}const s=t.p;if(t.kind==="townhall"){gi(n,s,t.h,Ze),ws(n,s,{tiers:[1.2,5.2,10.4,15.4,20.6],wh:[2,3.6,2,3.6,2],ww:1.5,spacing:3.6,pilasters:!0,top:t.h});const r=Us(s).sort((p,y)=>y.normal[0]-p.normal[0])[0],o=27,a=r.len/2-o/2;n.box(o,t.h+.6,1.4,a,0,-.2,"#e6dcc3",r.M),[1.2,5.2,10.4,15.4,20.6].forEach((p,y)=>{const x=y%2?3.6:2;for(let v=0;v<7;v++){const P=a+1.8+v*3.6+.3;if(y===0&&(v===2||v===3||v===4)){n.box(2.2,3.4,.1,P-.4,0,1.2,"#2c2620",r.M);continue}n.box(1.8,x+.3,.08,P-.15,p-.15,1.2,"#ece5d2",r.M,40),n.box(1.5,x,.06,P,p,1.25,"#3d434b",r.M,!1)}});const c=new Ae([new Q(-o/2-.6,0),new Q(o/2+.6,0),new Q(0,6.2)]),l=new en(c,{depth:1.6,bevelEnabled:!1});n.add(l,"#e6dcc3",new At().multiplyMatrices(r.M,new At().makeTranslation(r.len/2,t.h+.6,-.4)),30),l.dispose();for(const p of Us(s))n.box(p.len+.8,.9,.7,-.4,t.h-.9,0,"#e6dcc3",p.M,40);Or(n,s,t.h,t.h+9,$n);const[h,d,u]=t.tower;n.box(14,6,14,h-7,t.h+2,-d-7,Ze,new At);const f=new $e(5.6,5.6,8,8);n.add(f,Ze,Rn(h,t.h+12,-d,Math.PI/8),30),f.dispose();const g=new Si(5.8,8,6,0,Math.PI*2,0,Math.PI/2);n.add(g,$n,Rn(h,t.h+16,-d,Math.PI/8),30),g.dispose();const _=new $e(1.6,1.6,4,8);n.add(_,Ze,Rn(h,t.h+23,-d,Math.PI/8),30),_.dispose();const m=new Gs(1.8,u-t.h-25,8);n.add(m,$n,Rn(h,(u+t.h+25)/2,-d,Math.PI/8),30),m.dispose(),i({key:t.key,label:"Stadhuis",pos:new R(h,u+6,-d)});return}if(t.kind==="church"){if(gi(n,s,t.h,"#c8b394"),ws(n,s,{tiers:[3.5],wh:t.h-7.5,ww:2.4,spacing:7,pointed:!0,frame:"#d9ccae"}),Or(n,s,t.h,t.ridge??t.h+12,$n),t.tower){const[r,o,a]=t.tower;n.during(t.towerFrom??t.from,t.to,()=>Xi(n,r,-o,a,{base:0,shaft:.45,width:10,color:"#b8a587",seed:r|0})),i({key:t.key,label:t.label,pos:new R(r,a+6,-o)})}else{const r=s.reduce((o,a)=>[o[0]+a[0]/s.length,o[1]+a[1]/s.length],[0,0]);Xi(n,r[0],-r[1],(t.ridge??28)+14,{base:t.ridge-3,shaft:0,width:3,color:$n,seed:9}),i({key:t.key,label:t.label,pos:new R(r[0],t.ridge+20,-r[1])})}return}if(t.kind==="tower"){const[r,o,a]=t.tower;gi(n,s,t.h,"#b47a5c"),n.during(t.towerFrom??t.from,t.to,()=>Xi(n,r,-o,a,{base:t.h,shaft:0,width:7,color:Ze,seed:r*7|0})),i({key:t.key,label:t.label,pos:new R(r,a+5,-o)})}}}function dv(n,t,e=Ke(11)){const i=ft.bricks;for(const s of t){const r=s.p;if(r.length<3)continue;const o=Math.max(5,Math.min(s.h,22)),[,,,,a,c]=Xs(r),l=Math.min(a,c),h=Math.min(l*1.1,7.5),d=Math.max(4,o-h*.7),u=s.use==="low"?ft.wood:i[Math.floor(e()*i.length)];gi(n,r,d,u,0,40),Or(n,r,d,d+h,e()<.8?ft.tiles[Math.floor(e()*3)]:ft.slate[0])}}function Wc(n,t,e,i=9,s=5){const r=e.x-t.x,o=e.z-t.z,a=Math.hypot(r,o),c=Math.atan2(r,o),l=new At().makeRotationY(c).setPosition(t.x,0,t.z);n.box(i,.7,a,-i/2,-.5,0,"#b9a689",l),n.box(.35,.9,a,-i/2,.2,0,Ze,l),n.box(.35,.9,a,i/2-.35,.2,0,Ze,l);const h=a/s;for(let u=0;u<=s;u++)n.box(i-.4,3,1.6,-i/2+.2,-3.3,u*h-.8,"#a2543c",l);const d=Math.min(h/2-.8,2.2);for(let u=0;u<s;u++){const f=new Ae;f.moveTo(-h/2,-2.6),f.lineTo(-h/2,0),f.lineTo(h/2,0),f.lineTo(h/2,-2.6),f.absarc(0,-2.6,d,0,Math.PI,!1);const g=new en(f,{depth:i,bevelEnabled:!1,curveSegments:10});g.translate(0,0,-i/2),g.rotateY(Math.PI/2);const _=new At().makeTranslation(0,-.5,u*h+h/2);n.add(g,"#a2543c",new At().multiplyMatrices(l,_),30),g.dispose()}}function ko(n,t,{length:e=14,masts:i=1,seed:s=1,sails:r="furled"}={}){const o=Ke(s),a=new Rs,c=new At,l=(z,at,Z)=>new R(z,at,Z),h=i>1,d=e,u=d*(h?.26:.3),f=h?2.8:1.2,g=h?.9:.35,_=h?2.2:3,m=z=>u/2*Math.max(0,1-Math.abs(z)**_)**(1/_),p=z=>(h?1.4:.7)+z*z*(h?1.2:.45)+(h&&z<0?z*z*1.6:0),y=z=>-f*(1-Math.abs(z)**4),x=z=>p(z)-g,v=z=>z*d/2,P=z=>2*z/d,C=24,w=Array.from({length:C+1},(z,at)=>-Math.cos(Math.PI*at/C)),L=z=>{const at=m(z),Z=p(z),G=y(z),it=v(z);return[[it,Z,-at],[it,0,-at],[it,G*.75,-at*.8],[it,G,-at*.35],[it,G,at*.35],[it,G*.75,at*.8],[it,0,at],[it,Z,at]]},E=[],M=[];for(let z=0;z<C;z++){const at=L(w[z]),Z=L(w[z+1]);for(let k=0;k<at.length-1;k++)E.push(...at[k],...at[k+1],...Z[k+1],...at[k],...Z[k+1],...Z[k]);const G=[v(w[z]),x(w[z]),m(w[z])*.94],it=[v(w[z+1]),x(w[z+1]),m(w[z+1])*.94];M.push(G[0],G[1],-G[2],it[0],it[1],-it[2],it[0],it[1],it[2],G[0],G[1],-G[2],it[0],it[1],it[2],G[0],G[1],G[2]);for(const k of[-1,1])a.segment(l(at[0][0],at[0][1],k*at[7][2]),l(Z[0][0],Z[0][1],k*Z[7][2]),c)}const D=new pe;D.setAttribute("position",new Bt(E,3)),D.computeVertexNormals();const V=new Vt(o()<.5?"#4b3a2b":"#5a4430"),O=new Vt(h?"#a8823a":"#3e5a45"),W=D.attributes.position,q=[];for(let z=0;z<W.count;z++){const at=W.getY(z)>(h?1:.25)?O:V;q.push(at.r,at.g,at.b)}D.setAttribute("color",new Bt(q,3)),a.add(D,null,c,35),D.dispose();const X=new pe;X.setAttribute("position",new Bt(M,3)),X.computeVertexNormals(),a.add(X,"#8a7458",c,!1),X.dispose();const st=new Un,B=l(0,1,0),ut=(z,at,Z,G="#5a4430",it=6)=>{const k=z.distanceTo(at),j=new $e(Z,Z,k,it);st.setFromUnitVectors(B,at.clone().sub(z).normalize()),a.add(j,G,new At().compose(z.clone().lerp(at,.5),st,l(1,1,1)),!1),j.dispose()},_t=(z,at)=>{const Z=new pe,G=[];for(let it=1;it<z.length-1;it++)G.push(...z[0].toArray(),...z[it].toArray(),...z[it+1].toArray());Z.setAttribute("position",new Bt(G,3)),Z.computeVertexNormals(),a.add(Z,at,c,!1),Z.dispose()},wt="#e1d4b6",Ot="#e8dfc8";if(h){for(let z=0;z<i;z++){const at=(z-(i-1)/2)*d*.27,Z=P(at),G=x(Z),it=d*(z===1?.95:.8),k=new $e(.14,.24,it,6);a.add(k,"#5a4430",new At().setPosition(at,G+it/2,0),40),k.dispose();for(let j=0;j<2;j++){const T=u*(1.5-j*.35),ot=G+it*(.5+j*.32);ut(l(at,ot,-T/2),l(at,ot,T/2),.08),ut(l(at+.2,ot-.25,-T*.46),l(at+.2,ot-.25,T*.46),.24,Ot)}for(const j of[-1,1])a.segment(l(at,G+it*.85,0),l(at-1,p(Z),j*m(Z)),c),a.segment(l(at,G+it*.85,0),l(at+1,p(Z),j*m(Z)),c);a.segment(l(at,G+it,0),z===i-1?l(d/2+d*.18,p(1)+2.4,0):l(at+d*.27,G+d*.5,0),c)}ut(l(d/2-1.5,p(1)-.2,0),l(d/2+d*.2,p(1)+2.6,0),.12)}else{const z=d*.12,at=P(z),Z=x(at),G=d*.8,it=new $e(.1,.16,G,6);a.add(it,"#5a4430",new At().setPosition(z,Z+G/2,0),40),it.dispose();const k=Z+1.5,j=Math.max(-d/2+.6,z-d*.55),T=Z+G*.62;if(r==="set"){const gt=l(z-d*.38,Z+G*.95,0);ut(l(z,k,0),l(j,k,0),.07),ut(l(z,T,0),gt,.06),_t([l(z,k+.05,0),l(z,T,0),gt,l(j,k+.05,0)],wt),_t([l(z+.15,Z+G*.75,0),l(d/2-.2,p(1)+.1,0),l(z+.3,Z+1.2,0)],wt)}else ut(l(z,k,0),l(j,k,0),.07),ut(l(z-.2,k+.2,0),l(j+.4,k+.2,0),.22,Ot),ut(l(z,k+.45,0),l(z-d*.38,k+.5,0),.06);a.segment(l(z,Z+G,0),l(d/2,p(1),0),c),a.segment(l(z,Z+G,0),l(j,k,0),c);for(const gt of[-1,1])a.segment(l(z,Z+G*.9,0),l(z-.4,p(at),gt*m(at)),c);const ot=d*.13,et=new Ae;et.moveTo(-.25,0),et.lineTo(.25,0),et.quadraticCurveTo(ot*.6,-2.3*.55,ot*.45,-2.3),et.quadraticCurveTo(0,-2.3*1.12,-ot*.45,-2.3),et.quadraticCurveTo(-ot*.6,-2.3*.55,-.25,0);const mt=new Ws(et,6),ht=z-.3,Pt=P(ht);for(const gt of[-1,1]){const A=new At().makeRotationX(-gt*.12).setPosition(ht,p(Pt)+.1,gt*(m(Pt)+.05));a.add(mt,"#4b3a2b",A,35)}mt.dispose()}const Yt=-d/2,J=p(-1),ct=h?1.6:.9,xt=[l(Yt+.05,J+.15,0),l(Yt+.05,y(-.98)-.1,0),l(Yt-ct,y(-.98)-.1,0),l(Yt-ct*.8,.1,0),l(Yt-.25,J-.3,0)];_t(xt,"#4b3a2b");for(let z=0;z<xt.length;z++)a.segment(xt[z],xt[(z+1)%xt.length],c);return h||ut(l(Yt,J+.12,0),l(Yt+2.2,J+.35,0),.05),a.build(n,t)}const Xc=["#2f4a3a","#5a2620","#26364a","#3b2f25","#4a3d1e"],Bo=["#f1d47a","#c9973b","#8a6421"];function _e(n,t,e,i,s){const r=n.createLinearGradient(t,e,i,s);return r.addColorStop(0,Bo[0]),r.addColorStop(.5,Bo[1]),r.addColorStop(1,Bo[2]),r}const fv=[[/bybel|bijbel|bibel|testament|biblia/,n=>Yc(n,!0)],[/passer/,pv],[/pers|pars|druck|drukk/,mv],[/colom|calom|kolom|colum/,gv],[/atlas|werelt|wereld|sphaera|sfeer|sphere/,_v],[/sonne|zonne|son\b|zon\b/,vv],[/kruys|kruis|cruys|crvys|krus/,xv],[/lel(y|ie)/,yv],[/a·b·c|abc/,Mv],[/hoe(d|t)/,Sv],[/loots|stuurman|schip|ship/,bv],[/kan\b|kanne/,Ev],[/knoop/,wv],[/rapen|raapen/,Tv],[/engel/,Av],[/schrijf|boeck|boek|history|historie|catech|martelaar|musyk|muzyk|kronijk|cronijk|chronijk|psalm/,n=>Yc(n,!1)]];function Yc(n,t){if(n.lineWidth=6,t)n.fillStyle=_e(n,-60,-70,60,70),n.fillRect(-55,-72,110,144),n.strokeStyle="#3b2a12",n.strokeRect(-55,-72,110,144),n.strokeRect(-40,-56,80,112),n.beginPath(),n.moveTo(0,-40),n.lineTo(0,40),n.moveTo(-24,-14),n.lineTo(24,-14),n.stroke(),n.fillStyle="#3b2a12",n.fillRect(48,-20,16,12),n.fillRect(48,10,16,12);else{n.fillStyle="#efe6d2",n.beginPath(),n.moveTo(0,-48),n.quadraticCurveTo(-45,-66,-92,-50),n.lineTo(-92,56),n.quadraticCurveTo(-45,40,0,58),n.quadraticCurveTo(45,40,92,56),n.lineTo(92,-50),n.quadraticCurveTo(45,-66,0,-48),n.fill(),n.strokeStyle=_e(n,-90,0,90,0),n.stroke(),n.strokeStyle="#6e5b45",n.lineWidth=3;for(let e=-30;e<=36;e+=13)n.beginPath(),n.moveTo(-78,e),n.quadraticCurveTo(-40,e-9,-10,e+2),n.stroke(),n.beginPath(),n.moveTo(10,e+2),n.quadraticCurveTo(40,e-9,78,e),n.stroke()}}function pv(n){n.strokeStyle=_e(n,-60,-80,60,80),n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(0,-70),n.lineTo(-48,76),n.moveTo(0,-70),n.lineTo(48,76),n.stroke(),n.lineWidth=7,n.beginPath(),n.arc(0,0,70,Math.PI*.32,Math.PI*.68),n.stroke(),n.fillStyle=_e(n,-10,-90,10,-60),n.beginPath(),n.arc(0,-72,14,0,Math.PI*2),n.fill()}function mv(n){n.fillStyle="#efe6d2",n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=9,n.strokeRect(-56,-82,112,164),n.beginPath(),n.moveTo(-56,-40),n.lineTo(56,-40),n.moveTo(-56,10),n.lineTo(56,10),n.stroke(),n.fillRect(-36,-30,72,30),n.strokeRect(-36,-30,72,30),n.beginPath(),n.moveTo(0,-40),n.lineTo(0,-64),n.moveTo(0,-52),n.lineTo(70,-66),n.stroke(),n.fillRect(-80,24,160,22),n.strokeRect(-80,24,160,22)}function gv(n){n.fillStyle=_e(n,-30,0,30,0),n.fillRect(-26,-40,52,120),n.fillRect(-40,76,80,14),n.fillRect(-36,-52,72,14),n.fillStyle="#d8572a";for(let t=-2;t<=2;t++)n.beginPath(),n.moveTo(t*13-10,-54),n.quadraticCurveTo(t*16,-110+Math.abs(t)*14,t*13+10,-54),n.fill();n.fillStyle="#f5c04a",n.beginPath(),n.moveTo(-12,-54),n.quadraticCurveTo(0,-92,12,-54),n.fill()}function _v(n){n.fillStyle="#c9d4c8",n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=7,n.beginPath(),n.arc(0,-6,70,0,Math.PI*2),n.fill(),n.stroke(),n.lineWidth=3,n.strokeStyle="#3b2a12";for(const t of[.35,.7])n.beginPath(),n.ellipse(0,-6,70*t,70,0,0,Math.PI*2),n.stroke();for(const t of[-36,-6,24])n.beginPath(),n.moveTo(-Math.sqrt(4900-(t+6)**2),t),n.lineTo(Math.sqrt(4900-(t+6)**2),t),n.stroke();n.fillStyle=_e(n,-30,64,30,90),n.fillRect(-34,66,68,18)}function vv(n){n.fillStyle=_e(n,-80,-80,80,80);for(let t=0;t<16;t++){const e=t/16*Math.PI*2;n.save(),n.rotate(e),n.beginPath(),n.moveTo(-9,-52),n.lineTo(0,-88),n.lineTo(9,-52),n.fill(),n.restore()}n.beginPath(),n.arc(0,0,50,0,Math.PI*2),n.fill(),n.strokeStyle="#7a531c",n.lineWidth=4,n.beginPath(),n.arc(-17,-10,6,0,Math.PI*2),n.arc(17,-10,6,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(0,8,20,.2,Math.PI-.2),n.stroke()}function xv(n){n.strokeStyle="#b7322a",n.lineWidth=26,n.lineCap="butt",n.beginPath(),n.moveTo(-70,-78),n.lineTo(70,78),n.moveTo(70,-78),n.lineTo(-70,78),n.stroke(),n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=4;for(const t of[-1,1])for(let e=-60;e<=60;e+=30)n.beginPath(),n.moveTo(e,t*e*1.1-10),n.lineTo(e+10,t*e*1.1+2),n.stroke()}function yv(n){n.fillStyle="#efe6d2",n.strokeStyle=_e(n,-60,-80,60,80),n.lineWidth=5;const t=e=>{n.beginPath(),n.moveTo(0,20),n.bezierCurveTo(e*70,0,e*60,-60,e*10,-86),n.bezierCurveTo(e*30,-40,e*20,-10,0,20),n.fill(),n.stroke()};t(1),t(-1),n.beginPath(),n.moveTo(0,30),n.bezierCurveTo(-18,-20,-10,-70,0,-96),n.bezierCurveTo(10,-70,18,-20,0,30),n.fill(),n.stroke(),n.strokeStyle="#3f6a3a",n.lineWidth=8,n.beginPath(),n.moveTo(0,30),n.lineTo(0,90),n.stroke(),n.fillStyle="#5b3a25",n.strokeStyle="#5b3a25",n.lineWidth=4;for(const e of[-1,1]){n.beginPath(),n.moveTo(0,60),n.lineTo(e*60,40),n.stroke();for(let i=10;i<60;i+=14)n.beginPath(),n.moveTo(e*i,60-i/3),n.lineTo(e*(i+6),48-i/3),n.stroke()}}function Mv(n){n.fillStyle=_e(n,-80,-50,80,50),n.font='700 92px "IM Fell English", Georgia, serif',n.textAlign="center",n.textBaseline="middle",n.fillText("A·B·C",0,4)}function Sv(n){n.fillStyle="#1f1a17",n.strokeStyle=_e(n,-80,0,80,0),n.lineWidth=5,n.beginPath(),n.ellipse(0,40,92,22,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.moveTo(-48,40),n.lineTo(-40,-50),n.quadraticCurveTo(0,-66,40,-50),n.lineTo(48,40),n.fill(),n.stroke(),n.fillStyle=_e(n,-50,0,50,0),n.fillRect(-46,12,92,14)}function bv(n){n.fillStyle="#5a3a25",n.strokeStyle=_e(n,-80,0,80,0),n.lineWidth=4,n.beginPath(),n.moveTo(-90,30),n.lineTo(90,30),n.lineTo(66,66),n.lineTo(-74,66),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#efe6d2";for(const[t,e]of[[-40,80],[10,104],[56,70]])n.fillRect(t-2,30-e,4,e),n.beginPath(),n.moveTo(t-30,30-e+10),n.quadraticCurveTo(t,30-e*.55,t+30,30-e+10),n.lineTo(t+24,20),n.quadraticCurveTo(t,30,t-24,20),n.closePath(),n.fill(),n.stroke()}function Ev(n){n.fillStyle="#c9cdd2",n.strokeStyle=_e(n,-60,0,60,0),n.lineWidth=5,n.beginPath(),n.moveTo(-36,-70),n.lineTo(30,-70),n.quadraticCurveTo(66,0,40,76),n.lineTo(-44,76),n.quadraticCurveTo(-70,0,-36,-70),n.fill(),n.stroke(),n.beginPath(),n.arc(56,-10,30,-1.2,1.2),n.lineWidth=10,n.stroke()}function wv(n){n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=16,n.beginPath(),n.ellipse(-30,0,46,30,.5,0,Math.PI*2),n.stroke(),n.beginPath(),n.ellipse(30,0,46,30,-.5,0,Math.PI*2),n.stroke()}function Tv(n){for(const[t,e]of[[-48,20],[48,20],[0,-26]]){n.fillStyle="#efe6d2",n.beginPath(),n.arc(t,e+20,32,0,Math.PI*2),n.fill(),n.fillStyle="#9a4fa0",n.beginPath(),n.arc(t,e+10,30,Math.PI,0),n.fill(),n.fillStyle="#3f6a3a";for(const i of[-.5,0,.5])n.save(),n.translate(t,e-14),n.rotate(i),n.fillRect(-5,-40,10,40),n.restore()}}function Av(n){n.fillStyle="#efe6d2",n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=4;for(const t of[-1,1])n.beginPath(),n.moveTo(t*10,-10),n.bezierCurveTo(t*70,-90,t*100,-30,t*92,30),n.bezierCurveTo(t*60,10,t*40,20,t*10,20),n.fill(),n.stroke();n.beginPath(),n.arc(0,-42,20,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.moveTo(-26,0),n.lineTo(26,0),n.lineTo(40,86),n.lineTo(-40,86),n.closePath(),n.fill(),n.stroke()}function Cv(n,t){n.strokeStyle=_e(n,-80,-80,80,80),n.lineWidth=7,n.beginPath(),n.arc(0,0,70,0,Math.PI*2),n.stroke(),n.lineWidth=3,n.beginPath(),n.arc(0,0,60,0,Math.PI*2),n.stroke(),n.fillStyle=_e(n,-60,-60,60,60),n.font='84px "IM Fell English", Georgia, serif',n.textAlign="center",n.textBaseline="middle",n.fillText(t,0,6)}const Rr=new Map;function Rv({sign:n,name:t,seed:e=0}){const i=`${n}|${t}`;if(Rr.has(i))return Rr.get(i);const s=512,r=640,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d"),c=()=>{a.beginPath(),a.moveTo(24,150),a.quadraticCurveTo(24,24,s/2,20),a.quadraticCurveTo(s-24,24,s-24,150),a.lineTo(s-24,r-60),a.quadraticCurveTo(s/2,r-10,24,r-60),a.closePath()};a.fillStyle=Xc[e%Xc.length],c(),a.fill();const l=a.createRadialGradient(s/2,r*.45,40,s/2,r*.45,380);l.addColorStop(0,"rgba(255,240,200,0.10)"),l.addColorStop(1,"rgba(20,10,0,0.45)"),a.fillStyle=l,c(),a.fill(),a.lineWidth=18,a.strokeStyle=_e(a,0,0,s,r),c(),a.stroke(),a.lineWidth=3,a.strokeStyle="rgba(40,25,5,0.8)",a.save(),a.translate(s/2,r/2),a.scale(.92,.93),a.translate(-s/2,-r/2),c(),a.stroke(),a.restore();const h=(n||"").toLowerCase();a.save(),a.translate(s/2,250),a.scale(1.25,1.25);const d=fv.find(([_])=>_.test(h));d?d[1](a):Cv(a,(t||"?").trim().split(/\s+/).filter(_=>/^[A-Z]/.test(_)).map(_=>_[0]).slice(0,2).join("")||"❦"),a.restore(),a.fillStyle=_e(a,0,420,s,600),a.textAlign="center",a.textBaseline="middle";const u=n?`IN ${n.replace(/^(in\s+)/i,"").toUpperCase()}`:(t||"").toUpperCase(),f=Pv(a,u,400,50);f.slice(0,3).forEach((_,m)=>{a.font=`${f.length>2?42:50}px "IM Fell English SC", "IM Fell English", Georgia, serif`,a.fillText(_,s/2,448+m*(f.length>2?46:56)-(f.length-1)*18)});const g=new kg(o);return g.colorSpace=Oe,g.anisotropy=8,Rr.set(i,g),g.addEventListener("dispose",()=>Rr.delete(i)),g}function Pv(n,t,e,i){n.font=`${i}px "IM Fell English SC", Georgia, serif`;const s=t.split(/\s+/),r=[];let o="";for(const a of s){const c=o?`${o} ${a}`:a;n.measureText(c).width>e&&o?(r.push(o),o=a):o=c}return o&&r.push(o),r}function Lv({sign:n,name:t,seed:e,inkMaterial:i}){const s=new un,r=new ns({color:"#221c16"}),o=new ie(new tn(.06,.06,1.75),r);o.position.set(0,0,.88),s.add(o);const a=new ie(new Xr(.42,.025,4,18,Math.PI/2),r);a.rotation.y=Math.PI/2,a.position.set(0,-.42,.02),s.add(a);const c=new ie(new Xr(.22,.02,4,16,Math.PI*1.5),r);c.rotation.y=Math.PI/2,c.position.set(0,-.22,.7),s.add(c);const l=new un;l.position.set(0,-.03,1.05);const h=new ns({map:Rv({sign:n,name:t,seed:e}),transparent:!0,alphaTest:.4}),d=new un;for(const f of[1,-1]){const g=new ie(new Ci(1.12,1.4),h);g.rotation.y=f*Math.PI/2,g.position.x=f*.012,d.add(g)}const u=new ie(new tn(.022,1.24,1.05),new ns({color:"#6b4f22"}));d.add(u),d.position.y=-.82,l.add(d);for(const f of[-.3,.3]){const g=new ie(new tn(.015,.14,.015),r);g.position.set(0,-.08,f),l.add(g)}return s.add(l),s.userData.swing=l,s.userData.board=d,s.userData.phase=e%97/15,s}const An=-1.35,Dv="#8d4b33",Ia=(n,t,e=0)=>new R(n,e,-t);class Iv{constructor(t){this.pts=t.line.map(([e,i])=>new Q(e,i)),this.step=t.step,this.L=t.left,this.R=t.right,this.S=[0];for(let e=1;e<this.pts.length;e++)this.S.push(this.S[e-1]+this.pts[e].distanceTo(this.pts[e-1]));this.length=this.S[this.S.length-1]}idx(t){t=Math.max(0,Math.min(this.length,t));let e=0,i=this.S.length-1;for(;i-e>1;){const r=e+i>>1;this.S[r]<=t?e=r:i=r}const s=(t-this.S[e])/Math.max(1e-6,this.S[i]-this.S[e]);return[e,i,s]}at(t){const[e,i,s]=this.idx(t),r=new Q().subVectors(this.pts[i],this.pts[e]).normalize(),o=new Q().lerpVectors(this.pts[e],this.pts[i],s);return t<0&&o.addScaledVector(r,t),t>this.length&&o.addScaledVector(r,t-this.length),{p:o,t:r,n:new Q(-r.y,r.x)}}off(t,e){const[i,s,r]=this.idx(e);return t[i]*(1-r)+t[s]*r}left(t){return this.off(this.L,t)}right(t){return this.off(this.R,t)}local(t,e){const i=this.at(t);return i.p.clone().addScaledVector(i.n,e)}world(t,e,i=0){const s=this.local(t,e);return Ia(s.x,s.y,i)}project(t){let e={s:0,d:0,dist:1/0};for(let i=0;i<this.pts.length-1;i++){const s=this.pts[i],r=this.pts[i+1],o=new Q().subVectors(r,s),a=Math.max(0,Math.min(1,new Q().subVectors(t,s).dot(o)/o.lengthSq())),c=s.clone().addScaledVector(o,a),l=c.distanceTo(t);if(l<e.dist){const h=new Q(-o.y,o.x).normalize();e={s:this.S[i]+a*o.length(),d:new Q().subVectors(t,c).dot(h),dist:l}}}return e}}class Uv{constructor({sd:t,landmarks:e,data:i,scene:s,renderer:r}){this.sd=t,this.name=t.name,this.scene=s,this.renderer=r,this.line=new Iv(t),this.group=new un,this.group.name=`street:${t.name}`,this.water=t.waterSide,this.houseSides=this.water===-1?[1]:this.water===1?[-1]:[1,-1],this.quay=t.quay??0,this.mat=Oc(),this.matDouble=Oc(),this.matDouble.side=cn,this.lineMat=H_(),this.labels=[],this.signs=[],this.vessels=[];const o=performance.now();this.printers=this.collectPrinters(i);const a=this.printers.flatMap(c=>c.parties.map(l=>l.source.year)).sort((c,l)=>c-l);this.defaultYear=a.length?Math.round(a[Math.floor(a.length/2)]):1650,this.year=this.defaultYear,this.buildHouses(),this.buildGround(),this.water&&this.buildWater(),this.buildContext(e),this.setupShadows(),s.add(this.group),console.info(`[street] ${t.name} built in ${(performance.now()-o).toFixed(0)} ms`)}collectPrinters(t){var r,o,a;const e=new Map(t.printers.map(c=>[c.id,c])),i=new Map;for(const c of t.sources)for(const l of c.parties){if(l.street!==this.name||l.lat==null)continue;const[h,d]=Bh(l.lat,l.lon),u=this.line.project(new Q(h,d));let f=i.get(l.printer);f||(f={id:l.printer,printer:e.get(l.printer),parties:[],sList:[],dList:[],years:[1/0,-1/0],signs:new Map,precision:new Set},i.set(l.printer,f)),f.parties.push({source:c,party:l}),f.sList.push(u.s),f.dList.push(u.d),f.years[0]=Math.min(f.years[0],c.year),f.years[1]=Math.max(f.years[1],c.year),l.sign&&f.signs.set(l.sign,(f.signs.get(l.sign)??0)+1),f.precision.add(l.precision)}const s=[...i.values()];for(const c of s){const l=[...c.sList].sort((d,u)=>d-u);c.s=l[Math.floor(l.length/2)];const h=c.dList.reduce((d,u)=>d+u,0)/c.dList.length;c.side=this.houseSides.length===1?this.houseSides[0]:Math.abs(h)<1?c.id.charCodeAt(c.id.length-1)%2?1:-1:Math.sign(h),c.sign=((r=[...c.signs.entries()].sort((d,u)=>u[1]-d[1])[0])==null?void 0:r[0])??((a=(o=c.printer)==null?void 0:o.signs)==null?void 0:a[0])??null,c.parties.sort((d,u)=>d.source.year-u.source.year)}return s.sort((c,l)=>l.parties.length-c.parties.length)}gapsFor(t){const e=[];for(const i of this.sd.crossings)i.s<6||i.s>this.line.length-6||(i.side===t||i.through)&&e.push([i.s-i.width/2-.4,i.s+i.width/2+.4,i]);return e}makeSlots(t,e,{minW:i=4.6,maxW:s=8.2,seed:r=1}={}){const o=Ke(r),a=this.gapsFor(t),c=[];let l=1.5;const h=this.line.length-1.5;for(;l<h;){const d=a.find(([_,m])=>l>=_-.01&&l<m);if(d){l=d[1];continue}let u=i+o()*(s-i);const f=a.filter(([_])=>_>l).sort((_,m)=>_[0]-m[0])[0],g=Math.min(h,f?f[0]:h);if(g-l<i*.75){l=g+.01;continue}(l+u>g||g-(l+u)<i*.75)&&(u=Math.min(g-l,s*1.3)),c.push({s0:l,s1:l+u,side:t,mid:l+u/2}),l+=u}for(const d of c){const u=this.line.local(d.s0,t*e(d.s0)),f=this.line.local(d.s1,t*e(d.s1));d.a=u,d.b=f,d.w=u.distanceTo(f)}return c}makePlotSlots(t,e,{seed:i=1,fill:s=7}={}){var d;const r=(d=this.sd.plots)==null?void 0:d[String(t)];if(!r)return this.makeSlots(t,e,{seed:i});const o=Ke(i),a=r.map(u=>({s0:u.s0,s1:u.s1,side:t,mid:(u.s0+u.s1)/2,plot:u})),c=[];let l=1;const h=this.gapsFor(t).filter(([,,u])=>u.through||u.width>6);for(const u of[...a,{s0:this.line.length-1}]){if(u.s0-l>s){let f=l;const g=h.filter(([_,m])=>m>l&&_<u.s0).sort((_,m)=>_[0]-m[0]);for(const[_,m]of[...g,[u.s0,u.s0]]){let p=f;for(;_-p>4.2;){let y=4.6+o()*3.4;_-(p+y)<3.5&&(y=_-p),a.push({s0:p,s1:p+y,side:t,mid:p+y/2,plot:null}),p+=y}f=Math.max(f,m)}}else u.s0-l>.3&&c.push([l,u.s0]);l=Math.max(l,u.s1??l)}a.sort((u,f)=>u.s0-f.s0),(this.openings||(this.openings={}))[t]=c;for(const u of a){const f=this.line.local(u.s0,t*e(u.s0)),g=this.line.local(u.s1,t*e(u.s1));u.a=f,u.b=g,u.w=f.distanceTo(g)}return a.filter(u=>u.w>1.8)}facadeHistory(t,e,i,s=!1){const r=Ke(t),o=h=>s?Yh(h,r):Xh(h,e,i,r),a=[];let c=-1e4,l=o(1480+Math.floor(r()*119));for(let h=1600;h<=1700;h++){const d=(s?.55:e==="warehouse"?.6:1)*(h<1672?.011:.006);if(r()<d){const u=o(h);if(u.gable===l.gable&&u.windows===l.windows)continue;a.push({from:c,to:h,style:l}),c=h,l=u}}return a.push({from:c,to:1e4,style:l}),a}floorsFor(t,e,i){return e==="low"?1:e==="warehouse"?4+(i()<.5?1:0):t.year<1600?2+(i()<(t.gable==="wood"?.35:.55)?1:0):3+(i()<(this.water?.45:.3)?1:0)-(i()<.12?1:0)}slotMatrix(t){const e=Ia(t.a.x,t.a.y),i=Ia(t.b.x,t.b.y),s=new R().subVectors(i,e).normalize(),r=new R(-s.z,0,s.x),o=new R().addVectors(e,i).multiplyScalar(.5),a=this.line.at(t.mid).p,c=new R(a.x,0,-a.y).sub(o);return r.dot(c)<0&&r.negate(),new R().crossVectors(r,s).y<0?{M:gn(i,s.clone().negate(),r),w:t.w,out:r,origin:i}:{M:gn(e,s,r),w:t.w,out:r,origin:e}}buildHouses(){var s,r,o,a,c;const t=new Rs;this.houses=[];const e=!!this.water;this.houseRanges=[];const i=(l,h,d)=>{const u=t.vertexCount,f=d();return this.houseRanges.push({v0:u,v1:t.vertexCount,house:l,variant:h}),f};for(const l of this.houseSides){const h=f=>l===1?this.line.left(f):this.line.right(f),d=this.makePlotSlots(l,h,{seed:l===1?11:23}),u=this.printers.filter(f=>f.side===l);for(const f of u){let g=null;for(const _ of d){if(_.printer||_.w<3.6||((s=_.plot)==null?void 0:s.use)==="low")continue;const m=Math.abs(_.mid-f.s);(!g||m<g.d)&&(g={sl:_,d:m})}g&&(g.sl.printer=f)}for(const[f,g]of d.entries()){const{M:_,w:m}=this.slotMatrix(g),p=Math.floor(g.s0*13.7)+(l===1?0:7919),y=Ke(p),x=g.printer||((r=g.plot)==null?void 0:r.use)==="public"?"house":((o=g.plot)==null?void 0:o.use)??"house",v=fe.clamp(((a=g.plot)==null?void 0:a.depth)??(e?15:13+y()*3),7,e?18:17),P=!!g.printer||x==="house"&&y()<.18,C={slot:g,M:_,side:l,use:x,variants:[]};for(const[w,L]of this.facadeHistory(p,x,m).entries()){const E=Ke(p+101*w),M=t.during(L.from,L.to,()=>i(C,L,()=>sv(t,_,{w:m,depth:v,seed:p+101*w,shop:P,use:x,style:L.style,floors:this.floorsFor(L.style,x,E)})));C.variants.push({...L,info:M})}C.info=C.variants[C.variants.length-1].info,this.houses.push(C),g.printer&&this.placeSign(C,g.printer,f)}}if(this.water){const l=-this.houseSides[0],h=u=>l===1?this.line.left(u):this.line.right(u),d=this.makePlotSlots(l,h,{seed:31});for(const u of d){const{M:f,w:g}=this.slotMatrix(u),_=Math.floor(u.s0*7.3)+3,m=fe.clamp(((c=u.plot)==null?void 0:c.depth)??12,7,16),p={slot:u,M:f,side:l,use:"back",variants:[]};for(const[y,x]of this.facadeHistory(_,"house",g,!0).entries()){const v=Ke(_+57*y),P=t.during(x.from,x.to,()=>i(p,x,()=>rv(t,f,{w:g,depth:m,seed:_+57*y,style:x.style,floors:2+Math.floor(v()*(x.style.year<1600?2:3))})));p.variants.push({...x,info:P})}this.houses.push(p)}}this.housesMesh=t.build(this.mat,this.lineMat),this.group.add(this.housesMesh)}houseAt(t){const e=oe.uYear.value;return this.houseRanges.find(i=>t>=i.v0&&t<i.v1&&e>=i.variant.from&&e<i.variant.to)??null}placeSign(t,e,i){var o;const s=Lv({sign:e.sign,name:((o=e.printer)==null?void 0:o.name)??e.id,seed:i+e.id.length});s.matrixAutoUpdate=!1,this.group.add(s);const r={printer:e,sign:s,house:t,anchor:new R,boardPos:new R,s:(t.slot.s0+t.slot.s1)/2};s.userData.entry=r,s.userData.board.userData.entry=r,this.signs.push(r),this.hangSign(r,this.year)}hangSign(t,e){const i=t.house,s=i.variants.find(o=>e>=o.from&&e<o.to)??i.variants[i.variants.length-1];if(t.variant===s)return;t.variant=s;const r=s.info.signAnchor;t.sign.matrix.multiplyMatrices(i.M,new At().makeTranslation(r.x,r.y,r.z)),t.sign.matrixWorldNeedsUpdate=!0,t.anchor.set(r.x,r.y+.9,1).applyMatrix4(i.M),t.boardPos.set(r.x,r.y-.75,1.05).applyMatrix4(i.M),t.door=new R(s.info.w/2,0,3.2).applyMatrix4(i.M)}ribbon(t,e,i,s,r,o=2,a=!1){const c=[],l=[],h=[],d=[];let u=0;for(let _=i;_<=s+1e-6;_+=o){const m=this.line.local(_,t(_)),p=this.line.local(_,e(_));c.push(m.x,r,-m.y,p.x,r,-p.y);const y=Math.abs(e(_)-t(_));if(l.push(_,0,_,y),h.push(0,y),u>0){const x=(u-1)*2;d.push(x,x+1,x+2,x+1,x+3,x+2)}u++}const f=new pe;return f.setAttribute("position",new Bt(c,3)),f.setAttribute("uv",new Bt(l,2)),a&&f.setAttribute("edge",new Bt(h,1)),f.setIndex(d),f.computeVertexNormals(),f.attributes.normal.getY(0)<0&&(f.setIndex(d.map((_,m)=>d[m-m%3+(2-m%3)])),f.computeVertexNormals()),f}buildGround(){const t=G_(),e=-30,i=this.line.length+12;if(this.water){const l=this.houseSides[0],h=_=>l*(l===1?this.line.left(_):this.line.right(_)),d=_=>h(_)-l*this.quay,u=this.ribbon(_=>h(_)+l*1,d,e+26,this.line.length-2,.02,2,!0);this.group.add(new ie(u,t));const f=new Rs;for(let _=2;_<this.line.length-2;_+=2){const m=this.line.world(_,d(_)),p=this.line.world(_+2,d(_+2)),y=new R().subVectors(p,m),x=y.length();y.normalize();const v=new R(-y.z,0,y.x),P=this.line.world(_,d(_)-l*3).sub(m);v.dot(P)<0&&v.negate();let C=gn(m,y,v);C.elements[5]<0&&(C=gn(p,y.clone().negate(),v)),f.box(x+.02,1.75,.5,0,An-.5,-.5,"#9a8d74",C,!1),f.box(x+.02,.18,.75,0,-.08,-.6,"#cfc3a6",C,_%6===0?40:!1)}for(let _=9;_<this.line.length-4;_+=13){const m=this.line.world(_,d(_)+l*.6),p=new $e(.16,.2,1,8);f.add(p,"#3e3328",new At().makeTranslation(m.x,.45,m.z),40),p.dispose()}const g=f.build(this.mat,this.lineMat);this.group.add(g),this.edgeD=d}else{const l=h=>(this.line.left(h)-this.line.right(h))/2;this.group.add(new ie(this.ribbon(h=>this.line.left(h)+.8,l,e,i,.02,2,!0),t)),this.group.add(new ie(this.ribbon(h=>-this.line.right(h)-.8,l,e,i,.02,2,!0),t))}const s=new Ae([[-64,-36],[78,-48],[86,30],[-64,36]].map(([l,h])=>new Q(l,h))),r=new Ws(s).rotateX(-Math.PI/2),o=r.attributes.uv,a=r.attributes.position;for(let l=0;l<o.count;l++)o.setXY(l,a.getX(l),-a.getZ(l));r.setAttribute("edge",new Bt(new Array(a.count).fill(3),1));const c=new ie(r,t);c.position.y=.015,this.group.add(c)}buildWater(){const t=this.houseSides[0],e=x=>-t*(t===1?this.line.right(x):this.line.left(x))-t*2,i=this.ribbon(this.edgeD,e,-2,this.line.length+4,An,2),s=W_();this.group.add(new ie(i,s)),this.waterMat=s;const r=this.line.at(this.line.length),o={p:r.p,t:r.p.clone().sub(this.line.at(this.line.length-60).p).normalize()},a=o.p.clone().addScaledVector(o.t,40),c=new Ci(2600,1400).rotateX(-Math.PI/2),l=c.attributes.uv;for(let x=0;x<l.count;x++)l.setXY(x,l.getX(x)*2600,l.getY(x)*1400);const h=new ie(c,s),d=Math.atan2(o.t.x,o.t.y);h.rotation.y=-d;const u=a.clone().addScaledVector(o.t,700);h.position.set(u.x,An,-u.y),this.group.add(h),this.ijFront={p:a,t:o.t};const f=new Rs;for(const x of this.sd.crossings){if(!x.through||x.s<10||x.s>this.line.length-10)continue;const v=this.line.world(x.s,this.edgeD(x.s)),P=this.line.world(x.s,e(x.s)+t*3);Wc(f,v,P,8.5,Math.max(4,Math.round(v.distanceTo(P)/6.5))),this.labels.push({key:"oudebrug",label:"Oude Brug",pos:v.clone().lerp(P,.5).setY(9)})}const g=this.line.length-3,_=this.line.world(g,this.edgeD(g)+t*6),m=this.line.world(g,e(g)+t*3);Wc(f,_,m,13,Math.max(5,Math.round(_.distanceTo(m)/6.5))),this.labels.push({key:"nieuwebrug",label:"Nieuwe Brug",pos:_.clone().lerp(m,.5).setY(9)});for(const x of this.sd.features??[])x.kind==="korenbeurs"&&f.during(x.from,x.to,()=>this.korenbeurs(f,x));this.palisade(f),this.group.add(f.build(this.mat,this.lineMat));const p=Ke(5),y=x=>(this.sd.features??[]).some(v=>x>v.s0-8&&x<v.s1+8);for(let x=34;x<this.line.length-30;x+=17+p()*22){if(y(x))continue;const v=ko(this.matDouble,this.lineMat,{length:11+p()*6,masts:1,seed:Math.floor(x),sails:p()<.3?"set":"furled"}),P=this.edgeD(x)-t*(3.2+p()*2),C=this.line.world(x,P,An+.15),w=this.line.at(x);if(v.position.copy(C),v.rotation.y=Math.atan2(w.t.y,w.t.x)+(p()-.5)*.1,v.userData.base=C.y,v.userData.phase=p()*6,this.group.add(v),this.vessels.push(v),p()<.6){const L=ko(this.matDouble,this.lineMat,{length:10+p()*5,masts:1,seed:Math.floor(x)+3}),E=this.line.world(x+8,(this.edgeD(x)+e(x))/2+(p()-.5)*10,An+.15);L.position.copy(E),L.rotation.y=p()*Math.PI*2,L.userData.base=E.y,L.userData.phase=p()*6,this.group.add(L),this.vessels.push(L)}}for(let x=0;x<16;x++){const v=ko(this.matDouble,this.lineMat,{length:34+p()*14,masts:3,seed:100+x}),P=this.ijFront.p.clone().addScaledVector(this.ijFront.t,140+p()*520).addScaledVector(new Q(-this.ijFront.t.y,this.ijFront.t.x),(p()-.5)*900);v.position.set(P.x,An+.3,-P.y),v.rotation.y=.6+(p()-.5)*.6,v.userData.base=An+.3,v.userData.phase=p()*6,this.group.add(v),this.vessels.push(v)}}korenbeurs(t,e){const i=this.houseSides[0],s=h=>this.edgeD(h),r=(h,d,u=0)=>this.line.world(h,s(h)-i*d,u),o=[];for(let h=e.s0;h<e.s1-.01;h+=2){const d=Math.min(e.s1,h+2),u=[r(h,0),r(d,0),r(d,e.out),r(h,e.out)];o.push(u)}for(const h of o){const d=new Ae(h.map(f=>new Q(f.x,-f.z))),u=new en(d,{depth:.35,bevelEnabled:!1}).rotateX(-Math.PI/2);u.translate(0,-.3,0),t.add(u,"#8a7458",new At,!1),u.dispose()}for(let h=e.s0;h<=e.s1;h+=3)for(const d of[4,9,e.out-.3]){const u=r(h,d,An-.6);t.box(.3,1,.3,u.x-.15,u.y,u.z-.15,"#4a3b2d",new At,!1)}const a=(h,d,u)=>{const[f,g]=h,_=new R().subVectors(g,f),m=_.length();_.normalize();let p=gn(f,_,d);p.elements[5]<0&&(p=gn(g,_.clone().negate(),d));const y=Math.max(2,Math.round(m/3));for(let P=0;P<=y;P++)for(const C of[0,-3.6])t.box(.24,3.6,.24,m*P/y-.12,.05,C-.12,"#5a4632",p,40);t.box(m,.3,4.1,0,3.6,-3.85,"#6f5a43",p,40);const x=new Ae([[0,0],[4.4,0],[4.4,1.4]].map(([P,C])=>new Q(P,C))),v=new en(x,{depth:m,bevelEnabled:!1});if(v.rotateY(Math.PI/2),v.translate(0,3.9,.3),t.add(v,Dv,p,30),v.dispose(),u){t.box(m,3.6,.18,0,.05,-.05,"#7a6249",p,40);for(let P=.4;P<m-1;P+=1.3)t.box(1,.7,.3,P,1.5,-.4,"#b49a72",p,!1)}},c=this.line.world(e.s0,s(e.s0)-i*5).sub(this.line.world(e.s0,s(e.s0))).normalize(),l=this.line.world(e.s1,0).sub(this.line.world(e.s0,0)).normalize();a([r(e.s0,e.out),r(e.s1,e.out)],c,!1),a([r(e.s0,.6),r(e.s0,e.out-4)],l.clone().negate(),!0),a([r(e.s1,e.out-4),r(e.s1,.6)],l.clone(),!0),this.labels.push({key:"korenbeurs",label:e.label,pos:r((e.s0+e.s1)/2,e.out/2,8),from:e.from,to:e.to})}palisade(t){if(!this.ijFront)return;const{p:e,t:i}=this.ijFront,s=new Q(-i.y,i.x),r=new At;for(let o=-520;o<=520;o+=1.5)if(!(Math.abs((o+520)%150-75)<11))for(const a of[0,2.6]){const c=e.clone().addScaledVector(i,95+a+Math.sin(o*.013)*6).addScaledVector(s,o),l=1.3+o*7.13%.5;t.box(.32,l+1,.32,c.x-.16,An-1,-c.y-.16,"#4a3b2d",r,!1)}}buildContext(t){const e=new Rs;let i=this.sd.backdrop;if(this.ijFront){const{p:s,t:r}=this.ijFront;i=i.filter(o=>{const a=o.p.reduce((c,l)=>[c[0]+l[0]/o.p.length,c[1]+l[1]/o.p.length],[0,0]);return(a[0]-s.x)*r.x+(a[1]-s.y)*r.y<-12})}i=i.filter(s=>{const r=s.p.reduce((o,a)=>[o[0]+a[0]/s.p.length,o[1]+a[1]/s.p.length],[0,0]);return!(r[0]>-62&&r[0]<84&&r[1]>-34&&r[1]<30)}),dv(e,i),this.labels.push(...hv(e,t)),this.backdropMesh=e.build(this.mat,this.lineMat),this.group.add(this.backdropMesh)}setupShadows(){this.shadowTarget=new ei(4096,4096,{depthBuffer:!0}),this.shadowTarget.depthTexture=new Za(4096,4096),this.shadowTarget.depthTexture.type=ti;const e=new Fn;for(let o=0;o<=this.line.length;o+=20)e.expandByPoint(this.line.world(o,95,0)),e.expandByPoint(this.line.world(o,-95,0));e.expandByScalar(30);const i=e.getCenter(new R),s=e.getSize(new R).length()/2,r=new Sh(-s,s,s,-s,800-s-120,800+s+120);r.position.copy(i).addScaledVector(oe.uSun.value,800),r.lookAt(i),r.updateMatrixWorld(),r.updateProjectionMatrix(),this.shadowCam=r,this.shadowMatrix=new At().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this.depthMat=V_(),this.shadowsDirty=!0}renderShadows(){if(!this.shadowsDirty)return;const t=this.renderer,e=t.getRenderTarget(),i=this.scene.overrideMaterial,s=[];this.scene.traverseVisible(r=>{(r.isLineSegments||r.isLine)&&(r.visible=!1,s.push(r))});for(const r of this.scene.children)r!==this.group&&r.visible&&!r.isLight&&(r.visible=!1,s.push(r));this.scene.overrideMaterial=this.depthMat,t.setRenderTarget(this.shadowTarget),t.clear(),t.render(this.scene,this.shadowCam),t.setRenderTarget(e),this.scene.overrideMaterial=i;for(const r of s)r.visible=!0;oe.uShadowMap.value=this.shadowTarget.depthTexture,oe.uShadowMatrix.value.copy(this.shadowMatrix),this.shadowsDirty=!1}limits(t){if(this.water){const e=this.houseSides[0],i=e===1?this.line.left(t):-this.line.right(t),s=this.edgeD(t);return e===1?[s+.6,i-1.6]:[i+1.6,s-.6]}return[-this.line.right(t)+1.2,this.line.left(t)-1.2]}strollD(t){if(this.water){const e=this.houseSides[0];return(e===1?this.line.left(t):-this.line.right(t))-e*this.quay*.5}return(this.line.left(t)-this.line.right(t))/2}startPose(){const e=this.line.world(24,this.strollD(24),1.7),i=this.line.world(54,this.strollD(54),2.6);return{s:24,pos:e,look:i}}sees(t,e){const s=new R;for(let r=1;r<24;r++){if(s.lerpVectors(t,e,r/24),s.y>21)return!0;const{s:o,d:a}=this.line.project(new Q(s.x,-s.z));if(o<=.5||o>=this.line.length-.5)return!0;if((a>this.line.left(o)||a<-this.line.right(o))&&!this.isGap(o))return!1}return!0}isGap(t){return this.sd.crossings.some(e=>Math.abs(e.s-t)<e.width/2+.5)?!0:Object.values(this.openings??{}).some(e=>e.some(([i,s])=>t>i&&t<s))}setYear(t){this.year=t??this.defaultYear,oe.uYear.value=this.year;for(const e of this.signs){const i=t==null||t>=e.printer.years[0]-1&&t<=e.printer.years[1]+1;e.sign.visible=i,e.active=i,this.hangSign(e,this.year)}this.shadowsDirty=!0}standing(t){return(t.from==null||this.year>=t.from)&&(t.to==null||this.year<t.to)}update(t,e){this.waterMat&&(this.waterMat.uniforms.uTime.value=t);for(const i of this.signs){const s=i.sign.userData.swing;s.rotation.z=Math.sin(t*1.3+i.sign.userData.phase)*.05}for(const i of this.vessels)i.visible=X_(i.position.x,i.position.z)>.55,i.position.y=i.userData.base+Math.sin(t*.8+i.userData.phase)*.08,i.rotation.z=Math.sin(t*.6+i.userData.phase)*.015}dispose(){var t,e;this.scene.remove(this.group),this.group.traverse(i=>{var s;(s=i.geometry)==null||s.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{var o;(o=r.map)==null||o.dispose(),r.dispose()})}),(t=this.depthMat)==null||t.dispose(),(e=this.shadowTarget)==null||e.dispose(),oe.uShadowOn.value=0}}const Pr=1.68;class Nv{constructor(t,e){this.camera=t,this.dom=e,this.enabled=!1,this.keys=new Set,this.yaw=0,this.pitch=0,this.s=0,this.d=0,this.bob=0,this.strolling=!1,this.pause=0,this.visited=new Set,this.onStop=null,this.onClick=null,this.onStrollChange=null,this.drag=null,this.bind()}bind(){const t=this.dom;t.addEventListener("pointerdown",e=>{this.enabled&&(this.drag={x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,id:e.pointerId,touch:e.pointerType==="touch"},t.setPointerCapture(e.pointerId))}),t.addEventListener("pointermove",e=>{if(!this.enabled||!this.drag||e.pointerId!==this.drag.id)return;const i=e.clientX-this.drag.x,s=e.clientY-this.drag.y;this.drag.x=e.clientX,this.drag.y=e.clientY,this.yaw+=i*.0032,this.drag.touch?(this.nudge=(this.nudge??0)+s*.06,this.strolling&&this.setStroll(!1)):this.pitch=fe.clamp(this.pitch-s*.0028,-.85,.75),Math.hypot(e.clientX-this.drag.x0,e.clientY-this.drag.y0)>6&&(this.lookOverride=4)}),t.addEventListener("pointerup",e=>{if(!this.enabled||!this.drag)return;const i=Math.hypot(e.clientX-this.drag.x0,e.clientY-this.drag.y0);if(this.drag=null,i<6&&this.onClick){const s=t.getBoundingClientRect();this.onClick(new Q((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1))}}),t.addEventListener("wheel",e=>{this.enabled&&(e.preventDefault(),this.nudge=(this.nudge??0)-e.deltaY*.012)},{passive:!1}),window.addEventListener("keydown",e=>{var s,r;if(!this.enabled||(r=(s=e.target).closest)!=null&&r.call(s,"input,select,textarea"))return;const i=e.key.toLowerCase();if(i===" "){e.preventDefault(),this.setStroll(!this.strolling);return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift","q","e"].includes(i)&&(this.keys.add(i),i!=="shift"&&this.strolling&&this.setStroll(!1),i.startsWith("arrow")&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear())}setStreet(t){this.street=t,this.visited.clear()}place(t,e){this.s=t,this.d=this.street.strollD(t);const i=this.street.line.world(this.s,this.d,Pr),s=new R().subVectors(e,i);this.yaw=Math.atan2(s.x,-s.z),this.pitch=Math.atan2(s.y,Math.hypot(s.x,s.z)),this.apply(0)}setStroll(t){var e;this.strolling=t,this.pause=0,(e=this.onStrollChange)==null||e.call(this,t)}forward(){return new R(Math.sin(this.yaw),0,-Math.cos(this.yaw))}update(t){if(!this.enabled||!this.street)return;const e=this.street,i=e.line.at(this.s),s=new R(i.t.x,0,-i.t.y),r=new R(i.n.x,0,-i.n.y);let o=new R;const c=2.1*(this.keys.has("shift")?2.4:1),l=this.forward(),h=new R(-l.z,0,l.x);if((this.keys.has("w")||this.keys.has("arrowup"))&&o.add(l),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(l),(this.keys.has("a")||this.keys.has("q"))&&o.sub(h),(this.keys.has("d")||this.keys.has("e"))&&o.add(h),this.keys.has("arrowleft")&&(this.yaw-=1.6*t),this.keys.has("arrowright")&&(this.yaw+=1.6*t),o.lengthSq()>0&&o.normalize().multiplyScalar(c*t),this.nudge){const g=Math.sign(this.nudge)*Math.min(Math.abs(this.nudge),12*t);o.addScaledVector(l,g),this.nudge-=g,Math.abs(this.nudge)<.01&&(this.nudge=0)}let d=null;if(this.strolling){if(this.pause>0)this.pause-=t;else{const g=1.3*t;this.s+=g,this.d+=(e.strollD(this.s)-this.d)*Math.min(1,t*.8);for(const _ of e.signs)if(!(!_.active||this.visited.has(_))&&_.s-this.s<5.5&&_.s-this.s>-1.5){this.visited.add(_),this.pause=5.5,d=_,this.facing=_;break}this.s>e.line.length-6&&this.setStroll(!1)}if(!(this.lookOverride>0)){const g=e.line.world(this.s+12,e.strollD(this.s+12),Pr);let _=g;const m=this.pause>0&&this.facing?this.facing:e.signs.filter(C=>C.active&&C.s>this.s-3&&C.s<this.s+14).sort((C,w)=>Math.abs(C.s-this.s-4)-Math.abs(w.s-this.s-4))[0];m&&(_=g.clone().lerp(m.boardPos,this.pause>0?.9:.55));const p=e.line.world(this.s,this.d,Pr),y=_.sub(p),x=Math.atan2(y.x,-y.z),v=fe.clamp(Math.atan2(y.y,Math.hypot(y.x,y.z)),-.3,.4);let P=x-this.yaw;P=Math.atan2(Math.sin(P),Math.cos(P)),this.yaw+=P*Math.min(1,t*1.2),this.pitch+=(v-this.pitch)*Math.min(1,t*1.2)}}this.lookOverride>0&&(this.lookOverride-=t),o.lengthSq()>0?(this.s+=o.dot(s),this.d+=o.dot(r),this.bob+=o.length()*2.2):this.strolling&&this.pause<=0&&(this.bob+=1.3*t*2.2),this.s=fe.clamp(this.s,2,e.line.length-2);const[u,f]=e.limits(this.s);return this.d=fe.clamp(this.d,u,f),this.apply(t),d}apply(){const t=this.street.line.world(this.s,this.d,Pr+Math.sin(this.bob)*.03);this.camera.position.copy(t),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,-this.yaw,0)}}const pn=(n,t)=>n+Math.random()*(t-n),zo=n=>n[Math.floor(Math.random()*n.length)],$c=1658,Fv={gull:["gull-1","gull-2","gull-3","gull-4","gull-5"],chime:["chime"],hour:["hour"],carillon:["carillon-1","carillon-2"]},Ov=["oudekerk","zuiderkerk","westerkerk","munttoren","montelbaan","oudstadhuis","stadhuis"];function kv(n,t){const e=Math.round(n.sampleRate*t),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);let r=0,o=0,a=0,c=0,l=0,h=0,d=0;for(let u=0;u<e;u++){const f=Math.random()*2-1;r=.99886*r+f*.0555179,o=.99332*o+f*.0750759,a=.969*a+f*.153852,c=.8665*c+f*.3104856,l=.55*l+f*.5329522,h=-.7616*h-f*.016898,s[u]=(r+o+a+c+l+h+d+f*.5362)*.11,d=f*.115926}return i}class Bv{constructor(t="./"){this.base=t,this.samples={},this.ctx=null,this.enabled=!1,this.street=null,this.next={},this.lastPos=null,this.onSound=null,this.mute=new Set,this._f=new R,this._u=new R}start(t=null){if(this.ctx)return;const e=this.ctx=t??new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=3,i.attack.value=.01,i.release.value=.3,this.master.connect(i).connect(e.destination),this.buildAir(),this.ready=this.loadSamples(),!t&&document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.enabled&&this.street&&this.ctx.resume())})}async loadSamples(){const t=this.ctx;await Promise.all(Object.entries(Fv).map(async([e,i])=>{const s=await Promise.all(i.map(async r=>{try{const o=await fetch(`${this.base}sounds/${r}.mp3`).then(a=>a.arrayBuffer());return await t.decodeAudioData(o)}catch{return null}}));this.samples[e]=s.filter(Boolean)}))}setEnabled(t){this.enabled=t,this.wake(),this.fade()}setStreet(t){this.street=t,this.next={},this.lastPos=null,this.wake(),this.fade()}wake(){if(!(this.enabled&&this.street)||(this.start(),this.ctx.state==="running"))return;this.ctx.resume();const t=()=>{this.enabled&&this.street&&this.ctx.resume()};window.addEventListener("pointerdown",t,{once:!0}),window.addEventListener("keydown",t,{once:!0})}fade(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.master.gain;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(this.enabled&&this.street?1:0,t+1.5),this.air.gain.setTargetAtTime(this.mute.has("air")?0:1,t,.5)}filter(t,e,i,s){const r=this.ctx.createBiquadFilter();return r.type=t,r.frequency.value=e,r.Q.value=i,r.connect(s),r}panner(t,{ref:e=4,roll:i=1.2,max:s=2e3,life:r=6}={}){const o=this.ctx.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=e,o.rolloffFactor=i,o.maxDistance=s,this.place(o,t);const a=this.lastPos?this.lastPos.distanceTo(t):20,c=this.filter("lowpass",Math.max(900,16e3/(1+a/60)),.5,o);return o.connect(this.master),setTimeout(()=>{c.disconnect(),o.disconnect()},r*1e3),c}place(t,e){t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}glide(t,e){const i=this.ctx.currentTime;t.forEach((s,r)=>s.setTargetAtTime(e[r],i,.05))}sample(t,e,i,{rate:s=1,gain:r=1}={}){const o=this.ctx.createBufferSource();o.buffer=t,o.playbackRate.value=s;const a=this.ctx.createGain();return a.gain.value=r,o.connect(a).connect(i),o.start(e),o.onended=()=>a.disconnect(),t.duration/s}buildAir(){const t=this.ctx;this.air=t.createGain(),this.air.gain.value=1,this.air.connect(this.master);const e=t.createGain();e.gain.value=.02,e.connect(this.air);const i=this.filter("lowpass",1200,.5,e),s=this.filter("highpass",90,.5,i),r=t.createChannelMerger(2);r.connect(s),[7.3,9.1].forEach((o,a)=>{const c=t.createBufferSource();c.buffer=kv(t,o),c.loop=!0,c.connect(r,0,a),c.start()});for(const[o,a]of[[.071,.0065],[.023,.0055]]){const c=t.createOscillator();c.frequency.value=o;const l=t.createGain();l.gain.value=a,c.connect(l).connect(e.gain),c.start()}}gull(t,e){const i=this.samples.gull;if(!(i!=null&&i.length))return;const s=this.panner(e,{ref:12,roll:1,life:6});let r=t;for(let o=0,a=Math.floor(pn(1,4));o<a;o++)r+=this.sample(zo(i),r,s,{rate:pn(.93,1.07),gain:pn(.4,.6)})+pn(.1,.6)}chime(t,e,i,s){var u;const r=this.samples;if(!((u=r.hour)!=null&&u.length))return;const o=[...s].reduce((f,g)=>f*31+g.charCodeAt(0)>>>0,7),a=[.89,.94,1,1.05,1.1][o%5],c=this.panner(e,{ref:60,roll:.7,life:40}),l=i>=$c?r.carillon:r.chime;let h=t;l!=null&&l.length&&(h+=this.sample(zo(l),h,c,{rate:a,gain:.35})-.6);const d=Math.floor(pn(1,4));for(let f=0;f<d;f++)this.sample(r.hour[0],h+1+f*2.2,c,{rate:a*.94,gain:.45})}say(t,e){this.onSound&&this.onSound(t,e&&this.lastPos?Math.round(this.lastPos.distanceTo(e)):null)}due(t,e,i){return this.next[t]==null&&(this.next[t]=e+pn(.3,1)*i),e<this.next[t]?!1:(this.next[t]=e+i*pn(.5,1.5),!0)}update(t,e){const i=this.street;if(!this.ctx||!this.enabled||!i||this.ctx.state!=="running")return;const s=this.ctx,r=s.currentTime,o=r+.05,a=s.listener,c=t.position;if(t.getWorldDirection(this._f),this._u.set(0,1,0).applyQuaternion(t.quaternion),a.positionX?this.glide([a.positionX,a.positionY,a.positionZ,a.forwardX,a.forwardY,a.forwardZ,a.upX,a.upY,a.upZ],[c.x,c.y,c.z,this._f.x,this._f.y,this._f.z,this._u.x,this._u.y,this._u.z]):(a.setPosition(c.x,c.y,c.z),a.setOrientation(this._f.x,this._f.y,this._f.z,this._u.x,this._u.y,this._u.z)),this.lastPos=(this.lastPos??new R).copy(c),i.water&&this.due("gull",r,14)&&!this.mute.has("gulls")){const l=fe.clamp(e.s+pn(-70,70),0,i.line.length),h=i.line.world(l,i.edgeD(l)-i.houseSides[0]*pn(8,45),pn(12,32));this.gull(o,h),this.say("gulls",h)}if(this.due("bells",r,55)&&!this.mute.has("bells")){const l=i.labels.filter(h=>Ov.includes(h.key)&&i.standing(h)&&h.pos.distanceTo(c)<1500);if(l.length){const h=l.sort((u,f)=>u.pos.distanceTo(c)-f.pos.distanceTo(c)),d=Math.random()<.6?h[0]:zo(l);this.chime(o,d.pos,i.year,d.key),this.say(`${d.label}: ${i.year>=$c?"carillon":"chime"}, then the hour`,d.pos)}}}}const jh=n=>`https://www.liederenbank.nl/bronpresentatie.php?zoek=${n}&lan=nl`,we=n=>document.getElementById(n),Xt=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Zh={imprint:"Address as printed in the imprint of this book.",stcn:"Address from the STCN printer thesaurus for that year.",inferred:"Address taken from another imprint of this printer within fifteen years.",geocoded:"Location from the geocoded STCN printers list."},Kh={qualified:"placed along the street by the landmark the imprint mentions",landmark:"placed at the landmark named in the address","street+stcn":"placed along the street using the geocoded STCN address",street:"the exact house along the street is not known; placed for illustration",geocoded:"position from the geocoded STCN list"};function Ue(n,t=!0){we(n).classList.toggle("hidden",!t)}function Jh(n){we("roman").textContent=zh(Math.floor(n)),we("arabic").textContent=String(Math.floor(n))}class zv{constructor(t,{onScrub:e,onToggle:i,onSpeed:s}){this.y0=t.meta.years[0],this.y1=t.meta.years[1]+1;const r=new Array(this.y1-this.y0).fill(0);for(const g of t.sources)g.parties.some(_=>_.lat!=null)&&r[g.year-this.y0]++;this.counts=r;const o=we("tl-hist"),a=Math.max(...r),c=r.length;o.setAttribute("viewBox",`0 0 ${c} 38`);const l=r.indexOf(a);o.innerHTML=r.map((g,_)=>{const m=g?Math.max(1.5,g/a*36):0;return`<rect x="${_+.12}" y="${38-m}" width="0.76" height="${m}" data-i="${_}"${_===l?' class="peak"':""}><title>${this.y0+_}: ${g} song book${g===1?"":"s"}</title></rect>`}).join(""),this.rects=[...o.querySelectorAll("rect")];const h=we("tl-ticks");for(let g=this.y0;g<=this.y1;g+=10){const _=document.createElement("span");_.style.left=`${(g-this.y0)/(this.y1-this.y0)*100}%`,_.textContent=g,h.appendChild(_)}const d=we("tl-track"),u=g=>{const _=d.getBoundingClientRect(),m=Math.max(0,Math.min(1,(g.clientX-_.left)/_.width));e(this.y0+m*(this.y1-this.y0))};let f=!1;d.addEventListener("pointerdown",g=>{f=!0,d.setPointerCapture(g.pointerId),u(g)}),d.addEventListener("pointermove",g=>f&&u(g)),d.addEventListener("pointerup",()=>{f=!1}),we("play").addEventListener("click",i),document.querySelectorAll(".tl-speed button").forEach(g=>g.addEventListener("click",()=>{document.querySelectorAll(".tl-speed button").forEach(_=>_.classList.toggle("on",_===g)),s(Number(g.dataset.speed))})),this.lastPast=-1}set(t,e){const i=(t-this.y0)/(this.y1-this.y0);we("tl-head").style.left=`${Math.max(0,Math.min(1,i))*100}%`;const s=Math.floor(t-this.y0);s!==this.lastPast&&(this.rects.forEach((r,o)=>r.classList.toggle("past",o<s)),this.lastPast=s),we("play-icon").setAttribute("d",e?"M7 5h3v14H7zM14 5h3v14h-3z":"M8 5l11 7-11 7z"),we("play").setAttribute("aria-label",e?"Pause":"Play")}}class Hv{constructor(t,e){this.list=we("press-list"),this.printers=new Map(t.printers.map(i=>[i.id,i])),this.streets=t.streets,this.onOpen=e,this.last=0,this.pending=null}push(t,e){(!this.pending||(t.s.songs??0)>(this.pending.s.songs??0))&&(this.pending=t),!(e-this.last<.55)&&this.flush(e)}flush(t){const e=this.pending;if(!e)return;this.pending=null,this.last=t;const i=this.printers.get(e.p.printer),s=document.createElement("div");s.className="press-item",s.style.setProperty("--c",Yr[e.s.kind]??Yr.other),s.innerHTML=`<div class="pi-year">${e.s.year} · ${e.s.songs||"?"} song${e.s.songs===1?"":"s"}</div>
      <div class="pi-title">${Xt(e.s.title)}</div>
      <div class="pi-who">${Xt((i==null?void 0:i.name)??e.p.name_in_source)}, ${Xt(e.p.role)}<br/>${Xt(bi(e.p,this.streets))}</div>`,s.addEventListener("click",()=>this.onOpen(e)),this.list.prepend(s),[...this.list.children].slice(4).forEach(o=>{o.classList.add("fading"),setTimeout(()=>o.remove(),1300)})}clear(){this.list.innerHTML="",this.pending=null}}function ni(n){we("detail-body").innerHTML=n,Ue("detail",!0),we("detail").scrollTop=0}function Ys(){Ue("detail",!1)}function Qh(n,t){var a;const e=n.s,i=new Map(t.printers.map(c=>[c.id,c])),s=e.parties.map(c=>{const l=i.get(c.printer),h=c.lat!=null?`${bi(c,t.streets)}${c.address&&c.address!==bi(c,t.streets)?` — ${Xt(c.address)}`:""}`:"address unknown";return`<li><div class="b-year">${Xt(c.role)}</div><div class="b-title"><a href="#" data-printer="${Xt(c.printer)}">${Xt((l==null?void 0:l.name)??c.name_in_source)}</a></div>
      <div class="b-imp">${h}${c.sign?`, <i>in ${Xt(c.sign)}</i>`:""}</div>
      ${c.how?`<div class="b-inc">${Zh[c.how]??""} ${c.precision?`(${Kh[c.precision]??""})`:""}</div>`:""}</li>`}).join(""),r=(a=e.incipits)!=null&&a.length?`<div class="d-songs">${e.songs} song${e.songs===1?"":"s"} recorded, beginning:</div><ul class="d-books">${e.incipits.map(c=>`<li class="b-inc">“${Xt(c)}”</li>`).join("")}</ul>`:`<div class="d-songs">${e.songs?`${e.songs} song${e.songs===1?"":"s"} recorded.`:""}</div>`,o=e.year_label&&!/\(/.test(e.year_label)?e.year_label:e.year;return`<div class="d-kicker">${Xt(o)} · song book${e.kind?` · ${Xt(tu(e.kind))}`:""}</div>
    <div class="d-name">${Xt(e.title)}</div>
    ${e.imprint?`<div class="d-imprint">${Xt(e.imprint)}</div>`:""}
    ${r}
    <ul class="d-books">${s}</ul>
    <a class="d-link" href="${jh(e.id)}" target="_blank" rel="noopener">Open in the Nederlandse Liederenbank (${Xt(e.code)}) ↗</a>`}function tu(n){return{wereldlijk:"secular",geestelijk:"sacred","wereldlijk en geestelijk":"secular & sacred"}[n]??n}function $s(n,t,{streetEntry:e=null}={}){var f,g,_;const i=t.printers.find(m=>m.id===n),s=t.sources.filter(m=>m.parties.some(p=>p.printer===n)),r=new Set,o=new Map,a=new Map;for(const m of s)for(const p of m.parties)p.printer===n&&(r.add(p.role),p.lat!=null&&o.set(bi(p,t.streets),(o.get(bi(p,t.streets))??0)+1),p.how&&a.set(p.how,(a.get(p.how)??0)+1));const c=(e==null?void 0:e.printer.sign)??((f=i==null?void 0:i.signs)==null?void 0:f[0]),l=s.reduce((m,p)=>m+(p.songs||0),0),h=[...o.entries()].sort((m,p)=>p[1]-m[1]).map(([m,p])=>`${Xt(m)} (${p})`).join(", "),d=e?[...e.printer.precision].map(m=>Kh[m]).filter(Boolean):[],u=[...a.entries()].sort((m,p)=>p[1]-m[1]).map(([m,p])=>{var y;return`${p}× ${(y=Zh[m])==null?void 0:y.replace(/\.$/,"").toLowerCase()}`}).join("; ");return`<div class="d-kicker">${[...r].map(Xt).join(" · ")}</div>
    <div class="d-name">${Xt((i==null?void 0:i.name)??n)}</div>
    ${c?`<div class="d-sign">in ${Xt(c.replace(/^in\s+/i,""))}</div>`:""}
    <div class="d-meta">${s.length} song book${s.length===1?"":"s"} in the Dutch Song Database, ${((g=s[0])==null?void 0:g.year)??""}–${((_=s[s.length-1])==null?void 0:_.year)??""}${l?`, ${l.toLocaleString("en")} songs`:""}.
      ${h?`<br/>Addresses: ${h}.`:""}
      ${i!=null&&i.stcn?`<br/>STCN printer record ${Xt(i.stcn)}.`:""}</div>
    ${u?`<div class="d-prov">Where the addresses come from: ${u}.${d.length?` In this street: ${d.join("; ")}.`:""}</div>`:""}
    <ul class="d-books">${s.map(m=>{var p;return`<li>
      <div class="b-year">${m.year}${m.kind?` · ${Xt(tu(m.kind))}`:""}${m.songs?` · ${m.songs} song${m.songs===1?"":"s"}`:""}</div>
      <div class="b-title"><a href="${jh(m.id)}" target="_blank" rel="noopener">${Xt(m.title)}</a></div>
      ${(p=m.incipits)!=null&&p[0]?`<div class="b-inc">“${Xt(m.incipits[0])}”</div>`:""}
      ${m.imprint?`<div class="b-imp">${Xt(m.imprint)}</div>`:""}
    </li>`}).join("")}</ul>`}const Vv={huis:"house",pakhuis:"warehouse",erf:"yard",tuin:"garden",stal:"stable",loots:"shed",schuur:"barn",werkplaats:"workshop",woning:"dwelling",bovenwoning:"upper dwelling",kelder:"cellar",koepel:"summerhouse","huis of boog":"house or arch",kerk:"church",school:"school",winkel:"shop",kantoor:"office"};function qc(n){const e=n.toLowerCase().split(/\s*(?:&|,| en )\s*/).filter(Boolean).map(i=>Vv[i]);return e.every(Boolean)?e.join(" and "):null}function Gv({house:n,variant:t},e,i){var u;const s=n.use==="back",r=n.slot.plot,o=f=>f.from<1600?"before 1600":`from ${f.from}`,a=f=>f.year<1600&&f.gable!=="wood"?`${zc[f.gable]}, sixteenth century`:zc[f.gable],c=n.variants.map(f=>`<li${f===t?' class="now"':""}><b>${o(f)}</b> ${Xt(a(f.style))}${f.style.windows==="sash"?", sash windows":""}</li>`).join(""),l=(n.slot.s1-n.slot.s0).toFixed(1),h=r?`Plot ${Xt(r.parcel)} in the cadastre of 1832, ${l} m wide${r.split?" (one of the houses on a plot merged by 1832)":""}${r.what?`; the cadastre records it as <i>${Xt(r.what)}</i>${qc(r.what)?` (${qc(r.what)})`:""}${r.job&&r.job!=="zonder"?`, its owner's trade <i>${Xt(r.job)}</i>`:""}`:""}.`:`No plot in the 1832 cadastre here: width ${l} m, filled in.`,d=e.signs.find(f=>f.house===n);return`<div class="d-kicker">${s?"the back of a house, standing in the water":"a house"} · ${Xt(e.sd.title??e.name)}</div>
    <div class="d-name">${Xt(a(t.style))}</div>
    <div class="d-sign">as it stood in ${Math.round(i)}</div>
    ${d?`<div class="d-meta">The shop of <a href="#" data-printer="${Xt(d.printer.id)}">${Xt(((u=d.printer.printer)==null?void 0:u.name)??d.printer.id)}</a>.</div>`:""}
    <div class="d-meta">${h}</div>
    <div class="d-meta">Its fronts through the century:</div>
    <ul class="d-history">${c}</ul>
    <div class="d-prov">The plot is measured. The fronts are generated in the manner of the years they were built, from the period's
      gable types; they are not reconstructions of this house, and the years of refronting are invented.</div>`}function Wv(n,t){var r,o,a;const e=n.meta.ranking.slice(0,8),i=e[0].sources;we("rk-title").textContent=((o=(r=n.streets[t])==null?void 0:r.label)==null?void 0:o.replace(/ \(.*\)/,""))??t;const s=e[0];we("rk-text").innerHTML=`Of the ${n.meta.counts.sources} Amsterdam song books of the century, <b>${s.sources}</b> came from
    <b>${s.printers}</b> printers and booksellers on <i>${Xt(((a=n.streets[s.street])==null?void 0:a.label)??s.street)}</i>,
    the quay along the Damrak where the book trade crowded round the Dam, the Exchange and the ships.`,we("rk-chart").innerHTML=e.map((c,l)=>{var h;return`<div class="rk-row${l===0?" top":""}">
      <div class="rk-name">${Xt(((h=n.streets[c.street])==null?void 0:h.label)??c.street)}</div>
      <div class="rk-bar"><i style="width:${c.sources/i*100}%;animation-delay:${l*70}ms"></i></div>
      <div class="rk-n">${c.sources}</div></div>`}).join("")+'<div class="rk-row"><div></div><div style="font-size:13px;color:var(--sepia);font-style:italic">song books per street, 1600–1700</div><div></div></div>'}function Ua(n,t,e){const i=we("tooltip");if(!n){i.classList.add("hidden");return}i.innerHTML=n,i.classList.remove("hidden");const s=i.offsetWidth,r=i.offsetHeight;i.style.left=`${Math.min(window.innerWidth-s-8,t+16)}px`,i.style.top=`${Math.min(window.innerHeight-r-8,e+14)}px`}let jc=0;function al(n,t=3200){const e=we("toast");e.textContent=n,e.classList.remove("hidden"),e.style.opacity=1,clearTimeout(jc),jc=setTimeout(()=>{e.style.opacity=0,setTimeout(()=>e.classList.add("hidden"),600)},t)}const Kt=n=>document.getElementById(n),to="./",ll=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Dn=Kt("scene"),ii=new Pg({canvas:Dn,antialias:!0,powerPreference:"high-performance"});ii.setPixelRatio(Math.min(window.devicePixelRatio,2));ii.setSize(window.innerWidth,window.innerHeight);ii.outputColorSpace=Oe;const Be=new Lg;Be.background=yi.table.clone();const ue=new Je(38,window.innerWidth/window.innerHeight,1,4e4),Na=new y_,us=new Bv(to);let ms=!1;try{ms=localStorage.getItem("opw-sound")==="on"}catch{}const ve=new E_(ue,Dn);ve.enableDamping=!0;ve.dampingFactor=.07;ve.minDistance=250;ve.maxDistance=9500;ve.maxPolarAngle=1.22;ve.screenSpacePanning=!1;ve.zoomSpeed=.8;ve.enabled=!1;const Ei=new ie(new Si(16e3,48,24),Y_());Ei.visible=!1;Ei.renderOrder=-100;Be.add(Ei);const I={mode:"title",year:1599.5,playing:!1,speed:1,data:null,city:null,tiles:null,street:null,streetData:{},walker:null,anim:null,hover:-1},Xv=1.25,$r=fe.degToRad(-33),Yv=$r+Math.PI;function eo(n,t,e,i=$r){const s=new is(t,e,i);return{pos:new R().setFromSpherical(s).add(n),target:n.clone()}}async function $v(){const n=h=>fetch(`${to}data/${h}`).then(d=>{if(!d.ok)throw new Error(h);return d.json()}),[t,e,i,s]=await Promise.all([n("songbooks.json"),n("sheet.json"),n("landmarks.json"),n("streets_index.json")]);I.data=t,I.sheet=e,I.landmarks=i,I.index=s,I.tiles=new Vh({scene:Be,sheet:e,renderer:ii}),I.tiles.onProgress=h=>{Kt("tp-progress-bar").style.width=`${Math.round(h*85)}%`},I.tiles.shadow=Gh(e),Be.add(I.tiles.shadow),I.layers={debroen:I.tiles},I.mapKey="debroen",I.city=new Z_(t,Be),I.timeline=new zv(t,{onScrub:h=>{I.year=h,I.playing=!1,zs(!1)},onToggle:()=>{I.year>=1700.99&&(I.year=1599.5,I.city.setTime(1599,0,!1),I.press.clear()),I.playing=!I.playing},onSpeed:h=>{I.speed=h}}),I.press=new Hv(t,h=>ni(Qh(h,t))),I.timeline.set(I.year,!1);const r=t.meta.counts;Kt("legend-stats").innerHTML=`<b>${r.sources}</b> song books<br/><b>${r.printers}</b> printers &amp; booksellers<br/><b>${Math.round(r.placed/r.parties*100)}%</b> of their imprints placed on the map`;const o=Kt("street-pick");for(const[h,d]of Object.entries(s)){const u=document.createElement("option");u.value=h;const f=t.meta.ranking.find(g=>g.street===h);u.textContent=`${d.title}${f?` — ${f.sources} books`:""}`,o.appendChild(u)}const a=qv(e),c=eo(a,7400,.06,Yv);ue.position.copy(c.pos),ve.target.copy(c.target),ue.lookAt(c.target),ve.update(),await Promise.all([I.tiles.preload(),document.fonts.ready,document.fonts.load('50px "IM Fell English SC"'),document.fonts.load('50px "IM Fell English"')]),Kt("tp-progress-bar").style.width="100%";const l=Kt("begin");l.disabled=!1,l.querySelector(".btn-label").textContent="Open the map",l.focus()}function qv(n){const t=Object.values(n.corners),e=t.reduce((s,r)=>s+r[0],0)/4,i=t.reduce((s,r)=>s+r[1],0)/4;return new R(e,0,-i)}const cl=n=>n<.5?4*n*n*n:1-(-2*n+2)**3/2;function eu(n,t,e){const i=ve.target.clone(),s=new is().setFromVector3(ue.position.clone().sub(i)),r=new is().setFromVector3(n.pos.clone().sub(n.target));let o=r.theta-s.theta;o=Math.atan2(Math.sin(o),Math.cos(o));const a=new is;I.anim={t:0,duration:ll?.01:t,step:c=>{const l=cl(c);ve.target.lerpVectors(i,n.target,l),a.set(fe.lerp(s.radius,r.radius,l),fe.lerp(s.phi,r.phi,l),s.theta+o*l),ue.position.setFromSpherical(a).add(ve.target),ue.lookAt(ve.target)},done:e}}function jv(){Kt("titlepage").classList.add("leaving"),setTimeout(()=>Kt("titlepage").classList.add("hidden"),1500),I.mode="city",["hud","timeline","legend","press"].forEach(t=>Ue(t,!0)),Jh(1600);const n=new R(140,0,-40);I.introTimer=setTimeout(()=>{I.introTimer=null,!(I.mode!=="city"||I.anim)&&eu(eo(n,3e3,.9),6.5,()=>{ve.enabled=!0,I.mode==="city"&&I.year<1700.99&&(I.playing=!0)})},3400)}function zs(n=!0){const t=Na.elapsedTime,e=I.city.setTime(I.year,t,n);if(n)for(const i of e)I.press.push(i,t);Jh(Math.min(1700,Math.max(1600,I.year))),I.timeline.set(I.year,I.playing)}function nu(){var s;I.playing=!1;const n=I.data.meta.ranking[0].street;Wv(I.data,n),Ue("ranking",!0),Ue("press",!1),Ue("legend",!1);const t=(s=I.data.streets[n])==null?void 0:s.line;t&&I.city.showStreet(t);const e=t[Math.floor(t.length/2)],i=new R(e[0],0,-e[1]).add(new R(-Math.cos($r),0,Math.sin($r)).multiplyScalar(260));eu(eo(i,1700,.95),3.5)}async function Zv(n){var s,r;if(((s=I.street)==null?void 0:s.name)===n)return I.street;const t=I.index[n].slug,e=(r=I.streetData)[n]??(r[n]=await fetch(`${to}data/street_${t}.json`).then(o=>o.json()));al("The engraver is cutting the houses…",2500),await new Promise(o=>setTimeout(o,60)),I.street&&(Qv(I.street.name),I.street.dispose(),I.street=null,I.minimap=null);const i=new Uv({sd:e,landmarks:I.landmarks,data:I.data,scene:Be,renderer:ii});return i.group.visible=!1,i}async function iu(n=I.data.meta.ranking[0].street,{hop:t=!1}={}){if(I.mode==="descending")return;Ue("ranking",!1),Ys(),I.playing=!1,I.year<1700.99&&(I.year=1700.99,zs(!1)),I.mode="descending",us.setStreet(null),clearTimeout(I.introTimer),ve.enabled=!1;const e=await Zv(n);I.street=e,e.group.visible=!0,I.walker.setStreet(e),Kt("sh-name").textContent=I.index[n].title,Kt("sh-sub").textContent=I.index[n].subtitle,Kt("street-pick").value=n,e.setYear(null),Kt("sh-range").value=1705,Kt("sh-year-out").textContent=au(null,e),oe.uGrow.value=0,oe.uShadowOn.value=0;const i=e.startPose();oe.uGrowCenter.value.set(i.pos.x,i.pos.z),["hud","timeline","legend","press"].forEach(_=>Ue(_,!1)),hl(),e.line.at(i.s);const s=e.line.world(i.s-140,e.strollD(i.s-140),0),r=ue.position.clone(),o=new R(s.x,420,s.z).lerp(r,.35),a=e.line.world(i.s-45,e.strollD(i.s)+6,48),c=i.pos.clone(),l=new hs([r,o,a,c],!1,"centripetal"),h=ve.target.clone(),d=e.line.world(e.line.length*.45,0,0),u=i.look.clone(),f=new hs([h,d,e.line.world(i.s+60,e.strollD(i.s+60),6),u],!1,"centripetal"),g=Be.background.clone();document.body.classList.add("street"),I.anim={t:0,duration:ll?.01:t?8:11,step:_=>{const m=cl(_);ue.position.copy(l.getPoint(m)),ue.lookAt(f.getPoint(m)),oe.uGrow.value=fe.smoothstep(_,t?.3:.12,.88);const p=t?1:fe.smoothstep(_,.35,.75);Be.background.copy(g).lerp(yi.sky,p),Ei.visible=p>.5,I.city.group.visible=!t&&_<.42;const y=fe.lerp(3e4,140,p),x=fe.lerp(6e4,1500,p);su(y,x)},done:()=>{I.mode="street",us.setStreet(e),I.city.hideStreet(),I.tiles.maxZ=18,oe.uGrow.value=1,I.walker.enabled=!0,I.walker.place(i.s,i.look),["street-hud","street-controls","minimap"].forEach(_=>Ue(_,!0)),e.shadowsDirty=!0,e.renderShadows(),I.shadowFade=0,ou(e),al(matchMedia("(pointer: coarse)").matches?"Drag sideways to look, up and down to walk · tap Stroll to visit each shop":"Drag to look around · W A S D to walk · Space to stroll from shop to shop",5200)}}}function Kv(){if(I.mode!=="street")return;I.mode="ascending",us.setStreet(null),I.walker.enabled=!1,I.walker.setStroll(!1),Ys(),["street-hud","street-controls","minimap"].forEach(l=>Ue(l,!1)),hl();const n=I.street,t=new R(140,0,-40),e=eo(t,3e3,.9),i=ue.position.clone(),s=n.line.world(n.line.length/2-120,0,380),r=new hs([i,i.clone().add(new R(0,60,0)),s,e.pos]),o=i.clone().add(new R(0,0,-1).applyQuaternion(ue.quaternion).multiplyScalar(40)),a=new hs([o,n.line.world(n.line.length/2,0,0),e.target]),c=Be.background.clone();I.anim={t:0,duration:ll?.01:7,step:l=>{const h=cl(l);ue.position.copy(r.getPoint(h)),ue.lookAt(a.getPoint(h)),oe.uShadowOn.value=0,oe.uGrow.value=1-fe.smoothstep(l,.25,.9);const d=fe.smoothstep(l,.2,.6);Be.background.copy(c).lerp(yi.table,d),Ei.visible=d<.5,I.city.group.visible=l>.55,su(fe.lerp(140,3e4,d),fe.lerp(1500,6e4,d))},done:()=>{I.mode="city",n.group.visible=!1,I.tiles.maxZ=19,document.body.classList.remove("street"),ve.target.copy(e.target),ve.enabled=!0,["hud","timeline","legend","press"].forEach(l=>Ue(l,!0)),I.timeline.set(I.year,I.playing)}}}function su(n,t){oe.uFogNear.value=n,oe.uFogFar.value=t,oe.uFogColor.value.copy(yi.sky),I.fog=[n,t],I.tiles.setFog(Be.background,n,t)}const Ho={debroen:{sheet:"sheet.json"},berckenrode:{sheet:"sheet_berckenrode.json",blueKey:!0}};async function ru(n){if(n===I.mapKey||!Ho[n])return;let t=I.layers[n];if(!t){const i=await fetch(`${to}data/${Ho[n].sheet}`).then(s=>s.json());t=new Vh({scene:Be,sheet:i,renderer:ii,map:n,blueKey:Ho[n].blueKey}),t.shadow=Gh(i),Be.add(t.shadow),I.layers[n]=t,t.preload()}const e=I.tiles;t.maxZ=e.maxZ,e.group.visible=!1,e.shadow.visible=!1,t.group.visible=!0,t.shadow.visible=!0,I.tiles=t,I.mapKey=n,I.fog&&t.setFog(Be.background,...I.fog),document.querySelectorAll(".map-switch button").forEach(i=>i.classList.toggle("on",i.dataset.map===n)),I.street&&(I.minimap=null,ou(I.street))}document.querySelectorAll(".map-switch button").forEach(n=>n.addEventListener("click",()=>ru(n.dataset.map)));const ds=new Map,Jv=Kt("labels");let Fa=new Set;function Oa(n,t,e,i){let s=ds.get(n);return s||(s=document.createElement("div"),s.className=`lbl ${e}`,i&&s.addEventListener("click",i),Jv.appendChild(s),ds.set(n,s)),s.dataset.html!==t&&(s.innerHTML=t,s.dataset.html=t),Fa.add(n),s}function hl(){for(const n of ds.values())n.style.opacity=0}function Qv(n){for(const[t,e]of ds)(t.startsWith(`shop:${n}:`)||t.startsWith(`lm:${n}:`))&&(e.remove(),ds.delete(t))}function tx(){for(const[n,t]of ds)Fa.has(n)||(t.style.opacity=0);Fa=new Set}const Ts=new R;function ka(n){return Ts.copy(n).project(ue),Ts.z>1||Ts.z<-1?null:[(Ts.x*.5+.5)*window.innerWidth,(-Ts.y*.5+.5)*window.innerHeight]}function ex(){const n=I.city.visibleSites(16),t=[];for(const{site:e,n:i,anchor:s,who:r}of n){const o=ka(s);if(!o)continue;const a=bi({street:e.street,address:e.address},I.data.streets),c=[o[0]-4,o[1]-4,o[0]+190,o[1]+36];if(t.some(h=>!(c[2]<h[0]||c[0]>h[2]||c[3]<h[1]||c[1]>h[3])))continue;t.push(c);const l=Oa(`site:${e.key}`,`<div class="lbl-name">${Xt(a)}</div><div class="lbl-sub">${r.map(Xt).join(", ")} · ${i}</div>`,"site",()=>{const h=[...e.stacks.values()].sort((d,u)=>u.books.length-d.books.length)[0];ni($s(h.printer,I.data))});l.style.transform=`translate(${o[0]+14}px, ${o[1]-10}px)`,l.style.opacity=1}}function nx(){var e;const n=I.street,t=ue.position;for(const i of n.signs){const s=t.distanceTo(i.anchor);if(!i.active||s>75)continue;const r=ka(i.anchor);if(!r)continue;const o=i.printer,a=Oa(`shop:${n.name}:${o.id}`,`<div class="lbl-name">${Xt(((e=o.printer)==null?void 0:e.name)??o.id)}</div><div class="lbl-years">${o.years[0]===o.years[1]?o.years[0]:`${o.years[0]}–${o.years[1]}`} · ${o.parties.length} book${o.parties.length===1?"":"s"}</div>`,"shop",()=>ni($s(o.id,I.data,{streetEntry:i})));a.style.transform=`translate(${r[0]}px, ${r[1]}px) translate(-50%, -100%) scale(${fe.clamp(14/s,.62,1.1)})`,a.style.opacity=fe.clamp((75-s)/20,0,1)}I.lmTick=(I.lmTick??0)+1;for(const i of n.labels){if(!n.standing(i))continue;const s=t.distanceTo(i.pos);if(s<60||s>2200||((I.lmTick%12===0||i.visible===void 0)&&(i.visible=n.sees(t,i.pos)),!i.visible))continue;const r=ka(i.pos);if(!r)continue;const o=Oa(`lm:${n.name}:${i.key}`,Xt(i.label),"landmark");o.style.transform=`translate(${r[0]}px, ${r[1]}px) translate(-50%, -100%)`,o.style.opacity=.85}}function ou(n){if(n.minimaps||(n.minimaps={}),n.minimaps[I.mapKey]){I.minimap=n.minimaps[I.mapKey];return}const t=17,e=n.sd.line,i=e.map(y=>y[0]),s=e.map(y=>y[1]),r=260,o=[Math.min(...i)-r,Math.min(...s)-r,Math.max(...i)+r,Math.max(...s)+r],a=2**t,c=document.createElement("canvas"),l=.9;c.width=Math.ceil((o[2]-o[0])/l),c.height=Math.ceil((o[3]-o[1])/l);const h=c.getContext("2d");h.fillStyle="#e8dcc0",h.fillRect(0,0,c.width,c.height);const d={cv:c,box:o,mpp:l},u=y=>{let x=0,v=a-1;for(;x<v;){const P=x+v+1>>1;Is(t,P,0)[0]<=y?x=P:v=P-1}return x},f=y=>{let x=0,v=a-1;for(;x<v;){const P=x+v+1>>1;Is(t,0,P)[3]>=y?x=P:v=P-1}return x},g=u(o[0]),_=u(o[2]),m=f(o[3]),p=f(o[1]);for(let y=g;y<=_;y++)for(let x=m;x<=p;x++){const v=new Image;v.crossOrigin="anonymous",v.onload=()=>{const[P,C,w,L]=Is(t,y,x);h.drawImage(v,(P-o[0])/l,(o[3]-L)/l,(w-P)/l,(L-C)/l),d.dirty=!0},v.src=`${Hh}/${I.mapKey}/${t}/${y}/${x}.png`}n.minimaps[I.mapKey]=d,I.minimap=d}function ix(){const n=I.minimap;if(!n)return;const t=Kt("minimap"),e=t.getContext("2d"),i=t.width,s=t.height,r=ue.position,o=r.x,a=-r.z,c=1.6;e.save(),e.clearRect(0,0,i,s),e.beginPath(),e.arc(i/2,s/2,i/2,0,Math.PI*2),e.clip(),e.fillStyle="#e8dcc0",e.fillRect(0,0,i,s),e.translate(i/2,s/2),e.rotate(-I.walker.yaw),e.scale(c*.55,c*.55),e.globalAlpha=.95,e.drawImage(n.cv,n.box[0]-o,a-n.box[3],n.cv.width*n.mpp,n.cv.height*n.mpp),e.globalAlpha=1;for(const l of I.street.signs)l.active&&(e.fillStyle="#a8402c",e.beginPath(),e.arc(l.anchor.x-o,l.anchor.z+a,3.2/(c*.55),0,Math.PI*2),e.fill());e.restore(),e.fillStyle="#2a2119",e.beginPath(),e.moveTo(i/2,s/2-9),e.lineTo(i/2+6,s/2+7),e.lineTo(i/2,s/2+3),e.lineTo(i/2-6,s/2+7),e.closePath(),e.fill()}const _i=new M_,Zc=new Q;let kr=null;Dn.addEventListener("pointermove",n=>{if(I.mode!=="city")return;Zc.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),_i.setFromCamera(Zc,ue);const t=I.city.pick(_i);if(t){const e=t.event,i=I.city.printers.get(e.p.printer);Ua(`<div class="tt-title">${Xt(e.s.title)}</div><div class="tt-sub">${e.s.year} · ${Xt((i==null?void 0:i.name)??"")} · ${Xt(bi(e.p,I.data.streets))}</div>`,n.clientX,n.clientY),I.city.setHover(t.index),Dn.style.cursor="pointer",I.hover=t}else Ua(null),I.city.setHover(null),Dn.style.cursor="",I.hover=null});Dn.addEventListener("pointerdown",n=>{kr=[n.clientX,n.clientY]});Dn.addEventListener("pointerup",n=>{I.mode!=="city"||!kr||Math.hypot(n.clientX-kr[0],n.clientY-kr[1])<5&&I.hover&&ni(Qh(I.hover.event,I.data))});Dn.addEventListener("pointerleave",()=>Ua(null));Kt("begin").addEventListener("click",jv);Kt("to-street").addEventListener("click",()=>{I.year<1700.99&&(I.year=1700.99,zs(!1)),nu()});Kt("descend").addEventListener("click",()=>iu());Kt("rk-close").addEventListener("click",()=>{Ue("ranking",!1),Ue("press",!0),Ue("legend",!0),I.city.hideStreet()});Kt("to-city").addEventListener("click",Kv);Kt("detail-close").addEventListener("click",Ys);Kt("detail-body").addEventListener("click",n=>{const t=n.target.closest("a[data-printer]");t&&(n.preventDefault(),ni($s(t.dataset.printer,I.data)))});Kt("stroll").addEventListener("click",()=>I.walker.setStroll(!I.walker.strolling));let Kc=!1;function sx(n){n&&!Kc&&I.mode==="street"&&(Kc=!0,al("Gulls: Sonothèque ADVL (CC0) · bells: Martin Thurnherr (CC BY-SA 4.0) and Ib Rasmussen (public domain) · the air is made in your browser",6e3)),ms=n,us.setEnabled(n),Kt("sound").setAttribute("aria-pressed",n?"true":"false"),Kt("sound").textContent=n?"Sound on ♪":"Sound off";try{localStorage.setItem("opw-sound",n?"on":"off")}catch{}}Kt("sound").addEventListener("click",()=>sx(!ms));Kt("sound").setAttribute("aria-pressed",ms?"true":"false");Kt("sound").textContent=ms?"Sound on ♪":"Sound off";us.setEnabled(ms);Kt("street-pick").addEventListener("change",async n=>{var e;const t=n.target.value;I.mode!=="street"||t===((e=I.street)==null?void 0:e.name)||(I.walker.enabled=!1,I.walker.setStroll(!1),Ys(),["street-hud","street-controls","minimap"].forEach(i=>Ue(i,!1)),hl(),I.mode="hopping",await iu(t,{hop:!0}))});function au(n,t){return n==null?`all signs · houses as in ${t.defaultYear}`:`${n} · ${zh(n)}`}Kt("sh-range").addEventListener("input",n=>{var i;const t=Number(n.target.value),e=t>=1705||t<=1595;(i=I.street)==null||i.setYear(e?null:t),Kt("sh-year-out").textContent=au(e?null:t,I.street)});window.addEventListener("keydown",n=>{var t,e,i,s;n.key==="Escape"&&(Ys(),Ue("ranking",!1)),I.mode==="city"&&n.key===" "&&!((e=(t=n.target).closest)!=null&&e.call(t,"button,input,select"))&&(n.preventDefault(),I.playing=!I.playing),(I.mode==="city"||I.mode==="street")&&n.key.toLowerCase()==="m"&&!((s=(i=n.target).closest)!=null&&s.call(i,"input,select,textarea"))&&ru(I.mapKey==="debroen"?"berckenrode":"debroen")});I.walker=new Nv(ue,Dn);I.walker.onStrollChange=n=>{Kt("stroll").setAttribute("aria-pressed",n?"true":"false"),Kt("stroll").textContent=n?"Strolling ❚❚":"Stroll ▸"};I.walker.onClick=n=>{_i.setFromCamera(n,ue);const t=I.street.signs.filter(s=>s.active).map(s=>s.sign.userData.board),e=_i.intersectObjects(t,!0)[0];if(e){const s=e.object.userData.entry??e.object.parent.userData.entry;ni($s(s.printer.id,I.data,{streetEntry:s}));return}const i=I.street;_i.far=160;for(const s of _i.intersectObject(i.housesMesh.userData.mesh,!1)){const r=i.houseAt(s.face.a);if(r){ni(Gv(r,i,i.year));break}}_i.far=1/0};function rx(){ue.aspect=window.innerWidth/window.innerHeight,ue.updateProjectionMatrix(),ii.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",rx);function lu(){var e;const n=Math.min(.05,Na.getDelta()),t=Na.elapsedTime;if(oe.uTime.value=t,I.anim){I.anim.t+=n/I.anim.duration;const i=Math.min(1,I.anim.t);if(I.anim.step(i),i>=1){const s=I.anim.done;I.anim=null,s==null||s()}}if(I.city)if(I.mode==="city"||I.mode==="title")I.playing&&(I.year+=n*Xv*I.speed,I.year>=1700.99?(I.year=1700.99,I.playing=!1,zs(),setTimeout(()=>{I.mode==="city"&&!I.playing&&nu()},1600)):zs()),I.press.pending&&t-I.press.last>.55&&I.press.flush(t),ve.enabled&&!I.anim&&ve.update(),I.city.update(t),I.mode==="city"&&ex();else if(I.mode==="street"){const i=I.walker.update(n);i&&ni($s(i.printer.id,I.data,{streetEntry:i})),I.street.update(t,n),us.update(ue,I.walker),I.street.shadowsDirty&&t-(I.shadowAt??0)>.25&&(I.street.renderShadows(),I.shadowAt=t),nx(),ix(),I.shadowFade<1&&(I.shadowFade=Math.min(1,I.shadowFade+n*.8),oe.uShadowOn.value=I.shadowFade)}else I.street&&I.street.update(t,n);tx(),Ei.visible&&Ei.position.copy(ue.position),(e=I.tiles)==null||e.update(ue,window.innerHeight),ii.render(Be,ue),requestAnimationFrame(lu)}$v().catch(n=>{console.error(n),Kt("begin").querySelector(".btn-label").textContent="Could not load the data"});requestAnimationFrame(lu);
