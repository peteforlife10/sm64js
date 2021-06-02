// 0x07005FC8 - 0x07005FE0

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCombineMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    water_09007800, water_09006800, water_09003800, water_09009000
} from "../../../../../textures/water"

const ddd_seg7_lights_07005FC8 = gdSPDefLights1(
    0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
);

// 0x07005FE0 - 0x07005FF8
const ddd_seg7_lights_07005FE0 = gdSPDefLights1(
    0x1b, 0x1b, 0x1b,
    0x44, 0x44, 0x44, 0x28, 0x28, 0x28
);

// 0x07005FF8 - 0x07006010
const ddd_seg7_lights_07005FF8 = gdSPDefLights1(
    0x2f, 0x2f, 0x2f,
    0x77, 0x77, 0x77, 0x28, 0x28, 0x28
);

// 0x07006010 - 0x07006028
const ddd_seg7_lights_07006010 = gdSPDefLights1(
    0x44, 0x44, 0x44,
    0xaa, 0xaa, 0xaa, 0x28, 0x28, 0x28
);

// 0x07006028 - 0x07006040
const ddd_seg7_lights_07006028 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07006040 - 0x07006080
const ddd_seg7_vertex_07006040 = [
    [[  4941,  -1015,  -7167], 0, [  2012,      0], [0xd6, 0xac, 0x54, 0xff]],
    [[  2893,  -1015,  -7167], 0, [     0,      0], [0x67, 0xcd, 0x33, 0xff]],
    [[  2893,  -3063,  -7167], 0, [     0,    990], [0x2a, 0x54, 0x54, 0xff]],
    [[  4941,  -3063,  -7167], 0, [  2012,    990], [0x99, 0x33, 0x33, 0xff]],
];

// 0x07006080 - 0x070060C0
const ddd_seg7_vertex_07006080 = [
    [[  2893,  -1015,  -6143], 0, [  1672,      0], [0x59, 0xa7, 0x00, 0xff]],
    [[  2893,  -1015,  -7167], 0, [     0,      0], [0x67, 0xcd, 0x33, 0xff]],
    [[  4941,  -1015,  -7167], 0, [     0,   3372], [0xd6, 0xac, 0x54, 0xff]],
    [[  4941,  -1015,  -6143], 0, [  1672,   3372], [0xa7, 0xa7, 0x00, 0xff]],
];

// 0x070060C0 - 0x07006100
const ddd_seg7_vertex_070060C0 = [
    [[  2893,  -1015,  -5119], 0, [  3376,      0], [0x59, 0xa7, 0x00, 0xff]],
    [[  4941,  -1015,  -6143], 0, [  1672,   3372], [0xa7, 0xa7, 0x00, 0xff]],
    [[  4941,  -1015,  -5119], 0, [  3376,   3372], [0xa7, 0xa7, 0x00, 0xff]],
    [[  2893,  -1015,  -6143], 0, [  1672,      0], [0x59, 0xa7, 0x00, 0xff]],
];

// 0x07006100 - 0x07006140
const ddd_seg7_vertex_07006100 = [
    [[  2893,  -1015,  -4095], 0, [  5076,      0], [0x51, 0xcc, 0x51, 0xff]],
    [[  2893,  -1015,  -5119], 0, [  3376,      0], [0x59, 0xa7, 0x00, 0xff]],
    [[  4941,  -1015,  -5119], 0, [  3376,   3372], [0xa7, 0xa7, 0x00, 0xff]],
    [[  4941,  -1015,  -4095], 0, [  5076,   3372], [0xa8, 0xeb, 0x58, 0xff]],
];

// 0x07006140 - 0x070061C0
const ddd_seg7_vertex_07006140 = [
    [[  4941,  -1015,  -6143], 0, [  2012,  -1054], [0xa7, 0xa7, 0x00, 0xff]],
    [[  4941,  -3063,  -7167], 0, [   648,  -2076], [0x99, 0x33, 0x33, 0xff]],
    [[  4941,  -3063,  -6143], 0, [   648,  -1054], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -1015,  -7167], 0, [  2012,  -2076], [0xd6, 0xac, 0x54, 0xff]],
    [[  2893,  -3063,  -6143], 0, [   648,  -1054], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -3063,  -7167], 0, [   648,  -2076], [0x2a, 0x54, 0x54, 0xff]],
    [[  2893,  -1015,  -7167], 0, [  2012,  -2076], [0x67, 0xcd, 0x33, 0xff]],
    [[  2893,  -1015,  -6143], 0, [  2012,  -1054], [0x59, 0xa7, 0x00, 0xff]],
];

