<template>
  <div>
    <el-container>
      <el-container>
        <!-- <el-header>
          <app-header />
        </el-header>-->

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <app-menu></app-menu>
  </div>
</template>

<script>
export default {
  name: 'app-layout',
};
</script>

<style>
</style>
