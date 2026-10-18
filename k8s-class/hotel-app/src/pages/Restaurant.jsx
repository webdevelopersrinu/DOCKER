export default function Restaurant() {
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
	          <li className="nav-item active"><a href="/restaurant" className="nav-link">Restaurant</a></li>
	          <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
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
	            <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home</a></span> <span>Restaurant</span></p>
	            <h1 className="mb-4 bread">Restaurant</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6">
      			<div className="single-slider-resto mb-4 mb-md-0 owl-carousel">
      				<div className="item">
      					<div className="resto-img rounded" style={{backgroundImage: "url(/images/room-4.jpg)"}}></div>
      				</div>
      				<div className="item">
      					<div className="resto-img rounded" style={{backgroundImage: "url(/images/room-5.jpg)"}}></div>
      				</div>
      				<div className="item">
      					<div className="resto-img rounded" style={{backgroundImage: "url(/images/room-6.jpg)"}}></div>
      				</div>
      			</div>
    			</div>
    			<div className="col-md-6 pl-md-5">
    				<div className="heading-section mb-4 my-5 my-md-0">
	          	<span className="subheading">About Harbor Lights Hotel</span>
	            <h2 className="mb-4">Harbor Lights Hotel Restaurants</h2>
	          </div>
	          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
	          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	          <p><a href="#" className="btn btn-secondary rounded">More info</a></p>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section ftco-menu bg-light">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Harborlights Resto Menu</span>
            <h2>Our Specialties</h2>
          </div>
        </div>
				<div className="row">
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-1.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-2.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-3.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>

        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-4.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-5.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-6.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>

        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-7.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-8.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-6 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: "url(/images/menu-9.jpg)"}}></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
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