// 0x070061C0 - 0x07006240
const ddd_seg7_vertex_070061C0 = [
    [[  4941,  -1015,  -5119], 0, [  2012,      0], [0xa7, 0xa7, 0x00, 0xff]],
    [[  4941,  -3063,  -6143], 0, [   648,  -1054], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -3063,  -5119], 0, [   648,      0], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -1015,  -6143], 0, [  2012,  -1054], [0xa7, 0xa7, 0x00, 0xff]],
    [[  2893,  -3063,  -5119], 0, [   648,      0], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -3063,  -6143], 0, [   648,  -1054], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -1015,  -6143], 0, [  2012,  -1054], [0x59, 0xa7, 0x00, 0xff]],
    [[  2893,  -1015,  -5119], 0, [  2012,      0], [0x59, 0xa7, 0x00, 0xff]],
];

// 0x07006240 - 0x070062C0
const ddd_seg7_vertex_07006240 = [
    [[  4941,  -1015,  -4095], 0, [  2012,    990], [0xa8, 0xeb, 0x58, 0xff]],
    [[  4941,  -3063,  -5119], 0, [   648,      0], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -3063,  -4095], 0, [   648,    990], [0xcd, 0x67, 0x33, 0xff]],
    [[  4941,  -1015,  -5119], 0, [  2012,      0], [0xa7, 0xa7, 0x00, 0xff]],
    [[  2893,  -3063,  -4095], 0, [   648,    990], [0x54, 0x2a, 0x54, 0xff]],
    [[  2893,  -3063,  -5119], 0, [   648,      0], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -1015,  -5119], 0, [  2012,      0], [0x59, 0xa7, 0x00, 0xff]],
    [[  2893,  -1015,  -4095], 0, [  2012,    990], [0x51, 0xcc, 0x51, 0xff]],
];

// 0x070062C0 - 0x070063B0
const ddd_seg7_vertex_070062C0 = [
    [[  3405,  -1015,   5635], 0, [  2012,  -3102], [0x3c, 0x00, 0x91, 0xff]],
    [[  3405,  -4087,   5635], 0, [     0,  -3102], [0x20, 0x00, 0x86, 0xff]],
    [[   845,  -4087,   3075], 0, [     0,    990], [0x78, 0x00, 0xda, 0xff]],
    [[   845,  -4087,  -2047], 0, [     0,      0], [0x7c, 0x00, 0x17, 0xff]],
    [[   845,  -2756,   -511], 0, [   852,   1498], [0x7f, 0x00, 0x00, 0xff]],
    [[   845,  -2756,    512], 0, [   852,   2520], [0x7f, 0x00, 0x00, 0xff]],
    [[   845,  -1015,  -2047], 0, [  2012,      0], [0x7a, 0x00, 0x20, 0xff]],
    [[   845,  -4087,   3075], 0, [     0,   5078], [0x78, 0x00, 0xda, 0xff]],
    [[   845,  -1732,    512], 0, [  1536,   2520], [0x7f, 0x00, 0x00, 0xff]],
    [[   845,  -1015,   3075], 0, [  2012,   5078], [0x70, 0x00, 0xc6, 0xff]],
    [[   845,  -1732,   -511], 0, [  1536,   1498], [0x7f, 0x00, 0x00, 0xff]],
    [[   845,  -1015,  -2047], 0, [  2012,  -2086], [0x7a, 0x00, 0x20, 0xff]],
    [[   845,  -4087,  -2047], 0, [     0,  -2086], [0x7c, 0x00, 0x17, 0xff]],
    [[  2893,  -4087,  -4095], 0, [     0,    990], [0x40, 0x00, 0x6d, 0xff]],
    [[  2893,  -1015,  -4095], 0, [  2012,    990], [0x51, 0xcc, 0x51, 0xff]],
];

