import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import BooleanField from '@/shared/fields/boolean-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { CustomerField } from '@/modules/customer/customer-field';
import { ProductField } from '@/modules/product/product-field';
import { ServiceField } from '@/modules/service/service-field';
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.order.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.order.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  customer: CustomerField.relationToMany('customer', label('customer'), {}),
  products: ProductField.relationToMany('products', label('products'), {}),
  employee: UserField.relationToOne('employee', label('employee'), {}),
  services: ServiceField.relationToMany('services', label('services'), {}),
  delivered: new BooleanField('delivered', label('delivered')),
  attachments: new FilesField('attachments', label('attachments'), 'order/attachments', {}),
  date: new DateTimeField('date', label('date'), {}),
  photos: new ImagesField('photos', label('photos'), 'order/photos', {}),
  description: new StringField('description', label('description'), {}),
  total: new DecimalField('total', label('total'), { scale: 2 }),
  valueAlt: new DecimalField('valueAlt', label('valueAlt'), { scale: 2 }),
  e1: new StringField('e1', label('e1'), {}),
  e2: new IntegerField('e2', label('e2'), {}),
  e3: new DecimalField('e3', label('e3'), {}),
  e4: new DateField('e4', label('e4'), {}),
  e5: new DateTimeField('e5', label('e5'), {}),
  e6: new BooleanField('e6', label('e6')),
  e7: new EnumeratorField('e7', label('e7'), [
    { id: 'a', label: enumeratorLabel('e7', 'a') },
    { id: 'b', label: enumeratorLabel('e7', 'b') },
    { id: 'c', label: enumeratorLabel('e7', 'c') },
  ], {}),
  e8: new FilesField('e8', label('e8'), 'order/e8', {}),
  e9: new ImagesField('e9', label('e9'), 'order/e9', {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  dateRange: new DateTimeRangeField(
    'dateRange',
    label('dateRange'),
  ),
  totalRange: new DecimalRangeField(
    'totalRange',
    label('totalRange'),
  ),
  valueAltRange: new DecimalRangeField(
    'valueAltRange',
    label('valueAltRange'),
  ),
  e2Range: new IntegerRangeField(
    'e2Range',
    label('e2Range'),
  ),
  e3Range: new DecimalRangeField(
    'e3Range',
    label('e3Range'),
  ),
  e4Range: new DateRangeField(
    'e4Range',
    label('e4Range'),
  ),
  e5Range: new DateTimeRangeField(
    'e5Range',
    label('e5Range'),
  ),
};

export class OrderModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
