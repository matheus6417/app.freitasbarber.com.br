<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="iam.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="iam/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-iam-importer-page',
};
</script>

<style>
</style>
