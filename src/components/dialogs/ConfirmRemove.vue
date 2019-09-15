<template>
    <Modal>
        <template v-slot:content>Удалить данную статью?</template>
        <template v-slot:footer>
            <Button @click="close">Отмена</Button>
            <Button primary @click="remove">Удалить</Button>
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/dialogs/Modal';
import Button from '@/components/Button';

export default {
    components: { Modal, Button },
    methods: {
        close() {
            this.$store.commit('closeModal', { name: 'remove' });
        },
        remove() {
            this.$store.dispatch('removeArticle', { 
                id: this.$store.getters.modals.remove.current.id 
            }).then(this.close).catch(() => alert('Ошибка!'));
        }
    }
}
</script>
