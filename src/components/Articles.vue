<template>
  <section class="articles">
    <div v-if="editAllowed" class="articles__add-btn">
        <Button primary 
          @click="$store.commit('openModal', { name: 'add' })">Добавить статью</Button>
    </div>

    <template v-if="articles.length">
      <Article v-for="article in articles" :key="article.id" 
        :article="article" :editAllowed="editAllowed" />
    </template>
    <template v-else>
        Пока нет статей.
    </template>

    <AddArticleDialog v-if="modals.add.isOpen" />
    <EditArticleDialog v-if="modals.edit.isOpen" />
    <ConfirmRemoveDialog v-if="modals.remove.isOpen" />
  </section>
</template>

<script>
import Article from '@/components/Article';
import Button from '@/components/Button';
import AddArticleDialog from '@/components/dialogs/AddArticle';
import EditArticleDialog from '@/components/dialogs/EditArticle';
import ConfirmRemoveDialog from '@/components/dialogs/ConfirmRemove';
import { mapGetters } from 'vuex';

export default {
    props: ['editAllowed'],
    components: {
      Article, Button, AddArticleDialog, 
      EditArticleDialog, ConfirmRemoveDialog 
    },
    computed: {
      ...mapGetters([ 'articles', 'modals'])
    }
}
</script>

<style lang="scss" scoped>
  .articles {
    padding: 20px 0;

    &__add-btn {
        padding-bottom: 50px;
    }
  }
</style>
