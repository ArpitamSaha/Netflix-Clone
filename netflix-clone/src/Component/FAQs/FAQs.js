import React from 'react';
import './FAQs.css';

const FAQs = () => {
    const faqs = document.querySelectorAll(".faq");

    // faqs.forEach((faq) => {
    //     faq.addEventListener("click", () => {
    //         if (faq.classList.contains("active"))
    //             faq.classList.remove("active");
    //         else {
    //             faq.classList.add("active");
    //             faqs.forEach((otherfaq) => {
    //                 if (otherfaq != faq)
    //                     otherfaq.classList.remove("active");
    //             });
    //         }
    //     });
    // });
    const faqlistner = (faq) => {
        if (faq.currentTarget.classList.contains("active"))
            faq.currentTarget.classList.remove("active");
        else {
            faq.currentTarget.classList.add("active");
            faqs.forEach((otherfaq) => {
                if (otherfaq !== faq)
                    otherfaq.classList.remove("active");
            });
        }

    };

    return (
        <div className="faq-container">
            <h1>Frequently asked Questions.</h1>
            <div className="faq-list">
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>What is Netflix?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                            anime, documentaries and more - on thousands of internet-connected devices.
                            <br /><br />
                            You can watch as much as you want, whenever you want, without a single ad - all for one low
                            monthly price. There's always something new to discover, and new TV shows and movies are added
                            every week!
                        </p>
                    </div>
                </div>
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>How much does Netflix cost?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                            fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </div>
                </div>
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>Where can I watch?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids
                            enjoy family-friendly TV shows and films in their own space.
                            <br /><br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>
                    </div>
                </div>
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>How do I cancel?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                            your account online in two clicks. There are no cancellation fees – start or stop your account
                            anytime.</p>
                    </div>
                </div>
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>What can I watch on Netflix?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </div>
                <div className="faq" onClick={faqlistner}>
                    <div className="ques">
                        <p>Is Netflix good for kids?</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ans">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids
                            enjoy family-friendly TV shows and films in their own space.
                            <br /><br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;;;;