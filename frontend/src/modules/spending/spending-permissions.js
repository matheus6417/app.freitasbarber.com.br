import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class SpendingPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.spendingRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.spendingImport,
    );
    this.spendingAutocomplete = permissionChecker.match(
      Permissions.values.spendingAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.spendingCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.spendingEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.spendingDestroy,
    );
  }
}
