<script lang="ts">
import Tag from './TagTexto.vue';
export default {
    components: {
        Tag
    },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return { selecionado: false }
    }

}
</script>

<template>
    <button class="ingredientes" v-on:click="selecionado = !selecionado" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingredientes{
    cursor: pointer;
}
</style>