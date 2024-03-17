<template>
    <div class="login-container">
        <div class="login-title">
            <p>糖小猫AI模型</p>
            <p>Tomcat AI Model</p>
        </div>
        <img src="@/assets/image/login_bgc.svg" alt="" class="bgc-img">
        <div class="login-content">
            <p class="item">欢迎登录</p>
            <el-input class="input-css" v-model="userName" prefix-icon="User">
            </el-input>
            <el-input 
                type="password"
                v-model="password"
                class="input-css"
                prefix-icon="Lock"
                show-password
            >
            </el-input>
            <br>
            <div class="link-btn">
                <a>忘记密码</a>
                <a>注册账号</a>
            </div>
            <el-button class="btn-css" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    setup() {
        const userName = ref('')
        const password = ref('')

        onMounted(() => {
        })

        return {
            userName,
            password
        }
    },
}
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to left, #ffffff, #557aee);
    .login-title{
        position: absolute;
        width: 330px;
        text-align: center;
        top: 180px;
        left: 230px;
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        letter-spacing: 2px;
        p:last-child{
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 5px;
        }
    }
    .bgc-img{
        position: absolute;
        width: 60%;
        height: 60%;
        right: 0;
        top: 160px;
    }
    .login-content{
        width: 330px;
        height: 330px;
        border: 1px solid #b4e3ff;
        background-image: linear-gradient(to bottom, #ffffff, #b4e3ff);
        box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
        border-radius: 5px;
        position: absolute;
        top: 280px;
        left: 230px;
        text-align: center;
        .item{
            font-size: 20px;
            height: 100px;
            line-height: 100px;
            display: block;
        }
        .item::after{
            display: block;
            content: "";
            width: 90px;
            height: 2px;
            background: #2449e7;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: -35px;
        }
        .input-css{
            width: 250px;
            height: 30px;
            margin-bottom: 30px;
        }
        .link-btn{
            width: 250px;
            text-align: left;
            margin: 0 auto;
            margin-top: -10px;
            font-size: 12px;
            a{
                margin-right: 10px;
                color: #2449e7;
                cursor: pointer;
            }
            a:hover{
                text-decoration: underline;
            }
        }
        .btn-css{
            margin-top: 20px;
            width: 150px;
        }
    }
}
</style>