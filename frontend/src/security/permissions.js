import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.orderEditor,
          roles.orderViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      customerImport: {
        id: 'customerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
        ],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
        ],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,

        ],
      },

      serviceImport: {
        id: 'serviceImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.serviceEditor,
        ],
      },
      serviceCreate: {
        id: 'serviceCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.serviceEditor,
        ],
        allowedStorageFolders: ['service'],
      },
      serviceEdit: {
        id: 'serviceEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.serviceEditor,
        ],
        allowedStorageFolders: ['service'],
      },
      serviceDestroy: {
        id: 'serviceDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.serviceEditor,
        ],
        allowedStorageFolders: ['service'],
      },
      serviceRead: {
        id: 'serviceRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.serviceEditor,
          roles.serviceViewer,
        ],
      },
      serviceAutocomplete: {
        id: 'serviceAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.serviceEditor,
          roles.serviceViewer,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },

      spendingImport: {
        id: 'spendingImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.spendingEditor,
        ],
      },
      spendingCreate: {
        id: 'spendingCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.spendingEditor,
        ],
        allowedStorageFolders: ['spending'],
      },
      spendingEdit: {
        id: 'spendingEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.spendingEditor,
        ],
        allowedStorageFolders: ['spending'],
      },
      spendingDestroy: {
        id: 'spendingDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.spendingEditor,
        ],
        allowedStorageFolders: ['spending'],
      },
      spendingRead: {
        id: 'spendingRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.spendingEditor,
          roles.spendingViewer,
        ],
      },
      spendingAutocomplete: {
        id: 'spendingAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.spendingEditor,
          roles.spendingViewer,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
