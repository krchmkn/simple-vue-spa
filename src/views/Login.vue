<template>
    <section class="login-from">
        <BackToHome />

        <h1>Вход</h1>

        <div class="login-from__errors" v-if="showError">
            Пожалуйста, заполните все поля формы.
        </div>

        <label>
            Логин
            <input type="text" v-model.trim="login" placeholder="Введите имя пользователя" />
        </label>

        <label>
            Пароль
            <input type="password" v-model.trim="password" placeholder="Введите пароль" />
        </label>

        <Button primary block @click="submit">Войти</Button>
    </section>
</template>

<script>
import BackToHome from '@/components/BackToHome';
import Button from '@/components/Button';

export default {
    data() {
        return {
            showError: false,
            login: '',
            password: ''
        }
    },
    components: { BackToHome, Button },
    watch: {
        login() {
            this.showError = false;
        },
        password() {
            this.showError = false;
        }
    },
    methods: {
        submit() {
            this.showError = false;

            if (this.login && this.password) {
                this.$store.commit('authorizeUser');
                this.$router.push('edit-articles');
            } else {
                this.showError = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-from {
        width: 320px;
        margin: 0 auto;
        box-sizing: border-box;

        &__errors {
            padding: 0 0 25px 0;
            list-style: none;
            color: #e74c3c;
        }

        & label {
            display: block;
            padding-bottom: 20px;
        }

        & input {
            display: block;
            border: 1px solid #a0aec0;
            width: 100%;
            border-radius: 4px;
            margin-top: 6px;
            padding: 12px;
            box-sizing: border-box;
        }

        &__submit-btn {
            background: #42b983;
            color: #fff;
            width: 100%;
            border-radius: 4px;
            margin-top: 6px;
            padding: 12px;
            box-sizing: border-box;
            display: block;
            border: 0;
            cursor: pointer;

            &:active {
                transform: scale(.98);
                transition: transform .2s ease;
            }
        }
    }
</style>