<!--
作者：葛以伟
时间：22:03 2021-02-21
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
#tab-bar{
  display: flex;
  background-color: #f0f0f0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.12);
}

</style>


