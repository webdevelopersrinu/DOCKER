export default function RoomsSingle() {
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
	          <li className="nav-item active"><a href="/rooms" className="nav-link">Our Rooms</a></li>
	          <li className="nav-item"><a href="/restaurant" className="nav-link">Restaurant</a></li>
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
	            <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home</a></span> <span className="mr-2"><a href="/rooms">Rooms</a></span> <span>Rooms Single</span></p>
	            <h1 className="mb-4 bread">Rooms Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
          	<div className="row">
          		<div className="col-md-12 ftco-animate">
          			<div className="single-slider owl-carousel">
          				<div className="item">
          					<div className="room-img" style={{backgroundImage: "url(/images/room-4.jpg)"}}></div>
          				</div>
          				<div className="item">
          					<div className="room-img" style={{backgroundImage: "url(/images/room-5.jpg)"}}></div>
          				</div>
          				<div className="item">
          					<div className="room-img" style={{backgroundImage: "url(/images/room-6.jpg)"}}></div>
          				</div>
          			</div>
          		</div>
          		<div className="col-md-12 room-single mt-4 mb-5 ftco-animate">
          			<h2 className="mb-4">Luxury Room <span>- (4 Available rooms)</span></h2>
    						<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
    						<div className="d-md-flex mt-5 mb-5">
    							<ul className="list">
	    							<li><span>Max:</span> 3 Persons</li>
	    							<li><span>Size:</span> 45 m2</li>
	    						</ul>
	    						<ul className="list ml-md-5">
	    							<li><span>View:</span> Sea View</li>
	    							<li><span>Bed:</span> 1</li>
	    						</ul>
    						</div>
    						<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
          		</div>
          		<div className="col-md-12 room-single ftco-animate mb-5 mt-4">
          			<h3 className="mb-4">Take A Tour</h3>
          			<div className="block-16">
		              <figure>
		                <img src="/images/room-4.jpg" alt="Image placeholder" className="img-fluid" />
		                <a href="https://vimeo.com/45830194" className="play-button popup-vimeo"><span className="icon-play"></span></a>
		              </figure>
		            </div>
          		</div>

          		<div className="col-md-12 properties-single ftco-animate mb-5 mt-4">
          			<h4 className="mb-4">Review &amp; Ratings</h4>
          			<div className="row">
          				<div className="col-md-6">
          					<form method="post" className="star-rating">
										  <div className="form-check">
												<input type="checkbox" className="form-check-input" id="exampleCheck1" />
												<label className="form-check-label" htmlFor="exampleCheck1">
													<p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i> 100 Ratings</span></p>
												</label>
										  </div>
										  <div className="form-check">
									      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
									      <label className="form-check-label" htmlFor="exampleCheck1">
									    	   <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 30 Ratings</span></p>
									      </label>
										  </div>
										  <div className="form-check">
									      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
									      <label className="form-check-label" htmlFor="exampleCheck1">
									      	<p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 5 Ratings</span></p>
									     </label>
										  </div>
										  <div className="form-check">
										    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
									      <label className="form-check-label" htmlFor="exampleCheck1">
									      	<p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
									      </label>
										  </div>
										  <div className="form-check">
									      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
									      <label className="form-check-label" htmlFor="exampleCheck1">
									      	<p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
										    </label>
										  </div>
										</form>
          				</div>
          			</div>
          		</div>
          	</div>
          </div> 
          <div className="col-lg-4 sidebar ftco-animate pl-md-5">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon ion-ios-search"></span>
                  <input type="text" className="form-control" placeholder="Search..." />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li><a href="#">Properties <span>(12)</span></a></li>
                <li><a href="#">Home <span>(22)</span></a></li>
                <li><a href="#">House <span>(37)</span></a></li>
                <li><a href="#">Villa <span>(42)</span></a></li>
                <li><a href="#">Apartment <span>(14)</span></a></li>
                <li><a href="#">Condominium <span>(140)</span></a></li>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: "url(/images/image_1.jpg)"}}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                    <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: "url(/images/image_2.jpg)"}}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                    <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: "url(/images/image_3.jpg)"}}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                    <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">dish</a>
                <a href="#" className="tag-cloud-link">menu</a>
                <a href="#" className="tag-cloud-link">food</a>
                <a href="#" className="tag-cloud-link">sweet</a>
                <a href="#" className="tag-cloud-link">tasty</a>
                <a href="#" className="tag-cloud-link">delicious</a>
                <a href="#" className="tag-cloud-link">desserts</a>
                <a href="#" className="tag-cloud-link">drinks</a>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
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
