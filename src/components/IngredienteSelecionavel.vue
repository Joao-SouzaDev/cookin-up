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
    },
    methods:{
        aoClicar(){
            this.selecionado = !this.selecionado
            if(this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente)
            }else{
                this.$emit('removerIngrediente',this.ingrediente)
            }
        }
    },
    emits: ['adicionarIngrediente','removerIngrediente']
}
</script>

<template>
    <button class="ingredientes" v-on:click="aoClicar" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingredientes{
    cursor: pointer;
}
</style>