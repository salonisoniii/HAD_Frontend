import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const AdSidebarDeatils = [
  {
    title: 'Home',
    path: '/Admin',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Add Staff',
    path: '/add-staff',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'StaffList',
    path: '/stafflist',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Modify Schedule',
    path: '/ms',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Setting',
    // path: '/setting',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: 'Change Password',
          path: '/change-password',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Edit Profile',
          path: '/edit-profile',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  {
    title: 'Deactivate',
    path: '/deactivate',
    icon: <IoIcons.IoMdHelpCircle />
  }
];