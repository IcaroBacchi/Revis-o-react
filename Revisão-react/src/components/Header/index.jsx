export default function Header(props) {
  const { nome, idade, cidade } = props;
  return (
    <nav className="bg-sky-800 flex justify-between px-8 py-3 items-center">
      <div>
        Nome: {props.nome} - Idade: {props.idade} - Cidade: {props.cidade}
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>Fale conosco</li>
          <li>Sobre nós</li>
        </ul>
      </div>
    </nav>
  );
}
