import React from "react";

export default function Root(props) {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          style={{ width: "100%" }}
          src="https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg"
        />
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate all of your frontend apps, regardless of what
        frameworks they're built with.
      </p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">
          Learn more
        </a>
      </p>
    </section>
  );
}
