import "../Styles/Contact.css";
import { useState, useEffect, useRef } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { HiArrowSmRight } from "react-icons/hi";
import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";
import PreLoader from "../Preloader/PreLoader";

const Contact = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const messageRef = useRef();
  const [response, setResponse] = useState(null);
  const [fetching, setFetching] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setFetching(true);
    const formData = {
      fullname: nameRef.current.value,
      address: addressRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      date: dateRef.current.value,
      message: messageRef.current.value,
      phone: phoneRef.current.value,
    };
    //here /api/send is used as vercel.json has routes for /api/send to be redirected to api/server.js
    const res = await fetch(`/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    try {
      const data = await res.json();
      setFetching(false);
      if (res.status === 200) {
        setResponse(data.message);
        // formData = {
        //   fullname: "",
        //   address: "",
        //   age: "",
        //   email: "",
        //   phone: "",
        //   date: "",
        //   message: "",
        // };
      } else {
        setResponse(data.message);
      }
    } catch (err) {
      console.log(err);
      setFetching(false);
      setResponse("Something went wrong");
    }
  };
  const currentDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse(null);
    }, 10000);
    return () => clearTimeout(timer);
  }, [response]);

  if (response !== null && response === "success") {
    const html_snnipet = (
      <>
        <div className="response_icon_success">
          <RiCheckboxCircleLine />
        </div>
        <div className="response_info_success">
          <h2 className="title_font">Mail Sent!</h2>
          <p>We will contact you soon. Thank you!</p>
        </div>
      </>
    );
  } else if (response !== null && response === "fail") {
    const html_snnipet = (
      <>
        <div className="response_icon_fail">
          <RiCloseCircleLine />
        </div>
        <div className="response_info_fail">
          <h2 className="title_font">Mail Not Sent!</h2>
          <p>Something went wrong. Please try again later.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-main-appointment" id="appointment">
        <h2
          className="textcolor_secondary title_font"
          style={{ fontSize: "2.8rem" }}
        >
          Contact{" "}
          <span
            className="textcolor_primary title_font"
            style={{ fontSize: "2.8rem" }}
          >
            Us
          </span>
        </h2>
        {response && (
          <div className="response_info_container">
            {console.log(response)}
            {response === "success" ? (
              <>
                <div className="response_icon_success">
                  <RiCheckboxCircleLine />
                </div>
                <div className="response_info_success">
                  <h2 className="title_font">Mail Sent!</h2>
                  <p>We will contact you soon. Thank you!</p>
                </div>
              </>
            ) : (
              <>
                <div className="response_icon_fail">
                  <RiCloseCircleLine />
                </div>
                <div className="response_info_fail">
                  <h2 className="title_font">Mail Not Sent!</h2>
                  <p>Something went wrong. Please try again later.</p>
                </div>
              </>
            )}
            <div className="response_close_button">
              <HiOutlineXCircle
                onClick={() => {
                  setResponse(null);
                }}
              />
            </div>
          </div>
        )}
        {fetching && (
          <PreLoader text="Sending mail ... Please wait a few seconds " />
        )}
        {!fetching && (
          <div className="conatiner-appointment-form">
            <div className="appointment-left">
              <p className="title_font">Send us a Mail</p>
              <p className="title_font">We will get back to you</p>

              <div className="appointment-left-animation">
                <lottie-player
                  autoplay
                  style={{ height: "250px", width: "250px" }}
                  loop
                  mode="normal"
                  src="https://assets10.lottiefiles.com/packages/lf20_hYRKYxxvdX.json"
                ></lottie-player>
                <div className="appointment-left-animation-arrow">
                  <HiArrowSmRight className="arrow-right" />
                </div>
                <lottie-player
                  autoplay
                  style={{ height: "250px", width: "250px" }}
                  loop
                  mode="normal"
                  src="https://assets1.lottiefiles.com/packages/lf20_NU3Nmy.json"
                ></lottie-player>
              </div>
            </div>
            <div className="appointment-right">
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="Fullname">Full Name</label>
                  <input
                    type="text"
                    className="fullnanme"
                    // value={formData.fullname}
                    ref={nameRef}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    ref={addressRef}
                    className="address"
                    // value={formData.address}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    className="age"
                    ref={ageRef}
                    // value={formData.age}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Contact Number</label>
                  <input
                    type="tel"
                    minLength={10}
                    maxLength={25}
                    className="age"
                    ref={phoneRef}
                    // value={formData.phone}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    className="email"
                    // value={formData.email}
                    ref={emailRef}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="date"
                    // value={formData.date}
                    min={currentDate}
                    ref={dateRef}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows={5}
                    cols={50}
                    type="text"
                    // className="message"
                    // value={formData.message}
                    ref={messageRef}
                  />
                </div>
                <div className="form-field">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        )}
        ;
      </div>
    </>
  );
};
export default Contact;