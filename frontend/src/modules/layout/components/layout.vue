<template>
  <div>
    \
    <el-container>
      <el-container>
        <!-- <el-header>
          <app-header />
        </el-header>-->

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <app-menu></app-menu>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app-layout',
};
</script>

<style>
</style>
