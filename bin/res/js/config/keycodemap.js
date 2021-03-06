//浏览器keycode => android keycode 映射表
var KEYCODEMAP = {
	"8": 67, //BackSpace
	"13": 66,//Enter
	"16": 59,//SHIFT_LEFT

	"32": 62, //Space

	"48": 7, //0
	"49": 8, //1
	"50": 9, //2
	"51": 10, //3
	"52": 11, //4
	"53": 12, //5
	"54": 13, //6
	"55": 14, //7
	"56": 15, //8
	"57": 16, //9

	"65": 29,//a
	"66": 30,//b
	"67": 31,//c
	"68": 32,//d
	"69": 33,//e
	"70": 34,//f
	"71": 35,//g
	"72": 36,//h
	"73": 37,//i
	"74": 38,//j
	"75": 39,//k
	"76": 40,//l
	"77": 41,//m
	"78": 42,//n
	"79": 43,//o
	"80": 44,//p
	"81": 45,//q
	"82": 46,//r
	"83": 47,//s
	"84": 48,//t
	"85": 49,//u
	"86": 50,//v
	"87": 51,//w
	"88": 52,//x
	"89": 53,//y
	"90": 54,//z

	/* 小键盘 */
	"96": 7, //0
	"97": 8, //1
	"98": 9, //2
	"99": 10, //3
	"100": 11, //4
	"101": 12, //5
	"102": 13, //6
	"103": 14, //7
	"104": 15, //8
	"105": 16, //9

	"187": 70,//=
	"188": 74,//,
	"189": 69,//-
	"190": 56 //.
};

//安卓按键名称=>按键代码map
var KEYNAMEMAP = {
	"KEYCODE_CALL": 5,
	"KEYCODE_ENDCALL": 6,
	"KEYCODE_HOME": 3,
	"KEYCODE_MENU": 82,
	"KEYCODE_BACK": 4,
	"KEYCODE_SEARCH": 84,
	"KEYCODE_CAMERA": 27,
	"KEYCODE_FOCUS": 80,
	"KEYCODE_POWER": 26,
	"KEYCODE_NOTIFICATION": 83,
	"KEYCODE_MUTE": 91,//话筒静音键
	"KEYCODE_VOLUME_MUTE": 164,//扬声器静音键
	"KEYCODE_VOLUME_UP": 24,//音量增加键
	"KEYCODE_VOLUME_DOWN": 25//	音量减小键
}