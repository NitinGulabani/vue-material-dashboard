<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Main Menu</h4>
                    <!-- <p class="category">Here is a subtitle for this table</p> -->
                </md-card-header>
                <md-card-content>
                    <main-menu table-header-color="green"></main-menu>
                </md-card-content>
            </md-card>
        </div>

        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Sub Menu</h4>
                    <!-- <p class="category">Here is a subtitle for this table</p> -->
                </md-card-header>
                <md-card-content>
                    <sub-menu  table-header-color="green"></sub-menu>
                </md-card-content>
            </md-card>
        </div>
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Sub Child Menu</h4>
                    <!-- <p class="category">Here is a subtitle for this table</p> -->
                </md-card-header>
                <md-card-content>
                    <ChildSubMenu table-header-color="green"></ChildSubMenu>
                </md-card-content>
            </md-card>
        </div>

    </div>
</div>
</template>

<script>
import {
    MainMenu,
    SubMenu,
    ChildSubMenu
} from "@/components";

export default {
    components: {
        MainMenu,
        SubMenu,
        ChildSubMenu
    },
};
</script>
