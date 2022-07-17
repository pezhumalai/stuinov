<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="menu">
      <Navbar />
    </div>
    <section class="st-page-baneer">
      <div class="st-page-baneer-h">
        <h1>What people says</h1>
      </div>
    </section>
    <section class="pages-about">
      <div class="stu-header-1">We are expert in</div>
      <div class="content-page">
        <div class="what-left">
          <img src="/images/ideas.png" />
        </div>
        <div class="what-right">
          <h3>Unique Design & Ideas</h3>
          <h3>100% Safe For Your Websites</h3>
        </div>
      </div>
      <div class="content-page">
        <div class="what-left">
          <img src="/images/search-engine.png" />
        </div>
        <div class="what-right">
          <h3>HTML5, CSS3 & Bootstrap 4</h3>
          <h3>Search Engine Optimization - SEO</h3>
        </div>
      </div>
      <div class="content-page">
        <div class="what-left">
          <img src="/images/green-leaf.png" />
        </div>
        <div class="what-right">
          <h3>
            We Bolster Our Contributions Dependent On Customer 'S Business
            Prerequisites And Give Inside And Out Solid Arrangement
          </h3>
        </div>
      </div>
      <div class="content-page">
        <div class="what-left">
          <img src="/images/thumsup.png" />
        </div>
        <div class="what-right">
          <h3>
            We Give Guidelines To Our Client With Reliable In Each Phase From
            Start To Finish Through The Whole Task.
          </h3>
        </div>
      </div>
      <div class="content-page">
        <div class="what-left">
          <img src="/images/free-rocket.png" />
        </div>
        <div class="what-right">
          <h3>
            We Change The Customer Business Objectives And Their Vision In
            Viable Online Reality.
          </h3>
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
.st-page-baneer {
  margin-top: 0;
  padding: 200px 10px;
  height: auto;
  position: relative;
  background-size: cover;
  background-image: url("/images/testimonial-background.webp");
}
.stu-testimonial-cards {
    padding: 70px;
    max-width: 700px;
    height: 580px;
    z-index: 10;
    background-color: #fff;
}
.stu-testimonials{
      background-color: #fbfafe;
    padding: 100px 0;
}
.stu-testimonials-testimonials h2 {
    font-family: "Merriweather,ProximaNovaRgRegular";
    font-size: 45px;
    line-height: 55px;
    color: #181b3b;
    max-width: 300px;
}
.content-page {
  display: flex;
  max-width: 1000px;
  margin: auto !important;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 35px 189px 0;
}
.st-page-baneer-h {
  text-align: center;
  margin-top: -150px;
  color: rgb(255, 255, 255);
}
.pages-about {
  background-color: #fff6f6;
  padding: 60px 0;
  margin: 0;
  justify-content: center;
}

.stu-header-1 {
  font-size: 45px;
  font-family: "ProximaNovaBold";
  color: #221471;
  text-align: center;
}
.what-left {
  float: left;
  width: 15%;
  text-align: center;
}
.what-left img {
  height: 60px;
  width: 60px;
  margin: 3px;
  font-size: 1.5em;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
}
.what-right {
  float: right;
  width: 60%;
}
.what-grid1 {
  font-size: 1.3em;
  color: #000;
  letter-spacing: 1px;
  text-transform: capitalize;
  line-height: 25px;
}

  
@media  screen and (max-width: 900px) {
.content-page {
    display: flex;
    max-width: 1000px;
    margin: auto !important;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 9px 1px 7px;
}
}
@media only screen and (max-width: 480px) {
.st-page-baneer {
    margin-top: 0px;
    padding: 23px 35px;
    /* height: auto; */
    /* position: relative; */
    background-size: 427px;
    background-image: url(/images/testimonial-background.webp);
}
}
</style>
