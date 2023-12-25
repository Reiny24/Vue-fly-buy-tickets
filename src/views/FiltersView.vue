<template>
    <div>
        <div class="filters">
            <h1>Міжнародні авіаквитки</h1>

            <div class="filters-direction">
                <label htmlFor="option1">
                    <img src="assets/images/filters/Arrow.png" alt="One direction" />
                    <p>В один бік</p>
                    <input type="radio" id="option1" name="options" value="0" v-model="oneWay">
                </label>
            </div>
            
            <div class="filters-direction">
                <label htmlFor="option2">
                    <img src="assets/images/filters/Arrows.png" alt="Two directions" />
                    <p>У два боки</p>
                    <input type="radio" id="option2" name="options" value="1" v-model="oneWay" />
                </label>
            </div>

            <div class="filters-box filters-box1">
                <p>Із</p>
                <select class="filters-input" v-model="from">
                    <option value="" disabled selected hidden>Виберіть країну</option>
                    <option value="Велика Британія" v-if="to !== 'Велика Британія'">Велика Британія</option>
                    <option value="Канада" v-if="to !== 'Канада'">Канада</option>
                    <option value="Німеччина" v-if="to !== 'Німеччина'">Німеччина</option>
                    <option value="Польща" v-if="to !== 'Польща'">Польща</option>
                    <option value="США" v-if="to !== 'США'">США</option>
                    <option value="Україна" v-if="to !== 'Україна'">Україна</option>
                    <option value="Франція" v-if="to !== 'Франція'">Франція</option>
                    <option value="Японія" v-if="to !== 'Японія'">Японія</option>
                </select>
            </div>

            <div class="filters-box">
                <p>Куди</p>
                <select class="filters-input" v-model="to">
                    <option value="" disabled selected hidden>Виберіть країну</option>
                    <option value="Велика Британія" v-if="from !== 'Велика Британія'">Велика Британія</option>
                    <option value="Канада" v-if="from !== 'Канада'">Канада</option>
                    <option value="Німеччина" v-if="from !== 'Німеччина'">Німеччина</option>
                    <option value="Польща" v-if="from !== 'Польща'">Польща</option>
                    <option value="США" v-if="from !== 'США'">США</option>
                    <option value="Україна" v-if="from !== 'Україна'">Україна</option>
                    <option value="Франція" v-if="from !== 'Франція'">Франція</option>
                    <option value="Японія" v-if="from !== 'Японія'">Японія</option>
                </select>
            </div>

            <div class="filters-box">
                <p>Відправлення</p>
                <input type="date" class="filters-input" v-model="shipping"/>
            </div>

            <div class="filters-box" :class="{ 'unavailable': oneWay === '0' }">
                <p>Повернення</p>
                <input type="date" class="filters-input" v-model="returning" :disabled="oneWay === '0'" />
            </div>

            <div class="filters-box">
                <p>Мандрівники</p>
                <div class='travelers'>
                    Дорослі:
                    <button @click="decreaseAdults">-</button>
                    {{ adults }}
                    <button @click="increaseAdults">+</button>
                    
                    Діти:
                    <button @click="decreaseChildren">-</button>
                    {{ children }}
                    <button @click="increaseChildren">+</button>
                </div>
            </div>

            <div class="filters-box filters-box6">
                <p>Клас салону</p>
                <select class="filters-input" v-model="salon">
                    <option value="" disabled selected hidden>Виберіть клас</option>
                    <option value="Перший">Перший</option>
                    <option value="Бізнес">Бізнес</option>
                    <option value="Економ">Економ</option>
                </select>
            </div>

            <router-link @click="sendData" class="compare-button" to="/compare"><h2>Порівняти<br />рейси</h2></router-link>
        </div>

        <!-- Info -->

        <div class="info">
            <div class="info-box">
                <img src="assets/images/info/globe.png" alt="Глобус, подорожуйте з нами" />
                <h2 class="info-title">Розкрийте світ з нами</h2>
                <p class="info-text">
                    Дізнайтеся про найкращі пропозиції авіарейсів до будь-яких куточків світу
                    і вирушайте у <strong>міжнародні подорожі</strong> з нашою авіакомпанією.
                </p>
            </div>

            <div class="info-box">
                <img src="assets/images/info/package.png" alt="Асортимент, порівнюйте та обирайте найкраще" />
                <h2 class="info-title">Порівнюйте та обирайте</h2>
                <p class="info-text">
                    Порівнюйте пропозиції авіаквитків від понад тисячі авіакомпаній, щоб ви могли
                    вибрати <strong>найдешевший та найшвидший рейс</strong>.
                </p>
            </div>

            <div class="info-box">
                <img src="assets/images/info/clock.png" alt="Годинник, збережіть свій час" />
                <h2 class="info-title">Знайдіть ідеальний час</h2>
                <p class="info-text">
                    Дізнайтеся, коли <strong>найдешевший місяць</strong> або день для перельоту і 
                    налаштуйте <strong>цінові оповіщення</strong>, щоб забронювати рейс за потрібною ціною.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                from: '',
                to: '',
                shipping: '',
                returning: '',
                adults: 1,
                children: 0,
                salon: '',
                oneWay: '0'
            };
        },
        methods: {
            decreaseAdults() {
                if (this.adults > 1) {
                    this.adults--;
                }
            },

            increaseAdults() {
                this.adults++;
            },

            decreaseChildren() {
                if (this.children > 0) {
                    this.children--;
                }
            },

            increaseChildren() {
                this.children++;
            },
            
            sendData() {
                const filters = {
                    from: this.from, 
                    to: this.to, 
                    shipping: this.shipping,
                    returning: this.returning,
                    travelers: this.adults + this.children,
                    salon: this.salon,
                    oneWay: this.oneWay
                }
                sessionStorage.setItem("filters", JSON.stringify(filters))
            }
        }
    };
