import { useState } from "react";
import PropTypes from "prop-types";

const text =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam ea excepturi commodi pariatur id aperiam ipsum numquam illo, cumque inventore porro, iure nulla cum, dolorum saepe ad soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam ea excepturi commodi pariatur id aperiam ipsum numquam illo, cumque inventore porro, iure nulla cum, dolorum saepe ad soluta";

TextExpander.prototypes = {
  textLengthDisplay: PropTypes.number,
  textContent: PropTypes.string,
  btnStyles: PropTypes.object,
  textStyles: PropTypes.object,
  isExpanded: PropTypes.bool,
  children: PropTypes.object.isRequired,
};

export default function TextExpander({
  textLengthDisplay = 250,
  btnStyles = {},
  textStyles = {},
  isExpanded = false,
  children,
}) {
  const [showMore, setShowMore] = useState(isExpanded);
  return (
    <div>
      <p className={textStyles}>
        {showMore
          ? children
          : ` ${children?.substring(0, textLengthDisplay)}...`}
        <button className={btnStyles} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
}
