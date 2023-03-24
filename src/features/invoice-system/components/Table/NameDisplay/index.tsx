import React from 'react';

function NameDisplay({ firstName, lastName ,itemName}:any) {
  const maxLength = 10; // max number of characters to display
  const fullName = `${firstName} ${lastName}`;
  let display;

  if (!lastName) {
    // only first name is present
    display = firstName.slice(0, maxLength);
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