<template>
        <div class="places">
        <h1 class='places-title'>Вибір місця</h1>
        <div class="places-flight">
            <h2>{{flightData.title}} {{flightData.time}}</h2>
        </div>
        <div class="places-box">
            <div class="schema">
                <img class="exit" src="assets/images/schema/exit.png" alt="Вхід/вихід" />
                <p>A</p><p>B</p><p>C</p><p></p><p>D</p><p>E</p><p>F</p>
                <img class="exit rotate-image" src="assets/images/schema/exit.png" alt="Вхід/вихід" />

                <div class='windows2'>
                    <div></div>
                    <div class='left-window'></div>
                    <div></div>
                    <div class='left-window'></div>
                </div>

                <div class='first'>
                    <div v-for="place in places[0]" :key="place.id">
                        <div class="first-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(0, place.id, flightData.first)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <div class='gap'></div>
                <div class='gap'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <div class='gap'></div>

                <div class='first'>
                    <div v-for="place in places[1]" :key="place.id">
                        <div class="first-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(1, place.id, flightData.first)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <div class='windows2'>
                    <div></div>
                    <div class='right-window'></div>
                    <div></div>
                    <div class='right-window'></div>
                </div>

                <img class="exit" src="assets/images/schema/exit.png" alt="Вхід/вихід" />
                <hr />
                <img class="exit rotate-image" src="assets/images/schema/exit.png" alt="Вхід/вихід" />
                
                <div class='windows5'>
                    <div></div>
                    <div class='left-window'></div>
                    <div></div>
                    <div class='left-window'></div>
                    <div></div>
                    <div class='left-window'></div>
                    <div></div>
                    <div class='left-window'></div>
                    <div></div>
                    <div class='left-window'></div>
                </div>

                <div class='business'>
                    <div v-for="place in places[2]" :key="place.id">
                        <div class="business-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(2, place.id, flightData.business)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <div class='gap2'>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                </div>

                <div class='business'>
                    <div v-for="place in places[3]" :key="place.id">
                        <div class="business-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(3, place.id, flightData.business)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <div class='windows5'>
                    <div></div>
                    <div class='right-window'></div>
                    <div></div>
                    <div class='right-window'></div>
                    <div></div>
                    <div class='right-window'></div>
                    <div></div>
                    <div class='right-window'></div>
                    <div></div>
                    <div class='right-window'></div>
                </div>

                <div class='econom'>
                    <div v-for="place in places[4]" :key="place.id">
                        <div class="econom-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(4, place.id, flightData.econom)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <div class='econom'>
                    <div v-for="place in places[5]" :key="place.id">
                        <div class="econom-place" v-if="place.seat === 1 && !place.isSelected" @click="handlePlaceChange(5, place.id, flightData.econom)"></div>
                        <img src="assets/images/schema/selected-seat.png" alt="" v-if="place.isSelected && place.seat === 1">
                        <img src='assets/images/schema/blocked-seat.png' alt='Зайняте місце' v-if="place.seat !== userData.id && place.seat !== 1" />
                        <img src="assets/images/schema/cart.png" alt="Кошик" v-if="place.seat === userData.id" :class="{'bought': place.seat === userData.id && place.isBought === 1}" />
                    </div>
                </div>

                <img class="exit" src="assets/images/schema/exit.png" alt="Вхід/вихід" />
                <p>A</p><p>B</p><p>C</p><p><strong>WC</strong></p><p>D</p><p>E</p><p>F</p>
                <img class="exit rotate-image" src="assets/images/schema/exit.png" alt="Вхід/вихід" />
            </div>

            <!-- Інформація про місця -->

            <div class="place-info">
                <div class="seats-info-box">
                    <div class="seat-info">
                        <div class='first-place'></div>
                        <h3>Перший клас</h3>
                        <h3>Ціна</h3>
                        <ul>
                            <li>розкішний комфорт</li>
                            <li>вишукане обслуговування</li>
                            <li>приватний простір</li>
                            <li>ексклюзивні послуги</li>
                        </ul>
                        
                        <p class='price'><strong>{{flightData.first}} грн</strong><br />на 1 людину</p>
                    </div>

                    <hr />

                    <div class="seat-info">
                        <div class='business-place'></div>
                        <h3>Бізнес клас</h3>
                        <h3>Ціна</h3>
                        <ul>
                            <li>розширений комфорт</li>
                            <li>високий рівень послуг</li>
                            <li>приватний простір</li>
                        </ul>
                        
                        <p class='price'><strong>{{flightData.business}} грн</strong><br />на 1 людину</p>
                    </div>

                    <hr />

                    <div class="seat-info">
                        <div class='econom-place'></div>
                        <h3>Економ клас</h3>
                        <h3>Ціна</h3>
                        <ul>
                            <li>базовий комфорт</li>
                            <li>зменшений вибір їжі</li>
                            <li>стандартні сидіння</li>
                        </ul>
                        
                        <p class='price'><strong>{{flightData.econom}} грн</strong><br />на 1 людину</p>
                    </div>

                    <hr />

                    <div class="blocked-seat-info">
                        <img src="assets/images/schema/blocked-seat.png" alt="" />
                        <h3>Зарезервоване місце</h3>
                        <h4>Місце може бути вже зайняте або недоступне для покупки</h4>
                    </div>

                    <hr />

                    <div class="selected-seat-info">
                        <img src="assets/images/schema/selected-seat.png" alt="" />
                        <h3>Вибране місце</h3>
                        <img src="assets/images/schema/cart.png" alt="" />
                        <h3>Місця у кошику</h3>
                    </div>
                </div>

                <div class="baggage-info">
                    <h2>Інформація про багаж</h2>
                    <img src="assets/images/schema/7kg.png" alt="7 кг багажу" @click="changeBaggage(0)" :class="{'selected-baggage': baggageValue === 0}" />
                    <img src="assets/images/schema/20kg.png" alt="20 кг багажу" @click="changeBaggage(100)" :class="{'selected-baggage': baggageValue === 100}" />
                    <img src="assets/images/schema/32kg.png" alt="32 кг багажу" @click="changeBaggage(200)" :class="{'selected-baggage': baggageValue === 200}" />

                    <p>до 7 кг</p>
                    <p>до 20 кг</p>
                    <p>до 32 кг</p>

                    <p class='baggage-price'>{{baggageValue}} грн (UAH)</p>
                </div>
            </div>

            <div class="cart-box">
                <img src="assets/images/schema/cart.png" alt="Кошик" />
                <p>Кошик: <br />{{userCart[0]}} грн</p>
                <p>Ціна: {{price + baggageValue}} грн (UAH)</p>
                <button @click="updateCart()" :class="{'unavailable': !selected}" v-if="!added || selected" :disabled="!selected">Додати в<br />кошик</button>
                <button v-if="added && !selected"><router-link to="/compare" class="router-link">Продовжити<br />бронювання</router-link></button>
                <button><router-link to="/pay" class="router-link">Перейти до<br />оплати</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                places: [],
                userCart: [],
                userData: null,
                usersFlights: [],
                flightData: { "id": 1, "from_country": "Україна", "to_country": "Польща", "title": "Київ, Бориспіль - Варшава, Модлін", "date": "2023-12-13", "time": "14:00", "places": 5, "econom": 600, "economAvailable": 0, "business": 800, "businessAvailable": 1, "first": 1000, "firstAvailable": 1 },
                selected: false,
                added: false,
                selectedId: -1,
                selectedZone: -1,
                cartPrice: 0,
                price: 0,
                baggageValue: 0,
                selectedSeat: '',
            }
        },
        async created() {
            try {
                this.flightData = this.getFlightById();

                this.userCart = this.getUserCart() || { 0: 0 };
                this.userData = this.getUser() || { id: -1, lastname: "", firstname: "", login: "", mobile: "" };

                const placesSlice = await this.fetchPlaces(this.flightData.id);
                const formattedPlaces = placesSlice.map(place => ({ ...place, isSelected: false }));

                this.places.push(formattedPlaces.slice(0, 8));
                this.places.push(formattedPlaces.slice(8, 16));
                this.places.push(formattedPlaces.slice(16, 28));
                this.places.push(formattedPlaces.slice(28, 40));
                this.places.push(formattedPlaces.slice(40, 58));
                this.places.push(formattedPlaces.slice(58, 76));

                // Обробка корзини
                if (Object.keys(this.userCart).length > 1) {
                    for (const key in this.userCart) {
                        if (this.userCart[key].flightID === this.flightData.id) {
                            const seatId = this.userCart[key].place.selectedId;
                            const zone = this.userCart[key].place.selectedZone;

                            for (let j = 0; j < this.places[zone].length; j++) {
                                if (seatId === this.places[zone][j].id) this.places[zone][j].seat = this.userData.id;
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching initial data:', error);
                // Обробка помилок
            }
        },
        methods: {
            // Функція отримання даних про рейс
            getFlightById() {
                // Реалізація функції для Vue
                const retrievedFlight = sessionStorage.getItem("flight");
                return JSON.parse(retrievedFlight || '{}');
            },
            // Функція отримання даних корзини користувача
            getUserCart() {
                // Реалізація функції для Vue
                const cartData = localStorage.getItem('userCart');
                return cartData ? JSON.parse(cartData) : [];
            },
            // Функція отримання даних користувача
            getUser() {
                // Реалізація функції для Vue
                let userData = localStorage.getItem('user');
                return userData ? JSON.parse(userData) : {};
            },
            // Функція отримання місць у літаку
            async fetchPlaces(flightID) {
                const params = new URLSearchParams();
                params.append('flightID', String(flightID));

                try {
                const response=await axios.get("http://localhost:2222/flights_places", {
                  params,
                  responseType: 'json'
                });
                console.log('fetched flight_places', response.data);
                return response.data;
              } catch(error) {
                console.error('Error fetching flight_places', error);
                return [];
              }
            },
            // Функція зміни стану місця
            handlePlaceChange(zone, id, price) {
                if (this.selectedZone >= 0) {
                    const previousPlace = this.places[this.selectedZone].find(place => place.id === this.selectedId);

                    if (previousPlace) {
                        previousPlace.isSelected = false;
                    }
                }

                const foundPlace = this.places[zone].find(place => place.id === id);

                if (foundPlace) {
                    foundPlace.isSelected = !foundPlace.isSelected;
                    this.selectedId = id;
                    this.selectedZone = zone;
                    this.price = price;
                    this.selectedSeat = foundPlace.place;
                    this.selected = true;
                }
            },
            // Функція оновлення корзини
            updateCart() {
                this.added = true;
                this.selected = false;
                this.cartPrice += this.price + this.baggageValue;

                let selectedSalon = "Економ";
                if (this.selectedZone === 0 || this.selectedZone === 1) selectedSalon = "Перший";
                else if (this.selectedZone === 2 || this.selectedZone === 3) selectedSalon = "Бізнес";

                const flight = {
                    flightID: this.flightData.id,
                    title: this.flightData.title,
                    date: this.flightData.date,
                    time: this.flightData.time,
                    place: this.selectedSeat,
                    placeID: this.selectedId,
                    price: this.price + this.baggageValue,
                    salon: selectedSalon
                };

                this.updateUserCart({ selectedId: this.selectedId, selectedZone: this.selectedZone }, this.flightData.id, this.price + this.baggageValue, flight);
                const place = this.places[this.selectedZone].find(obj => obj.id === this.selectedId);
                place.isSelected = false;
                place.seat = this.userData.id;
                this.userCart = this.getUserCart();
            },
            // Додавання обраного польоту до локального сховища
            updateUserCart(place, flightID, price, flight) {
                if (typeof window !== 'undefined') {
                let userCart = localStorage.getItem('userCart');
                if (userCart) userCart = JSON.parse(userCart);
                else userCart = { 0: 0 };

                userCart[0] += price;
                
                const keys = Object.keys(userCart);
                const newKey = keys.length === 0 ? 1 : Math.max(...keys.map(Number)) + 1;
                const newFlight = { place, flightID, flight };
                userCart[newKey] = newFlight;
                
                localStorage.setItem('userCart', JSON.stringify(userCart));
                }
            },
            // Оновлення ціни від вибраного багажу
            changeBaggage(value) {
                this.baggageValue = value;
            }
        }
    }
</script>

<style scoped>
    .places {
        display: grid;
        justify-items: center;
        font-size: 30px;
        margin-left: 150px;
    }

    .places-title {
        background: rgba(255, 148, 0, 0.70);
        margin: 0;
        width: 800px;
        text-align: center;
        padding: 20px;
        font-size: 45px;
    }

    .places h2 {
        font-size: 37px;
        margin: 0;
    }

    .places h3 {
        padding: 0 10px;
        margin: 0;
        font-size: 30px;
    }

    .places h4 {
        padding: 0 10px;
        font-size: 25px;
        margin: 0;
        color: rgb(77, 76, 76);
    }

    .places-flight {
        background-color: rgba(255, 255, 255, 0.40);
    }

    .places-flight h2 {
        background: rgba(255, 148, 0, 0.60);
        text-align: center;
        width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .places-box {
        display: grid;
        grid-template-columns: 1fr 1.6fr;
        align-items: start;
        margin: 10px 20px;
        padding-top: 15px;
        background-color: rgba(114, 111, 106, 0.70);
    }

    .places-box h2 {
        text-align: center;
        padding: 10px;
    }

    .schema {
        background-color: rgba(217, 200, 177, 0.7);
        margin: 0 20px 20px 20px;
        padding: 10px 0;
        justify-self: center;
        align-self: center;
        align-items: center;
        justify-items: center;
        display: grid;
        grid-template-columns: repeat(9, 60px);
        grid-template-rows: repeat(17, 60px);
        gap: 7px;
        column-gap: 10px;
    }

    .rotate-image {
        transform: rotate(180deg);
    }

    .schema hr {
        grid-column: span 7;
        border: none;
        border-top: 4px solid black; 
        width: 100%;
    }

    .windows2, .windows5 {
        display: grid;
        gap: 7px;
        column-gap: 10px;
    }

    .windows2 {
        grid-row: span 4;
        grid-template-rows: repeat(4, 60px);
    }

    .windows5 {
        grid-row: span 10;
        grid-template-rows: repeat(10, 60px);
    }

    .left-window, .right-window {
        height: 40px;
        width: 30px;
        align-self: center;
    }

    .left-window {
        border-right: solid 5px rgb(104, 104, 105);
    }

    .right-window {
        border-left: solid 5px rgb(104, 104, 105);
    }

    .first {
        grid-column: span 2;
        grid-row: span 4;
        display: grid;
        grid-template-columns: repeat(2, 60px);
        grid-template-rows: repeat(4, 60px);
        gap: 7px;
        column-gap: 10px;
    }

    .business {
        grid-row: span 4;
        grid-column: span 3;
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(4, 60px);
        gap: 7px;
        column-gap: 10px;
    }

    .econom {
        grid-row: span 6;
        grid-column: span 3;
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(6, 60px);
        gap: 7px;
        column-gap: 10px;
    }

    .first-place, .business-place, .econom-place {
        width: 55px;
        height: 55px;
        border: solid 4px black;
        border-radius: 20px 20px 0 0;
        transition: background-color 0.3s, border 0.3s;
    }

    .first-place {
        background-color: rgb(53, 123, 252);
    }

    .business-place {
        background-color: #cd7c0a;
    }

    .econom-place {
        background-color: #e1cd1c;
    }

    .schema .business-place:hover, .schema .econom-place:hover, .schema .first-place:hover {
        border: solid 3px white;
        background-color: #79D900;
    }

    .business img, .first img, .econom img {
        width: 100%;
    }

    .selected-place {
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('/public/assets/images/schema/selected-seat.png');
    }

    .gap, .gap2 {
        display: grid;
        gap: 7px;
        column-gap: 10px;
        align-items: center;
    }

    .gap {
        grid-row: span 4;
        grid-template-rows: repeat(4, 60px);
    }

    .gap2 {
        grid-row: span 10;
        grid-template-rows: repeat(10, 60px);
        text-align: center;
    }

    .gap2 p {
        padding: 0;
    }

    .seats-info-box {
        background: rgba(217, 200, 177, 0.7);
        border: solid 8px rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 5px 20px;
        margin: 0 20px;
    }

    .seats-info-box img {
        width: 60px;
        align-self: center;
        grid-row: span 3;
    }

    hr {
        margin: 8px;
    }

    ul {
        padding-left: 30px;
        margin: 0;
        font-size: 24px;
    }

    .seats-info-box p {
        margin: 0;
    }

    .seat-info {
        display: grid;
        grid-template-columns: 10% 60% 30%;
        gap: 7px;
        column-gap: 10px;
        align-items: center;
    }

    .seat-info .business-place, .seat-info .first-place, .seat-info .econom-place {
        grid-row: span 2;
    }

    .price {
        font-size: 27px;
        margin: 0
    }

    .blocked-seat-info {
        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-rows: 30px;
        gap: 7px;
    }

    .selected-seat-info {
        display: grid;
        grid-template-columns: 10% 40% 10% 40%;
        grid-template-rows: 40px;
        gap: 7px;
    }

    .blocked-seat-info img, .selected-seat-info img {
        grid-row: span 2;
    }

    .baggage-info {
        display: grid;
        justify-items: center;

        background: rgba(217, 200, 177, 0.7);
        border: solid 8px rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 5px;
        
        margin: 5px 20px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 110px;
    }

    .baggage-info h2 {
        grid-column: span 3;
    }

    .baggage-info p {
        text-align: center;
        margin: 0;
    }

    .baggage-price {
        grid-column: span 3;
        justify-self: end;
        padding-right: 30px;
        font-weight: bold;
    }

    .baggage-info img {
        border-radius: 15px;
    }

    .selected-baggage {
        border: solid 5px #79D900;
    }

    .cart-box {
        grid-column: span 2;
        display: grid;
        grid-template-columns: 80px 150px 2fr 1fr 1fr;
        align-items: center;
        background: rgb(51, 54, 63);
        padding: 10px 20px;
        
        color: white;
    }

    .cart-box p {
        justify-self: center;
        padding-right: 20px;
    }

    .cart-box button {
        width: 200px;
        height: 75px;
        background-color: #FF9400;
        border: solid white 5px;
        border-radius: 24px;
        margin: 10px;
        color: white;
        text-decoration: none;
        justify-self: end;
        text-align: center;
        transition: background-color 0.5s, border-color 0.5s, color 0.5s;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cart-box button:hover {
        background-color: white;
        border-color: #FF9400;
        color: #FF9400;
        cursor: pointer;
    }

    .unavailable {
        opacity: 0.4;
        pointer-events: none;
    }

    .bought {
        background-color: #79D900;
        padding: 1.5px;
    }

    
    .router-link {
        text-decoration: none;
        color: white;
        transition: 0.5s;
    }
    .router-link:hover {
        color: #FF9400;
    }

    @media (max-width: 1200px) {
        .places-box {
            grid-template-columns: 1fr;
            height: auto;
        }

        .cart-box {
            grid-column: 1 / 1;
            top: 0
        }

    }

    @media (min-width: 1200px) {
        .cart-box button {
            font-size: 18px;
        }
        ul {
            font-size: 16px;
        }
        
        .price {
            font-size: 20px;
        }

        .places {
            font-size: 22px;
        }
        
        .places-title {
            padding: 5px;
            font-size: 25px;
        }
        
        .places h2 {
            padding: 5px;
            font-size: 22px;
        }
        
        .places h3 {
            font-size: 19px;
        }
        
        .places h4 {
            font-size: 17px;
        }
        .schema {
            grid-template-columns: repeat(9, 30px);
            grid-template-rows: repeat(17, 30px);
        }
        .exit, .rotate-image {
            height: 25px;
        }
        .left-window, .right-window {
            height: 27px;
        }
        .windows2 {
            grid-template-rows: repeat(4, 30px);
        }
        
        .windows5 {
            grid-template-rows: repeat(10, 30px);
        }
        .first {
            grid-template-columns: repeat(2, 30px);
            grid-template-rows: repeat(4, 30px);
        }
        
        .business {
            grid-template-columns: repeat(3, 30px);
            grid-template-rows: repeat(4, 30px);
        }
        
        .econom {
            grid-template-columns: repeat(3, 30px);
            grid-template-rows: repeat(6, 30px);
        }
        .gap {
            grid-template-rows: repeat(4, 30px);
        }
        
        .gap2 {
            grid-template-rows: repeat(10, 30px);
        }
        
        .seats-info-box img {
            width: 30px;
        }

        .first-place, .business-place, .econom-place {
            width: 23px;
            height: 23px;
        }

        .baggage-info {
            grid-template-rows: 1fr 68px;
        }
        .baggage-info img {
            height: 60px;
        }
    }
</style>