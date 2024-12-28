import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../utils/store/appStore"
import Header from "../components/Header.component.js"
import "@testing-library/jest-dom"


it("Should load header component with login button", () => {
    // render
    render(

        <BrowserRouter><Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>)

    // query
    const loginButton = screen.getByRole("button", { name: "Login" });

    // assert
    expect(loginButton).toBeInTheDocument()
})