import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
	const [formData, setFormData] = useState({
		user_id: "",
		first_name: "",
		dob_day: "",
		dob_month: "",
		dob_year: "",
		show_gender: "",
		gender_identity: "",
		gender_interest: "",
		email: "",
		about: "",
		matches: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	const handleChange = (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	return (
		<div>
			<Nav minimal={true} setShowModal={() => {}} showModal={false} />
			<div className="onboarding">
				<h2>CREATE ACCOUNT</h2>
				<form action="" onSubmit={handleSubmit} className="onboarding-form">
					<section>
						<label htmlFor="first_name">First Name</label>
						<input
							className="w-75"
							type="text"
							name="first_name"
							id="first_name"
							placeholder="First Name"
							required={true}
							value={formData.first_name}
							onChange={handleChange}
						/>
						<label htmlFor="dob_day">Birthday</label>
						<div className="multiple-input-container-row">
							<input
								type="number"
								name="dob_day"
								id="dob_day"
								placeholder="DD"
								required={true}
								value={formData.dob_day}
								onChange={handleChange}
							/>
							<input
								type="number"
								name="dob_month"
								id="dob_month"
								placeholder="MM"
								required={true}
								value={formData.dob_month}
								onChange={handleChange}
							/>
							<input
								type="number"
								name="dob_year"
								id="dob_year"
								placeholder="YYYY"
								required={true}
								value={formData.dob_year}
								onChange={handleChange}
							/>
						</div>
						<label htmlFor="show-gender">My gender</label>
						<div className="multiple-input-container-row">
							<input
								type="radio"
								name="gender_identity"
								id="man-gender-identity"
								placeholder="Gender"
								value="man"
								onChange={handleChange}
								checked={formData.gender_identity === "man"}
							/>
							<label htmlFor="man-gender-identity">Man</label>
							<input
								type="radio"
								name="gender_identity"
								id="woman-gender-identity"
								placeholder="Gender"
								value="woman"
								onChange={handleChange}
								checked={formData.gender_identity === "woman"}
							/>
							<label htmlFor="woman-gender-identity">Woman</label>
							<input
								type="radio"
								name="gender_identity"
								id="more-gender-identity"
								placeholder="Gender"
								value="more"
								onChange={handleChange}
								checked={formData.gender_identity === "more"}
							/>
							<label htmlFor="more-gender-identity">More</label>
						</div>
						<label htmlFor="show_gender">Show my gender?</label>
						<input
							type="checkbox"
							name="show_gender"
							id="show-gender"
							onChange={handleChange}
							checked={formData.show_gender}
						/>
						<label>Show me</label>
						<div className="multiple-input-container-row">
							<input
								type="radio"
								name="gender_interest"
								id="man-gender-interest"
								value="man"
								onChange={handleChange}
								checked={formData.gender_interest === "man"}
							/>
							<label htmlFor="man-gender-interest">Man</label>
							<input
								type="radio"
								name="gender_interest"
								id="woman-gender-interest"
								value="woman"
								onChange={handleChange}
								checked={formData.gender_interest === "woman"}
							/>
							<label htmlFor="woman-gender-interest">Woman</label>
							<input
								type="radio"
								name="gender_interest"
								id="everyone-gender-interest"
								value="everyone"
								onChange={handleChange}
								checked={formData.gender_interest === "everyone"}
							/>
							<label htmlFor="everyone-gender-interest">Everyone</label>
						</div>
						<label htmlFor="about">About me</label>
						<input
							className="w-75"
							type="text"
							id="about"
							name="about"
							required={true}
							placeholder="I like long walks"
							value={formData.about}
							onChange={handleChange}
						/>
						<input type="submit" onClick={handleSubmit} />
					</section>
					<section>
						<label htmlFor="profile-photo">Profile Photo</label>
						<input
							className="w-75"
							type="url"
							name="url"
							id="url"
							onChange={handleChange}
						/>
						<div className="photo-container">
							<img src={formData.url} alt="profile pic preview" />
						</div>
					</section>
				</form>
			</div>
		</div>
	);
};

export default Onboarding;
