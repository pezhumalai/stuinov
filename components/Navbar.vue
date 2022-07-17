<template>
  <section>
    <div class="logo-titel">
      <h1 class="navbar-brand">
        <span class="logo-newlogo">STU Innovations</span>
      </h1>
    </div>
    <nav id="menu" class="nav-menu-items" style="float: left">
      <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />

      <label></label>

      <ul>
        <li>
          <NuxtLink class="dropdown-arrow" to="/Platform">Platform</NuxtLink>
        </li>
        <li>
          <NuxtLink class="dropdown-arrow" to="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink class="dropdown-arrow" to="/testimonials"
            >Testimonials</NuxtLink
          >
        </li>

        <li>
          <a class="dropdown-arrow" href="#">Company</a>
          <ul class="sub-menus">
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
            <li><a href="#"></a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="mobile-titel">
      <h1 class="navbar-brand">
        <span class="logo-newlogo">STU Innovations</span>
      </h1>
    </div>
  </section>
</template>
<script></script>
<style>
#menu {
  background: #ffffff;
  color: rgb(0, 0, 0);
  height: 75px;
}
.nav-menu-items {
  margin-left: 739px;
}
.logo-titel {
  display: block;
}
.mobile-titel {
  display: none;
}

#menu ul,
#menu li {
  margin: 9px auto;
  padding: 0;
  list-style: none;
  margin-right: 24px;
}
#menu ul {
  width: 100%;
}
.logo-newlogo {
  color: #ff50ac;
  margin-top: 5px;
  padding-left: 30px;
}
#menu li {
  float: left;
  display: inline;
  position: relative;
}
#menu a {
  display: block;
  line-height: 40px;
  padding: 0 14px;
  text-decoration: none;
  color: #000000;
  font-size: 20px;
}
#menu a.dropdown-arrow:after {
  margin-left: 5px;
}
#menu a.dropdown-arrow:hover {
  color: #ff50ac;
  border-bottom: 3px solid #ff50ac;
}
#menu input {
  display: none;
  margin: 0;
  padding: 0;
  height: 59px;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}
#menu label {
  display: none;
  line-height: 59px;
  text-align: center;
  position: absolute;
  left: 35px;
}
#menu label:before {
  font-size: 2.5em;
  content: "\2261";
  margin-left: 2px;
}
.navbar-brand {
  float: left;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-left: 40px;
  font-size: 31px;
  position: absolute;
}
#menu ul.sub-menus {
  height: auto;
  overflow: hidden;
  width: 170px;
  background: #ffffff;
  position: absolute;
  z-index: 99;
  display: none;
}
#menu ul.sub-menus li {
  display: block;
  width: 100%;
}
#menu ul.sub-menus a {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 5px;
  text-align: left;
  cursor: pointer;
  font-family: "ProximaNovaSemibold";
}
#menu li:hover ul.sub-menus {
  display: block;
}
#menu ul.sub-menus a:hover {
  background-color: #efefff;
  border-radius: 1px;
  transition: 0.6s;
  color: #4e36a6;
}
@media screen and (max-width: 800px) {
  #menu {
    position: relative;
  }
  #menu ul {
    background: rgb(0 0 0 / 50%);
    position: relative;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 3;
    height: auto;
    display: none;
  }
  #menu ul.sub-menus {
    width: 100%;
    position: static;
  }
  #menu ul.sub-menus a {
    padding-left: 30px;
  }
  #menu li {
    display: block;
    float: none;
    width: auto;
  }
  #menu input,
  #menu label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  #menu input {
    z-index: 4;
  }
  #menu input:checked + label {
    color: rgb(5, 5, 5);
  }
  #menu input:checked + label:before {
    content: "\00d7";
  }
  #menu input:checked ~ ul {
    display: block;
  }
}
@media screen and (max-width: 800px) {
  #menu {
    background: #ffffff;
    color: rgb(0, 0, 0);
    height: 59px;
    padding-left: 19px;
  }
}
@media only screen and (max-width: 480px) {
  .logo-titel {
    display: none;
  }
  .mobile-titel {
    display: block;
  }
  .nav-menu-items {
    margin-left: 0px;
  }
  #menu a {
    display: block;
    line-height: 40px;
    padding: 0 14px;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
  }
}
</style>
