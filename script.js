const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active"))
            faq.classList.remove("active");
        else {
            faq.classList.add("active");
            faqs.forEach((otherfaq) => {
                if (otherfaq != faq)
                    otherfaq.classList.remove("active");
            });
        }
    });
});