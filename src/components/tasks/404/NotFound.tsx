import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-black text-center text-4xl text-white">Página No Encontrada</h1>
      <p className="mt-10 text-center text-white">
        Tal vez quieras volver a{' '}
        <Link className="text-cyan-500" to={'/'}>Proyectos</Link>
      </p>
    </div>
  );
}
