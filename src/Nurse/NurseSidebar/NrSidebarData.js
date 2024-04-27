import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const NrSidebarData = [
    {
        title: 'Dashboard',
        path: '/nurse',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Patient List',
        path: '/patient-list',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Manage Emergency',
        path: '/AddPatient',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Ward Allotment',
        path: '/WardAllotment',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Nurse Schedule',
        path: '/NurseSchedule',
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

];



