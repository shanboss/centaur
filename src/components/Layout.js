import { ComplexNavbar } from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gray-100 max-w-full">
        <header>
          {/* Navigation bar, logo, etc. */}
          <div>
            <ComplexNavbar />
          </div>
        </header>
        <main>
          <div className="px-3">{children}</div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
