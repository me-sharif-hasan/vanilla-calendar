import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';

const options = {
  type: 'month',
  actions: {
    clickMonth(e, month) {
      console.log(month);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
