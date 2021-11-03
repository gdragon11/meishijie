<template>
    <div class="car_warp">
        <ul class="car_list">
            <li class="car_list_con" v-for="(item,index) in gwclist" :key="item._id">
                <input type="checkbox" v-model="checkbox">
                <img :src="item.img" alt="">
                <p class="con">
                    <span>{{item.title}}</span>
                    <span>{{item.commentsLen}}评论</span>
                    <span>作者：{{item.name}}</span>
                </p>
                <p class="con_c">
                    <!-- <button @click="item.num++">+</button> -->
                    <button @click="jijia(item.id,'jia')">+</button>
                    <span style="margin:10px">{{item.num}}</span>
                    <!-- <button @click="item.num>0?item.num--:item.num=0">-</button> -->
                    <button @click="jijia(item.id,'jian')">-</button>
                </p>
                <button @click="remove(index)" class="remove">删除</button>
            </li>
            <div class="zongshu">
                <span>总数：{{this.$store.state.geshu}}</span>
            </div>
            <div>
                <p>已选中：{{xuanzhong}}</p>
                <button class="le" @click="quanxuan">全选</button>
                <button class="ri" @click="removeAll">删除</button>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:0,
            checkbox:false,
            xuanzhong:0
        }
    },
    computed:{
        gwclist(){
            return this.$store.state.gwclist;
        }
    },
    created(){
        this.$store.dispatch('set_list')
    },
    methods:{
        jijia(id,type){
            this.$store.dispatch('set_jijia',{id,type})
        },
        remove(index){
            this.gwclist.splice(index,1);
            this.$store.state.geshu = 0;
        },
        quanxuan(){
            if(this.checkbox === false){
                this.checkbox = true
                this.xuanzhong = this.$store.state.geshu
            }else{
                this.checkbox = false
                this.xuanzhong = 0
            }
        },
        removeAll(){
            if(this.checkbox === true){
                this.$store.state.gwclist = [];
                this.$store.state.geshu = 0;
                this.xuanzhong = 0;
            }else{
                this.$store.state.gwclist === this.$store.state.gwclist
                this.$store.state.geshu === this.$store.state.geshu;
                this.xuanzhong === this.xuanzhong;
            }
        }
    },
    watch:{
        gwclist:{
            handler(value){
                localStorage.setItem('gwclist',JSON.stringify(value))
                localStorage.setItem('geshu',JSON.stringify(''))
                if(this.checkbox === true){
                    this.$store.state.geshu = 0
                    this.xuanzhong = 0;
                }
            },
            immediate:true
        }
    }
}

</script>
<style lang="stylus">
    .car_warp
        width 100%;
        height 100%;
        padding: 0 0px 30px 50px;
        background: #ccc;
        border: 1px solid black;
        .car_list
            width 100%
            height 100%
            .car_list_con
                margin 20px;
                width 90%;
                height 200px;
                background: red;
                img
                    width 200px;
                    height 200px;
                    float left
                .con
                    display inline-block;
                    float left;
                    width 240px;
                    height: 160px;
                    span
                        display block;
                        font-size 16px;
                        margin 20px;
                .con_c 
                    display block;
                    width 200px;
                    height: 160px;
                    line-height 140px;
                    float right;
                .remove
                    margin-left: 140px;
                    margin-top: 20px;
                    float right;
                input
                    float left;
            .zongshu
                margin 0 auto;
                width 200px;

        .le
            float left
            margin-left: 200px;    
        .ri
            float right
            margin-right: 200px;
</style>