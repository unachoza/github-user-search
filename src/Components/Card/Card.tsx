import "./Card.css";
import { ProfileData } from "../../utils/types";

interface Props {
	profileData: ProfileData | null;
}

const Card = ({ profileData }: Props) => {
	if (!profileData) {
		return <div>No profile data available</div>;
	}
	console.log(profileData);
	return (
		<div className="main-container">
			<div className="avatar-image">
				<img src={profileData.avatar} alt="profile avatar" />
			</div>
			<div className="card-container">
				<div className="profile-details">
					{Object.entries(profileData as { [s: string]: string | number })
						.slice(1, 5)
						.map((entry, i) => {
							return (
								<div key={i}>
									<div className="hide">{entry[0].toUpperCase()}:</div>
									<div>{entry[1]}</div>
								</div>
							);
						})}
				</div>
				<div className="repo-stats">
					{Object.entries(profileData as { [s: string]: string | number })
						.slice(5, 8)
						.map((entry, i) => {
							return (
								<div key={i}>
									<div>{entry[0].toUpperCase()}:</div>
									<div>{entry[1]}</div>
								</div>
							);
						})}
				</div>
				<div className="contact-info">
					{Object.entries(profileData as { [s: string]: string | number })
						.slice(8)
						.map((entry, i) => {
							return (
								<div className="contact-detail" key={i}>
									<img className="contact-info-icon" src={entry[0]} alt="icon" />
									<div>{entry[1] ? entry[1] : "not available"}</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Card;
