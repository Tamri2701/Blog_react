import React from "react";
import Card from "./Card"; 
import { blog } from "./Data";

const Card1 = () => {
  return (<>
      <section className="blog">
        <div className="container grid3">
          {blog.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Card1;
