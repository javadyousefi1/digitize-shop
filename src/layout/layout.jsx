import Footer from "../components/footer";
import Header from "../components/header";
const Layout = ({children ,changeHandler}) => {
    return (
        <div className="container mx-auto">
        <Header />
        {children}
        <Footer/>
        </div>
    );
}
 
export default Layout;