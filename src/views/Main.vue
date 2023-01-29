<template>
    <div class="common-layout">
        <!-- 頂部導覽列 -->
        <div class="nav_list">
            <Navbar/>
        </div>
        <!-- Main中央內容 -->
        <div class="main"> 
            <router-view/>
        </div>
        <!-- Footer頁尾資料 -->
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
// component組件
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
    components:{
        Navbar,
        Footer
    }
})
</script>