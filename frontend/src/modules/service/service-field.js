import { ServiceService } from '@/modules/service/service-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ServiceField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/service',
      Permissions.values.serviceRead,
      ServiceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.label,
          unitPrice: record.unitPrice,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/service',
      Permissions.values.serviceRead,
      ServiceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.label,
          unitPrice: record.unitPrice
        };
      },
      options,
    );
  }
}
