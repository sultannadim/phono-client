import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <section className="py-sm-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-vox p-sm-5 p-4 mb-sm-4 mb-3 rounded-4 bg-light">
              <h3 className="mb-3">
                1. What are the different ways to manage a state in a React
                application?
              </h3>
              <p>
                Not only are there are a lot of different kinds of state, but
                there often dozens of ways of managing each kind. Which should
                you choose? In this guide, we will uncover the several kinds of
                state in your React apps that you might not be aware of, plus
                how to manage them in the most effective way. Global (UI) state
                – Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least. Server
                state – Data that comes from an external server that must be
                integrated with our UI state. Server state is a simple concept,
                but can be hard to manage alongside all of our local and global
                UI state.
              </p>
            </div>

            <div className="faq-vox p-sm-5 p-4 mb-sm-4 mb-3 rounded-4 bg-light">
              <h3 className="mb-3">
                2. How does prototypical inheritance work?
              </h3>
              <p>
                Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using.
              </p>
            </div>

            <div className="faq-vox p-sm-5 p-4 mb-sm-4 mb-3 rounded-4 bg-light">
              <h3 className="mb-3">
                3. What is a unit test? Why should we write unit tests?
              </h3>
              <p>
                developers and sometimes QA staff. The main objective of unit
                testing is to isolate written code to test and determine if it
                works as intended. Unit testing is an important step in the
                development process, because if done correctly, it can help
                detect early flaws in code which may be more difficult to find
                in later testing stages. Unit testing is a component of
                test-driven development (TDD), a pragmatic methodology that
                takes a meticulous approach to building a product by means of
                continual testing and revision. This testing method is also the
                first level of software testing, which is performed before other
                testing methods such as integration testing. Unit tests are
                typically isolated to ensure a unit does not rely on any
                external code or functions. Testing can be done manually but is
                often automated.
              </p>
            </div>
            <div className="faq-vox p-sm-5 p-4   rounded-4 bg-light">
              <h3 className="mb-3">4. React vs. Angular vs. Vue?</h3>
              <p>
                Angular: Angular has a steep learning curve, considering it is a
                complete solution, and mastering Angular requires you to learn
                associated concepts like TypeScript and MVC. Even though it
                takes time to learn Angular, the investment pays dividends in
                terms of understanding how the front end works.
                <br />
                React: React offers a Getting Started guide that should help one
                set up React in about an hour. The documentation is thorough and
                complete, with solutions to common issues already present on
                Stack Overflow. React is not a complete framework and advanced
                features require the use of third-party libraries. This makes
                the learning curve of the core framework not so steep but
                depends on the path you take with additional functionality.
                However, learning to use React does not necessarily mean that
                you are using the best practices.
                <br />
                Vue: Vue provides higher customizability and hence is easier to
                learn than Angular or React. Further, Vue has an overlap with
                Angular and React with respect to their functionality like the
                use of components. Hence, the transition to Vue from either of
                the two is an easy option. However, simplicity and flexibility
                of Vue is a double-edged sword — it allows poor code, making it
                difficult to debug and test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
