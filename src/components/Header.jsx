function Header({ searchTerm, handleSearch }) {
  return (
    <header className="flex justify-between p-5 bg-1">
      <h2 className="text-5xl tracking-wider font-Monoton uppercase flex gap-5">
        <span>Task</span>
        <span>Manager</span>
      </h2>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        // className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </header>
  );
}

export default Header;
