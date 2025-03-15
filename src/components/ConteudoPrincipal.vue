<script lang="ts">
import type { PropType } from 'vue';
import SelecionaIngredientes from './SelecionaIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './TagTexto.vue';
import MostrarReceitas from './MostrarReceitas.vue';
type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas'
export default {
  data(vm) {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  components: { SelecionaIngredientes, Tag, SuaLista, MostrarReceitas },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      if (!this.ingredientes.find(p => p == ingrediente)) {
        this.ingredientes.push(ingrediente)
      }
    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(p => p !== ingrediente);
    },
    navegar(pagina: Pagina) {
      this.conteudo = pagina
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <KeepAlive include="SelecionaIngredientes">
      <SelecionaIngredientes v-if="conteudo === 'SelecionarIngredientes'" @buscar-receitas="navegar('MostrarReceitas')"
        @adicionar-ingrediente="adicionarIngrediente($event)" @remover-ingrediente="removerIngrediente($event)" />
      <MostrarReceitas :ingredientes="ingredientes"  v-else-if="conteudo === 'MostrarReceitas'"
        @editar-receitas="navegar('SelecionarIngredientes')" />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>