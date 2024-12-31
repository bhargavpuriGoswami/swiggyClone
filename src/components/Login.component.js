"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import LoginFormContext from "./Contexts/LoginFormContext.js";

export default function Login({ openModal }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { showLoginForm, setShowLoginForm } = useContext(LoginFormContext);
  const { loginBtnText, setLoginBtnText } = useContext(LoginFormContext);
  function onCloseModal() {
    setEmail('');
    setShowLoginForm(false);
    setLoginBtnText("Login");
  }
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-gray-900 dark:text-white font-bold">Sign in</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="focus:outline-orange-200"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-orange-700 hover:underline ">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
            <Button className="bg-orange-500">Click me</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-orange-700 hover:underline ">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
