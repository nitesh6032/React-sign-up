import React from 'react';

class Home extends React.Component{
    render(){
        return(

      <div>
        <title>3-GB - SignUp</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="assets/images/circle.ico" height="16px" type="x-icon" />
        {/* google-fonts */}
        <link href="//fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* //google-fonts */}
        <link rel="stylesheet" href="assets/css/style-starter.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\t\th1 {\n\t\t\tfont-size: 30px;\n\t\t\tcolor: white;\n\t\t\t/* padding-top: 10px; */\n\t\t}\n\n\t\t#signup-container {\n\t\t\ttext-align: center;\n\t\t\twidth: fit-content;\n\t\t\tbackground-color: #0c4972;\n\t\t\tborder-radius: 12px;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tpadding: 20px;\n\t\t\tmargin-top: 72px;\n\t\t\tmargin-bottom: 100px;\n\t\t\tborder: 5px white solid;\n\t\t}\n\n\t\t#header {\n\t\t\tpadding-top: 20px;\n\t\t\tpadding-bottom: 20px;\n\t\t}\n\n\t\t#form {\n\t\t\t/* margin-left: 90px; */\n\t\t\tpadding: 30px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#form button {\n\t\t\tmargin: 20px;\n\t\t\twidth: 250px;\n\t\t\tborder-radius: 10px;\n\t\t\tbackground-color: #FF6E65;\n\t\t\tcolor: white;\n\t\t\tpadding: 20px;\n\t\t\toutline-color: transparent;\n\t\t}\n\n\t\t#form input {\n\t\t\tmargin-bottom: 20px;\n\t\t\twidth: 250px;\n\t\t\tpadding: 20px;\n\t\t\tborder-radius: 10px;\n\n\t\t}\n\n\t\t.span-text a {\n\t\t\tcolor: #FF6E65;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\ta:visited {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.span-text {\n\t\t\tcolor: #FF6E65;\n\t\t\tfont-weight: 600;\n\t\t}\n\t" }} />
        {/* top header */}
        <section className="w3l-top-header">
          <div className="container-fluid">
            <div className="top-content-w3ls d-flex align-items-center justify-content-between">
              <div className="top-headers">
                <ul>
                  <li>
                    <a href="contact.html" className="d-sm-block d-none">Have any question ?</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" /><a href="tel:+919350227009">+91 9350227009</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" /><a href="mailto:help.3gb@gmail.com">help.3gb@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="top-headers top-headers-2">
                <ul>
                  <li>
                    <a href="https://wa.me/919350227009"><i className="fa fa-whatsapp" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Shivangigarg160"><span className="fa fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/3gbeducation/"><span className="fa fa-instagram" /></a>
                  </li>
                  <li className="mr-0">
                    <a href=" https://www.linkedin.com/company/3-ground-breakers"><span className="fa fa-linkedin" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* //top header */}
        {/*header*/}
        <header id="site-header" className="fixed-top">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg stroke">
              <h1>
                <a className="navbar-brand d-flex align-items-center" href="index.html">
                  <img src="assets/images/3gblogo.png" style={{backgroundColor: 'white', padding: '5px'}} height="45px" alt="3-gb logo" className="mr-1" /></a>
              </h1>
              <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                <span className="navbar-toggler-icon fa icon-close fa-times" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-lg-auto">
                  <li id="menu-item-22" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-21 nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbar-dropdown-menu-link-21" aria-haspopup="true" aria-expanded="false">Find a Tutor <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-21">
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-12">Class 1-4</a>
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-32">Class 5-8</a>
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-35">Class 9-10</a>
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-39">Class
                        11-12</a>
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-40">Programming</a>
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-41">Artificial
                        Intelligence</a>
                    </div>
                  </li>
                  {/* <li id="menu-item-23"
							class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-21 nav-item dropdown">
							<a class="nav-link dropdown-toggle" data-toggle='dropdown' id="navbar-dropdown-menu-link-21"
								aria-haspopup="true" aria-expanded="false">Study Material <i
									class="fa fa-angle-down"></i></a>
							<div class="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-21">
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-13">Notes</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-33">Text Books</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-36">Text Book
									Solutions</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-42">Sample Papers
									Solutions</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-43">Short Video
									Lectures</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-44">Practice
									Quiz</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-45">Youtube</a>
								<a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-46">Kid
									Creatives</a>

							</div>
						</li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="blankpage.html">Study Material</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blankpage.html">Micro Courses</a>
                  </li>
                  <li id="menu-item-21" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-21 nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbar-dropdown-menu-link-21" aria-haspopup="true" aria-expanded="false">More <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-21">
                      <a href="blankpage.html" className="dropdown-item nav-link " id="menu-item-11">Blogs</a>
                      {/* <a href="blankpage.html" class="dropdown-item nav-link" id="menu-item-30">Latest
									Updates</a> */}
                      <a href="blankpage.html" className="dropdown-item nav-link" id="menu-item-34">About Us</a>
                      <a href="contact.html" className="dropdown-item nav-link" id="menu-item-38">Contact Us</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="menu-icon">
                      <a href="login.html" className="nav-link"><i className="fa fa-user" /></a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" id="search-icon"><i className="fa fa-search" onclick="displaySearch()" /></div>
                  </li>
                  <div className="search-right ml-lg-3" id="search-bar">
                    <form action="#search" method="GET" className="search-box position-relative">
                      <div className="input-search">
                        <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus className="search-popup" />
                      </div>
                      <button type="submit" className="btn search-btn"><i className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                  </div>
                </ul>
              </div>
              {/* toggle switch for light and dark theme */}
              <div className="cont-ser-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="mode-container">
                        <i className="gg-sun" />
                        <i className="gg-moon" />
                      </div>
                    </label>
                  </div>
                </nav>
              </div>
              {/* //toggle switch for light and dark theme */}
            </nav>
          </div>
        </header>
        {/*//header*/}
        <div id="signup-container">
          <div id="header">
            <h1>Welcome, Sign Up</h1>
          </div>
          <div id="form">
            <input type="email" placeholder="Email" id="email" /><br />
            <input type="password" placeholder="Password" id="password" /> <br />
            <input type="confirm password" placeholder=" confirm Password" id="confirm password" /> <br />
            <button onclick="signup()" id="signup">Sign Up</button>
            <br />
            <p style={{color: 'white', float: 'right', marginBottom: '20px'}}>Have an Account? <span className="span-text"><a href="login.html">Sign In</a></span></p>
          </div>
          
