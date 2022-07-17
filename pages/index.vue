<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="menu">
      <Navbar />
    </div>
    <section>
      <div class="page-heder">
        <h1 class="page-heder-H">
          Welcome To <span class="text-color">STU  Innovations</span>
        </h1>
        <p class="page-heder-description">
          "For the benefit of the whole group here at STU Innovations",<br />
          I need to thank you for the chance to acquire your business as your
          supplier of website composition administrations.
        </p>
      </div>
      <div class="page-banaer" style="text-align: center">
        <h1>Welcome</h1>

        <p
          class="page-heder-description"
          style="color: rgb(0 0 0); font-size: 19px"
        >
          "For the benefit of the whole group here at STU Innovations", I need
          to thank you for the chance to acquire your business as your supplier
          of website composition administrations. There are a great many
          organizations offering these administrations that you could have
          picked, but here we are, with a chance to win your business. I can't
          downplay the amount we value having the option to place this
          proposition before you today.
        </p>
      </div>
      <div class="page-heder-rro row container">
        <div class="col-md-5" style="text-align: left">
          <h1 style="color: #ff0d8d">About STU Innovations</h1>
          <p
            class="page-heder-description"
            style="color: rgb(0 0 0); font-size: 19px; text-align: left"
          >
            STU Innovations depends on Web Site, Web Application & Social
            Promotion Organization. We have been making quality Web Application
            Since April 2016 Under STU Innovations, Now it Promoted as
            Incorporate in that Name of STU Innovations Pvt., Ltd., Reliably
            increasing new bits of knowledge into what makes an ideal Web
            Application. Through this total procedure we stay clear and
            straightforward with our customers with no deceptive guarantees. Web
            Application advancement incorporates numerous Stages, From elevated
            level methodology, Exact arranging, Fundamental Research, Business
            counseling, Structure, Programming, Testing & preparing. Through
            this total procedure we stay clear and straightforward with our
            customers with no deceptive guarantees.
          </p>
        </div>
        <div class="col-md-6">
          <img style="width: 100%; height: 460px" src="/images/Platform-1.png" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-color {
  color: #ff50ac;
}
.page-banaer {
  background-color: #f6f9fb;
  padding: 60px 70px;
  margin: 0;
  justify-content: center;
}
.page-heder-rro {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 90px auto;
}
.page-heder {
  margin-top: 0;
  padding: 200px 10px;
  height: auto;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/page-banner.png");
}
.page-heder .page-heder-H {
  font-size: 49px;
  font-family: "Merriweather";
  max-width: 1200px;
  line-height: 1;
  margin: 0 auto;
  font-stretch: normal;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  color: rgb(237, 228, 228);
}
.page-heder-description {
  font-size: 29px;
  font-family: "ProximaNovaRgRegular";
  color: rgb(237, 228, 228);
  max-width: 721px;
  margin: 50px auto 0;
  text-align: center;
}
</style>
