// Bbh

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_NOISE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07026B94 - 0x07026C1C
export const bbh_seg7_collision_mesh_elevator = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-306, 0, -255),
    COL_VERTEX(307, 0, 256),
    COL_VERTEX(307, 0, -255),
    COL_VERTEX(-306, 0, 256),
    COL_VERTEX(307, -101, 256),
    COL_VERTEX(307, -101, -255),
    COL_VERTEX(-306, -101, 256),
    COL_VERTEX(-306, -101, -255),
    COL_TRI_INIT(SURFACE_DEFAULT, 10),
    COL_TRI(1, 4, 5),
    COL_TRI(4, 6, 7),
    COL_TRI(5, 4, 7),
    COL_TRI(3, 6, 4),
    COL_TRI(3, 4, 1),
    COL_TRI(0, 6, 3),
    COL_TRI(0, 7, 6),
    COL_TRI(2, 5, 7),
    COL_TRI(2, 7, 0),
    COL_TRI(1, 5, 2),
    COL_TRI_INIT(SURFACE_NOISE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
