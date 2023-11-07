import { Link } from "react-router-dom";

export default function NãoEncontrada() {
  const img =
    "https://static.vecteezy.com/ti/vetor-gratis/p3/25025071-futurista-pequeno-robo-dentro-dormindo-pose-ai-tecnologia-personagem-virtual-robo-artificial-inteligencia-inteligente-maquina-conceito-moderno-cyber-robo-mascote-isto-futuro-robotica-chatbot-vetor.jpg";
  return (
    <div className="flex w-full flex-col h-screen justify-center items-center">
      <img src={img} className="max-w-sm" />
      <p>
        Página não encontrada, retorne para{" "}
        <Link className="underline ml-1" to="/">
          Home{" "}
        </Link>
      </p>
    </div>
  );
}
