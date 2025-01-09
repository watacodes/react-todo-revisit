const Header = () => {
  return (
    <nav className="w-full mb-20 flex justify-between sticky">
      <h1 className="text-3xl"> React Kanban Board</h1>
      <ul className="flex gap-10 mr-10">
        <li>About</li>
        <li>Tutorial</li>
      </ul>
    </nav>
  )
}

export default Header
