// Bbh

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_MGR_MUSIC
} from "../../../include/surface_terrains"

// 0x07026C1C - 0x07026D18
export const bbh_seg7_collision_merry_go_round = [
    COL_INIT(),
    COL_VERTEX_INIT(0x10),
    COL_VERTEX(-204, 0, -204),
    COL_VERTEX(51, 307, -50),
    COL_VERTEX(205, 0, -204),
    COL_VERTEX(-50, 307, -50),
    COL_VERTEX(-204, 0, 205),
    COL_VERTEX(-50, 307, 51),
    COL_VERTEX(51, 1024, -50),
    COL_VERTEX(-50, 1024, -50),
    COL_VERTEX(51, 1024, 51),
    COL_VERTEX(51, 307, 51),
    COL_VERTEX(205, 0, 205),
    COL_VERTEX(-50, 1024, 51),
    COL_VERTEX(-1433, 0, 1434),
    COL_VERTEX(1434, 0, 1434),
    COL_VERTEX(1434, 0, -1433),
    COL_VERTEX(-1433, 0, -1433),
    COL_TRI_INIT(SURFACE_MGR_MUSIC, 24),
    COL_TRI(10, 12, 13),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(4, 3, 0),
    COL_TRI(4, 5, 3),
    COL_TRI(3, 6, 1),
    COL_TRI(3, 7, 6),
    COL_TRI(5, 7, 3),
    COL_TRI(1, 8, 9),
    COL_TRI(1, 6, 8),
    COL_TRI(2, 1, 9),
    COL_TRI(2, 9, 10),
    COL_TRI(5, 11, 7),
    COL_TRI(10, 5, 4),
    COL_TRI(9, 11, 5),
    COL_TRI(10, 9, 5),
    COL_TRI(9, 8, 11),
    COL_TRI(14, 2, 10),
    COL_TRI(10, 4, 12),
    COL_TRI(14, 10, 13),
    COL_TRI(12, 4, 0),
    COL_TRI(12, 0, 15),
    COL_TRI(15, 0, 2),
    COL_TRI(15, 2, 14),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
