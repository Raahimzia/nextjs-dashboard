import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ThemeTogler from "./ThemeTogler";
  

const Nav = () => {
    return ( <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 justify-between flex">
        <Link href='/'>
        <Image src={logo} alt="zia" width={40} />
        
        </Link>

        <div className="flex items-center">
          <ThemeTogler />
          <DropdownMenu>
  <DropdownMenuTrigger className="focus:outline-none">
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"></AvatarImage>
            <AvatarFallback className="text-black">BT</AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem >
        <Link href='/profile'>Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Link href='/auth'>Logout</Link>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

        </div>
        
        
        

    </div> );
}
 
export default Nav;