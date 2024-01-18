import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Çelebi Seyahat Acentası",
  description: "Çelebi Seyahat Acentası Bilet Alma Uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-100">
      <body
        style={{
          background: "url(/bg.jpg) no-repeat",
          backgroundSize: "cover",
        }}
        className="h-100"
      >
        {" "}
        <section className="h-100 bg-dark bg-opacity-75">
          <div className={"container h-100"}>
            <div className="row justify-content-center align-items-center m-5 mt-0 pt-5 text-center h-75">
              <div className="col-12">
                <Link href={"/"} className="text-decoration-none">
                  <h1 className="mb-5 text-primary p-4 bg-light rounded ">
                    Çelebi Seyahat Acentası Bilet Alma Uygulaması
                  </h1>
                </Link>
                {children}
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
