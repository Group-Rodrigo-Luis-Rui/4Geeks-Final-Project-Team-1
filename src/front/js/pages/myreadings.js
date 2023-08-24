import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage2.jpg";
import "../../styles/myreadings.css";


export const MyReadings = () => {
	

	const {store, actions} =  useContext(Context);

	const navigate = useNavigate();

	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [readings, setReadings] = useState([])
	const [myreadingID, setMyreadingID] = useState();

	const getOneUser = () => {

		const userID = localStorage.getItem("userID");

		fetch(process.env.BACKEND_URL + "/api/user/" + userID, { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			setName(result.name);
			setEmail(result.email);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	const getMyReadings = () => {

		const userID = localStorage.getItem("userID");

		fetch(process.env.BACKEND_URL + "/api/myreading/" + userID, { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			console.log(result);
			setMyreadingID(result.id)
			setReadings(result.posts);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		getOneUser();
		getMyReadings();
	},[])

	const goToSinglePost = (postID) => {
		navigate(`/single/${postID}`);
	}

	const deleteReading = (id) => {

		fetch(process.env.BACKEND_URL + "/api/myreading/" + myreadingID + "/post/" + id, { 
			method: "DELETE",
			headers: { 
				"Content-Type": 
				"application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {

			setReadings((prevReadings) => prevReadings.filter((item) => item.id !== id));	

		}).catch((err) => {
			console.log(err);
		})
	}

	
	
	return (
		<div className="backgroundReadings" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundReadings text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src="https://loremflickr.com/g/320/240/paris,man/all" alt="User Avatar" className="avatarImageReadings" />
					<div className="myBoxBackgroundReadings">
						<h3><strong><em>{name}</em></strong>'s My Reading List</h3>
					</div>
				</div>
				<div className="myBoxBackgroundReadings mb-5">
					<h4>Email:&nbsp;&nbsp;<strong>{email}</strong></h4>
				</div>
				<div>
					<h3 className="myBoxBackgroundReadings mb-2 pb-1">My Readings</h3>
					<ul className="list-group">
						{readings? (
							readings.map((item, index) => (
								<li key={index}>
									<div class="card mb-3 cardContainerReadings">
										<div class="row g-0">
											<div class="col-md-5">
												<img src="https://picsum.photos/300" class="img-fluid rounded-start mt-2 imageCardMyReadings" alt="..."/>
											</div>
											<div class="col-md-7">
												<div class="card-body">
													<div className="container d-flex justify-content-between titleCardMyReading">
														<h4 
															class="card-title pTextReadings pe-2" 
															onClick={() => goToSinglePost(item.id)}>
																<strong>{item.title}</strong>
														</h4>
														<div 
															className="iconLinkReadings" 
															title="Delete from my reading list"
															onClick={() => deleteReading(item.id)}
														>
																<i class="fas fa-trash pe-2 fs-3" ></i>
														</div>
													</div>
													<div className="cardTextProfile">
														<p>{item.abstract}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							))
						): ""}
					</ul>
				</div>
			</div>
		</div>
	);
};