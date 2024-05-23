import React from "react";
import styles from "./page.module.sass";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className={`${styles.homePage}`}>
        <Image src="/hero2.png" alt="Rode Ziembick" width={700} height={600} />
        <div>
          <h1 className={styles.h1}>Psicanalista</h1>
          <h4 className={`${styles.h1} pr-10`}>
            Meu propósito é <strong>Ajudar Você</strong> a ter mais qualidade de
            vida com saúde mental e emocional
          </h4>
          <h5 className={styles.h1}>
            <strong>Cuide de você</strong>
          </h5>
          <button className={styles.btn}>
            Agende sua consulta
            <Image
              src="/whatsapp.svg"
              alt="Whatsapp"
              width={20}
              height={20}
              className={`${styles.btnWp}`}
            />
          </button>
          <p className={`${styles.ptag} pt-10`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              height="25"
              viewBox="0 0 319.628 319.628"
              width="25"
              className={styles.svg}
            >
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <path d="m301.359 156.271h-111.07c-1.955 0-3.724-1.199-4.433-3.025-.71-1.827-.221-3.898 1.222-5.225l25.728-23.564v-31.872c0-10.077 8.192-18.269 18.281-18.269h70.272c10.077 0 18.269 8.192 18.269 18.269v45.417c0 10.077-8.192 18.269-18.269 18.269zm-98.84-9.507h98.839c4.829 0 8.762-3.933 8.762-8.774v-45.405c0-4.841-3.933-8.774-8.762-8.774h-70.272c-4.841 0-8.774 3.933-8.774 8.774v33.967c0 1.338-.559 2.607-1.536 3.503z"></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m157.638 70.848h-10.88c-2.63 0-4.748-2.129-4.748-4.748s2.129-4.748 4.748-4.748h10.88c2.63 0 4.748 2.129 4.748 4.748s-2.13 4.748-4.748 4.748z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m283.951 276.241h-263.506c-11.276 0-20.445-9.169-20.445-20.445v-9.705c0-2.63 2.129-4.748 4.748-4.748h136.727c2.63 0 4.748 2.129 4.748 4.748 0 2.63-2.129 4.748-4.748 4.748h-131.98v4.945c0 6.039 4.911 10.95 10.95 10.95h263.505c6.039 0 10.95-4.911 10.95-10.95v-4.945h-131.968c-2.63 0-4.748-2.129-4.748-4.748 0-2.63 2.129-4.748 4.748-4.748h136.728c2.63 0 4.748 2.129 4.748 4.748v9.705c-.001 11.276-9.182 20.445-20.457 20.445z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m141.463 250.839h-120.797c-2.63 0-4.748-2.129-4.748-4.748v-182.248c0-11.276 9.169-20.457 20.445-20.457h231.668c11.276 0 20.445 9.169 20.445 20.457v15.22c0 2.63-2.129 4.748-4.748 4.748-2.618 0-4.748-2.129-4.748-4.748v-15.22c0-6.039-4.911-10.95-10.95-10.95h-231.666c-6.039 0-10.95 4.911-10.95 10.95v177.501h116.049c2.63 0 4.748 2.129 4.748 4.748 0 2.618-2.118 4.747-4.748 4.747z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m283.729 250.839h-120.797c-2.63 0-4.748-2.129-4.748-4.748s2.129-4.748 4.748-4.748h116.049v-89.821c0-2.63 2.129-4.748 4.748-4.748 2.618 0 4.748 2.129 4.748 4.748v94.569c0 2.619-2.129 4.748-4.748 4.748z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m152.192 261.568c-8.541 0-15.476-6.947-15.476-15.488 0-2.63 2.129-4.748 4.748-4.748s4.748 2.129 4.748 4.748c0 3.293 2.688 5.981 5.981 5.981s5.981-2.676 5.981-5.981c0-2.63 2.129-4.748 4.748-4.748 2.618 0 4.748 2.129 4.748 4.748.01 8.541-6.937 15.488-15.478 15.488z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="m197.923 216.547c-2.63 0-4.748-2.129-4.748-4.748v-21.097c0-.337-.047-.675-.151-1.001-.047-.151-.081-.291-.116-.442-1.315-6.26-7.18-20.829-33.001-20.829h-6.633c-.372 0-.733-.047-1.082-.128-.349.081-.71.128-1.082.128h-6.633c-25.821 0-31.686 14.569-33.001 20.829-.035.151-.07.303-.116.442-.105.326-.151.652-.151 1.001v21.097c0 2.63-2.129 4.748-4.748 4.748s-4.748-2.129-4.748-4.748v-21.097c0-1.222.175-2.444.524-3.607 1.315-6.028 7.133-23.052 30.883-27.229-3.258-4.003-5.225-9.111-5.225-14.662v-17.373c0-12.812 10.415-23.226 23.226-23.226h2.153c12.812 0 23.226 10.415 23.226 23.226v17.373c0 5.551-1.955 10.659-5.225 14.662 23.738 4.177 29.556 21.201 30.883 27.229.349 1.175.512 2.385.512 3.607v21.097c.012 2.63-2.117 4.748-4.747 4.748zm-46.802-102.447c-7.564 0-13.731 6.156-13.731 13.719v17.373c0 7.564 6.156 13.719 13.731 13.719.372 0 .733.047 1.082.128.349-.081.71-.128 1.082-.128 7.564 0 13.731-6.156 13.731-13.719v-17.372c0-7.564-6.156-13.719-13.731-13.719h-2.164z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Atendimento online para adultos e idosos
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

// import Card from "./components/card/card";
// import { iconType } from "./components/button/button";

// const Home = () => {
//   return (
//     <div className="container pb-80">
//       <Card
//         className="mb-30"
//         label="Product Review"
//         title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//         summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//         href="#"
//         btnIcon={iconType.ARROW_RIGHT}
//       />
//       <div className="row">
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Opinions"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Travel Guides"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//         <div className="col col_4 m-mw-100">
//           <Card
//             label="Product Review"
//             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod!"
//             summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
//             similique aliquid suscipit facilis magnam deserunt quibusdam quidem
//             nulla! Quia, ipsum."
//             href="#"
//             btnIcon={iconType.ARROW_RIGHT}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
