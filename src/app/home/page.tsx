import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "@/app/actions";
import CategoryModal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

async function Home() {
  const data = await fetchAnime(1);

  async function onClose() {
    "use server";
    // console.log("on close");
  }

  async function onOk() {
    "use server";
    // console.log("on ok");
  }

  return (
    <div>
      <Navbar></Navbar>
      <CategoryModal onClose={onClose} onOk={onOk}>
        {""}
      </CategoryModal>
      <main className="sm:p-8 py-12 px-8 flex flex-col gap-10 ">
        <Toaster position="top-center" reverseOrder={false} />

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </div>
  );
}

export default Home;
