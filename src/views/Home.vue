<template>
  <div :class="theme" class="bg-background-primary">
    <h1 class="text-4xl text-typo-primary">Test title</h1>

    <!-- Inside Home.vue - WORKING -->
    <button class="border border-gray-400 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" @click="toggleThemeOne()">Toggle Dark/Light</button>
    <!-- Component with function outside - WORKING -->
    <ButtonA msg="From component" @click.native="toggleThemeTwo()" />
    <ButtonB msg="Full from component" :theme.sync="theme" />
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonA from '@/components/ButtonA.vue'
import ButtonB from '@/components/ButtonB.vue'

export default {
  name: 'Home',
  components: {
    ButtonA,
    ButtonB
  },
  data() {
    return {
      theme: '',
    }
  },
  created() {
    
  },
  methods: {
    toggleThemeOne() {
      this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', this.theme)
      console.log('toggleThemeOne working');
      console.log(this.theme)
    },
    toggleThemeTwo() {
      this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', this.theme)
      console.log('toggleThemeTwo working');
      console.log(this.theme)
    },
  }
}
</script>
 