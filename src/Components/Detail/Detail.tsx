import "./Detail.css";

type Label = "title" | "icon";

interface DetailProps {
	label: string;
	detail: string;
}

const Detail = ({ label, detail }: DetailProps) => {
	return (
		<div className="wrapper">
			<h3 className="icon-or-title">{label}</h3>
			<div className="detail">{detail}</div>
		</div>
	);
};

export default Detail;
