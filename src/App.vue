<template>
  
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <SideComp/>
      </el-aside>

      <el-container>
        <el-header><header-comp/></el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>

</template>

<script>
import HeaderComp from './components/headerComp.vue'
import SideComp from './components/sideComp.vue';
export default {
  components:{
    HeaderComp,
    SideComp
}
}

</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
