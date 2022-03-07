import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <div className="text-center border-b-[3px] border-gray-400 bg-gray-600 text-white text-semibold rounded-sm p-6 sticky top-0 font-semibold">
        <h1 className="text-3xl">Onuniverse Sample Project</h1>
      </div>
    </Link>
  );
}

export default Header;
