import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ServicePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.serviceRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.serviceImport,
    );
    this.serviceAutocomplete = permissionChecker.match(
      Permissions.values.serviceAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.serviceCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.serviceEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.serviceDestroy,
    );
  }
}
