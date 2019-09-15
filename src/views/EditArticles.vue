<template>
    <section>
        <BackToHome />
        <h1>Редактирование статей</h1>
        <Articles :editAllowed="true" />
    </section>
</template>

<script>
import Articles from '@/components/Articles';
import BackToHome from '@/components/BackToHome';

export default {
    components: { Articles, BackToHome },
}
</script>
