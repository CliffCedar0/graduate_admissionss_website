<template>
    <el-row :gutter="20">
        <el-col :span="20" :offset="2">
            <el-menu :default-active="$route.path" class="top" mode="horizontal" background-color="#ffffff" router
                text-color="black" active-text-color="#1989fa" style="display: flex; justify-content: space-between;">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/schoolList">34所高校</el-menu-item>
                <el-menu-item index="/GradeLine">考研分数线</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>考研真题</template>
                    <el-menu-item index="/Computer">计算机408</el-menu-item>
                    <el-menu-item index="/English">考研英语</el-menu-item>
                    <el-menu-item index="/Politics">考研政治</el-menu-item>
                    <el-menu-item index="/Math">考研数学</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/TimeLine">考研时间线</el-menu-item>
                <el-menu-item index="/Post">发布文章</el-menu-item>
                <el-menu-item index="/register" style="float: right;">注册</el-menu-item>
                <el-menu-item index="/login" style="float: right;">登录</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped></style>