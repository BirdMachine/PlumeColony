const os = require("os");
var hostname = os.hostname();
hostname = hostname.toLowerCase();
const colcols = {
	Cyan : "#00FFD1FF",
	Seafoam : "#00FF7FFF",
	Green : "#44FF00FF",
	Yellow : "#FFFB00FF ",
	Munish : "#F7033FFF",
	Hotpink : "#FF008BFF",
	Purp : "#4C00FFFF",
	Indigo : "#1B00FFFF ",
	Blue : "#03DFF7FF",
	Dpink:  "#FF3BF7FF",
	Lpink:  "#FFC5F7FF"
};
const themes = {
	ossifrage: (colcols.Yellow+","+colcols.Munish).split(','),
	gull: (colcols.Cyan+","+colcols.Seafoam).split(','),
	galah: (colcols.Lpink+","+colcols.Dpink).split(','),
	kingfisher: (colcols.Hotpink+","+colcols.Purp).split(','),
	mallard: (colcols.Green+","+colcols.Yellow).split(','),
	pigeon: (colcols.Indigo+","+colcols.Blue).split(','),
};

exports.colony = colcols;
exports.themes = themes;
exports.mine = themes[hostname];


/*

FFC5F7FF,FF3BF7FF

*/