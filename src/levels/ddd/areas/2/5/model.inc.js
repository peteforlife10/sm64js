// 0x0700B0D8 - 0x0700B0F0

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGBA,
    G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { ddd_seg7_texture_07002000 } from "../../../texture.inc"

const ddd_seg7_lights_0700B0D8 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700B0F0 - 0x0700B1D0
const ddd_seg7_vertex_0700B0F0 = [
    [[  4131,  -2756,  -2425], 0, [  2012,    990], [0xd8, 0x09, 0x89, 0xff]],
    [[  4122,  -2756,  -2252], 0, [  2012,      0], [0x97, 0x1a, 0x41, 0xff]],
    [[  4122,  -2551,  -2252], 0, [   960,    150], [0xb7, 0x67, 0x04, 0xff]],
    [[  4326,  -2551,  -2354], 0, [     0,    990], [0x1c, 0x34, 0x91, 0xff]],
    [[  4326,  -2756,  -2354], 0, [     0,    990], [0x3e, 0xa2, 0xc6, 0xff]],
    [[  4326,  -2551,  -2354], 0, [  2012,      0], [0x1c, 0x34, 0x91, 0xff]],
    [[  6989,  -2756,   -921], 0, [  5864,   1996], [0x13, 0x8f, 0x35, 0xff]],
    [[  6989,  -2551,   -921], 0, [  6036,    990], [0x1f, 0x5c, 0x50, 0xff]],
    [[  5862,  -2756,   -511], 0, [     0,    990], [0xda, 0xbe, 0x64, 0xff]],
    [[  5862,  -2551,   -511], 0, [   140,    -18], [0xc7, 0x51, 0x4d, 0xff]],
    [[  6067,  -2756,   -818], 0, [  8656,  -1210], [0x40, 0xab, 0xbd, 0xff]],
    [[  6022,  -4138,    265], 0, [    12,    292], [0x1f, 0xb4, 0xa0, 0xff]],
    [[  5738,  -2756,   -738], 0, [  8656,    478], [0xae, 0xc7, 0xb3, 0xff]],
    [[  5693,  -4138,    345], 0, [    12,   1978], [0x82, 0x0a, 0x07, 0xff]],
];

// 0x0700B1D0 - 0x0700B2D0
const ddd_seg7_vertex_0700B1D0 = [
    [[  5738,  -2756,   -738], 0, [  9424,   -106], [0xae, 0xc7, 0xb3, 0xff]],
    [[  5693,  -4138,    345], 0, [   652,   -106], [0x82, 0x0a, 0x07, 0xff]],
    [[  5862,  -2756,   -511], 0, [  8740,    990], [0xda, 0xbe, 0x64, 0xff]],
    [[  5817,  -4138,    572], 0, [     0,    990], [0xf3, 0x4e, 0x63, 0xff]],
    [[  5862,  -2756,   -511], 0, [  8492,   2028], [0xda, 0xbe, 0x64, 0xff]],
    [[  5817,  -4138,    572], 0, [     0,      0], [0xf3, 0x4e, 0x63, 0xff]],
    [[  6116,  -2756,   -603], 0, [  8492,   3378], [0x56, 0x37, 0x4a, 0xff]],
    [[  6071,  -4138,    480], 0, [     0,   1316], [0x7d, 0x0a, 0x12, 0xff]],
    [[  6116,  -2756,   -603], 0, [  8084,    106], [0x56, 0x37, 0x4a, 0xff]],
    [[  6071,  -4138,    480], 0, [  -684,    106], [0x7d, 0x0a, 0x12, 0xff]],
    [[  6067,  -2756,   -818], 0, [  8740,    990], [0x40, 0xab, 0xbd, 0xff]],
    [[  6022,  -4138,    265], 0, [     0,    990], [0x1f, 0xb4, 0xa0, 0xff]],
    [[  5146,  -2756,  -1945], 0, [  8260,    -22], [0xff, 0xa8, 0xa6, 0xff]],
    [[  4691,  -4138,  -1372], 0, [   456,    -22], [0xa2, 0xfd, 0xac, 0xff]],
    [[  5080,  -2756,  -1729], 0, [  7772,    990], [0x8a, 0x2b, 0x0a, 0xff]],
    [[  4625,  -4138,  -1157], 0, [     0,    990], [0xa4, 0x39, 0x41, 0xff]],
];

