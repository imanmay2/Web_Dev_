export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-border">
      <div className="flex items-center gap-3 text-white text-xl font-semibold">
        <div className="bg-accent p-2 rounded-lg">📈</div>
        ECELL
      </div>

      <div className="flex gap-8 text-gray-300">
        <button className="bg-accent text-white px-4 py-2 rounded-lg">
          Holdings
        </button>
        <button>Transactions</button>
        <button>Stocks</button>
      </div>
    </nav>
  );
}
