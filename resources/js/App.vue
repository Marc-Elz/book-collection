<template>
    <h1>Hello World!</h1>
    <nav>
        <router-link :to="{ name: 'books.overview' }">
            Boeken Overzicht
        </router-link>
        <router-link :to="{ name: 'books.create' }">Nieuw Boek</router-link>
        <router-link :to="{name: 'books.create'}">Nieuw boek toevoegen</router-link>
    </nav>

    <nav>
        <router-link :to="{ name: 'authors.overview' }">
            Author overzicht
        </router-link>
        <router-link :to="{ name: 'authors.create' }">Nieuwe Auteur</router-link>
    </nav>
    <router-view></router-view>
</template>
