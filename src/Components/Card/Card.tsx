import "./Card.css";
import { ProfileData } from "../../utils/types";

interface Props {
	profileData: ProfileData | null;
}

const Card = ({ profileData }: Props) => {
	if (!profileData) {
		return <div>No profile data available</div>;
	}
	return (
		<div className="card-container">
			<div className="profile-details">
				{Object.entries(profileData as { [s: string]: string | number })
					.slice(0, 4)
					.map((entry, i) => {
						return (
							<div key={i}>
								<div>{entry[0].toUpperCase()}:</div>
								<div>{entry[1]}</div>
							</div>
						);
					})}
			</div>
			<div className="repo-stats">
				{Object.entries(profileData as { [s: string]: string | number })
					.slice(4, 7)
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
					.slice(7)
					.map((entry, i) => {
						return (
							<div key={i}>
								<div>{entry[1]}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Card;
