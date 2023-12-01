<script lang="ts" setup>
import { ref } from 'vue';
import Footer from '@/components/footer.vue';

const result = ref('')

const checklogin = () => {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('username');
    var password = params.get('password');
    if (username === 'admin' && password === 'rootadmin') {
        result.value = '登录成功'
        return true;
    } else if (username === null && password === null) {
        return false;
    } else {
        result.value = '用户名或密码错误'
        return true;
    }
}

</script>

<template>
    <div class="login-example-container" v-if="!checklogin()">
        <div class="login-example-title">登录</div>
        <form>
            <label for="username">用户名</label>
            <input type="text" id="username" name="username" placeholder="用户名为：admin" />
            <label for="password">密码</label>
            <input type="password" id="password" name="password" placeholder="密码为：rootadmin"/>
            <br />
            <input type="submit" value="登录" />
        </form>
    </div>
    <div class="login-example-container" v-else-if="checklogin()">
        <div class="login-example-result" name="login-example-result" id="login-example-result">{{ result }}</div>
    </div>
    <Footer />
</template>


<style>
.login-example-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    min-height: 70vh;
}

.login-example-container * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.login-example-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.login-example-container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: clamp(200px, 50%, 400px);
}
label {
    margin-top: 1rem;
}
</style>
