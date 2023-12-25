<template>
    <div class="pay">
        <div v-if="userFlightsLength !== 0" class="pay-case1">
            <h1>Оплата квитків</h1>
                <div class="tickets">
                    <div v-for="flight in userFlights" :key="flight.placeID" class="tickets-list">
                    <h2 class="ticket-left">Рейс:</h2>
                    <h2>{{ flight.title }}</h2>

                    <h2 class="ticket-left">Час:</h2>
                    <h2>{{ flight.date }} {{ flight.time }}</h2>

                    <h2 class="ticket-left">Місце:</h2>
                    <h2>{{ flight.place }}</h2>

                    <h2 class="ticket-left">Ціна:</h2>
                    <h2>{{ flight.price }} грн</h2>

                    <button>
                        <img src="assets/images/pay/trash.png" alt="Видалити квиток" @click="deleteTickets(flight.placeID, flight.flightID)" />
                    </button>
                </div>
            </div>


            <form ref="payForm" class="pay-data" @submit.prevent="pay">
                <h2>Дані оплати:</h2>
                <div class="pay-info">
                <div class="form">
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Прізвище"
                        minlength="3"
                        maxlength="15"
                        required
                        v-model="userData.lastname"
                        pattern="[A-Za-zІ-іЇ-їЄ-єҐ-ґ']+"
                        class="form-inputs"
                        :class="{ 'invalid-input': !isLastNameValid && isLastNameDirty }"
                        @input="lastnameValidate"
                    />
                    <div v-if="!isLastNameValid && isLastNameDirty" style="display: flex; justify-content: center;">
                    <small>Введіть коректне прізвище</small>
                    </div>
                </div>

                <div class="form">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Ім'я"
                        minlength="3"
                        maxlength="15"
                        required
                        v-model="userData.firstname"
                        pattern="[A-Za-zІ-іЇ-їЄ-єҐ-ґ']+"
                        class="form-inputs"
                        :class="{ 'invalid-input': !isFirstNameValid && isFirstNameDirty }"
                        @input="firstnameValidate"
                    />
                    <div v-if="!isFirstNameValid && isFirstNameDirty" style="display: flex; justify-content: center;">
                    <small>Введіть коректне ім'я</small>
                    </div>
                </div>

                <div class="form">
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Телефон"
                        maxlength="10"
                        required
                        v-model="userData.mobile"
                        pattern="^0\d{9}$"
                        class="form-inputs"
                        :class="{ 'invalid-input': !isMobileValid && isMobileDirty }"
                        @input="mobileValidate"
                    />
                    <div v-if="!isMobileValid && isMobileDirty" style="display: flex; justify-content: center;">
                    <small>Введіть коректний телефон</small>
                    </div>
                </div>
                </div>

                <h2>Метод оплати:</h2>
                <div class="pay-method">
                <label for="mastercard-visa">
                    <input
                        type="radio"
                        id="mastercard-visa"
                        name="payment-method"
                        v-model="selectedPaymentMethod"
                        value="mastercard-visa"
                        required
                    />
                    <img src="assets/images/pay/mastercard-visa.png" alt="MasterCard Visa" />
                </label>

                <label for="g-apple-pay">
                    <input
                    type="radio"
                    id="g-apple-pay"
                    name="payment-method"
                    v-model="selectedPaymentMethod"
                    value="g-apple-pay"
                    />
                    <img src="assets/images/pay/g-apple-pay.png" alt="G-Pay Apple-Pay" />
                </label>
                </div>

                <div class="total-price">
                <h2>Загальна ціна: {{ userCart[0] }} грн</h2>
                <input
                    type="submit"
                    value="Оплатити"
                    class="pay-button"
                    :disabled="!isFirstNameValid || !isLastNameValid || !isMobileValid || selectedPaymentMethod === ''"
                    :click="pay()"
                />
                </div>
            </form>
        </div>

        <div v-else class="pay-case2">
            <h2>Ваш список квитків порожній</h2>
            <router-link :to="['/']" class="pay-button">
            <p>Назад на головну</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userCart: [],
                userFlights: [],
                userFlightsLength: 0,
                userData: {"lastname": '', "firstname": '', "mobile": '', "id": -2},
                selectedPaymentMethod: '',
                // Прапорці для перевірки валідності інпутів
                isLastNameDirty: false,
                isLastNameValid: false,
                isFirstNameDirty: false,
                isFirstNameValid: false,
                isMobileDirty: false,
                isMobileValid: false,
            }
        },

        created() {
            this.getUserCartData();
            this.getUserFlights();
            this.getUserData();
        },

        methods: {
            getUserCartData() {
                const cartData = this.getUserCart();
                if (cartData) {
                    this.userCart = cartData;
                    this.userFlightsLength = Object.keys(this.userCart).length - 1;
                }
            },

            getUserCart() {
                const cartData = localStorage.getItem('userCart');
                return cartData ? JSON.parse(cartData) : {};
            },

            getUserFlights() {
                for (let key in this.userCart) {
                    if (typeof this.userCart[key] !== "number") {
                    this.userFlights.push(this.userCart[key].flight);
                    }
                }
            },

            getUserData() {
                const userData = this.getUser();
                if (userData) {
                    this.userData = userData;
                }
            },

            getUser() {
                const userData = localStorage.getItem('user');
                return userData ? JSON.parse(userData) : {};
            },
            
            lastnameValidate() {
                this.isLastNameDirty = true;
                this.isLastNameValid = (/^[A-Za-zІ-іЇ-їЄ-єҐ-ґ']+$/i.test(this.userData.lastname) && this.userData.lastname.length > 2);
            },

            firstnameValidate() {
                this.isFirstNameDirty = true;
                this.isFirstNameValid = (/^[A-Za-zІ-іЇ-їЄ-єҐ-ґ']+$/i.test(this.userData.firstname) && this.userData.firstname.length > 2);
            },

            mobileValidate() {
                this.isMobileDirty = true;
                this.isMobileValid = /^0\d{9}$/i.test(this.userData.mobile);
            },

            deleteTickets(placeID, flightID) {
                for (let i = 0; i < this.userFlights.length; i++) {
                    if (this.userFlights[i].flightID === flightID && this.userFlights[i].placeID === placeID) {
                    this.userFlights.splice(i, 1);

                    for (const key in this.userCart) {
                        if (typeof this.userCart[key] !== "number") {
                        if (this.userCart[key].flightID === flightID && this.userCart[key].place.selectedId === placeID) {
                            this.userCart[0] -= this.userCart[key].flight.price;
                            delete this.userCart[key];
                            break;
                        }
                        }
                    }

                    localStorage.setItem('userCart', JSON.stringify(this.userCart));
                    this.userFlightsLength -= 1;
                    break;
                    }
                }
            },

            pay() {
            }
        }
    }
</script>

<style scoped>
    .pay {
        height: 80vh;
        margin-left: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pay h1 {
        color: black;
        justify-self: start;
        margin: 10px 0 0 0;
        padding-left: 40px;
    }

    .pay h2 {
        margin: 0;
        color: black;
    }

    .pay-data {
        grid-row: 1 / 3;
        grid-column: 2 / 3;
        display: grid;
        justify-items: center;
        column-gap: 20px;
        color: white;
        align-items: center;
        padding-bottom: 20px;
        /* grid-row: span 2; */
    }

    .pay-data img {
        max-width: 150px;
        justify-self: end;
    }

    .pay-data p {
        margin: 0;
        padding: 5px;
        font-size: 20px;
    }

    .tickets {
        grid-column: 1 / 2;
        display: grid;
        height: 60vh;
        overflow-y: auto;
    }

    .ticket-left {
        grid-column: 1 / 2;
    }
    .tickets-list {
        background: #EBC99A;
        margin: 10px 0px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 80px 1fr 70px;
        gap: 10px 10px;
        width: 620px;
    }

    .tickets-list button {
        grid-row: 3 / 5;
        grid-column: 3 / 3;
        background: none;
        border: none;
        align-self: end;
        justify-self: end;
    }

    .tickets-list img:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    .pay-info {
        display: grid;
        align-items: center;
        background: rgba(87, 73, 53, 0.7);
        border: solid 8px rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 0 20px;
        margin: 3px 0;
        height: 260px;
        width: 260px;
    }

    .pay-info p {
        grid-column: span 2;
    }

    .pay-info input[type="radio"] {
        height: 20px;
        width: 20px;
        justify-self: end;
    }

    .pay-method {
        display: grid;
        align-items: center;
        justify-items: center;
        background: rgba(87, 73, 53, 0.7);
        border: solid 8px rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 0 10px;
        margin: 3px 0;
        height: 120px;
        width: 280px;
    }

    .pay-method label {
        display: grid;
        grid-template-columns: 20px 1fr;
    }

    .pay-button {
        max-width: 200px;
        min-height: 55px;
        width: 200px;
        background-color: #FF9400;
        border: solid white 5px;
        border-radius: 24px;
        color: white;
        text-decoration: none;
        text-align: center;
        transition: background-color 0.5s, border-color 0.5s, color 0.5s;
        font-size: 24px;
        font-weight: bold;
        justify-self: center;
        margin-top: 10px;
    }

    .pay-button:disabled {
        opacity: 0.4;
        pointer-events: none;
    }

    .pay-button p {
        margin: 0;
        padding: 10px;
    }

    .pay-button:hover {
        background-color: white;
        border-color: #FF9400;
        color: #FF9400;
        cursor: pointer;
    }

    .confirmation {
        display: grid;
        grid-template-columns: 20px 1fr;
        color: black;
    }

    .pay-case1 {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        /* justify-items: start; */
        align-items: center;
    }

    .pay-case2 {
        grid-column: span 2;
        display: grid;
        /* position: relative; */
        /* left: 25%; */
        grid-template-columns: 2fr 1fr;
        background: rgba(133, 133, 133, 0.7);
        padding: 20px;
        border: solid 10px white;
        border-radius: 35px;
    }

    .pay-case2 h2 {
        grid-column: span 2;
        align-self: center;
        color: white;
    }

    .pay-case2 .pay-button {
        grid-column: span 2;
    }

    .form-inputs {
        margin: 5px;
        height: 30px;
        width: 200px;
        font-size: 17px;
        padding: 10px 20px;
        text-align: center;
        border: 3px solid gray;
        border-radius: 10px;
        justify-self: center;
    }

    small {
        color: red;
        text-align: center;
    }

    .invalid-input {
        border: 3px solid red;
    }

    .form {
        display: grid;
        grid-template-rows: 1fr 20px;
        justify-content: center;
    }

    .total-price {
        display: grid;
    }

    @media (max-width: 1200px) {
        .pay {
            grid-template-columns: auto;
        }
        .pay h1 {
            grid-column: auto;
        }

        .pay-data {
            position: relative;
            z-index: 1;
            right: 0%;
            top: 0%;
            grid-template-columns: 1fr 1fr;
        }

        .pay-data h2 {
            grid-row: 1 / 2;
        }

        .pay-method {
            height: 260px;
        }

        .total-price {
            grid-column: span 2;
        }
    }


</style>