<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100">
            <form>
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Add Main Menu</h4>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-small-size-100 md-size-33">
                                <md-field>
                                    <label>Main Menu Name</label>
                                    <md-input v-model="menu_name"></md-input>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-size-100">
                                <md-button class="md-raised md-success" v-on:click="addEditMainMenu()">{{this.id ? 'Update' : 'Add'}}</md-button>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import {
    useRouter,
    useRoute
} from 'vue-router'

export default {
    name: "AddMainMenu",
    metaInfo() {
        return { 
            title: "Demo Title",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    props: {
        dataBackgroundColor: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            menu_name: '',
            id: ''
        };
    },
    mounted() {
        this.id = this.$router.history.current.params.id
        if (this.id) {
            axios.get(`http://127.0.0.1:8000/api/get_main_menu_by_id/${this.id}`).then((res) => {
                if (res.data.success) {
                    this.menu_name = res.data.main_menu.menu_name
                }
            }).catch((e) => {
                console.log('error', e)
            })
        }

    },
    methods: {
        addEditMainMenu() {
            let formData = new FormData()
            formData.append('menu_name', this.menu_name)
            if (this.id) {
                axios.post(`http://127.0.0.1:8000/api/update_main_menu/${this.id}`, formData).then((res) => {
                    if (res.data.success) {
                        this.$notify({
                            message: "<h6>Main Menu Updated.</h6>",
                            horizontalAlign: 'right',
                            verticalAlign: 'top',
                        });
                    }
                }).catch((e) => {
                    console.log('e', e)
                })
            } else {
                axios.post('http://127.0.0.1:8000/api/create_main_menu', formData).then((res) => {
                    if (res.data.success) {
                        this.$notify({
                            message: "<h6>Main Menu Added.</h6>",
                            horizontalAlign: 'right',
                            verticalAlign: 'top',
                        });
                    }
                }).catch((e) => {
                    console.log('e', e)
                })
            }

        }
    },
};
</script>

<style></style>
