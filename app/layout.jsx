import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karga Karga Case",
  description: "Developed by Mücahit Akdeniz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
