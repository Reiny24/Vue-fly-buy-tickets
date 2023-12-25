<template>
    <div class="compare">
        <h1 class='compare-title'>Порівняння авіарейсів</h1>
        <div class="twoWays" v-if="filters.oneWay === '1'">
            <button class="active" :class="{'disactive': !from}" @click="switchWay(true)">Переліт</button>
            <button class="active left" :class="{'disactive': from}" @click="switchWay(false)">Повернення</button>
        </div>
        <div v-if="from" class="compare-list" :class="{'span-list': filters.oneWay === '0'}">
            <div v-for="flight in flights" :key="flight.id" class='compare-flight'>
                <div class="flight-info">
                <p class="title">Рейс:</p>
                <p class="title">{{ flight.title }}</p>
                
                <p class="sub-title">Час:</p>
                <p class="sub-title">{{ flight.date + ' ' + flight.time }}</p>
                
                <p class="sub-title">Місця:</p>
                <p class="sub-title">{{ flight.economAvailable + flight.businessAvailable + flight.firstAvailable }} вільних</p>
                
                <p class="sub-title">Клас:</p>
            
                <div class="prices">
                    <p :class="{ 'selected': filters.salon === 'Економ', 'unavailable': flight.economAvailable === 0 }">Економ</p>
                    <p :class="{ 'selected': filters.salon === 'Бізнес', 'unavailable': flight.businessAvailable === 0 }">Бізнес</p>
                    <p :class="{ 'selected': filters.salon === 'Перший', 'unavailable': flight.firstAvailable === 0 }">Перший</p>

                    <p :class="{ 'selected': filters.salon === 'Економ', 'unavailable': flight.economAvailable === 0 }">{{ flight.econom }} грн</p>
                    <p :class="{ 'selected': filters.salon === 'Бізнес', 'unavailable': flight.businessAvailable === 0 }">{{ flight.business }} грн</p>
                    <p :class="{ 'selected': filters.salon === 'Перший', 'unavailable': flight.firstAvailable === 0 }">{{ flight.first }} грн</p>
                </div>

                <p class="sub-title">Ціна:</p>
                </div>
                <router-link :to="'/places'" class="buy-ticket" @click="sendData(flight.id)"> 
                    <p class="sub-title">Купити</p>
                </router-link>
            </div>
        </div>
        
        <div v-if="!from" class="compare-list">
            <div v-for="flight in flightsBack" :key="flight.id" class='compare-flight'>
                <div class="flight-info">
                <p class="title">Рейс:</p>
                <p class="title">{{ flight.title }}</p>
                
                <p class="sub-title">Час:</p>
                <p class="sub-title">{{ flight.date + ' ' + flight.time }}</p>
                
                <p class="sub-title">Місця:</p>
                <p class="sub-title">{{ flight.economAvailable + flight.businessAvailable + flight.firstAvailable }} вільних</p>
                
                <p class="sub-title">Клас:</p>
            
                <div class="prices">
                    <p :class="{ 'selected': filters.salon === 'Економ', 'unavailable': flight.economAvailable === 0 }">{{ flight.econom }} грн</p>
                    <p :class="{ 'selected': filters.salon === 'Бізнес', 'unavailable': flight.businessAvailable === 0 }">{{ flight.business }} грн</p>
                    <p :class="{ 'selected': filters.salon === 'Перший', 'unavailable': flight.firstAvailable === 0 }">{{ flight.first }} грн</p>
                </div>

                <p class="sub-title">Ціна:</p>
                </div>
                <router-link :to="'/places'" class="buy-ticket" @click="sendData(flight.id)">
                    <p class="sub-title">Купити</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                flights: [],
                flightsBack: [],
                filters: null,
                oneWay: '0',
                from: true,
            }
        },
        async created() {
            const retrievedFilters = sessionStorage.getItem("filters");
            this.filters = JSON.parse(retrievedFilters) || { oneWay: true };
            
            try {
                this.flights = await this.fetchFilters(this.filters);
            } catch (error) {
                console.error('Error fetching flights:', error);
            }

            if (this.filters.oneWay === '1') {
                const from = this.filters.from;
                this.filters.from = this.filters.to;
                this.filters.to = from;
                try {
                    this.flightsBack = await this.fetchFilters(this.filters);
                } catch (error) {
                    console.error('Error fetching flights:', error);
                }
            }
        },
        methods: {
            async fetchFilters(filters) {
                try {
                    let params = new URLSearchParams();

                    // Додавання фільтрів до параметрів запиту
                    Object.entries(filters).forEach(([key, value]) => {
                        params.append(key, String(value));
                    });

                    const response = await axios.get("http://localhost:2222/flights", { params, responseType: 'json' });

                    console.log('Fetched flights:', response.data);
                    return response.data; // Повертаємо отримані дані
                } catch (error) {
                    // Обробка помилок
                    console.error('Error fetching flights:', error);
                    throw new Error('Failed to fetch flights');
                }
            },
            switchWay(value) {
                this.from = value
            },
            sendData(flightId) {
                const selectedFlight = this.flights.find(element => element.id === flightId) ||
                this.flightsBack.find(element => element.id === flightId);
                this.setSelectedFlight(selectedFlight);
            },
            setSelectedFlight(flight) {
                sessionStorage.setItem('flight', JSON.stringify(flight));
            }
        }
    }
