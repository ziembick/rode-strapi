import getCategoryColor from "@/helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.sass";

const BlogDetails = (props: any) => {
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 c-${getCategoryColor("Product Review")}`}>
            {"Product Review"}
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
      <Image
        className={`${styles.featuredImage} mb-50`}
        src="/thumb.jpg"
        alt="Thumbnail"
        width={1280}
        height={387}
      />
      <div className="row mb-50">
        <div className="col col_9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            maxime eligendi corporis dolorem ipsum dolore fuga facere similique
            repellendus, odit reiciendis. Rem suscipit eveniet doloribus nam
            voluptates earum molestiae labore modi illum ad, deserunt pariatur
            animi fugiat? Suscipit omnis iste, nulla eos recusandae temporibus
            sit voluptatum ea laudantium dolor at rerum similique harum,
            doloribus distinctio saepe esse, dolores quae quia! Nulla, ab
            temporibus accusamus quaerat iste vero iusto quibusdam possimus
            blanditiis est quo reiciendis ad numquam necessitatibus amet. Fuga,
            vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            expedita harum rem neque deserunt rerum! Dolorem accusantium sequi
            dolore quisquam, sint blanditiis dolor. Quas et at illum! Assumenda
            placeat neque architecto laboriosam optio, sequi cumque doloremque
            officia? Ut maiores ducimus ipsam, fugiat beatae suscipit temporibus
            quisquam! Animi neque nostrum velit?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eius
            enim voluptate culpa blanditiis sapiente consequuntur ea
            perspiciatis omnis sed aspernatur, minima commodi iste molestias eos
            veniam aut quasi nostrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
