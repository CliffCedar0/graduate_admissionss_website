<template>
    <el-row class="container" type="flex" justify="center" align="middle">
        <el-card class="box-card">
            <slot></slot>
        </el-card>
    </el-row>
</template>

<script>
export default {
    name: "ContentBase",
}
</script>

<style scoped>
.container {
    margin-top: 20px;
}

.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>