function footer(){
    return`
        <div class="lowerFooter_left_part">
          <div>
            <div>
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt="footer_logo"
              />
            </div>
  
  
            <div class="copyrigth_whole_div" >
              <div>
                <p>&#169; 2022 Tripadvisor LLC All rights reserved.</p>
              </div>
  
              <div>
                <div>
                  <p>Terms of Use</p>
                  <p>Privacy and Cookies Statement</p>
                  <p>Cookie consent</p>
                  <p>Site Map</p>
                </div>
    
                <div>
                  <p>How the site works</p>
                  <p>Contact us</p>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <p>
              This is the version of our website addressed to speakers of English
              in India. If you are a resident of another country or region, please
              select the appropriate version of Tripadvisor for your country or
              region in the drop-down menu. <span>more</span>
            </p>
          </div>
        </div>
  
        <div class="lowerFooter_right_part">
          <div>
            <select id="rupees_of_country">
              <option value="INR">&#8377; INR</option>
              <option value="US">&#x24; US Dollars</option>
              <option value="US">&#163; British Pounds</option>
              <option value="US">&#x24; Euros</option>
              <option value="US">&#x24; Canadian Dollars</option>
              <option value="US">CHF &#165; Swiss Francs</option>
              <option value="US">A&#x24; Australian Dollars</option>
              <option value="US">JP&#165; Japanese Yen</option>
              <option value="US">CN&#165; Chinese Yuan</option>
              <option value="US">HK&#x24; Hong Kong Dollars</option>
            </select>
  
            <select id="country_names">
              <option value="india">India</option>
              <option value="United States">United States</option>
              <option value="canada (English)">canada (English)</option>
              <option value="Brasil">Brasil</option>
              <option value="Brasil">Brasil</option>
              <option value="Mexico">Mexico</option>
              <option value="Chile">Chile</option>
              <option value="Peru">Peru</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="France">France</option>
              <option value="Nederland">Nederland</option>
              <option value="Ireland">Ireland</option>
              <option value="Portugal">Portugal</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
  
          <div>
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-pinterest"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
          </div>
        </div>
    `
}

function navbar () {
  return `
  <div class="home_main_navbar_yogi">
  <div class="main_navbar_logo_yogi">
    <a href="#"
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

export {footer, navbar};

