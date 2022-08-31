<template>
<div>
    <md-button v-on:click="redirect()" class="md-success mb-4"><i class="fas fa-plus"></i><span class="ms-2">Create</span></md-button>
    <div>
        <md-table v-model="main_menu" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="No">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.menu_name }}</md-table-cell>
                <md-table-cell md-label="Action">
                    <div>
                        <i class="fas fa-edit edit_icon" v-on:click="redirectEdit(item.id)"></i>
                        <i class="fas fa-trash ms-5 delete_icon" v-on:click="deleteRecord(item.id)"></i>
                    </div>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <h3 v-if="main_menu.length == 0" class="text-center">No Records Found</h3>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import GETMAINMENULIST from '../Common/ActionUrl'
export default {

    name: "main-menu",
    props: {
        tableHeaderColor: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            selected: [],
            main_menu: [],
        };
    },
    methods: {
        getAllRecords() {
            axios.get('http://127.0.0.1:8000/api/get_all_main_menu').then((res) => {
                if (res.data.success) {
                    this.main_menu = res.data.mainMenu
                }
            }).catch((e) => {
                console.log('err', e)
            })

        },
        deleteRecord(id) {
            swal({
                    title: "Are you sure?",
                    text: "Are you sure you want to delete this record",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then(async (willDelete) => {
                    if (willDelete) {
                        let sub_menu_data = await axios.post(`http://127.0.0.1:8000/api/delete_main_menu/${id}`)
                        if (sub_menu_data.data.success) {
                            swal("Record has been deleted!", {
                                icon: "success",
                            });
                            this.getAllRecords()
                        }
                    }
                });
        },
        redirect() {
            this.$router.push('/addmainmenu')
        },
        redirectEdit(id) {
            this.$router.push(`/addmainmenu/${id}`)
        }
    },
    async mounted() {
        this.getAllRecords()
    }
};
</script>
