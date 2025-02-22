import React from "react";

const getAge = () => {
  const birthYear = 2007;
  const birthMonth = 4;
  const birthDay = 21;

  const today = new Date();
  let age = today.getFullYear() - birthYear;

  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  return age;
};

const Content = () => {
  return (
    <section>
      <p>
        Hey, I'm Manish Thakur, a {getAge()}-year-old web developer from Nepal
        with expertise in Next.js, React, TypeScript, and Vite. I specialize in
        building beautiful, fast, and functional websites with seamless user
        experiences. From custom web apps to real estate platforms, quiz systems,
        and video course hosting, I create high-performance solutions tailored to
        any need. If you're looking for a stunning website delivered in record
        time, I’ve got you covered!
      </p>
    </section>
  );
};

export default Content;
