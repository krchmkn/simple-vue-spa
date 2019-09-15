<template>
    <Modal>
        <template v-slot:header>Редактировать статью</template>
        <template v-slot:content>
            <label>
                Заголовок 
                <input v-model="storedHeader" type="text" />
            </label>
            <label>
                Текст 
                <textarea v-model="storedText" rows="3" />
            </label>
        </template>
        <template v-slot:footer>
            <Button @click="close">Отмена</Button>
            <Button primary @click="edit">Сохранить</Button>
        </template>
    </Modal>
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
    computed: {
        articleId() {
            return this.$store.getters.modals.edit.current.id;
        },
        storedHeader: {
            get() {
                return this.$store.getters.modals.edit.current.header;
            },
            set(value) {
                this.header = value;
            }
        },
        storedText: {
            get() {
                return this.$store.getters.modals.edit.current.text;
            },
            set(value) {
                this.text = value;
            }
        }
    },
    methods: {
        close() {
            this.$store.commit('closeModal', { name: 'edit' });
        },
        edit() {
            this.$store.dispatch('editArticle', { 
                id: this.articleId,
                header: this.header, 
                text: this.text
            }).then(this.close).catch(() => {
                alert('Ошибка!')
            });
        }
    }
}
</script>
