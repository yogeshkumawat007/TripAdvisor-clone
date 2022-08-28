function navbar () {
return `
<div class="home_main_navbar_yogi">
<div class="main_navbar_logo_yogi">
  <a href="/index.html"
    ><img
      src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
      alt="Tripadvisor_logo"
  /></a>
</div>

<div class="home_main_navbar_searchbox_yogi"></div>

<div class="navbar_signup_section_yogi">
  <div class="navbar_flex" id="navbar_review_yogi">
    <!-- <h1>&#x270E;</h1> -->
    <span class="material-symbols-outlined"> edit </span>
    <p>Review</p>
  </div>

  <div class="navbar_flex" id="navbar_trips_yogi">
    <span class="material-symbols-outlined"> favorite</span>
    <p>Trips</p>
  </div>

  <div class="navbar_flex" id="navbar_alerts_yogi">
    <span class="material-symbols-outlined"> notifications </span>
    <p>Alerts</p>
  </div>

  <div class="navbar_flex" id="navbar_signIn_yogi">Sign in</div>
</div>
</div>
`
}
export default navbar;