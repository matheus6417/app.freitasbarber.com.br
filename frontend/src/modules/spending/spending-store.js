import spendingListStore from '@/modules/spending/spending-list-store';
import spendingViewStore from '@/modules/spending/spending-view-store';
import spendingImporterStore from '@/modules/spending/spending-importer-store';
import spendingFormStore from '@/modules/spending/spending-form-store';
import spendingDestroyStore from '@/modules/spending/spending-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: spendingDestroyStore,
    form: spendingFormStore,
    list: spendingListStore,
    view: spendingViewStore,
    importer: spendingImporterStore,
  },
};
