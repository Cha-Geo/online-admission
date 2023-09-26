// import { BsSave2 } from 'react-icons/bs';
import { FaUser, FaShopify } from 'react-icons/fa';
// import { MdFollowTheSigns, MdHistory, MdRateReview } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';

export const UserOptionsData = [
  {
    name: 'Profile',
    img: FaUser,
    route: 'profile',
  },
  {
    name: 'Skills',
    img: FaShopify,
    route: 'skills',
  },
  {
    name: 'Projects',
    img: MdRateReview,
    route: 'projects',
  },
  // {
  //   name: 'Saved Items',
  //   img: BsSave2,
  //   route: 'saved-items',
  // },
  // {
  //   name: 'follow seller',
  //   img: MdFollowTheSigns,
  //   route: 'follow-seller',
  // },
  // {
  //   name: 'recenntly viewed',
  //   img: MdHistory,
  //   route: 'recently-viewed',
  // },
];
