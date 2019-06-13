<template>
    <div class="footer">
        <p>Made with <i class="far fa-heart"></i> by Jan Szafran</p>
    </div>
</template>

<script>
export default {
  name: 'footerComponent',
};
</script>

<style scoped>
    .footer {
        position: fixed;
        width: 100%;
        height: 5%;
        bottom: 0;
        background-color: white;
        border-top: 1px solid rgb(211, 211, 211);
        color: black;
    }

    p {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .fa-heart {
        color: red;
    }
</style>
