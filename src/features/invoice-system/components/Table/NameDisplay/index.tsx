import React from 'react';

function NameDisplay({ item}:any) {
  const maxLength = 12; // max number of characters to display
  const fullName = `${item}`;
  let display;

  if (!item) {
    // only first name is present
    display = item?.slice(0, maxLength);
  } else if (fullName.length <= maxLength) {
    // full name is within the max length
    display = fullName;
  } else {
    // truncate the full name and add ellipsis
    const truncatedName = fullName.slice(0, maxLength) + '...';
    display = truncatedName;
  }

  return <div>{display}</div>;
}
export default NameDisplay;