import Nav from "../components/Nav";

const Onboarding = () => {
	const handleSubmit = () => {};
	const handleChange = () => {};
	return (
		<div>
			<Nav
				minimal={true}
				setShowModal={() => {}}
				showModal={false}
			/>
			<div className="onboarding">
				<h2>CREATE ACCOUNT</h2>
				<form action="" onSubmit={handleSubmit}>
					<section>
						<label htmlFor="first_name">
							First Name
						</label>
						<input
							type="text"
							name="first_name"
							id="first_name"
							placeholder="First Name"
							required={true}
							value={""}
							onChange={handleChange}
						/>
						<label htmlFor="dob_day">
							Birthday
						</label>
						<div className="multiple-input-container">
							<input
								type="number"
								name="dob_day"
								id="dob_day"
								placeholder="DD"
								required={true}
								value={""}
								onChange={
									handleChange
								}
							/>
							<input
								type="number"
								name="dob_month"
								id="dob_month"
								placeholder="MM"
								required={true}
								value={""}
								onChange={
									handleChange
								}
							/>
							<input
								type="number"
								name="dob_year"
								id="dob_year"
								placeholder="YYYY"
								required={true}
								value={""}
								onChange={
									handleChange
								}
							/>
						</div>
						<div className="multiple-input-container">
							<input
								type="radio"
								name="gender_identity"
								id="man-gender-identity"
								placeholder="Gender"
								value="man"
								onChange={
									handleChange
								}
								checked={false}
							/>
							<label htmlFor="man-gender-identity">
								Man
							</label>
							<input
								type="radio"
								name="gender_identity"
								id="woman-gender-identity"
								placeholder="Gender"
								value="woman"
								onChange={
									handleChange
								}
								checked={false}
							/>
							<label htmlFor="woman-gender-identity">
								Woman
							</label>
							<input
								type="radio"
								name="gender_identity"
								id="more-gender-identity"
								placeholder="Gender"
								value="more"
								onChange={
									handleChange
								}
								checked={false}
							/>
							<label htmlFor="more-gender-identity">
								More
							</label>
						</div>
						<label htmlFor="show-gender">Show gender on my profile</label>
						<input
								type="checkbox"
								name="show-gender"
								id="show-gender"
								placeholder="Gender"
								value="more"
								onChange={
									handleChange
								}
								checked={false}
							/>
					</section>
				</form>
			</div>
		</div>
	);
};

export default Onboarding;
