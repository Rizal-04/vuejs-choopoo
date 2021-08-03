<template>
  <div>
    <div class="p-20 min-w-min w-6/12">
      <span class="font-bold text-lg">{{ title }}</span>
      <p><i>Virus corona tidak pandang bulu!</i></p>
      <div class="mt-4" style="width:630px; height:410px">
        <img
          src="https://cdn.idntimes.com/content-images/post/20200403/picsart-04-03-023018-e521473bd68255dd258c8221452b159b_600x400.jpg"
          alt=""
        />
      </div>
      <div class="mt-7">
        <p>
          Pandemik COVID-19 belum juga reda. Banyak pesohor baik dari kalangan
          seleb maupun pejabat yang terpaksa harus mengisolasi diri akibat
          terinfeksi virus corona. India menjadi salah satu negara dengan kasus
          COVID-19 tertinggi di dunia. Saat ini, negeri Mahatma Gandhi tersebut
          sedang dilanda gelombang kedua COVID-19.
        </p>
        <p class="mt-4">
          Kalangan artis Bollywood pun tak luput dari ancaman. Semakin lama,
          semakin banyak saja artis Bollywood yang dinyatakan positif COVID-19.
          Semoga menjadi pelajaran untuk lebih disiplin, berikut sederet artis
          populer Bollywood yang dinyatakan positif COVID-19 pada April 2021.
        </p>
      </div>
      <div class="mt-4" style="width:630px; height:410px">
        <img
          src="https://cdn.idntimes.com/content-images/post/20200403/picsart-04-03-023018-e521473bd68255dd258c8221452b159b_600x400.jpg"
          alt=""
        />
      </div>
      <p>
        Semoga pandemik ini segera berlalu. Yuk, kita sama-sama patuh pada
        protokol kesehatan yang ada dan tidak berada di luar rumah, kecuali
        mendesak. Karena sedikit saja kita lengah, virus corona siap
        menghampiri.
      </p>
      <div class="text-red-500 mt-6">
        <a href=""
          ><i
            >Baca Juga : 9 Aktor Bollywood yang Akan Bertambah Usianya di Bulan
            Mei</i
          ></a
        >
      </div>
      <div class="font-bold text-lg mt-4">
        <span>Topic</span>
      </div>
      <div class="mt-4 flex justify-between break-all">
        <div v-for="buttons in button" :key="buttons">
          <b-button type="is-danger" outlined>{{ buttons.text }}</b-button>
        </div>
      </div>
      <div class="text-red-500 mt-4">
        <p><i> Bagikan:</i></p>
        <div class="flex flex-row mt-5 ">
          <div class="flex flex-row  ">
            <img
              class="w-8 h-8 mx-1  "
              src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
              alt=""
            />
            <img
              class="w-8 h-8 mx-1"
              src="https://freepngimg.com/thumb/whatsapp/77220-scalable-vector-graphics-logo-whatsapp-icon.png"
              alt=""
            />
            <img
              class="w-8 h-8 mx-1"
              src="http://swchi.org/wp-content/uploads/2016/10/twitter-circle-icon.png"
              alt=""
            />
            <img
              class="w-8 h-8 mx-1"
              src="https://image.flaticon.com/icons/png/512/1646/1646851.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class=" flex flex-col mt-5">
        <div v-for="contents in content" :key="contents" class="p-2">
          <div class="card">
            <div class="card-content">
              <div class="grid grid-cols-3 gap-7">
                <div class="col-start-1 col-end-3 w-20 mt-2">
                  <img :src="contents.image" alt="" />
                </div>
                <div class="col-end-7 col-span-2 text-sm">
                  <p>{{ contents.date }}</p>
                  <p class="mt-2">{{ contents.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
