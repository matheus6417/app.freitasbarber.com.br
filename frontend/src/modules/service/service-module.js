import routes from '@/modules/service/service-routes';
import store from '@/modules/service/service-store';
import ServiceAutocompleteInput from '@/modules/service/components/service-autocomplete-input';

export default {
  components: [ServiceAutocompleteInput],
  routes,
  store,
};
