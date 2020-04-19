import React from "react";

import toArray from "../../util/to-array";

const Item = ({ title, description, link, pubDate, image }) => (
  <li>
    {image && toArray(image).map(img => (<img src={img.url} alt={img.title} aria-label={img.title} />))}
    {title && (<h4 aria-label="Title">{title}</h4>)}
    {description && (<p aria-label="Description">{description}</p>)}
    {link && (<div><a aria-label="Link" href={link}>{link}</a></div>)}
    {pubDate && (<h6 aria-label="Date">Published on: {pubDate}</h6>)}
  </li>
);

export default Item;
