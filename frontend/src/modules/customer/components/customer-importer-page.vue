<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customer.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="customer/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-customer-importer-page',
};
</script>

<style>
</style>
