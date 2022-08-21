<template>
    <div class="header">
        <div class="header__left">
            
        </div>

        <div class="header__right">

            <el-button class="header__search">
                <el-icon :size="24" >
                    <Search />
                </el-icon>
            </el-button>

            <el-button class="header__notif">
                <el-icon :size="24" >
                    <Notification />
                </el-icon>
            </el-button>

            <el-button class="header__search">
                <el-icon :size="24" >
                    <User />
                </el-icon>
            </el-button>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/components/header.scss';
</style>