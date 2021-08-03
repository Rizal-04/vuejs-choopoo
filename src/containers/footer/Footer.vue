<template>
  <div class="bg-black">
    <footer class="footer bg-black ">
      <div class="content text-white ">
        <div class="flex  justify-between ">
          <div class="flex flex-col justify-between w-6/12 p-4 mx-6">
            <div class="flex flex-row justify-between w-5/12">
              <div>
                <span>Bantuan</span>
                <div class="flex flex-col font-bold my-4">
                  <span> <a href=""> Hubungi Kami</a></span>
                  <span> <a href="">FAQ</a></span>
                  <span> <a href="">Lokasi Kami</a></span>
                </div>
              </div>
              <div>
                <span>Choopoo</span>
                <div>
                  <div class="flex flex-col font-bold my-4">
                    <span><a href="">Tentang Kami</a></span>
                    <span><a href="">Karir</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row mt-16 ">
              <div class="flex flex-row  ">
                <img
                  @click="routeToFacebook"
                  class="w-8 h-8 mx-2  "
                  style="cursor: pointer;"
                  src="https://www.pngix.com/pngfile/big/8-81377_pin-icon-facebook-whitepng-on-pinterest-2-inch.png"
                  alt=""
                />
                <img
                  @click="routeToInstagram"
                  class="w-8 h-8 mx-2"
                  style="cursor: pointer;"
                  src="https://icon-library.com/images/white-instagram-icon-png/white-instagram-icon-png-12.jpg"
                  alt=""
                />
                <img
                  @click="routeToTwiter"
                  class="w-8 h-8 mx-2"
                  style="cursor: pointer;"
                  src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
                  alt=""
                />
                <img
                  @click="routeToYoutube"
                  class="w-12 h-8 mx-2"
                  style="cursor: pointer;"
                  src="https://img.pngio.com/rotate-resize-tool-youtube-logo-vector-white-white-youtube-logo-png-740_458.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class=" mx-5">
            <span>Kirim Berita Up To Date Ke Email Anda</span>
            <div class="flex flex-col mt-5">
              <b-input
                class="outline-none"
                type="text"
                placeholder="masukan alamat email anda"
              />
              <div>
                <b-button
                  class="text-sm mt-4 font-bold"
                  type="is-small is-danger"
                  >Konfirmasi</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class=" flex flex-col mb-5">
      <hr class=" w-full" style="border:solid 1px white; " />
      <div class=" flex justify-center mt-4 text-white ">
        <p>@2021 Choopoo Media | All Right Reserved</p>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
