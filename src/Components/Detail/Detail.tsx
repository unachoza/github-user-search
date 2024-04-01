import "./Detail.css";

type label = "title" | "icon";

interface detailProps {
	label: label;
	detail: string;
}

const Detail = () => {
	return (
		<div className="wrapper">
			<div className="icon-or-title"></div>
			<div className="detail"></div>
		</div>
	);
};

export default Detail;
