import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/blogger-logo-icon.png";
import clsbtn from "../../img/power-button.png";
import hambtn from "../../img/hamburger-icon.png";


export const Navbar = () => {
		
		const [closeBtn, setCloseBtn] = useState(false);
		const handleToggleMenu = () => {
			setCloseBtn((prevCloseBtn) => !prevCloseBtn);	
		};

	return (
		<header className="metallic-element">
			<div className="d-flex justify-content-center align-items-center">
				<img src={logo} alt="" className="logoB"/>
				<a href="#" className="logo uppercase ff-sans-cond letter-spacing-2">
					Tech Odyssey testing
				</a>
			</div>

			<div className={`navigation ${closeBtn? "menu-active":""}`}>
				
				<ul className={`menu-${closeBtn? "active":"unactive"}`}>

					<div><img 
						src={clsbtn} 
						onClick={handleToggleMenu} 

						className= "close-btn"
						/>
					</div>
					<Link to="/">
						<li className="px-3 active menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a href="#"><span>00</span><i class="fa-solid fa-house"></i></a>
						</li>	
					</Link>
					<Link to="/ourmission">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a href="#"><span>01</span>Our Mission</a>
						</li>
					</Link>
					<li className="ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>02</span>Wheather<i class="fa-solid fa-cloud-sun-rain"></i></a>	
					</li>			
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" data-bs-toggle="modal" data-bs-target="#exampleModal1"><span>03</span><i class="fa-solid fa-right-to-bracket"></i></a>
					</li>
					<Link to="/signup">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a href="#"><span>04</span>Sign Up</a>
						</li>
					</Link>
					<Link to="/createpost">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a href="#"><span>05</span>Create Post</a>
						</li>
					</Link>	
					<div className="select-menu">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
								
								
								<a href="#"><span>06</span>My Stuff<i class="px-5 fa-solid fa-chevron-down"></i></a>
									<ul className="dropdown">
										<Link to="/mydetails">
											<li className="dropdown-item">
												<i class="fa-solid fa-user"></i>
												<span className="item-text">My Profile</span>	
											</li>
										</Link>	
										<Link to="/myreadings">
											<li className="dropdown-item">
												<i class="fa-sharp fa-solid fa-book-open"></i>
												<span className="item-text">My Readings</span>	
											</li>
										</Link>	
											
									</ul>
						</li>			
					</div>
						
					<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title text-dark" id="exampleModalLabel">Search Wheather</h5>
									<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<div className="mb-3">
										<label for="textArea1" className="form-label">Caption:</label>
										<textarea className="form-control" id="textArea1" placeholder="Add the caption of your post here" rows="2"></textarea>
									</div>
									<div>
										<button type="button" className="btn btn-light"><i className="fa-solid fa-camera"></i></button>      
										<button type="button" className="btn btn-light"><i className="fa-solid fa-location-dot"></i></button> 
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-success">Publish</button>
								</div>              
							</div>
						</div>
					</div>	
					<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title text-dark" id="exampleModal1Label">Login</h5>
									<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<div className="mb-3">
										<label for="textArea1" className="form-label">Caption:</label>
										<textarea className="form-control" id="textArea1" placeholder="Add the caption of your post here" rows="2"></textarea>
									</div>
									<div>
										<button type="button" className="btn btn-light"><i className="fa-solid fa-camera"></i></button>      
										<button type="button" className="btn btn-light"><i className="fa-solid fa-location-dot"></i></button> 
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-success">Publish</button>
								</div>              
							</div>
						</div>
					</div>
				</ul>	
			</div>
				<div>
					<img 
						src={hambtn} 
						onClick={handleToggleMenu} 

						className="hamburger-btn"

					/>
				</div>
		</header>
	);
};
