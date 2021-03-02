<template>
    <div>
        <p @click="changeColor('dark')">dark</p>
        <p @click="changeColor('light')">light</p>
    </div>
</template>
<script>
export default {
    methods:{
        changeColor(color){
            this.$colorMode.value = color;
        }
    }
}
</script>