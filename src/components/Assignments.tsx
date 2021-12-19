import React from "react";
import "../styles/Assignments.css";
import Zoom from "../assignment/BadExample.jpg";
import Insta1 from "../assignment/goodExample.jpg";
import Insta2 from "../assignment/goodExampleJPG.jpg";
import Metro1 from "../assignment/Metro Lisboa Aberto.jpg";
import Metro2 from "../assignment/Metro Lisboa.jpg";
import Metro3 from "../assignment/Sol Metro.jpg";
import Twitter from "../assignment/twitter.jpg";
import Centoedoze from "../assignment/unknown.png";
import Sugestao from "../assignment/Capture.jpg";

function Assignments() {
<<<<<<< HEAD
  return (
    <div className="assign-container">
      <div className="assign-wrapper">
        <div className="assign">
          <div className="name">Francisco Simões </div>
          <div className="bold">Good Design - Instagram: </div>Instagram Both
          the web and mobile apps are well conceived. Looking just at the web
          app, it's very light since the screen is not entirely filled and easy
          to locate everything you need. The buttons are very intuitive and you
          can easily get to your account settings. On top of this, it's a simple
          yet attractive design.
          <br />
          <img src={Insta1} className="assign-img" />
          <img src={Insta2} className="assign-img" />
          <div className="bold">Bad Design - Zoom: </div>Zoom Screen Sharing
          Functionality The Zoom screen sharing functionality provides a decent
          amount of options. It allows us to open up a chat with everyone in the
          meeting. It even lets us take notes on the screen with a digital pen.
          However, design wise it's poorly conceived. I believe the screen share
          options bar is too cluttered and even cuts off the top of the screen,
          blocking the view of some google chrome tabs as shown in the example.
          The green lines around the screen are also quite disturbing. It makes
          everything cluttered unnecessarily. Discord allows us to change the
          definitions of our sharing without any option bars, we do it directly
          on the app and I would rather have it like that in Zoom (although the
          Zoom chat has the advantage of higher privacy). A mix between Zoom and
          Discord would be ideal.
          <img src={Zoom} className="assign-img" />
        </div>
      </div>
      <div className="assign-wrapper">
        <div className="assign">
          <div className="name">Alberto Alves </div>
          <div className="bold">Twitter - Good Design: </div>A interface é
          simples e de fácil compreensão. O grande foco da aplicação é
          precisamente o conteúdo, que ocupa a maior percentagem disponível de
          ecrã. Mantem o utilizador informado, mas oferece a maior relevância ao
          motivo pelo qual o utilizar escolheu a aplicação, o conteúdo que
          seguimos.
          <img src={Twitter} className="assign-img" />
          <br />
          <div className="bold">Metro de Lisboa - Bad Design: </div>A zona de
          planear viagens, que é um grande motivo pelo qual as pessoas visitam o
          website, encontra-se encostado à margem direita do website, uma
          posição que não o favorece, porque este devia ter uma posição mais
          central de modo a dar-lhe mais preponderancia no website. Um exemplo
          de um site que se encontra no mesmo dominio da transportação e reflete
          bem esta ideia de importância é o website da CP, que tem como
          componente principal a pesquisa de horários/viagens. O website tem
          ainda mais um problema relativo à escolha de posicionamento. Quando
          tentamos abrir o calendário existem alguns dias que se encontram
          cortados devido às margens laterais.
          <img src={Metro1} className="assign-img" />
          <img src={Metro2} className="assign-img" />
          <img src={Metro3} className="assign-img" />
        </div>
      </div>
      <div className="assign-wrapper">
        <div className="assign">
          <div className="name">Guilherme Gil </div>
          <div className="bold">Good Design:</div>Um exemplo de uma boa
          interface é a do pavilhão onde treino voleibol. Este pavilhão tem como
          objetivo a prática de desporto e tem um elemento que facilita bastante
          as nossas atividades: um relógio. O relógio permite-nos facilmente
          controlar o tempo entre cada atividade e também de perceber quando já
          acabou o nosso treino, não roubando assim tempo de treino às outras
          equipas.
          <br />
          <div className="bold">Bad Design: </div>O meu primeiro exemplo de má
          interface é a da interface do website oficial do 112 que tem como
          objetivo dar a conhecer ao utilizador o serviço de emergência 112. Ao
          abrirmos o website deparamo-nos com um website com um tipo de letra
          demasiado pequeno o que torna a leitura difícil. Outro aspeto negativo
          desta interface é o facto de o website nos mostrar logo de caras uma
          quantidade enorme de informação tornando o website bastante pesado. As
          minhas sugestões de correção seriam aumentar a letra e de dividir a
          informação em secções de forma a que o utilizador visualize cada
          secção à medida que dava scroll. Desta forma o texto tornaria-se
          legível e o utilizador não se defrontava logo com um a grande
          quantidade de informação.
          <img src={Centoedoze} className="assign-img" />
          <img src={Sugestao} className="assign-img" />
        </div>
      </div>
    </div>
  );
=======
	return (
		<div className="assign-container">
			<div className="assign-wrapper">
				<div className="assign">
					<div className="name">Francisco Simões </div>
					<div className="bold">Good Design - Instagram: </div>Instagram Both
					the web and mobile apps are well conceived. Looking just at the web
					app, it's very light since the screen is not entirely filled and easy
					to locate everything you need. The buttons are very intuitive and you
					can easily get to your account settings. On top of this, it's a simple
					yet attractive design.
					<br />
					<img src={Insta1} className="assign-img" />
					<img src={Insta2} className="assign-img" />
					<div className="bold">Bad Design - Zoom: </div>Zoom Screen Sharing
					Functionality The Zoom screen sharing functionality provides a decent
					amount of options. It allows us to open up a chat with everyone in the
					meeting. It even lets us take notes on the screen with a digital pen.
					However, design wise it's poorly conceived. I believe the screen share
					options bar is too cluttered and even cuts off the top of the screen,
					blocking the view of some google chrome tabs as shown in the example.
					The green lines around the screen are also quite disturbing. It makes
					everything cluttered unnecessarily. Discord allows us to change the
					definitions of our sharing without any option bars, we do it directly
					on the app and I would rather have it like that in Zoom (although the
					Zoom chat has the advantage of higher privacy). A mix between Zoom and
					Discord would be ideal.
					<img src={Zoom} className="assign-img" />
				</div>
			</div>
			<div className="assign-wrapper">
				<div className="assign">
					<div className="name">Alberto Alves </div>
					<div className="bold">Twitter - Good Design: </div>A interface é
					simples e de fácil compreensão. O grande foco da aplicação é
					precisamente o conteúdo, que ocupa a maior percentagem disponível de
					ecrã. Mantem o utilizador informado, mas oferece a maior relevância ao
					motivo pelo qual o utilizar escolheu a aplicação, o conteúdo que
					seguimos.
					<img src={Twitter} className="assign-img" />
					<br />
					<div className="bold">Metro de Lisboa - Bad Design: </div>A zona de
					planear viagens, que é um grande motivo pelo qual as pessoas visitam o
					website, encontra-se encostado à margem direita do website, uma
					posição que não o favorece, porque este devia ter uma posição mais
					central de modo a dar-lhe mais preponderancia no website. Um exemplo
					de um site que se encontra no mesmo dominio da transportação e reflete
					bem esta ideia de importância é o website da CP, que tem como
					componente principal a pesquisa de horários/viagens. O website tem
					ainda mais um problema relativo à escolha de posicionamento. Quando
					tentamos abrir o calendário existem alguns dias que se encontram
					cortados devido às margens laterais.
					<img src={Metro1} className="assign-img" />
					<img src={Metro2} className="assign-img" />
					<img src={Metro3} className="assign-img" />
				</div>
			</div>
			<div className="assign-wrapper">
				<div className="assign">
					<div className="name">Guilherme Gil </div>
					<div className="bold">Good Design: </div>Um exemplo de uma boa
					interface é a do pavilhão onde treino voleibol. Este pavilhão tem como
					objetivo a prática de desporto e tem um elemento que facilita bastante
					as nossas atividades: um relógio. O relógio permite-nos facilmente
					controlar o tempo entre cada atividade e também de perceber quando já
					acabou o nosso treino, não roubando assim tempo de treino às outras
					equipas.
					<br />
					<div className="bold">Bad Design: </div>O meu primeiro exemplo de má
					interface é a da interface do website oficial do 112 que tem como
					objetivo dar a conhecer ao utilizador o serviço de emergência 112. Ao
					abrirmos o website deparamo-nos com um website com um tipo de letra
					demasiado pequeno o que torna a leitura difícil. Outro aspeto negativo
					desta interface é o facto de o website nos mostrar logo de caras uma
					quantidade enorme de informação tornando o website bastante pesado. As
					minhas sugestões de correção seriam aumentar a letra e de dividir a
					informação em secções de forma a que o utilizador visualize cada
					secção à medida que dava scroll. Desta forma o texto tornaria-se
					legível e o utilizador não se defrontava logo com um a grande
					quantidade de informação.
					<img src={Centoedoze} className="assign-img" />
					<img src={Sugestao} className="assign-img" />
				</div>
			</div>
		</div>
	);
>>>>>>> 184cfc63725f400b7b6a4ae73be0ab4d02e7a8bc
}

export default Assignments;
