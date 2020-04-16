import React from "react";

import arrayMap from "../util/arrayMap";

const Item = ({ title=null, description=null, link=null, pubDate=null, image=null }) => (
  <li>
    {image && (arrayMap(image, function(img) { return (<img src={img.url} alt={img.title} aria-label={img.title} />) }))}
    {title && (<h4 aria-label="Title">{title}</h4>)}
    {description && (<p aria-label="Description">{description}</p>)}
    {link && (<div><a aria-label="Link" href={link}>{link}</a></div>)}
    {pubDate && (<h6 aria-label="Date">Published on: {pubDate}</h6>)}
  </li>
);

export default Item;