        </div>
        {/* footer */}
        <footer className="w3l-footer-22 position-relative mt-5 pt-5">
          <div className="footer-sub">
            <div className="container">
              <div className="text-txt">
                <div className="right-side">
                  {/* form section */}
                  <div className="row align-items-center w3l-forms-9">
                    <div className="main-midd col-md-5">
                      <h4 className="title-head mb-lg-2">Subscribe Us to get latest Academic Updates </h4>
                      <p>Newsletter</p>
                    </div>
                    <div className="main-midd-2 col-md-5 mt-md-5 mt-4">
                      <form action="blankpage.htmlurl" method="GET" className="rightside-form">
                        <input type="email" className="form-control" name="email" placeholder="Enter your email" />
                        <button className="btn" type="submit">Send</button>
                      </form>
                    </div>
                  </div>
                  {/* //form section */}
                </div>
                <div className="row sub-columns">
                  <div className="col-lg-2 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <h6>Quick links</h6>
                    <ul>
                      <li><a href="index.html"><span className="fa fa-angle-double-right mr-2" />About</a>
                      </li>
                      <li><a href="blankpage.html"><span className="fa fa-angle-double-right mr-2" />Micro
                          Courses</a>
                      </li>
                      <li><a href="blankpage.html"><span className="fa fa-angle-double-right mr-2" />Find a
                          Tutor</a></li>
                      <li><a href="index.html"><span className="fa fa-angle-double-right mr-2" />Free
                          Demo</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <h6>Help &amp; Support</h6>
                    <ul>
                      <li><a href="https://wa.me/919350227009"><span className="fa fa-angle-double-right mr-2" />Live
                          Chat</a></li>
                      <li><a href="blankpage.html"><span className="fa fa-angle-double-right mr-2" />Faq</a>
                      </li>
                      <li><a href="contact.html"><span className="fa fa-angle-double-right mr-2" />Support</a>
                      </li>
                      <li><a href="blankpage.html"><span className="fa fa-angle-double-right mr-2" />Terms
                          of Services</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6 sub-one-left pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <h6>Contact </h6>
                    <div className="column2">
                      <div className="href1"><span className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:help.3gb@gmail.com">help.3gb@gmail.com</a>
                      </div>
                      <div className="href2"><span className="fa fa-phone" aria-hidden="true" /><a href="tel:+9350227009">+91 9350227009</a>
                      </div>
                      <div>
                        <p className="contact-para"><span className="fa fa-map-marker" aria-hidden="true" /><a href="contact.html#map">Radaur, Haryana</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 sub-one-left ab-right-cont pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <h6>About </h6>
                    <p>This platform is the culmination of a long research based on problems faced by teachers
                      and students while interacting with each other on online platforms.
                      We aim to make learning easy,personalised,affordable and interactive while creating no
                      sort of burden on students and teachers.</p>
                    <div className="columns-2">
                      <ul className="social">
                        <li><a href="https://wa.me/919350227009"><span className="fa fa-whatsapp" aria-hidden="true" /></a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/3-ground-breakers"><span className="fa fa-linkedin" aria-hidden="true" /></a>
                        </li>
                        <li><a href="https://twitter.com/Shivangigarg160"><span className="fa fa-twitter" aria-hidden="true" /></a>
                        </li>
                        <li><a href="https://www.instagram.com/3gbeducation/"><span className="fa fa-instagram" aria-hidden="true" /></a>
                        </li>
                        <li><a href="https://www.facebook.com/3gbeducation"><span className="fa fa-facebook" aria-hidden="true" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="copyright-footer text-center">
            <div className="container">
              <div className="columns">
                <p>@2021 Studious. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank" />
                  W3Layouts
                </p>
              </div>
            </div>
          </div>
          {/* //copyright */}
        </footer>
        {/* //footer */}
        {/* ADDED BY PRADEEPA */}
        <button onclick="topFunction()" id="movetop" title="Go to top">
          <span className="fa fa-level-up" aria-hidden="true" />
        </button>
        {/* //move top */}
        {/* common jquery plugin */}
        {/* //common jquery plugin */}
        {/* banner slider */}
        {/* //banner slider */}
        {/* counter for stats */}
        {/* //counter for stats */}
        {/* theme switch js (light and dark)*/}
        {/* //theme switch js (light and dark)*/}
        {/* MENU-JS */}
        {/* //MENU-JS */}
        {/* disable body scroll which navbar is in active */}
        {/* //disable body scroll which navbar is in active */}
        {/* //ADDED BY PRADEEPA */}
      </div>

    );
  }
};
export default Home;
