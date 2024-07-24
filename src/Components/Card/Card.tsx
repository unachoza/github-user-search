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
		<div className="main-container">
			<div className="octocat-image">
				<img src="/Bitmap.svg" alt="github octocat" />
			</div>
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
							console.log({ entry }, { i });
							return (
								<div className="contact-detail" key={i}>
									<img className="contact-info-icon" src={entry[0]} alt="icon" />
									<div>{entry[1]}</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Card;
