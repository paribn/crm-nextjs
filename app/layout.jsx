import "@/assets/styles/global.scss";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import LoaderProvider from "@/components/provider/LoaderProvider/LoaderProvider";

export const metadata = {
  title: "CRM Application",
  description: "Application",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ToastContainer />
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
