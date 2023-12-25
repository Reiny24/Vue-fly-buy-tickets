<template>
    <nav class="sidebar">
        <div class="logo-container">
            <img src="assets/images/sidebar/Logo.png" alt="Логотип компанії" />
            <div class="profile-links">
                <router-link to="" v-if="!isLogin">
                    <p class="login">Вхід</p>
                </router-link>
                <!-- <router-link to="profile" v-if="isLogin">
                    <p class="login">Профіль</p>
                </router-link>
                <button v-if="isLogin" @click="logout()">
                    <p class="login">Вийти</p>
                </button> -->
            </div>
        </div>

        <hr />

        <div class="logo-container">
            <img src="assets/images/sidebar/Home.png" alt="Логотип домашньої сторінки" class="icon" />
            <router-link to="/">
                <p>Головна</p>
            </router-link>
        </div>

        <div class="logo-container">
            <img src="assets/images/sidebar/Sales.png" alt="Логотип знижок" class="icon" />
            <router-link to="sales">
                <p>Акції та<br />знижки</p>
            </router-link>
        </div>

        <div class="logo-container">
            <img src="assets/images/sidebar/Questions.png" alt="Логотип питань" class="icon" />
            <router-link to="about">
                <p>Про нас</p>
            </router-link>
        </div>

        <div class="logo-container">
            <img src="assets/images/sidebar/Support.png" alt="Логотип підтримки" class="icon" />
            <a href="#footer">
                <p>Зворотній<br />зв'язок</p>
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                isLogin: false
            }
        }
    }
</script>

<style>
    .sidebar {
        position: fixed;
        width: 150px;
        height: 100%;
        background-color: #d9d9d9;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        transition: width 0.5s;
        overflow: hidden;
        border-radius: 0 25px 25px 0;
        z-index: 2;
    }

    .logo-container {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
    }

    .sidebar .logo-container p {
        margin: 0;
        display: none;
        white-space: nowrap;
        font-size: 34px;
        color: black;
    }

    .sidebar:hover {
        width: 350px;
    }

    .sidebar:hover .logo-container p {
        display: block;
    }

    .icon {
        padding: 0px 30px;
    }

    .sidebar hr {
        border: none;
        border-top: 1px solid black; 
        margin: 20px 0;
    }

    .sidebar a, .sidebar button {
        text-decoration: none;
        cursor: pointer;
        background: none;
        border: none;
        font-weight: bold;
    }

    .logo-container {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .logo-container p {
        padding-left: 20px;
    }

    .profile-links {
        display: grid;
        padding-right: 20px;
        row-gap: 30px;
    }
</style>