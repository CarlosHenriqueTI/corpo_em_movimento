import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="\src\assets\logo.png" alt="logo" />
            <h1>
              Corpo em Movimento
              <br />
              Centro de Fisioterapia
            </h1>
          </div>
          <div className="menu">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Especialidades</a>
            <a href="#">Contato</a>
            <a href="#">Agendamento</a>
            <a href="#">Depoimentos</a>
          </div>
          <div className="socialmidia">
            <a href="#">
              <img src="\src\assets\face.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="\src\assets\insta.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="\src\assets\tiktok.png" alt="facebook" />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <a className="whats" href="https://wa.me/5553999121265">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="#00cc22"
            viewBox="0 0 256 256"
          >
            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
          </svg>
        </a>
        <section className="sobre">
          <div className="sobre__img">
            <img
              src="https://tuiuti.edu.br/wp-content/uploads/2022/12/shutterstock_670910419.jpg"
              alt="fisio"
            />
          </div>
          <div className="sobre__texto">
            <h1>Cuidar da sua saúde é a nossa especialidade.</h1>
            <p>
              Promovendo a saúde e o bem-estar através da integração da
              fisioterapia e pilates. Nosso compromisso é fornecer cuidados
              personalizados e eficazes para ajudar nossos clientes a alcançarem
              uma vida plena e ativa.
            </p>
            <button>
              <a href="#">Nossas Especialidades</a>
            </button>
          </div>
        </section>
        <div>
          <h1>Especialidades</h1>
        </div>
        <section className="resultados">
          <div className="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div className="card__content">
              <h3 className="card__title">Fisioterapia Cardiovascular</h3>
              <p className="card__description">
                A fisioterapia cardiovascular é uma especialidade que se dedica
                à prevenção, tratamento e reabilitação de doenças cardíacas e
                vasculares. Utiliza exercícios físicos, técnicas de respiração e
                intervenções terapêuticas para melhorar a saúde cardíaca. Seu
                principal objetivo é recuperar a funcionalidade dos pacientes
                após eventos cardíacos e prevenir a progressão dessas doenças.
                Os benefícios incluem melhora da capacidade física, redução dos
                sintomas, controle da pressão arterial e aumento da qualidade de
                vida. Fisioterapeutas cardiovasculares colaboram com
                cardiologistas para criar planos de tratamento personalizados.
              </p>
            </div>
          </div>
          <div className="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div className="card__content">
              <h3 className="card__title">Fisioterapia Dermatofuncional</h3>
              <br />
              <p className="card__description">
                A fisioterapia dermatofuncional é uma especialidade que se
                concentra na prevenção e tratamento de disfunções estéticas e
                dermatológicas. Este campo combina técnicas de fisioterapia com
                métodos específicos para cuidar da saúde da pele, tecido
                subcutâneo e sistema linfático. Profissionais dessa área
                utilizam terapias como drenagem linfática, massagem terapêutica,
                eletroterapia e ultrassom para tratar condições como celulite,
                flacidez, cicatrizes e edemas. O objetivo é melhorar a aparência
                e a saúde da pele, promover a regeneração tecidual e aumentar a
                autoestima dos pacientes, sempre com foco em resultados seguros
                e eficazes.
              </p>
            </div>
          </div>
          <div className="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div className="card__content">
              <h3 className="card__title">Fisioterapia neurofuncional</h3>
              <p className="card__description">
                A fisioterapia neurofuncional é uma especialidade focada na
                reabilitação de pacientes com disfunções neurológicas, como AVC,
                esclerose múltipla, Parkinson, lesões medulares e paralisia
                cerebral. Esta área utiliza abordagens específicas para melhorar
                a mobilidade, força, coordenação e equilíbrio dos pacientes. Os
                fisioterapeutas neurofuncionais empregam técnicas como
                exercícios terapêuticos, estimulação elétrica funcional, treino
                de marcha e terapia manual. O objetivo é promover a recuperação
                funcional, maximizar a independência e melhorar a qualidade de
                vida dos indivíduos, adaptando os tratamentos às necessidades
                específicas de cada paciente.
              </p>
            </div>
          </div>
        </section>
        <section className="consulta">
          <h1>Marque sua consulta</h1>
          <div className="consulta__link">
            <p>
              Aqui, você pode marcar sua consulta de forma rápida e conveniente.
              Nosso objetivo é proporcionar a melhor experiência possível desde
              o momento em que você decide cuidar da sua saúde. Com uma equipe
              de profissionais altamente qualificados e uma abordagem
              personalizada, estamos prontos para atender às suas necessidades.
              Estamos ansiosos para recebê-lo(a) e ajudar você a alcançar o
              bem-estar que merece.
            </p>
            <div className="consulta__botao">
              <button>
                <a href="#">
                  Verifique a disponibilidades de horários e agende sua consulta
                </a>
              </button>
            </div>
          </div>
        </section>
        <section className="contato">
          <div className="contato__container">
            <h1 className="contato__titulo">Entre em contato conosco</h1>

            <div className="contato__contato">
              <img
                className="contato__icon"
                src="\src\assets\insta.png"
                alt="Insta"
              />

              <a
                className="contato__paragrafo"
                href="https://www.instagram.com/"
              >
                corpo em movimento
              </a>
            </div>

            <div className="contato__contato">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
              </svg>

              <p className="contato__paragrafo">email@email.com</p>
            </div>

            <div className="contato__contato">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#02ca48"
                viewBox="0 0 256 256"
              >
                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
              </svg>

              <a
                className="contato__paragrafo"
                href="https://wa.me/5553999121265"
              >
                (53) 999121265
              </a>
            </div>

            <h2 className="contato__titulo">Horário de funcionamento</h2>

            <p className="contato__paragrafo">
              Possuímos horários personalizados para suprir a alta demanda de
              pacientes.
            </p>

            <p className="contato__dias">Segunda a Sexta</p>

            <p className="contato__paragrafo">08:00 às 19:00</p>

            <p className="contato__dias">Sábado e Domingo</p>

            <p className="contato__paragrafo">10:00 às 14:00</p>
          </div>
          <div className="mapa">
            <iframe
            className="contato__mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736710.837409623!2d-54.645987606250024!3d-31.770121700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5be08c39731%3A0x644b62f2bc9bddd5!2sUniSenac%20-%20Campus%20Pelotas!5e0!3m2!1spt-BR!2sbr!4v1718408461371!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </section>
      </main>
      <footer>
        <p>Corpo em Movimento &copy; 2024</p>
      </footer>
    </>
  );
}

export default App;
