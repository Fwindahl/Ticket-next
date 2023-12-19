import Link from "next/link";
import Image from "next/image";
import Logo from "./wolfa.png";

const Navbar = () => {
  return (
    <nav>
      <Image
        width={60}
        quality={100}
        placeholder="empty"
        src={Logo}
        alt="Wolf logo"
      />
      <h1>Dojo</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create</Link>
    </nav>
  );
};

export default Navbar;
