import importerStore from '@/shared/importer/importer-store';
import { ServiceService } from '@/modules/service/service-service';
import serviceImporterFields from '@/modules/service/service-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ServiceService.import,
  serviceImporterFields,
  i18n('entities.service.importer.fileName'),
  i18n('entities.service.importer.hint'),
);
