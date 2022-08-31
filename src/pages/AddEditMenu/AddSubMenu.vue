<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100">
            <form>
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Add Sub Menu</h4>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-small-size-100 md-size-50">
                                <md-field>
                                    <label>Sub Menu Name</label>
                                    <md-input v-model="sub_menu_name"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100 md-size-50">
                                <md-field>
                                    <label for="movie">Main Menu</label>
                                    <md-select v-model="main_menu_id">
                                        <md-option v-for="item in main_menu_list" v-bind:key="item" :value="item.id">{{item.menu_name}}</md-option>
                                    </md-select>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-size-100">
                                <md-button class="md-raised md-success" v-on:click="addEditSubMenu()">{{this.id ? 'Update' : 'Add'}}</md-button>
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
    name: "AddSubMenu",
    props: {
        dataBackgroundColor: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            id: '',
            sub_menu_name: '',
            main_menu_id: '',
            main_menu_list: [],
        };
    },
    mounted() {
        this.getMainMenuList()
        this.getSubMenuById()
    },
    methods: {
        addEditSubMenu() {
            let formData = new FormData()
            formData.append('sub_menu_name', this.sub_menu_name)
            formData.append('main_menu_id', this.main_menu_id)
            if (this.id) {
                axios.post(`http://127.0.0.1:8000/api/update_sub_menu/${this.id}`, formData).then((res) => {
                    if (res.data.success) {
                        this.$notify({
                            message: "<h6>Sub Menu Updated.</h6>",
                            horizontalAlign: 'right',
                            verticalAlign: 'top',
                        });
                    }
                }).catch((e) => {
                    console.log('e', e)
                })
            } else {
                axios.post('http://127.0.0.1:8000/api/create_sub_menu', formData).then((res) => {
                    if (res.data.success) {
                        this.$notify({
                            message: "<h6>Sub Menu Added.</h6>",
                            horizontalAlign: 'right',
                            verticalAlign: 'top',
                        });
                    }
                }).catch((e) => {
                    console.log('e', e)
                })
            }

        },
        getSubMenuById() {
            this.id = this.$router.history.current.params.id
            if (this.id) {
                axios.get(`http://127.0.0.1:8000/api/get_sub_menu_by_id/${this.id}`).then((res) => {
                    if (res.data.success) {
                        console.log('res',res)
                        this.sub_menu_name = res.data.subMenu.sub_menu_name
                        this.main_menu_id = res.data.subMenu.main_menu_id

                    }
                }).catch((e) => {
                    console.log('error', e)
                })
            }
        },
        getMainMenuList() {
            axios.get('http://127.0.0.1:8000/api/get_all_main_menu').then((res) => {
                if (res.data.success) {
                    this.main_menu_list = res.data.mainMenu
                }
            }).catch((e) => {
                console.log('err', e)
            })
        },
    },
};
</script>

<style></style>
