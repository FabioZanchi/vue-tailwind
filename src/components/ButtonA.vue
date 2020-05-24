<template>
    <div>
        <button class="border border-gray-400 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"> {{ msg }} </button>
    </div>
</template>

<script>
export default {
    name: "ButtonComp",
    props: [
        'msg'
    ]
}
</script>