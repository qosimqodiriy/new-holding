<template>
  <NuxtLayout>
    
  </NuxtLayout>
</template>


<script>
export default {
  data() {
    return {
      language: "ru",
    }
  },

  mounted() {
    if(localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
      this.$i18n.locale = localStorage.getItem('language');
    } else {
      this.$i18n.locale = this.language;
    }
  }
}
</script>