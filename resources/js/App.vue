<template>
    <v-layout>
        <v-img src="/images/background.jpg">
            <v-app-bar 
                :elevation="2" 
                color="rgba(30, 41, 59, 0.7)"
            >
                <template v-slot:prepend>
                    <v-app-bar-nav-icon 
                        @click.stop="drawer = !drawer"
                        color="white"    
                    ></v-app-bar-nav-icon>
                </template>

                <template v-slot:append>
                    <v-app-bar-title
                        class="text-white mr-4 font-bold"
                    >Portafolio de Angel Franko</v-app-bar-title>
                </template>
            </v-app-bar
            >
            <v-navigation-drawer 
                v-model="drawer" 
                :location="$vuetify.display.mobile ? 'bottom' : undefined" 
                temporary
                color="rgb(30, 41, 59)"    
            >
                <v-list>
                    <v-list-item title="Home" prepend-icon="mdi-home"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <router-view>
                </router-view>
            </v-main>
        </v-img>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
    }),
}
</script>
