import Contact from '../components/Contact.component.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Contact component', () => {
    it('renders Contact component', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading" , {name: "Contact us"});
        expect(heading).toBeInTheDocument();
    });
    
    it('renders input fields', () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("Name");
        const email = screen.getByPlaceholderText("Email");
        const message = screen.getByPlaceholderText("Message");
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(message).toBeInTheDocument();
    });

    it('renders send button', () => {
        render(<Contact />);
        const button = screen.getByRole("button", {name: "Send"});
        expect(button).toBeInTheDocument();
    });

    it('renders all textboxes', () => {
        render(<Contact />);
        const textareas = screen.getAllByRole("textbox");
        expect(textareas).toHaveLength(3);
    })
});

