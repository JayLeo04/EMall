<template>
  <div>
    <search @search="handleSearch"></search>

    <div class="main-box">
      <div class="block" style="margin: 10px auto; display: flex; justify-content: space-between;">

        <!--商品分类-->
        <div class="good-menu">
          <ul v-for="(item, index) in icons" :key="index">
            <li>
              <i class="iconfont" v-html="item.value"></i>
              <span v-for="(category, index2) in item.categories" :key="index2">
                <router-link
                    :to="{
                    path: '/goodlist',
                    query: { categoryId: category.id },
                  }"
                >
                  <a href="/person"><span style="color: #3186cb">{{ category.name }}</span></a>
                </router-link>
                <span v-if="index2 != item.categories.length - 1">/</span>
              </span>
            </li>
          </ul>
        </div>

        <!--轮播图和聊天区域-->
        <div style="display: flex; flex-grow: 1; justify-content: space-between;">
          <div style="flex: 1; margin-right: 10px;">
            <el-carousel height="370px" style="border-radius: 20px; width: 100%;">
              <el-carousel-item v-for="carousel in carousels" :key="carousel.id">
                <router-link :to="'/goodview/' + carousel.goodId">
                  <img style="height: 100%; width: 100%; border-radius: 20px"
                       :src="baseApi + carousel.img"
                  />
                </router-link>
              </el-carousel-item>
            </el-carousel>
          </div>

          <!--聊天区域-->
          <div class="chat-box" style="flex: 1;">
            <ChatComponent/>
          </div>
        </div>
      </div>

      <!--推荐商品-->
      <div style="margin-top: 30px">
        <span style="color: #e75c09">推荐商品</span>
      </div>
      <div style="margin: 20px auto">
        <el-row :gutter="20">
          <el-col :span="6" v-for="good in good" :key="good.id" style="margin-bottom: 20px">
            <router-link :to="'goodview/' + good.id">
              <el-card :body-style="{ padding: '0px', background: '#3472a6' }">
                <img :src="baseApi + good.imgs" style="width: 100%; height: 300px"/>
                <div style="padding: 5px 10px">
                  <span style="font-size: 18px; color: #ffffff">{{ good.name }}</span><br/>
                  <span style="color: #ffffff; font-size: 15px">￥{{ good.price }}</span>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import search from "../../components/Search";
import ChatComponent from '../../components/ChatComponent';

export default {
  name: "TopView",
  //页面初始化数据
  data() {
    return {
      //轮播图
      carousels: [],
      //推荐商品
      good: [],
      baseApi: this.$store.state.baseApi,

      //分类icon，每个icon包含id、value、categories对象数组.category：id，name
      icons: [],
      //搜索内容
      searchText: "",
      baseApi: this.$store.state.baseApi,
    };
  },
  components: {
    search,
    ChatComponent,
  },
  //页面创建
  created() {
    this.request.get("/api/good").then((res) => {
      if (res.code === "200") {
        this.good = res.data;
      } else {
        this.$message.error(res.msg);
      }
    });
    this.request.get("/api/icon").then((res) => {
      if (res.code === "200") {
        this.icons = res.data;
        if (this.icons.length > 6) {
          // 截取前六个分类
          this.icons = this.icons.slice(0, 6);
        }
      }
    });
    this.request.get("/api/carousel").then((res) => {
      if (res.code === "200") {
        this.carousels = res.data;
      }
    });
  },
  //方法
  methods: {
    //搜索按钮触发
    handleSearch(text) {
      this.searchText = text;
      this.$router.push({
        path: "/goodList",
        query: {searchText: this.searchText},
      });
    },
  },
};
</script>

<style scoped>
.main-box {
  background-color: white;
  border: white 2px solid;
  border-radius: 40px;
  padding: 20px 40px;
  margin: 5px auto;
}

.good-menu {
  float: left;
  height: 370px;
  width: 300px;
  margin-right: 130px;
  box-sizing: border-box; /* 确保 padding 和 border 不影响宽度 */
}

.good-menu li {
  list-style: none;
  overflow: hidden;
  margin-bottom: 35px;
}

.good-menu li a,
span {
  font-size: 20px;
  color: #6c6969;
}

.good-menu a span:hover {
  color: #00b7ff;
}

.chat-box {
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 370px; /* Match the height of the carousel */
}
</style>
