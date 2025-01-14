import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have title text definder", () => {
	render(<App />);
	const message = screen.queryByText(/devfinder/);
	expect(message).toBeInTheDocument();
});
