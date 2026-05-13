<template>
    <h1>Book Collection</h1>
    <br />
    <nav>
        <router-link :to="{ name: 'books.overview' }">
            Boeken Overzicht
        </router-link>
        <router-link :to="{ name: 'books.create' }"> Nieuw Boek </router-link>
    </nav>

    <nav>
        <router-link :to="{ name: 'authors.overview' }">
            Author overzicht
        </router-link>
        <router-link :to="{ name: 'authors.create' }">
            Nieuwe Auteur
        </router-link>
    </nav>

    <nav>
        <router-link :to="{ name: 'reviews.overview' }">
            Review overzicht
        </router-link>
        <router-link :to="{ name: 'reviews.create' }"
            >Nieuwe Review</router-link
        >
    </nav>
    <router-view></router-view>
</template>