</script>

<style>
.filters {
    display: grid;
    margin: 20px 70px 20px 220px;
    background-color: rgba(133, 133, 133, 0.7);
    border: solid 10px white;
    border-radius: 35px;
    padding: 20px 20px 0px 20px;
}

.filters h1 {
    display: flex;
    grid-column: span 2;
    text-align: center;
    justify-self: center;
    align-self:end;
    margin: 0;
    color: white;
    font-size: 65px;
    font-weight: bold;
}

.filters p {
    font-size: 30px;
    margin: 10px;
    width: 185px;
    font-weight: bold;
    padding-left: 0px;
}

.compare-button {
    grid-column: span 2;
    width: 250px;
    background-color: #FF9400;
    border: solid white 5px;
    border-radius: 24px;
    margin: 10px;
    color: white;
    text-decoration: none;
    justify-self: center;
    text-align: center;
    transition: background-color 0.5s, border-color 0.5s, color 0.5s;
}

.compare-button h2 {
    font-weight: bold;
    margin: 0;
    padding: 10px;
}

.compare-button:hover {
    background-color: white;
    border-color: #FF9400;
    color: #FF9400;
    cursor: pointer;
}

.filters-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 560px;
    background-color: white;
    min-width: 340px;
    max-width: 800px;
    margin: 3px;
    padding: 10px;
    justify-self: center;
    align-items: center;
    height: 70px;
}

.filters-box h2 {
    color: black;
    width: 185px;
}

.filters-input {
    border-color: black;
    font-size: 30px;
    text-align: end;
    justify-self: end;
    height: 50px;
    width: 280px;
}

.filters-direction {
    display: grid;
    grid-template-columns: 240px 60px;
    justify-self: center;
    align-items: center;
    justify-items: center;
}

.filters-direction label {
    display: grid;
    grid-template-columns: 50px 170px 10px;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;
    color: white;
}

.filters-direction img {
    justify-self: end;
}

.filters-direction input[type="radio"] {
    width: 20px;
    height: 20px;
    justify-self: start;
    
}

.filters-box1 {
    border-radius: 25px 0 0 0;
}

.filters-box6 {
    border-radius: 0 0 25px 0;
}

.travelers {
    display: grid;
    grid-template-columns: 1fr 50px 1fr 50px;
    align-items: center;
    justify-items: center;
    justify-self: end;
    gap: 10px;
    font-size: 25px;
    max-height: 70px;
}

.travelers p {
    margin: 0;
    justify-self: end;
}

.travelers button {
    width: 50px;
    height: 30px;
    font-size: 30px;
    border-radius: 18px;
    align-items: start;
}

option {
    margin: 20px;
}

.info {
    display: grid;
    margin: 10px 10px 10px 140px;
    border-radius: 30px 30px 30px 30px;
    padding: 20px 20px 20px 20px;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
}

.info-box {
    display: grid;
    grid-template-rows: 70px 4fr;
    grid-template-columns: 80px 5fr;
    background-color: rgba(235, 139, 109, 0.9);
    min-height: 200px;
    margin: 20px 5px;
    padding: 30px 25px;
    justify-self: center;
    border-radius: 35px;
}

.info-box img {
    height: 70px;
}

.info-title {
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin: 0;
    justify-self: start;
    align-self: center;
    padding-left: 15px;
}

.info-text {
    grid-column: 1 / 3;
    font-size: 25px;
    line-height: 1.4;
    text-align: justify;
    align-self: center;
}

.unavailable {
    opacity: 0.4;
}

@media (min-width: 1200px) {
    .filters h1 {
        font-size: 52px;
    }
    .info-text {
        font-size: 20px;
    }
    .info-title {
        font-size: 28px;
    }
    .travelers button {
        font-size: 24px;
    }
    .travelers {
        font-size: 20px;
    }
    .filters-input {
        font-size: 24px;
    }
    .filters p {
        font-size: 24px;
    }
}

@media (max-width: 1200px) {
    .info-text {
        font-size: 35px;
    }
}

@media (max-width: 1400px) {
    .filters h1 {
        grid-column: auto;
    }

    .compare-button {
        grid-column: auto;
    }

    .filters-input {
        width: 280px;
        font-size: 25px;
    }
}
</style>