</script>

<style>
    .compare {
        grid-column: 2 / 2;
        display: grid;
        margin: 0 30px 0 180px;
        height: 80vh;
    }

    .compare-title {
        color: white;
        font-size: 50px;
        font-weight: bold;
        margin: 0;
        padding-top: 10px;
    }

    .compare-flight {
        margin: 20px 0;
        background-color: #CEBA9F;
        border: solid gray 5px;
        border-radius: 25px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 80% 20%;
    }

    .flight-info {
        display: grid;
        grid-template-columns: 1fr 6fr;
    }

    .compare-flight h1,
    .compare-flight .title,
    .selected {
        margin: 5px;
        font-size: 30px;
        font-weight: bold;
        color: white;
    }

    .compare-flight h2,
    .compare-flight .sub-title {
        margin: 0;
        padding: 10px;
        font-size: 28px;
        font-weight: bold;
    }

    .buy-ticket {
        width: 170px;
        background-color: #FF9400;
        border: solid white 5px;
        border-radius: 24px;
        color: white;
        text-decoration: none;
        justify-self: center;
        align-self: center;
        text-align: center;
        transition: background-color 0.5s, border-color 0.5s, color 0.5s;
        font-size: 24px;
        font-weight: bold;
    }

    .buy-ticket:hover {
        background-color: white;
        border-color: #FF9400;
        color: #FF9400;
        cursor: pointer;
    }

    .prices {
        grid-column: 2 / 2;
        grid-row: span 2;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }

    .prices p {
        font-size: 28px;
        margin: 0;
        padding-left: 10px;
    }

    .unavailable {
        opacity: 0.3;
    }

    .twoWays {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 9vh;
    }

    .active {
        text-decoration: none;
        background-color: #CEBA9F;
        font-size: 32px;
        color: white;
        border: 4px solid gray;
        padding: 15px;
        border-radius: 25px 25px 0px 0px;
        text-align: start;
        transition: opacity 0.5s;
    }

    .disactive {
        opacity: 0.5;
        cursor: pointer;
    }

    .left {
        text-align: end;
        grid-column: 3 / 3;
    }

    .compare-list {
        max-height: 72vh;
        overflow-y: auto;
    }

    .span-list {
        grid-row: span 2;
    }

    @media screen and (max-width: 1200px) {
        .compare-flight {
            grid-template-columns: 100%;
        }
    }

    @media (min-width: 1200px) {
        .active {
            font-size: 24px;
        }

        .prices p {
            font-size: 21px;
        }

        .compare-flight h2,
        .compare-flight .sub-title {
            font-size: 21px;
        }

        .buy-ticket {
            font-size: 18px;
        }

        .compare-title {
            font-size: 38px;
        }
    }
</style>