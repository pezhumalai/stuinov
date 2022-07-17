<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="menu">
      <Navbar />
    </div>
    <section class="st-page">
      <div class="container">
        <div class="row">
          <div class="cil-md-6">
            <div class="page-title">
              <h2>Contact STU Innovations</h2>
              <p>
                Got a question? Our teams are here to help. Simply fill out the
                form, and we’ll be in touch as soon as possible.
              </p>
            </div>
            <div class="contact">
              <h1 style="color: #f508a3">Contact Us</h1>
              <div class="grid">
                <img
                  style="width: 13%; padding-bottom: 13px"
                  src="images/phone.png"
                />
                <div style="margin-right: 43px">
                  <h3>Phone Number</h3>
                  <p>9952122670, 9360363227</p>
                </div>
              </div>
              <div class="grid">
                <img
                  style="width: 13%; padding-bottom: 13px"
                  src="images/mail.png"
                />
                <div>
                  <h3>mail</h3>
                  <p>
                    stuinnovationspvtltd@gmail.com <br />info@stuinnovations.com
                  </p>
                </div>
              </div>
              <div class="grid">
                <img
                  style="width: 13%; padding-bottom: 13px"
                  src="images/location.png"
                />
                <div>
                  <h3>Location</h3>
                  <p>
                    Buddtha nagar, Kanji road, depot <br />
                    (Opposite), Thiruvannamalai.
                  </p>
                </div>
              </div>
              <div class="grid">
                <img
                  style="width: 13%; padding-bottom: 13px"
                  src="images/working.png"
                />
                <div style="margin-right: 13px">
                  <h3>Working Hours</h3>
                  <p>Mon - Sat : 9:00 am to 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6" style="padding-left: 109px">
            <img class="images" src="images/shapes.png" />
            <div class="form-bg">
                <h1 style="    text-align: center;
    margin-bottom: 29px;">Get In Touch</h1>
              <form action="#" method="post">
                  
                <div class="contact-fields">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    
                    style="width: 308px; height: 40px;"
                  />
                </div>
                <div class="contact-fields">
                  <label for="fname">Business Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    
                    style="width: 308px; height: 40px;"
                  />
                </div>
                <div class="contact-fields">
                  <label for="fname">Product modules interested</label>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    
                    style="width: 308px; height: 40px;"
                  />
                </div>
                <div class="contact-fields">
                  <label for="fname">Where did you hear about us?</label>
                  <textarea
                    name="Message"
                    placeholder="Message"
                    
                    style="width: 308px"
                  ></textarea>
                </div>
                <input
                class="btn-page"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
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
.st-page {
  margin-top: 65px;
  padding: 100px 0;
}
.page-title {
  max-width: 450px;
}
.contact {
  margin-top: 50px;
  max-width: 500px;
}
.grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
  justify-content: space-evenly;
  align-content: center;
}
.form-bg {
  padding: 4em;
  flex: 1;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 1px 5px 5px hsla(0, 0%, 61.2%, 0.07) !important;
  border-radius: 15px !important;
  background-color: #fff;
  position: relative;
}
.contact-fields {
  /* width: 505px; */
  height: 80px;
  font-size: 14px !important;
  border: none;
  border-bottom: 1px solid var(--form-theme-color);
  color: black;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1em;
  border-radius: 0;
  line-height: 22px;
  display: block;
  padding: 5px;
  width: 60%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.images {
  position: absolute;
  left: 68px;
  top: -88px;
  width: 100%;
  opacity: 0.3;
}
.btn-page{
    margin-top: 69px;
    width: 156px;
    margin-left: 5pc;
    background: #f508a3;
    color: white;
    height: 41px;
    border: none;
    font-size: 19px;
    font-weight: 300px;
    border-radius: 5px;
    
}

@media only screen and (max-width: 480px) {
.form-bg {
    padding: 2em;
    flex: 1;
    max-width: 506px;
    width: 127%;
    margin: 8px -30px;
    box-shadow: 0 1px 5px 5px hsl(0deg 0% 61% / 7%) !important;
    border-radius: 15px !important;
    background-color: #fff;
    position: relative;
}
.cil-md-6{
  padding-left: 34px;
}
}
@media only screen and (min-width: 1200px) {
.form-bg {
    padding: 2em;
    flex: 1;
    max-width: 506px;
    width: 127%;
    margin: 8px -30px;
    box-shadow: 0 1px 5px 5px hsl(0deg 0% 61% / 7%) !important;
    border-radius: 15px !important;
    background-color: #fff;
    position: relative;
}
.cil-md-6{
  padding-left: 34px;
}
}
</style>
