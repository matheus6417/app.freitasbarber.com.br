import moment from 'moment';

export default {
  name: 'formatDate',
  implementation(value) {
    if (value) {
      return moment(value).format('DD/MM/YY');
    }

    return null;
  },
};
