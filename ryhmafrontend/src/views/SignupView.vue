<template>
    <div id="content">
        <div class="sidebar"></div>
            <SignUpForm/>
        <div class="sidebar"></div>
    </div>
</template>
<script>
    import SignUpForm from "@/components/SignUpForm.vue"
    export default {
        components: {
            SignUpForm,
        },
    }
</script>
<style>

</style>