// 0x0700B2D0 - 0x0700B3D0
const ddd_seg7_vertex_0700B2D0 = [
    [[  5080,  -2756,  -1729], 0, [  6100,    544], [0x8a, 0x2b, 0x0a, 0xff]],
    [[  4625,  -4138,  -1157], 0, [ -1676,    -82], [0xa4, 0x39, 0x41, 0xff]],
    [[  5248,  -2756,  -1637], 0, [  6100,   1498], [0xc6, 0xcf, 0x65, 0xff]],
    [[  4793,  -4138,  -1065], 0, [ -1676,    876], [0x32, 0x1d, 0x70, 0xff]],
    [[  5248,  -2756,  -1637], 0, [  5568,   -290], [0xc6, 0xcf, 0x65, 0xff]],
    [[  4793,  -4138,  -1065], 0, [ -2232,   -290], [0x32, 0x1d, 0x70, 0xff]],
    [[  5453,  -2756,  -1842], 0, [  6240,    990], [0x55, 0xa5, 0x16, 0xff]],
    [[  4998,  -4138,  -1270], 0, [ -1560,    990], [0x59, 0xc6, 0xbb, 0xff]],
    [[  5453,  -2756,  -1842], 0, [  -508,   1580], [0x55, 0xa5, 0x16, 0xff]],
    [[  4998,  -4138,  -1270], 0, [  7120,      0], [0x59, 0xc6, 0xbb, 0xff]],
    [[  5146,  -2756,  -1945], 0, [  -584,      0], [0xff, 0xa8, 0xa6, 0xff]],
    [[  4691,  -4138,  -1372], 0, [  7044,  -1646], [0xa2, 0xfd, 0xac, 0xff]],
    [[  4122,  -2756,  -2252], 0, [ -4736,    796], [0x97, 0x1a, 0x41, 0xff]],
    [[  2781,  -4138,  -1874], 0, [  5056,    796], [0xbb, 0x54, 0x40, 0xff]],
    [[  4291,  -2756,  -2160], 0, [ -5224,      0], [0xfc, 0x25, 0x79, 0xff]],
    [[  2950,  -4138,  -1782], 0, [  4568,      0], [0x52, 0xc5, 0x4c, 0xff]],
];

// 0x0700B3D0 - 0x0700B4D0
const ddd_seg7_vertex_0700B3D0 = [
    [[  4291,  -2756,  -2160], 0, [ -7468,    906], [0xfc, 0x25, 0x79, 0xff]],
    [[  2950,  -4138,  -1782], 0, [  2320,    906], [0x52, 0xc5, 0x4c, 0xff]],
    [[  4326,  -2756,  -2354], 0, [ -7776,      0], [0x3e, 0xa2, 0xc6, 0xff]],
    [[  2986,  -4138,  -1976], 0, [  2012,      0], [0x40, 0xae, 0xb8, 0xff]],
    [[  4326,  -2756,  -2354], 0, [ -2116,   1374], [0x3e, 0xa2, 0xc6, 0xff]],
    [[  2986,  -4138,  -1976], 0, [  7632,    480], [0x40, 0xae, 0xb8, 0xff]],
    [[  4131,  -2756,  -2425], 0, [ -1596,    478], [0xd8, 0x09, 0x89, 0xff]],
    [[  2790,  -4138,  -2047], 0, [  8152,   -418], [0xaa, 0x41, 0xbe, 0xff]],
    [[  4131,  -2756,  -2425], 0, [ -5932,    810], [0xd8, 0x09, 0x89, 0xff]],
    [[  2790,  -4138,  -2047], 0, [  3856,    810], [0xaa, 0x41, 0xbe, 0xff]],
    [[  4122,  -2756,  -2252], 0, [ -5732,      0], [0x97, 0x1a, 0x41, 0xff]],
    [[  2781,  -4138,  -1874], 0, [  4056,      0], [0xbb, 0x54, 0x40, 0xff]],
    [[  5453,  -2551,  -1842], 0, [  3544,   -544], [0x4e, 0x63, 0xfb, 0xff]],
    [[  6374,  -2346,  -2764], 0, [ -3036,   -542], [0x35, 0x5a, 0x46, 0xff]],
    [[  5144,  -2551,  -1937], 0, [  4292,    888], [0xdd, 0x5b, 0xb1, 0xff]],
    [[  6199,  -2387,  -2940], 0, [ -3004,    678], [0xad, 0x34, 0xb1, 0xff]],
];

