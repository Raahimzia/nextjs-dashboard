import ThemeTogler from "@/components/ThemeTogler";


const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( <div className="h-[100vh] flex items-center justify-center relative">
       <div className="absolute buttom-5 right-0 text-white">
        <ThemeTogler />
       </div>
       
        {children}
    </div> );
}
 
export default AuthLayout;
