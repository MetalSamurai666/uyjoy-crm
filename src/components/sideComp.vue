<template>
    <div class="side">
        <div class="side__top">
            <div class="side__logo">
                <b>UyJoy</b>
            </div>
        </div>
        <div class="side__bot">
            <ul class="side__list">
                <li v-for="(link, index) in links" :key="index">
                    <router-link :to="link.link">{{link.text}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        links(){
            return this.$store.getters.getSide
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/side.scss';
</style>