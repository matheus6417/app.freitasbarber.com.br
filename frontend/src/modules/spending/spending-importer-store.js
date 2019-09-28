import importerStore from '@/shared/importer/importer-store';
import { SpendingService } from '@/modules/spending/spending-service';
import spendingImporterFields from '@/modules/spending/spending-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  SpendingService.import,
  spendingImporterFields,
  i18n('entities.spending.importer.fileName'),
  i18n('entities.spending.importer.hint'),
);
