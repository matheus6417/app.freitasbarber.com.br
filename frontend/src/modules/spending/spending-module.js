import routes from '@/modules/spending/spending-routes';
import store from '@/modules/spending/spending-store';
import SpendingAutocompleteInput from '@/modules/spending/components/spending-autocomplete-input';

export default {
  components: [SpendingAutocompleteInput],
  routes,
  store,
};
