import React from "react";

import emojipedia from "../emojipedia.js";
import Term from "./Term.jsx";

function createEmoji(emoji) {
  return (
    <Term
      name={emoji.name}
      img={emoji.emoji}
      title={emoji.name}
      description={emoji.meaning}
    />
  );
}

function Dictionary() {
  return (
    <div>
      <dl className="dictionary">{emojipedia.map(createEmoji)};</dl>
    </div>
  );
}

export default Dictionary;
