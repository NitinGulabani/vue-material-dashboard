<template>
<div>
    <md-button v-on:click="redirect()" class="md-success mb-4"><i class="fas fa-plus"></i><span class="ms-2">Create</span></md-button>

    <md-table v-model="child_sub_menu" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="No">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.child_sub_menu_name }}</md-table-cell>
            <md-table-cell md-label="Main Menu">{{ item.menu_name }}</md-table-cell>
            <md-table-cell md-label="Sub Menu">{{ item.sub_menu_name }}</md-table-cell>
            <md-table-cell md-label="Action">
                    <div>
                        <i class="fas fa-edit edit_icon"></i>
                        <i class="fas fa-trash ms-5 delete_icon" v-on:click="deleteRecord(item.id)"></i>
                    </div>
                </md-table-cell>
        </md-table-row>
    </md-table>
    <h3 v-if="child_sub_menu.length == 0" class="text-center">No Records Found</h3>
</div>
</template>

<script>
import axios from 'axios'
import GETMAINMENULIST from '../Common/ActionUrl'
export default {

    name: "ChildSubMenu",
    props: {
        tableHeaderColor: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            selected: [],
            child_sub_menu: [],
        };
    },
    methods: {
         getAllRecords() {
           axios.get('http://127.0.0.1:8000/api/get_all_child_sub_menu').then((res) => {
            if (res.data.success) {
                this.child_sub_menu = res.data.childSubMenu
                console.log('child_sub_menu',this.child_sub_menu)
            }
            }).catch((e) => {
                console.log('error',e)
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
                        let sub_menu_data = await axios.post(`http://127.0.0.1:8000/api/delete_child_sub_menu/${id}`)
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
            this.$router.push('/addchildsubmenu')
        },
    },
    async mounted() {
        this.getAllRecords()
    }
};
</script>
