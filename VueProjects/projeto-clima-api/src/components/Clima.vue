<template>
    <!-- O elemento raiz do componente com uma classe condicional com base na temperatura
-->
    <div id="clima" :class="typeof weather.main != 'undefined' && weather.main.temp > 22 ?
        'warm' : ''">
        <!-- Área principal do componente -->
        <main>
            <!-- Caixa de pesquisa para inserir o nome da cidade -->
            <div class="search-box">

                <input type="text" class="search-bar" placeholder="Search..." v-model="query" @keypress="fetchClima" />

            </div>
            <!-- Se houver dados de clima disponíveis, exiba-os -->
            <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
                <!-- Caixa de localização exibindo nome da cidade e país -->
                <div class="location-box">
                    <div class="location"> {{ weather.name }} , {{ weather.sys.country }}</div>

                    <!-- Exibe a data formatada usando a função dateBuilder() -->
                    <div class="date"> {{ dataConstrutor() }}</div>
                </div>
                <!-- Caixa de informações sobre o clima, exibindo temperatura e condição do tempo -->

                <div class="weather-box">
                    <div class="temp"> {{ Math.round(weather.main.temp) }} °C</div>
                    <div class="weather"> {{ weather.weather[0].main }}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    // Definindo o nome do componente
    name: 'app',
    // Dados do componente, incluindo chave de API, URL base, consulta de pesquisa, e dados meteorológicos
    data() {
        return {
            api_key: '681126f28e7d6fa3a7cfe0da0671e599',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {}
        }
    },
    methods: {
        // Método para buscar dados de clima ao pressionar a tecla Enter na caixa de pesquisa
        fetchClima(e) {
            if (e.key == "Enter") {
                // Faz uma solicitação à API OpenWeatherMap usando fetch
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key} `)

                    // Converte a resposta para JSON
                    .then(res => {
                        return res.json();
                    })
                // Chama o método setResults para atualizar os dados meteorológicos no componente

                    .then(this.setResults);
            }
        },
        // Método para atualizar os dados meteorológicos com os resultados da API
        setResults(results) {
            this.weather = results;
        },
        // Função para formatar a data e retornar uma string formatada
        dataConstrutor() {
            let d = new Date();
            let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",

                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

            let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta",

                "Sábado"];

            let dia = dias[d.getDay()];
            let semana = d.getDate();

            let mes = meses[d.getMonth()];
            let ano = d.getFullYear();
            // Retorna a data formatada como uma string
            return `${dia} ${semana} ${mes} ${ano} `;
        }
    }
}
</script>

<style>
/* Estilos Globais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos para o corpo do documento */

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Estilos para o componente Clima */
#clima {
    background-image: url('../assets/frio.jpg');
    /* Fundo inicial do componente */
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
    /* Transição suave ao alterar o fundo */
}

/* Estilos adicionais quando a classe 'warm' é aplicada (condicional com base na
temperatura) */
#clima.warm {
    background-image: url('../assets/calor.jpg');
    /* Fundo alternativo para temperaturas mais quentes */
}

/* Estilos para a seção principal do componente */
main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0,
                0.75));
    /* Gradiente de fundo */
}

/* Estilos para a caixa de pesquisa */
.search-box {
    width: 100%;
    margin-bottom: 30px;
}

/* Estilos para a barra de pesquisa */
.search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
    /* Transição suave ao focar na barra de pesquisa */

}

.search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
}

/* Estilos para a caixa de localização */
.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

/* Estilos para a caixa de data */
.location-box .date {
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    text-align: center;
}

/* Estilos para a caixa de informações do clima */
.weather-box {
    text-align: center;
}

/* Estilos para a temperatura */
.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 102px;
    font-weight: 800;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

/* Estilos para a condição do tempo */
.weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 600;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}</style>