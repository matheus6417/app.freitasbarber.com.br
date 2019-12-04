import moment from 'moment';

export default {
  name: 'formatDate',
  implementation(value) {
    if (value) {
      return moment(value).format('DD-MM-YYYY');
    }

    return null;
  },
};
