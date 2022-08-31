<template>
<div>
    <h1>dwadw</h1>
</div>
</template>

<script>
import axios from 'axios'
import GETMAINMENULIST from '../Common/ActionUrl'
export default {

    name: "main-menu1",
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
    async mounted() {
        let main_menu_data = await axios.get('http://127.0.0.1:8000/api/get_all_main_menu')
        if (main_menu_data.data.success) {
            this.main_menu = main_menu_data.data.mainMenu
        }

    }
};
</script>
