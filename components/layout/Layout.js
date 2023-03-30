import MainNavigation from "./MainNavigation";
import MainFooter from "./MainFooter";

const Layout = (props) => {
    return ( 
        <div>
            <MainNavigation />
            <main style={{margin:"6rem auto", width:"90%", maxWidth:"40rem"}}>{props.children}</main>
            <MainFooter />
        </div>
     );
}
 
export default Layout;