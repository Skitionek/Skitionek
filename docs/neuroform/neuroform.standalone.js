/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Vo = "169", cn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, an = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Kc = 0, ga = 1, Wc = 2, Xl = 1, Yc = 2, ri = 3, yi = 0, Me = 1, oi = 2, Ke = 0, hn = 1, fn = 2, ma = 3, va = 4, Zl = 5, Pi = 100, Xc = 101, Zc = 102, Qc = 103, jc = 104, qc = 200, Wr = 201, Jc = 202, $c = 203, Yr = 204, Xr = 205, th = 206, eh = 207, ih = 208, nh = 209, sh = 210, rh = 211, oh = 212, ah = 213, lh = 214, Zr = 0, Qr = 1, jr = 2, Oi = 3, qr = 4, Jr = 5, $r = 6, to = 7, Ql = 0, ch = 1, hh = 2, Si = 0, uh = 1, dh = 2, fh = 3, ph = 4, gh = 5, mh = 6, vh = 7, jl = 300, pn = 301, gn = 302, eo = 303, io = 304, Ws = 306, no = 1e3, Fi = 1001, so = 1002, pe = 1003, Ch = 1004, Xn = 1005, Re = 1006, er = 1007, Ni = 1008, li = 1009, ql = 1010, Jl = 1011, Fn = 1012, Ko = 1013, ki = 1014, Qe = 1015, je = 1016, Wo = 1017, Yo = 1018, mn = 1020, $l = 35902, tc = 1021, ec = 1022, Fe = 1023, ic = 1024, nc = 1025, un = 1026, vn = 1027, sc = 1028, Xo = 1029, Ys = 1030, Zo = 1031, Qo = 1033, Ms = 33776, bs = 33777, ws = 33778, _s = 33779, ro = 35840, oo = 35841, ao = 35842, lo = 35843, co = 36196, ho = 37492, uo = 37496, fo = 37808, po = 37809, go = 37810, mo = 37811, vo = 37812, Co = 37813, Ao = 37814, So = 37815, xo = 37816, yo = 37817, Io = 37818, Mo = 37819, bo = 37820, wo = 37821, Es = 36492, _o = 36494, Eo = 36495, rc = 36283, To = 36284, Lo = 36285, Ro = 36286, Ah = 3200, Sh = 3201, xh = 0, yh = 1, Ci = "", Xe = "srgb", bi = "srgb-linear", jo = "display-p3", Xs = "display-p3-linear", Ds = "linear", Jt = "srgb", Bs = "rec709", Ps = "p3", Yi = 7680, Ca = 519, Ih = 512, Mh = 513, bh = 514, oc = 515, wh = 516, _h = 517, Eh = 518, Th = 519, Aa = 35044, Do = 35048, Sa = "300 es", ai = 2e3, Us = 2001;
class Vi {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[t] !== void 0 && i[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const s = this._listeners[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t.type];
    if (i !== void 0) {
      t.target = this;
      const s = i.slice(0);
      for (let r = 0, o = s.length; r < o; r++)
        s[r].call(this, t);
      t.target = null;
    }
  }
}
const de = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Ts = Math.PI / 180, Bo = 180 / Math.PI;
function kn() {
  const n = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (de[n & 255] + de[n >> 8 & 255] + de[n >> 16 & 255] + de[n >> 24 & 255] + "-" + de[t & 255] + de[t >> 8 & 255] + "-" + de[t >> 16 & 15 | 64] + de[t >> 24 & 255] + "-" + de[e & 63 | 128] + de[e >> 8 & 255] + "-" + de[e >> 16 & 255] + de[e >> 24 & 255] + de[i & 255] + de[i >> 8 & 255] + de[i >> 16 & 255] + de[i >> 24 & 255]).toLowerCase();
}
function me(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Lh(n, t) {
  return (n % t + t) % t;
}
function ir(n, t, e) {
  return (1 - e) * n + e * t;
}
function _n(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ye(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Rh = {
  DEG2RAD: Ts
};
class St {
  constructor(t = 0, e = 0) {
    St.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * i + s[6], this.y = s[1] * e + s[4] * i + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(me(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const i = Math.cos(e), s = Math.sin(e), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * i - o * s + t.x, this.y = r * s + o * i + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Dt {
  constructor(t, e, i, s, r, o, a, l, c) {
    Dt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, i, s, r, o, a, l, c);
  }
  set(t, e, i, s, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = a, h[3] = e, h[4] = r, h[5] = l, h[6] = i, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, s = e.elements, r = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], h = i[4], u = i[7], p = i[2], g = i[5], v = i[8], m = s[0], f = s[3], d = s[6], y = s[1], S = s[4], M = s[7], E = s[2], _ = s[5], w = s[8];
    return r[0] = o * m + a * y + l * E, r[3] = o * f + a * S + l * _, r[6] = o * d + a * M + l * w, r[1] = c * m + h * y + u * E, r[4] = c * f + h * S + u * _, r[7] = c * d + h * M + u * w, r[2] = p * m + g * y + v * E, r[5] = p * f + g * S + v * _, r[8] = p * d + g * M + v * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8];
    return e * o * h - e * a * c - i * r * h + i * a * l + s * r * c - s * o * l;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = h * o - a * c, p = a * l - h * r, g = c * r - o * l, v = e * u + i * p + s * g;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / v;
    return t[0] = u * m, t[1] = (s * c - h * i) * m, t[2] = (a * i - s * o) * m, t[3] = p * m, t[4] = (h * e - s * l) * m, t[5] = (s * r - a * e) * m, t[6] = g * m, t[7] = (i * l - c * e) * m, t[8] = (o * e - i * r) * m, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, i, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      i * l,
      i * c,
      -i * (l * o + c * a) + o + t,
      -s * c,
      s * l,
      -s * (-c * o + l * a) + a + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(nr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(nr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(nr.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      -i,
      0,
      i,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let s = 0; s < 9; s++)
      if (e[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const nr = /* @__PURE__ */ new Dt();
function ac(n) {
  for (let t = n.length - 1; t >= 0; --t)
    if (n[t] >= 65535) return !0;
  return !1;
}
function Fs(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Dh() {
  const n = Fs("canvas");
  return n.style.display = "block", n;
}
const xa = {};
function Ls(n) {
  n in xa || (xa[n] = !0, console.warn(n));
}
function Bh(n, t, e) {
  return new Promise(function(i, s) {
    function r() {
      switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          s();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          i();
      }
    }
    setTimeout(r, e);
  });
}
function Ph(n) {
  const t = n.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Uh(n) {
  const t = n.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const ya = /* @__PURE__ */ new Dt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ia = /* @__PURE__ */ new Dt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), En = {
  [bi]: {
    transfer: Ds,
    primaries: Bs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (n) => n,
    fromReference: (n) => n
  },
  [Xe]: {
    transfer: Jt,
    primaries: Bs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (n) => n.convertSRGBToLinear(),
    fromReference: (n) => n.convertLinearToSRGB()
  },
  [Xs]: {
    transfer: Ds,
    primaries: Ps,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (n) => n.applyMatrix3(Ia),
    fromReference: (n) => n.applyMatrix3(ya)
  },
  [jo]: {
    transfer: Jt,
    primaries: Ps,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (n) => n.convertSRGBToLinear().applyMatrix3(Ia),
    fromReference: (n) => n.applyMatrix3(ya).convertLinearToSRGB()
  }
}, Fh = /* @__PURE__ */ new Set([bi, Xs]), Wt = {
  enabled: !0,
  _workingColorSpace: bi,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(n) {
    if (!Fh.has(n))
      throw new Error(`Unsupported working color space, "${n}".`);
    this._workingColorSpace = n;
  },
  convert: function(n, t, e) {
    if (this.enabled === !1 || t === e || !t || !e)
      return n;
    const i = En[t].toReference, s = En[e].fromReference;
    return s(i(n));
  },
  fromWorkingColorSpace: function(n, t) {
    return this.convert(n, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(n, t) {
    return this.convert(n, t, this._workingColorSpace);
  },
  getPrimaries: function(n) {
    return En[n].primaries;
  },
  getTransfer: function(n) {
    return n === Ci ? Ds : En[n].transfer;
  },
  getLuminanceCoefficients: function(n, t = this._workingColorSpace) {
    return n.fromArray(En[t].luminanceCoefficients);
  }
};
function dn(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function sr(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let Xi;
class Nh {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Xi === void 0 && (Xi = Fs("canvas")), Xi.width = t.width, Xi.height = t.height;
      const i = Xi.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Xi;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Fs("canvas");
      e.width = t.width, e.height = t.height;
      const i = e.getContext("2d");
      i.drawImage(t, 0, 0, t.width, t.height);
      const s = i.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let o = 0; o < r.length; o++)
        r[o] = dn(r[o] / 255) * 255;
      return i.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let i = 0; i < e.length; i++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(dn(e[i] / 255) * 255) : e[i] = dn(e[i]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Gh = 0;
class lc {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Gh++ }), this.uuid = kn(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let o = 0, a = s.length; o < a; o++)
          s[o].isDataTexture ? r.push(rr(s[o].image)) : r.push(rr(s[o]));
      } else
        r = rr(s);
      i.url = r;
    }
    return e || (t.images[this.uuid] = i), i;
  }
}
function rr(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Nh.getDataURL(n) : n.data ? {
    data: Array.from(n.data),
    width: n.width,
    height: n.height,
    type: n.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Oh = 0;
class ve extends Vi {
  constructor(t = ve.DEFAULT_IMAGE, e = ve.DEFAULT_MAPPING, i = Fi, s = Fi, r = Re, o = Ni, a = Fe, l = li, c = ve.DEFAULT_ANISOTROPY, h = Ci) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Oh++ }), this.uuid = kn(), this.name = "", this.source = new lc(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new St(0, 0), this.repeat = new St(1, 1), this.center = new St(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Dt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== jl) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case no:
          t.x = t.x - Math.floor(t.x);
          break;
        case Fi:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case no:
          t.y = t.y - Math.floor(t.y);
          break;
        case Fi:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
ve.DEFAULT_IMAGE = null;
ve.DEFAULT_MAPPING = jl;
ve.DEFAULT_ANISOTROPY = 1;
class ne {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    ne.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, i, s) {
    return this.x = t, this.y = e, this.z = i, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, s = this.z, r = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * i + o[8] * s + o[12] * r, this.y = o[1] * e + o[5] * i + o[9] * s + o[13] * r, this.z = o[2] * e + o[6] * i + o[10] * s + o[14] * r, this.w = o[3] * e + o[7] * i + o[11] * s + o[15] * r, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, i, s, r;
    const l = t.elements, c = l[0], h = l[4], u = l[8], p = l[1], g = l[5], v = l[9], m = l[2], f = l[6], d = l[10];
    if (Math.abs(h - p) < 0.01 && Math.abs(u - m) < 0.01 && Math.abs(v - f) < 0.01) {
      if (Math.abs(h + p) < 0.1 && Math.abs(u + m) < 0.1 && Math.abs(v + f) < 0.1 && Math.abs(c + g + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const S = (c + 1) / 2, M = (g + 1) / 2, E = (d + 1) / 2, _ = (h + p) / 4, w = (u + m) / 4, P = (v + f) / 4;
      return S > M && S > E ? S < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(S), s = _ / i, r = w / i) : M > E ? M < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(M), i = _ / s, r = P / s) : E < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(E), i = w / r, s = P / r), this.set(i, s, r, e), this;
    }
    let y = Math.sqrt((f - v) * (f - v) + (u - m) * (u - m) + (p - h) * (p - h));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (f - v) / y, this.y = (u - m) / y, this.z = (p - h) / y, this.w = Math.acos((c + g + d - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class kh extends Vi {
  constructor(t = 1, e = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new ne(0, 0, t, e), this.scissorTest = !1, this.viewport = new ne(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Re,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, i);
    const r = new ve(s, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    r.flipY = !1, r.generateMipmaps = i.generateMipmaps, r.internalFormat = i.internalFormat, this.textures = [];
    const o = i.count;
    for (let a = 0; a < o; a++)
      this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = !0;
    this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this.depthTexture = i.depthTexture, this.samples = i.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, i = 1) {
    if (this.width !== t || this.height !== e || this.depth !== i) {
      this.width = t, this.height = e, this.depth = i;
      for (let s = 0, r = this.textures.length; s < r; s++)
        this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = i;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let i = 0, s = t.textures.length; i < s; i++)
      this.textures[i] = t.textures[i].clone(), this.textures[i].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new lc(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ge extends kh {
  constructor(t = 1, e = 1, i = {}) {
    super(t, e, i), this.isWebGLRenderTarget = !0;
  }
}
class cc extends ve {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = pe, this.minFilter = pe, this.wrapR = Fi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Hh extends ve {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = pe, this.minFilter = pe, this.wrapR = Fi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Hi {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s;
  }
  static slerpFlat(t, e, i, s, r, o, a) {
    let l = i[s + 0], c = i[s + 1], h = i[s + 2], u = i[s + 3];
    const p = r[o + 0], g = r[o + 1], v = r[o + 2], m = r[o + 3];
    if (a === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = p, t[e + 1] = g, t[e + 2] = v, t[e + 3] = m;
      return;
    }
    if (u !== m || l !== p || c !== g || h !== v) {
      let f = 1 - a;
      const d = l * p + c * g + h * v + u * m, y = d >= 0 ? 1 : -1, S = 1 - d * d;
      if (S > Number.EPSILON) {
        const E = Math.sqrt(S), _ = Math.atan2(E, d * y);
        f = Math.sin(f * _) / E, a = Math.sin(a * _) / E;
      }
      const M = a * y;
      if (l = l * f + p * M, c = c * f + g * M, h = h * f + v * M, u = u * f + m * M, f === 1 - a) {
        const E = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= E, c *= E, h *= E, u *= E;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, i, s, r, o) {
    const a = i[s], l = i[s + 1], c = i[s + 2], h = i[s + 3], u = r[o], p = r[o + 1], g = r[o + 2], v = r[o + 3];
    return t[e] = a * v + h * u + l * g - c * p, t[e + 1] = l * v + h * p + c * u - a * g, t[e + 2] = c * v + h * g + a * p - l * u, t[e + 3] = h * v - a * u - l * p - c * g, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, i, s) {
    return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const i = t._x, s = t._y, r = t._z, o = t._order, a = Math.cos, l = Math.sin, c = a(i / 2), h = a(s / 2), u = a(r / 2), p = l(i / 2), g = l(s / 2), v = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = p * h * u + c * g * v, this._y = c * g * u - p * h * v, this._z = c * h * v + p * g * u, this._w = c * h * u - p * g * v;
        break;
      case "YXZ":
        this._x = p * h * u + c * g * v, this._y = c * g * u - p * h * v, this._z = c * h * v - p * g * u, this._w = c * h * u + p * g * v;
        break;
      case "ZXY":
        this._x = p * h * u - c * g * v, this._y = c * g * u + p * h * v, this._z = c * h * v + p * g * u, this._w = c * h * u - p * g * v;
        break;
      case "ZYX":
        this._x = p * h * u - c * g * v, this._y = c * g * u + p * h * v, this._z = c * h * v - p * g * u, this._w = c * h * u + p * g * v;
        break;
      case "YZX":
        this._x = p * h * u + c * g * v, this._y = c * g * u + p * h * v, this._z = c * h * v - p * g * u, this._w = c * h * u - p * g * v;
        break;
      case "XZY":
        this._x = p * h * u - c * g * v, this._y = c * g * u - p * h * v, this._z = c * h * v + p * g * u, this._w = c * h * u + p * g * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const i = e / 2, s = Math.sin(i);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, i = e[0], s = e[4], r = e[8], o = e[1], a = e[5], l = e[9], c = e[2], h = e[6], u = e[10], p = i + a + u;
    if (p > 0) {
      const g = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / g, this._x = (h - l) * g, this._y = (r - c) * g, this._z = (o - s) * g;
    } else if (i > a && i > u) {
      const g = 2 * Math.sqrt(1 + i - a - u);
      this._w = (h - l) / g, this._x = 0.25 * g, this._y = (s + o) / g, this._z = (r + c) / g;
    } else if (a > u) {
      const g = 2 * Math.sqrt(1 + a - i - u);
      this._w = (r - c) / g, this._x = (s + o) / g, this._y = 0.25 * g, this._z = (l + h) / g;
    } else {
      const g = 2 * Math.sqrt(1 + u - i - a);
      this._w = (o - s) / g, this._x = (r + c) / g, this._y = (l + h) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let i = t.dot(e) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(me(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const i = this.angleTo(t);
    if (i === 0) return this;
    const s = Math.min(1, e / i);
    return this.slerp(t, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const i = t._x, s = t._y, r = t._z, o = t._w, a = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = i * h + o * a + s * c - r * l, this._y = s * h + o * l + r * a - i * c, this._z = r * h + o * c + i * l - s * a, this._w = o * h - i * a - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const i = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * t._w + i * t._x + s * t._y + r * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
      return this._w = o, this._x = i, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const g = 1 - e;
      return this._w = g * o + e * this._w, this._x = g * i + e * this._x, this._y = g * s + e * this._y, this._z = g * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - e) * h) / c, p = Math.sin(e * h) / c;
    return this._w = o * u + this._w * p, this._x = i * u + this._x * p, this._y = s * u + this._y * p, this._z = r * u + this._z * p, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, i) {
    return this.copy(t).slerp(e, i);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), r = Math.sqrt(i);
    return this.set(
      s * Math.sin(t),
      s * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(t = 0, e = 0, i = 0) {
    B.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i;
  }
  set(t, e, i) {
    return i === void 0 && (i = this.z), this.x = t, this.y = e, this.z = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Ma.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Ma.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * i + r[6] * s, this.y = r[1] * e + r[4] * i + r[7] * s, this.z = r[2] * e + r[5] * i + r[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, s = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * i + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * i + r[8] * s + r[12]) * o, this.y = (r[1] * e + r[5] * i + r[9] * s + r[13]) * o, this.z = (r[2] * e + r[6] * i + r[10] * s + r[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, i = this.y, s = this.z, r = t.x, o = t.y, a = t.z, l = t.w, c = 2 * (o * s - a * i), h = 2 * (a * e - r * s), u = 2 * (r * i - o * e);
    return this.x = e + l * c + o * u - a * h, this.y = i + l * h + a * c - r * u, this.z = s + l * u + r * h - o * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, i = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * i + r[8] * s, this.y = r[1] * e + r[5] * i + r[9] * s, this.z = r[2] * e + r[6] * i + r[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const i = t.x, s = t.y, r = t.z, o = e.x, a = e.y, l = e.z;
    return this.x = s * l - r * a, this.y = r * o - i * l, this.z = i * a - s * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / e;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return or.copy(this).projectOnVector(t), this.sub(or);
  }
  reflect(t) {
    return this.sub(or.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(me(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y, s = this.z - t.z;
    return e * e + i * i + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, i) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, i) {
    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = i, this.z = s, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, i = Math.sqrt(1 - e * e);
    return this.x = i * Math.cos(t), this.y = e, this.z = i * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const or = /* @__PURE__ */ new B(), Ma = /* @__PURE__ */ new Hi();
class Hn {
  constructor(t = new B(1 / 0, 1 / 0, 1 / 0), e = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e += 3)
      this.expandByPoint(ke.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, i = t.count; e < i; e++)
      this.expandByPoint(ke.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const i = ke.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const i = t.geometry;
    if (i !== void 0) {
      const r = i.getAttribute("position");
      if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let o = 0, a = r.count; o < a; o++)
          t.isMesh === !0 ? t.getVertexPosition(o, ke) : ke.fromBufferAttribute(r, o), ke.applyMatrix4(t.matrixWorld), this.expandByPoint(ke);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Zn.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Zn.copy(i.boundingBox)), Zn.applyMatrix4(t.matrixWorld), this.union(Zn);
    }
    const s = t.children;
    for (let r = 0, o = s.length; r < o; r++)
      this.expandByObject(s[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, ke), ke.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, i;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Tn), Qn.subVectors(this.max, Tn), Zi.subVectors(t.a, Tn), Qi.subVectors(t.b, Tn), ji.subVectors(t.c, Tn), ui.subVectors(Qi, Zi), di.subVectors(ji, Qi), _i.subVectors(Zi, ji);
    let e = [
      0,
      -ui.z,
      ui.y,
      0,
      -di.z,
      di.y,
      0,
      -_i.z,
      _i.y,
      ui.z,
      0,
      -ui.x,
      di.z,
      0,
      -di.x,
      _i.z,
      0,
      -_i.x,
      -ui.y,
      ui.x,
      0,
      -di.y,
      di.x,
      0,
      -_i.y,
      _i.x,
      0
    ];
    return !ar(e, Zi, Qi, ji, Qn) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ar(e, Zi, Qi, ji, Qn)) ? !1 : (jn.crossVectors(ui, di), e = [jn.x, jn.y, jn.z], ar(e, Zi, Qi, ji, Qn));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, ke).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(ke).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (ti[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), ti[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ti[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), ti[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ti[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), ti[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ti[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), ti[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ti), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const ti = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], ke = /* @__PURE__ */ new B(), Zn = /* @__PURE__ */ new Hn(), Zi = /* @__PURE__ */ new B(), Qi = /* @__PURE__ */ new B(), ji = /* @__PURE__ */ new B(), ui = /* @__PURE__ */ new B(), di = /* @__PURE__ */ new B(), _i = /* @__PURE__ */ new B(), Tn = /* @__PURE__ */ new B(), Qn = /* @__PURE__ */ new B(), jn = /* @__PURE__ */ new B(), Ei = /* @__PURE__ */ new B();
function ar(n, t, e, i, s) {
  for (let r = 0, o = n.length - 3; r <= o; r += 3) {
    Ei.fromArray(n, r);
    const a = s.x * Math.abs(Ei.x) + s.y * Math.abs(Ei.y) + s.z * Math.abs(Ei.z), l = t.dot(Ei), c = e.dot(Ei), h = i.dot(Ei);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const zh = /* @__PURE__ */ new Hn(), Ln = /* @__PURE__ */ new B(), lr = /* @__PURE__ */ new B();
class In {
  constructor(t = new B(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const i = this.center;
    e !== void 0 ? i.copy(e) : zh.setFromPoints(t).getCenter(i);
    let s = 0;
    for (let r = 0, o = t.length; r < o; r++)
      s = Math.max(s, i.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const i = this.center.distanceToSquared(t);
    return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Ln.subVectors(t, this.center);
    const e = Ln.lengthSq();
    if (e > this.radius * this.radius) {
      const i = Math.sqrt(e), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(Ln, s / i), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (lr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ln.copy(t.center).add(lr)), this.expandByPoint(Ln.copy(t.center).sub(lr))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ei = /* @__PURE__ */ new B(), cr = /* @__PURE__ */ new B(), qn = /* @__PURE__ */ new B(), fi = /* @__PURE__ */ new B(), hr = /* @__PURE__ */ new B(), Jn = /* @__PURE__ */ new B(), ur = /* @__PURE__ */ new B();
class zn {
  constructor(t = new B(), e = new B(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, ei)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const i = e.dot(this.direction);
    return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = ei.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (ei.copy(this.origin).addScaledVector(this.direction, e), ei.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, i, s) {
    cr.copy(t).add(e).multiplyScalar(0.5), qn.copy(e).sub(t).normalize(), fi.copy(this.origin).sub(cr);
    const r = t.distanceTo(e) * 0.5, o = -this.direction.dot(qn), a = fi.dot(this.direction), l = -fi.dot(qn), c = fi.lengthSq(), h = Math.abs(1 - o * o);
    let u, p, g, v;
    if (h > 0)
      if (u = o * l - a, p = o * a - l, v = r * h, u >= 0)
        if (p >= -v)
          if (p <= v) {
            const m = 1 / h;
            u *= m, p *= m, g = u * (u + o * p + 2 * a) + p * (o * u + p + 2 * l) + c;
          } else
            p = r, u = Math.max(0, -(o * p + a)), g = -u * u + p * (p + 2 * l) + c;
        else
          p = -r, u = Math.max(0, -(o * p + a)), g = -u * u + p * (p + 2 * l) + c;
      else
        p <= -v ? (u = Math.max(0, -(-o * r + a)), p = u > 0 ? -r : Math.min(Math.max(-r, -l), r), g = -u * u + p * (p + 2 * l) + c) : p <= v ? (u = 0, p = Math.min(Math.max(-r, -l), r), g = p * (p + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), p = u > 0 ? r : Math.min(Math.max(-r, -l), r), g = -u * u + p * (p + 2 * l) + c);
    else
      p = o > 0 ? -r : r, u = Math.max(0, -(o * p + a)), g = -u * u + p * (p + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(cr).addScaledVector(qn, p), g;
  }
  intersectSphere(t, e) {
    ei.subVectors(t.center, this.origin);
    const i = ei.dot(this.direction), s = ei.dot(ei) - i * i, r = t.radius * t.radius;
    if (s > r) return null;
    const o = Math.sqrt(r - s), a = i - o, l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(t.normal) + t.constant) / e;
    return i >= 0 ? i : null;
  }
  intersectPlane(t, e) {
    const i = this.distanceToPlane(t);
    return i === null ? null : this.at(i, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let i, s, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, p = this.origin;
    return c >= 0 ? (i = (t.min.x - p.x) * c, s = (t.max.x - p.x) * c) : (i = (t.max.x - p.x) * c, s = (t.min.x - p.x) * c), h >= 0 ? (r = (t.min.y - p.y) * h, o = (t.max.y - p.y) * h) : (r = (t.max.y - p.y) * h, o = (t.min.y - p.y) * h), i > o || r > s || ((r > i || isNaN(i)) && (i = r), (o < s || isNaN(s)) && (s = o), u >= 0 ? (a = (t.min.z - p.z) * u, l = (t.max.z - p.z) * u) : (a = (t.max.z - p.z) * u, l = (t.min.z - p.z) * u), i > l || a > s) || ((a > i || i !== i) && (i = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(i >= 0 ? i : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, ei) !== null;
  }
  intersectTriangle(t, e, i, s, r) {
    hr.subVectors(e, t), Jn.subVectors(i, t), ur.crossVectors(hr, Jn);
    let o = this.direction.dot(ur), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    fi.subVectors(this.origin, t);
    const l = a * this.direction.dot(Jn.crossVectors(fi, Jn));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(hr.cross(fi));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * fi.dot(ur);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class $t {
  constructor(t, e, i, s, r, o, a, l, c, h, u, p, g, v, m, f) {
    $t.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, i, s, r, o, a, l, c, h, u, p, g, v, m, f);
  }
  set(t, e, i, s, r, o, a, l, c, h, u, p, g, v, m, f) {
    const d = this.elements;
    return d[0] = t, d[4] = e, d[8] = i, d[12] = s, d[1] = r, d[5] = o, d[9] = a, d[13] = l, d[2] = c, d[6] = h, d[10] = u, d[14] = p, d[3] = g, d[7] = v, d[11] = m, d[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new $t().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
  }
  copyPosition(t) {
    const e = this.elements, i = t.elements;
    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, i) {
    return this.set(
      t.x,
      e.x,
      i.x,
      0,
      t.y,
      e.y,
      i.y,
      0,
      t.z,
      e.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, i = t.elements, s = 1 / qi.setFromMatrixColumn(t, 0).length(), r = 1 / qi.setFromMatrixColumn(t, 1).length(), o = 1 / qi.setFromMatrixColumn(t, 2).length();
    return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * o, e[9] = i[9] * o, e[10] = i[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, i = t.x, s = t.y, r = t.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const p = o * h, g = o * u, v = a * h, m = a * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = g + v * c, e[5] = p - m * c, e[9] = -a * l, e[2] = m - p * c, e[6] = v + g * c, e[10] = o * l;
    } else if (t.order === "YXZ") {
      const p = l * h, g = l * u, v = c * h, m = c * u;
      e[0] = p + m * a, e[4] = v * a - g, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = g * a - v, e[6] = m + p * a, e[10] = o * l;
    } else if (t.order === "ZXY") {
      const p = l * h, g = l * u, v = c * h, m = c * u;
      e[0] = p - m * a, e[4] = -o * u, e[8] = v + g * a, e[1] = g + v * a, e[5] = o * h, e[9] = m - p * a, e[2] = -o * c, e[6] = a, e[10] = o * l;
    } else if (t.order === "ZYX") {
      const p = o * h, g = o * u, v = a * h, m = a * u;
      e[0] = l * h, e[4] = v * c - g, e[8] = p * c + m, e[1] = l * u, e[5] = m * c + p, e[9] = g * c - v, e[2] = -c, e[6] = a * l, e[10] = o * l;
    } else if (t.order === "YZX") {
      const p = o * l, g = o * c, v = a * l, m = a * c;
      e[0] = l * h, e[4] = m - p * u, e[8] = v * u + g, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -c * h, e[6] = g * u + v, e[10] = p - m * u;
    } else if (t.order === "XZY") {
      const p = o * l, g = o * c, v = a * l, m = a * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = p * u + m, e[5] = o * h, e[9] = g * u - v, e[2] = v * u - g, e[6] = a * h, e[10] = m * u + p;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Vh, t, Kh);
  }
  lookAt(t, e, i) {
    const s = this.elements;
    return Ee.subVectors(t, e), Ee.lengthSq() === 0 && (Ee.z = 1), Ee.normalize(), pi.crossVectors(i, Ee), pi.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ee.x += 1e-4 : Ee.z += 1e-4, Ee.normalize(), pi.crossVectors(i, Ee)), pi.normalize(), $n.crossVectors(Ee, pi), s[0] = pi.x, s[4] = $n.x, s[8] = Ee.x, s[1] = pi.y, s[5] = $n.y, s[9] = Ee.y, s[2] = pi.z, s[6] = $n.z, s[10] = Ee.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, s = e.elements, r = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], h = i[1], u = i[5], p = i[9], g = i[13], v = i[2], m = i[6], f = i[10], d = i[14], y = i[3], S = i[7], M = i[11], E = i[15], _ = s[0], w = s[4], P = s[8], j = s[12], C = s[1], I = s[5], H = s[9], k = s[13], V = s[2], X = s[6], F = s[10], Q = s[14], O = s[3], it = s[7], st = s[11], et = s[15];
    return r[0] = o * _ + a * C + l * V + c * O, r[4] = o * w + a * I + l * X + c * it, r[8] = o * P + a * H + l * F + c * st, r[12] = o * j + a * k + l * Q + c * et, r[1] = h * _ + u * C + p * V + g * O, r[5] = h * w + u * I + p * X + g * it, r[9] = h * P + u * H + p * F + g * st, r[13] = h * j + u * k + p * Q + g * et, r[2] = v * _ + m * C + f * V + d * O, r[6] = v * w + m * I + f * X + d * it, r[10] = v * P + m * H + f * F + d * st, r[14] = v * j + m * k + f * Q + d * et, r[3] = y * _ + S * C + M * V + E * O, r[7] = y * w + S * I + M * X + E * it, r[11] = y * P + S * H + M * F + E * st, r[15] = y * j + S * k + M * Q + E * et, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[4], s = t[8], r = t[12], o = t[1], a = t[5], l = t[9], c = t[13], h = t[2], u = t[6], p = t[10], g = t[14], v = t[3], m = t[7], f = t[11], d = t[15];
    return v * (+r * l * u - s * c * u - r * a * p + i * c * p + s * a * g - i * l * g) + m * (+e * l * g - e * c * p + r * o * p - s * o * g + s * c * h - r * l * h) + f * (+e * c * u - e * a * g - r * o * u + i * o * g + r * a * h - i * c * h) + d * (-s * a * h - e * l * u + e * a * p + s * o * u - i * o * p + i * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, i) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = t[9], p = t[10], g = t[11], v = t[12], m = t[13], f = t[14], d = t[15], y = u * f * c - m * p * c + m * l * g - a * f * g - u * l * d + a * p * d, S = v * p * c - h * f * c - v * l * g + o * f * g + h * l * d - o * p * d, M = h * m * c - v * u * c + v * a * g - o * m * g - h * a * d + o * u * d, E = v * u * l - h * m * l - v * a * p + o * m * p + h * a * f - o * u * f, _ = e * y + i * S + s * M + r * E;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / _;
    return t[0] = y * w, t[1] = (m * p * r - u * f * r - m * s * g + i * f * g + u * s * d - i * p * d) * w, t[2] = (a * f * r - m * l * r + m * s * c - i * f * c - a * s * d + i * l * d) * w, t[3] = (u * l * r - a * p * r - u * s * c + i * p * c + a * s * g - i * l * g) * w, t[4] = S * w, t[5] = (h * f * r - v * p * r + v * s * g - e * f * g - h * s * d + e * p * d) * w, t[6] = (v * l * r - o * f * r - v * s * c + e * f * c + o * s * d - e * l * d) * w, t[7] = (o * p * r - h * l * r + h * s * c - e * p * c - o * s * g + e * l * g) * w, t[8] = M * w, t[9] = (v * u * r - h * m * r - v * i * g + e * m * g + h * i * d - e * u * d) * w, t[10] = (o * m * r - v * a * r + v * i * c - e * m * c - o * i * d + e * a * d) * w, t[11] = (h * a * r - o * u * r - h * i * c + e * u * c + o * i * g - e * a * g) * w, t[12] = E * w, t[13] = (h * m * s - v * u * s + v * i * p - e * m * p - h * i * f + e * u * f) * w, t[14] = (v * a * s - o * m * s - v * i * l + e * m * l + o * i * f - e * a * f) * w, t[15] = (o * u * s - h * a * s + h * i * l - e * u * l - o * i * p + e * a * p) * w, this;
  }
  scale(t) {
    const e = this.elements, i = t.x, s = t.y, r = t.z;
    return e[0] *= i, e[4] *= s, e[8] *= r, e[1] *= i, e[5] *= s, e[9] *= r, e[2] *= i, e[6] *= s, e[10] *= r, e[3] *= i, e[7] *= s, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, i, s));
  }
  makeTranslation(t, e, i) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -i,
      0,
      0,
      i,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      -i,
      0,
      0,
      i,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const i = Math.cos(e), s = Math.sin(e), r = 1 - i, o = t.x, a = t.y, l = t.z, c = r * o, h = r * a;
    return this.set(
      c * o + i,
      c * a - s * l,
      c * l + s * a,
      0,
      c * a + s * l,
      h * a + i,
      h * l - s * o,
      0,
      c * l - s * a,
      h * l + s * o,
      r * l * l + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, i) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, i, s, r, o) {
    return this.set(
      1,
      i,
      r,
      0,
      t,
      1,
      o,
      0,
      e,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, i) {
    const s = this.elements, r = e._x, o = e._y, a = e._z, l = e._w, c = r + r, h = o + o, u = a + a, p = r * c, g = r * h, v = r * u, m = o * h, f = o * u, d = a * u, y = l * c, S = l * h, M = l * u, E = i.x, _ = i.y, w = i.z;
    return s[0] = (1 - (m + d)) * E, s[1] = (g + M) * E, s[2] = (v - S) * E, s[3] = 0, s[4] = (g - M) * _, s[5] = (1 - (p + d)) * _, s[6] = (f + y) * _, s[7] = 0, s[8] = (v + S) * w, s[9] = (f - y) * w, s[10] = (1 - (p + m)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, i) {
    const s = this.elements;
    let r = qi.set(s[0], s[1], s[2]).length();
    const o = qi.set(s[4], s[5], s[6]).length(), a = qi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], He.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return He.elements[0] *= c, He.elements[1] *= c, He.elements[2] *= c, He.elements[4] *= h, He.elements[5] *= h, He.elements[6] *= h, He.elements[8] *= u, He.elements[9] *= u, He.elements[10] *= u, e.setFromRotationMatrix(He), i.x = r, i.y = o, i.z = a, this;
  }
  makePerspective(t, e, i, s, r, o, a = ai) {
    const l = this.elements, c = 2 * r / (e - t), h = 2 * r / (i - s), u = (e + t) / (e - t), p = (i + s) / (i - s);
    let g, v;
    if (a === ai)
      g = -(o + r) / (o - r), v = -2 * o * r / (o - r);
    else if (a === Us)
      g = -o / (o - r), v = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, i, s, r, o, a = ai) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (i - s), u = 1 / (o - r), p = (e + t) * c, g = (i + s) * h;
    let v, m;
    if (a === ai)
      v = (o + r) * u, m = -2 * u;
    else if (a === Us)
      v = r * u, m = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -g, l[2] = 0, l[6] = 0, l[10] = m, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let s = 0; s < 16; s++)
      if (e[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
  }
}
const qi = /* @__PURE__ */ new B(), He = /* @__PURE__ */ new $t(), Vh = /* @__PURE__ */ new B(0, 0, 0), Kh = /* @__PURE__ */ new B(1, 1, 1), pi = /* @__PURE__ */ new B(), $n = /* @__PURE__ */ new B(), Ee = /* @__PURE__ */ new B(), ba = /* @__PURE__ */ new $t(), wa = /* @__PURE__ */ new Hi();
class ci {
  constructor(t = 0, e = 0, i = 0, s = ci.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, i, s = this._order) {
    return this._x = t, this._y = e, this._z = i, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, i = !0) {
    const s = t.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], h = s[9], u = s[2], p = s[6], g = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(me(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, g), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(p, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-me(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, g), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(me(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-u, g), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-me(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(p, g), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(me(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, g));
        break;
      case "XZY":
        this._z = Math.asin(-me(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, i) {
    return ba.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ba, e, i);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return wa.setFromEuler(this), this.setFromQuaternion(wa, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ci.DEFAULT_ORDER = "XYZ";
class qo {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Wh = 0;
const _a = /* @__PURE__ */ new B(), Ji = /* @__PURE__ */ new Hi(), ii = /* @__PURE__ */ new $t(), ts = /* @__PURE__ */ new B(), Rn = /* @__PURE__ */ new B(), Yh = /* @__PURE__ */ new B(), Xh = /* @__PURE__ */ new Hi(), Ea = /* @__PURE__ */ new B(1, 0, 0), Ta = /* @__PURE__ */ new B(0, 1, 0), La = /* @__PURE__ */ new B(0, 0, 1), Ra = { type: "added" }, Zh = { type: "removed" }, $i = { type: "childadded", child: null }, dr = { type: "childremoved", child: null };
class Ce extends Vi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Wh++ }), this.uuid = kn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ce.DEFAULT_UP.clone();
    const t = new B(), e = new ci(), i = new Hi(), s = new B(1, 1, 1);
    function r() {
      i.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(i, void 0, !1);
    }
    e._onChange(r), i._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new $t()
      },
      normalMatrix: {
        value: new Dt()
      }
    }), this.matrix = new $t(), this.matrixWorld = new $t(), this.matrixAutoUpdate = Ce.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new qo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Ji.setFromAxisAngle(t, e), this.quaternion.multiply(Ji), this;
  }
  rotateOnWorldAxis(t, e) {
    return Ji.setFromAxisAngle(t, e), this.quaternion.premultiply(Ji), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ea, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ta, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(La, t);
  }
  translateOnAxis(t, e) {
    return _a.copy(t).applyQuaternion(this.quaternion), this.position.add(_a.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ea, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ta, t);
  }
  translateZ(t) {
    return this.translateOnAxis(La, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ii.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, i) {
    t.isVector3 ? ts.copy(t) : ts.set(t, e, i);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Rn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ii.lookAt(Rn, ts, this.up) : ii.lookAt(ts, Rn, this.up), this.quaternion.setFromRotationMatrix(ii), s && (ii.extractRotation(s.matrixWorld), Ji.setFromRotationMatrix(ii), this.quaternion.premultiply(Ji.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ra), $i.child = t, this.dispatchEvent($i), $i.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Zh), dr.child = t, this.dispatchEvent(dr), dr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), ii.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ii.multiply(t.parent.matrixWorld)), t.applyMatrix4(ii), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ra), $i.child = t, this.dispatchEvent($i), $i.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectByProperty(t, e);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(t, e, i = []) {
    this[t] === e && i.push(this);
    const s = this.children;
    for (let r = 0, o = s.length; r < o; r++)
      s[r].getObjectsByProperty(t, e, i);
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rn, t, Yh), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rn, Xh, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const i = this.parent;
    if (t === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++)
        s[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", i = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(t.shapes, u);
          }
        else
          r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(t.materials, this.material[l]));
        s.material = a;
      } else
        s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++)
        s.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries), l = o(t.materials), c = o(t.textures), h = o(t.images), u = o(t.shapes), p = o(t.skeletons), g = o(t.animations), v = o(t.nodes);
      a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), p.length > 0 && (i.skeletons = p), g.length > 0 && (i.animations = g), v.length > 0 && (i.nodes = v);
    }
    return i.object = s, i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let i = 0; i < t.children.length; i++) {
        const s = t.children[i];
        this.add(s.clone());
      }
    return this;
  }
}
Ce.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
Ce.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const ze = /* @__PURE__ */ new B(), ni = /* @__PURE__ */ new B(), fr = /* @__PURE__ */ new B(), si = /* @__PURE__ */ new B(), tn = /* @__PURE__ */ new B(), en = /* @__PURE__ */ new B(), Da = /* @__PURE__ */ new B(), pr = /* @__PURE__ */ new B(), gr = /* @__PURE__ */ new B(), mr = /* @__PURE__ */ new B(), vr = /* @__PURE__ */ new ne(), Cr = /* @__PURE__ */ new ne(), Ar = /* @__PURE__ */ new ne();
class Ve {
  constructor(t = new B(), e = new B(), i = new B()) {
    this.a = t, this.b = e, this.c = i;
  }
  static getNormal(t, e, i, s) {
    s.subVectors(i, e), ze.subVectors(t, e), s.cross(ze);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, i, s, r) {
    ze.subVectors(s, e), ni.subVectors(i, e), fr.subVectors(t, e);
    const o = ze.dot(ze), a = ze.dot(ni), l = ze.dot(fr), c = ni.dot(ni), h = ni.dot(fr), u = o * c - a * a;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const p = 1 / u, g = (c * l - a * h) * p, v = (o * h - a * l) * p;
    return r.set(1 - g - v, v, g);
  }
  static containsPoint(t, e, i, s) {
    return this.getBarycoord(t, e, i, s, si) === null ? !1 : si.x >= 0 && si.y >= 0 && si.x + si.y <= 1;
  }
  static getInterpolation(t, e, i, s, r, o, a, l) {
    return this.getBarycoord(t, e, i, s, si) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, si.x), l.addScaledVector(o, si.y), l.addScaledVector(a, si.z), l);
  }
  static getInterpolatedAttribute(t, e, i, s, r, o) {
    return vr.setScalar(0), Cr.setScalar(0), Ar.setScalar(0), vr.fromBufferAttribute(t, e), Cr.fromBufferAttribute(t, i), Ar.fromBufferAttribute(t, s), o.setScalar(0), o.addScaledVector(vr, r.x), o.addScaledVector(Cr, r.y), o.addScaledVector(Ar, r.z), o;
  }
  static isFrontFacing(t, e, i, s) {
    return ze.subVectors(i, e), ni.subVectors(t, e), ze.cross(ni).dot(s) < 0;
  }
  set(t, e, i) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, e, i, s) {
    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, i, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return ze.subVectors(this.c, this.b), ni.subVectors(this.a, this.b), ze.cross(ni).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Ve.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Ve.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, i, s, r) {
    return Ve.getInterpolation(t, this.a, this.b, this.c, e, i, s, r);
  }
  containsPoint(t) {
    return Ve.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Ve.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const i = this.a, s = this.b, r = this.c;
    let o, a;
    tn.subVectors(s, i), en.subVectors(r, i), pr.subVectors(t, i);
    const l = tn.dot(pr), c = en.dot(pr);
    if (l <= 0 && c <= 0)
      return e.copy(i);
    gr.subVectors(t, s);
    const h = tn.dot(gr), u = en.dot(gr);
    if (h >= 0 && u <= h)
      return e.copy(s);
    const p = l * u - h * c;
    if (p <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), e.copy(i).addScaledVector(tn, o);
    mr.subVectors(t, r);
    const g = tn.dot(mr), v = en.dot(mr);
    if (v >= 0 && g <= v)
      return e.copy(r);
    const m = g * c - l * v;
    if (m <= 0 && c >= 0 && v <= 0)
      return a = c / (c - v), e.copy(i).addScaledVector(en, a);
    const f = h * v - g * u;
    if (f <= 0 && u - h >= 0 && g - v >= 0)
      return Da.subVectors(r, s), a = (u - h) / (u - h + (g - v)), e.copy(s).addScaledVector(Da, a);
    const d = 1 / (f + m + p);
    return o = m * d, a = p * d, e.copy(i).addScaledVector(tn, o).addScaledVector(en, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const hc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, gi = { h: 0, s: 0, l: 0 }, es = { h: 0, s: 0, l: 0 };
function Sr(n, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n;
}
class Mt {
  constructor(t, e, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, i);
  }
  set(t, e, i) {
    if (e === void 0 && i === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(t, e, i);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Xe) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Wt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, i, s = Wt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = i, Wt.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, i, s = Wt.workingColorSpace) {
    if (t = Lh(t, 1), e = me(e, 0, 1), i = me(i, 0, 1), e === 0)
      this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - r;
      this.r = Sr(o, r, t + 1 / 3), this.g = Sr(o, r, t), this.b = Sr(o, r, t - 1 / 3);
    }
    return Wt.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = Xe) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const o = s[1], a = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              e
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          e
        );
      if (o === 6)
        return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Xe) {
    const i = hc[t.toLowerCase()];
    return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = dn(t.r), this.g = dn(t.g), this.b = dn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = sr(t.r), this.g = sr(t.g), this.b = sr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Xe) {
    return Wt.fromWorkingColorSpace(fe.copy(this), t), Math.round(me(fe.r * 255, 0, 255)) * 65536 + Math.round(me(fe.g * 255, 0, 255)) * 256 + Math.round(me(fe.b * 255, 0, 255));
  }
  getHexString(t = Xe) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Wt.workingColorSpace) {
    Wt.fromWorkingColorSpace(fe.copy(this), e);
    const i = fe.r, s = fe.g, r = fe.b, o = Math.max(i, s, r), a = Math.min(i, s, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case i:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - i) / u + 2;
          break;
        case r:
          l = (i - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Wt.workingColorSpace) {
    return Wt.fromWorkingColorSpace(fe.copy(this), e), t.r = fe.r, t.g = fe.g, t.b = fe.b, t;
  }
  getStyle(t = Xe) {
    Wt.fromWorkingColorSpace(fe.copy(this), t);
    const e = fe.r, i = fe.g, s = fe.b;
    return t !== Xe ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, i) {
    return this.getHSL(gi), this.setHSL(gi.h + t, gi.s + e, gi.l + i);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, i) {
    return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this;
  }
  lerpHSL(t, e) {
    this.getHSL(gi), t.getHSL(es);
    const i = ir(gi.h, es.h, e), s = ir(gi.s, es.s, e), r = ir(gi.l, es.l, e);
    return this.setHSL(i, s, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, i = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * i + r[6] * s, this.g = r[1] * e + r[4] * i + r[7] * s, this.b = r[2] * e + r[5] * i + r[8] * s, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const fe = /* @__PURE__ */ new Mt();
Mt.NAMES = hc;
let Qh = 0;
class Mn extends Vi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qh++ }), this.uuid = kn(), this.name = "", this.type = "Material", this.blending = hn, this.side = yi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Yr, this.blendDst = Xr, this.blendEquation = Pi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Mt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Oi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ca, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yi, this.stencilZFail = Yi, this.stencilZPass = Yi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const i = t[e];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const s = this[e];
        if (s === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== hn && (i.blending = this.blending), this.side !== yi && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== Yr && (i.blendSrc = this.blendSrc), this.blendDst !== Xr && (i.blendDst = this.blendDst), this.blendEquation !== Pi && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Oi && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ca && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Yi && (i.stencilFail = this.stencilFail), this.stencilZFail !== Yi && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Yi && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const r = s(t.textures), o = s(t.images);
      r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let i = null;
    if (e !== null) {
      const s = e.length;
      i = new Array(s);
      for (let r = 0; r !== s; ++r)
        i[r] = e[r].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Jo extends Mn {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Mt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ci(), this.combine = Ql, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const re = /* @__PURE__ */ new B(), is = /* @__PURE__ */ new St();
class ae {
  constructor(t, e, i = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = i, this.usage = Aa, this.updateRanges = [], this.gpuType = Qe, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, i) {
    t *= this.itemSize, i *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[t + s] = e.array[i + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, i = this.count; e < i; e++)
        is.fromBufferAttribute(this, e), is.applyMatrix3(t), this.setXY(e, is.x, is.y);
    else if (this.itemSize === 3)
      for (let e = 0, i = this.count; e < i; e++)
        re.fromBufferAttribute(this, e), re.applyMatrix3(t), this.setXYZ(e, re.x, re.y, re.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.count; e < i; e++)
      re.fromBufferAttribute(this, e), re.applyMatrix4(t), this.setXYZ(e, re.x, re.y, re.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++)
      re.fromBufferAttribute(this, e), re.applyNormalMatrix(t), this.setXYZ(e, re.x, re.y, re.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++)
      re.fromBufferAttribute(this, e), re.transformDirection(t), this.setXYZ(e, re.x, re.y, re.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.itemSize + e];
    return this.normalized && (i = _n(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = ye(i, this.array)), this.array[t * this.itemSize + e] = i, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = _n(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = ye(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = _n(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = ye(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = _n(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = ye(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = _n(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = ye(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, i) {
    return t *= this.itemSize, this.normalized && (e = ye(e, this.array), i = ye(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, s) {
    return t *= this.itemSize, this.normalized && (e = ye(e, this.array), i = ye(i, this.array), s = ye(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, i, s, r) {
    return t *= this.itemSize, this.normalized && (e = ye(e, this.array), i = ye(i, this.array), s = ye(s, this.array), r = ye(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== Aa && (t.usage = this.usage), t;
  }
}
class uc extends ae {
  constructor(t, e, i) {
    super(new Uint16Array(t), e, i);
  }
}
class dc extends ae {
  constructor(t, e, i) {
    super(new Uint32Array(t), e, i);
  }
}
class We extends ae {
  constructor(t, e, i) {
    super(new Float32Array(t), e, i);
  }
}
let jh = 0;
const Be = /* @__PURE__ */ new $t(), xr = /* @__PURE__ */ new Ce(), nn = /* @__PURE__ */ new B(), Te = /* @__PURE__ */ new Hn(), Dn = /* @__PURE__ */ new Hn(), he = /* @__PURE__ */ new B();
class Ae extends Vi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: jh++ }), this.uuid = kn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (ac(t) ? dc : uc)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, i = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const r = new Dt().getNormalMatrix(t);
      i.applyNormalMatrix(r), i.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Be.makeRotationFromQuaternion(t), this.applyMatrix4(Be), this;
  }
  rotateX(t) {
    return Be.makeRotationX(t), this.applyMatrix4(Be), this;
  }
  rotateY(t) {
    return Be.makeRotationY(t), this.applyMatrix4(Be), this;
  }
  rotateZ(t) {
    return Be.makeRotationZ(t), this.applyMatrix4(Be), this;
  }
  translate(t, e, i) {
    return Be.makeTranslation(t, e, i), this.applyMatrix4(Be), this;
  }
  scale(t, e, i) {
    return Be.makeScale(t, e, i), this.applyMatrix4(Be), this;
  }
  lookAt(t) {
    return xr.lookAt(t), xr.updateMatrix(), this.applyMatrix4(xr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(nn).negate(), this.translate(nn.x, nn.y, nn.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new We(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Hn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let i = 0, s = e.length; i < s; i++) {
          const r = e[i];
          Te.setFromBufferAttribute(r), this.morphTargetsRelative ? (he.addVectors(this.boundingBox.min, Te.min), this.boundingBox.expandByPoint(he), he.addVectors(this.boundingBox.max, Te.max), this.boundingBox.expandByPoint(he)) : (this.boundingBox.expandByPoint(Te.min), this.boundingBox.expandByPoint(Te.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new In());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Te.setFromBufferAttribute(t), e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r];
          Dn.setFromBufferAttribute(a), this.morphTargetsRelative ? (he.addVectors(Te.min, Dn.min), Te.expandByPoint(he), he.addVectors(Te.max, Dn.max), Te.expandByPoint(he)) : (Te.expandByPoint(Dn.min), Te.expandByPoint(Dn.max));
        }
      Te.getCenter(i);
      let s = 0;
      for (let r = 0, o = t.count; r < o; r++)
        he.fromBufferAttribute(t, r), s = Math.max(s, i.distanceToSquared(he));
      if (e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            he.fromBufferAttribute(a, c), l && (nn.fromBufferAttribute(t, c), he.add(nn)), s = Math.max(s, i.distanceToSquared(he));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ae(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let P = 0; P < i.count; P++)
      a[P] = new B(), l[P] = new B();
    const c = new B(), h = new B(), u = new B(), p = new St(), g = new St(), v = new St(), m = new B(), f = new B();
    function d(P, j, C) {
      c.fromBufferAttribute(i, P), h.fromBufferAttribute(i, j), u.fromBufferAttribute(i, C), p.fromBufferAttribute(r, P), g.fromBufferAttribute(r, j), v.fromBufferAttribute(r, C), h.sub(c), u.sub(c), g.sub(p), v.sub(p);
      const I = 1 / (g.x * v.y - v.x * g.y);
      isFinite(I) && (m.copy(h).multiplyScalar(v.y).addScaledVector(u, -g.y).multiplyScalar(I), f.copy(u).multiplyScalar(g.x).addScaledVector(h, -v.x).multiplyScalar(I), a[P].add(m), a[j].add(m), a[C].add(m), l[P].add(f), l[j].add(f), l[C].add(f));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: t.count
    }]);
    for (let P = 0, j = y.length; P < j; ++P) {
      const C = y[P], I = C.start, H = C.count;
      for (let k = I, V = I + H; k < V; k += 3)
        d(
          t.getX(k + 0),
          t.getX(k + 1),
          t.getX(k + 2)
        );
    }
    const S = new B(), M = new B(), E = new B(), _ = new B();
    function w(P) {
      E.fromBufferAttribute(s, P), _.copy(E);
      const j = a[P];
      S.copy(j), S.sub(E.multiplyScalar(E.dot(j))).normalize(), M.crossVectors(_, j);
      const I = M.dot(l[P]) < 0 ? -1 : 1;
      o.setXYZW(P, S.x, S.y, S.z, I);
    }
    for (let P = 0, j = y.length; P < j; ++P) {
      const C = y[P], I = C.start, H = C.count;
      for (let k = I, V = I + H; k < V; k += 3)
        w(t.getX(k + 0)), w(t.getX(k + 1)), w(t.getX(k + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new ae(new Float32Array(e.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let p = 0, g = i.count; p < g; p++)
          i.setXYZ(p, 0, 0, 0);
      const s = new B(), r = new B(), o = new B(), a = new B(), l = new B(), c = new B(), h = new B(), u = new B();
      if (t)
        for (let p = 0, g = t.count; p < g; p += 3) {
          const v = t.getX(p + 0), m = t.getX(p + 1), f = t.getX(p + 2);
          s.fromBufferAttribute(e, v), r.fromBufferAttribute(e, m), o.fromBufferAttribute(e, f), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), a.fromBufferAttribute(i, v), l.fromBufferAttribute(i, m), c.fromBufferAttribute(i, f), a.add(h), l.add(h), c.add(h), i.setXYZ(v, a.x, a.y, a.z), i.setXYZ(m, l.x, l.y, l.z), i.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let p = 0, g = e.count; p < g; p += 3)
          s.fromBufferAttribute(e, p + 0), r.fromBufferAttribute(e, p + 1), o.fromBufferAttribute(e, p + 2), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), i.setXYZ(p + 0, h.x, h.y, h.z), i.setXYZ(p + 1, h.x, h.y, h.z), i.setXYZ(p + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, i = t.count; e < i; e++)
      he.fromBufferAttribute(t, e), he.normalize(), t.setXYZ(e, he.x, he.y, he.z);
  }
  toNonIndexed() {
    function t(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, p = new c.constructor(l.length * h);
      let g = 0, v = 0;
      for (let m = 0, f = l.length; m < f; m++) {
        a.isInterleavedBufferAttribute ? g = l[m] * a.data.stride + a.offset : g = l[m] * h;
        for (let d = 0; d < h; d++)
          p[v++] = c[g++];
      }
      return new ae(p, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ae(), i = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = t(l, i);
      e.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const p = c[h], g = t(p, i);
        l.push(g);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, p = c.length; u < p; u++) {
        const g = c[u];
        h.push(g.toJSON(t.data));
      }
      h.length > 0 && (s[l] = h, r = !0);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone(e));
    const s = t.attributes;
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let p = 0, g = u.length; p < g; p++)
        h.push(u[p].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ba = /* @__PURE__ */ new $t(), Ti = /* @__PURE__ */ new zn(), ns = /* @__PURE__ */ new In(), Pa = /* @__PURE__ */ new B(), ss = /* @__PURE__ */ new B(), rs = /* @__PURE__ */ new B(), os = /* @__PURE__ */ new B(), yr = /* @__PURE__ */ new B(), as = /* @__PURE__ */ new B(), Ua = /* @__PURE__ */ new B(), ls = /* @__PURE__ */ new B();
class Ne extends Ce {
  constructor(t = new Ae(), e = new Jo()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const i = this.geometry, s = i.attributes.position, r = i.morphAttributes.position, o = i.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const a = this.morphTargetInfluences;
    if (r && a) {
      as.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && (yr.fromBufferAttribute(u, t), o ? as.addScaledVector(yr, h) : as.addScaledVector(yr.sub(e), h));
      }
      e.add(as);
    }
    return e;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), ns.copy(i.boundingSphere), ns.applyMatrix4(r), Ti.copy(t.ray).recast(t.near), !(ns.containsPoint(Ti.origin) === !1 && (Ti.intersectSphere(ns, Pa) === null || Ti.origin.distanceToSquared(Pa) > (t.far - t.near) ** 2)) && (Ba.copy(r).invert(), Ti.copy(t.ray).applyMatrix4(Ba), !(i.boundingBox !== null && Ti.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(t, e, Ti)));
  }
  _computeIntersections(t, e, i) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, p = r.groups, g = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let v = 0, m = p.length; v < m; v++) {
          const f = p[v], d = o[f.materialIndex], y = Math.max(f.start, g.start), S = Math.min(a.count, Math.min(f.start + f.count, g.start + g.count));
          for (let M = y, E = S; M < E; M += 3) {
            const _ = a.getX(M), w = a.getX(M + 1), P = a.getX(M + 2);
            s = cs(this, d, t, i, c, h, u, _, w, P), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = f.materialIndex, e.push(s));
          }
        }
      else {
        const v = Math.max(0, g.start), m = Math.min(a.count, g.start + g.count);
        for (let f = v, d = m; f < d; f += 3) {
          const y = a.getX(f), S = a.getX(f + 1), M = a.getX(f + 2);
          s = cs(this, o, t, i, c, h, u, y, S, M), s && (s.faceIndex = Math.floor(f / 3), e.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let v = 0, m = p.length; v < m; v++) {
          const f = p[v], d = o[f.materialIndex], y = Math.max(f.start, g.start), S = Math.min(l.count, Math.min(f.start + f.count, g.start + g.count));
          for (let M = y, E = S; M < E; M += 3) {
            const _ = M, w = M + 1, P = M + 2;
            s = cs(this, d, t, i, c, h, u, _, w, P), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = f.materialIndex, e.push(s));
          }
        }
      else {
        const v = Math.max(0, g.start), m = Math.min(l.count, g.start + g.count);
        for (let f = v, d = m; f < d; f += 3) {
          const y = f, S = f + 1, M = f + 2;
          s = cs(this, o, t, i, c, h, u, y, S, M), s && (s.faceIndex = Math.floor(f / 3), e.push(s));
        }
      }
  }
}
function qh(n, t, e, i, s, r, o, a) {
  let l;
  if (t.side === Me ? l = i.intersectTriangle(o, r, s, !0, a) : l = i.intersectTriangle(s, r, o, t.side === yi, a), l === null) return null;
  ls.copy(a), ls.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(ls);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: ls.clone(),
    object: n
  };
}
function cs(n, t, e, i, s, r, o, a, l, c) {
  n.getVertexPosition(a, ss), n.getVertexPosition(l, rs), n.getVertexPosition(c, os);
  const h = qh(n, t, e, i, ss, rs, os, Ua);
  if (h) {
    const u = new B();
    Ve.getBarycoord(Ua, ss, rs, os, u), s && (h.uv = Ve.getInterpolatedAttribute(s, a, l, c, u, new St())), r && (h.uv1 = Ve.getInterpolatedAttribute(r, a, l, c, u, new St())), o && (h.normal = Ve.getInterpolatedAttribute(o, a, l, c, u, new B()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const p = {
      a,
      b: l,
      c,
      normal: new B(),
      materialIndex: 0
    };
    Ve.getNormal(ss, rs, os, p.normal), h.face = p, h.barycoord = u;
  }
  return h;
}
class Vn extends Ae {
  constructor(t = 1, e = 1, i = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: s,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let p = 0, g = 0;
    v("z", "y", "x", -1, -1, i, e, t, o, r, 0), v("z", "y", "x", 1, -1, i, e, -t, o, r, 1), v("x", "z", "y", 1, 1, t, i, e, s, o, 2), v("x", "z", "y", 1, -1, t, i, -e, s, o, 3), v("x", "y", "z", 1, -1, t, e, i, s, r, 4), v("x", "y", "z", -1, -1, t, e, -i, s, r, 5), this.setIndex(l), this.setAttribute("position", new We(c, 3)), this.setAttribute("normal", new We(h, 3)), this.setAttribute("uv", new We(u, 2));
    function v(m, f, d, y, S, M, E, _, w, P, j) {
      const C = M / w, I = E / P, H = M / 2, k = E / 2, V = _ / 2, X = w + 1, F = P + 1;
      let Q = 0, O = 0;
      const it = new B();
      for (let st = 0; st < F; st++) {
        const et = st * I - k;
        for (let Ft = 0; Ft < X; Ft++) {
          const Bt = Ft * C - H;
          it[m] = Bt * y, it[f] = et * S, it[d] = V, c.push(it.x, it.y, it.z), it[m] = 0, it[f] = 0, it[d] = _ > 0 ? 1 : -1, h.push(it.x, it.y, it.z), u.push(Ft / w), u.push(1 - st / P), Q += 1;
        }
      }
      for (let st = 0; st < P; st++)
        for (let et = 0; et < w; et++) {
          const Ft = p + et + X * st, Bt = p + et + X * (st + 1), K = p + (et + 1) + X * (st + 1), J = p + (et + 1) + X * st;
          l.push(Ft, Bt, J), l.push(Bt, K, J), O += 6;
        }
      a.addGroup(g, O, j), g += O, p += Q;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Vn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Cn(n) {
  const t = {};
  for (const e in n) {
    t[e] = {};
    for (const i in n[e]) {
      const s = n[e][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][i] = null) : t[e][i] = s.clone() : Array.isArray(s) ? t[e][i] = s.slice() : t[e][i] = s;
    }
  }
  return t;
}
function ge(n) {
  const t = {};
  for (let e = 0; e < n.length; e++) {
    const i = Cn(n[e]);
    for (const s in i)
      t[s] = i[s];
  }
  return t;
}
function Jh(n) {
  const t = [];
  for (let e = 0; e < n.length; e++)
    t.push(n[e].clone());
  return t;
}
function fc(n) {
  const t = n.getRenderTarget();
  return t === null ? n.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Wt.workingColorSpace;
}
const Ns = { clone: Cn, merge: ge };
var $h = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, tu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class te extends Mn {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = $h, this.fragmentShader = tu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Cn(t.uniforms), this.uniformsGroups = Jh(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? e.uniforms[s] = {
        type: "t",
        value: o.toJSON(t).uuid
      } : o && o.isColor ? e.uniforms[s] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? e.uniforms[s] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? e.uniforms[s] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? e.uniforms[s] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? e.uniforms[s] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? e.uniforms[s] = {
        type: "m4",
        value: o.toArray()
      } : e.uniforms[s] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const i = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (i[s] = !0);
    return Object.keys(i).length > 0 && (e.extensions = i), e;
  }
}
class pc extends Ce {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new $t(), this.projectionMatrix = new $t(), this.projectionMatrixInverse = new $t(), this.coordinateSystem = ai;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mi = /* @__PURE__ */ new B(), Fa = /* @__PURE__ */ new St(), Na = /* @__PURE__ */ new St();
class Ue extends pc {
  constructor(t = 50, e = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Bo * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Ts * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Bo * 2 * Math.atan(
      Math.tan(Ts * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, i) {
    mi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(mi.x, mi.y).multiplyScalar(-t / mi.z), mi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(mi.x, mi.y).multiplyScalar(-t / mi.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Fa, Na), e.subVectors(Na, Fa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, i, s, r, o) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Ts * 0.5 * this.fov) / this.zoom, i = 2 * e, s = this.aspect * i, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, e -= o.offsetY * i / c, s *= o.width / l, i *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - i, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const sn = -90, rn = 1;
class eu extends Ce {
  constructor(t, e, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Ue(sn, rn, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Ue(sn, rn, t, e);
    r.layers = this.layers, this.add(r);
    const o = new Ue(sn, rn, t, e);
    o.layers = this.layers, this.add(o);
    const a = new Ue(sn, rn, t, e);
    a.layers = this.layers, this.add(a);
    const l = new Ue(sn, rn, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Ue(sn, rn, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [i, s, r, o, a, l] = e;
    for (const c of e) this.remove(c);
    if (t === ai)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === Us)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, h] = this.children, u = t.getRenderTarget(), p = t.getActiveCubeFace(), g = t.getActiveMipmapLevel(), v = t.xr.enabled;
    t.xr.enabled = !1;
    const m = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0, s), t.render(e, r), t.setRenderTarget(i, 1, s), t.render(e, o), t.setRenderTarget(i, 2, s), t.render(e, a), t.setRenderTarget(i, 3, s), t.render(e, l), t.setRenderTarget(i, 4, s), t.render(e, c), i.texture.generateMipmaps = m, t.setRenderTarget(i, 5, s), t.render(e, h), t.setRenderTarget(u, p, g), t.xr.enabled = v, i.texture.needsPMREMUpdate = !0;
  }
}
class gc extends ve {
  constructor(t, e, i, s, r, o, a, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : pn, super(t, e, i, s, r, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class iu extends Ge {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const i = { width: t, height: t, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new gc(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Re;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const i = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Vn(5, 5, 5), r = new te({
      name: "CubemapFromEquirect",
      uniforms: Cn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: Me,
      blending: Ke
    });
    r.uniforms.tEquirect.value = e;
    const o = new Ne(s, r), a = e.minFilter;
    return e.minFilter === Ni && (e.minFilter = Re), new eu(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(t, e, i, s) {
    const r = t.getRenderTarget();
    for (let o = 0; o < 6; o++)
      t.setRenderTarget(this, o), t.clear(e, i, s);
    t.setRenderTarget(r);
  }
}
const Ir = /* @__PURE__ */ new B(), nu = /* @__PURE__ */ new B(), su = /* @__PURE__ */ new Dt();
class vi {
  constructor(t = new B(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, i, s) {
    return this.normal.set(t, e, i), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, i) {
    const s = Ir.subVectors(i, e).cross(nu.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const i = t.delta(Ir), s = this.normal.dot(i);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(i, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
    return e < 0 && i > 0 || i < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const i = e || su.getNormalMatrix(t), s = this.coplanarPoint(Ir).applyMatrix4(t), r = this.normal.applyMatrix3(i).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Li = /* @__PURE__ */ new In(), hs = /* @__PURE__ */ new B();
class mc {
  constructor(t = new vi(), e = new vi(), i = new vi(), s = new vi(), r = new vi(), o = new vi()) {
    this.planes = [t, e, i, s, r, o];
  }
  set(t, e, i, s, r, o) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
  }
  copy(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++)
      e[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t, e = ai) {
    const i = this.planes, s = t.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], h = s[5], u = s[6], p = s[7], g = s[8], v = s[9], m = s[10], f = s[11], d = s[12], y = s[13], S = s[14], M = s[15];
    if (i[0].setComponents(l - r, p - c, f - g, M - d).normalize(), i[1].setComponents(l + r, p + c, f + g, M + d).normalize(), i[2].setComponents(l + o, p + h, f + v, M + y).normalize(), i[3].setComponents(l - o, p - h, f - v, M - y).normalize(), i[4].setComponents(l - a, p - u, f - m, M - S).normalize(), e === ai)
      i[5].setComponents(l + a, p + u, f + m, M + S).normalize();
    else if (e === Us)
      i[5].setComponents(a, u, m, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Li);
  }
  intersectsSprite(t) {
    return Li.center.set(0, 0, 0), Li.radius = 0.7071067811865476, Li.applyMatrix4(t.matrixWorld), this.intersectsSphere(Li);
  }
  intersectsSphere(t) {
    const e = this.planes, i = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(i) < s)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = e[i];
      if (hs.x = s.normal.x > 0 ? t.max.x : t.min.x, hs.y = s.normal.y > 0 ? t.max.y : t.min.y, hs.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(hs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++)
      if (e[i].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function vc() {
  let n = null, t = !1, e = null, i = null;
  function s(r, o) {
    e(r, o), i = n.requestAnimationFrame(s);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (i = n.requestAnimationFrame(s), t = !0);
    },
    stop: function() {
      n.cancelAnimationFrame(i), t = !1;
    },
    setAnimationLoop: function(r) {
      e = r;
    },
    setContext: function(r) {
      n = r;
    }
  };
}
function ru(n) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, p = n.createBuffer();
    n.bindBuffer(l, p), n.bufferData(l, c, h), a.onUploadCallback();
    let g;
    if (c instanceof Float32Array)
      g = n.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? g = n.HALF_FLOAT : g = n.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      g = n.SHORT;
    else if (c instanceof Uint32Array)
      g = n.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      g = n.INT;
    else if (c instanceof Int8Array)
      g = n.BYTE;
    else if (c instanceof Uint8Array)
      g = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      g = n.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: p,
      type: g,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: u
    };
  }
  function i(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (n.bindBuffer(c, a), u.length === 0)
      n.bufferSubData(c, 0, h);
    else {
      u.sort((g, v) => g.start - v.start);
      let p = 0;
      for (let g = 1; g < u.length; g++) {
        const v = u[p], m = u[g];
        m.start <= v.start + v.count + 1 ? v.count = Math.max(
          v.count,
          m.start + m.count - v.start
        ) : (++p, u[p] = m);
      }
      u.length = p + 1;
      for (let g = 0, v = u.length; g < v; g++) {
        const m = u[g];
        n.bufferSubData(
          c,
          m.start * h.BYTES_PER_ELEMENT,
          h,
          m.start,
          m.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = t.get(a);
    l && (n.deleteBuffer(l.buffer), t.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = t.get(a);
      (!h || h.version < a.version) && t.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    const c = t.get(a);
    if (c === void 0)
      t.set(a, e(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, a, l), c.version = a.version;
    }
  }
  return {
    get: s,
    remove: r,
    update: o
  };
}
class Zs extends Ae {
  constructor(t = 1, e = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: s
    };
    const r = t / 2, o = e / 2, a = Math.floor(i), l = Math.floor(s), c = a + 1, h = l + 1, u = t / a, p = e / l, g = [], v = [], m = [], f = [];
    for (let d = 0; d < h; d++) {
      const y = d * p - o;
      for (let S = 0; S < c; S++) {
        const M = S * u - r;
        v.push(M, -y, 0), m.push(0, 0, 1), f.push(S / a), f.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let y = 0; y < a; y++) {
        const S = y + c * d, M = y + c * (d + 1), E = y + 1 + c * (d + 1), _ = y + 1 + c * d;
        g.push(S, M, _), g.push(M, E, _);
      }
    this.setIndex(g), this.setAttribute("position", new We(v, 3)), this.setAttribute("normal", new We(m, 3)), this.setAttribute("uv", new We(f, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Zs(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var ou = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, au = `#ifdef USE_ALPHAHASH
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
#endif`, lu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, cu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, uu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, du = `#ifdef USE_AOMAP
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
#endif`, fu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, pu = `#ifdef USE_BATCHING
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
#endif`, gu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, mu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, vu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Cu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Au = `#ifdef USE_IRIDESCENCE
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
#endif`, Su = `#ifdef USE_BUMPMAP
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
#endif`, xu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, yu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Iu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Mu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, bu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, wu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, _u = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Eu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Tu = `#define PI 3.141592653589793
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
} // validated`, Lu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Ru = `vec3 transformedNormal = objectNormal;
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
#endif`, Du = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Pu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Uu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Fu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Nu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Gu = `#ifdef USE_ENVMAP
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
#endif`, Ou = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ku = `#ifdef USE_ENVMAP
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
#endif`, Hu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, zu = `#ifdef USE_ENVMAP
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
#endif`, Vu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ku = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Wu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Yu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Xu = `#ifdef USE_GRADIENTMAP
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
}`, Zu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Qu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ju = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, qu = `uniform bool receiveShadow;
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
#endif`, Ju = `#ifdef USE_ENVMAP
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
#endif`, $u = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, td = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ed = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, id = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, nd = `PhysicalMaterial material;
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
#endif`, sd = `struct PhysicalMaterial {
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
}`, rd = `
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
#endif`, od = `#if defined( RE_IndirectDiffuse )
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
#endif`, ad = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ld = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, cd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, hd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ud = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, dd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, fd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, pd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, gd = `#if defined( USE_POINTS_UV )
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
#endif`, md = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, vd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Cd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Ad = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Sd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, xd = `#ifdef USE_MORPHTARGETS
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
#endif`, yd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Id = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Md = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, bd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, wd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, _d = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ed = `#ifdef USE_NORMALMAP
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
#endif`, Td = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ld = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Rd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Dd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Bd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Pd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Ud = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Fd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Nd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Gd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Od = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, kd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Hd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, zd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Vd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Kd = `float getShadowMask() {
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
}`, Wd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Yd = `#ifdef USE_SKINNING
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
#endif`, Xd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Zd = `#ifdef USE_SKINNING
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
#endif`, Qd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, jd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, qd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Jd = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, $d = `#ifdef USE_TRANSMISSION
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
#endif`, tf = `#ifdef USE_TRANSMISSION
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
#endif`, ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, nf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, sf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, rf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const of = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, af = `uniform sampler2D t2D;
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
}`, lf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, cf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, hf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, uf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, df = `#include <common>
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
}`, ff = `#if DEPTH_PACKING == 3200
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
}`, pf = `#define DISTANCE
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
}`, gf = `#define DISTANCE
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
}`, mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, vf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Cf = `uniform float scale;
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
}`, Af = `uniform vec3 diffuse;
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
}`, Sf = `#include <common>
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
}`, xf = `uniform vec3 diffuse;
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
}`, yf = `#define LAMBERT
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
}`, If = `#define LAMBERT
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
}`, Mf = `#define MATCAP
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
}`, bf = `#define MATCAP
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
}`, wf = `#define NORMAL
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
}`, _f = `#define NORMAL
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
}`, Ef = `#define PHONG
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
}`, Tf = `#define PHONG
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
}`, Lf = `#define STANDARD
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
}`, Rf = `#define STANDARD
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
}`, Df = `#define TOON
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
}`, Bf = `#define TOON
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
}`, Pf = `uniform float size;
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
}`, Uf = `uniform vec3 diffuse;
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
}`, Ff = `#include <common>
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
}`, Nf = `uniform vec3 color;
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
}`, Gf = `uniform float rotation;
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
}`, Of = `uniform vec3 diffuse;
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
}`, Rt = {
  alphahash_fragment: ou,
  alphahash_pars_fragment: au,
  alphamap_fragment: lu,
  alphamap_pars_fragment: cu,
  alphatest_fragment: hu,
  alphatest_pars_fragment: uu,
  aomap_fragment: du,
  aomap_pars_fragment: fu,
  batching_pars_vertex: pu,
  batching_vertex: gu,
  begin_vertex: mu,
  beginnormal_vertex: vu,
  bsdfs: Cu,
  iridescence_fragment: Au,
  bumpmap_pars_fragment: Su,
  clipping_planes_fragment: xu,
  clipping_planes_pars_fragment: yu,
  clipping_planes_pars_vertex: Iu,
  clipping_planes_vertex: Mu,
  color_fragment: bu,
  color_pars_fragment: wu,
  color_pars_vertex: _u,
  color_vertex: Eu,
  common: Tu,
  cube_uv_reflection_fragment: Lu,
  defaultnormal_vertex: Ru,
  displacementmap_pars_vertex: Du,
  displacementmap_vertex: Bu,
  emissivemap_fragment: Pu,
  emissivemap_pars_fragment: Uu,
  colorspace_fragment: Fu,
  colorspace_pars_fragment: Nu,
  envmap_fragment: Gu,
  envmap_common_pars_fragment: Ou,
  envmap_pars_fragment: ku,
  envmap_pars_vertex: Hu,
  envmap_physical_pars_fragment: Ju,
  envmap_vertex: zu,
  fog_vertex: Vu,
  fog_pars_vertex: Ku,
  fog_fragment: Wu,
  fog_pars_fragment: Yu,
  gradientmap_pars_fragment: Xu,
  lightmap_pars_fragment: Zu,
  lights_lambert_fragment: Qu,
  lights_lambert_pars_fragment: ju,
  lights_pars_begin: qu,
  lights_toon_fragment: $u,
  lights_toon_pars_fragment: td,
  lights_phong_fragment: ed,
  lights_phong_pars_fragment: id,
  lights_physical_fragment: nd,
  lights_physical_pars_fragment: sd,
  lights_fragment_begin: rd,
  lights_fragment_maps: od,
  lights_fragment_end: ad,
  logdepthbuf_fragment: ld,
  logdepthbuf_pars_fragment: cd,
  logdepthbuf_pars_vertex: hd,
  logdepthbuf_vertex: ud,
  map_fragment: dd,
  map_pars_fragment: fd,
  map_particle_fragment: pd,
  map_particle_pars_fragment: gd,
  metalnessmap_fragment: md,
  metalnessmap_pars_fragment: vd,
  morphinstance_vertex: Cd,
  morphcolor_vertex: Ad,
  morphnormal_vertex: Sd,
  morphtarget_pars_vertex: xd,
  morphtarget_vertex: yd,
  normal_fragment_begin: Id,
  normal_fragment_maps: Md,
  normal_pars_fragment: bd,
  normal_pars_vertex: wd,
  normal_vertex: _d,
  normalmap_pars_fragment: Ed,
  clearcoat_normal_fragment_begin: Td,
  clearcoat_normal_fragment_maps: Ld,
  clearcoat_pars_fragment: Rd,
  iridescence_pars_fragment: Dd,
  opaque_fragment: Bd,
  packing: Pd,
  premultiplied_alpha_fragment: Ud,
  project_vertex: Fd,
  dithering_fragment: Nd,
  dithering_pars_fragment: Gd,
  roughnessmap_fragment: Od,
  roughnessmap_pars_fragment: kd,
  shadowmap_pars_fragment: Hd,
  shadowmap_pars_vertex: zd,
  shadowmap_vertex: Vd,
  shadowmask_pars_fragment: Kd,
  skinbase_vertex: Wd,
  skinning_pars_vertex: Yd,
  skinning_vertex: Xd,
  skinnormal_vertex: Zd,
  specularmap_fragment: Qd,
  specularmap_pars_fragment: jd,
  tonemapping_fragment: qd,
  tonemapping_pars_fragment: Jd,
  transmission_fragment: $d,
  transmission_pars_fragment: tf,
  uv_pars_fragment: ef,
  uv_pars_vertex: nf,
  uv_vertex: sf,
  worldpos_vertex: rf,
  background_vert: of,
  background_frag: af,
  backgroundCube_vert: lf,
  backgroundCube_frag: cf,
  cube_vert: hf,
  cube_frag: uf,
  depth_vert: df,
  depth_frag: ff,
  distanceRGBA_vert: pf,
  distanceRGBA_frag: gf,
  equirect_vert: mf,
  equirect_frag: vf,
  linedashed_vert: Cf,
  linedashed_frag: Af,
  meshbasic_vert: Sf,
  meshbasic_frag: xf,
  meshlambert_vert: yf,
  meshlambert_frag: If,
  meshmatcap_vert: Mf,
  meshmatcap_frag: bf,
  meshnormal_vert: wf,
  meshnormal_frag: _f,
  meshphong_vert: Ef,
  meshphong_frag: Tf,
  meshphysical_vert: Lf,
  meshphysical_frag: Rf,
  meshtoon_vert: Df,
  meshtoon_frag: Bf,
  points_vert: Pf,
  points_frag: Uf,
  shadow_vert: Ff,
  shadow_frag: Nf,
  sprite_vert: Gf,
  sprite_frag: Of
}, nt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Mt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Dt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Dt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Dt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Dt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Dt() },
    normalScale: { value: /* @__PURE__ */ new St(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Dt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Dt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Mt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Mt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Dt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Dt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Mt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new St(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Dt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Dt() },
    alphaTest: { value: 0 }
  }
}, Ze = {
  basic: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.fog
    ]),
    vertexShader: Rt.meshbasic_vert,
    fragmentShader: Rt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Mt(0) }
      }
    ]),
    vertexShader: Rt.meshlambert_vert,
    fragmentShader: Rt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Mt(0) },
        specular: { value: /* @__PURE__ */ new Mt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Rt.meshphong_vert,
    fragmentShader: Rt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.roughnessmap,
      nt.metalnessmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Mt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Rt.meshphysical_vert,
    fragmentShader: Rt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.gradientmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Mt(0) }
      }
    ]),
    vertexShader: Rt.meshtoon_vert,
    fragmentShader: Rt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Rt.meshmatcap_vert,
    fragmentShader: Rt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ge([
      nt.points,
      nt.fog
    ]),
    vertexShader: Rt.points_vert,
    fragmentShader: Rt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Rt.linedashed_vert,
    fragmentShader: Rt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.displacementmap
    ]),
    vertexShader: Rt.depth_vert,
    fragmentShader: Rt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Rt.meshnormal_vert,
    fragmentShader: Rt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ge([
      nt.sprite,
      nt.fog
    ]),
    vertexShader: Rt.sprite_vert,
    fragmentShader: Rt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Dt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Rt.background_vert,
    fragmentShader: Rt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Dt() }
    },
    vertexShader: Rt.backgroundCube_vert,
    fragmentShader: Rt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Rt.cube_vert,
    fragmentShader: Rt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Rt.equirect_vert,
    fragmentShader: Rt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ge([
      nt.common,
      nt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Rt.distanceRGBA_vert,
    fragmentShader: Rt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ge([
      nt.lights,
      nt.fog,
      {
        color: { value: /* @__PURE__ */ new Mt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Rt.shadow_vert,
    fragmentShader: Rt.shadow_frag
  }
};
Ze.physical = {
  uniforms: /* @__PURE__ */ ge([
    Ze.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Dt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Dt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new St(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Dt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Dt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Dt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Mt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Dt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Dt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Dt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new St() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Dt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Mt(0) },
      specularColor: { value: /* @__PURE__ */ new Mt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Dt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Dt() },
      anisotropyVector: { value: /* @__PURE__ */ new St() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Dt() }
    }
  ]),
  vertexShader: Rt.meshphysical_vert,
  fragmentShader: Rt.meshphysical_frag
};
const us = { r: 0, b: 0, g: 0 }, Ri = /* @__PURE__ */ new ci(), kf = /* @__PURE__ */ new $t();
function Hf(n, t, e, i, s, r, o) {
  const a = new Mt(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, p = 0, g = null;
  function v(y) {
    let S = y.isScene === !0 ? y.background : null;
    return S && S.isTexture && (S = (y.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function m(y) {
    let S = !1;
    const M = v(y);
    M === null ? d(a, l) : M && M.isColor && (d(M, 1), S = !0);
    const E = n.xr.getEnvironmentBlendMode();
    E === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : E === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (n.autoClear || S) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function f(y, S) {
    const M = v(S);
    M && (M.isCubeTexture || M.mapping === Ws) ? (h === void 0 && (h = new Ne(
      new Vn(1, 1, 1),
      new te({
        name: "BackgroundCubeMaterial",
        uniforms: Cn(Ze.backgroundCube.uniforms),
        vertexShader: Ze.backgroundCube.vertexShader,
        fragmentShader: Ze.backgroundCube.fragmentShader,
        side: Me,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(E, _, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(h)), Ri.copy(S.backgroundRotation), Ri.x *= -1, Ri.y *= -1, Ri.z *= -1, M.isCubeTexture && M.isRenderTargetTexture === !1 && (Ri.y *= -1, Ri.z *= -1), h.material.uniforms.envMap.value = M, h.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Ri)), h.material.toneMapped = Wt.getTransfer(M.colorSpace) !== Jt, (u !== M || p !== M.version || g !== n.toneMapping) && (h.material.needsUpdate = !0, u = M, p = M.version, g = n.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new Ne(
      new Zs(2, 2),
      new te({
        name: "BackgroundMaterial",
        uniforms: Cn(Ze.background.uniforms),
        vertexShader: Ze.background.vertexShader,
        fragmentShader: Ze.background.fragmentShader,
        side: yi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = M, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Wt.getTransfer(M.colorSpace) !== Jt, M.matrixAutoUpdate === !0 && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (u !== M || p !== M.version || g !== n.toneMapping) && (c.material.needsUpdate = !0, u = M, p = M.version, g = n.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(y, S) {
    y.getRGB(us, fc(n)), i.buffers.color.setClear(us.r, us.g, us.b, S, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(y, S = 1) {
      a.set(y), l = S, d(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(y) {
      l = y, d(a, l);
    },
    render: m,
    addToRenderList: f
  };
}
function zf(n, t) {
  const e = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = p(null);
  let r = s, o = !1;
  function a(C, I, H, k, V) {
    let X = !1;
    const F = u(k, H, I);
    r !== F && (r = F, c(r.object)), X = g(C, k, H, V), X && v(C, k, H, V), V !== null && t.update(V, n.ELEMENT_ARRAY_BUFFER), (X || o) && (o = !1, M(C, I, H, k), V !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(C) {
    return n.bindVertexArray(C);
  }
  function h(C) {
    return n.deleteVertexArray(C);
  }
  function u(C, I, H) {
    const k = H.wireframe === !0;
    let V = i[C.id];
    V === void 0 && (V = {}, i[C.id] = V);
    let X = V[I.id];
    X === void 0 && (X = {}, V[I.id] = X);
    let F = X[k];
    return F === void 0 && (F = p(l()), X[k] = F), F;
  }
  function p(C) {
    const I = [], H = [], k = [];
    for (let V = 0; V < e; V++)
      I[V] = 0, H[V] = 0, k[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: H,
      attributeDivisors: k,
      object: C,
      attributes: {},
      index: null
    };
  }
  function g(C, I, H, k) {
    const V = r.attributes, X = I.attributes;
    let F = 0;
    const Q = H.getAttributes();
    for (const O in Q)
      if (Q[O].location >= 0) {
        const st = V[O];
        let et = X[O];
        if (et === void 0 && (O === "instanceMatrix" && C.instanceMatrix && (et = C.instanceMatrix), O === "instanceColor" && C.instanceColor && (et = C.instanceColor)), st === void 0 || st.attribute !== et || et && st.data !== et.data) return !0;
        F++;
      }
    return r.attributesNum !== F || r.index !== k;
  }
  function v(C, I, H, k) {
    const V = {}, X = I.attributes;
    let F = 0;
    const Q = H.getAttributes();
    for (const O in Q)
      if (Q[O].location >= 0) {
        let st = X[O];
        st === void 0 && (O === "instanceMatrix" && C.instanceMatrix && (st = C.instanceMatrix), O === "instanceColor" && C.instanceColor && (st = C.instanceColor));
        const et = {};
        et.attribute = st, st && st.data && (et.data = st.data), V[O] = et, F++;
      }
    r.attributes = V, r.attributesNum = F, r.index = k;
  }
  function m() {
    const C = r.newAttributes;
    for (let I = 0, H = C.length; I < H; I++)
      C[I] = 0;
  }
  function f(C) {
    d(C, 0);
  }
  function d(C, I) {
    const H = r.newAttributes, k = r.enabledAttributes, V = r.attributeDivisors;
    H[C] = 1, k[C] === 0 && (n.enableVertexAttribArray(C), k[C] = 1), V[C] !== I && (n.vertexAttribDivisor(C, I), V[C] = I);
  }
  function y() {
    const C = r.newAttributes, I = r.enabledAttributes;
    for (let H = 0, k = I.length; H < k; H++)
      I[H] !== C[H] && (n.disableVertexAttribArray(H), I[H] = 0);
  }
  function S(C, I, H, k, V, X, F) {
    F === !0 ? n.vertexAttribIPointer(C, I, H, V, X) : n.vertexAttribPointer(C, I, H, k, V, X);
  }
  function M(C, I, H, k) {
    m();
    const V = k.attributes, X = H.getAttributes(), F = I.defaultAttributeValues;
    for (const Q in X) {
      const O = X[Q];
      if (O.location >= 0) {
        let it = V[Q];
        if (it === void 0 && (Q === "instanceMatrix" && C.instanceMatrix && (it = C.instanceMatrix), Q === "instanceColor" && C.instanceColor && (it = C.instanceColor)), it !== void 0) {
          const st = it.normalized, et = it.itemSize, Ft = t.get(it);
          if (Ft === void 0) continue;
          const Bt = Ft.buffer, K = Ft.type, J = Ft.bytesPerElement, gt = K === n.INT || K === n.UNSIGNED_INT || it.gpuType === Ko;
          if (it.isInterleavedBufferAttribute) {
            const ht = it.data, Tt = ht.stride, yt = it.offset;
            if (ht.isInstancedInterleavedBuffer) {
              for (let Nt = 0; Nt < O.locationSize; Nt++)
                d(O.location + Nt, ht.meshPerAttribute);
              C.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ht.meshPerAttribute * ht.count);
            } else
              for (let Nt = 0; Nt < O.locationSize; Nt++)
                f(O.location + Nt);
            n.bindBuffer(n.ARRAY_BUFFER, Bt);
            for (let Nt = 0; Nt < O.locationSize; Nt++)
              S(
                O.location + Nt,
                et / O.locationSize,
                K,
                st,
                Tt * J,
                (yt + et / O.locationSize * Nt) * J,
                gt
              );
          } else {
            if (it.isInstancedBufferAttribute) {
              for (let ht = 0; ht < O.locationSize; ht++)
                d(O.location + ht, it.meshPerAttribute);
              C.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = it.meshPerAttribute * it.count);
            } else
              for (let ht = 0; ht < O.locationSize; ht++)
                f(O.location + ht);
            n.bindBuffer(n.ARRAY_BUFFER, Bt);
            for (let ht = 0; ht < O.locationSize; ht++)
              S(
                O.location + ht,
                et / O.locationSize,
                K,
                st,
                et * J,
                et / O.locationSize * ht * J,
                gt
              );
          }
        } else if (F !== void 0) {
          const st = F[Q];
          if (st !== void 0)
            switch (st.length) {
              case 2:
                n.vertexAttrib2fv(O.location, st);
                break;
              case 3:
                n.vertexAttrib3fv(O.location, st);
                break;
              case 4:
                n.vertexAttrib4fv(O.location, st);
                break;
              default:
                n.vertexAttrib1fv(O.location, st);
            }
        }
      }
    }
    y();
  }
  function E() {
    P();
    for (const C in i) {
      const I = i[C];
      for (const H in I) {
        const k = I[H];
        for (const V in k)
          h(k[V].object), delete k[V];
        delete I[H];
      }
      delete i[C];
    }
  }
  function _(C) {
    if (i[C.id] === void 0) return;
    const I = i[C.id];
    for (const H in I) {
      const k = I[H];
      for (const V in k)
        h(k[V].object), delete k[V];
      delete I[H];
    }
    delete i[C.id];
  }
  function w(C) {
    for (const I in i) {
      const H = i[I];
      if (H[C.id] === void 0) continue;
      const k = H[C.id];
      for (const V in k)
        h(k[V].object), delete k[V];
      delete H[C.id];
    }
  }
  function P() {
    j(), o = !0, r !== s && (r = s, c(r.object));
  }
  function j() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: a,
    reset: P,
    resetDefaultState: j,
    dispose: E,
    releaseStatesOfGeometry: _,
    releaseStatesOfProgram: w,
    initAttributes: m,
    enableAttribute: f,
    disableUnusedAttributes: y
  };
}
function Vf(n, t, e) {
  let i;
  function s(c) {
    i = c;
  }
  function r(c, h) {
    n.drawArrays(i, c, h), e.update(h, i, 1);
  }
  function o(c, h, u) {
    u !== 0 && (n.drawArraysInstanced(i, c, h, u), e.update(h, i, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, h, 0, u);
    let g = 0;
    for (let v = 0; v < u; v++)
      g += h[v];
    e.update(g, i, 1);
  }
  function l(c, h, u, p) {
    if (u === 0) return;
    const g = t.get("WEBGL_multi_draw");
    if (g === null)
      for (let v = 0; v < c.length; v++)
        o(c[v], h[v], p[v]);
    else {
      g.multiDrawArraysInstancedWEBGL(i, c, 0, h, 0, p, 0, u);
      let v = 0;
      for (let m = 0; m < u; m++)
        v += h[m];
      for (let m = 0; m < p.length; m++)
        e.update(v, i, p[m]);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function Kf(n, t, e, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const w = t.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function o(w) {
    return !(w !== Fe && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(w) {
    const P = w === je && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== li && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== Qe && !P);
  }
  function l(w) {
    if (w === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === !0, p = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control");
  if (p === !0) {
    const w = t.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const g = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), v = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = n.getParameter(n.MAX_TEXTURE_SIZE), f = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), d = n.getParameter(n.MAX_VERTEX_ATTRIBS), y = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), S = n.getParameter(n.MAX_VARYING_VECTORS), M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), E = v > 0, _ = n.getParameter(n.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: p,
    maxTextures: g,
    maxVertexTextures: v,
    maxTextureSize: m,
    maxCubemapSize: f,
    maxAttributes: d,
    maxVertexUniforms: y,
    maxVaryings: S,
    maxFragmentUniforms: M,
    vertexTextures: E,
    maxSamples: _
  };
}
function Wf(n) {
  const t = this;
  let e = null, i = 0, s = !1, r = !1;
  const o = new vi(), a = new Dt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, p) {
    const g = u.length !== 0 || p || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    i !== 0 || s;
    return s = p, i = u.length, g;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, p) {
    e = h(u, p, 0);
  }, this.setState = function(u, p, g) {
    const v = u.clippingPlanes, m = u.clipIntersection, f = u.clipShadows, d = n.get(u);
    if (!s || v === null || v.length === 0 || r && !f)
      r ? h(null) : c();
    else {
      const y = r ? 0 : i, S = y * 4;
      let M = d.clippingState || null;
      l.value = M, M = h(v, p, S, g);
      for (let E = 0; E !== S; ++E)
        M[E] = e[E];
      d.clippingState = M, this.numIntersection = m ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function h(u, p, g, v) {
    const m = u !== null ? u.length : 0;
    let f = null;
    if (m !== 0) {
      if (f = l.value, v !== !0 || f === null) {
        const d = g + m * 4, y = p.matrixWorldInverse;
        a.getNormalMatrix(y), (f === null || f.length < d) && (f = new Float32Array(d));
        for (let S = 0, M = g; S !== m; ++S, M += 4)
          o.copy(u[S]).applyMatrix4(y, a), o.normal.toArray(f, M), f[M + 3] = o.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return t.numPlanes = m, t.numIntersection = 0, f;
  }
}
function Yf(n) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, a) {
    return a === eo ? o.mapping = pn : a === io && (o.mapping = gn), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === eo || a === io)
        if (t.has(o)) {
          const l = t.get(o).texture;
          return e(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new iu(l.height);
            return c.fromEquirectangularTexture(n, o), t.set(o, c), o.addEventListener("dispose", s), e(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: r
  };
}
class Cc extends pc {
  constructor(t = -1, e = 1, i = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, i, s, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = i - t, o = i + t, a = s + e, l = s - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const ln = 4, Ga = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Ui = 20, Mr = /* @__PURE__ */ new Cc(), Oa = /* @__PURE__ */ new Mt();
let br = null, wr = 0, _r = 0, Er = !1;
const Bi = (1 + Math.sqrt(5)) / 2, on = 1 / Bi, ka = [
  /* @__PURE__ */ new B(-Bi, on, 0),
  /* @__PURE__ */ new B(Bi, on, 0),
  /* @__PURE__ */ new B(-on, 0, Bi),
  /* @__PURE__ */ new B(on, 0, Bi),
  /* @__PURE__ */ new B(0, Bi, -on),
  /* @__PURE__ */ new B(0, Bi, on),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, 1)
];
class Ha {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, i = 0.1, s = 100) {
    br = this._renderer.getRenderTarget(), wr = this._renderer.getActiveCubeFace(), _r = this._renderer.getActiveMipmapLevel(), Er = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(t, i, s, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ka(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Va(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(br, wr, _r), this._renderer.xr.enabled = Er, t.scissorTest = !1, ds(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === pn || t.mapping === gn ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), br = this._renderer.getRenderTarget(), wr = this._renderer.getActiveCubeFace(), _r = this._renderer.getActiveMipmapLevel(), Er = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const i = e || this._allocateTargets();
    return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, i = {
      magFilter: Re,
      minFilter: Re,
      generateMipmaps: !1,
      type: je,
      format: Fe,
      colorSpace: bi,
      depthBuffer: !1
    }, s = za(t, e, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = za(t, e, i);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Xf(r)), this._blurMaterial = Zf(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Ne(this._lodPlanes[0], t);
    this._renderer.compile(e, Mr);
  }
  _sceneToCubeUV(t, e, i, s) {
    const a = new Ue(90, 1, e, i), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, p = h.toneMapping;
    h.getClearColor(Oa), h.toneMapping = Si, h.autoClear = !1;
    const g = new Jo({
      name: "PMREM.Background",
      side: Me,
      depthWrite: !1,
      depthTest: !1
    }), v = new Ne(new Vn(), g);
    let m = !1;
    const f = t.background;
    f ? f.isColor && (g.color.copy(f), t.background = null, m = !0) : (g.color.copy(Oa), m = !0);
    for (let d = 0; d < 6; d++) {
      const y = d % 3;
      y === 0 ? (a.up.set(0, l[d], 0), a.lookAt(c[d], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[d]), a.lookAt(0, c[d], 0)) : (a.up.set(0, l[d], 0), a.lookAt(0, 0, c[d]));
      const S = this._cubeSize;
      ds(s, y * S, d > 2 ? S : 0, S, S), h.setRenderTarget(s), m && h.render(v, a), h.render(t, a);
    }
    v.geometry.dispose(), v.material.dispose(), h.toneMapping = p, h.autoClear = u, t.background = f;
  }
  _textureToCubeUV(t, e) {
    const i = this._renderer, s = t.mapping === pn || t.mapping === gn;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ka()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Va());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new Ne(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    ds(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(o, Mr);
  }
  _applyPMREM(t) {
    const e = this._renderer, i = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = ka[(s - r - 1) % ka.length];
      this._blur(t, r - 1, r, o, a);
    }
    e.autoClear = i;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, i, s, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      o,
      e,
      i,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      t,
      i,
      i,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, i, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Ne(this._lodPlanes[s], c), p = c.uniforms, g = this._sizeLods[i] - 1, v = isFinite(r) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * Ui - 1), m = r / v, f = isFinite(r) ? 1 + Math.floor(h * m) : Ui;
    f > Ui && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ui}`);
    const d = [];
    let y = 0;
    for (let w = 0; w < Ui; ++w) {
      const P = w / m, j = Math.exp(-P * P / 2);
      d.push(j), w === 0 ? y += j : w < f && (y += 2 * j);
    }
    for (let w = 0; w < d.length; w++)
      d[w] = d[w] / y;
    p.envMap.value = t.texture, p.samples.value = f, p.weights.value = d, p.latitudinal.value = o === "latitudinal", a && (p.poleAxis.value = a);
    const { _lodMax: S } = this;
    p.dTheta.value = v, p.mipInt.value = S - i;
    const M = this._sizeLods[s], E = 3 * M * (s > S - ln ? s - S + ln : 0), _ = 4 * (this._cubeSize - M);
    ds(e, E, _, 3 * M, 2 * M), l.setRenderTarget(e), l.render(u, Mr);
  }
}
function Xf(n) {
  const t = [], e = [], i = [];
  let s = n;
  const r = n - ln + 1 + Ga.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    e.push(a);
    let l = 1 / a;
    o > n - ln ? l = Ga[o - n + ln - 1] : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, p = [h, h, u, h, u, u, h, h, u, u, h, u], g = 6, v = 6, m = 3, f = 2, d = 1, y = new Float32Array(m * v * g), S = new Float32Array(f * v * g), M = new Float32Array(d * v * g);
    for (let _ = 0; _ < g; _++) {
      const w = _ % 3 * 2 / 3 - 1, P = _ > 2 ? 0 : -1, j = [
        w,
        P,
        0,
        w + 2 / 3,
        P,
        0,
        w + 2 / 3,
        P + 1,
        0,
        w,
        P,
        0,
        w + 2 / 3,
        P + 1,
        0,
        w,
        P + 1,
        0
      ];
      y.set(j, m * v * _), S.set(p, f * v * _);
      const C = [_, _, _, _, _, _];
      M.set(C, d * v * _);
    }
    const E = new Ae();
    E.setAttribute("position", new ae(y, m)), E.setAttribute("uv", new ae(S, f)), E.setAttribute("faceIndex", new ae(M, d)), t.push(E), s > ln && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: i };
}
function za(n, t, e) {
  const i = new Ge(n, t, e);
  return i.texture.mapping = Ws, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function ds(n, t, e, i, s) {
  n.viewport.set(t, e, i, s), n.scissor.set(t, e, i, s);
}
function Zf(n, t, e) {
  const i = new Float32Array(Ui), s = new B(0, 1, 0);
  return new te({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ui,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${n}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: $o(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: Ke,
    depthTest: !1,
    depthWrite: !1
  });
}
function Va() {
  return new te({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: $o(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: Ke,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ka() {
  return new te({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: $o(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Ke,
    depthTest: !1,
    depthWrite: !1
  });
}
function $o() {
  return (
    /* glsl */
    `

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
	`
  );
}
function Qf(n) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === eo || l === io, h = l === pn || l === gn;
      if (c || h) {
        let u = t.get(a);
        const p = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== p)
          return e === null && (e = new Ha(n)), u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const g = a.image;
          return c && g && g.height > 0 || h && g && s(g) ? (e === null && (e = new Ha(n)), u = c ? e.fromEquirectangular(a) : e.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return a;
  }
  function s(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: i,
    dispose: o
  };
}
function jf(n) {
  const t = {};
  function e(i) {
    if (t[i] !== void 0)
      return t[i];
    let s;
    switch (i) {
      case "WEBGL_depth_texture":
        s = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = n.getExtension(i);
    }
    return t[i] = s, s;
  }
  return {
    has: function(i) {
      return e(i) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(i) {
      const s = e(i);
      return s === null && Ls("THREE.WebGLRenderer: " + i + " extension not supported."), s;
    }
  };
}
function qf(n, t, e, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const p = u.target;
    p.index !== null && t.remove(p.index);
    for (const v in p.attributes)
      t.remove(p.attributes[v]);
    for (const v in p.morphAttributes) {
      const m = p.morphAttributes[v];
      for (let f = 0, d = m.length; f < d; f++)
        t.remove(m[f]);
    }
    p.removeEventListener("dispose", o), delete s[p.id];
    const g = r.get(p);
    g && (t.remove(g), r.delete(p)), i.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, e.memory.geometries--;
  }
  function a(u, p) {
    return s[p.id] === !0 || (p.addEventListener("dispose", o), s[p.id] = !0, e.memory.geometries++), p;
  }
  function l(u) {
    const p = u.attributes;
    for (const v in p)
      t.update(p[v], n.ARRAY_BUFFER);
    const g = u.morphAttributes;
    for (const v in g) {
      const m = g[v];
      for (let f = 0, d = m.length; f < d; f++)
        t.update(m[f], n.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const p = [], g = u.index, v = u.attributes.position;
    let m = 0;
    if (g !== null) {
      const y = g.array;
      m = g.version;
      for (let S = 0, M = y.length; S < M; S += 3) {
        const E = y[S + 0], _ = y[S + 1], w = y[S + 2];
        p.push(E, _, _, w, w, E);
      }
    } else if (v !== void 0) {
      const y = v.array;
      m = v.version;
      for (let S = 0, M = y.length / 3 - 1; S < M; S += 3) {
        const E = S + 0, _ = S + 1, w = S + 2;
        p.push(E, _, _, w, w, E);
      }
    } else
      return;
    const f = new (ac(p) ? dc : uc)(p, 1);
    f.version = m;
    const d = r.get(u);
    d && t.remove(d), r.set(u, f);
  }
  function h(u) {
    const p = r.get(u);
    if (p) {
      const g = u.index;
      g !== null && p.version < g.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function Jf(n, t, e) {
  let i;
  function s(p) {
    i = p;
  }
  let r, o;
  function a(p) {
    r = p.type, o = p.bytesPerElement;
  }
  function l(p, g) {
    n.drawElements(i, g, r, p * o), e.update(g, i, 1);
  }
  function c(p, g, v) {
    v !== 0 && (n.drawElementsInstanced(i, g, r, p * o, v), e.update(g, i, v));
  }
  function h(p, g, v) {
    if (v === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, g, 0, r, p, 0, v);
    let f = 0;
    for (let d = 0; d < v; d++)
      f += g[d];
    e.update(f, i, 1);
  }
  function u(p, g, v, m) {
    if (v === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let d = 0; d < p.length; d++)
        c(p[d] / o, g[d], m[d]);
    else {
      f.multiDrawElementsInstancedWEBGL(i, g, 0, r, p, 0, m, 0, v);
      let d = 0;
      for (let y = 0; y < v; y++)
        d += g[y];
      for (let y = 0; y < m.length; y++)
        e.update(d, i, m[y]);
    }
  }
  this.setMode = s, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function $f(n) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(r, o, a) {
    switch (e.calls++, o) {
      case n.TRIANGLES:
        e.triangles += a * (r / 3);
        break;
      case n.LINES:
        e.lines += a * (r / 2);
        break;
      case n.LINE_STRIP:
        e.lines += a * (r - 1);
        break;
      case n.LINE_LOOP:
        e.lines += a * r;
        break;
      case n.POINTS:
        e.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: s,
    update: i
  };
}
function tp(n, t, e) {
  const i = /* @__PURE__ */ new WeakMap(), s = new ne();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let p = i.get(a);
    if (p === void 0 || p.count !== u) {
      let j = function() {
        w.dispose(), i.delete(a), a.removeEventListener("dispose", j);
      };
      p !== void 0 && p.texture.dispose();
      const g = a.morphAttributes.position !== void 0, v = a.morphAttributes.normal !== void 0, m = a.morphAttributes.color !== void 0, f = a.morphAttributes.position || [], d = a.morphAttributes.normal || [], y = a.morphAttributes.color || [];
      let S = 0;
      g === !0 && (S = 1), v === !0 && (S = 2), m === !0 && (S = 3);
      let M = a.attributes.position.count * S, E = 1;
      M > t.maxTextureSize && (E = Math.ceil(M / t.maxTextureSize), M = t.maxTextureSize);
      const _ = new Float32Array(M * E * 4 * u), w = new cc(_, M, E, u);
      w.type = Qe, w.needsUpdate = !0;
      const P = S * 4;
      for (let C = 0; C < u; C++) {
        const I = f[C], H = d[C], k = y[C], V = M * E * 4 * C;
        for (let X = 0; X < I.count; X++) {
          const F = X * P;
          g === !0 && (s.fromBufferAttribute(I, X), _[V + F + 0] = s.x, _[V + F + 1] = s.y, _[V + F + 2] = s.z, _[V + F + 3] = 0), v === !0 && (s.fromBufferAttribute(H, X), _[V + F + 4] = s.x, _[V + F + 5] = s.y, _[V + F + 6] = s.z, _[V + F + 7] = 0), m === !0 && (s.fromBufferAttribute(k, X), _[V + F + 8] = s.x, _[V + F + 9] = s.y, _[V + F + 10] = s.z, _[V + F + 11] = k.itemSize === 4 ? s.w : 1);
        }
      }
      p = {
        count: u,
        texture: w,
        size: new St(M, E)
      }, i.set(a, p), a.addEventListener("dispose", j);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(n, "morphTexture", o.morphTexture, e);
    else {
      let g = 0;
      for (let m = 0; m < c.length; m++)
        g += c[m];
      const v = a.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", v), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", p.texture, e), l.getUniforms().setValue(n, "morphTargetsTextureSize", p.size);
  }
  return {
    update: r
  };
}
function ep(n, t, e, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = i.render.frame, h = l.geometry, u = t.get(l, h);
    if (s.get(u) !== c && (t.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), s.get(l) !== c && (e.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, n.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const p = l.skeleton;
      s.get(p) !== c && (p.update(), s.set(p, c));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
class Ac extends ve {
  constructor(t, e, i, s, r, o, a, l, c, h = un) {
    if (h !== un && h !== vn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && h === un && (i = ki), i === void 0 && h === vn && (i = mn), super(null, s, r, o, a, l, h, i, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : pe, this.minFilter = l !== void 0 ? l : pe, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Sc = /* @__PURE__ */ new ve(), Wa = /* @__PURE__ */ new Ac(1, 1), xc = /* @__PURE__ */ new cc(), yc = /* @__PURE__ */ new Hh(), Ic = /* @__PURE__ */ new gc(), Ya = [], Xa = [], Za = new Float32Array(16), Qa = new Float32Array(9), ja = new Float32Array(4);
function bn(n, t, e) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = t * e;
  let r = Ya[s];
  if (r === void 0 && (r = new Float32Array(s), Ya[s] = r), t !== 0) {
    i.toArray(r, 0);
    for (let o = 1, a = 0; o !== t; ++o)
      a += e, n[o].toArray(r, a);
  }
  return r;
}
function le(n, t) {
  if (n.length !== t.length) return !1;
  for (let e = 0, i = n.length; e < i; e++)
    if (n[e] !== t[e]) return !1;
  return !0;
}
function ce(n, t) {
  for (let e = 0, i = t.length; e < i; e++)
    n[e] = t[e];
}
function Qs(n, t) {
  let e = Xa[t];
  e === void 0 && (e = new Int32Array(t), Xa[t] = e);
  for (let i = 0; i !== t; ++i)
    e[i] = n.allocateTextureUnit();
  return e;
}
function ip(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1f(this.addr, t), e[0] = t);
}
function np(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (n.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (le(e, t)) return;
    n.uniform2fv(this.addr, t), ce(e, t);
  }
}
function sp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (n.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (le(e, t)) return;
    n.uniform3fv(this.addr, t), ce(e, t);
  }
}
function rp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (le(e, t)) return;
    n.uniform4fv(this.addr, t), ce(e, t);
  }
}
function op(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (le(e, t)) return;
    n.uniformMatrix2fv(this.addr, !1, t), ce(e, t);
  } else {
    if (le(e, i)) return;
    ja.set(i), n.uniformMatrix2fv(this.addr, !1, ja), ce(e, i);
  }
}
function ap(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (le(e, t)) return;
    n.uniformMatrix3fv(this.addr, !1, t), ce(e, t);
  } else {
    if (le(e, i)) return;
    Qa.set(i), n.uniformMatrix3fv(this.addr, !1, Qa), ce(e, i);
  }
}
function lp(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (le(e, t)) return;
    n.uniformMatrix4fv(this.addr, !1, t), ce(e, t);
  } else {
    if (le(e, i)) return;
    Za.set(i), n.uniformMatrix4fv(this.addr, !1, Za), ce(e, i);
  }
}
function cp(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1i(this.addr, t), e[0] = t);
}
function hp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (n.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (le(e, t)) return;
    n.uniform2iv(this.addr, t), ce(e, t);
  }
}
function up(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (le(e, t)) return;
    n.uniform3iv(this.addr, t), ce(e, t);
  }
}
function dp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (le(e, t)) return;
    n.uniform4iv(this.addr, t), ce(e, t);
  }
}
function fp(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1ui(this.addr, t), e[0] = t);
}
function pp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (n.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (le(e, t)) return;
    n.uniform2uiv(this.addr, t), ce(e, t);
  }
}
function gp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (le(e, t)) return;
    n.uniform3uiv(this.addr, t), ce(e, t);
  }
}
function mp(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (le(e, t)) return;
    n.uniform4uiv(this.addr, t), ce(e, t);
  }
}
function vp(n, t, e) {
  const i = this.cache, s = e.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? (Wa.compareFunction = oc, r = Wa) : r = Sc, e.setTexture2D(t || r, s);
}
function Cp(n, t, e) {
  const i = this.cache, s = e.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), e.setTexture3D(t || yc, s);
}
function Ap(n, t, e) {
  const i = this.cache, s = e.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), e.setTextureCube(t || Ic, s);
}
function Sp(n, t, e) {
  const i = this.cache, s = e.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), e.setTexture2DArray(t || xc, s);
}
function xp(n) {
  switch (n) {
    case 5126:
      return ip;
    case 35664:
      return np;
    case 35665:
      return sp;
    case 35666:
      return rp;
    case 35674:
      return op;
    case 35675:
      return ap;
    case 35676:
      return lp;
    case 5124:
    case 35670:
      return cp;
    case 35667:
    case 35671:
      return hp;
    case 35668:
    case 35672:
      return up;
    case 35669:
    case 35673:
      return dp;
    case 5125:
      return fp;
    case 36294:
      return pp;
    case 36295:
      return gp;
    case 36296:
      return mp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vp;
    case 35679:
    case 36299:
    case 36307:
      return Cp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ap;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Sp;
  }
}
function yp(n, t) {
  n.uniform1fv(this.addr, t);
}
function Ip(n, t) {
  const e = bn(t, this.size, 2);
  n.uniform2fv(this.addr, e);
}
function Mp(n, t) {
  const e = bn(t, this.size, 3);
  n.uniform3fv(this.addr, e);
}
function bp(n, t) {
  const e = bn(t, this.size, 4);
  n.uniform4fv(this.addr, e);
}
function wp(n, t) {
  const e = bn(t, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, e);
}
function _p(n, t) {
  const e = bn(t, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, e);
}
function Ep(n, t) {
  const e = bn(t, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, e);
}
function Tp(n, t) {
  n.uniform1iv(this.addr, t);
}
function Lp(n, t) {
  n.uniform2iv(this.addr, t);
}
function Rp(n, t) {
  n.uniform3iv(this.addr, t);
}
function Dp(n, t) {
  n.uniform4iv(this.addr, t);
}
function Bp(n, t) {
  n.uniform1uiv(this.addr, t);
}
function Pp(n, t) {
  n.uniform2uiv(this.addr, t);
}
function Up(n, t) {
  n.uniform3uiv(this.addr, t);
}
function Fp(n, t) {
  n.uniform4uiv(this.addr, t);
}
function Np(n, t, e) {
  const i = this.cache, s = t.length, r = Qs(e, s);
  le(i, r) || (n.uniform1iv(this.addr, r), ce(i, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture2D(t[o] || Sc, r[o]);
}
function Gp(n, t, e) {
  const i = this.cache, s = t.length, r = Qs(e, s);
  le(i, r) || (n.uniform1iv(this.addr, r), ce(i, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture3D(t[o] || yc, r[o]);
}
function Op(n, t, e) {
  const i = this.cache, s = t.length, r = Qs(e, s);
  le(i, r) || (n.uniform1iv(this.addr, r), ce(i, r));
  for (let o = 0; o !== s; ++o)
    e.setTextureCube(t[o] || Ic, r[o]);
}
function kp(n, t, e) {
  const i = this.cache, s = t.length, r = Qs(e, s);
  le(i, r) || (n.uniform1iv(this.addr, r), ce(i, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture2DArray(t[o] || xc, r[o]);
}
function Hp(n) {
  switch (n) {
    case 5126:
      return yp;
    case 35664:
      return Ip;
    case 35665:
      return Mp;
    case 35666:
      return bp;
    case 35674:
      return wp;
    case 35675:
      return _p;
    case 35676:
      return Ep;
    case 5124:
    case 35670:
      return Tp;
    case 35667:
    case 35671:
      return Lp;
    case 35668:
    case 35672:
      return Rp;
    case 35669:
    case 35673:
      return Dp;
    case 5125:
      return Bp;
    case 36294:
      return Pp;
    case 36295:
      return Up;
    case 36296:
      return Fp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Np;
    case 35679:
    case 36299:
    case 36307:
      return Gp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Op;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return kp;
  }
}
class zp {
  constructor(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.type = e.type, this.setValue = xp(e.type);
  }
}
class Vp {
  constructor(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Hp(e.type);
  }
}
class Kp {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, i) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(t, e[a.id], i);
    }
  }
}
const Tr = /(\w+)(\])?(\[|\.)?/g;
function qa(n, t) {
  n.seq.push(t), n.map[t.id] = t;
}
function Wp(n, t, e) {
  const i = n.name, s = i.length;
  for (Tr.lastIndex = 0; ; ) {
    const r = Tr.exec(i), o = Tr.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      qa(e, c === void 0 ? new zp(a, n, t) : new Vp(a, n, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && (u = new Kp(a), qa(e, u)), e = u;
    }
  }
}
class Rs {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const r = t.getActiveUniform(e, s), o = t.getUniformLocation(e, r.name);
      Wp(r, o, this);
    }
  }
  setValue(t, e, i, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, i, s);
  }
  setOptional(t, e, i) {
    const s = e[i];
    s !== void 0 && this.setValue(t, i, s);
  }
  static upload(t, e, i, s) {
    for (let r = 0, o = e.length; r !== o; ++r) {
      const a = e[r], l = i[a.id];
      l.needsUpdate !== !1 && a.setValue(t, l.value, s);
    }
  }
  static seqWithValue(t, e) {
    const i = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const o = t[s];
      o.id in e && i.push(o);
    }
    return i;
  }
}
function Ja(n, t, e) {
  const i = n.createShader(t);
  return n.shaderSource(i, e), n.compileShader(i), i;
}
const Yp = 37297;
let Xp = 0;
function Zp(n, t) {
  const e = n.split(`
`), i = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    i.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`);
  }
  return i.join(`
`);
}
function Qp(n) {
  const t = Wt.getPrimaries(Wt.workingColorSpace), e = Wt.getPrimaries(n);
  let i;
  switch (t === e ? i = "" : t === Ps && e === Bs ? i = "LinearDisplayP3ToLinearSRGB" : t === Bs && e === Ps && (i = "LinearSRGBToLinearDisplayP3"), n) {
    case bi:
    case Xs:
      return [i, "LinearTransferOETF"];
    case Xe:
    case jo:
      return [i, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", n), [i, "LinearTransferOETF"];
  }
}
function $a(n, t, e) {
  const i = n.getShaderParameter(t, n.COMPILE_STATUS), s = n.getShaderInfoLog(t).trim();
  if (i && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + Zp(n.getShaderSource(t), o);
  } else
    return s;
}
function jp(n, t) {
  const e = Qp(t);
  return `vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function qp(n, t) {
  let e;
  switch (t) {
    case uh:
      e = "Linear";
      break;
    case dh:
      e = "Reinhard";
      break;
    case fh:
      e = "Cineon";
      break;
    case ph:
      e = "ACESFilmic";
      break;
    case mh:
      e = "AgX";
      break;
    case vh:
      e = "Neutral";
      break;
    case gh:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const fs = /* @__PURE__ */ new B();
function Jp() {
  Wt.getLuminanceCoefficients(fs);
  const n = fs.x.toFixed(4), t = fs.y.toFixed(4), e = fs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function $p(n) {
  return [
    n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Pn).join(`
`);
}
function tg(n) {
  const t = [];
  for (const e in n) {
    const i = n[e];
    i !== !1 && t.push("#define " + e + " " + i);
  }
  return t.join(`
`);
}
function eg(n, t) {
  const e = {}, i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(t, s), o = r.name;
    let a = 1;
    r.type === n.FLOAT_MAT2 && (a = 2), r.type === n.FLOAT_MAT3 && (a = 3), r.type === n.FLOAT_MAT4 && (a = 4), e[o] = {
      type: r.type,
      location: n.getAttribLocation(t, o),
      locationSize: a
    };
  }
  return e;
}
function Pn(n) {
  return n !== "";
}
function tl(n, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function el(n, t) {
  return n.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const ig = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Po(n) {
  return n.replace(ig, sg);
}
const ng = /* @__PURE__ */ new Map();
function sg(n, t) {
  let e = Rt[t];
  if (e === void 0) {
    const i = ng.get(t);
    if (i !== void 0)
      e = Rt[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Po(e);
}
const rg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function il(n) {
  return n.replace(rg, og);
}
function og(n, t, e, i) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function nl(n) {
  let t = `precision ${n.precision} float;
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
	`;
  return n.precision === "highp" ? t += `
#define HIGH_PRECISION` : n.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function ag(n) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === Xl ? t = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Yc ? t = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === ri && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function lg(n) {
  let t = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case pn:
      case gn:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Ws:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function cg(n) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case gn:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function hg(n) {
  let t = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case Ql:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ch:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case hh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function ug(n) {
  const t = n.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, i = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: i, maxMip: e };
}
function dg(n, t, e, i) {
  const s = n.getContext(), r = e.defines;
  let o = e.vertexShader, a = e.fragmentShader;
  const l = ag(e), c = lg(e), h = cg(e), u = hg(e), p = ug(e), g = $p(e), v = tg(r), m = s.createProgram();
  let f, d, y = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (f = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    v
  ].filter(Pn).join(`
`), f.length > 0 && (f += `
`), d = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    v
  ].filter(Pn).join(`
`), d.length > 0 && (d += `
`)) : (f = [
    nl(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    v,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Pn).join(`
`), d = [
    nl(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    v,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + h : "",
    e.envMap ? "#define " + u : "",
    p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
    p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
    p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== Si ? "#define TONE_MAPPING" : "",
    e.toneMapping !== Si ? Rt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== Si ? qp("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Rt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    jp("linearToOutputTexel", e.outputColorSpace),
    Jp(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Pn).join(`
`)), o = Po(o), o = tl(o, e), o = el(o, e), a = Po(a), a = tl(a, e), a = el(a, e), o = il(o), a = il(a), e.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, f = [
    g,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, d = [
    "#define varying in",
    e.glslVersion === Sa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Sa ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + d);
  const S = y + f + o, M = y + d + a, E = Ja(s, s.VERTEX_SHADER, S), _ = Ja(s, s.FRAGMENT_SHADER, M);
  s.attachShader(m, E), s.attachShader(m, _), e.index0AttributeName !== void 0 ? s.bindAttribLocation(m, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(m, 0, "position"), s.linkProgram(m);
  function w(I) {
    if (n.debug.checkShaderErrors) {
      const H = s.getProgramInfoLog(m).trim(), k = s.getShaderInfoLog(E).trim(), V = s.getShaderInfoLog(_).trim();
      let X = !0, F = !0;
      if (s.getProgramParameter(m, s.LINK_STATUS) === !1)
        if (X = !1, typeof n.debug.onShaderError == "function")
          n.debug.onShaderError(s, m, E, _);
        else {
          const Q = $a(s, E, "vertex"), O = $a(s, _, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(m, s.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + H + `
` + Q + `
` + O
          );
        }
      else H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (k === "" || V === "") && (F = !1);
      F && (I.diagnostics = {
        runnable: X,
        programLog: H,
        vertexShader: {
          log: k,
          prefix: f
        },
        fragmentShader: {
          log: V,
          prefix: d
        }
      });
    }
    s.deleteShader(E), s.deleteShader(_), P = new Rs(s, m), j = eg(s, m);
  }
  let P;
  this.getUniforms = function() {
    return P === void 0 && w(this), P;
  };
  let j;
  this.getAttributes = function() {
    return j === void 0 && w(this), j;
  };
  let C = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return C === !1 && (C = s.getProgramParameter(m, Yp)), C;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(m), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Xp++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = E, this.fragmentShader = _, this;
}
let fg = 0;
class pg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, i = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(i), o = this._getShaderCacheForMaterial(t);
    return o.has(s) === !1 && (o.add(s), s.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const i of e)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let i = e.get(t);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), e.set(t, i)), i;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let i = e.get(t);
    return i === void 0 && (i = new gg(t), e.set(t, i)), i;
  }
}
class gg {
  constructor(t) {
    this.id = fg++, this.code = t, this.usedTimes = 0;
  }
}
function mg(n, t, e, i, s, r, o) {
  const a = new qo(), l = new pg(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, p = s.reverseDepthBuffer, g = s.vertexTextures;
  let v = s.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(C) {
    return c.add(C), C === 0 ? "uv" : `uv${C}`;
  }
  function d(C, I, H, k, V) {
    const X = k.fog, F = V.geometry, Q = C.isMeshStandardMaterial ? k.environment : null, O = (C.isMeshStandardMaterial ? e : t).get(C.envMap || Q), it = O && O.mapping === Ws ? O.image.height : null, st = m[C.type];
    C.precision !== null && (v = s.getMaxPrecision(C.precision), v !== C.precision && console.warn("THREE.WebGLProgram.getParameters:", C.precision, "not supported, using", v, "instead."));
    const et = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Ft = et !== void 0 ? et.length : 0;
    let Bt = 0;
    F.morphAttributes.position !== void 0 && (Bt = 1), F.morphAttributes.normal !== void 0 && (Bt = 2), F.morphAttributes.color !== void 0 && (Bt = 3);
    let K, J, gt, ht;
    if (st) {
      const xe = Ze[st];
      K = xe.vertexShader, J = xe.fragmentShader;
    } else
      K = C.vertexShader, J = C.fragmentShader, l.update(C), gt = l.getVertexShaderID(C), ht = l.getFragmentShaderID(C);
    const Tt = n.getRenderTarget(), yt = V.isInstancedMesh === !0, Nt = V.isBatchedMesh === !0, Xt = !!C.map, Gt = !!C.matcap, T = !!O, be = !!C.aoMap, Pt = !!C.lightMap, kt = !!C.bumpMap, bt = !!C.normalMap, jt = !!C.displacementMap, Et = !!C.emissiveMap, b = !!C.metalnessMap, A = !!C.roughnessMap, U = C.anisotropy > 0, Y = C.clearcoat > 0, q = C.dispersion > 0, W = C.iridescence > 0, vt = C.sheen > 0, rt = C.transmission > 0, ut = U && !!C.anisotropyMap, Ht = Y && !!C.clearcoatMap, $ = Y && !!C.clearcoatNormalMap, dt = Y && !!C.clearcoatRoughnessMap, wt = W && !!C.iridescenceMap, _t = W && !!C.iridescenceThicknessMap, ft = vt && !!C.sheenColorMap, Ut = vt && !!C.sheenRoughnessMap, Lt = !!C.specularMap, Qt = !!C.specularColorMap, L = !!C.specularIntensityMap, lt = rt && !!C.transmissionMap, z = rt && !!C.thicknessMap, Z = !!C.gradientMap, ot = !!C.alphaMap, ct = C.alphaTest > 0, Ot = !!C.alphaHash, se = !!C.extensions;
    let Se = Si;
    C.toneMapped && (Tt === null || Tt.isXRRenderTarget === !0) && (Se = n.toneMapping);
    const zt = {
      shaderID: st,
      shaderType: C.type,
      shaderName: C.name,
      vertexShader: K,
      fragmentShader: J,
      defines: C.defines,
      customVertexShaderID: gt,
      customFragmentShaderID: ht,
      isRawShaderMaterial: C.isRawShaderMaterial === !0,
      glslVersion: C.glslVersion,
      precision: v,
      batching: Nt,
      batchingColor: Nt && V._colorsTexture !== null,
      instancing: yt,
      instancingColor: yt && V.instanceColor !== null,
      instancingMorph: yt && V.morphTexture !== null,
      supportsVertexTextures: g,
      outputColorSpace: Tt === null ? n.outputColorSpace : Tt.isXRRenderTarget === !0 ? Tt.texture.colorSpace : bi,
      alphaToCoverage: !!C.alphaToCoverage,
      map: Xt,
      matcap: Gt,
      envMap: T,
      envMapMode: T && O.mapping,
      envMapCubeUVHeight: it,
      aoMap: be,
      lightMap: Pt,
      bumpMap: kt,
      normalMap: bt,
      displacementMap: g && jt,
      emissiveMap: Et,
      normalMapObjectSpace: bt && C.normalMapType === yh,
      normalMapTangentSpace: bt && C.normalMapType === xh,
      metalnessMap: b,
      roughnessMap: A,
      anisotropy: U,
      anisotropyMap: ut,
      clearcoat: Y,
      clearcoatMap: Ht,
      clearcoatNormalMap: $,
      clearcoatRoughnessMap: dt,
      dispersion: q,
      iridescence: W,
      iridescenceMap: wt,
      iridescenceThicknessMap: _t,
      sheen: vt,
      sheenColorMap: ft,
      sheenRoughnessMap: Ut,
      specularMap: Lt,
      specularColorMap: Qt,
      specularIntensityMap: L,
      transmission: rt,
      transmissionMap: lt,
      thicknessMap: z,
      gradientMap: Z,
      opaque: C.transparent === !1 && C.blending === hn && C.alphaToCoverage === !1,
      alphaMap: ot,
      alphaTest: ct,
      alphaHash: Ot,
      combine: C.combine,
      //
      mapUv: Xt && f(C.map.channel),
      aoMapUv: be && f(C.aoMap.channel),
      lightMapUv: Pt && f(C.lightMap.channel),
      bumpMapUv: kt && f(C.bumpMap.channel),
      normalMapUv: bt && f(C.normalMap.channel),
      displacementMapUv: jt && f(C.displacementMap.channel),
      emissiveMapUv: Et && f(C.emissiveMap.channel),
      metalnessMapUv: b && f(C.metalnessMap.channel),
      roughnessMapUv: A && f(C.roughnessMap.channel),
      anisotropyMapUv: ut && f(C.anisotropyMap.channel),
      clearcoatMapUv: Ht && f(C.clearcoatMap.channel),
      clearcoatNormalMapUv: $ && f(C.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: dt && f(C.clearcoatRoughnessMap.channel),
      iridescenceMapUv: wt && f(C.iridescenceMap.channel),
      iridescenceThicknessMapUv: _t && f(C.iridescenceThicknessMap.channel),
      sheenColorMapUv: ft && f(C.sheenColorMap.channel),
      sheenRoughnessMapUv: Ut && f(C.sheenRoughnessMap.channel),
      specularMapUv: Lt && f(C.specularMap.channel),
      specularColorMapUv: Qt && f(C.specularColorMap.channel),
      specularIntensityMapUv: L && f(C.specularIntensityMap.channel),
      transmissionMapUv: lt && f(C.transmissionMap.channel),
      thicknessMapUv: z && f(C.thicknessMap.channel),
      alphaMapUv: ot && f(C.alphaMap.channel),
      //
      vertexTangents: !!F.attributes.tangent && (bt || U),
      vertexColors: C.vertexColors,
      vertexAlphas: C.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!F.attributes.uv && (Xt || ot),
      fog: !!X,
      useFog: C.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: C.flatShading === !0,
      sizeAttenuation: C.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: p,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: F.morphAttributes.position !== void 0,
      morphNormals: F.morphAttributes.normal !== void 0,
      morphColors: F.morphAttributes.color !== void 0,
      morphTargetsCount: Ft,
      morphTextureStride: Bt,
      numDirLights: I.directional.length,
      numPointLights: I.point.length,
      numSpotLights: I.spot.length,
      numSpotLightMaps: I.spotLightMap.length,
      numRectAreaLights: I.rectArea.length,
      numHemiLights: I.hemi.length,
      numDirLightShadows: I.directionalShadowMap.length,
      numPointLightShadows: I.pointShadowMap.length,
      numSpotLightShadows: I.spotShadowMap.length,
      numSpotLightShadowsWithMaps: I.numSpotLightShadowsWithMaps,
      numLightProbes: I.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: C.dithering,
      shadowMapEnabled: n.shadowMap.enabled && H.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: Se,
      decodeVideoTexture: Xt && C.map.isVideoTexture === !0 && Wt.getTransfer(C.map.colorSpace) === Jt,
      premultipliedAlpha: C.premultipliedAlpha,
      doubleSided: C.side === oi,
      flipSided: C.side === Me,
      useDepthPacking: C.depthPacking >= 0,
      depthPacking: C.depthPacking || 0,
      index0AttributeName: C.index0AttributeName,
      extensionClipCullDistance: se && C.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (se && C.extensions.multiDraw === !0 || Nt) && i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: C.customProgramCacheKey()
    };
    return zt.vertexUv1s = c.has(1), zt.vertexUv2s = c.has(2), zt.vertexUv3s = c.has(3), c.clear(), zt;
  }
  function y(C) {
    const I = [];
    if (C.shaderID ? I.push(C.shaderID) : (I.push(C.customVertexShaderID), I.push(C.customFragmentShaderID)), C.defines !== void 0)
      for (const H in C.defines)
        I.push(H), I.push(C.defines[H]);
    return C.isRawShaderMaterial === !1 && (S(I, C), M(I, C), I.push(n.outputColorSpace)), I.push(C.customProgramCacheKey), I.join();
  }
  function S(C, I) {
    C.push(I.precision), C.push(I.outputColorSpace), C.push(I.envMapMode), C.push(I.envMapCubeUVHeight), C.push(I.mapUv), C.push(I.alphaMapUv), C.push(I.lightMapUv), C.push(I.aoMapUv), C.push(I.bumpMapUv), C.push(I.normalMapUv), C.push(I.displacementMapUv), C.push(I.emissiveMapUv), C.push(I.metalnessMapUv), C.push(I.roughnessMapUv), C.push(I.anisotropyMapUv), C.push(I.clearcoatMapUv), C.push(I.clearcoatNormalMapUv), C.push(I.clearcoatRoughnessMapUv), C.push(I.iridescenceMapUv), C.push(I.iridescenceThicknessMapUv), C.push(I.sheenColorMapUv), C.push(I.sheenRoughnessMapUv), C.push(I.specularMapUv), C.push(I.specularColorMapUv), C.push(I.specularIntensityMapUv), C.push(I.transmissionMapUv), C.push(I.thicknessMapUv), C.push(I.combine), C.push(I.fogExp2), C.push(I.sizeAttenuation), C.push(I.morphTargetsCount), C.push(I.morphAttributeCount), C.push(I.numDirLights), C.push(I.numPointLights), C.push(I.numSpotLights), C.push(I.numSpotLightMaps), C.push(I.numHemiLights), C.push(I.numRectAreaLights), C.push(I.numDirLightShadows), C.push(I.numPointLightShadows), C.push(I.numSpotLightShadows), C.push(I.numSpotLightShadowsWithMaps), C.push(I.numLightProbes), C.push(I.shadowMapType), C.push(I.toneMapping), C.push(I.numClippingPlanes), C.push(I.numClipIntersection), C.push(I.depthPacking);
  }
  function M(C, I) {
    a.disableAll(), I.supportsVertexTextures && a.enable(0), I.instancing && a.enable(1), I.instancingColor && a.enable(2), I.instancingMorph && a.enable(3), I.matcap && a.enable(4), I.envMap && a.enable(5), I.normalMapObjectSpace && a.enable(6), I.normalMapTangentSpace && a.enable(7), I.clearcoat && a.enable(8), I.iridescence && a.enable(9), I.alphaTest && a.enable(10), I.vertexColors && a.enable(11), I.vertexAlphas && a.enable(12), I.vertexUv1s && a.enable(13), I.vertexUv2s && a.enable(14), I.vertexUv3s && a.enable(15), I.vertexTangents && a.enable(16), I.anisotropy && a.enable(17), I.alphaHash && a.enable(18), I.batching && a.enable(19), I.dispersion && a.enable(20), I.batchingColor && a.enable(21), C.push(a.mask), a.disableAll(), I.fog && a.enable(0), I.useFog && a.enable(1), I.flatShading && a.enable(2), I.logarithmicDepthBuffer && a.enable(3), I.reverseDepthBuffer && a.enable(4), I.skinning && a.enable(5), I.morphTargets && a.enable(6), I.morphNormals && a.enable(7), I.morphColors && a.enable(8), I.premultipliedAlpha && a.enable(9), I.shadowMapEnabled && a.enable(10), I.doubleSided && a.enable(11), I.flipSided && a.enable(12), I.useDepthPacking && a.enable(13), I.dithering && a.enable(14), I.transmission && a.enable(15), I.sheen && a.enable(16), I.opaque && a.enable(17), I.pointsUvs && a.enable(18), I.decodeVideoTexture && a.enable(19), I.alphaToCoverage && a.enable(20), C.push(a.mask);
  }
  function E(C) {
    const I = m[C.type];
    let H;
    if (I) {
      const k = Ze[I];
      H = Ns.clone(k.uniforms);
    } else
      H = C.uniforms;
    return H;
  }
  function _(C, I) {
    let H;
    for (let k = 0, V = h.length; k < V; k++) {
      const X = h[k];
      if (X.cacheKey === I) {
        H = X, ++H.usedTimes;
        break;
      }
    }
    return H === void 0 && (H = new dg(n, I, C, r), h.push(H)), H;
  }
  function w(C) {
    if (--C.usedTimes === 0) {
      const I = h.indexOf(C);
      h[I] = h[h.length - 1], h.pop(), C.destroy();
    }
  }
  function P(C) {
    l.remove(C);
  }
  function j() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: y,
    getUniforms: E,
    acquireProgram: _,
    releaseProgram: w,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: j
  };
}
function vg() {
  let n = /* @__PURE__ */ new WeakMap();
  function t(o) {
    return n.has(o);
  }
  function e(o) {
    let a = n.get(o);
    return a === void 0 && (a = {}, n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function s(o, a, l) {
    n.get(o)[a] = l;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: i,
    update: s,
    dispose: r
  };
}
function Cg(n, t) {
  return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.material.id !== t.material.id ? n.material.id - t.material.id : n.z !== t.z ? n.z - t.z : n.id - t.id;
}
function sl(n, t) {
  return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.z !== t.z ? t.z - n.z : n.id - t.id;
}
function rl() {
  const n = [];
  let t = 0;
  const e = [], i = [], s = [];
  function r() {
    t = 0, e.length = 0, i.length = 0, s.length = 0;
  }
  function o(u, p, g, v, m, f) {
    let d = n[t];
    return d === void 0 ? (d = {
      id: u.id,
      object: u,
      geometry: p,
      material: g,
      groupOrder: v,
      renderOrder: u.renderOrder,
      z: m,
      group: f
    }, n[t] = d) : (d.id = u.id, d.object = u, d.geometry = p, d.material = g, d.groupOrder = v, d.renderOrder = u.renderOrder, d.z = m, d.group = f), t++, d;
  }
  function a(u, p, g, v, m, f) {
    const d = o(u, p, g, v, m, f);
    g.transmission > 0 ? i.push(d) : g.transparent === !0 ? s.push(d) : e.push(d);
  }
  function l(u, p, g, v, m, f) {
    const d = o(u, p, g, v, m, f);
    g.transmission > 0 ? i.unshift(d) : g.transparent === !0 ? s.unshift(d) : e.unshift(d);
  }
  function c(u, p) {
    e.length > 1 && e.sort(u || Cg), i.length > 1 && i.sort(p || sl), s.length > 1 && s.sort(p || sl);
  }
  function h() {
    for (let u = t, p = n.length; u < p; u++) {
      const g = n[u];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: i,
    transparent: s,
    init: r,
    push: a,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Ag() {
  let n = /* @__PURE__ */ new WeakMap();
  function t(i, s) {
    const r = n.get(i);
    let o;
    return r === void 0 ? (o = new rl(), n.set(i, [o])) : s >= r.length ? (o = new rl(), r.push(o)) : o = r[s], o;
  }
  function e() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Sg() {
  const n = {};
  return {
    get: function(t) {
      if (n[t.id] !== void 0)
        return n[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new B(),
            color: new Mt()
          };
          break;
        case "SpotLight":
          e = {
            position: new B(),
            direction: new B(),
            color: new Mt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new B(),
            color: new Mt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new B(),
            skyColor: new Mt(),
            groundColor: new Mt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Mt(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return n[t.id] = e, e;
    }
  };
}
function xg() {
  const n = {};
  return {
    get: function(t) {
      if (n[t.id] !== void 0)
        return n[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new St()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new St()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new St(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return n[t.id] = e, e;
    }
  };
}
let yg = 0;
function Ig(n, t) {
  return (t.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (n.map ? 1 : 0);
}
function Mg(n) {
  const t = new Sg(), e = xg(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) i.probe.push(new B());
  const s = new B(), r = new $t(), o = new $t();
  function a(c) {
    let h = 0, u = 0, p = 0;
    for (let j = 0; j < 9; j++) i.probe[j].set(0, 0, 0);
    let g = 0, v = 0, m = 0, f = 0, d = 0, y = 0, S = 0, M = 0, E = 0, _ = 0, w = 0;
    c.sort(Ig);
    for (let j = 0, C = c.length; j < C; j++) {
      const I = c[j], H = I.color, k = I.intensity, V = I.distance, X = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        h += H.r * k, u += H.g * k, p += H.b * k;
      else if (I.isLightProbe) {
        for (let F = 0; F < 9; F++)
          i.probe[F].addScaledVector(I.sh.coefficients[F], k);
        w++;
      } else if (I.isDirectionalLight) {
        const F = t.get(I);
        if (F.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const Q = I.shadow, O = e.get(I);
          O.shadowIntensity = Q.intensity, O.shadowBias = Q.bias, O.shadowNormalBias = Q.normalBias, O.shadowRadius = Q.radius, O.shadowMapSize = Q.mapSize, i.directionalShadow[g] = O, i.directionalShadowMap[g] = X, i.directionalShadowMatrix[g] = I.shadow.matrix, y++;
        }
        i.directional[g] = F, g++;
      } else if (I.isSpotLight) {
        const F = t.get(I);
        F.position.setFromMatrixPosition(I.matrixWorld), F.color.copy(H).multiplyScalar(k), F.distance = V, F.coneCos = Math.cos(I.angle), F.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), F.decay = I.decay, i.spot[m] = F;
        const Q = I.shadow;
        if (I.map && (i.spotLightMap[E] = I.map, E++, Q.updateMatrices(I), I.castShadow && _++), i.spotLightMatrix[m] = Q.matrix, I.castShadow) {
          const O = e.get(I);
          O.shadowIntensity = Q.intensity, O.shadowBias = Q.bias, O.shadowNormalBias = Q.normalBias, O.shadowRadius = Q.radius, O.shadowMapSize = Q.mapSize, i.spotShadow[m] = O, i.spotShadowMap[m] = X, M++;
        }
        m++;
      } else if (I.isRectAreaLight) {
        const F = t.get(I);
        F.color.copy(H).multiplyScalar(k), F.halfWidth.set(I.width * 0.5, 0, 0), F.halfHeight.set(0, I.height * 0.5, 0), i.rectArea[f] = F, f++;
      } else if (I.isPointLight) {
        const F = t.get(I);
        if (F.color.copy(I.color).multiplyScalar(I.intensity), F.distance = I.distance, F.decay = I.decay, I.castShadow) {
          const Q = I.shadow, O = e.get(I);
          O.shadowIntensity = Q.intensity, O.shadowBias = Q.bias, O.shadowNormalBias = Q.normalBias, O.shadowRadius = Q.radius, O.shadowMapSize = Q.mapSize, O.shadowCameraNear = Q.camera.near, O.shadowCameraFar = Q.camera.far, i.pointShadow[v] = O, i.pointShadowMap[v] = X, i.pointShadowMatrix[v] = I.shadow.matrix, S++;
        }
        i.point[v] = F, v++;
      } else if (I.isHemisphereLight) {
        const F = t.get(I);
        F.skyColor.copy(I.color).multiplyScalar(k), F.groundColor.copy(I.groundColor).multiplyScalar(k), i.hemi[d] = F, d++;
      }
    }
    f > 0 && (n.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = nt.LTC_FLOAT_1, i.rectAreaLTC2 = nt.LTC_FLOAT_2) : (i.rectAreaLTC1 = nt.LTC_HALF_1, i.rectAreaLTC2 = nt.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = p;
    const P = i.hash;
    (P.directionalLength !== g || P.pointLength !== v || P.spotLength !== m || P.rectAreaLength !== f || P.hemiLength !== d || P.numDirectionalShadows !== y || P.numPointShadows !== S || P.numSpotShadows !== M || P.numSpotMaps !== E || P.numLightProbes !== w) && (i.directional.length = g, i.spot.length = m, i.rectArea.length = f, i.point.length = v, i.hemi.length = d, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = M, i.spotShadowMap.length = M, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = M + E - _, i.spotLightMap.length = E, i.numSpotLightShadowsWithMaps = _, i.numLightProbes = w, P.directionalLength = g, P.pointLength = v, P.spotLength = m, P.rectAreaLength = f, P.hemiLength = d, P.numDirectionalShadows = y, P.numPointShadows = S, P.numSpotShadows = M, P.numSpotMaps = E, P.numLightProbes = w, i.version = yg++);
  }
  function l(c, h) {
    let u = 0, p = 0, g = 0, v = 0, m = 0;
    const f = h.matrixWorldInverse;
    for (let d = 0, y = c.length; d < y; d++) {
      const S = c[d];
      if (S.isDirectionalLight) {
        const M = i.directional[u];
        M.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(f), u++;
      } else if (S.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(S.matrixWorld), M.position.applyMatrix4(f), M.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(f), g++;
      } else if (S.isRectAreaLight) {
        const M = i.rectArea[v];
        M.position.setFromMatrixPosition(S.matrixWorld), M.position.applyMatrix4(f), o.identity(), r.copy(S.matrixWorld), r.premultiply(f), o.extractRotation(r), M.halfWidth.set(S.width * 0.5, 0, 0), M.halfHeight.set(0, S.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), v++;
      } else if (S.isPointLight) {
        const M = i.point[p];
        M.position.setFromMatrixPosition(S.matrixWorld), M.position.applyMatrix4(f), p++;
      } else if (S.isHemisphereLight) {
        const M = i.hemi[m];
        M.direction.setFromMatrixPosition(S.matrixWorld), M.direction.transformDirection(f), m++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: i
  };
}
function ol(n) {
  const t = new Mg(n), e = [], i = [];
  function s(h) {
    c.camera = h, e.length = 0, i.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function a() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = {
    lightsArray: e,
    shadowsArray: i,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: r,
    pushShadow: o
  };
}
function bg(n) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const o = t.get(s);
    let a;
    return o === void 0 ? (a = new ol(n), t.set(s, [a])) : r >= o.length ? (a = new ol(n), o.push(a)) : a = o[r], a;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: i
  };
}
class wg extends Mn {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ah, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class _g extends Mn {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Eg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Tg = `uniform sampler2D shadow_pass;
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
}`;
function Lg(n, t, e) {
  let i = new mc();
  const s = new St(), r = new St(), o = new ne(), a = new wg({ depthPacking: Sh }), l = new _g(), c = {}, h = e.maxTextureSize, u = { [yi]: Me, [Me]: yi, [oi]: oi }, p = new te({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new St() },
      radius: { value: 4 }
    },
    vertexShader: Eg,
    fragmentShader: Tg
  }), g = p.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const v = new Ae();
  v.setAttribute(
    "position",
    new ae(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const m = new Ne(v, p), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Xl;
  let d = this.type;
  this.render = function(_, w, P) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || _.length === 0) return;
    const j = n.getRenderTarget(), C = n.getActiveCubeFace(), I = n.getActiveMipmapLevel(), H = n.state;
    H.setBlending(Ke), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1);
    const k = d !== ri && this.type === ri, V = d === ri && this.type !== ri;
    for (let X = 0, F = _.length; X < F; X++) {
      const Q = _[X], O = Q.shadow;
      if (O === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (O.autoUpdate === !1 && O.needsUpdate === !1) continue;
      s.copy(O.mapSize);
      const it = O.getFrameExtents();
      if (s.multiply(it), r.copy(O.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / it.x), s.x = r.x * it.x, O.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / it.y), s.y = r.y * it.y, O.mapSize.y = r.y)), O.map === null || k === !0 || V === !0) {
        const et = this.type !== ri ? { minFilter: pe, magFilter: pe } : {};
        O.map !== null && O.map.dispose(), O.map = new Ge(s.x, s.y, et), O.map.texture.name = Q.name + ".shadowMap", O.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(O.map), n.clear();
      const st = O.getViewportCount();
      for (let et = 0; et < st; et++) {
        const Ft = O.getViewport(et);
        o.set(
          r.x * Ft.x,
          r.y * Ft.y,
          r.x * Ft.z,
          r.y * Ft.w
        ), H.viewport(o), O.updateMatrices(Q, et), i = O.getFrustum(), M(w, P, O.camera, Q, this.type);
      }
      O.isPointLightShadow !== !0 && this.type === ri && y(O, P), O.needsUpdate = !1;
    }
    d = this.type, f.needsUpdate = !1, n.setRenderTarget(j, C, I);
  };
  function y(_, w) {
    const P = t.update(m);
    p.defines.VSM_SAMPLES !== _.blurSamples && (p.defines.VSM_SAMPLES = _.blurSamples, g.defines.VSM_SAMPLES = _.blurSamples, p.needsUpdate = !0, g.needsUpdate = !0), _.mapPass === null && (_.mapPass = new Ge(s.x, s.y)), p.uniforms.shadow_pass.value = _.map.texture, p.uniforms.resolution.value = _.mapSize, p.uniforms.radius.value = _.radius, n.setRenderTarget(_.mapPass), n.clear(), n.renderBufferDirect(w, null, P, p, m, null), g.uniforms.shadow_pass.value = _.mapPass.texture, g.uniforms.resolution.value = _.mapSize, g.uniforms.radius.value = _.radius, n.setRenderTarget(_.map), n.clear(), n.renderBufferDirect(w, null, P, g, m, null);
  }
  function S(_, w, P, j) {
    let C = null;
    const I = P.isPointLight === !0 ? _.customDistanceMaterial : _.customDepthMaterial;
    if (I !== void 0)
      C = I;
    else if (C = P.isPointLight === !0 ? l : a, n.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const H = C.uuid, k = w.uuid;
      let V = c[H];
      V === void 0 && (V = {}, c[H] = V);
      let X = V[k];
      X === void 0 && (X = C.clone(), V[k] = X, w.addEventListener("dispose", E)), C = X;
    }
    if (C.visible = w.visible, C.wireframe = w.wireframe, j === ri ? C.side = w.shadowSide !== null ? w.shadowSide : w.side : C.side = w.shadowSide !== null ? w.shadowSide : u[w.side], C.alphaMap = w.alphaMap, C.alphaTest = w.alphaTest, C.map = w.map, C.clipShadows = w.clipShadows, C.clippingPlanes = w.clippingPlanes, C.clipIntersection = w.clipIntersection, C.displacementMap = w.displacementMap, C.displacementScale = w.displacementScale, C.displacementBias = w.displacementBias, C.wireframeLinewidth = w.wireframeLinewidth, C.linewidth = w.linewidth, P.isPointLight === !0 && C.isMeshDistanceMaterial === !0) {
      const H = n.properties.get(C);
      H.light = P;
    }
    return C;
  }
  function M(_, w, P, j, C) {
    if (_.visible === !1) return;
    if (_.layers.test(w.layers) && (_.isMesh || _.isLine || _.isPoints) && (_.castShadow || _.receiveShadow && C === ri) && (!_.frustumCulled || i.intersectsObject(_))) {
      _.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, _.matrixWorld);
      const k = t.update(_), V = _.material;
      if (Array.isArray(V)) {
        const X = k.groups;
        for (let F = 0, Q = X.length; F < Q; F++) {
          const O = X[F], it = V[O.materialIndex];
          if (it && it.visible) {
            const st = S(_, it, j, C);
            _.onBeforeShadow(n, _, w, P, k, st, O), n.renderBufferDirect(P, null, k, st, _, O), _.onAfterShadow(n, _, w, P, k, st, O);
          }
        }
      } else if (V.visible) {
        const X = S(_, V, j, C);
        _.onBeforeShadow(n, _, w, P, k, X, null), n.renderBufferDirect(P, null, k, X, _, null), _.onAfterShadow(n, _, w, P, k, X, null);
      }
    }
    const H = _.children;
    for (let k = 0, V = H.length; k < V; k++)
      M(H[k], w, P, j, C);
  }
  function E(_) {
    _.target.removeEventListener("dispose", E);
    for (const P in c) {
      const j = c[P], C = _.target.uuid;
      C in j && (j[C].dispose(), delete j[C]);
    }
  }
}
const Rg = {
  [Zr]: Qr,
  [jr]: $r,
  [qr]: to,
  [Oi]: Jr,
  [Qr]: Zr,
  [$r]: jr,
  [to]: qr,
  [Jr]: Oi
};
function Dg(n) {
  function t() {
    let L = !1;
    const lt = new ne();
    let z = null;
    const Z = new ne(0, 0, 0, 0);
    return {
      setMask: function(ot) {
        z !== ot && !L && (n.colorMask(ot, ot, ot, ot), z = ot);
      },
      setLocked: function(ot) {
        L = ot;
      },
      setClear: function(ot, ct, Ot, se, Se) {
        Se === !0 && (ot *= se, ct *= se, Ot *= se), lt.set(ot, ct, Ot, se), Z.equals(lt) === !1 && (n.clearColor(ot, ct, Ot, se), Z.copy(lt));
      },
      reset: function() {
        L = !1, z = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function e() {
    let L = !1, lt = !1, z = null, Z = null, ot = null;
    return {
      setReversed: function(ct) {
        lt = ct;
      },
      setTest: function(ct) {
        ct ? gt(n.DEPTH_TEST) : ht(n.DEPTH_TEST);
      },
      setMask: function(ct) {
        z !== ct && !L && (n.depthMask(ct), z = ct);
      },
      setFunc: function(ct) {
        if (lt && (ct = Rg[ct]), Z !== ct) {
          switch (ct) {
            case Zr:
              n.depthFunc(n.NEVER);
              break;
            case Qr:
              n.depthFunc(n.ALWAYS);
              break;
            case jr:
              n.depthFunc(n.LESS);
              break;
            case Oi:
              n.depthFunc(n.LEQUAL);
              break;
            case qr:
              n.depthFunc(n.EQUAL);
              break;
            case Jr:
              n.depthFunc(n.GEQUAL);
              break;
            case $r:
              n.depthFunc(n.GREATER);
              break;
            case to:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          Z = ct;
        }
      },
      setLocked: function(ct) {
        L = ct;
      },
      setClear: function(ct) {
        ot !== ct && (n.clearDepth(ct), ot = ct);
      },
      reset: function() {
        L = !1, z = null, Z = null, ot = null;
      }
    };
  }
  function i() {
    let L = !1, lt = null, z = null, Z = null, ot = null, ct = null, Ot = null, se = null, Se = null;
    return {
      setTest: function(zt) {
        L || (zt ? gt(n.STENCIL_TEST) : ht(n.STENCIL_TEST));
      },
      setMask: function(zt) {
        lt !== zt && !L && (n.stencilMask(zt), lt = zt);
      },
      setFunc: function(zt, xe, $e) {
        (z !== zt || Z !== xe || ot !== $e) && (n.stencilFunc(zt, xe, $e), z = zt, Z = xe, ot = $e);
      },
      setOp: function(zt, xe, $e) {
        (ct !== zt || Ot !== xe || se !== $e) && (n.stencilOp(zt, xe, $e), ct = zt, Ot = xe, se = $e);
      },
      setLocked: function(zt) {
        L = zt;
      },
      setClear: function(zt) {
        Se !== zt && (n.clearStencil(zt), Se = zt);
      },
      reset: function() {
        L = !1, lt = null, z = null, Z = null, ot = null, ct = null, Ot = null, se = null, Se = null;
      }
    };
  }
  const s = new t(), r = new e(), o = new i(), a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), p = [], g = null, v = !1, m = null, f = null, d = null, y = null, S = null, M = null, E = null, _ = new Mt(0, 0, 0), w = 0, P = !1, j = null, C = null, I = null, H = null, k = null;
  const V = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, F = 0;
  const Q = n.getParameter(n.VERSION);
  Q.indexOf("WebGL") !== -1 ? (F = parseFloat(/^WebGL (\d)/.exec(Q)[1]), X = F >= 1) : Q.indexOf("OpenGL ES") !== -1 && (F = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), X = F >= 2);
  let O = null, it = {};
  const st = n.getParameter(n.SCISSOR_BOX), et = n.getParameter(n.VIEWPORT), Ft = new ne().fromArray(st), Bt = new ne().fromArray(et);
  function K(L, lt, z, Z) {
    const ot = new Uint8Array(4), ct = n.createTexture();
    n.bindTexture(L, ct), n.texParameteri(L, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(L, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Ot = 0; Ot < z; Ot++)
      L === n.TEXTURE_3D || L === n.TEXTURE_2D_ARRAY ? n.texImage3D(lt, 0, n.RGBA, 1, 1, Z, 0, n.RGBA, n.UNSIGNED_BYTE, ot) : n.texImage2D(lt + Ot, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, ot);
    return ct;
  }
  const J = {};
  J[n.TEXTURE_2D] = K(n.TEXTURE_2D, n.TEXTURE_2D, 1), J[n.TEXTURE_CUBE_MAP] = K(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), J[n.TEXTURE_2D_ARRAY] = K(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), J[n.TEXTURE_3D] = K(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), r.setClear(1), o.setClear(0), gt(n.DEPTH_TEST), r.setFunc(Oi), Pt(!1), kt(ga), gt(n.CULL_FACE), T(Ke);
  function gt(L) {
    c[L] !== !0 && (n.enable(L), c[L] = !0);
  }
  function ht(L) {
    c[L] !== !1 && (n.disable(L), c[L] = !1);
  }
  function Tt(L, lt) {
    return h[L] !== lt ? (n.bindFramebuffer(L, lt), h[L] = lt, L === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = lt), L === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = lt), !0) : !1;
  }
  function yt(L, lt) {
    let z = p, Z = !1;
    if (L) {
      z = u.get(lt), z === void 0 && (z = [], u.set(lt, z));
      const ot = L.textures;
      if (z.length !== ot.length || z[0] !== n.COLOR_ATTACHMENT0) {
        for (let ct = 0, Ot = ot.length; ct < Ot; ct++)
          z[ct] = n.COLOR_ATTACHMENT0 + ct;
        z.length = ot.length, Z = !0;
      }
    } else
      z[0] !== n.BACK && (z[0] = n.BACK, Z = !0);
    Z && n.drawBuffers(z);
  }
  function Nt(L) {
    return g !== L ? (n.useProgram(L), g = L, !0) : !1;
  }
  const Xt = {
    [Pi]: n.FUNC_ADD,
    [Xc]: n.FUNC_SUBTRACT,
    [Zc]: n.FUNC_REVERSE_SUBTRACT
  };
  Xt[Qc] = n.MIN, Xt[jc] = n.MAX;
  const Gt = {
    [qc]: n.ZERO,
    [Wr]: n.ONE,
    [Jc]: n.SRC_COLOR,
    [Yr]: n.SRC_ALPHA,
    [sh]: n.SRC_ALPHA_SATURATE,
    [ih]: n.DST_COLOR,
    [th]: n.DST_ALPHA,
    [$c]: n.ONE_MINUS_SRC_COLOR,
    [Xr]: n.ONE_MINUS_SRC_ALPHA,
    [nh]: n.ONE_MINUS_DST_COLOR,
    [eh]: n.ONE_MINUS_DST_ALPHA,
    [rh]: n.CONSTANT_COLOR,
    [oh]: n.ONE_MINUS_CONSTANT_COLOR,
    [ah]: n.CONSTANT_ALPHA,
    [lh]: n.ONE_MINUS_CONSTANT_ALPHA
  };
  function T(L, lt, z, Z, ot, ct, Ot, se, Se, zt) {
    if (L === Ke) {
      v === !0 && (ht(n.BLEND), v = !1);
      return;
    }
    if (v === !1 && (gt(n.BLEND), v = !0), L !== Zl) {
      if (L !== m || zt !== P) {
        if ((f !== Pi || S !== Pi) && (n.blendEquation(n.FUNC_ADD), f = Pi, S = Pi), zt)
          switch (L) {
            case hn:
              n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case fn:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case ma:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case va:
              n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case hn:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case fn:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case ma:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case va:
              n.blendFunc(n.ZERO, n.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        d = null, y = null, M = null, E = null, _.set(0, 0, 0), w = 0, m = L, P = zt;
      }
      return;
    }
    ot = ot || lt, ct = ct || z, Ot = Ot || Z, (lt !== f || ot !== S) && (n.blendEquationSeparate(Xt[lt], Xt[ot]), f = lt, S = ot), (z !== d || Z !== y || ct !== M || Ot !== E) && (n.blendFuncSeparate(Gt[z], Gt[Z], Gt[ct], Gt[Ot]), d = z, y = Z, M = ct, E = Ot), (se.equals(_) === !1 || Se !== w) && (n.blendColor(se.r, se.g, se.b, Se), _.copy(se), w = Se), m = L, P = !1;
  }
  function be(L, lt) {
    L.side === oi ? ht(n.CULL_FACE) : gt(n.CULL_FACE);
    let z = L.side === Me;
    lt && (z = !z), Pt(z), L.blending === hn && L.transparent === !1 ? T(Ke) : T(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), r.setFunc(L.depthFunc), r.setTest(L.depthTest), r.setMask(L.depthWrite), s.setMask(L.colorWrite);
    const Z = L.stencilWrite;
    o.setTest(Z), Z && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), jt(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? gt(n.SAMPLE_ALPHA_TO_COVERAGE) : ht(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Pt(L) {
    j !== L && (L ? n.frontFace(n.CW) : n.frontFace(n.CCW), j = L);
  }
  function kt(L) {
    L !== Kc ? (gt(n.CULL_FACE), L !== C && (L === ga ? n.cullFace(n.BACK) : L === Wc ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : ht(n.CULL_FACE), C = L;
  }
  function bt(L) {
    L !== I && (X && n.lineWidth(L), I = L);
  }
  function jt(L, lt, z) {
    L ? (gt(n.POLYGON_OFFSET_FILL), (H !== lt || k !== z) && (n.polygonOffset(lt, z), H = lt, k = z)) : ht(n.POLYGON_OFFSET_FILL);
  }
  function Et(L) {
    L ? gt(n.SCISSOR_TEST) : ht(n.SCISSOR_TEST);
  }
  function b(L) {
    L === void 0 && (L = n.TEXTURE0 + V - 1), O !== L && (n.activeTexture(L), O = L);
  }
  function A(L, lt, z) {
    z === void 0 && (O === null ? z = n.TEXTURE0 + V - 1 : z = O);
    let Z = it[z];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, it[z] = Z), (Z.type !== L || Z.texture !== lt) && (O !== z && (n.activeTexture(z), O = z), n.bindTexture(L, lt || J[L]), Z.type = L, Z.texture = lt);
  }
  function U() {
    const L = it[O];
    L !== void 0 && L.type !== void 0 && (n.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function Y() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function q() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function W() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function vt() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function rt() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ut() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ht() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function $() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function dt() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function wt() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _t(L) {
    Ft.equals(L) === !1 && (n.scissor(L.x, L.y, L.z, L.w), Ft.copy(L));
  }
  function ft(L) {
    Bt.equals(L) === !1 && (n.viewport(L.x, L.y, L.z, L.w), Bt.copy(L));
  }
  function Ut(L, lt) {
    let z = l.get(lt);
    z === void 0 && (z = /* @__PURE__ */ new WeakMap(), l.set(lt, z));
    let Z = z.get(L);
    Z === void 0 && (Z = n.getUniformBlockIndex(lt, L.name), z.set(L, Z));
  }
  function Lt(L, lt) {
    const Z = l.get(lt).get(L);
    a.get(lt) !== Z && (n.uniformBlockBinding(lt, Z, L.__bindingPointIndex), a.set(lt, Z));
  }
  function Qt() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(!0, !0, !0, !0), n.clearColor(0, 0, 0, 0), n.depthMask(!0), n.depthFunc(n.LESS), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), c = {}, O = null, it = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), p = [], g = null, v = !1, m = null, f = null, d = null, y = null, S = null, M = null, E = null, _ = new Mt(0, 0, 0), w = 0, P = !1, j = null, C = null, I = null, H = null, k = null, Ft.set(0, 0, n.canvas.width, n.canvas.height), Bt.set(0, 0, n.canvas.width, n.canvas.height), s.reset(), r.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: r,
      stencil: o
    },
    enable: gt,
    disable: ht,
    bindFramebuffer: Tt,
    drawBuffers: yt,
    useProgram: Nt,
    setBlending: T,
    setMaterial: be,
    setFlipSided: Pt,
    setCullFace: kt,
    setLineWidth: bt,
    setPolygonOffset: jt,
    setScissorTest: Et,
    activeTexture: b,
    bindTexture: A,
    unbindTexture: U,
    compressedTexImage2D: Y,
    compressedTexImage3D: q,
    texImage2D: dt,
    texImage3D: wt,
    updateUBOMapping: Ut,
    uniformBlockBinding: Lt,
    texStorage2D: Ht,
    texStorage3D: $,
    texSubImage2D: W,
    texSubImage3D: vt,
    compressedTexSubImage2D: rt,
    compressedTexSubImage3D: ut,
    scissor: _t,
    viewport: ft,
    reset: Qt
  };
}
function al(n, t, e, i) {
  const s = Bg(i);
  switch (e) {
    case tc:
      return n * t;
    case ic:
      return n * t;
    case nc:
      return n * t * 2;
    case sc:
      return n * t / s.components * s.byteLength;
    case Xo:
      return n * t / s.components * s.byteLength;
    case Ys:
      return n * t * 2 / s.components * s.byteLength;
    case Zo:
      return n * t * 2 / s.components * s.byteLength;
    case ec:
      return n * t * 3 / s.components * s.byteLength;
    case Fe:
      return n * t * 4 / s.components * s.byteLength;
    case Qo:
      return n * t * 4 / s.components * s.byteLength;
    case Ms:
    case bs:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ws:
    case _s:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case oo:
    case lo:
      return Math.max(n, 16) * Math.max(t, 8) / 4;
    case ro:
    case ao:
      return Math.max(n, 8) * Math.max(t, 8) / 2;
    case co:
    case ho:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case uo:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case fo:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case po:
      return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case go:
      return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case mo:
      return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case vo:
      return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Co:
      return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Ao:
      return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case So:
      return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case xo:
      return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case yo:
      return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Io:
      return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Mo:
      return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case bo:
      return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case wo:
      return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Es:
    case _o:
    case Eo:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
    case rc:
    case To:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
    case Lo:
    case Ro:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function Bg(n) {
  switch (n) {
    case li:
    case ql:
      return { byteLength: 1, components: 1 };
    case Fn:
    case Jl:
    case je:
      return { byteLength: 2, components: 1 };
    case Wo:
    case Yo:
      return { byteLength: 2, components: 4 };
    case ki:
    case Ko:
    case Qe:
      return { byteLength: 4, components: 1 };
    case $l:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
function Pg(n, t, e, i, s, r, o) {
  const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new St(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const p = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(b, A) {
    return g ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(b, A)
    ) : Fs("canvas");
  }
  function m(b, A, U) {
    let Y = 1;
    const q = Et(b);
    if ((q.width > U || q.height > U) && (Y = U / Math.max(q.width, q.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
        const W = Math.floor(Y * q.width), vt = Math.floor(Y * q.height);
        u === void 0 && (u = v(W, vt));
        const rt = A ? v(W, vt) : u;
        return rt.width = W, rt.height = vt, rt.getContext("2d").drawImage(b, 0, 0, W, vt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + q.width + "x" + q.height + ") to (" + W + "x" + vt + ")."), rt;
      } else
        return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + q.width + "x" + q.height + ")."), b;
    return b;
  }
  function f(b) {
    return b.generateMipmaps && b.minFilter !== pe && b.minFilter !== Re;
  }
  function d(b) {
    n.generateMipmap(b);
  }
  function y(b, A, U, Y, q = !1) {
    if (b !== null) {
      if (n[b] !== void 0) return n[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let W = A;
    if (A === n.RED && (U === n.FLOAT && (W = n.R32F), U === n.HALF_FLOAT && (W = n.R16F), U === n.UNSIGNED_BYTE && (W = n.R8)), A === n.RED_INTEGER && (U === n.UNSIGNED_BYTE && (W = n.R8UI), U === n.UNSIGNED_SHORT && (W = n.R16UI), U === n.UNSIGNED_INT && (W = n.R32UI), U === n.BYTE && (W = n.R8I), U === n.SHORT && (W = n.R16I), U === n.INT && (W = n.R32I)), A === n.RG && (U === n.FLOAT && (W = n.RG32F), U === n.HALF_FLOAT && (W = n.RG16F), U === n.UNSIGNED_BYTE && (W = n.RG8)), A === n.RG_INTEGER && (U === n.UNSIGNED_BYTE && (W = n.RG8UI), U === n.UNSIGNED_SHORT && (W = n.RG16UI), U === n.UNSIGNED_INT && (W = n.RG32UI), U === n.BYTE && (W = n.RG8I), U === n.SHORT && (W = n.RG16I), U === n.INT && (W = n.RG32I)), A === n.RGB_INTEGER && (U === n.UNSIGNED_BYTE && (W = n.RGB8UI), U === n.UNSIGNED_SHORT && (W = n.RGB16UI), U === n.UNSIGNED_INT && (W = n.RGB32UI), U === n.BYTE && (W = n.RGB8I), U === n.SHORT && (W = n.RGB16I), U === n.INT && (W = n.RGB32I)), A === n.RGBA_INTEGER && (U === n.UNSIGNED_BYTE && (W = n.RGBA8UI), U === n.UNSIGNED_SHORT && (W = n.RGBA16UI), U === n.UNSIGNED_INT && (W = n.RGBA32UI), U === n.BYTE && (W = n.RGBA8I), U === n.SHORT && (W = n.RGBA16I), U === n.INT && (W = n.RGBA32I)), A === n.RGB && U === n.UNSIGNED_INT_5_9_9_9_REV && (W = n.RGB9_E5), A === n.RGBA) {
      const vt = q ? Ds : Wt.getTransfer(Y);
      U === n.FLOAT && (W = n.RGBA32F), U === n.HALF_FLOAT && (W = n.RGBA16F), U === n.UNSIGNED_BYTE && (W = vt === Jt ? n.SRGB8_ALPHA8 : n.RGBA8), U === n.UNSIGNED_SHORT_4_4_4_4 && (W = n.RGBA4), U === n.UNSIGNED_SHORT_5_5_5_1 && (W = n.RGB5_A1);
    }
    return (W === n.R16F || W === n.R32F || W === n.RG16F || W === n.RG32F || W === n.RGBA16F || W === n.RGBA32F) && t.get("EXT_color_buffer_float"), W;
  }
  function S(b, A) {
    let U;
    return b ? A === null || A === ki || A === mn ? U = n.DEPTH24_STENCIL8 : A === Qe ? U = n.DEPTH32F_STENCIL8 : A === Fn && (U = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : A === null || A === ki || A === mn ? U = n.DEPTH_COMPONENT24 : A === Qe ? U = n.DEPTH_COMPONENT32F : A === Fn && (U = n.DEPTH_COMPONENT16), U;
  }
  function M(b, A) {
    return f(b) === !0 || b.isFramebufferTexture && b.minFilter !== pe && b.minFilter !== Re ? Math.log2(Math.max(A.width, A.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? A.mipmaps.length : 1;
  }
  function E(b) {
    const A = b.target;
    A.removeEventListener("dispose", E), w(A), A.isVideoTexture && h.delete(A);
  }
  function _(b) {
    const A = b.target;
    A.removeEventListener("dispose", _), j(A);
  }
  function w(b) {
    const A = i.get(b);
    if (A.__webglInit === void 0) return;
    const U = b.source, Y = p.get(U);
    if (Y) {
      const q = Y[A.__cacheKey];
      q.usedTimes--, q.usedTimes === 0 && P(b), Object.keys(Y).length === 0 && p.delete(U);
    }
    i.remove(b);
  }
  function P(b) {
    const A = i.get(b);
    n.deleteTexture(A.__webglTexture);
    const U = b.source, Y = p.get(U);
    delete Y[A.__cacheKey], o.memory.textures--;
  }
  function j(b) {
    const A = i.get(b);
    if (b.depthTexture && b.depthTexture.dispose(), b.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(A.__webglFramebuffer[Y]))
          for (let q = 0; q < A.__webglFramebuffer[Y].length; q++) n.deleteFramebuffer(A.__webglFramebuffer[Y][q]);
        else
          n.deleteFramebuffer(A.__webglFramebuffer[Y]);
        A.__webglDepthbuffer && n.deleteRenderbuffer(A.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(A.__webglFramebuffer))
        for (let Y = 0; Y < A.__webglFramebuffer.length; Y++) n.deleteFramebuffer(A.__webglFramebuffer[Y]);
      else
        n.deleteFramebuffer(A.__webglFramebuffer);
      if (A.__webglDepthbuffer && n.deleteRenderbuffer(A.__webglDepthbuffer), A.__webglMultisampledFramebuffer && n.deleteFramebuffer(A.__webglMultisampledFramebuffer), A.__webglColorRenderbuffer)
        for (let Y = 0; Y < A.__webglColorRenderbuffer.length; Y++)
          A.__webglColorRenderbuffer[Y] && n.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);
      A.__webglDepthRenderbuffer && n.deleteRenderbuffer(A.__webglDepthRenderbuffer);
    }
    const U = b.textures;
    for (let Y = 0, q = U.length; Y < q; Y++) {
      const W = i.get(U[Y]);
      W.__webglTexture && (n.deleteTexture(W.__webglTexture), o.memory.textures--), i.remove(U[Y]);
    }
    i.remove(b);
  }
  let C = 0;
  function I() {
    C = 0;
  }
  function H() {
    const b = C;
    return b >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures), C += 1, b;
  }
  function k(b) {
    const A = [];
    return A.push(b.wrapS), A.push(b.wrapT), A.push(b.wrapR || 0), A.push(b.magFilter), A.push(b.minFilter), A.push(b.anisotropy), A.push(b.internalFormat), A.push(b.format), A.push(b.type), A.push(b.generateMipmaps), A.push(b.premultiplyAlpha), A.push(b.flipY), A.push(b.unpackAlignment), A.push(b.colorSpace), A.join();
  }
  function V(b, A) {
    const U = i.get(b);
    if (b.isVideoTexture && bt(b), b.isRenderTargetTexture === !1 && b.version > 0 && U.__version !== b.version) {
      const Y = b.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Bt(U, b, A);
        return;
      }
    }
    e.bindTexture(n.TEXTURE_2D, U.__webglTexture, n.TEXTURE0 + A);
  }
  function X(b, A) {
    const U = i.get(b);
    if (b.version > 0 && U.__version !== b.version) {
      Bt(U, b, A);
      return;
    }
    e.bindTexture(n.TEXTURE_2D_ARRAY, U.__webglTexture, n.TEXTURE0 + A);
  }
  function F(b, A) {
    const U = i.get(b);
    if (b.version > 0 && U.__version !== b.version) {
      Bt(U, b, A);
      return;
    }
    e.bindTexture(n.TEXTURE_3D, U.__webglTexture, n.TEXTURE0 + A);
  }
  function Q(b, A) {
    const U = i.get(b);
    if (b.version > 0 && U.__version !== b.version) {
      K(U, b, A);
      return;
    }
    e.bindTexture(n.TEXTURE_CUBE_MAP, U.__webglTexture, n.TEXTURE0 + A);
  }
  const O = {
    [no]: n.REPEAT,
    [Fi]: n.CLAMP_TO_EDGE,
    [so]: n.MIRRORED_REPEAT
  }, it = {
    [pe]: n.NEAREST,
    [Ch]: n.NEAREST_MIPMAP_NEAREST,
    [Xn]: n.NEAREST_MIPMAP_LINEAR,
    [Re]: n.LINEAR,
    [er]: n.LINEAR_MIPMAP_NEAREST,
    [Ni]: n.LINEAR_MIPMAP_LINEAR
  }, st = {
    [Ih]: n.NEVER,
    [Th]: n.ALWAYS,
    [Mh]: n.LESS,
    [oc]: n.LEQUAL,
    [bh]: n.EQUAL,
    [Eh]: n.GEQUAL,
    [wh]: n.GREATER,
    [_h]: n.NOTEQUAL
  };
  function et(b, A) {
    if (A.type === Qe && t.has("OES_texture_float_linear") === !1 && (A.magFilter === Re || A.magFilter === er || A.magFilter === Xn || A.magFilter === Ni || A.minFilter === Re || A.minFilter === er || A.minFilter === Xn || A.minFilter === Ni) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(b, n.TEXTURE_WRAP_S, O[A.wrapS]), n.texParameteri(b, n.TEXTURE_WRAP_T, O[A.wrapT]), (b === n.TEXTURE_3D || b === n.TEXTURE_2D_ARRAY) && n.texParameteri(b, n.TEXTURE_WRAP_R, O[A.wrapR]), n.texParameteri(b, n.TEXTURE_MAG_FILTER, it[A.magFilter]), n.texParameteri(b, n.TEXTURE_MIN_FILTER, it[A.minFilter]), A.compareFunction && (n.texParameteri(b, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(b, n.TEXTURE_COMPARE_FUNC, st[A.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (A.magFilter === pe || A.minFilter !== Xn && A.minFilter !== Ni || A.type === Qe && t.has("OES_texture_float_linear") === !1) return;
      if (A.anisotropy > 1 || i.get(A).__currentAnisotropy) {
        const U = t.get("EXT_texture_filter_anisotropic");
        n.texParameterf(b, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, s.getMaxAnisotropy())), i.get(A).__currentAnisotropy = A.anisotropy;
      }
    }
  }
  function Ft(b, A) {
    let U = !1;
    b.__webglInit === void 0 && (b.__webglInit = !0, A.addEventListener("dispose", E));
    const Y = A.source;
    let q = p.get(Y);
    q === void 0 && (q = {}, p.set(Y, q));
    const W = k(A);
    if (W !== b.__cacheKey) {
      q[W] === void 0 && (q[W] = {
        texture: n.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, U = !0), q[W].usedTimes++;
      const vt = q[b.__cacheKey];
      vt !== void 0 && (q[b.__cacheKey].usedTimes--, vt.usedTimes === 0 && P(A)), b.__cacheKey = W, b.__webglTexture = q[W].texture;
    }
    return U;
  }
  function Bt(b, A, U) {
    let Y = n.TEXTURE_2D;
    (A.isDataArrayTexture || A.isCompressedArrayTexture) && (Y = n.TEXTURE_2D_ARRAY), A.isData3DTexture && (Y = n.TEXTURE_3D);
    const q = Ft(b, A), W = A.source;
    e.bindTexture(Y, b.__webglTexture, n.TEXTURE0 + U);
    const vt = i.get(W);
    if (W.version !== vt.__version || q === !0) {
      e.activeTexture(n.TEXTURE0 + U);
      const rt = Wt.getPrimaries(Wt.workingColorSpace), ut = A.colorSpace === Ci ? null : Wt.getPrimaries(A.colorSpace), Ht = A.colorSpace === Ci || rt === ut ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, A.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, A.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ht);
      let $ = m(A.image, !1, s.maxTextureSize);
      $ = jt(A, $);
      const dt = r.convert(A.format, A.colorSpace), wt = r.convert(A.type);
      let _t = y(A.internalFormat, dt, wt, A.colorSpace, A.isVideoTexture);
      et(Y, A);
      let ft;
      const Ut = A.mipmaps, Lt = A.isVideoTexture !== !0, Qt = vt.__version === void 0 || q === !0, L = W.dataReady, lt = M(A, $);
      if (A.isDepthTexture)
        _t = S(A.format === vn, A.type), Qt && (Lt ? e.texStorage2D(n.TEXTURE_2D, 1, _t, $.width, $.height) : e.texImage2D(n.TEXTURE_2D, 0, _t, $.width, $.height, 0, dt, wt, null));
      else if (A.isDataTexture)
        if (Ut.length > 0) {
          Lt && Qt && e.texStorage2D(n.TEXTURE_2D, lt, _t, Ut[0].width, Ut[0].height);
          for (let z = 0, Z = Ut.length; z < Z; z++)
            ft = Ut[z], Lt ? L && e.texSubImage2D(n.TEXTURE_2D, z, 0, 0, ft.width, ft.height, dt, wt, ft.data) : e.texImage2D(n.TEXTURE_2D, z, _t, ft.width, ft.height, 0, dt, wt, ft.data);
          A.generateMipmaps = !1;
        } else
          Lt ? (Qt && e.texStorage2D(n.TEXTURE_2D, lt, _t, $.width, $.height), L && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, $.width, $.height, dt, wt, $.data)) : e.texImage2D(n.TEXTURE_2D, 0, _t, $.width, $.height, 0, dt, wt, $.data);
      else if (A.isCompressedTexture)
        if (A.isCompressedArrayTexture) {
          Lt && Qt && e.texStorage3D(n.TEXTURE_2D_ARRAY, lt, _t, Ut[0].width, Ut[0].height, $.depth);
          for (let z = 0, Z = Ut.length; z < Z; z++)
            if (ft = Ut[z], A.format !== Fe)
              if (dt !== null)
                if (Lt) {
                  if (L)
                    if (A.layerUpdates.size > 0) {
                      const ot = al(ft.width, ft.height, A.format, A.type);
                      for (const ct of A.layerUpdates) {
                        const Ot = ft.data.subarray(
                          ct * ot / ft.data.BYTES_PER_ELEMENT,
                          (ct + 1) * ot / ft.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, z, 0, 0, ct, ft.width, ft.height, 1, dt, Ot, 0, 0);
                      }
                      A.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, z, 0, 0, 0, ft.width, ft.height, $.depth, dt, ft.data, 0, 0);
                } else
                  e.compressedTexImage3D(n.TEXTURE_2D_ARRAY, z, _t, ft.width, ft.height, $.depth, 0, ft.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Lt ? L && e.texSubImage3D(n.TEXTURE_2D_ARRAY, z, 0, 0, 0, ft.width, ft.height, $.depth, dt, wt, ft.data) : e.texImage3D(n.TEXTURE_2D_ARRAY, z, _t, ft.width, ft.height, $.depth, 0, dt, wt, ft.data);
        } else {
          Lt && Qt && e.texStorage2D(n.TEXTURE_2D, lt, _t, Ut[0].width, Ut[0].height);
          for (let z = 0, Z = Ut.length; z < Z; z++)
            ft = Ut[z], A.format !== Fe ? dt !== null ? Lt ? L && e.compressedTexSubImage2D(n.TEXTURE_2D, z, 0, 0, ft.width, ft.height, dt, ft.data) : e.compressedTexImage2D(n.TEXTURE_2D, z, _t, ft.width, ft.height, 0, ft.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Lt ? L && e.texSubImage2D(n.TEXTURE_2D, z, 0, 0, ft.width, ft.height, dt, wt, ft.data) : e.texImage2D(n.TEXTURE_2D, z, _t, ft.width, ft.height, 0, dt, wt, ft.data);
        }
      else if (A.isDataArrayTexture)
        if (Lt) {
          if (Qt && e.texStorage3D(n.TEXTURE_2D_ARRAY, lt, _t, $.width, $.height, $.depth), L)
            if (A.layerUpdates.size > 0) {
              const z = al($.width, $.height, A.format, A.type);
              for (const Z of A.layerUpdates) {
                const ot = $.data.subarray(
                  Z * z / $.data.BYTES_PER_ELEMENT,
                  (Z + 1) * z / $.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Z, $.width, $.height, 1, dt, wt, ot);
              }
              A.clearLayerUpdates();
            } else
              e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, dt, wt, $.data);
        } else
          e.texImage3D(n.TEXTURE_2D_ARRAY, 0, _t, $.width, $.height, $.depth, 0, dt, wt, $.data);
      else if (A.isData3DTexture)
        Lt ? (Qt && e.texStorage3D(n.TEXTURE_3D, lt, _t, $.width, $.height, $.depth), L && e.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, dt, wt, $.data)) : e.texImage3D(n.TEXTURE_3D, 0, _t, $.width, $.height, $.depth, 0, dt, wt, $.data);
      else if (A.isFramebufferTexture) {
        if (Qt)
          if (Lt)
            e.texStorage2D(n.TEXTURE_2D, lt, _t, $.width, $.height);
          else {
            let z = $.width, Z = $.height;
            for (let ot = 0; ot < lt; ot++)
              e.texImage2D(n.TEXTURE_2D, ot, _t, z, Z, 0, dt, wt, null), z >>= 1, Z >>= 1;
          }
      } else if (Ut.length > 0) {
        if (Lt && Qt) {
          const z = Et(Ut[0]);
          e.texStorage2D(n.TEXTURE_2D, lt, _t, z.width, z.height);
        }
        for (let z = 0, Z = Ut.length; z < Z; z++)
          ft = Ut[z], Lt ? L && e.texSubImage2D(n.TEXTURE_2D, z, 0, 0, dt, wt, ft) : e.texImage2D(n.TEXTURE_2D, z, _t, dt, wt, ft);
        A.generateMipmaps = !1;
      } else if (Lt) {
        if (Qt) {
          const z = Et($);
          e.texStorage2D(n.TEXTURE_2D, lt, _t, z.width, z.height);
        }
        L && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, dt, wt, $);
      } else
        e.texImage2D(n.TEXTURE_2D, 0, _t, dt, wt, $);
      f(A) && d(Y), vt.__version = W.version, A.onUpdate && A.onUpdate(A);
    }
    b.__version = A.version;
  }
  function K(b, A, U) {
    if (A.image.length !== 6) return;
    const Y = Ft(b, A), q = A.source;
    e.bindTexture(n.TEXTURE_CUBE_MAP, b.__webglTexture, n.TEXTURE0 + U);
    const W = i.get(q);
    if (q.version !== W.__version || Y === !0) {
      e.activeTexture(n.TEXTURE0 + U);
      const vt = Wt.getPrimaries(Wt.workingColorSpace), rt = A.colorSpace === Ci ? null : Wt.getPrimaries(A.colorSpace), ut = A.colorSpace === Ci || vt === rt ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, A.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, A.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ut);
      const Ht = A.isCompressedTexture || A.image[0].isCompressedTexture, $ = A.image[0] && A.image[0].isDataTexture, dt = [];
      for (let Z = 0; Z < 6; Z++)
        !Ht && !$ ? dt[Z] = m(A.image[Z], !0, s.maxCubemapSize) : dt[Z] = $ ? A.image[Z].image : A.image[Z], dt[Z] = jt(A, dt[Z]);
      const wt = dt[0], _t = r.convert(A.format, A.colorSpace), ft = r.convert(A.type), Ut = y(A.internalFormat, _t, ft, A.colorSpace), Lt = A.isVideoTexture !== !0, Qt = W.__version === void 0 || Y === !0, L = q.dataReady;
      let lt = M(A, wt);
      et(n.TEXTURE_CUBE_MAP, A);
      let z;
      if (Ht) {
        Lt && Qt && e.texStorage2D(n.TEXTURE_CUBE_MAP, lt, Ut, wt.width, wt.height);
        for (let Z = 0; Z < 6; Z++) {
          z = dt[Z].mipmaps;
          for (let ot = 0; ot < z.length; ot++) {
            const ct = z[ot];
            A.format !== Fe ? _t !== null ? Lt ? L && e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot, 0, 0, ct.width, ct.height, _t, ct.data) : e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot, Ut, ct.width, ct.height, 0, ct.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Lt ? L && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot, 0, 0, ct.width, ct.height, _t, ft, ct.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot, Ut, ct.width, ct.height, 0, _t, ft, ct.data);
          }
        }
      } else {
        if (z = A.mipmaps, Lt && Qt) {
          z.length > 0 && lt++;
          const Z = Et(dt[0]);
          e.texStorage2D(n.TEXTURE_CUBE_MAP, lt, Ut, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if ($) {
            Lt ? L && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, dt[Z].width, dt[Z].height, _t, ft, dt[Z].data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ut, dt[Z].width, dt[Z].height, 0, _t, ft, dt[Z].data);
            for (let ot = 0; ot < z.length; ot++) {
              const Ot = z[ot].image[Z].image;
              Lt ? L && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot + 1, 0, 0, Ot.width, Ot.height, _t, ft, Ot.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot + 1, Ut, Ot.width, Ot.height, 0, _t, ft, Ot.data);
            }
          } else {
            Lt ? L && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, _t, ft, dt[Z]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ut, _t, ft, dt[Z]);
            for (let ot = 0; ot < z.length; ot++) {
              const ct = z[ot];
              Lt ? L && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot + 1, 0, 0, _t, ft, ct.image[Z]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ot + 1, Ut, _t, ft, ct.image[Z]);
            }
          }
      }
      f(A) && d(n.TEXTURE_CUBE_MAP), W.__version = q.version, A.onUpdate && A.onUpdate(A);
    }
    b.__version = A.version;
  }
  function J(b, A, U, Y, q, W) {
    const vt = r.convert(U.format, U.colorSpace), rt = r.convert(U.type), ut = y(U.internalFormat, vt, rt, U.colorSpace);
    if (!i.get(A).__hasExternalTextures) {
      const $ = Math.max(1, A.width >> W), dt = Math.max(1, A.height >> W);
      q === n.TEXTURE_3D || q === n.TEXTURE_2D_ARRAY ? e.texImage3D(q, W, ut, $, dt, A.depth, 0, vt, rt, null) : e.texImage2D(q, W, ut, $, dt, 0, vt, rt, null);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, b), kt(A) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, Y, q, i.get(U).__webglTexture, 0, Pt(A)) : (q === n.TEXTURE_2D || q >= n.TEXTURE_CUBE_MAP_POSITIVE_X && q <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, Y, q, i.get(U).__webglTexture, W), e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function gt(b, A, U) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, b), A.depthBuffer) {
      const Y = A.depthTexture, q = Y && Y.isDepthTexture ? Y.type : null, W = S(A.stencilBuffer, q), vt = A.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, rt = Pt(A);
      kt(A) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, rt, W, A.width, A.height) : U ? n.renderbufferStorageMultisample(n.RENDERBUFFER, rt, W, A.width, A.height) : n.renderbufferStorage(n.RENDERBUFFER, W, A.width, A.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, vt, n.RENDERBUFFER, b);
    } else {
      const Y = A.textures;
      for (let q = 0; q < Y.length; q++) {
        const W = Y[q], vt = r.convert(W.format, W.colorSpace), rt = r.convert(W.type), ut = y(W.internalFormat, vt, rt, W.colorSpace), Ht = Pt(A);
        U && kt(A) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, Ht, ut, A.width, A.height) : kt(A) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, Ht, ut, A.width, A.height) : n.renderbufferStorage(n.RENDERBUFFER, ut, A.width, A.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function ht(b, A) {
    if (A && A.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(n.FRAMEBUFFER, b), !(A.depthTexture && A.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(A.depthTexture).__webglTexture || A.depthTexture.image.width !== A.width || A.depthTexture.image.height !== A.height) && (A.depthTexture.image.width = A.width, A.depthTexture.image.height = A.height, A.depthTexture.needsUpdate = !0), V(A.depthTexture, 0);
    const Y = i.get(A.depthTexture).__webglTexture, q = Pt(A);
    if (A.depthTexture.format === un)
      kt(A) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, Y, 0, q) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, Y, 0);
    else if (A.depthTexture.format === vn)
      kt(A) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, Y, 0, q) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, Y, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Tt(b) {
    const A = i.get(b), U = b.isWebGLCubeRenderTarget === !0;
    if (A.__boundDepthTexture !== b.depthTexture) {
      const Y = b.depthTexture;
      if (A.__depthDisposeCallback && A.__depthDisposeCallback(), Y) {
        const q = () => {
          delete A.__boundDepthTexture, delete A.__depthDisposeCallback, Y.removeEventListener("dispose", q);
        };
        Y.addEventListener("dispose", q), A.__depthDisposeCallback = q;
      }
      A.__boundDepthTexture = Y;
    }
    if (b.depthTexture && !A.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      ht(A.__webglFramebuffer, b);
    } else if (U) {
      A.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (e.bindFramebuffer(n.FRAMEBUFFER, A.__webglFramebuffer[Y]), A.__webglDepthbuffer[Y] === void 0)
          A.__webglDepthbuffer[Y] = n.createRenderbuffer(), gt(A.__webglDepthbuffer[Y], b, !1);
        else {
          const q = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, W = A.__webglDepthbuffer[Y];
          n.bindRenderbuffer(n.RENDERBUFFER, W), n.framebufferRenderbuffer(n.FRAMEBUFFER, q, n.RENDERBUFFER, W);
        }
    } else if (e.bindFramebuffer(n.FRAMEBUFFER, A.__webglFramebuffer), A.__webglDepthbuffer === void 0)
      A.__webglDepthbuffer = n.createRenderbuffer(), gt(A.__webglDepthbuffer, b, !1);
    else {
      const Y = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, q = A.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, q), n.framebufferRenderbuffer(n.FRAMEBUFFER, Y, n.RENDERBUFFER, q);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function yt(b, A, U) {
    const Y = i.get(b);
    A !== void 0 && J(Y.__webglFramebuffer, b, b.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), U !== void 0 && Tt(b);
  }
  function Nt(b) {
    const A = b.texture, U = i.get(b), Y = i.get(A);
    b.addEventListener("dispose", _);
    const q = b.textures, W = b.isWebGLCubeRenderTarget === !0, vt = q.length > 1;
    if (vt || (Y.__webglTexture === void 0 && (Y.__webglTexture = n.createTexture()), Y.__version = A.version, o.memory.textures++), W) {
      U.__webglFramebuffer = [];
      for (let rt = 0; rt < 6; rt++)
        if (A.mipmaps && A.mipmaps.length > 0) {
          U.__webglFramebuffer[rt] = [];
          for (let ut = 0; ut < A.mipmaps.length; ut++)
            U.__webglFramebuffer[rt][ut] = n.createFramebuffer();
        } else
          U.__webglFramebuffer[rt] = n.createFramebuffer();
    } else {
      if (A.mipmaps && A.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let rt = 0; rt < A.mipmaps.length; rt++)
          U.__webglFramebuffer[rt] = n.createFramebuffer();
      } else
        U.__webglFramebuffer = n.createFramebuffer();
      if (vt)
        for (let rt = 0, ut = q.length; rt < ut; rt++) {
          const Ht = i.get(q[rt]);
          Ht.__webglTexture === void 0 && (Ht.__webglTexture = n.createTexture(), o.memory.textures++);
        }
      if (b.samples > 0 && kt(b) === !1) {
        U.__webglMultisampledFramebuffer = n.createFramebuffer(), U.__webglColorRenderbuffer = [], e.bindFramebuffer(n.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let rt = 0; rt < q.length; rt++) {
          const ut = q[rt];
          U.__webglColorRenderbuffer[rt] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, U.__webglColorRenderbuffer[rt]);
          const Ht = r.convert(ut.format, ut.colorSpace), $ = r.convert(ut.type), dt = y(ut.internalFormat, Ht, $, ut.colorSpace, b.isXRRenderTarget === !0), wt = Pt(b);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, wt, dt, b.width, b.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + rt, n.RENDERBUFFER, U.__webglColorRenderbuffer[rt]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), b.depthBuffer && (U.__webglDepthRenderbuffer = n.createRenderbuffer(), gt(U.__webglDepthRenderbuffer, b, !0)), e.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (W) {
      e.bindTexture(n.TEXTURE_CUBE_MAP, Y.__webglTexture), et(n.TEXTURE_CUBE_MAP, A);
      for (let rt = 0; rt < 6; rt++)
        if (A.mipmaps && A.mipmaps.length > 0)
          for (let ut = 0; ut < A.mipmaps.length; ut++)
            J(U.__webglFramebuffer[rt][ut], b, A, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + rt, ut);
        else
          J(U.__webglFramebuffer[rt], b, A, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + rt, 0);
      f(A) && d(n.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (vt) {
      for (let rt = 0, ut = q.length; rt < ut; rt++) {
        const Ht = q[rt], $ = i.get(Ht);
        e.bindTexture(n.TEXTURE_2D, $.__webglTexture), et(n.TEXTURE_2D, Ht), J(U.__webglFramebuffer, b, Ht, n.COLOR_ATTACHMENT0 + rt, n.TEXTURE_2D, 0), f(Ht) && d(n.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let rt = n.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (rt = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), e.bindTexture(rt, Y.__webglTexture), et(rt, A), A.mipmaps && A.mipmaps.length > 0)
        for (let ut = 0; ut < A.mipmaps.length; ut++)
          J(U.__webglFramebuffer[ut], b, A, n.COLOR_ATTACHMENT0, rt, ut);
      else
        J(U.__webglFramebuffer, b, A, n.COLOR_ATTACHMENT0, rt, 0);
      f(A) && d(rt), e.unbindTexture();
    }
    b.depthBuffer && Tt(b);
  }
  function Xt(b) {
    const A = b.textures;
    for (let U = 0, Y = A.length; U < Y; U++) {
      const q = A[U];
      if (f(q)) {
        const W = b.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D, vt = i.get(q).__webglTexture;
        e.bindTexture(W, vt), d(W), e.unbindTexture();
      }
    }
  }
  const Gt = [], T = [];
  function be(b) {
    if (b.samples > 0) {
      if (kt(b) === !1) {
        const A = b.textures, U = b.width, Y = b.height;
        let q = n.COLOR_BUFFER_BIT;
        const W = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, vt = i.get(b), rt = A.length > 1;
        if (rt)
          for (let ut = 0; ut < A.length; ut++)
            e.bindFramebuffer(n.FRAMEBUFFER, vt.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ut, n.RENDERBUFFER, null), e.bindFramebuffer(n.FRAMEBUFFER, vt.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ut, n.TEXTURE_2D, null, 0);
        e.bindFramebuffer(n.READ_FRAMEBUFFER, vt.__webglMultisampledFramebuffer), e.bindFramebuffer(n.DRAW_FRAMEBUFFER, vt.__webglFramebuffer);
        for (let ut = 0; ut < A.length; ut++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (q |= n.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (q |= n.STENCIL_BUFFER_BIT)), rt) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, vt.__webglColorRenderbuffer[ut]);
            const Ht = i.get(A[ut]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, Ht, 0);
          }
          n.blitFramebuffer(0, 0, U, Y, 0, 0, U, Y, q, n.NEAREST), l === !0 && (Gt.length = 0, T.length = 0, Gt.push(n.COLOR_ATTACHMENT0 + ut), b.depthBuffer && b.resolveDepthBuffer === !1 && (Gt.push(W), T.push(W), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, T)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Gt));
        }
        if (e.bindFramebuffer(n.READ_FRAMEBUFFER, null), e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), rt)
          for (let ut = 0; ut < A.length; ut++) {
            e.bindFramebuffer(n.FRAMEBUFFER, vt.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ut, n.RENDERBUFFER, vt.__webglColorRenderbuffer[ut]);
            const Ht = i.get(A[ut]).__webglTexture;
            e.bindFramebuffer(n.FRAMEBUFFER, vt.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ut, n.TEXTURE_2D, Ht, 0);
          }
        e.bindFramebuffer(n.DRAW_FRAMEBUFFER, vt.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && l) {
        const A = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [A]);
      }
    }
  }
  function Pt(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function kt(b) {
    const A = i.get(b);
    return b.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && A.__useRenderToTexture !== !1;
  }
  function bt(b) {
    const A = o.render.frame;
    h.get(b) !== A && (h.set(b, A), b.update());
  }
  function jt(b, A) {
    const U = b.colorSpace, Y = b.format, q = b.type;
    return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || U !== bi && U !== Ci && (Wt.getTransfer(U) === Jt ? (Y !== Fe || q !== li) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), A;
  }
  function Et(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = I, this.setTexture2D = V, this.setTexture2DArray = X, this.setTexture3D = F, this.setTextureCube = Q, this.rebindTextures = yt, this.setupRenderTarget = Nt, this.updateRenderTargetMipmap = Xt, this.updateMultisampleRenderTarget = be, this.setupDepthRenderbuffer = Tt, this.setupFrameBufferTexture = J, this.useMultisampledRTT = kt;
}
function Ug(n, t) {
  function e(i, s = Ci) {
    let r;
    const o = Wt.getTransfer(s);
    if (i === li) return n.UNSIGNED_BYTE;
    if (i === Wo) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === Yo) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === $l) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === ql) return n.BYTE;
    if (i === Jl) return n.SHORT;
    if (i === Fn) return n.UNSIGNED_SHORT;
    if (i === Ko) return n.INT;
    if (i === ki) return n.UNSIGNED_INT;
    if (i === Qe) return n.FLOAT;
    if (i === je) return n.HALF_FLOAT;
    if (i === tc) return n.ALPHA;
    if (i === ec) return n.RGB;
    if (i === Fe) return n.RGBA;
    if (i === ic) return n.LUMINANCE;
    if (i === nc) return n.LUMINANCE_ALPHA;
    if (i === un) return n.DEPTH_COMPONENT;
    if (i === vn) return n.DEPTH_STENCIL;
    if (i === sc) return n.RED;
    if (i === Xo) return n.RED_INTEGER;
    if (i === Ys) return n.RG;
    if (i === Zo) return n.RG_INTEGER;
    if (i === Qo) return n.RGBA_INTEGER;
    if (i === Ms || i === bs || i === ws || i === _s)
      if (o === Jt)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (i === Ms) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === bs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === ws) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === _s) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (i === Ms) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === bs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === ws) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === _s) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (i === ro || i === oo || i === ao || i === lo)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (i === ro) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === oo) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === ao) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === lo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (i === co || i === ho || i === uo)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (i === co || i === ho) return o === Jt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (i === uo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (i === fo || i === po || i === go || i === mo || i === vo || i === Co || i === Ao || i === So || i === xo || i === yo || i === Io || i === Mo || i === bo || i === wo)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (i === fo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === po) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === go) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === mo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === vo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === Co) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === Ao) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === So) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === xo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === yo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === Io) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === Mo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === bo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === wo) return o === Jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (i === Es || i === _o || i === Eo)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (i === Es) return o === Jt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === _o) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === Eo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (i === rc || i === To || i === Lo || i === Ro)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (i === Es) return r.COMPRESSED_RED_RGTC1_EXT;
        if (i === To) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === Lo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === Ro) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return i === mn ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: e };
}
class Fg extends Ue {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class Un extends Ce {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ng = { type: "move" };
class Lr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Un(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Un(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Un(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const i of t.hand.values())
          this._getHandJoint(e, i);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, i) {
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        o = !0;
        for (const m of t.hand.values()) {
          const f = e.getJointPose(m, i), d = this._getHandJoint(c, m);
          f !== null && (d.matrix.fromArray(f.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = f.radius), d.visible = f !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], p = h.position.distanceTo(u.position), g = 0.02, v = 5e-3;
        c.inputState.pinching && p > g + v ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && p <= g - v && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, i), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (s = e.getPose(t.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ng)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const i = new Un();
      i.matrixAutoUpdate = !1, i.visible = !1, t.joints[e.jointName] = i, t.add(i);
    }
    return t.joints[e.jointName];
  }
}
const Gg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Og = `
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

}`;
class kg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, i) {
    if (this.texture === null) {
      const s = new ve(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear != i.depthNear || e.depthFar != i.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, i = new te({
        vertexShader: Gg,
        fragmentShader: Og,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new Ne(new Zs(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Hg extends Vi {
  constructor(t, e) {
    super();
    const i = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, p = null, g = null, v = null;
    const m = new kg(), f = e.getContextAttributes();
    let d = null, y = null;
    const S = [], M = [], E = new St();
    let _ = null;
    const w = new Ue();
    w.layers.enable(1), w.viewport = new ne();
    const P = new Ue();
    P.layers.enable(2), P.viewport = new ne();
    const j = [w, P], C = new Fg();
    C.layers.enable(1), C.layers.enable(2);
    let I = null, H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(K) {
      let J = S[K];
      return J === void 0 && (J = new Lr(), S[K] = J), J.getTargetRaySpace();
    }, this.getControllerGrip = function(K) {
      let J = S[K];
      return J === void 0 && (J = new Lr(), S[K] = J), J.getGripSpace();
    }, this.getHand = function(K) {
      let J = S[K];
      return J === void 0 && (J = new Lr(), S[K] = J), J.getHandSpace();
    };
    function k(K) {
      const J = M.indexOf(K.inputSource);
      if (J === -1)
        return;
      const gt = S[J];
      gt !== void 0 && (gt.update(K.inputSource, K.frame, c || o), gt.dispatchEvent({ type: K.type, data: K.inputSource }));
    }
    function V() {
      s.removeEventListener("select", k), s.removeEventListener("selectstart", k), s.removeEventListener("selectend", k), s.removeEventListener("squeeze", k), s.removeEventListener("squeezestart", k), s.removeEventListener("squeezeend", k), s.removeEventListener("end", V), s.removeEventListener("inputsourceschange", X);
      for (let K = 0; K < S.length; K++) {
        const J = M[K];
        J !== null && (M[K] = null, S[K].disconnect(J));
      }
      I = null, H = null, m.reset(), t.setRenderTarget(d), g = null, p = null, u = null, s = null, y = null, Bt.stop(), i.isPresenting = !1, t.setPixelRatio(_), t.setSize(E.width, E.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(K) {
      r = K, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(K) {
      a = K, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(K) {
      c = K;
    }, this.getBaseLayer = function() {
      return p !== null ? p : g;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(K) {
      if (s = K, s !== null) {
        if (d = t.getRenderTarget(), s.addEventListener("select", k), s.addEventListener("selectstart", k), s.addEventListener("selectend", k), s.addEventListener("squeeze", k), s.addEventListener("squeezestart", k), s.addEventListener("squeezeend", k), s.addEventListener("end", V), s.addEventListener("inputsourceschange", X), f.xrCompatible !== !0 && await e.makeXRCompatible(), _ = t.getPixelRatio(), t.getSize(E), s.renderState.layers === void 0) {
          const J = {
            antialias: f.antialias,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: r
          };
          g = new XRWebGLLayer(s, e, J), s.updateRenderState({ baseLayer: g }), t.setPixelRatio(1), t.setSize(g.framebufferWidth, g.framebufferHeight, !1), y = new Ge(
            g.framebufferWidth,
            g.framebufferHeight,
            {
              format: Fe,
              type: li,
              colorSpace: t.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let J = null, gt = null, ht = null;
          f.depth && (ht = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, J = f.stencil ? vn : un, gt = f.stencil ? mn : ki);
          const Tt = {
            colorFormat: e.RGBA8,
            depthFormat: ht,
            scaleFactor: r
          };
          u = new XRWebGLBinding(s, e), p = u.createProjectionLayer(Tt), s.updateRenderState({ layers: [p] }), t.setPixelRatio(1), t.setSize(p.textureWidth, p.textureHeight, !1), y = new Ge(
            p.textureWidth,
            p.textureHeight,
            {
              format: Fe,
              type: li,
              depthTexture: new Ac(p.textureWidth, p.textureHeight, gt, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: f.stencil,
              colorSpace: t.outputColorSpace,
              samples: f.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Bt.setContext(s), Bt.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function X(K) {
      for (let J = 0; J < K.removed.length; J++) {
        const gt = K.removed[J], ht = M.indexOf(gt);
        ht >= 0 && (M[ht] = null, S[ht].disconnect(gt));
      }
      for (let J = 0; J < K.added.length; J++) {
        const gt = K.added[J];
        let ht = M.indexOf(gt);
        if (ht === -1) {
          for (let yt = 0; yt < S.length; yt++)
            if (yt >= M.length) {
              M.push(gt), ht = yt;
              break;
            } else if (M[yt] === null) {
              M[yt] = gt, ht = yt;
              break;
            }
          if (ht === -1) break;
        }
        const Tt = S[ht];
        Tt && Tt.connect(gt);
      }
    }
    const F = new B(), Q = new B();
    function O(K, J, gt) {
      F.setFromMatrixPosition(J.matrixWorld), Q.setFromMatrixPosition(gt.matrixWorld);
      const ht = F.distanceTo(Q), Tt = J.projectionMatrix.elements, yt = gt.projectionMatrix.elements, Nt = Tt[14] / (Tt[10] - 1), Xt = Tt[14] / (Tt[10] + 1), Gt = (Tt[9] + 1) / Tt[5], T = (Tt[9] - 1) / Tt[5], be = (Tt[8] - 1) / Tt[0], Pt = (yt[8] + 1) / yt[0], kt = Nt * be, bt = Nt * Pt, jt = ht / (-be + Pt), Et = jt * -be;
      if (J.matrixWorld.decompose(K.position, K.quaternion, K.scale), K.translateX(Et), K.translateZ(jt), K.matrixWorld.compose(K.position, K.quaternion, K.scale), K.matrixWorldInverse.copy(K.matrixWorld).invert(), Tt[10] === -1)
        K.projectionMatrix.copy(J.projectionMatrix), K.projectionMatrixInverse.copy(J.projectionMatrixInverse);
      else {
        const b = Nt + jt, A = Xt + jt, U = kt - Et, Y = bt + (ht - Et), q = Gt * Xt / A * b, W = T * Xt / A * b;
        K.projectionMatrix.makePerspective(U, Y, q, W, b, A), K.projectionMatrixInverse.copy(K.projectionMatrix).invert();
      }
    }
    function it(K, J) {
      J === null ? K.matrixWorld.copy(K.matrix) : K.matrixWorld.multiplyMatrices(J.matrixWorld, K.matrix), K.matrixWorldInverse.copy(K.matrixWorld).invert();
    }
    this.updateCamera = function(K) {
      if (s === null) return;
      let J = K.near, gt = K.far;
      m.texture !== null && (m.depthNear > 0 && (J = m.depthNear), m.depthFar > 0 && (gt = m.depthFar)), C.near = P.near = w.near = J, C.far = P.far = w.far = gt, (I !== C.near || H !== C.far) && (s.updateRenderState({
        depthNear: C.near,
        depthFar: C.far
      }), I = C.near, H = C.far);
      const ht = K.parent, Tt = C.cameras;
      it(C, ht);
      for (let yt = 0; yt < Tt.length; yt++)
        it(Tt[yt], ht);
      Tt.length === 2 ? O(C, w, P) : C.projectionMatrix.copy(w.projectionMatrix), st(K, C, ht);
    };
    function st(K, J, gt) {
      gt === null ? K.matrix.copy(J.matrixWorld) : (K.matrix.copy(gt.matrixWorld), K.matrix.invert(), K.matrix.multiply(J.matrixWorld)), K.matrix.decompose(K.position, K.quaternion, K.scale), K.updateMatrixWorld(!0), K.projectionMatrix.copy(J.projectionMatrix), K.projectionMatrixInverse.copy(J.projectionMatrixInverse), K.isPerspectiveCamera && (K.fov = Bo * 2 * Math.atan(1 / K.projectionMatrix.elements[5]), K.zoom = 1);
    }
    this.getCamera = function() {
      return C;
    }, this.getFoveation = function() {
      if (!(p === null && g === null))
        return l;
    }, this.setFoveation = function(K) {
      l = K, p !== null && (p.fixedFoveation = K), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = K);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(C);
    };
    let et = null;
    function Ft(K, J) {
      if (h = J.getViewerPose(c || o), v = J, h !== null) {
        const gt = h.views;
        g !== null && (t.setRenderTargetFramebuffer(y, g.framebuffer), t.setRenderTarget(y));
        let ht = !1;
        gt.length !== C.cameras.length && (C.cameras.length = 0, ht = !0);
        for (let yt = 0; yt < gt.length; yt++) {
          const Nt = gt[yt];
          let Xt = null;
          if (g !== null)
            Xt = g.getViewport(Nt);
          else {
            const T = u.getViewSubImage(p, Nt);
            Xt = T.viewport, yt === 0 && (t.setRenderTargetTextures(
              y,
              T.colorTexture,
              p.ignoreDepthValues ? void 0 : T.depthStencilTexture
            ), t.setRenderTarget(y));
          }
          let Gt = j[yt];
          Gt === void 0 && (Gt = new Ue(), Gt.layers.enable(yt), Gt.viewport = new ne(), j[yt] = Gt), Gt.matrix.fromArray(Nt.transform.matrix), Gt.matrix.decompose(Gt.position, Gt.quaternion, Gt.scale), Gt.projectionMatrix.fromArray(Nt.projectionMatrix), Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(), Gt.viewport.set(Xt.x, Xt.y, Xt.width, Xt.height), yt === 0 && (C.matrix.copy(Gt.matrix), C.matrix.decompose(C.position, C.quaternion, C.scale)), ht === !0 && C.cameras.push(Gt);
        }
        const Tt = s.enabledFeatures;
        if (Tt && Tt.includes("depth-sensing")) {
          const yt = u.getDepthInformation(gt[0]);
          yt && yt.isValid && yt.texture && m.init(t, yt, s.renderState);
        }
      }
      for (let gt = 0; gt < S.length; gt++) {
        const ht = M[gt], Tt = S[gt];
        ht !== null && Tt !== void 0 && Tt.update(ht, J, c || o);
      }
      et && et(K, J), J.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: J }), v = null;
    }
    const Bt = new vc();
    Bt.setAnimationLoop(Ft), this.setAnimationLoop = function(K) {
      et = K;
    }, this.dispose = function() {
    };
  }
}
const Di = /* @__PURE__ */ new ci(), zg = /* @__PURE__ */ new $t();
function Vg(n, t) {
  function e(f, d) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), d.value.copy(f.matrix);
  }
  function i(f, d) {
    d.color.getRGB(f.fogColor.value, fc(n)), d.isFog ? (f.fogNear.value = d.near, f.fogFar.value = d.far) : d.isFogExp2 && (f.fogDensity.value = d.density);
  }
  function s(f, d, y, S, M) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? r(f, d) : d.isMeshToonMaterial ? (r(f, d), u(f, d)) : d.isMeshPhongMaterial ? (r(f, d), h(f, d)) : d.isMeshStandardMaterial ? (r(f, d), p(f, d), d.isMeshPhysicalMaterial && g(f, d, M)) : d.isMeshMatcapMaterial ? (r(f, d), v(f, d)) : d.isMeshDepthMaterial ? r(f, d) : d.isMeshDistanceMaterial ? (r(f, d), m(f, d)) : d.isMeshNormalMaterial ? r(f, d) : d.isLineBasicMaterial ? (o(f, d), d.isLineDashedMaterial && a(f, d)) : d.isPointsMaterial ? l(f, d, y, S) : d.isSpriteMaterial ? c(f, d) : d.isShadowMaterial ? (f.color.value.copy(d.color), f.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function r(f, d) {
    f.opacity.value = d.opacity, d.color && f.diffuse.value.copy(d.color), d.emissive && f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (f.map.value = d.map, e(d.map, f.mapTransform)), d.alphaMap && (f.alphaMap.value = d.alphaMap, e(d.alphaMap, f.alphaMapTransform)), d.bumpMap && (f.bumpMap.value = d.bumpMap, e(d.bumpMap, f.bumpMapTransform), f.bumpScale.value = d.bumpScale, d.side === Me && (f.bumpScale.value *= -1)), d.normalMap && (f.normalMap.value = d.normalMap, e(d.normalMap, f.normalMapTransform), f.normalScale.value.copy(d.normalScale), d.side === Me && f.normalScale.value.negate()), d.displacementMap && (f.displacementMap.value = d.displacementMap, e(d.displacementMap, f.displacementMapTransform), f.displacementScale.value = d.displacementScale, f.displacementBias.value = d.displacementBias), d.emissiveMap && (f.emissiveMap.value = d.emissiveMap, e(d.emissiveMap, f.emissiveMapTransform)), d.specularMap && (f.specularMap.value = d.specularMap, e(d.specularMap, f.specularMapTransform)), d.alphaTest > 0 && (f.alphaTest.value = d.alphaTest);
    const y = t.get(d), S = y.envMap, M = y.envMapRotation;
    S && (f.envMap.value = S, Di.copy(M), Di.x *= -1, Di.y *= -1, Di.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (Di.y *= -1, Di.z *= -1), f.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Di)), f.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = d.reflectivity, f.ior.value = d.ior, f.refractionRatio.value = d.refractionRatio), d.lightMap && (f.lightMap.value = d.lightMap, f.lightMapIntensity.value = d.lightMapIntensity, e(d.lightMap, f.lightMapTransform)), d.aoMap && (f.aoMap.value = d.aoMap, f.aoMapIntensity.value = d.aoMapIntensity, e(d.aoMap, f.aoMapTransform));
  }
  function o(f, d) {
    f.diffuse.value.copy(d.color), f.opacity.value = d.opacity, d.map && (f.map.value = d.map, e(d.map, f.mapTransform));
  }
  function a(f, d) {
    f.dashSize.value = d.dashSize, f.totalSize.value = d.dashSize + d.gapSize, f.scale.value = d.scale;
  }
  function l(f, d, y, S) {
    f.diffuse.value.copy(d.color), f.opacity.value = d.opacity, f.size.value = d.size * y, f.scale.value = S * 0.5, d.map && (f.map.value = d.map, e(d.map, f.uvTransform)), d.alphaMap && (f.alphaMap.value = d.alphaMap, e(d.alphaMap, f.alphaMapTransform)), d.alphaTest > 0 && (f.alphaTest.value = d.alphaTest);
  }
  function c(f, d) {
    f.diffuse.value.copy(d.color), f.opacity.value = d.opacity, f.rotation.value = d.rotation, d.map && (f.map.value = d.map, e(d.map, f.mapTransform)), d.alphaMap && (f.alphaMap.value = d.alphaMap, e(d.alphaMap, f.alphaMapTransform)), d.alphaTest > 0 && (f.alphaTest.value = d.alphaTest);
  }
  function h(f, d) {
    f.specular.value.copy(d.specular), f.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function u(f, d) {
    d.gradientMap && (f.gradientMap.value = d.gradientMap);
  }
  function p(f, d) {
    f.metalness.value = d.metalness, d.metalnessMap && (f.metalnessMap.value = d.metalnessMap, e(d.metalnessMap, f.metalnessMapTransform)), f.roughness.value = d.roughness, d.roughnessMap && (f.roughnessMap.value = d.roughnessMap, e(d.roughnessMap, f.roughnessMapTransform)), d.envMap && (f.envMapIntensity.value = d.envMapIntensity);
  }
  function g(f, d, y) {
    f.ior.value = d.ior, d.sheen > 0 && (f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), f.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (f.sheenColorMap.value = d.sheenColorMap, e(d.sheenColorMap, f.sheenColorMapTransform)), d.sheenRoughnessMap && (f.sheenRoughnessMap.value = d.sheenRoughnessMap, e(d.sheenRoughnessMap, f.sheenRoughnessMapTransform))), d.clearcoat > 0 && (f.clearcoat.value = d.clearcoat, f.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (f.clearcoatMap.value = d.clearcoatMap, e(d.clearcoatMap, f.clearcoatMapTransform)), d.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, e(d.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (f.clearcoatNormalMap.value = d.clearcoatNormalMap, e(d.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === Me && f.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (f.dispersion.value = d.dispersion), d.iridescence > 0 && (f.iridescence.value = d.iridescence, f.iridescenceIOR.value = d.iridescenceIOR, f.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (f.iridescenceMap.value = d.iridescenceMap, e(d.iridescenceMap, f.iridescenceMapTransform)), d.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = d.iridescenceThicknessMap, e(d.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), d.transmission > 0 && (f.transmission.value = d.transmission, f.transmissionSamplerMap.value = y.texture, f.transmissionSamplerSize.value.set(y.width, y.height), d.transmissionMap && (f.transmissionMap.value = d.transmissionMap, e(d.transmissionMap, f.transmissionMapTransform)), f.thickness.value = d.thickness, d.thicknessMap && (f.thicknessMap.value = d.thicknessMap, e(d.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = d.attenuationDistance, f.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (f.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (f.anisotropyMap.value = d.anisotropyMap, e(d.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = d.specularIntensity, f.specularColor.value.copy(d.specularColor), d.specularColorMap && (f.specularColorMap.value = d.specularColorMap, e(d.specularColorMap, f.specularColorMapTransform)), d.specularIntensityMap && (f.specularIntensityMap.value = d.specularIntensityMap, e(d.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function v(f, d) {
    d.matcap && (f.matcap.value = d.matcap);
  }
  function m(f, d) {
    const y = t.get(d).light;
    f.referencePosition.value.setFromMatrixPosition(y.matrixWorld), f.nearDistance.value = y.shadow.camera.near, f.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: s
  };
}
function Kg(n, t, e, i) {
  let s = {}, r = {}, o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(y, S) {
    const M = S.program;
    i.uniformBlockBinding(y, M);
  }
  function c(y, S) {
    let M = s[y.id];
    M === void 0 && (v(y), M = h(y), s[y.id] = M, y.addEventListener("dispose", f));
    const E = S.program;
    i.updateUBOMapping(y, E);
    const _ = t.render.frame;
    r[y.id] !== _ && (p(y), r[y.id] = _);
  }
  function h(y) {
    const S = u();
    y.__bindingPointIndex = S;
    const M = n.createBuffer(), E = y.__size, _ = y.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, M), n.bufferData(n.UNIFORM_BUFFER, E, _), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, S, M), M;
  }
  function u() {
    for (let y = 0; y < a; y++)
      if (o.indexOf(y) === -1)
        return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(y) {
    const S = s[y.id], M = y.uniforms, E = y.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, S);
    for (let _ = 0, w = M.length; _ < w; _++) {
      const P = Array.isArray(M[_]) ? M[_] : [M[_]];
      for (let j = 0, C = P.length; j < C; j++) {
        const I = P[j];
        if (g(I, _, j, E) === !0) {
          const H = I.__offset, k = Array.isArray(I.value) ? I.value : [I.value];
          let V = 0;
          for (let X = 0; X < k.length; X++) {
            const F = k[X], Q = m(F);
            typeof F == "number" || typeof F == "boolean" ? (I.__data[0] = F, n.bufferSubData(n.UNIFORM_BUFFER, H + V, I.__data)) : F.isMatrix3 ? (I.__data[0] = F.elements[0], I.__data[1] = F.elements[1], I.__data[2] = F.elements[2], I.__data[3] = 0, I.__data[4] = F.elements[3], I.__data[5] = F.elements[4], I.__data[6] = F.elements[5], I.__data[7] = 0, I.__data[8] = F.elements[6], I.__data[9] = F.elements[7], I.__data[10] = F.elements[8], I.__data[11] = 0) : (F.toArray(I.__data, V), V += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, H, I.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function g(y, S, M, E) {
    const _ = y.value, w = S + "_" + M;
    if (E[w] === void 0)
      return typeof _ == "number" || typeof _ == "boolean" ? E[w] = _ : E[w] = _.clone(), !0;
    {
      const P = E[w];
      if (typeof _ == "number" || typeof _ == "boolean") {
        if (P !== _)
          return E[w] = _, !0;
      } else if (P.equals(_) === !1)
        return P.copy(_), !0;
    }
    return !1;
  }
  function v(y) {
    const S = y.uniforms;
    let M = 0;
    const E = 16;
    for (let w = 0, P = S.length; w < P; w++) {
      const j = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let C = 0, I = j.length; C < I; C++) {
        const H = j[C], k = Array.isArray(H.value) ? H.value : [H.value];
        for (let V = 0, X = k.length; V < X; V++) {
          const F = k[V], Q = m(F), O = M % E, it = O % Q.boundary, st = O + it;
          M += it, st !== 0 && E - st < Q.storage && (M += E - st), H.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = M, M += Q.storage;
        }
      }
    }
    const _ = M % E;
    return _ > 0 && (M += E - _), y.__size = M, y.__cache = {}, this;
  }
  function m(y) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" || typeof y == "boolean" ? (S.boundary = 4, S.storage = 4) : y.isVector2 ? (S.boundary = 8, S.storage = 8) : y.isVector3 || y.isColor ? (S.boundary = 16, S.storage = 12) : y.isVector4 ? (S.boundary = 16, S.storage = 16) : y.isMatrix3 ? (S.boundary = 48, S.storage = 48) : y.isMatrix4 ? (S.boundary = 64, S.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), S;
  }
  function f(y) {
    const S = y.target;
    S.removeEventListener("dispose", f);
    const M = o.indexOf(S.__bindingPointIndex);
    o.splice(M, 1), n.deleteBuffer(s[S.id]), delete s[S.id], delete r[S.id];
  }
  function d() {
    for (const y in s)
      n.deleteBuffer(s[y]);
    o = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: d
  };
}
class Wg {
  constructor(t = {}) {
    const {
      canvas: e = Dh(),
      context: i = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = t;
    this.isWebGLRenderer = !0;
    let p;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = i.getContextAttributes().alpha;
    } else
      p = o;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let m = null, f = null;
    const d = [], y = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Xe, this.toneMapping = Si, this.toneMappingExposure = 1;
    const S = this;
    let M = !1, E = 0, _ = 0, w = null, P = -1, j = null;
    const C = new ne(), I = new ne();
    let H = null;
    const k = new Mt(0);
    let V = 0, X = e.width, F = e.height, Q = 1, O = null, it = null;
    const st = new ne(0, 0, X, F), et = new ne(0, 0, X, F);
    let Ft = !1;
    const Bt = new mc();
    let K = !1, J = !1;
    const gt = new $t(), ht = new $t(), Tt = new B(), yt = new ne(), Nt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Xt = !1;
    function Gt() {
      return w === null ? Q : 1;
    }
    let T = i;
    function be(x, R) {
      return e.getContext(x, R);
    }
    try {
      const x = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Vo}`), e.addEventListener("webglcontextlost", Z, !1), e.addEventListener("webglcontextrestored", ot, !1), e.addEventListener("webglcontextcreationerror", ct, !1), T === null) {
        const R = "webgl2";
        if (T = be(R, x), T === null)
          throw be(R) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Pt, kt, bt, jt, Et, b, A, U, Y, q, W, vt, rt, ut, Ht, $, dt, wt, _t, ft, Ut, Lt, Qt, L;
    function lt() {
      Pt = new jf(T), Pt.init(), Lt = new Ug(T, Pt), kt = new Kf(T, Pt, t, Lt), bt = new Dg(T), kt.reverseDepthBuffer && bt.buffers.depth.setReversed(!0), jt = new $f(T), Et = new vg(), b = new Pg(T, Pt, bt, Et, kt, Lt, jt), A = new Yf(S), U = new Qf(S), Y = new ru(T), Qt = new zf(T, Y), q = new qf(T, Y, jt, Qt), W = new ep(T, q, Y, jt), _t = new tp(T, kt, b), $ = new Wf(Et), vt = new mg(S, A, U, Pt, kt, Qt, $), rt = new Vg(S, Et), ut = new Ag(), Ht = new bg(Pt), wt = new Hf(S, A, U, bt, W, p, l), dt = new Lg(S, W, kt), L = new Kg(T, jt, kt, bt), ft = new Vf(T, Pt, jt), Ut = new Jf(T, Pt, jt), jt.programs = vt.programs, S.capabilities = kt, S.extensions = Pt, S.properties = Et, S.renderLists = ut, S.shadowMap = dt, S.state = bt, S.info = jt;
    }
    lt();
    const z = new Hg(S, T);
    this.xr = z, this.getContext = function() {
      return T;
    }, this.getContextAttributes = function() {
      return T.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Pt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Pt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return Q;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (Q = x, this.setSize(X, F, !1));
    }, this.getSize = function(x) {
      return x.set(X, F);
    }, this.setSize = function(x, R, N = !0) {
      if (z.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = x, F = R, e.width = Math.floor(x * Q), e.height = Math.floor(R * Q), N === !0 && (e.style.width = x + "px", e.style.height = R + "px"), this.setViewport(0, 0, x, R);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(X * Q, F * Q).floor();
    }, this.setDrawingBufferSize = function(x, R, N) {
      X = x, F = R, Q = N, e.width = Math.floor(x * N), e.height = Math.floor(R * N), this.setViewport(0, 0, x, R);
    }, this.getCurrentViewport = function(x) {
      return x.copy(C);
    }, this.getViewport = function(x) {
      return x.copy(st);
    }, this.setViewport = function(x, R, N, G) {
      x.isVector4 ? st.set(x.x, x.y, x.z, x.w) : st.set(x, R, N, G), bt.viewport(C.copy(st).multiplyScalar(Q).round());
    }, this.getScissor = function(x) {
      return x.copy(et);
    }, this.setScissor = function(x, R, N, G) {
      x.isVector4 ? et.set(x.x, x.y, x.z, x.w) : et.set(x, R, N, G), bt.scissor(I.copy(et).multiplyScalar(Q).round());
    }, this.getScissorTest = function() {
      return Ft;
    }, this.setScissorTest = function(x) {
      bt.setScissorTest(Ft = x);
    }, this.setOpaqueSort = function(x) {
      O = x;
    }, this.setTransparentSort = function(x) {
      it = x;
    }, this.getClearColor = function(x) {
      return x.copy(wt.getClearColor());
    }, this.setClearColor = function() {
      wt.setClearColor.apply(wt, arguments);
    }, this.getClearAlpha = function() {
      return wt.getClearAlpha();
    }, this.setClearAlpha = function() {
      wt.setClearAlpha.apply(wt, arguments);
    }, this.clear = function(x = !0, R = !0, N = !0) {
      let G = 0;
      if (x) {
        let D = !1;
        if (w !== null) {
          const tt = w.texture.format;
          D = tt === Qo || tt === Zo || tt === Xo;
        }
        if (D) {
          const tt = w.texture.type, at = tt === li || tt === ki || tt === Fn || tt === mn || tt === Wo || tt === Yo, pt = wt.getClearColor(), mt = wt.getClearAlpha(), xt = pt.r, It = pt.g, Ct = pt.b;
          at ? (g[0] = xt, g[1] = It, g[2] = Ct, g[3] = mt, T.clearBufferuiv(T.COLOR, 0, g)) : (v[0] = xt, v[1] = It, v[2] = Ct, v[3] = mt, T.clearBufferiv(T.COLOR, 0, v));
        } else
          G |= T.COLOR_BUFFER_BIT;
      }
      R && (G |= T.DEPTH_BUFFER_BIT, T.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), N && (G |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Z, !1), e.removeEventListener("webglcontextrestored", ot, !1), e.removeEventListener("webglcontextcreationerror", ct, !1), ut.dispose(), Ht.dispose(), Et.dispose(), A.dispose(), U.dispose(), W.dispose(), Qt.dispose(), L.dispose(), vt.dispose(), z.dispose(), z.removeEventListener("sessionstart", aa), z.removeEventListener("sessionend", la), wi.stop();
    };
    function Z(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M = !0;
    }
    function ot() {
      console.log("THREE.WebGLRenderer: Context Restored."), M = !1;
      const x = jt.autoReset, R = dt.enabled, N = dt.autoUpdate, G = dt.needsUpdate, D = dt.type;
      lt(), jt.autoReset = x, dt.enabled = R, dt.autoUpdate = N, dt.needsUpdate = G, dt.type = D;
    }
    function ct(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Ot(x) {
      const R = x.target;
      R.removeEventListener("dispose", Ot), se(R);
    }
    function se(x) {
      Se(x), Et.remove(x);
    }
    function Se(x) {
      const R = Et.get(x).programs;
      R !== void 0 && (R.forEach(function(N) {
        vt.releaseProgram(N);
      }), x.isShaderMaterial && vt.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, R, N, G, D, tt) {
      R === null && (R = Nt);
      const at = D.isMesh && D.matrixWorld.determinant() < 0, pt = kc(x, R, N, G, D);
      bt.setMaterial(G, at);
      let mt = N.index, xt = 1;
      if (G.wireframe === !0) {
        if (mt = q.getWireframeAttribute(N), mt === void 0) return;
        xt = 2;
      }
      const It = N.drawRange, Ct = N.attributes.position;
      let Yt = It.start * xt, qt = (It.start + It.count) * xt;
      tt !== null && (Yt = Math.max(Yt, tt.start * xt), qt = Math.min(qt, (tt.start + tt.count) * xt)), mt !== null ? (Yt = Math.max(Yt, 0), qt = Math.min(qt, mt.count)) : Ct != null && (Yt = Math.max(Yt, 0), qt = Math.min(qt, Ct.count));
      const ee = qt - Yt;
      if (ee < 0 || ee === 1 / 0) return;
      Qt.setup(D, G, pt, N, mt);
      let we, Vt = ft;
      if (mt !== null && (we = Y.get(mt), Vt = Ut, Vt.setIndex(we)), D.isMesh)
        G.wireframe === !0 ? (bt.setLineWidth(G.wireframeLinewidth * Gt()), Vt.setMode(T.LINES)) : Vt.setMode(T.TRIANGLES);
      else if (D.isLine) {
        let At = G.linewidth;
        At === void 0 && (At = 1), bt.setLineWidth(At * Gt()), D.isLineSegments ? Vt.setMode(T.LINES) : D.isLineLoop ? Vt.setMode(T.LINE_LOOP) : Vt.setMode(T.LINE_STRIP);
      } else D.isPoints ? Vt.setMode(T.POINTS) : D.isSprite && Vt.setMode(T.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          Vt.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
        else if (Pt.get("WEBGL_multi_draw"))
          Vt.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
        else {
          const At = D._multiDrawStarts, ue = D._multiDrawCounts, Kt = D._multiDrawCount, Oe = mt ? Y.get(mt).bytesPerElement : 1, Wi = Et.get(G).currentProgram.getUniforms();
          for (let _e = 0; _e < Kt; _e++)
            Wi.setValue(T, "_gl_DrawID", _e), Vt.render(At[_e] / Oe, ue[_e]);
        }
      else if (D.isInstancedMesh)
        Vt.renderInstances(Yt, ee, D.count);
      else if (N.isInstancedBufferGeometry) {
        const At = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0, ue = Math.min(N.instanceCount, At);
        Vt.renderInstances(Yt, ee, ue);
      } else
        Vt.render(Yt, ee);
    };
    function zt(x, R, N) {
      x.transparent === !0 && x.side === oi && x.forceSinglePass === !1 ? (x.side = Me, x.needsUpdate = !0, Yn(x, R, N), x.side = yi, x.needsUpdate = !0, Yn(x, R, N), x.side = oi) : Yn(x, R, N);
    }
    this.compile = function(x, R, N = null) {
      N === null && (N = x), f = Ht.get(N), f.init(R), y.push(f), N.traverseVisible(function(D) {
        D.isLight && D.layers.test(R.layers) && (f.pushLight(D), D.castShadow && f.pushShadow(D));
      }), x !== N && x.traverseVisible(function(D) {
        D.isLight && D.layers.test(R.layers) && (f.pushLight(D), D.castShadow && f.pushShadow(D));
      }), f.setupLights();
      const G = /* @__PURE__ */ new Set();
      return x.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite))
          return;
        const tt = D.material;
        if (tt)
          if (Array.isArray(tt))
            for (let at = 0; at < tt.length; at++) {
              const pt = tt[at];
              zt(pt, N, D), G.add(pt);
            }
          else
            zt(tt, N, D), G.add(tt);
      }), y.pop(), f = null, G;
    }, this.compileAsync = function(x, R, N = null) {
      const G = this.compile(x, R, N);
      return new Promise((D) => {
        function tt() {
          if (G.forEach(function(at) {
            Et.get(at).currentProgram.isReady() && G.delete(at);
          }), G.size === 0) {
            D(x);
            return;
          }
          setTimeout(tt, 10);
        }
        Pt.get("KHR_parallel_shader_compile") !== null ? tt() : setTimeout(tt, 10);
      });
    };
    let xe = null;
    function $e(x) {
      xe && xe(x);
    }
    function aa() {
      wi.stop();
    }
    function la() {
      wi.start();
    }
    const wi = new vc();
    wi.setAnimationLoop($e), typeof self < "u" && wi.setContext(self), this.setAnimationLoop = function(x) {
      xe = x, z.setAnimationLoop(x), x === null ? wi.stop() : wi.start();
    }, z.addEventListener("sessionstart", aa), z.addEventListener("sessionend", la), this.render = function(x, R) {
      if (R !== void 0 && R.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (M === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), R.parent === null && R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(), z.enabled === !0 && z.isPresenting === !0 && (z.cameraAutoUpdate === !0 && z.updateCamera(R), R = z.getCamera()), x.isScene === !0 && x.onBeforeRender(S, x, R, w), f = Ht.get(x, y.length), f.init(R), y.push(f), ht.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse), Bt.setFromProjectionMatrix(ht), J = this.localClippingEnabled, K = $.init(this.clippingPlanes, J), m = ut.get(x, d.length), m.init(), d.push(m), z.enabled === !0 && z.isPresenting === !0) {
        const tt = S.xr.getDepthSensingMesh();
        tt !== null && qs(tt, R, -1 / 0, S.sortObjects);
      }
      qs(x, R, 0, S.sortObjects), m.finish(), S.sortObjects === !0 && m.sort(O, it), Xt = z.enabled === !1 || z.isPresenting === !1 || z.hasDepthSensing() === !1, Xt && wt.addToRenderList(m, x), this.info.render.frame++, K === !0 && $.beginShadows();
      const N = f.state.shadowsArray;
      dt.render(N, x, R), K === !0 && $.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const G = m.opaque, D = m.transmissive;
      if (f.setupLights(), R.isArrayCamera) {
        const tt = R.cameras;
        if (D.length > 0)
          for (let at = 0, pt = tt.length; at < pt; at++) {
            const mt = tt[at];
            ha(G, D, x, mt);
          }
        Xt && wt.render(x);
        for (let at = 0, pt = tt.length; at < pt; at++) {
          const mt = tt[at];
          ca(m, x, mt, mt.viewport);
        }
      } else
        D.length > 0 && ha(G, D, x, R), Xt && wt.render(x), ca(m, x, R);
      w !== null && (b.updateMultisampleRenderTarget(w), b.updateRenderTargetMipmap(w)), x.isScene === !0 && x.onAfterRender(S, x, R), Qt.resetDefaultState(), P = -1, j = null, y.pop(), y.length > 0 ? (f = y[y.length - 1], K === !0 && $.setGlobalState(S.clippingPlanes, f.state.camera)) : f = null, d.pop(), d.length > 0 ? m = d[d.length - 1] : m = null;
    };
    function qs(x, R, N, G) {
      if (x.visible === !1) return;
      if (x.layers.test(R.layers)) {
        if (x.isGroup)
          N = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(R);
        else if (x.isLight)
          f.pushLight(x), x.castShadow && f.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || Bt.intersectsSprite(x)) {
            G && yt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ht);
            const at = W.update(x), pt = x.material;
            pt.visible && m.push(x, at, pt, N, yt.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || Bt.intersectsObject(x))) {
          const at = W.update(x), pt = x.material;
          if (G && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), yt.copy(x.boundingSphere.center)) : (at.boundingSphere === null && at.computeBoundingSphere(), yt.copy(at.boundingSphere.center)), yt.applyMatrix4(x.matrixWorld).applyMatrix4(ht)), Array.isArray(pt)) {
            const mt = at.groups;
            for (let xt = 0, It = mt.length; xt < It; xt++) {
              const Ct = mt[xt], Yt = pt[Ct.materialIndex];
              Yt && Yt.visible && m.push(x, at, Yt, N, yt.z, Ct);
            }
          } else pt.visible && m.push(x, at, pt, N, yt.z, null);
        }
      }
      const tt = x.children;
      for (let at = 0, pt = tt.length; at < pt; at++)
        qs(tt[at], R, N, G);
    }
    function ca(x, R, N, G) {
      const D = x.opaque, tt = x.transmissive, at = x.transparent;
      f.setupLightsView(N), K === !0 && $.setGlobalState(S.clippingPlanes, N), G && bt.viewport(C.copy(G)), D.length > 0 && Wn(D, R, N), tt.length > 0 && Wn(tt, R, N), at.length > 0 && Wn(at, R, N), bt.buffers.depth.setTest(!0), bt.buffers.depth.setMask(!0), bt.buffers.color.setMask(!0), bt.setPolygonOffset(!1);
    }
    function ha(x, R, N, G) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null)
        return;
      f.state.transmissionRenderTarget[G.id] === void 0 && (f.state.transmissionRenderTarget[G.id] = new Ge(1, 1, {
        generateMipmaps: !0,
        type: Pt.has("EXT_color_buffer_half_float") || Pt.has("EXT_color_buffer_float") ? je : li,
        minFilter: Ni,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Wt.workingColorSpace
      }));
      const tt = f.state.transmissionRenderTarget[G.id], at = G.viewport || C;
      tt.setSize(at.z, at.w);
      const pt = S.getRenderTarget();
      S.setRenderTarget(tt), S.getClearColor(k), V = S.getClearAlpha(), V < 1 && S.setClearColor(16777215, 0.5), S.clear(), Xt && wt.render(N);
      const mt = S.toneMapping;
      S.toneMapping = Si;
      const xt = G.viewport;
      if (G.viewport !== void 0 && (G.viewport = void 0), f.setupLightsView(G), K === !0 && $.setGlobalState(S.clippingPlanes, G), Wn(x, N, G), b.updateMultisampleRenderTarget(tt), b.updateRenderTargetMipmap(tt), Pt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let It = !1;
        for (let Ct = 0, Yt = R.length; Ct < Yt; Ct++) {
          const qt = R[Ct], ee = qt.object, we = qt.geometry, Vt = qt.material, At = qt.group;
          if (Vt.side === oi && ee.layers.test(G.layers)) {
            const ue = Vt.side;
            Vt.side = Me, Vt.needsUpdate = !0, ua(ee, N, G, we, Vt, At), Vt.side = ue, Vt.needsUpdate = !0, It = !0;
          }
        }
        It === !0 && (b.updateMultisampleRenderTarget(tt), b.updateRenderTargetMipmap(tt));
      }
      S.setRenderTarget(pt), S.setClearColor(k, V), xt !== void 0 && (G.viewport = xt), S.toneMapping = mt;
    }
    function Wn(x, R, N) {
      const G = R.isScene === !0 ? R.overrideMaterial : null;
      for (let D = 0, tt = x.length; D < tt; D++) {
        const at = x[D], pt = at.object, mt = at.geometry, xt = G === null ? at.material : G, It = at.group;
        pt.layers.test(N.layers) && ua(pt, R, N, mt, xt, It);
      }
    }
    function ua(x, R, N, G, D, tt) {
      x.onBeforeRender(S, R, N, G, D, tt), x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), D.onBeforeRender(S, R, N, G, x, tt), D.transparent === !0 && D.side === oi && D.forceSinglePass === !1 ? (D.side = Me, D.needsUpdate = !0, S.renderBufferDirect(N, R, G, D, x, tt), D.side = yi, D.needsUpdate = !0, S.renderBufferDirect(N, R, G, D, x, tt), D.side = oi) : S.renderBufferDirect(N, R, G, D, x, tt), x.onAfterRender(S, R, N, G, D, tt);
    }
    function Yn(x, R, N) {
      R.isScene !== !0 && (R = Nt);
      const G = Et.get(x), D = f.state.lights, tt = f.state.shadowsArray, at = D.state.version, pt = vt.getParameters(x, D.state, tt, R, N), mt = vt.getProgramCacheKey(pt);
      let xt = G.programs;
      G.environment = x.isMeshStandardMaterial ? R.environment : null, G.fog = R.fog, G.envMap = (x.isMeshStandardMaterial ? U : A).get(x.envMap || G.environment), G.envMapRotation = G.environment !== null && x.envMap === null ? R.environmentRotation : x.envMapRotation, xt === void 0 && (x.addEventListener("dispose", Ot), xt = /* @__PURE__ */ new Map(), G.programs = xt);
      let It = xt.get(mt);
      if (It !== void 0) {
        if (G.currentProgram === It && G.lightsStateVersion === at)
          return fa(x, pt), It;
      } else
        pt.uniforms = vt.getUniforms(x), x.onBeforeCompile(pt, S), It = vt.acquireProgram(pt, mt), xt.set(mt, It), G.uniforms = pt.uniforms;
      const Ct = G.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Ct.clippingPlanes = $.uniform), fa(x, pt), G.needsLights = zc(x), G.lightsStateVersion = at, G.needsLights && (Ct.ambientLightColor.value = D.state.ambient, Ct.lightProbe.value = D.state.probe, Ct.directionalLights.value = D.state.directional, Ct.directionalLightShadows.value = D.state.directionalShadow, Ct.spotLights.value = D.state.spot, Ct.spotLightShadows.value = D.state.spotShadow, Ct.rectAreaLights.value = D.state.rectArea, Ct.ltc_1.value = D.state.rectAreaLTC1, Ct.ltc_2.value = D.state.rectAreaLTC2, Ct.pointLights.value = D.state.point, Ct.pointLightShadows.value = D.state.pointShadow, Ct.hemisphereLights.value = D.state.hemi, Ct.directionalShadowMap.value = D.state.directionalShadowMap, Ct.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Ct.spotShadowMap.value = D.state.spotShadowMap, Ct.spotLightMatrix.value = D.state.spotLightMatrix, Ct.spotLightMap.value = D.state.spotLightMap, Ct.pointShadowMap.value = D.state.pointShadowMap, Ct.pointShadowMatrix.value = D.state.pointShadowMatrix), G.currentProgram = It, G.uniformsList = null, It;
    }
    function da(x) {
      if (x.uniformsList === null) {
        const R = x.currentProgram.getUniforms();
        x.uniformsList = Rs.seqWithValue(R.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function fa(x, R) {
      const N = Et.get(x);
      N.outputColorSpace = R.outputColorSpace, N.batching = R.batching, N.batchingColor = R.batchingColor, N.instancing = R.instancing, N.instancingColor = R.instancingColor, N.instancingMorph = R.instancingMorph, N.skinning = R.skinning, N.morphTargets = R.morphTargets, N.morphNormals = R.morphNormals, N.morphColors = R.morphColors, N.morphTargetsCount = R.morphTargetsCount, N.numClippingPlanes = R.numClippingPlanes, N.numIntersection = R.numClipIntersection, N.vertexAlphas = R.vertexAlphas, N.vertexTangents = R.vertexTangents, N.toneMapping = R.toneMapping;
    }
    function kc(x, R, N, G, D) {
      R.isScene !== !0 && (R = Nt), b.resetTextureUnits();
      const tt = R.fog, at = G.isMeshStandardMaterial ? R.environment : null, pt = w === null ? S.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : bi, mt = (G.isMeshStandardMaterial ? U : A).get(G.envMap || at), xt = G.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4, It = !!N.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Ct = !!N.morphAttributes.position, Yt = !!N.morphAttributes.normal, qt = !!N.morphAttributes.color;
      let ee = Si;
      G.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ee = S.toneMapping);
      const we = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Vt = we !== void 0 ? we.length : 0, At = Et.get(G), ue = f.state.lights;
      if (K === !0 && (J === !0 || x !== j)) {
        const De = x === j && G.id === P;
        $.setState(G, x, De);
      }
      let Kt = !1;
      G.version === At.__version ? (At.needsLights && At.lightsStateVersion !== ue.state.version || At.outputColorSpace !== pt || D.isBatchedMesh && At.batching === !1 || !D.isBatchedMesh && At.batching === !0 || D.isBatchedMesh && At.batchingColor === !0 && D.colorTexture === null || D.isBatchedMesh && At.batchingColor === !1 && D.colorTexture !== null || D.isInstancedMesh && At.instancing === !1 || !D.isInstancedMesh && At.instancing === !0 || D.isSkinnedMesh && At.skinning === !1 || !D.isSkinnedMesh && At.skinning === !0 || D.isInstancedMesh && At.instancingColor === !0 && D.instanceColor === null || D.isInstancedMesh && At.instancingColor === !1 && D.instanceColor !== null || D.isInstancedMesh && At.instancingMorph === !0 && D.morphTexture === null || D.isInstancedMesh && At.instancingMorph === !1 && D.morphTexture !== null || At.envMap !== mt || G.fog === !0 && At.fog !== tt || At.numClippingPlanes !== void 0 && (At.numClippingPlanes !== $.numPlanes || At.numIntersection !== $.numIntersection) || At.vertexAlphas !== xt || At.vertexTangents !== It || At.morphTargets !== Ct || At.morphNormals !== Yt || At.morphColors !== qt || At.toneMapping !== ee || At.morphTargetsCount !== Vt) && (Kt = !0) : (Kt = !0, At.__version = G.version);
      let Oe = At.currentProgram;
      Kt === !0 && (Oe = Yn(G, R, D));
      let Wi = !1, _e = !1, Js = !1;
      const ie = Oe.getUniforms(), hi = At.uniforms;
      if (bt.useProgram(Oe.program) && (Wi = !0, _e = !0, Js = !0), G.id !== P && (P = G.id, _e = !0), Wi || j !== x) {
        kt.reverseDepthBuffer ? (gt.copy(x.projectionMatrix), Ph(gt), Uh(gt), ie.setValue(T, "projectionMatrix", gt)) : ie.setValue(T, "projectionMatrix", x.projectionMatrix), ie.setValue(T, "viewMatrix", x.matrixWorldInverse);
        const De = ie.map.cameraPosition;
        De !== void 0 && De.setValue(T, Tt.setFromMatrixPosition(x.matrixWorld)), kt.logarithmicDepthBuffer && ie.setValue(
          T,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && ie.setValue(T, "isOrthographic", x.isOrthographicCamera === !0), j !== x && (j = x, _e = !0, Js = !0);
      }
      if (D.isSkinnedMesh) {
        ie.setOptional(T, D, "bindMatrix"), ie.setOptional(T, D, "bindMatrixInverse");
        const De = D.skeleton;
        De && (De.boneTexture === null && De.computeBoneTexture(), ie.setValue(T, "boneTexture", De.boneTexture, b));
      }
      D.isBatchedMesh && (ie.setOptional(T, D, "batchingTexture"), ie.setValue(T, "batchingTexture", D._matricesTexture, b), ie.setOptional(T, D, "batchingIdTexture"), ie.setValue(T, "batchingIdTexture", D._indirectTexture, b), ie.setOptional(T, D, "batchingColorTexture"), D._colorsTexture !== null && ie.setValue(T, "batchingColorTexture", D._colorsTexture, b));
      const $s = N.morphAttributes;
      if (($s.position !== void 0 || $s.normal !== void 0 || $s.color !== void 0) && _t.update(D, N, Oe), (_e || At.receiveShadow !== D.receiveShadow) && (At.receiveShadow = D.receiveShadow, ie.setValue(T, "receiveShadow", D.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && (hi.envMap.value = mt, hi.flipEnvMap.value = mt.isCubeTexture && mt.isRenderTargetTexture === !1 ? -1 : 1), G.isMeshStandardMaterial && G.envMap === null && R.environment !== null && (hi.envMapIntensity.value = R.environmentIntensity), _e && (ie.setValue(T, "toneMappingExposure", S.toneMappingExposure), At.needsLights && Hc(hi, Js), tt && G.fog === !0 && rt.refreshFogUniforms(hi, tt), rt.refreshMaterialUniforms(hi, G, Q, F, f.state.transmissionRenderTarget[x.id]), Rs.upload(T, da(At), hi, b)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (Rs.upload(T, da(At), hi, b), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && ie.setValue(T, "center", D.center), ie.setValue(T, "modelViewMatrix", D.modelViewMatrix), ie.setValue(T, "normalMatrix", D.normalMatrix), ie.setValue(T, "modelMatrix", D.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
        const De = G.uniformsGroups;
        for (let tr = 0, Vc = De.length; tr < Vc; tr++) {
          const pa = De[tr];
          L.update(pa, Oe), L.bind(pa, Oe);
        }
      }
      return Oe;
    }
    function Hc(x, R) {
      x.ambientLightColor.needsUpdate = R, x.lightProbe.needsUpdate = R, x.directionalLights.needsUpdate = R, x.directionalLightShadows.needsUpdate = R, x.pointLights.needsUpdate = R, x.pointLightShadows.needsUpdate = R, x.spotLights.needsUpdate = R, x.spotLightShadows.needsUpdate = R, x.rectAreaLights.needsUpdate = R, x.hemisphereLights.needsUpdate = R;
    }
    function zc(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return E;
    }, this.getActiveMipmapLevel = function() {
      return _;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(x, R, N) {
      Et.get(x.texture).__webglTexture = R, Et.get(x.depthTexture).__webglTexture = N;
      const G = Et.get(x);
      G.__hasExternalTextures = !0, G.__autoAllocateDepthBuffer = N === void 0, G.__autoAllocateDepthBuffer || Pt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(x, R) {
      const N = Et.get(x);
      N.__webglFramebuffer = R, N.__useDefaultFramebuffer = R === void 0;
    }, this.setRenderTarget = function(x, R = 0, N = 0) {
      w = x, E = R, _ = N;
      let G = !0, D = null, tt = !1, at = !1;
      if (x) {
        const mt = Et.get(x);
        if (mt.__useDefaultFramebuffer !== void 0)
          bt.bindFramebuffer(T.FRAMEBUFFER, null), G = !1;
        else if (mt.__webglFramebuffer === void 0)
          b.setupRenderTarget(x);
        else if (mt.__hasExternalTextures)
          b.rebindTextures(x, Et.get(x.texture).__webglTexture, Et.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Ct = x.depthTexture;
          if (mt.__boundDepthTexture !== Ct) {
            if (Ct !== null && Et.has(Ct) && (x.width !== Ct.image.width || x.height !== Ct.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            b.setupDepthRenderbuffer(x);
          }
        }
        const xt = x.texture;
        (xt.isData3DTexture || xt.isDataArrayTexture || xt.isCompressedArrayTexture) && (at = !0);
        const It = Et.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(It[R]) ? D = It[R][N] : D = It[R], tt = !0) : x.samples > 0 && b.useMultisampledRTT(x) === !1 ? D = Et.get(x).__webglMultisampledFramebuffer : Array.isArray(It) ? D = It[N] : D = It, C.copy(x.viewport), I.copy(x.scissor), H = x.scissorTest;
      } else
        C.copy(st).multiplyScalar(Q).floor(), I.copy(et).multiplyScalar(Q).floor(), H = Ft;
      if (bt.bindFramebuffer(T.FRAMEBUFFER, D) && G && bt.drawBuffers(x, D), bt.viewport(C), bt.scissor(I), bt.setScissorTest(H), tt) {
        const mt = Et.get(x.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + R, mt.__webglTexture, N);
      } else if (at) {
        const mt = Et.get(x.texture), xt = R || 0;
        T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, mt.__webglTexture, N || 0, xt);
      }
      P = -1;
    }, this.readRenderTargetPixels = function(x, R, N, G, D, tt, at) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let pt = Et.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && at !== void 0 && (pt = pt[at]), pt) {
        bt.bindFramebuffer(T.FRAMEBUFFER, pt);
        try {
          const mt = x.texture, xt = mt.format, It = mt.type;
          if (!kt.textureFormatReadable(xt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!kt.textureTypeReadable(It)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          R >= 0 && R <= x.width - G && N >= 0 && N <= x.height - D && T.readPixels(R, N, G, D, Lt.convert(xt), Lt.convert(It), tt);
        } finally {
          const mt = w !== null ? Et.get(w).__webglFramebuffer : null;
          bt.bindFramebuffer(T.FRAMEBUFFER, mt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, R, N, G, D, tt, at) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let pt = Et.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && at !== void 0 && (pt = pt[at]), pt) {
        const mt = x.texture, xt = mt.format, It = mt.type;
        if (!kt.textureFormatReadable(xt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!kt.textureTypeReadable(It))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (R >= 0 && R <= x.width - G && N >= 0 && N <= x.height - D) {
          bt.bindFramebuffer(T.FRAMEBUFFER, pt);
          const Ct = T.createBuffer();
          T.bindBuffer(T.PIXEL_PACK_BUFFER, Ct), T.bufferData(T.PIXEL_PACK_BUFFER, tt.byteLength, T.STREAM_READ), T.readPixels(R, N, G, D, Lt.convert(xt), Lt.convert(It), 0);
          const Yt = w !== null ? Et.get(w).__webglFramebuffer : null;
          bt.bindFramebuffer(T.FRAMEBUFFER, Yt);
          const qt = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return T.flush(), await Bh(T, qt, 4), T.bindBuffer(T.PIXEL_PACK_BUFFER, Ct), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, tt), T.deleteBuffer(Ct), T.deleteSync(qt), tt;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, R = null, N = 0) {
      x.isTexture !== !0 && (Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."), R = arguments[0] || null, x = arguments[1]);
      const G = Math.pow(2, -N), D = Math.floor(x.image.width * G), tt = Math.floor(x.image.height * G), at = R !== null ? R.x : 0, pt = R !== null ? R.y : 0;
      b.setTexture2D(x, 0), T.copyTexSubImage2D(T.TEXTURE_2D, N, 0, 0, at, pt, D, tt), bt.unbindTexture();
    }, this.copyTextureToTexture = function(x, R, N = null, G = null, D = 0) {
      x.isTexture !== !0 && (Ls("WebGLRenderer: copyTextureToTexture function signature has changed."), G = arguments[0] || null, x = arguments[1], R = arguments[2], D = arguments[3] || 0, N = null);
      let tt, at, pt, mt, xt, It;
      N !== null ? (tt = N.max.x - N.min.x, at = N.max.y - N.min.y, pt = N.min.x, mt = N.min.y) : (tt = x.image.width, at = x.image.height, pt = 0, mt = 0), G !== null ? (xt = G.x, It = G.y) : (xt = 0, It = 0);
      const Ct = Lt.convert(R.format), Yt = Lt.convert(R.type);
      b.setTexture2D(R, 0), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, R.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, R.unpackAlignment);
      const qt = T.getParameter(T.UNPACK_ROW_LENGTH), ee = T.getParameter(T.UNPACK_IMAGE_HEIGHT), we = T.getParameter(T.UNPACK_SKIP_PIXELS), Vt = T.getParameter(T.UNPACK_SKIP_ROWS), At = T.getParameter(T.UNPACK_SKIP_IMAGES), ue = x.isCompressedTexture ? x.mipmaps[D] : x.image;
      T.pixelStorei(T.UNPACK_ROW_LENGTH, ue.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, ue.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, pt), T.pixelStorei(T.UNPACK_SKIP_ROWS, mt), x.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, D, xt, It, tt, at, Ct, Yt, ue.data) : x.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, D, xt, It, ue.width, ue.height, Ct, ue.data) : T.texSubImage2D(T.TEXTURE_2D, D, xt, It, tt, at, Ct, Yt, ue), T.pixelStorei(T.UNPACK_ROW_LENGTH, qt), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, ee), T.pixelStorei(T.UNPACK_SKIP_PIXELS, we), T.pixelStorei(T.UNPACK_SKIP_ROWS, Vt), T.pixelStorei(T.UNPACK_SKIP_IMAGES, At), D === 0 && R.generateMipmaps && T.generateMipmap(T.TEXTURE_2D), bt.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, R, N = null, G = null, D = 0) {
      x.isTexture !== !0 && (Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."), N = arguments[0] || null, G = arguments[1] || null, x = arguments[2], R = arguments[3], D = arguments[4] || 0);
      let tt, at, pt, mt, xt, It, Ct, Yt, qt;
      const ee = x.isCompressedTexture ? x.mipmaps[D] : x.image;
      N !== null ? (tt = N.max.x - N.min.x, at = N.max.y - N.min.y, pt = N.max.z - N.min.z, mt = N.min.x, xt = N.min.y, It = N.min.z) : (tt = ee.width, at = ee.height, pt = ee.depth, mt = 0, xt = 0, It = 0), G !== null ? (Ct = G.x, Yt = G.y, qt = G.z) : (Ct = 0, Yt = 0, qt = 0);
      const we = Lt.convert(R.format), Vt = Lt.convert(R.type);
      let At;
      if (R.isData3DTexture)
        b.setTexture3D(R, 0), At = T.TEXTURE_3D;
      else if (R.isDataArrayTexture || R.isCompressedArrayTexture)
        b.setTexture2DArray(R, 0), At = T.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, R.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, R.unpackAlignment);
      const ue = T.getParameter(T.UNPACK_ROW_LENGTH), Kt = T.getParameter(T.UNPACK_IMAGE_HEIGHT), Oe = T.getParameter(T.UNPACK_SKIP_PIXELS), Wi = T.getParameter(T.UNPACK_SKIP_ROWS), _e = T.getParameter(T.UNPACK_SKIP_IMAGES);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, ee.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, ee.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, mt), T.pixelStorei(T.UNPACK_SKIP_ROWS, xt), T.pixelStorei(T.UNPACK_SKIP_IMAGES, It), x.isDataTexture || x.isData3DTexture ? T.texSubImage3D(At, D, Ct, Yt, qt, tt, at, pt, we, Vt, ee.data) : R.isCompressedArrayTexture ? T.compressedTexSubImage3D(At, D, Ct, Yt, qt, tt, at, pt, we, ee.data) : T.texSubImage3D(At, D, Ct, Yt, qt, tt, at, pt, we, Vt, ee), T.pixelStorei(T.UNPACK_ROW_LENGTH, ue), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Kt), T.pixelStorei(T.UNPACK_SKIP_PIXELS, Oe), T.pixelStorei(T.UNPACK_SKIP_ROWS, Wi), T.pixelStorei(T.UNPACK_SKIP_IMAGES, _e), D === 0 && R.generateMipmaps && T.generateMipmap(At), bt.unbindTexture();
    }, this.initRenderTarget = function(x) {
      Et.get(x).__webglFramebuffer === void 0 && b.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? b.setTextureCube(x, 0) : x.isData3DTexture ? b.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? b.setTexture2DArray(x, 0) : b.setTexture2D(x, 0), bt.unbindTexture();
    }, this.resetState = function() {
      E = 0, _ = 0, w = null, bt.reset(), Qt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return ai;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === jo ? "display-p3" : "srgb", e.unpackColorSpace = Wt.workingColorSpace === Xs ? "display-p3" : "srgb";
  }
}
class Uo extends Ce {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ci(), this.environmentIntensity = 1, this.environmentRotation = new ci(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Yg extends ve {
  constructor(t = null, e = 1, i = 1, s, r, o, a, l, c = pe, h = pe, u, p) {
    super(null, o, a, l, c, h, s, r, u, p), this.isDataTexture = !0, this.image = { data: t, width: e, height: i }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Xg extends Mn {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Mt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Gs = /* @__PURE__ */ new B(), Os = /* @__PURE__ */ new B(), ll = /* @__PURE__ */ new $t(), Bn = /* @__PURE__ */ new zn(), ps = /* @__PURE__ */ new In(), Rr = /* @__PURE__ */ new B(), cl = /* @__PURE__ */ new B();
class Zg extends Ce {
  constructor(t = new Ae(), e = new Xg()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [0];
      for (let s = 1, r = e.count; s < r; s++)
        Gs.fromBufferAttribute(e, s - 1), Os.fromBufferAttribute(e, s), i[s] = i[s - 1], i[s] += Gs.distanceTo(Os);
      t.setAttribute("lineDistance", new We(i, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), ps.copy(i.boundingSphere), ps.applyMatrix4(s), ps.radius += r, t.ray.intersectsSphere(ps) === !1) return;
    ll.copy(s).invert(), Bn.copy(t.ray).applyMatrix4(ll);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = i.index, p = i.attributes.position;
    if (h !== null) {
      const g = Math.max(0, o.start), v = Math.min(h.count, o.start + o.count);
      for (let m = g, f = v - 1; m < f; m += c) {
        const d = h.getX(m), y = h.getX(m + 1), S = gs(this, t, Bn, l, d, y);
        S && e.push(S);
      }
      if (this.isLineLoop) {
        const m = h.getX(v - 1), f = h.getX(g), d = gs(this, t, Bn, l, m, f);
        d && e.push(d);
      }
    } else {
      const g = Math.max(0, o.start), v = Math.min(p.count, o.start + o.count);
      for (let m = g, f = v - 1; m < f; m += c) {
        const d = gs(this, t, Bn, l, m, m + 1);
        d && e.push(d);
      }
      if (this.isLineLoop) {
        const m = gs(this, t, Bn, l, v - 1, g);
        m && e.push(m);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function gs(n, t, e, i, s, r) {
  const o = n.geometry.attributes.position;
  if (Gs.fromBufferAttribute(o, s), Os.fromBufferAttribute(o, r), e.distanceSqToSegment(Gs, Os, Rr, cl) > i) return;
  Rr.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(Rr);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: cl.clone().applyMatrix4(n.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: n
    };
}
const hl = /* @__PURE__ */ new B(), ul = /* @__PURE__ */ new B();
class Mc extends Zg {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [];
      for (let s = 0, r = e.count; s < r; s += 2)
        hl.fromBufferAttribute(e, s), ul.fromBufferAttribute(e, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + hl.distanceTo(ul);
      t.setAttribute("lineDistance", new We(i, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Qg extends Mn {
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Mt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const dl = /* @__PURE__ */ new $t(), Fo = /* @__PURE__ */ new zn(), ms = /* @__PURE__ */ new In(), vs = /* @__PURE__ */ new B();
class No extends Ce {
  constructor(t = new Ae(), e = new Qg()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), ms.copy(i.boundingSphere), ms.applyMatrix4(s), ms.radius += r, t.ray.intersectsSphere(ms) === !1) return;
    dl.copy(s).invert(), Fo.copy(t.ray).applyMatrix4(dl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = i.index, u = i.attributes.position;
    if (c !== null) {
      const p = Math.max(0, o.start), g = Math.min(c.count, o.start + o.count);
      for (let v = p, m = g; v < m; v++) {
        const f = c.getX(v);
        vs.fromBufferAttribute(u, f), fl(vs, f, l, s, t, e, this);
      }
    } else {
      const p = Math.max(0, o.start), g = Math.min(u.count, o.start + o.count);
      for (let v = p, m = g; v < m; v++)
        vs.fromBufferAttribute(u, v), fl(vs, v, l, s, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function fl(n, t, e, i, s, r, o) {
  const a = Fo.distanceSqToPoint(n);
  if (a < e) {
    const l = new B();
    Fo.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: o
    });
  }
}
class bc {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = pl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = pl();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function pl() {
  return performance.now();
}
const gl = /* @__PURE__ */ new $t();
class jg {
  constructor(t, e, i = 0, s = 1 / 0) {
    this.ray = new zn(t, e), this.near = i, this.far = s, this.camera = null, this.layers = new qo(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return gl.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(gl), this;
  }
  intersectObject(t, e = !0, i = []) {
    return Go(t, this, i, e), i.sort(ml), i;
  }
  intersectObjects(t, e = !0, i = []) {
    for (let s = 0, r = t.length; s < r; s++)
      Go(t[s], this, i, e);
    return i.sort(ml), i;
  }
}
function ml(n, t) {
  return n.distance - t.distance;
}
function Go(n, t, e, i) {
  let s = !0;
  if (n.layers.test(t.layers) && n.raycast(t, e) === !1 && (s = !1), s === !0 && i === !0) {
    const r = n.children;
    for (let o = 0, a = r.length; o < a; o++)
      Go(r[o], t, e, !0);
  }
}
class vl {
  constructor(t = 1, e = 0, i = 0) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  set(t, e, i) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, i) {
    return this.radius = Math.sqrt(t * t + e * e + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(me(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qg extends Vi {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Vo
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Vo);
const Cl = { type: "change" }, ta = { type: "start" }, wc = { type: "end" }, Cs = new zn(), Al = new vi(), Jg = Math.cos(70 * Rh.DEG2RAD), oe = new B(), Ie = 2 * Math.PI, Zt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Dr = 1e-6;
class $g extends qg {
  constructor(t, e = null) {
    super(t, e), this.state = Zt.NONE, this.enabled = !0, this.target = new B(), this.cursor = new B(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: cn.ROTATE, MIDDLE: cn.DOLLY, RIGHT: cn.PAN }, this.touches = { ONE: an.ROTATE, TWO: an.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new B(), this._lastQuaternion = new Hi(), this._lastTargetPosition = new B(), this._quat = new Hi().setFromUnitVectors(t.up, new B(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new vl(), this._sphericalDelta = new vl(), this._scale = 1, this._panOffset = new B(), this._rotateStart = new St(), this._rotateEnd = new St(), this._rotateDelta = new St(), this._panStart = new St(), this._panEnd = new St(), this._panDelta = new St(), this._dollyStart = new St(), this._dollyEnd = new St(), this._dollyDelta = new St(), this._dollyDirection = new B(), this._mouse = new St(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = em.bind(this), this._onPointerDown = tm.bind(this), this._onPointerUp = im.bind(this), this._onContextMenu = cm.bind(this), this._onMouseWheel = rm.bind(this), this._onKeyDown = om.bind(this), this._onTouchStart = am.bind(this), this._onTouchMove = lm.bind(this), this._onMouseDown = nm.bind(this), this._onMouseMove = sm.bind(this), this._interceptControlDown = hm.bind(this), this._interceptControlUp = um.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Cl), this.update(), this.state = Zt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    oe.copy(e).sub(this.target), oe.applyQuaternion(this._quat), this._spherical.setFromVector3(oe), this.autoRotate && this.state === Zt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(i) && isFinite(s) && (i < -Math.PI ? i += Ie : i > Math.PI && (i -= Ie), s < -Math.PI ? s += Ie : s > Math.PI && (s -= Ie), i <= s ? this._spherical.theta = Math.max(i, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + s) / 2 ? Math.max(i, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (oe.setFromSpherical(this._spherical), oe.applyQuaternion(this._quatInverse), e.copy(this.target).add(oe), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = oe.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new B(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new B(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = oe.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Cs.origin.copy(this.object.position), Cs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Cs.direction)) < Jg ? this.object.lookAt(this.target) : (Al.setFromNormalAndCoplanarPoint(this.object.up, this.target), Cs.intersectPlane(Al, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > Dr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Dr || this._lastTargetPosition.distanceToSquared(this.target) > Dr ? (this.dispatchEvent(Cl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ie / 60 * this.autoRotateSpeed * t : Ie / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    oe.setFromMatrixColumn(e, 0), oe.multiplyScalar(-t), this._panOffset.add(oe);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? oe.setFromMatrixColumn(e, 1) : (oe.setFromMatrixColumn(e, 0), oe.crossVectors(this.object.up, oe)), oe.multiplyScalar(t), this._panOffset.add(oe);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      oe.copy(s).sub(this.target);
      let r = oe.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / i.clientHeight, this.object.matrix), this._panUp(2 * e * r / i.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const i = this.domElement.getBoundingClientRect(), s = t - i.left, r = e - i.top, o = i.width, a = i.height;
    this._mouse.x = s / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ie * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ie * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(Ie * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(-Ie * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(Ie * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(-Ie * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(i, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(i, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), i = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(i * i + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + i.x), r = 0.5 * (t.pageY + i.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ie * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ie * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(i, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), i = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(i * i + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (t.pageX + e.x) * 0.5, a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new St(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, i = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
}
function tm(n) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)));
}
function em(n) {
  this.enabled !== !1 && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function im(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(wc), this.state = Zt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function nm(n) {
  let t;
  switch (n.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case cn.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(n), this.state = Zt.DOLLY;
      break;
    case cn.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), this.state = Zt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), this.state = Zt.ROTATE;
      }
      break;
    case cn.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), this.state = Zt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), this.state = Zt.PAN;
      }
      break;
    default:
      this.state = Zt.NONE;
  }
  this.state !== Zt.NONE && this.dispatchEvent(ta);
}
function sm(n) {
  switch (this.state) {
    case Zt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(n);
      break;
    case Zt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(n);
      break;
    case Zt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function rm(n) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== Zt.NONE || (n.preventDefault(), this.dispatchEvent(ta), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(wc));
}
function om(n) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(n);
}
function am(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case an.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(n), this.state = Zt.TOUCH_ROTATE;
          break;
        case an.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(n), this.state = Zt.TOUCH_PAN;
          break;
        default:
          this.state = Zt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case an.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(n), this.state = Zt.TOUCH_DOLLY_PAN;
          break;
        case an.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(n), this.state = Zt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = Zt.NONE;
      }
      break;
    default:
      this.state = Zt.NONE;
  }
  this.state !== Zt.NONE && this.dispatchEvent(ta);
}
function lm(n) {
  switch (this._trackPointer(n), this.state) {
    case Zt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case Zt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case Zt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case Zt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = Zt.NONE;
  }
}
function cm(n) {
  this.enabled !== !1 && n.preventDefault();
}
function hm(n) {
  n.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function um(n) {
  n.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const _c = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class Ki {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const dm = new Cc(-1, 1, 1, -1, 0, 1);
class fm extends Ae {
  constructor() {
    super(), this.setAttribute("position", new We([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new We([0, 2, 0, 0, 2, 0], 2));
  }
}
const pm = new fm();
class js {
  constructor(t) {
    this._mesh = new Ne(pm, t);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(t) {
    t.render(this._mesh, dm);
  }
  get material() {
    return this._mesh.material;
  }
  set material(t) {
    this._mesh.material = t;
  }
}
class gm extends Ki {
  constructor(t, e) {
    super(), this.textureID = e !== void 0 ? e : "tDiffuse", t instanceof te ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = Ns.clone(t.uniforms), this.material = new te({
      name: t.name !== void 0 ? t.name : "unspecified",
      defines: Object.assign({}, t.defines),
      uniforms: this.uniforms,
      vertexShader: t.vertexShader,
      fragmentShader: t.fragmentShader
    })), this.fsQuad = new js(this.material);
  }
  render(t, e, i) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.fsQuad.material = this.material, this.renderToScreen ? (t.setRenderTarget(null), this.fsQuad.render(t)) : (t.setRenderTarget(e), this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), this.fsQuad.render(t));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Sl extends Ki {
  constructor(t, e) {
    super(), this.scene = t, this.camera = e, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(t, e, i) {
    const s = t.getContext(), r = t.state;
    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), r.buffers.stencil.setFunc(s.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(!0), t.setRenderTarget(i), this.clear && t.clear(), t.render(this.scene, this.camera), t.setRenderTarget(e), this.clear && t.clear(), t.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.color.setMask(!0), r.buffers.depth.setMask(!0), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), r.buffers.stencil.setLocked(!0);
  }
}
class mm extends Ki {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(t) {
    t.state.buffers.stencil.setLocked(!1), t.state.buffers.stencil.setTest(!1);
  }
}
class vm {
  constructor(t, e) {
    if (this.renderer = t, this._pixelRatio = t.getPixelRatio(), e === void 0) {
      const i = t.getSize(new St());
      this._width = i.width, this._height = i.height, e = new Ge(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: je }), e.texture.name = "EffectComposer.rt1";
    } else
      this._width = e.width, this._height = e.height;
    this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new gm(_c), this.copyPass.material.blending = Ke, this.clock = new bc();
  }
  swapBuffers() {
    const t = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = t;
  }
  addPass(t) {
    this.passes.push(t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(t, e) {
    this.passes.splice(e, 0, t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(t) {
    const e = this.passes.indexOf(t);
    e !== -1 && this.passes.splice(e, 1);
  }
  isLastEnabledPass(t) {
    for (let e = t + 1; e < this.passes.length; e++)
      if (this.passes[e].enabled)
        return !1;
    return !0;
  }
  render(t) {
    t === void 0 && (t = this.clock.getDelta());
    const e = this.renderer.getRenderTarget();
    let i = !1;
    for (let s = 0, r = this.passes.length; s < r; s++) {
      const o = this.passes[s];
      if (o.enabled !== !1) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s), o.render(this.renderer, this.writeBuffer, this.readBuffer, t, i), o.needsSwap) {
          if (i) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Sl !== void 0 && (o instanceof Sl ? i = !0 : o instanceof mm && (i = !1));
      }
    }
    this.renderer.setRenderTarget(e);
  }
  reset(t) {
    if (t === void 0) {
      const e = this.renderer.getSize(new St());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = e.width, this._height = e.height, t = this.renderTarget1.clone(), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(t, e) {
    this._width = t, this._height = e;
    const i = this._width * this._pixelRatio, s = this._height * this._pixelRatio;
    this.renderTarget1.setSize(i, s), this.renderTarget2.setSize(i, s);
    for (let r = 0; r < this.passes.length; r++)
      this.passes[r].setSize(i, s);
  }
  setPixelRatio(t) {
    this._pixelRatio = t, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
const Cm = {
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Mt(0) },
    defaultOpacity: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class An extends Ki {
  constructor(t, e, i, s) {
    super(), this.strength = e !== void 0 ? e : 1, this.radius = i, this.threshold = s, this.resolution = t !== void 0 ? new St(t.x, t.y) : new St(256, 256), this.clearColor = new Mt(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let r = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Ge(r, o, { type: je }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let u = 0; u < this.nMips; u++) {
      const p = new Ge(r, o, { type: je });
      p.texture.name = "UnrealBloomPass.h" + u, p.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(p);
      const g = new Ge(r, o, { type: je });
      g.texture.name = "UnrealBloomPass.v" + u, g.texture.generateMipmaps = !1, this.renderTargetsVertical.push(g), r = Math.round(r / 2), o = Math.round(o / 2);
    }
    const a = Cm;
    this.highPassUniforms = Ns.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = s, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new te({
      uniforms: this.highPassUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    r = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.invSize.value = new St(1 / r, 1 / o), r = Math.round(r / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = e, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new B(1, 1, 1), new B(1, 1, 1), new B(1, 1, 1), new B(1, 1, 1), new B(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = _c;
    this.copyUniforms = Ns.clone(h.uniforms), this.blendMaterial = new te({
      uniforms: this.copyUniforms,
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: fn,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new Mt(), this.oldClearAlpha = 1, this.basic = new Jo(), this.fsQuad = new js(null);
  }
  dispose() {
    for (let t = 0; t < this.renderTargetsHorizontal.length; t++)
      this.renderTargetsHorizontal[t].dispose();
    for (let t = 0; t < this.renderTargetsVertical.length; t++)
      this.renderTargetsVertical[t].dispose();
    this.renderTargetBright.dispose();
    for (let t = 0; t < this.separableBlurMaterials.length; t++)
      this.separableBlurMaterials[t].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(t, e) {
    let i = Math.round(t / 2), s = Math.round(e / 2);
    this.renderTargetBright.setSize(i, s);
    for (let r = 0; r < this.nMips; r++)
      this.renderTargetsHorizontal[r].setSize(i, s), this.renderTargetsVertical[r].setSize(i, s), this.separableBlurMaterials[r].uniforms.invSize.value = new St(1 / i, 1 / s), i = Math.round(i / 2), s = Math.round(s / 2);
  }
  render(t, e, i, s, r) {
    t.getClearColor(this._oldClearColor), this.oldClearAlpha = t.getClearAlpha();
    const o = t.autoClear;
    t.autoClear = !1, t.setClearColor(this.clearColor, 0), r && t.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = i.texture, t.setRenderTarget(null), t.clear(), this.fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = i.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this.fsQuad.render(t);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = An.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[l]), t.clear(), this.fsQuad.render(t), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = An.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[l]), t.clear(), this.fsQuad.render(t), a = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this.fsQuad.render(t), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, r && t.state.buffers.stencil.setTest(!0), this.renderToScreen ? (t.setRenderTarget(null), this.fsQuad.render(t)) : (t.setRenderTarget(i), this.fsQuad.render(t)), t.setClearColor(this._oldClearColor, this.oldClearAlpha), t.autoClear = o;
  }
  getSeperableBlurMaterial(t) {
    const e = [];
    for (let i = 0; i < t; i++)
      e.push(0.39894 * Math.exp(-0.5 * i * i / (t * t)) / t);
    return new te({
      defines: {
        KERNEL_RADIUS: t
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new St(0.5, 0.5) },
        // inverse texture size
        direction: { value: new St(0.5, 0.5) },
        gaussianCoefficients: { value: e }
        // precomputed Gaussian coefficients
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(t) {
    return new te({
      defines: {
        NUM_MIPS: t
      },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
}
An.BlurDirectionX = new St(1, 0);
An.BlurDirectionY = new St(0, 1);
class Sn {
  state;
  constructor(t = 1) {
    this.state = t >>> 0 || 1;
  }
  /** Uniform in [0, 1). */
  next() {
    this.state = this.state + 1831565813 | 0;
    let t = this.state;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  /** Uniform in [min, max). */
  range(t, e) {
    return t + this.next() * (e - t);
  }
  /** Integer in [min, max]. */
  int(t, e) {
    return t + Math.floor(this.next() * (e - t + 1));
  }
  /** Standard normal, via Box-Muller. */
  normal() {
    const t = 1 - this.next(), e = this.next();
    return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
  }
  /** Uniform point on the unit sphere. */
  onSphere(t) {
    const e = this.range(-1, 1), i = this.range(0, Math.PI * 2), s = Math.sqrt(Math.max(0, 1 - e * e));
    return t[0] = s * Math.cos(i), t[1] = s * Math.sin(i), t[2] = e, t;
  }
}
const Am = {
  i1: Int8Array,
  u1: Uint8Array,
  u1c: Uint8ClampedArray,
  i2: Int16Array,
  u2: Uint16Array,
  i4: Int32Array,
  u4: Uint32Array,
  f4: Float32Array,
  f8: Float64Array,
  int8: Int8Array,
  uint8: Uint8Array,
  uint8c: Uint8ClampedArray,
  int16: Int16Array,
  uint16: Uint16Array,
  int32: Int32Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array
};
function Sm(n) {
  return typeof n == "object" && n !== null && typeof n.dtype == "string" && typeof n.bdata == "string";
}
function xm(n) {
  const t = Uint8Array.fromBase64;
  if (t) return t(n);
  const e = atob(n), i = new Uint8Array(e.length);
  for (let s = 0; s < e.length; s++) i[s] = e.charCodeAt(s);
  return i;
}
function ym(n, t) {
  const e = Am[n.dtype];
  if (!e) throw new Error(`${t}: unsupported dtype "${n.dtype}"`);
  const i = xm(n.bdata);
  if (i.byteLength % e.BYTES_PER_ELEMENT !== 0)
    throw new Error(`${t}: ${i.byteLength} bytes is not a whole number of ${n.dtype} values`);
  const s = new ArrayBuffer(i.byteLength);
  new Uint8Array(s).set(i);
  const r = new e(s);
  if (n.shape !== void 0) {
    const o = String(n.shape).split(",").reduce((a, l) => a * Number(l), 1);
    if (o !== r.length)
      throw new Error(`${t}: shape ${n.shape} needs ${o} values, bdata holds ${r.length}`);
  }
  return r;
}
const Pe = new Int8Array([
  1,
  1,
  0,
  -1,
  1,
  0,
  1,
  -1,
  0,
  -1,
  -1,
  0,
  1,
  0,
  1,
  -1,
  0,
  1,
  1,
  0,
  -1,
  -1,
  0,
  -1,
  0,
  1,
  1,
  0,
  -1,
  1,
  0,
  1,
  -1,
  0,
  -1,
  -1
]), Im = 1 / 3, Ye = 1 / 6;
class Mm {
  perm = new Uint8Array(512);
  permMod12 = new Uint8Array(512);
  constructor(t = 1) {
    const e = new Sn(t), i = new Uint8Array(256);
    for (let s = 0; s < 256; s++) i[s] = s;
    for (let s = 255; s > 0; s--) {
      const r = e.int(0, s), o = i[s];
      i[s] = i[r], i[r] = o;
    }
    for (let s = 0; s < 512; s++)
      this.perm[s] = i[s & 255], this.permMod12[s] = this.perm[s] % 12;
  }
  /** Scalar noise in roughly [-1, 1]. */
  sample(t, e, i) {
    const { perm: s, permMod12: r } = this, o = (t + e + i) * Im, a = Math.floor(t + o), l = Math.floor(e + o), c = Math.floor(i + o), h = (a + l + c) * Ye, u = t - (a - h), p = e - (l - h), g = i - (c - h);
    let v, m, f, d, y, S;
    u >= p ? p >= g ? (v = 1, m = 0, f = 0, d = 1, y = 1, S = 0) : u >= g ? (v = 1, m = 0, f = 0, d = 1, y = 0, S = 1) : (v = 0, m = 0, f = 1, d = 1, y = 0, S = 1) : p < g ? (v = 0, m = 0, f = 1, d = 0, y = 1, S = 1) : u < g ? (v = 0, m = 1, f = 0, d = 0, y = 1, S = 1) : (v = 0, m = 1, f = 0, d = 1, y = 1, S = 0);
    const M = u - v + Ye, E = p - m + Ye, _ = g - f + Ye, w = u - d + 2 * Ye, P = p - y + 2 * Ye, j = g - S + 2 * Ye, C = u - 1 + 3 * Ye, I = p - 1 + 3 * Ye, H = g - 1 + 3 * Ye, k = a & 255, V = l & 255, X = c & 255;
    let F = 0, Q = 0.6 - u * u - p * p - g * g;
    if (Q > 0) {
      const et = r[k + s[V + s[X]]] * 3;
      Q *= Q, F += Q * Q * (Pe[et] * u + Pe[et + 1] * p + Pe[et + 2] * g);
    }
    let O = 0.6 - M * M - E * E - _ * _;
    if (O > 0) {
      const et = r[k + v + s[V + m + s[X + f]]] * 3;
      O *= O, F += O * O * (Pe[et] * M + Pe[et + 1] * E + Pe[et + 2] * _);
    }
    let it = 0.6 - w * w - P * P - j * j;
    if (it > 0) {
      const et = r[k + d + s[V + y + s[X + S]]] * 3;
      it *= it, F += it * it * (Pe[et] * w + Pe[et + 1] * P + Pe[et + 2] * j);
    }
    let st = 0.6 - C * C - I * I - H * H;
    if (st > 0) {
      const et = r[k + 1 + s[V + 1 + s[X + 1]]] * 3;
      st *= st, F += st * st * (Pe[et] * C + Pe[et + 1] * I + Pe[et + 2] * H);
    }
    return 32 * F;
  }
  /** Summed octaves, in roughly [-1, 1]. */
  fbm(t, e, i, s = 4, r = 2, o = 0.5) {
    let a = 0, l = 1, c = 0, h = 1;
    for (let u = 0; u < s; u++)
      a += l * this.sample(t * h, e * h, i * h), c += l, l *= o, h *= r;
    return a / c;
  }
  /**
   * Ridged fbm in [0, 1]. The creases are what make a point cloud read as
   * cortex rather than as a lumpy egg.
   */
  ridged(t, e, i, s = 4) {
    let r = 0, o = 1, a = 0, l = 1;
    for (let c = 0; c < s; c++) {
      const h = 1 - Math.abs(this.sample(t * l, e * l, i * l));
      r += o * h * h, a += o, o *= 0.5, l *= 2;
    }
    return r / a;
  }
}
function zi(n, t, e) {
  return Math.sqrt(n * n + t * t + e * e);
}
function Je(n, t, e, i, s, r, o, a, l) {
  const c = n - i, h = t - s, u = e - r, p = zi(c / o, h / a, u / l), g = zi(c / (o * o), h / (a * a), u / (l * l));
  return g === 0 ? -Math.min(o, a, l) : p * (p - 1) / g;
}
function ea(n, t, e, i, s, r, o, a, l) {
  const c = Math.abs(n - i) - o, h = Math.abs(t - s) - a, u = Math.abs(e - r) - l;
  return zi(Math.max(c, 0), Math.max(h, 0), Math.max(u, 0)) + Math.min(Math.max(c, Math.max(h, u)), 0);
}
function Ec(n, t, e, i, s, r, o, a, l, c, h) {
  const u = n - i, p = t - s, g = e - r, v = o - i, m = a - s, f = l - r, d = v * v + m * m + f * f, y = d === 0 ? 0 : Math.min(1, Math.max(0, (u * v + p * m + g * f) / d)), S = u - v * y, M = p - m * y, E = g - f * y;
  return zi(S, M, E) - (c + (h - c) * y);
}
function wn(n, t, e) {
  const i = Math.min(1, Math.max(0, 0.5 + 0.5 * (t - n) / e));
  return t * (1 - i) + n * i - e * i * (1 - i);
}
function Ai(n, t, e) {
  const i = Math.min(1, Math.max(0, 0.5 - 0.5 * (t - n) / e));
  return t * (1 - i) + n * i + e * i * (1 - i);
}
const xn = 1.1, Ii = 1e-9;
function bm(n, t, e) {
  return ea(n, t, e, 0, -0.1, -0.03, 1, 0.155, 0.27);
}
function wm(n, t, e) {
  return Math.max(Math.abs(n) - 0.011, -bm(n, t, e));
}
function xl(n, t, e, i, s, r, o, a, l, c) {
  const h = Math.max(Math.abs((t - i) * r + (e - s) * o) - a, c);
  return Math.max(n, Math.min(-h, n + l));
}
const yl = (() => {
  const n = Math.hypot(1, 0.33);
  return [1 / n, 0.33 / n];
})(), Il = (() => {
  const n = Math.hypot(0.2, 0.35);
  return [0.2 / n, 0.35 / n];
})();
function _m(n, t, e) {
  const i = Math.max(0, e), s = 1 + 0.18 * i, r = Math.max(0, -e - 0.1), o = 0.12 * r * r + 0.14 * i;
  let a = Je(n * s, t + o, e, 0, 0.1, -0.03, 0.45, 0.31, 0.56);
  a = Ai(a, -(t + 0.2), 0.05);
  const l = t + 0.17 + 0.2 * Math.max(0, e), c = Je(n, l, e, 0.285, 0, -0.06, 0.13, 0.13, 0.39);
  a = wn(a, c, 0.09);
  const h = ea(n, t, e, 0.47, 0, 0.14, 0.2, 0.4, 0.17);
  a = xl(a, t, e, -0.06, 0.25, yl[0], yl[1], 6e-3, 0.045, h);
  const u = Math.max(0.02 - t, Math.abs(n) - 0.47);
  return a = xl(a, t, e, 0.4, -0.1, Il[0], Il[1], 5e-3, 0.05, u), a;
}
function Br(n, t, e) {
  const i = Math.abs(n);
  let s = _m(i, t, e);
  return s = wn(s, Je(n, t, e, 0, -0.08, -0.06, 0.13, 0.12, 0.24), 0.04), Ai(s, -wm(n, t, e), 8e-3);
}
function Ml(n, t) {
  const e = Math.abs(n);
  if (e >= t) return 0;
  const i = 1 - e / t;
  return i * i * (3 - 2 * i);
}
function Em(n, t) {
  const e = t.foldScale * 0.78, i = t.foldDepth * 1.6, s = 0.25 * i, r = -s, o = 1.5 * i - s;
  return {
    exact(a, l, c) {
      const h = Br(a, l, c), u = Math.abs(a), p = Ml(n.sample(u * e, l * e, c * e * 0.62), 0.16), g = Ml(n.sample(u * e * 2.1 + 17, l * e * 2.1, c * e * 1.5), 0.13);
      return h + i * (p + 0.5 * g) - s;
    },
    smooth: Br,
    bounds(a, l, c, h) {
      const u = Br(a, l, c);
      h[0] = u + r - Ii, h[1] = u + o + Ii;
    }
  };
}
const Tc = [0, -0.33, -0.29];
function Pr(n, t, e) {
  const [, i, s] = Tc, r = Math.abs(n);
  let o = Je(r, t, e, 0.15, i, s, 0.17, 0.12, 0.18);
  return o = wn(o, Je(n, t, e, 0, i + 0.01, s - 0.01, 0.07, 0.135, 0.17), 0.04), Ai(o, t - (-0.2 - 0.25 * Math.max(0, r - 0.1)), 0.03);
}
const bl = 9e-3, wl = 6e-3;
function Tm(n) {
  const t = bl + wl * xn + Ii, [, e, i] = Tc;
  return {
    exact(s, r, o) {
      let a = Pr(s, r, o);
      const l = zi(0, r - e - 0.06, o - i + 0.04);
      return a += bl * Math.sin(l * 170 + 1.4 * n.sample(s * 5, r * 5, o * 5)), a += wl * n.fbm(s * 9, r * 9, o * 9, 2), a;
    },
    smooth: Pr,
    bounds(s, r, o, a) {
      const l = Pr(s, r, o);
      a[0] = l - t, a[1] = l + t;
    }
  };
}
function Ur(n, t, e) {
  let i = Ec(n, t, e, 0, -0.12, -0.08, 0, -0.55, -0.15, 0.065, 0.04);
  return i = wn(i, Je(n, t, e, 0, -0.3, -0.045, 0.085, 0.075, 0.07), 0.035), i;
}
const _l = 6e-3;
function Lm(n) {
  const t = _l * xn + Ii;
  return {
    exact(e, i, s) {
      return Ur(e, i, s) + _l * n.fbm(e * 12, i * 12, s * 12, 2);
    },
    smooth: Ur,
    bounds(e, i, s, r) {
      const o = Ur(e, i, s);
      r[0] = o - t, r[1] = o + t;
    }
  };
}
function Rm(n, t) {
  return { cerebrum: Em(n, t), cerebellum: Tm(n), stem: Lm(n) };
}
const Dm = {
  cerebrum: { x: [-0.5, 0.5], y: [-0.42, 0.47], z: [-0.64, 0.64] },
  cerebellum: { x: [-0.38, 0.38], y: [-0.5, -0.15], z: [-0.52, -0.08] },
  stem: { x: [-0.14, 0.14], y: [-0.64, -0.02], z: [-0.24, 0.08] }
}, Bm = "NFSDF2", Fr = 32;
function El(n) {
  const t = new Uint8Array(n);
  if (String.fromCharCode(...t.subarray(0, 6)) !== Bm) throw new Error("not a Neuroform brain grid");
  const i = new DataView(n), s = i.getUint16(6, !0), r = i.getUint16(8, !0), o = i.getUint16(10, !0), a = [
    i.getFloat32(12, !0),
    i.getFloat32(16, !0),
    i.getFloat32(20, !0)
  ], l = i.getFloat32(24, !0), c = i.getFloat32(28, !0), h = s * r * o;
  if (n.byteLength < Fr + 2 * h) throw new Error("brain grid is truncated");
  const u = new Int8Array(n, Fr, h), p = new Int8Array(h);
  for (let g = 0; g < h; g += s) {
    let v = 0;
    for (let m = g; m < g + s; m++)
      v += u[m], p[m] = v;
  }
  return { nx: s, ny: r, nz: o, origin: a, voxel: l, step: c, sdf: p, region: new Uint8Array(n, Fr + h, h) };
}
const Nr = /* @__PURE__ */ new Map();
function Pm(n) {
  let t = Nr.get(n);
  return t || (t = (async () => {
    const e = await fetch(n);
    if (!e.ok) throw new Error(`cannot load ${n}: ${e.status}`);
    const i = await e.arrayBuffer(), s = new Uint8Array(i, 0, 2);
    if (s[0] !== 31 || s[1] !== 139) return El(i);
    const r = new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"));
    return El(await new Response(r).arrayBuffer());
  })(), t.catch(() => Nr.delete(n)), Nr.set(n, t)), t;
}
const Um = 0.1;
function Fm(n, t, e, i) {
  const s = (Math.abs(t) - n.origin[0]) / n.voxel, r = (e - n.origin[1]) / n.voxel, o = (i - n.origin[2]) / n.voxel;
  if (s < 0 || r < 0 || o < 0 || s >= n.nx - 1 || r >= n.ny - 1 || o >= n.nz - 1)
    return Um;
  const a = s | 0, l = r | 0, c = o | 0, h = s - a, u = r - l, p = o - c, g = 1, v = n.nx, m = n.nx * n.ny, f = a + l * v + c * m, d = n.sdf, y = d[f] + (d[f + g] - d[f]) * h, S = d[f + v] + (d[f + v + g] - d[f + v]) * h, M = d[f + m] + (d[f + m + g] - d[f + m]) * h, E = d[f + m + v] + (d[f + m + v + g] - d[f + m + v]) * h, _ = y + (S - y) * u, w = M + (E - M) * u;
  return (_ + (w - _) * p) * n.step;
}
function Nm(n, t, e, i) {
  const s = Math.round((Math.abs(t) - n.origin[0]) / n.voxel), r = Math.round((e - n.origin[1]) / n.voxel), o = Math.round((i - n.origin[2]) / n.voxel);
  if (s < 0 || r < 0 || o < 0 || s >= n.nx || r >= n.ny || o >= n.nz) return 0;
  const a = n.region[s + r * n.nx + o * n.nx * n.ny];
  return a === 255 ? 0 : a;
}
function Gm(n) {
  const [t, e, i] = n.origin, s = t + (n.nx - 1) * n.voxel;
  return {
    x: [-s, s],
    y: [e, e + (n.ny - 1) * n.voxel],
    z: [i, i + (n.nz - 1) * n.voxel]
  };
}
const As = { CORTEX: 0, CEREBELLUM: 1, STEM: 2 }, Om = ["classic", "anatomical", "scan"], km = { x: [-0.46, 0.46], y: [-0.62, 0.46], z: [-0.62, 0.62] }, Hm = { x: [-0.3, 0.3], y: [-0.49, -0.14], z: [-0.56, -0.1] }, zm = { x: [-0.12, 0.12], y: [-0.62, -0.04], z: [-0.27, 0.02] };
function Gr(n, t, e) {
  const i = 1 + 0.22 * Math.max(0, e) - 0.06 * Math.max(0, -e);
  let s = Je(n * i, t, e, 0, 0.025, -0.01, 0.395, 0.35, 0.55);
  const r = Math.abs(n);
  return s = wn(s, Je(r, t, e, 0.25, -0.17, 0.08, 0.12, 0.115, 0.27), 0.085), s = Ai(s, -(t + 0.235), 0.06), s;
}
function Or(n, t, e) {
  return ea(n, t, e, 0, 0.56, -0.02, 0.03, 0.5, 0.52);
}
const Ss = 0.012, kr = 0.018;
function Vm(n, t) {
  const e = t.foldScale, i = t.foldDepth * (0 - 0.52), s = t.foldDepth * (1 - 0.52);
  return {
    exact(r, o, a) {
      let l = Gr(r, o, a);
      const c = n.ridged(r * e, o * e * 0.85, a * e, 4) - 0.52;
      return l += t.foldDepth * c, l += kr * n.fbm(r * 2.1, o * 2.1, a * 2.1, 2), Ai(l, -Or(r, o, a), Ss);
    },
    smooth(r, o, a) {
      return Ai(Gr(r, o, a), -Or(r, o, a), Ss);
    },
    bounds(r, o, a, l) {
      const c = Gr(r, o, a), h = -Or(r, o, a);
      l[0] = Ai(c + i - kr * xn, h, Ss) - Ii, l[1] = Ai(c + s + kr * xn, h, Ss) + Ii;
    }
  };
}
function Hr(n, t, e) {
  const i = Math.abs(n), s = Je(n, t, e, 0, -0.315, -0.33, 0.235, 0.115, 0.165);
  return wn(s, Je(i, t, e, 0.1, -0.3, -0.3, 0.12, 0.1, 0.14), 0.06);
}
const Tl = 0.011, Ll = 0.01;
function Km(n) {
  const t = Tl + Ll * xn + Ii;
  return {
    exact(e, i, s) {
      let r = Hr(e, i, s);
      return r += Tl * Math.sin(i * 150 + 1.6 * n.sample(e * 6, i * 3, s * 6)), r += Ll * n.fbm(e * 9, i * 9, s * 9, 2), r;
    },
    smooth: Hr,
    bounds(e, i, s, r) {
      const o = Hr(e, i, s);
      r[0] = o - t, r[1] = o + t;
    }
  };
}
function zr(n, t, e) {
  return Ec(n, t, e, 0, -0.16, -0.1, 0, -0.56, -0.15, 0.08, 0.045);
}
const Rl = 8e-3;
function Wm(n) {
  const t = Rl * xn + Ii;
  return {
    exact(e, i, s) {
      return zr(e, i, s) + Rl * n.fbm(e * 12, i * 12, s * 12, 2);
    },
    smooth: zr,
    bounds(e, i, s, r) {
      const o = zr(e, i, s);
      r[0] = o - t, r[1] = o + t;
    }
  };
}
function Ym(n, t, e, i, s, r) {
  let a = n(t + 4e-3, e, i) - n(t - 4e-3, e, i), l = n(t, e + 4e-3, i) - n(t, e - 4e-3, i), c = n(t, e, i + 4e-3) - n(t, e, i - 4e-3);
  const h = zi(a, l, c) || 1;
  a /= h, l /= h, c /= h, s[r] = a, s[r + 1] = l, s[r + 2] = c;
}
function Xm(n) {
  const {
    count: t,
    seed: e = 7,
    shell: i = 0.055,
    foldDepth: s = 0.034,
    foldScale: r = 7.4,
    fill: o = 1
  } = n, a = new Mm(e), l = new Sn(e * 2654435761), c = { foldDepth: s, foldScale: r }, h = Zm(n.shape ?? "classic", a, c, n.grid), u = new Float32Array(t * 3), p = new Float32Array(t * 3), g = new Float32Array(t), v = new Uint8Array(t);
  let m = 0, f = 0;
  const d = new Float64Array(2), y = (E, _, w, P) => (E.bounds(_, w, P, d), d[0] >= -4e-3 ? !1 : d[1] < -4e-3 ? !0 : E.exact(_, w, P) < -4e-3), S = ({ field: E, others: _, target: w, id: P, shellDepth: j, box: C, regionOf: I }) => {
    const H = (X, F, Q) => E.smooth(X, F, Q);
    let k = 0;
    const V = w * 900 + 2e4;
    for (let X = 0; k < w && X < V; X++) {
      const F = l.range(C.x[0], C.x[1]), Q = l.range(C.y[0], C.y[1]), O = l.range(C.z[0], C.z[1]);
      if (E.bounds(F, Q, O, d), d[0] > 0) continue;
      let it;
      if (d[1] < -j)
        it = -1 / 0;
      else if (it = E.exact(F, Q, O), it > 0) continue;
      let st = !1;
      for (const K of _)
        if (y(K, F, Q, O)) {
          st = !0;
          break;
        }
      if (st) continue;
      const et = Math.min(1, -it / j), Ft = Math.pow(1 - et, 1.6) * 0.99 + 0.01;
      if (l.next() > o + (1 - o) * Ft) continue;
      const Bt = m * 3;
      u[Bt] = F, u[Bt + 1] = Q, u[Bt + 2] = O, Ym(H, F, Q, O, p, Bt), g[m] = et, v[m] = I ? I(F, Q, O) : P, f = Math.max(f, zi(F, Q, O)), m++, k++;
    }
  };
  let M = 0;
  return h.forEach((E, _) => {
    const w = _ === h.length - 1 ? t - M : Math.round(t * E.share);
    M += w, S({ ...E, target: w, shellDepth: i * E.shellScale });
  }), {
    positions: u.subarray(0, m * 3),
    normals: p.subarray(0, m * 3),
    depth: g.subarray(0, m),
    region: v.subarray(0, m),
    count: m,
    bounds: f || 1
  };
}
function Zm(n, t, e, i) {
  if (n === "scan") {
    if (!i) throw new Error("the scan shape needs its grid loaded");
    const o = (l, c, h) => Fm(i, l, c, h);
    return [{
      field: {
        exact: o,
        smooth: o,
        bounds(l, c, h, u) {
          u[0] = u[1] = o(l, c, h);
        }
      },
      others: [],
      share: 1,
      id: As.CORTEX,
      shellScale: 1,
      box: Gm(i),
      regionOf: (l, c, h) => Nm(i, l, c, h)
    }];
  }
  const s = n === "anatomical" ? Rm(t, e) : {
    cerebrum: Vm(t, e),
    cerebellum: Km(t),
    stem: Wm(t)
  }, r = n === "anatomical" ? Dm : { cerebrum: km, cerebellum: Hm, stem: zm };
  return [
    { field: s.cerebrum, others: [s.cerebellum, s.stem], share: 0.845, id: As.CORTEX, shellScale: 1, box: r.cerebrum },
    { field: s.cerebellum, others: [], share: 0.115, id: As.CEREBELLUM, shellScale: 0.6, box: r.cerebellum },
    { field: s.stem, others: [], share: 0.04, id: As.STEM, shellScale: 0.75, box: r.stem }
  ];
}
class Dl {
  cell;
  min;
  dims;
  /** Cell b holds items[start[b]] .. items[start[b + 1] - 1]. */
  start;
  items;
  constructor(t, e, i) {
    this.cell = i;
    const s = [1 / 0, 1 / 0, 1 / 0], r = [-1 / 0, -1 / 0, -1 / 0];
    for (let u = 0; u < e; u++)
      for (let p = 0; p < 3; p++) {
        const g = t[u * 3 + p];
        g < s[p] && (s[p] = g), g > r[p] && (r[p] = g);
      }
    e === 0 && s.fill(0), this.min = s, this.dims = [1, 1, 1];
    for (let u = 0; u < 3; u++)
      this.dims[u] = Math.max(1, Math.floor((r[u] - s[u]) / i) + 1);
    const o = this.dims[0] * this.dims[1] * this.dims[2], a = new Uint32Array(o + 1), l = new Uint32Array(e);
    for (let u = 0; u < e; u++) {
      const p = this.cellOf(t[u * 3], t[u * 3 + 1], t[u * 3 + 2]);
      l[u] = p, a[p + 1]++;
    }
    for (let u = 0; u < o; u++) a[u + 1] += a[u];
    const c = new Uint32Array(e), h = a.slice(0, o);
    for (let u = 0; u < e; u++) c[h[l[u]]++] = u;
    this.start = a, this.items = c;
  }
  /** Cell coordinate along one axis, clamped into the grid. */
  coord(t, e) {
    const i = Math.floor((t - this.min[e]) / this.cell);
    return i < 0 ? 0 : i >= this.dims[e] ? this.dims[e] - 1 : i;
  }
  cellOf(t, e, i) {
    return this.coord(t, 0) + this.dims[0] * (this.coord(e, 1) + this.dims[1] * this.coord(i, 2));
  }
  /** Cell size that puts roughly `perCell` points in an average occupied cell. */
  static cellFor(t, e, i) {
    const s = [1 / 0, 1 / 0, 1 / 0], r = [-1 / 0, -1 / 0, -1 / 0];
    for (let a = 0; a < e; a++)
      for (let l = 0; l < 3; l++) {
        const c = t[a * 3 + l];
        c < s[l] && (s[l] = c), c > r[l] && (r[l] = c);
      }
    const o = Math.max(1e-9, (r[0] - s[0]) * (r[1] - s[1]) * (r[2] - s[2]));
    return Math.cbrt(o * i / Math.max(1, e));
  }
}
class ks {
  /** Subtrees at most this large are scanned linearly. */
  static LEAF = 16;
  ids;
  coords;
  positions;
  count;
  // Traversal stack: [left, right, axis, lower bound on distance²] per entry.
  stack = new Float64Array(256);
  // Max-heap of the best k so far, keyed by (distance², index).
  heapIdx = new Int32Array(0);
  heapD2 = new Float64Array(0);
  size = 0;
  self = -1;
  /** Results of the last query, nearest first. */
  idx = new Int32Array(0);
  d2 = new Float64Array(0);
  constructor(t, e) {
    this.positions = t, this.count = e, this.ids = new Uint32Array(e), this.coords = t.slice(0, e * 3);
    for (let i = 0; i < e; i++) this.ids[i] = i;
    e > 0 && this.build(0, e - 1, 0);
  }
  build(t, e, i) {
    if (e - t <= ks.LEAF) return;
    const s = t + e >> 1;
    this.select(s, t, e, i);
    const r = i === 2 ? 0 : i + 1;
    this.build(t, s - 1, r), this.build(s + 1, e, r);
  }
  /**
   * Floyd-Rivest selection: reorders [left, right] so the item at k is the
   * one a sort on `axis` would put there, with smaller ones before it.
   */
  select(t, e, i, s) {
    const r = this.coords;
    for (; i > e; ) {
      if (i - e > 600) {
        const c = i - e + 1, h = t - e + 1, u = Math.log(c), p = 0.5 * Math.exp(2 * u / 3), g = 0.5 * Math.sqrt(u * p * (c - p) / c) * (h - c / 2 < 0 ? -1 : 1), v = Math.max(e, Math.floor(t - h * p / c + g)), m = Math.min(i, Math.floor(t + (c - h) * p / c + g));
        this.select(t, v, m, s);
      }
      const o = r[3 * t + s];
      let a = e, l = i;
      for (this.swap(e, t), r[3 * i + s] > o && this.swap(e, i); a < l; ) {
        for (this.swap(a, l), a++, l--; r[3 * a + s] < o; ) a++;
        for (; r[3 * l + s] > o; ) l--;
      }
      r[3 * e + s] === o ? this.swap(e, l) : (l++, this.swap(l, i)), l <= t && (e = l + 1), t <= l && (i = l - 1);
    }
  }
  swap(t, e) {
    const { ids: i, coords: s } = this, r = i[t];
    i[t] = i[e], i[e] = r;
    for (let o = 0; o < 3; o++) {
      const a = s[3 * t + o];
      s[3 * t + o] = s[3 * e + o], s[3 * e + o] = a;
    }
  }
  /**
   * Finds up to `k` nearest points to node `self` within `radius`, excluding
   * `self`, ordered by distance then index. Returns how many were found.
   */
  query(t, e, i) {
    if (this.heapIdx.length < e && (this.heapIdx = new Int32Array(e), this.heapD2 = new Float64Array(e), this.idx = new Int32Array(e), this.d2 = new Float64Array(e)), this.size = 0, this.self = t, this.count === 0) return 0;
    const { coords: s, positions: r } = this, o = r[t * 3], a = r[t * 3 + 1], l = r[t * 3 + 2], c = i * i;
    let h = this.stack, u = 0;
    for (h[u++] = 0, h[u++] = this.count - 1, h[u++] = 0, h[u++] = 0; u > 0; ) {
      const g = h[--u], v = h[--u], m = h[--u], f = h[--u];
      if (g > (this.size === e ? this.heapD2[0] : c)) continue;
      if (m - f <= ks.LEAF) {
        for (let E = f; E <= m; E++) this.consider(E, o, a, l, e, c);
        continue;
      }
      const d = f + m >> 1;
      this.consider(d, o, a, l, e, c);
      const y = (v === 0 ? o : v === 1 ? a : l) - s[3 * d + v], S = v === 2 ? 0 : v + 1, M = Math.max(g, y * y);
      if (u + 8 > h.length) {
        const E = new Float64Array(h.length * 2);
        E.set(h), this.stack = h = E;
      }
      y < 0 ? (h[u++] = d + 1, h[u++] = m, h[u++] = S, h[u++] = M, h[u++] = f, h[u++] = d - 1, h[u++] = S, h[u++] = g) : (h[u++] = f, h[u++] = d - 1, h[u++] = S, h[u++] = M, h[u++] = d + 1, h[u++] = m, h[u++] = S, h[u++] = g);
    }
    const p = this.size;
    for (let g = p - 1; g >= 0; g--)
      this.idx[g] = this.heapIdx[0], this.d2[g] = this.heapD2[0], this.popMax();
    return p;
  }
  /**
   * Tests the point at tree slot `t`. Reads the tree's own coordinate copy,
   * which is laid out in traversal order (sequential memory access), and holds
   * the same float32 values as `positions`, so distances are bit-identical.
   */
  consider(t, e, i, s, r, o) {
    const a = this.ids[t];
    if (a === this.self) return;
    const l = this.coords, c = l[t * 3] - e, h = l[t * 3 + 1] - i, u = l[t * 3 + 2] - s, p = c * c + h * h + u * u;
    p > o || this.offer(a, p, r);
  }
  /** (d2, j) sorts after (d2', j') when farther, or equally far with a larger index. */
  worse(t, e, i, s) {
    return t > i || t === i && e > s;
  }
  offer(t, e, i) {
    const { heapIdx: s, heapD2: r } = this;
    if (this.size < i) {
      let o = this.size++;
      for (; o > 0; ) {
        const a = o - 1 >> 1;
        if (!this.worse(e, t, r[a], s[a])) break;
        s[o] = s[a], r[o] = r[a], o = a;
      }
      s[o] = t, r[o] = e;
    } else this.worse(r[0], s[0], e, t) && this.siftDown(t, e);
  }
  popMax() {
    const t = --this.size;
    t > 0 && this.siftDown(this.heapIdx[t], this.heapD2[t]);
  }
  /** Places (j, d2) at the root and sifts it down. */
  siftDown(t, e) {
    const { heapIdx: i, heapD2: s, size: r } = this;
    let o = 0;
    for (; ; ) {
      const a = 2 * o + 1;
      if (a >= r) break;
      const l = a + 1, c = l < r && this.worse(s[l], i[l], s[a], i[a]) ? l : a;
      if (!this.worse(s[c], i[c], e, t)) break;
      i[o] = i[c], s[o] = s[c], o = c;
    }
    i[o] = t, s[o] = e;
  }
}
class Qm {
  constructor(t, e) {
    this.cap = e, this.slots = new Int32Array(t * e), this.counts = new Uint16Array(t);
  }
  slots;
  counts;
  overflow = /* @__PURE__ */ new Map();
  has(t, e) {
    const i = this.counts[t], s = t * this.cap;
    for (let r = 0; r < i; r++) if (this.slots[s + r] === e) return !0;
    return this.overflow.get(t)?.includes(e) ?? !1;
  }
  add(t, e) {
    this.push(t, e), this.push(e, t);
  }
  push(t, e) {
    const i = this.counts[t];
    if (i < this.cap)
      this.slots[t * this.cap + i] = e, this.counts[t] = i + 1;
    else {
      let s = this.overflow.get(t);
      s || this.overflow.set(t, s = []), s.push(e);
    }
  }
}
const jm = 24;
function qm(n, t = {}) {
  const {
    seed: e = 11,
    minDegree: i = 2,
    maxDegree: s = 9,
    radius: r = 0.075,
    longRangeFraction: o = 3e-3
  } = t, { positions: a, count: l } = n, c = new Sn(e * 22695477 + 1), h = new ks(a, l), u = [], p = [], g = new Uint16Array(l), v = s + 4, m = new Qm(l, v + 2);
  for (let d = 0; d < l; d++) {
    const y = c.int(i, s);
    if (g[d] >= y) continue;
    let S = jm, M = h.query(d, S, r);
    if (M === 0) continue;
    let E = g[d];
    for (let _ = 0; E < y && !(_ === M && (M < S || (S *= 4, M = h.query(d, S, r), _ >= M))); _++) {
      const w = h.idx[_];
      g[w] >= v || c.next() < 0.22 || m.has(d, w) || (m.add(d, w), u.push(d), p.push(w), g[d]++, g[w]++, E++);
    }
  }
  const f = Math.round(u.length * o);
  for (let d = 0; d < f; d++) {
    const y = c.int(0, l - 1), S = a[y * 3];
    let M = -1, E = 1 / 0;
    for (let _ = 0; _ < 24; _++) {
      const w = c.int(0, l - 1);
      if (w === y) continue;
      const P = a[w * 3];
      if (S * P > 0 && c.next() < 0.75) continue;
      const j = a[w * 3 + 1] - a[y * 3 + 1], C = a[w * 3 + 2] - a[y * 3 + 2], I = Math.abs(P + S) + Math.abs(j) * 1.5 + Math.abs(C) * 1.5;
      I < E && (E = I, M = w);
    }
    M < 0 || m.has(y, M) || (m.add(y, M), u.push(y), p.push(M), g[y]++, g[M]++);
  }
  return Lc(n, u, p, r, c);
}
function Lc(n, t, e, i, s) {
  const { positions: r, count: o } = n, a = t.length, l = new Uint32Array(a * 2), c = new Float32Array(a), h = new Float32Array(a);
  for (let m = 0; m < a; m++) {
    const f = t[m], d = e[m];
    l[m * 2] = f, l[m * 2 + 1] = d;
    const y = r[d * 3] - r[f * 3], S = r[d * 3 + 1] - r[f * 3 + 1], M = r[d * 3 + 2] - r[f * 3 + 2];
    c[m] = Math.sqrt(y * y + S * S + M * M);
    const E = Math.min(1, c[m] / i);
    h[m] = 0.55 + 0.45 * (1 - E) * s.range(0.7, 1);
  }
  const u = new Uint32Array(o + 1);
  for (let m = 0; m < a; m++)
    u[l[m * 2] + 1]++, u[l[m * 2 + 1] + 1]++;
  for (let m = 0; m < o; m++) u[m + 1] += u[m];
  const p = new Uint32Array(a * 2), g = new Uint32Array(a * 2), v = u.slice(0, o);
  for (let m = 0; m < a; m++) {
    const f = l[m * 2], d = l[m * 2 + 1];
    p[v[f]] = m, g[v[f]] = d, v[f]++, p[v[d]] = m, g[v[d]] = f, v[d]++;
  }
  return {
    nodeCount: o,
    positions: r,
    normals: n.normals,
    depth: n.depth,
    region: n.region,
    edgeCount: a,
    edges: l,
    edgeLength: c,
    edgeWeight: h,
    adjOffset: u,
    adjEdge: p,
    adjPeer: g,
    bounds: n.bounds
  };
}
function Bl(n) {
  return {
    id: "procedural",
    label: "procedural brain",
    load() {
      const t = Xm(n);
      return qm(t, n);
    }
  };
}
function xs(n, t, e) {
  if (Sm(n)) {
    const i = ym(n, e);
    if (i.length % t !== 0) throw new Error(`${e}: ${i.length} values is not a multiple of ${t}`);
    return i;
  }
  if (n.length > 0 && Array.isArray(n[0])) {
    const i = n, s = new Float64Array(i.length * t);
    for (let r = 0; r < i.length; r++)
      for (let o = 0; o < t; o++) s[r * t + o] = i[r][o];
    return s;
  }
  return Float64Array.from(n);
}
function Jm(n, t) {
  const e = [0, 0, 0];
  for (let o = 0; o < t; o++)
    for (let a = 0; a < 3; a++) e[a] += n[o * 3 + a];
  for (let o = 0; o < 3; o++) e[o] /= Math.max(1, t);
  let i = 0;
  for (let o = 0; o < t; o++) {
    const a = Math.hypot(
      n[o * 3] - e[0],
      n[o * 3 + 1] - e[1],
      n[o * 3 + 2] - e[2]
    );
    a > i && (i = a);
  }
  const s = i > 0 ? 0.62 / i : 1, r = new Float32Array(t * 3);
  for (let o = 0; o < t; o++)
    for (let a = 0; a < 3; a++)
      r[o * 3 + a] = (n[o * 3 + a] - e[a]) * s;
  return { positions: r, bounds: i * s || 1 };
}
function $m(n, t = 11) {
  const e = xs(n.nodes, 3, "nodes"), i = Math.floor(e.length / 3);
  if (i === 0) throw new Error("dataset has no nodes");
  const { positions: s, bounds: r } = Jm(e, i), o = new Float32Array(i * 3);
  for (let v = 0; v < i; v++) {
    const m = s[v * 3], f = s[v * 3 + 1], d = s[v * 3 + 2], y = Math.hypot(m, f, d) || 1;
    o[v * 3] = m / y, o[v * 3 + 1] = f / y, o[v * 3 + 2] = d / y;
  }
  const a = new Float32Array(i);
  if (n.depth) {
    const v = xs(n.depth, 1, "depth");
    for (let m = 0; m < i; m++) a[m] = v[m] ?? 0;
  }
  const l = new Uint8Array(i);
  if (n.regions) {
    const v = xs(n.regions, 1, "regions");
    for (let m = 0; m < i; m++) l[m] = (v[m] ?? 0) & 255;
  }
  const c = xs(n.edges, 2, "edges"), h = [], u = [];
  for (let v = 0; v < c.length / 2; v++) {
    const m = c[v * 2] | 0, f = c[v * 2 + 1] | 0;
    m === f || m < 0 || f < 0 || m >= i || f >= i || (h.push(m), u.push(f));
  }
  const p = { positions: s, normals: o, depth: a, region: l, count: i, bounds: r };
  let g = 0.075;
  if (h.length > 0) {
    let v = 0;
    for (let m = 0; m < h.length; m++) {
      const f = h[m], d = u[m];
      v += Math.hypot(
        s[d * 3] - s[f * 3],
        s[d * 3 + 1] - s[f * 3 + 1],
        s[d * 3 + 2] - s[f * 3 + 2]
      );
    }
    g = v / h.length * 1.4;
  }
  return Lc(p, h, u, g, new Sn(t));
}
const Rc = "Y2xhc3MgSyB7CiAgc3RhdGU7CiAgY29uc3RydWN0b3IodCA9IDEpIHsKICAgIHRoaXMuc3RhdGUgPSB0ID4+PiAwIHx8IDE7CiAgfQogIC8qKiBVbmlmb3JtIGluIFswLCAxKS4gKi8KICBuZXh0KCkgewogICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgKyAxODMxNTY1ODEzIHwgMDsKICAgIGxldCB0ID0gdGhpcy5zdGF0ZTsKICAgIHJldHVybiB0ID0gTWF0aC5pbXVsKHQgXiB0ID4+PiAxNSwgdCB8IDEpLCB0IF49IHQgKyBNYXRoLmltdWwodCBeIHQgPj4+IDcsIHQgfCA2MSksICgodCBeIHQgPj4+IDE0KSA+Pj4gMCkgLyA0Mjk0OTY3Mjk2OwogIH0KICAvKiogVW5pZm9ybSBpbiBbbWluLCBtYXgpLiAqLwogIHJhbmdlKHQsIG4pIHsKICAgIHJldHVybiB0ICsgdGhpcy5uZXh0KCkgKiAobiAtIHQpOwogIH0KICAvKiogSW50ZWdlciBpbiBbbWluLCBtYXhdLiAqLwogIGludCh0LCBuKSB7CiAgICByZXR1cm4gdCArIE1hdGguZmxvb3IodGhpcy5uZXh0KCkgKiAobiAtIHQgKyAxKSk7CiAgfQogIC8qKiBTdGFuZGFyZCBub3JtYWwsIHZpYSBCb3gtTXVsbGVyLiAqLwogIG5vcm1hbCgpIHsKICAgIGNvbnN0IHQgPSAxIC0gdGhpcy5uZXh0KCksIG4gPSB0aGlzLm5leHQoKTsKICAgIHJldHVybiBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyh0KSkgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIG4pOwogIH0KICAvKiogVW5pZm9ybSBwb2ludCBvbiB0aGUgdW5pdCBzcGhlcmUuICovCiAgb25TcGhlcmUodCkgewogICAgY29uc3QgbiA9IHRoaXMucmFuZ2UoLTEsIDEpLCBlID0gdGhpcy5yYW5nZSgwLCBNYXRoLlBJICogMiksIG8gPSBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgMSAtIG4gKiBuKSk7CiAgICByZXR1cm4gdFswXSA9IG8gKiBNYXRoLmNvcyhlKSwgdFsxXSA9IG8gKiBNYXRoLnNpbihlKSwgdFsyXSA9IG4sIHQ7CiAgfQp9CmNvbnN0IEl0ID0gewogIGkxOiBJbnQ4QXJyYXksCiAgdTE6IFVpbnQ4QXJyYXksCiAgdTFjOiBVaW50OENsYW1wZWRBcnJheSwKICBpMjogSW50MTZBcnJheSwKICB1MjogVWludDE2QXJyYXksCiAgaTQ6IEludDMyQXJyYXksCiAgdTQ6IFVpbnQzMkFycmF5LAogIGY0OiBGbG9hdDMyQXJyYXksCiAgZjg6IEZsb2F0NjRBcnJheSwKICBpbnQ4OiBJbnQ4QXJyYXksCiAgdWludDg6IFVpbnQ4QXJyYXksCiAgdWludDhjOiBVaW50OENsYW1wZWRBcnJheSwKICBpbnQxNjogSW50MTZBcnJheSwKICB1aW50MTY6IFVpbnQxNkFycmF5LAogIGludDMyOiBJbnQzMkFycmF5LAogIHVpbnQzMjogVWludDMyQXJyYXksCiAgZmxvYXQzMjogRmxvYXQzMkFycmF5LAogIGZsb2F0NjQ6IEZsb2F0NjRBcnJheQp9OwpmdW5jdGlvbiBTdChzKSB7CiAgcmV0dXJuIHR5cGVvZiBzID09ICJvYmplY3QiICYmIHMgIT09IG51bGwgJiYgdHlwZW9mIHMuZHR5cGUgPT0gInN0cmluZyIgJiYgdHlwZW9mIHMuYmRhdGEgPT0gInN0cmluZyI7Cn0KZnVuY3Rpb24gTHQocykgewogIGNvbnN0IHQgPSBVaW50OEFycmF5LmZyb21CYXNlNjQ7CiAgaWYgKHQpIHJldHVybiB0KHMpOwogIGNvbnN0IG4gPSBhdG9iKHMpLCBlID0gbmV3IFVpbnQ4QXJyYXkobi5sZW5ndGgpOwogIGZvciAobGV0IG8gPSAwOyBvIDwgbi5sZW5ndGg7IG8rKykgZVtvXSA9IG4uY2hhckNvZGVBdChvKTsKICByZXR1cm4gZTsKfQpmdW5jdGlvbiBSdChzLCB0KSB7CiAgY29uc3QgbiA9IEl0W3MuZHR5cGVdOwogIGlmICghbikgdGhyb3cgbmV3IEVycm9yKGAke3R9OiB1bnN1cHBvcnRlZCBkdHlwZSAiJHtzLmR0eXBlfSJgKTsKICBjb25zdCBlID0gTHQocy5iZGF0YSk7CiAgaWYgKGUuYnl0ZUxlbmd0aCAlIG4uQllURVNfUEVSX0VMRU1FTlQgIT09IDApCiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dH06ICR7ZS5ieXRlTGVuZ3RofSBieXRlcyBpcyBub3QgYSB3aG9sZSBudW1iZXIgb2YgJHtzLmR0eXBlfSB2YWx1ZXNgKTsKICBjb25zdCBvID0gbmV3IEFycmF5QnVmZmVyKGUuYnl0ZUxlbmd0aCk7CiAgbmV3IFVpbnQ4QXJyYXkobykuc2V0KGUpOwogIGNvbnN0IGEgPSBuZXcgbihvKTsKICBpZiAocy5zaGFwZSAhPT0gdm9pZCAwKSB7CiAgICBjb25zdCByID0gU3RyaW5nKHMuc2hhcGUpLnNwbGl0KCIsIikucmVkdWNlKChjLCBpKSA9PiBjICogTnVtYmVyKGkpLCAxKTsKICAgIGlmIChyICE9PSBhLmxlbmd0aCkKICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R9OiBzaGFwZSAke3Muc2hhcGV9IG5lZWRzICR7cn0gdmFsdWVzLCBiZGF0YSBob2xkcyAke2EubGVuZ3RofWApOwogIH0KICByZXR1cm4gYTsKfQpjb25zdCBMID0gbmV3IEludDhBcnJheShbCiAgMSwKICAxLAogIDAsCiAgLTEsCiAgMSwKICAwLAogIDEsCiAgLTEsCiAgMCwKICAtMSwKICAtMSwKICAwLAogIDEsCiAgMCwKICAxLAogIC0xLAogIDAsCiAgMSwKICAxLAogIDAsCiAgLTEsCiAgLTEsCiAgMCwKICAtMSwKICAwLAogIDEsCiAgMSwKICAwLAogIC0xLAogIDEsCiAgMCwKICAxLAogIC0xLAogIDAsCiAgLTEsCiAgLTEKXSksICR0ID0gMSAvIDMsIEQgPSAxIC8gNjsKY2xhc3MgRHQgewogIHBlcm0gPSBuZXcgVWludDhBcnJheSg1MTIpOwogIHBlcm1Nb2QxMiA9IG5ldyBVaW50OEFycmF5KDUxMik7CiAgY29uc3RydWN0b3IodCA9IDEpIHsKICAgIGNvbnN0IG4gPSBuZXcgSyh0KSwgZSA9IG5ldyBVaW50OEFycmF5KDI1Nik7CiAgICBmb3IgKGxldCBvID0gMDsgbyA8IDI1NjsgbysrKSBlW29dID0gbzsKICAgIGZvciAobGV0IG8gPSAyNTU7IG8gPiAwOyBvLS0pIHsKICAgICAgY29uc3QgYSA9IG4uaW50KDAsIG8pLCByID0gZVtvXTsKICAgICAgZVtvXSA9IGVbYV0sIGVbYV0gPSByOwogICAgfQogICAgZm9yIChsZXQgbyA9IDA7IG8gPCA1MTI7IG8rKykKICAgICAgdGhpcy5wZXJtW29dID0gZVtvICYgMjU1XSwgdGhpcy5wZXJtTW9kMTJbb10gPSB0aGlzLnBlcm1bb10gJSAxMjsKICB9CiAgLyoqIFNjYWxhciBub2lzZSBpbiByb3VnaGx5IFstMSwgMV0uICovCiAgc2FtcGxlKHQsIG4sIGUpIHsKICAgIGNvbnN0IHsgcGVybTogbywgcGVybU1vZDEyOiBhIH0gPSB0aGlzLCByID0gKHQgKyBuICsgZSkgKiAkdCwgYyA9IE1hdGguZmxvb3IodCArIHIpLCBpID0gTWF0aC5mbG9vcihuICsgciksIGYgPSBNYXRoLmZsb29yKGUgKyByKSwgbCA9IChjICsgaSArIGYpICogRCwgdSA9IHQgLSAoYyAtIGwpLCBiID0gbiAtIChpIC0gbCksIHcgPSBlIC0gKGYgLSBsKTsKICAgIGxldCBwLCBoLCBtLCBkLCB5LCBBOwogICAgdSA+PSBiID8gYiA+PSB3ID8gKHAgPSAxLCBoID0gMCwgbSA9IDAsIGQgPSAxLCB5ID0gMSwgQSA9IDApIDogdSA+PSB3ID8gKHAgPSAxLCBoID0gMCwgbSA9IDAsIGQgPSAxLCB5ID0gMCwgQSA9IDEpIDogKHAgPSAwLCBoID0gMCwgbSA9IDEsIGQgPSAxLCB5ID0gMCwgQSA9IDEpIDogYiA8IHcgPyAocCA9IDAsIGggPSAwLCBtID0gMSwgZCA9IDAsIHkgPSAxLCBBID0gMSkgOiB1IDwgdyA/IChwID0gMCwgaCA9IDEsIG0gPSAwLCBkID0gMCwgeSA9IDEsIEEgPSAxKSA6IChwID0gMCwgaCA9IDEsIG0gPSAwLCBkID0gMSwgeSA9IDEsIEEgPSAwKTsKICAgIGNvbnN0IGcgPSB1IC0gcCArIEQsIE0gPSBiIC0gaCArIEQsIEUgPSB3IC0gbSArIEQsIHggPSB1IC0gZCArIDIgKiBELCBSID0gYiAtIHkgKyAyICogRCwgTiA9IHcgLSBBICsgMiAqIEQsIFMgPSB1IC0gMSArIDMgKiBELCBUID0gYiAtIDEgKyAzICogRCwgcSA9IHcgLSAxICsgMyAqIEQsIGsgPSBjICYgMjU1LCBYID0gaSAmIDI1NSwgdiA9IGYgJiAyNTU7CiAgICBsZXQgVSA9IDAsIEIgPSAwLjYgLSB1ICogdSAtIGIgKiBiIC0gdyAqIHc7CiAgICBpZiAoQiA+IDApIHsKICAgICAgY29uc3QgRiA9IGFbayArIG9bWCArIG9bdl1dXSAqIDM7CiAgICAgIEIgKj0gQiwgVSArPSBCICogQiAqIChMW0ZdICogdSArIExbRiArIDFdICogYiArIExbRiArIDJdICogdyk7CiAgICB9CiAgICBsZXQgSSA9IDAuNiAtIGcgKiBnIC0gTSAqIE0gLSBFICogRTsKICAgIGlmIChJID4gMCkgewogICAgICBjb25zdCBGID0gYVtrICsgcCArIG9bWCArIGggKyBvW3YgKyBtXV1dICogMzsKICAgICAgSSAqPSBJLCBVICs9IEkgKiBJICogKExbRl0gKiBnICsgTFtGICsgMV0gKiBNICsgTFtGICsgMl0gKiBFKTsKICAgIH0KICAgIGxldCAkID0gMC42IC0geCAqIHggLSBSICogUiAtIE4gKiBOOwogICAgaWYgKCQgPiAwKSB7CiAgICAgIGNvbnN0IEYgPSBhW2sgKyBkICsgb1tYICsgeSArIG9bdiArIEFdXV0gKiAzOwogICAgICAkICo9ICQsIFUgKz0gJCAqICQgKiAoTFtGXSAqIHggKyBMW0YgKyAxXSAqIFIgKyBMW0YgKyAyXSAqIE4pOwogICAgfQogICAgbGV0IE8gPSAwLjYgLSBTICogUyAtIFQgKiBUIC0gcSAqIHE7CiAgICBpZiAoTyA+IDApIHsKICAgICAgY29uc3QgRiA9IGFbayArIDEgKyBvW1ggKyAxICsgb1t2ICsgMV1dXSAqIDM7CiAgICAgIE8gKj0gTywgVSArPSBPICogTyAqIChMW0ZdICogUyArIExbRiArIDFdICogVCArIExbRiArIDJdICogcSk7CiAgICB9CiAgICByZXR1cm4gMzIgKiBVOwogIH0KICAvKiogU3VtbWVkIG9jdGF2ZXMsIGluIHJvdWdobHkgWy0xLCAxXS4gKi8KICBmYm0odCwgbiwgZSwgbyA9IDQsIGEgPSAyLCByID0gMC41KSB7CiAgICBsZXQgYyA9IDAsIGkgPSAxLCBmID0gMCwgbCA9IDE7CiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IG87IHUrKykKICAgICAgYyArPSBpICogdGhpcy5zYW1wbGUodCAqIGwsIG4gKiBsLCBlICogbCksIGYgKz0gaSwgaSAqPSByLCBsICo9IGE7CiAgICByZXR1cm4gYyAvIGY7CiAgfQogIC8qKgogICAqIFJpZGdlZCBmYm0gaW4gWzAsIDFdLiBUaGUgY3JlYXNlcyBhcmUgd2hhdCBtYWtlIGEgcG9pbnQgY2xvdWQgcmVhZCBhcwogICAqIGNvcnRleCByYXRoZXIgdGhhbiBhcyBhIGx1bXB5IGVnZy4KICAgKi8KICByaWRnZWQodCwgbiwgZSwgbyA9IDQpIHsKICAgIGxldCBhID0gMCwgciA9IDEsIGMgPSAwLCBpID0gMTsKICAgIGZvciAobGV0IGYgPSAwOyBmIDwgbzsgZisrKSB7CiAgICAgIGNvbnN0IGwgPSAxIC0gTWF0aC5hYnModGhpcy5zYW1wbGUodCAqIGksIG4gKiBpLCBlICogaSkpOwogICAgICBhICs9IHIgKiBsICogbCwgYyArPSByLCByICo9IDAuNSwgaSAqPSAyOwogICAgfQogICAgcmV0dXJuIGEgLyBjOwogIH0KfQpmdW5jdGlvbiBqKHMsIHQsIG4pIHsKICByZXR1cm4gTWF0aC5zcXJ0KHMgKiBzICsgdCAqIHQgKyBuICogbik7Cn0KZnVuY3Rpb24gQyhzLCB0LCBuLCBlLCBvLCBhLCByLCBjLCBpKSB7CiAgY29uc3QgZiA9IHMgLSBlLCBsID0gdCAtIG8sIHUgPSBuIC0gYSwgYiA9IGooZiAvIHIsIGwgLyBjLCB1IC8gaSksIHcgPSBqKGYgLyAociAqIHIpLCBsIC8gKGMgKiBjKSwgdSAvIChpICogaSkpOwogIHJldHVybiB3ID09PSAwID8gLU1hdGgubWluKHIsIGMsIGkpIDogYiAqIChiIC0gMSkgLyB3Owp9CmZ1bmN0aW9uIGx0KHMsIHQsIG4sIGUsIG8sIGEsIHIsIGMsIGkpIHsKICBjb25zdCBmID0gTWF0aC5hYnMocyAtIGUpIC0gciwgbCA9IE1hdGguYWJzKHQgLSBvKSAtIGMsIHUgPSBNYXRoLmFicyhuIC0gYSkgLSBpOwogIHJldHVybiBqKE1hdGgubWF4KGYsIDApLCBNYXRoLm1heChsLCAwKSwgTWF0aC5tYXgodSwgMCkpICsgTWF0aC5taW4oTWF0aC5tYXgoZiwgTWF0aC5tYXgobCwgdSkpLCAwKTsKfQpmdW5jdGlvbiB4dChzLCB0LCBuLCBlLCBvLCBhLCByLCBjLCBpLCBmLCBsKSB7CiAgY29uc3QgdSA9IHMgLSBlLCBiID0gdCAtIG8sIHcgPSBuIC0gYSwgcCA9IHIgLSBlLCBoID0gYyAtIG8sIG0gPSBpIC0gYSwgZCA9IHAgKiBwICsgaCAqIGggKyBtICogbSwgeSA9IGQgPT09IDAgPyAwIDogTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHUgKiBwICsgYiAqIGggKyB3ICogbSkgLyBkKSksIEEgPSB1IC0gcCAqIHksIGcgPSBiIC0gaCAqIHksIE0gPSB3IC0gbSAqIHk7CiAgcmV0dXJuIGooQSwgZywgTSkgLSAoZiArIChsIC0gZikgKiB5KTsKfQpmdW5jdGlvbiBQKHMsIHQsIG4pIHsKICBjb25zdCBlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgMC41ICsgMC41ICogKHQgLSBzKSAvIG4pKTsKICByZXR1cm4gdCAqICgxIC0gZSkgKyBzICogZSAtIG4gKiBlICogKDEgLSBlKTsKfQpmdW5jdGlvbiBfKHMsIHQsIG4pIHsKICBjb25zdCBlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgMC41IC0gMC41ICogKHQgLSBzKSAvIG4pKTsKICByZXR1cm4gdCAqICgxIC0gZSkgKyBzICogZSArIG4gKiBlICogKDEgLSBlKTsKfQpjb25zdCB6ID0gMS4xLCBHID0gMWUtOTsKZnVuY3Rpb24gQ3QocywgdCwgbikgewogIHJldHVybiBsdChzLCB0LCBuLCAwLCAtMC4xLCAtMC4wMywgMSwgMC4xNTUsIDAuMjcpOwp9CmZ1bmN0aW9uIFR0KHMsIHQsIG4pIHsKICByZXR1cm4gTWF0aC5tYXgoTWF0aC5hYnMocykgLSAwLjAxMSwgLUN0KHMsIHQsIG4pKTsKfQpmdW5jdGlvbiBodChzLCB0LCBuLCBlLCBvLCBhLCByLCBjLCBpLCBmKSB7CiAgY29uc3QgbCA9IE1hdGgubWF4KE1hdGguYWJzKCh0IC0gZSkgKiBhICsgKG4gLSBvKSAqIHIpIC0gYywgZik7CiAgcmV0dXJuIE1hdGgubWF4KHMsIE1hdGgubWluKC1sLCBzICsgaSkpOwp9CmNvbnN0IHV0ID0gKCgpID0+IHsKICBjb25zdCBzID0gTWF0aC5oeXBvdCgxLCAwLjMzKTsKICByZXR1cm4gWzEgLyBzLCAwLjMzIC8gc107Cn0pKCksIGZ0ID0gKCgpID0+IHsKICBjb25zdCBzID0gTWF0aC5oeXBvdCgwLjIsIDAuMzUpOwogIHJldHVybiBbMC4yIC8gcywgMC4zNSAvIHNdOwp9KSgpOwpmdW5jdGlvbiB2dChzLCB0LCBuKSB7CiAgY29uc3QgZSA9IE1hdGgubWF4KDAsIG4pLCBvID0gMSArIDAuMTggKiBlLCBhID0gTWF0aC5tYXgoMCwgLW4gLSAwLjEpLCByID0gMC4xMiAqIGEgKiBhICsgMC4xNCAqIGU7CiAgbGV0IGMgPSBDKHMgKiBvLCB0ICsgciwgbiwgMCwgMC4xLCAtMC4wMywgMC40NSwgMC4zMSwgMC41Nik7CiAgYyA9IF8oYywgLSh0ICsgMC4yKSwgMC4wNSk7CiAgY29uc3QgaSA9IHQgKyAwLjE3ICsgMC4yICogTWF0aC5tYXgoMCwgbiksIGYgPSBDKHMsIGksIG4sIDAuMjg1LCAwLCAtMC4wNiwgMC4xMywgMC4xMywgMC4zOSk7CiAgYyA9IFAoYywgZiwgMC4wOSk7CiAgY29uc3QgbCA9IGx0KHMsIHQsIG4sIDAuNDcsIDAsIDAuMTQsIDAuMiwgMC40LCAwLjE3KTsKICBjID0gaHQoYywgdCwgbiwgLTAuMDYsIDAuMjUsIHV0WzBdLCB1dFsxXSwgNmUtMywgMC4wNDUsIGwpOwogIGNvbnN0IHUgPSBNYXRoLm1heCgwLjAyIC0gdCwgTWF0aC5hYnMocykgLSAwLjQ3KTsKICByZXR1cm4gYyA9IGh0KGMsIHQsIG4sIDAuNCwgLTAuMSwgZnRbMF0sIGZ0WzFdLCA1ZS0zLCAwLjA1LCB1KSwgYzsKfQpmdW5jdGlvbiBRKHMsIHQsIG4pIHsKICBjb25zdCBlID0gTWF0aC5hYnMocyk7CiAgbGV0IG8gPSB2dChlLCB0LCBuKTsKICByZXR1cm4gbyA9IFAobywgQyhzLCB0LCBuLCAwLCAtMC4wOCwgLTAuMDYsIDAuMTMsIDAuMTIsIDAuMjQpLCAwLjA0KSwgXyhvLCAtVHQocywgdCwgbiksIDhlLTMpOwp9CmZ1bmN0aW9uIGR0KHMsIHQpIHsKICBjb25zdCBuID0gTWF0aC5hYnMocyk7CiAgaWYgKG4gPj0gdCkgcmV0dXJuIDA7CiAgY29uc3QgZSA9IDEgLSBuIC8gdDsKICByZXR1cm4gZSAqIGUgKiAoMyAtIDIgKiBlKTsKfQpmdW5jdGlvbiBOdChzLCB0KSB7CiAgY29uc3QgbiA9IHQuZm9sZFNjYWxlICogMC43OCwgZSA9IHQuZm9sZERlcHRoICogMS42LCBvID0gMC4yNSAqIGUsIGEgPSAtbywgciA9IDEuNSAqIGUgLSBvOwogIHJldHVybiB7CiAgICBleGFjdChjLCBpLCBmKSB7CiAgICAgIGNvbnN0IGwgPSBRKGMsIGksIGYpLCB1ID0gTWF0aC5hYnMoYyksIGIgPSBkdChzLnNhbXBsZSh1ICogbiwgaSAqIG4sIGYgKiBuICogMC42MiksIDAuMTYpLCB3ID0gZHQocy5zYW1wbGUodSAqIG4gKiAyLjEgKyAxNywgaSAqIG4gKiAyLjEsIGYgKiBuICogMS41KSwgMC4xMyk7CiAgICAgIHJldHVybiBsICsgZSAqIChiICsgMC41ICogdykgLSBvOwogICAgfSwKICAgIHNtb290aDogUSwKICAgIGJvdW5kcyhjLCBpLCBmLCBsKSB7CiAgICAgIGNvbnN0IHUgPSBRKGMsIGksIGYpOwogICAgICBsWzBdID0gdSArIGEgLSBHLCBsWzFdID0gdSArIHIgKyBHOwogICAgfQogIH07Cn0KY29uc3QgRXQgPSBbMCwgLTAuMzMsIC0wLjI5XTsKZnVuY3Rpb24gWihzLCB0LCBuKSB7CiAgY29uc3QgWywgZSwgb10gPSBFdCwgYSA9IE1hdGguYWJzKHMpOwogIGxldCByID0gQyhhLCB0LCBuLCAwLjE1LCBlLCBvLCAwLjE3LCAwLjEyLCAwLjE4KTsKICByZXR1cm4gciA9IFAociwgQyhzLCB0LCBuLCAwLCBlICsgMC4wMSwgbyAtIDAuMDEsIDAuMDcsIDAuMTM1LCAwLjE3KSwgMC4wNCksIF8ociwgdCAtICgtMC4yIC0gMC4yNSAqIE1hdGgubWF4KDAsIGEgLSAwLjEpKSwgMC4wMyk7Cn0KY29uc3QgcHQgPSA5ZS0zLCBtdCA9IDZlLTM7CmZ1bmN0aW9uIE90KHMpIHsKICBjb25zdCB0ID0gcHQgKyBtdCAqIHogKyBHLCBbLCBuLCBlXSA9IEV0OwogIHJldHVybiB7CiAgICBleGFjdChvLCBhLCByKSB7CiAgICAgIGxldCBjID0gWihvLCBhLCByKTsKICAgICAgY29uc3QgaSA9IGooMCwgYSAtIG4gLSAwLjA2LCByIC0gZSArIDAuMDQpOwogICAgICByZXR1cm4gYyArPSBwdCAqIE1hdGguc2luKGkgKiAxNzAgKyAxLjQgKiBzLnNhbXBsZShvICogNSwgYSAqIDUsIHIgKiA1KSksIGMgKz0gbXQgKiBzLmZibShvICogOSwgYSAqIDksIHIgKiA5LCAyKSwgYzsKICAgIH0sCiAgICBzbW9vdGg6IFosCiAgICBib3VuZHMobywgYSwgciwgYykgewogICAgICBjb25zdCBpID0gWihvLCBhLCByKTsKICAgICAgY1swXSA9IGkgLSB0LCBjWzFdID0gaSArIHQ7CiAgICB9CiAgfTsKfQpmdW5jdGlvbiB0dChzLCB0LCBuKSB7CiAgbGV0IGUgPSB4dChzLCB0LCBuLCAwLCAtMC4xMiwgLTAuMDgsIDAsIC0wLjU1LCAtMC4xNSwgMC4wNjUsIDAuMDQpOwogIHJldHVybiBlID0gUChlLCBDKHMsIHQsIG4sIDAsIC0wLjMsIC0wLjA0NSwgMC4wODUsIDAuMDc1LCAwLjA3KSwgMC4wMzUpLCBlOwp9CmNvbnN0IHd0ID0gNmUtMzsKZnVuY3Rpb24gX3QocykgewogIGNvbnN0IHQgPSB3dCAqIHogKyBHOwogIHJldHVybiB7CiAgICBleGFjdChuLCBlLCBvKSB7CiAgICAgIHJldHVybiB0dChuLCBlLCBvKSArIHd0ICogcy5mYm0obiAqIDEyLCBlICogMTIsIG8gKiAxMiwgMik7CiAgICB9LAogICAgc21vb3RoOiB0dCwKICAgIGJvdW5kcyhuLCBlLCBvLCBhKSB7CiAgICAgIGNvbnN0IHIgPSB0dChuLCBlLCBvKTsKICAgICAgYVswXSA9IHIgLSB0LCBhWzFdID0gciArIHQ7CiAgICB9CiAgfTsKfQpmdW5jdGlvbiBHdChzLCB0KSB7CiAgcmV0dXJuIHsgY2VyZWJydW06IE50KHMsIHQpLCBjZXJlYmVsbHVtOiBPdChzKSwgc3RlbTogX3QocykgfTsKfQpjb25zdCBrdCA9IHsKICBjZXJlYnJ1bTogeyB4OiBbLTAuNSwgMC41XSwgeTogWy0wLjQyLCAwLjQ3XSwgejogWy0wLjY0LCAwLjY0XSB9LAogIGNlcmViZWxsdW06IHsgeDogWy0wLjM4LCAwLjM4XSwgeTogWy0wLjUsIC0wLjE1XSwgejogWy0wLjUyLCAtMC4wOF0gfSwKICBzdGVtOiB7IHg6IFstMC4xNCwgMC4xNF0sIHk6IFstMC42NCwgLTAuMDJdLCB6OiBbLTAuMjQsIDAuMDhdIH0KfSwganQgPSAiTkZTREYyIiwgbnQgPSAzMjsKZnVuY3Rpb24gYnQocykgewogIGNvbnN0IHQgPSBuZXcgVWludDhBcnJheShzKTsKICBpZiAoU3RyaW5nLmZyb21DaGFyQ29kZSguLi50LnN1YmFycmF5KDAsIDYpKSAhPT0ganQpIHRocm93IG5ldyBFcnJvcigibm90IGEgTmV1cm9mb3JtIGJyYWluIGdyaWQiKTsKICBjb25zdCBlID0gbmV3IERhdGFWaWV3KHMpLCBvID0gZS5nZXRVaW50MTYoNiwgITApLCBhID0gZS5nZXRVaW50MTYoOCwgITApLCByID0gZS5nZXRVaW50MTYoMTAsICEwKSwgYyA9IFsKICAgIGUuZ2V0RmxvYXQzMigxMiwgITApLAogICAgZS5nZXRGbG9hdDMyKDE2LCAhMCksCiAgICBlLmdldEZsb2F0MzIoMjAsICEwKQogIF0sIGkgPSBlLmdldEZsb2F0MzIoMjQsICEwKSwgZiA9IGUuZ2V0RmxvYXQzMigyOCwgITApLCBsID0gbyAqIGEgKiByOwogIGlmIChzLmJ5dGVMZW5ndGggPCBudCArIDIgKiBsKSB0aHJvdyBuZXcgRXJyb3IoImJyYWluIGdyaWQgaXMgdHJ1bmNhdGVkIik7CiAgY29uc3QgdSA9IG5ldyBJbnQ4QXJyYXkocywgbnQsIGwpLCBiID0gbmV3IEludDhBcnJheShsKTsKICBmb3IgKGxldCB3ID0gMDsgdyA8IGw7IHcgKz0gbykgewogICAgbGV0IHAgPSAwOwogICAgZm9yIChsZXQgaCA9IHc7IGggPCB3ICsgbzsgaCsrKQogICAgICBwICs9IHVbaF0sIGJbaF0gPSBwOwogIH0KICByZXR1cm4geyBueDogbywgbnk6IGEsIG56OiByLCBvcmlnaW46IGMsIHZveGVsOiBpLCBzdGVwOiBmLCBzZGY6IGIsIHJlZ2lvbjogbmV3IFVpbnQ4QXJyYXkocywgbnQgKyBsLCBsKSB9Owp9CmNvbnN0IGV0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKZnVuY3Rpb24gWHQocykgewogIGxldCB0ID0gZXQuZ2V0KHMpOwogIHJldHVybiB0IHx8ICh0ID0gKGFzeW5jICgpID0+IHsKICAgIGNvbnN0IG4gPSBhd2FpdCBmZXRjaChzKTsKICAgIGlmICghbi5vaykgdGhyb3cgbmV3IEVycm9yKGBjYW5ub3QgbG9hZCAke3N9OiAke24uc3RhdHVzfWApOwogICAgY29uc3QgZSA9IGF3YWl0IG4uYXJyYXlCdWZmZXIoKSwgbyA9IG5ldyBVaW50OEFycmF5KGUsIDAsIDIpOwogICAgaWYgKG9bMF0gIT09IDMxIHx8IG9bMV0gIT09IDEzOSkgcmV0dXJuIGJ0KGUpOwogICAgY29uc3QgYSA9IG5ldyBCbG9iKFtlXSkuc3RyZWFtKCkucGlwZVRocm91Z2gobmV3IERlY29tcHJlc3Npb25TdHJlYW0oImd6aXAiKSk7CiAgICByZXR1cm4gYnQoYXdhaXQgbmV3IFJlc3BvbnNlKGEpLmFycmF5QnVmZmVyKCkpOwogIH0pKCksIHQuY2F0Y2goKCkgPT4gZXQuZGVsZXRlKHMpKSwgZXQuc2V0KHMsIHQpKSwgdDsKfQpjb25zdCB6dCA9IDAuMTsKZnVuY3Rpb24gUHQocywgdCwgbiwgZSkgewogIGNvbnN0IG8gPSAoTWF0aC5hYnModCkgLSBzLm9yaWdpblswXSkgLyBzLnZveGVsLCBhID0gKG4gLSBzLm9yaWdpblsxXSkgLyBzLnZveGVsLCByID0gKGUgLSBzLm9yaWdpblsyXSkgLyBzLnZveGVsOwogIGlmIChvIDwgMCB8fCBhIDwgMCB8fCByIDwgMCB8fCBvID49IHMubnggLSAxIHx8IGEgPj0gcy5ueSAtIDEgfHwgciA+PSBzLm56IC0gMSkKICAgIHJldHVybiB6dDsKICBjb25zdCBjID0gbyB8IDAsIGkgPSBhIHwgMCwgZiA9IHIgfCAwLCBsID0gbyAtIGMsIHUgPSBhIC0gaSwgYiA9IHIgLSBmLCB3ID0gMSwgcCA9IHMubngsIGggPSBzLm54ICogcy5ueSwgbSA9IGMgKyBpICogcCArIGYgKiBoLCBkID0gcy5zZGYsIHkgPSBkW21dICsgKGRbbSArIHddIC0gZFttXSkgKiBsLCBBID0gZFttICsgcF0gKyAoZFttICsgcCArIHddIC0gZFttICsgcF0pICogbCwgZyA9IGRbbSArIGhdICsgKGRbbSArIGggKyB3XSAtIGRbbSArIGhdKSAqIGwsIE0gPSBkW20gKyBoICsgcF0gKyAoZFttICsgaCArIHAgKyB3XSAtIGRbbSArIGggKyBwXSkgKiBsLCBFID0geSArIChBIC0geSkgKiB1LCB4ID0gZyArIChNIC0gZykgKiB1OwogIHJldHVybiAoRSArICh4IC0gRSkgKiBiKSAqIHMuc3RlcDsKfQpmdW5jdGlvbiBxdChzLCB0LCBuLCBlKSB7CiAgY29uc3QgbyA9IE1hdGgucm91bmQoKE1hdGguYWJzKHQpIC0gcy5vcmlnaW5bMF0pIC8gcy52b3hlbCksIGEgPSBNYXRoLnJvdW5kKChuIC0gcy5vcmlnaW5bMV0pIC8gcy52b3hlbCksIHIgPSBNYXRoLnJvdW5kKChlIC0gcy5vcmlnaW5bMl0pIC8gcy52b3hlbCk7CiAgaWYgKG8gPCAwIHx8IGEgPCAwIHx8IHIgPCAwIHx8IG8gPj0gcy5ueCB8fCBhID49IHMubnkgfHwgciA+PSBzLm56KSByZXR1cm4gMDsKICBjb25zdCBjID0gcy5yZWdpb25bbyArIGEgKiBzLm54ICsgciAqIHMubnggKiBzLm55XTsKICByZXR1cm4gYyA9PT0gMjU1ID8gMCA6IGM7Cn0KZnVuY3Rpb24gWXQocykgewogIGNvbnN0IFt0LCBuLCBlXSA9IHMub3JpZ2luLCBvID0gdCArIChzLm54IC0gMSkgKiBzLnZveGVsOwogIHJldHVybiB7CiAgICB4OiBbLW8sIG9dLAogICAgeTogW24sIG4gKyAocy5ueSAtIDEpICogcy52b3hlbF0sCiAgICB6OiBbZSwgZSArIChzLm56IC0gMSkgKiBzLnZveGVsXQogIH07Cn0KY29uc3QgSCA9IHsgQ09SVEVYOiAwLCBDRVJFQkVMTFVNOiAxLCBTVEVNOiAyIH0sIEh0ID0geyB4OiBbLTAuNDYsIDAuNDZdLCB5OiBbLTAuNjIsIDAuNDZdLCB6OiBbLTAuNjIsIDAuNjJdIH0sIFZ0ID0geyB4OiBbLTAuMywgMC4zXSwgeTogWy0wLjQ5LCAtMC4xNF0sIHo6IFstMC41NiwgLTAuMV0gfSwgV3QgPSB7IHg6IFstMC4xMiwgMC4xMl0sIHk6IFstMC42MiwgLTAuMDRdLCB6OiBbLTAuMjcsIDAuMDJdIH07CmZ1bmN0aW9uIHN0KHMsIHQsIG4pIHsKICBjb25zdCBlID0gMSArIDAuMjIgKiBNYXRoLm1heCgwLCBuKSAtIDAuMDYgKiBNYXRoLm1heCgwLCAtbik7CiAgbGV0IG8gPSBDKHMgKiBlLCB0LCBuLCAwLCAwLjAyNSwgLTAuMDEsIDAuMzk1LCAwLjM1LCAwLjU1KTsKICBjb25zdCBhID0gTWF0aC5hYnMocyk7CiAgcmV0dXJuIG8gPSBQKG8sIEMoYSwgdCwgbiwgMC4yNSwgLTAuMTcsIDAuMDgsIDAuMTIsIDAuMTE1LCAwLjI3KSwgMC4wODUpLCBvID0gXyhvLCAtKHQgKyAwLjIzNSksIDAuMDYpLCBvOwp9CmZ1bmN0aW9uIG90KHMsIHQsIG4pIHsKICByZXR1cm4gbHQocywgdCwgbiwgMCwgMC41NiwgLTAuMDIsIDAuMDMsIDAuNSwgMC41Mik7Cn0KY29uc3QgViA9IDAuMDEyLCBydCA9IDAuMDE4OwpmdW5jdGlvbiBKdChzLCB0KSB7CiAgY29uc3QgbiA9IHQuZm9sZFNjYWxlLCBlID0gdC5mb2xkRGVwdGggKiAoMCAtIDAuNTIpLCBvID0gdC5mb2xkRGVwdGggKiAoMSAtIDAuNTIpOwogIHJldHVybiB7CiAgICBleGFjdChhLCByLCBjKSB7CiAgICAgIGxldCBpID0gc3QoYSwgciwgYyk7CiAgICAgIGNvbnN0IGYgPSBzLnJpZGdlZChhICogbiwgciAqIG4gKiAwLjg1LCBjICogbiwgNCkgLSAwLjUyOwogICAgICByZXR1cm4gaSArPSB0LmZvbGREZXB0aCAqIGYsIGkgKz0gcnQgKiBzLmZibShhICogMi4xLCByICogMi4xLCBjICogMi4xLCAyKSwgXyhpLCAtb3QoYSwgciwgYyksIFYpOwogICAgfSwKICAgIHNtb290aChhLCByLCBjKSB7CiAgICAgIHJldHVybiBfKHN0KGEsIHIsIGMpLCAtb3QoYSwgciwgYyksIFYpOwogICAgfSwKICAgIGJvdW5kcyhhLCByLCBjLCBpKSB7CiAgICAgIGNvbnN0IGYgPSBzdChhLCByLCBjKSwgbCA9IC1vdChhLCByLCBjKTsKICAgICAgaVswXSA9IF8oZiArIGUgLSBydCAqIHosIGwsIFYpIC0gRywgaVsxXSA9IF8oZiArIG8gKyBydCAqIHosIGwsIFYpICsgRzsKICAgIH0KICB9Owp9CmZ1bmN0aW9uIGF0KHMsIHQsIG4pIHsKICBjb25zdCBlID0gTWF0aC5hYnMocyksIG8gPSBDKHMsIHQsIG4sIDAsIC0wLjMxNSwgLTAuMzMsIDAuMjM1LCAwLjExNSwgMC4xNjUpOwogIHJldHVybiBQKG8sIEMoZSwgdCwgbiwgMC4xLCAtMC4zLCAtMC4zLCAwLjEyLCAwLjEsIDAuMTQpLCAwLjA2KTsKfQpjb25zdCB5dCA9IDAuMDExLCBNdCA9IDAuMDE7CmZ1bmN0aW9uIEt0KHMpIHsKICBjb25zdCB0ID0geXQgKyBNdCAqIHogKyBHOwogIHJldHVybiB7CiAgICBleGFjdChuLCBlLCBvKSB7CiAgICAgIGxldCBhID0gYXQobiwgZSwgbyk7CiAgICAgIHJldHVybiBhICs9IHl0ICogTWF0aC5zaW4oZSAqIDE1MCArIDEuNiAqIHMuc2FtcGxlKG4gKiA2LCBlICogMywgbyAqIDYpKSwgYSArPSBNdCAqIHMuZmJtKG4gKiA5LCBlICogOSwgbyAqIDksIDIpLCBhOwogICAgfSwKICAgIHNtb290aDogYXQsCiAgICBib3VuZHMobiwgZSwgbywgYSkgewogICAgICBjb25zdCByID0gYXQobiwgZSwgbyk7CiAgICAgIGFbMF0gPSByIC0gdCwgYVsxXSA9IHIgKyB0OwogICAgfQogIH07Cn0KZnVuY3Rpb24gY3QocywgdCwgbikgewogIHJldHVybiB4dChzLCB0LCBuLCAwLCAtMC4xNiwgLTAuMSwgMCwgLTAuNTYsIC0wLjE1LCAwLjA4LCAwLjA0NSk7Cn0KY29uc3QgQXQgPSA4ZS0zOwpmdW5jdGlvbiBRdChzKSB7CiAgY29uc3QgdCA9IEF0ICogeiArIEc7CiAgcmV0dXJuIHsKICAgIGV4YWN0KG4sIGUsIG8pIHsKICAgICAgcmV0dXJuIGN0KG4sIGUsIG8pICsgQXQgKiBzLmZibShuICogMTIsIGUgKiAxMiwgbyAqIDEyLCAyKTsKICAgIH0sCiAgICBzbW9vdGg6IGN0LAogICAgYm91bmRzKG4sIGUsIG8sIGEpIHsKICAgICAgY29uc3QgciA9IGN0KG4sIGUsIG8pOwogICAgICBhWzBdID0gciAtIHQsIGFbMV0gPSByICsgdDsKICAgIH0KICB9Owp9CmZ1bmN0aW9uIFp0KHMsIHQsIG4sIGUsIG8sIGEpIHsKICBsZXQgYyA9IHModCArIDRlLTMsIG4sIGUpIC0gcyh0IC0gNGUtMywgbiwgZSksIGkgPSBzKHQsIG4gKyA0ZS0zLCBlKSAtIHModCwgbiAtIDRlLTMsIGUpLCBmID0gcyh0LCBuLCBlICsgNGUtMykgLSBzKHQsIG4sIGUgLSA0ZS0zKTsKICBjb25zdCBsID0gaihjLCBpLCBmKSB8fCAxOwogIGMgLz0gbCwgaSAvPSBsLCBmIC89IGwsIG9bYV0gPSBjLCBvW2EgKyAxXSA9IGksIG9bYSArIDJdID0gZjsKfQpmdW5jdGlvbiB0bihzKSB7CiAgY29uc3QgewogICAgY291bnQ6IHQsCiAgICBzZWVkOiBuID0gNywKICAgIHNoZWxsOiBlID0gMC4wNTUsCiAgICBmb2xkRGVwdGg6IG8gPSAwLjAzNCwKICAgIGZvbGRTY2FsZTogYSA9IDcuNCwKICAgIGZpbGw6IHIgPSAxCiAgfSA9IHMsIGMgPSBuZXcgRHQobiksIGkgPSBuZXcgSyhuICogMjY1NDQzNTc2MSksIGYgPSB7IGZvbGREZXB0aDogbywgZm9sZFNjYWxlOiBhIH0sIGwgPSBubihzLnNoYXBlID8/ICJjbGFzc2ljIiwgYywgZiwgcy5ncmlkKSwgdSA9IG5ldyBGbG9hdDMyQXJyYXkodCAqIDMpLCBiID0gbmV3IEZsb2F0MzJBcnJheSh0ICogMyksIHcgPSBuZXcgRmxvYXQzMkFycmF5KHQpLCBwID0gbmV3IFVpbnQ4QXJyYXkodCk7CiAgbGV0IGggPSAwLCBtID0gMDsKICBjb25zdCBkID0gbmV3IEZsb2F0NjRBcnJheSgyKSwgeSA9IChNLCBFLCB4LCBSKSA9PiAoTS5ib3VuZHMoRSwgeCwgUiwgZCksIGRbMF0gPj0gLTRlLTMgPyAhMSA6IGRbMV0gPCAtNGUtMyA/ICEwIDogTS5leGFjdChFLCB4LCBSKSA8IC00ZS0zKSwgQSA9ICh7IGZpZWxkOiBNLCBvdGhlcnM6IEUsIHRhcmdldDogeCwgaWQ6IFIsIHNoZWxsRGVwdGg6IE4sIGJveDogUywgcmVnaW9uT2Y6IFQgfSkgPT4gewogICAgY29uc3QgcSA9ICh2LCBVLCBCKSA9PiBNLnNtb290aCh2LCBVLCBCKTsKICAgIGxldCBrID0gMDsKICAgIGNvbnN0IFggPSB4ICogOTAwICsgMmU0OwogICAgZm9yIChsZXQgdiA9IDA7IGsgPCB4ICYmIHYgPCBYOyB2KyspIHsKICAgICAgY29uc3QgVSA9IGkucmFuZ2UoUy54WzBdLCBTLnhbMV0pLCBCID0gaS5yYW5nZShTLnlbMF0sIFMueVsxXSksIEkgPSBpLnJhbmdlKFMuelswXSwgUy56WzFdKTsKICAgICAgaWYgKE0uYm91bmRzKFUsIEIsIEksIGQpLCBkWzBdID4gMCkgY29udGludWU7CiAgICAgIGxldCAkOwogICAgICBpZiAoZFsxXSA8IC1OKQogICAgICAgICQgPSAtMSAvIDA7CiAgICAgIGVsc2UgaWYgKCQgPSBNLmV4YWN0KFUsIEIsIEkpLCAkID4gMCkgY29udGludWU7CiAgICAgIGxldCBPID0gITE7CiAgICAgIGZvciAoY29uc3QgQnQgb2YgRSkKICAgICAgICBpZiAoeShCdCwgVSwgQiwgSSkpIHsKICAgICAgICAgIE8gPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgICAgaWYgKE8pIGNvbnRpbnVlOwogICAgICBjb25zdCBGID0gTWF0aC5taW4oMSwgLSQgLyBOKSwgVXQgPSBNYXRoLnBvdygxIC0gRiwgMS42KSAqIDAuOTkgKyAwLjAxOwogICAgICBpZiAoaS5uZXh0KCkgPiByICsgKDEgLSByKSAqIFV0KSBjb250aW51ZTsKICAgICAgY29uc3QgWSA9IGggKiAzOwogICAgICB1W1ldID0gVSwgdVtZICsgMV0gPSBCLCB1W1kgKyAyXSA9IEksIFp0KHEsIFUsIEIsIEksIGIsIFkpLCB3W2hdID0gRiwgcFtoXSA9IFQgPyBUKFUsIEIsIEkpIDogUiwgbSA9IE1hdGgubWF4KG0sIGooVSwgQiwgSSkpLCBoKyssIGsrKzsKICAgIH0KICB9OwogIGxldCBnID0gMDsKICByZXR1cm4gbC5mb3JFYWNoKChNLCBFKSA9PiB7CiAgICBjb25zdCB4ID0gRSA9PT0gbC5sZW5ndGggLSAxID8gdCAtIGcgOiBNYXRoLnJvdW5kKHQgKiBNLnNoYXJlKTsKICAgIGcgKz0geCwgQSh7IC4uLk0sIHRhcmdldDogeCwgc2hlbGxEZXB0aDogZSAqIE0uc2hlbGxTY2FsZSB9KTsKICB9KSwgewogICAgcG9zaXRpb25zOiB1LnN1YmFycmF5KDAsIGggKiAzKSwKICAgIG5vcm1hbHM6IGIuc3ViYXJyYXkoMCwgaCAqIDMpLAogICAgZGVwdGg6IHcuc3ViYXJyYXkoMCwgaCksCiAgICByZWdpb246IHAuc3ViYXJyYXkoMCwgaCksCiAgICBjb3VudDogaCwKICAgIGJvdW5kczogbSB8fCAxCiAgfTsKfQpmdW5jdGlvbiBubihzLCB0LCBuLCBlKSB7CiAgaWYgKHMgPT09ICJzY2FuIikgewogICAgaWYgKCFlKSB0aHJvdyBuZXcgRXJyb3IoInRoZSBzY2FuIHNoYXBlIG5lZWRzIGl0cyBncmlkIGxvYWRlZCIpOwogICAgY29uc3QgciA9IChpLCBmLCBsKSA9PiBQdChlLCBpLCBmLCBsKTsKICAgIHJldHVybiBbewogICAgICBmaWVsZDogewogICAgICAgIGV4YWN0OiByLAogICAgICAgIHNtb290aDogciwKICAgICAgICBib3VuZHMoaSwgZiwgbCwgdSkgewogICAgICAgICAgdVswXSA9IHVbMV0gPSByKGksIGYsIGwpOwogICAgICAgIH0KICAgICAgfSwKICAgICAgb3RoZXJzOiBbXSwKICAgICAgc2hhcmU6IDEsCiAgICAgIGlkOiBILkNPUlRFWCwKICAgICAgc2hlbGxTY2FsZTogMSwKICAgICAgYm94OiBZdChlKSwKICAgICAgcmVnaW9uT2Y6IChpLCBmLCBsKSA9PiBxdChlLCBpLCBmLCBsKQogICAgfV07CiAgfQogIGNvbnN0IG8gPSBzID09PSAiYW5hdG9taWNhbCIgPyBHdCh0LCBuKSA6IHsKICAgIGNlcmVicnVtOiBKdCh0LCBuKSwKICAgIGNlcmViZWxsdW06IEt0KHQpLAogICAgc3RlbTogUXQodCkKICB9LCBhID0gcyA9PT0gImFuYXRvbWljYWwiID8ga3QgOiB7IGNlcmVicnVtOiBIdCwgY2VyZWJlbGx1bTogVnQsIHN0ZW06IFd0IH07CiAgcmV0dXJuIFsKICAgIHsgZmllbGQ6IG8uY2VyZWJydW0sIG90aGVyczogW28uY2VyZWJlbGx1bSwgby5zdGVtXSwgc2hhcmU6IDAuODQ1LCBpZDogSC5DT1JURVgsIHNoZWxsU2NhbGU6IDEsIGJveDogYS5jZXJlYnJ1bSB9LAogICAgeyBmaWVsZDogby5jZXJlYmVsbHVtLCBvdGhlcnM6IFtdLCBzaGFyZTogMC4xMTUsIGlkOiBILkNFUkVCRUxMVU0sIHNoZWxsU2NhbGU6IDAuNiwgYm94OiBhLmNlcmViZWxsdW0gfSwKICAgIHsgZmllbGQ6IG8uc3RlbSwgb3RoZXJzOiBbXSwgc2hhcmU6IDAuMDQsIGlkOiBILlNURU0sIHNoZWxsU2NhbGU6IDAuNzUsIGJveDogYS5zdGVtIH0KICBdOwp9CmNsYXNzIEogewogIC8qKiBTdWJ0cmVlcyBhdCBtb3N0IHRoaXMgbGFyZ2UgYXJlIHNjYW5uZWQgbGluZWFybHkuICovCiAgc3RhdGljIExFQUYgPSAxNjsKICBpZHM7CiAgY29vcmRzOwogIHBvc2l0aW9uczsKICBjb3VudDsKICAvLyBUcmF2ZXJzYWwgc3RhY2s6IFtsZWZ0LCByaWdodCwgYXhpcywgbG93ZXIgYm91bmQgb24gZGlzdGFuY2XCsl0gcGVyIGVudHJ5LgogIHN0YWNrID0gbmV3IEZsb2F0NjRBcnJheSgyNTYpOwogIC8vIE1heC1oZWFwIG9mIHRoZSBiZXN0IGsgc28gZmFyLCBrZXllZCBieSAoZGlzdGFuY2XCsiwgaW5kZXgpLgogIGhlYXBJZHggPSBuZXcgSW50MzJBcnJheSgwKTsKICBoZWFwRDIgPSBuZXcgRmxvYXQ2NEFycmF5KDApOwogIHNpemUgPSAwOwogIHNlbGYgPSAtMTsKICAvKiogUmVzdWx0cyBvZiB0aGUgbGFzdCBxdWVyeSwgbmVhcmVzdCBmaXJzdC4gKi8KICBpZHggPSBuZXcgSW50MzJBcnJheSgwKTsKICBkMiA9IG5ldyBGbG9hdDY0QXJyYXkoMCk7CiAgY29uc3RydWN0b3IodCwgbikgewogICAgdGhpcy5wb3NpdGlvbnMgPSB0LCB0aGlzLmNvdW50ID0gbiwgdGhpcy5pZHMgPSBuZXcgVWludDMyQXJyYXkobiksIHRoaXMuY29vcmRzID0gdC5zbGljZSgwLCBuICogMyk7CiAgICBmb3IgKGxldCBlID0gMDsgZSA8IG47IGUrKykgdGhpcy5pZHNbZV0gPSBlOwogICAgbiA+IDAgJiYgdGhpcy5idWlsZCgwLCBuIC0gMSwgMCk7CiAgfQogIGJ1aWxkKHQsIG4sIGUpIHsKICAgIGlmIChuIC0gdCA8PSBKLkxFQUYpIHJldHVybjsKICAgIGNvbnN0IG8gPSB0ICsgbiA+PiAxOwogICAgdGhpcy5zZWxlY3QobywgdCwgbiwgZSk7CiAgICBjb25zdCBhID0gZSA9PT0gMiA/IDAgOiBlICsgMTsKICAgIHRoaXMuYnVpbGQodCwgbyAtIDEsIGEpLCB0aGlzLmJ1aWxkKG8gKyAxLCBuLCBhKTsKICB9CiAgLyoqCiAgICogRmxveWQtUml2ZXN0IHNlbGVjdGlvbjogcmVvcmRlcnMgW2xlZnQsIHJpZ2h0XSBzbyB0aGUgaXRlbSBhdCBrIGlzIHRoZQogICAqIG9uZSBhIHNvcnQgb24gYGF4aXNgIHdvdWxkIHB1dCB0aGVyZSwgd2l0aCBzbWFsbGVyIG9uZXMgYmVmb3JlIGl0LgogICAqLwogIHNlbGVjdCh0LCBuLCBlLCBvKSB7CiAgICBjb25zdCBhID0gdGhpcy5jb29yZHM7CiAgICBmb3IgKDsgZSA+IG47ICkgewogICAgICBpZiAoZSAtIG4gPiA2MDApIHsKICAgICAgICBjb25zdCBmID0gZSAtIG4gKyAxLCBsID0gdCAtIG4gKyAxLCB1ID0gTWF0aC5sb2coZiksIGIgPSAwLjUgKiBNYXRoLmV4cCgyICogdSAvIDMpLCB3ID0gMC41ICogTWF0aC5zcXJ0KHUgKiBiICogKGYgLSBiKSAvIGYpICogKGwgLSBmIC8gMiA8IDAgPyAtMSA6IDEpLCBwID0gTWF0aC5tYXgobiwgTWF0aC5mbG9vcih0IC0gbCAqIGIgLyBmICsgdykpLCBoID0gTWF0aC5taW4oZSwgTWF0aC5mbG9vcih0ICsgKGYgLSBsKSAqIGIgLyBmICsgdykpOwogICAgICAgIHRoaXMuc2VsZWN0KHQsIHAsIGgsIG8pOwogICAgICB9CiAgICAgIGNvbnN0IHIgPSBhWzMgKiB0ICsgb107CiAgICAgIGxldCBjID0gbiwgaSA9IGU7CiAgICAgIGZvciAodGhpcy5zd2FwKG4sIHQpLCBhWzMgKiBlICsgb10gPiByICYmIHRoaXMuc3dhcChuLCBlKTsgYyA8IGk7ICkgewogICAgICAgIGZvciAodGhpcy5zd2FwKGMsIGkpLCBjKyssIGktLTsgYVszICogYyArIG9dIDwgcjsgKSBjKys7CiAgICAgICAgZm9yICg7IGFbMyAqIGkgKyBvXSA+IHI7ICkgaS0tOwogICAgICB9CiAgICAgIGFbMyAqIG4gKyBvXSA9PT0gciA/IHRoaXMuc3dhcChuLCBpKSA6IChpKyssIHRoaXMuc3dhcChpLCBlKSksIGkgPD0gdCAmJiAobiA9IGkgKyAxKSwgdCA8PSBpICYmIChlID0gaSAtIDEpOwogICAgfQogIH0KICBzd2FwKHQsIG4pIHsKICAgIGNvbnN0IHsgaWRzOiBlLCBjb29yZHM6IG8gfSA9IHRoaXMsIGEgPSBlW3RdOwogICAgZVt0XSA9IGVbbl0sIGVbbl0gPSBhOwogICAgZm9yIChsZXQgciA9IDA7IHIgPCAzOyByKyspIHsKICAgICAgY29uc3QgYyA9IG9bMyAqIHQgKyByXTsKICAgICAgb1szICogdCArIHJdID0gb1szICogbiArIHJdLCBvWzMgKiBuICsgcl0gPSBjOwogICAgfQogIH0KICAvKioKICAgKiBGaW5kcyB1cCB0byBga2AgbmVhcmVzdCBwb2ludHMgdG8gbm9kZSBgc2VsZmAgd2l0aGluIGByYWRpdXNgLCBleGNsdWRpbmcKICAgKiBgc2VsZmAsIG9yZGVyZWQgYnkgZGlzdGFuY2UgdGhlbiBpbmRleC4gUmV0dXJucyBob3cgbWFueSB3ZXJlIGZvdW5kLgogICAqLwogIHF1ZXJ5KHQsIG4sIGUpIHsKICAgIGlmICh0aGlzLmhlYXBJZHgubGVuZ3RoIDwgbiAmJiAodGhpcy5oZWFwSWR4ID0gbmV3IEludDMyQXJyYXkobiksIHRoaXMuaGVhcEQyID0gbmV3IEZsb2F0NjRBcnJheShuKSwgdGhpcy5pZHggPSBuZXcgSW50MzJBcnJheShuKSwgdGhpcy5kMiA9IG5ldyBGbG9hdDY0QXJyYXkobikpLCB0aGlzLnNpemUgPSAwLCB0aGlzLnNlbGYgPSB0LCB0aGlzLmNvdW50ID09PSAwKSByZXR1cm4gMDsKICAgIGNvbnN0IHsgY29vcmRzOiBvLCBwb3NpdGlvbnM6IGEgfSA9IHRoaXMsIHIgPSBhW3QgKiAzXSwgYyA9IGFbdCAqIDMgKyAxXSwgaSA9IGFbdCAqIDMgKyAyXSwgZiA9IGUgKiBlOwogICAgbGV0IGwgPSB0aGlzLnN0YWNrLCB1ID0gMDsKICAgIGZvciAobFt1KytdID0gMCwgbFt1KytdID0gdGhpcy5jb3VudCAtIDEsIGxbdSsrXSA9IDAsIGxbdSsrXSA9IDA7IHUgPiAwOyApIHsKICAgICAgY29uc3QgdyA9IGxbLS11XSwgcCA9IGxbLS11XSwgaCA9IGxbLS11XSwgbSA9IGxbLS11XTsKICAgICAgaWYgKHcgPiAodGhpcy5zaXplID09PSBuID8gdGhpcy5oZWFwRDJbMF0gOiBmKSkgY29udGludWU7CiAgICAgIGlmIChoIC0gbSA8PSBKLkxFQUYpIHsKICAgICAgICBmb3IgKGxldCBNID0gbTsgTSA8PSBoOyBNKyspIHRoaXMuY29uc2lkZXIoTSwgciwgYywgaSwgbiwgZik7CiAgICAgICAgY29udGludWU7CiAgICAgIH0KICAgICAgY29uc3QgZCA9IG0gKyBoID4+IDE7CiAgICAgIHRoaXMuY29uc2lkZXIoZCwgciwgYywgaSwgbiwgZik7CiAgICAgIGNvbnN0IHkgPSAocCA9PT0gMCA/IHIgOiBwID09PSAxID8gYyA6IGkpIC0gb1szICogZCArIHBdLCBBID0gcCA9PT0gMiA/IDAgOiBwICsgMSwgZyA9IE1hdGgubWF4KHcsIHkgKiB5KTsKICAgICAgaWYgKHUgKyA4ID4gbC5sZW5ndGgpIHsKICAgICAgICBjb25zdCBNID0gbmV3IEZsb2F0NjRBcnJheShsLmxlbmd0aCAqIDIpOwogICAgICAgIE0uc2V0KGwpLCB0aGlzLnN0YWNrID0gbCA9IE07CiAgICAgIH0KICAgICAgeSA8IDAgPyAobFt1KytdID0gZCArIDEsIGxbdSsrXSA9IGgsIGxbdSsrXSA9IEEsIGxbdSsrXSA9IGcsIGxbdSsrXSA9IG0sIGxbdSsrXSA9IGQgLSAxLCBsW3UrK10gPSBBLCBsW3UrK10gPSB3KSA6IChsW3UrK10gPSBtLCBsW3UrK10gPSBkIC0gMSwgbFt1KytdID0gQSwgbFt1KytdID0gZywgbFt1KytdID0gZCArIDEsIGxbdSsrXSA9IGgsIGxbdSsrXSA9IEEsIGxbdSsrXSA9IHcpOwogICAgfQogICAgY29uc3QgYiA9IHRoaXMuc2l6ZTsKICAgIGZvciAobGV0IHcgPSBiIC0gMTsgdyA+PSAwOyB3LS0pCiAgICAgIHRoaXMuaWR4W3ddID0gdGhpcy5oZWFwSWR4WzBdLCB0aGlzLmQyW3ddID0gdGhpcy5oZWFwRDJbMF0sIHRoaXMucG9wTWF4KCk7CiAgICByZXR1cm4gYjsKICB9CiAgLyoqCiAgICogVGVzdHMgdGhlIHBvaW50IGF0IHRyZWUgc2xvdCBgdGAuIFJlYWRzIHRoZSB0cmVlJ3Mgb3duIGNvb3JkaW5hdGUgY29weSwKICAgKiB3aGljaCBpcyBsYWlkIG91dCBpbiB0cmF2ZXJzYWwgb3JkZXIgKHNlcXVlbnRpYWwgbWVtb3J5IGFjY2VzcyksIGFuZCBob2xkcwogICAqIHRoZSBzYW1lIGZsb2F0MzIgdmFsdWVzIGFzIGBwb3NpdGlvbnNgLCBzbyBkaXN0YW5jZXMgYXJlIGJpdC1pZGVudGljYWwuCiAgICovCiAgY29uc2lkZXIodCwgbiwgZSwgbywgYSwgcikgewogICAgY29uc3QgYyA9IHRoaXMuaWRzW3RdOwogICAgaWYgKGMgPT09IHRoaXMuc2VsZikgcmV0dXJuOwogICAgY29uc3QgaSA9IHRoaXMuY29vcmRzLCBmID0gaVt0ICogM10gLSBuLCBsID0gaVt0ICogMyArIDFdIC0gZSwgdSA9IGlbdCAqIDMgKyAyXSAtIG8sIGIgPSBmICogZiArIGwgKiBsICsgdSAqIHU7CiAgICBiID4gciB8fCB0aGlzLm9mZmVyKGMsIGIsIGEpOwogIH0KICAvKiogKGQyLCBqKSBzb3J0cyBhZnRlciAoZDInLCBqJykgd2hlbiBmYXJ0aGVyLCBvciBlcXVhbGx5IGZhciB3aXRoIGEgbGFyZ2VyIGluZGV4LiAqLwogIHdvcnNlKHQsIG4sIGUsIG8pIHsKICAgIHJldHVybiB0ID4gZSB8fCB0ID09PSBlICYmIG4gPiBvOwogIH0KICBvZmZlcih0LCBuLCBlKSB7CiAgICBjb25zdCB7IGhlYXBJZHg6IG8sIGhlYXBEMjogYSB9ID0gdGhpczsKICAgIGlmICh0aGlzLnNpemUgPCBlKSB7CiAgICAgIGxldCByID0gdGhpcy5zaXplKys7CiAgICAgIGZvciAoOyByID4gMDsgKSB7CiAgICAgICAgY29uc3QgYyA9IHIgLSAxID4+IDE7CiAgICAgICAgaWYgKCF0aGlzLndvcnNlKG4sIHQsIGFbY10sIG9bY10pKSBicmVhazsKICAgICAgICBvW3JdID0gb1tjXSwgYVtyXSA9IGFbY10sIHIgPSBjOwogICAgICB9CiAgICAgIG9bcl0gPSB0LCBhW3JdID0gbjsKICAgIH0gZWxzZSB0aGlzLndvcnNlKGFbMF0sIG9bMF0sIG4sIHQpICYmIHRoaXMuc2lmdERvd24odCwgbik7CiAgfQogIHBvcE1heCgpIHsKICAgIGNvbnN0IHQgPSAtLXRoaXMuc2l6ZTsKICAgIHQgPiAwICYmIHRoaXMuc2lmdERvd24odGhpcy5oZWFwSWR4W3RdLCB0aGlzLmhlYXBEMlt0XSk7CiAgfQogIC8qKiBQbGFjZXMgKGosIGQyKSBhdCB0aGUgcm9vdCBhbmQgc2lmdHMgaXQgZG93bi4gKi8KICBzaWZ0RG93bih0LCBuKSB7CiAgICBjb25zdCB7IGhlYXBJZHg6IGUsIGhlYXBEMjogbywgc2l6ZTogYSB9ID0gdGhpczsKICAgIGxldCByID0gMDsKICAgIGZvciAoOyA7ICkgewogICAgICBjb25zdCBjID0gMiAqIHIgKyAxOwogICAgICBpZiAoYyA+PSBhKSBicmVhazsKICAgICAgY29uc3QgaSA9IGMgKyAxLCBmID0gaSA8IGEgJiYgdGhpcy53b3JzZShvW2ldLCBlW2ldLCBvW2NdLCBlW2NdKSA/IGkgOiBjOwogICAgICBpZiAoIXRoaXMud29yc2Uob1tmXSwgZVtmXSwgbiwgdCkpIGJyZWFrOwogICAgICBlW3JdID0gZVtmXSwgb1tyXSA9IG9bZl0sIHIgPSBmOwogICAgfQogICAgZVtyXSA9IHQsIG9bcl0gPSBuOwogIH0KfQpjbGFzcyBlbiB7CiAgY29uc3RydWN0b3IodCwgbikgewogICAgdGhpcy5jYXAgPSBuLCB0aGlzLnNsb3RzID0gbmV3IEludDMyQXJyYXkodCAqIG4pLCB0aGlzLmNvdW50cyA9IG5ldyBVaW50MTZBcnJheSh0KTsKICB9CiAgc2xvdHM7CiAgY291bnRzOwogIG92ZXJmbG93ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBoYXModCwgbikgewogICAgY29uc3QgZSA9IHRoaXMuY291bnRzW3RdLCBvID0gdCAqIHRoaXMuY2FwOwogICAgZm9yIChsZXQgYSA9IDA7IGEgPCBlOyBhKyspIGlmICh0aGlzLnNsb3RzW28gKyBhXSA9PT0gbikgcmV0dXJuICEwOwogICAgcmV0dXJuIHRoaXMub3ZlcmZsb3cuZ2V0KHQpPy5pbmNsdWRlcyhuKSA/PyAhMTsKICB9CiAgYWRkKHQsIG4pIHsKICAgIHRoaXMucHVzaCh0LCBuKSwgdGhpcy5wdXNoKG4sIHQpOwogIH0KICBwdXNoKHQsIG4pIHsKICAgIGNvbnN0IGUgPSB0aGlzLmNvdW50c1t0XTsKICAgIGlmIChlIDwgdGhpcy5jYXApCiAgICAgIHRoaXMuc2xvdHNbdCAqIHRoaXMuY2FwICsgZV0gPSBuLCB0aGlzLmNvdW50c1t0XSA9IGUgKyAxOwogICAgZWxzZSB7CiAgICAgIGxldCBvID0gdGhpcy5vdmVyZmxvdy5nZXQodCk7CiAgICAgIG8gfHwgdGhpcy5vdmVyZmxvdy5zZXQodCwgbyA9IFtdKSwgby5wdXNoKG4pOwogICAgfQogIH0KfQpjb25zdCBzbiA9IDI0OwpmdW5jdGlvbiBvbihzLCB0ID0ge30pIHsKICBjb25zdCB7CiAgICBzZWVkOiBuID0gMTEsCiAgICBtaW5EZWdyZWU6IGUgPSAyLAogICAgbWF4RGVncmVlOiBvID0gOSwKICAgIHJhZGl1czogYSA9IDAuMDc1LAogICAgbG9uZ1JhbmdlRnJhY3Rpb246IHIgPSAzZS0zCiAgfSA9IHQsIHsgcG9zaXRpb25zOiBjLCBjb3VudDogaSB9ID0gcywgZiA9IG5ldyBLKG4gKiAyMjY5NTQ3NyArIDEpLCBsID0gbmV3IEooYywgaSksIHUgPSBbXSwgYiA9IFtdLCB3ID0gbmV3IFVpbnQxNkFycmF5KGkpLCBwID0gbyArIDQsIGggPSBuZXcgZW4oaSwgcCArIDIpOwogIGZvciAobGV0IGQgPSAwOyBkIDwgaTsgZCsrKSB7CiAgICBjb25zdCB5ID0gZi5pbnQoZSwgbyk7CiAgICBpZiAod1tkXSA+PSB5KSBjb250aW51ZTsKICAgIGxldCBBID0gc24sIGcgPSBsLnF1ZXJ5KGQsIEEsIGEpOwogICAgaWYgKGcgPT09IDApIGNvbnRpbnVlOwogICAgbGV0IE0gPSB3W2RdOwogICAgZm9yIChsZXQgRSA9IDA7IE0gPCB5ICYmICEoRSA9PT0gZyAmJiAoZyA8IEEgfHwgKEEgKj0gNCwgZyA9IGwucXVlcnkoZCwgQSwgYSksIEUgPj0gZykpKTsgRSsrKSB7CiAgICAgIGNvbnN0IHggPSBsLmlkeFtFXTsKICAgICAgd1t4XSA+PSBwIHx8IGYubmV4dCgpIDwgMC4yMiB8fCBoLmhhcyhkLCB4KSB8fCAoaC5hZGQoZCwgeCksIHUucHVzaChkKSwgYi5wdXNoKHgpLCB3W2RdKyssIHdbeF0rKywgTSsrKTsKICAgIH0KICB9CiAgY29uc3QgbSA9IE1hdGgucm91bmQodS5sZW5ndGggKiByKTsKICBmb3IgKGxldCBkID0gMDsgZCA8IG07IGQrKykgewogICAgY29uc3QgeSA9IGYuaW50KDAsIGkgLSAxKSwgQSA9IGNbeSAqIDNdOwogICAgbGV0IGcgPSAtMSwgTSA9IDEgLyAwOwogICAgZm9yIChsZXQgRSA9IDA7IEUgPCAyNDsgRSsrKSB7CiAgICAgIGNvbnN0IHggPSBmLmludCgwLCBpIC0gMSk7CiAgICAgIGlmICh4ID09PSB5KSBjb250aW51ZTsKICAgICAgY29uc3QgUiA9IGNbeCAqIDNdOwogICAgICBpZiAoQSAqIFIgPiAwICYmIGYubmV4dCgpIDwgMC43NSkgY29udGludWU7CiAgICAgIGNvbnN0IE4gPSBjW3ggKiAzICsgMV0gLSBjW3kgKiAzICsgMV0sIFMgPSBjW3ggKiAzICsgMl0gLSBjW3kgKiAzICsgMl0sIFQgPSBNYXRoLmFicyhSICsgQSkgKyBNYXRoLmFicyhOKSAqIDEuNSArIE1hdGguYWJzKFMpICogMS41OwogICAgICBUIDwgTSAmJiAoTSA9IFQsIGcgPSB4KTsKICAgIH0KICAgIGcgPCAwIHx8IGguaGFzKHksIGcpIHx8IChoLmFkZCh5LCBnKSwgdS5wdXNoKHkpLCBiLnB1c2goZyksIHdbeV0rKywgd1tnXSsrKTsKICB9CiAgcmV0dXJuIEZ0KHMsIHUsIGIsIGEsIGYpOwp9CmZ1bmN0aW9uIEZ0KHMsIHQsIG4sIGUsIG8pIHsKICBjb25zdCB7IHBvc2l0aW9uczogYSwgY291bnQ6IHIgfSA9IHMsIGMgPSB0Lmxlbmd0aCwgaSA9IG5ldyBVaW50MzJBcnJheShjICogMiksIGYgPSBuZXcgRmxvYXQzMkFycmF5KGMpLCBsID0gbmV3IEZsb2F0MzJBcnJheShjKTsKICBmb3IgKGxldCBoID0gMDsgaCA8IGM7IGgrKykgewogICAgY29uc3QgbSA9IHRbaF0sIGQgPSBuW2hdOwogICAgaVtoICogMl0gPSBtLCBpW2ggKiAyICsgMV0gPSBkOwogICAgY29uc3QgeSA9IGFbZCAqIDNdIC0gYVttICogM10sIEEgPSBhW2QgKiAzICsgMV0gLSBhW20gKiAzICsgMV0sIGcgPSBhW2QgKiAzICsgMl0gLSBhW20gKiAzICsgMl07CiAgICBmW2hdID0gTWF0aC5zcXJ0KHkgKiB5ICsgQSAqIEEgKyBnICogZyk7CiAgICBjb25zdCBNID0gTWF0aC5taW4oMSwgZltoXSAvIGUpOwogICAgbFtoXSA9IDAuNTUgKyAwLjQ1ICogKDEgLSBNKSAqIG8ucmFuZ2UoMC43LCAxKTsKICB9CiAgY29uc3QgdSA9IG5ldyBVaW50MzJBcnJheShyICsgMSk7CiAgZm9yIChsZXQgaCA9IDA7IGggPCBjOyBoKyspCiAgICB1W2lbaCAqIDJdICsgMV0rKywgdVtpW2ggKiAyICsgMV0gKyAxXSsrOwogIGZvciAobGV0IGggPSAwOyBoIDwgcjsgaCsrKSB1W2ggKyAxXSArPSB1W2hdOwogIGNvbnN0IGIgPSBuZXcgVWludDMyQXJyYXkoYyAqIDIpLCB3ID0gbmV3IFVpbnQzMkFycmF5KGMgKiAyKSwgcCA9IHUuc2xpY2UoMCwgcik7CiAgZm9yIChsZXQgaCA9IDA7IGggPCBjOyBoKyspIHsKICAgIGNvbnN0IG0gPSBpW2ggKiAyXSwgZCA9IGlbaCAqIDIgKyAxXTsKICAgIGJbcFttXV0gPSBoLCB3W3BbbV1dID0gZCwgcFttXSsrLCBiW3BbZF1dID0gaCwgd1twW2RdXSA9IG0sIHBbZF0rKzsKICB9CiAgcmV0dXJuIHsKICAgIG5vZGVDb3VudDogciwKICAgIHBvc2l0aW9uczogYSwKICAgIG5vcm1hbHM6IHMubm9ybWFscywKICAgIGRlcHRoOiBzLmRlcHRoLAogICAgcmVnaW9uOiBzLnJlZ2lvbiwKICAgIGVkZ2VDb3VudDogYywKICAgIGVkZ2VzOiBpLAogICAgZWRnZUxlbmd0aDogZiwKICAgIGVkZ2VXZWlnaHQ6IGwsCiAgICBhZGpPZmZzZXQ6IHUsCiAgICBhZGpFZGdlOiBiLAogICAgYWRqUGVlcjogdywKICAgIGJvdW5kczogcy5ib3VuZHMKICB9Owp9CmZ1bmN0aW9uIGd0KHMpIHsKICByZXR1cm4gewogICAgaWQ6ICJwcm9jZWR1cmFsIiwKICAgIGxhYmVsOiAicHJvY2VkdXJhbCBicmFpbiIsCiAgICBsb2FkKCkgewogICAgICBjb25zdCB0ID0gdG4ocyk7CiAgICAgIHJldHVybiBvbih0LCBzKTsKICAgIH0KICB9Owp9CmZ1bmN0aW9uIFcocywgdCwgbikgewogIGlmIChTdChzKSkgewogICAgY29uc3QgZSA9IFJ0KHMsIG4pOwogICAgaWYgKGUubGVuZ3RoICUgdCAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke259OiAke2UubGVuZ3RofSB2YWx1ZXMgaXMgbm90IGEgbXVsdGlwbGUgb2YgJHt0fWApOwogICAgcmV0dXJuIGU7CiAgfQogIGlmIChzLmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheShzWzBdKSkgewogICAgY29uc3QgZSA9IHMsIG8gPSBuZXcgRmxvYXQ2NEFycmF5KGUubGVuZ3RoICogdCk7CiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGUubGVuZ3RoOyBhKyspCiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdDsgcisrKSBvW2EgKiB0ICsgcl0gPSBlW2FdW3JdOwogICAgcmV0dXJuIG87CiAgfQogIHJldHVybiBGbG9hdDY0QXJyYXkuZnJvbShzKTsKfQpmdW5jdGlvbiBybihzLCB0KSB7CiAgY29uc3QgbiA9IFswLCAwLCAwXTsKICBmb3IgKGxldCByID0gMDsgciA8IHQ7IHIrKykKICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBuW2NdICs9IHNbciAqIDMgKyBjXTsKICBmb3IgKGxldCByID0gMDsgciA8IDM7IHIrKykgbltyXSAvPSBNYXRoLm1heCgxLCB0KTsKICBsZXQgZSA9IDA7CiAgZm9yIChsZXQgciA9IDA7IHIgPCB0OyByKyspIHsKICAgIGNvbnN0IGMgPSBNYXRoLmh5cG90KAogICAgICBzW3IgKiAzXSAtIG5bMF0sCiAgICAgIHNbciAqIDMgKyAxXSAtIG5bMV0sCiAgICAgIHNbciAqIDMgKyAyXSAtIG5bMl0KICAgICk7CiAgICBjID4gZSAmJiAoZSA9IGMpOwogIH0KICBjb25zdCBvID0gZSA+IDAgPyAwLjYyIC8gZSA6IDEsIGEgPSBuZXcgRmxvYXQzMkFycmF5KHQgKiAzKTsKICBmb3IgKGxldCByID0gMDsgciA8IHQ7IHIrKykKICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKQogICAgICBhW3IgKiAzICsgY10gPSAoc1tyICogMyArIGNdIC0gbltjXSkgKiBvOwogIHJldHVybiB7IHBvc2l0aW9uczogYSwgYm91bmRzOiBlICogbyB8fCAxIH07Cn0KZnVuY3Rpb24gYW4ocywgdCA9IDExKSB7CiAgY29uc3QgbiA9IFcocy5ub2RlcywgMywgIm5vZGVzIiksIGUgPSBNYXRoLmZsb29yKG4ubGVuZ3RoIC8gMyk7CiAgaWYgKGUgPT09IDApIHRocm93IG5ldyBFcnJvcigiZGF0YXNldCBoYXMgbm8gbm9kZXMiKTsKICBjb25zdCB7IHBvc2l0aW9uczogbywgYm91bmRzOiBhIH0gPSBybihuLCBlKSwgciA9IG5ldyBGbG9hdDMyQXJyYXkoZSAqIDMpOwogIGZvciAobGV0IHAgPSAwOyBwIDwgZTsgcCsrKSB7CiAgICBjb25zdCBoID0gb1twICogM10sIG0gPSBvW3AgKiAzICsgMV0sIGQgPSBvW3AgKiAzICsgMl0sIHkgPSBNYXRoLmh5cG90KGgsIG0sIGQpIHx8IDE7CiAgICByW3AgKiAzXSA9IGggLyB5LCByW3AgKiAzICsgMV0gPSBtIC8geSwgcltwICogMyArIDJdID0gZCAvIHk7CiAgfQogIGNvbnN0IGMgPSBuZXcgRmxvYXQzMkFycmF5KGUpOwogIGlmIChzLmRlcHRoKSB7CiAgICBjb25zdCBwID0gVyhzLmRlcHRoLCAxLCAiZGVwdGgiKTsKICAgIGZvciAobGV0IGggPSAwOyBoIDwgZTsgaCsrKSBjW2hdID0gcFtoXSA/PyAwOwogIH0KICBjb25zdCBpID0gbmV3IFVpbnQ4QXJyYXkoZSk7CiAgaWYgKHMucmVnaW9ucykgewogICAgY29uc3QgcCA9IFcocy5yZWdpb25zLCAxLCAicmVnaW9ucyIpOwogICAgZm9yIChsZXQgaCA9IDA7IGggPCBlOyBoKyspIGlbaF0gPSAocFtoXSA/PyAwKSAmIDI1NTsKICB9CiAgY29uc3QgZiA9IFcocy5lZGdlcywgMiwgImVkZ2VzIiksIGwgPSBbXSwgdSA9IFtdOwogIGZvciAobGV0IHAgPSAwOyBwIDwgZi5sZW5ndGggLyAyOyBwKyspIHsKICAgIGNvbnN0IGggPSBmW3AgKiAyXSB8IDAsIG0gPSBmW3AgKiAyICsgMV0gfCAwOwogICAgaCA9PT0gbSB8fCBoIDwgMCB8fCBtIDwgMCB8fCBoID49IGUgfHwgbSA+PSBlIHx8IChsLnB1c2goaCksIHUucHVzaChtKSk7CiAgfQogIGNvbnN0IGIgPSB7IHBvc2l0aW9uczogbywgbm9ybWFsczogciwgZGVwdGg6IGMsIHJlZ2lvbjogaSwgY291bnQ6IGUsIGJvdW5kczogYSB9OwogIGxldCB3ID0gMC4wNzU7CiAgaWYgKGwubGVuZ3RoID4gMCkgewogICAgbGV0IHAgPSAwOwogICAgZm9yIChsZXQgaCA9IDA7IGggPCBsLmxlbmd0aDsgaCsrKSB7CiAgICAgIGNvbnN0IG0gPSBsW2hdLCBkID0gdVtoXTsKICAgICAgcCArPSBNYXRoLmh5cG90KAogICAgICAgIG9bZCAqIDNdIC0gb1ttICogM10sCiAgICAgICAgb1tkICogMyArIDFdIC0gb1ttICogMyArIDFdLAogICAgICAgIG9bZCAqIDMgKyAyXSAtIG9bbSAqIDMgKyAyXQogICAgICApOwogICAgfQogICAgdyA9IHAgLyBsLmxlbmd0aCAqIDEuNDsKICB9CiAgcmV0dXJuIEZ0KGIsIGwsIHUsIHcsIG5ldyBLKHQpKTsKfQphc3luYyBmdW5jdGlvbiBjbihzKSB7CiAgaWYgKHMua2luZCA9PT0gInByb2NlZHVyYWwiKSB7CiAgICBsZXQgZTsKICAgIGlmIChzLm9wdGlvbnMuc2hhcGUgPT09ICJzY2FuIikKICAgICAgdHJ5IHsKICAgICAgICBpZiAoIXMuc2NhblVybCkgdGhyb3cgbmV3IEVycm9yKCJubyBzY2FuVXJsIGdpdmVuIik7CiAgICAgICAgZSA9IGF3YWl0IFh0KHMuc2NhblVybCk7CiAgICAgIH0gY2F0Y2ggKG8pIHsKICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCJzY2FuIGJyYWluIHVuYXZhaWxhYmxlLCB1c2luZyB0aGUgYW5hdG9taWNhbCBzaGFwZToiLCBvKSwgZ3QoeyAuLi5zLm9wdGlvbnMsIHNoYXBlOiAiYW5hdG9taWNhbCIgfSkubG9hZCgpOwogICAgICB9CiAgICByZXR1cm4gZ3QoeyAuLi5zLm9wdGlvbnMsIGdyaWQ6IGUgfSkubG9hZCgpOwogIH0KICBjb25zdCB0ID0gYXdhaXQgZmV0Y2gocy51cmwpOwogIGlmICghdC5vaykgdGhyb3cgbmV3IEVycm9yKGBjYW5ub3QgbG9hZCAke3MudXJsfTogJHt0LnN0YXR1c31gKTsKICBjb25zdCBuID0gdC5oZWFkZXJzLmdldCgiY29udGVudC10eXBlIikgPz8gIiI7CiAgaWYgKCFuLmluY2x1ZGVzKCJqc29uIikpCiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cy51cmx9IGlzIG5vdCBKU09OIChnb3QgJHtuLnNwbGl0KCI7IilbMF0gfHwgIm5vIGNvbnRlbnQgdHlwZSJ9KWApOwogIHJldHVybiBhbihhd2FpdCB0Lmpzb24oKSk7Cn0KZnVuY3Rpb24gbG4ocykgewogIGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpOwogIGZvciAoY29uc3QgbiBvZiBPYmplY3QudmFsdWVzKHMpKQogICAgQXJyYXlCdWZmZXIuaXNWaWV3KG4pICYmIG4uYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgdC5hZGQobi5idWZmZXIpOwogIHJldHVybiBbLi4udF07Cn0KY29uc3QgaXQgPSBzZWxmOwppdC5vbm1lc3NhZ2UgPSBhc3luYyAocykgPT4gewogIGNvbnN0IHsgaWQ6IHQsIHJlcXVlc3Q6IG4gfSA9IHMuZGF0YTsKICB0cnkgewogICAgY29uc3QgZSA9IGF3YWl0IGNuKG4pOwogICAgaXQucG9zdE1lc3NhZ2UoeyBpZDogdCwgZ3JhcGg6IGUgfSwgbG4oZSkpOwogIH0gY2F0Y2ggKGUpIHsKICAgIGl0LnBvc3RNZXNzYWdlKHsgaWQ6IHQsIGVycm9yOiBlLm1lc3NhZ2UgfSwgW10pOwogIH0KfTsK", t0 = (n) => Uint8Array.from(atob(n), (t) => t.charCodeAt(0)), Pl = typeof self < "u" && self.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", t0(Rc)], { type: "text/javascript;charset=utf-8" });
function e0(n) {
  let t;
  try {
    if (t = Pl && (self.URL || self.webkitURL).createObjectURL(Pl), !t) throw "";
    const e = new Worker(t, {
      type: "module",
      name: n?.name
    });
    return e.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), e;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Rc,
      {
        type: "module",
        name: n?.name
      }
    );
  }
}
function i0() {
  return new e0();
}
async function Ul(n) {
  if (n.kind === "procedural") {
    let i;
    if (n.options.shape === "scan")
      try {
        if (!n.scanUrl) throw new Error("no scanUrl given");
        i = await Pm(n.scanUrl);
      } catch (s) {
        return console.warn("scan brain unavailable, using the anatomical shape:", s), Bl({ ...n.options, shape: "anatomical" }).load();
      }
    return Bl({ ...n.options, grid: i }).load();
  }
  const t = await fetch(n.url);
  if (!t.ok) throw new Error(`cannot load ${n.url}: ${t.status}`);
  const e = t.headers.get("content-type") ?? "";
  if (!e.includes("json"))
    throw new Error(`${n.url} is not JSON (got ${e.split(";")[0] || "no content type"})`);
  return $m(await t.json());
}
class n0 {
  worker = null;
  /** Set once a worker has failed outright; build on the main thread after. */
  workersBroken = !1;
  nextId = 0;
  pending = null;
  build(t) {
    this.pending && (this.worker?.terminate(), this.worker = null, this.pending.reject(new Oo()), this.pending = null);
    const e = this.ensureWorker();
    if (!e) return Ul(t);
    const i = ++this.nextId;
    return new Promise((s, r) => {
      this.pending = { id: i, reject: r }, e.onmessage = (o) => {
        o.data.id === i && (this.pending = null, o.data.error !== void 0 ? r(new Error(o.data.error)) : s(o.data.graph));
      }, e.onerror = (o) => {
        o.preventDefault(), this.pending?.id === i && (this.pending = null, this.worker?.terminate(), this.worker = null, this.workersBroken = !0, Ul(t).then(s, r));
      }, e.postMessage({ id: i, request: t });
    });
  }
  /** Stops the worker and abandons any build in progress. */
  dispose() {
    this.worker?.terminate(), this.worker = null, this.pending?.reject(new Oo()), this.pending = null;
  }
  ensureWorker() {
    if (this.worker) return this.worker;
    if (this.workersBroken || typeof Worker > "u") return null;
    try {
      this.worker = i0();
    } catch {
      return null;
    }
    return this.worker;
  }
}
class Oo extends Error {
  constructor() {
    super("superseded by a newer build"), this.name = "SupersededError";
  }
}
const s0 = 55e3;
function Dc(n) {
  return Math.cbrt(s0 / Math.max(1, n));
}
function ys(n, t) {
  const e = Dc(t);
  return {
    // Dots and cells keep their size relative to the gaps between them.
    pointSize: n.pointSize * e,
    cellSize: n.cellSize * e,
    // Comets keep their share of an edge.
    cometLength: n.cometLength * e,
    // Total synapse length grows as N * spacing = N^(2/3): the veil thins to match.
    edgeOpacity: Math.min(1, n.edgeOpacity * e * e),
    // Comets on a wave front grow as N^(2/3), each one ~spacing long.
    pulseIntensity: n.pulseIntensity * e
  };
}
function r0(n, t) {
  return n * Dc(t);
}
function o0(n) {
  return Math.max(24e3, Math.ceil(n * 0.5));
}
class ko {
  flags;
  list;
  size = 0;
  /** Everything changed; upload the whole buffer. */
  all = !0;
  constructor(t) {
    this.flags = new Uint8Array(t), this.list = new Int32Array(t);
  }
  mark(t) {
    this.all || this.flags[t] || (this.flags[t] = 1, this.list[this.size++] = t);
  }
  markAll() {
    this.all = !0;
  }
  get empty() {
    return !this.all && this.size === 0;
  }
  /**
   * Calls `emit(first, count)` for each run of changed items, merging runs
   * separated by fewer than `gap` clean items (one larger upload beats many
   * tiny ones). Falls back to a single span past `maxRanges`. Returns 'all'
   * without emitting when everything changed, so the caller uploads the whole
   * buffer; 'none' when nothing did. Clears the set.
   */
  drain(t, e = 32, i = 96) {
    if (this.all)
      return this.reset(), "all";
    const s = this.size;
    if (s === 0) return "none";
    const r = this.list.subarray(0, s).sort();
    let o = 1;
    for (let a = 1; a < s; a++) r[a] - r[a - 1] > e && o++;
    if (o > i)
      t(r[0], r[s - 1] - r[0] + 1);
    else {
      let a = r[0], l = a;
      for (let c = 1; c < s; c++) {
        const h = r[c];
        h - l > e && (t(a, l - a + 1), a = h), l = h;
      }
      t(a, l - a + 1);
    }
    return this.reset(), "some";
  }
  reset() {
    for (let t = 0; t < this.size; t++) this.flags[this.list[t]] = 0;
    this.size = 0, this.all = !1;
  }
}
function a0(n, t) {
  const e = n.itemSize;
  t.drain((s, r) => n.addUpdateRange(s * e, r * e)) !== "none" && (n.needsUpdate = !0);
}
const Le = {
  speed: 0.5,
  // Threshold sits just under the charge a strong synapse delivers, so a
  // healthy connection fires its neighbour outright while a weak one has to
  // arrive alongside another to count. With synapses this unreliable, that
  // mix is what gives the wave front its ragged, branching edge.
  threshold: 0.45,
  gain: 0.63,
  decay: 0.96,
  refractory: 0.46,
  reliability: 0.39,
  // Signals meander rather than travelling straight, so the useful range runs
  // past the cloud's own diameter.
  range: 2.75,
  glow: 0.65,
  spontaneous: 2.81,
  shimmer: 330,
  maxPulses: 24e3
}, Bc = 2e-3, l0 = 1024;
class c0 {
  capacity;
  count = 0;
  /** Per slot: [from node, to node], for the GPU. */
  ends;
  /** Per slot: [start time, duration, amplitude], for the GPU. */
  timing;
  /** Slots whose GPU data changed since the last upload. */
  dirty;
  edge;
  slotId;
  idSlot;
  freeIds;
  freeTop;
  // Min-heap of pulse ids keyed by arrival time.
  heapId;
  heapKey;
  heapSize = 0;
  constructor(t) {
    this.capacity = t, this.ends = new Float32Array(t * 2), this.timing = new Float32Array(t * 3), this.dirty = new ko(t), this.edge = new Uint32Array(t), this.slotId = new Int32Array(t), this.idSlot = new Int32Array(t), this.freeIds = new Int32Array(t);
    for (let e = 0; e < t; e++) this.freeIds[e] = t - 1 - e;
    this.freeTop = t, this.heapId = new Int32Array(t), this.heapKey = new Float64Array(t);
  }
  get full() {
    return this.count >= this.capacity;
  }
  clear() {
    this.count = 0, this.heapSize = 0;
    for (let t = 0; t < this.capacity; t++) this.freeIds[t] = this.capacity - 1 - t;
    this.freeTop = this.capacity, this.dirty.markAll();
  }
  spawn(t, e, i, s, r, o) {
    const a = this.freeIds[--this.freeTop], l = this.count++;
    this.edge[l] = t, this.ends[l * 2] = e, this.ends[l * 2 + 1] = i, this.timing[l * 3] = s, this.timing[l * 3 + 1] = r, this.timing[l * 3 + 2] = o, this.slotId[l] = a, this.idSlot[a] = l, this.dirty.mark(l), this.heapPush(a, s + r);
  }
  /** Arrival time of the next pulse to land, or Infinity. */
  get nextArrival() {
    return this.heapSize > 0 ? this.heapKey[0] : 1 / 0;
  }
  /**
   * Removes the next pulse to land, reporting it through `out`
   * as [to node, edge, amplitude].
   */
  popNext(t) {
    const e = this.heapPop(), i = this.idSlot[e];
    t[0] = this.ends[i * 2 + 1], t[1] = this.edge[i], t[2] = this.timing[i * 3 + 2];
    const s = --this.count;
    if (i !== s) {
      const r = this.slotId[s];
      this.edge[i] = this.edge[s], this.ends[i * 2] = this.ends[s * 2], this.ends[i * 2 + 1] = this.ends[s * 2 + 1], this.timing[i * 3] = this.timing[s * 3], this.timing[i * 3 + 1] = this.timing[s * 3 + 1], this.timing[i * 3 + 2] = this.timing[s * 3 + 2], this.slotId[i] = r, this.idSlot[r] = i, this.dirty.mark(i);
    }
    this.freeIds[this.freeTop++] = e;
  }
  /** Shifts every time by -offset, for rebasing the clock. */
  shiftTime(t) {
    for (let e = 0; e < this.count; e++) this.timing[e * 3] -= t;
    for (let e = 0; e < this.heapSize; e++) this.heapKey[e] -= t;
    this.dirty.markAll();
  }
  heapPush(t, e) {
    const { heapId: i, heapKey: s } = this;
    let r = this.heapSize++;
    for (; r > 0; ) {
      const o = r - 1 >> 1;
      if (s[o] <= e) break;
      i[r] = i[o], s[r] = s[o], r = o;
    }
    i[r] = t, s[r] = e;
  }
  heapPop() {
    const { heapId: t, heapKey: e } = this, i = t[0], s = --this.heapSize;
    if (s > 0) {
      const r = t[s], o = e[s];
      let a = 0;
      for (; ; ) {
        const l = 2 * a + 1;
        if (l >= s) break;
        const c = l + 1, h = c < s && e[c] < e[l] ? c : l;
        if (e[h] >= o) break;
        t[a] = t[h], e[a] = e[h], a = h;
      }
      t[a] = r, e[a] = o;
    }
    return i;
  }
}
const Fl = 1337;
class h0 {
  graph;
  params;
  /**
   * Per node [peak, start time]. Visible glow at time t is
   * peak * 0.5^((t - start) / params.glow). Shared with the GPU as-is.
   */
  glow;
  /** Nodes whose glow entry changed since the last upload. */
  glowDirty;
  /** Further consumers of glow changes, each draining its own set. */
  glowWatchers = [];
  pulses;
  charge;
  chargeAt;
  lastFire;
  time = 0;
  rng = new Sn(Fl);
  arrival = new Float64Array(3);
  /** Rolling counters for the readout. */
  stats = { firings: 0, pulses: 0, dropped: 0 };
  constructor(t, e = Le) {
    this.graph = t, this.params = { ...e };
    const i = t.nodeCount;
    this.glow = new Float32Array(i * 2), this.glowDirty = new ko(i), this.charge = new Float32Array(i), this.chargeAt = new Float32Array(i), this.lastFire = new Float32Array(i).fill(-1e9), this.pulses = new c0(Math.max(1024, e.maxPulses));
  }
  /** A DirtySet of glow changes for another GPU copy of `glow`; starts all-dirty. */
  watchGlow() {
    const t = new ko(this.graph.nodeCount);
    return this.glowWatchers.push(t), t;
  }
  unwatchGlow(t) {
    this.glowWatchers = this.glowWatchers.filter((e) => e !== t);
  }
  markAllGlow() {
    this.glowDirty.markAll();
    for (const t of this.glowWatchers) t.markAll();
  }
  /** Current sim time. Rebased periodically; only differences are meaningful. */
  get now() {
    return this.time;
  }
  get livePulses() {
    return this.pulses.count;
  }
  /** Visible glow of a node right now, in [0, 1]. */
  glowAt(t) {
    const e = this.glow[t * 2];
    if (e === 0) return 0;
    const i = e * Math.exp((this.time - this.glow[t * 2 + 1]) * this.glowRate);
    return i < Bc ? 0 : i;
  }
  /** -ln 2 / half-life, refreshed each step so live param edits apply. */
  glowRate = -Math.LN2 / Le.glow;
  /**
   * Clears all activity, leaving the wiring alone, and reseeds the random
   * stream, so the same stimuli after a reset play out the same way.
   */
  reset() {
    this.rng = new Sn(Fl), this.charge.fill(0), this.chargeAt.fill(0), this.lastFire.fill(-1e9), this.glow.fill(0), this.markAllGlow(), this.pulses.clear(), this.stats.firings = 0, this.stats.pulses = 0, this.stats.dropped = 0;
  }
  /** Makes a node fire now, regardless of its charge. This is the user's poke. */
  stimulate(t, e = 1) {
    t < 0 || t >= this.graph.nodeCount || this.fire(t, e);
  }
  setGlow(t, e) {
    this.glow[t * 2] = e, this.glow[t * 2 + 1] = this.time, this.glowDirty.mark(t);
    for (const i of this.glowWatchers) i.mark(t);
  }
  fire(t, e) {
    const { graph: i, params: s, pulses: r } = this;
    this.lastFire[t] = this.time, this.charge[t] = 0, this.chargeAt[t] = this.time, this.setGlow(t, Math.max(this.glowAt(t), Math.min(1, e))), this.stats.firings++;
    const o = i.adjOffset[t], a = i.adjOffset[t + 1], l = Math.max(0.01, s.speed);
    for (let c = o; c < a; c++) {
      const h = i.adjEdge[c];
      if (this.rng.next() > i.edgeWeight[h] * s.reliability) continue;
      if (r.full) {
        this.stats.dropped++;
        break;
      }
      const u = Math.max(0.016, i.edgeLength[h] / l);
      r.spawn(h, t, i.adjPeer[c], this.time, u, e), this.stats.pulses++;
    }
  }
  step(t) {
    const { graph: e, params: i, pulses: s, arrival: r } = this, o = Math.min(0.1, Math.max(0, t));
    this.time += o;
    const a = this.time;
    this.glowRate = -Math.LN2 / Math.max(0.01, i.glow);
    const l = -Math.LN2 / Math.max(0.01, i.decay), c = -1 / Math.max(0.01, i.range);
    for (; s.nextArrival <= a; ) {
      s.popNext(r);
      const p = r[0], g = r[1], v = r[2];
      if (a - this.lastFire[p] < i.refractory) continue;
      const f = this.charge[p] * Math.exp((a - this.chargeAt[p]) * l) + i.gain * v * e.edgeWeight[g];
      if (this.charge[p] = f, this.chargeAt[p] = a, this.setGlow(p, Math.min(1, this.glowAt(p) + 0.22 * v)), f >= i.threshold) {
        const d = v * Math.exp(e.edgeLength[g] * c);
        this.fire(p, d);
      }
    }
    const h = e.nodeCount;
    i.spontaneous > 0 && this.rng.next() < i.spontaneous * o && this.fire(this.rng.int(0, h - 1), 1);
    let u = i.shimmer * o;
    for (; u > 0 && !(u < 1 && this.rng.next() > u); ) {
      const p = this.rng.int(0, h - 1);
      this.setGlow(p, Math.min(1, this.glowAt(p) + this.rng.range(0.06, 0.3))), u -= 1;
    }
    this.time > l0 && this.rebase();
  }
  /** Shifts the clock back to zero, keeping every relative time intact. */
  rebase() {
    const t = this.time;
    this.time = 0;
    const e = this.graph.nodeCount;
    for (let i = 0; i < e; i++)
      this.glow[i * 2 + 1] -= t, this.chargeAt[i] -= t, this.lastFire[i] -= t;
    this.markAllGlow(), this.pulses.shiftTime(t);
  }
}
const Mi = {
  background: new Mt("#04040a"),
  /** Resting colour per region: cortex, cerebellum, stem. */
  tissue: [new Mt("#3d4a8f"), new Mt("#2f6d78"), new Mt("#6b5a86")],
  /** Firing colour, and the hotter core of a firing node. */
  signal: new Mt("#7fe6ff"),
  signalCore: new Mt("#ffffff"),
  /** Travelling pulse. */
  pulse: new Mt("#aef0ff"),
  /** Long-range tracts, so midline crossings read differently. */
  tract: new Mt("#c98ff5")
}, Nl = Mi.tissue.map((n) => n.clone());
function Gl(n) {
  const t = { h: 0, s: 0, l: 0 }, e = { h: 0, s: 0, l: 0 }, i = { h: 0, s: 0, l: 0 };
  Nl[0].getHSL(t), new Mt(n).getHSL(e), Mi.tissue.forEach((s, r) => {
    Nl[r].getHSL(i);
    const o = e.h + i.h - t.h, a = Math.min(1, Math.max(0, e.s + i.s - t.s)), l = Math.min(1, Math.max(0, e.l * (i.l / Math.max(t.l, 1e-3))));
    s.setHSL(o - Math.floor(o), a, l);
  });
}
function Hs(n, t, e) {
  for (let i = 0; i < n.length; i++) {
    const s = u0(n[i]);
    t[i * e] = s.r, t[i * e + 1] = s.g, t[i * e + 2] = s.b;
  }
}
function u0(n) {
  return Mi.tissue[n] ?? Mi.tissue[0];
}
const ia = (
  /* glsl */
  `
  uniform highp sampler2D uNodePositions; // xyz, depth
  uniform highp sampler2D uNodeTissue;    // resting colour
  uniform int uNodesWidth;

  ivec2 nodeTexel(float index) {
    int i = int(index + 0.5);
    return ivec2(i % uNodesWidth, i / uNodesWidth);
  }
  vec4 nodePosition(float index) { return texelFetch(uNodePositions, nodeTexel(index), 0); }
  vec3 nodeTissue(float index) { return texelFetch(uNodeTissue, nodeTexel(index), 0).rgb; }
`
);
class d0 {
  positions;
  tissue;
  width;
  regions;
  tissueData;
  constructor(t) {
    const e = t.nodeCount;
    this.width = Math.min(na, Math.max(1, e));
    const i = Math.max(1, Math.ceil(e / this.width)), s = new Float32Array(this.width * i * 4), r = new Float32Array(this.width * i * 4);
    for (let o = 0; o < e; o++)
      s[o * 4] = t.positions[o * 3], s[o * 4 + 1] = t.positions[o * 3 + 1], s[o * 4 + 2] = t.positions[o * 3 + 2], s[o * 4 + 3] = t.depth[o];
    Hs(t.region, r, 4), this.regions = t.region, this.tissueData = r, this.positions = Nn(s, this.width, i), this.tissue = Nn(r, this.width, i);
  }
  /** Picks up a new brain colour (see setBrainColor). */
  refreshTissue() {
    Hs(this.regions, this.tissueData, 4), this.tissue.needsUpdate = !0;
  }
  /** Uniforms matching NODE_FETCH_GLSL. */
  uniforms() {
    return {
      uNodePositions: { value: this.positions },
      uNodeTissue: { value: this.tissue },
      uNodesWidth: { value: this.width }
    };
  }
  dispose() {
    this.positions.dispose(), this.tissue.dispose();
  }
}
const na = 2048;
function Nn(n, t, e, i = Fe) {
  const s = new Yg(n, t, e, i, Qe);
  return s.minFilter = pe, s.magFilter = pe, s.generateMipmaps = !1, s.needsUpdate = !0, s;
}
function sa(n) {
  return new ae(new Uint8Array(Math.max(1, n)), 1);
}
function zs(n, t) {
  n.boundingSphere = new In(new B(), t);
}
const f0 = 0.25, xi = {
  uDepthNear: { value: 0 },
  uDepthFar: { value: 1 },
  uDepthCue: { value: 0 }
}, Kn = (
  /* glsl */
  `
  uniform float uDepthNear;
  uniform float uDepthFar;
  uniform float uDepthCue;

  /** 0 at the near side of the brain, 1 at the far side, for a view-space z. */
  float viewDepth(float viewZ) {
    return clamp((-viewZ - uDepthNear) / max(1e-4, uDepthFar - uDepthNear), 0.0, 1.0);
  }

  /** Brightness multiplier for a view-space z. */
  float depthCue(float viewZ) {
    return 1.0 - uDepthCue * viewDepth(viewZ);
  }
`
);
function p0(n, t, e, i) {
  const s = n.position.distanceTo(t);
  xi.uDepthNear.value = Math.max(0, s - e), xi.uDepthFar.value = s + f0 * e, xi.uDepthCue.value = i;
}
const g0 = (
  /* glsl */
  `
  ${ia}
  uniform highp sampler2D uEdges; // node indices (a, b) per synapse
  uniform int uEdgesWidth;
  uniform float uTractLength;
  uniform vec3 uTractColor;
  ${Kn}

  varying vec3 vColor;
  varying float vFade;

  void main() {
    int edge = gl_VertexID >> 1;
    bool first = (gl_VertexID & 1) == 0;
    vec2 ends = texelFetch(uEdges, ivec2(edge % uEdgesWidth, edge / uEdgesWidth), 0).xy;
    vec4 a = nodePosition(ends.x);
    vec4 b = nodePosition(ends.y);

    vec4 end = first ? a : b;
    vec3 tissue = nodeTissue(first ? ends.x : ends.y);

    // Long-range tracts carry a violet tint and stay readable, so the
    // midline crossings read as structure rather than noise.
    bool tract = length(b.xyz - a.xyz) > uTractLength;
    vColor = tract ? mix(tissue, uTractColor, 0.45) : tissue;
    // Deep wires recede so the surface structure reads first.
    vFade = (tract ? 0.85 : 1.0) * (1.0 - 0.55 * end.w);

    vec4 mv = modelViewMatrix * vec4(end.xyz, 1.0);
    vFade *= depthCue(mv.z);
    gl_Position = projectionMatrix * mv;
  }
`
), m0 = (
  /* glsl */
  `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vFade;

  void main() {
    gl_FragColor = vec4(vColor * vFade, uOpacity * vFade);
  }
`
);
class v0 {
  lines;
  geometry;
  material;
  edges;
  constructor(t, e, i = {}) {
    const { opacity: s = 0.032, tractThreshold: r = 0.28 } = i, o = t.edgeCount, a = Math.min(na, Math.max(1, o)), l = Math.max(1, Math.ceil(o / a)), c = new Float32Array(a * l * 2);
    c.set(t.edges), this.edges = Nn(c, a, l, Ys);
    const h = new Ae();
    h.setAttribute("position", sa(o * 2)), zs(h, t.bounds), this.geometry = h, this.material = new te({
      vertexShader: g0,
      fragmentShader: m0,
      uniforms: {
        ...e.uniforms(),
        uEdges: { value: this.edges },
        uEdgesWidth: { value: a },
        uOpacity: { value: s },
        uTractLength: { value: t.bounds * r },
        uTractColor: { value: Mi.tract.clone() },
        ...xi
      },
      transparent: !0,
      depthWrite: !1,
      blending: fn
    }), this.lines = new Mc(h, this.material), this.lines.frustumCulled = !1;
  }
  setOpacity(t) {
    this.material.uniforms.uOpacity.value = t;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.edges.dispose();
  }
}
class C0 {
  mode;
  /** Smoothed milliseconds per section, in first-seen order. */
  ms = /* @__PURE__ */ new Map();
  gl;
  ext = null;
  pending = [];
  open = null;
  constructor(t, e) {
    this.gl = t, e === "query" ? (this.ext = t.getExtension("EXT_disjoint_timer_query_webgl2"), this.mode = this.ext ? "query" : "off") : this.mode = e;
  }
  get enabled() {
    return this.mode !== "off";
  }
  begin(t) {
    if (this.mode === "off" || this.open) return;
    const { gl: e } = this;
    if (this.mode === "query") {
      const i = e.createQuery();
      if (!i) return;
      e.beginQuery(this.ext.TIME_ELAPSED_EXT, i), this.open = { label: t, query: i, start: 0 };
    } else
      e.finish(), this.open = { label: t, query: null, start: performance.now() };
  }
  end() {
    const t = this.open;
    t && (this.open = null, this.mode === "query" ? (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.pending.push({ label: t.label, query: t.query })) : (this.gl.finish(), this.record(t.label, performance.now() - t.start)));
  }
  /** Collects finished queries. Call once per frame. */
  poll() {
    if (this.mode !== "query" || this.pending.length === 0) return;
    const { gl: t } = this, e = t.getParameter(this.ext.GPU_DISJOINT_EXT);
    let i = 0;
    for (const { label: s, query: r } of this.pending) {
      if (!t.getQueryParameter(r, t.QUERY_RESULT_AVAILABLE)) break;
      e || this.record(s, t.getQueryParameter(r, t.QUERY_RESULT) / 1e6), t.deleteQuery(r), i++;
    }
    if (this.pending.splice(0, i), this.pending.length > 256)
      for (const { query: s } of this.pending.splice(0, this.pending.length - 256)) t.deleteQuery(s);
  }
  /** Forgets all timings, e.g. after changing what is being measured. */
  reset() {
    this.ms.clear();
    for (const { query: t } of this.pending) this.gl.deleteQuery(t);
    this.pending.length = 0;
  }
  record(t, e) {
    const i = this.ms.get(t);
    this.ms.set(t, i === void 0 ? e : i + (e - i) * 0.1);
  }
  /** One-line summary for the readout. */
  summary() {
    if (this.mode === "off") return "gpu timer unavailable here; try ?gpu=finish";
    if (this.ms.size === 0) return "gpu timing…";
    let t = 0;
    for (const i of this.ms.values()) t += i;
    const e = [...this.ms].map(([i, s]) => `${i} ${s.toFixed(2)}`);
    return `gpu${this.mode === "finish" ? " (finish, approx)" : ""} ${t.toFixed(2)} ms · ${e.join(" · ")}`;
  }
}
class A0 extends Ki {
  /** Layers to time individually when the GPU timer is on. */
  layers = [];
  scene;
  camera;
  timer;
  clearColor = new Mt();
  constructor(t, e, i) {
    super(), this.scene = t, this.camera = e, this.timer = i, this.needsSwap = !1;
  }
  render(t, e, i) {
    const s = t.autoClear;
    t.autoClear = !1, this.clearTo(t, this.renderToScreen ? null : i), this.draw(t), t.autoClear = s;
  }
  /**
   * Binds `target` and clears it to the background colour.
   *
   * three.js converts the clear colour for whichever target is bound when the
   * colour is *set*: sRGB-encoded for the screen, linear for an offscreen
   * buffer. UnrealBloomPass restores the clear colour while the screen is
   * bound, so clearing an offscreen buffer without setting it again uses the
   * screen's encoding, and the output pass encodes it a second time: #04040a
   * comes out as navy (34, 34, 56). three's own RenderPass does exactly that.
   * Setting the colour after binding the target encodes it correctly.
   */
  clearTo(t, e) {
    t.getClearColor(this.clearColor);
    const i = t.getClearAlpha();
    t.setRenderTarget(e), t.setClearColor(this.clearColor, i), t.clear();
  }
  /** Draws the scene; one layer at a time, timed, when the timer is on. */
  draw(t) {
    if (!this.timer.enabled || this.layers.length === 0) {
      t.render(this.scene, this.camera);
      return;
    }
    const e = this.layers.map((i) => i.object.visible);
    for (const [i, s] of this.layers.entries())
      if (e[i]) {
        for (const r of this.layers) r.object.visible = r === s;
        this.timer.begin(s.label), t.render(this.scene, this.camera), this.timer.end();
      }
    this.layers.forEach((i, s) => i.object.visible = e[s]);
  }
}
const Pc = (
  /* glsl */
  `
  uniform float uNearFadeFrom;
  float nearFade(vec3 p) {
    float side = dot(p - uCentre, uViewDir);
    return smoothstep(uNearFadeFrom, 0.12, side);
  }
`
), S0 = 1.1, x0 = 2.5, Uc = 2.6, Fc = Math.log(3).toFixed(6), Nc = { blending: Zl, blendSrc: Wr, blendDst: Wr, depthTest: !1, depthWrite: !1, transparent: !0 }, Ol = { ...Nc, depthTest: !0, depthFunc: Oi }, kl = { blending: Ke, colorWrite: !1, depthTest: !0, depthWrite: !0, transparent: !1, defines: { DEPTH_PREPASS: "" } }, y0 = (
  /* glsl */
  `
  attribute vec2 aGlow;
  attribute vec3 aTissue;
  attribute float aSeed;
  attribute float aDepth;
  uniform float uTime;
  uniform float uGlowHalfLife;
  uniform float uRadius;
  uniform float uProjScale;
  uniform vec3 uCentre;
  uniform vec3 uViewDir;
  uniform float uDepthSlack;
  ${Kn}
  varying vec3 vColor;
  varying float vSeed;
  varying float vFade;

  ${Pc}

  void main() {
    vFade = nearFade(position);
    if (vFade <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec4 placed = mv;
    #ifndef DEPTH_PREPASS
    // Pulled toward the camera by the slack, so the depth test keeps this
    // splat if it lies within the slack behind the front surface.
    placed.z += uDepthSlack;
    #endif
    gl_Position = projectionMatrix * placed;
    float act = aGlow.x * exp2(-max(0.0, uTime - aGlow.y) / uGlowHalfLife);
    act = act < 0.002 ? 0.0 : min(act, 1.0);
    // Cells vary in size, and swell a little when they fire.
    float r = uRadius * (0.9 + 0.6 * aSeed) * (1.0 + 0.3 * act);
    // At least ~1.5 px across, so small distant cells stay visible.
    float rPx = max(r * uProjScale / max(0.05, -mv.z), 0.75);
    gl_PointSize = 2.0 * ${Uc.toFixed(2)} * rPx;
    vColor = mix(aTissue * (0.8 + 0.4 * (1.0 - aDepth)), SIGNAL, act) * depthCue(mv.z);
    vSeed = aSeed;
  }
`
), I0 = (
  /* glsl */
  `
  uniform float uTime;
  varying vec3 vColor;
  varying float vSeed;
  varying float vFade;

  void main() {
    vec2 p = (gl_PointCoord - 0.5) * 2.0 * ${Uc.toFixed(2)}; // in soma radii
    float r = length(p);
    float th = atan(p.y, p.x);
    float ph = vSeed * 6.2831853;
    // A few slow harmonics of angle: the morphing border-radius blob.
    float m = 1.0
      + 0.16 * sin(3.0 * th + ph + uTime * 0.6)
      + 0.09 * sin(5.0 * th - 1.7 * ph - uTime * 0.45)
      + 0.05 * sin(2.0 * th + 2.3 * ph + uTime * 0.3);
    // Gaussian scaled so density crosses the 1/3 threshold at radius m.
    // The fade scales density, so a cell shrinks below threshold smoothly
    // rather than popping out.
    float d = exp(-(r * r) / (m * m) * ${Fc}) * vFade;
    #ifdef DEPTH_PREPASS
    // Only the solid core occludes: where this blob alone passes threshold.
    if (d < 0.334) discard;
    gl_FragColor = vec4(0.0);
    #else
    if (d < 0.004) discard;
    gl_FragColor = vec4(vColor * d, d);
    #endif
  }
`
), M0 = (
  /* glsl */
  `
  ${ia}
  uniform highp sampler2D uLinks;     // node a, node b
  uniform int uLinksWidth;
  uniform highp sampler2D uNodeGlow; // per node: peak, start time
  uniform float uTime;
  uniform float uGlowHalfLife;
  uniform vec2 uTargetSize;
  uniform float uRadius;
  uniform float uProjScale;
  uniform vec3 uCentre;
  uniform vec3 uViewDir;
  uniform float uDepthSlack;
  ${Kn}
  varying float vFade;
  varying float vCue;
  varying float vT;
  varying float vAcross;
  varying float vWidthA;
  varying float vWidthB;
  varying vec3 vColor;
  varying float vGlowA;
  varying float vGlowB;

  // Decayed on the GPU like the somas' own glow, so the CPU never touches
  // glow that is merely fading.
  float nodeGlow(float index) {
    vec2 g = texelFetch(uNodeGlow, nodeTexel(index), 0).rg;
    float act = g.x * exp2(-max(0.0, uTime - g.y) / uGlowHalfLife);
    return act < 0.002 ? 0.0 : min(act, 1.0);
  }

  // Two triangles per neurite: (t along, side across).
  const vec2 CORNERS[6] = vec2[6](
    vec2(0.0, -1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
    vec2(0.0, -1.0), vec2(1.0, 1.0), vec2(0.0, 1.0)
  );

  ${Pc}

  void main() {
    int link = gl_VertexID / 6;
    vec2 corner = CORNERS[gl_VertexID - link * 6];
    vec4 link4 = texelFetch(uLinks, ivec2(link % uLinksWidth, link / uLinksWidth), 0);
    vec2 ends = link4.xy;
    vec3 a = nodePosition(ends.x).xyz;
    vec3 b = nodePosition(ends.y).xyz;
    vFade = nearFade(0.5 * (a + b));
    if (vFade <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    vec4 va = modelViewMatrix * vec4(a, 1.0);
    vec4 vb = modelViewMatrix * vec4(b, 1.0);
    float cueA = depthCue(va.z);
    float cueB = depthCue(vb.z);
    #ifndef DEPTH_PREPASS
    va.z += uDepthSlack;
    vb.z += uDepthSlack;
    #endif
    if (va.z > -0.05 || vb.z > -0.05) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }

    vec4 ca = projectionMatrix * va;
    vec4 cb = projectionMatrix * vb;
    vec2 halfSize = 0.5 * uTargetSize;
    vec2 sa = ca.xy / ca.w * halfSize;
    vec2 sb = cb.xy / cb.w * halfSize;
    vec2 dir = sb - sa;
    float len = length(dir);
    dir = len > 1e-3 ? dir / len : vec2(1.0, 0.0);
    vec2 normal = vec2(-dir.y, dir.x);

    // Tube radius in pixels where it meets each soma: a third of the cell
    // body, so the body reads as a bulb the neurites grow out of.
    // Never under ~0.6 px, or thin links between small cells drop below the
    // threshold and the cells stop joining up.
    float ra = max(0.32 * uRadius * uProjScale / -va.z, 0.6);
    float rb = max(0.32 * uRadius * uProjScale / -vb.z, 0.6);
    float span = 2.4 * max(ra, rb); // covers the cross-section's tail

    float t = corner.x;
    vec2 s = mix(sa, sb, t) + normal * corner.y * span;
    float w = mix(ca.w, cb.w, t);
    gl_Position = vec4(s / halfSize * w, mix(ca.z / ca.w, cb.z / cb.w, t) * w, w);

    vT = t;
    vAcross = corner.y * span;
    vWidthA = ra;
    vWidthB = rb;
    vColor = mix(nodeTissue(ends.x), nodeTissue(ends.y), t);
    vCue = mix(cueA, cueB, t);
    vGlowA = nodeGlow(ends.x);
    vGlowB = nodeGlow(ends.y);
  }
`
), b0 = (
  /* glsl */
  `
  varying float vGlowA;
  varying float vGlowB;
  varying float vFade;
  varying float vCue;
  varying float vT;
  varying float vAcross;
  varying float vWidthA;
  varying float vWidthB;
  varying vec3 vColor;

  void main() {
    // Thick at both somas, thinning to about 40% midway.
    float ends = mix(vWidthA, vWidthB, vT);
    float w = ends * mix(1.0, 0.5, 4.0 * vT * (1.0 - vT));
    float d = exp(-(vAcross * vAcross) / (w * w) * ${Fc}) * 1.15 * vFade;
    #ifdef DEPTH_PREPASS
    if (d < 0.334) discard;
    gl_FragColor = vec4(0.0);
    return;
    #endif
    if (d < 0.004) discard;
    // A firing soma lights its neurites, fading along them from its end.
    float glow = max(vGlowA * (1.0 - vT) * (1.0 - vT), vGlowB * vT * vT);
    gl_FragColor = vec4(mix(vColor, SIGNAL, glow) * vCue * d, d);
  }
`
), w0 = (
  /* glsl */
  `
  uniform sampler2D tDensity;
  uniform float uBody;
  uniform float uRim;
  varying vec2 vUv;

  void main() {
    vec4 d = texture2D(tDensity, vUv);
    float a = d.a;
    // CSS feColorMatrix alpha row "18 -6": 0 at a = 1/3, 1 at a = 7/18.
    float inside = clamp(18.0 * a - 6.0, 0.0, 1.0);
    if (inside <= 0.0) discard;
    // The membrane: brightest just inside the edge, fading toward the core.
    float rim = inside * (1.0 - smoothstep(0.39, 0.85, a));
    vec3 color = d.rgb / max(a, 1e-4);
    gl_FragColor = vec4(color * (uBody * inside + uRim * rim), 0.0);
  }
`
);
class _0 {
  /** Density pass. */
  scene = new Uo();
  /** Depth pre-pass: the same geometry, opaque cores only. */
  depthScene = new Uo();
  somaDepthMaterial;
  neuriteDepthMaterial;
  depthSlack = { value: 0 };
  somaGeometry;
  neuriteGeometry;
  somaMaterial;
  neuriteMaterial;
  links;
  /** sim.glow as a texture, rows re-uploaded only where something changed. */
  nodeGlow;
  nodeGlowData;
  glowDirty;
  dirtyRows;
  sim;
  // Shared by both materials.
  centre = { value: new B() };
  viewDir = { value: new B(0, 0, 1) };
  nearFadeFrom = { value: -0.02 };
  /** 0: separate cells; 1: one merged mass. Set from the zoom by the caller. */
  merge = 0;
  /** Typical distance between neighbouring nodes, model units. */
  spacing;
  baseRadius;
  cellZoom;
  referenceDistance;
  /**
   * @param nodeGeometry the node layer's geometry, whose position, glow and
   * colour attributes are shared rather than copied.
   */
  constructor(t, e, i, s, r = {}) {
    this.sim = t;
    const o = r.cellSize ?? 18e-4;
    this.baseRadius = o, this.cellZoom = r.cellZoom ?? 1, this.referenceDistance = r.referenceDistance ?? 2, this.spacing = T0(t.graph.edgeLength), i.computeBoundingSphere(), this.centre.value.copy(i.boundingSphere.center);
    const a = Mi.signal, l = new Ae();
    for (const E of ["position", "aGlow", "aTissue", "aSeed", "aDepth"])
      l.setAttribute(E, i.getAttribute(E));
    l.setIndex(new ae(e.somas, 1)), zs(l, t.graph.bounds), this.somaGeometry = l, this.depthSlack.value = 2.2 * o;
    const c = {
      vertexShader: y0.replace(/SIGNAL/g, `vec3(${a.r.toFixed(4)}, ${a.g.toFixed(4)}, ${a.b.toFixed(4)})`),
      fragmentShader: I0,
      // One uniforms object, shared by the density and depth materials.
      uniforms: {
        uTime: { value: 0 },
        uGlowHalfLife: { value: 0.65 },
        uRadius: { value: o },
        uProjScale: { value: 1 },
        uCentre: this.centre,
        uNearFadeFrom: this.nearFadeFrom,
        uViewDir: this.viewDir,
        uDepthSlack: this.depthSlack,
        ...xi
      }
    };
    this.somaMaterial = new te({ ...c, ...Ol }), this.somaDepthMaterial = new te({ ...c, ...kl });
    const h = new No(l, this.somaMaterial), u = new No(l, this.somaDepthMaterial);
    h.frustumCulled = !1, u.frustumCulled = !1;
    const p = Math.max(1, Math.ceil(t.graph.nodeCount / s.width));
    this.nodeGlowData = new Float32Array(s.width * p * 2), this.nodeGlow = Nn(this.nodeGlowData, s.width, p, Ys), this.glowDirty = t.watchGlow(), this.dirtyRows = new Uint8Array(p);
    const g = e.links.length / 2, v = Math.min(na, Math.max(1, g)), m = Math.max(1, Math.ceil(g / v)), f = new Float32Array(v * m * 4);
    for (let E = 0; E < g; E++) {
      const _ = e.links[E * 2], w = e.links[E * 2 + 1];
      f[E * 4] = _, f[E * 4 + 1] = w;
    }
    this.links = Nn(f, v, m);
    const d = new Ae();
    d.setAttribute("position", sa(g * 6)), zs(d, t.graph.bounds), this.neuriteGeometry = d;
    const y = {
      vertexShader: M0,
      fragmentShader: b0.replace(/SIGNAL/g, `vec3(${a.r.toFixed(4)}, ${a.g.toFixed(4)}, ${a.b.toFixed(4)})`),
      uniforms: {
        ...s.uniforms(),
        uLinks: { value: this.links },
        uLinksWidth: { value: v },
        uNodeGlow: { value: this.nodeGlow },
        uTime: { value: 0 },
        uGlowHalfLife: { value: 0.65 },
        uTargetSize: { value: new St(1, 1) },
        uRadius: { value: o },
        uProjScale: { value: 1 },
        uCentre: this.centre,
        uNearFadeFrom: this.nearFadeFrom,
        uViewDir: this.viewDir,
        uDepthSlack: this.depthSlack,
        ...xi
      }
    };
    this.neuriteMaterial = new te({ ...y, ...Ol }), this.neuriteDepthMaterial = new te({ ...y, ...kl });
    const S = new Ne(d, this.neuriteMaterial), M = new Ne(d, this.neuriteDepthMaterial);
    S.frustumCulled = !1, M.frustumCulled = !1, this.scene.add(S, h), this.depthScene.add(M, u);
  }
  setCellSize(t, e = this.cellZoom, i = this.referenceDistance) {
    this.baseRadius = t, this.cellZoom = e, this.referenceDistance = i;
  }
  /** Cell radius in model units for a camera `distance` from the brain's centre. */
  radiusAt(t) {
    const e = Math.max(t, 1e-3) / this.referenceDistance;
    return this.baseRadius * Math.pow(e, this.cellZoom);
  }
  /** Typical cell radius on screen, in pixels of a target `height` tall. */
  typicalRadiusPx(t, e) {
    const i = Math.max(0.05, t.position.distanceTo(this.centre.value)), s = t.projectionMatrix.elements[5] * 0.5 * e;
    return 1.2 * this.radiusAt(i) * s / i;
  }
  /**
   * How far the cells have merged into one mass, 0 to 1. Zoomed out, the
   * brain should read as a single uniform shape; zoomed in, as neurons.
   */
  setMerge(t) {
    this.merge = Math.min(1, Math.max(0, t));
  }
  applyRadius(t) {
    const e = this.radiusAt(t), i = Math.max(e, S0 * this.spacing), s = e + (i - e) * this.merge;
    this.somaMaterial.uniforms.uRadius.value = s, this.neuriteMaterial.uniforms.uRadius.value = s, this.depthSlack.value = 2.2 * s * (1 + 2 * this.merge), this.nearFadeFrom.value = -0.02 - 0.3 * this.merge;
  }
  /** Per-frame uniforms, for a density target `width` x `height` pixels. */
  update(t, e, i, s) {
    const r = e.projectionMatrix.elements[5] * 0.5 * s, o = this.somaMaterial.uniforms;
    o.uTime.value = this.sim.now, o.uGlowHalfLife.value = Math.max(0.01, this.sim.params.glow), o.uProjScale.value = r;
    const a = this.neuriteMaterial.uniforms;
    a.uProjScale.value = r, a.uTime.value = o.uTime.value, a.uGlowHalfLife.value = o.uGlowHalfLife.value, this.viewDir.value.copy(e.position).sub(this.centre.value), this.applyRadius(this.viewDir.value.length()), this.viewDir.value.normalize(), this.uploadGlow(t), a.uTargetSize.value.set(i, s);
  }
  /** Copies changed rows of sim.glow into the texture and uploads just those. */
  uploadGlow(t) {
    const e = this.nodeGlow.image.width, i = this.dirtyRows, s = this.glowDirty.drain((h, u) => {
      const p = Math.floor((h + u - 1) / e);
      for (let g = Math.floor(h / e); g <= p; g++) i[g] = 1;
    });
    if (s === "none") return;
    const r = this.sim.glow, o = this.nodeGlowData;
    if (s === "all") {
      i.fill(0), o.set(r), this.nodeGlow.needsUpdate = !0;
      return;
    }
    const a = t.properties.get(this.nodeGlow), l = a.__webglTexture !== void 0 && a.__version === this.nodeGlow.version, c = t.getContext();
    l && (t.state.bindTexture(c.TEXTURE_2D, a.__webglTexture), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), c.pixelStorei(c.UNPACK_ALIGNMENT, 4));
    for (let h = 0; h < i.length; h++) {
      if (!i[h]) continue;
      let u = h;
      for (; u + 1 < i.length && i[u + 1]; ) u++;
      const p = h * e * 2, g = Math.min(r.length, (u + 1) * e * 2);
      o.set(r.subarray(p, g), p), l && c.texSubImage2D(c.TEXTURE_2D, 0, 0, h, e, u - h + 1, c.RG, c.FLOAT, o, p), i.fill(0, h, u + 1), h = u;
    }
  }
  dispose() {
    this.sim.unwatchGlow(this.glowDirty);
    for (const t of ["position", "aGlow", "aTissue", "aSeed", "aDepth"]) this.somaGeometry.deleteAttribute(t);
    this.somaGeometry.dispose(), this.neuriteGeometry.dispose(), this.somaMaterial.dispose(), this.neuriteMaterial.dispose(), this.somaDepthMaterial.dispose(), this.neuriteDepthMaterial.dispose(), this.links.dispose(), this.nodeGlow.dispose();
  }
}
class E0 extends Ki {
  layer = null;
  camera;
  timer;
  density;
  quad;
  clearColor = new Mt();
  fullWidth = 1;
  fullHeight = 1;
  /** Density resolution as a share of the frame's. */
  scale = 1;
  constructor(t, e) {
    super(), this.camera = t, this.timer = e, this.needsSwap = !1, this.density = new Ge(1, 1, {
      type: je,
      minFilter: Re,
      magFilter: Re,
      depthBuffer: !0
    }), this.quad = new js(
      new te({
        uniforms: {
          tDensity: { value: this.density.texture },
          uBody: { value: 0.32 },
          uRim: { value: 0.95 }
        },
        vertexShader: (
          /* glsl */
          `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `
        ),
        fragmentShader: w0,
        ...Nc
      })
    );
  }
  setSize(t, e) {
    this.fullWidth = Math.max(1, t), this.fullHeight = Math.max(1, e), this.resizeDensity();
  }
  resizeDensity() {
    this.density.setSize(
      Math.max(1, Math.round(this.fullWidth * this.scale)),
      Math.max(1, Math.round(this.fullHeight * this.scale))
    );
  }
  /**
   * Density is a smooth field and the threshold is applied after it is
   * upsampled, so edges stay crisp at reduced resolution as long as cells
   * stay a few density pixels across; small ones alias or drop below the
   * threshold. So the resolution is the lowest (down to half, a quarter of
   * the pixels) that keeps a typical cell MIN_CELL_PX in radius, in steps
   * of 1/8 so zooming does not reallocate the target every frame.
   */
  fitScale(t) {
    const e = t.typicalRadiusPx(this.camera, this.fullHeight), i = Math.min(1, Math.max(0.5, x0 / Math.max(e, 1e-3))), s = Math.ceil(i * 8) / 8;
    s !== this.scale && (this.scale = s, this.resizeDensity());
  }
  /** Pins the density resolution (a share of the frame's); null fits it to the cells. */
  setResolution(t) {
    this.fixedScale = t !== null, t !== null && t !== this.scale && (this.scale = Math.min(1, Math.max(0.25, t)), this.resizeDensity());
  }
  fixedScale = !1;
  /** How bright the cells' interiors and membranes are. */
  setBrightness(t, e) {
    const i = this.quad.material.uniforms;
    i.uBody.value = t, i.uRim.value = e;
  }
  render(t, e, i) {
    if (!this.layer) return;
    this.timer.begin("membranes"), this.fixedScale || this.fitScale(this.layer), this.layer.update(t, this.camera, this.density.width, this.density.height);
    const s = t.autoClear;
    t.autoClear = !1, t.getClearColor(this.clearColor);
    const r = t.getClearAlpha();
    t.setRenderTarget(this.density), t.setClearColor(0, 0), t.clear(!0, !0, !1), t.render(this.layer.depthScene, this.camera), t.render(this.layer.scene, this.camera), t.setRenderTarget(this.renderToScreen ? null : i), t.setClearColor(this.clearColor, r), this.quad.render(t), t.autoClear = s, this.timer.end();
  }
  dispose() {
    this.density.dispose(), this.quad.material.dispose(), this.quad.dispose();
  }
}
function T0(n) {
  if (n.length === 0) return 0;
  const t = Math.min(4096, n.length), e = n.length / t, i = new Float32Array(t);
  for (let s = 0; s < t; s++) i[s] = n[Math.floor(s * e)];
  return i.sort(), i[t >> 1];
}
function L0(n, t) {
  const e = Math.sin(n * 78.233 + t * 12.9898) * 43758.5453;
  return e - Math.floor(e);
}
function R0(n, t) {
  const { fraction: e, linksPerSoma: i = 3, maxLength: s = 0.16, seed: r = 1 } = t, o = t.maxHops ?? Math.min(10, Math.max(2, Math.ceil(2.2 * Math.cbrt(1 / Math.max(1e-4, e))))), a = n.nodeCount, l = new Uint8Array(a), c = [];
  for (let M = 0; M < a; M++)
    (e >= 1 || L0(M, r) < e) && (l[M] = 1, c.push(M));
  const { positions: h, adjOffset: u, adjPeer: p } = n, g = new Int32Array(a).fill(-1);
  let v = [], m = [];
  const f = [], d = /* @__PURE__ */ new Set(), y = [], S = s * s;
  for (const M of c) {
    f.length = 0, v.length = 0, v.push(M), g[M] = M;
    for (let E = 0; E < o && v.length > 0 && f.length < i * 2; E++) {
      m.length = 0;
      for (const _ of v)
        for (let w = u[_]; w < u[_ + 1]; w++) {
          const P = p[w];
          if (g[P] !== M && (g[P] = M, m.push(P), l[P])) {
            const j = h[P * 3] - h[M * 3], C = h[P * 3 + 1] - h[M * 3 + 1], I = h[P * 3 + 2] - h[M * 3 + 2], H = j * j + C * C + I * I;
            H <= S && f.push({ node: P, d2: H });
          }
        }
      [v, m] = [m, v];
    }
    f.sort((E, _) => E.d2 - _.d2 || E.node - _.node);
    for (let E = 0; E < Math.min(i, f.length); E++) {
      const _ = f[E].node, w = Math.min(M, _), P = Math.max(M, _), j = w * a + P;
      d.has(j) || (d.add(j), y.push(w, P));
    }
  }
  return { somas: Uint32Array.from(c), links: Uint32Array.from(y) };
}
const D0 = (
  /* glsl */
  `
  attribute float aDepth;
  attribute vec2 aGlow;
  attribute float aSeed;
  attribute vec3 aTissue;

  uniform float uSize;
  uniform float uViewportScale;
  uniform float uTime;
  uniform float uGlowHalfLife;
  uniform float uBreath;
  uniform float uDim;
  uniform int uHover;

  ${Kn}

  varying vec3 vColor;
  varying float vGlow;

  void main() {
    // A slow, per-point drift. Barely visible on any one dot; collectively it
    // keeps the mass from looking like a frozen render.
    float phase = aSeed * 6.2831853;
    vec3 pos = position + normalize(position + 0.0001) *
               sin(uTime * 0.35 + phase) * 0.0035 * uBreath;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    // glow = peak * 0.5^(elapsed / half-life), floored to zero like the sim.
    float act = aGlow.x * exp2(-max(0.0, uTime - aGlow.y) / uGlowHalfLife);
    act = act < GLOW_FLOOR ? 0.0 : act;
    // The pointer gets a lift so it has something to aim at before firing.
    if (gl_VertexID == uHover) act += 0.75;
    act = clamp(act, 0.0, 1.0);

    // Deep points are smaller and dimmer: the surface should read first.
    // uSize is a pixel size at one unit of distance, on a reference 800px-tall
    // viewport. uViewportScale carries resolution and device pixel ratio, so
    // the cloud looks the same on a laptop and on a phone.
    float depthFade = mix(1.0, 0.42, aDepth);
    float size = uSize * depthFade * (0.72 + 0.5 * aSeed) * (1.0 + 3.2 * act);
    gl_PointSize = clamp(size * uViewportScale / max(0.08, -mv.z), 0.6, 96.0);

    vec3 rest = aTissue * (0.55 + 0.45 * (1.0 - aDepth)) * uDim;
    // Cubic on the white mix: a firing node reaches cyan quickly but only
    // the very hottest go all the way to white, which keeps the crest of a
    // wave from flattening into one solid blob.
    vColor = mix(rest, mix(SIGNAL, SIGNAL_CORE, act * act * act), act);
    // The far side recedes, firing or not.
    vColor *= depthCue(mv.z);
    vGlow = act;
  }
`
), B0 = (
  /* glsl */
  `
  varying vec3 vColor;
  varying float vGlow;

  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;

    // Soft disc plus a tight core, so firing nodes get a visible hot centre.
    float disc = pow(1.0 - r, 1.9);
    float core = pow(max(0.0, 1.0 - r * 2.4), 3.0);
    float alpha = disc * (0.42 + 0.58 * vGlow) + core * (0.3 + 1.6 * vGlow);

    gl_FragColor = vec4(vColor * (1.0 + 1.1 * vGlow), alpha);
  }
`
), Hl = 42;
class P0 {
  points;
  geometry;
  material;
  glow;
  tissue;
  regions;
  sim;
  constructor(t, e, i = {}) {
    const { size: s = 4.8 } = i, r = t.nodeCount;
    this.sim = e;
    const o = new Ae();
    o.setAttribute("position", new ae(t.positions, 3)), o.setAttribute("aDepth", new ae(t.depth, 1));
    const a = new Float32Array(r);
    for (let u = 0; u < r; u++) {
      const p = Math.sin(u * 12.9898) * 43758.5453;
      a[u] = p - Math.floor(p);
    }
    const l = new Float32Array(r * 3);
    Hs(t.region, l, 3), this.regions = t.region, this.tissue = new ae(l, 3), o.setAttribute("aSeed", new ae(a, 1)), o.setAttribute("aTissue", this.tissue), this.glow = new ae(e.glow, 2), this.glow.setUsage(Do), o.setAttribute("aGlow", this.glow), o.computeBoundingSphere(), this.geometry = o;
    const { signal: c, signalCore: h } = Mi;
    this.material = new te({
      vertexShader: D0.replace(/SIGNAL_CORE/g, zl(h)).replace(/SIGNAL/g, zl(c)).replace(/GLOW_FLOOR/g, Bc.toFixed(6)),
      fragmentShader: B0,
      uniforms: {
        uSize: { value: s },
        uViewportScale: { value: 1 },
        uTime: { value: 0 },
        uGlowHalfLife: { value: 0.65 },
        uBreath: { value: 1 },
        uDim: { value: 1 },
        uHover: { value: -1 },
        ...xi
      },
      transparent: !0,
      depthWrite: !1,
      blending: fn
    }), this.points = new No(o, this.material), this.points.frustumCulled = !1;
  }
  /** Uploads the glow entries that changed and advances the shader clock. */
  update(t = -1) {
    a0(this.glow, this.sim.glowDirty);
    const e = this.material.uniforms;
    e.uTime.value = this.sim.now, e.uGlowHalfLife.value = Math.max(0.01, this.sim.params.glow), e.uHover.value = t;
  }
  /** Keeps dots the same apparent size across resolutions and screen heights. */
  /**
   * Point sizes are in pixels, which perspective division alone would keep
   * at the same size whatever the field of view; scaling by the projection
   * keeps dots in proportion to the brain when the fov changes.
   */
  setViewport(t, e, i = Hl) {
    const s = Math.tan(Hl * Math.PI / 360) / Math.tan(i * Math.PI / 360);
    this.material.uniforms.uViewportScale.value = t * (e / 800) * s;
  }
  /** Picks up a new brain colour (see setBrainColor). */
  refreshTissue() {
    Hs(this.regions, this.tissue.array, 3), this.tissue.needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function zl(n) {
  return `vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`;
}
const yn = {
  dark: "#04040a",
  light: "#f3f1ec"
}, Gn = {
  dark: "#3d4a8f",
  light: "#5465c4"
}, U0 = (
  /* glsl */
  `
  uniform sampler2D tDiffuse;
  uniform vec3 uBackground;  // linear
  uniform bool uLight;
  uniform bool uTransparent;
  uniform float uInk;        // how quickly brightness turns into full ink
  uniform vec3 uDeepInk;     // what white-hot light becomes on paper
  varying vec2 vUv;

  vec3 toSRGB(vec3 c) {
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }

  vec4 compose(vec3 e);

  void main() {
    vec4 c = compose(texture2D(tDiffuse, vUv).rgb);
    gl_FragColor = vec4(toSRGB(c.rgb), c.a);
  }

  vec4 compose(vec3 e) {
    float peak = max(e.r, max(e.g, e.b));

    if (!uLight) {
      // Transparent: premultiplied, the light itself, covering as much as
      // it is bright.
      return uTransparent ? vec4(e, clamp(peak, 0.0, 1.0)) : vec4(uBackground + e, 1.0);
    }

    float lum = dot(e, vec3(0.2126, 0.7152, 0.0722));
    // A gamma below 1: dim resting tissue still lays down visible ink, as it
    // stays visible against the dark ground, while firing saturates.
    float cover = 1.0 - exp(-pow(lum, 0.55) * uInk);
    // The light's hue at full value, and how close to white it is.
    vec3 hue = e / max(peak, 1e-4);
    float white = min(e.r, min(e.g, e.b)) / max(peak, 1e-4);
    // Denser ink is darker; white-hot light becomes the deep signal ink.
    vec3 ink = mix(hue * mix(0.8, 0.35, cover), uDeepInk, white * white * smoothstep(0.3, 0.9, cover));
    return uTransparent ? vec4(ink * cover, cover) : vec4(mix(uBackground, ink, cover), 1.0);
  }
`
);
class F0 extends Ki {
  quad;
  material;
  constructor() {
    super(), this.material = new te({
      uniforms: {
        tDiffuse: { value: null },
        uBackground: { value: new Mt(yn.dark) },
        uLight: { value: !1 },
        uTransparent: { value: !1 },
        uInk: { value: 3 },
        uDeepInk: { value: new Mt("#0b2f7a") }
      },
      vertexShader: (
        /* glsl */
        `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `
      ),
      fragmentShader: U0,
      blending: Ke,
      depthTest: !1,
      depthWrite: !1
    }), this.quad = new js(this.material);
  }
  /** `background` is a CSS colour; it is ignored when transparent. */
  set(t, e, i) {
    const s = this.material.uniforms;
    s.uLight.value = t === "light", s.uTransparent.value = i, s.uBackground.value.set(e);
  }
  render(t, e, i) {
    this.material.uniforms.tDiffuse.value = i.texture, t.setRenderTarget(this.renderToScreen ? null : e), this.quad.render(t);
  }
  dispose() {
    this.material.dispose(), this.quad.dispose();
  }
}
class N0 {
  grid;
  positions;
  stamp;
  generation = 0;
  /** Largest pick threshold this grid answers exactly. */
  maxThreshold;
  constructor(t, e, i = 0.05) {
    this.positions = t;
    const s = Math.max(Dl.cellFor(t, e, 8), i / 0.95);
    this.grid = new Dl(t, e, s), this.stamp = new Uint32Array(this.grid.start.length - 1), this.maxThreshold = i;
  }
  /** Index of the picked node, or -1. `ray` is in the cloud's local space. */
  pick(t, e) {
    const { grid: i, positions: s } = this, r = e * e, o = t.origin, a = t.direction, l = i.cell;
    let c = 0, h = 1 / 0;
    for (let d = 0; d < 3; d = d + 1) {
      const y = i.min[d] - l, S = i.min[d] + i.dims[d] * l + l, M = d === 0 ? o.x : d === 1 ? o.y : o.z, E = d === 0 ? a.x : d === 1 ? a.y : a.z;
      if (Math.abs(E) < 1e-12) {
        if (M < y || M > S) return -1;
        continue;
      }
      let _ = (y - M) / E, w = (S - M) / E;
      if (_ > w) {
        const P = _;
        _ = w, w = P;
      }
      if (c = Math.max(c, _), h = Math.min(h, w), c > h) return -1;
    }
    ++this.generation === 4294967295 && (this.stamp.fill(0), this.generation = 1);
    const u = this.generation, [p, g] = i.dims;
    let v = -1, m = 1 / 0;
    const f = l * 0.5;
    for (let d = c; d <= h + f && !(d - 2 * l > m); d += f) {
      const y = i.coord(o.x + a.x * d, 0), S = i.coord(o.y + a.y * d, 1), M = i.coord(o.z + a.z * d, 2);
      for (let E = M - 1; E <= M + 1; E++)
        if (!(E < 0 || E >= i.dims[2])) {
          for (let _ = S - 1; _ <= S + 1; _++)
            if (!(_ < 0 || _ >= g))
              for (let w = y - 1; w <= y + 1; w++) {
                if (w < 0 || w >= p) continue;
                const P = w + p * (_ + g * E);
                if (this.stamp[P] !== u) {
                  this.stamp[P] = u;
                  for (let j = i.start[P], C = i.start[P + 1]; j < C; j++) {
                    const I = i.items[j], H = s[I * 3] - o.x, k = s[I * 3 + 1] - o.y, V = s[I * 3 + 2] - o.z, X = H * a.x + k * a.y + V * a.z;
                    if (X < 0) continue;
                    const F = H - a.x * X, Q = k - a.y * X, O = V - a.z * X;
                    F * F + Q * Q + O * O > r || X < m && (m = X, v = I);
                  }
                }
              }
        }
    }
    return v;
  }
}
const G0 = (
  /* glsl */
  `
  ${ia}
  uniform float uTime;
  uniform float uCometLength;
  ${Kn}

  // Two vertices per pulse: even ids at the firing end, odd at the receiving.
  attribute vec2 aEnds;    // from node, to node
  attribute vec3 aTiming;  // start time, duration, amplitude

  varying float vT;
  varying float vHead;
  varying float vAmp;
  varying float vSpan;
  varying float vCue;

  void main() {
    vec3 a = nodePosition(aEnds.x).xyz;
    vec3 b = nodePosition(aEnds.y).xyz;
    vT = float(gl_VertexID & 1);
    vHead = clamp((uTime - aTiming.x) / aTiming.y, 0.0, 1.0);
    vAmp = aTiming.z;
    // Comet length in the edge's own 0..1 parameter space, so a long tract
    // gets a long streak and a short synapse a compact spark.
    vSpan = min(1.0, uCometLength / max(1e-4, length(b - a)));
    vec4 mv = modelViewMatrix * vec4(mix(a, b, vT), 1.0);
    vCue = depthCue(mv.z);
    gl_Position = projectionMatrix * mv;
  }
`
), O0 = (
  /* glsl */
  `
  uniform vec3 uColor;
  uniform float uIntensity;

  varying float vT;
  varying float vHead;
  varying float vAmp;
  varying float vSpan;
  varying float vCue;

  void main() {
    // Bright head at the signal's current position along the wire...
    float d = (vT - vHead) / max(0.02, vSpan);
    float head = exp(-d * d * 4.0);

    // ...and an exponential tail trailing behind it.
    float behind = max(0.0, vHead - vT) / max(0.02, vSpan * 3.0);
    float tail = exp(-behind) * step(vT, vHead) * 0.55;

    float glow = (head + tail) * vAmp * uIntensity * vCue;
    if (glow < 0.004) discard;

    gl_FragColor = vec4(uColor * glow, clamp(glow, 0.0, 1.0));
  }
`
);
class k0 {
  lines;
  material;
  geometry;
  sim;
  // Per vertex (two per pulse slot): [from, to] and [start, duration, amp].
  ends;
  timing;
  constructor(t, e, i = {}) {
    const { cometLength: s = 0.055, intensity: r = 1.2 } = i;
    this.sim = t;
    const o = t.pulses.capacity, a = new Ae();
    a.setAttribute("position", sa(o * 2)), this.ends = new ae(new Float32Array(o * 2 * 2), 2), this.timing = new ae(new Float32Array(o * 2 * 3), 3), this.ends.setUsage(Do), this.timing.setUsage(Do), a.setAttribute("aEnds", this.ends), a.setAttribute("aTiming", this.timing), a.setDrawRange(0, 0), zs(a, t.graph.bounds), this.geometry = a, this.material = new te({
      vertexShader: G0,
      fragmentShader: O0,
      uniforms: {
        ...e.uniforms(),
        uTime: { value: 0 },
        uCometLength: { value: s },
        uColor: { value: Mi.pulse.clone() },
        uIntensity: { value: r },
        ...xi
      },
      transparent: !0,
      depthWrite: !1,
      blending: fn
    }), this.lines = new Mc(a, this.material), this.lines.frustumCulled = !1;
  }
  update() {
    const t = this.sim.pulses, e = this.ends.array, i = this.timing.array, s = (a, l) => {
      for (let c = a; c < a + l; c++)
        for (let h = 0; h < 2; h++) {
          const u = c * 2 + h;
          e[u * 2] = t.ends[c * 2], e[u * 2 + 1] = t.ends[c * 2 + 1], i[u * 3] = t.timing[c * 3], i[u * 3 + 1] = t.timing[c * 3 + 1], i[u * 3 + 2] = t.timing[c * 3 + 2];
        }
    }, r = [], o = t.dirty.drain((a, l) => {
      s(a, l), r.push(a, l);
    });
    if (o === "all" && s(0, t.count), o !== "none") {
      for (let a = 0; a < r.length; a += 2)
        this.ends.addUpdateRange(r[a] * 4, r[a + 1] * 4), this.timing.addUpdateRange(r[a] * 6, r[a + 1] * 6);
      this.ends.needsUpdate = !0, this.timing.needsUpdate = !0;
    }
    this.geometry.setDrawRange(0, t.count * 2), this.material.uniforms.uTime.value = this.sim.now;
  }
  setIntensity(t) {
    this.material.uniforms.uIntensity.value = t;
  }
  setCometLength(t) {
    this.material.uniforms.uCometLength.value = t;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */
class qe {
  constructor(t, e, i, s, r = "div") {
    this.parent = t, this.object = e, this.property = i, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement(r), this.domElement.classList.add("controller"), this.domElement.classList.add(s), this.$name = document.createElement("div"), this.$name.classList.add("name"), qe.nextNameID = qe.nextNameID || 0, this.$name.id = `lil-gui-name-${++qe.nextNameID}`, this.$widget = document.createElement("div"), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (o) => o.stopPropagation()), this.domElement.addEventListener("keyup", (o) => o.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(i);
  }
  /**
   * Sets the name of the controller and its label in the GUI.
   * @param {string} name
   * @returns {this}
   */
  name(t) {
    return this._name = t, this.$name.textContent = t, this;
  }
  /**
   * Pass a function to be called whenever the value is modified by this controller.
   * The function receives the new value as its first parameter. The value of `this` will be the
   * controller.
   *
   * For function controllers, the `onChange` callback will be fired on click, after the function
   * executes.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onChange( function( v ) {
   * 	console.log( 'The value is now ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  /**
   * Calls the onChange methods of this controller and its parent GUI.
   * @protected
   */
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0;
  }
  /**
   * Pass a function to be called after this controller has been modified and loses focus.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onFinishChange( function( v ) {
   * 	console.log( 'Changes complete: ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  /**
   * Should be called by Controller when its widgets lose focus.
   * @protected
   */
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
  }
  /**
   * Sets the controller back to its initial value.
   * @returns {this}
   */
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  /**
   * Enables this controller.
   * @param {boolean} enabled
   * @returns {this}
   * @example
   * controller.enable();
   * controller.enable( false ); // disable
   * controller.enable( controller._disabled ); // toggle
   */
  enable(t = !0) {
    return this.disable(!t);
  }
  /**
   * Disables this controller.
   * @param {boolean} disabled
   * @returns {this}
   * @example
   * controller.disable();
   * controller.disable( false ); // enable
   * controller.disable( !controller._disabled ); // toggle
   */
  disable(t = !0) {
    return t === this._disabled ? this : (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t), this);
  }
  /**
   * Shows the Controller after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * controller.show();
   * controller.show( false ); // hide
   * controller.show( controller._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the Controller.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  /**
   * Changes this controller into a dropdown of options.
   *
   * Calling this method on an option controller will simply update the options. However, if this
   * controller was not already an option controller, old references to this controller are
   * destroyed, and a new controller is added to the end of the GUI.
   * @example
   * // safe usage
   *
   * gui.add( obj, 'prop1' ).options( [ 'a', 'b', 'c' ] );
   * gui.add( obj, 'prop2' ).options( { Big: 10, Small: 1 } );
   * gui.add( obj, 'prop3' );
   *
   * // danger
   *
   * const ctrl1 = gui.add( obj, 'prop1' );
   * gui.add( obj, 'prop2' );
   *
   * // calling options out of order adds a new controller to the end...
   * const ctrl2 = ctrl1.options( [ 'a', 'b', 'c' ] );
   *
   * // ...and ctrl1 now references a controller that doesn't exist
   * assert( ctrl2 !== ctrl1 )
   * @param {object|Array} options
   * @returns {Controller}
   */
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  /**
   * Sets the minimum value. Only works on number controllers.
   * @param {number} min
   * @returns {this}
   */
  min(t) {
    return this;
  }
  /**
   * Sets the maximum value. Only works on number controllers.
   * @param {number} max
   * @returns {this}
   */
  max(t) {
    return this;
  }
  /**
   * Values set by this controller will be rounded to multiples of `step`. Only works on number
   * controllers.
   * @param {number} step
   * @returns {this}
   */
  step(t) {
    return this;
  }
  /**
   * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
   * like `step()`. Only works on number controllers.
   * @example
   * gui.add( object, 'property' ).listen().decimals( 4 );
   * @param {number} decimals
   * @returns {this}
   */
  decimals(t) {
    return this;
  }
  /**
   * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
   * @param {boolean} listen
   * @returns {this}
   */
  listen(t = !0) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  /**
   * Returns `object[ property ]`.
   * @returns {any}
   */
  getValue() {
    return this.object[this.property];
  }
  /**
   * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
   * @param {any} value
   * @returns {this}
   */
  setValue(t) {
    return this.getValue() !== t && (this.object[this.property] = t, this._callOnChange(), this.updateDisplay()), this;
  }
  /**
   * Updates the display to keep it in sync with the current value. Useful for updating your
   * controllers when their values have been modified outside of the GUI.
   * @returns {this}
   */
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  /**
   * Destroys this controller and removes it from the parent GUI.
   */
  destroy() {
    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class H0 extends qe {
  constructor(t, e, i) {
    super(t, e, i, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function Ho(n) {
  let t, e;
  return (t = n.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), e ? "#" + e : !1;
}
const z0 = {
  isPrimitive: !0,
  match: (n) => typeof n == "string",
  fromHexString: Ho,
  toHexString: Ho
}, On = {
  isPrimitive: !0,
  match: (n) => typeof n == "number",
  fromHexString: (n) => parseInt(n.substring(1), 16),
  toHexString: (n) => "#" + n.toString(16).padStart(6, 0)
}, V0 = {
  isPrimitive: !1,
  // The arrow function is here to appease tree shakers like esbuild or webpack.
  // See https://esbuild.github.io/api/#tree-shaking
  match: (n) => Array.isArray(n),
  fromHexString(n, t, e = 1) {
    const i = On.fromHexString(n);
    t[0] = (i >> 16 & 255) / 255 * e, t[1] = (i >> 8 & 255) / 255 * e, t[2] = (i & 255) / 255 * e;
  },
  toHexString([n, t, e], i = 1) {
    i = 255 / i;
    const s = n * i << 16 ^ t * i << 8 ^ e * i << 0;
    return On.toHexString(s);
  }
}, K0 = {
  isPrimitive: !1,
  match: (n) => Object(n) === n,
  fromHexString(n, t, e = 1) {
    const i = On.fromHexString(n);
    t.r = (i >> 16 & 255) / 255 * e, t.g = (i >> 8 & 255) / 255 * e, t.b = (i & 255) / 255 * e;
  },
  toHexString({ r: n, g: t, b: e }, i = 1) {
    i = 255 / i;
    const s = n * i << 16 ^ t * i << 8 ^ e * i << 0;
    return On.toHexString(s);
  }
}, W0 = [z0, On, V0, K0];
function Y0(n) {
  return W0.find((t) => t.match(n));
}
class X0 extends qe {
  constructor(t, e, i, s) {
    super(t, e, i, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = Y0(this.initialValue), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const r = Ho(this.$text.value);
      r && this._setValueFromHexString(r);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = !0, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else
      this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class Vr extends qe {
  constructor(t, e, i) {
    super(t, e, i, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (s) => {
      s.preventDefault(), this.getValue().call(this.object), this._callOnChange();
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$disable = this.$button;
  }
}
class Z0 extends qe {
  constructor(t, e, i, s, r, o) {
    super(t, e, i, "number"), this._initInput(), this.min(s), this.max(r);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = !0) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = e * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = () => {
      let y = parseFloat(this.$input.value);
      isNaN(y) || (this._stepExplicit && (y = this._snap(y)), this.setValue(this._clamp(y)));
    }, i = (y) => {
      const S = parseFloat(this.$input.value);
      isNaN(S) || (this._snapClampSetValue(S + y), this.$input.value = this.getValue());
    }, s = (y) => {
      y.key === "Enter" && this.$input.blur(), y.code === "ArrowUp" && (y.preventDefault(), i(this._step * this._arrowKeyMultiplier(y))), y.code === "ArrowDown" && (y.preventDefault(), i(this._step * this._arrowKeyMultiplier(y) * -1));
    }, r = (y) => {
      this._inputFocused && (y.preventDefault(), i(this._step * this._normalizeMouseWheel(y)));
    };
    let o = !1, a, l, c, h, u;
    const p = 5, g = (y) => {
      a = y.clientX, l = c = y.clientY, o = !0, h = this.getValue(), u = 0, window.addEventListener("mousemove", v), window.addEventListener("mouseup", m);
    }, v = (y) => {
      if (o) {
        const S = y.clientX - a, M = y.clientY - l;
        Math.abs(M) > p ? (y.preventDefault(), this.$input.blur(), o = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(S) > p && m();
      }
      if (!o) {
        const S = y.clientY - c;
        u -= S * this._step * this._arrowKeyMultiplier(y), h + u > this._max ? u = this._max - h : h + u < this._min && (u = this._min - h), this._snapClampSetValue(h + u);
      }
      c = y.clientY;
    }, m = () => {
      this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", m);
    }, f = () => {
      this._inputFocused = !0;
    }, d = () => {
      this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    };
    this.$input.addEventListener("input", e), this.$input.addEventListener("keydown", s), this.$input.addEventListener("wheel", r, { passive: !1 }), this.$input.addEventListener("mousedown", g), this.$input.addEventListener("focus", f), this.$input.addEventListener("blur", d);
  }
  _initSlider() {
    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const t = (d, y, S, M, E) => (d - y) / (S - y) * (E - M) + M, e = (d) => {
      const y = this.$slider.getBoundingClientRect();
      let S = t(d, y.left, y.right, this._min, this._max);
      this._snapClampSetValue(S);
    }, i = (d) => {
      this._setDraggingStyle(!0), e(d.clientX), window.addEventListener("mousemove", s), window.addEventListener("mouseup", r);
    }, s = (d) => {
      e(d.clientX);
    }, r = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", r);
    };
    let o = !1, a, l;
    const c = (d) => {
      d.preventDefault(), this._setDraggingStyle(!0), e(d.touches[0].clientX), o = !1;
    }, h = (d) => {
      d.touches.length > 1 || (this._hasScrollBar ? (a = d.touches[0].clientX, l = d.touches[0].clientY, o = !0) : c(d), window.addEventListener("touchmove", u, { passive: !1 }), window.addEventListener("touchend", p));
    }, u = (d) => {
      if (o) {
        const y = d.touches[0].clientX - a, S = d.touches[0].clientY - l;
        Math.abs(y) > Math.abs(S) ? c(d) : (window.removeEventListener("touchmove", u), window.removeEventListener("touchend", p));
      } else
        d.preventDefault(), e(d.touches[0].clientX);
    }, p = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", u), window.removeEventListener("touchend", p);
    }, g = this._callOnFinishChange.bind(this), v = 400;
    let m;
    const f = (d) => {
      if (Math.abs(d.deltaX) < Math.abs(d.deltaY) && this._hasScrollBar) return;
      d.preventDefault();
      const S = this._normalizeMouseWheel(d) * this._step;
      this._snapClampSetValue(this.getValue() + S), this.$input.value = this.getValue(), clearTimeout(m), m = setTimeout(g, v);
    };
    this.$slider.addEventListener("mousedown", i), this.$slider.addEventListener("touchstart", h, { passive: !1 }), this.$slider.addEventListener("wheel", f, { passive: !1 });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle(`lil-gui-${e}`, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: i } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, i = -t.wheelDelta / 120, i *= this._stepExplicit ? 1 : 10), e + -i;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step;
    return parseFloat(e.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Q0 extends qe {
  constructor(t, e, i, s) {
    super(t, e, i, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(s);
  }
  options(t) {
    return this._values = Array.isArray(t) ? t : Object.values(t), this._names = Array.isArray(t) ? t : Object.keys(t), this.$select.replaceChildren(), this._names.forEach((e) => {
      const i = document.createElement("option");
      i.textContent = e, this.$select.appendChild(i);
    }), this.updateDisplay(), this;
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.textContent = e === -1 ? t : this._names[e], this;
  }
}
class j0 extends qe {
  constructor(t, e, i) {
    super(t, e, i, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (s) => {
      s.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
const q0 = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function J0(n) {
  const t = document.createElement("style");
  t.innerHTML = n;
  const e = document.querySelector("head link[rel=stylesheet], head style");
  e ? document.head.insertBefore(t, e) : document.head.appendChild(t);
}
let Vl = !1;
class ra {
  /**
   * Creates a panel that holds controllers.
   * @example
   * new GUI();
   * new GUI( { container: document.getElementById( 'custom' ) } );
   *
   * @param {object} [options]
   * @param {boolean} [options.autoPlace=true]
   * Adds the GUI to `document.body` and fixes it to the top right of the page.
   *
   * @param {HTMLElement} [options.container]
   * Adds the GUI to this DOM element. Overrides `autoPlace`.
   *
   * @param {number} [options.width=245]
   * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
   * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`.
   *
   * @param {string} [options.title=Controls]
   * Name to display in the title bar.
   *
   * @param {boolean} [options.closeFolders=false]
   * Pass `true` to close all folders in this GUI by default.
   *
   * @param {boolean} [options.injectStyles=true]
   * Injects the default stylesheet into the page if this is the first GUI.
   * Pass `false` to use your own stylesheet.
   *
   * @param {number} [options.touchStyles=true]
   * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
   *
   * @param {GUI} [options.parent]
   * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
   *
   */
  constructor({
    parent: t,
    autoPlace: e = t === void 0,
    container: i,
    width: s,
    title: r = "Controls",
    closeFolders: o = !1,
    injectStyles: a = !0,
    touchStyles: l = !0
  } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (c) => {
      (c.code === "Enter" || c.code === "Space") && (c.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"), l && this.domElement.classList.add("allow-touch-styles"), !Vl && a && (J0(q0), Vl = !0), i ? i.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this._closeFolders = o;
  }
  /**
   * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
   * @example
   * gui.add( object, 'property' );
   * gui.add( object, 'number', 0, 100, 1 );
   * gui.add( object, 'options', [ 1, 2, 3 ] );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
   * selectable values for a dropdown.
   * @param {number} [max] Maximum value for number controllers.
   * @param {number} [step] Step value for number controllers.
   * @returns {Controller}
   */
  add(t, e, i, s, r) {
    if (Object(i) === i)
      return new Q0(this, t, e, i);
    const o = t[e];
    switch (typeof o) {
      case "number":
        return new Z0(this, t, e, i, s, r);
      case "boolean":
        return new H0(this, t, e);
      case "string":
        return new j0(this, t, e);
      case "function":
        return new Vr(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, o);
  }
  /**
   * Adds a color controller to the GUI.
   * @example
   * params = {
   * 	cssColor: '#ff00ff',
   * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
   * 	customRange: [ 0, 127, 255 ],
   * };
   *
   * gui.addColor( params, 'cssColor' );
   * gui.addColor( params, 'rgbColor' );
   * gui.addColor( params, 'customRange', 255 );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
   * need to set this to 255 if your colors are too bright.
   * @returns {Controller}
   */
  addColor(t, e, i = 1) {
    return new X0(this, t, e, i);
  }
  /**
   * Adds a folder to the GUI, which is just another GUI. This method returns
   * the nested GUI so you can add controllers to it.
   * @example
   * const folder = gui.addFolder( 'Position' );
   * folder.add( position, 'x' );
   * folder.add( position, 'y' );
   * folder.add( position, 'z' );
   *
   * @param {string} title Name to display in the folder's title bar.
   * @returns {GUI}
   */
  addFolder(t) {
    const e = new ra({ parent: this, title: t });
    return this.root._closeFolders && e.close(), e;
  }
  /**
   * Recalls values that were saved with `gui.save()`.
   * @param {object} obj
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  load(t, e = !0) {
    return t.controllers && this.controllers.forEach((i) => {
      i instanceof Vr || i._name in t.controllers && i.load(t.controllers[i._name]);
    }), e && t.folders && this.folders.forEach((i) => {
      i._title in t.folders && i.load(t.folders[i._title]);
    }), this;
  }
  /**
   * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
   * recall these values.
   * @example
   * {
   * 	controllers: {
   * 		prop1: 1,
   * 		prop2: 'value',
   * 		...
   * 	},
   * 	folders: {
   * 		folderName1: { controllers, folders },
   * 		folderName2: { controllers, folders }
   * 		...
   * 	}
   * }
   *
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {object}
   */
  save(t = !0) {
    const e = {
      controllers: {},
      folders: {}
    };
    return this.controllers.forEach((i) => {
      if (!(i instanceof Vr)) {
        if (i._name in e.controllers)
          throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);
        e.controllers[i._name] = i.save();
      }
    }), t && this.folders.forEach((i) => {
      if (i._title in e.folders)
        throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);
      e.folders[i._title] = i.save();
    }), e;
  }
  /**
   * Opens a GUI or folder. GUI and folders are open by default.
   * @param {boolean} open Pass false to close.
   * @returns {this}
   * @example
   * gui.open(); // open
   * gui.open( false ); // close
   * gui.open( gui._closed ); // toggle
   */
  open(t = !0) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  /**
   * Closes the GUI.
   * @returns {this}
   */
  close() {
    return this.open(!1);
  }
  _setClosed(t) {
    this._closed !== t && (this._closed = t, this._callOnOpenClose(this));
  }
  /**
   * Shows the GUI after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * gui.show();
   * gui.show( false ); // hide
   * gui.show( gui._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the GUI.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  openAnimated(t = !0) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("transition");
      const i = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", i));
      };
      this.$children.addEventListener("transitionend", i);
      const s = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = s + "px";
      });
    }), this;
  }
  /**
   * Change the title of this GUI.
   * @param {string} title
   * @returns {this}
   */
  title(t) {
    return this._title = t, this.$title.textContent = t, this;
  }
  /**
   * Resets all controllers to their initial values.
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  reset(t = !0) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((i) => i.reset()), this;
  }
  /**
   * Pass a function to be called whenever a controller in this GUI changes.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Pass a function to be called whenever a controller in this GUI has finished changing.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onFinishChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Pass a function to be called when this GUI or its descendants are opened or closed.
   * @param {function(GUI)} callback
   * @returns {this}
   * @example
   * gui.onOpenClose( changedGUI => {
   * 	console.log( changedGUI._closed );
   * } );
   */
  onOpenClose(t) {
    return this._onOpenClose = t, this;
  }
  _callOnOpenClose(t) {
    this.parent && this.parent._callOnOpenClose(t), this._onOpenClose !== void 0 && this._onOpenClose.call(this, t);
  }
  /**
   * Destroys all DOM elements and event listeners associated with this GUI.
   */
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  /**
   * Returns an array of controllers contained by this GUI and its descendents.
   * @returns {Controller[]}
   */
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  /**
   * Returns an array of folders contained by this GUI and its descendents.
   * @returns {GUI[]}
   */
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
const Gi = {
  default: {
    description: "The tuned look: a busy brain of 200,000 neurons, cells on, drifting.",
    settings: {}
  },
  calm: {
    description: "Slow, sparse waves with long afterglow and little idle noise.",
    settings: {
      speed: 0.28,
      glow: 1.8,
      spontaneous: 0.5,
      shimmer: 90,
      pulseIntensity: 1.5,
      cometLength: 0.09,
      bloom: 0.6
    }
  },
  storm: {
    description: "Everything fires: reliable synapses, low threshold, waves that sweep the whole brain.",
    settings: {
      threshold: 0.42,
      gain: 0.7,
      reliability: 0.5,
      speed: 0.8,
      refractory: 0.6,
      range: 3.2,
      spontaneous: 3.5,
      shimmer: 420,
      bloom: 0.4,
      pulseIntensity: 1.1
    }
  },
  paper: {
    description: "Light theme: activity drawn as ink on warm paper.",
    settings: {
      theme: "light",
      background: "#f3f1ec",
      brainColor: "#5465c4",
      bloom: 0.3,
      depth: 0.6,
      spontaneous: 1.5
    }
  },
  wiring: {
    description: "The connectome: no cells, brighter synapses and long signal trails.",
    settings: {
      neurons: !1,
      edgeOpacity: 0.16,
      pointSize: 4.4,
      pulseIntensity: 2.2,
      cometLength: 0.13,
      bloom: 0.55,
      depth: 0.6
    }
  },
  cells: {
    description: "Every neuron a cell, larger and looser, in violet: the gooey, organic look.",
    settings: {
      cellDensity: 1,
      cellSize: 45e-4,
      cellZoom: 0.7,
      pointSize: 3.6,
      brainColor: "#6b4f9a",
      bloom: 0.5
    }
  },
  ember: {
    description: "Warm tissue on a near-black ground, with the cool signal for contrast.",
    settings: {
      brainColor: "#a8552f",
      background: "#0a0605",
      edgeOpacity: 0.04,
      bloom: 0.55,
      depth: 0.75
    }
  },
  afterglow: {
    description: "A near-black brain on black, revealed only by constant chatter and its long afterglow.",
    settings: {
      brainColor: "#0c0e18",
      background: "#000000",
      // Sparkle everywhere draws the outline; chatter adds small bursts,
      // kept local by unreliable synapses and a higher threshold.
      shimmer: 2500,
      spontaneous: 5,
      reliability: 0.35,
      threshold: 0.46,
      glow: 2.6,
      pointSize: 6,
      edgeOpacity: 0.012,
      pulseIntensity: 1.3,
      bloom: 0.5,
      depth: 0.4
    }
  },
  lite: {
    description: "For laptops and phones: 40,000 neurons and fewer cells, same character.",
    settings: {
      nodes: 4e4,
      cellDensity: 0.25,
      restFps: 20,
      bloom: 0.4
    }
  }
}, $0 = Object.keys(Gi), tv = {
  preset: "Curated combinations of settings. Picking one resets everything to the defaults, then applies its own; tweak from there.",
  nodes: "How many neurons make up the brain. More is finer and slower; the other settings are normalised, so behaviour and brightness stay the same.",
  shape: "classic: the original egg with noise folds. anatomical: built from lobes, fissures and named sulci. scan: a real brain, from the MNI ICBM152 template (77 kB, loaded when picked).",
  seed: "Which brain: the same seed always grows the same shape and wiring.",
  foldDepth: "How deep the folds (gyri) cut into the surface. 0 is a smooth brain. Procedural shapes only.",
  foldScale: "How fine the folds are: higher means more, narrower ridges. Procedural shapes only.",
  shell: "Thickness of the surface layer, which is drawn brightest and, with low fill, holds most nodes.",
  fill: "1 spreads nodes evenly through the whole volume; 0 crowds them into the surface layer.",
  minDegree: "Fewest synapses a neuron makes to its neighbours.",
  maxDegree: "Most synapses a neuron makes. Each node picks a random count between min and max.",
  radius: "How far a synapse can reach, as a share of the brain's size.",
  speed: "How fast a signal travels along a synapse.",
  threshold: "Charge a neuron must collect before it fires. Higher makes waves die out sooner.",
  gain: "Charge each arriving signal delivers.",
  decay: "How fast collected charge leaks away when signals stop arriving.",
  refractory: "Seconds a neuron stays silent after firing.",
  reliability: "Chance that a synapse actually passes a signal on.",
  range: "How far a signal travels before fading out completely.",
  glow: "How long a neuron keeps glowing after it fires, in seconds (half-life).",
  spontaneous: "How often, per second, a random neuron fires on its own.",
  shimmer: "Faint idle flicker across the network while nothing is happening.",
  pointSize: "Size of the dots drawn for each neuron.",
  edgeOpacity: "How visible the resting synapses are.",
  pulseIntensity: "Brightness of signals travelling along synapses.",
  cometLength: "Length of the bright tail behind each travelling signal.",
  bloom: "Strength of the soft glow around bright things.",
  theme: "dark: light on a dark ground. light: the same activity as ink on paper. Switching resets the background and brain colour to the theme's own.",
  background: "Colour behind the brain.",
  brainColor: "Resting colour of the brain. The cerebellum and stem keep their tints relative to it; firing stays the signal colour.",
  transparent: "Render with an alpha channel and no background, so the brain sits over whatever page it is embedded in. Turning it on starts a new canvas, keeping the network and your settings (the canvas is opaque otherwise, which is faster).",
  depth: "How much the far side of the brain darkens, so the near side reads in front. Applies to waves too: activation at the back glows dimmer.",
  fov: "Field of view in degrees. Wider exaggerates perspective; the camera moves so the brain keeps its size on screen.",
  autoRotate: "Slowly turn the brain when you are not touching it.",
  restFps: "Frame rate when only the slow drift is moving, to save power. 0 always draws every frame.",
  neurons: "Draw some neurons as gooey cells, joined by neurites that merge like liquid.",
  cellDensity: "Share of neurons drawn as cells.",
  cellSize: "Size of a cell body, as seen from the opening view.",
  cellZoom: "How cells react to zoom: 0 keeps their size in the brain, so they grow as you close in; 1 keeps their size on screen.",
  merge: "Zoomed out, cells merge into one uniform brain shape and the dots and synapses fade into it; zoomed in, it comes apart into single neurons. Starts at the opening view, complete at three times its distance. 0 turns it off.",
  fire: "Fire a random neuron, as if you had clicked it.",
  reset: "Stop every signal and let the network go dark."
};
function ev(n, t, e = {}) {
  const i = new ra({ title: "neuroform", container: e.container });
  i.close();
  let s = () => {
  };
  const r = e.preset, o = { preset: r && Gi[r] ? r : "default" }, a = i.add(o, "preset", [...$0, "custom"]).onChange((M) => {
    Gi[M] && (t.onPreset(M), i.controllersRecursive().forEach((E) => E.updateDisplay()), p(), s(Gi[M].description));
  });
  i.onChange(({ controller: M }) => {
    M !== a && (o.preset = "custom", a.updateDisplay());
  });
  const l = i.addFolder("structure"), c = n.structure;
  l.add(c, "nodes", 2e3, 2e5, 1e3);
  const h = l.add(c, "shape", Om);
  l.add(c, "seed", 1, 999, 1);
  const u = [
    l.add(c, "foldDepth", 0, 0.08, 1e-3).name("fold depth"),
    l.add(c, "foldScale", 2, 16, 0.1).name("fold scale")
  ], p = () => u.forEach((M) => M.enable(c.shape !== "scan"));
  h.onChange(p), p(), l.add(c, "shell", 0.02, 0.14, 2e-3).name("shell"), l.add(c, "fill", 0, 1, 0.05).name("fill volume"), l.add(c, "minDegree", 1, 8, 1).name("min synapses"), l.add(c, "maxDegree", 2, 24, 1).name("max synapses"), l.add(c, "radius", 0.03, 0.16, 2e-3).name("reach"), l.onFinishChange(() => {
    c.maxDegree < c.minDegree && (c.maxDegree = c.minDegree), t.onStructureChange();
  });
  const g = i.addFolder("signal"), v = n.signal;
  g.add(v, "speed", 0.05, 3, 0.01), g.add(v, "threshold", 0.1, 4, 0.05), g.add(v, "gain", 0.05, 2, 0.01), g.add(v, "decay", 0.05, 2, 0.01).name("charge decay"), g.add(v, "refractory", 0.05, 3, 0.01), g.add(v, "reliability", 0, 1, 0.01), g.add(v, "range", 0.1, 6, 0.05).name("signal range"), g.add(v, "glow", 0.05, 3, 0.01).name("afterglow"), g.add(v, "spontaneous", 0, 5, 0.01).name("idle chatter"), g.add(v, "shimmer", 0, 3e3, 10).name("shimmer"), g.onChange(() => t.onSignalChange());
  const m = i.addFolder("look"), f = n.look;
  m.add(f, "pointSize", 0.5, 8, 0.1).name("point size"), m.add(f, "edgeOpacity", 0, 0.3, 2e-3).name("synapse veil"), m.add(f, "pulseIntensity", 0, 4, 0.05).name("pulse glow"), m.add(f, "cometLength", 0.01, 0.3, 5e-3).name("comet length");
  const d = m.add(f, "theme", ["dark", "light"]), y = m.addColor(f, "background"), S = m.addColor(f, "brainColor").name("brain colour");
  return d.onChange((M) => {
    f.background = yn[M], f.brainColor = Gn[M], y.updateDisplay(), S.updateDisplay(), t.onLookChange();
  }), m.add(f, "transparent"), m.add(f, "bloom", 0, 2, 0.02), m.add(f, "depth", 0, 1, 0.01).name("depth fade"), m.add(f, "fov", 15, 90, 1).name("perspective (fov)"), m.add(f, "autoRotate").name("drift"), m.add(f, "restFps", 0, 60, 1).name("resting fps (0 = off)"), m.add(f, "neurons").name("neurons"), m.add(f, "cellDensity", 0.01, 1, 0.01).name("cell density"), m.add(f, "cellSize", 2e-4, 0.01, 1e-4).name("cell size"), m.add(f, "cellZoom", 0, 1, 0.05).name("cells follow zoom"), m.add(f, "merge", 0, 1, 0.05).name("merge when far"), m.onChange(() => t.onLookChange()), i.add({ fire: () => t.onStimulate() }, "fire").name("fire a node"), i.add({ reset: () => t.onReset() }, "reset").name("quiet the network"), s = iv(i), i;
}
function iv(n) {
  const t = "Point at an option to see what it does.", e = document.createElement("div");
  e.className = "panel-help", e.textContent = t, n.$children.appendChild(e);
  for (const i of n.controllersRecursive()) {
    const s = tv[i.property];
    if (!s) continue;
    const r = i.domElement;
    r.title = s;
    const o = () => {
      e.textContent = s;
    };
    r.addEventListener("pointerenter", o), r.addEventListener("focusin", o);
  }
  return n.domElement.addEventListener("pointerleave", () => {
    e.textContent = t;
  }), (i) => {
    e.textContent = i;
  };
}
const nv = "data:application/gzip;base64,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", sv = nv;
function Gc() {
  return {
    structure: {
      nodes: 2e5,
      shape: "scan",
      seed: 7,
      foldDepth: 0.034,
      foldScale: 7.4,
      shell: 0.055,
      fill: 1,
      minDegree: 2,
      maxDegree: 9,
      radius: 0.075
    },
    signal: {
      speed: Le.speed,
      threshold: Le.threshold,
      gain: Le.gain,
      decay: Le.decay,
      refractory: Le.refractory,
      reliability: Le.reliability,
      range: Le.range,
      glow: Le.glow,
      spontaneous: Le.spontaneous,
      shimmer: Le.shimmer
    },
    look: {
      pointSize: 4.8,
      edgeOpacity: 0.032,
      pulseIntensity: 1.2,
      cometLength: 0.055,
      bloom: 0.45,
      autoRotate: !0,
      restFps: 24,
      neurons: !0,
      // Small blobs on every node; the merge is depth-aware, so only nodes
      // that are actually close fuse.
      cellDensity: 0.38,
      cellSize: 3e-3,
      cellZoom: 1,
      depth: 0.7,
      theme: "dark",
      background: yn.dark,
      brainColor: Gn.dark,
      transparent: !1,
      merge: 1,
      fov: 55
    }
  };
}
const Vs = Gc(), oa = Object.fromEntries(
  Object.keys(Vs).flatMap((n) => Object.keys(Vs[n]).map((t) => [t, n]))
), rv = Object.keys(oa);
function Oc(n) {
  return { ...n.structure, ...n.signal, ...n.look };
}
function zo(n, t) {
  const e = oa[n];
  if (!e) return;
  const i = Vs[e][n];
  if (typeof i == "boolean") return !/^(0|false|off|no)$/i.test(t.trim());
  if (typeof i == "number") {
    const s = Number(t);
    return t.trim() !== "" && Number.isFinite(s) ? s : void 0;
  }
  return /^[0-9a-f]{6}$/i.test(t) ? `#${t}` : t;
}
function Is(n, t) {
  const e = { structure: !1, signal: !1, look: !1 }, i = { ...t };
  if (i.theme !== void 0 && i.theme !== n.look.theme) {
    const s = i.theme === "light" ? "light" : "dark";
    i.background ??= yn[s], i.brainColor ??= Gn[s];
  }
  for (const [s, r] of Object.entries(i)) {
    const o = oa[s];
    if (!o || r === void 0) continue;
    const a = n[o];
    let l = r;
    typeof l == "string" && typeof a[s] != "string" && (l = zo(s, l)), typeof l == typeof a[s] && (typeof l == "string" && /^[0-9a-f]{6}$/i.test(l) && (l = `#${l}`), a[s] !== l && (a[s] = l, e[o] = !0));
  }
  return n.look.theme !== "light" && (n.look.theme = "dark"), e;
}
function Ks(n) {
  return { ...Oc(Vs), ...n ? Gi[n]?.settings : void 0 };
}
class ov extends EventTarget {
  canvas;
  scene = new Uo();
  camera;
  renderer;
  /** Whether the canvas has an alpha channel; fixed for its life. */
  alpha;
  /** Draw through the post-processing passes; false draws the scene alone. */
  postprocessing = !0;
  /** Resolves once the first frame is on the canvas. */
  firstRender;
  /** Live settings, grouped. Change them through `set`. */
  state;
  /** The preset the settings started from, if any. */
  preset;
  controls;
  world = new Un();
  composer;
  scenePass;
  membranePass;
  bloom;
  themePass;
  gpuTimer;
  timerMode;
  builder = new n0();
  dataset;
  scanUrl;
  homeDistanceAt42;
  /** Where the camera opens, seen from the target: drifting turns it about y. */
  homeDirection;
  /** How much further back the opening view sits so the brain fits the width too. */
  fit = 1;
  /** Set once the user orbits or zooms; the view is theirs from then on. */
  handled = !1;
  panel = null;
  cleanup = [];
  _graph;
  _sim;
  nodeLayer;
  edgeLayer;
  nodeTextures;
  pulseLayer;
  picker;
  membraneLayer = null;
  /** The cell density the current membrane layer was laid out for. */
  laidOutDensity = -1;
  relayoutTimer = 0;
  /** False until the first network is in place. */
  ready = !1;
  /** Shown in the stats while a rebuild runs; the old network keeps animating. */
  building = !1;
  disposed = !1;
  initialGraph;
  /** Brain colour the palette was last set to for this brain. */
  brainColor = "";
  /** Synapse opacity from the look, before zoom merging fades it. */
  edgeOpacity = 0;
  // Render pacing (see shouldRender).
  frameRequest = 0;
  paused = !1;
  lastRender = 0;
  activeUntil = 0;
  interacting = !1;
  rendered = !1;
  resolveFirstRender;
  firstRenderCaptures = [];
  // Interaction.
  raycaster = new jg();
  toLocal = new $t();
  pointer = new St();
  pressPosition = new St();
  pointerInside = !1;
  pointerMoved = !1;
  hovered = -1;
  needsPick = !1;
  pressedAt = 0;
  // Stats.
  clock = new bc();
  fps = 60;
  lastStats = 0;
  firingsAt = 0;
  constructor(t) {
    super(), this.canvas = t.canvas, this.preset = t.preset && Gi[t.preset] ? t.preset : null, this.state = Gc(), Is(this.state, Ks(this.preset)), Is(this.state, t.settings ?? {}), this.dataset = t.dataset ?? null, this.scanUrl = t.scanUrl ?? sv, this.initialGraph = t.graph ?? null, this.firstRender = new Promise((r) => this.resolveFirstRender = r), this.alpha = t.alpha ?? this.state.look.transparent;
    const e = this.canvas.getContext("webgl2", {
      alpha: this.alpha,
      depth: !0,
      stencil: !1,
      antialias: !1,
      premultipliedAlpha: !0,
      powerPreference: "high-performance",
      preserveDrawingBuffer: t.preserveDrawingBuffer ?? !1
    });
    if (!e) throw new Error("WebGL2 is not available");
    this.renderer = new Wg({ canvas: this.canvas, context: e }), this.renderer.setClearColor(0, 0), this.camera = new Ue(42, 1, 0.01, 50), this.camera.position.set(1.35, 0.42, 1.5), this.homeDistanceAt42 = this.camera.position.length(), this.homeDirection = this.camera.position.clone().normalize();
    const i = this.controls = new $g(this.camera, this.canvas);
    i.enableDamping = !0, i.dampingFactor = 0.06, i.rotateSpeed = 0.55, i.zoomSpeed = 0.7, i.minDistance = 0.35, i.maxDistance = 6, i.autoRotateSpeed = 0.28, i.addEventListener("start", () => {
      this.interacting = !0, this.handled = !0, this.wake();
    }), i.addEventListener("end", () => {
      this.interacting = !1, this.wake(1500);
    }), this.scene.add(this.world), this.timerMode = t.gpuTimer ?? "off", this.gpuTimer = new C0(this.renderer.getContext(), this.timerMode), this.composer = new vm(this.renderer), this.scenePass = new A0(this.scene, this.camera, this.gpuTimer), this.composer.addPass(this.scenePass), this.membranePass = new E0(this.camera, this.gpuTimer), t.cellResolution && t.cellResolution > 0 && this.membranePass.setResolution(t.cellResolution), this.composer.addPass(this.membranePass), this.bloom = new An(new St(1, 1), this.state.look.bloom, 0.5, 0.5), this.composer.addPass(this.bloom), this.themePass = new F0(), this.composer.addPass(this.themePass);
    for (const [r, o] of [[this.bloom, "bloom"], [this.themePass, "theme"]]) {
      const a = r.render.bind(r);
      r.render = (...l) => {
        this.gpuTimer.begin(o), a(...l), this.gpuTimer.end();
      };
    }
    this.listen(this.canvas, "pointermove", (r) => {
      this.updatePointer(r), this.wake(300), this.pressPosition.distanceTo(new St(r.clientX, r.clientY)) > 6 && (this.pointerMoved = !0);
    }), this.listen(this.canvas, "pointerleave", () => {
      this.pointerInside = !1, this.hovered = -1;
    }), this.listen(this.canvas, "pointerdown", (r) => {
      this.pressedAt = performance.now(), this.pointerMoved = !1, this.pressPosition.set(r.clientX, r.clientY), this.updatePointer(r);
    }), this.listen(this.canvas, "pointerup", (r) => {
      if (!this.ready || this.pointerMoved || performance.now() - this.pressedAt > 450) return;
      this.updatePointer(r);
      const o = this.pick();
      o >= 0 && this._sim.stimulate(o, 1);
    }), t.keyboardTarget && this.listen(t.keyboardTarget, "keydown", (r) => {
      !this.ready || r.target?.closest?.("input, textarea, select, [contenteditable]") || (this.wake(), r.key === " " ? (r.preventDefault(), this.stimulate()) : (r.key === "r" || r.key === "R") && this._sim.reset());
    });
    const s = new ResizeObserver(() => this.resize());
    s.observe(this.canvas), this.cleanup.push(() => s.disconnect()), t.panel && (this.panel = ev(
      this.state,
      {
        onStructureChange: () => this.changed({ structure: !0, signal: !1, look: !1 }),
        onSignalChange: () => this.changed({ structure: !1, signal: !0, look: !1 }),
        onLookChange: () => this.changed({ structure: !1, signal: !1, look: !0 }),
        onStimulate: () => this.stimulate(),
        onReset: () => this.reset(),
        onPreset: (r) => this.loadPreset(r)
      },
      { container: t.panel === !0 ? void 0 : t.panel, preset: this.preset }
    )), this.build(), this.frameRequest = requestAnimationFrame(this.frame);
  }
  /* ---------------------------------------------------------- public api */
  get graph() {
    return this._graph;
  }
  get sim() {
    return this._sim;
  }
  get layers() {
    return { nodes: this.nodeLayer, edges: this.edgeLayer, pulses: this.pulseLayer, membranes: this.membraneLayer };
  }
  /** The current settings, as one flat record (a copy). */
  get settings() {
    return Oc(this.state);
  }
  /**
   * Changes settings: `set({ bloom: 1, theme: 'light' })`. Structure settings
   * rebuild the network (the current one animates until the new one is in);
   * everything else applies at once.
   */
  set(t) {
    this.changed(Is(this.state, t)), this.panel?.controllersRecursive().forEach((e) => e.updateDisplay());
  }
  /** Resets every setting to the default, then applies a preset's own. */
  loadPreset(t) {
    Gi[t] && this.set(Ks(t));
  }
  /** Fires a node, a random one by default. */
  stimulate(t) {
    this.ready && (this._sim.stimulate(t ?? Math.floor(Math.random() * this._graph.nodeCount), 1), this.wake());
  }
  /** Stops every signal and reseeds the simulation's random stream. */
  reset() {
    this._sim?.reset(), this.wake();
  }
  /** Changes look settings, e.g. `look({ bloom: 1, restFps: 30 })`. */
  look(t) {
    this.set(t);
  }
  /** Rebuilds the network, optionally changing structure settings first. */
  rebuild(t) {
    return Is(this.state, t ?? {}), this.build();
  }
  /** Smoothed GPU milliseconds per render section, when the timer is on. */
  gpuTimings() {
    return Object.fromEntries(this.gpuTimer.ms);
  }
  /** Clears the GPU timings, e.g. after changing a setting. */
  resetGpuTimings() {
    this.gpuTimer.reset();
  }
  /** Stops drawing (while off screen, say) until `resume`. */
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused && (this.paused = !1, this.clock.getDelta(), this.wake());
  }
  /**
   * Draws a frame now and returns it as an image: a placeholder to show
   * until the piece loads, or a still for a page's preview. Waits for the
   * first network if there is none yet.
   */
  async snapshot(t = {}) {
    return await this.firstRender, this.capture(t);
  }
  /**
   * The very first frame drawn, as an image: exactly what a visitor sees
   * when the piece appears, so it makes a seamless placeholder. Once that
   * frame has passed, this draws a new one instead (as `snapshot`).
   */
  captureFirstRender(t = {}) {
    return this.rendered ? this.capture(t) : new Promise((e, i) => this.firstRenderCaptures.push({ options: t, resolve: e, reject: i }));
  }
  /** Stops drawing and releases the GPU resources, worker and listeners. */
  dispose() {
    if (!this.disposed) {
      this.disposed = !0, cancelAnimationFrame(this.frameRequest), clearTimeout(this.relayoutTimer), this.builder.dispose(), this.cleanup.forEach((t) => t()), this.panel?.destroy(), this.teardown(), this.controls.dispose(), this.composer.dispose(), this.bloom.dispose(), this.themePass.dispose(), this.renderer.dispose(), this.renderer.forceContextLoss();
      for (const t of this.firstRenderCaptures) t.reject(new Error("disposed before the first render"));
      this.firstRenderCaptures = [];
    }
  }
  /* ------------------------------------------------------------- network */
  emit(t, e) {
    this.dispatchEvent(new CustomEvent(t, { detail: e }));
  }
  listen(t, e, i) {
    const s = i;
    t.addEventListener(e, s), this.cleanup.push(() => t.removeEventListener(e, s));
  }
  /** Applies whatever a settings change needs. */
  changed(t) {
    t.structure && this.build(), this.ready && (t.signal && (Object.assign(this._sim.params, this.state.signal), this.wake()), t.look && this.applyLook()), (t.structure || t.signal || t.look) && this.emit("change", this.settings);
  }
  currentRequest() {
    if (this.dataset) return { kind: "dataset", url: new URL(this.dataset, document.baseURI).href };
    const t = this.state.structure;
    return {
      kind: "procedural",
      scanUrl: new URL(this.scanUrl, document.baseURI).href,
      options: {
        shape: t.shape,
        count: t.nodes,
        seed: t.seed,
        shell: t.shell,
        fill: t.fill,
        foldDepth: t.foldDepth,
        foldScale: t.foldScale,
        minDegree: t.minDegree,
        maxDegree: t.maxDegree,
        radius: r0(t.radius, t.nodes)
      }
    };
  }
  teardown() {
    this.nodeLayer && (this.world.remove(this.nodeLayer.points, this.edgeLayer.lines, this.pulseLayer.lines), this.edgeLayer.dispose(), this.nodeLayer.dispose(), this.pulseLayer.dispose(), this.disposeMembranes(), this.nodeTextures.dispose());
  }
  async build() {
    this.building = !0;
    let t;
    try {
      this.initialGraph ? (t = this.initialGraph, this.initialGraph = null) : t = await this.builder.build(this.currentRequest());
    } catch (o) {
      if (o instanceof Oo) return;
      this.building = !1, this.emit("error", o);
      return;
    }
    if (this.disposed) return;
    this.building = !1, this.teardown();
    const e = this._graph = t, i = this._sim = new h0(e, {
      ...Le,
      ...this.state.signal,
      maxPulses: o0(e.nodeCount)
    });
    this.brainColor = this.state.look.brainColor, Gl(this.brainColor);
    const s = ys(this.state.look, e.nodeCount);
    this.nodeTextures = new d0(e), this.nodeLayer = new P0(e, i, { size: s.pointSize }), this.edgeLayer = new v0(e, this.nodeTextures, { opacity: s.edgeOpacity }), this.pulseLayer = new k0(i, this.nodeTextures, {
      cometLength: s.cometLength,
      intensity: s.pulseIntensity
    }), this.picker = new N0(e.positions, e.nodeCount), this.world.add(this.edgeLayer.lines, this.pulseLayer.lines, this.nodeLayer.points), this.layOutNeurons(), this.scenePass.layers = [
      { label: "synapses", object: this.edgeLayer.lines },
      { label: "points", object: this.nodeLayer.points },
      { label: "pulses", object: this.pulseLayer.lines }
    ], this.hovered = -1;
    const r = !this.ready;
    this.applyLook(), this.resize(), this.ready = !0, this.wake();
    for (let o = 0; o < 3; o++) i.stimulate(Math.floor(Math.random() * e.nodeCount), 1);
    r && this.emit("ready", e);
  }
  /** (Re)builds the somas and neurites for the current network and density. */
  layOutNeurons() {
    this.disposeMembranes();
    const t = R0(this._graph, { fraction: this.state.look.cellDensity });
    this.membraneLayer = new _0(this._sim, t, this.nodeLayer.geometry, this.nodeTextures, {
      cellSize: ys(this.state.look, this._graph.nodeCount).cellSize,
      cellZoom: this.state.look.cellZoom,
      referenceDistance: this.homeDistance()
    }), this.membranePass.layer = this.membraneLayer, this.laidOutDensity = this.state.look.cellDensity;
  }
  disposeMembranes() {
    this.membranePass.layer = null, this.membraneLayer?.dispose(), this.membraneLayer = null;
  }
  /* ---------------------------------------------------------------- look */
  /** The opening distance at the current fov, after the dolly zoom, fitted to the shape of the view. */
  homeDistance() {
    return this.fov42Distance() * this.fit;
  }
  /** The opening distance at the current fov, framed by height alone. */
  fov42Distance() {
    return this.homeDistanceAt42 * Math.tan(42 * Math.PI / 360) / Math.tan(this.camera.fov * Math.PI / 360);
  }
  /**
   * The opening view is framed by height: on a wide view that leaves room at
   * the sides, but a tall one (a phone held upright) would cut the brain
   * off left and right. This moves the opening view back just far enough
   * that the brain fills the width with the same margin it leaves top and
   * bottom: at every angle the drift turns it through, or at the opening
   * angle when it does not drift. Landscape views are
   * left exactly as they were. Until the user handles the camera, it is
   * moved to match.
   */
  refit() {
    if (!this.nodeLayer) return;
    const t = this.camera, e = this.fov42Distance(), i = Math.tan(t.fov * Math.PI / 360), s = i * t.aspect, r = this.nodeLayer.geometry.getAttribute("position"), o = Math.max(1, Math.floor(r.count / 3e3)), a = new B(0, 1, 0), l = new B(), c = new B(), h = new B(), u = this.nodeLayer.points.matrixWorld;
    let p = e;
    const g = this.state.look.autoRotate ? 8 : 1;
    for (let f = 0; f < g; f++) {
      l.copy(this.homeDirection).applyAxisAngle(a, f * Math.PI / 4), c.crossVectors(a, l).normalize();
      const d = new B().crossVectors(l, c);
      let y = 0;
      for (let S = 0; S < r.count; S += o)
        h.fromBufferAttribute(r, S).applyMatrix4(u).sub(this.controls.target), y = Math.max(y, Math.abs(h.dot(d)) / ((e - h.dot(l)) * i));
      if (!(y <= 0))
        for (let S = 0; S < r.count; S += o)
          h.fromBufferAttribute(r, S).applyMatrix4(u).sub(this.controls.target), p = Math.max(p, Math.abs(h.dot(c)) / (y * s) + h.dot(l));
    }
    const v = p / e;
    if (Math.abs(v - this.fit) < 1e-3) return;
    if (this.fit = v, !this.handled) {
      const f = t.position.clone().sub(this.controls.target);
      t.position.copy(this.controls.target).addScaledVector(f.normalize(), this.homeDistance());
    }
    const m = this.state.look;
    this.membraneLayer?.setCellSize(ys(m, this._graph.nodeCount).cellSize, m.cellZoom, this.homeDistance());
  }
  /** Background and brain colour for the look's theme. */
  applyTheme() {
    const t = this.state.look;
    t.brainColor !== this.brainColor && (this.brainColor = t.brainColor, Gl(this.brainColor), this.nodeLayer?.refreshTissue(), this.nodeTextures?.refreshTissue());
    const e = t.transparent && this.alpha;
    t.transparent && !this.alpha && this.emit("needsalpha"), this.themePass.set(t.theme, t.background, e);
  }
  /**
   * Zoomed out, the cells merge into one brain-shaped mass and the dots and
   * synapses fade into it; zoomed in, they come apart into neurons. 0 at the
   * opening view and closer, 1 from three times that distance out.
   */
  applyMerge(t) {
    const e = this.homeDistance(), i = Math.min(1, Math.max(0, (t - e) / (2 * e))), s = this.state.look.neurons ? this.state.look.merge * i * i * (3 - 2 * i) : 0;
    this.membraneLayer?.setMerge(s), this.nodeLayer.material.uniforms.uDim.value = 1 - 0.85 * s, this.edgeLayer.setOpacity(this.edgeOpacity * (1 - s));
  }
  applyLook() {
    const { look: t } = this.state, e = ys(t, this._graph.nodeCount);
    this.nodeLayer.material.uniforms.uSize.value = e.pointSize, this.edgeOpacity = e.edgeOpacity, this.edgeLayer.setOpacity(this.edgeOpacity), this.pulseLayer.setIntensity(e.pulseIntensity), this.pulseLayer.setCometLength(e.cometLength), this.bloom.strength = t.bloom, this.controls.autoRotate = t.autoRotate, this.setFov(t.fov), this.refit(), this.applyTheme(), this.membranePass.enabled = t.neurons, t.cellDensity !== this.laidOutDensity && (clearTimeout(this.relayoutTimer), this.relayoutTimer = window.setTimeout(() => this.layOutNeurons(), 150)), this.membraneLayer?.setCellSize(e.cellSize, t.cellZoom, this.homeDistance()), this.wake();
  }
  /**
   * Changes the field of view as a dolly zoom: the camera moves so the brain
   * keeps its size on screen, and only the strength of the perspective changes.
   */
  setFov(t) {
    const e = this.camera;
    if (t === e.fov) return;
    const i = Math.tan(e.fov * Math.PI / 360) / Math.tan(t * Math.PI / 360);
    e.position.sub(this.controls.target).multiplyScalar(i).add(this.controls.target), e.fov = t, e.updateProjectionMatrix(), this.resize();
  }
  /* ------------------------------------------------------- render pacing */
  /*
   * Render on demand, the way plotly's 3D scenes skip redraws when nothing
   * changed. While a wave runs or the user is handling the brain, every
   * frame is drawn. At rest only slow things move (drift of a fraction of a
   * pixel per second, a slow orbit, the shimmer), which look identical at
   * `restFps`, so frames in between are skipped. Most of a frame's cost is
   * the GPU (bloom especially), so skipped frames are where the power goes.
   */
  /** Keeps the full frame rate for at least `ms` more milliseconds. */
  wake(t = 400) {
    this.activeUntil = Math.max(this.activeUntil, performance.now() + t);
  }
  shouldRender(t) {
    const e = this.state.look.restFps, i = e > 0 ? Math.max(10, e) : 0;
    return i <= 0 || this.interacting || t < this.activeUntil || this._sim.livePulses > 0 ? !0 : t - this.lastRender >= 1e3 / i - 4;
  }
  /* --------------------------------------------------------- interaction */
  updatePointer(t) {
    const e = this.canvas.getBoundingClientRect();
    this.pointer.x = (t.clientX - e.left) / e.width * 2 - 1, this.pointer.y = -((t.clientY - e.top) / e.height) * 2 + 1, this.pointerInside = !0, this.needsPick = !0;
  }
  pick() {
    this.raycaster.setFromCamera(this.pointer, this.camera), this.toLocal.copy(this.nodeLayer.points.matrixWorld).invert(), this.raycaster.ray.applyMatrix4(this.toLocal);
    const t = Math.min(this.picker.maxThreshold, 8e-3 * this.camera.position.length());
    return this.picker.pick(this.raycaster.ray, t);
  }
  /* ----------------------------------------------------------- rendering */
  resize(t, e, i) {
    t ??= this.canvas.clientWidth || this.canvas.width || 300, e ??= this.canvas.clientHeight || this.canvas.height || 150, i ??= Math.min(window.devicePixelRatio || 1, 2), this.renderer.setPixelRatio(i), this.renderer.setSize(t, e, !1), this.composer.setPixelRatio(i), this.composer.setSize(t, e), this.bloom.setSize(t, e), this.camera.aspect = t / Math.max(1, e), this.camera.updateProjectionMatrix(), this.refit(), this.nodeLayer?.setViewport(i, e, this.camera.fov), this.wake(100);
  }
  /** Draws the current state of the network to the canvas. */
  draw() {
    const t = this.nodeLayer.geometry.boundingSphere;
    p0(this.camera, t.center, t.radius, this.state.look.depth), this.applyMerge(this.camera.position.distanceTo(t.center)), this.postprocessing ? this.composer.render() : this.renderer.render(this.scene, this.camera);
  }
  /**
   * Draws a frame and reads it back. The canvas is read in the same task as
   * the draw, before the browser presents and clears it, so this works
   * without `preserveDrawingBuffer`.
   */
  capture(t) {
    const e = t.width !== void 0 || t.height !== void 0 || t.pixelRatio !== void 0;
    if (e) {
      const s = t.width ?? (this.canvas.clientWidth || 300), r = t.height ?? (this.canvas.clientHeight || 150);
      this.resize(s, r, t.pixelRatio ?? 1);
    }
    this.draw();
    const i = this.readCanvas(t);
    return e && (this.resize(), this.draw()), i;
  }
  frame = () => {
    if (this.disposed) return;
    if (this.frameRequest = requestAnimationFrame(this.frame), !this.ready || this.paused) {
      this.clock.getDelta();
      return;
    }
    const t = performance.now();
    if (!this.shouldRender(t)) return;
    this.lastRender = t;
    const e = this.clock.getDelta();
    if (this._sim.step(e), this.needsPick && this.pointerInside && (this.hovered = this.pick(), this.needsPick = !1), this.nodeLayer.update(this.pointerInside ? this.hovered : -1), this.pulseLayer.update(), this.gpuTimer.poll(), this.controls.update(Math.min(e, 0.1)), this.draw(), !this.rendered) {
      this.rendered = !0;
      const i = this.firstRenderCaptures;
      this.firstRenderCaptures = [];
      for (const { options: s, resolve: r, reject: o } of i)
        (s.width !== void 0 || s.height !== void 0 || s.pixelRatio !== void 0 ? this.capture(s) : this.readCanvas(s)).then(r, o);
      this.resolveFirstRender(), this.emit("firstrender");
    }
    if (this.fps += ((e > 0 ? 1 / e : 60) - this.fps) * 0.08, t - this.lastStats > 180) {
      const i = this._sim;
      i.stats.firings < this.firingsAt && (this.firingsAt = 0);
      const s = (i.stats.firings - this.firingsAt) * 1e3 / (t - this.lastStats);
      this.firingsAt = i.stats.firings, this.lastStats = t, this.emit("stats", {
        nodes: this._graph.nodeCount,
        synapses: this._graph.edgeCount,
        inFlight: i.livePulses,
        firingsPerSecond: s,
        fps: this.fps,
        building: this.building,
        hovered: this.hovered,
        gpu: this.timerMode !== "off" ? this.gpuTimer.summary() : ""
      });
    }
  };
  /** Reads the canvas as it is now; toBlob copies the pixels before returning. */
  readCanvas(t) {
    return new Promise((e, i) => {
      this.canvas.toBlob(
        (s) => s ? e(s) : i(new Error("the canvas could not be read")),
        t.type ?? "image/png",
        t.quality
      );
    });
  }
}
const av = (
  /* css */
  `
:where(neuro-form) {
  display: block;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--neuroform-placeholder, none) center / cover no-repeat, var(--neuroform-background, #04040a);
  --neuroform-ink: #e8ecff;
  --neuroform-ink-dim: #7b86b4;
  --neuroform-panel: rgba(10, 11, 22, 0.72);
  --neuroform-panel-solid: rgba(10, 11, 22, 0.94);
  --neuroform-panel-edge: rgba(255, 255, 255, 0.06);
  --neuroform-widget: rgba(255, 255, 255, 0.08);
  --neuroform-widget-hover: rgba(255, 255, 255, 0.12);
  --neuroform-widget-focus: rgba(255, 255, 255, 0.16);
  --neuroform-value: #2cc9ff;
}
:where(neuro-form[data-theme="light"]) {
  --neuroform-ink: #1b2140;
  --neuroform-ink-dim: #5d6690;
  --neuroform-panel: rgba(250, 249, 245, 0.8);
  --neuroform-panel-solid: rgba(250, 249, 245, 0.96);
  --neuroform-panel-edge: rgba(20, 24, 48, 0.08);
  --neuroform-widget: rgba(20, 24, 48, 0.07);
  --neuroform-widget-hover: rgba(20, 24, 48, 0.11);
  --neuroform-widget-focus: rgba(20, 24, 48, 0.15);
  --neuroform-value: #0b6f9e;
}
neuro-form:focus:not(:focus-visible) { outline: none; }

neuro-form > .neuroform-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: crosshair;
  /* Hidden until the first frame, so the placeholder shows until then. */
  opacity: 0;
  transition: opacity 0.35s ease-out;
}
neuro-form > .neuroform-canvas.drawn { opacity: 1; }

/* The control panel (lil-gui), dressed down to match. */
neuro-form > .lil-gui.root {
  position: absolute;
  top: 0;
  right: 15px;
  max-height: 100%;
  overflow-y: auto;
  z-index: 1;
}
neuro-form .lil-gui {
  --background-color: var(--neuroform-panel);
  --widget-color: var(--neuroform-widget);
  --focus-color: var(--neuroform-widget-focus);
  --hover-color: var(--neuroform-widget-hover);
  --text-color: var(--neuroform-ink);
  --title-text-color: var(--neuroform-ink);
  --number-color: var(--neuroform-value);
  --string-color: var(--neuroform-value);
  --title-background-color: var(--neuroform-widget);
  --font-family: ui-monospace, Menlo, monospace;
  --font-size: 10.5px;
  --widget-height: 18px;
  --name-width: 52%;
  backdrop-filter: blur(14px);
  border-left: 1px solid var(--neuroform-panel-edge);
}
/* What the option under the pointer does; pinned to the panel's bottom. */
neuro-form .panel-help {
  position: sticky;
  bottom: 0;
  padding: 8px var(--padding, 4px);
  min-height: 3.6em;
  font-size: 10px;
  line-height: 1.45;
  color: var(--neuroform-ink-dim);
  background: var(--neuroform-panel-solid);
  border-top: 1px solid var(--neuroform-panel-edge);
}
@media (max-width: 640px) {
  neuro-form > .lil-gui.root { width: 240px; }
}
`
), lv = (n) => n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`), Kr = new Map(rv.map((n) => [lv(n), n])), Kl = [
  "panel",
  "dataset",
  "scan-url",
  "keyboard",
  "preserve-drawing-buffer",
  "gpu-timer",
  "cell-resolution"
], cv = ["ready", "firstrender", "stats", "change", "error"], Wl = /* @__PURE__ */ new WeakSet();
function hv(n) {
  const t = n instanceof ShadowRoot ? n : document;
  if (Wl.has(t)) return;
  Wl.add(t);
  const e = document.createElement("style");
  e.dataset.neuroform = "", e.textContent = av, t instanceof ShadowRoot ? t.prepend(e) : document.head.prepend(e);
}
class Yl extends HTMLElement {
  static observedAttributes = ["preset", "placeholder", ...Kl, ...Kr.keys()];
  /** The engine drawing this element, while it is in the document. */
  neuroform = null;
  canvas = null;
  visibility = null;
  pendingDisconnect = !1;
  /** Waiting for an engine: callers that came before the element was connected. */
  engineWaiters = [];
  connectedCallback() {
    if (this.pendingDisconnect) {
      this.pendingDisconnect = !1;
      return;
    }
    hv(this.getRootNode()), this.hasAttribute("tabindex") || (this.tabIndex = 0), this.start();
  }
  disconnectedCallback() {
    this.pendingDisconnect = !0, queueMicrotask(() => {
      this.pendingDisconnect && (this.pendingDisconnect = !1, this.stop());
    });
  }
  attributeChangedCallback(t, e, i) {
    if (e === i) return;
    if (t === "placeholder") {
      this.showPlaceholder();
      return;
    }
    const s = this.neuroform;
    if (s)
      if (t === "preset")
        s.set(this.attributeSettings());
      else if (Kl.includes(t)) {
        const r = t !== "dataset" && t !== "scan-url";
        this.restart({ graph: r ? s.graph : void 0 });
      } else {
        const r = Kr.get(t), o = i === null ? Ks(this.preset)[r] : zo(r, i);
        if (o === void 0) return;
        const a = { [r]: o };
        if (r === "theme") {
          const l = o === "light" ? "light" : "dark";
          this.hasAttribute("background") || (a.background = yn[l]), this.hasAttribute("brain-color") || (a.brainColor = Gn[l]);
        }
        s.set(a);
      }
  }
  /* ------------------------------------------------------------ properties */
  get preset() {
    return this.getAttribute("preset");
  }
  set preset(t) {
    t === null ? this.removeAttribute("preset") : this.setAttribute("preset", t);
  }
  /** The current settings, as one flat record (a copy). */
  get settings() {
    return this.neuroform?.settings ?? null;
  }
  /** Resolves once the first frame is on the canvas. */
  get firstRender() {
    return this.engine().then((t) => t.firstRender);
  }
  /* ---------------------------------------------------------------- methods */
  /** Changes settings live, e.g. `set({ bloom: 1, theme: 'light' })`. Attributes are left as they are. */
  set(t) {
    this.neuroform?.set(t);
  }
  /** Resets every setting to the default, then applies a preset's own. */
  loadPreset(t) {
    this.neuroform?.loadPreset(t);
  }
  /** Fires a node, a random one by default. */
  stimulate(t) {
    this.neuroform?.stimulate(t);
  }
  /** Stops every signal. */
  reset() {
    this.neuroform?.reset();
  }
  /** Draws a frame now and returns it as an image (see SnapshotOptions). */
  async snapshot(t) {
    return (await this.engine()).snapshot(t);
  }
  /**
   * The first frame drawn, as an image: a seamless `placeholder`. Call it
   * before the element is drawn (right after adding it); later, it draws a
   * new frame instead.
   */
  async captureFirstRender(t) {
    return (await this.engine()).captureFirstRender(t);
  }
  /**
   * Downloads a snapshot: `saveSnapshot('placeholder.jpg', { type: 'image/jpeg' })`.
   * The type follows the file's extension when not given.
   */
  async saveSnapshot(t = "neuroform.png", e = {}) {
    const i = t.split(".").pop()?.toLowerCase(), s = e.type ?? (i === "jpg" || i === "jpeg" ? "image/jpeg" : i === "webp" ? "image/webp" : "image/png"), r = await this.snapshot({ ...e, type: s }), o = document.createElement("a");
    o.href = URL.createObjectURL(r), o.download = t, o.click(), setTimeout(() => URL.revokeObjectURL(o.href), 1e3);
  }
  /* ---------------------------------------------------------------- engine */
  /** The engine, once the element is in the document. */
  engine() {
    return this.neuroform ? Promise.resolve(this.neuroform) : new Promise((t) => this.engineWaiters.push(t));
  }
  /** Settings from the preset and the setting attributes. */
  attributeSettings() {
    const t = { ...Ks(this.preset) };
    for (const [i, s] of Kr) {
      const r = this.getAttribute(i);
      if (r === null) continue;
      const o = zo(s, r);
      o !== void 0 && (t[s] = o);
    }
    const e = this.getAttribute("theme");
    if (e !== null) {
      const i = e === "light" ? "light" : "dark";
      this.hasAttribute("background") || (t.background = yn[i]), this.hasAttribute("brain-color") || (t.brainColor = Gn[i]);
    }
    return t;
  }
  start(t = {}) {
    const e = this.canvas = document.createElement("canvas");
    e.className = "neuroform-canvas", this.prepend(e), this.showPlaceholder();
    const i = this.getAttribute("keyboard") ?? "element", s = (a) => {
      const l = Number(this.getAttribute(a));
      return Number.isFinite(l) && l > 0 ? l : void 0;
    }, r = this.getAttribute("gpu-timer"), o = this.neuroform = new ov({
      canvas: e,
      preset: this.preset ?? void 0,
      settings: this.attributeSettings(),
      dataset: this.getAttribute("dataset") ?? void 0,
      scanUrl: this.getAttribute("scan-url") ?? void 0,
      panel: this.hasAttribute("panel") ? this : !1,
      keyboardTarget: i === "window" ? window : i === "none" ? null : this,
      preserveDrawingBuffer: this.hasAttribute("preserve-drawing-buffer"),
      gpuTimer: r === "finish" ? "finish" : r !== null ? "query" : "off",
      cellResolution: s("cell-resolution"),
      ...t
    });
    this.engineWaiters.forEach((a) => a(o)), this.engineWaiters = [];
    for (const a of cv)
      o.addEventListener(a, (l) => {
        o === this.neuroform && this.dispatchEvent(new CustomEvent(a, { detail: l.detail }));
      });
    o.addEventListener("change", () => this.reflectLook()), o.addEventListener("firstrender", () => {
      e.classList.add("drawn"), this.style.removeProperty("--neuroform-placeholder");
    }), o.addEventListener("needsalpha", () => {
      o === this.neuroform && queueMicrotask(() => this.restart({ alpha: !0, graph: o.graph }));
    }), e.addEventListener("pointerdown", () => {
      i === "element" && this.focus({ preventScroll: !0 });
    }), this.reflectLook(), this.visibility = new IntersectionObserver(([a]) => {
      a.isIntersecting ? o.resume() : o.pause();
    }), this.visibility.observe(this);
  }
  stop() {
    this.visibility?.disconnect(), this.visibility = null, this.neuroform?.dispose(), this.neuroform = null, this.canvas?.remove(), this.canvas = null;
  }
  /** Starts a fresh engine with the current settings. */
  restart(t) {
    const e = this.neuroform?.settings;
    this.stop(), this.start({ settings: e, ...t });
  }
  /** The element's own background and theme follow the look. */
  reflectLook() {
    const t = this.neuroform?.state.look;
    t && (this.dataset.theme = t.theme, this.style.setProperty("--neuroform-background", t.transparent ? "transparent" : t.background));
  }
  showPlaceholder() {
    const t = this.getAttribute("placeholder");
    t && !this.canvas?.classList.contains("drawn") ? this.style.setProperty("--neuroform-placeholder", `url(${JSON.stringify(new URL(t, document.baseURI).href)})`) : this.style.removeProperty("--neuroform-placeholder");
  }
}
function uv(n = "neuro-form") {
  customElements.get(n) || customElements.define(n, n === "neuro-form" ? Yl : class extends Yl {
  });
}
uv();
export {
  ov as Neuroform,
  Yl as NeuroformElement,
  Gi as PRESETS,
  $0 as PRESET_NAMES,
  rv as SETTING_NAMES,
  yn as THEME_BACKGROUND,
  Gn as THEME_BRAIN,
  Gc as defaultState,
  uv as defineNeuroform,
  Ks as presetSettings
};
