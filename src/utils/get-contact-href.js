const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'spotify':
      href = `https://open.spotify.com/user/${contact}`;
      break;
    case 'resume':
      href = `../assets/photo.jpg`;
      break;
    default:
      href = contact;
      break;
  }

  console.log(href)
  return href;
};

export default getContactHref;
