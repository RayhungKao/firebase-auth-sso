import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import AuthProvider from "@/contexts/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthProvider>
  );
}
