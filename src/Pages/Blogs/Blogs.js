import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="container my-4">
            <div className="blogs-container">
                <div className="blog">
                    <h4>Difference between Authorization and Authentication</h4>
                    <p>
                        Authentication and Authorization sound similar but they
                        are not similar. Authentication is the process of
                        verifying someone. A process to know who someone is.
                        Whereas Authorization refers to the access of resources
                        of an Authenticated user. Authorization is the process
                        to check whether the Authenticated user has access to a
                        particular resource. Like a database, protected files,
                        important information, etc.
                    </p>
                </div>
                <div className="blog">
                    <h4>Why am I using Firebase? What other options do I have to implement authentication?</h4>
                    <p>
                        I am using Firebase to implement Authentication in my
                        Website. I also use it for hosting. Firebase is a tool
                        used by a lot of developers around the world. It offers
                        a lot of services but Authentication is the main thing
                        it provides. Auth0, MongoDB, Okta, Passport, JSON Web
                        Token and Keycloak are some alternatives we can use to
                        implement Authentication when we are not using Firebase.
                    </p>
                </div>
                <div className="blog">
                    <h4>
                        What other services does Firebase provide other than
                        authentication
                    </h4>
                    <p>
                        Firebase is a platform developed by Google that provides
                        a lot of services to its users. Most of them are free to
                        some extent depending on the usage of the service.
                        Firebase provides Authentication, Realtime Database,
                        Firestore, Storage, Hosting, Machine Learning, and much
                        more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