// 0x0700B4D0 - 0x0700B5D0
const ddd_seg7_vertex_0700B4D0 = [
    [[  5144,  -2551,  -1937], 0, [  -968,    480], [0xdd, 0x5b, 0xb1, 0xff]],
    [[  4326,  -2551,  -2354], 0, [  3536,   1266], [0x1c, 0x34, 0x91, 0xff]],
    [[  4122,  -2551,  -2252], 0, [  4364,    478], [0xb7, 0x67, 0x04, 0xff]],
    [[  5248,  -2551,  -1637], 0, [ -1908,   -798], [0xc9, 0x5b, 0x44, 0xff]],
    [[  5453,  -2551,  -1842], 0, [ -2584,    480], [0x4e, 0x63, 0xfb, 0xff]],
    [[  5248,  -2551,  -1637], 0, [  5748,    990], [0xc9, 0x5b, 0x44, 0xff]],
    [[  6067,  -2551,   -818], 0, [     0,    990], [0x02, 0x6d, 0xc0, 0xff]],
    [[  5453,  -2551,  -1842], 0, [  5748,   2434], [0x4e, 0x63, 0xfb, 0xff]],
    [[  5862,  -2551,   -511], 0, [  -388,   -816], [0xc7, 0x51, 0x4d, 0xff]],
    [[  5862,  -2551,   -511], 0, [ -3604,    990], [0xc7, 0x51, 0x4d, 0xff]],
    [[  6989,  -2551,   -921], 0, [  2372,    990], [0x1f, 0x5c, 0x50, 0xff]],
    [[  6067,  -2551,   -818], 0, [ -2120,   -102], [0x02, 0x6d, 0xc0, 0xff]],
    [[  6067,  -2756,   -818], 0, [     0,    990], [0x40, 0xab, 0xbd, 0xff]],
    [[  6989,  -2756,   -921], 0, [  4596,    990], [0x13, 0x8f, 0x35, 0xff]],
    [[  5862,  -2756,   -511], 0, [ -1212,   -420], [0xda, 0xbe, 0x64, 0xff]],
    [[  6989,  -2592,  -1187], 0, [  2828,   -258], [0xe4, 0x5d, 0xaf, 0xff]],
];

// 0x0700B5D0 - 0x0700B6D0
const ddd_seg7_vertex_0700B5D0 = [
    [[  5453,  -2756,  -1842], 0, [ -1264,   1108], [0x55, 0xa5, 0x16, 0xff]],
    [[  6067,  -2756,   -818], 0, [  4676,   1566], [0x40, 0xab, 0xbd, 0xff]],
    [[  5862,  -2756,   -511], 0, [  5588,      0], [0xda, 0xbe, 0x64, 0xff]],
    [[  5146,  -2756,  -1945], 0, [ -2404,      0], [0xff, 0xa8, 0xa6, 0xff]],
    [[  5248,  -2756,  -1637], 0, [  -804,   -260], [0xc6, 0xcf, 0x65, 0xff]],
    [[  5248,  -2756,  -1637], 0, [ -1560,    478], [0xc6, 0xcf, 0x65, 0xff]],
    [[  4122,  -2756,  -2252], 0, [  4756,   1508], [0x97, 0x1a, 0x41, 0xff]],
    [[  4326,  -2756,  -2354], 0, [  4260,    478], [0x3e, 0xa2, 0xc6, 0xff]],
    [[  5146,  -2756,  -1945], 0, [  -216,   -418], [0xff, 0xa8, 0xa6, 0xff]],
    [[  6067,  -2756,   -818], 0, [     0,    990], [0x40, 0xab, 0xbd, 0xff]],
    [[  6989,  -2756,  -1228], 0, [  4764,   2512], [0xd3, 0xd2, 0x93, 0xff]],
    [[  6989,  -2756,   -921], 0, [  4596,    990], [0x13, 0x8f, 0x35, 0xff]],
    [[  5146,  -2756,  -1945], 0, [  3048,   -532], [0xff, 0xa8, 0xa6, 0xff]],
    [[  6256,  -2520,  -2882], 0, [ -4136,    990], [0xd4, 0xa1, 0xb9, 0xff]],
    [[  5453,  -2756,  -1842], 0, [  2524,    990], [0x55, 0xa5, 0x16, 0xff]],
    [[  6374,  -2551,  -2764], 0, [ -4004,   1824], [0x44, 0xa0, 0x2e, 0xff]],
];

