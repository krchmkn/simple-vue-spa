<template>
    <div @close="close">
        <Modal>
            <template v-slot:header>Добавить статью</template>
            <template v-slot:content>
                <label>Заголовок <input type="text" v-model="header" /></label>
                <label>Текст <textarea rows="3" v-model="text" /></label>
            </template>
            <template v-slot:footer>
                <Button @click="close">Отмена</Button>
                <Button primary @click="add">Добавить</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/dialogs/Modal';
import Button from '@/components/Button';

export default {
    data() {
        return {
            header: '',
            text: ''
        }
    },
    components: { Modal, Button },
    methods: {
        close() {
            this.$store.commit('closeModal', { name: 'add' });
        },
        add() {
            this.$store.dispatch('addArticle', { 
                header: this.header, 
                text: this.text
            }).then(this.close).catch(() => {
                alert('Ошибка!')
            });
        }
    }
}
</script>