// 0x070063B0 - 0x070064A0
const ddd_seg7_vertex_070063B0 = [
    [[  4429,  -1015,   5635], 0, [  2012,      0], [0xc4, 0x00, 0x91, 0xff]],
    [[  3405,  -4087,   5635], 0, [     0,    990], [0x20, 0x00, 0x86, 0xff]],
    [[  3405,  -1015,   5635], 0, [  2012,    990], [0x3c, 0x00, 0x91, 0xff]],
    [[  3405,  -1015,   5635], 0, [  2012,  -3102], [0x3c, 0x00, 0x91, 0xff]],
    [[   845,  -4087,   3075], 0, [     0,    990], [0x78, 0x00, 0xda, 0xff]],
    [[   845,  -1015,   3075], 0, [  2012,    990], [0x70, 0x00, 0xc6, 0xff]],
    [[  6989,  -4087,  -2047], 0, [     0,      0], [0x8b, 0x00, 0x30, 0xff]],
    [[  6989,  -4087,   3075], 0, [     0,   5078], [0x8b, 0x00, 0xd0, 0xff]],
    [[  6989,  -1015,   3075], 0, [  2012,   5078], [0x8d, 0xf0, 0xce, 0xff]],
    [[  6989,  -1015,  -2047], 0, [  2012,      0], [0x90, 0x00, 0x3a, 0xff]],
    [[  4941,  -1015,  -4095], 0, [  2012,  -2086], [0xa8, 0xeb, 0x58, 0xff]],
    [[  4941,  -4087,  -4095], 0, [     0,  -2086], [0xe0, 0x00, 0x7a, 0xff]],
    [[  6989,  -4087,  -2047], 0, [     0,    990], [0x8b, 0x00, 0x30, 0xff]],
    [[  6989,  -1015,  -2047], 0, [  2012,    990], [0x90, 0x00, 0x3a, 0xff]],
    [[  4429,  -4087,   5635], 0, [     0,      0], [0xc0, 0x00, 0x93, 0xff]],
];

// 0x070064A0 - 0x07006520
const ddd_seg7_vertex_070064A0 = [
    [[  6989,  -1015,   3075], 0, [  2012,  -3102], [0x8d, 0xf0, 0xce, 0xff]],
    [[  4429,  -4087,   5635], 0, [     0,    990], [0xc0, 0x00, 0x93, 0xff]],
    [[  4429,  -1015,   5635], 0, [  2012,    990], [0xc4, 0x00, 0x91, 0xff]],
    [[  6989,  -4087,   3075], 0, [     0,  -3102], [0x8b, 0x00, 0xd0, 0xff]],
    [[  4941,  -4087,  -4095], 0, [     0,    990], [0xe0, 0x00, 0x7a, 0xff]],
    [[  4941,  -3063,  -4095], 0, [   648,    990], [0xcd, 0x67, 0x33, 0xff]],
    [[  2893,  -3063,  -4095], 0, [   648,  -1054], [0x54, 0x2a, 0x54, 0xff]],
    [[  2893,  -4087,  -4095], 0, [     0,  -1054], [0x40, 0x00, 0x6d, 0xff]],
];

// 0x07006520 - 0x07006560
const ddd_seg7_vertex_07006520 = [
    [[  4941,  -3063,  -6143], 0, [  -708,    308], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -3063,  -7167], 0, [ -1392,    650], [0x99, 0x33, 0x33, 0xff]],
    [[  2893,  -3063,  -7167], 0, [     0,   2010], [0x2a, 0x54, 0x54, 0xff]],
    [[  2893,  -3063,  -6143], 0, [   648,   1670], [0x59, 0x59, 0x00, 0xff]],
];

// 0x07006560 - 0x070065A0
const ddd_seg7_vertex_07006560 = [
    [[  4941,  -3063,  -5119], 0, [     0,      0], [0xa7, 0x59, 0x00, 0xff]],
    [[  4941,  -3063,  -6143], 0, [  -708,    308], [0xa7, 0x59, 0x00, 0xff]],
    [[  2893,  -3063,  -6143], 0, [   648,   1670], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -3063,  -5119], 0, [  1332,   1328], [0x59, 0x59, 0x00, 0xff]],
];

// 0x070065A0 - 0x070065E0
const ddd_seg7_vertex_070065A0 = [
    [[  4941,  -3063,  -4095], 0, [   648,   -372], [0xcd, 0x67, 0x33, 0xff]],
    [[  2893,  -3063,  -5119], 0, [  1332,   1328], [0x59, 0x59, 0x00, 0xff]],
    [[  2893,  -3063,  -4095], 0, [  2012,    990], [0x54, 0x2a, 0x54, 0xff]],
    [[  4941,  -3063,  -5119], 0, [     0,      0], [0xa7, 0x59, 0x00, 0xff]],
];

