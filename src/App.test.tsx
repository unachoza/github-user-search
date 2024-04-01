import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have planets here text ", () => {
	render(<App />);
	const message = screen.queryByText(/Click/);
	expect(message).toBeInTheDocument();
});
