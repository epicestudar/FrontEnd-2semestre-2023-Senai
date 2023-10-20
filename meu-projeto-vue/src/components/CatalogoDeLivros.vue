<template>
    <div class="catalogo-livros">
    <h2>Catálogo de Livros</h2>
    <input v-model="novoLivro" @keyup.enter="adicionarLivro"
    placeholder="Digite um novo livro" />
    <ul>
    <li v-for="(livro, index) in livros" :key="index">
    {{ livro.titulo }}
    <button @click="alternarStatus(livro)">Marcar como {{
    livro.assistido ? 'Não Assistido' : 'Assistido' }}</button>
    </li>
    </ul>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    novoLivro: "",
    livros: [],
    };
    },
    methods: {
    adicionarLivro() {
    if (this.novoLivro.trim() !== "") {
    this.livros.push({ titulo: this.novoLivro, assistido: false });
    this.novoLivro = "";
    }
    },
    alternarStatus(livro) {
    livro.assistido = !livro.assistido;
    },
    },
    };
    </script>
    
    <style scoped>
    .catalogo-livros {
    margin: 20px;
    }
    
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    margin: 10px 0;
    }
    </style>