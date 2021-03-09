<!--
作者：葛以伟
时间：16:09 2021-03-09
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {},
  created() {
  }
};
</script>
<style lang="scss" scoped>

</style>


