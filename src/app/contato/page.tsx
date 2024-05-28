import React from "react";
import BookAppointment from "../components/BookApointment";

const Contato = () => {
  return (
    <div className="container">
      <div className="h1">Contato</div>
      {/* <button className="mt-10">Agendar via calendario</button> */}
      <BookAppointment />
    </div>
  );
};

export default Contato;
