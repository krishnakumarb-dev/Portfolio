import "./experience.css";

import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import experience from "../../data/experience";
import { CheckCircle2 } from "lucide-react";

function Experience(){

return(
<Reveal>
<section
id="experience"
className="experience section"
>

<div className="container-custom">

<div className="section-header">

    <div className="section-label">

        Experience

    </div>

    <h2 className="section-title">

        Internship Journey

    </h2>

    <p className="section-subtitle">

        My professional experience and internship journey.

    </p>

</div>

{experience.map((item)=>(

<div
key={item.id}
className="experience-card glass"
>

<h2>

{item.role}

</h2>

<h3>

{item.company}

</h3>

<span className="experience-duration">

{item.duration}

</span>

<p>

{item.description}

</p>

<ul>

{item.responsibilities.map((task) => (
  <li key={task}>
    <CheckCircle2 size={18} />
    <span>{task}</span>
  </li>
))}

</ul>

<div className="experience-tech">

{item.technologies.map((tech)=>(

<span
key={tech}
className="tech-pill"
>

{tech}

</span>

))}

</div>

</div>

))}

</div>

</section>
</Reveal>
);

}

export default Experience;