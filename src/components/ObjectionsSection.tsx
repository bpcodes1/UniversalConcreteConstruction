import { useEffect, useRef } from "react";

const objections = [
{
  q: "Your price is higher than other bids I received.",
  a: "It probably is. That price difference buys you: proper base preparation instead of concrete poured on inadequate subgrade; commercial-grade mix design instead of the cheapest available batch; a fully licensed and insured crew with accountability. Concrete repairs and replacements cost two to three times more than a quality original installation. The lower bid is only cheaper until it isn't."
},
{
  q: "How long will this actually take?",
  a: "We give you a start date and completion window before you sign anything. Oregon's weather creates legitimate scheduling constraints — concrete cannot be properly poured in sustained rain. We build that into the timeline and tell you upfront. What we won't do is give you a vague answer and hope for the best."
},
{
  q: "I've hired contractors who disappeared mid-project.",
  a: "This is the most legitimate fear in any trade. Our CCB license means there's a regulatory body with oversight over our work. Our 15-year operating history in Oregon means we have a reputation and a business to protect. Don't take our word for it — ask for references and call them."
},
{
  q: "Do I need a permit for my project?",
  a: "It depends on project type and jurisdiction. Retaining walls above certain heights, foundation work, and some commercial projects require permits. We know Oregon's permitting landscape and identify requirements during the estimate. We will not start work that requires a permit without confirming it's been pulled."
}];


const ObjectionsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return;














































































};

export default ObjectionsSection;