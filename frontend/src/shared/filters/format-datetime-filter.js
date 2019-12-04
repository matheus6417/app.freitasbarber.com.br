import moment from 'moment';

export default {
  name: 'formatDatetime',
  implementation(value) {
    if (value) {
      return moment(value).format('DD-MM-YYYY HH:mm');
    }

    return null;
  },
};
