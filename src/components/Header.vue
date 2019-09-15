<template>
  <header class="header">
    <router-link class="header__logo" to="/"><img src="@/assets/logo.svg" alt="logo" /></router-link>

    <div class="header__menu">
        <template v-if="user.isAuthorized">
            <router-link class="header__link" 
                active-class="header__link--active"
                to="/edit-articles">Редактирование статей</router-link>
                
            <a href="#" title="" class="header__link" @click.stop.prevent="handleClick">Выход</a>
        </template>
        <router-link v-else class="header__link" 
            active-class="header__link--active"
            to="/login">Вход</router-link>
    </div>
  </header>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    methods: {
        handleClick() {
            this.$store.commit('logOut');
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        box-sizing: border-box;
        padding: 25px 25px 50px 25px;

        &__logo {
            display: inline-block;
            width: 50px;
            height: auto;
            padding-right: 20px;
            font-size: 20px;
            font-weight: 100;
            border: 0;
        }

        &__menu {
            display: flex;
            align-content: space-between;
            align-items: flex-start;
            justify-content: flex-end;
        }

        &__link {
            display: block;
            margin-left: 20px;
            line-height: 20px;

            &--active {
                text-decoration: none;
            }
        }
    }
</style>

