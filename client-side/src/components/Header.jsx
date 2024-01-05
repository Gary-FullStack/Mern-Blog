import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
    return (

        <Navbar className="border-b-2">

                <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-red-700 to-orange-600 rounded-lg text-white">Recon&apos;s Rants</span>                
                </Link>
                <form>
                    <TextInput 
                        type="text"
                        placeholder="Search..."
                        rightIcon={AiOutlineSearch}
                        className="hidden lg:inline"
                    />
                </form>
                <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                   <AiOutlineSearch />
                </Button>

        </Navbar>
    )
}
