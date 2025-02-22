import { IVanillaCalendar } from '../../types';

const createWeek = (self: IVanillaCalendar) => {
	const weekday = [...self.locale.weekday];
	if (!weekday[0]) return;

	const weekEls = (self.HTMLElement as HTMLElement).querySelectorAll(`.${self.CSSClasses.week}`) as NodeListOf<HTMLElement>;
	const templateWeekDayEl = document.createElement('b');
	templateWeekDayEl.className = self.CSSClasses.weekDay;
	if (self.settings.iso8601) weekday.push((weekday.shift() as string));
	weekday[0] = 'Sat';
	weekday[1] = 'Sun';
	weekday[2] = 'Mon';
	weekday[3] = 'Tue';
	weekday[4] = 'Wed';
	weekday[5] = 'Thu';
	weekday[6] = 'Fri';
	weekEls.forEach((weekEl) => {
		weekEl.innerHTML = '';

		for (let i = 0; i < weekday.length; i++) {
			const weekDayName = weekday[i];
			const weekDayEl = templateWeekDayEl.cloneNode(true) as HTMLElement;

			if (self.settings.visibility.weekend && self.settings.iso8601) {
				if (i === 5 || i === 6) {
					weekDayEl.classList.add(self.CSSClasses.weekDayWeekend);
				}
			} else if (self.settings.visibility.weekend && !self.settings.iso8601) {
				if (i === 0 || i === 6) {
					weekDayEl.classList.add(self.CSSClasses.weekDayWeekend);
				}
			}

			weekDayEl.innerText = `${weekDayName}`;
			weekEl.append(weekDayEl);
		}
	});
};

export default createWeek;
