"use client";

import React from "react";
import { createClient } from "@supabase/supabase-js";
import {
  SessionContextProvider,
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import "../BookApointment/book.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";

registerLocale("pt-BR", ptBR); //funcionou mas tá com esse erro aqui

export default function BookAppointment() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession(); //tokensa
  const supabase = useSupabaseClient(); //talk to supabase
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google Provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(), //Date.toISOString()
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(), //Date.toISOString()
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session?.provider_token, // access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("Created Event", data);
        alert("Event created, check your google calendar");
      });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);

  return (
    <div className="conteiner">
      <div className="appointment-form">
        {session ? (
          <>
            <h2 className="greeting">Olá, {session.user.email}</h2>
            <div className="form-group">
              <label>Início da Consulta</label>
              <DatePicker
                onChange={(date: Date) => setStart(date)}
                selected={start}
                showTimeSelect
                dateFormat="Pp"
                locale="pt-BR"
                timeIntervals={15}
              />
            </div>
            <div className="form-group">
              <label>Final da Consulta</label>
              <DatePicker
                onChange={(date: Date) => setEnd(date)}
                selected={end}
                showTimeSelect
                dateFormat="Pp"
                locale="pt-BR"
                timeIntervals={15}
              />
            </div>
            <div className="form-group">
              <label>Seu nome</label>
              <input
                type="text"
                onChange={(e) => setEventName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Seu Telefone Whatasapp</label>
              <input
                type="text"
                onChange={(e) => setEventDescription(e.target.value)}
              ></input>
            </div>
            <hr />
            <button
              className="btn btn-primary"
              onClick={() => createCalendarEvent()}
            >
              Agendar Consulta
            </button>
            <p></p>
            <button className="btn btn-secondary" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <div className="">
            <button className="btn btn-google" onClick={() => googleSignIn()}>
              Agende sua consulta pelo Google
            </button>
          </div>
        )}
      </div>
      <div className="atencao-container">
        <div className="atencao">
          <div className="imageContainer">
            <Image src="/alerta.svg" alt="Atencao" width={90} height={90} />
          </div>
          <div className="textContainer">
            <h1 className="title">Atenção!</h1>
            <p className="description">
              Esse site não oferece atendimento imediato a paessoas em crise
              suicida. Em caso de crise ligue para o <strong>CVV - 188</strong>.
              Em caso de emergência, procure o hospital mais próximo. Havendo
              risco de morte, ligue imediatamente para o{" "}
              <strong>SAMU - telefone 192</strong>
            </p>
          </div>
        </div>
        <div className="imageSenhoraContainer">
          <Image
            src="senhoraSentada.svg"
            alt="Senhora Sentada"
            width={132}
            height={401}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import {
//   UseGoogleLoginOptionsAuthCodeFlow,
//   useGoogleLogin,
//   hasGrantedAllScopesGoogle,
//   hasGrantedAnyScopeGoogle,
// } from "@react-oauth/google";
// import axios from "axios";

// const BookAppointment = ({}) => {
//   const login = useGoogleLogin({
//     onSuccess: (credentialResponse) => {
//       console.log("Credential Response:", credentialResponse);
//       const { code } = credentialResponse;
//       axios
//         .post("http://localhost:4000/api/create-tokens", { code })
//         .then((credentialResponse) => {
//           console.log(credentialResponse.data);
//         })
//         .catch((error) => console.log(error.message));
//     },
//     onError: () => console.log("Login Failed"),
//     scope:
//       "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly",
//     flow: "auth-code",
//   });

//   return (
//     <GoogleOAuthProvider clientId="151557074534-sq5fu8imq5ek3p93tmtiimdl6umn6mkr.apps.googleusercontent.com">
//       <div>
//         <div>
//           <h1>Google calendar api</h1>
//         </div>
//         <div>
//           <button onClick={() => login()}>Sign in & Authorize Calendar</button>
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default BookAppointment;

// "use client";

// import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import React, { FC, createContext, useEffect, useState } from "react";
// import "../BookApointment/book.css";

// // const Dialog: any = require("@radix-ui/react-dialog");
// const BookAppointment: FC = () => {
//   const handleClick = () => {
//     alert("Horário Agendado");
//   };

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <button className="Button violet">Agendar via calendario</button>
//       </Dialog.Trigger>
//       <Dialog.Portal>
//         <Dialog.Overlay className="DialogOverlay" />
//         <Dialog.Content className="DialogContent">
//           <Dialog.Title className="DialogTitle">
//             Agendar no calendario
//           </Dialog.Title>
//           <Dialog.Description className="DialogDescription">
//             <div>
//               <div className="calendarEtime">
//                 <div className="calendario">
//                   <input type="datetime-local" id="" />
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           </Dialog.Description>
//           <fieldset className="Fieldset">
//             <label className="Label" htmlFor="name">
//               Nome
//             </label>
//             <input className="Input" id="name" defaultValue="Pedro Duarte" />
//           </fieldset>
//           <fieldset className="Fieldset">
//             <label className="Label" htmlFor="username">
//               Telefone
//             </label>
//             <input
//               className="Input"
//               id="username"
//               defaultValue="(11) 985396680"
//             />
//           </fieldset>
//           <fieldset className="Fieldset">
//             <label className="Label" htmlFor="username">
//               E-mail
//             </label>
//             <input
//               className="Input"
//               id="username"
//               defaultValue="pauloziembick@gmail.com"
//             />
//           </fieldset>
//           <div
//             style={{
//               display: "flex",
//               marginTop: 25,
//               justifyContent: "flex-end",
//             }}
//           >
//             <Dialog.Close asChild>
//               <button
//                 className="Button green"
//                 type="submit"
//                 onClick={handleClick}
//               >
//                 Submit
//               </button>
//             </Dialog.Close>
//           </div>
//           <Dialog.Close asChild>
//             <button className="IconButton" aria-label="Close">
//               <Cross2Icon />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default BookAppointment;
