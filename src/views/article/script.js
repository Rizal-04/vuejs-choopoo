import Axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      button: [
        {
          id: 1,
          text: "Artis India",
        },
        {
          id: 2,
          text: "Bollywood",
        },
        {
          id: 3,
          text: "COVID 19",
        },
        {
          id: 4,
          text: "corona",
        },
        {
          id: 5,
          text: "wabah",
        },
      ],
      content: [
        {
          id: "1",
          date: "27-april-2021 11:04",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2021/03/09/pemeriksaan-agung-sucipto-penyuap-gubenur-nonaktif-sulsel-2_169.jpeg?w=700&q=90",
          text:
            "Eque Porro Quisquam Est Qui Dolorem Ipsum Quia dolor sit amet, consectetur, adipisci velit...",
        },
        {
          id: "2",
          date: "27-april-2021 11:04",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2020/11/02/covid-19-di-inggris-karantina-kedua-selama-satu-bulan-di-tengah-kasus-lebih-dari-satu-juta-pm-boris-johnson-umumkan-lockdown_169.jpeg?w=700&q=90",
          text:
            "Eque Porro Quisquam Est Qui Dolorem Ipsum Quia dolor sit amet, consectetur, adipisci velit...",
        },
        {
          id: "3",
          date: "27-april-2021 11:04",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2020/11/16/dua-petinggi-sunda-empire_169.jpeg?w=700&q=90",
          text:
            "Eque Porro Quisquam Est Qui Dolorem Ipsum Quia dolor sit amet, consectetur, adipisci velit...",
        },
        {
          id: "4",
          date: "27-april-2021 11:04",
          image:
            "https://akcdn.detik.net.id/community/media/visual/2017/11/17/500b35fd-7ef4-4e79-aae5-5676e7d41077_169.jpg?w=700&q=90",
          text:
            "Eque Porro Quisquam Est Qui Dolorem Ipsum Quia dolor sit amet, consectetur, adipisci velit...",
        },
      ],
      title:
        "9 Artis Bollywood yang Dinyatakan Positif COVID-19 pada April 2021",
    };
  },
  methods: {
    async handleGetArticleById() {
      var getArticleById = await Axios({
        url: `https://choopo.herokuapp.com/body/findBodyByArticle/4`,
        method: "GET",
      });
      console.log(getArticleById);
    },
  },
  mounted() {
    this.handleGetArticleById();
  },
};
