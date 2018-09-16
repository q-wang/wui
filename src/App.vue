<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../node_modules/@coreui/icons/css/coreui-icons.min.css';
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons';
@import '../node_modules/flag-icon-css/css/flag-icon.min.css';
@import 'assets/scss/style';
</style>
