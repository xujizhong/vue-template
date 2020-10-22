<template>
    <div>
        <button @click="login">登陆</button>
    </div>
</template>
<script>
import { _login } from '@/services/login';

export default {
    methods: {
        login() {
            _login().then(res => {
                console.log(res);
            });
        }
    }
};
</script>
