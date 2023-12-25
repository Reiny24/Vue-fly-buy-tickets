<template>
    <div class="sales" id="sales">
        <h1 class="sales-title">Дешеві квитки на літак</h1>

        <div class="sales-box">
            <h2>Родинний тур</h2>
            <hr />
            <img src="assets/images/sales/family.png" alt="Сім'я, подорожуйте дешевше з сім'єю" />
            <p>
                Економте на <strong>родинних турах</strong>, подорожуючи сім’єю разом з нами. Кожна дитина віком до 8-ми років,
                яка подорожує з дорослим, може летіти за половину ціни. <strong>Знижка</strong> автоматично застосовується при
                бронюванні <strong>авіаквитків</strong> для батьків та дітей.
            </p>
        </div>

        <div class="sales-box">
            <h2>Осінні розпродажі</h2>
            <hr />
            <img src="assets/images/sales/leaves.png" alt="Осінь, осінні розпродажі" />
            <p>
                Отримуйте унікальний промокод для знижки <strong>на авіаквитки</strong> під час бронювання. Цей <strong>промокод</strong> надає
                15% знижки на всі рейси протягом <strong>осіннього розпродажу</strong>. Для зареєстрованих користувачів,
                що підписані на розсилку, доступна додаткова знижка 5%.
            </p>
        </div>

        <div class="sales-box">
            <h2>Зареєструйтеся і зекономте</h2>
            <hr />
            <img src="assets/images/sales/handshake.png" alt="Співпраця" />
            <p>
                Спеціальна <strong>акція для зареєстрованих</strong> клієнтів сайту, які мають акаунт. Всі зареєстровані 
                користувачі отримують сталу знижку в розмірі 10% на всі авіаквитки після входу в систему 
                та бронювання. Ця знижка доступна завжди і діє для всіх рейсів.
            </p>
        </div>
    </div>
</template>

<style>
    .sales {
        padding: 0 20px;
        margin-left: 150px;
    }

    .sales-title {
        color: black;
        font-size: 60px;
        font-weight: bold;
        align-self: end;
        text-align: start;
        margin: 5px 0;
    }

    .sales-box {
        background-color: rgba(133, 133, 133, 0.7);
        margin: 20px 0;
        border-radius: 35px;
        display: grid;
        grid-template-columns: 1fr 4fr;
        justify-items: center;
    }

    .sales-box h2 {
        grid-column: span 2;
        padding-top: 15px;
        margin: 0;
        font-size: 40px;
    }

    .sales-box hr {
        grid-column: span 2;
        border: none;
        border: 2px solid white; 
        margin: 10px 0;
        width: 99.3%;
    }

    .sales-box img {
        border-radius: 35px 0 0 35px;
        background-attachment: fixed;
        background-position: center center;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .sales-box p {
        color: white;
        margin: 0;
        padding: 10px 25px;
        text-align: justify;
        font-size: 35px;
    }

    @media (min-width: 1200px) {
        .sales-title {
            font-size: 40px;
        }

        .sales-box h2 {
            font-size: 30px;
        }
        
        .sales-box p {
            font-size: 25px;
        }

        .sales-box img {
            width: 100%;
        }

        .sales-box {
            grid-template-columns: 1fr 7fr;
        }
        
        .sales-box p {
            align-self: center;
        }
    }
</style>