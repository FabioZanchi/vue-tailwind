<template>
    <div>
        <button
            class="border border-gray-400 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            @click="toggleThemeTree()"
        > {{ msg }} </button>
    </div>
</template>

<script>
export default {
    name: "ButtonComp",
    props: [
        'msg'
    ],
    methods: {
        toggleThemeTree() {
            let theme = this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
            localStorage.setItem('theme', theme)
            this.$emit('update:theme', theme)
            console.log('toggleThemeThree working');
            console.log(this.theme)
        },
    },
}
</script>