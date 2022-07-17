<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="menu">
      <Navbar />
    </div>
    <section class="header">
      <div class="heder-title">
        STU Innovations depends<br />
        on Web Site<br />Web Application & Social Promotion Organization
      </div>
      <div class="dots-wrap clearfix center-block">
        <div class="red-dot"></div>
        <div class="blue-dot"></div>
      </div>
      <div class="subtitle">
        We have been making quality Web Application Since April 2016 Under STU
        Innovations, Now it Promoted as Incorporate in that Name of STU
        Innovations Pvt., Ltd., Reliably increasing new bits of knowledge into
        what makes an ideal Web Application.
      </div>
    </section>
    <section class="work-together">
      <div class="work-together-title">
        <h2>About STU Innovations</h2>
      </div>
      <div class="work-together-subtitle">
        <p>
          STU Innovations depends on Web Site, Web Application & Social
          Promotion Organization.
        </p>
      </div>
      <div class="paera">
        <p>
          From elevated level methodology, Exact arranging, Fundamental
          Research, Business counseling, Structure, Programming, Testing &
          preparing. Through this total procedure we stay clear and
          straightforward with our customers with no deceptive guarantees.
        </p>
      </div>
      <div class="Efficiency">
        <div class="Efficiency-box">
          <div class="Efficiency-icon">
            <img src="/images/smartphone1.svg" />
          </div>
          <div class="Efficiency-heading">
            <h4>Workforce Efficiency</h4>
          </div>
          <div class="Efficiency-subheading">
            <p>
              Fully mobile work orders and smart <br />
              maintenance management
            </p>
          </div>
        </div>
        <div class="Efficiency-box">
          <div class="Efficiency-icon">
            <img src="/images/pressure.svg" />
          </div>
          <div class="Efficiency-heading">
            <h4>Asset Efficiency</h4>
          </div>
          <div class="Efficiency-subheading">
            <p>
              Real-time performance monitoring<br />
              with fault detection and diagnostics
            </p>
          </div>
        </div>
        <div class="Efficiency-box">
          <div class="Efficiency-icon">
            <img src="/images/pie-chart.svg" />
          </div>
          <div class="Efficiency-heading">
            <h4>Energy Efficiency</h4>
          </div>
          <div class="Efficiency-subheading">
            <p>
              Predictive energy analytics and <br />
              actionable insights across portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="bennar">
      <p>
        Through this total procedure we stay clear and straightforward with our
        customers with no deceptive guarantees.
      </p>
    </div>
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
.header {
  margin-top: 0px;
  padding: 212px 10px;
  height: auto;
  position: relative;
  background-image: linear-gradient(to bottom, #ffffff, #fafafa);
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  background: -webkit-linear-gradient(
    250deg,
    #140141,
    hsla(236, 59%, 22%, 0.74)
  );
}
.aboutPage .bannerCont .dots-wrap {
  margin-top: 65px;
}

.red-dot {
  background-color: #ffffff;
}

.red-dot {
  margin-right: 3px;
}
.blue-dot {
  background-color: #17d4ed;
}

.blue-dot,
.red-dot {
  width: 10px;
  height: 10px;
  display: inline-block;
}

.work-together {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 38px;
  padding-bottom: 92px;
  background-color: rgb(255 252 252);
}
.Efficiency-icon {
  width: 27px;
  height: 44px;
}
.bennar {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #372668;
}
.bennar p {
  font-family: "playfair_displayregular";
  text-align: center;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 1.875rem;
  color: #fff;
  max-width: 900px;
  text-align: center;
}
.Efficiency-subheading {
  font-size: 18px;
  font-family: "ProximaNovaRgRegular";
  line-height: 1.39;
  text-align: left;
  color: #302930;
}
.Efficiency-heading h4 {
  font-family: "ProximaNovaRgRegular";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: left;
  color: #342d4f;
}
.Efficiency-box {
  width: 30.3%;
  padding-right: 60px;
}
.box-text {
  max-width: 75px;
  background-color: rgba(89, 144, 255, 0.16);
  color: #5990ff;
  border-radius: 4px;
  padding: 5px;
  font-size: 13px;
}

.Efficiency {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  padding-bottom: 0 !important;
  padding-top: 78px;
  padding-left: 167px;
}
.paera {
  width: 100% !important;
  margin: 23px auto;
  font-family: "ProximaNovaLtLight";
  font-size: 18px;
  line-height: 1.61;
  letter-spacing: 0px;
  text-align: center;
  max-width: 500px;
  color: #302930;
  max-width: 700px;
  margin-top: 35px;
}
.work-together-title {
  color: #342d4f;
  font-family: merriweather;
  font-size: 2.5rem;
  line-height: 60px;
  letter-spacing: -1.2px;
  margin: 0;
  text-align: center;
}
html {
  scroll-behavior: smooth;
}

@media only screen and (max-width: 768px) {
  .work-together {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 0;
    padding-bottom: 0;
  }
  .Efficiency-box {
    width: 100%;
    display: grid;
  }
  .Efficiency {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    padding-bottom: 0 !important;
    padding-top: 78px;
    padding-left: 67px;
  }
  .bennar {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .bennar p {
    padding-left: 30px;
    padding-right: 30px;
  }
}
.btn {
  color: rgb(247, 11, 109);
  background-color: #ffffff;
  border-color: #f71b64;
  margin-top: 2px;
  margin-left: 21px;
}

.btn:hover {
  background-color: deeppink;
  color: #fff;
}
.apply-link {
  margin-left: 120px;
}

.job-title {
  margin-right: 0;
  margin-bottom: 40px;
  margin-left: 0;
  color: #151f34;
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  text-align: center;
  font-family: "ProximaNovaSemibold";
  padding-top: 90px;
}

.job-wey {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 875px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 60px;
}

.heder-title {
  font-family: "playfair_displayregular";
  text-transform: uppercase;
  font-size: 35px;
  color: #fff;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 17px;
  text-align: center;
  letter-spacing: 1.4px;
  line-height: 1.3;
}

.subtitle {
  font-family: ProximaNovaLtLight;
  font-size: 24px;
  max-width: 830px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  color: #fff;
  line-height: 1.61;
  letter-spacing: 0.6px;
  margin-top: 40px;
}
.work-together-subtitle {
  font-family: playfair_displayregular;
  font-size: 1.2rem;
  line-height: 30px !important;
  color: #575263;
  margin: 10px 0 0;
  text-align: center;
}
.jobs-button {
  font-family: "ProximaNovaLtLight";
  padding: 21px 43px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0;
  position: relative;
  top: 37px;
  background-color: rgb(255, 49, 133);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  box-shadow: 0px 29px 79px 0px rgb(47 46 72 / 10%);
  transition: all 0.15s linear 0s;
}
.box-body {
  max-width: 90%;
  max-height: 150px;
  padding: 20px 20px 20px 20px;
}
.box-title {
  font-size: 18px;
}
.box-text-subtitle {
  margin-top: 7px;
}
@media screen and (max-width: 900px) {
  .box {
    padding-left: 0px;
  }
  .apply-link {
    padding-left: 0px;
  }
  .btn {
    margin-top: -136px;
    margin-left: 61px;
  }
  .job-content {
    margin-left: -10px;
  }
  .box-title {
    font-size: 13px;
  }
}
</style>
