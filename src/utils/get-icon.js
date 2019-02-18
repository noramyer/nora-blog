import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'spotify':
      icon = ICONS.SPOTIFY;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
