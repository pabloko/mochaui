/*
Because these OVERRIDE the skin(s) defined in coolclock.js itself, we make sure the 'default skin' is also
adjusted accordingly.
*/

if(!window.CoolClock) {
	window.CoolClock = function(options) {
		return this.init(options);
	};
	CoolClock.config = {};
}

CoolClock.config.defaultSkin = 'chunkySwiss';

CoolClock.config.skins = {

	swissRail: {
		outerBorder:      { lineWidth: 2, radius: 95, color: "black", fillColor: 'white', alpha: 1 },
		smallIndicator:   { lineWidth: 2, startAt: 88, endAt: 92, color: "black", alpha: 1 },
		largeIndicator:   { lineWidth: 4, startAt: 79, endAt: 92, color: "black", alpha: 1 },
		hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 7, startAt: -15, endAt: 75, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: 1 },
		secondDecoration: { lineWidth: 1, startAt: 70, radius: 4, fillColor: "red", color: "red", alpha: 1 },
		digital:          { lineWidth: 0, color: 'black', fillColor: 'black', font: '18px sans-serif', AmPm: false }
	},

	dutchRail: {
		outerBorder:      { lineWidth: 2, radius: 95, color: "black", fillColor: 'white', alpha: 1 },
		smallIndicator:   { lineWidth: 2, startAt: 88, endAt: 92, color: "black", alpha: 1 },
		largeIndicator:   { lineWidth: 4, startAt: 79, endAt: 92, color: "black", alpha: 1 },
		hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 7, startAt: -15, endAt: 75, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1.5, startAt: -20, endAt: 85, color: "black", alpha: 1 },
		secondDecoration: { lineWidth: 4, startAt: 60, radius: 6, fillColor: "white", color: "black", alpha: 1 },
		digital:          { lineWidth: 1.3, color: 'black', font: '16px sans-serif', AmPm: false, timeTextPosition: { textPosX: 100, textPosY: 60 }  }
	},

	chunkySwiss: {
		outerBorder:      { lineWidth: 4, radius: 97, color: "black", fillColor: 'white', alpha: 1 },
		smallIndicator:   { lineWidth: 4, startAt: 89, endAt: 93, color: "black", alpha: 1 },
		largeIndicator:   { lineWidth: 8, startAt: 80, endAt: 93, color: "black", alpha: 1 },
		hourHand:         { lineWidth: 12, startAt: -15, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 10, startAt: -15, endAt: 85, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 4, startAt: -20, endAt: 85, color: "red", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 70, radius: 8, fillColor: "red", color: "red", alpha: 1 },
		digital:          { lineWidth: 0, color: 'black', fillColor: 'black', font: /* italic bold */ '24px sans-serif', AmPm: false, alpha: 1, timeTextPosition: { textPosX: 100, textPosY: 140 } }
	},

	chunkySwissOnBlack: {
		outerBorder:      { lineWidth: 4, radius: 97, color: "white", fillColor: 'black', alpha: 1 },
		smallIndicator:   { lineWidth: 4, startAt: 89, endAt: 93, color: "white", alpha: 1 },
		largeIndicator:   { lineWidth: 8, startAt: 80, endAt: 93, color: "white", alpha: 1 },
		hourHand:         { lineWidth: 12, startAt: -15, endAt: 60, color: "white", alpha: 1 },
		minuteHand:       { lineWidth: 10, startAt: -15, endAt: 85, color: "white", alpha: 1 },
		secondHand:       { lineWidth: 4, startAt: -20, endAt: 85, color: "red", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 70, radius: 8, fillColor: "red", color: "red", alpha: 1 },
		digital:          { fillColor: 'white', font: '24px sans-serif', AmPm: false, alpha: 1, timeTextPosition: { textPosX: 100, textPosY: 140 } }
	},

	fancy: {
		outerBorder:      { lineWidth: 5, radius: 95, color: "green", alpha: 0.7 },
		smallIndicator:   { lineWidth: 1, startAt: 80, endAt: 93, color: "black", alpha: 0.4 },
		largeIndicator:   { lineWidth: 1, startAt: 30, endAt: 93, color: "black", alpha: 0.5 },
		hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "blue", alpha: 0.7 },
		minuteHand:       { lineWidth: 7, startAt: -15, endAt: 92, color: "red", alpha: 0.7 },
		secondHand:       { lineWidth: 10, startAt: 80, endAt: 85, color: "blue", alpha: 0.3 },
		secondDecoration: { lineWidth: 1, startAt: 30, radius: 50, fillColor: "blue", color: "red", alpha: 0.15 },
		digital:          { fillColor: 'green', font: '15px sans-serif', AmPm: [' AM', ' PM'] }
	},

	machine: {
		outerBorder:      { lineWidth: 60, radius: 55, color: "#dd6655", alpha: 1 },
		smallIndicator:   { lineWidth: 4, startAt: 80, endAt: 95, color: "white", alpha: 1 },
		largeIndicator:   { lineWidth: 14, startAt: 77, endAt: 92, color: "#dd6655", alpha: 1 },
		hourHand:         { lineWidth: 18, startAt: -15, endAt: 40, color: "white", alpha: 1 },
		minuteHand:       { lineWidth: 14, startAt: 24, endAt: 100, color: "#771100", alpha: 0.5 },
		secondHand:       { lineWidth: 3, startAt: 22, endAt: 83, color: "green", alpha: 0 },
		secondDecoration: { lineWidth: 1, startAt: 52, radius: 26, fillColor: "#ffcccc", color: "red", alpha: 0.5 },
		digital:          { fillColor: 'white', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 1 }
		//digital:          { fillColor: '#4F0B00', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 0.8 }
	},

	simonbaird_com: {
		outerBorder:      { lineWidth: 60, radius: 110, color: "black", alpha: 0.15 },
		hourHand:         { lineWidth: 80, startAt: -15, endAt: 35,  color: 'magenta', alpha: 0.5 },
		minuteHand:       { lineWidth: 80, startAt: -15, endAt: 65,  color: 'cyan', alpha: 0.5 },
		secondDecoration: { lineWidth: 1,  startAt: 40,  radius: 40, color: "#fff", fillColor: 'yellow', alpha: 0.5 },
		digital:          { fillColor: 'white', font: '15px sans-serif', AmPm: [' am', ' pm'], alpha: 1, timeTextPosition: { textPosX: 156, textPosY: 189 } }
	},

	// by bonstio, http://bonstio.net
	classic/*was gIG*/: {
		outerBorder:      { lineWidth: 2, radius: 93, color: "#E5ECF9", alpha: 1 },
		smallIndicator:   { lineWidth: 2, startAt: 89, endAt: 94, color: "#3366CC", alpha: 1 },
		largeIndicator:   { lineWidth: 4, startAt: 83, endAt: 94, color: "#3366CC", alpha: 1 },
		hourHand:         { lineWidth: 5, startAt: 0, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: 0.85 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 2, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: '#285DC6', font: '18px sans-serif', AmPm: false, timeTextPosition: { textPosX: 100, textPosY: 135 } }
	},

	modern/*was gIG2*/: {
		outerBorder:      { lineWidth: 2, radius: 93, color: "#E5ECF9", alpha: 1 },
		smallIndicator:   { lineWidth: 5, startAt: 88, endAt: 94, color: "#3366CC", alpha: 1 },
		largeIndicator:   { lineWidth: 5, startAt: 88, endAt: 94, color: "#3366CC", alpha: 1 },
		hourHand:         { lineWidth: 8, startAt: 0, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 8, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 5, startAt: 80, endAt: 85, color: "red", alpha: 0.85 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 4, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: '#285DC6', font: 'bold 18px sans-serif', AmPm: false, timeTextPosition: { textPosX: 100, textPosY: 135 } }
	},

	simple/*was gIG3*/: {
		outerBorder:      { lineWidth: 2, radius: 93, color: "#E5ECF9", alpha: 1 },
		smallIndicator:   { lineWidth: 10, startAt: 90, endAt: 94, color: "#3366CC", alpha: 1 },
		largeIndicator:   { lineWidth: 10, startAt: 90, endAt: 94, color: "#3366CC", alpha: 1 },
		hourHand:         { lineWidth: 8, startAt: 0, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 8, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 5, startAt: 80, endAt: 85, color: "red", alpha: 0.85 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 4, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: '#285DC6', font: '24px sans-serif', AmPm: false, showDigitalSeconds: false, timeTextPosition: { textPosX: 100, textPosY: 140 } }
	},

	// by securephp
	securephp: {
		outerBorder:      { lineWidth: 1, radius: 45, color: "#669900", alpha: 0.3 },
		smallIndicator:   { lineWidth: 2, startAt: 80, endAt: 90 , color: "green", alpha: 1 },
		largeIndicator:   { lineWidth: 8.5, startAt: 20, endAt: 40 , color: "green", alpha: 0.4 },
		hourHand:         { lineWidth: 3, startAt: 0, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 2, startAt: 0, endAt: 75, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -10, endAt: 80, color: "blue", alpha: 0.8 },
		secondDecoration: { lineWidth: 1, startAt: 70, radius: 4, fillColor: "blue", color: "red", alpha: 1 },
		digital:          { fillColor: 'green', font: '16px sans-serif', AmPm: false, showDigitalSeconds: true, alpha: 0.9, timeTextPosition: { textPosX: 100, textPosY: 155 } }
	},

	Tes2: {
		outerBorder:      { lineWidth: 4, radius: 95, color: "black", alpha: 0.5 },
		smallIndicator:   { lineWidth: 1, startAt: 10, endAt: 50 , color: "#66CCFF", alpha: 1 },
		largeIndicator:   { lineWidth: 8.5, startAt: 60, endAt: 70, color: "#6699FF", alpha: 1 },
		hourHand:         { lineWidth: 5, startAt: -15, endAt: 60, color: "black", alpha: 0.7 },
		minuteHand:       { lineWidth: 3, startAt: -25, endAt: 75, color: "black", alpha: 0.7 },
		secondHand:       { lineWidth: 1.5, startAt: -20, endAt: 88, color: "red", alpha: 1 },
		secondDecoration: { lineWidth: 1, startAt: 20, radius: 4, fillColor: "blue", color: "red", alpha: 1 },
		digital:          { lineWidth: 1.1, color: '#4577DA', font: '12px sans-serif', AmPm: false, showDigitalSeconds: true, alpha: 1, timeTextPosition: { textPosX: 100, textPosY: 180 } }
	},


	Lev: {
		outerBorder:      { lineWidth: 10, radius: 95, color: "#CCFF33", alpha: 0.65 },
		smallIndicator:   { lineWidth: 5, startAt: 84, endAt: 90, color: "#996600", alpha: 1 },
		largeIndicator:   { lineWidth: 40, startAt: 25, endAt: 95, color: "#336600", alpha: 0.55 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 0.9 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 0.85 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 85, color: "black", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 5, radius: 10, fillColor: "black", color: "black", alpha: 1 },
		digital:          { lineWidth: 0.3, color: 'white', font: 'bold 18px sans-serif', AmPm: [' AM', ' PM'], alpha: 1, timeTextPosition: { textPosX: 100, textPosY: 135 } }
	},

	Sand: {
		outerBorder:      { lineWidth: 1, radius: 70, color: "black", alpha: 0.5 },
		smallIndicator:   { lineWidth: 3, startAt: 50, endAt: 70, color: "#0066FF", alpha: 0.5 },
		largeIndicator:   { lineWidth: 200, startAt: 80, endAt: 95, color: "#996600", alpha: 0.75 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 0.9 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 0.85 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 85, color: "black", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 5, radius: 10, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: '#0066FF', font: 'bold 16px sans-serif', AmPm: false, showDigitalSeconds: false, alpha: 0.5, timeTextPosition: { textPosX: 100, textPosY: 125 } }
	},

	Sun: {
		outerBorder:      { lineWidth: 100, radius: 140, color: "#99FFFF", alpha: 0.2 },
		smallIndicator:   { lineWidth: 300, startAt: 50, endAt: 70, color: "black", alpha: 0.1 },
		largeIndicator:   { lineWidth: 5, startAt: 80, endAt: 95, color: "black", alpha: 0.65 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 0.9 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 0.85 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 90, color: "black", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 5, radius: 10, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: 'white', font: 'bold 14px sans-serif', AmPm: false, alpha: 0.6, timeTextPosition: { textPosX: 30, textPosY: 7 } }
	},

	Tor: {
		outerBorder:      { lineWidth: 10, radius: 88, color: "#996600", alpha: 0.9 },
		smallIndicator:   { lineWidth: 6, startAt: -10, endAt: 73, color: "green", alpha: 0.3 },
		largeIndicator:   { lineWidth: 6, startAt: 73, endAt: 100, color: "black", alpha: 0.65 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -73, endAt: 73, color: "black", alpha: 0.8 },
		secondDecoration: { lineWidth: 2, startAt: 5, radius: 10, fillColor: "black", color: "black", alpha: 1 },
		digital:          { lineWidth: 1.6, color: 'green', font: '15px sans-serif', AmPm: false, alpha: 0.3, timeTextPosition: { textPosX: 55, textPosY: 100 } }
	},

	Cold: {
		outerBorder:      { lineWidth: 15, radius: 90, color: "black", alpha: 0.3 },
		smallIndicator:   { lineWidth: 15, startAt: -10, endAt: 95, color: "blue", alpha: 0.1 },
		largeIndicator:   { lineWidth: 3, startAt: 80, endAt: 95, color: "blue", alpha: 0.65 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 85, color: "black", alpha: 0.8 },
		secondDecoration: { lineWidth: 5, startAt: 30, radius: 10, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: 'blue', font: '15px sans-serif', AmPm: false, alpha: 0.65 }
	},

	Babosa: {
		outerBorder:      { lineWidth: 100, radius: 25, color: "blue", alpha: 0.25 },
		smallIndicator:   { lineWidth: 3, startAt: 90, endAt: 95, color: "#3366CC", alpha: 1 },
		largeIndicator:   { lineWidth: 4, startAt: 75, endAt: 95, color: "#3366CC", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 60, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 85, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 12, startAt: 75, endAt: 90, color: "red", alpha: 0.8 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 4, fillColor: "black", color: "black", alpha: 1 },
		digital:          { fillColor: 'white', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 0.95, timeTextPosition: { textPosX: 100, textPosY: 55 } }
	},

	Tumb: {
		outerBorder:      { lineWidth: 105, radius: 5, color: "green", alpha: 0.4 },
		smallIndicator:   { lineWidth: 1, startAt: 93, endAt: 98, color: "green", alpha: 1 },
		largeIndicator:   { lineWidth: 50, startAt: 0, endAt: 89, color: "red", alpha: 0.14 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 80, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 85, color: "black", alpha: 0.8 },
		secondDecoration: { lineWidth: 5, startAt: 50, radius: 90, fillColor: "black", color: "black", alpha: 0.05 },
		digital:          { fillColor: '#314c01', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 170 } }
	},

	Stone: {
		outerBorder:      { lineWidth: 15, radius: 80, color: "#339933", alpha: 0.5 },
		smallIndicator:   { lineWidth: 2, startAt: 70, endAt: 90, color: "#FF3300", alpha: 0.7 },
		largeIndicator:   { lineWidth: 15, startAt: 0, endAt: 29, color: "#FF6600", alpha: 0.3 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 75, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: 0, endAt: 85, color: "black", alpha: 0.8 },
		secondDecoration: { lineWidth: 5, startAt: 50, radius: 90, fillColor: "black", color: "black", alpha: 0.05 },
		_digital:          { fillColor: 'black', font: '15px sans-serif', AmPm: [' AM', ' PM'] }
	},

	Disc: {
		outerBorder:      { lineWidth: 105, radius: 1, color: "#666600", alpha: 0.2 },
		smallIndicator:   { lineWidth: 1, startAt: 58, endAt: 95, color: "#669900", alpha: 0.8 },
		largeIndicator:   { lineWidth: 6, startAt: 25, endAt: 35, color: "#666600", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 65, color: "black", alpha: 1 },
		minuteHand:       { lineWidth: 3, startAt: 0, endAt: 75, color: "black", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -75, endAt: 75, color: "#99CC00", alpha: 0.8 },
		secondDecoration: { lineWidth: 5, startAt: 50, radius: 90, fillColor: "#00FF00", color: "green", alpha: 0.05 },
		_digital:          { fillColor: 'black', font: '15px sans-serif', AmPm: [' AM', ' PM'] }
	},

	// By Yoo Nhe
	watermelon: {
		outerBorder:      { lineWidth: 100, radius: 1.7, color: "#d93d04", alpha: 5 },
		smallIndicator:   { lineWidth: 2, startAt: 50, endAt: 70, color: "#d93d04", alpha: 5 },
		largeIndicator:   { lineWidth: 2, startAt: 45, endAt: 94, color: "#a9bf04", alpha: 1 },
		hourHand:         { lineWidth: 5, startAt: -20, endAt: 80, color: "#8c0d17", alpha: 1 },
		minuteHand:       { lineWidth: 2, startAt: -20, endAt: 80, color: "#7c8c03", alpha: 0.9 },
		secondHand:       { lineWidth: 2, startAt: 70, endAt: 94, color: "#d93d04", alpha: 0.85 },
		secondDecoration: { lineWidth: 1, startAt: 70, radius: 3, fillColor: "red", color: "black", alpha: 0.7 },
		_digital:          { fillColor: 'black', font: '15px sans-serif', AmPm: [' AM', ' PM'] }
	},

	swissRail_ccms: {
		outerBorder:      { lineWidth: 2, radius: 95, fillColor: "#E6F5D6", color: "#90D224", alpha: 1 },
		smallIndicator:   { lineWidth: 2, startAt: 88, endAt: 92, color: "#90D224", alpha: 1 },
		largeIndicator:   { lineWidth: 4, startAt: 79, endAt: 92, color: "#90D224", alpha: 1 },
		hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "#90D224", alpha: 1 },
		minuteHand:       { lineWidth: 7, startAt: -15, endAt: 75, color: "#90D224", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: 1 },
		secondDecoration: { lineWidth: 1, startAt: 70, radius: 4, fillColor: "red", color: "red", alpha: 1 },
		digital:          { lineWidth: 1.3, color: "#90D224", font: '40px sans-serif', AmPm: false, alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 100 }  }
	},
	mui_default: {
		outerBorder:      { lineWidth: 1, radius:99, fillColor: "#577A9E", color: "#FFF", alpha: 1 },
		smallIndicator:   { lineWidth: 6, startAt: 82, endAt: 89, color: "#FFF", alpha: 0.15 },
		largeIndicator:   { lineWidth: 6, startAt: 82, endAt: 89, color: "#FFF", alpha: 0.50 },
		hourHand:         { lineWidth: 6, startAt: -5, endAt: 53, color: "#FFF", alpha: 1 },
		minuteHand:       { lineWidth: 6, startAt: -5, endAt: 80, color: "#FFF", alpha: 1 },
		secondHand:       { lineWidth: 1.5, startAt: -18, endAt: 88, color: "#FFF", alpha: 1 },
		secondDecoration: { lineWidth: 0, startAt: 72, radius: 5, fillColor: "#FFF", color: "red", alpha: 1 },      // color==red to exhibit a bug in FF4: line is drawn anyway, despite width==0!
		// secondDecoration: { lineWidth: 2, startAt: 0, radius: 8, fillColor: "#577A9E", color: "#577A9E", alpha: 1 },
		digital:          { fillColor: 'white', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 160 } }
	},
	mui_charcoal: {
		outerBorder:      { lineWidth: 1, radius: 96, fillColor: "#404040", color: "#000", alpha: 1 },
		smallIndicator:   { lineWidth: 3, startAt: 88, endAt: 94, color: "#595959", alpha: 1 },
		largeIndicator:   { lineWidth: 3, startAt: 82, endAt: 94, color: "#ddd", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 58, color: "#fff", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: 0, endAt: 78, color: "#fff", alpha: 1 },
		secondHand:       { lineWidth: 4, startAt: 82, endAt: 94, color: "#98B8D9", alpha: 1 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 6, fillColor: "white", color: "white", alpha: 1 },
		digital:          { fillColor: 'white', font: '15px sans-serif', AmPm: [' AM', ' PM'], alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 160 } }
	},
	default_v1: {
		outerBorder:      { lineWidth: 2, radius:99, fillColor: "#90D224", color: "#fff", alpha: 1 },
		smallIndicator:   { lineWidth: 6, startAt: 82, endAt: 89, color: "#fff", alpha: 0.15 },
		largeIndicator:   { lineWidth: 6, startAt: 82, endAt: 89, color: "#fff", alpha: 0.50 },
		hourHand:         { lineWidth: 6, startAt: 0, endAt: 53, color: "#fff", alpha: 1 },
		minuteHand:       { lineWidth: 6, startAt: 0, endAt: 80, color: "#fff", alpha: 1 },
		secondHand:       { lineWidth: 2, startAt: -18, endAt: 88, color: "#fff", alpha: 1 },
		secondDecoration: { lineWidth: 0, startAt: 72, radius: 5, fillColor: "#fff", alpha: 1 },
		// secondDecoration: { lineWidth: 2, startAt: 0, radius: 8, fillColor: "#90D224", color: "#fff", alpha: 1 },
		digital:          { lineWidth: 1.3, color: "#fff", font: '40px sans-serif', AmPm: false, alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 118 } }
	},
	defaultOld: {
		outerBorder:      { lineWidth: 6, radius:98, color: "#fff", alpha: 1 },
		smallIndicator:   { lineWidth: 2, startAt: 86, endAt: 91, color: "#555", alpha: 1 },
		largeIndicator:   { lineWidth: 3, startAt: 80, endAt: 91, color: "#555", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: -1, endAt: 56, color: "#141414", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: -1, endAt: 78, color: "#141414", alpha: 1 },
		secondHand:       { lineWidth: 1, startAt: -16, endAt: 80, color: "#ce1717", alpha: 1 },
		secondDecoration: { lineWidth: 2, startAt: 0, radius: 7, fillColor: "#fff", color: "#ce1717", alpha: 0 },
		_digital:          { fillColor: 'black', font: '15px sans-serif', AmPm: [' AM', ' PM'] }
	},
	mochaUI1: {
		outerBorder:      { lineWidth: 1, radius: 97, fillColor: "#404040", color: "#000", alpha: 1 },
		smallIndicator:   { lineWidth: 3, startAt: 88, endAt: 94, color: "#595959", alpha: 1 },
		largeIndicator:   { lineWidth: 3, startAt: 82, endAt: 94, color: "#ddd", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 58, color: "#fff", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: 0, endAt: 78, color: "#fff", alpha: 1 },
		secondHand:       { lineWidth: 4, startAt: 82, endAt: 94, color: "#98B8D9", alpha: 1 },
		secondDecoration: { lineWidth: 3, startAt: 0, radius: 6, fillColor: "white", color: "white", alpha: 1 },
		digital:          { lineWidth: 1.3, color: "#98B8D9", font: '40px sans-serif', AmPm: false, alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 100 } }
	},
	mochaUI2: {
		outerBorder:      { lineWidth: 1, radius: 97, fillColor: "#606060", color: "#000", alpha: 1 },
		smallIndicator:   { lineWidth: 3, startAt: 88, endAt: 94, color: "#2CC2D1", alpha: 1 },
		largeIndicator:   { lineWidth: 3, startAt: 82, endAt: 94, color: "#1BFFD9", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: 0, endAt: 58, color: "#fff", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: 0, endAt: 78, color: "#fff", alpha: 1 },
		secondHand:       { lineWidth: 4, startAt: 82, endAt: 94, color: "#EFCD5F", alpha: 1 },
		secondDecoration: { lineWidth: 0, startAt: 0, radius: 6, fillColor: "#fff", alpha: 1 },
		digital:          { lineWidth: 1.3, color: "#2CC2D1", font: '40px sans-serif', AmPm: false, alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 100 } }
	},
	mochaUI3: {
		outerBorder:      { lineWidth: 1, radius: 97, fillColor: "#606060", color: "#000", alpha: 1 },
		smallIndicator:   { lineWidth: 3, startAt: 88, endAt: 94, color: "#C7C3B7", alpha: 1 },
		largeIndicator:   { lineWidth: 3, startAt: 82, endAt: 94, color: "#C7C3B7", alpha: 1 },
		hourHand:         { lineWidth: 4, startAt: -1, endAt: 58, color: "#C7C3B7", alpha: 1 },
		minuteHand:       { lineWidth: 4, startAt: -1, endAt: 78, color: "#C7C3B7", alpha: 1 },
		secondHand:       { lineWidth: 3, startAt: 82, endAt: 94, color: "#ce1717", alpha: 1 },
		secondDecoration: { lineWidth: 0, startAt: 0, radius: 6, fillColor: "#999", alpha: 1 },
		digital:          { lineWidth: 1.3, color: "#C7C3B7", font: '40px sans-serif', AmPm: false, alpha: 0.75, timeTextPosition: { textPosX: 100, textPosY: 100 } }
	}
};


