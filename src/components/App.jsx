import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import { data } from "./Statistics/data";
import { FriendList } from "./Friends/FriendList";
import friends from "./Friends/friends.json";
import { TransactionsHistory } from "./Transactions/TransactionsHistory";
import transactions from "./Transactions/transactions.json";
import { GlobalStyle } from "../constants/GlobalStyles";
import { Container } from "./AppStyled";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
