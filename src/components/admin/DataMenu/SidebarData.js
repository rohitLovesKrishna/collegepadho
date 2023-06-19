import { FiberManualRecord, Settings, Group, ThumbUp, AttachFile, FormatListNumbered, CurrencyRupee, Payment, NearMe, Article, Extension, Workspaces, Language, Home } from '@mui/icons-material';

export const sideItems = [
    {
        id: 1,
        path: '',
        title: "Dashboard",
        logo: <Home sx={{ color: "#8f95bd" }} />,
    },
    {
        id: 2,
        path: '',
        title: "Stream",
        logo: <Language sx={{ color: "#8f95bd" }} />
    },
    {
        id: 3,
        path: '',
        title: "Colleges",
        logo: <Workspaces sx={{ color: "#8f95bd" }} />
    },
    {
        id: 4,
        path: '',
        title: "Amenities",
        logo: <Extension sx={{ color: "#8f95bd" }} />
    },
    {
        id: 5,
        path: '',
        title: "Advertisement",
        logo: <Workspaces sx={{ color: "#8f95bd" }} />
    },
    {
        id: 6,
        path: '',
        title: "Page",
        logo: <Article sx={{ color: "#8f95bd" }} />
    },
    {
        id: 7,
        path: '',
        title: "Blog",
        logo: <Article sx={{ color: "#8f95bd" }} />
    },
    {
        id: 8,
        path: '',
        title: "Location",
        logo: <NearMe sx={{ color: "#8f95bd" }} />
    },
    {
        id: 9,
        path: '/offlinepayment',
        title: "Offline payment",
        logo: <CurrencyRupee sx={{ color: "#8f95bd" }} />
    },
    {
        id: 10,
        path: '/leads',
        title: "Leads",
        logo: <FormatListNumbered sx={{ color: "#8f95bd" }} />
    },
    {
        id: 11,
        path: '/paymenthistory',
        title: "Payment history",
        logo: <AttachFile sx={{ color: "#8f95bd" }} />
    },
    {
        id: 12,
        path: '/rating',
        title: "Rating wise quality",
        logo: <ThumbUp sx={{ color: "#8f95bd" }} />
    },
    {
        id: 13,
        path: '',
        title: "Users",
        logo: <Group sx={{ color: "#8f95bd" }} />
    },
    {
        id: 14,
        path: '',
        title: "Settings",
        logo: <Settings sx={{ color: "#8f95bd" }} />
    }
]

export const hoverMenu = [
    [],
    [{
        id: 1.1,
        path: '/stream',
        title: 'Stream',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 1.2,
        path: '/addnewstream',
        title: 'Add new stream',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [{
        id: 2.1,
        path: '/allcolleges',
        title: 'All colleges',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 2.2,
        path: '/fo5n4ejplzppvs0y8d52u3bkuwvd0m6y57365a0tyub6p044fn7e6csupcqmwxq5ikuncw0bjrwbvltj0f9v2kdcijvvo2wlwqlh',
        title: 'Add new college',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 2.3,
        path: '/claimedcollege',
        title: 'Claimed college',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 2.4,
        path: '/reportedcollege',
        title: 'Reported college',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    }
    ],
    [{
        id: 3.1,
        path: '/amenities',
        title: 'Amenities',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 3.2,
        path: '/addnewamenity',
        title: 'Add new amenity',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [
        {
            id: 4.1,
            path: '/advertisement',
            title: 'Advertisement',
            logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
        },
        {
            id: 4.2,
            path: '/addadvertisement',
            title: 'Add advertisement',
            logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
        },
    ],
    [{
        id: 5.1,
        path: '/page',
        title: 'Page',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 5.2,
        path: '/addnewpage',
        title: 'Add new page',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [{
        id: 6.1,
        path: '/post',
        title: 'Post',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 6.2,
        path: '/addnewpost',
        title: 'Add new post',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [{
        id: 7.1,
        path: '/location',
        title: 'Location',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 7.2,
        path: '/addnewlocation',
        title: 'Add new location',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [],
    [],
    [],
    [],
    [{
        id: 12.1,
        path: '/users',
        title: 'Users',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 12.2,
        path: '/addnewuser',
        title: 'Add new user',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
    [{
        id: 13.1,
        path: '/systemsettings',
        title: 'System settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.2,
        path: '/frontendsettings',
        title: 'Frotend settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.3,
        path: '/mapsettings',
        title: 'Map settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.4,
        path: '/paymentsettings',
        title: 'Payment settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.5,
        path: '/languagesettings',
        title: 'Language settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.6,
        path: '/smtpsettings',
        title: 'Smtp settings',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    {
        id: 13.7,
        path: '/about',
        title: 'About',
        logo: <FiberManualRecord sx={{ width: "5px", height: "5px" }} />
    },
    ],
]