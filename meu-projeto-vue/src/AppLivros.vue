<template>
    <div id="app2">
    <header>
    <h1>Meu Catálogo de Livros</h1>
    </header>
    <main>
    
    <CatalogoDeLivros />
    </main>
    </div>
    </template>
    
    <script>
    import CatalogoDeLivros from "@/components/CatalogoDeLivros.vue";
    
    export default {
    components: {
    CatalogoDeLivros,
    },
    };
    </script>
    
    <style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    }
    
    header {
    
    background-color: #35495e;
    color: #fff;
    padding: 10px 0;
    }
    </style>