import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';


export const links = [
  {
    id: 1,
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    icon: <FaBehance />,
  },
  {
    id: 5,
    icon: <FaSketch />,
  },
];
