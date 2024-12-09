import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../component/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our eCommerce store, your one-stop destination for
            high-quality and carefully curated products. We take pride in
            offering a seamless shopping experience, where innovation meets
            convenience. From the latest fashion trends to everyday essentials,
            our collection is designed to cater to your diverse needs. At the
            heart of our platform lies a commitment to excellence, ensuring that
            each product you discover reflects both style and reliability. Join
            us in redefining online shopping with trust, transparency, and
            unmatched value.
          </p>
          <p>
            At our eCommerce store, we believe shopping should be simple,
            enjoyable, and inspiring. That’s why we bring you an extensive range
            of products, handpicked to suit every taste and lifestyle. With an
            emphasis on quality, affordability, and customer satisfaction, we
            strive to create a platform where you can find exactly what you’re
            looking for. Our team is dedicated to staying ahead of the trends,
            offering you the best in fashion, home decor, and much more.
            Discover a world of possibilities with us today.
          </p>
          <b className="text-gray-600">Our Mission</b>
          <p className="text-gray-600">
            Our mission is to empower our customers by delivering exceptional
            products and experiences. We aim to set new standards in eCommerce
            by embracing innovation, fostering trust, and championing
            sustainability. Through our efforts, we strive to make high-quality
            goods accessible to everyone while building a community that values
            integrity, creativity, and a shared commitment to excellence.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every product is thoroughly inspected to ensure it meets our high
            standards, offering you the best in reliability and durability. We
            prioritize your satisfaction by delivering only top-notch products,
            backed by responsive support for a seamless shopping experience.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Enjoy a user-friendly platform designed for quick and easy browsing,
            so you can find exactly what you need in no time. From intuitive
            navigation to secure checkout, we prioritize your convenience at
            every step of your shopping journey.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is available to assist you with any
            inquiries, ensuring a smooth and pleasant shopping experience.We go
            the extra mile to address your concerns promptly and professionally,
            because your satisfaction is our priority.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
