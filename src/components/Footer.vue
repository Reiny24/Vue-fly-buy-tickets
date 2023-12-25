<template>
    <footer id="footer" class="footer">
        <p class="empty-field"></p>
        <p class="mobile">
            Телефон обслуговування:<br /><br />
            +38 (063) - 83 - 82 - 64<br />
            +38 (097) - 83 - 82 - 64
        </p>

        <p class="email">
            Електронна пошта запитань<br />і відповідей:<br /><br />flybuytickets.qanda&#64;gmail.com
        </p>

        <div class="social-medias">
            <p>
                Соціальні мережі:
            </p>
            <a href='https://web.telegram.org'>
                <img src="assets/images/footer/telegram.png" alt="Our telegram" />
            </a>

            <a href="https://www.viber.com/en/">
                <img src="assets/images/footer/viber.png" alt="Our instagram" />
            </a>

            <a href="https://www.instagram.com">
                <img src="assets/images/footer/instagram.png" alt="Our instagram" />
            </a>
        </div>

        <hr />

        <p>
            © FlyBuyTickets 2023<br />
            Сервіс авіабілетів
        </p>

        <p></p>

        <p class="footer-right">
            Політика конфіденційності<br />Партнери
        </p>
    </footer>
</template>

<style>
    .footer {
        background-color: #333333;
        display: grid;
        grid-template-columns: 150px 1fr 1fr 250px;
        padding: 0px 20px;
        align-self: end;
        height: 20vh;
    }

    .empty-field {
        grid-row: span 3;
    }

    footer p {
        margin: 0;
        color: white;
        padding: 10px;
        font-size: 15px;
    }

    .email {
        text-align: center;
        justify-self: start;
    }

    .social-medias {
        display: grid;
        grid-template-rows: 20px 1fr;
        align-items: center;
        justify-items: center;
        padding: 10px;
    }

    .social-medias p {
        grid-column: span 3;
        padding: 0;
    }

    .social-medias img {
        width: 40px;
    }

    footer hr {
        grid-column: span 3;
        border: none;
        border-top: 1px solid white; 
        height: 2px;
        margin: 0;
    }

    .footer-right {
        text-align: end;
        justify-self: center;
    }
</style>