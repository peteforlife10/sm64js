// Thi

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_HANGABLE, SURFACE_DEATH_PLANE, SURFACE_WALL_MISC,
    SURFACE_HARD_NOT_SLIPPERY, SURFACE_CAMERA_FREE_ROAM, SURFACE_THI3_WALLKICK
} from "../../../../include/surface_terrains"

// 0x0700D444 - 0x0700DD50
export const thi_seg7_area_3_collision = [
    COL_INIT(),
    COL_VERTEX_INIT(0xA0),
    COL_VERTEX(-716, 1843, -716),
    COL_VERTEX(-101, 1843, 0),
    COL_VERTEX(0, 1843, -101),
    COL_VERTEX(-716, 1843, 717),
    COL_VERTEX(-2047, 2150, -2047),
    COL_VERTEX(717, 1843, -716),
    COL_VERTEX(0, 1843, 102),
    COL_VERTEX(102, 1843, 0),
    COL_VERTEX(717, 1843, 717),
    COL_VERTEX(2048, 2150, -2047),
    COL_VERTEX(2048, 2150, 2048),
    COL_VERTEX(-2047, 2150, 2048),
    COL_VERTEX(102, 3072, 102),
    COL_VERTEX(102, 3277, 102),
    COL_VERTEX(102, 3277, -101),
    COL_VERTEX(102, 3482, -101),
    COL_VERTEX(-101, 3277, 102),
    COL_VERTEX(102, 3482, 102),
    COL_VERTEX(-101, 3072, 102),
    COL_VERTEX(-101, 3482, 102),
    COL_VERTEX(102, 3072, -101),
    COL_VERTEX(-101, 3482, -101),
    COL_VERTEX(-101, 3277, -101),
    COL_VERTEX(-101, 3072, -101),
    COL_VERTEX(614, 1024, 2253),
    COL_VERTEX(614, 1024, 2458),
    COL_VERTEX(410, 1024, 2253),
    COL_VERTEX(410, 1229, 2253),
    COL_VERTEX(614, 1229, 2253),
    COL_VERTEX(614, 1229, 2048),
    COL_VERTEX(1229, -3071, 1024),
    COL_VERTEX(819, -3071, 1434),
    COL_VERTEX(614, -3071, 1434),
    COL_VERTEX(410, -3071, 2048),
    COL_VERTEX(410, -3071, 1024),
    COL_VERTEX(1024, -3071, 819),
    COL_VERTEX(1229, -3071, 614),
    COL_VERTEX(1843, -3071, 410),
    COL_VERTEX(1434, -3071, 0),
    COL_VERTEX(1843, -3071, 0),
    COL_VERTEX(1434, -3071, -818),
    COL_VERTEX(1024, -3071, -1228),
    COL_VERTEX(1434, -3071, -409),
    COL_VERTEX(1024, -3071, -409),
    COL_VERTEX(614, -3071, -818),
    COL_VERTEX(614, -3071, -1023),
    COL_VERTEX(-818, -3071, -1433),
    COL_VERTEX(-409, 1024, -1023),
    COL_VERTEX(-409, -3071, -1023),
    COL_VERTEX(205, -3071, -1637),
    COL_VERTEX(205, -3071, -1228),
    COL_VERTEX(-1433, -3071, -2047),
    COL_VERTEX(-1023, -3071, -1023),
    COL_VERTEX(-204, -3071, -204),
    COL_VERTEX(-818, -3071, -204),
    COL_VERTEX(-818, -3071, -818),
    COL_VERTEX(-818, 768, -818),
    COL_VERTEX(-204, -3071, -613),
    COL_VERTEX(-2047, -3071, 0),
    COL_VERTEX(-1023, -3071, 0),
    COL_VERTEX(-1023, -3071, 614),
    COL_VERTEX(-204, 1434, 614),
    COL_VERTEX(-204, -3071, 614),
    COL_VERTEX(-818, 1434, 1024),
    COL_VERTEX(-2047, -3071, 1024),
    COL_VERTEX(0, 1434, 1024),
    COL_VERTEX(0, -3071, 1024),
    COL_VERTEX(614, 1229, 2458),
    COL_VERTEX(410, 1024, 2458),
    COL_VERTEX(410, 1229, 2458),
    COL_VERTEX(410, 1229, 2048),
    COL_VERTEX(819, 1024, 1434),
    COL_VERTEX(614, 1024, 1434),
    COL_VERTEX(1229, 1024, 1024),
    COL_VERTEX(614, 1024, 2048),
    COL_VERTEX(614, -3071, 2048),
    COL_VERTEX(410, 1024, 2048),
    COL_VERTEX(410, 1024, 1024),
    COL_VERTEX(1024, 1024, 819),
    COL_VERTEX(1229, 1024, 614),
    COL_VERTEX(1434, 1024, 0),
    COL_VERTEX(1843, 1024, 410),
    COL_VERTEX(1843, 1024, 0),
    COL_VERTEX(1434, 1024, -818),
    COL_VERTEX(1434, 1024, -409),
    COL_VERTEX(1024, 1024, -1228),
    COL_VERTEX(1024, 1024, -409),
    COL_VERTEX(614, 1024, -818),
    COL_VERTEX(614, 1024, -1023),
    COL_VERTEX(205, 1024, -1637),
    COL_VERTEX(-818, 1024, -1433),
    COL_VERTEX(205, 1024, -1228),
    COL_VERTEX(-1433, 512, -2047),
    COL_VERTEX(-1023, 512, -1023),
    COL_VERTEX(-2047, 512, -818),
    COL_VERTEX(-2047, -3071, -818),
    COL_VERTEX(-818, 768, -204),
    COL_VERTEX(-204, 768, -204),
    COL_VERTEX(-204, 768, -613),
    COL_VERTEX(-2047, 1024, 0),
    COL_VERTEX(-1023, 1024, 0),
    COL_VERTEX(-1023, 1024, 614),
    COL_VERTEX(-2047, 1024, 614),
    COL_VERTEX(-2047, -3071, 614),
    COL_VERTEX(-818, -3071, 1024),
    COL_VERTEX(-2047, 1434, 1024),
    COL_VERTEX(-1023, 1434, 2048),
    COL_VERTEX(-1023, -3071, 2048),
    COL_VERTEX(0, 1741, 0),
    COL_VERTEX(-71, 1812, 0),
    COL_VERTEX(0, 1812, -71),
    COL_VERTEX(0, 1812, 72),
    COL_VERTEX(72, 1812, 0),
    COL_VERTEX(-2047, 1536, -818),
    COL_VERTEX(-1637, 512, -1228),
    COL_VERTEX(-1637, 1536, -1228),
    COL_VERTEX(-2047, 1536, -1228),
    COL_VERTEX(-2047, 1434, 2048),
    COL_VERTEX(-306, 2458, -306),
    COL_VERTEX(-306, 2458, 307),
    COL_VERTEX(-306, 2560, -306),
    COL_VERTEX(307, 2458, -306),
    COL_VERTEX(307, 2458, 307),
    COL_VERTEX(-2047, 1331, -1740),
    COL_VERTEX(-1740, 1331, -1740),
    COL_VERTEX(512, 3072, -511),
    COL_VERTEX(307, 2560, -306),
    COL_VERTEX(-306, 2560, 307),
    COL_VERTEX(307, 2560, 307),
    COL_VERTEX(0, 2253, 0),
    COL_VERTEX(-1842, 1331, -2047),
    COL_VERTEX(-1842, 512, -2047),
    COL_VERTEX(-1740, 512, -1740),
    COL_VERTEX(-2047, 1331, -2047),
    COL_VERTEX(512, 3072, 512),
    COL_VERTEX(-511, 3072, 512),
    COL_VERTEX(-511, 3072, -511),
    COL_VERTEX(2048, -3071, 2048),
    COL_VERTEX(2048, -3071, -2047),
    COL_VERTEX(-2047, -3071, -2047),
    COL_VERTEX(-2047, -3071, 2048),
    COL_VERTEX(-2047, 512, -2047),
    COL_VERTEX(-2047, 512, -1228),
    COL_VERTEX(-2047, 512, -1740),
    COL_VERTEX(717, 1812, -716),
    COL_VERTEX(-716, 1812, -716),
    COL_VERTEX(-716, 1812, 717),
    COL_VERTEX(2048, 2120, -2047),
    COL_VERTEX(-2047, 2120, -2047),
    COL_VERTEX(-2047, 2120, 2048),
    COL_VERTEX(717, 1812, 717),
    COL_VERTEX(2048, 2120, 2048),
    COL_VERTEX(2048, 2355, 2048),
    COL_VERTEX(-2047, 2355, 2048),
    COL_VERTEX(1024, 2867, 1024),
    COL_VERTEX(2048, 2355, -2047),
    COL_VERTEX(1024, 2867, -1023),
    COL_VERTEX(-1023, 2867, 1024),
    COL_VERTEX(-1023, 2867, -1023),
    COL_VERTEX(-2047, 2355, -2047),
    COL_TRI_INIT(SURFACE_DEFAULT, 116),
    COL_TRI(12, 13, 14),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 1, 0),
    COL_TRI(4, 0, 5),
    COL_TRI(4, 3, 0),
    COL_TRI(5, 0, 2),
    COL_TRI(3, 6, 1),
    COL_TRI(2, 7, 5),
    COL_TRI(8, 7, 6),
    COL_TRI(8, 5, 7),
    COL_TRI(4, 5, 9),
    COL_TRI(5, 10, 9),
    COL_TRI(5, 8, 10),
    COL_TRI(3, 8, 6),
    COL_TRI(10, 8, 3),
    COL_TRI(4, 11, 3),
    COL_TRI(10, 3, 11),
    COL_TRI(13, 15, 14),
    COL_TRI(16, 17, 13),
    COL_TRI(18, 16, 13),
    COL_TRI(18, 13, 12),
    COL_TRI(16, 19, 17),
    COL_TRI(19, 15, 17),
    COL_TRI(13, 17, 15),
    COL_TRI(19, 21, 15),
    COL_TRI(14, 15, 21),
    COL_TRI(12, 14, 20),
    COL_TRI(14, 21, 22),
    COL_TRI(20, 14, 22),
    COL_TRI(20, 22, 23),
    COL_TRI(22, 21, 19),
    COL_TRI(23, 22, 16),
    COL_TRI(22, 19, 16),
    COL_TRI(23, 16, 18),
    COL_TRI(24, 25, 67),
    COL_TRI(25, 68, 69),
    COL_TRI(25, 69, 67),
    COL_TRI(26, 68, 25),
    COL_TRI(27, 68, 26),
    COL_TRI(27, 69, 68),
    COL_TRI(28, 67, 69),
    COL_TRI(28, 69, 27),
    COL_TRI(24, 67, 28),
    COL_TRI(29, 28, 27),
    COL_TRI(29, 27, 70),
    COL_TRI(26, 25, 24),
    COL_TRI(30, 71, 31),
    COL_TRI(31, 72, 32),
    COL_TRI(31, 71, 72),
    COL_TRI(35, 73, 30),
    COL_TRI(30, 73, 71),
    COL_TRI(32, 72, 74),
    COL_TRI(32, 74, 75),
    COL_TRI(33, 76, 77),
    COL_TRI(33, 77, 34),
    COL_TRI(34, 77, 78),
    COL_TRI(34, 78, 35),
    COL_TRI(35, 78, 73),
    COL_TRI(41, 83, 40),
    COL_TRI(36, 79, 80),
    COL_TRI(36, 80, 38),
    COL_TRI(37, 79, 36),
    COL_TRI(37, 81, 79),
    COL_TRI(38, 80, 82),
    COL_TRI(38, 82, 39),
    COL_TRI(39, 82, 81),
    COL_TRI(39, 81, 37),
    COL_TRI(40, 83, 84),
    COL_TRI(40, 84, 42),
    COL_TRI(41, 85, 83),
    COL_TRI(42, 84, 86),
    COL_TRI(42, 86, 43),
    COL_TRI(43, 86, 87),
    COL_TRI(43, 87, 44),
    COL_TRI(44, 87, 88),
    COL_TRI(44, 88, 45),
    COL_TRI(45, 88, 85),
    COL_TRI(45, 85, 41),
    COL_TRI(46, 89, 49),
    COL_TRI(47, 90, 46),
    COL_TRI(46, 90, 89),
    COL_TRI(49, 89, 91),
    COL_TRI(49, 91, 50),
    COL_TRI(50, 91, 47),
    COL_TRI(50, 47, 48),
    COL_TRI(48, 47, 46),
    COL_TRI(51, 92, 93),
    COL_TRI(51, 93, 52),
    COL_TRI(52, 93, 94),
    COL_TRI(58, 100, 59),
    COL_TRI(52, 94, 95),
    COL_TRI(53, 96, 54),
    COL_TRI(54, 96, 56),
    COL_TRI(54, 56, 55),
    COL_TRI(53, 97, 96),
    COL_TRI(55, 56, 57),
    COL_TRI(56, 98, 57),
    COL_TRI(57, 98, 97),
    COL_TRI(57, 97, 53),
    COL_TRI(58, 99, 100),
    COL_TRI(64, 63, 104),
    COL_TRI(59, 100, 101),
    COL_TRI(59, 101, 60),
    COL_TRI(60, 101, 102),
    COL_TRI(60, 102, 103),
    COL_TRI(61, 65, 66),
    COL_TRI(62, 61, 66),
    COL_TRI(63, 61, 104),
    COL_TRI(61, 62, 104),
    COL_TRI(66, 65, 107),
    COL_TRI(64, 105, 63),
    COL_TRI(65, 106, 107),
    COL_TRI(108, 109, 110),
    COL_TRI(108, 111, 109),
    COL_TRI(108, 112, 111),
    COL_TRI(108, 110, 112),
    COL_TRI_INIT(SURFACE_HANGABLE, 16),
    COL_TRI(144, 112, 110),
    COL_TRI(110, 145, 144),
    COL_TRI(110, 109, 145),
    COL_TRI(146, 109, 111),
    COL_TRI(146, 145, 109),
    COL_TRI(147, 145, 148),
    COL_TRI(145, 149, 148),
    COL_TRI(147, 144, 145),
    COL_TRI(145, 146, 149),
    COL_TRI(149, 146, 150),
    COL_TRI(111, 150, 146),
    COL_TRI(111, 112, 150),
    COL_TRI(112, 144, 150),
    COL_TRI(149, 150, 151),
    COL_TRI(147, 151, 150),
    COL_TRI(147, 150, 144),
    COL_TRI_INIT(SURFACE_DEATH_PLANE, 2),
    COL_TRI(137, 138, 139),
    COL_TRI(137, 139, 140),
    COL_TRI_INIT(SURFACE_WALL_MISC, 10),
    COL_TRI(76, 26, 24),
    COL_TRI(114, 142, 116),
    COL_TRI(114, 116, 115),
    COL_TRI(143, 132, 124),
    COL_TRI(143, 124, 123),
    COL_TRI(70, 27, 26),
    COL_TRI(70, 26, 76),
    COL_TRI(74, 28, 29),
    COL_TRI(76, 24, 74),
    COL_TRI(74, 24, 28),
    COL_TRI_INIT(SURFACE_HARD_NOT_SLIPPERY, 52),
    COL_TRI(102, 101, 100),
    COL_TRI(113, 114, 115),
    COL_TRI(113, 115, 116),
    COL_TRI(113, 94, 114),
    COL_TRI(63, 65, 61),
    COL_TRI(63, 106, 65),
    COL_TRI(63, 117, 106),
    COL_TRI(63, 105, 117),
    COL_TRI(102, 100, 99),
    COL_TRI(96, 97, 98),
    COL_TRI(96, 98, 56),
    COL_TRI(85, 84, 83),
    COL_TRI(85, 86, 84),
    COL_TRI(85, 87, 86),
    COL_TRI(85, 88, 87),
    COL_TRI(79, 82, 80),
    COL_TRI(79, 81, 82),
    COL_TRI(90, 91, 89),
    COL_TRI(78, 71, 73),
    COL_TRI(78, 72, 71),
    COL_TRI(78, 77, 72),
    COL_TRI(74, 77, 76),
    COL_TRI(74, 72, 77),
    COL_TRI(90, 47, 91),
    COL_TRI(118, 126, 121),
    COL_TRI(118, 120, 126),
    COL_TRI(119, 120, 118),
    COL_TRI(119, 127, 120),
    COL_TRI(120, 127, 128),
    COL_TRI(120, 128, 126),
    COL_TRI(121, 126, 128),
    COL_TRI(121, 128, 122),
    COL_TRI(122, 128, 127),
    COL_TRI(122, 127, 119),
    COL_TRI(121, 122, 129),
    COL_TRI(118, 121, 129),
    COL_TRI(122, 119, 129),
    COL_TRI(119, 118, 129),
    COL_TRI(123, 124, 130),
    COL_TRI(124, 131, 130),
    COL_TRI(124, 132, 131),
    COL_TRI(123, 130, 133),
    COL_TRI(125, 12, 20),
    COL_TRI(12, 134, 135),
    COL_TRI(12, 135, 18),
    COL_TRI(125, 134, 12),
    COL_TRI(23, 18, 135),
    COL_TRI(23, 135, 136),
    COL_TRI(20, 23, 136),
    COL_TRI(20, 136, 125),
    COL_TRI(2, 6, 7),
    COL_TRI(2, 1, 6),
    COL_TRI_INIT(SURFACE_CAMERA_FREE_ROAM, 22),
    COL_TRI(155, 158, 159),
    COL_TRI(137, 74, 29),
    COL_TRI(152, 137, 29),
    COL_TRI(29, 70, 152),
    COL_TRI(70, 153, 152),
    COL_TRI(140, 153, 70),
    COL_TRI(140, 70, 76),
    COL_TRI(154, 152, 153),
    COL_TRI(137, 152, 155),
    COL_TRI(152, 156, 155),
    COL_TRI(152, 154, 156),
    COL_TRI(154, 153, 157),
    COL_TRI(158, 153, 159),
    COL_TRI(139, 153, 140),
    COL_TRI(139, 159, 153),
    COL_TRI(158, 157, 153),
    COL_TRI(155, 156, 158),
    COL_TRI(138, 159, 139),
    COL_TRI(76, 33, 140),
    COL_TRI(137, 155, 138),
    COL_TRI(137, 75, 74),
    COL_TRI(138, 155, 159),
    COL_TRI_INIT(SURFACE_THI3_WALLKICK, 2),
    COL_TRI(94, 92, 141),
    COL_TRI(94, 93, 92),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
