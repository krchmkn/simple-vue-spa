<template>
    <div class="modal" @click="$emit('close')">
        <div class="modal__box" @click.stop>
            <div class="modal__header">
                <slot name="header" />
            </div>
            <div class="modal__content">
                <slot name="content" />
            </div>
            <div class="modal__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        &__box {
            max-width: 600px;
            flex: 1;
            background: #fff;
            border-radius: 4px;
            box-sizing: border-box;
        }

        &__header,
        &__content,
        &__footer {
            padding: 25px;
            box-sizing: border-box;
        }

        &__header {
            color: #42b983;
            font-size: 24px;
            font-weight: 100;
        }

        &__footer {
            text-align: right;
        }

        & label {
            display: block;
            padding-bottom: 20px;
        }

        & input,
        & textarea {
            display: block;
            border: 1px solid #a0aec0;
            width: 100%;
            border-radius: 4px;
            margin-top: 6px;
            padding: 12px;
            box-sizing: border-box;
        } 

        & textarea {
            resize: none;
        }
    }
</style>
