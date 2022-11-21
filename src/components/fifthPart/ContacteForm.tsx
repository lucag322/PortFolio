import React from "react";
import "./../../css/fifthPart.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

interface FormPost {
  name?: string;
  email?: string;
  message?: string;
  number?: string;
}

const Form = () => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [state, setState] = useState<FormPost>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  return (
    <div>
      {!submitted && (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <div className="col-12 col-md-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                onChange={handleChange}
                className="inputForm m-2"
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="number"
                onChange={handleChange}
                className="inputForm m-2"
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email*"
                onChange={handleChange}
                className="inputForm m-2"
                required
              />
            </div>
          </Row>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Message*"
              onChange={handleChange2}
              className="inputForm m-2"
              required
            />
          </div>
          <div className="submitBox text-end">
            <button type="submit" className="submit m-2">
              Send
            </button>
          </div>
        </form>
      )}
      {submitted && (
        <h5 className="submitCheck">
          Thanks for submitting! I reach out ASAP!
        </h5>
      )}
    </div>
  );
};
export default Form;
