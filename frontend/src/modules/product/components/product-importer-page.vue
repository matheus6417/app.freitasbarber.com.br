<template>
  <div>
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.product.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="product/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-product-importer-page',
};
</script>

<style>
</style>
