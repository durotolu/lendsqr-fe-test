import UserItem from "../types";

const user_stats = (data: UserItem[]) => {
  let total = data.length;
  let active = 0;
  let loans = 0;
  let savings = 0;
  for (let user of data) {
    if (user.metaData.status === "Active") active++;
    if (user.metaData.loans) loans++;
    if (user.metaData.savings) savings++;
  }
  return [total, active, loans, savings];
};

export default user_stats;
