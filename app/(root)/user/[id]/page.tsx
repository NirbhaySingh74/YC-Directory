import { auth } from "@/auth";
import { AUTHOR_BY_ID_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React, { use } from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();
  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center">{user.name}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
