export default function About() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="/">Harbor<span>lights</span></a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
	          <li className="nav-item"><a href="/rooms" className="nav-link">Our Rooms</a></li>
	          <li className="nav-item"><a href="/restaurant" className="nav-link">Restaurant</a></li>
	          <li className="nav-item active"><a href="/about" className="nav-link">About Us</a></li>
	          <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    
		<div className="hero-wrap" style={{backgroundImage: "url('/images/bg_3.jpg')"}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div className="text">
	            <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home</a></span> <span>About Us</span></p>
	            <h1 className="mb-4 bread">About Harbor Lights Hotel</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section">
      <div className="container">
      	<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Welcome to Harbor Lights Hotel</span>
            <h2 className="mb-4">You'll Never Want To Leave</h2>
          </div>
        </div>  
        <div className="row d-flex">
          <div className="col-md pr-md-1 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
              	<div className="icon d-flex align-items-center justify-content-center">
              		<span className="flaticon-reception-bell"></span>
              	</div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Friendly Service</h3>
              </div>
            </div>      
          </div>
          <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services active py-4 d-block text-center">
              <div className="d-flex justify-content-center">
              	<div className="icon d-flex align-items-center justify-content-center">
              		<span className="flaticon-serving-dish"></span>
              	</div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Get Breakfast</h3>
              </div>
            </div>    
          </div>
          <div className="col-md px-md-1 d-flex align-sel Searchf-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
              	<div className="icon d-flex align-items-center justify-content-center">
              		<span className="flaticon-car"></span>
              	</div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Transfer Services</h3>
              </div>
            </div>      
          </div>
          <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
              	<div className="icon d-flex align-items-center justify-content-center">
              		<span className="flaticon-spa"></span>
              	</div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Suits &amp; SPA</h3>
              </div>
            </div>      
          </div>
          <div className="col-md pl-md-1 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center">
              	<div className="icon d-flex align-items-center justify-content-center">
              		<span className="ion-ios-bed"></span>
              	</div>
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Cozy Rooms</h3>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-wrap-about ftco-no-pt ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-7 order-md-last d-flex">
						<div className="img img-1 mr-md-2 ftco-animate" style={{backgroundImage: "url(/images/about-1.jpg)"}}></div>
						<div className="img img-2 ml-md-2 ftco-animate" style={{backgroundImage: "url(/images/about-2.jpg)"}}></div>
					</div>
					<div className="col-md-5 wrap-about pb-md-3 ftco-animate pr-md-5 pb-md-5 pt-md-4">
	          <div className="heading-section mb-4 my-5 my-md-0">
	          	<span className="subheading">About Harbor Lights Hotel</span>
	            <h2 className="mb-4">Harbor Lights Hotel the Most Recommended Hotel All Over the World</h2>
	          </div>
	          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
	          <p><a href="#" className="btn btn-secondary rounded">Reserve Your Room Now</a></p>
					</div>
				</div>
			</div>
		</section>

    <section className="testimony-section">
      <div className="container">
        <div className="row no-gutters ftco-animate justify-content-center">
        	<div className="col-md-5 d-flex">
        		<div className="testimony-img aside-stretch-2" style={{backgroundImage: "url(/images/testimony-img.jpg)"}}></div>
        	</div>
          <div className="col-md-7 py-5 pl-md-5">
          	<div className="py-md-5">
	          	<div className="heading-section ftco-animate mb-4">
	          		<span className="subheading">Testimony</span>
			          <h2 className="mb-0">Happy Customer</h2>
			        </div>
	            <div className="carousel-testimony owl-carousel ftco-animate">
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: "url(/images/person_1.jpg)"}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Gerald Hodson</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: "url(/images/person_2.jpg)"}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Gerald Hodson</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: "url(/images/person_3.jpg)"}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Gerald Hodson</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: "url(/images/person_4.jpg)"}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Gerald Hodson</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	            </div>
	          </div>
          </div>
        </div>
      </div>
    </section>
		
		<section className="instagram ftco-section ftco-no-pb">
      <div className="container-fluid">
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
          	<span className="subheading">Photos</span>
            <h2><span>Instagram</span></h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md ftco-animate">
            <a href="images/insta-1.jpg" className="insta-img image-popup" style={{backgroundImage: "url(/images/insta-1.jpg)"}}>
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md ftco-animate">
            <a href="images/insta-2.jpg" className="insta-img image-popup" style={{backgroundImage: "url(/images/insta-2.jpg)"}}>
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md ftco-animate">
            <a href="images/insta-3.jpg" className="insta-img image-popup" style={{backgroundImage: "url(/images/insta-3.jpg)"}}>
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md ftco-animate">
            <a href="images/insta-4.jpg" className="insta-img image-popup" style={{backgroundImage: "url(/images/insta-4.jpg)"}}>
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md ftco-animate">
            <a href="images/insta-5.jpg" className="insta-img image-popup" style={{backgroundImage: "url(/images/insta-5.jpg)"}}>
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>


    <footer className="ftco-footer ftco-section img" style={{backgroundImage: "url(/images/bg_4.jpg)"}}>
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Harbor Lights</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Useful Links</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Blog</a></li>
                <li><a href="#" className="py-2 d-block">Rooms</a></li>
                <li><a href="#" className="py-2 d-block">Amenities</a></li>
                <li><a href="#" className="py-2 d-block">Gift Card</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Privacy</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Career</a></li>
                <li><a href="#" className="py-2 d-block">About Us</a></li>
                <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                <li><a href="#" className="py-2 d-block">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
  Copyright &copy; All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