// 0x0700B6D0 - 0x0700B7D0
const ddd_seg7_vertex_0700B6D0 = [
    [[  6067,  -2756,   -818], 0, [  2928,    826], [0x40, 0xab, 0xbd, 0xff]],
    [[  6067,  -2551,   -818], 0, [  2840,   -166], [0x02, 0x6d, 0xc0, 0xff]],
    [[  6989,  -2756,  -1228], 0, [ -2072,   1320], [0xd3, 0xd2, 0x93, 0xff]],
    [[  6989,  -2592,  -1187], 0, [ -2072,    480], [0xe4, 0x5d, 0xaf, 0xff]],
    [[  5453,  -2756,  -1842], 0, [  5928,    990], [0x55, 0xa5, 0x16, 0xff]],
    [[  5453,  -2551,  -1842], 0, [  5928,      0], [0x4e, 0x63, 0xfb, 0xff]],
    [[  6067,  -2756,   -818], 0, [     0,    990], [0x40, 0xab, 0xbd, 0xff]],
    [[  6067,  -2551,   -818], 0, [     0,      0], [0x02, 0x6d, 0xc0, 0xff]],
    [[  6374,  -2551,  -2764], 0, [  6552,    990], [0x44, 0xa0, 0x2e, 0xff]],
    [[  6374,  -2346,  -2764], 0, [  6712,    -20], [0x35, 0x5a, 0x46, 0xff]],
    [[  5453,  -2756,  -1842], 0, [     0,    990], [0x55, 0xa5, 0x16, 0xff]],
    [[  5453,  -2551,  -1842], 0, [   128,    -20], [0x4e, 0x63, 0xfb, 0xff]],
    [[  5146,  -2756,  -1945], 0, [  7112,   2010], [0xff, 0xa8, 0xa6, 0xff]],
    [[  5144,  -2551,  -1937], 0, [  7120,    990], [0xdd, 0x5b, 0xb1, 0xff]],
    [[  6256,  -2520,  -2882], 0, [  -160,    990], [0xd4, 0xa1, 0xb9, 0xff]],
    [[  6199,  -2387,  -2940], 0, [  -140,    334], [0xad, 0x34, 0xb1, 0xff]],
];

// 0x0700B7D0 - 0x0700B890
const ddd_seg7_vertex_0700B7D0 = [
    [[  4326,  -2756,  -2354], 0, [  4428,   1984], [0x3e, 0xa2, 0xc6, 0xff]],
    [[  4326,  -2551,  -2354], 0, [  4652,    990], [0x1c, 0x34, 0x91, 0xff]],
    [[  5146,  -2756,  -1945], 0, [     0,    990], [0xff, 0xa8, 0xa6, 0xff]],
    [[  5862,  -2551,   -511], 0, [  6372,      0], [0xc7, 0x51, 0x4d, 0xff]],
    [[  5248,  -2551,  -1637], 0, [     0,      0], [0xc9, 0x5b, 0x44, 0xff]],
    [[  5248,  -2756,  -1637], 0, [     0,    990], [0xc6, 0xcf, 0x65, 0xff]],
    [[  5144,  -2551,  -1937], 0, [   184,    -10], [0xdd, 0x5b, 0xb1, 0xff]],
    [[  5248,  -2756,  -1637], 0, [  6372,    990], [0xc6, 0xcf, 0x65, 0xff]],
    [[  5248,  -2551,  -1637], 0, [  6372,      0], [0xc9, 0x5b, 0x44, 0xff]],
    [[  4122,  -2756,  -2252], 0, [     0,    990], [0x97, 0x1a, 0x41, 0xff]],
    [[  4122,  -2551,  -2252], 0, [     0,      0], [0xb7, 0x67, 0x04, 0xff]],
    [[  5862,  -2756,   -511], 0, [  6372,    990], [0xda, 0xbe, 0x64, 0xff]],
];

// 0x0700B890 - 0x0700BAE0
const ddd_seg7_dl_0700B890 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, ddd_seg7_texture_07002000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_0700B0D8.l, 1),
    gsSPLight(ddd_seg7_lights_0700B0D8.a, 2),
    gsSPVertex(ddd_seg7_vertex_0700B0F0, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  0,  5, 0x0,  6,  7,  8, 0x0),
    gsSP2Triangles( 7,  9,  8, 0x0, 10, 11, 12, 0x0),
    gsSP1Triangle(11, 13, 12, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B1D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B2D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B3D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B4D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  5,  8,  6, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0, 12, 13, 14, 0x0),
    gsSP1Triangle(10, 15, 11, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B5D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 2,  4,  3, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 5,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B6D0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(ddd_seg7_vertex_0700B7D0, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 1,  6,  2, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0, 11,  3,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700BAE0 - 0x0700BB50
export const ddd_seg7_dl_0700BAE0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPClearGeometryMode(G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_0700B890),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