// 0x070065E0 - 0x070066E0
const ddd_seg7_vertex_070065E0 = [
    [[  2845,  -3626,   1072], 0, [  1300,  -3124], [0xe5, 0x79, 0x18, 0xff]],
    [[  2995,  -3268,   -306], 0, [  2376,  -3990], [0xf7, 0x7e, 0x00, 0xff]],
    [[  2483,  -3626,   -101], 0, [  1872,  -4208], [0xc0, 0x6d, 0xfb, 0xff]],
    [[  3200,  -3268,   -921], 0, [  2956,  -4280], [0xfe, 0x7d, 0xee, 0xff]],
    [[  3610,  -3268,   -921], 0, [  3244,  -3990], [0xff, 0x7e, 0x03, 0xff]],
    [[  3931,  -3626,  -1462], 0, [  3852,  -4146], [0x08, 0x75, 0xd1, 0xff]],
    [[  3814,  -3268,   -716], 0, [  3244,  -3702], [0x03, 0x7e, 0xf9, 0xff]],
    [[  5026,  -3626,  -1156], 0, [  4408,  -3156], [0x1f, 0x7a, 0xf0, 0xff]],
    [[  4655,  -3626,    710], 0, [  2832,  -2102], [0x1e, 0x7a, 0x0e, 0xff]],
    [[  3814,  -3268,   -306], 0, [  2956,  -3412], [0xf1, 0x7d, 0xf9, 0xff]],
    [[  3207,  -3626,  -1462], 0, [  3344,  -4656], [0xd9, 0x6e, 0xcf, 0xff]],
    [[  2995,  -3268,   -716], 0, [  2668,  -4280], [0xd8, 0x76, 0xea, 0xff]],
    [[  2734,  -3626,   -776], 0, [  2524,  -4506], [0xbb, 0x64, 0xdc, 0xff]],
    [[  1664,  -4087,  -1228], 0, [  2088,  -5580], [0xd6, 0x75, 0xec, 0xff]],
    [[  2893,  -4087,  -3071], 0, [  4256,  -6014], [0xf1, 0x7a, 0xe2, 0xff]],
    [[  3200,  -3268,   -101], 0, [  2376,  -3702], [0x06, 0x7d, 0xef, 0xff]],
];

// 0x070066E0 - 0x070067E0
const ddd_seg7_vertex_070066E0 = [
    [[  3610,  -3268,   -101], 0, [  2668,  -3412], [0xfe, 0x7e, 0xfe, 0xff]],
    [[  3200,  -3268,   -101], 0, [  2376,  -3702], [0x06, 0x7d, 0xef, 0xff]],
    [[  2845,  -3626,   1072], 0, [  1300,  -3124], [0xe5, 0x79, 0x18, 0xff]],
    [[  3931,  -3626,   1434], 0, [  1808,  -2102], [0x06, 0x7c, 0x18, 0xff]],
    [[  4655,  -3626,    710], 0, [  2832,  -2102], [0x1e, 0x7a, 0x0e, 0xff]],
    [[  3814,  -3268,   -306], 0, [  2956,  -3412], [0xf1, 0x7d, 0xf9, 0xff]],
    [[  1357,  -4087,      0], 0, [  1004,  -4930], [0xd2, 0x76, 0x03, 0xff]],
    [[  2483,  -3626,   -101], 0, [  1872,  -4208], [0xc0, 0x6d, 0xfb, 0xff]],
    [[  1664,  -4087,  -1228], 0, [  2088,  -5580], [0xd6, 0x75, 0xec, 0xff]],
    [[  2734,  -3626,   -776], 0, [  2524,  -4506], [0xbb, 0x64, 0xdc, 0xff]],
    [[  3207,  -3626,  -1462], 0, [  3344,  -4656], [0xd9, 0x6e, 0xcf, 0xff]],
    [[  2893,  -4087,  -3071], 0, [  4256,  -6014], [0xf1, 0x7a, 0xe2, 0xff]],
    [[  3931,  -3626,  -1462], 0, [  3852,  -4146], [0x08, 0x75, 0xd1, 0xff]],
    [[  4941,  -4087,  -3583], 0, [  6064,  -4930], [0x0e, 0x7b, 0xe6, 0xff]],
    [[  1869,  -4087,   2560], 0, [  -436,  -2762], [0xe2, 0x7a, 0x12, 0xff]],
    [[  4429,  -4087,   4096], 0, [   280,    128], [0x05, 0x7c, 0x15, 0xff]],
];

