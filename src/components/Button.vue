<template>
    <button v-bind="attrs" @click.stop.prevent="$emit('click', $event.target)">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        primary: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        handler: {
            type: Function
        }
    },
    computed: {
        attrs() {
            let classes = ['button'];

            (this.primary && classes.push('button--primary'));
            (this.small && classes.push('button--small'));
            (this.block && classes.push('button--block'));

            return {
                class: classes.join(' '),
                type: 'button'
            };
        }
    }
}
</script>

<style lang="scss" scoped>
    .button {
        background: #fff;
        color: #42b983;
        border-radius: 4px;
        margin: 6px 10px 0 0;
        padding: 12px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        border: 1px solid #42b983;
        cursor: pointer;
        outline: none;

        &--primary {
            background: #42b983;
            color: #fff;
        }

        &--small {
            padding: 6px;
            font-size: 12px;
        }

        &--block {
            width: 100%;
            display: block;
        }

        &:active {
            transform: scale(.98);
            transition: transform .2s ease;
        }
    }
</style>
