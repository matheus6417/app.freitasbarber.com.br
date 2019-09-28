import serviceListStore from '@/modules/service/service-list-store';
import serviceViewStore from '@/modules/service/service-view-store';
import serviceImporterStore from '@/modules/service/service-importer-store';
import serviceFormStore from '@/modules/service/service-form-store';
import serviceDestroyStore from '@/modules/service/service-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: serviceDestroyStore,
    form: serviceFormStore,
    list: serviceListStore,
    view: serviceViewStore,
    importer: serviceImporterStore,
  },
};
