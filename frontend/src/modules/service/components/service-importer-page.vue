<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.service.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="service/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-service-importer-page',
};
</script>

<style>
</style>
