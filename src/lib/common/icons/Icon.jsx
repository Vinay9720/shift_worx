/* eslint-disable complexity */
import Eye from './Eye';
import User from './User';
import Bell from './Bell';
import Settings from './Settings';
import Facebook from './Facebook';
import FirstPageArrow from './FirstPageArrow';
import LastPageArrow from './LastPageArrow';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SelectDownArrow from './SelectDownArrow';
import VerticalMenu from './VerticalMenu';
import UpArrow from './UpArrow';
import People from './People';
import Schedule from './Schedule';
import UserExpiry from './UserExpiry';
import Filter from './Filter';
import Search from './Search';
import Close from './Close';
import DownArrow from './DownArrow';
import Hamburger from './Hamburger';
import ShiftWorxLeafLogo from './ShiftWorxLeafLogo';
import ActivityStatus from './ActivityStatus';
import Trash from './Trash';
import Clock from './Clock';
import Calender from './Calender';
import Circle from './Circle';
import List from './List';
import PeopleGroup from './PeopleGroup';
import CalenderCheck from './CalenderCheck';
import CalenderTodo from './CalenderTodo';
import ArrowRightUpLine from './ArrowRightUpLine';
import ArrowLeftDownLine from './ArrowLeftDownLine';
import HeaderHome from './HeaderHome';
import HeaderCalender from './HeaderCalender';
import HeaderNotes from './HeaderNotes';
import HeaderReport from './HeaderReport';
import HeaderEmployee from './HeaderEmployee';
import HomeSmile from './HomeSmile';
import Addition from './Addition';
import Edit from './Edit';
import Check from './check';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import Ellipse from './Ellipse';
import DropdownArrow from './DropdownArrow';
import Pencil from './Pencil';
import StickyNote from './StickyNote';
import Message from './Message';
import RestartLine from './RestartLine';
import FileClose from './FileClose';
import FilledCheck from './FilledCheck';
import Paper from './Paper';
import Alert from './Alert';
import DenyRequest from './DenyRequest';
import ApproveRequest from './ApproveRequest';
import ApproveCheck from './ApproveCheck';
import CircleCloseDelete from './CircleCloseDelete';
import PaperWithCircleBackSlash from './PaperWithCircleBackSlash';
import CalenderWeek from './CalenderWeek';
import CalenderMonth from './CalenderMonth';
import Radio from './Radio';
import SaveScheduleTemplate from './SaveScheduleTemplate';

export const Icon = ({ name, width, height, fill, styles, ...rest }) => {
    switch (name) {
        case 'eye':
            return <Eye width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'user':
            return <User width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'bell':
            return <Bell width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'settings':
            return <Settings width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'facebook':
            return <Facebook width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'vertical-menu':
            return <VerticalMenu width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'first-page-arrow':
            return <FirstPageArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'last-page-arrow':
            return <LastPageArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'left-arrow':
            return <LeftArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'right-arrow':
            return <RightArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'select-down-arrow':
            return <SelectDownArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'up-arrow':
            return <UpArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'down-arrow':
            return <DownArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'people':
            return <People width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'schedule':
            return <Schedule width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'user-expiry':
            return <UserExpiry width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'filter':
            return <Filter width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'search':
            return <Search width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'close':
            return <Close width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'hamburger':
            return <Hamburger width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'shiftworx-leaf-logo':
            return <ShiftWorxLeafLogo width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'activity-status':
            return <ActivityStatus width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'trash':
            return <Trash width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'clock':
            return <Clock width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'calender':
            return <Calender width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'circle':
            return <Circle width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'list':
            return <List width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'people-group':
            return <PeopleGroup width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'calender-check':
            return <CalenderCheck width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'calender-todo':
            return <CalenderTodo width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'arrow-right':
            return <ArrowRightUpLine width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'arrow-down':
            return <ArrowLeftDownLine width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'header-home':
            return <HeaderHome width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'header-calender':
            return <HeaderCalender width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'header-notes':
            return <HeaderNotes width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'header-report':
            return <HeaderReport width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'header-employee':
            return <HeaderEmployee width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'home-smile':
            return <HomeSmile width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'addition':
            return <Addition width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'edit':
            return <Edit width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'check':
            return <Check width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'dropdown-arrow':
            return <DropdownArrow width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'twitter':
            return <Twitter width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'instagram':
            return <Instagram width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'linked-in':
            return <LinkedIn width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'ellipse':
            return <Ellipse width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'pencil':
            return <Pencil width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'notes':
            return <StickyNote width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'message':
            return <Message width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'restart-line':
            return <RestartLine width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'file-close':
            return <FileClose width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'filled-check':
            return <FilledCheck width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'paper':
            return <Paper width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'alert':
            return <Alert width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'deny-request':
            return <DenyRequest width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'approve-request':
            return <ApproveRequest width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'approve-check':
            return <ApproveCheck width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'circle-close-delete':
            return <CircleCloseDelete width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'paper-with-circle-back-slash':
            return <PaperWithCircleBackSlash width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'calender-week':
            return <CalenderWeek width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'calender-month':
            return <CalenderMonth width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'radio':
            return <Radio width={width} height={height} fill={fill} styles={styles} {...rest} />;
        case 'save-schedule-template':
            return <SaveScheduleTemplate width={width} height={height} fill={fill} styles={styles} {...rest} />;
        default:
            return <div>Icon</div>;
    }
};
