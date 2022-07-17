<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="menu">
      <Navbar />
    </div>
    <div class="service-banner">
      <div class="service-banner-h">
        <h1 style="font-size: 76px">Platform</h1>
        <p style="font-size: 23px">
          We deliver extremely responsive cross-platform apps that improve user
          engagement and enhance the user experience across platforms
        </p>
      </div>
      <img class="img-platform" src="images/Platform-1.png" />
    </div>
    <section
      class="row"
      style="margin-right: 0px; margin-left: 0px; align-items: center"
    >
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 60px; padding-bottom: 20px"
            src="images/mobile.png"
          />
          <h3>STU Mobile ERP</h3>
          <p>
            Users access the mobile platform over the internet using either a
            dedicated mobile app or a standard mobile browser
          </p>
        </div>
      </div>
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 90px; padding-bottom: 20px"
            src="images/Google_Finance.png"
          />
          <h3>STU E Finence</h3>
          <p>
            We are particular web applications manifestations give the most
            significant level of ease of use, versatility and complete
            similarity on cell phones, programs and stages.
          </p>
        </div>
      </div>
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img style="width: 60px; padding-bottom: 20px" src="images/wd1.jpg" />
          <h3>STU E Rooms</h3>
          <p>
            AdWords (Google AdWords) is a publicizing administration by Google
            for organizations needing to show advertisements on Google and its
            promoting system.
          </p>
        </div>
      </div>
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 60px; padding-bottom: 20px"
            src="images/softwares.png"
          />
          <h3>Computer Softwares</h3>
          <p>
            There are a wide range of sorts of use programming, in light of the
            fact that the scope of assignments that can be performed with a
            cutting edge PC is so enormous—see rundown of programming.
          </p>
        </div>
      </div>
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 80px; padding-bottom: 20px"
            src="images/seo-1.png"
          />
          <h3>Google Promotions & SEO</h3>
          <p>
            Web optimization represents Search Engine Optimization- SEO, which
            is the act of expanding the amount and nature of traffic to your
            site through natural web search tool results.
          </p>
        </div>
      </div>

      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 90px; padding-bottom: 20px"
            src="images/YouTube.png"
          />
          <h3>YouTube Advertising</h3>
          <p>
            YouTube Ads Often previously, during, or after watchers watch a
            video, they should watch a video promotion. The promotion could be a
            TrueView In-Stream Video that plays consequently
          </p>
        </div>
      </div>
      <div class="col-md-4" style="padding: 42px">
        <div class="card-service">
          <img
            style="width: 60px; padding-bottom: 20px"
            src="images/domain.png"
          />
          <h3>Domain & Hosting Services</h3>
          <p>
            Web Hosting is a record on a PC as server that can store and serve
            site documents by means of the Internet. Domain Registration E.g.,
            www.example.com that guides individuals to explicit site records by
            means of a program.
          </p>
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
  head() {
    return {
      title: "stu | platform",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Join us on our mission to reimagine the facilities experience and transform the built environment.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "stuinnov.com | platform",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Join us on our mission to reimagine the facilities",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "images/logo-s.png",
        },
        {
          hid: "fb-share-url",

          property: "og:url",
          content: "https://stuinnov.com/platform/",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "stuinnov.com | platform",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Join us on our mission to reimagine the facilities experience and transform the built environment.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "hhttps://stuinnov.com/platform/",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://stuinnov.com/platform/",
        },
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" },
      ],
    };
  },
};
</script>
<style>
.service-banner {
  height: 650px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 244, 244);
  border: 0.8px sienna;
}
.img-platform {
  width: auto;
}
.service-banner-h {
  float: left;
  width: 578px;
  color: #000000;
  font-family: "Merriweather";
  font-weight: 500;
}
@media only screen and (max-width: 480px) {
  .service-banner {
    height: 300px;
    background-color: rgb(241, 244, 244);
    border: none;
    display: block;
  }
  .service-banner-h {
    width: 389px;
    color: rgb(0, 0, 0);
    font-family: "Merriweather";
    font-weight: 500;
    text-align: center;
  }
  .img-platform {
    display: none;
  }
}
</style>
