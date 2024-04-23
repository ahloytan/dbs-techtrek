import { 
  ArrowLeftOnRectangleIcon, 
  ChatBubbleBottomCenterTextIcon, 
  MapPinIcon, 
  DocumentIcon, 
  UsersIcon, 
  UserIcon, 
  ShoppingBagIcon, 
  CogIcon, 
  ChartBarIcon, 
  PaperAirplaneIcon
} from '@heroicons/react/24/solid';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Destinations',
    path: '/destinations',
    icon: (
      <SvgIcon fontSize="small">
        <MapPinIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Generative AI',
    path: '/llm',
    icon: (
      <SvgIcon fontSize="small">
        <ChatBubbleBottomCenterTextIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Telegram',
    path: '/telegram',
    icon: (
      <SvgIcon fontSize="small">
        <PaperAirplaneIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Logout',
    path: 'https://www.youtube.com/watch?v=fcZXfoB2f70&ab_channel=RickrollNoads',
    icon: (
      <SvgIcon fontSize="small">
        <ArrowLeftOnRectangleIcon />
      </SvgIcon>
    )
  },
];

export const adminItems = [
  {
    title: 'Template',
    path: '/template',
    icon: (
      <SvgIcon fontSize="small">
        <DocumentIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
];
