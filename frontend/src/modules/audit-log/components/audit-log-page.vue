<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="auditLog.title"></app-i18n>
      </h1>

      <app-audit-log-toolbar></app-audit-log-toolbar>
      <app-audit-log-filter></app-audit-log-filter>
      <app-audit-log-table></app-audit-log-table>
    </div>
  </div>
</template>

<script>
import AuditLogTable from '@/modules/audit-log/components/audit-log-table.vue';
import AuditLogToolbar from '@/modules/audit-log/components/audit-log-toolbar.vue';
import AuditLogFilter from '@/modules/audit-log/components/audit-log-filter.vue';

export default {
  name: 'app-audit-log-page',

  components: {
    [AuditLogFilter.name]: AuditLogFilter,
    [AuditLogToolbar.name]: AuditLogToolbar,
    [AuditLogTable.name]: AuditLogTable,
  },
};
</script>