// 0x070067E0 - 0x070068E0
const ddd_seg7_vertex_070067E0 = [
    [[  6477,  -4087,   1024], 0, [  3896,   -594], [0x23, 0x79, 0x05, 0xff]],
    [[  4655,  -3626,    710], 0, [  2832,  -2102], [0x1e, 0x7a, 0x0e, 0xff]],
    [[  4429,  -4087,   4096], 0, [   280,    128], [0x05, 0x7c, 0x15, 0xff]],
    [[  3931,  -3626,   1434], 0, [  1808,  -2102], [0x06, 0x7c, 0x18, 0xff]],
    [[  5026,  -3626,  -1156], 0, [  4408,  -3156], [0x1f, 0x7a, 0xf0, 0xff]],
    [[  6067,  -4087,  -1535], 0, [  5412,  -2690], [0x2e, 0x75, 0xf1, 0xff]],
    [[  4941,  -4087,  -3583], 0, [  6064,  -4930], [0x0e, 0x7b, 0xe6, 0xff]],
    [[  3931,  -3626,  -1462], 0, [  3852,  -4146], [0x08, 0x75, 0xd1, 0xff]],
    [[  2995,  -3268,   -306], 0, [  2376,  -3990], [0xf7, 0x7e, 0x00, 0xff]],
    [[  3200,  -3268,   -101], 0, [  2376,  -3702], [0x06, 0x7d, 0xef, 0xff]],
    [[  3405,  -3575,   -511], 0, [  2596,  -3774], [0x00, 0x7e, 0x00, 0xff]],
    [[  3405,  -3575,   -511], 0, [  2740,  -4062], [0x00, 0x7e, 0x00, 0xff]],
    [[  2995,  -3268,   -716], 0, [  2668,  -4280], [0xd8, 0x76, 0xea, 0xff]],
    [[  3610,  -3268,   -101], 0, [  2668,  -3412], [0xfe, 0x7e, 0xfe, 0xff]],
    [[  3405,  -3575,   -511], 0, [  2740,  -3628], [0x00, 0x7e, 0x00, 0xff]],
    [[  3814,  -3268,   -306], 0, [  2956,  -3412], [0xf1, 0x7d, 0xf9, 0xff]],
];

