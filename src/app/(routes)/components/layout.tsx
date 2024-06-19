import React from "react";
import ToggleHamburger from "../../../components/toggle-hamburger";
import SideBar from "../../../components/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span className="top-0 fixed right-2 z-20 md:hidden bg-secondary/50 px-1 rounded-bl-xl">
        <ToggleHamburger />
      </span>
      <main className="w-full overflow-hidden bg-gradient-to-r p-5 pt-10 md:px-0 from-primary via-[#064F51] md:pr-3 px-2 to-primary bg-white h-screen mx-0 flex gap-2">
        <SideBar />
        <section className="flex-1 h-full bg-secondary/20 rounded-xl p-3 md:p-5 space-y-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]">
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
