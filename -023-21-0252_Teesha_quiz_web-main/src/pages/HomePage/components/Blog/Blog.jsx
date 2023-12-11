import React from 'react'
import Navbar from '../navbar/navbar';




const Blog = () => (
  <div>
    <Navbar />

    <section class="blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="blog__sidebar">
              <div class="blog__sidebar__search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button type="submit"><span class="fa fa-search"></span></button>
                </form>
              </div>
              <div class="blog__sidebar__item">



                <h3 className="fw-bold mt-5  hovering"> Categories</h3>
                <div className="my-5">
                  <p className="text-secondary p-2 hovering"> ALL</p>
                  <p className="text-secondary py-2 hovering"> beauty 20</p>
                  <p className="text-secondary py-2 hovering"> Food (5)</p>
                  <p className="text-secondary py-2 hovering"> Life Style(9) </p>
                  <p className="text-secondary py-2 hovering"> Travel (10) </p>

                </div>



              </div>
              <div class="f-ww">
                <h4 className='f-ww fw-bold'>Recent News</h4>
                <div class="">

                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-3.jpg"
                      alt="image" />

                    <div class="mx-3">
                      <h6 className="fw-bold"> 09 Kinds Of Vegetables <br />
                        Protect The Liver

                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>


                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-2.jpg"
                      alt="image" />

                    <div class="mx-3">
                      <h6 className="fw-bold">  Tips You To Balance<br /> Nutrition Meal Day
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg"
                      alt="image" />

                    <div class="mx-3">
                      <h6 className="fw-bold">4 Principles Help You Lose <br />Weight With Vegetables</h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <h4 className="fw-bold mb-3 mt-5 f-ww">
                  {" "}
                  <b> Search By</b>
                </h4>
                <div class="">
                  <button className="mx-2 bg-light border-nonee text-secondary  my-3">
                    Apple{" "}
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary ">
                    {" "}
                    Beauty
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary ">
                    {" "}
                    Vegetables
                  </button>{" "}
                  <br />
                  <button className="mx-2 bg-light border-nonee text-secondary ">
                    Fruit
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary ">
                    Healthy Food
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary ">
                    Lifestyle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-2.jpg" class="card-img-top" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text m-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2 my-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-3.jpg" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2 my-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-1.jpg" class="card-img-top" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-4.jpg"class="card-img-top" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-4.jpg" class="card-img-top" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img src="https://themewagon.github.io/ogani/img/blog/blog-6.jpg" class="card-img-top" alt="..." />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="product__pagination blog__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>

                  <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>













  </div>
);

export default Blog;