// 0x070068E0 - 0x070069B0
const ddd_seg7_vertex_070068E0 = [
    [[  3814,  -3268,   -716], 0, [  3244,  -3702], [0x03, 0x7e, 0xf9, 0xff]],
    [[  3405,  -3575,   -511], 0, [  2884,  -3628], [0x00, 0x7e, 0x00, 0xff]],
    [[  3814,  -3268,   -306], 0, [  2956,  -3412], [0xf1, 0x7d, 0xf9, 0xff]],
    [[  3405,  -3575,   -511], 0, [  3028,  -3774], [0x00, 0x7e, 0x00, 0xff]],
    [[  3610,  -3268,   -921], 0, [  3244,  -3990], [0xff, 0x7e, 0x03, 0xff]],
    [[  3200,  -3268,   -921], 0, [  2956,  -4280], [0xfe, 0x7d, 0xee, 0xff]],
    [[  3405,  -3575,   -511], 0, [  3028,  -3918], [0x00, 0x7e, 0x00, 0xff]],
    [[  2995,  -3268,   -716], 0, [  2668,  -4280], [0xd8, 0x76, 0xea, 0xff]],
    [[  3405,  -3575,   -511], 0, [  2740,  -4062], [0x00, 0x7e, 0x00, 0xff]],
    [[  6989,  -4087,   5652], 0, [   988,   3032], [0x00, 0x7f, 0x00, 0xff]],
    [[   845,  -4087,  -4095], 0, [  3532,  -8182], [0x00, 0x7f, 0x00, 0xff]],
    [[   845,  -4087,   5652], 0, [ -3340,  -1302], [0x00, 0x7f, 0x00, 0xff]],
    [[  6989,  -4087,  -4095], 0, [  7868,  -3846], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x070069B0 - 0x07006AA0
const ddd_seg7_vertex_070069B0 = [
    [[  2319,   -401,   4549], 0, [   320,   1500], [0x59, 0x00, 0xa7, 0xff]],
    [[  2319,    110,   4549], 0, [   612,   1498], [0x59, 0x00, 0xa7, 0xff]],
    [[  3405,    110,   5635], 0, [   612,      0], [0x40, 0x00, 0x93, 0xff]],
    [[  3405,  -1015,   5635], 0, [     0,      0], [0x3c, 0x00, 0x91, 0xff]],
    [[  1233,   -401,   3463], 0, [   320,   3032], [0x59, 0x00, 0xa7, 0xff]],
    [[   845,  -1015,   3075], 0, [     0,   3580], [0x70, 0x00, 0xc6, 0xff]],
    [[   845,    110,   3075], 0, [   612,   3580], [0x59, 0x00, 0xa7, 0xff]],
    [[  1233,    110,   3463], 0, [   612,   3032], [0x59, 0x00, 0xa7, 0xff]],
    [[  4429,  -1015,   5635], 0, [     0,    990], [0xc4, 0x00, 0x91, 0xff]],
    [[  4429,    110,   5635], 0, [   612,    990], [0xe0, 0x00, 0x86, 0xff]],
    [[  5370,    110,   4694], 0, [   612,   -338], [0xa7, 0x00, 0xa7, 0xff]],
    [[  5370,   -401,   4694], 0, [   320,   -338], [0xa7, 0x00, 0xa7, 0xff]],
    [[  6579,   -606,   3485], 0, [   200,  -2046], [0x94, 0xe3, 0xc6, 0xff]],
    [[  6989,  -1015,   3075], 0, [     0,  -2624], [0x8d, 0xf0, 0xce, 0xff]],
    [[  6456,   -401,   3608], 0, [   320,  -1872], [0xa7, 0x00, 0xa7, 0xff]],
];

// 0x07006AA0 - 0x07006BA0
const ddd_seg7_vertex_07006AA0 = [
    [[  6456,   -401,   3608], 0, [   320,  -1872], [0xa7, 0x00, 0xa7, 0xff]],
    [[  6456,    110,   3608], 0, [   612,  -1872], [0xa7, 0x00, 0xa7, 0xff]],
    [[  6579,    110,   3485], 0, [   612,  -2046], [0x8b, 0x00, 0xd0, 0xff]],
    [[  6579,   -606,   3485], 0, [   200,  -2046], [0x94, 0xe3, 0xc6, 0xff]],
    [[  6989,  -1015,  -1020], 0, [     0,    990], [0xc1, 0xc1, 0xa7, 0xff]],
    [[  6989,  -1015,   3075], 0, [     0,   5078], [0x8d, 0xf0, 0xce, 0xff]],
    [[  6579,   -606,   3485], 0, [   200,   5488], [0x94, 0xe3, 0xc6, 0xff]],
    [[  6579,   -606,  -1020], 0, [   200,    990], [0x8d, 0xe2, 0xd6, 0xff]],
    [[  6579,    110,   3485], 0, [   612,   5488], [0x8b, 0x00, 0xd0, 0xff]],
    [[  6579,    110,  -1020], 0, [   612,    990], [0xc8, 0x00, 0x8f, 0xff]],
    [[  6989,  -1015,  -1020], 0, [     0,      0], [0xc1, 0xc1, 0xa7, 0xff]],
    [[  6579,   -606,  -1020], 0, [   200,    376], [0x8d, 0xe2, 0xd6, 0xff]],
    [[  6579,    110,  -1020], 0, [   612,    376], [0xc8, 0x00, 0x8f, 0xff]],
    [[  2893,   2568,   6144], 0, [  2012,  -2068], [0x40, 0x00, 0x93, 0xff]],
    [[  2893,      8,   6144], 0, [   552,  -2068], [0x20, 0x00, 0x86, 0xff]],
    [[   845,      8,   4096], 0, [   552,    990], [0x59, 0x00, 0xa7, 0xff]],
];

// 0x07006BA0 - 0x07006C80
const ddd_seg7_vertex_07006BA0 = [
    [[  6989,  -1015,  -1020], 0, [     0,      0], [0xc1, 0xc1, 0xa7, 0xff]],
    [[  6579,    110,  -1020], 0, [   612,    376], [0xc8, 0x00, 0x8f, 0xff]],
    [[  6989,    110,  -1020], 0, [   612,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   845,   2568,  -2047], 0, [  2012,  -2068], [0x6d, 0x00, 0x40, 0xff]],
    [[  2893,  -1015,  -4095], 0, [     0,    990], [0x51, 0xcc, 0x51, 0xff]],
    [[  2893,   2568,  -4095], 0, [  2012,    990], [0x20, 0x00, 0x7a, 0xff]],
    [[   845,  -1015,  -2047], 0, [     0,  -2068], [0x7a, 0x00, 0x20, 0xff]],
    [[   845,   2568,   4096], 0, [  2012,   6098], [0x7a, 0x00, 0xe0, 0xff]],
    [[   845,  -1015,  -2047], 0, [     0,      0], [0x7a, 0x00, 0x20, 0xff]],
    [[   845,   2568,  -2047], 0, [  2012,      0], [0x6d, 0x00, 0x40, 0xff]],
    [[   845,  -1015,   4096], 0, [     0,   6098], [0x7f, 0x00, 0x00, 0xff]],
    [[  2893,   2568,   6144], 0, [  2012,  -2068], [0x40, 0x00, 0x93, 0xff]],
    [[   845,      8,   4096], 0, [   552,    990], [0x59, 0x00, 0xa7, 0xff]],
    [[   845,   2568,   4096], 0, [  2012,    990], [0x7a, 0x00, 0xe0, 0xff]],
];

// 0x07006C80 - 0x07006D70
const ddd_seg7_vertex_07006C80 = [
    [[  6989,   2568,  -2047], 0, [  2012,      0], [0x86, 0x00, 0x20, 0xff]],
    [[  6989,  -1015,  -2047], 0, [     0,      0], [0x90, 0x00, 0x3a, 0xff]],
    [[  6989,  -1015,   4096], 0, [     0,   6098], [0x81, 0x00, 0x00, 0xff]],
    [[  2893,      8,   6144], 0, [   552,    990], [0x20, 0x00, 0x86, 0xff]],
    [[  2893,   2568,   6144], 0, [  2012,    990], [0x40, 0x00, 0x93, 0xff]],
    [[  4941,   2568,   6144], 0, [  2012,  -1054], [0xe0, 0x00, 0x86, 0xff]],
    [[  4941,      8,   6144], 0, [   552,  -1054], [0xc0, 0x00, 0x93, 0xff]],
    [[  4941,  -1015,  -4095], 0, [     0,    990], [0xa8, 0xeb, 0x58, 0xff]],
    [[  4941,   2568,  -4095], 0, [  2012,    990], [0xc0, 0x00, 0x6d, 0xff]],
    [[  2893,   2568,  -4095], 0, [  2012,  -1054], [0x20, 0x00, 0x7a, 0xff]],
    [[  2893,  -1015,  -4095], 0, [     0,  -1054], [0x51, 0xcc, 0x51, 0xff]],
    [[  4941,   2568,  -4095], 0, [  2012,  -2068], [0xc0, 0x00, 0x6d, 0xff]],
    [[  4941,  -1015,  -4095], 0, [     0,  -2068], [0xa8, 0xeb, 0x58, 0xff]],
    [[  6989,  -1015,  -2047], 0, [     0,    990], [0x90, 0x00, 0x3a, 0xff]],
    [[  6989,   2568,  -2047], 0, [  2012,    990], [0x86, 0x00, 0x20, 0xff]],
];

// 0x07006D70 - 0x07006E20
const ddd_seg7_vertex_07006D70 = [
    [[  4429,    110,   5635], 0, [   700,      0], [0xe0, 0x00, 0x86, 0xff]],
    [[  3405,  -1015,   5635], 0, [     0,    990], [0x3c, 0x00, 0x91, 0xff]],
    [[  3405,    110,   5635], 0, [   696,    990], [0x40, 0x00, 0x93, 0xff]],
    [[  6989,   2568,  -2047], 0, [  2012,      0], [0x86, 0x00, 0x20, 0xff]],
    [[  6989,  -1015,   4096], 0, [     0,   6098], [0x81, 0x00, 0x00, 0xff]],
    [[  6989,   2568,   4096], 0, [  2012,   6098], [0x93, 0x00, 0xc0, 0xff]],
    [[  6989,   2568,   4096], 0, [  2012,  -2068], [0x93, 0x00, 0xc0, 0xff]],
    [[  4941,      8,   6144], 0, [   552,    990], [0xc0, 0x00, 0x93, 0xff]],
    [[  4941,   2568,   6144], 0, [  2012,    990], [0xe0, 0x00, 0x86, 0xff]],
    [[  6989,      8,   4096], 0, [   552,  -2068], [0xa7, 0x00, 0xa7, 0xff]],
    [[  4429,  -1015,   5635], 0, [     0,      0], [0xc4, 0x00, 0x91, 0xff]],
];

// 0x07006E20 - 0x07006EE0
const ddd_seg7_dl_07006E20 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_07005FC8.l, 1),
    gsSPLight(ddd_seg7_lights_07005FC8.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006040, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPLight(ddd_seg7_lights_07005FE0.l, 1),
    gsSPLight(ddd_seg7_lights_07005FE0.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006080, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPLight(ddd_seg7_lights_07005FF8.l, 1),
    gsSPLight(ddd_seg7_lights_07005FF8.a, 2),
    gsSPVertex(ddd_seg7_vertex_070060C0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPLight(ddd_seg7_lights_07006010.l, 1),
    gsSPLight(ddd_seg7_lights_07006010.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006100, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07006EE0 - 0x07007080
const ddd_seg7_dl_07006EE0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09006800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_07005FE0.l, 1),
    gsSPLight(ddd_seg7_lights_07005FE0.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006140, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPLight(ddd_seg7_lights_07005FF8.l, 1),
    gsSPLight(ddd_seg7_lights_07005FF8.a, 2),
    gsSPVertex(ddd_seg7_vertex_070061C0, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPLight(ddd_seg7_lights_07006010.l, 1),
    gsSPLight(ddd_seg7_lights_07006010.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006240, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPLight(ddd_seg7_lights_07006028.l, 1),
    gsSPLight(ddd_seg7_lights_07006028.a, 2),
    gsSPVertex(ddd_seg7_vertex_070062C0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  4,  3, 0x0,  3,  5,  7, 0x0),
    gsSP2Triangles( 7,  5,  8, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 6, 10,  4, 0x0,  9,  8,  6, 0x0),
    gsSP2Triangles( 8, 10,  6, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_070063B0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(ddd_seg7_vertex_070064A0, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007080 - 0x07007298
const ddd_seg7_dl_07007080 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09003800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_07005FE0.l, 1),
    gsSPLight(ddd_seg7_lights_07005FE0.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006520, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPLight(ddd_seg7_lights_07005FF8.l, 1),
    gsSPLight(ddd_seg7_lights_07005FF8.a, 2),
    gsSPVertex(ddd_seg7_vertex_07006560, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPLight(ddd_seg7_lights_07006010.l, 1),
    gsSPLight(ddd_seg7_lights_07006010.a, 2),
    gsSPVertex(ddd_seg7_vertex_070065A0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSPLight(ddd_seg7_lights_07006028.l, 1),
    gsSPLight(ddd_seg7_lights_07006028.a, 2),
    gsSPVertex(ddd_seg7_vertex_070065E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  7,  6,  8, 0x0),
    gsSP2Triangles( 6,  9,  8, 0x0,  6,  7,  5, 0x0),
    gsSP2Triangles(10,  3,  5, 0x0, 11, 10, 12, 0x0),
    gsSP2Triangles(11,  3, 10, 0x0,  2,  1, 11, 0x0),
    gsSP2Triangles( 2, 11, 12, 0x0, 13, 10, 14, 0x0),
    gsSP1Triangle( 0, 15,  1, 0x0),
    gsSPVertex(ddd_seg7_vertex_070066E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  0,  3, 0x0,  4,  5,  0, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 10, 12, 0x0),
    gsSP2Triangles(11, 12, 13, 0x0, 14,  2,  6, 0x0),
    gsSP2Triangles( 2,  7,  6, 0x0, 15,  2, 14, 0x0),
    gsSP1Triangle(15,  3,  2, 0x0),
    gsSPVertex(ddd_seg7_vertex_070067E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  1,  0, 0x0,  4,  0,  5, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11, 12, 0x0),
    gsSP2Triangles(10,  9, 13, 0x0, 14, 13, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_070068E0, 13, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
    gsSP2Triangles( 5,  6,  4, 0x0,  5,  7,  8, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0,  9, 12, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007298 - 0x07007408
const ddd_seg7_dl_07007298 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09009000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(ddd_seg7_vertex_070069B0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  0,  3, 0x0,  5,  4,  3, 0x0),
    gsSP2Triangles( 6,  7,  4, 0x0,  5,  6,  4, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles( 8, 11, 12, 0x0,  8, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(ddd_seg7_vertex_07006AA0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 7,  8,  9, 0x0,  7,  6,  8, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_07006BA0, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_07006C80, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_07006D70, 11, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP1Triangle( 0, 10,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007408 - 0x070074C8
export const ddd_seg7_dl_07007408 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_07006E20),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_CLAMP, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_07006EE0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_07007080),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_CLAMP, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_07007298),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
