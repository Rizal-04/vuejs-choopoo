<template>
  <div>
    <div class="bg-gray-200	mt-10 p-2 ">
      <div class="flex flex-row">
        <b-carousel :indicator-inside="false">
          <b-carousel-item v-for="carousel in carousels" :key="carousel">
            <section class="hero is-medium">
              <b-image class="image" :src="carousel.image"></b-image>
            </section>
          </b-carousel-item>
        </b-carousel>
        <div style="max-width:450px; width:100%;">
          <div class="flex flex-col">
            <div v-for="contents in articleScramble" :key="contents.articleId">
              <div class="card">
                <div class="card-content flex flex-row">
                  <div class="grid gap-7 ">
                    <div class="col-start-1 col-end-3">
                      <img
                        style="max-height:50px; min-height:50px;max-width:60px; width:100%;"
                        :src="contents.mainImage"
                        alt=""
                      />
                    </div>
                    <div class="col-end-7 col-span-4 text-sm">
                      <p>
                        {{ contents.subtitle }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" flex justify-center">
      <span class="font-bold text-lg">Berita Populer</span>
    </div>
    <div class="flex-row">
      <div class="">
        <div class="">
          <div
            class="flex flex-row"
            style="grid-column: center-start / -1;
                  overflow: auto;
                  display: flex;"
          >
            <div
              v-for="contentsNews in contentNews"
              :key="contentsNews.totalView"
              class="p-2"
            >
              <div class="mx-2 p-2">
                <div class=" flex flex-col">
                  <div class=" text-center">
                    <img
                      style="max-height:130px; min-height:130px;width:100%;"
                      :src="contentsNews.mainImage"
                      alt=""
                    />
                  </div>
                  <div class="text-sm my-4">
                    <p>{{ contentsNews.createdDate }}</p>
                    <span class="font-bold">{{ contentsNews.title }}</span>
                    <p class="truncate w-40">
                      {{ contentsNews.subtitle }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" flex justify-center mt-7 ">
      <span class="font-bold text-lg">Berita Terkini </span>
    </div>
    <div class="flex-col min-w-min w-5/12 ">
      <div
        v-for="contentsTop in articleTopNews"
        :key="contentsTop.createdDate"
        class="p-2"
      >
        <div class="card">
          <div class="card-content flex flex-row">
            <div class="grid gap-7 ">
              <div class="col-start-1 col-end-3 ">
                <img
                  style="max-height:50px; min-height:50px;max-width:60px; width:100%;"
                  :src="contentsTop.mainImage"
                  alt=""
                />
              </div>
              <div class="col-end-7 col-span-4 text-sm">
                <p>{{ contentsTop.createDate }}</p>
                <p>
                  {{ contentsTop.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
