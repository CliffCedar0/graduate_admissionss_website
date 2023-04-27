<template>
    <ContentBase>
        <el-tabs type="border-card">
            <el-tab-pane label="注册">
                <el-form label-position="right" label-width="100px" style="max-width: 460px" class="loginForm">
                    <el-form-item label="邮箱：">
                        <el-input v-model="rEmail" />
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input type="password" v-model="rPassword" />
                    </el-form-item>
                    <el-form-item label="确认密码：">
                        <el-input type="password" v-model="confirmPassword" @blur="confirmFunc" />
                    </el-form-item>
                    <el-row>
                        <el-checkbox class="checkBox" v-model="rAgree" label="同意用户使用准则" name="type" />
                    </el-row>
                    <el-button v-if="rAgree" type="primary" class="loginBtn" @click="register">
                        注册
                    </el-button>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase.vue'
import { reactive, toRefs, ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";

export default {
    name: 'RegisterView',
    components: {
        ContentBase
    },
    setup() {
        const registerForm = reactive({
            rEmail: "",
            rPassword: "",
            confirmPassword: "",
            identifyCode: "",
            rAgree: 0,
        });

        // 注册 -- 将账号密码写入后台, 自动登录
        // 需要修改共享数据
        function register() {
            console.log("注册", registerForm);
        }
        // 确认密码
        const confirmFunc = () => {
            if (registerForm.confirmPassword !== registerForm.rPassword)
                ElMessage.error("密码与确认密码不一致.");
        };
        // 修改密码
        let isChangePassword = ref(false);
        // 用的是注册参数
        function changePassword() { }

        return {
            isChangePassword,
            ...toRefs(registerForm),
            register,
            confirmFunc,
            changePassword,
        };
    },
}
</script>



<style  scoped>
.loginBtn {
    width: 100px;
}

.loginForm {
    text-align: center;
}

.checkBox {
    margin-left: 7px;
}

.inpWidth {
    width: 165px;
}

.floatR {
    font-size: 10px;
    margin-left: 9px;
    color: blue;
}
</style>>