var fs = require("fs");
var Constants = require("../js/const/const");

var data = [
["小口径主砲",	"12.7cm連装砲",					"",					1,1,1,1,1,1,1],
["小口径主砲",	"12.7cm連装砲B型改二",	"夕立改二",	0,1,1,1,0,0,0],
["小口径主砲",	"12.7cm連装砲B型改二",	"綾波改二",	0,1,1,1,0,0,0],
["小口径主砲",	"10cm高角砲＋高射装置",	"秋月",			0,1,1,1,1,0,0],
["小口径主砲",	"10cm高角砲＋高射装置",	"照月",			1,0,0,0,1,1,1],
["中口径主砲",	"14cm単装砲",						"",					1,1,1,1,1,1,1],
["中口径主砲",	"14cm連装砲",						"夕張",			0,1,0,0,1,0,0],
["中口径主砲",	"15.2cm連装砲",					"阿賀野",		0,0,0,0,1,1,1],
["中口径主砲",	"15.2cm連装砲",					"能代",			1,1,0,0,0,1,1],
["中口径主砲",	"15.2cm連装砲",					"矢矧",			0,1,1,1,1,0,0],
["中口径主砲",	"15.2cm連装砲改",				"矢矧",			0,0,0,1,1,1,1],
["中口径主砲",	"15.2cm連装砲改",				"酒匂",			1,1,1,0,0,0,1],
["中口径主砲",	"15.5cm三連装砲",				"最上",			0,0,0,0,0,1,1],
["中口径主砲",	"15.5cm三連装砲",				"大淀",			1,1,0,0,0,0,0],
["中口径主砲",	"20.3cm連装砲",					"青葉",			1,0,0,0,1,1,1],
["中口径主砲",	"20.3cm連装砲",					"衣笠",			1,1,1,1,1,1,1],
["中口径主砲",	"20.3cm(2号)連装砲",		"妙高",			1,1,1,0,0,0,0],
["中口径主砲",	"20.3cm(3号)連装砲",		"三隈",			0,0,1,1,0,0,0],
["大口径主砲",	"35.6cm連装砲",					"扶桑",			1,0,0,0,0,1,1],
["大口径主砲",	"38cm連装砲",						"Bismarck",	0,0,0,0,1,1,1],
["大口径主砲",	"38cm連装砲改",					"Bismarck",	1,1,1,0,0,0,0],
["大口径主砲",	"381mm／50 三連装砲",		"Littorio",	0,0,1,1,1,1,0],
["大口径主砲",	"381mm／50 三連装砲",		"Roma",			1,1,0,0,0,0,1],
["大口径主砲",	"381mm／50 三連装砲改",	"Littorio",	1,1,0,0,0,0,1],
["大口径主砲",	"381mm／50 三連装砲改",	"Roma",			0,0,1,1,1,1,0],
["大口径主砲",	"41cm連装砲",						"長門",			0,0,1,0,0,1,1],
["大口径主砲",	"41cm連装砲",						"陸奥",			1,1,0,0,1,0,0],
["大口径主砲",	"試製46cm連装砲",				"大和",			1,1,0,0,0,0,0],
["大口径主砲",	"試製46cm連装砲",				"武蔵",			0,0,1,1,0,0,0],
["大口径主砲",	"46cm三連装砲",					"大和",			0,0,0,0,0,1,1],
["大口径主砲",	"46cm三連装砲",					"武蔵",			1,1,0,0,0,0,0],
["大口径主砲",	"試製51cm連装砲",				"大和改",		0,1,1,0,0,0,0],
["大口径主砲",	"試製51cm連装砲",				"武蔵改",		0,1,0,1,0,0,0],
["副砲",				"90mm単装高角砲",				"Littorio",	0,1,1,1,1,0,0],
["副砲",				"90mm単装高角砲",				"Roma",			1,0,0,0,1,0,0],
["副砲",				"15.2cm単装砲",					"阿賀野",		1,1,1,0,0,0,0],
["副砲",				"15.2cm単装砲",					"金剛",			1,1,0,0,0,0,1],
["副砲",				"15.2cm単装砲",					"山城",			0,1,1,1,0,0,0],
["副砲",				"OTO 152mm三連装速射砲","Littorio",	1,0,1,1,0,0,1],
["副砲",				"OTO 152mm三連装速射砲","Roma",			1,1,0,0,1,1,0],
["魚雷",				"61cm三連装魚雷",				"吹雪",			0,0,0,0,1,1,1],
["魚雷",				"61cm三連装魚雷",				"吹雪改",		0,0,0,0,1,1,1],
["魚雷",				"61cm三連装魚雷",				"叢雲",			1,1,1,0,0,0,0],
["魚雷",				"61cm三連装(酸素)魚雷",	"吹雪改二",	0,0,0,0,1,1,1],
["魚雷",				"61cm四連装魚雷",				"",					1,1,1,0,0,1,1],
["魚雷",				"61cm四連装(酸素)魚雷",	"大井,北上",1,1,1,1,1,1,1],
["魚雷",				"61cm五連装(酸素)魚雷",	"島風",			0,0,0,1,1,0,0],
["電探",				"13号対空電探",					"時雨改二",	1,0,0,0,1,1,1],
["電探",				"13号対空電探",					"五十鈴改二",1,1,0,0,0,1,1],
["電探",				"13号対空電探",					"秋月",			0,0,1,1,1,0,0],
["電探",				"13号対空電探",					"照月",			0,1,1,1,0,0,0],
["電探",				"13号対空電探改",				"磯風改",		0,0,0,0,1,1,1],
["電探",				"13号対空電探改",				"初霜改二",	1,0,0,0,0,1,1],
["電探",				"13号対空電探改",				"雪風",			1,1,1,1,0,0,0],
["電探",				"22号対水上電探",				"日向",			1,1,0,0,0,1,1],
["電探",				"22号対水上電探",				"夕雲",			0,1,1,0,0,1,1],
["電探",				"22号対水上電探",				"島風",			0,0,0,1,1,1,1],
["電探",				"22号対水上電探改四",		"妙高改二",	1,0,0,0,1,1,1],
["電探",				"22号対水上電探改四",		"羽黒改二",	1,1,0,0,0,1,1],
["電探",				"22号対水上電探改四",		"金剛改二",	0,0,1,1,1,1,0],
["電探",				"21号対空電探",					"伊勢",			1,1,0,0,0,1,1],
["電探",				"21号対空電探",					"日向",			0,0,0,1,1,1,1],
["電探",				"21号対空電探改",				"大和",			1,0,0,0,1,1,1],
["電探",				"21号対空電探改",				"武蔵",			0,0,1,1,1,1,0],
["電探",				"32号対水上電探",				"伊勢",			0,0,0,1,1,1,1],
["電探",				"32号対水上電探",				"日向",			1,1,1,0,0,0,0],
["電探",				"32号対水上電探改",			"伊勢",			1,1,1,0,0,0,0],
["電探",				"32号対水上電探改",			"日向",			0,0,0,1,1,1,1],
["ソナー",			"九三式水中聴音機",			"夕張",			1,0,0,0,0,1,1],
["ソナー",			"九三式水中聴音機",			"五十鈴改二",0,1,0,0,1,1,0],
["ソナー",			"九三式水中聴音機",			"時雨改二",	1,0,0,0,1,1,1],
["ソナー",			"九三式水中聴音機",			"香取改",		1,0,0,0,0,1,1],
["ソナー",			"三式水中探信儀",				"夕張",			0,0,1,1,0,0,0],
["ソナー",			"三式水中探信儀",				"五十鈴改二",1,0,1,1,0,0,0],
["ソナー",			"四式水中聴音機",				"五十鈴改二",0,0,0,0,1,1,1],
["ソナー",			"四式水中聴音機",				"秋月",			1,0,0,0,0,0,0],
["ソナー",			"四式水中聴音機",				"照月",			0,0,0,1,0,0,0],
["ソナー",			"四式水中聴音機",				"香取改",		0,1,1,0,0,0,0],
["爆雷",				"九四式爆雷投射機",			"",					0,0,0,1,1,0,0],
["爆雷",				"三式爆雷投射機",				"五十鈴改二",0,0,0,1,1,0,0],
["対艦強化弾",	"九一式徹甲弾",					"比叡",			0,0,0,1,1,1,1],
["対艦強化弾",	"九一式徹甲弾",					"霧島",			1,1,0,0,0,1,1],
["対艦強化弾",	"一式徹甲弾",						"金剛",			1,0,0,0,0,1,1],
["対艦強化弾",	"一式徹甲弾",						"榛名",			0,1,1,1,0,0,0],
["対空機銃",		"25mm連装機銃",					"五十鈴改二",1,0,0,0,0,0,1],
["対空機銃",		"25mm三連装機銃",				"五十鈴改二",0,1,1,1,0,0,0],
["対空機銃",		"25mm三連装機銃",				"摩耶,摩耶改",0,0,1,1,1,0,0],
["対空機銃",		"25mm三連装機銃",				"摩耶改二",	1,1,0,0,0,1,1],
["高射装置",		"91式高射装置",					"摩耶,秋月",1,1,0,0,0,1,1],
["高射装置",		"91式高射装置",					"照月",			1,0,0,0,1,1,1],
["高射装置",		"94式高射装置",					"秋月,照月",1,1,1,1,1,1,1],
["高射装置",		"94式高射装置",					"吹雪改二",	1,0,0,0,1,1,1],
["高射装置",		"94式高射装置",					"摩耶改二",	1,0,0,0,1,1,1],
["探照灯",			"探照灯",								"暁",				0,0,0,0,1,1,1],
["探照灯",			"探照灯",								"神通",			1,0,0,0,0,1,1],
["探照灯",			"探照灯",								"青葉,綾波",0,1,1,1,0,0,0],
["探照灯",			"96式150cm探照灯",			"比叡",			1,1,0,0,0,1,1],
["探照灯",			"96式150cm探照灯",			"霧島",			0,0,1,1,1,1,0],
];

var pickup = "";
var output = [];

for ( var j = 0; j <= 6; j++){
	output[j] = [];
	for ( var i = 0; i < data.length; i++) {
		if( data[i][j+3] ) {
			if ( data[i][1] == pickup ) {
				output[j][output[j].length-1][2] = output[j][output[j].length-1][2].concat(",", data[i][2]);
			} else {
				pickup = data[i][1];
				output[j].push([data[i][0], data[i][1], data[i][2]]);
			}
		}
	}
}

var arrange = [];
for ( var i = 0; i < Constants.checkboxlist.length; i++) {
	arrange[i] = [];
	for ( var j = 0; j < output.length; j++ ){
		arrange[i][j] = [];
		for ( var k = 0; k < output[j].length; k++ ){
			if ( output[j][k][0] == Constants.checkboxlist[i] ) {
				arrange[i][j].push([output[j][k][0], output[j][k][1], output[j][k][2]]);
			}
		}
	}
}

console.log("data.json arrange complete!");
fs.writeFileSync("data.json", JSON.stringify(arrange));