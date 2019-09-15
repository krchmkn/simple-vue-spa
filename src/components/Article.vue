<template>
  <article class="article">
      <h2 class="article__header">{{ article.header }}</h2>
      <div class="article__date">{{ article.date | moment('DD.MM.YYYY, H:mm') }}</div>
      <div>
        <div>{{ article.text }}</div>
        <div class="article__edit-box" v-if="editAllowed">
          <Button small @click="$store.commit('openModal', { name: 'edit', current: {...article} })">
            Редактировать
          </Button>
          <Button small @click="$store.commit('openModal', { name: 'remove', current: {...article} })">
            Удалить
          </Button>
        </div>
      </div>
  </article>
</template>

<script>
import Button from '@/components/Button';

export default {
  props: ['article', 'editAllowed'],
  components: { Button }
}
</script>

<style lang="scss" scoped>
  .article {
      line-height: 25px;
      padding-bottom: 50px;
      
      &__header {
        padding-bottom: 10px;
      }

      &__date {
        padding-bottom: 10px;
        font-size: 12px;
        color: #42b983;
      }

      &__edit-box {
        padding: 10px 0;
      }
  }
</style>
