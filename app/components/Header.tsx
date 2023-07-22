export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 bg-slate-20 shadow-md shadow-purple-50">
      <h1 className="text-3xl font-bold text-purple-500">Phebts</h1>
      <nav>
        <a
          className="text-xl text-purple-500 font-semibold hover:ring-1 ring-purple-500 px-2 py-1 rounded-md"
          href="#"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
}
