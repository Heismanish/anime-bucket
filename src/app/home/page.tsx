import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "@/app/actions";
import CategoryModal from "@/components/Modal";
import Navbar from "@/components/Navbar";

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
  // console.log(data);

  return (
    <div>
      <Navbar></Navbar>
      <CategoryModal title={"akfsj"} onClose={onClose} onOk={onOk}>
        {"alksn"}
      </CategoryModal>
      <main className="sm:p-8 py-12 px-8 flex flex-col gap-10 ">
        {/* <h2 className="text-3xl text-white font-bold">Explore Anime</h2> */}

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </div>
  );
}

export default Home;
