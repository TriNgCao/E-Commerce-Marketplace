
import { Footer } from "./footer";
import { Navabar } from "./navabar";

interface Props {
    children: React.ReactNode
}
const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navabar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;