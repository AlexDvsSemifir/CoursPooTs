import Chat from "./Classes/Chat";
import Dauphin from "./Classes/Dauphin";

const chat: Chat = new Chat('Ducon', 5, '1992/07/20')
chat.display();
chat.miauler();
chat.marcher();
chat.respirerHorsDeLeau();

const dauphin: Dauphin = new Dauphin('Flipper', 10, '1992/07/20')
dauphin.display();
dauphin.cliquetter();
dauphin.nager();
dauphin.resipirerSousLeau();