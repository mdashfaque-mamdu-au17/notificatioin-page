import MarkWebber from '../assets/avatar-mark-webber.webp';
import AngelaGray from '../assets/avatar-angela-gray.webp';
import JacobThompson from '../assets/avatar-jacob-thompson.webp';
import RizkyHasanuddin from '../assets/avatar-rizky-hasanuddin.webp';
import KimberlySmith from '../assets/avatar-kimberly-smith.webp';
import NathanPeterson from '../assets/avatar-nathan-peterson.webp';
import AnnaKim from '../assets/avatar-anna-kim.webp';
import ChessPicture from '../assets/image-chess.webp';

export const notificationData = [
  {
    id: 1,
    personName: 'Mark Webber',
    personImage: MarkWebber,
    reactionType: 'post',
    reactionMessage: 'reacted to your recent post',
    post: 'My first tournament today!',
    readStatus: false,
    timeAgo: '1m'
  },
  {
    id: 2,
    personName: 'Angela Gray',
    personImage: AngelaGray,
    reactionType: 'follow',
    reactionMessage: 'followed you',
    readStatus: false,
    timeAgo: '5m'
  },
  {
    id: 3,
    personName: 'Jacob Thompson',
    personImage: JacobThompson,
    reactionType: 'group',
    reactionMessage: 'has joined your group',
    group: 'Chess Club',
    readStatus: false,
    timeAgo: '1 day'
  },
  {
    id: 4,
    personName: 'Rizky Hasanuddin',
    personImage: RizkyHasanuddin,
    reactionType: 'message',
    reactionMessage: 'sent you a private message',
    message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
    readStatus: true,
    timeAgo: '5 days'
  },
  {
    id: 5,
    personName: 'Kimberly Smith',
    personImage: KimberlySmith,
    reactionType: 'commented',
    reactionMessage: 'commented on your picture',
    commentImage: ChessPicture,
    readStatus: true,
    timeAgo: '1 week'
  },
  {
    id: 6,
    personName: 'Nathan Peterson',
    personImage: NathanPeterson,
    reactionType: 'post',
    reactionMessage: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    readStatus: true,
    timeAgo: '2 weeks'
  },
  {
    id: 7,
    personName: 'Anna Kim',
    personImage: AnnaKim,
    reactionType: 'group',
    reactionMessage: 'left the group',
    group: 'Chess Club',
    readStatus: true,
    timeAgo: '2 weeks'
  }
];
