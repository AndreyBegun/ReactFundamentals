import { HOUR, HOURS } from 'src/constants';

const getCourseDuration = (duration: number | undefined) => {
	// If hh < 10 (0,1,2,3,4,5,6,7,8,9) => '0' + h:mm + 'hours' (02:20 hours)
	// If mm < 10 (0,1,2,3,4,5,6,7,8,9) => hh:'0' + m + 'hours' (10:06 hours)
	// If hh = 1 => hh:mm + 'hour' (01:30 hour)
	const hh = Math.floor(duration / 60);
	const mm = duration % 60;
	let hhString = '00';
	const mmString = mm < 10 ? ':0' + mm : ':' + mm;
	let hour = HOUR;
	if (!duration) {
		return `00:00 ${hour}`;
	}
	if (hh === 1) {
		hhString = '0' + hh;
	} else if (hh < 10) {
		hhString = '0' + hh;
		hour = HOURS;
	} else {
		hhString = '' + hh;
		hour = HOURS;
	}
	return hhString + mmString + hour;
};

export default getCourseDuration;
