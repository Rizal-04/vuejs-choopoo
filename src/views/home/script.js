import Axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      contentNews: [],
      articleScramble: [],
      articleTopNews: [],
      carousels: [
        {
          text: "Hallo",
          color: "primary",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2017/11/17/500b35fd-7ef4-4e79-aae5-5676e7d41077_169.jpg?w=700&q=90",
        },
        {
          text: "Slide 2",
          color: "info",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2020/11/16/dua-petinggi-sunda-empire_169.jpeg?w=700&q=90",
        },
        {
          text: "Slide 3",
          color: "success",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2020/11/02/covid-19-di-inggris-karantina-kedua-selama-satu-bulan-di-tengah-kasus-lebih-dari-satu-juta-pm-boris-johnson-umumkan-lockdown_169.jpeg?w=700&q=90",
        },
        {
          text: "Slide 4",
          color: "warning",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2021/03/09/pemeriksaan-agung-sucipto-penyuap-gubenur-nonaktif-sulsel-2_169.jpeg?w=700&q=90",
        },
      ],
    };
  },
  methods: {
    async handleGetArticle() {
      var getArticle = await Axios({
        url: "https://choopo.herokuapp.com/article/top-10",
        method: "GET",
      });
      console.log(getArticle);
      this.contentNews = getArticle.data.content;
    },
    async handleGetArticleScramble() {
      var getArticleScramble = await Axios({
        url: "https://choopo.herokuapp.com/article/scramble",
        method: "GET",
      });
      console.log(getArticleScramble);
      if (getArticleScramble.data.status === "SUCCESS") {
        this.articleScramble = getArticleScramble.data.content;
      } else {
        return;
      }
    },
    async handleGetArticleTopNews() {
      var getArticleTopNews = await Axios({
        url: "https://choopo.herokuapp.com/article/top-news",
        method: "GET",
      });
      if (getArticleTopNews.data.status === "SUCCESS") {
        this.articleTopNews = getArticleTopNews.data.content;
      } else {
        return;
      }
    },
    async handleGetArticleById() {
      var getDataArticleById = await Axios({
        url: `https://choopo.herokuapp.com/article/9`,
        method: "GET",
      });
      console.log(getDataArticleById);
    },
  },
  mounted() {
    this.handleGetArticle();
    this.handleGetArticleScramble();
    this.handleGetArticleTopNews();
    this.handleGetArticleById();
  },
};
